const handler = async (m, { conn, isAdmin, isBotAdmin, isROwner, usedPrefix}) => {
  if (!isROwner) {
    return conn.sendMessage(m.chat, {
      text: '❀ Este comando solo puede usarlo el propietario del bot.',
...global.rcanal
}, { quoted: m})
}

  if (!isBotAdmin) {
    return conn.sendMessage(m.chat, {
      text: 'ꕥ No puedo promoverte porque no soy administrador del grupo.',
...global.rcanal
}, { quoted: m})
}

  if (isAdmin) {
    return conn.sendMessage(m.chat, {
      text: '✦ Ya tienes privilegios de administrador.',
...global.rcanal
}, { quoted: m})
}

  try {
    await m.react('🕒')
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
    await m.react('✔️')

    await conn.sendMessage(m.chat, {
      text: `❀ Has sido promovido como administrador del grupo con éxito.\n➪ Disfruta tus poderes, ${m.pushName || usuario}.`,
...global.rcanal
}, { quoted: m})

} catch (error) {
    await m.react('✖️')
    await conn.sendMessage(m.chat, {
      text: `⚠︎ Se ha producido un problema.\n➪ Usa *${usedPrefix}report* para informarlo.\n\n${error.message}`,
...global.rcanal
}, { quoted: m})
}
}

handler.tags = ['owner']
handler.help = ['autoadmin']
handler.command = ['autoadmin']
handler.group = true

export default handler
