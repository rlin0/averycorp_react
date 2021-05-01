/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/tk', [], () => ({
    errorLoading () { return 'Netije ýüklenmedi.' }, inputTooLong (e) { return `${e.input.length - e.maximum} harp bozuň.` }, inputTooShort (e) { return `Ýene-de iň az ${e.minimum - e.input.length} harp ýazyň.` }, loadingMore () { return 'Köpräk netije görkezilýär…' }, maximumSelected (e) { return `Diňe ${e.maximum} sanysyny saýlaň.` }, noResults () { return 'Netije tapylmady.' }, searching () { return 'Gözlenýär…' }, removeAllItems () { return 'Remove all items' }
  })), e.define, e.require
}())
