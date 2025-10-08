import fs from 'fs'
import { WAMessageStubType} from '@whiskeysockets/baileys'

const fallbackImage = 'https://cdn.yupra.my.id/yp/dpi4ktu8.jpg'

async function generarBienvenida({ conn, userId, groupMetadata}) {
  const username = `@${userId.split('@')[0]}`
  let pp
  try {
    pp = await conn.profilePictureUrl(userId, 'image')
} catch {
    pp = fallbackImage
}

  const fecha = new Date().toLocaleDateString("es-ES", {
    timeZone: "America/Mexico_City",
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})

  const groupSize = groupMetadata.participants.length + 1
  const caption = `❀ Bienvenido a *"_${groupMetadata.subject}_"*\n✰ _Usuario_ » ${username}\nꕥ _Ahora somos ${groupSize} Miembros._\nꕥ Fecha » ${fecha}\n૮꒰ ˶• ᴗ •˶꒱ა Disfruta tu estadía en el grupo!\n> *➮ Usa _#help_ para ver los comandos disponibles.*`

  return { pp, caption, mentions: [userId]}
}

async function generarDespedida({ conn, userId, groupMetadata}) {
  const username = `@${userId.split('@')[0]}`
  let pp
  try {
    pp = await conn.profilePictureUrl(userId, 'image')
} catch {
    pp = fallbackImage
}

  const fecha = new Date().toLocaleDateString("es-ES", {
    timeZone: "America/Mexico_City",
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})

  const groupSize = groupMetadata.participants.length - 1
  const caption = `❀ Adiós de *"_${groupMetadata.subject}_"*\n✰ _Usuario_ » ${username}\nꕥ _Ahora somos ${groupSize} Miembros._\nꕥ Fecha » ${fecha}\n(˶˃⤙˂˶) Te esperamos pronto!\n> *➮ Usa _#help_ para ver los comandos disponibles.*`

  return { pp, caption, mentions: [userId]}
}

let handler = m => m
handler.before = async function (m, { conn, groupMetadata}) {
  if (!m.messageStubType ||!m.isGroup) return!0

  const chat = global.db.data.chats[m.chat]
  const userId = m.messageStubParameters[0]

  if (chat.welcome && m.messageStubType == WAMessageStubType.GROUP_PARTICIPANT_ADD) {
    const { pp, caption, mentions} = await generarBienvenida({ conn, userId, groupMetadata})
    await conn.sendMessage(m.chat, {
      image: { url: pp},
      caption,
      contextInfo: { mentionedJid: mentions}
}, { quoted: null})
}

  if (chat.welcome && (
    m.messageStubType == WAMessageStubType.GROUP_PARTICIPANT_REMOVE ||
    m.messageStubType == WAMessageStubType.GROUP_PARTICIPANT_LEAVE
)) {
    const { pp, caption, mentions} = await generarDespedida({ conn, userId, groupMetadata})
    await conn.sendMessage(m.chat, {
      image: { url: pp},
      caption,
      contextInfo: { mentionedJid: mentions}
}, { quoted: null})
}
}

export { generarBienvenida, generarDespedida}
export default handler
