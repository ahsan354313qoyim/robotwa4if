exports.xp1 = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*${XPTN}*

❉──────────❉
  Hi Kak. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉
    
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*

(fitur ini bisa buat 
 debat/pacar virtual)

   _*! <teks>*_

*Instagram <Follow>*
${instagram}
*Creator ${XPTN}*
${nomer}`
}
