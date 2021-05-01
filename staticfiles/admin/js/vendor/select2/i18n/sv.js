/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/sv', [], () => ({
    errorLoading () { return 'Resultat kunde inte laddas.' }, inputTooLong (n) { return `Vänligen sudda ut ${n.input.length - n.maximum} tecken` }, inputTooShort (n) { return `Vänligen skriv in ${n.minimum - n.input.length} eller fler tecken` }, loadingMore () { return 'Laddar fler resultat…' }, maximumSelected (n) { return `Du kan max välja ${n.maximum} element` }, noResults () { return 'Inga träffar' }, searching () { return 'Söker…' }, removeAllItems () { return 'Ta bort alla objekt' }
  })), n.define, n.require
}())
