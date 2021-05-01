/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/ro', [], () => ({
    errorLoading () { return 'Rezultatele nu au putut fi incărcate.' }, inputTooLong (e) { const t = e.input.length - e.maximum; let n = `Vă rugăm să ștergeți${t} caracter`; return t !== 1 && (n += 'e'), n }, inputTooShort (e) { return `Vă rugăm să introduceți ${e.minimum - e.input.length} sau mai multe caractere` }, loadingMore () { return 'Se încarcă mai multe rezultate…' }, maximumSelected (e) { let t = `Aveți voie să selectați cel mult ${e.maximum}`; return t += ' element', e.maximum !== 1 && (t += 'e'), t }, noResults () { return 'Nu au fost găsite rezultate' }, searching () { return 'Căutare…' }, removeAllItems () { return 'Eliminați toate elementele' }
  })), e.define, e.require
}())
