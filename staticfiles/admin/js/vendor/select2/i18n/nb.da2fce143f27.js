/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/nb', [], () => ({
    errorLoading () { return 'Kunne ikke hente resultater.' }, inputTooLong (e) { return `Vennligst fjern ${e.input.length - e.maximum} tegn` }, inputTooShort (e) { return `Vennligst skriv inn ${e.minimum - e.input.length} tegn til` }, loadingMore () { return 'Laster flere resultater…' }, maximumSelected (e) { return `Du kan velge maks ${e.maximum} elementer` }, noResults () { return 'Ingen treff' }, searching () { return 'Søker…' }, removeAllItems () { return 'Fjern alle elementer' }
  })), e.define, e.require
}())
