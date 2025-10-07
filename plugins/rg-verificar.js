import axios from 'axios'
import { createHash} from 'crypto'
import moment from 'moment-timezone'

const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

const handler = async function (m, { conn, text, args, usedPrefix, command}) {
  const user = global.db.data.users[m.sender]
  const name2 = conn.getName(m.sender)
  const whe = m.mentionedJid[0] || m.quoted?.sender || m.sender
  const perfil = await conn.profilePictureUrl(whe, 'image').catch(() => 'https://cdn.yupra.my.id/yp/rks2wz39.jpg')

  if (user.registered) {
    return m.reply(`ꕥ Ya estás registrado.\n\n➪ ¿Deseas volver a registrarte?\n➪ Usa *${usedPrefix}unreg* para eliminar tu registro.`)
}

  if (!Reg.test(text)) {
    return m.reply(`ꕥ Formato incorrecto.\n\n➪ Usa: *${usedPrefix + command} nombre.edad*\n➪ Ejemplo: *${usedPrefix + command} ${name2}.14*`)
}

  let [_, name, __, age] = text.match(Reg)
  if (!name ||!age) return m.reply('ꕥ El nombre y la edad no pueden estar vacíos.')
  if (name.length> 100) return m.reply('ꕥ El nombre es demasiado largo.')
  age = parseInt(age)
  if (isNaN(age) || age < 5 || age> 1000) return m.reply('ꕥ La edad ingresada no es válida.')

  user.name = name.trim()
  user.age = age
  user.regTime = +new Date()
  user.registered = true
  user.money += 600
  user.estrellas += 10
  user.exp += 245
  user.joincount += 5

  const sn = createHash('md5').update(m.sender).digest('hex')
  const regbot = `ꕥ *Registro completado*\n\n➪ Usa *#menu* para ver la lista de comandos.\n➪ Gracias por usar el bot.`

  await conn.sendMessage(m.chat, {
    text: regbot,
    contextInfo: {
      externalAdReply: {
        title: 'ꕥ Registro exitoso',
        thumbnailUrl: perfil,
        mediaType: 1,
        renderLargerThumbnail: true
}
}
}, { quoted: m})
}

handler.help = ['reg']
handler.tags = ['info']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar']

export default handler
