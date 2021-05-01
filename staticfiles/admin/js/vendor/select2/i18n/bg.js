/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/bg', [], () => ({
    inputTooLong (n) { const e = n.input.length - n.maximum; let u = `Моля въведете с ${e} по-малко символ`; return e > 1 && (u += 'a'), u }, inputTooShort (n) { const e = n.minimum - n.input.length; let u = `Моля въведете още ${e} символ`; return e > 1 && (u += 'a'), u }, loadingMore () { return 'Зареждат се още…' }, maximumSelected (n) { let e = `Можете да направите до ${n.maximum} `; return n.maximum > 1 ? e += 'избора' : e += 'избор', e }, noResults () { return 'Няма намерени съвпадения' }, searching () { return 'Търсене…' }, removeAllItems () { return 'Премахнете всички елементи' }
  })), n.define, n.require
}())
