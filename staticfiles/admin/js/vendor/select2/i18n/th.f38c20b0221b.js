/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/th', [], () => ({
    errorLoading () { return 'ไม่สามารถค้นข้อมูลได้' }, inputTooLong (n) { return `โปรดลบออก ${n.input.length - n.maximum} ตัวอักษร` }, inputTooShort (n) { return `โปรดพิมพ์เพิ่มอีก ${n.minimum - n.input.length} ตัวอักษร` }, loadingMore () { return 'กำลังค้นข้อมูลเพิ่ม…' }, maximumSelected (n) { return `คุณสามารถเลือกได้ไม่เกิน ${n.maximum} รายการ` }, noResults () { return 'ไม่พบข้อมูล' }, searching () { return 'กำลังค้นข้อมูล…' }, removeAllItems () { return 'ลบรายการทั้งหมด' }
  })), n.define, n.require
}())
