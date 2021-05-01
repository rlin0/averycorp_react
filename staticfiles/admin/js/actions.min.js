{ const a = django.jQuery; let e; a.fn.actions = function (g) {
  const b = a.extend({}, a.fn.actions.defaults, g); const f = a(this); let k = !1; const l = function () { a(b.acrossClears).hide(); a(b.acrossQuestions).show(); a(b.allContainer).hide() }; const m = function () { a(b.acrossClears).show(); a(b.acrossQuestions).hide(); a(b.actionContainer).toggleClass(b.selectedClass); a(b.allContainer).show(); a(b.counterContainer).hide() }; const n = function () { a(b.acrossClears).hide(); a(b.acrossQuestions).hide(); a(b.allContainer).hide(); a(b.counterContainer).show() }
  const p = function () { n(); a(b.acrossInput).val(0); a(b.actionContainer).removeClass(b.selectedClass) }; const q = function (c) {
    c ? l() : n(); a(f).prop('checked', c).parent().parent()
      .toggleClass(b.selectedClass, c)
  }; const h = function () { const c = a(f).filter(':checked').length; const d = a('.action-counter').data('actionsIcnt'); a(b.counterContainer).html(interpolate(ngettext('%(sel)s of %(cnt)s selected', '%(sel)s of %(cnt)s selected', c), { sel: c, cnt: d }, !0)); a(b.allToggle).prop('checked', () => { let a; c === f.length ? (a = !0, l()) : (a = !1, p()); return a }) }
  a(b.counterContainer).show(); a(this).filter(':checked').each(function (c) { a(this).parent().parent().toggleClass(b.selectedClass); h(); a(b.acrossInput).val() === 1 && m() }); a(b.allToggle).show().on('click', function () { q(a(this).prop('checked')); h() }); a('a', b.acrossQuestions).on('click', (c) => { c.preventDefault(); a(b.acrossInput).val(1); m() }); a('a', b.acrossClears).on('click', (c) => { c.preventDefault(); a(b.allToggle).prop('checked', !1); p(); q(0); h() }); e = null; a(f).on('click', (c) => {
    c || (c = window.event)
    const d = c.target ? c.target : c.srcElement; if (e && a.data(e) !== a.data(d) && !0 === c.shiftKey) {
      let c = !1; a(e).prop('checked', d.checked).parent().parent()
        .toggleClass(b.selectedClass, d.checked); a(f).each(function () {
        if (a.data(this) === a.data(e) || a.data(this) === a.data(d))c = c ? !1 : !0; c && a(this).prop('checked', d.checked).parent().parent()
          .toggleClass(b.selectedClass, d.checked)
      })
    }a(d).parent().parent().toggleClass(b.selectedClass, d.checked); e = d; h()
  }); a('form#changelist-form table#result_list tr').on('change', 'td:gt(0) :input',
    () => { k = !0 }); a('form#changelist-form button[name="index"]').on('click', (a) => { if (k) return confirm(gettext('You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.')) }); a('form#changelist-form input[name="_save"]').on('click', (c) => {
    let d = !1; a('select option:selected', b.actionContainer).each(function () { a(this).val() && (d = !0) }); if (d) {
      return k
        ? confirm(gettext('You have selected an action, but you haven\u2019t saved your changes to individual fields yet. Please click OK to save. You\u2019ll need to re-run the action.'))
        : confirm(gettext('You have selected an action, and you haven\u2019t made any changes on individual fields. You\u2019re probably looking for the Go button rather than the Save button.'))
    }
  })
}; a.fn.actions.defaults = {
  actionContainer: 'div.actions', counterContainer: 'span.action-counter', allContainer: 'div.actions span.all', acrossInput: 'div.actions input.select-across', acrossQuestions: 'div.actions span.question', acrossClears: 'div.actions span.clear', allToggle: '#action-toggle', selectedClass: 'selected'
}; a(document).ready(() => {
  const g = a('tr input.action-select'); g.length > 0 && g.actions()
}) }
