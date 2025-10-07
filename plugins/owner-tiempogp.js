let handler = async (m, { conn, args}) => {
  if (!m.isGroup) return conn.reply(m.chat, '❌ Este comando solo puede usarse en grupos.', m);
  if (!args[0]) return conn.reply(m.chat, '⏱️ Ingresa el tiempo en formato: `día:hora:minuto:segundo`\nEjemplo: `.timegp 0:1:30:0` para 1 hora y 30 minutos.', m);

  let [d, h, min, sec] = args[0].split(':').map(v => parseInt(v));
  if ([d, h, min, sec].some(v => isNaN(v))) return conn.reply(m.chat, '❌ Formato inválido. Usa `día:hora:minuto:segundo`.', m);

  let totalMs = ((d * 86400) + (h * 3600) + (min * 60) + sec) * 1000;
  if (totalMs <= 0) return conn.reply(m.chat, '❌ El tiempo debe ser mayor a 0 segundos.', m);

  let tiempo = `${d}d ${h}h ${min}m ${sec}s`;

  await conn.sendMessage(m.chat, {
    text: `✅ *Tiempo establecido: ${tiempo}*\nEl bot permanecerá en este grupo hasta que se cumpla el tiempo.\n\n🕒 *Cuenta regresiva iniciada...*`,
    mentions: [m.sender]
});

  setTimeout(async () => {
    await conn.sendMessage(m.chat, {
      text: `⏳ *Tiempo finalizado.*\nEl bot ha cumplido su permanencia de ${tiempo} en este grupo.\n👋 ¡Hasta pronto!`,
      mentions: [m.sender]
});
    await conn.groupLeave(m.chat);
}, totalMs);
};

handler.help = ['timegp <día:hora:minuto:segundo>'];
handler.tags = ['owner'];
handler.command = /^timegp$/i;
handler.rowner = true;

export default handler;
