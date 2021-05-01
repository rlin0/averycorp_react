/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/ms', [], () => ({
    errorLoading () { return 'Keputusan tidak berjaya dimuatkan.' }, inputTooLong (n) { return `Sila hapuskan ${n.input.length - n.maximum} aksara` }, inputTooShort (n) { return `Sila masukkan ${n.minimum - n.input.length} atau lebih aksara` }, loadingMore () { return 'Sedang memuatkan keputusan…' }, maximumSelected (n) { return `Anda hanya boleh memilih ${n.maximum} pilihan` }, noResults () { return 'Tiada padanan yang ditemui' }, searching () { return 'Mencari…' }, removeAllItems () { return 'Keluarkan semua item' }
  })), n.define, n.require
}())
