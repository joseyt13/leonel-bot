let handler = async (m, { conn}) => {
  try {
    await conn.sendMessage(m.chat, {
      text: `╭─❒ *Reiniciando Nagi-Bot...*\n┃➪ Cerrando procesos internos\n┃➪ Limpiando memoria temporal\n┃➪ Reinicio en curso...\n╰───────────────────────`,
      mentions: [m.sender]
});

    setTimeout(async () => {
      await conn.sendMessage(m.chat, {
        text: `✅ *Ya fui reiniciado exitosamente.*\nGracias por tu paciencia, *${conn.getName(m.sender)}* 💠`,
        mentions: [m.sender]
});
      process.exit(0);
}, 3000);

} catch (error) {
    console.error('[ERROR][REINICIO]', error);
    await conn.reply(m.chat, `❌ Error al intentar reiniciar:\n${error.message || error}`, m);
}
};

handler.command = /^rest$/i;
handler.rowner = true;

export default handler;
