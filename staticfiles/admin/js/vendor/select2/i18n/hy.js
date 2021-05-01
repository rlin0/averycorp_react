/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/hy', [], () => ({
    errorLoading () { return 'Արդյունքները հնարավոր չէ բեռնել։' }, inputTooLong (n) { return `Խնդրում ենք հեռացնել ${n.input.length - n.maximum} նշան` }, inputTooShort (n) { return `Խնդրում ենք մուտքագրել ${n.minimum - n.input.length} կամ ավել նշաններ` }, loadingMore () { return 'Բեռնվում են նոր արդյունքներ․․․' }, maximumSelected (n) { return `Դուք կարող եք ընտրել առավելագույնը ${n.maximum} կետ` }, noResults () { return 'Արդյունքներ չեն գտնվել' }, searching () { return 'Որոնում․․․' }, removeAllItems () { return 'Հեռացնել բոլոր տարրերը' }
  })), n.define, n.require
}())
