/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/sl', [], () => ({
    errorLoading () { return 'Zadetkov iskanja ni bilo mogoče naložiti.' }, inputTooLong (e) { const n = e.input.length - e.maximum; let t = `Prosim zbrišite ${n} znak`; return n == 2 ? t += 'a' : n != 1 && (t += 'e'), t }, inputTooShort (e) { const n = e.minimum - e.input.length; let t = `Prosim vpišite še ${n} znak`; return n == 2 ? t += 'a' : n != 1 && (t += 'e'), t }, loadingMore () { return 'Nalagam več zadetkov…' }, maximumSelected (e) { let n = `Označite lahko največ ${e.maximum} predmet`; return e.maximum == 2 ? n += 'a' : e.maximum != 1 && (n += 'e'), n }, noResults () { return 'Ni zadetkov.' }, searching () { return 'Iščem…' }, removeAllItems () { return 'Odstranite vse elemente' }
  })), e.define, e.require
}())
