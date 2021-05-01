/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/hr', [], () => {
    function n (n) { let e = ` ${n} znak`; return n % 10 < 5 && n % 10 > 0 && (n % 100 < 5 || n % 100 > 19) ? n % 10 > 1 && (e += 'a') : e += 'ova', e } return {
      errorLoading () { return 'Preuzimanje nije uspjelo.' }, inputTooLong (e) { return `Unesite ${n(e.input.length - e.maximum)}` }, inputTooShort (e) { return `Unesite još ${n(e.minimum - e.input.length)}` }, loadingMore () { return 'Učitavanje rezultata…' }, maximumSelected (n) { return `Maksimalan broj odabranih stavki je ${n.maximum}` }, noResults () { return 'Nema rezultata' }, searching () { return 'Pretraga…' }, removeAllItems () { return 'Ukloni sve stavke' }
    }
  }), n.define, n.require
}())
