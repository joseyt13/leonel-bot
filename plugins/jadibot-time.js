// Código creado x Dev-fedexyz 

import chalk from 'chalk'

/**
 * Inicia el temporizador que actualiza la biografía del subbot
 * @param {import('@whiskeysockets/baileys').WASocket} conn - Conexión del subbot
 * @param {string} packname - Nombre del paquete o bot
 * @param {string} stopped - Estado del bot ('close' si está apagado)
 */
export default function jadibotTime(conn, packname, stopped) {
  if (!conn ||!conn.user) {
    console.log(chalk.red('⚽ Conexión inválida para Time'));
    return;
}

  setInterval(async () => {
    if (stopped === 'close' ||!conn ||!conn?.user) return;

    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const bio = `${packname} | 🫛 Uptime: ${uptime}`;

    try {
      await conn.updateProfileStatus(bio);
      console.log(chalk.green(`✅ Biografía actualizada: ${bio}`));
} catch (err) {
      console.log(chalk.gray(`→ No se pudo actualizar la biografía del subbot`));
}
}, 60000);
}

function clockString(ms) {
  const d = isNaN(ms)? '--': Math.floor(ms / 86400000);
  const h = isNaN(ms)? '--': Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms)? '--': Math.floor(ms / 60000) % 60;
  const s = isNaN(ms)? '--': Math.floor(ms / 1000) % 60;

  return `${d.toString().padStart(2, '0')}d ` +
         `${h.toString().padStart(2, '0')}h ` +
         `${m.toString().padStart(2, '0')}m ` +
         `${s.toString().padStart(2, '0')}s`;
}
