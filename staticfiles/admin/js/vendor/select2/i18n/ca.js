/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/ca', [], () => ({
    errorLoading () { return 'La càrrega ha fallat' }, inputTooLong (e) { const n = e.input.length - e.maximum; let r = `Si us plau, elimina ${n} car`; return r += n == 1 ? 'àcter' : 'àcters' }, inputTooShort (e) { const n = e.minimum - e.input.length; let r = `Si us plau, introdueix ${n} car`; return r += n == 1 ? 'àcter' : 'àcters' }, loadingMore () { return 'Carregant més resultats…' }, maximumSelected (e) { let n = `Només es pot seleccionar ${e.maximum} element`; return e.maximum != 1 && (n += 's'), n }, noResults () { return "No s'han trobat resultats" }, searching () { return 'Cercant…' }, removeAllItems () { return 'Treu tots els elements' }
  })), e.define, e.require
}())
