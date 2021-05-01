/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/et', [], () => ({
    inputTooLong (e) { const n = e.input.length - e.maximum; let t = `Sisesta ${n} täht`; return n != 1 && (t += 'e'), t += ' vähem' }, inputTooShort (e) { const n = e.minimum - e.input.length; let t = `Sisesta ${n} täht`; return n != 1 && (t += 'e'), t += ' rohkem' }, loadingMore () { return 'Laen tulemusi…' }, maximumSelected (e) { let n = `Saad vaid ${e.maximum} tulemus`; return e.maximum == 1 ? n += 'e' : n += 't', n += ' valida' }, noResults () { return 'Tulemused puuduvad' }, searching () { return 'Otsin…' }, removeAllItems () { return 'Eemalda kõik esemed' }
  })), e.define, e.require
}())
