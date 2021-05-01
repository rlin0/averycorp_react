/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/pt-BR', [], () => ({
    errorLoading () { return 'Os resultados não puderam ser carregados.' }, inputTooLong (e) { const n = e.input.length - e.maximum; let r = `Apague ${n} caracter`; return n != 1 && (r += 'es'), r }, inputTooShort (e) { return `Digite ${e.minimum - e.input.length} ou mais caracteres` }, loadingMore () { return 'Carregando mais resultados…' }, maximumSelected (e) { let n = `Você só pode selecionar ${e.maximum} ite`; return e.maximum == 1 ? n += 'm' : n += 'ns', n }, noResults () { return 'Nenhum resultado encontrado' }, searching () { return 'Buscando…' }, removeAllItems () { return 'Remover todos os itens' }
  })), e.define, e.require
}())
