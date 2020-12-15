exports.donate = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return ` 
*${XPTN}*
❉──────────❉
  Hi Kak. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉
    
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
          
╔════════════════════
║*Donasi Lewat Sini :*
║*DANA* : *085157566434*
║*PULSA*: *085157566434*
║
║*YouTube <subscribe>*
║   _${youtube}_
║*Instagram <Follow>*
║   _${instagram}_
║*Creator ${XPTN}*
║   _${nomer}_
╚════════════════════`
}	
