/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/mk', [], () => ({
    inputTooLong (n) { let e = (n.input.length, n.maximum, `Ве молиме внесете ${n.maximum} помалку карактер`); return n.maximum !== 1 && (e += 'и'), e }, inputTooShort (n) { let e = (n.minimum, n.input.length, `Ве молиме внесете уште ${n.maximum} карактер`); return n.maximum !== 1 && (e += 'и'), e }, loadingMore () { return 'Вчитување резултати…' }, maximumSelected (n) { let e = `Можете да изберете само ${n.maximum} ставк`; return n.maximum === 1 ? e += 'а' : e += 'и', e }, noResults () { return 'Нема пронајдено совпаѓања' }, searching () { return 'Пребарување…' }, removeAllItems () { return 'Отстрани ги сите предмети' }
  })), n.define, n.require
}())
