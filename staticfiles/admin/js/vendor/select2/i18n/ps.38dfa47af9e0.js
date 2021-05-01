/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/ps', [], () => ({
    errorLoading () { return 'پايلي نه سي ترلاسه کېدای' }, inputTooLong (n) { const e = n.input.length - n.maximum; let r = `د مهربانۍ لمخي ${e} توری ړنګ کړئ`; return e != 1 && (r = r.replace('توری', 'توري')), r }, inputTooShort (n) { return `لږ تر لږه ${n.minimum - n.input.length} يا ډېر توري وليکئ` }, loadingMore () { return 'نوري پايلي ترلاسه کيږي...' }, maximumSelected (n) { let e = `تاسو يوازي ${n.maximum} قلم په نښه کولای سی`; return n.maximum != 1 && (e = e.replace('قلم', 'قلمونه')), e }, noResults () { return 'پايلي و نه موندل سوې' }, searching () { return 'لټول کيږي...' }, removeAllItems () { return 'ټول توکي لرې کړئ' }
  })), n.define, n.require
}())
