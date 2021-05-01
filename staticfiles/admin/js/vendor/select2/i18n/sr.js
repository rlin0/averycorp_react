/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/sr', [], () => {
    function n (n, e, r, t) { return n % 10 == 1 && n % 100 != 11 ? e : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? r : t } return {
      errorLoading () { return 'Preuzimanje nije uspelo.' }, inputTooLong (e) { const r = e.input.length - e.maximum; let t = `Obrišite ${r} simbol`; return t += n(r, '', 'a', 'a') }, inputTooShort (e) { const r = e.minimum - e.input.length; let t = `Ukucajte bar još ${r} simbol`; return t += n(r, '', 'a', 'a') }, loadingMore () { return 'Preuzimanje još rezultata…' }, maximumSelected (e) { let r = `Možete izabrati samo ${e.maximum} stavk`; return r += n(e.maximum, 'u', 'e', 'i') }, noResults () { return 'Ništa nije pronađeno' }, searching () { return 'Pretraga…' }, removeAllItems () { return 'Уклоните све ставке' }
    }
  }), n.define, n.require
}())
