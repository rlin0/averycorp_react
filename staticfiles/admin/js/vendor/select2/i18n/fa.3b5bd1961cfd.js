/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/fa', [], () => ({
    errorLoading () { return 'امکان بارگذاری نتایج وجود ندارد.' }, inputTooLong (n) { return `لطفاً ${n.input.length - n.maximum} کاراکتر را حذف نمایید` }, inputTooShort (n) { return `لطفاً تعداد ${n.minimum - n.input.length} کاراکتر یا بیشتر وارد نمایید` }, loadingMore () { return 'در حال بارگذاری نتایج بیشتر...' }, maximumSelected (n) { return `شما تنها می‌توانید ${n.maximum} آیتم را انتخاب نمایید` }, noResults () { return 'هیچ نتیجه‌ای یافت نشد' }, searching () { return 'در حال جستجو...' }, removeAllItems () { return 'همه موارد را حذف کنید' }
  })), n.define, n.require
}())
