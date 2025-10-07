let handler = async (m, { conn }) => {
    try {
        
        const getGroups = await conn.groupFetchAllParticipating()
        const groups = Object.entries(getGroups)
        
        if (groups.length === 0) return m.reply('❌ El bot no está en ningún grupo')

        
        let savedGroups = []
        for (const [id, group] of groups) {
            const participants = group.participants || []
            const botParticipant = participants.find(p => conn.decodeJid(p.id) === conn.decodeJid(conn.user.jid))
            const isBotAdmin = botParticipant?.admin === 'admin' || botParticipant?.admin === 'superadmin'
            
          
            console.log('=== Grupo Info ===')
            console.log('Nombre:', group.subject)
            console.log('Bot ID:', conn.decodeJid(conn.user.jid))
            console.log('Bot Participant:', botParticipant)
            console.log('Bot Admin:', isBotAdmin)
            console.log('================')
            
            savedGroups.push({
                id: id,
                subject: group.subject,
                desc: group.desc || '',
                size: participants.length,
                isBotAdmin,
                creation: group.creation,
                owner: group.owner || ''
            })
        }

       
        if (!global.db.data.groups) global.db.data.groups = []
        
       
        for (const newGroup of savedGroups) {
            const existingIndex = global.db.data.groups.findIndex(g => g.id === newGroup.id)
            if (existingIndex !== -1) {
               
                global.db.data.groups[existingIndex] = newGroup
            } else {

                global.db.data.groups.push(newGroup)
            }
        }
        
        let txt = `✅ *Grupos guardados exitosamente*\n\n`
        txt += `📊 *Resumen:*\n`
        txt += `• Total de grupos: ${savedGroups.length}\n`
        txt += `• Grupos donde soy admin: ${savedGroups.filter(g => g.isBotAdmin).length}\n\n`
        txt += `📋 *Lista de grupos:*\n`
        
        for (const group of savedGroups) {
            txt += `\n🔸 *${group.subject}*\n`
            txt += `◦ ID: ${group.id}\n`
            txt += `◦ Miembros: ${group.size}\n`
            txt += `◦ Bot es admin: ${group.isBotAdmin ? '✅' : '❌'}\n`
        }

        m.reply(txt)
        
    } catch (e) {
        console.error(e)
        m.reply('❌ Ocurrió un error al guardar los grupos. Revisa la consola para más detalles.')
    }
}

handler.help = ['savegroups']
handler.tags = ['owner']
handler.command = ['savegroups', 'sg']
handler.owner = true
handler.rowner = true

export default handler
