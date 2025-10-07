let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted || !/image/.test(m.quoted.mimetype)) 
        return m.reply(`🍙 *Responde o envía una imagen con el comando: ${usedPrefix + command}`)
    try {
        let media = await m.quoted.download()
        await conn.updateProfilePicture(m.chat, media)
    } catch {
        m.reply('🍩 *¡Error al actualizar la foto del grupo!*')
    }
}

handler.help = ['setppgc']
handler.tags = ['grupos']
handler.command = ['setppgc', 'setppgrupo', 'setppgroup']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler