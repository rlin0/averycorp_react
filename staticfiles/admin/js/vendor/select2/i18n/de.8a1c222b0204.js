/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/de', [], () => ({
    errorLoading () { return 'Die Ergebnisse konnten nicht geladen werden.' }, inputTooLong (e) { return `Bitte ${e.input.length - e.maximum} Zeichen weniger eingeben` }, inputTooShort (e) { return `Bitte ${e.minimum - e.input.length} Zeichen mehr eingeben` }, loadingMore () { return 'Lade mehr Ergebnisse…' }, maximumSelected (e) { let n = `Sie können nur ${e.maximum} Element`; return e.maximum != 1 && (n += 'e'), n += ' auswählen' }, noResults () { return 'Keine Übereinstimmungen gefunden' }, searching () { return 'Suche…' }, removeAllItems () { return 'Entferne alle Elemente' }
  })), e.define, e.require
}())
