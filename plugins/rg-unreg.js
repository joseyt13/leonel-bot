import { createHash} from 'crypto'

let handler = async (m, { conn}) => {
  const user = global.db.data.users[m.sender]

  if (!user.registered) {
    return m.reply(`ꕥ No estás registrado.\n\n➪ Usa *.reg Nombre.Edad* para registrarte.`)
}

  const nombreAnterior = user.name || 'Desconocido'
  const edadAnterior = user.age || '???'

  user.registered = false
  user.name = ''
  user.age = 0
  user.regTime = -1
  user.exp = 0
  user.money = 0

  let pp = 'https://files.cloudkuimages.guru/images/LIMw5rVy.jpg'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
} catch (e) {}

  const mensaje = `ꕥ *Registro eliminado correctamente*\n\n➪ Nombre anterior: *${nombreAnterior}*\n➪ Edad registrada: *${edadAnterior} años*\n\nꕥ Si deseas registrarte nuevamente, usa *#reg Nombre.Edad*\n➪ Gracias por usar el bot.`

  await conn.sendMessage(m.chat, {
    text: mensaje,
    mentions: [m.sender],
    contextInfo: {
      externalAdReply: {
        title: 'ꕥ Registro eliminado',
        body: `➪ Usuario: ${nombreAnterior}`,
        thumbnailUrl: pp,
        mediaType: 1,
        renderLargerThumbnail: true,
        sourceUrl: pp
}
}
}, { quoted: m})
}

handler.help = ['unreg']
handler.tags = ['info']
handler.command = ['unreg', 'adios', 'regdel']
handler.register = true

export default handler
