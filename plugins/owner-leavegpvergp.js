let handler = async (m, { conn, command}) => {
  const chats = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us'))

  if (chats.length === 0) {
    await m.reply('❌ ɴᴏ ᴇꜱᴛᴏʏ ᴇɴ ɴɪɴɢᴜ́ɴ ɢʀᴜᴘᴏ ᴀᴄᴛᴜᴀʟᴍᴇɴᴛᴇ.')
    return
}

  if (command === 'leavegp') {
    await m.reply(`🚪 ꜱᴀʟɪᴇɴᴅᴏ ᴅᴇ ${chats.length} ɢʀᴜᴘᴏꜱ...`)
    for (const [jid] of chats) {
      try {
        await conn.groupLeave(jid)
        await conn.sendMessage(jid, { text: '👋 ᴍᴇ ʀᴇᴛɪʀᴏ ᴅᴇʟ ɢʀᴜᴘᴏ. ¡ʜᴀꜱᴛᴀ ᴘʀᴏɴᴛᴏ!'})
} catch (e) {
        console.error(`❌ ᴇʀʀᴏʀ ᴀʟ ꜱᴀʟɪʀ ᴅᴇʟ ɢʀᴜᴘᴏ ${jid}:`, e)
}
}
    await m.react('✅')
}

  if (command === 'vergps') {
    const lista = chats.map(([jid, chat]) => `📍 *ɴᴏᴍʙʀᴇ:* ${chat.subject || 'ꜱɪɴ ɴᴏᴍʙʀᴇ'}\n🆔 *ID:* ${jid}`)
    const mensaje = `👥 *ɢʀᴜᴘᴏꜱ ᴅᴏɴᴅᴇ ᴇꜱᴛᴏʏ ᴀᴄᴛᴜᴀʟᴍᴇɴᴛᴇ:*\n\n${lista.join('\n\n')}`
    await m.reply(mensaje)
    await m.react('📋')
}
}

handler.command = ['leavegp', 'vergps']
handler.owner = true

export default handler
