exports.xp = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return ` *${XPTN}*

❉──────────❉
  Hi Kak. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉
    
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*

*Silakan Pilih MENU* 

_*.menu1*_

_*.menu2*_

_*.menu3*_

_*.menu4*_

_*.menu5*_

_*.menu6*_

_*.info*_

_*.owner*_

_*.donasi*_

*Instagram <Follow>*
${instagram}

*Creator*
${nomer}`
}
