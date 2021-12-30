/*!
 * modernizr.min.js
 */
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-objectfit-touchevents-setclasses !*/
/*!
 * stylehatch-standards.js
 */
function replaceUrlParam(e, t, n) {
  var i = new RegExp("(" + t + "=).*?(&|$)"),
    o = e;
  return o = e.search(i) >= 0 ? e.replace(i, "$1" + n + "$2") : o + (o.indexOf("?") > 0 ? "&" : "?") + t + "=" + n
}

function removeDataAttributes(e) {
  var t, n = $(e);
  if (n.length > 0) {
    var i = [],
      o = n.get(0).attributes,
      r = o.length;
    for (t = 0; t < r; t++) "data-" === o[t].name.substring(0, 5) && i.push(o[t].name);
    $.each(i, function(e, t) { n.removeAttr(t) })
  }
}

function wordWrapper(e, t, n) {
  if (e.length > t) {
    for (var i = t; i > 0 && " " != e[i]; i--);
    if (i > 0) {
      var o = e.substring(0, i),
        r = e.substring(i + 1);
      return o + n + wordWrapper(r, t, n)
    }
  }
  return e
}! function(e, t, n) {
  function i(e, t) { return typeof e === t }

  function o() {
    var e, t, n, o, r, s, a;
    for (var l in x)
      if (x.hasOwnProperty(l)) {
        if (e = [], t = x[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
          for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
        for (o = i(t.fn, "function") ? t.fn() : t.fn, r = 0; r < e.length; r++) s = e[r], a = s.split("."), 1 === a.length ? b[a[0]] = o : (!b[a[0]] || b[a[0]] instanceof Boolean || (b[a[0]] = new Boolean(b[a[0]])), b[a[0]][a[1]] = o), y.push((o ? "" : "no-") + a.join("-"))
      }
  }

  function r(e) {
    var t = C.className,
      n = b._config.classPrefix || "";
    if (_ && (t = t.baseVal), b._config.enableJSClass) {
      var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(i, "$1" + n + "js$2")
    }
    b._config.enableClasses && (t += " " + n + e.join(" " + n), _ ? C.className.baseVal = t : C.className = t)
  }

  function s(e) { return e.replace(/([a-z])-([a-z])/g, function(e, t, n) { return t + n.toUpperCase() }).replace(/^-/, "") }

  function a(e, t) { return !!~("" + e).indexOf(t) }

  function l() { return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments) }

  function c(e, t) { return function() { return e.apply(t, arguments) } }

  function u(e, t, n) {
    var o;
    for (var r in e)
      if (e[r] in t) return n === !1 ? e[r] : (o = t[e[r]], i(o, "function") ? c(o, n || t) : o);
    return !1
  }

  function d(e) { return e.replace(/([A-Z])/g, function(e, t) { return "-" + t.toLowerCase() }).replace(/^ms-/, "-ms-") }

  function p(t, n, i) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var r = e.console;
      if (null !== o) i && (o = o.getPropertyValue(i));
      else if (r) {
        var s = r.error ? "error" : "log";
        r[s].call(r, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
      }
    } else o = !n && t.currentStyle && t.currentStyle[i];
    return o
  }

  function f() { var e = t.body; return e || (e = l(_ ? "svg" : "body"), e.fake = !0), e }

  function h(e, n, i, o) {
    var r, s, a, c, u = "modernizr",
      d = l("div"),
      p = f();
    if (parseInt(i, 10))
      for (; i--;) a = l("div"), a.id = o ? o[i] : u + (i + 1), d.appendChild(a);
    return r = l("style"), r.type = "text/css", r.id = "s" + u, (p.fake ? p : d).appendChild(r), p.appendChild(d), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)), d.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = C.style.overflow, C.style.overflow = "hidden", C.appendChild(p)), s = n(d, e), p.fake ? (p.parentNode.removeChild(p), C.style.overflow = c, C.offsetHeight) : d.parentNode.removeChild(d), !!s
  }

  function m(t, i) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;)
        if (e.CSS.supports(d(t[o]), i)) return !0;
      return !1
    }
    if ("CSSSupportsRule" in e) { for (var r = []; o--;) r.push("(" + d(t[o]) + ":" + i + ")"); return r = r.join(" or "), h("@supports (" + r + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == p(e, null, "position") }) }
    return n
  }

  function g(e, t, o, r) {
    function c() { d && (delete A.style, delete A.modElem) }
    if (r = !i(r, "undefined") && r, !i(o, "undefined")) { var u = m(e, o); if (!i(u, "undefined")) return u }
    for (var d, p, f, h, g, v = ["modernizr", "tspan", "samp"]; !A.style && v.length;) d = !0, A.modElem = l(v.shift()), A.style = A.modElem.style;
    for (f = e.length, p = 0; f > p; p++)
      if (h = e[p], g = A.style[h], a(h, "-") && (h = s(h)), A.style[h] !== n) { if (r || i(o, "undefined")) return c(), "pfx" != t || h; try { A.style[h] = o } catch (e) {} if (A.style[h] != g) return c(), "pfx" != t || h }
    return c(), !1
  }

  function v(e, t, n, o, r) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + S.join(s + " ") + s).split(" ");
    return i(t, "string") || i(t, "undefined") ? g(a, t, o, r) : (a = (e + " " + k.join(s + " ") + s).split(" "), u(a, t, n))
  }
  var y = [],
    x = [],
    w = {
      _version: "3.5.0",
      _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
      _q: [],
      on: function(e, t) {
        var n = this;
        setTimeout(function() { t(n[e]) }, 0)
      },
      addTest: function(e, t, n) { x.push({ name: e, fn: t, options: n }) },
      addAsyncTest: function(e) { x.push({ name: null, fn: e }) }
    },
    b = function() {};
  b.prototype = w, b = new b;
  var C = t.documentElement,
    _ = "svg" === C.nodeName.toLowerCase(),
    E = "Moz O ms Webkit",
    S = w._config.usePrefixes ? E.split(" ") : [];
  w._cssomPrefixes = S;
  var T = function(t) {
    var i, o = z.length,
      r = e.CSSRule;
    if ("undefined" == typeof r) return n;
    if (!t) return !1;
    if (t = t.replace(/^@/, ""), i = t.replace(/-/g, "_").toUpperCase() + "_RULE", i in r) return "@" + t;
    for (var s = 0; o > s; s++) {
      var a = z[s],
        l = a.toUpperCase() + "_" + i;
      if (l in r) return "@-" + a.toLowerCase() + "-" + t
    }
    return !1
  };
  w.atRule = T;
  var k = w._config.usePrefixes ? E.toLowerCase().split(" ") : [];
  w._domPrefixes = k;
  var P = { elem: l("modernizr") };
  b._q.push(function() { delete P.elem });
  var A = { style: P.elem.style };
  b._q.unshift(function() { delete A.style }), w.testAllProps = v;
  var I = w.prefixed = function(e, t, n) { return 0 === e.indexOf("@") ? T(e) : (-1 != e.indexOf("-") && (e = s(e)), t ? v(e, t, n) : v(e, "pfx")) };
  b.addTest("objectfit", !!I("objectFit"), { aliases: ["object-fit"] });
  var z = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  w._prefixes = z;
  var D = w.testStyles = h;
  b.addTest("touchevents", function() {
    var n;
    if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
    else {
      var i = ["@media (", z.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      D(i, function(e) { n = 9 === e.offsetTop })
    }
    return n
  }), o(), r(y), delete w.addTest, delete w.addAsyncTest;
  for (var L = 0; L < b._q.length; L++) b._q[L]();
  e.Modernizr = b
}(window, document),
/*!
 * log.js
 */
