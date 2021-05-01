/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/hu', [], () => ({
    errorLoading () { return 'Az eredmények betöltése nem sikerült.' }, inputTooLong (e) { return `Túl hosszú. ${e.input.length - e.maximum} karakterrel több, mint kellene.` }, inputTooShort (e) { return `Túl rövid. Még ${e.minimum - e.input.length} karakter hiányzik.` }, loadingMore () { return 'Töltés…' }, maximumSelected (e) { return `Csak ${e.maximum} elemet lehet kiválasztani.` }, noResults () { return 'Nincs találat.' }, searching () { return 'Keresés…' }, removeAllItems () { return 'Távolítson el minden elemet' }
  })), e.define, e.require
}())
