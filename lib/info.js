exports.info = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
*${XPTN}*
❉──────────❉
  Hi Kak. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉
    
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*

*JANGAN LUPA SUPORT SAYA KAWAN" KU*
_Terima Kasih_

*YouTube <subscribe>*
_${youtube}_

*Instagram <Follow>*
_${instagram}_

*Owner Bot*
_${nomer}_`
}
