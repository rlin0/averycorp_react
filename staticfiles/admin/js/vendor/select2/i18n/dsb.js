/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/dsb', [], () => {
    const n = ['znamuško', 'znamušce', 'znamuška', 'znamuškow']; const e = ['zapisk', 'zapiska', 'zapiski', 'zapiskow']; const u = function (n, e) { return n === 1 ? e[0] : n === 2 ? e[1] : n > 2 && n <= 4 ? e[2] : n >= 5 ? e[3] : void 0 }; return {
      errorLoading () { return 'Wuslědki njejsu se dali zacytaś.' }, inputTooLong (e) { const a = e.input.length - e.maximum; return `Pšosym lašuj ${a} ${u(a, n)}` }, inputTooShort (e) { const a = e.minimum - e.input.length; return `Pšosym zapódaj nanejmjenjej ${a} ${u(a, n)}` }, loadingMore () { return 'Dalšne wuslědki se zacytaju…' }, maximumSelected (n) { return `Móžoš jano ${n.maximum} ${u(n.maximum, e)}wubraś.` }, noResults () { return 'Žedne wuslědki namakane' }, searching () { return 'Pyta se…' }, removeAllItems () { return 'Remove all items' }
    }
  }), n.define, n.require
}())
