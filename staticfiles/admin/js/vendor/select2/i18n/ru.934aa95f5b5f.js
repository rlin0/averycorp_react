/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/ru', [], () => {
    function n (n, e, r, u) { return n % 10 < 5 && n % 10 > 0 && n % 100 < 5 || n % 100 > 20 ? n % 10 > 1 ? r : e : u } return {
      errorLoading () { return 'Невозможно загрузить результаты' }, inputTooLong (e) { const r = e.input.length - e.maximum; let u = `Пожалуйста, введите на ${r} символ`; return u += n(r, '', 'a', 'ов'), u += ' меньше' }, inputTooShort (e) { const r = e.minimum - e.input.length; let u = `Пожалуйста, введите ещё хотя бы ${r} символ`; return u += n(r, '', 'a', 'ов') }, loadingMore () { return 'Загрузка данных…' }, maximumSelected (e) { let r = `Вы можете выбрать не более ${e.maximum} элемент`; return r += n(e.maximum, '', 'a', 'ов') }, noResults () { return 'Совпадений не найдено' }, searching () { return 'Поиск…' }, removeAllItems () { return 'Удалить все элементы' }
    }
  }), n.define, n.require
}())
