/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd; e.define('select2/i18n/fr', [], () => ({
    errorLoading () { return 'Les résultats ne peuvent pas être chargés.' }, inputTooLong (e) { const n = e.input.length - e.maximum; return `Supprimez ${n} caractère${n > 1 ? 's' : ''}` }, inputTooShort (e) { const n = e.minimum - e.input.length; return `Saisissez au moins ${n} caractère${n > 1 ? 's' : ''}` }, loadingMore () { return 'Chargement de résultats supplémentaires…' }, maximumSelected (e) { return `Vous pouvez seulement sélectionner ${e.maximum} élément${e.maximum > 1 ? 's' : ''}` }, noResults () { return 'Aucun résultat trouvé' }, searching () { return 'Recherche en cours…' }, removeAllItems () { return 'Supprimer tous les éléments' }
  })), e.define, e.require
}())
