let handler = async (m, { conn, usedPrefix, command }) => {
    let bot = conn.user.jid;
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    if (/image/.test(mime)) {
        let img = await q.download();
        if (!img) return m.reply("Imagen no encontrada");
        await conn.updateProfilePicture(bot, img);
        conn.reply(m.chat, "*¡Foto de perfil del bot cambiada exitosamente!*", m);
    } else return m.reply(`Envía o responde a una imagen con el texto *${usedPrefix + command}*`);
};

handler.help = ["setppbot"];
handler.tags = ["owner"];
handler.command = ["setppbot", "setpp"]
handler.mods = true;

export default handler;