const handler = async (event, { conn}) => {
  const { participants, action, id} = event;
  const groupMetadata = await conn.groupMetadata(id);
  const groupSubject = groupMetadata.subject;
  const totalMembers = groupMetadata.participants.length;
  const date = new Date().toLocaleDateString('es-ES', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

  for (const user of participants) {
    const taguser = `@${user.split('@')[0]}`;
    const number = user.split('@')[0];
    const tipo = action === 'add'? 'Bienvenido/a 🎉': 'Despedida 👋';
    const who = user;
    const file = 'https://cdn.yupra.my.id/yp/962jca9m.jpg'; // Reemplaza con la URL real de tu imagen

    const productMessage = {
      product: {
        productImage: { url: file},
        productId: '24529689176623820',
        title: `${tipo}, ahora somos ${totalMembers}`,
        description: '',
        currencyCode: 'USD',
        priceAmount1000: '100000',
        retailerId: 1677,
        url: `https://wa.me/${number}`,
        productImageCount: 1
},
      businessOwnerJid: who || '0@s.whatsapp.net',
      caption: `👤 Usuario: ${taguser}\n📚 Grupo: ${groupSubject}\n👥 Miembros: ${totalMembers}\n📆 Fecha: ${date}`.trim(),
      title: '',
      subtitle: '',
      footer: groupSubject || '',
      interactiveButtons: [
        {
          name: 'quick_reply',
          buttonParamsJson: JSON.stringify({
            display_text: 'Menú Nakano 🌷',
            id: 'menu'
})
}
      ]
};

    await conn.sendMessage(id, { productMessage}, { quoted: null});
}
};

handler.customPrefix = /^$/;
handler.event = 'group-participants-update';

export default handler;
