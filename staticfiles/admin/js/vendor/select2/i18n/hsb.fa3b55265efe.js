/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/hsb', [], () => {
    const n = ['znamješko', 'znamješce', 'znamješka', 'znamješkow']; const e = ['zapisk', 'zapiskaj', 'zapiski', 'zapiskow']; const u = function (n, e) { return n === 1 ? e[0] : n === 2 ? e[1] : n > 2 && n <= 4 ? e[2] : n >= 5 ? e[3] : void 0 }; return {
      errorLoading () { return 'Wuslědki njedachu so začitać.' }, inputTooLong (e) { const a = e.input.length - e.maximum; return `Prošu zhašej ${a} ${u(a, n)}` }, inputTooShort (e) { const a = e.minimum - e.input.length; return `Prošu zapodaj znajmjeńša ${a} ${u(a, n)}` }, loadingMore () { return 'Dalše wuslědki so začitaja…' }, maximumSelected (n) { return `Móžeš jenož ${n.maximum} ${u(n.maximum, e)}wubrać` }, noResults () { return 'Žane wuslědki namakane' }, searching () { return 'Pyta so…' }, removeAllItems () { return 'Remove all items' }
    }
  }), n.define, n.require
}())
