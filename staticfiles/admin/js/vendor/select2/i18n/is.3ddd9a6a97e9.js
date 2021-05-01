/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/is', [], () => ({
    inputTooLong (n) { const t = n.input.length - n.maximum; const e = `Vinsamlegast styttið texta um ${t} staf`; return t <= 1 ? e : `${e}i` }, inputTooShort (n) { const t = n.minimum - n.input.length; let e = `Vinsamlegast skrifið ${t} staf`; return t > 1 && (e += 'i'), e += ' í viðbót' }, loadingMore () { return 'Sæki fleiri niðurstöður…' }, maximumSelected (n) { return `Þú getur aðeins valið ${n.maximum} atriði` }, noResults () { return 'Ekkert fannst' }, searching () { return 'Leita…' }, removeAllItems () { return 'Fjarlægðu öll atriði' }
  })), n.define, n.require
}())
