/**
 * jquery.json-view - jQuery collapsible JSON plugin
 * @version v1.0.0
 * @link http://github.com/bazh/jquery.json-view
 * @license MIT
 */
!(function (e) {
  const n = function (n) { const a = e('<span />', { class: 'collapser', on: { click () { const n = e(this); n.toggleClass('collapsed'); const a = n.parent().children('.block'); const p = a.children('ul'); n.hasClass('collapsed') ? (p.hide(), a.children('.dots, .comments').show()) : (p.show(), a.children('.dots, .comments').hide()) } } }); return n && a.addClass('collapsed'), a }; const a = function (a, p) {
    const t = e.extend({}, { nl2br: !0 }, p); const r = function (e) {
      return e.toString()
        ? e.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
        : ''
    }; const s = function (n, a) { return e('<span />', { class: a, html: r(n) }) }; var l = function (a, p) {
      switch (e.type(a)) {
        case 'object': p || (p = 0); var c = e('<span />', { class: 'block' }); var d = Object.keys(a).length; if (!d) return c.append(s('{', 'b')).append(' ').append(s('}', 'b')); c.append(s('{', 'b')); var i = e('<ul />', { class: `obj collapsible level${p}` }); return e.each(a, (a, t) => {
          d--; const r = e('<li />').append(s('"', 'q')).append(a).append(s('"', 'q'))
            .append(': ')
            .append(l(t, p + 1)); ['object', 'array'].indexOf(e.type(t)) === -1 || e.isEmptyObject(t) || r.prepend(n()), d > 0 && r.append(','), i.append(r)
        }), c.append(i), c.append(s('...', 'dots')), c.append(s('}', 'b')), c.append(Object.keys(a).length === 1 ? s('// 1 item', 'comments') : s(`// ${Object.keys(a).length} items`, 'comments')), c; case 'array': p || (p = 0); var d = a.length; var c = e('<span />', { class: 'block' }); if (!d) return c.append(s('[', 'b')).append(' ').append(s(']', 'b')); c.append(s('[', 'b')); var i = e('<ul />', { class: `obj collapsible level${p}` }); return e.each(a, (a, t) => { d--; const r = e('<li />').append(l(t, p + 1)); ['object', 'array'].indexOf(e.type(t)) === -1 || e.isEmptyObject(t) || r.prepend(n()), d > 0 && r.append(','), i.append(r) }), c.append(i), c.append(s('...', 'dots')), c.append(s(']', 'b')), c.append(a.length === 1 ? s('// 1 item', 'comments') : s(`// ${a.length} items`, 'comments')), c; case 'string': if (a = r(a), /^(http|https|file):\/\/[^\s]+$/i.test(a)) return e('<span />').append(s('"', 'q')).append(e('<a />', { href: a, text: a })).append(s('"', 'q')); if (t.nl2br) { const o = /\n/g; o.test(a) && (a = (`${a}`).replace(o, '<br />')) } var u = e('<span />', { class: 'str' }).html(a); return e('<span />').append(s('"', 'q')).append(u).append(s('"', 'q')); case 'number': return s(a.toString(), 'num'); case 'undefined': return s('undefined', 'undef'); case 'null': return s('null', 'null'); case 'boolean': return s(a ? 'true' : 'false', 'bool')
      }
    }; return l(a)
  }; return e.fn.jsonView = function (n, p) { const t = e(this); if (p = e.extend({}, { nl2br: !0 }, p), typeof n === 'string') try { n = JSON.parse(n) } catch (r) {} return t.append(e('<div />', { class: 'json-view' }).append(a(n, p))), t }
}(jQuery))
