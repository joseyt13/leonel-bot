var handler = async (m, { conn, participants, usedPrefix, command}) => {
  let mentionedJid = await m.mentionedJid
  let user = mentionedJid && mentionedJid.length
? mentionedJid[0]
: m.quoted && await m.quoted.sender
? await m.quoted.sender
: null

  if (!user) return conn.reply(m.chat, `❀ Debes mencionar a un usuario para expulsarlo del grupo.`, m)

  try {
    const groupInfo = await conn.groupMetadata(m.chat)
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net'
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net'

    if (user === conn.user.jid) return conn.reply(m.chat, `ꕥ No puedo eliminar el bot del grupo.`, m)
    if (user === ownerGroup) return conn.reply(m.chat, `ꕥ No puedo eliminar al propietario del grupo.`, m)
    if (user === ownerBot) return conn.reply(m.chat, `ꕥ No puedo eliminar al propietario del bot.`, m)

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
    await conn.reply(m.chat, `❀ *_Se eliminó con éxito._*`, m)

} catch (e) {
    conn.reply(m.chat, `⚠︎ Se ha producido un problema.\n> Usa *${usedPrefix}report* para informarlo.\n\n${e.message}`, m)
}
}

const keywords = ['kick', 'ban'];

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['kick', 'ban'];
handler.admin = true
handler.group = true
handler.botAdmin = true

handler.all = async function (m) {
  if (!m.text) return;

  const input = m.text.trim().toLowerCase();

  for (const keyword of keywords) {
    if (input === keyword) {
      return handler(m, { conn: this, args: []});
}
}
};

export default handler;
