/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/he', [], () => ({
    errorLoading () { return 'שגיאה בטעינת התוצאות' }, inputTooLong (n) { const e = n.input.length - n.maximum; let r = 'נא למחוק '; return r += e === 1 ? 'תו אחד' : `${e} תווים` }, inputTooShort (n) { const e = n.minimum - n.input.length; let r = 'נא להכניס '; return r += e === 1 ? 'תו אחד' : `${e} תווים`, r += ' או יותר' }, loadingMore () { return 'טוען תוצאות נוספות…' }, maximumSelected (n) { let e = 'באפשרותך לבחור עד '; return n.maximum === 1 ? e += 'פריט אחד' : e += `${n.maximum} פריטים`, e }, noResults () { return 'לא נמצאו תוצאות' }, searching () { return 'מחפש…' }, removeAllItems () { return 'הסר את כל הפריטים' }
  })), n.define, n.require
}())
