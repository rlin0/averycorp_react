/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/vi', [], () => ({
    inputTooLong (n) { return `Vui lòng xóa bớt ${n.input.length - n.maximum} ký tự` }, inputTooShort (n) { return `Vui lòng nhập thêm từ ${n.minimum - n.input.length} ký tự trở lên` }, loadingMore () { return 'Đang lấy thêm kết quả…' }, maximumSelected (n) { return `Chỉ có thể chọn được ${n.maximum} lựa chọn` }, noResults () { return 'Không tìm thấy kết quả' }, searching () { return 'Đang tìm…' }, removeAllItems () { return 'Xóa tất cả các mục' }
  })), n.define, n.require
}())
