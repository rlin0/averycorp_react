/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/uk', [], () => {
    function n (n, e, u, r) { return n % 100 > 10 && n % 100 < 15 ? r : n % 10 == 1 ? e : n % 10 > 1 && n % 10 < 5 ? u : r } return {
      errorLoading () { return 'Неможливо завантажити результати' }, inputTooLong (e) { return `Будь ласка, видаліть ${e.input.length - e.maximum} ${n(e.maximum, 'літеру', 'літери', 'літер')}` }, inputTooShort (n) { return `Будь ласка, введіть ${n.minimum - n.input.length} або більше літер` }, loadingMore () { return 'Завантаження інших результатів…' }, maximumSelected (e) { return `Ви можете вибрати лише ${e.maximum} ${n(e.maximum, 'пункт', 'пункти', 'пунктів')}` }, noResults () { return 'Нічого не знайдено' }, searching () { return 'Пошук…' }, removeAllItems () { return 'Видалити всі елементи' }
    }
  }), n.define, n.require
}())
