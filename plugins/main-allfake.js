import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import path from 'path'

const { generateWAMessageFromContent, prepareWAMessageMedia, proto} = pkg

const catalogo = path.join(process.cwd(), 'src', 'catalogo.jpg') // ✅ Definido correctamente

var handler = m => m
handler.all = async function (m) {

  global.getBuffer = async function getBuffer(url, options = {}) {
    try {
      const res = await axios({
        method: 'get',
        url,
        headers: {
          'DNT': 1,
          'User-Agent': 'GoogleBot',
          'Upgrade-Insecure-Request': 1
},
...options,
        responseType: 'arraybuffer'
})
      return res.data
} catch (e) {
      console.log(`Error: ${e}`)
}
}

  global.creador = 'wa.me/5491137612743'
  global.ofcbot = `Wa.me/${conn.user.jid.split('@')[0]}?text=.code`
  global.namechannel = 'ＮＡＧＩＢＯＴ－Ｖ¹'
  global.fotoperfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => catalogo) // ✅ Corregido

  global.canalIdM = [
    '120363402097425674@newsletter',
    '120363423335018677@newsletter'
  ]
  global.canalNombreM = [
    'ＮＡＧＩＢＯＴ－Ｖ¹',
    '☕ 𝑴𝒐𝒐𝒏𝒇𝒓𝒂𝒓𝒆 𝒕𝒆𝒂𝒎'
  ]
  global.channelRD = await getRandomChannel()

  global.d = new Date(new Date + 3600000)
  global.locale = 'es'
  global.dia = d.toLocaleDateString(locale, { weekday: 'long'})
  global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric'})
  global.mes = d.toLocaleDateString('es', { month: 'long'})
  global.año = d.toLocaleDateString('es', { year: 'numeric'})
  global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

  global.rwait = '🕒'
  global.done = '✅'
  global.error = '✖️'
  global.msm = '⚠️︎'

  global.emoji = '*(≧▽≦) 🎋*'
  global.emoji2 = '*(✿╹◡╹)ﾉ ❤️*'
  global.emoji3 = '*ദ്ദി ᵔ ᴗ ᵔ) 🎄*'
  global.emoji4 = '*(＠＾◡＾) ✨️*'
  global.emoji5 = '*∑(;°Д°) ☃️*'
  global.emojis = [emoji, emoji2, emoji3, emoji4].getRandom()

  global.wait1 = '*𝘌𝘴𝘱𝘦𝘳𝘢 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰...*'
  global.wait2 = '*𝘌𝘴𝘱𝘦𝘳𝘢 𝘶𝘯 𝘮𝘰𝘮𝘦𝘯𝘵𝘰 𝘯𝘰 𝘵𝘦 𝘢𝘱𝘳𝘦𝘴𝘶𝘳𝘦𝘴...*'

  const canal = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
  const comunidad = 'https://chat.whatsapp.com/I0dMp2fEle7L6RaWBmwlAa'
  const git = 'https://github.com/El-brayan502'
  const github = 'https://github.com/El-brayan502'
  const correo = 'brayanfree881@gmail.com'
  global.redes = [canal, comunidad, git, github, correo].getRandom()

  const category = 'imagen'
  const db = './src/database/db.json'
  const db_ = JSON.parse(fs.readFileSync(db))
  const random = Math.floor(Math.random() * db_.links[category].length)
  const randomlink = db_.links[category][random]
  const response = await fetch(randomlink)
  const rimg = await response.buffer()
  global.icons = rimg

  const ase = new Date()
  let hour = ase.getHours()
  switch (true) {
    case hour>= 0 && hour < 3: hour = '𝘍𝘦𝘭𝘪𝘻 𝘯𝘰𝘤𝘩𝘦 💤💤'; break
    case hour>= 3 && hour < 13: hour = '𝘉𝘶𝘦𝘯 𝘥𝘪́𝘢 🖐🏻🌤️'; break
    case hour>= 13 && hour < 18: hour = '𝘉𝘶𝘦𝘯𝘢𝘴 𝘵𝘢𝘳𝘥𝘦𝘴 🤹🏻✨'; break
    default: hour = '𝘍𝘦𝘭𝘪𝘻 𝘯𝘰𝘤𝘩𝘦 💤💤'
}
  global.saludo = hour

  global.nombre = m.pushName || 'Anónimo'
  global.taguser = '@' + m.sender.split('@')[0]
  const more = String.fromCharCode(8206)
  global.readMore = more.repeat(850)

  global.packsticker = `▸ ${dia}\n▸ ${tiempo}\n▸ ${fecha}\n▸ ${botname}\n`
  global.packsticker2 = `\nＮＡＧＩＢＯＴ－Ｖ²`

  global.fkontak = {
    key: {
      participant: '0@s.whatsapp.net',
...(m.chat? { remoteJid: '6285600793871-1614953337@g.us'}: {})
},
    message: {
    contactMessage: {
        displayName: `${nombre}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${nombre},;;;\nFN:${nombre},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        jpegThumbnail: null,
        thumbnail: null,
        sendEphemeral: true
}
}
}

  global.fake = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.canalIdM,
        newsletterName: global.canalNombreM,
        serverMessageId: -1
}
}
}

  global.icono = [
    'https://cdn.yupra.my.id/yp/962jca9m.jpg',
    'https://cdn.yupra.my.id/yp/ykhrquj7.jpg'
  ].getRandom()

global.rcanal = { contextInfo: { externalAdReply: { title: botname, mediaType: 2, previewType: "VIDEO", thumbnail: icono, mediaUrl: 'https://youtu.be/FKVuVneuwtg', sourceUrl: gp1 }}}

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

async function getRandomChannel() {
  const randomIndex = Math.floor(Math.random() * canalIdM.length)
  const id = canalIdM[randomIndex]
  const name = canalNombreM[randomIndex]
  return { id, name}
    }  const db = './src/database/db.json'
  const db_ = JSON.parse(fs.readFileSync(db))
  const random = Math.floor(Math.random() * db_.links[category].length)
  const randomlink = db_.links[category][random]
  const response = await fetch(randomlink)
  const rimg = await response.buffer()
  global.icons = rimg

  const ase = new Date()
  let hour = ase.getHours()
  switch (true) {
    case hour>= 0 && hour < 3: hour = '𝘍𝘦𝘭𝘪𝘻 𝘯𝘰𝘤𝘩𝘦 💤💤'; break
    case hour>= 3 && hour < 13: hour = '𝘉𝘶𝘦𝘯 𝘥𝘪́𝘢 🖐🏻🌤️'; break
    case hour>= 13 && hour < 18: hour = '𝘉𝘶𝘦𝘯𝘢𝘴 𝘵𝘢𝘳𝘥𝘦𝘴 🤹🏻✨'; break
    default: hour = '𝘍𝘦𝘭𝘪𝘻 𝘯𝘰𝘤𝘩𝘦 💤💤'
}
  global.saludo = hour

  global.nombre = m.pushName || 'Anónimo'
  global.taguser = '@' + m.sender.split('@')[0]
  const more = String.fromCharCode(8206)
  global.readMore = more.repeat(850)

  global.packsticker = `▸ ${dia}\n▸ ${tiempo}\n▸ ${fecha}\n▸ ${botname}\n`
  global.packsticker2 = `\nＮＡＧＩＢＯＴ－Ｖ²`

  global.fkontak = {
    key: {
      participant: '0@s.whatsapp.net',
...(m.chat? { remoteJid: '6285600793871-1614953337@g.us'}: {})
},
    message: {
    contactMessage: {
        displayName: `${nombre}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${nombre},;;;\nFN:${nombre},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        jpegThumbnail: null,
        thumbnail: null,
        sendEphemeral: true
}
}
}

  global.fake = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.canalIdM,
        newsletterName: global.canalNombreM,
        serverMessageId: -1
}
}
}

  global.icono = [
    'https://cdn.yupra.my.id/yp/962jca9m.jpg',
    'https://cdn.yupra.my.id/yp/ykhrquj7.jpg'
  ].getRandom()

  global.rcanal = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        serverMessageId: 100,
        newsletterName: channelRD.name
},
      externalAdReply: {
        title: '𐔌. ⋮ ᗩ ᐯ I Տ O.ᐟ ֹ ₊ ꒱',
        body: '',
        mediaUrl: null,
        description: null,
        previewType: 'PHOTO',
        thumbnailUrl: icono,
        mediaType: 1,
        renderLargerThumbnail: false
}
}
}

  global.rcanalx = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        serverMessageId: 101,
        newsletterName: channelRD.name
},
      externalAdReply: {
        title: 'N A G I - A I',
        body: '',
        mediaUrl: null,
        description: null,
        previewType: 'PHOTO',
        thumbnailUrl: icono,
        mediaType: 1,
        renderLargerThumbnail: false
}
}
}

  global.rcanalw = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        serverMessageId: 102,
        newsletterName: channelRD.name
},
      externalAdReply: {
        title: '𐔌. ⋮ ᗩ ᐯ I Տ O.ᐟ ֹ ₊ ꒱',
        body: '',
        mediaUrl: null,
        description: null,
        previewType: 'PHOTO',
        thumbnailUrl: icono,
        mediaType: 1,
        renderLargerThumbnail: false
}
}
}
}

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

async function getRandomChannel() {
  const randomIndex = Math.floor(Math.random() * canalIdM.length)
  const id = canalIdM[randomIndex]
  const name = canalNombreM[randomIndex]
  return { id, name}
}
