const handler = async (m, { conn, participants, usedPrefix, command }) => {
  const emoji = '🕴';

  if (!m.mentionedJid[0] && !m.quoted) {
    return conn.reply(m.chat, `
┌──「 *Expulsión Fallida* 」
│ [❗] 𝘿𝙚𝙗𝙚𝙨 𝙢𝙚𝙣𝙘𝙞𝙤𝙣𝙖𝙧 𝙖 𝙖𝙡𝙜𝙪𝙞𝙚𝙣 𝙥𝙖𝙧𝙖 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙧.
└───────❖`, m, rcanal)
  }

  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  const groupInfo = await conn.groupMetadata(m.chat);
  const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
  const ownerBot = global.owner[0][0] + '@s.whatsapp.net';

  if (user === conn.user.jid) {
    return conn.reply(m.chat, `
┌──「 *Error* 」
│ [❗] 𝙉𝙤 𝙥𝙪𝙚𝙙𝙤 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙧𝙢𝙚 𝙖 𝙢𝙞 𝙢𝙞𝙨𝙢𝙤.
└───────❖`, m, rcanal)
  }

  if (user === ownerGroup) {
    return conn.reply(m.chat, `
┌──「 *Error* 」
│ [❗] 𝙉𝙤 𝙥𝙪𝙚𝙙𝙤 𝙩𝙤𝙘𝙖𝙧 𝙖𝙡 𝙡í𝙙𝙚𝙧 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.
└───────❖`, m, rcanal)
  }

  if (user === ownerBot) {
    return conn.reply(m.chat, `
┌──「 *Error* 」
│ [❗] 𝙀𝙨 𝙢𝙞 𝙘𝙧𝙚𝙖𝙙𝙤𝙧, 𝙣𝙤 𝙥𝙪𝙚𝙙𝙤 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙧𝙡𝙤.
└───────❖`, m, rcanal)
  }

  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
  conn.reply(m.chat, `
*Usuario eliminado correctamente ✅*
*Por motivo no identificado ❌*`, m, rcanal)
};

handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = ['kick','echar','hechar','sacar','ban'];
handler.admin = true;
handler.group = true;
handler.register = true;
handler.botAdmin = true;

export default handler;