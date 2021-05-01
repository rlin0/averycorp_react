/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/nl', [], () => ({
    errorLoading () { return 'De resultaten konden niet worden geladen.' }, inputTooLong (e) { return `Gelieve ${e.input.length - e.maximum} karakters te verwijderen` }, inputTooShort (e) { return `Gelieve ${e.minimum - e.input.length} of meer karakters in te voeren` }, loadingMore () { return 'Meer resultaten laden…' }, maximumSelected (e) { const n = e.maximum == 1 ? 'kan' : 'kunnen'; let r = `Er ${n} maar ${e.maximum} item`; return e.maximum != 1 && (r += 's'), r += ' worden geselecteerd' }, noResults () { return 'Geen resultaten gevonden…' }, searching () { return 'Zoeken…' }, removeAllItems () { return 'Verwijder alle items' }
  })), e.define, e.require
}())
