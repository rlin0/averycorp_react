/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/sr-Cyrl', [], () => {
    function n (n, e, r, u) { return n % 10 == 1 && n % 100 != 11 ? e : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? r : u } return {
      errorLoading () { return 'Преузимање није успело.' }, inputTooLong (e) { const r = e.input.length - e.maximum; let u = `Обришите ${r} симбол`; return u += n(r, '', 'а', 'а') }, inputTooShort (e) { const r = e.minimum - e.input.length; let u = `Укуцајте бар још ${r} симбол`; return u += n(r, '', 'а', 'а') }, loadingMore () { return 'Преузимање још резултата…' }, maximumSelected (e) { let r = `Можете изабрати само ${e.maximum} ставк`; return r += n(e.maximum, 'у', 'е', 'и') }, noResults () { return 'Ништа није пронађено' }, searching () { return 'Претрага…' }, removeAllItems () { return 'Уклоните све ставке' }
    }
  }), n.define, n.require
}())
