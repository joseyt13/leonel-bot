const vcard = `BEGIN:VCARD
VERSION:3.0
N:;ttname;;;
FN:ttname
item1.TEL;waid=13135550002:+1 (313) 555-0002
item1.X-ABLabel:Celular
END:VCARD`

const qkontak = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
},
  message: {
    contactMessage: {
      displayName: "Meta Ai",
      vcard
}
}
}

const handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const opciones = `☕ *ON / OFF*

${usedPrefix + command} welcome
${usedPrefix + command} antilink
${usedPrefix + command} nsfw
${usedPrefix + command} antiprivado`

  const isEnable = /true|enable|(turn)?on|1/i.test(command)
  const chat = global.db.data.chats[m.chat]
  const bot = global.db.data.settings[conn.user.jid] || {}
  const type = (args[0] || '').toLowerCase()
  let isAll = false

  const validarGrupoAdmin = () => {
    if (!m.isGroup) {
      if (!isOwner) {
        global.dfail('group', m, conn)
        throw false
}
} else if (!isAdmin &&!isOwner) {
      global.dfail('admin', m, conn)
      throw false
}
}

  const validarOwner = () => {
    if (!isOwner) {
      global.dfail('owner', m, conn)
      throw false
}
}

  const validarROwner = () => {
    if (!isROwner) {
      global.dfail('rowner', m, conn)
      throw false
}
}

  switch (type) {
    case 'welcome': case 'bienvenida':
      validarGrupoAdmin()
      chat.welcome = isEnable
      break

    case 'antilink': case 'antienlace':
      validarGrupoAdmin()
      chat.antiLink = isEnable
      break

    case 'nsfw': case 'nsfwhot': case 'nsfwhorny':
      validarGrupoAdmin()
      chat.nsfw = isEnable
      break

    case 'antiprivado': case 'antiprivate': case 'privado':
      isAll = true
      validarROwner()
      bot.antiPrivate = isEnable
      break

    default:
      if (!/[01]/.test(command)) {
        return conn.sendMessage(m.chat, {
          text: opciones,
...global.rcanal
}, { quoted: qkontak})
}
      throw false
}

  return conn.sendMessage(m.chat, {
    text: `⚔️ *La función "${type}" ha sido ${isEnable? 'activada': 'desactivada'} ${isAll? 'en todo el bot': 'en este chat'}.*`,
...global.rcanal
}, { quoted: qkontak})
}

handler.help = ['enable', 'disable'].map(cmd => `${cmd} <opción>`)
handler.tags = ['owner', 'group']
handler.command = ['enable', 'disable', 'on', 'off']

export default handler
