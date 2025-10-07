let handler = async (m, { conn, text, participants }) => {
    let isiPesan = text ? `📝 *Mensaje del administrador:*\n${text}` : "*––––––『 TAG A Todos 』––––––*";
    let teks = `${isiPesan}`;
    for (let mem of participants) {
        teks += `\n@${mem.id.split("@")[0]}`;
    }
    await conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};

handler.help = ["tagall"];
handler.tags = ["grupo"];
handler.command = ["tagall", 'all'];
handler.admin = true
handler.group = true

export default handler;