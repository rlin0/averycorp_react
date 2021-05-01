/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/en', [], () => ({
    errorLoading () { return 'The results could not be loaded.' }, inputTooLong (e) { const n = e.input.length - e.maximum; let r = `Please delete ${n} character`; return n != 1 && (r += 's'), r }, inputTooShort (e) { return `Please enter ${e.minimum - e.input.length} or more characters` }, loadingMore () { return 'Loading more results…' }, maximumSelected (e) { let n = `You can only select ${e.maximum} item`; return e.maximum != 1 && (n += 's'), n }, noResults () { return 'No results found' }, searching () { return 'Searching…' }, removeAllItems () { return 'Remove all items' }
  })), e.define, e.require
}())
