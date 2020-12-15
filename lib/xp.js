exports.xp = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
  *${tampilTanggal}*
*${tampilWaktu}*
Bot Aktif ; *${aktif}*

  Hi Kak. *${id.split("@s.whatsapp.net")[0]}* 👋️
  
*Silakan Pilih MENU BOT ${XPTN}*

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
_${instagram}_

*Creator*
_${nomer}_`
}
