// Código creado x Dev-fedexyz 

import chalk from 'chalk'

function clockString(ms) {
  const d = isNaN(ms)? '--': Math.floor(ms / 86400000)
  const h = isNaN(ms)? '--': Math.floor(ms / 3600000) % 24
  const m = isNaN(ms)? '--': Math.floor(ms / 60000) % 60
  const s = isNaN(ms)? '--': Math.floor(ms / 1000) % 60
  return `${d.toString().padStart(2, '0')}d ` +
         `${h.toString().padStart(2, '0')}h ` +
         `${m.toString().padStart(2, '0')}m ` +
         `${s.toString().padStart(2, '0')}s`
}

export default function jadibotTime(conn, packname, stopped) {
  setInterval(async () => {
    if (stopped === 'close' ||!conn ||!conn?.user) return
    const _uptime = process.uptime() * 1000
    const uptime = clockString(_uptime)
    const bio = `${packname} | 🫛 Uptime: ${uptime}`
    await conn.updateProfileStatus(bio).catch(() => {
      console.log(chalk.gray('→ No se pudo actualizar la biografía del subbot'))
})
}, 60000)
}

jadibotTime(global.conn, global.packname, global.stopped)
