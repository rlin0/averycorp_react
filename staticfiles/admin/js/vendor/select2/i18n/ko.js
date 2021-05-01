/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; n.define('select2/i18n/ko', [], () => ({
    errorLoading () { return '결과를 불러올 수 없습니다.' }, inputTooLong (n) { return `너무 깁니다. ${n.input.length - n.maximum} 글자 지워주세요.` }, inputTooShort (n) { return `너무 짧습니다. ${n.minimum - n.input.length} 글자 더 입력해주세요.` }, loadingMore () { return '불러오는 중…' }, maximumSelected (n) { return `최대 ${n.maximum}개까지만 선택 가능합니다.` }, noResults () { return '결과가 없습니다.' }, searching () { return '검색 중…' }, removeAllItems () { return '모든 항목 삭제' }
  })), n.define, n.require
}())
