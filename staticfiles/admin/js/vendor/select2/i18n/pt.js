/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/pt', [], () => ({
    errorLoading () { return 'Os resultados não puderam ser carregados.' }, inputTooLong (e) { const r = e.input.length - e.maximum; let n = `Por favor apague ${r} `; return n += r != 1 ? 'caracteres' : 'caractere' }, inputTooShort (e) { return `Introduza ${e.minimum - e.input.length} ou mais caracteres` }, loadingMore () { return 'A carregar mais resultados…' }, maximumSelected (e) { let r = `Apenas pode seleccionar ${e.maximum} `; return r += e.maximum != 1 ? 'itens' : 'item' }, noResults () { return 'Sem resultados' }, searching () { return 'A procurar…' }, removeAllItems () { return 'Remover todos os itens' }
  })), e.define, e.require
}())
