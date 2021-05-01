/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/cs', [], () => {
    function e (e, n) { switch (e) { case 2: return n ? 'dva' : 'dvě'; case 3: return 'tři'; case 4: return 'čtyři' } return '' } return {
      errorLoading () { return 'Výsledky nemohly být načteny.' }, inputTooLong (n) { const t = n.input.length - n.maximum; return t == 1 ? 'Prosím, zadejte o jeden znak méně.' : t <= 4 ? `Prosím, zadejte o ${e(t, !0)} znaky méně.` : `Prosím, zadejte o ${t} znaků méně.` }, inputTooShort (n) { const t = n.minimum - n.input.length; return t == 1 ? 'Prosím, zadejte ještě jeden znak.' : t <= 4 ? `Prosím, zadejte ještě další ${e(t, !0)} znaky.` : `Prosím, zadejte ještě dalších ${t} znaků.` }, loadingMore () { return 'Načítají se další výsledky…' }, maximumSelected (n) { const t = n.maximum; return t == 1 ? 'Můžete zvolit jen jednu položku.' : t <= 4 ? `Můžete zvolit maximálně ${e(t, !1)} položky.` : `Můžete zvolit maximálně ${t} položek.` }, noResults () { return 'Nenalezeny žádné položky.' }, searching () { return 'Vyhledávání…' }, removeAllItems () { return 'Odstraňte všechny položky' }
    }
  }), e.define, e.require
}())
