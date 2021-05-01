/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/sk', [], () => {
    const e = { 2 (e) { return e ? 'dva' : 'dve' }, 3 () { return 'tri' }, 4 () { return 'štyri' } }; return {
      errorLoading () { return 'Výsledky sa nepodarilo načítať.' }, inputTooLong (n) { const t = n.input.length - n.maximum; return t == 1 ? 'Prosím, zadajte o jeden znak menej' : t >= 2 && t <= 4 ? `Prosím, zadajte o ${e[t](!0)} znaky menej` : `Prosím, zadajte o ${t} znakov menej` }, inputTooShort (n) { const t = n.minimum - n.input.length; return t == 1 ? 'Prosím, zadajte ešte jeden znak' : t <= 4 ? `Prosím, zadajte ešte ďalšie ${e[t](!0)} znaky` : `Prosím, zadajte ešte ďalších ${t} znakov` }, loadingMore () { return 'Načítanie ďalších výsledkov…' }, maximumSelected (n) { return n.maximum == 1 ? 'Môžete zvoliť len jednu položku' : n.maximum >= 2 && n.maximum <= 4 ? `Môžete zvoliť najviac ${e[n.maximum](!1)} položky` : `Môžete zvoliť najviac ${n.maximum} položiek` }, noResults () { return 'Nenašli sa žiadne položky' }, searching () { return 'Vyhľadávanie…' }, removeAllItems () { return 'Odstráňte všetky položky' }
    }
  }), e.define, e.require
}())
