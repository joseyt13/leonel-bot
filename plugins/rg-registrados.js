const handler = async (m, { conn, command}) => {
  try {
    const users = Object.entries(global.db.data.users)
.filter(([_, user]) => user.registered && user.regTime)
.map(([jid, user]) => {
        const name = user.name || 'ꜱɪɴ ɴᴏᴍʙʀᴇ'
        const date = new Date(user.regTime).toLocaleString('es', {
          timeZone: 'America/Argentina/Buenos_Aires',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
})
        return `✦ ɴᴏᴍʙʀᴇ: *${name}*\n✦ ꜰᴇᴄʜᴀ: ${date}`
})

    const total = users.length
    const text = users.length
? `*「 ʀᴇɢɪꜱᴛʀᴏꜱ ᴇɴ ᴇʟ ʙᴏᴛ 」*\n\n${users.join('\n\n')}\n\n✦ ᴛᴏᴛᴀʟ ʀᴇɢɪꜱᴛʀᴀᴅᴏꜱ: *${total}*`
: '✧ ɴᴏ ʜᴀʏ ᴜꜱᴜᴀʀɪᴏꜱ ʀᴇɢɪꜱᴛʀᴀᴅᴏꜱ ᴀᴜɴ.'

    await conn.sendMessage(m.chat, {
      text,
      contextInfo: {
        externalAdReply: {
          title: '© ɴᴀɢɪ-ʙᴏᴛᴠ𝟷',
          body: 'ʟɪꜱᴛᴀ ᴅᴇ ᴜꜱᴜᴀʀɪᴏꜱ ʀᴇɢɪꜱᴛʀᴀᴅᴏꜱ',
          thumbnailUrl: 'https://cdn.yupra.my.id/yp/dpi4ktu8.jpg',
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: 'https://github.com/hashirama-dev'
}
}
}, { quoted: m})

} catch (error) {
    m.reply(`⚠︎ ᴇʀʀᴏʀ ᴀʟ ᴄᴀʀɢᴀʀ ʟᴏꜱ ʀᴇɢɪꜱᴛʀᴏꜱ.\n> ᴜꜱᴀ *${usedPrefix}report* ᴘᴀʀᴀ ɪɴꜰᴏʀᴍᴀʀʟᴏ.\n\n${error.message}`)
}
}

handler.command = ['registros']
handler.help = ['registros', ',listarg']
handler.tags = ['info']

export default handler