/*! log.js 0.1.5 */
function() {
  var e, t, n, i, o, r, s, a, l, c, u, d, p, f, h;
  window.console && window.console.log && (c = function() { var e; return e = [], u(arguments).forEach(function(t) { return "string" == typeof t ? e = e.concat(f(t)) : e.push(t) }), h.apply(window, e) }, h = function() { return console.log.apply(console, u(arguments)) }, u = function(e) { return Array.prototype.slice.call(e) }, n = [{ regex: /\*([^\*]+)\*/, replacer: function(e, t) { return "%c" + t + "%c" }, styles: function() { return ["font-style: italic", ""] } }, { regex: /\_([^\_]+)\_/, replacer: function(e, t) { return "%c" + t + "%c" }, styles: function() { return ["font-weight: bold", ""] } }, { regex: /\`([^\`]+)\`/, replacer: function(e, t) { return "%c" + t + "%c" }, styles: function() { return ["background: rgb(255, 255, 219); padding: 1px 5px; border: 1px solid rgba(0, 0, 0, 0.1)", ""] } }, { regex: /\[c\=(?:\"|\')?((?:(?!(?:\"|\')\]).)*)(?:\"|\')?\]((?:(?!\[c\]).)*)\[c\]/, replacer: function(e, t, n) { return "%c" + n + "%c" }, styles: function(e) { return [e[1], ""] } }], o = function(e) { var t; return t = !1, n.forEach(function(n) { return n.regex.test(e) ? t = !0 : void 0 }), t }, i = function(e) { var t; return t = [], n.forEach(function(n) { var i; return i = e.match(n.regex), i ? t.push({ format: n, match: i }) : void 0 }), t.sort(function(e, t) { return e.match.index - t.match.index }) }, f = function(e) { var t, n, r; for (r = []; o(e);) n = i(e), t = n[0], e = e.replace(t.format.regex, t.format.replacer), r = r.concat(t.format.styles(t.match)); return [e].concat(r) }, l = function() { return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) }, a = function() { return /OPR/.test(navigator.userAgent) && /Opera/.test(navigator.vendor) }, r = function() { return /Firefox/.test(navigator.userAgent) }, s = function() { return /MSIE/.test(navigator.userAgent) }, p = function() { var e; return e = navigator.userAgent.match(/AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/), !!e && 537.38 <= parseInt(e[1], 10) + parseInt(e[2], 10) / 100 }, d = function() { var e; return e = navigator.userAgent.match(/OPR\/(\d+)\./), !!e && 15 <= parseInt(e[1], 10) }, t = function() { return window.console.firebug || window.console.exception }, e = s() || r() && !t() || a() && !d() || l() && !p() ? h : c, e.l = h, "function" == typeof define && define.amd ? define(e) : "undefined" != typeof exports ? module.exports = e : window.log = e)
}.call(this),
  /*!
  jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
  ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function(e) { return t.flat.call(e) } : function(e) { return t.concat.apply([], e) },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item },
      x = function(e) { return null != e && e === e.window },
      E = C.document,
      c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) {
      var r, i, o = (n = n || E).createElement("script");
      if (o.text = e, t)
        for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e }
    var f = "3.6.0",
      S = function(e, t) { return new S.fn.init(e, t) };

    function p(e) {
      var t = !!e && "length" in e && e.length,
        n = w(e);
      return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function() { return s.call(this) },
      get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] },
      pushStack: function(e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t },
      each: function(e) { return S.each(this, e) },
      map: function(n) { return this.pushStack(S.map(this, function(e, t) { return n.call(e, t, e) })) },
      slice: function() { return this.pushStack(s.apply(this, arguments)) },
      first: function() { return this.eq(0) },
      last: function() { return this.eq(-1) },
      even: function() { return this.pushStack(S.grep(this, function(e, t) { return (t + 1) % 2 })) },
      odd: function() { return this.pushStack(S.grep(this, function(e, t) { return t % 2 })) },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : [])
      },
      end: function() { return this.prevObject || this.constructor() },
      push: u,
      sort: t.sort,
      splice: t.splice
    }, S.extend = S.fn.extend = function() {
      var e, t, n, r, i, o, a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;
      for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
        if (null != (e = arguments[s]))
          for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      return a
    }, S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) { throw new Error(e) },
      noop: function() {},
      isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) },
      isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
      globalEval: function(e, t, n) { b(e, { nonce: t && t.nonce }, n) },
      each: function(e, t) {
        var n, r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break
        } else
          for (r in e)
            if (!1 === t.call(e[r], r, e[r])) break; return e
      },
      makeArray: function(e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n },
      inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) },
      merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
      grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
      map: function(e, t, n) {
        var r, i, o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
        else
          for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a)
      },
      guid: 1,
      support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
    var d = function(n) {
      var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        j = function(e, t) { return e === t && (l = !0), 0 },
        D = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
          return -1
        },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
        oe = function() { T() },
        ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
      try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) {
        H = {
          apply: t.length ? function(e, t) { L.apply(e, O.call(t)) } : function(e, t) {
            var n = e.length,
              r = 0;
            while (e[n++] = t[r++]);
            e.length = n - 1
          }
        }
      }

      function se(t, e, n, r) {
        var i, o, a, s, u, l, c, f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
        if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
        if (!r && (T(e), e = e || C, E)) {
          if (11 !== p && (u = Z.exec(t)))
            if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n }
          if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
            if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
              (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
              while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
              c = l.join(",")
            }
            try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") }
          }
        }
        return g(t.replace($, "$1"), e, n, r)
      }

      function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

      function le(e) { return e[S] = !0, e }

      function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

      function fe(e, t) {
        var n = e.split("|"),
          r = n.length;
        while (r--) b.attrHandle[n[r]] = t
      }

      function pe(e, t) {
        var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n)
          while (n = n.nextSibling)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function de(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

      function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

      function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

      function ve(a) {
        return le(function(o) {
          return o = +o, le(function(e, t) {
            var n, r = a([], e.length, o),
              i = r.length;
            while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
          })
        })
      }

      function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e }
      for (e in d = se.support = {}, i = se.isXML = function(e) {
          var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
          return !Y.test(t || n && n.nodeName || "HTML")
        }, T = se.setDocument = function(e) {
          var t, n, r = e ? e.ownerDocument || e : p;
          return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) {
            if ("undefined" != typeof t.getElementById && E) {
              var n, r, i, o = t.getElementById(e);
              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                i = t.getElementsByName(e), r = 0;
                while (o = i[r++])
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
              }
              return []
            }
          }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
            var n, r = [],
              i = 0,
              o = t.getElementsByTagName(e);
            if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r }
            return o
          }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
            var t;
            a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
          }), ce(function(e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = C.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
          })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function(e, t) {
            if (t)
              while (t = t.parentNode)
                if (t === e) return !0;
            return !1
          }, j = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
            if (e === t) return l = !0, 0;
            var n, r = 0,
              i = e.parentNode,
              o = t.parentNode,
              a = [e],
              s = [t];
            if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
            if (i === o) return pe(e, t);
            n = e;
            while (n = n.parentNode) a.unshift(n);
            n = t;
            while (n = n.parentNode) s.unshift(n);
            while (a[r] === s[r]) r++;
            return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
          }), C
        }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) {
          if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) }
          return 0 < se(t, C, null, [e]).length
        }, se.contains = function(e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) }, se.attr = function(e, t) {
          (e.ownerDocument || e) != C && T(e);
          var n = b.attrHandle[t.toLowerCase()],
            r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
          return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) {
          var t, n = [],
            r = 0,
            i = 0;
          if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) }
          return u = null, e
        }, o = se.getText = function(e) {
          var t, n = "",
            r = 0,
            i = e.nodeType;
          if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
            while (t = e[r++]) n += o(t);
          return n
        }, (b = se.selectors = {
          cacheLength: 50,
          createPseudo: le,
          match: G,
          attrHandle: {},
          find: {},
          relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
          preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
          filter: {
            TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
            CLASS: function(e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
            ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } },
            CHILD: function(h, e, t, g, v) {
              var y = "nth" !== h.slice(0, 3),
                m = "last" !== h.slice(-4),
                x = "of-type" === e;
              return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) {
                var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                  c = e.parentNode,
                  f = x && e.nodeName.toLowerCase(),
                  p = !n && !x,
                  d = !1;
                if (c) {
                  if (y) {
                    while (l) {
                      a = e;
                      while (a = a[l])
                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                      u = l = "only" === h && !u && "nextSibling"
                    }
                    return !0
                  }
                  if (u = [m ? c.firstChild : c.lastChild], m && p) {
                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                      if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break }
                  } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                      if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                  return (d -= v) === g || d % g == 0 && 0 <= d / g
                }
              }
            },
            PSEUDO: function(e, o) {
              var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
              return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                var n, r = a(e, o),
                  i = r.length;
                while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
              }) : function(e) { return a(e, 0, t) }) : a
            }
          },
          pseudos: {
            not: le(function(e) {
              var r = [],
                i = [],
                s = f(e.replace($, "$1"));
              return s[S] ? le(function(e, t, n, r) {
                var i, o = s(e, null, r, []),
                  a = e.length;
                while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
              }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() }
            }),
            has: le(function(t) { return function(e) { return 0 < se(t, e).length } }),
            contains: le(function(t) {
              return t = t.replace(te, ne),
                function(e) { return -1 < (e.textContent || o(e)).indexOf(t) }
            }),
            lang: le(function(n) {
              return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                function(e) {
                  var t;
                  do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1
                }
            }),
            target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id },
            root: function(e) { return e === a },
            focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
            enabled: ge(!1),
            disabled: ge(!0),
            checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
            selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0
            },
            parent: function(e) { return !b.pseudos.empty(e) },
            header: function(e) { return J.test(e.nodeName) },
            input: function(e) { return Q.test(e.nodeName) },
            button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
            text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
            first: ve(function() { return [0] }),
            last: ve(function(e, t) { return [t - 1] }),
            eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }),
            even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
            odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
            lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }),
            gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
          }
        }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e);
      for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

      function me() {}

      function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

      function be(s, e, t) {
        var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
        return e.first ? function(e, t, n) {
          while (e = e[u])
            if (1 === e.nodeType || f) return s(e, t, n);
          return !1
        } : function(e, t, n) {
          var r, i, o, a = [k, p];
          if (n) {
            while (e = e[u])
              if ((1 === e.nodeType || f) && s(e, t, n)) return !0
          } else
            while (e = e[u])
              if (1 === e.nodeType || f)
                if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1
        }
      }

      function we(i) {
        return 1 < i.length ? function(e, t, n) {
          var r = i.length;
          while (r--)
            if (!i[r](e, t, n)) return !1;
          return !0
        } : i[0]
      }

      function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

      function Ce(d, h, g, v, y, e) {
        return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
          var i, o, a, s = [],
            u = [],
            l = t.length,
            c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;
          if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) }
          if (e) {
            if (y || d) {
              if (y) {
                i = [], o = p.length;
                while (o--)(a = p[o]) && i.push(f[o] = a);
                y(null, p = [], i, r)
              }
              o = p.length;
              while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
            }
          } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
        })
      }

      function Ee(e) {
        for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) { return e === i }, a, !0), l = be(function(e) { return -1 < P(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
          if (t = b.relative[e[s].type]) c = [be(we(c), t)];
          else {
            if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
              for (n = ++s; n < r; n++)
                if (b.relative[e[n].type]) break;
              return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
            }
            c.push(t)
          }
        return we(c)
      }
      return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
        var n, r, i, o, a, s, u, l = x[e + " "];
        if (l) return t ? 0 : l.slice(0);
        a = e, s = [], u = b.preFilter;
        while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break }
        return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
      }, f = se.compile = function(e, t) {
        var n, v, y, m, x, r, i = [],
          o = [],
          a = A[e + " "];
        if (!a) {
          t || (t = h(e)), n = t.length;
          while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
          (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
            var o, a, s, u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;
            for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
              if (x && o) {
                a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                while (s = v[a++])
                  if (s(o, t || C, n)) { r.push(o); break }
                i && (k = h)
              }
              m && ((o = !s && o) && u--, e && c.push(o))
            }
            if (u += l, m && l !== u) {
              a = 0;
              while (s = y[a++]) s(c, f, t, n);
              if (e) {
                if (0 < u)
                  while (l--) c[l] || f[l] || (f[l] = q.call(r));
                f = Te(f)
              }
              H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
            }
            return i && (k = h, w = p), c
          }, m ? le(r) : r))).selector = e
        }
        return a
      }, g = se.select = function(e, t, n, r) {
        var i, o, a, s, u, l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);
        if (n = n || [], 1 === c.length) {
          if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
            if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
            l && (t = t.parentNode), e = e.slice(o.shift().value.length)
          }
          i = G.needsContext.test(e) ? 0 : o.length;
          while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } }
        }
        return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
      }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(R, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = [],
          i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
          if (1 === e.nodeType) {
            if (i && S(e).is(n)) break;
            r.push(e)
          }
        return r
      },
      T = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
      k = S.expr.match.needsContext;

    function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) { return m(n) ? S.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) }
    S.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) { return 1 === e.nodeType })) }, S.fn.extend({
      find: function(e) {
        var t, n, r = this.length,
          i = this;
        if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
          for (t = 0; t < r; t++)
            if (S.contains(i[t], this)) return !0
        }));
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n
      },
      filter: function(e) { return this.pushStack(j(this, e || [], !1)) },
      not: function(e) { return this.pushStack(j(this, e || [], !0)) },
      is: function(e) { return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
      var r, i;
      if (!e) return this;
      if (n = n || D, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
            for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this
        }
        return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
      H = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    S.fn.extend({
      has: function(e) {
        var t = S(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; e < n; e++)
            if (S.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        var n, r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
        if (!k.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break }
        return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
      },
      index: function(e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
      add: function(e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) },
      addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), S.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return h(e, "parentNode") }, parentsUntil: function(e, t, n) { return h(e, "parentNode", n) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return h(e, "nextSibling") }, prevAll: function(e) { return h(e, "previousSibling") }, nextUntil: function(e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return h(e, "previousSibling", n) }, siblings: function(e) { return T((e.parentNode || {}).firstChild, e) }, children: function(e) { return T(e.firstChild) }, contents: function(e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function(r, i) { S.fn[r] = function(e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) { return e }

    function M(e) { throw e }

    function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    S.Callbacks = function(r) {
      var e, n;
      r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) { n[t] = !0 }), n) : S.extend({}, r);
      var i, t, o, a, s = [],
        u = [],
        l = -1,
        c = function() {
          for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
          r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
        },
        f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return S.each(arguments, function(e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } };
      return f
    }, S.extend({
      Deferred: function(e) {
        var o = [
            ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
            ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
          ],
          i = "pending",
          a = {
            state: function() { return i },
            always: function() { return s.done(arguments).fail(arguments), this },
            "catch": function(e) { return a.then(null, e) },
            pipe: function() {
              var i = arguments;
              return S.Deferred(function(r) {
                S.each(o, function(e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function() {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                  })
                }), i = null
              }).promise()
            },
            then: function(t, n, r) {
              var u = 0;

              function l(i, o, a, s) {
                return function() {
                  var n = this,
                    r = arguments,
                    e = function() {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                      }
                    },
                    t = s ? e : function() { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                  i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                }
              }
              return S.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise()
            },
            promise: function(e) { return null != e ? S.extend(e, a) : a }
          },
          s = {};
        return S.each(o, function(e, t) {
          var n = t[2],
            r = t[5];
          a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith
        }), a.promise(s), e && e.call(s, s), s
      },
      when: function(e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } };
        if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise()
      }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function(e) { C.setTimeout(function() { throw e }) };
    var F = S.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() }
    S.fn.ready = function(e) { return F.then(e)["catch"](function(e) { S.readyException(e) }), this }, S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
      }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0,
          u = e.length,
          l = null == n;
        if ("object" === w(n))
          for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(S(e), n) })), t))
          for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
      },
      _ = /^-ms-/,
      z = /-([a-z])/g;

    function U(e, t) { return t.toUpperCase() }

    function X(e) { return e.replace(_, "ms-").replace(z, U) }
    var V = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function G() { this.expando = S.expando + G.uid++ }
    G.uid = 1, G.prototype = {
      cache: function(e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
      set: function(e, t, n) {
        var r, i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else
          for (r in t) i[X(r)] = t[r];
        return i
      },
      get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] },
      access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
      remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
      hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) }
    };
    var Y = new G,
      Q = new G,
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

    function Z(e, t, n) {
      var r, i;
      if (void 0 === n && 1 === e.nodeType)
        if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
          try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) {}
          Q.set(e, t, n)
        } else n = void 0;
      return n
    }
    S.extend({ hasData: function(e) { return Q.hasData(e) || Y.hasData(e) }, data: function(e, t, n) { return Q.access(e, t, n) }, removeData: function(e, t) { Q.remove(e, t) }, _data: function(e, t, n) { return Y.access(e, t, n) }, _removeData: function(e, t) { Y.remove(e, t) } }), S.fn.extend({
      data: function(n, e) {
        var t, r, i, o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
            t = a.length;
            while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0)
          }
          return i
        }
        return "object" == typeof n ? this.each(function() { Q.set(this, n) }) : $(this, function(e) {
          var t;
          if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
          this.each(function() { Q.set(this, n, e) })
        }, null, e, 1 < arguments.length, null, !0)
      },
      removeData: function(e) { return this.each(function() { Q.remove(this, e) }) }
    }), S.extend({
      queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { S.dequeue(e, t) }, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function() { Y.remove(e, [t + "queue", n]) }) }) }
    }), S.fn.extend({
      queue: function(t, n) {
        var e = 2;
        return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
          var e = S.queue(this, t, n);
          S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
        })
      },
      dequeue: function(e) { return this.each(function() { S.dequeue(this, e) }) },
      clearQueue: function(e) { return this.queue(e || "fx", []) },
      promise: function(e, t) {
        var n, r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function() {--r || i.resolveWith(o, [o]) };
        "string" != typeof e && (t = e, e = void 0), e = e || "fx";
        while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t)
      }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function(e) { return S.contains(e.ownerDocument, e) },
      oe = { composed: !0 };
    re.getRootNode && (ie = function(e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument });
    var ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") };

    function se(e, t, n, r) {
      var i, o, a = 20,
        s = r ? function() { return r.cur() } : function() { return S.css(e, t, "") },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
      if (c && c[3] !== l) {
        u /= 2, l = l || c[3], c = +u || 1;
        while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
        c *= 2, S.style(e, t, c + l), n = n || []
      }
      return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    S.fn.extend({ show: function() { return le(this, !0) }, hide: function() { return le(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? S(this).show() : S(this).hide() }) } });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n }

    function ye(e, t) { for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
      for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
        if ((o = e[d]) || 0 === o)
          if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
          else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
        while (c--) a = a.lastChild;
        S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
      } else p.push(t.createTextNode(o));
      f.textContent = "", d = 0;
      while (o = p[d++])
        if (r && -1 < S.inArray(o, r)) i && i.push(o);
        else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) }
      return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() { return !0 }

    function Te() { return !1 }

    function Ce(e, t) { return e === function() { try { return E.activeElement } catch (e) {} }() == ("focus" === t) }

    function Ee(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o); return e }
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
      else if (!i) return e;
      return 1 === o && (a = i, (i = function(e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function() { S.event.add(this, t, i, r, n) })
    }

    function Se(e, i, o) {
      o ? (Y.set(e, i, !1), S.event.add(e, i, {
        namespace: !1,
        handler: function(e) {
          var t, n, r = Y.get(this, i);
          if (1 & e.isTrigger && this[i]) {
            if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
            else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
          } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation())
        }
      })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
      global: {},
      add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } },
      remove: function(e, t, n, r, i) {
        var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
        if (v && (u = v.events)) {
          l = (t = (t || "").match(P) || [""]).length;
          while (l--)
            if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
              f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
              while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
              a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
            } else
              for (d in u) S.event.remove(e, d + t[l], n, r, !0);
          S.isEmptyObject(u) && Y.remove(e, "handle events")
        }
      },
      dispatch: function(e) {
        var t, n, r, i, o, a, s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};
        for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
        if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result }
      },
      handlers: function(e, t) {
        var n, r, i, o, a, s = [],
          u = t.delegateCount,
          l = e.target;
        if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
              o.length && s.push({ elem: l, handlers: o })
            }
        return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      },
      addProp: function(t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
      fix: function(e) { return e[S.expando] ? e : new S.Event(e) },
      special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1 }, trigger: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0 }, _default: function(e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, S.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function(e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e, t) { S.event.special[e] = { setup: function() { return Se(this, e, Ce), !1 }, trigger: function() { return Se(this, e), !0 }, _default: function() { return !0 }, delegateType: t } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) {
      S.event.special[e] = {
        delegateType: i,
        bindType: i,
        handle: function(e) {
          var t, n = e.relatedTarget,
            r = e.handleObj;
          return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
        }
      }
    }), S.fn.extend({ on: function(e, t, n, r) { return Ee(this, e, t, n, r) }, one: function(e, t, n, r) { return Ee(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() { S.event.remove(this, e, n, t) }) } });
    var ke = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e }

    function De(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function qe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Le(e, t) {
      var n, r, i, o, a, s;
      if (1 === t.nodeType) {
        if (Y.hasData(e) && (s = Y.get(e).events))
          for (i in Y.remove(t, "handle events"), s)
            for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
        Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
      }
    }

    function He(n, r, i, o) {
      r = g(r);
      var e, t, a, s, u, l, c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
      if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function(e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
      });
      if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
        for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
        if (s)
          for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(Ne, ""), u, l))
      }
      return n
    }

    function Oe(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e }
    S.extend({
      htmlPrefilter: function(e) { return e },
      clone: function(e, t, n) {
        var r, i, o, a, s, u, l, c = e.cloneNode(!0),
          f = ie(e);
        if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
          for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
        if (t)
          if (n)
            for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
          else Le(e, c);
        return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      },
      cleanData: function(e) {
        for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
          if (V(n)) {
            if (t = n[Y.expando]) {
              if (t.events)
                for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
              n[Y.expando] = void 0
            }
            n[Q.expando] && (n[Q.expando] = void 0)
          }
      }
    }), S.fn.extend({
      detach: function(e) { return Oe(this, e, !0) },
      remove: function(e) { return Oe(this, e) },
      text: function(e) { return $(this, function(e) { return void 0 === e ? S.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
      append: function() { return He(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e) }) },
      prepend: function() {
        return He(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() { return He(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
      after: function() { return He(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
      empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = ""); return this },
      clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return S.clone(this, e, t) }) },
      html: function(e) {
        return $(this, function(e) {
          var t = this[0] || {},
            n = 0,
            r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = S.htmlPrefilter(e);
            try {
              for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var n = [];
        return He(this, arguments, function(e) {
          var t = this.parentNode;
          S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
        }, n)
      }
    }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { S.fn[e] = function(e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
      Me = function(e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r },
      Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function Fe(e, t) {
      return {
        get: function() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get
        }
      }
    }! function() {
      function e() {
        if (l) {
          u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
          var e = C.getComputedStyle(l);
          n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
        }
      }

      function t(e) { return Math.round(parseFloat(e)) }
      var n, r, i, o, a, s, u = E.createElement("div"),
        l = E.createElement("div");
      l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), i }, reliableTrDimensions: function() { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a } }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
      $e = E.createElement("div").style,
      _e = {};

    function ze(e) {
      var t = S.cssProps[e] || _e[e];
      return t || (e in $e ? e : _e[e] = function(e) {
        var t = e[0].toUpperCase() + e.slice(1),
          n = Be.length;
        while (n--)
          if ((e = Be[n] + t) in $e) return e
      }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ve = { position: "absolute", visibility: "hidden", display: "block" },
      Ge = { letterSpacing: "0", fontWeight: "400" };

    function Ye(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Qe(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
      return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
      var r = Re(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = We(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Pe.test(a)) {
        if (!n) return a;
        a = "auto"
      }
      return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) { return new Ke.prototype.init(e, t, n, r, i) }
    S.extend({
      cssHooks: { opacity: { get: function(e, t) { if (t) { var n = We(e, "opacity"); return "" === n ? "1" : n } } } },
      cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
      cssProps: {},
      style: function(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i, o, a, s = X(t),
            u = Xe.test(t),
            l = e.style;
          if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
          "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
        }
      },
      css: function(e, t, n, r) { var i, o, a, s = X(t); return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), S.each(["height", "width"], function(e, u) {
      S.cssHooks[u] = {
        get: function(e, t, n) { if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() { return Je(e, u, n) }) },
        set: function(e, t, n) {
          var r, i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
        }
      }
    }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function(i, o) { S.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Ye) }), S.fn.extend({
      css: function(e, t) {
        return $(this, function(e, t, n) {
          var r, i, o = {},
            a = 0;
          if (Array.isArray(t)) { for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r); return o }
          return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
        }, e, t, 1 < arguments.length)
      }
    }), ((S.Tween = Ke).prototype = { constructor: Ke, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function() { var e = Ke.propHooks[this.prop]; return e && e.get ? e.get(this) : Ke.propHooks._default.get(this) }, run: function(e) { var t, n = Ke.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this } }).init.prototype = Ke.prototype, (Ke.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = Ke.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = Ke.prototype.init, S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
      it = /queueHooks$/;

    function ot() { et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick()) }

    function at() { return C.setTimeout(function() { Ze = void 0 }), Ze = Date.now() }

    function st(e, t) {
      var n, r = 0,
        i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
      for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
        if (r = i[o].call(n, t, e)) return r
    }

    function lt(o, e, t) {
      var n, a, r = 0,
        i = lt.prefilters.length,
        s = S.Deferred().always(function() { delete u.elem }),
        u = function() { if (a) return !1; for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
        l = s.promise({
          elem: o,
          props: S.extend({}, e),
          opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
          originalProperties: e,
          originalOptions: t,
          startTime: Ze || at(),
          duration: t.duration,
          tweens: [],
          createTween: function(e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n },
          stop: function(e) {
            var t = 0,
              n = e ? l.tweens.length : 0;
            if (a) return this;
            for (a = !0; t < n; t++) l.tweens[t].run(1);
            return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
          }
        }),
        c = l.props;
      for (! function(e, t) {
          var n, r, i, o, a;
          for (n in e)
            if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
              for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
            else t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
        if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
      return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l
    }
    S.Animation = S.extend(lt, {
      tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] },
      tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t) },
      prefilters: [function(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, S.queue(e, "fx").length || a.empty.fire() }) })), t)
          if (i = t[r], rt.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0
            }
            d[r] = v && v[r] || S.style(e, r)
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function() { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
      }],
      prefilter: function(e, t) { t ? lt.prefilters.unshift(e) : lt.prefilters.push(e) }
    }), S.speed = function(e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({
      fadeTo: function(e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
      animate: function(t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function() {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0)
          };
        return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
      },
      stop: function(i, e, o) {
        var a = function(e) {
          var t = e.stop;
          delete e.stop, t(o)
        };
        return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
          var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
          if (t) r[t] && r[t].stop && a(r[t]);
          else
            for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
          for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
          !e && o || S.dequeue(this, i)
        })
      },
      finish: function(a) {
        return !1 !== a && (a = a || "fx"), this.each(function() {
          var e, t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;
          for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
          for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
          delete t.finish
        })
      }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
      var i = S.fn[r];
      S.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n) }
    }), S.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { S.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function() {
      var e, t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), Ze = void 0
    }, S.fx.timer = function(e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function() { et || (et = !0, ot()) }, S.fx.stop = function() { et = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r, e) {
      return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
        var n = C.setTimeout(e, r);
        t.stop = function() { C.clearTimeout(n) }
      })
    }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({ attr: function(e, t) { return $(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { S.removeAttr(this, e) }) } }), S.extend({
      attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) },
      attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
      removeAttr: function(e, t) {
        var n, r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType)
          while (n = i[r++]) e.removeAttribute(n)
      }
    }), ct = { set: function(e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;

    function ht(e) { return (e.match(P) || []).join(" ") }

    function gt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function vt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] }
    S.fn.extend({ prop: function(e, t) { return $(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = {
      get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { S.propFix[this.toLowerCase()] = this }), S.fn.extend({
      addClass: function(t) {
        var e, n, r, i, o, a, s, u = 0;
        if (m(t)) return this.each(function(e) { S(this).addClass(t.call(this, e, gt(this))) });
        if ((e = vt(t)).length)
          while (n = this[u++])
            if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
              a = 0;
              while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = ht(r)) && n.setAttribute("class", s)
            }
        return this
      },
      removeClass: function(t) {
        var e, n, r, i, o, a, s, u = 0;
        if (m(t)) return this.each(function(e) { S(this).removeClass(t.call(this, e, gt(this))) });
        if (!arguments.length) return this.attr("class", "");
        if ((e = vt(t)).length)
          while (n = this[u++])
            if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
              a = 0;
              while (o = e[a++])
                while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
              i !== (s = ht(r)) && n.setAttribute("class", s)
            }
        return this
      },
      toggleClass: function(i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) { S(this).toggleClass(i.call(this, e, gt(this), t), t) }) : this.each(function() { var e, t, n, r; if (a) { t = 0, n = S(this), r = vt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || "")) })
      },
      hasClass: function(e) {
        var t, n, r = 0;
        t = " " + e + " ";
        while (n = this[r++])
          if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
        return !1
      }
    });
    var yt = /\r/g;
    S.fn.extend({
      val: function(n) {
        var r, e, i, t = this[0];
        return arguments.length ? (i = m(n), this.each(function(e) {
          var t;
          1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
        })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
      }
    }), S.extend({
      valHooks: {
        option: { get: function(e) { var t = S.find.attr(e, "value"); return null != t ? t : ht(S.text(e)) } },
        select: {
          get: function(e) {
            var t, n, r, i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                if (t = S(n).val(), a) return t;
                s.push(t)
              }
            return s
          },
          set: function(e, t) {
            var n, r, i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o
          }
        }
      }
    }), S.each(["radio", "checkbox"], function() { S.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, y.checkOn || (S.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/,
      xt = function(e) { e.stopPropagation() };
    S.extend(S.event, {
      trigger: function(e, t, n, r) {
        var i, o, a, s, u, l, c, f, p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];
        if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
          if (!r && !c.noBubble && !x(n)) {
            for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
            a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
          }
          i = 0;
          while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
          return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
        }
      },
      simulate: function(e, t, n) {
        var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 });
        S.event.trigger(r, null, t)
      }
    }), S.fn.extend({ trigger: function(e, t) { return this.each(function() { S.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n, r) {
      var i = function(e) { S.event.simulate(r, e.target, S.event.fix(e)) };
      S.event.special[r] = {
        setup: function() {
          var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
          t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
        },
        teardown: function() {
          var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
          t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
        }
      }
    });
    var bt = C.location,
      wt = { guid: Date.now() },
      Tt = /\?/;
    S.parseXML = function(e) { var t, n; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) {} return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) { return e.textContent }).join("\n") : e)), t };
    var Ct = /\[\]$/,
      Et = /\r?\n/g,
      St = /^(?:submit|button|image|reset|file)$/i,
      kt = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, i) {
      var t;
      if (Array.isArray(e)) S.each(e, function(e, t) { r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
      else if (r || "object" !== w(e)) i(n, e);
      else
        for (t in e) At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
      var n, r = [],
        i = function(e, t) {
          var n = m(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() { i(this.name, this.value) });
      else
        for (n in e) At(n, e[n], t, i);
      return r.join("&")
    }, S.fn.extend({ serialize: function() { return S.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function(e) { return { name: t.name, value: e.replace(Et, "\r\n") } }) : { name: t.name, value: n.replace(Et, "\r\n") } }).get() } });
    var Nt = /%20/g,
      jt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Lt = /^(?:GET|HEAD)$/,
      Ht = /^\/\//,
      Ot = {},
      Pt = {},
      Rt = "*/".concat("*"),
      Mt = E.createElement("a");

    function It(o) {
      return function(e, t) {
        "string" != typeof e && (t = e, e = "*");
        var n, r = 0,
          i = e.toLowerCase().match(P) || [];
        if (m(t))
          while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
      }
    }

    function Wt(t, i, o, a) {
      var s = {},
        u = t === Pt;

      function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r }
      return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ft(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e }
    Mt.href = bt.href, S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: { url: bt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } },
      ajaxSetup: function(e, t) { return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e) },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (h) {
                if (!n) { n = {}; while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                t = n[e.toLowerCase() + " "]
              }
              return null == t ? null : t.join(", ")
            },
            getAllResponseHeaders: function() { return h ? p : null },
            setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this },
            overrideMimeType: function(e) { return null == h && (v.mimeType = e), this },
            statusCode: function(e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else
                  for (t in e) w[t] = [w[t], e[t]];
              return this
            },
            abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this }
          };
        if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } }
        if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
        for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
        if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
          if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
          v.async && 0 < v.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout));
          try { h = !1, c.send(a, l) } catch (e) {
            if (h) throw e;
            l(-1, e)
          }
        } else l(-1, "No Transport");

        function l(e, t, n, r) {
          var i, o, a, s, u, l = t;
          h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
            var r, i, o, a, s = e.contents,
              u = e.dataTypes;
            while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
              for (i in s)
                if (s[i] && s[i].test(r)) { u.unshift(i); break }
            if (u[0] in n) o = u[0];
            else {
              for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                a || (a = i)
              }
              o = o || a
            }
            if (o) return o !== u[0] && u.unshift(o), n[o]
          }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
            var i, o, a, s, u, l = {},
              c = e.dataTypes.slice();
            if (c[1])
              for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            o = c.shift();
            while (o)
              if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                  if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
              if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
            }
            return { state: "success", data: t }
          }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
        }
        return T
      },
      getJSON: function(e, t, n) { return S.get(e, t, n, "json") },
      getScript: function(e, t) { return S.get(e, void 0, t, "script") }
    }), S.each(["get", "post"], function(e, i) { S[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function(e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { S.globalEval(e, t, n) } }) }, S.fn.extend({
      wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this },
      wrapInner: function(n) {
        return m(n) ? this.each(function(e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function() {
          var e = S(this),
            t = e.contents();
          t.length ? t.wrapAll(n) : e.append(n)
        })
      },
      wrap: function(t) { var n = m(t); return this.each(function(e) { S(this).wrapAll(n ? t.call(this, e) : t) }) },
      unwrap: function(e) { return this.parent(e).not("body").each(function() { S(this).replaceWith(this.childNodes) }), this }
    }), S.expr.pseudos.hidden = function(e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} };
    var Bt = { 0: 200, 1223: 204 },
      $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i) {
      var o, a;
      if (y.cors || $t && !i.crossDomain) return {
        send: function(e, t) {
          var n, r = i.xhr();
          if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
            for (n in i.xhrFields) r[n] = i.xhrFields[n];
          for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
          o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort");
          try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e }
        },
        abort: function() { o && o() }
      }
    }), S.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } });
    var _t, zt = [],
      Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = zt.pop() || S.expando + "_" + wt.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function(e, t, n) {
      var r, i, o, a = this,
        s = e.indexOf(" ");
      return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, S.expr.pseudos.animated = function(t) { return S.grep(S.timers, function(e) { return t === e.elem }).length }, S.offset = {
      setOffset: function(e, t, n) {
        var r, i, o, a, s, u, l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
      }
    }, S.fn.extend({
      offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
      position: function() {
        if (this[0]) {
          var e, t, n, r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
            while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
            e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
          }
          return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) }
        }
      },
      offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) }
    }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
      var o = "pageYOffset" === i;
      S.fn[t] = function(e) {
        return $(this, function(e, t, n) {
          var r;
          if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
          r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
        }, t, e, arguments.length)
      }
    }), S.each(["top", "left"], function(e, n) { S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) { if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function(a, s) {
      S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) {
        S.fn[o] = function(e, t) {
          var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
          return $(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n)
        }
      })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { S.fn[t] = function(e) { return this.on(t, e) } }), S.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { S.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++, i }, S.holdReady = function(e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function(e) { return null == e ? "" : (e + "").replace(Xt, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return S });
    var Vt = C.jQuery,
      Gt = C.$;
    return S.noConflict = function(e) { return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
  });
var jq223 = jQuery.noConflict(!0),
  $ = jq223;
! function(e) {
  var t = window.jQuery = e;
  /*!
   * querystring.js
   */
  ! function(e) {
    e.QueryString = function(e) {
      if ("" == e) return {};
      for (var t = {}, n = 0; n < e.length; ++n) {
        var i = e[n].split("=");
        2 == i.length && (t[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")))
      }
      return t
    }(window.location.search.substr(1).split("&"))
  }(t),
  /*!
   * detect-element-resize.js
   */
  function() {
    function e(e) {
      var t = e.__resizeTriggers__,
        n = t.firstElementChild,
        i = t.lastElementChild,
        o = n.firstElementChild;
      i.scrollLeft = i.scrollWidth, i.scrollTop = i.scrollHeight, o.style.width = n.offsetWidth + 1 + "px", o.style.height = n.offsetHeight + 1 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight
    }

    function t(e) { return e.offsetWidth != e.__resizeLast__.width || e.offsetHeight != e.__resizeLast__.height }

    function n(n) {
      var i = this;
      e(this), this.__resizeRAF__ && a(this.__resizeRAF__), this.__resizeRAF__ = s(function() { t(i) && (i.__resizeLast__.width = i.offsetWidth, i.__resizeLast__.height = i.offsetHeight, i.__resizeListeners__.forEach(function(e) { e.call(i, n) })) })
    }

    function i() {
      if (!r) {
        var e = (y ? y : "") + ".resize-triggers { " + (x ? x : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          t = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), t.appendChild(n), r = !0
      }
    }
    var o = document.attachEvent,
      r = !1;
    if (!o) {
      var s = function() { var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) { return window.setTimeout(e, 20) }; return function(t) { return e(t) } }(),
        a = function() { var e = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout; return function(t) { return e(t) } }(),
        l = !1,
        c = "animation",
        u = "",
        d = "animationstart",
        p = "Webkit Moz O ms".split(" "),
        f = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
        h = "",
        m = document.createElement("fakeelement");
      if (void 0 !== m.style.animationName && (l = !0), l === !1)
        for (var g = 0; g < p.length; g++)
          if (void 0 !== m.style[p[g] + "AnimationName"]) { h = p[g], c = h + "Animation", u = "-" + h.toLowerCase() + "-", d = f[g], l = !0; break }
      var v = "resizeanim",
        y = "@" + u + "keyframes " + v + " { from { opacity: 0; } to { opacity: 0; } } ",
        x = u + "animation: 1ms " + v + "; "
    }
    window.addResizeListener = function(t, r) { o ? t.attachEvent("onresize", r) : (t.__resizeTriggers__ || ("static" == getComputedStyle(t).position && (t.style.position = "relative"), i(), t.__resizeLast__ = {}, t.__resizeListeners__ = [], (t.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", t.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', t.appendChild(t.__resizeTriggers__), e(t), t.addEventListener("scroll", n, !0), d && t.__resizeTriggers__.addEventListener(d, function(n) { n.animationName == v && e(t) })), t.__resizeListeners__.push(r)) }, window.removeResizeListener = function(e, t) { o ? e.detachEvent("onresize", t) : (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1), e.__resizeListeners__.length || (e.removeEventListener("scroll", n), e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__))) }
  }(),
  function(e) {
    function n(e) {
      var t = e.__resizeTriggers__,
        n = t.firstElementChild,
        i = t.lastElementChild,
        o = n.firstElementChild;
      i.scrollLeft = i.scrollWidth, i.scrollTop = i.scrollHeight, o.style.width = n.offsetWidth + 1 + "px", o.style.height = n.offsetHeight + 1 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight
    }

    function i(e) { return e.offsetWidth != e.__resizeLast__.width || e.offsetHeight != e.__resizeLast__.height }

    function o(e) {
      var t = this;
      n(this), this.__resizeRAF__ && u(this.__resizeRAF__), this.__resizeRAF__ = c(function() { i(t) && (t.__resizeLast__.width = t.offsetWidth, t.__resizeLast__.height = t.offsetHeight, t.__resizeListeners__.forEach(function(n) { n.call(t, e) })) })
    }

    function r() {
      if (!a) {
        var e = (b ? b : "") + ".resize-triggers { " + (C ? C : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          t = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), t.appendChild(n), a = !0
      }
    }
    var s = document.attachEvent,
      a = !1,
      l = e.fn.resize;
    if (e.fn.resize = function(e) { return this.each(function() { this == window ? l.call(t(this), e) : addResizeListener(this, e) }) }, e.fn.removeResize = function(e) { return this.each(function() { removeResizeListener(this, e) }) }, !s) {
      var c = function() { var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) { return window.setTimeout(e, 20) }; return function(t) { return e(t) } }(),
        u = function() { var e = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout; return function(t) { return e(t) } }(),
        d = !1,
        p = "animation",
        f = "",
        h = "animationstart",
        m = "Webkit Moz O ms".split(" "),
        g = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
        v = "",
        y = document.createElement("fakeelement");
      if (void 0 !== y.style.animationName && (d = !0), d === !1)
        for (var x = 0; x < m.length; x++)
          if (void 0 !== y.style[m[x] + "AnimationName"]) { v = m[x], p = v + "Animation", f = "-" + v.toLowerCase() + "-", h = g[x], d = !0; break }
      var w = "resizeanim",
        b = "@" + f + "keyframes " + w + " { from { opacity: 0; } to { opacity: 0; } } ",
        C = f + "animation: 1ms " + w + "; "
    }
    window.addResizeListener = function(e, t) { s ? e.attachEvent("onresize", t) : (e.__resizeTriggers__ || ("static" == getComputedStyle(e).position && (e.style.position = "relative"), r(), e.__resizeLast__ = {}, e.__resizeListeners__ = [], (e.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", e.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', e.appendChild(e.__resizeTriggers__), n(e), e.addEventListener("scroll", o, !0), h && e.__resizeTriggers__.addEventListener(h, function(t) { t.animationName == w && n(e) })), e.__resizeListeners__.push(t)) }, window.removeResizeListener = function(e, t) { s ? e.detachEvent("onresize", t) : (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1), e.__resizeListeners__.length || (e.removeEventListener("scroll", o), e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__))) }
  }(t);
  /*!
   * fixto.js
   * https://github.com/bbarakaci/fixto
   */
  /*! fixto - v0.5.0 - 2016-06-16
   * http://github.com/bbarakaci/fixto/*/
  (function(e, t, n) {
    function i() { this._vendor = null }

    function o() {
      var e = !1,
        t = n.createElement("div"),
        i = n.createElement("div");
      t.appendChild(i), t.style[f] = "translate(0)", t.style.marginTop = "10px", t.style.visibility = "hidden", i.style.position = "fixed", i.style.top = 0, n.body.appendChild(t);
      var o = i.getBoundingClientRect();
      return o.top > 0 && (e = !0), n.body.removeChild(t), e
    }

    function r() { var e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./); return !!e && parseInt(e[2], 10) }

    function s(t, n, i) { this.child = t, this._$child = e(t), this.parent = n, this.options = { className: "fixto-fixed", top: 0, mindViewport: !1 }, this._setOptions(i) }

    function a(e, t, n) { s.call(this, e, t, n), this._replacer = new u.MimicNode(e), this._ghostNode = this._replacer.replacer, this._saveStyles(), this._saveViewportHeight(), this._proxied_onscroll = this._bind(this._onscroll, this), this._proxied_onresize = this._bind(this._onresize, this), this.start() }

    function l(e, t, n) { s.call(this, e, t, n), this.start() }
    /*! Computed Style - v0.1.0 - 2012-07-19
     * https://github.com/bbarakaci/computed-style
     * Copyright (c) 2012 Burak Barakaci; Licensed MIT */
    var c = function() { var e = { getAll: function(e) { return n.defaultView.getComputedStyle(e) }, get: function(e, t) { return this.getAll(e)[t] }, toFloat: function(e) { return parseFloat(e, 10) || 0 }, getFloat: function(e, t) { return this.toFloat(this.get(e, t)) }, _getAllCurrentStyle: function(e) { return e.currentStyle } }; return n.documentElement.currentStyle && (e.getAll = e._getAllCurrentStyle), e }(),
      u = function() {
        function t(e) { this.element = e, this.replacer = n.createElement("div"), this.replacer.style.visibility = "hidden", this.hide(), e.parentNode.insertBefore(this.replacer, e) }
        t.prototype = {
          replace: function() {
            var e = this.replacer.style,
              t = c.getAll(this.element);
            e.width = this._width(), e.height = this._height(), e.marginTop = t.marginTop, e.marginBottom = t.marginBottom, e.marginLeft = t.marginLeft, e.marginRight = t.marginRight, e.cssFloat = t.cssFloat, e.styleFloat = t.styleFloat, e.position = t.position, e.top = t.top, e.right = t.right, e.bottom = t.bottom, e.left = t.left, e.display = t.display
          },
          hide: function() { this.replacer.style.display = "none" },
          _width: function() { return this.element.getBoundingClientRect().width + "px" },
          _widthOffset: function() { return this.element.offsetWidth + "px" },
          _height: function() { return this.element.getBoundingClientRect().height + "px" },
          _heightOffset: function() { return this.element.offsetHeight + "px" },
          destroy: function() { e(this.replacer).remove(); for (var t in this) this.hasOwnProperty(t) && (this[t] = null) }
        };
        var i = n.documentElement.getBoundingClientRect();
        return i.width || (t.prototype._width = t.prototype._widthOffset, t.prototype._height = t.prototype._heightOffset), { MimicNode: t, computedStyle: c }
      }();
    i.prototype = {
      _vendors: { webkit: { cssPrefix: "-webkit-", jsPrefix: "Webkit" }, moz: { cssPrefix: "-moz-", jsPrefix: "Moz" }, ms: { cssPrefix: "-ms-", jsPrefix: "ms" }, opera: { cssPrefix: "-o-", jsPrefix: "O" } },
      _prefixJsProperty: function(e, t) { return e.jsPrefix + t[0].toUpperCase() + t.substr(1) },
      _prefixValue: function(e, t) { return e.cssPrefix + t },
      _valueSupported: function(e, t, n) { try { return n.style[e] = t, n.style[e] === t } catch (e) { return !1 } },
      propertySupported: function(e) { return void 0 !== n.documentElement.style[e] },
      getJsProperty: function(e) {
        if (this.propertySupported(e)) return e;
        if (this._vendor) return this._prefixJsProperty(this._vendor, e);
        var t;
        for (var n in this._vendors)
          if (t = this._prefixJsProperty(this._vendors[n], e), this.propertySupported(t)) return this._vendor = this._vendors[n], t;
        return null
      },
      getCssValue: function(e, t) {
        var i = n.createElement("div"),
          o = this.getJsProperty(e);
        if (this._valueSupported(o, t, i)) return t;
        var r;
        if (this._vendor && (r = this._prefixValue(this._vendor, t), this._valueSupported(o, r, i))) return r;
        for (var s in this._vendors)
          if (r = this._prefixValue(this._vendors[s], t), this._valueSupported(o, r, i)) return this._vendor = this._vendors[s], r;
        return null
      }
    };
    var d, p = new i,
      f = p.getJsProperty("transform"),
      h = p.getCssValue("position", "sticky");
    "56" == r() && (h = null);
    var m, g = p.getCssValue("position", "fixed"),
      v = "Microsoft Internet Explorer" === navigator.appName;
    v && (m = parseFloat(navigator.appVersion.split("MSIE")[1])), s.prototype = {
      _mindtop: function() {
        var e = 0;
        if (this._$mind)
          for (var t, n, i = 0, o = this._$mind.length; i < o; i++)
            if (t = this._$mind[i], n = t.getBoundingClientRect(), n.height) e += n.height;
            else {
              var r = c.getAll(t);
              e += t.offsetHeight + c.toFloat(r.marginTop) + c.toFloat(r.marginBottom)
            }
        return e
      },
      stop: function() { this._stop(), this._running = !1 },
      start: function() { this._running || (this._start(), this._running = !0) },
      destroy: function() { this.stop(), this._destroy(), this._$child.removeData("fixto-instance"); for (var e in this) this.hasOwnProperty(e) && (this[e] = null) },
      _setOptions: function(t) { e.extend(this.options, t), this.options.mind && (this._$mind = e(this.options.mind)), this.options.zIndex && (this.child.style.zIndex = this.options.zIndex) },
      setOptions: function(e) { this._setOptions(e), this.refresh() },
      _stop: function() {},
      _start: function() {},
      _destroy: function() {},
      refresh: function() {}
    }, a.prototype = new s, e.extend(a.prototype, {
      _bind: function(e, t) { return function() { return e.call(t) } },
      _toresize: 8 === m ? n.documentElement : t,
      _onscroll: function() {
        if (this._scrollTop = n.documentElement.scrollTop || n.body.scrollTop, this._parentBottom = this.parent.offsetHeight + this._fullOffset("offsetTop", this.parent), this.options.mindBottomPadding !== !1 && (this._parentBottom -= c.getFloat(this.parent, "paddingBottom")), !this.fixed && this._shouldFix()) this._fix(), this._adjust();
        else {
          if (this._scrollTop > this._parentBottom || this._scrollTop < this._fullOffset("offsetTop", this._ghostNode) - this.options.top - this._mindtop()) return void this._unfix();
          this._adjust()
        }
      },
      _shouldFix: function() { if (this._scrollTop < this._parentBottom && this._scrollTop > this._fullOffset("offsetTop", this.child) - this.options.top - this._mindtop()) return !(this.options.mindViewport && !this._isViewportAvailable()) },
      _isViewportAvailable: function() { var e = c.getAll(this.child); return this._viewportHeight > this.child.offsetHeight + c.toFloat(e.marginTop) + c.toFloat(e.marginBottom) },
      _adjust: function() {
        var e = 0,
          t = this._mindtop(),
          n = 0,
          i = c.getAll(this.child),
          o = null;
        d && (o = this._getContext(), o && (e = Math.abs(o.getBoundingClientRect().top))), n = this._parentBottom - this._scrollTop - (this.child.offsetHeight + c.toFloat(i.marginBottom) + t + this.options.top), n > 0 && (n = 0), this.child.style.top = n + t + e + this.options.top - c.toFloat(i.marginTop) + "px"
      },
      _fullOffset: function(e, t, n) { for (var i = t[e], o = t.offsetParent; null !== o && o !== n;) i += o[e], o = o.offsetParent; return i },
      _getContext: function() {
        for (var e, t, i = this.child, o = null; !o;) {
          if (e = i.parentNode, e === n.documentElement) return null;
          if (t = c.getAll(e), "none" !== t[f]) { o = e; break }
          i = e
        }
        return o
      },
      _fix: function() {
        var e = this.child,
          t = e.style,
          i = c.getAll(e),
          o = e.getBoundingClientRect().left,
          r = i.width;
        if (this._saveStyles(), n.documentElement.currentStyle && (r = e.offsetWidth - (c.toFloat(i.paddingLeft) + c.toFloat(i.paddingRight) + c.toFloat(i.borderLeftWidth) + c.toFloat(i.borderRightWidth)) + "px"), d) {
          var s = this._getContext();
          s && (o = e.getBoundingClientRect().left - s.getBoundingClientRect().left)
        }
        this._replacer.replace(), t.left = o - c.toFloat(i.marginLeft) + "px", t.width = r, t.position = "fixed", t.top = this._mindtop() + this.options.top - c.toFloat(i.marginTop) + "px", this._$child.addClass(this.options.className), this.fixed = !0
      },
      _unfix: function() {
        var e = this.child.style;
        this._replacer.hide(), e.position = this._childOriginalPosition, e.top = this._childOriginalTop, e.width = this._childOriginalWidth, e.left = this._childOriginalLeft, this._$child.removeClass(this.options.className), this.fixed = !1
      },
      _saveStyles: function() {
        var e = this.child.style;
        this._childOriginalPosition = e.position, this._childOriginalTop = e.top, this._childOriginalWidth = e.width, this._childOriginalLeft = e.left
      },
      _onresize: function() { this.refresh() },
      _saveViewportHeight: function() { this._viewportHeight = t.innerHeight || n.documentElement.clientHeight },
      _stop: function() { this._unfix(), e(t).unbind("scroll", this._proxied_onscroll), e(this._toresize).unbind("resize", this._proxied_onresize) },
      _start: function() { this._onscroll(), e(t).bind("scroll", this._proxied_onscroll), e(this._toresize).bind("resize", this._proxied_onresize) },
      _destroy: function() { this._replacer.destroy() },
      refresh: function() { this._saveViewportHeight(), this._unfix(), this._onscroll() }
    }), l.prototype = new s, e.extend(l.prototype, {
      _start: function() {
        var e = c.getAll(this.child);
        this._childOriginalPosition = e.position, this._childOriginalTop = e.top, this.child.style.position = h, this.refresh()
      },
      _stop: function() { this.child.style.position = this._childOriginalPosition, this.child.style.top = this._childOriginalTop },
      refresh: function() { this.child.style.top = this._mindtop() + this.options.top + "px" }
    });
    var y = function(e, t, n) { return h && !n || h && n && n.useNativeSticky !== !1 ? new l(e, t, n) : g ? (void 0 === d && (d = o()), new a(e, t, n)) : "Neither fixed nor sticky positioning supported" };
    return m < 8 && (y = function() { return "not supported" }), e.fn.fixTo = function(t, n) {
      var i = e(t),
        o = 0;
      return this.each(function() {
        var r = e(this).data("fixto-instance");
        if (r) {
          var s = t;
          r[s].call(r, n)
        } else e(this).data("fixto-instance", y(this, i[o], n));
        o++
      })
    }, { FixToContainer: a, fixTo: y, computedStyle: c, mimicNode: u }
  })(window.jQuery, window, document);
    /*!
     * magnific-popup.js
     */
    /*! Magnific Popup - v1.0.0 - 2014-12-12
     * http://dimsemenov.com/plugins/magnific-popup/
     * Copyright (c) 2014 Dmitry Semenov; */
    function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(e) {
      var t, n, i, o, r, s, a, l = "Close",
        c = "BeforeClose",
        u = "AfterClose",
        d = "BeforeAppend",
        p = "MarkupParse",
        f = "Open",
        h = "Change",
        m = "mfp",
        g = "." + m,
        v = "mfp-ready",
        y = "mfp-removing",
        x = "mfp-prevent-close",
        w = function() {},
        b = !!window.jQuery,
        C = e(window),
        _ = function(e, n) { t.ev.on(m + e + g, n) },
        E = function(t, n, i, o) { var r = document.createElement("div"); return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r },
        S = function(n, i) { t.ev.triggerHandler(m + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i])) },
        T = function(n) { return n === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = n), t.currTemplate.closeBtn },
        k = function() { e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t) },
        P = function() {
          var e = document.createElement("p").style,
            t = ["ms", "O", "Moz", "Webkit"];
          if (void 0 !== e.transition) return !0;
          for (; t.length;)
            if (t.pop() + "Transition" in e) return !0;
          return !1
        };
      w.prototype = {
        constructor: w,
        init: function() {
          var n = navigator.appVersion;
          t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = P(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
        },
        open: function(n) {
          i || (i = e(document.body));
          var r;
          if (n.isObj === !1) {
            t.items = n.items.toArray(), t.index = 0;
            var a, l = n.items;
            for (r = 0; l.length > r; r++)
              if (a = l[r], a.parsed && (a = a.el[0]), a === n.el[0]) { t.index = r; break }
          } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
          if (t.isOpen) return void t.updateItemHTML();
          t.types = [], s = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = E("bg").on("click" + g, function() { t.close() }), t.wrap = E("wrap").attr("tabindex", -1).on("click" + g, function(e) { t._checkIfClose(e.target) && t.close() }), t.container = E("container", t.wrap)), t.contentContainer = E("content"), t.st.preloader && (t.preloader = E("preloader", t.container, t.st.tLoading));
          var c = e.magnificPopup.modules;
          for (r = 0; c.length > r; r++) {
            var u = c[r];
            u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t)
          }
          S("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (_(p, function(e, t, n, i) { n.close_replaceWith = T(i.type) }), s += " mfp-close-btn-in") : t.wrap.append(T())), t.st.alignTop && (s += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: C.scrollTop(), position: "absolute" }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: o.height(), position: "absolute" }), t.st.enableEscapeKey && o.on("keyup" + g, function(e) { 27 === e.keyCode && t.close() }), C.on("resize" + g, function() { t.updateSize() }), t.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && t.wrap.addClass(s);
          var d = t.wH = C.height(),
            h = {};
          if (t.fixedContentPos && t._hasScrollBar(d)) {
            var m = t._getScrollbarSize();
            m && (h.marginRight = m)
          }
          t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : h.overflow = "hidden");
          var y = t.st.mainClass;
          return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), S("BuildControls"), e("html").css(h), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function() { t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + g, t._onFocusIn) }, 16), t.isOpen = !0, t.updateSize(d), S(f), n
        },
        close: function() { t.isOpen && (S(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(y), setTimeout(function() { t._close() }, t.st.removalDelay)) : t._close()) },
        _close: function() {
          S(l);
          var n = y + " " + v + " ";
          if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
            var i = { marginRight: "" };
            t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
          }
          o.off("keyup" + g + " focusin" + g), t.ev.off(g), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, S(u)
        },
        updateSize: function(e) {
          if (t.isIOS) {
            var n = document.documentElement.clientWidth / window.innerWidth,
              i = window.innerHeight * n;
            t.wrap.css("height", i), t.wH = i
          } else t.wH = e || C.height();
          t.fixedContentPos || t.wrap.css("height", t.wH), S("Resize")
        },
        updateItemHTML: function() {
          var n = t.items[t.index];
          t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
          var i = n.type;
          if (S("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
            var o = !!t.st[i] && t.st[i].markup;
            S("FirstMarkupParse", o), t.currTemplate[i] = !o || e(o)
          }
          r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
          var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
          t.appendContent(s, i), n.preloaded = !0, S(h, n), r = n.type, t.container.prepend(t.contentContainer), S("AfterChange")
        },
        appendContent: function(e, n) { t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(T()) : t.content = e : t.content = "", S(d), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content) },
        parseEl: function(n) {
          var i, o = t.items[n];
          if (o.tagName ? o = { el: e(o) } : (i = o.type, o = { data: o, src: o.src }), o.el) {
            for (var r = t.types, s = 0; r.length > s; s++)
              if (o.el.hasClass("mfp-" + r[s])) { i = r[s]; break }
            o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
          }
          return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, S("ElementParse", o), t.items[n]
        },
        addGroup: function(e, n) {
          var i = function(i) { i.mfpEl = this, t._openClick(i, e, n) };
          n || (n = {});
          var o = "click.magnificPopup";
          n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openClick: function(n, i, o) {
          var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
          if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
            var s = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
            if (s)
              if (e.isFunction(s)) { if (!s.call(t)) return !0 } else if (s > C.width()) return !0;
            n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
          }
        },
        updateStatus: function(e, i) {
          if (t.preloader) {
            n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
            var o = { status: e, text: i };
            S("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) { e.stopImmediatePropagation() }), t.container.addClass("mfp-s-" + e), n = e
          }
        },
        _checkIfClose: function(n) {
          if (!e(n).hasClass(x)) {
            var i = t.st.closeOnContentClick,
              o = t.st.closeOnBgClick;
            if (i && o) return !0;
            if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
            if (n === t.content[0] || e.contains(t.content[0], n)) { if (i) return !0 } else if (o && e.contains(document, n)) return !0;
            return !1
          }
        },
        _addClassToMFP: function(e) { t.bgOverlay.addClass(e), t.wrap.addClass(e) },
        _removeClassFromMFP: function(e) { this.bgOverlay.removeClass(e), t.wrap.removeClass(e) },
        _hasScrollBar: function(e) { return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || C.height()) },
        _setFocus: function() {
          (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) { return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1) },
        _parseMarkup: function(t, n, i) {
          var o;
          i.data && (n = e.extend(i.data, n)), S(p, [t, n, i]), e.each(n, function(e, n) { if (void 0 === n || n === !1) return !0; if (o = e.split("_"), o.length > 1) { var i = t.find(g + "-" + o[0]); if (i.length > 0) { var r = o[1]; "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n) } } else t.find(g + "-" + e).html(n) })
        },
        _getScrollbarSize: function() {
          if (void 0 === t.scrollbarSize) {
            var e = document.createElement("div");
            e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
          }
          return t.scrollbarSize
        }
      }, e.magnificPopup = { instance: null, proto: w.prototype, modules: [], open: function(t, n) { return k(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t) }, close: function() { return e.magnificPopup.instance && e.magnificPopup.instance.close() }, registerModule: function(t, n) { n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, e.fn.magnificPopup = function(n) {
        k();
        var i = e(this);
        if ("string" == typeof n)
          if ("open" === n) {
            var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
              s = parseInt(arguments[1], 10) || 0;
            r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), t._openClick({ mfpEl: o }, i, r)
          } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
      };
      var A, I, z, D = "inline",
        L = function() { z && (I.after(z.addClass(A)).detach(), z = null) };
      e.magnificPopup.registerModule(D, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
          initInline: function() { t.types.push(D), _(l + "." + D, function() { L() }) },
          getInline: function(n, i) {
            if (L(), n.src) {
              var o = t.st.inline,
                r = e(n.src);
              if (r.length) {
                var s = r[0].parentNode;
                s && s.tagName && (I || (A = o.hiddenClass, I = E(A), A = "mfp-" + A), z = r.after(I).detach().removeClass(A)), t.updateStatus("ready")
              } else t.updateStatus("error", o.tNotFound), r = e("<div>");
              return n.inlineElement = r, r
            }
            return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
          }
        }
      });
      var N, M = "ajax",
        O = function() { N && i.removeClass(N) },
        j = function() { O(), t.req && t.req.abort() };
      e.magnificPopup.registerModule(M, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
          initAjax: function() { t.types.push(M), N = t.st.ajax.cursor, _(l + "." + M, j), _("BeforeChange." + M, j) },
          getAjax: function(n) {
            N && i.addClass(N), t.updateStatus("loading");
            var o = e.extend({
              url: n.src,
              success: function(i, o, r) {
                var s = { data: i, xhr: r };
                S("ParseAjax", s), t.appendContent(e(s.data), M), n.finished = !0, O(), t._setFocus(), setTimeout(function() { t.wrap.addClass(v) }, 16), t.updateStatus("ready"), S("AjaxContentAdded")
              },
              error: function() { O(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src)) }
            }, t.st.ajax.settings);
            return t.req = e.ajax(o), ""
          }
        }
      });
      var F, q = function(n) { if (n.data && void 0 !== n.data.title) return n.data.title; var i = t.st.image.titleSrc; if (i) { if (e.isFunction(i)) return i.call(t, n); if (n.el) return n.el.attr(i) || "" } return "" };
      e.magnificPopup.registerModule("image", {
        options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' },
        proto: {
          initImage: function() {
            var e = t.st.image,
              n = ".image";
            t.types.push("image"), _(f + n, function() { "image" === t.currItem.type && e.cursor && i.addClass(e.cursor) }), _(l + n, function() { e.cursor && i.removeClass(e.cursor), C.off("resize" + g) }), _("Resize" + n, t.resizeImage), t.isLowIE && _("AfterChange", t.resizeImage)
          },
          resizeImage: function() {
            var e = t.currItem;
            if (e && e.img && t.st.image.verticalFit) {
              var n = 0;
              t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
            }
          },
          _onImageHasSize: function(e) { e.img && (e.hasSize = !0, F && clearInterval(F), e.isCheckingImgSize = !1, S("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1)) },
          findImageSize: function(e) {
            var n = 0,
              i = e.img[0],
              o = function(r) { F && clearInterval(F), F = setInterval(function() { return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(F), n++, void(3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500))) }, r) };
            o(1)
          },
          getImage: function(n, i) {
            var o = 0,
              r = function() { n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, S("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : s())) },
              s = function() { n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0) },
              a = t.st.image,
              l = i.find(".mfp-img");
            if (l.length) {
              var c = document.createElement("img");
              c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", r).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
            }
            return t._parseMarkup(i, { title: q(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (F && clearInterval(F), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
          }
        }
      });
      var B, R = function() { return void 0 === B && (B = void 0 !== document.createElement("p").style.MozTransform), B };
      e.magnificPopup.registerModule("zoom", {
        options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(e) { return e.is("img") ? e : e.find("img") } },
        proto: {
          initZoom: function() {
            var e, n = t.st.zoom,
              i = ".zoom";
            if (n.enabled && t.supportsTransition) {
              var o, r, s = n.duration,
                a = function(e) {
                  var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                    i = "all " + n.duration / 1e3 + "s " + n.easing,
                    o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                    r = "transition";
                  return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
                },
                u = function() { t.content.css("visibility", "visible") };
              _("BuildControls" + i, function() {
                if (t._allowZoom()) {
                  if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void u();
                  r = a(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() { r.css(t._getOffset(!0)), o = setTimeout(function() { u(), setTimeout(function() { r.remove(), e = r = null, S("ZoomAnimationEnded") }, 16) }, s) }, 16)
                }
              }), _(c + i, function() {
                if (t._allowZoom()) {
                  if (clearTimeout(o), t.st.removalDelay = s, !e) {
                    if (e = t._getItemToZoom(), !e) return;
                    r = a(e)
                  }
                  r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() { r.css(t._getOffset()) }, 16)
                }
              }), _(l + i, function() { t._allowZoom() && (u(), r && r.remove(), e = null) })
            }
          },
          _allowZoom: function() { return "image" === t.currItem.type },
          _getItemToZoom: function() { return !!t.currItem.hasSize && t.currItem.img },
          _getOffset: function(n) {
            var i;
            i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
            var o = i.offset(),
              r = parseInt(i.css("padding-top"), 10),
              s = parseInt(i.css("padding-bottom"), 10);
            o.top -= e(window).scrollTop() - r;
            var a = { width: i.width(), height: (b ? i.innerHeight() : i[0].offsetHeight) - s - r };
            return R() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
          }
        }
      });
      var H = "iframe",
        W = "//about:blank",
        $ = function(e) {
          if (t.currTemplate[H]) {
            var n = t.currTemplate[H].find("iframe");
            n.length && (e || (n[0].src = W), t.isIE8 && n.css("display", e ? "block" : "none"))
          }
        };
      e.magnificPopup.registerModule(H, {
        options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } },
        proto: {
          initIframe: function() { t.types.push(H), _("BeforeChange", function(e, t, n) { t !== n && (t === H ? $() : n === H && $(!0)) }), _(l + "." + H, function() { $() }) },
          getIframe: function(n, i) {
            var o = n.src,
              r = t.st.iframe;
            e.each(r.patterns, function() { return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0 });
            var s = {};
            return r.srcAction && (s[r.srcAction] = o), t._parseMarkup(i, s, n), t.updateStatus("ready"), i
          }
        }
      });
      var U = function(e) { var n = t.items.length; return e > n - 1 ? e - n : 0 > e ? n + e : e },
        X = function(e, t, n) { return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n) };
      e.magnificPopup.registerModule("gallery", {
        options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" },
        proto: {
          initGallery: function() {
            var n = t.st.gallery,
              i = ".mfp-gallery",
              r = Boolean(e.fn.mfpFastClick);
            return t.direction = !0, !(!n || !n.enabled) && (s += " mfp-gallery", _(f + i, function() { n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() { return t.items.length > 1 ? (t.next(), !1) : void 0 }), o.on("keydown" + i, function(e) { 37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next() }) }), _("UpdateStatus" + i, function(e, n) { n.text && (n.text = X(n.text, t.currItem.index, t.items.length)) }), _(p + i, function(e, i, o, r) {
              var s = t.items.length;
              o.counter = s > 1 ? X(n.tCounter, r.index, s) : ""
            }), _("BuildControls" + i, function() {
              if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                var i = n.arrowMarkup,
                  o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(x),
                  s = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(x),
                  a = r ? "mfpFastClick" : "click";
                o[a](function() { t.prev() }), s[a](function() { t.next() }), t.isIE7 && (E("b", o[0], !1, !0), E("a", o[0], !1, !0), E("b", s[0], !1, !0), E("a", s[0], !1, !0)), t.container.append(o.add(s))
              }
            }), _(h + i, function() { t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() { t.preloadNearbyImages(), t._preloadTimeout = null }, 16) }), void _(l + i, function() { o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null }))
          },
          next: function() { t.direction = !0, t.index = U(t.index + 1), t.updateItemHTML() },
          prev: function() { t.direction = !1, t.index = U(t.index - 1), t.updateItemHTML() },
          goTo: function(e) { t.direction = e >= t.index, t.index = e, t.updateItemHTML() },
          preloadNearbyImages: function() {
            var e, n = t.st.gallery.preload,
              i = Math.min(n[0], t.items.length),
              o = Math.min(n[1], t.items.length);
            for (e = 1;
              (t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
            for (e = 1;
              (t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
          },
          _preloadItem: function(n) {
            if (n = U(n), !t.items[n].preloaded) {
              var i = t.items[n];
              i.parsed || (i = t.parseEl(n)), S("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() { i.hasSize = !0 }).on("error.mfploader", function() { i.hasSize = !0, i.loadError = !0, S("LazyLoadError", i) }).attr("src", i.src)), i.preloaded = !0
            }
          }
        }
      });
      var Y = "retina";
      e.magnificPopup.registerModule(Y, {
          options: { replaceSrc: function(e) { return e.src.replace(/\.\w+$/, function(e) { return "@2x" + e }) }, ratio: 1 },
          proto: {
            initRetina: function() {
              if (window.devicePixelRatio > 1) {
                var e = t.st.retina,
                  n = e.ratio;
                n = isNaN(n) ? n() : n, n > 1 && (_("ImageHasSize." + Y, function(e, t) { t.img.css({ "max-width": t.img[0].naturalWidth / n, width: "100%" }) }), _("ElementParse." + Y, function(t, i) { i.src = e.replaceSrc(i, n) }))
              }
            }
          }
        }),
        function() {
          var t = 1e3,
            n = "ontouchstart" in window,
            i = function() { C.off("touchmove" + r + " touchend" + r) },
            o = "mfpFastClick",
            r = "." + o;
          e.fn.mfpFastClick = function(o) {
            return e(this).each(function() {
              var s, a = e(this);
              if (n) {
                var l, c, u, d, p, f;
                a.on("touchstart" + r, function(e) { d = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, u = p.clientY, C.on("touchmove" + r, function(e) { p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - u) > 10) && (d = !0, i()) }).on("touchend" + r, function(e) { i(), d || f > 1 || (s = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() { s = !1 }, t), o()) }) })
              }
              a.on("click" + r, function() { s || o() })
            })
          }, e.fn.destroyMfpFastClick = function() { e(this).off("touchstart" + r + " click" + r), n && C.off("touchmove" + r + " touchend" + r) }
        }(), k()
    }),
    /*!
     * jquery.easing.js
     */
    /*
     * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
     *
     * Uses the built in easing capabilities added In jQuery 1.1
     * to offer multiple easing options
     *
     * TERMS OF USE - jQuery Easing
     *
     * Open source under the BSD License.
     *
     * Copyright 2008 George McGinley Smith
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *
     * Redistributions of source code must retain the above copyright notice, this list of
     * conditions and the following disclaimer.
     * Redistributions in binary form must reproduce the above copyright notice, this list
     * of conditions and the following disclaimer in the documentation and/or other materials
     * provided with the distribution.
     *
     * Neither the name of the author nor the names of contributors may be used to endorse
     * or promote products derived from this software without specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
     * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
     * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
     * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
     * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
     * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
     * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
     * OF THE POSSIBILITY OF SUCH DAMAGE.
     *
     */
    e.easing.jswing = e.easing.swing, e.extend(e.easing, {
      def: "easeOutQuad",
      swing: function(t, n, i, o, r) { return e.easing[e.easing.def](t, n, i, o, r) },
      easeInQuad: function(e, t, n, i, o) { return i * (t /= o) * t + n },
      easeOutQuad: function(e, t, n, i, o) { return -i * (t /= o) * (t - 2) + n },
      easeInOutQuad: function(e, t, n, i, o) { return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n },
      easeInCubic: function(e, t, n, i, o) { return i * (t /= o) * t * t + n },
      easeOutCubic: function(e, t, n, i, o) { return i * ((t = t / o - 1) * t * t + 1) + n },
      easeInOutCubic: function(e, t, n, i, o) { return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n },
      easeInQuart: function(e, t, n, i, o) { return i * (t /= o) * t * t * t + n },
      easeOutQuart: function(e, t, n, i, o) { return -i * ((t = t / o - 1) * t * t * t - 1) + n },
      easeInOutQuart: function(e, t, n, i, o) { return (t /= o / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n },
      easeInQuint: function(e, t, n, i, o) { return i * (t /= o) * t * t * t * t + n },
      easeOutQuint: function(e, t, n, i, o) { return i * ((t = t / o - 1) * t * t * t * t + 1) + n },
      easeInOutQuint: function(e, t, n, i, o) { return (t /= o / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n },
      easeInSine: function(e, t, n, i, o) { return -i * Math.cos(t / o * (Math.PI / 2)) + i + n },
      easeOutSine: function(e, t, n, i, o) { return i * Math.sin(t / o * (Math.PI / 2)) + n },
      easeInOutSine: function(e, t, n, i, o) { return -i / 2 * (Math.cos(Math.PI * t / o) - 1) + n },
      easeInExpo: function(e, t, n, i, o) { return 0 == t ? n : i * Math.pow(2, 10 * (t / o - 1)) + n },
      easeOutExpo: function(e, t, n, i, o) { return t == o ? n + i : i * (-Math.pow(2, -10 * t / o) + 1) + n },
      easeInOutExpo: function(e, t, n, i, o) { return 0 == t ? n : t == o ? n + i : (t /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n },
      easeInCirc: function(e, t, n, i, o) { return -i * (Math.sqrt(1 - (t /= o) * t) - 1) + n },
      easeOutCirc: function(e, t, n, i, o) { return i * Math.sqrt(1 - (t = t / o - 1) * t) + n },
      easeInOutCirc: function(e, t, n, i, o) { return (t /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n },
      easeInElastic: function(e, t, n, i, o) {
        var r = 1.70158,
          s = 0,
          a = i;
        if (0 == t) return n;
        if (1 == (t /= o)) return n + i;
        if (s || (s = .3 * o), a < Math.abs(i)) { a = i; var r = s / 4 } else var r = s / (2 * Math.PI) * Math.asin(i / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / s)) + n
      },
      easeOutElastic: function(e, t, n, i, o) {
        var r = 1.70158,
          s = 0,
          a = i;
        if (0 == t) return n;
        if (1 == (t /= o)) return n + i;
        if (s || (s = .3 * o), a < Math.abs(i)) { a = i; var r = s / 4 } else var r = s / (2 * Math.PI) * Math.asin(i / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * o - r) * (2 * Math.PI) / s) + i + n
      },
      easeInOutElastic: function(e, t, n, i, o) {
        var r = 1.70158,
          s = 0,
          a = i;
        if (0 == t) return n;
        if (2 == (t /= o / 2)) return n + i;
        if (s || (s = o * (.3 * 1.5)), a < Math.abs(i)) { a = i; var r = s / 4 } else var r = s / (2 * Math.PI) * Math.asin(i / a);
        return t < 1 ? -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / s)) + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / s) * .5 + i + n
      },
      easeInBack: function(e, t, n, i, o, r) { return void 0 == r && (r = 1.70158), i * (t /= o) * t * ((r + 1) * t - r) + n },
      easeOutBack: function(e, t, n, i, o, r) { return void 0 == r && (r = 1.70158), i * ((t = t / o - 1) * t * ((r + 1) * t + r) + 1) + n },
      easeInOutBack: function(e, t, n, i, o, r) { return void 0 == r && (r = 1.70158), (t /= o / 2) < 1 ? i / 2 * (t * t * (((r *= 1.525) + 1) * t - r)) + n : i / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + n },
      easeInBounce: function(t, n, i, o, r) { return o - e.easing.easeOutBounce(t, r - n, 0, o, r) + i },
      easeOutBounce: function(e, t, n, i, o) { return (t /= o) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n },
      easeInOutBounce: function(t, n, i, o, r) { return n < r / 2 ? .5 * e.easing.easeInBounce(t, 2 * n, 0, o, r) + i : .5 * e.easing.easeOutBounce(t, 2 * n - r, 0, o, r) + .5 * o + i }
    }),
    /*
     *
     * TERMS OF USE - EASING EQUATIONS
     *
     * Open source under the BSD License.
     *
     * Copyright 2001 Robert Penner
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *
     * Redistributions of source code must retain the above copyright notice, this list of
     * conditions and the following disclaimer.
     * Redistributions in binary form must reproduce the above copyright notice, this list
     * of conditions and the following disclaimer in the documentation and/or other materials
     * provided with the distribution.
     *
     * Neither the name of the author nor the names of contributors may be used to endorse
     * or promote products derived from this software without specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
     * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
     * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
     * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
     * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
     * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
     * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
     * OF THE POSSIBILITY OF SUCH DAMAGE.
     *
     */
    /*!
     * flickity.js
     */
    /*!
     * Flickity PACKAGED v1.2.1
     * Touch, responsive, flickable galleries
     *
     * Licensed GPLv3 for open source use
     * or Flickity Commercial License for commercial use
     *
     * http://flickity.metafizzy.co
     * Copyright 2015 Metafizzy
     */
    ! function(e) {
      function t() {}

      function n(e) {
        function n(t) { t.prototype.option || (t.prototype.option = function(t) { e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t)) }) }

        function o(t, n) {
          e.fn[t] = function(o) {
            if ("string" == typeof o) {
              for (var s = i.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                var c = this[a],
                  u = e.data(c, t);
                if (u)
                  if (e.isFunction(u[o]) && "_" !== o.charAt(0)) { var d = u[o].apply(u, s); if (void 0 !== d) return d } else r("no such method '" + o + "' for " + t + " instance");
                else r("cannot call methods on " + t + " prior to initialization; attempted to call '" + o + "'")
              }
              return this
            }
            return this.each(function() {
              var i = e.data(this, t);
              i ? (i.option(o), i._init()) : (i = new n(this, o), e.data(this, t, i))
            })
          }
        }
        if (e) { var r = "undefined" == typeof console ? t : function(e) { console.error(e) }; return e.bridget = function(e, t) { n(t), o(e, t) }, e.bridget }
      }
      var i = Array.prototype.slice;
      "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n("object" == typeof exports ? require("jquery") : e.jQuery)
    }(window),
    function(e) {
      function t(e) { return new RegExp("(^|\\s+)" + e + "(\\s+|$)") }

      function n(e, t) {
        var n = i(e, t) ? r : o;
        n(e, t)
      }
      var i, o, r;
      "classList" in document.documentElement ? (i = function(e, t) { return e.classList.contains(t) }, o = function(e, t) { e.classList.add(t) }, r = function(e, t) { e.classList.remove(t) }) : (i = function(e, n) { return t(n).test(e.className) }, o = function(e, t) { i(e, t) || (e.className = e.className + " " + t) }, r = function(e, n) { e.className = e.className.replace(t(n), " ") });
      var s = { hasClass: i, addClass: o, removeClass: r, toggleClass: n, has: i, add: o, remove: r, toggle: n };
      "function" == typeof define && define.amd ? define("classie/classie", s) : "object" == typeof exports ? module.exports = s : e.classie = s
    }(window),
    function() {
      "use strict";

      function e() {}

      function t(e, t) {
        for (var n = e.length; n--;)
          if (e[n].listener === t) return n;
        return -1
      }

      function n(e) { return function() { return this[e].apply(this, arguments) } }
      var i = e.prototype,
        o = this,
        r = o.EventEmitter;
      i.getListeners = function(e) { var t, n, i = this._getEvents(); if (e instanceof RegExp) { t = {}; for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]) } else t = i[e] || (i[e] = []); return t }, i.flattenListeners = function(e) { var t, n = []; for (t = 0; t < e.length; t += 1) n.push(e[t].listener); return n }, i.getListenersAsObject = function(e) { var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n }, i.addListener = function(e, n) {
        var i, o = this.getListenersAsObject(e),
          r = "object" == typeof n;
        for (i in o) o.hasOwnProperty(i) && -1 === t(o[i], n) && o[i].push(r ? n : { listener: n, once: !1 });
        return this
      }, i.on = n("addListener"), i.addOnceListener = function(e, t) { return this.addListener(e, { listener: t, once: !0 }) }, i.once = n("addOnceListener"), i.defineEvent = function(e) { return this.getListeners(e), this }, i.defineEvents = function(e) { for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]); return this }, i.removeListener = function(e, n) { var i, o, r = this.getListenersAsObject(e); for (o in r) r.hasOwnProperty(o) && (i = t(r[o], n), -1 !== i && r[o].splice(i, 1)); return this }, i.off = n("removeListener"), i.addListeners = function(e, t) { return this.manipulateListeners(!1, e, t) }, i.removeListeners = function(e, t) { return this.manipulateListeners(!0, e, t) }, i.manipulateListeners = function(e, t, n) {
        var i, o, r = e ? this.removeListener : this.addListener,
          s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
          for (i = n.length; i--;) r.call(this, t, n[i]);
        else
          for (i in t) t.hasOwnProperty(i) && (o = t[i]) && ("function" == typeof o ? r.call(this, i, o) : s.call(this, i, o));
        return this
      }, i.removeEvent = function(e) {
        var t, n = typeof e,
          i = this._getEvents();
        if ("string" === n) delete i[e];
        else if (e instanceof RegExp)
          for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
      }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, o, r, s = this.getListenersAsObject(e);
        for (o in s)
          if (s.hasOwnProperty(o))
            for (i = s[o].length; i--;) n = s[o][i], n.once === !0 && this.removeListener(e, n.listener), r = n.listener.apply(this, t || []), r === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
      }, i.trigger = n("emitEvent"), i.emit = function(e) { var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t) }, i.setOnceReturnValue = function(e) { return this._onceReturnValue = e, this }, i._getOnceReturnValue = function() { return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue }, i._getEvents = function() { return this._events || (this._events = {}) }, e.noConflict = function() { return o.EventEmitter = r, e }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return e }) : "object" == typeof module && module.exports ? module.exports = e : o.EventEmitter = e
    }.call(this),
    function(e) {
      function t(t) { var n = e.event; return n.target = n.target || n.srcElement || t, n }
      var n = document.documentElement,
        i = function() {};
      n.addEventListener ? i = function(e, t, n) { e.addEventListener(t, n, !1) } : n.attachEvent && (i = function(e, n, i) {
        e[n + i] = i.handleEvent ? function() {
          var n = t(e);
          i.handleEvent.call(i, n)
        } : function() {
          var n = t(e);
          i.call(e, n)
        }, e.attachEvent("on" + n, e[n + i])
      });
      var o = function() {};
      n.removeEventListener ? o = function(e, t, n) { e.removeEventListener(t, n, !1) } : n.detachEvent && (o = function(e, t, n) { e.detachEvent("on" + t, e[t + n]); try { delete e[t + n] } catch (i) { e[t + n] = void 0 } });
      var r = { bind: i, unbind: o };
      "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : e.eventie = r
    }(window),
    function(e) {
      function t(e) {
        if (e) {
          if ("string" == typeof i[e]) return e;
          e = e.charAt(0).toUpperCase() + e.slice(1);
          for (var t, o = 0, r = n.length; r > o; o++)
            if (t = n[o] + e, "string" == typeof i[t]) return t
        }
      }
      var n = "Webkit Moz ms Ms O".split(" "),
        i = document.documentElement.style;
      "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() { return t }) : "object" == typeof exports ? module.exports = t : e.getStyleProperty = t
    }(window),
    function(e, t) {
      function n(e) {
        var t = parseFloat(e),
          n = -1 === e.indexOf("%") && !isNaN(t);
        return n && t
      }

      function i() {}

      function o() {
        for (var e = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, t = 0, n = a.length; n > t; t++) {
          var i = a[t];
          e[i] = 0
        }
        return e
      }

      function r(t) {
        function i() {
          if (!p) {
            p = !0;
            var i = e.getComputedStyle;
            if (c = function() { var e = i ? function(e) { return i(e, null) } : function(e) { return e.currentStyle }; return function(t) { var n = e(t); return n || s("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n } }(), u = t("boxSizing")) {
              var o = document.createElement("div");
              o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[u] = "border-box";
              var r = document.body || document.documentElement;
              r.appendChild(o);
              var a = c(o);
              d = 200 === n(a.width), r.removeChild(o)
            }
          }
        }

        function r(e) {
          if (i(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var t = c(e);
            if ("none" === t.display) return o();
            var r = {};
            r.width = e.offsetWidth, r.height = e.offsetHeight;
            for (var s = r.isBorderBox = !(!u || !t[u] || "border-box" !== t[u]), p = 0, f = a.length; f > p; p++) {
              var h = a[p],
                m = t[h];
              m = l(e, m);
              var g = parseFloat(m);
              r[h] = isNaN(g) ? 0 : g
            }
            var v = r.paddingLeft + r.paddingRight,
              y = r.paddingTop + r.paddingBottom,
              x = r.marginLeft + r.marginRight,
              w = r.marginTop + r.marginBottom,
              b = r.borderLeftWidth + r.borderRightWidth,
              C = r.borderTopWidth + r.borderBottomWidth,
              _ = s && d,
              E = n(t.width);
            E !== !1 && (r.width = E + (_ ? 0 : v + b));
            var S = n(t.height);
            return S !== !1 && (r.height = S + (_ ? 0 : y + C)), r.innerWidth = r.width - (v + b), r.innerHeight = r.height - (y + C), r.outerWidth = r.width + x, r.outerHeight = r.height + w, r
          }
        }

        function l(t, n) {
          if (e.getComputedStyle || -1 === n.indexOf("%")) return n;
          var i = t.style,
            o = i.left,
            r = t.runtimeStyle,
            s = r && r.left;
          return s && (r.left = t.currentStyle.left), i.left = n, n = i.pixelLeft, i.left = o, s && (r.left = s), n
        }
        var c, u, d, p = !1;
        return r
      }
      var s = "undefined" == typeof console ? i : function(e) { console.error(e) },
        a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
      "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : e.getSize = r(e.getStyleProperty)
    }(window),
    function(e) {
      function t(e) { "function" == typeof e && (t.isReady ? e() : s.push(e)) }

      function n(e) {
        var n = "readystatechange" === e.type && "complete" !== r.readyState;
        t.isReady || n || i()
      }

      function i() {
        t.isReady = !0;
        for (var e = 0, n = s.length; n > e; e++) {
          var i = s[e];
          i()
        }
      }

      function o(o) { return "complete" === r.readyState ? i() : (o.bind(r, "DOMContentLoaded", n), o.bind(r, "readystatechange", n), o.bind(e, "load", n)), t }
      var r = e.document,
        s = [];
      t.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : e.docReady = o(e.eventie)
    }(window),
    function(e) {
      "use strict";

      function t(e, t) { return e[s](t) }

      function n(e) {
        if (!e.parentNode) {
          var t = document.createDocumentFragment();
          t.appendChild(e)
        }
      }

      function i(e, t) {
        n(e);
        for (var i = e.parentNode.querySelectorAll(t), o = 0, r = i.length; r > o; o++)
          if (i[o] === e) return !0;
        return !1
      }

      function o(e, i) { return n(e), t(e, i) }
      var r, s = function() {
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], n = 0, i = t.length; i > n; n++) {
          var o = t[n],
            r = o + "MatchesSelector";
          if (e[r]) return r
        }
      }();
      if (s) {
        var a = document.createElement("div"),
          l = t(a, "div");
        r = l ? t : o
      } else r = i;
      "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() { return r }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
    }(Element.prototype),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(n, i) { return t(e, n, i) }) : "object" == typeof exports ? module.exports = t(e, require("doc-ready"), require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.docReady, e.matchesSelector) }(window, function(e, t, n) {
      var i = {};
      i.extend = function(e, t) { for (var n in t) e[n] = t[n]; return e }, i.modulo = function(e, t) { return (e % t + t) % t };
      var o = Object.prototype.toString;
      i.isArray = function(e) { return "[object Array]" == o.call(e) }, i.makeArray = function(e) {
        var t = [];
        if (i.isArray(e)) t = e;
        else if (e && "number" == typeof e.length)
          for (var n = 0, o = e.length; o > n; n++) t.push(e[n]);
        else t.push(e);
        return t
      }, i.indexOf = Array.prototype.indexOf ? function(e, t) { return e.indexOf(t) } : function(e, t) {
        for (var n = 0, i = e.length; i > n; n++)
          if (e[n] === t) return n;
        return -1
      }, i.removeFrom = function(e, t) { var n = i.indexOf(e, t); - 1 != n && e.splice(n, 1) }, i.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(e) { return e instanceof HTMLElement } : function(e) { return e && "object" == typeof e && 1 == e.nodeType && "string" == typeof e.nodeName }, i.setText = function() {
        function e(e, n) { t = t || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), e[t] = n }
        var t;
        return e
      }(), i.getParent = function(e, t) {
        for (; e != document.body;)
          if (e = e.parentNode, n(e, t)) return e
      }, i.getQueryElement = function(e) { return "string" == typeof e ? document.querySelector(e) : e }, i.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
      }, i.filterFindElements = function(e, t) {
        e = i.makeArray(e);
        for (var o = [], r = 0, s = e.length; s > r; r++) {
          var a = e[r];
          if (i.isElement(a))
            if (t) { n(a, t) && o.push(a); for (var l = a.querySelectorAll(t), c = 0, u = l.length; u > c; c++) o.push(l[c]) } else o.push(a)
        }
        return o
      }, i.debounceMethod = function(e, t, n) {
        var i = e.prototype[t],
          o = t + "Timeout";
        e.prototype[t] = function() {
          var e = this[o];
          e && clearTimeout(e);
          var t = arguments,
            r = this;
          this[o] = setTimeout(function() { i.apply(r, t), delete r[o] }, n || 100)
        }
      }, i.toDashed = function(e) { return e.replace(/(.)([A-Z])/g, function(e, t, n) { return t + "-" + n }).toLowerCase() };
      var r = e.console;
      return i.htmlInit = function(n, o) {
        t(function() {
          for (var t = i.toDashed(o), s = document.querySelectorAll(".js-" + t), a = "data-" + t + "-options", l = 0, c = s.length; c > l; l++) {
            var u, d = s[l],
              p = d.getAttribute(a);
            try { u = p && JSON.parse(p) } catch (e) { r && r.error("Error parsing " + a + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + e); continue }
            var f = new n(d, u),
              h = e.jQuery;
            h && h.data(d, o, f)
          }
        })
      }, i
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(n) { return t(e, n) }) : "object" == typeof exports ? module.exports = t(e, require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = t(e, e.getSize)) }(window, function(e, t) {
      function n(e, t) { this.element = e, this.parent = t, this.create() }
      var i = "attachEvent" in e;
      return n.prototype.create = function() { this.element.style.position = "absolute", i && this.element.setAttribute("unselectable", "on"), this.x = 0, this.shift = 0 }, n.prototype.destroy = function() {
        this.element.style.position = "";
        var e = this.parent.originSide;
        this.element.style[e] = ""
      }, n.prototype.getSize = function() { this.length = t(this.element) }, n.prototype.setPosition = function(e) { this.x = e, this.setDefaultTarget(), this.renderPosition(e) }, n.prototype.setDefaultTarget = function() {
        var e = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.length[e] + this.length.width * this.parent.cellAlign
      }, n.prototype.renderPosition = function(e) {
        var t = this.parent.originSide;
        this.element.style[t] = this.parent.getPositionValue(e)
      }, n.prototype.wrapShift = function(e) { this.shift = e, this.renderPosition(this.x + this.parent.slideableWidth * e) }, n.prototype.remove = function() { this.element.parentNode.removeChild(this.element) }, n
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("flickity/js/animate", ["get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(n, i) { return t(e, n, i) }) : "object" == typeof exports ? module.exports = t(e, require("desandro-get-style-property"), require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = t(e, e.getStyleProperty, e.fizzyUIUtils)) }(window, function(e, t, n) {
      for (var i, o = 0, r = "webkit moz ms o".split(" "), s = e.requestAnimationFrame, a = e.cancelAnimationFrame, l = 0; l < r.length && (!s || !a); l++) i = r[l], s = s || e[i + "RequestAnimationFrame"], a = a || e[i + "CancelAnimationFrame"] || e[i + "CancelRequestAnimationFrame"];
      s && a || (s = function(t) {
        var n = (new Date).getTime(),
          i = Math.max(0, 16 - (n - o)),
          r = e.setTimeout(function() { t(n + i) }, i);
        return o = n + i, r
      }, a = function(t) { e.clearTimeout(t) });
      var c = {};
      c.startAnimation = function() { this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate()) }, c.animate = function() {
        this.applyDragForce(), this.applySelectedAttraction();
        var e = this.x;
        if (this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating) {
          var t = this;
          s(function() { t.animate() })
        }
      };
      var u = t("transform"),
        d = !!t("perspective");
      return c.positionSlider = function() {
        var e = this.x;
        this.options.wrapAround && this.cells.length > 1 && (e = n.modulo(e, this.slideableWidth), e -= this.slideableWidth, this.shiftWrapCells(e)), e += this.cursorPosition, e = this.options.rightToLeft && u ? -e : e;
        var t = this.getPositionValue(e);
        u ? this.slider.style[u] = d && this.isAnimating ? "translate3d(" + t + ",0,0)" : "translateX(" + t + ")" : this.slider.style[this.originSide] = t
      }, c.positionSliderAtSelected = function() {
        if (this.cells.length) {
          var e = this.cells[this.selectedIndex];
          this.x = -e.target, this.positionSlider()
        }
      }, c.getPositionValue = function(e) { return this.options.percentPosition ? .01 * Math.round(e / this.length.innerWidth * 1e4) + "%" : Math.round(e) + "px" }, c.settle = function(e) { this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * e) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, d && this.positionSlider(), this.dispatchEvent("settle")) }, c.shiftWrapCells = function(e) {
        var t = this.cursorPosition + e;
        this._shiftCells(this.beforeShiftCells, t, -1);
        var n = this.length.innerWidth - (e + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, n, 1)
      }, c._shiftCells = function(e, t, n) {
        for (var i = 0, o = e.length; o > i; i++) {
          var r = e[i],
            s = t > 0 ? n : 0;
          r.wrapShift(s), t -= r.length.outerWidth
        }
      }, c._unshiftCells = function(e) {
        if (e && e.length)
          for (var t = 0, n = e.length; n > t; t++) e[t].wrapShift(0)
      }, c.integratePhysics = function() { this.velocity += this.accel, this.x += this.velocity, this.velocity *= this.getFrictionFactor(), this.accel = 0 }, c.applyForce = function(e) { this.accel += e }, c.getFrictionFactor = function() { return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"] }, c.getRestingPosition = function() { return this.x + this.velocity / (1 - this.getFrictionFactor()) }, c.applyDragForce = function() {
        if (this.isPointerDown) {
          var e = this.dragX - this.x,
            t = e - this.velocity;
          this.applyForce(t)
        }
      }, c.applySelectedAttraction = function() {
        var e = this.cells.length;
        if (!this.isPointerDown && !this.isFreeScrolling && e) {
          var t = this.cells[this.selectedIndex],
            n = this.options.wrapAround && e > 1 ? this.slideableWidth * Math.floor(this.selectedIndex / e) : 0,
            i = -1 * (t.target + n) - this.x,
            o = i * this.options.selectedAttraction;
          this.applyForce(o)
        }
      }, c
    }),
    function(e, t) {
      "use strict";
      if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["classie/classie", "eventEmitter/EventEmitter", "eventie/eventie", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./animate"], function(n, i, o, r, s, a, l) { return t(e, n, i, o, r, s, a, l) });
      else if ("object" == typeof exports) module.exports = t(e, require("desandro-classie"), require("wolfy87-eventemitter"), require("eventie"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./animate"));
      else {
        var n = e.Flickity;
        e.Flickity = t(e, e.classie, e.EventEmitter, e.eventie, e.getSize, e.fizzyUIUtils, n.Cell, n.animatePrototype)
      }
    }(window, function(e, t, n, i, o, r, s, a) {
      function l(e, t) { for (e = r.makeArray(e); e.length;) t.appendChild(e.shift()) }

      function c(e, t) { var n = r.getQueryElement(e); return n ? (this.element = n, u && (this.$element = u(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(t), void this._create()) : void(p && p.error("Bad element for Flickity: " + (n || e))) }
      var u = e.jQuery,
        d = e.getComputedStyle,
        p = e.console,
        f = 0,
        h = {};
      c.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: .075, friction: .28, percentPosition: !0, resize: !0, selectedAttraction: .025, setGallerySize: !0 }, c.createMethods = [], r.extend(c.prototype, n.prototype), c.prototype._create = function() {
        var t = this.guid = ++f;
        this.element.flickityGUID = t, h[t] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.accel = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", c.setUnselectable(this.viewport), this._createSlider(), (this.options.resize || this.options.watchCSS) && (i.bind(e, "resize", this), this.isResizeBound = !0);
        for (var n = 0, o = c.createMethods.length; o > n; n++) {
          var r = c.createMethods[n];
          this[r]()
        }
        this.options.watchCSS ? this.watchCSS() : this.activate()
      }, c.prototype.option = function(e) { r.extend(this.options, e) }, c.prototype.activate = function() {
        if (!this.isActive) {
          this.isActive = !0, t.add(this.element, "flickity-enabled"), this.options.rightToLeft && t.add(this.element, "flickity-rtl"), this.getSize();
          var e = this._filterFindCellElements(this.element.children);
          l(e, this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, i.bind(this.element, "keydown", this)), this.emit("activate");
          var n, o = this.options.initialIndex;
          n = this.isInitActivated ? this.selectedIndex : void 0 !== o && this.cells[o] ? o : 0, this.select(n, !1, !0), this.isInitActivated = !0
        }
      }, c.prototype._createSlider = function() {
        var e = document.createElement("div");
        e.className = "flickity-slider", e.style[this.originSide] = 0, this.slider = e
      }, c.prototype._filterFindCellElements = function(e) { return r.filterFindElements(e, this.options.cellSelector) }, c.prototype.reloadCells = function() { this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize() }, c.prototype._makeCells = function(e) {
        for (var t = this._filterFindCellElements(e), n = [], i = 0, o = t.length; o > i; i++) {
          var r = t[i],
            a = new s(r, this);
          n.push(a)
        }
        return n
      }, c.prototype.getLastCell = function() { return this.cells[this.cells.length - 1] }, c.prototype.positionCells = function() { this._sizeCells(this.cells), this._positionCells(0) }, c.prototype._positionCells = function(e) {
        e = e || 0, this.maxCellHeight = e ? this.maxCellHeight || 0 : 0;
        var t = 0;
        if (e > 0) {
          var n = this.cells[e - 1];
          t = n.x + n.length.outerWidth
        }
        for (var i, o = this.cells.length, r = e; o > r; r++) i = this.cells[r], i.setPosition(t), t += i.length.outerWidth, this.maxCellHeight = Math.max(i.length.outerHeight, this.maxCellHeight);
        this.slideableWidth = t, this._containCells()
      }, c.prototype._sizeCells = function(e) {
        for (var t = 0, n = e.length; n > t; t++) {
          var i = e[t];
          i.getSize()
        }
      }, c.prototype._init = c.prototype.reposition = function() { this.positionCells(), this.positionSliderAtSelected() }, c.prototype.getSize = function() { this.length = o(this.element), this.setCellAlign(), this.cursorPosition = this.length.innerWidth * this.cellAlign };
      var m = { center: { left: .5, right: .5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };
      c.prototype.setCellAlign = function() {
        var e = m[this.options.cellAlign];
        this.cellAlign = e ? e[this.originSide] : this.options.cellAlign
      }, c.prototype.setGallerySize = function() { this.options.setGallerySize && (this.viewport.style.height = this.maxCellHeight + "px") }, c.prototype._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
          var e = this.cursorPosition,
            t = this.cells.length - 1;
          this.beforeShiftCells = this._getGapCells(e, t, -1), e = this.length.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(e, 0, 1)
        }
      }, c.prototype._getGapCells = function(e, t, n) {
        for (var i = []; e > 0;) {
          var o = this.cells[t];
          if (!o) break;
          i.push(o), t += n, e -= o.length.outerWidth
        }
        return i
      }, c.prototype._containCells = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length)
          for (var e = this.options.rightToLeft ? "marginRight" : "marginLeft", t = this.options.rightToLeft ? "marginLeft" : "marginRight", n = this.cells[0].length[e], i = this.getLastCell(), o = this.slideableWidth - i.length[t], r = o - this.length.innerWidth * (1 - this.cellAlign), s = o < this.length.innerWidth, a = 0, l = this.cells.length; l > a; a++) {
            var c = this.cells[a];
            c.setDefaultTarget(), s ? c.target = o * this.cellAlign : (c.target = Math.max(c.target, this.cursorPosition + n), c.target = Math.min(c.target, r))
          }
      }, c.prototype.dispatchEvent = function(e, t, n) {
        var i = [t].concat(n);
        if (this.emitEvent(e, i), u && this.$element)
          if (t) {
            var o = u.Event(t);
            o.type = e, this.$element.trigger(o, n)
          } else this.$element.trigger(e, n)
      }, c.prototype.select = function(e, t, n) {
        if (this.isActive) {
          e = parseInt(e, 10);
          var i = this.cells.length;
          this.options.wrapAround && i > 1 && (0 > e ? this.x -= this.slideableWidth : e >= i && (this.x += this.slideableWidth)), (this.options.wrapAround || t) && (e = r.modulo(e, i)), this.cells[e] && (this.selectedIndex = e, this.setSelectedCell(), n ? this.positionSliderAtSelected() : this.startAnimation(), this.dispatchEvent("cellSelect"))
        }
      }, c.prototype.previous = function(e) { this.select(this.selectedIndex - 1, e) }, c.prototype.next = function(e) { this.select(this.selectedIndex + 1, e) }, c.prototype.setSelectedCell = function() { this._removeSelectedCellClass(), this.selectedCell = this.cells[this.selectedIndex], this.selectedElement = this.selectedCell.element, t.add(this.selectedElement, "is-selected") }, c.prototype._removeSelectedCellClass = function() { this.selectedCell && t.remove(this.selectedCell.element, "is-selected") }, c.prototype.getCell = function(e) { for (var t = 0, n = this.cells.length; n > t; t++) { var i = this.cells[t]; if (i.element == e) return i } }, c.prototype.getCells = function(e) {
        e = r.makeArray(e);
        for (var t = [], n = 0, i = e.length; i > n; n++) {
          var o = e[n],
            s = this.getCell(o);
          s && t.push(s)
        }
        return t
      }, c.prototype.getCellElements = function() { for (var e = [], t = 0, n = this.cells.length; n > t; t++) e.push(this.cells[t].element); return e }, c.prototype.getParentCell = function(e) { var t = this.getCell(e); return t ? t : (e = r.getParent(e, ".flickity-slider > *"), this.getCell(e)) }, c.prototype.getAdjacentCellElements = function(e, t) {
        if (!e) return [this.selectedElement];
        t = void 0 === t ? this.selectedIndex : t;
        var n = this.cells.length;
        if (1 + 2 * e >= n) return this.getCellElements();
        for (var i = [], o = t - e; t + e >= o; o++) {
          var s = this.options.wrapAround ? r.modulo(o, n) : o,
            a = this.cells[s];
          a && i.push(a.element)
        }
        return i
      }, c.prototype.uiChange = function() { this.emit("uiChange") }, c.prototype.childUIPointerDown = function(e) { this.emitEvent("childUIPointerDown", [e]) }, c.prototype.onresize = function() { this.watchCSS(), this.resize() }, r.debounceMethod(c, "onresize", 50), c.prototype.resize = function() { this.isActive && (this.getSize(), this.options.wrapAround && (this.x = r.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.positionSliderAtSelected()) };
      var g = c.supportsConditionalCSS = function() {
        var e;
        return function() {
          if (void 0 !== e) return e;
          if (!d) return void(e = !1);
          var t = document.createElement("style"),
            n = document.createTextNode('body:after { content: "foo"; display: none; }');
          t.appendChild(n), document.head.appendChild(t);
          var i = d(document.body, ":after").content;
          return e = -1 != i.indexOf("foo"), document.head.removeChild(t), e
        }
      }();
      c.prototype.watchCSS = function() { var e = this.options.watchCSS; if (e) { var t = g(); if (!t) { var n = "fallbackOn" == e ? "activate" : "deactivate"; return void this[n]() } var i = d(this.element, ":after").content; - 1 != i.indexOf("flickity") ? this.activate() : this.deactivate() } }, c.prototype.onkeydown = function(e) {
        if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
          if (37 == e.keyCode) {
            var t = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(), this[t]()
          } else if (39 == e.keyCode) {
          var n = this.options.rightToLeft ? "previous" : "next";
          this.uiChange(), this[n]()
        }
      }, c.prototype.deactivate = function() {
        if (this.isActive) {
          t.remove(this.element, "flickity-enabled"), t.remove(this.element, "flickity-rtl");
          for (var e = 0, n = this.cells.length; n > e; e++) {
            var o = this.cells[e];
            o.destroy()
          }
          this._removeSelectedCellClass(), this.element.removeChild(this.viewport), l(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), i.unbind(this.element, "keydown", this)), this.isActive = !1, this.emit("deactivate")
        }
      }, c.prototype.destroy = function() { this.deactivate(), this.isResizeBound && i.unbind(e, "resize", this), this.emit("destroy"), u && this.$element && u.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete h[this.guid] }, r.extend(c.prototype, a);
      var v = "attachEvent" in e;
      return c.setUnselectable = function(e) { v && e.setAttribute("unselectable", "on") }, c.data = function(e) { e = r.getQueryElement(e); var t = e && e.flickityGUID; return t && h[t] }, r.htmlInit(c, "flickity"), u && u.bridget && u.bridget("flickity", c), c.Cell = s, c
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("unipointer/unipointer", ["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) { return t(e, n, i) }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.Unipointer = t(e, e.EventEmitter, e.eventie) }(window, function(e, t, n) {
      function i() {}

      function o() {}
      o.prototype = new t, o.prototype.bindStartEvent = function(e) { this._bindStartEvent(e, !0) }, o.prototype.unbindStartEvent = function(e) { this._bindStartEvent(e, !1) }, o.prototype._bindStartEvent = function(t, i) {
        i = void 0 === i || !!i;
        var o = i ? "bind" : "unbind";
        e.navigator.pointerEnabled ? n[o](t, "pointerdown", this) : e.navigator.msPointerEnabled ? n[o](t, "MSPointerDown", this) : (n[o](t, "mousedown", this), n[o](t, "touchstart", this))
      }, o.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
      }, o.prototype.getTouch = function(e) { for (var t = 0, n = e.length; n > t; t++) { var i = e[t]; if (i.identifier == this.pointerIdentifier) return i } }, o.prototype.onmousedown = function(e) {
        var t = e.button;
        t && 0 !== t && 1 !== t || this._pointerDown(e, e)
      }, o.prototype.ontouchstart = function(e) { this._pointerDown(e, e.changedTouches[0]) }, o.prototype.onMSPointerDown = o.prototype.onpointerdown = function(e) { this._pointerDown(e, e) }, o.prototype._pointerDown = function(e, t) { this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDown(e, t)) }, o.prototype.pointerDown = function(e, t) { this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]) };
      var r = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"], MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"] };
      return o.prototype._bindPostStartEvents = function(t) {
        if (t) {
          for (var i = r[t.type], o = t.preventDefault ? e : document, s = 0, a = i.length; a > s; s++) {
            var l = i[s];
            n.bind(o, l, this)
          }
          this._boundPointerEvents = { events: i, node: o }
        }
      }, o.prototype._unbindPostStartEvents = function() {
        var e = this._boundPointerEvents;
        if (e && e.events) {
          for (var t = 0, i = e.events.length; i > t; t++) {
            var o = e.events[t];
            n.unbind(e.node, o, this)
          }
          delete this._boundPointerEvents
        }
      }, o.prototype.onmousemove = function(e) { this._pointerMove(e, e) }, o.prototype.onMSPointerMove = o.prototype.onpointermove = function(e) { e.pointerId == this.pointerIdentifier && this._pointerMove(e, e) }, o.prototype.ontouchmove = function(e) {
        var t = this.getTouch(e.changedTouches);
        t && this._pointerMove(e, t)
      }, o.prototype._pointerMove = function(e, t) { this.pointerMove(e, t) }, o.prototype.pointerMove = function(e, t) { this.emitEvent("pointerMove", [e, t]) }, o.prototype.onmouseup = function(e) { this._pointerUp(e, e) }, o.prototype.onMSPointerUp = o.prototype.onpointerup = function(e) { e.pointerId == this.pointerIdentifier && this._pointerUp(e, e) }, o.prototype.ontouchend = function(e) {
        var t = this.getTouch(e.changedTouches);
        t && this._pointerUp(e, t)
      }, o.prototype._pointerUp = function(e, t) { this._pointerDone(), this.pointerUp(e, t) }, o.prototype.pointerUp = function(e, t) { this.emitEvent("pointerUp", [e, t]) }, o.prototype._pointerDone = function() { this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone() }, o.prototype.pointerDone = i, o.prototype.onMSPointerCancel = o.prototype.onpointercancel = function(e) { e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e) }, o.prototype.ontouchcancel = function(e) {
        var t = this.getTouch(e.changedTouches);
        t && this._pointerCancel(e, t)
      }, o.prototype._pointerCancel = function(e, t) { this._pointerDone(), this.pointerCancel(e, t) }, o.prototype.pointerCancel = function(e, t) { this.emitEvent("pointerCancel", [e, t]) }, o.getPointerPoint = function(e) { return { x: void 0 !== e.pageX ? e.pageX : e.clientX, y: void 0 !== e.pageY ? e.pageY : e.clientY } }, o
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("unidragger/unidragger", ["eventie/eventie", "unipointer/unipointer"], function(n, i) { return t(e, n, i) }) : "object" == typeof exports ? module.exports = t(e, require("eventie"), require("unipointer")) : e.Unidragger = t(e, e.eventie, e.Unipointer) }(window, function(e, t, n) {
      function i() {}

      function o(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }

      function r() {}

      function s() { return !1 }
      r.prototype = new n, r.prototype.bindHandles = function() { this._bindHandles(!0) }, r.prototype.unbindHandles = function() { this._bindHandles(!1) };
      var a = e.navigator;
      r.prototype._bindHandles = function(e) {
        e = void 0 === e || !!e;
        var n;
        n = a.pointerEnabled ? function(t) { t.style.touchAction = e ? "none" : "" } : a.msPointerEnabled ? function(t) { t.style.msTouchAction = e ? "none" : "" } : function() { e && c(s) };
        for (var i = e ? "bind" : "unbind", o = 0, r = this.handles.length; r > o; o++) {
          var s = this.handles[o];
          this._bindStartEvent(s, e), n(s), t[i](s, "click", this)
        }
      };
      var l = "attachEvent" in document.documentElement,
        c = l ? function(e) {
          "IMG" == e.nodeName && (e.ondragstart = s);
          for (var t = e.querySelectorAll("img"), n = 0, i = t.length; i > n; n++) {
            var o = t[n];
            o.ondragstart = s
          }
        } : i;
      r.prototype.pointerDown = function(n, i) {
        if ("INPUT" == n.target.nodeName && "range" == n.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
        this._dragPointerDown(n, i);
        var o = document.activeElement;
        o && o.blur && o.blur(), this._bindPostStartEvents(n), this.pointerDownScroll = r.getScrollPosition(), t.bind(e, "scroll", this), this.emitEvent("pointerDown", [n, i])
      }, r.prototype._dragPointerDown = function(e, t) {
        this.pointerDownPoint = n.getPointerPoint(t);
        var i = "touchstart" == e.type,
          r = e.target.nodeName;
        i || "SELECT" == r || o(e)
      }, r.prototype.pointerMove = function(e, t) {
        var n = this._dragPointerMove(e, t);
        this.emitEvent("pointerMove", [e, t, n]), this._dragMove(e, t, n)
      }, r.prototype._dragPointerMove = function(e, t) {
        var i = n.getPointerPoint(t),
          o = { x: i.x - this.pointerDownPoint.x, y: i.y - this.pointerDownPoint.y };
        return !this.isDragging && this.hasDragStarted(o) && this._dragStart(e, t), o
      }, r.prototype.hasDragStarted = function(e) { return Math.abs(e.x) > 3 || Math.abs(e.y) > 3 }, r.prototype.pointerUp = function(e, t) { this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t) }, r.prototype._dragPointerUp = function(e, t) { this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t) }, r.prototype.pointerDone = function() { t.unbind(e, "scroll", this) }, r.prototype._dragStart = function(e, t) {
        this.isDragging = !0, this.dragStartPoint = r.getPointerPoint(t), this.isPreventingClicks = !0, this.dragStart(e, t)
      }, r.prototype.dragStart = function(e, t) { this.emitEvent("dragStart", [e, t]) }, r.prototype._dragMove = function(e, t, n) { this.isDragging && this.dragMove(e, t, n) }, r.prototype.dragMove = function(e, t, n) { o(e), this.emitEvent("dragMove", [e, t, n]) }, r.prototype._dragEnd = function(e, t) {
        this.isDragging = !1;
        var n = this;
        setTimeout(function() { delete n.isPreventingClicks }), this.dragEnd(e, t)
      }, r.prototype.dragEnd = function(e, t) { this.emitEvent("dragEnd", [e, t]) }, r.prototype.pointerDone = function() { t.unbind(e, "scroll", this), delete this.pointerDownScroll }, r.prototype.onclick = function(e) { this.isPreventingClicks && o(e) }, r.prototype._staticClick = function(e, t) {
        if (!this.isIgnoringMouseUp || "mouseup" != e.type) {
          var n = e.target.nodeName;
          if (("INPUT" == n || "TEXTAREA" == n) && e.target.focus(), this.staticClick(e, t), "mouseup" != e.type) {
            this.isIgnoringMouseUp = !0;
            var i = this;
            setTimeout(function() { delete i.isIgnoringMouseUp }, 400)
          }
        }
      }, r.prototype.staticClick = function(e, t) { this.emitEvent("staticClick", [e, t]) }, r.prototype.onscroll = function() {
        var e = r.getScrollPosition(),
          t = this.pointerDownScroll.x - e.x,
          n = this.pointerDownScroll.y - e.y;
        (Math.abs(t) > 3 || Math.abs(n) > 3) && this._pointerDone()
      }, r.getPointerPoint = function(e) { return { x: void 0 !== e.pageX ? e.pageX : e.clientX, y: void 0 !== e.pageY ? e.pageY : e.clientY } };
      var u = void 0 !== e.pageYOffset;
      return r.getScrollPosition = function() { return { x: u ? e.pageXOffset : document.body.scrollLeft, y: u ? e.pageYOffset : document.body.scrollTop } }, r.getPointerPoint = n.getPointerPoint, r
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("flickity/js/drag", ["classie/classie", "eventie/eventie", "./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(n, i, o, r, s) { return t(e, n, i, o, r, s) }) : "object" == typeof exports ? module.exports = t(e, require("desandro-classie"), require("eventie"), require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : e.Flickity = t(e, e.classie, e.eventie, e.Flickity, e.Unidragger, e.fizzyUIUtils) }(window, function(e, t, n, i, o, r) {
      function s(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }
      r.extend(i.defaults, { draggable: !0 }), i.createMethods.push("_createDrag"), r.extend(i.prototype, o.prototype), i.prototype._createDrag = function() { this.on("activate", this.bindDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag) }, i.prototype.bindDrag = function() { this.options.draggable && !this.isDragBound && (t.add(this.element, "is-draggable"), this.handles = [this.viewport], this.bindHandles(), this.isDragBound = !0) }, i.prototype.unbindDrag = function() { this.isDragBound && (t.remove(this.element, "is-draggable"), this.unbindHandles(), delete this.isDragBound) }, i.prototype._uiChangeDrag = function() { delete this.isFreeScrolling }, i.prototype._childUIPointerDownDrag = function(e) { s(e), this.pointerDownFocus(e) }, i.prototype.pointerDown = function(i, r) {
        if ("INPUT" == i.target.nodeName && "range" == i.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
        this._dragPointerDown(i, r);
        var s = document.activeElement;
        s && s.blur && s != this.element && s != document.body && s.blur(), this.pointerDownFocus(i), this.dragX = this.x, t.add(this.viewport, "is-pointer-down"), this._bindPostStartEvents(i), this.pointerDownScroll = o.getScrollPosition(), n.bind(e, "scroll", this), this.dispatchEvent("pointerDown", i, [r])
      };
      var a = { touchstart: !0, MSPointerDown: !0 },
        l = { INPUT: !0, SELECT: !0 };
      return i.prototype.pointerDownFocus = function(t) {
        if (this.options.accessibility && !a[t.type] && !l[t.target.nodeName]) {
          var n = e.pageYOffset;
          this.element.focus(), e.pageYOffset != n && e.scrollTo(e.pageXOffset, n)
        }
      }, i.prototype.hasDragStarted = function(e) { return Math.abs(e.x) > 3 }, i.prototype.pointerUp = function(e, n) { t.remove(this.viewport, "is-pointer-down"), this.dispatchEvent("pointerUp", e, [n]), this._dragPointerUp(e, n) }, i.prototype.pointerDone = function() { n.unbind(e, "scroll", this), delete this.pointerDownScroll }, i.prototype.dragStart = function(e, t) { this.dragStartPosition = this.x, this.startAnimation(), this.dispatchEvent("dragStart", e, [t]) }, i.prototype.dragMove = function(e, t, n) {
        s(e), this.previousDragX = this.dragX;
        var i = this.options.rightToLeft ? -1 : 1,
          o = this.dragStartPosition + n.x * i;
        if (!this.options.wrapAround && this.cells.length) {
          var r = Math.max(-this.cells[0].target, this.dragStartPosition);
          o = o > r ? .5 * (o + r) : o;
          var a = Math.min(-this.getLastCell().target, this.dragStartPosition);
          o = a > o ? .5 * (o + a) : o
        }
        this.dragX = o, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", e, [t, n])
      }, i.prototype.dragEnd = function(e, t) {
        this.options.freeScroll && (this.isFreeScrolling = !0);
        var n = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
          var i = this.getRestingPosition();
          this.isFreeScrolling = -i > this.cells[0].target && -i < this.getLastCell().target
        } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());
        delete this.previousDragX, this.select(n), this.dispatchEvent("dragEnd", e, [t])
      }, i.prototype.dragEndRestingSelect = function() {
        var e = this.getRestingPosition(),
          t = Math.abs(this.getCellDistance(-e, this.selectedIndex)),
          n = this._getClosestResting(e, t, 1),
          i = this._getClosestResting(e, t, -1),
          o = n.distance < i.distance ? n.index : i.index;
        return o
      }, i.prototype._getClosestResting = function(e, t, n) { for (var i = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function(e, t) { return t >= e } : function(e, t) { return t > e }; r(t, o) && (i += n, o = t, t = this.getCellDistance(-e, i), null !== t);) t = Math.abs(t); return { distance: o, index: i - n } }, i.prototype.getCellDistance = function(e, t) {
        var n = this.cells.length,
          i = this.options.wrapAround && n > 1,
          o = i ? r.modulo(t, n) : t,
          s = this.cells[o];
        if (!s) return null;
        var a = i ? this.slideableWidth * Math.floor(t / n) : 0;
        return e - (s.target + a)
      }, i.prototype.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
        var e = this.getCellDistance(-this.dragX, this.selectedIndex),
          t = this.previousDragX - this.dragX;
        return e > 0 && t > 0 ? 1 : 0 > e && 0 > t ? -1 : 0
      }, i.prototype.staticClick = function(e, t) {
        var n = this.getParentCell(e.target),
          i = n && n.element,
          o = n && r.indexOf(this.cells, n);
        this.dispatchEvent("staticClick", e, [t, i, o])
      }, i
    }),
    function(e, t) { "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(n) { return t(e, n) }) : "object" == typeof exports ? module.exports = t(e, require("unipointer")) : e.TapListener = t(e, e.Unipointer) }(window, function(e, t) {
      function n(e) { this.bindTap(e) }
      n.prototype = new t, n.prototype.bindTap = function(e) { e && (this.unbindTap(), this.tapElement = e, this._bindStartEvent(e, !0)) }, n.prototype.unbindTap = function() { this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement) };
      var i = void 0 !== e.pageYOffset;
      return n.prototype.pointerUp = function(n, o) {
        if (!this.isIgnoringMouseUp || "mouseup" != n.type) {
          var r = t.getPointerPoint(o),
            s = this.tapElement.getBoundingClientRect(),
            a = i ? e.pageXOffset : document.body.scrollLeft,
            l = i ? e.pageYOffset : document.body.scrollTop,
            c = r.x >= s.left + a && r.x <= s.right + a && r.y >= s.top + l && r.y <= s.bottom + l;
          c && this.emitEvent("tap", [n, o]), "mouseup" != n.type && (this.isIgnoringMouseUp = !0, setTimeout(function() { delete this.isIgnoringMouseUp }.bind(this), 320))
        }
      }, n.prototype.destroy = function() { this.pointerDone(), this.unbindTap() }, n
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(n, i, o, r) { return t(e, n, i, o, r) }) : "object" == typeof exports ? module.exports = t(e, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : t(e, e.eventie, e.Flickity, e.TapListener, e.fizzyUIUtils) }(window, function(e, t, n, i, o) {
      function r(e, t) { this.direction = e, this.parent = t, this._create() }

      function s(e) { return "string" == typeof e ? e : "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z" }
      var a = "http://www.w3.org/2000/svg",
        l = function() {
          function e() { if (void 0 !== t) return t; var e = document.createElement("div"); return e.innerHTML = "<svg/>", t = (e.firstChild && e.firstChild.namespaceURI) == a }
          var t;
          return e
        }();
      return r.prototype = new i, r.prototype._create = function() {
        this.isEnabled = !0, this.isPrevious = -1 == this.direction;
        var e = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == e;
        var t = this.element = document.createElement("button");
        if (t.className = "flickity-prev-next-button", t.className += this.isPrevious ? " previous" : " next", t.setAttribute("type", "button"), this.disable(), t.setAttribute("aria-label", this.isPrevious ? "previous" : "next"), n.setUnselectable(t), l()) {
          var i = this.createSVG();
          t.appendChild(i)
        } else this.setArrowText(), t.className += " no-svg";
        var o = this;
        this.onCellSelect = function() { o.update() }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function(e, t) { o.parent.childUIPointerDown(t) })
      }, r.prototype.activate = function() { this.bindTap(this.element), t.bind(this.element, "click", this), this.parent.element.appendChild(this.element) }, r.prototype.deactivate = function() { this.parent.element.removeChild(this.element), i.prototype.destroy.call(this), t.unbind(this.element, "click", this) }, r.prototype.createSVG = function() {
        var e = document.createElementNS(a, "svg");
        e.setAttribute("viewBox", "0 0 100 100");
        var t = document.createElementNS(a, "path"),
          n = s(this.parent.options.arrowShape);
        return t.setAttribute("d", n), t.setAttribute("class", "arrow"), this.isLeft || t.setAttribute("transform", "translate(100, 100) rotate(180) "), e.appendChild(t), e
      }, r.prototype.setArrowText = function() {
        var e = this.parent.options,
          t = this.isLeft ? e.leftArrowText : e.rightArrowText;
        o.setText(this.element, t)
      }, r.prototype.onTap = function() {
        if (this.isEnabled) {
          this.parent.uiChange();
          var e = this.isPrevious ? "previous" : "next";
          this.parent[e]()
        }
      }, r.prototype.handleEvent = o.handleEvent, r.prototype.onclick = function() {
        var e = document.activeElement;
        e && e == this.element && this.onTap()
      }, r.prototype.enable = function() { this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0) }, r.prototype.disable = function() { this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1) }, r.prototype.update = function() {
        var e = this.parent.cells;
        if (this.parent.options.wrapAround && e.length > 1) return void this.enable();
        var t = e.length ? e.length - 1 : 0,
          n = this.isPrevious ? 0 : t,
          i = this.parent.selectedIndex == n ? "disable" : "enable";
        this[i]()
      }, r.prototype.destroy = function() { this.deactivate() }, o.extend(n.defaults, { prevNextButtons: !0, leftArrowText: "‹", rightArrowText: "›", arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }), n.createMethods.push("_createPrevNextButtons"), n.prototype._createPrevNextButtons = function() { this.options.prevNextButtons && (this.prevButton = new r((-1), this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons)) }, n.prototype.activatePrevNextButtons = function() { this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons) }, n.prototype.deactivatePrevNextButtons = function() { this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons) }, n.PrevNextButton = r, n
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(n, i, o, r) { return t(e, n, i, o, r) }) : "object" == typeof exports ? module.exports = t(e, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : t(e, e.eventie, e.Flickity, e.TapListener, e.fizzyUIUtils) }(window, function(e, t, n, i, o) {
      function r(e) { this.parent = e, this._create() }
      return r.prototype = new i, r.prototype._create = function() {
        this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", n.setUnselectable(this.holder), this.dots = [];
        var e = this;
        this.onCellSelect = function() { e.updateSelected() }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function(t, n) { e.parent.childUIPointerDown(n) })
      }, r.prototype.activate = function() { this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder) }, r.prototype.deactivate = function() { this.parent.element.removeChild(this.holder), i.prototype.destroy.call(this) }, r.prototype.setDots = function() {
        var e = this.parent.cells.length - this.dots.length;
        e > 0 ? this.addDots(e) : 0 > e && this.removeDots(-e)
      }, r.prototype.addDots = function(e) {
        for (var t = document.createDocumentFragment(), n = []; e;) {
          var i = document.createElement("li");
          i.className = "dot", t.appendChild(i), n.push(i), e--
        }
        this.holder.appendChild(t), this.dots = this.dots.concat(n)
      }, r.prototype.removeDots = function(e) {
        for (var t = this.dots.splice(this.dots.length - e, e), n = 0, i = t.length; i > n; n++) {
          var o = t[n];
          this.holder.removeChild(o)
        }
      }, r.prototype.updateSelected = function() { this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected") }, r.prototype.onTap = function(e) {
        var t = e.target;
        if ("LI" == t.nodeName) {
          this.parent.uiChange();
          var n = o.indexOf(this.dots, t);
          this.parent.select(n)
        }
      }, r.prototype.destroy = function() { this.deactivate() }, n.PageDots = r, o.extend(n.defaults, { pageDots: !0 }), n.createMethods.push("_createPageDots"), n.prototype._createPageDots = function() { this.options.pageDots && (this.pageDots = new r(this), this.on("activate", this.activatePageDots), this.on("cellAddedRemoved", this.onCellAddedRemovedPageDots), this.on("deactivate", this.deactivatePageDots)) }, n.prototype.activatePageDots = function() { this.pageDots.activate() }, n.prototype.onCellAddedRemovedPageDots = function() { this.pageDots.setDots() }, n.prototype.deactivatePageDots = function() { this.pageDots.deactivate() }, n.PageDots = r, n
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("flickity/js/player", ["eventEmitter/EventEmitter", "eventie/eventie", "fizzy-ui-utils/utils", "./flickity"], function(e, n, i, o) { return t(e, n, i, o) }) : "object" == typeof exports ? module.exports = t(require("wolfy87-eventemitter"), require("eventie"), require("fizzy-ui-utils"), require("./flickity")) : t(e.EventEmitter, e.eventie, e.fizzyUIUtils, e.Flickity) }(window, function(e, t, n, i) {
      function o(e) {
        if (this.parent = e, this.state = "stopped", s) {
          var t = this;
          this.onVisibilityChange = function() { t.visibilityChange() }
        }
      }
      var r, s;
      return "hidden" in document ? (r = "hidden", s = "visibilitychange") : "webkitHidden" in document && (r = "webkitHidden", s = "webkitvisibilitychange"), o.prototype = new e, o.prototype.play = function() { "playing" != this.state && (this.state = "playing", s && document.addEventListener(s, this.onVisibilityChange, !1), this.tick()) }, o.prototype.tick = function() {
        if ("playing" == this.state) {
          var e = this.parent.options.autoPlay;
          e = "number" == typeof e ? e : 3e3;
          var t = this;
          this.clear(), this.timeout = setTimeout(function() { t.parent.next(!0), t.tick() }, e)
        }
      }, o.prototype.stop = function() { this.state = "stopped", this.clear(), s && document.removeEventListener(s, this.onVisibilityChange, !1) }, o.prototype.clear = function() { clearTimeout(this.timeout) }, o.prototype.pause = function() { "playing" == this.state && (this.state = "paused", this.clear()) }, o.prototype.unpause = function() { "paused" == this.state && this.play() }, o.prototype.visibilityChange = function() {
        var e = document[r];
        this[e ? "pause" : "unpause"]()
      }, n.extend(i.defaults, { pauseAutoPlayOnHover: !0 }), i.createMethods.push("_createPlayer"), i.prototype._createPlayer = function() { this.player = new o(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer) }, i.prototype.activatePlayer = function() { this.options.autoPlay && (this.player.play(), t.bind(this.element, "mouseenter", this), this.isMouseenterBound = !0) }, i.prototype.playPlayer = function() { this.player.play() }, i.prototype.stopPlayer = function() { this.player.stop() }, i.prototype.pausePlayer = function() { this.player.pause() }, i.prototype.unpausePlayer = function() { this.player.unpause() }, i.prototype.deactivatePlayer = function() { this.player.stop(), this.isMouseenterBound && (t.unbind(this.element, "mouseenter", this), delete this.isMouseenterBound) }, i.prototype.onmouseenter = function() { this.options.pauseAutoPlayOnHover && (this.player.pause(), t.bind(this.element, "mouseleave", this)) }, i.prototype.onmouseleave = function() { this.player.unpause(), t.unbind(this.element, "mouseleave", this) }, i.Player = o, i
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(n, i) { return t(e, n, i) }) : "object" == typeof exports ? module.exports = t(e, require("./flickity"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.fizzyUIUtils) }(window, function(e, t, n) {
      function i(e) {
        for (var t = document.createDocumentFragment(), n = 0, i = e.length; i > n; n++) {
          var o = e[n];
          t.appendChild(o.element)
        }
        return t
      }
      return t.prototype.insert = function(e, t) {
        var n = this._makeCells(e);
        if (n && n.length) {
          var o = this.cells.length;
          t = void 0 === t ? o : t;
          var r = i(n),
            s = t == o;
          if (s) this.slider.appendChild(r);
          else {
            var a = this.cells[t].element;
            this.slider.insertBefore(r, a)
          }
          if (0 === t) this.cells = n.concat(this.cells);
          else if (s) this.cells = this.cells.concat(n);
          else {
            var l = this.cells.splice(t, o - t);
            this.cells = this.cells.concat(n).concat(l)
          }
          this._sizeCells(n);
          var c = t > this.selectedIndex ? 0 : n.length;
          this._cellAddedRemoved(t, c)
        }
      }, t.prototype.append = function(e) { this.insert(e, this.cells.length) }, t.prototype.prepend = function(e) { this.insert(e, 0) }, t.prototype.remove = function(e) {
        var t, i, o, r = this.getCells(e),
          s = 0;
        for (t = 0, i = r.length; i > t; t++) {
          o = r[t];
          var a = n.indexOf(this.cells, o) < this.selectedIndex;
          s -= a ? 1 : 0
        }
        for (t = 0, i = r.length; i > t; t++) o = r[t], o.remove(), n.removeFrom(this.cells, o);
        r.length && this._cellAddedRemoved(0, s)
      }, t.prototype._cellAddedRemoved = function(e, t) { t = t || 0, this.selectedIndex += t, this.selectedIndex = Math.max(0, Math.min(this.cells.length - 1, this.selectedIndex)), this.emitEvent("cellAddedRemoved", [e, t]), this.cellChange(e, !0) }, t.prototype.cellSizeChange = function(e) {
        var t = this.getCell(e);
        if (t) {
          t.getSize();
          var i = n.indexOf(this.cells, t);
          this.cellChange(i)
        }
      }, t.prototype.cellChange = function(e, t) {
        var n = this.slideableWidth;
        if (this._positionCells(e), this._getWrapShiftCells(), this.setGallerySize(), this.options.freeScroll) {
          var i = n - this.slideableWidth;
          this.x += i * this.cellAlign, this.positionSlider()
        } else t && this.positionSliderAtSelected(), this.select(this.selectedIndex)
      }, t
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["classie/classie", "eventie/eventie", "./flickity", "fizzy-ui-utils/utils"], function(n, i, o, r) { return t(e, n, i, o, r) }) : "object" == typeof exports ? module.exports = t(e, require("desandro-classie"), require("eventie"), require("./flickity"), require("fizzy-ui-utils")) : t(e, e.classie, e.eventie, e.Flickity, e.fizzyUIUtils) }(window, function(e, t, n, i, o) {
      "use strict";

      function r(e) { if ("IMG" == e.nodeName && e.getAttribute("data-flickity-lazyload")) return [e]; var t = e.querySelectorAll("img[data-flickity-lazyload]"); return o.makeArray(t) }

      function s(e, t) { this.img = e, this.flickity = t, this.load() }
      return i.createMethods.push("_createLazyload"), i.prototype._createLazyload = function() { this.on("cellSelect", this.lazyLoad) }, i.prototype.lazyLoad = function() {
        var e = this.options.lazyLoad;
        if (e) {
          for (var t = "number" == typeof e ? e : 0, n = this.getAdjacentCellElements(t), i = [], o = 0, a = n.length; a > o; o++) {
            var l = n[o],
              c = r(l);
            i = i.concat(c)
          }
          for (o = 0, a = i.length; a > o; o++) {
            var u = i[o];
            new s(u, this)
          }
        }
      }, s.prototype.handleEvent = o.handleEvent, s.prototype.load = function() { n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.img.getAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload") }, s.prototype.onload = function(e) { this.complete(e, "flickity-lazyloaded") }, s.prototype.onerror = function(e) { this.complete(e, "flickity-lazyerror") }, s.prototype.complete = function(e, i) {
        n.unbind(this.img, "load", this), n.unbind(this.img, "error", this);
        var o = this.flickity.getParentCell(this.img),
          r = o && o.element;
        this.flickity.cellSizeChange(r), t.add(this.img, i), this.flickity.dispatchEvent("lazyLoad", e, r)
      }, i.LazyLoader = s, i
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], t) : "object" == typeof exports && (module.exports = t(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload"))) }(window, function(e) { return e }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["classie/classie", "flickity/js/index", "fizzy-ui-utils/utils"], function(n, i, o) { return t(e, n, i, o) }) : "object" == typeof exports ? module.exports = t(e, require("desandro-classie"), require("flickity"), require("fizzy-ui-utils")) : e.Flickity = t(e, e.classie, e.Flickity, e.fizzyUIUtils) }(window, function(e, t, n, i) {
      return n.createMethods.push("_createAsNavFor"), n.prototype._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
        var e = this.options.asNavFor;
        if (e) {
          var t = this;
          setTimeout(function() { t.setNavCompanion(e) })
        }
      }, n.prototype.setNavCompanion = function(e) {
        e = i.getQueryElement(e);
        var t = n.data(e);
        if (t && t != this) {
          this.navCompanion = t;
          var o = this;
          this.onNavCompanionSelect = function() { o.navCompanionSelect() }, t.on("cellSelect", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect()
        }
      }, n.prototype.navCompanionSelect = function() {
        if (this.navCompanion) {
          var e = this.navCompanion.selectedIndex;
          this.select(e), this.removeNavSelectedElement(), this.selectedIndex == e && (this.navSelectedElement = this.cells[e].element, t.add(this.navSelectedElement, "is-nav-selected"))
        }
      }, n.prototype.activateAsNavFor = function() { this.navCompanionSelect() }, n.prototype.removeNavSelectedElement = function() { this.navSelectedElement && (t.remove(this.navSelectedElement, "is-nav-selected"), delete this.navSelectedElement) }, n.prototype.onNavStaticClick = function(e, t, n, i) { "number" == typeof i && this.navCompanion.select(i) }, n.prototype.deactivateAsNavFor = function() { this.removeNavSelectedElement() }, n.prototype.destroyAsNavFor = function() { this.navCompanion && (this.navCompanion.off("cellSelect", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion) }, n
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) { return t(e, n, i) }) : "object" == typeof module && module.exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie) }(window, function(e, t, n) {
      function i(e, t) { for (var n in t) e[n] = t[n]; return e }

      function o(e) { return "[object Array]" == d.call(e) }

      function r(e) {
        var t = [];
        if (o(e)) t = e;
        else if ("number" == typeof e.length)
          for (var n = 0; n < e.length; n++) t.push(e[n]);
        else t.push(e);
        return t
      }

      function s(e, t, n) {
        if (!(this instanceof s)) return new s(e, t, n);
        "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = r(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), c && (this.jqDeferred = new c.Deferred);
        var o = this;
        setTimeout(function() { o.check() })
      }

      function a(e) { this.img = e }

      function l(e, t) { this.url = e, this.element = t, this.img = new Image }
      var c = e.jQuery,
        u = e.console,
        d = Object.prototype.toString;
      s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
        this.images = [];
        for (var e = 0; e < this.elements.length; e++) {
          var t = this.elements[e];
          this.addElementImages(t)
        }
      }, s.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && p[t]) {
          for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
            var o = n[i];
            this.addImage(o)
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (i = 0; i < r.length; i++) {
              var s = r[i];
              this.addElementBackgroundImages(s)
            }
          }
        }
      };
      var p = { 1: !0, 9: !0, 11: !0 };
      s.prototype.addElementBackgroundImages = function(e) {
        for (var t = f(e), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
          var o = i && i[1];
          o && this.addBackground(o, e), i = n.exec(t.backgroundImage)
        }
      };
      var f = e.getComputedStyle || function(e) { return e.currentStyle };
      return s.prototype.addImage = function(e) {
        var t = new a(e);
        this.images.push(t)
      }, s.prototype.addBackground = function(e, t) {
        var n = new l(e, t);
        this.images.push(n)
      }, s.prototype.check = function() {
        function e(e, n, i) { setTimeout(function() { t.progress(e, n, i) }) }
        var t = this;
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
        for (var n = 0; n < this.images.length; n++) {
          var i = this.images[n];
          i.once("progress", e), i.check()
        }
      }, s.prototype.progress = function(e, t, n) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && u && u.log("progress: " + n, e, t) }, s.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this)
        }
      }, a.prototype = new t, a.prototype.check = function() { var e = this.getIsImageComplete(); return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src)) }, a.prototype.getIsImageComplete = function() { return this.img.complete && void 0 !== this.img.naturalWidth }, a.prototype.confirm = function(e, t) { this.isLoaded = e, this.emit("progress", this, this.img, t) }, a.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
      }, a.prototype.onload = function() { this.confirm(!0, "onload"), this.unbindEvents() }, a.prototype.onerror = function() { this.confirm(!1, "onerror"), this.unbindEvents() }, a.prototype.unbindEvents = function() { n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this) }, l.prototype = new a, l.prototype.check = function() {
        n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
      }, l.prototype.unbindEvents = function() { n.unbind(this.img, "load", this), n.unbind(this.img, "error", this) }, l.prototype.confirm = function(e, t) { this.isLoaded = e, this.emit("progress", this, this.element, t) }, s.makeJQueryPlugin = function(t) { t = t || e.jQuery, t && (c = t, c.fn.imagesLoaded = function(e, t) { var n = new s(this, e, t); return n.jqDeferred.promise(c(this)) }) }, s.makeJQueryPlugin(), s
    }),
    function(e, t) { "use strict"; "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(n, i) { return t(e, n, i) }) : "object" == typeof exports ? module.exports = t(e, require("flickity"), require("imagesloaded")) : e.Flickity = t(e, e.Flickity, e.imagesLoaded) }(window, function(e, t, n) {
      "use strict";
      return t.createMethods.push("_createImagesLoaded"), t.prototype._createImagesLoaded = function() { this.on("activate", this.imagesLoaded) }, t.prototype.imagesLoaded = function() {
        function e(e, n) {
          var i = t.getParentCell(n.img);
          t.cellSizeChange(i && i.element), t.options.freeScroll || t.positionSliderAtSelected()
        }
        if (this.options.imagesLoaded) {
          var t = this;
          n(this.slider).on("progress", e)
        }
      }, t
    }),
    /*!
     * jquery-cookie.js
     */
    /*!
     * jQuery Cookie Plugin v1.4.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2006, 2014 Klaus Hartl
     * Released under the MIT license
     */
    function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(t) }(function(e) {
      function t(e) { return a.raw ? e : encodeURIComponent(e) }

      function n(e) { return a.raw ? e : decodeURIComponent(e) }

      function i(e) { return t(a.json ? JSON.stringify(e) : String(e)) }

      function o(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(s, " ")), a.json ? JSON.parse(e) : e } catch (e) {} }

      function r(t, n) { var i = a.raw ? t : o(t); return e.isFunction(n) ? n(i) : i }
      var s = /\+/g,
        a = e.cookie = function(o, s, l) {
          if (arguments.length > 1 && !e.isFunction(s)) {
            if (l = e.extend({}, a.defaults, l), "number" == typeof l.expires) {
              var c = l.expires,
                u = l.expires = new Date;
              u.setMilliseconds(u.getMilliseconds() + 864e5 * c)
            }
            return document.cookie = [t(o), "=", i(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
          }
          for (var d = o ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], f = 0, h = p.length; f < h; f++) {
            var m = p[f].split("="),
              g = n(m.shift()),
              v = m.join("=");
            if (o === g) { d = r(v, s); break }
            o || void 0 === (v = r(v)) || (d[g] = v)
          }
          return d
        };
      a.defaults = {}, e.removeCookie = function(t, n) { return e.cookie(t, "", e.extend({}, n, { expires: -1 })), !e.cookie(t) }
    }),
    function(e) {
      "use strict";
      e.fn.fitVids = function(t) {
        var n = { customSelector: null, ignore: null };
        if (!document.getElementById("fit-vids-style")) {
          var i = document.head || document.getElementsByTagName("head")[0],
            o = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
            r = document.createElement("div");
          r.innerHTML = '<p>x</p><style id="fit-vids-style">' + o + "</style>", i.appendChild(r.childNodes[1])
        }
        return t && e.extend(n, t), this.each(function() {
          var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', 'iframe[src*="wistia.com"]', 'iframe[src*="wistia.net"]', "object", "embed"];
          n.customSelector && t.push(n.customSelector);
          var i = ".fitvidsignore";
          n.ignore && (i = i + ", " + n.ignore);
          var o = e(this).find(t.join(","));
          o = o.not("object object"), o = o.not(i), o.each(function(t) {
            var n = e(this);
            if (!(n.parents(i).length > 0 || "embed" === this.tagName.toLowerCase() && n.parent("object").length || n.parent(".fluid-width-video-wrapper").length)) {
              n.css("height") || n.css("width") || !isNaN(n.attr("height")) && !isNaN(n.attr("width")) || (n.attr("height", 9), n.attr("width", 16));
              var o = "object" === this.tagName.toLowerCase() || n.attr("height") && !isNaN(parseInt(n.attr("height"), 10)) ? parseInt(n.attr("height"), 10) : n.height(),
                r = isNaN(parseInt(n.attr("width"), 10)) ? n.width() : parseInt(n.attr("width"), 10),
                s = o / r;
              if (!n.attr("id")) {
                var a = "fitvid" + t;
                n.attr("id", a)
              }
              n.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * s + "%"), n.removeAttr("height").removeAttr("width")
            }
          })
        })
      }
    }(window.jQuery || window.Zepto),
    /*!
     * easyzoom.js
     */
    /*!
     * @name        EasyZoom
     * @author      Matt Hinchliffe <>
     * @modified    Wednesday, November 4th, 2015
     * @version     2.3.1
     */
    ! function(e) {
      "use strict";

      function t(t, n) { this.$target = e(t), this.opts = e.extend({}, l, n, this.$target.data()), void 0 === this.isOpen && this._init() }
      var n, i, o, r, s, a, l = { loadingNotice: "Loading image", errorNotice: "The image could not be loaded", errorDuration: 2500, preventClicks: !0, onShow: e.noop, onHide: e.noop, onMove: e.noop };
      t.prototype._init = function() { this.$link = this.$target.find("a"), this.$image = this.$target.find("img"), this.$flyout = e('<div class="easyzoom-flyout" />'), this.$notice = e('<div class="easyzoom-notice" />'), this.$target.on({ "mousemove.easyzoom touchmove.easyzoom": e.proxy(this._onMove, this), "mouseleave.easyzoom touchend.easyzoom": e.proxy(this._onLeave, this), "mouseenter.easyzoom touchstart.easyzoom": e.proxy(this._onEnter, this) }), this.opts.preventClicks && this.$target.on("click.easyzoom", function(e) { e.preventDefault() }) }, t.prototype.show = function(e, t) {
        var s, a, l, c, u = this;
        return this.isReady ? (this.$target.append(this.$flyout), s = this.$target.width(), a = this.$target.height(), l = this.$flyout.width(), c = this.$flyout.height(), n = this.$zoom.width() - l, i = this.$zoom.height() - c, o = n / s, r = i / a, this.isOpen = !0, this.opts.onShow.call(this), void(e && this._move(e))) : this._loadImage(this.$link.attr("href"), function() {
          (u.isMouseOver || !t) && u.show(e)
        })
      }, t.prototype._onEnter = function(e) {
        var t = e.originalEvent.touches;
        this.isMouseOver = !0, t && 1 != t.length || (e.preventDefault(), this.show(e, !0))
      }, t.prototype._onMove = function(e) { this.isOpen && (e.preventDefault(), this._move(e)) }, t.prototype._onLeave = function() { this.isMouseOver = !1, this.isOpen && this.hide() }, t.prototype._onLoad = function(e) { e.currentTarget.width && (this.isReady = !0, this.$notice.detach(), this.$flyout.html(this.$zoom), this.$target.removeClass("is-loading").addClass("is-ready"), e.data.call && e.data()) }, t.prototype._onError = function() {
        var e = this;
        this.$notice.text(this.opts.errorNotice), this.$target.removeClass("is-loading").addClass("is-error"), this.detachNotice = setTimeout(function() { e.$notice.detach(), e.detachNotice = null }, this.opts.errorDuration)
      }, t.prototype._loadImage = function(t, n) {
        var i = new Image;
        this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)), this.$zoom = e(i).on("error", e.proxy(this._onError, this)).on("load", n, e.proxy(this._onLoad, this)), i.style.position = "absolute", i.src = t
      }, t.prototype._move = function(e) {
        if (0 === e.type.indexOf("touch")) {
          var t = e.touches || e.originalEvent.touches;
          s = t[0].pageX, a = t[0].pageY
        } else s = e.pageX || s, a = e.pageY || a;
        var l = this.$target.offset(),
          c = a - l.top,
          u = s - l.left,
          d = Math.ceil(c * r),
          p = Math.ceil(u * o);
        if (0 > p || 0 > d || p > n || d > i) this.hide();
        else {
          var f = -1 * d,
            h = -1 * p;
          this.$zoom.css({ top: f, left: h }), this.opts.onMove.call(this, f, h)
        }
      }, t.prototype.hide = function() { this.isOpen && (this.$flyout.detach(), this.isOpen = !1, this.opts.onHide.call(this)) }, t.prototype.swap = function(t, n, i) { this.hide(), this.isReady = !1, this.detachNotice && clearTimeout(this.detachNotice), this.$notice.parent().length && this.$notice.detach(), this.$target.removeClass("is-loading is-ready is-error"), this.$image.attr({ src: t, srcset: e.isArray(i) ? i.join() : i }), this.$link.attr("href", n) }, t.prototype.teardown = function() { this.hide(), this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"), this.detachNotice && clearTimeout(this.detachNotice), delete this.$link, delete this.$zoom, delete this.$image, delete this.$notice, delete this.$flyout, delete this.isOpen, delete this.isReady }, e.fn.easyZoom = function(n) {
        return this.each(function() {
          var i = e.data(this, "easyZoom");
          i ? void 0 === i.isOpen && i._init() : e.data(this, "easyZoom", new t(this, n))
        })
      }, "function" == typeof define && define.amd ? define(function() { return t }) : "undefined" != typeof module && module.exports && (module.exports = t)
    }(t),
    /*!
     * jquery.remove-data-attribute.js
     */
    e.fn.extend({
      removeDataAttributes: function() {
        var t, n = e(this),
          i = [],
          o = n.get(0).attributes,
          r = o.length;
        for (t = 0; t < r; t++) "data-" === o[t].name.substring(0, 5) && i.push(o[t].name);
        e.each(i, function(e, t) { n.removeAttr(t) })
      }
    })
}(jq223);
var getQueryString = function(e, t) {
  var n = t ? t : window.location.href,
    i = new RegExp("[?&]" + e + "=([^&#]*)", "i"),
    o = i.exec(n);
  return o ? o[1] : null
};
/*!
 * fastclick.js
 */
/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @version 1.0.3
 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
*/
! function() {
  "use strict";

  function e(t, i) {
    function o(e, t) { return function() { return e.apply(t, arguments) } }
    var r;
    if (i = i || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = t, this.tapDelay = i.tapDelay || 200, this.tapTimeout = i.tapTimeout || 700, !e.notNeeded(t)) {
      for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, c = s.length; l < c; l++) a[s[l]] = o(a[s[l]], a);
      n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, i) { var o = Node.prototype.removeEventListener; "click" === e ? o.call(t, e, n.hijacked || n, i) : o.call(t, e, n, i) }, t.addEventListener = function(e, n, i) { var o = Node.prototype.addEventListener; "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function(e) { e.propagationStopped || n(e) }), i) : o.call(t, e, n, i) }), "function" == typeof t.onclick && (r = t.onclick, t.addEventListener("click", function(e) { r(e) }, !1), t.onclick = null)
    }
  }
  var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
    n = navigator.userAgent.indexOf("Android") > 0 && !t,
    i = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
    o = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    r = i && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
    s = navigator.userAgent.indexOf("BB10") > 0;
  e.prototype.needsClick = function(e) {
    switch (e.nodeName.toLowerCase()) {
      case "button":
      case "select":
      case "textarea":
        if (e.disabled) return !0;
        break;
      case "input":
        if (i && "file" === e.type || e.disabled) return !0;
        break;
      case "label":
      case "iframe":
      case "video":
        return !0
    }
    return /\bneedsclick\b/.test(e.className)
  }, e.prototype.needsFocus = function(e) {
    switch (e.nodeName.toLowerCase()) {
      case "textarea":
        return !0;
      case "select":
        return !n;
      case "input":
        switch (e.type) {
          case "button":
          case "checkbox":
          case "file":
          case "image":
          case "radio":
          case "submit":
            return !1
        }
        return !e.disabled && !e.readOnly;
      default:
        return /\bneedsfocus\b/.test(e.className)
    }
  }, e.prototype.sendClick = function(e, t) {
    var n, i;
    document.activeElement && document.activeElement !== e && document.activeElement.blur(), i = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
  }, e.prototype.determineEventType = function(e) { return n && "select" === e.tagName.toLowerCase() ? "mousedown" : "click" }, e.prototype.focus = function(e) {
    var t;
    i && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
  }, e.prototype.updateScrollParent = function(e) {
    var t, n;
    if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
      n = e;
      do {
        if (n.scrollHeight > n.offsetHeight) { t = n, e.fastClickScrollParent = n; break }
        n = n.parentElement
      } while (n)
    }
    t && (t.fastClickLastScrollTop = t.scrollTop)
  }, e.prototype.getTargetElementFromEventTarget = function(e) { return e.nodeType === Node.TEXT_NODE ? e.parentNode : e }, e.prototype.onTouchStart = function(e) {
    var t, n, r;
    if (e.targetTouches.length > 1) return !0;
    if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], i) {
      if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return !0;
      if (!o) {
        if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
        this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
      }
    }
    return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
  }, e.prototype.touchHasMoved = function(e) {
    var t = e.changedTouches[0],
      n = this.touchBoundary;
    return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
  }, e.prototype.onTouchMove = function(e) { return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) }, e.prototype.findControl = function(e) { return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea") }, e.prototype.onTouchEnd = function(e) {
    var t, s, a, l, c, u = this.targetElement;
    if (!this.trackingClick) return !0;
    if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
    if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
    if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, s = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, r && (c = e.changedTouches[0], u = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = u.tagName.toLowerCase(), "label" === a) {
      if (t = this.findControl(u)) {
        if (this.focus(u), n) return !1;
        u = t
      }
    } else if (this.needsFocus(u)) return e.timeStamp - s > 100 || i && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, e), i && "select" === a || (this.targetElement = null, e.preventDefault()), !1);
    return !(!i || o || (l = u.fastClickScrollParent, !l || l.fastClickLastScrollTop === l.scrollTop)) || (this.needsClick(u) || (e.preventDefault(), this.sendClick(u, e)), !1)
  }, e.prototype.onTouchCancel = function() { this.trackingClick = !1, this.targetElement = null }, e.prototype.onMouse = function(e) { return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1)))) }, e.prototype.onClick = function(e) { var t; return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t) }, e.prototype.destroy = function() {
    var e = this.layer;
    n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
  }, e.notNeeded = function(e) { var t, i, o; if ("undefined" == typeof window.ontouchstart) return !0; if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) { if (!n) return !0; if (t = document.querySelector("meta[name=viewport]")) { if (t.content.indexOf("user-scalable=no") !== -1) return !0; if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0 } } if (s && (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), o[1] >= 10 && o[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) { if (t.content.indexOf("user-scalable=no") !== -1) return !0; if (document.documentElement.scrollWidth <= window.outerWidth) return !0 } return "none" === e.style.msTouchAction || "none" === e.style.touchAction }, e.attach = function(t, n) { return new e(t, n) }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() { return e }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
}(),
/*!
 * store.js
 */
/*
https://github.com/marcuswestin/store.js/
The MIT License (MIT)
Copyright (c) 2010-2016 Marcus Westin */
function(e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var t;
    t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.store = e()
  }
}(function() {
  return function e(t, n, i) {
    function o(s, a) {
      if (!n[s]) {
        if (!t[s]) { var l = "function" == typeof require && require; if (!a && l) return l(s, !0); if (r) return r(s, !0); var c = new Error("Cannot find module '" + s + "'"); throw c.code = "MODULE_NOT_FOUND", c }
        var u = n[s] = { exports: {} };
        t[s][0].call(u.exports, function(e) { var n = t[s][1][e]; return o(n ? n : e) }, u, u.exports, e, t, n, i)
      }
      return n[s].exports
    }
    for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) o(i[s]);
    return o
  }({
    1: [function(e, t, n) {
      (function(e) {
        "use strict";
        t.exports = function() {
          function t() { try { return s in o && o[s] } catch (e) { return !1 } }
          var n, i = {},
            o = "undefined" != typeof window ? window : e,
            r = o.document,
            s = "localStorage",
            a = "script";
          if (i.disabled = !1, i.version = "1.3.20", i.set = function(e, t) {}, i.get = function(e, t) {}, i.has = function(e) { return void 0 !== i.get(e) }, i.remove = function(e) {}, i.clear = function() {}, i.transact = function(e, t, n) {
              null == n && (n = t, t = null), null == t && (t = {});
              var o = i.get(e, t);
              n(o), i.set(e, o)
            }, i.getAll = function() {}, i.forEach = function() {}, i.serialize = function(e) { return JSON.stringify(e) }, i.deserialize = function(e) { if ("string" == typeof e) try { return JSON.parse(e) } catch (t) { return e || void 0 } }, t()) n = o[s], i.set = function(e, t) { return void 0 === t ? i.remove(e) : (n.setItem(e, i.serialize(t)), t) }, i.get = function(e, t) { var o = i.deserialize(n.getItem(e)); return void 0 === o ? t : o }, i.remove = function(e) { n.removeItem(e) }, i.clear = function() { n.clear() }, i.getAll = function() { var e = {}; return i.forEach(function(t, n) { e[t] = n }), e }, i.forEach = function(e) {
            for (var t = 0; t < n.length; t++) {
              var o = n.key(t);
              e(o, i.get(o))
            }
          };
          else if (r && r.documentElement.addBehavior) {
            var l, c;
            try { c = new ActiveXObject("htmlfile"), c.open(), c.write("<" + a + ">document.w=window</" + a + '><iframe src="/favicon.ico"></iframe>'), c.close(), l = c.w.frames[0].document, n = l.createElement("div") } catch (e) { n = r.createElement("div"), l = r.body }
            var u = function(e) {
                return function() {
                  var t = Array.prototype.slice.call(arguments, 0);
                  t.unshift(n), l.appendChild(n), n.addBehavior("#default#userData"), n.load(s);
                  var o = e.apply(i, t);
                  return l.removeChild(n), o
                }
              },
              d = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
              p = function(e) { return e.replace(/^d/, "___$&").replace(d, "___") };
            i.set = u(function(e, t, n) { return t = p(t), void 0 === n ? i.remove(t) : (e.setAttribute(t, i.serialize(n)), e.save(s), n) }), i.get = u(function(e, t, n) { t = p(t); var o = i.deserialize(e.getAttribute(t)); return void 0 === o ? n : o }), i.remove = u(function(e, t) { t = p(t), e.removeAttribute(t), e.save(s) }), i.clear = u(function(e) {
              var t = e.XMLDocument.documentElement.attributes;
              e.load(s);
              for (var n = t.length - 1; n >= 0; n--) e.removeAttribute(t[n].name);
              e.save(s)
            }), i.getAll = function(e) { var t = {}; return i.forEach(function(e, n) { t[e] = n }), t }, i.forEach = u(function(e, t) { for (var n, o = e.XMLDocument.documentElement.attributes, r = 0; n = o[r]; ++r) t(n.name, i.deserialize(e.getAttribute(n.name))) })
          }
          try {
            var f = "__storejs__";
            i.set(f, f), i.get(f) != f && (i.disabled = !0), i.remove(f)
          } catch (e) { i.disabled = !0 }
          return i.enabled = !i.disabled, i
        }()
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}]
  }, {}, [1])(1)
});
var storeWithExpiration = { set: function(e, t, n) { store.set(e, { val: t, exp: n, time: (new Date).getTime() }) }, get: function(e) { var t = store.get(e); return t ? (new Date).getTime() - t.time > t.exp ? null : t.val : null } };