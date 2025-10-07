//▪CÓDIGO BY HASHIRAMA PRROS XD▪
//▪WHATSAPP MODS▪

let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
  try {
    let url = 'https://api.nekorinn.my.id/random/loli'
    await conn.sendFile(m.chat, url, 'loli.jpg', '🍬 *Aquí tienes una loli*', m)
  } catch (e) {
    await conn.sendMessage(m.chat, {
      text: '*[❗] No se pudo obtener la imagen, intenta más tarde por favor.*',
      quoted: m
    })
  } finally {
    await conn.sendMessage(m.chat, { react: { text: '', key: m.key } })
  }
}

handler.help = ['loli']
handler.command = ['loli', 'lolis', 'loly']
handler.tags = ['anime']
handler.limit = true
handler.register = true

export default handler