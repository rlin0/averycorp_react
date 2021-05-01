/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/sq', [], () => ({
    errorLoading () { return 'Rezultatet nuk mund të ngarkoheshin.' }, inputTooLong (e) { const n = e.input.length - e.maximum; let t = `Të lutem fshi ${n} karakter`; return n != 1 && (t += 'e'), t }, inputTooShort (e) { return `Të lutem shkruaj ${e.minimum - e.input.length} ose më shumë karaktere` }, loadingMore () { return 'Duke ngarkuar më shumë rezultate…' }, maximumSelected (e) { let n = `Mund të zgjedhësh vetëm ${e.maximum} element`; return e.maximum != 1 && (n += 'e'), n }, noResults () { return 'Nuk u gjet asnjë rezultat' }, searching () { return 'Duke kërkuar…' }, removeAllItems () { return 'Hiq të gjitha sendet' }
  })), e.define, e.require
}())
