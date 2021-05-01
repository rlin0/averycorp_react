/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/it', [], () => ({
    errorLoading () { return 'I risultati non possono essere caricati.' }, inputTooLong (e) { const n = e.input.length - e.maximum; let t = `Per favore cancella ${n} caratter`; return t += n !== 1 ? 'i' : 'e' }, inputTooShort (e) { return `Per favore inserisci ${e.minimum - e.input.length} o più caratteri` }, loadingMore () { return 'Caricando più risultati…' }, maximumSelected (e) { let n = `Puoi selezionare solo ${e.maximum} element`; return e.maximum !== 1 ? n += 'i' : n += 'o', n }, noResults () { return 'Nessun risultato trovato' }, searching () { return 'Sto cercando…' }, removeAllItems () { return 'Rimuovi tutti gli oggetti' }
  })), e.define, e.require
}())
