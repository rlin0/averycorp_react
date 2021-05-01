/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/af', [], () => ({
    errorLoading () { return 'Die resultate kon nie gelaai word nie.' }, inputTooLong (e) { const n = e.input.length - e.maximum; let r = `Verwyders asseblief ${n} character`; return n != 1 && (r += 's'), r }, inputTooShort (e) { return `Voer asseblief ${e.minimum - e.input.length} of meer karakters` }, loadingMore () { return 'Meer resultate word gelaai…' }, maximumSelected (e) { let n = `Kies asseblief net ${e.maximum} item`; return e.maximum != 1 && (n += 's'), n }, noResults () { return 'Geen resultate gevind' }, searching () { return 'Besig…' }, removeAllItems () { return 'Verwyder alle items' }
  })), e.define, e.require
}())
