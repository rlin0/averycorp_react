/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/lv', [], () => {
    function e (e, n, u, i) { return e === 11 ? n : e % 10 == 1 ? u : i } return {
      inputTooLong (n) { const u = n.input.length - n.maximum; let i = `Lūdzu ievadiet par  ${u}`; return `${i += ` simbol${e(u, 'iem', 'u', 'iem')}`} mazāk` }, inputTooShort (n) { const u = n.minimum - n.input.length; let i = `Lūdzu ievadiet vēl ${u}`; return i += ` simbol${e(u, 'us', 'u', 'us')}` }, loadingMore () { return 'Datu ielāde…' }, maximumSelected (n) { let u = `Jūs varat izvēlēties ne vairāk kā ${n.maximum}`; return u += ` element${e(n.maximum, 'us', 'u', 'us')}` }, noResults () { return 'Sakritību nav' }, searching () { return 'Meklēšana…' }, removeAllItems () { return 'Noņemt visus vienumus' }
    }
  }), e.define, e.require
}())
