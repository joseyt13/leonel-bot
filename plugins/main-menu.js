import fetch from 'node-fetch'

let handler = async (m, { conn}) => {
  const botname = '© ＮＡＧＩＢＯＴ－Ｖ¹'
  const textbot = 'ꕥ ʟɪꜱᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏꜱ ᴅɪꜱᴘᴏɴɪʙʟᴇꜱ'
  const redes = 'https://github.com/hashirama-dev'
  const banner = 'https://cdn.yupra.my.id/yp/dpi4ktu8.jpg'
  const channelRD = {
    id: '120363423335018677@newsletter',
    name: 'ＮＡＧＩＢＯＴ－Ｖ¹'
}

  const userId = m.mentionedJid?.[0] || m.sender

  const txt = `︶•︶°︶•︶°︶•︶°︶•︶°︶•︶°︶
> ʜᴏʟᴀ, @${m.sender.split('@')[0]}, ꜱᴏʏ ɴᴀɢɪ-ʙᴏᴛ, ʟɪꜱᴛᴏ ᴘᴀʀᴀ ᴀʏᴜᴅᴀʀᴛᴇ
╭┈ ↷
│ ✐ 𝓓𝓮𝔀𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝑫𝒆𝒗-𝒇𝒆𝒅𝒆𝒙𝒚𝒛 ❤️
│ ✐ ꒷ꕤ💎ദ ɢʀᴜᴘᴏ ᴏꜰɪᴄɪᴀʟ ꕥ
│ chat.whatsapp.com/F1A3vMyQLnh0LAnJvpdjng
│ ✐ ꒷ꕤ💎ദ ᴄᴀɴᴀʟ ᴏғɪᴄɪᴀʟ ෴
│ whatsapp.com/channel/0029VbApe6jG8l5Nv43dsC2N
╰─────────────────

> *_ꜱɪ ᴇɴᴄᴜᴇɴᴛʀᴀꜱ ᴀʟɢᴜ́ɴ ᴇʀʀᴏʀ, ᴘᴏʀ ꜰᴀᴠᴏʀ ᴄᴏɴᴛᴀᴄᴛᴀ ᴀʟ ᴏᴡɴᴇʀ._*

»  ⊹ ˚୨ •(=^●ω●^=)•  INFO ⊹
> ✐ Comandos de información general.

┃➪ Muestra el menú completo del bot 
✦ *#menu* • *#help*
┃➪ Información y contacto del creador 
✦ *#owner*
┃➪ Verifica si el bot está activo 
✦ *#ping*
┃➪ Obtén el script del bot 
✦ *#script*
┃➪ Muestra usuarios registrados 
✦ *#registros*
┃➪ Lista registros globales 
✦ *#listarg*
┃➪ Elimina tu registro del bot 
✦ *#unreg*
┃➪ Elimina los registros
✦ *#limpiar*
┃➪ Regístrate como usuario 
✦ *#reg*

»  ⊹ ˚୨ •(=^●ω●^=)•  ANIME ⊹
> ✐ Comandos para rolear con estilo anime.

┃➪ Expresa enojo hacia alguien 
✦ *#angry* <@mención>
┃➪ Muerde a otro usuario 
✦ *#bite* <@mención>
┃➪ Desea buenas noches 
✦ *#nights*
┃➪ Saluda por la mañana 
✦ *#dias*
┃➪ Ofrece café a alguien 
✦ *#coffe* <@mención>
┃➪ Llora con mención 
✦ *#cry* <@mención>
┃➪ Acurrúcate con alguien 
✦ *#cuddle* <@mención>
┃➪ Comparte felicidad 
✦ *#happy* <@mención>
┃➪ Saluda a otro usuario 
✦ *#hello* <@mención>
┃➪ Envía un beso 
✦ *#kiss*
┃➪ Imagen aleatoria de loli 
✦ *#loli*
┃➪ Tu waifu del día 
✦ *#waifu*

»  ⊹ ˚୨ •(=^●ω●^=)•  BUSCADOR ⊹
> ✐ Encuentra contenido fácilmente.

┃➪ Busca imágenes en Pinterest 
✦ *#pinterest* <texto>
┃➪ Busca videos en TikTok 
✦ *#tiktoksearch* <texto>
┃➪ Busca videos en YouTube 
✦ *#ytsearch* <texto>

»  ⊹ ˚୨ •(=^●ω●^=)•  DOWNLOAD ⊹
> ✐ Descarga contenido de redes sociales.

┃➪ Descarga archivos APK 
✦ *#apk*
┃➪ Descarga desde Facebook 
✦ *#facebook* <url>
┃➪ Descarga desde Instagram 
✦ *#instagram* <url>
┃➪ Descarga desde Pinterest 
✦ *#pindl* <url>
┃➪ Busca y reproduce música 
✦ *#play* <texto>
┃➪ Descarga audio de YouTube 
✦ *#yta* <url>
┃➪ Convierte video a MP3 
✦ *#ytmp3* <url>
┃➪ Alternativa para reproducir música 
✦ *#play2* <texto>
┃➪ Descarga video de YouTube 
✦ *#ytv* <url>
┃➪ Convierte video a MP4 
✦ *#ytmp4* <url>
┃➪ Reproduce audio directamente 
✦ *#playaudio* <texto>
┃➪ Descarga en formato MP4 
✦ *#mp4* <url>
┃➪ Descarga desde TikTok 
✦ *#tiktok* <url>

»  ⊹ ˚୨ •(=^●ω●^=)•  FUN ⊹
> ✐ Comandos para divertirte con el grupo.

┃➪ Doxeo aleatorio 
✦ *#doxear*
┃➪ Doxeo personalizado 
✦ *#doxxing* <nombre> | <@mención>
┃➪ Forma parejas aleatorias 
✦ *#formarpareja*
┃➪ Crea parejas múltiples 
✦ *#formarpareja5*
┃➪ Lanza un huevo a alguien 
✦ *#huevo* <@mención>
┃➪ Comando divertido 
✦ *#chaqueta*
┃➪ Crea un ranking personalizado 
✦ *#top* <texto>

»  ⊹ ˚୨ •(=^●ω●^=)•  GRUPO ⊹
> ✐ Comandos para administrar el grupo.

┃➪ Abre o cierra el grupo 
✦ *#group* open / close
┃➪ Alternativa para abrir/cerrar 
✦ *#grupo* abrir / cerrar
┃➪ Elimina un mensaje 
✦ *#delete* <responder>
┃➪ Menciona sin mostrar usuarios 
✦ *#hidetag* <texto>
┃➪ Expulsa a un miembro 
✦ *#kick* <@mención>
┃➪ Muestra el ID del grupo 
✦ *#lid*
┃➪ Obtiene el enlace del grupo 
✦ *#link*
┃➪ Asciende a administrador 
✦ *#promote* <@mención>
┃➪ Menciona a los admins
✦ *#tagadmin*
┃➪ Menciona a todos 
✦ *#tagall*
┃➪ Mención con texto personalizado
✦ *#tagtext* <texto>
┃➪ Llama a los subbots 
✦ *#invocar*

»  ⊹ ˚୨ •(=^●ω●^=)•  IA ⊹
> ✐ Comandos de inteligencia artificial.

┃➪ Elimina el fondo de una imagen 
✦ *#bg* <imagen>
┃➪ Pregunta a Gemini 
✦ *#gemini* <texto>
┃➪ Edición mágica de imágenes 
✦ *#magicstudio*
┃➪ Genera imágenes con IA 
✦ *#pollinations* <prompt>
┃➪ Convierte imagen en estilo anime 
✦ *#toanime* <imagen>
┃➪ Aplica filtros estéticos 
✦ *#wpw* <filtro>

»  ⊹ ˚୨ •(=^●ω●^=)•  JADIBOT ⊹
> ✐ Comandos para vincular subbots

┃➪ Vinculación por código QR 
✦ *#qr*
┃➪ Vinculación por código numérico 
✦ *#code*

»  ⊹ ˚୨ •(=^●ω●^=)•  OWNER ⊹
> ✐ Comandos exclusivos para el owner.

┃➪ Activa funciones del bot 
✦ *#enable* <opción>
┃➪ Desactiva funciones del bot 
✦ *#disable* <opción>
┃➪ Crea respaldo del bot 
✦ *#backupbot* [--with-sessions]
┃➪ Ejecuta código JavaScript 
✦ *#>*
┃➪ Ejecuta código async 
✦ *#=>*
┃➪ Unirse a un grupo por enlace 
✦ *#join* <link>
┃➪ Reinicia el bot 
✦ _#restart_
┃➪ Salir de un grupo 
✦ _#salir_
┃➪ Guarda un plugin nuevo 
✦ _#saveplugin_ <archivo>
┃➪ Cambia la foto del bot 
✦ _#setppbot_ <imagen>
┃➪ Guarda los grupos activos 
✦ _#savegroups_
┃➪ Actualiza el bot 
✦ _#update_

»  ⊹ ˚୨ •(=^●ω●^=)•  STICKERS ⊹
> ✐ Comandos para crear stickers personalizados.

┃➪ Convierte texto en sticker 
✦ _#brat_ <texto>
┃➪ Convierte imagen o video en sticker 
✦ _#sticker_ <archivo>
┃➪ Crea sticker de otro usuario 
✦ _#sticker_ <@mención>
┃➪ Mezcla emojis en un sticker 
✦ _#emojimix_ 😺+🔥
┃➪ _Cambia autor y pack_
✦ *#take* <responder sticker>
┃➪ _Texto en sticker animado_
✦ *#attp* <texto>
┃➪ _Texto en sticker clásico_
✦ *#ttp*  <texto>
┃➪ _Busca stickers por palabra_
✦ *#stickersearch*  <texto>

»  ⊹ ˚୨ •(=^●ω●^=)•  TOOLS ⊹
> ✐ Herramientas útiles para transformar contenido.

┃➪ _Mejora calidad de imagen_
✦ _#hd_ <imagen>
┃➪ _Captura pantalla web_
✦ _#ssweb_ <url>
┃➪  _Convierte archivos en enlaces_
✦ *#tourl* <archivo>

> ✐ ꒷ꕤ💎ദ ᴘʀᴇᴍɪᴜᴍ ᴇxᴘᴇʀɪᴇɴᴄᴇ ʙʏ ɴᴀɢɪ-ʙᴏᴛ`.trim()

  await conn.sendMessage(m.chat, {
    text: txt,
    contextInfo: {
      mentionedJid: [userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        serverMessageId: '',
        newsletterName: channelRD.name
},
      externalAdReply: {
        title: botname,
        body: textbot,
        mediaType: 1,
        mediaUrl: redes,
        sourceUrl: redes,
        thumbnail: await (await fetch(banner)).buffer(),
        showAdAttribution: false,
        containsAutoReply: true,
        renderLargerThumbnail: true
}
}
}, { quoted: m})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler
