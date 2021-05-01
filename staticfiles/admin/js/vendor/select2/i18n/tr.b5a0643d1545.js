/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/tr', [], () => ({
    errorLoading () { return 'Sonuç yüklenemedi' }, inputTooLong (n) { return `${n.input.length - n.maximum} karakter daha girmelisiniz` }, inputTooShort (n) { return `En az ${n.minimum - n.input.length} karakter daha girmelisiniz` }, loadingMore () { return 'Daha fazla…' }, maximumSelected (n) { return `Sadece ${n.maximum} seçim yapabilirsiniz` }, noResults () { return 'Sonuç bulunamadı' }, searching () { return 'Aranıyor…' }, removeAllItems () { return 'Tüm öğeleri kaldır' }
  })), n.define, n.require
}())
