import fetch from 'node-fetch'

const handler = async (event, { conn}) => {
  const { participants, action, id} = event
  if (action!== 'add') return

  for (const user of participants) {
    try {
      const username = user.split('@')[0]
      const groupMetadata = await conn.groupMetadata(id)
      const groupName = groupMetadata.subject
      const memberCount = groupMetadata.participants.length
      const avatar = 'https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg'
      const background = 'https://cdn.yupra.my.id/yp/dpi4ktu8.jpg'
      const guildIcon = 'https://github.com/Neveloopp.png'
      const apiKey = 'Dev-fedexyz'

      const apiUrl = `https://api-nv.eliasaryt.pro/api/generate/welcome-image?username=${encodeURIComponent(username)}&guildName=${encodeURIComponent(groupName)}&memberCount=${memberCount}&avatar=${encodeURIComponent(avatar)}&background=${encodeURIComponent(background)}&guildIcon=${encodeURIComponent(guildIcon)}&key=${apiKey}`

      const res = await fetch(apiUrl)
      if (!res.ok) throw new Error('No se pudo generar la imagen de bienvenida.')
      const buffer = await res.buffer()

      const caption = `👋 ʜᴏʟᴀ @${username}\n✨ ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀʟ ɢʀᴜᴘᴏ *${groupName}* ✨\nꜱᴏʏ ɴᴀɢɪ-ʙᴏᴛ, ᴇꜱᴛᴏʏ ᴀQᴜɪ́ ᴘᴀʀᴀ ᴀʏᴜᴅᴀʀᴛᴇ 💎`

      await conn.sendMessage(id, {
        image: buffer,
        caption,
        mentions: [user]
})

} catch (error) {
      console.error(`Error en welcome.js: ${error.message}`)
}
}
}

export default handler
