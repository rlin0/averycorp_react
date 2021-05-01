/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/km', [], () => ({
    errorLoading () { return 'មិនអាចទាញយកទិន្នន័យ' }, inputTooLong (n) { return `សូមលុបចេញ  ${n.input.length - n.maximum} អក្សរ` }, inputTooShort (n) { return `សូមបញ្ចូល${n.minimum - n.input.length} អក្សរ រឺ ច្រើនជាងនេះ` }, loadingMore () { return 'កំពុងទាញយកទិន្នន័យបន្ថែម...' }, maximumSelected (n) { return `អ្នកអាចជ្រើសរើសបានតែ ${n.maximum} ជម្រើសប៉ុណ្ណោះ` }, noResults () { return 'មិនមានលទ្ធផល' }, searching () { return 'កំពុងស្វែងរក...' }, removeAllItems () { return 'លុបធាតុទាំងអស់' }
  })), n.define, n.require
}())
