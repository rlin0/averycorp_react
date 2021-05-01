/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/gl', [], () => ({
    errorLoading () { return 'Non foi posíbel cargar os resultados.' }, inputTooLong (e) { const n = e.input.length - e.maximum; return n === 1 ? 'Elimine un carácter' : `Elimine ${n} caracteres` }, inputTooShort (e) { const n = e.minimum - e.input.length; return n === 1 ? 'Engada un carácter' : `Engada ${n} caracteres` }, loadingMore () { return 'Cargando máis resultados…' }, maximumSelected (e) { return e.maximum === 1 ? 'Só pode seleccionar un elemento' : `Só pode seleccionar ${e.maximum} elementos` }, noResults () { return 'Non se atoparon resultados' }, searching () { return 'Buscando…' }, removeAllItems () { return 'Elimina todos os elementos' }
  })), e.define, e.require
}())
