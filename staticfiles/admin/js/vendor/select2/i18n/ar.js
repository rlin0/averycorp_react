/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/ar', [], () => ({
    errorLoading () { return 'لا يمكن تحميل النتائج' }, inputTooLong (n) { return `الرجاء حذف ${n.input.length - n.maximum} عناصر` }, inputTooShort (n) { return `الرجاء إضافة ${n.minimum - n.input.length} عناصر` }, loadingMore () { return 'جاري تحميل نتائج إضافية...' }, maximumSelected (n) { return `تستطيع إختيار ${n.maximum} بنود فقط` }, noResults () { return 'لم يتم العثور على أي نتائج' }, searching () { return 'جاري البحث…' }, removeAllItems () { return 'قم بإزالة كل العناصر' }
  })), n.define, n.require
}())
