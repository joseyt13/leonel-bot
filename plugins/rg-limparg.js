let handler = async (m, { conn}) => {
  try {
    let total = Object.keys(global.db.data.users).length
    global.db.data.users = {} // Elimina todos los registros

    await conn.sendMessage(m.chat, {
      text: `🧹 *Registros eliminados correctamente.*\n\nSe han limpiado ${total} usuarios registrados del sistema.`,
      contextInfo: {
        externalAdReply: {
          title: '🗑️ Limpieza de registros',
          body: 'Base de datos reiniciada con éxito',
          thumbnailUrl: 'https://cdn.yupra.my.id/yp/dpi4ktu8.jpg',
          mediaType: 1,
          sourceUrl: 'https://github.com/Dev-fedexyz17/Nagi-Bot',
          renderLargerThumbnail: true
}
}
}, { quoted: m})
} catch (e) {
    m.reply('❌ Error al intentar limpiar los registros.')
}
}

handler.help = ['limpiar']
handler.tags = ['registro']
handler.command = ['limpiar']
handler.rowner = true;

export default handler
