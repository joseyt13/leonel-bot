import fs from 'fs'
import path from 'path'

let handler = async (m, { conn, isOwner}) => {
  if (!isOwner) return conn.reply(m.chat, '❌ Solo el creador del bot puede cambiar el banner.', m)

  const q = m.quoted || m
  const mime = (q.msg || q).mimetype || ''
  if (!mime ||!/image\/(jpe?g|png)/.test(mime)) {
    return conn.reply(m.chat, '❀ Responde a una imagen (.jpg o.png) para establecer como nuevo banner.', m)
}

  const buffer = await q.download()
  const bannerPath = path.join(process.cwd(), './media/banner.jpg')

  fs.writeFileSync(bannerPath, buffer)
  conn.reply(m.chat, '✅ Banner actualizado correctamente. El menú ahora usará esta imagen.', m)
}

handler.help = ['setbanner']
handler.tags = ['owner']
handler.command = ['setbanner']
handler.owner = true

export default handler
