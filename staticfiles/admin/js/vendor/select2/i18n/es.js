/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/es', [], () => ({
    errorLoading () { return 'No se pudieron cargar los resultados' }, inputTooLong (e) { const n = e.input.length - e.maximum; let r = `Por favor, elimine ${n} car`; return r += n == 1 ? 'ácter' : 'acteres' }, inputTooShort (e) { const n = e.minimum - e.input.length; let r = `Por favor, introduzca ${n} car`; return r += n == 1 ? 'ácter' : 'acteres' }, loadingMore () { return 'Cargando más resultados…' }, maximumSelected (e) { let n = `Sólo puede seleccionar ${e.maximum} elemento`; return e.maximum != 1 && (n += 's'), n }, noResults () { return 'No se encontraron resultados' }, searching () { return 'Buscando…' }, removeAllItems () { return 'Eliminar todos los elementos' }
  })), e.define, e.require
}())
