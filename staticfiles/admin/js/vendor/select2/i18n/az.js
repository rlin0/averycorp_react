/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/az', [], () => ({
    inputTooLong (n) { return `${n.input.length - n.maximum} simvol silin` }, inputTooShort (n) { return `${n.minimum - n.input.length} simvol daxil edin` }, loadingMore () { return 'Daha çox nəticə yüklənir…' }, maximumSelected (n) { return `Sadəcə ${n.maximum} element seçə bilərsiniz` }, noResults () { return 'Nəticə tapılmadı' }, searching () { return 'Axtarılır…' }, removeAllItems () { return 'Bütün elementləri sil' }
  })), n.define, n.require
}())
