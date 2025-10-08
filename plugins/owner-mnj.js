let handler = async (m, { conn, text, isOwner}) => {
  if (!isOwner) return conn.reply(m.chat, '❌ Solo el owner puede usar este comando.', m)
  if (!text) return conn.reply(m.chat, '❀ Escribe el mensaje del anuncio.\nEjemplo: *.anuncio El bot estará en mantenimiento.*', m)

  const users = Object.keys(global.db.data.users)
  let enviados = 0, fallidos = 0

  for (let jid of users) {
    try {
      await conn.sendMessage(jid, {
        text: `📢 *ANUNCIO GLOBAL*\n\n${text}\n\n— Enviado por el owner del bot.`,
})
      enviados++
} catch (e) {
      fallidos++
}
}

  conn.reply(m.chat, `✅ Anuncio enviado a ${enviados} usuarios.\n⚠️ Falló en ${fallidos} usuarios.`, m)
}

handler.help = ['anuncio <mensaje>']
handler.tags = ['owner']
handler.command = ['anuncio']
handler.owner = true

export default handler
