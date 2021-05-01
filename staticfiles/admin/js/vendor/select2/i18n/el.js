/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/el', [], () => ({
    errorLoading () { return 'Τα αποτελέσματα δεν μπόρεσαν να φορτώσουν.' }, inputTooLong (n) { const e = n.input.length - n.maximum; let u = `Παρακαλώ διαγράψτε ${e} χαρακτήρ`; return e == 1 && (u += 'α'), e != 1 && (u += 'ες'), u }, inputTooShort (n) { return `Παρακαλώ συμπληρώστε ${n.minimum - n.input.length} ή περισσότερους χαρακτήρες` }, loadingMore () { return 'Φόρτωση περισσότερων αποτελεσμάτων…' }, maximumSelected (n) { let e = `Μπορείτε να επιλέξετε μόνο ${n.maximum} επιλογ`; return n.maximum == 1 && (e += 'ή'), n.maximum != 1 && (e += 'ές'), e }, noResults () { return 'Δεν βρέθηκαν αποτελέσματα' }, searching () { return 'Αναζήτηση…' }, removeAllItems () { return 'Καταργήστε όλα τα στοιχεία' }
  })), n.define, n.require
}())
