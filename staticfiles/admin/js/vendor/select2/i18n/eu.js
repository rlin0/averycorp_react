/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/eu', [], () => ({
    inputTooLong (e) { const t = e.input.length - e.maximum; let n = 'Idatzi '; return n += t == 1 ? 'karaktere bat' : `${t} karaktere`, n += ' gutxiago' }, inputTooShort (e) { const t = e.minimum - e.input.length; let n = 'Idatzi '; return n += t == 1 ? 'karaktere bat' : `${t} karaktere`, n += ' gehiago' }, loadingMore () { return 'Emaitza gehiago kargatzen…' }, maximumSelected (e) { return e.maximum === 1 ? 'Elementu bakarra hauta dezakezu' : `${e.maximum} elementu hauta ditzakezu soilik` }, noResults () { return 'Ez da bat datorrenik aurkitu' }, searching () { return 'Bilatzen…' }, removeAllItems () { return 'Kendu elementu guztiak' }
  })), e.define, e.require
}())
