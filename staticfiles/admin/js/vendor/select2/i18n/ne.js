/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/ne', [], () => ({
    errorLoading () { return 'नतिजाहरु देखाउन सकिएन।' }, inputTooLong (n) { const e = n.input.length - n.maximum; let u = `कृपया ${e} अक्षर मेटाउनुहोस्।`; return e != 1 && (u += `कृपया ${e} अक्षरहरु मेटाउनुहोस्।`), u }, inputTooShort (n) { return `कृपया बाँकी रहेका ${n.minimum - n.input.length} वा अरु धेरै अक्षरहरु भर्नुहोस्।` }, loadingMore () { return 'अरु नतिजाहरु भरिँदैछन् …' }, maximumSelected (n) { let e = `तँपाई ${n.maximum} वस्तु मात्र छान्न पाउँनुहुन्छ।`; return n.maximum != 1 && (e = `तँपाई ${n.maximum} वस्तुहरु मात्र छान्न पाउँनुहुन्छ।`), e }, noResults () { return 'कुनै पनि नतिजा भेटिएन।' }, searching () { return 'खोजि हुँदैछ…' }
  })), n.define, n.require
}())
