import axios from 'axios';

const handler = async (m, { conn, args}) => {
  const fbUrl = args[0];
  const apiEndpoint = 'https://apis-starlights-team.koyeb.app/starlight/facebook';

  if (!fbUrl) {
    return conn.reply(m.chat, '❀ *Por favor ingresa un enlace de Facebook.*', m);
}

  await m.react('⏳️');

  let response;
  try {
    response = await axios.get(`${apiEndpoint}?url=${encodeURIComponent(fbUrl)}`);
} catch (error) {
    await m.react('❌');
    return conn.reply(m.chat, 'ꕥ *Error al obtener datos. Verifica el enlace.*', m);
}

  const videos = response.data;
  if (!Array.isArray(videos) || videos.length === 0) {
    return conn.reply(m.chat, 'ꕥ *No se encontraron resultados.*', m);
}

  const videoHD = videos.find(v => v.quality === '720p (HD)');
  const videoSD = videos.find(v => v.quality === '360p (SD)');
  const videoUrl = videoHD?.link_hd || videoSD?.link_sd;

  if (!videoUrl) {
    return conn.reply(m.chat, 'ꕥ *No se encontró una resolución adecuada.*', m);
}

  const maxRetries = 3;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await conn.sendMessage(
        m.chat,
        {
          video: { url: videoUrl},
          caption: '📝 *Aquí tienes tu video:*',
          fileName: 'facebook_video.mp4',
          mimetype: 'video/mp4'
},
        { quoted: m}
);
      await m.react('✅');
      break;
} catch (error) {
      if (attempt === maxRetries) {
        await m.react('❌');
        return conn.reply(m.chat, 'ꕥ *Error al enviar el video después de varios intentos.*', m);
}
      await new Promise(resolve => setTimeout(resolve, 1000));
}
}
};

handler.help = ['facebook <url>'];
handler.tags = ['downloader'];
handler.command = ['facebook', 'fb', 'fbdl'];
handler.register = true;

export default handler;
