/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/pl', [], () => {
    const n = ['znak', 'znaki', 'znaków']; const e = ['element', 'elementy', 'elementów']; const r = function (n, e) { return n === 1 ? e[0] : n > 1 && n <= 4 ? e[1] : n >= 5 ? e[2] : void 0 }; return {
      errorLoading () { return 'Nie można załadować wyników.' }, inputTooLong (e) { const t = e.input.length - e.maximum; return `Usuń ${t} ${r(t, n)}` }, inputTooShort (e) { const t = e.minimum - e.input.length; return `Podaj przynajmniej ${t} ${r(t, n)}` }, loadingMore () { return 'Trwa ładowanie…' }, maximumSelected (n) { return `Możesz zaznaczyć tylko ${n.maximum} ${r(n.maximum, e)}` }, noResults () { return 'Brak wyników' }, searching () { return 'Trwa wyszukiwanie…' }, removeAllItems () { return 'Usuń wszystkie przedmioty' }
    }
  }), n.define, n.require
}())
