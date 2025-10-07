import fetch from 'node-fetch'
import moment from 'moment'

const vcard = `BEGIN:VCARD
VERSION:3.0
N:;ttname;;;
FN:ttname
item1.TEL;waid=13135550002:+1 (313) 555-0002
item1.X-ABLabel:Celular
END:VCARD`

const qkontak = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
},
  message: {
    contactMessage: {
      displayName: "Meta Ai",
      vcard
}
}
}

const handler = async (m, { conn, usedPrefix}) => {
  try {
    await m.react('🕒')

    const res = await fetch('https://api.github.com/repos/Dev-fedexyz17/Nagi-Bot')
    if (!res.ok) throw new Error('No se pudo obtener los datos del repositorio.')

    const json = await res.json()
    const txt = `*乂  S C R I P T  -  M A I N  乂*\n\n` +
      `✩ *Nombre*: ${json.name}\n` +
      `✩ *Visitas*: ${json.watchers_count}\n` +
      `✩ *Peso*: ${(json.size / 1024).toFixed(2)} MB\n` +
      `✩ *Actualizado*: ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n` +
      `✩ *Url*: ${json.html_url}\n` +
      `✩ *Forks*: ${json.forks_count}\n` +
      `✩ *Stars*: ${json.stargazers_count}\n\n` +
      `> *Dev-fedexyz*`

    const catalogo = { url: 'https://cdn.yupra.my.id/yp/6sw4yju9.jpg'} // ✅ imagen.jpg

    await conn.sendMessage(m.chat, {
      image: catalogo,
      caption: txt,
...global.rcanal
}, { quoted: qkontak})

    await m.react('✔️')

} catch (err) {
    await m.react('✖️')
    await conn.sendMessage(m.chat, {
      text: `⚠︎ Se ha producido un problema.\n> Usa *${usedPrefix}report* para informarlo.\n\n${err.message}`,
...global.rcanal
}, { quoted: m})
}
}

handler.help = ['sc', 'script']
handler.tags = ['main']
handler.command = ['sc', 'script']

export default handler
