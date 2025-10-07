import axios from 'axios'

let handler = async (m, { conn }) => {
 
  const res = await axios.get('https://api.waifu.pics/sfw/waifu')
  const image = res.data.url

  const texto = `
🎉 ¡Reclamaste tu waifu con éxito!

💌 Disfrútala y cuídala mucho.
`.trim()

  await conn.sendMessage(m.chat, {
    image: { url: image },
    caption: texto
  }, { quoted: m })
}

handler.command = ['waifurequest', 'rw', 'w']
handler.help = ['waifu']
handler.tags = ['anime']
handler.limit = true
handler.register = true

export default handler