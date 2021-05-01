/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/lt', [], () => {
    function n (n, e, i, t) { return n % 10 == 1 && (n % 100 < 11 || n % 100 > 19) ? e : n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19) ? i : t } return {
      inputTooLong (e) { const i = e.input.length - e.maximum; let t = `Pašalinkite ${i} simbol`; return t += n(i, 'į', 'ius', 'ių') }, inputTooShort (e) { const i = e.minimum - e.input.length; let t = `Įrašykite dar ${i} simbol`; return t += n(i, 'į', 'ius', 'ių') }, loadingMore () { return 'Kraunama daugiau rezultatų…' }, maximumSelected (e) { let i = `Jūs galite pasirinkti tik ${e.maximum} element`; return i += n(e.maximum, 'ą', 'us', 'ų') }, noResults () { return 'Atitikmenų nerasta' }, searching () { return 'Ieškoma…' }, removeAllItems () { return 'Pašalinti visus elementus' }
    }
  }), n.define, n.require
}())
