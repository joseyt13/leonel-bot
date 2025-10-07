import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, text, args, usedPrefix}) => {
  if (!text) {
    return conn.sendMessage(m.chat, {
      text: '❀ Por favor, ingresa lo que deseas buscar por Pinterest.',
...global.rcanal
}, { quoted: m})
}

  try {
    await m.react('🕒')

    if (text.includes('https://')) {
      let i = await dl(args[0])
      let isVideo = i.download.includes('.mp4')

      await conn.sendMessage(m.chat, {
        [isVideo? 'video': 'image']: { url: i.download},
        caption: `❀ ${i.title}`,
...global.rcanal
}, { quoted: m})

} else {
      const results = await pins(text)
      if (!results.length) {
        return conn.sendMessage(m.chat, {
          text: `ꕥ No se encontraron resultados para "${text}".`,
...global.rcanal
}, { quoted: m})
}

      const medias = results.slice(0, 10).map(img => ({
        type: 'image',
        data: { url: img.image_large_url}
}))

      await conn.sendSylphy(m.chat, medias, {
        caption: `❀ Pinterest - Search ❀\n\n✧ Búsqueda » "${text}"\n✐ Resultados » ${medias.length}`,
        quoted: m,
...global.rcanal
})

      await m.react('✔️')
}

} catch (e) {
    await m.react('✖️')
    await conn.sendMessage(m.chat, {
      text: `⚠︎ Se ha producido un problema.\n> Usa *${usedPrefix}report* para informarlo.\n\n${e.message}`,
...global.rcanal
}, { quoted: m})
}
}

handler.help = ['pinterest']
handler.command = ['pinterest', 'pin']
handler.tags = ['download']
handler.group = true

export default handler

async function dl(url) {
  try {
    let res = await axios.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0'}
}).catch(e => e.response)

    let $ = cheerio.load(res.data)
    let tag = $('script[data-test-id="video-snippet"]')

    if (tag.length) {
      let result = JSON.parse(tag.text())
      return {
        title: result.name,
        download: result.contentUrl
}
} else {
      let json = JSON.parse($("script[data-relay-response='true']").eq(0).text())
      let result = json.response.data["v3GetPinQuery"].data
      return {
        title: result.title,
        download: result.imageLargeUrl
}
}
} catch {
    return { msg: 'Error, inténtalo de nuevo más tarde'}
}
}

const pins = async (query) => {
  const link = `https://id.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${encodeURIComponent(query)}%26rs%3Dtyped&data=...` // acortado por claridad

  const headers = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'x-requested-with': 'XMLHttpRequest'
}

  try {
    const res = await axios.get(link, { headers})
    const results = res.data?.resource_response?.data?.results || []

    return results.map(item => {
      if (item.images) {
        return {
          image_large_url: item.images.orig?.url || null,
          image_medium_url: item.images['564x']?.url || null,
          image_small_url: item.images['236x']?.url || null
}
}
      return null
}).filter(img => img!== null)

} catch (error) {
    console.error('Error:', error)
    return []
}
}
