// !(function (e) {
//   function t(t) {
//     for (
//       var s, n, o = t[0], l = t[1], d = t[2], h = 0, c = [];
//       h < o.length;
//       h++
//     )
//       (n = o[h]), a[n] && c.push(a[n][0]), (a[n] = 0);
//     for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
//     for (p && p(t); c.length; ) c.shift()();
//     return r.push.apply(r, d || []), i();
//   }
//   function i() {
//     for (var e, t = 0; t < r.length; t++) {
//       for (var i = r[t], s = !0, o = 1; o < i.length; o++) {
//         var l = i[o];
//         0 !== a[l] && (s = !1);
//       }
//       s && (r.splice(t--, 1), (e = n((n.s = i[0]))));
//     }
//     return e;
//   }
//   var s = {},
//     a = { 1: 0 },
//     r = [];
//   function n(t) {
//     if (s[t]) return s[t].exports;
//     var i = (s[t] = { i: t, l: !1, exports: {} });
//     return e[t].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
//   }
//   (n.m = e),
//     (n.c = s),
//     (n.d = function (e, t, i) {
//       n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
//     }),
//     (n.r = function (e) {
//       "undefined" != typeof Symbol &&
//         Symbol.toStringTag &&
//         Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
//         Object.defineProperty(e, "__esModule", { value: !0 });
//     }),
//     (n.t = function (e, t) {
//       if ((1 & t && (e = n(e)), 8 & t)) return e;
//       if (4 & t && "object" == typeof e && e && e.__esModule) return e;
//       var i = Object.create(null);
//       if (
//         (n.r(i),
//         Object.defineProperty(i, "default", { enumerable: !0, value: e }),
//         2 & t && "string" != typeof e)
//       )
//         for (var s in e)
//           n.d(
//             i,
//             s,
//             function (t) {
//               return e[t];
//             }.bind(null, s)
//           );
//       return i;
//     }),
//     (n.n = function (e) {
//       var t =
//         e && e.__esModule
//           ? function () {
//               return e.default;
//             }
//           : function () {
//               return e;
//             };
//       return n.d(t, "a", t), t;
//     }),
//     (n.o = function (e, t) {
//       return Object.prototype.hasOwnProperty.call(e, t);
//     }),
//     (n.p = "");
//   var o = (window.webpackJsonp = window.webpackJsonp || []),
//     l = o.push.bind(o);
//   (o.push = t), (o = o.slice());
//   for (var d = 0; d < o.length; d++) t(o[d]);
//   var p = l;
//   r.push([15, 0]), i();
// })([
//   ,
//   function (e, t, i) {
//     "use strict";
//     i.d(t, "a", function () {
//       return r;
//     });
//     var s = i(2),
//       a = i.n(s);
//     let r = function (e) {
//       null == e && (e = {}),
//         null == e.desWidth && (e.desWidth = "(min-width:1440px)"),
//         null == e.carouselName && (e.carouselName = ".picture-line"),
//         null == e.spvMobile && (e.spvMobile = 1),
//         null == e.sbMobile && (e.sbMobile = 0),
//         null == e.spvTablet && (e.spvTablet = 2),
//         null == e.sbTablet && (e.sbTablet = 10),
//         null == e.spvDesktop && (e.spvDesktop = 3),
//         null == e.sbDesktop && (e.sbDesktop = 0),
//         null == e.navRight && (e.navRight = ".picture-line__arrow_right"),
//         null == e.navLeft && (e.navLeft = ".picture-line__arrow_left");
//       var t,
//         i = window.matchMedia(e.desWidth),
//         s = function () {
//           if (!0 === i.matches) {
//             if (void 0 !== t) return t.destroy();
//           } else if (!1 === i.matches) return r();
//         },
//         r = function () {
//           t = new a.a(e.carouselName, {
//             slidesPerView: e.spvMobile,
//             spaceBetween: e.sbMobile,
//             navigation: { nextEl: e.navRight, prevEl: e.navLeft },
//             autoplay:
//               null == e.delay
//                 ? void 0
//                 : { delay: e.delay, disableOnInteraction: !1 },
//             breakpoints: {
//               510: { slidesPerView: e.spvTablet, spaceBetween: e.sbTablet },
//               1100: { slidesPerView: e.spvDesktop, spaceBetween: e.sbDesktop },
//             },
//           });
//         };
//       i.addListener(s), s();
//     };
//   },
//   function (e, t, i) {
//     e.exports = (function () {
//       "use strict";
//       function e(e, t) {
//         for (var i = 0; i < t.length; i++) {
//           var s = t[i];
//           (s.enumerable = s.enumerable || !1),
//             (s.configurable = !0),
//             "value" in s && (s.writable = !0),
//             Object.defineProperty(e, s.key, s);
//         }
//       }
//       function t() {
//         return (t =
//           Object.assign ||
//           function (e) {
//             for (var t = 1; t < arguments.length; t++) {
//               var i = arguments[t];
//               for (var s in i)
//                 Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
//             }
//             return e;
//           }).apply(this, arguments);
//       }
//       function i(e) {
//         return (
//           null !== e &&
//           "object" == typeof e &&
//           "constructor" in e &&
//           e.constructor === Object
//         );
//       }
//       function s(e, t) {
//         void 0 === e && (e = {}),
//           void 0 === t && (t = {}),
//           Object.keys(t).forEach(function (a) {
//             void 0 === e[a]
//               ? (e[a] = t[a])
//               : i(t[a]) &&
//                 i(e[a]) &&
//                 Object.keys(t[a]).length > 0 &&
//                 s(e[a], t[a]);
//           });
//       }
//       var a = {
//         body: {},
//         addEventListener: function () {},
//         removeEventListener: function () {},
//         activeElement: { blur: function () {}, nodeName: "" },
//         querySelector: function () {
//           return null;
//         },
//         querySelectorAll: function () {
//           return [];
//         },
//         getElementById: function () {
//           return null;
//         },
//         createEvent: function () {
//           return { initEvent: function () {} };
//         },
//         createElement: function () {
//           return {
//             children: [],
//             childNodes: [],
//             style: {},
//             setAttribute: function () {},
//             getElementsByTagName: function () {
//               return [];
//             },
//           };
//         },
//         createElementNS: function () {
//           return {};
//         },
//         importNode: function () {
//           return null;
//         },
//         location: {
//           hash: "",
//           host: "",
//           hostname: "",
//           href: "",
//           origin: "",
//           pathname: "",
//           protocol: "",
//           search: "",
//         },
//       };
//       function r() {
//         var e = "undefined" != typeof document ? document : {};
//         return s(e, a), e;
//       }
//       var n = {
//         document: a,
//         navigator: { userAgent: "" },
//         location: {
//           hash: "",
//           host: "",
//           hostname: "",
//           href: "",
//           origin: "",
//           pathname: "",
//           protocol: "",
//           search: "",
//         },
//         history: {
//           replaceState: function () {},
//           pushState: function () {},
//           go: function () {},
//           back: function () {},
//         },
//         CustomEvent: function () {
//           return this;
//         },
//         addEventListener: function () {},
//         removeEventListener: function () {},
//         getComputedStyle: function () {
//           return {
//             getPropertyValue: function () {
//               return "";
//             },
//           };
//         },
//         Image: function () {},
//         Date: function () {},
//         screen: {},
//         setTimeout: function () {},
//         clearTimeout: function () {},
//         matchMedia: function () {
//           return {};
//         },
//         requestAnimationFrame: function (e) {
//           return "undefined" == typeof setTimeout
//             ? (e(), null)
//             : setTimeout(e, 0);
//         },
//         cancelAnimationFrame: function (e) {
//           "undefined" != typeof setTimeout && clearTimeout(e);
//         },
//       };
//       function o() {
//         var e = "undefined" != typeof window ? window : {};
//         return s(e, n), e;
//       }
//       function l(e) {
//         return (l = Object.setPrototypeOf
//           ? Object.getPrototypeOf
//           : function (e) {
//               return e.__proto__ || Object.getPrototypeOf(e);
//             })(e);
//       }
//       function d(e, t) {
//         return (d =
//           Object.setPrototypeOf ||
//           function (e, t) {
//             return (e.__proto__ = t), e;
//           })(e, t);
//       }
//       function p() {
//         if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
//         if (Reflect.construct.sham) return !1;
//         if ("function" == typeof Proxy) return !0;
//         try {
//           return (
//             Date.prototype.toString.call(
//               Reflect.construct(Date, [], function () {})
//             ),
//             !0
//           );
//         } catch (e) {
//           return !1;
//         }
//       }
//       function h(e, t, i) {
//         return (h = p()
//           ? Reflect.construct
//           : function (e, t, i) {
//               var s = [null];
//               s.push.apply(s, t);
//               var a = new (Function.bind.apply(e, s))();
//               return i && d(a, i.prototype), a;
//             }).apply(null, arguments);
//       }
//       function c(e) {
//         var t = "function" == typeof Map ? new Map() : void 0;
//         return (c = function (e) {
//           if (
//             null === e ||
//             ((i = e), -1 === Function.toString.call(i).indexOf("[native code]"))
//           )
//             return e;
//           var i;
//           if ("function" != typeof e)
//             throw new TypeError(
//               "Super expression must either be null or a function"
//             );
//           if (void 0 !== t) {
//             if (t.has(e)) return t.get(e);
//             t.set(e, s);
//           }
//           function s() {
//             return h(e, arguments, l(this).constructor);
//           }
//           return (
//             (s.prototype = Object.create(e.prototype, {
//               constructor: {
//                 value: s,
//                 enumerable: !1,
//                 writable: !0,
//                 configurable: !0,
//               },
//             })),
//             d(s, e)
//           );
//         })(e);
//       }
//       var u = (function (e) {
//         var t, i;
//         function s(t) {
//           var i, s, a;
//           return (
//             (i = e.call.apply(e, [this].concat(t)) || this),
//             (s = (function (e) {
//               if (void 0 === e)
//                 throw new ReferenceError(
//                   "this hasn't been initialised - super() hasn't been called"
//                 );
//               return e;
//             })(i)),
//             (a = s.__proto__),
//             Object.defineProperty(s, "__proto__", {
//               get: function () {
//                 return a;
//               },
//               set: function (e) {
//                 a.__proto__ = e;
//               },
//             }),
//             i
//           );
//         }
//         return (
//           (i = e),
//           ((t = s).prototype = Object.create(i.prototype)),
//           (t.prototype.constructor = t),
//           (t.__proto__ = i),
//           s
//         );
//       })(c(Array));
//       function f(e) {
//         void 0 === e && (e = []);
//         var t = [];
//         return (
//           e.forEach(function (e) {
//             Array.isArray(e) ? t.push.apply(t, f(e)) : t.push(e);
//           }),
//           t
//         );
//       }
//       function v(e, t) {
//         return Array.prototype.filter.call(e, t);
//       }
//       function m(e, t) {
//         var i = o(),
//           s = r(),
//           a = [];
//         if (!t && e instanceof u) return e;
//         if (!e) return new u(a);
//         if ("string" == typeof e) {
//           var n = e.trim();
//           if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
//             var l = "div";
//             0 === n.indexOf("<li") && (l = "ul"),
//               0 === n.indexOf("<tr") && (l = "tbody"),
//               (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (l = "tr"),
//               0 === n.indexOf("<tbody") && (l = "table"),
//               0 === n.indexOf("<option") && (l = "select");
//             var d = s.createElement(l);
//             d.innerHTML = n;
//             for (var p = 0; p < d.childNodes.length; p += 1)
//               a.push(d.childNodes[p]);
//           } else
//             a = (function (e, t) {
//               if ("string" != typeof e) return [e];
//               for (
//                 var i = [], s = t.querySelectorAll(e), a = 0;
//                 a < s.length;
//                 a += 1
//               )
//                 i.push(s[a]);
//               return i;
//             })(e.trim(), t || s);
//         } else if (e.nodeType || e === i || e === s) a.push(e);
//         else if (Array.isArray(e)) {
//           if (e instanceof u) return e;
//           a = e;
//         }
//         return new u(
//           (function (e) {
//             for (var t = [], i = 0; i < e.length; i += 1)
//               -1 === t.indexOf(e[i]) && t.push(e[i]);
//             return t;
//           })(a)
//         );
//       }
//       m.fn = u.prototype;
//       var g,
//         w,
//         y,
//         b = {
//           addClass: function () {
//             for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
//               t[i] = arguments[i];
//             var s = f(
//               t.map(function (e) {
//                 return e.split(" ");
//               })
//             );
//             return (
//               this.forEach(function (e) {
//                 var t;
//                 (t = e.classList).add.apply(t, s);
//               }),
//               this
//             );
//           },
//           removeClass: function () {
//             for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
//               t[i] = arguments[i];
//             var s = f(
//               t.map(function (e) {
//                 return e.split(" ");
//               })
//             );
//             return (
//               this.forEach(function (e) {
//                 var t;
//                 (t = e.classList).remove.apply(t, s);
//               }),
//               this
//             );
//           },
//           hasClass: function () {
//             for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
//               t[i] = arguments[i];
//             var s = f(
//               t.map(function (e) {
//                 return e.split(" ");
//               })
//             );
//             return (
//               v(this, function (e) {
//                 return (
//                   s.filter(function (t) {
//                     return e.classList.contains(t);
//                   }).length > 0
//                 );
//               }).length > 0
//             );
//           },
//           toggleClass: function () {
//             for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
//               t[i] = arguments[i];
//             var s = f(
//               t.map(function (e) {
//                 return e.split(" ");
//               })
//             );
//             this.forEach(function (e) {
//               s.forEach(function (t) {
//                 e.classList.toggle(t);
//               });
//             });
//           },
//           attr: function (e, t) {
//             if (1 === arguments.length && "string" == typeof e)
//               return this[0] ? this[0].getAttribute(e) : void 0;
//             for (var i = 0; i < this.length; i += 1)
//               if (2 === arguments.length) this[i].setAttribute(e, t);
//               else
//                 for (var s in e)
//                   (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
//             return this;
//           },
//           removeAttr: function (e) {
//             for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
//             return this;
//           },
//           transform: function (e) {
//             for (var t = 0; t < this.length; t += 1)
//               this[t].style.transform = e;
//             return this;
//           },
//           transition: function (e) {
//             for (var t = 0; t < this.length; t += 1)
//               this[t].style.transitionDuration =
//                 "string" != typeof e ? e + "ms" : e;
//             return this;
//           },
//           on: function () {
//             for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
//               t[i] = arguments[i];
//             var s = t[0],
//               a = t[1],
//               r = t[2],
//               n = t[3];
//             function o(e) {
//               var t = e.target;
//               if (t) {
//                 var i = e.target.dom7EventData || [];
//                 if ((i.indexOf(e) < 0 && i.unshift(e), m(t).is(a)))
//                   r.apply(t, i);
//                 else
//                   for (var s = m(t).parents(), n = 0; n < s.length; n += 1)
//                     m(s[n]).is(a) && r.apply(s[n], i);
//               }
//             }
//             function l(e) {
//               var t = (e && e.target && e.target.dom7EventData) || [];
//               t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
//             }
//             "function" == typeof t[1] &&
//               ((s = t[0]), (r = t[1]), (n = t[2]), (a = void 0)),
//               n || (n = !1);
//             for (var d, p = s.split(" "), h = 0; h < this.length; h += 1) {
//               var c = this[h];
//               if (a)
//                 for (d = 0; d < p.length; d += 1) {
//                   var u = p[d];
//                   c.dom7LiveListeners || (c.dom7LiveListeners = {}),
//                     c.dom7LiveListeners[u] || (c.dom7LiveListeners[u] = []),
//                     c.dom7LiveListeners[u].push({
//                       listener: r,
//                       proxyListener: o,
//                     }),
//                     c.addEventListener(u, o, n);
//                 }
//               else
//                 for (d = 0; d < p.length; d += 1) {
//                   var f = p[d];
//                   c.dom7Listeners || (c.dom7Listeners = {}),
//                     c.dom7Listeners[f] || (c.dom7Listeners[f] = []),
//                     c.dom7Listeners[f].push({ listener: r, proxyListener: l }),
//                     c.addEventListener(f, l, n);
//                 }
//             }
//             return this;
//           },
//           off: function () {
//             for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
//               t[i] = arguments[i];
//             var s = t[0],
//               a = t[1],
//               r = t[2],
//               n = t[3];
//             "function" == typeof t[1] &&
//               ((s = t[0]), (r = t[1]), (n = t[2]), (a = void 0)),
//               n || (n = !1);
//             for (var o = s.split(" "), l = 0; l < o.length; l += 1)
//               for (var d = o[l], p = 0; p < this.length; p += 1) {
//                 var h = this[p],
//                   c = void 0;
//                 if (
//                   (!a && h.dom7Listeners
//                     ? (c = h.dom7Listeners[d])
//                     : a && h.dom7LiveListeners && (c = h.dom7LiveListeners[d]),
//                   c && c.length)
//                 )
//                   for (var u = c.length - 1; u >= 0; u -= 1) {
//                     var f = c[u];
//                     (r && f.listener === r) ||
//                     (r &&
//                       f.listener &&
//                       f.listener.dom7proxy &&
//                       f.listener.dom7proxy === r)
//                       ? (h.removeEventListener(d, f.proxyListener, n),
//                         c.splice(u, 1))
//                       : r ||
//                         (h.removeEventListener(d, f.proxyListener, n),
//                         c.splice(u, 1));
//                   }
//               }
//             return this;
//           },
//           trigger: function () {
//             for (
//               var e = o(), t = arguments.length, i = new Array(t), s = 0;
//               s < t;
//               s++
//             )
//               i[s] = arguments[s];
//             for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
//               for (var l = a[n], d = 0; d < this.length; d += 1) {
//                 var p = this[d];
//                 if (e.CustomEvent) {
//                   var h = new e.CustomEvent(l, {
//                     detail: r,
//                     bubbles: !0,
//                     cancelable: !0,
//                   });
//                   (p.dom7EventData = i.filter(function (e, t) {
//                     return t > 0;
//                   })),
//                     p.dispatchEvent(h),
//                     (p.dom7EventData = []),
//                     delete p.dom7EventData;
//                 }
//               }
//             return this;
//           },
//           transitionEnd: function (e) {
//             var t = this;
//             return (
//               e &&
//                 t.on("transitionend", function i(s) {
//                   s.target === this &&
//                     (e.call(this, s), t.off("transitionend", i));
//                 }),
//               this
//             );
//           },
//           outerWidth: function (e) {
//             if (this.length > 0) {
//               if (e) {
//                 var t = this.styles();
//                 return (
//                   this[0].offsetWidth +
//                   parseFloat(t.getPropertyValue("margin-right")) +
//                   parseFloat(t.getPropertyValue("margin-left"))
//                 );
//               }
//               return this[0].offsetWidth;
//             }
//             return null;
//           },
//           outerHeight: function (e) {
//             if (this.length > 0) {
//               if (e) {
//                 var t = this.styles();
//                 return (
//                   this[0].offsetHeight +
//                   parseFloat(t.getPropertyValue("margin-top")) +
//                   parseFloat(t.getPropertyValue("margin-bottom"))
//                 );
//               }
//               return this[0].offsetHeight;
//             }
//             return null;
//           },
//           styles: function () {
//             var e = o();
//             return this[0] ? e.getComputedStyle(this[0], null) : {};
//           },
//           offset: function () {
//             if (this.length > 0) {
//               var e = o(),
//                 t = r(),
//                 i = this[0],
//                 s = i.getBoundingClientRect(),
//                 a = t.body,
//                 n = i.clientTop || a.clientTop || 0,
//                 l = i.clientLeft || a.clientLeft || 0,
//                 d = i === e ? e.scrollY : i.scrollTop,
//                 p = i === e ? e.scrollX : i.scrollLeft;
//               return { top: s.top + d - n, left: s.left + p - l };
//             }
//             return null;
//           },
//           css: function (e, t) {
//             var i,
//               s = o();
//             if (1 === arguments.length) {
//               if ("string" != typeof e) {
//                 for (i = 0; i < this.length; i += 1)
//                   for (var a in e) this[i].style[a] = e[a];
//                 return this;
//               }
//               if (this[0])
//                 return s.getComputedStyle(this[0], null).getPropertyValue(e);
//             }
//             if (2 === arguments.length && "string" == typeof e) {
//               for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
//               return this;
//             }
//             return this;
//           },
//           each: function (e) {
//             return e
//               ? (this.forEach(function (t, i) {
//                   e.apply(t, [t, i]);
//                 }),
//                 this)
//               : this;
//           },
//           html: function (e) {
//             if (void 0 === e) return this[0] ? this[0].innerHTML : null;
//             for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
//             return this;
//           },
//           text: function (e) {
//             if (void 0 === e)
//               return this[0] ? this[0].textContent.trim() : null;
//             for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
//             return this;
//           },
//           is: function (e) {
//             var t,
//               i,
//               s = o(),
//               a = r(),
//               n = this[0];
//             if (!n || void 0 === e) return !1;
//             if ("string" == typeof e) {
//               if (n.matches) return n.matches(e);
//               if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
//               if (n.msMatchesSelector) return n.msMatchesSelector(e);
//               for (t = m(e), i = 0; i < t.length; i += 1)
//                 if (t[i] === n) return !0;
//               return !1;
//             }
//             if (e === a) return n === a;
//             if (e === s) return n === s;
//             if (e.nodeType || e instanceof u) {
//               for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
//                 if (t[i] === n) return !0;
//               return !1;
//             }
//             return !1;
//           },
//           index: function () {
//             var e,
//               t = this[0];
//             if (t) {
//               for (e = 0; null !== (t = t.previousSibling); )
//                 1 === t.nodeType && (e += 1);
//               return e;
//             }
//           },
//           eq: function (e) {
//             if (void 0 === e) return this;
//             var t = this.length;
//             if (e > t - 1) return m([]);
//             if (e < 0) {
//               var i = t + e;
//               return m(i < 0 ? [] : [this[i]]);
//             }
//             return m([this[e]]);
//           },
//           append: function () {
//             for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
//               e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
//               for (var s = 0; s < this.length; s += 1)
//                 if ("string" == typeof e) {
//                   var a = t.createElement("div");
//                   for (a.innerHTML = e; a.firstChild; )
//                     this[s].appendChild(a.firstChild);
//                 } else if (e instanceof u)
//                   for (var n = 0; n < e.length; n += 1)
//                     this[s].appendChild(e[n]);
//                 else this[s].appendChild(e);
//             }
//             return this;
//           },
//           prepend: function (e) {
//             var t,
//               i,
//               s = r();
//             for (t = 0; t < this.length; t += 1)
//               if ("string" == typeof e) {
//                 var a = s.createElement("div");
//                 for (
//                   a.innerHTML = e, i = a.childNodes.length - 1;
//                   i >= 0;
//                   i -= 1
//                 )
//                   this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]);
//               } else if (e instanceof u)
//                 for (i = 0; i < e.length; i += 1)
//                   this[t].insertBefore(e[i], this[t].childNodes[0]);
//               else this[t].insertBefore(e, this[t].childNodes[0]);
//             return this;
//           },
//           next: function (e) {
//             return this.length > 0
//               ? e
//                 ? this[0].nextElementSibling &&
//                   m(this[0].nextElementSibling).is(e)
//                   ? m([this[0].nextElementSibling])
//                   : m([])
//                 : this[0].nextElementSibling
//                 ? m([this[0].nextElementSibling])
//                 : m([])
//               : m([]);
//           },
//           nextAll: function (e) {
//             var t = [],
//               i = this[0];
//             if (!i) return m([]);
//             for (; i.nextElementSibling; ) {
//               var s = i.nextElementSibling;
//               e ? m(s).is(e) && t.push(s) : t.push(s), (i = s);
//             }
//             return m(t);
//           },
//           prev: function (e) {
//             if (this.length > 0) {
//               var t = this[0];
//               return e
//                 ? t.previousElementSibling && m(t.previousElementSibling).is(e)
//                   ? m([t.previousElementSibling])
//                   : m([])
//                 : t.previousElementSibling
//                 ? m([t.previousElementSibling])
//                 : m([]);
//             }
//             return m([]);
//           },
//           prevAll: function (e) {
//             var t = [],
//               i = this[0];
//             if (!i) return m([]);
//             for (; i.previousElementSibling; ) {
//               var s = i.previousElementSibling;
//               e ? m(s).is(e) && t.push(s) : t.push(s), (i = s);
//             }
//             return m(t);
//           },
//           parent: function (e) {
//             for (var t = [], i = 0; i < this.length; i += 1)
//               null !== this[i].parentNode &&
//                 (e
//                   ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode)
//                   : t.push(this[i].parentNode));
//             return m(t);
//           },
//           parents: function (e) {
//             for (var t = [], i = 0; i < this.length; i += 1)
//               for (var s = this[i].parentNode; s; )
//                 e ? m(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
//             return m(t);
//           },
//           closest: function (e) {
//             var t = this;
//             return void 0 === e
//               ? m([])
//               : (t.is(e) || (t = t.parents(e).eq(0)), t);
//           },
//           find: function (e) {
//             for (var t = [], i = 0; i < this.length; i += 1)
//               for (
//                 var s = this[i].querySelectorAll(e), a = 0;
//                 a < s.length;
//                 a += 1
//               )
//                 t.push(s[a]);
//             return m(t);
//           },
//           children: function (e) {
//             for (var t = [], i = 0; i < this.length; i += 1)
//               for (var s = this[i].children, a = 0; a < s.length; a += 1)
//                 (e && !m(s[a]).is(e)) || t.push(s[a]);
//             return m(t);
//           },
//           filter: function (e) {
//             return m(v(this, e));
//           },
//           remove: function () {
//             for (var e = 0; e < this.length; e += 1)
//               this[e].parentNode && this[e].parentNode.removeChild(this[e]);
//             return this;
//           },
//         };
//       function T(e, t) {
//         return void 0 === t && (t = 0), setTimeout(e, t);
//       }
//       function S() {
//         return Date.now();
//       }
//       function x(e, t) {
//         void 0 === t && (t = "x");
//         var i,
//           s,
//           a,
//           r = o(),
//           n = r.getComputedStyle(e, null);
//         return (
//           r.WebKitCSSMatrix
//             ? ((s = n.transform || n.webkitTransform).split(",").length > 6 &&
//                 (s = s
//                   .split(", ")
//                   .map(function (e) {
//                     return e.replace(",", ".");
//                   })
//                   .join(", ")),
//               (a = new r.WebKitCSSMatrix("none" === s ? "" : s)))
//             : (i = (a =
//                 n.MozTransform ||
//                 n.OTransform ||
//                 n.MsTransform ||
//                 n.msTransform ||
//                 n.transform ||
//                 n
//                   .getPropertyValue("transform")
//                   .replace("translate(", "matrix(1, 0, 0, 1,"))
//                 .toString()
//                 .split(",")),
//           "x" === t &&
//             (s = r.WebKitCSSMatrix
//               ? a.m41
//               : 16 === i.length
//               ? parseFloat(i[12])
//               : parseFloat(i[4])),
//           "y" === t &&
//             (s = r.WebKitCSSMatrix
//               ? a.m42
//               : 16 === i.length
//               ? parseFloat(i[13])
//               : parseFloat(i[5])),
//           s || 0
//         );
//       }
//       function C(e) {
//         return (
//           "object" == typeof e &&
//           null !== e &&
//           e.constructor &&
//           e.constructor === Object
//         );
//       }
//       function E() {
//         for (
//           var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1;
//           t < arguments.length;
//           t += 1
//         ) {
//           var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
//           if (null != i)
//             for (
//               var s = Object.keys(Object(i)), a = 0, r = s.length;
//               a < r;
//               a += 1
//             ) {
//               var n = s[a],
//                 o = Object.getOwnPropertyDescriptor(i, n);
//               void 0 !== o &&
//                 o.enumerable &&
//                 (C(e[n]) && C(i[n])
//                   ? E(e[n], i[n])
//                   : !C(e[n]) && C(i[n])
//                   ? ((e[n] = {}), E(e[n], i[n]))
//                   : (e[n] = i[n]));
//             }
//         }
//         return e;
//       }
//       function k(e, t) {
//         Object.keys(t).forEach(function (i) {
//           C(t[i]) &&
//             Object.keys(t[i]).forEach(function (s) {
//               "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
//             }),
//             (e[i] = t[i]);
//         });
//       }
//       function $() {
//         return (
//           g ||
//             (g = (function () {
//               var e = o(),
//                 t = r();
//               return {
//                 touch: !!(
//                   "ontouchstart" in e ||
//                   (e.DocumentTouch && t instanceof e.DocumentTouch)
//                 ),
//                 pointerEvents:
//                   !!e.PointerEvent &&
//                   "maxTouchPoints" in e.navigator &&
//                   e.navigator.maxTouchPoints >= 0,
//                 observer:
//                   "MutationObserver" in e || "WebkitMutationObserver" in e,
//                 passiveListener: (function () {
//                   var t = !1;
//                   try {
//                     var i = Object.defineProperty({}, "passive", {
//                       get: function () {
//                         t = !0;
//                       },
//                     });
//                     e.addEventListener("testPassiveListener", null, i);
//                   } catch (e) {}
//                   return t;
//                 })(),
//                 gestures: "ongesturestart" in e,
//               };
//             })()),
//           g
//         );
//       }
//       function M(e) {
//         return (
//           void 0 === e && (e = {}),
//           w ||
//             (w = (function (e) {
//               var t = (void 0 === e ? {} : e).userAgent,
//                 i = $(),
//                 s = o(),
//                 a = s.navigator.platform,
//                 r = t || s.navigator.userAgent,
//                 n = { ios: !1, android: !1 },
//                 l = s.screen.width,
//                 d = s.screen.height,
//                 p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
//                 h = r.match(/(iPad).*OS\s([\d_]+)/),
//                 c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
//                 u = !h && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
//                 f = "Win32" === a,
//                 v = "MacIntel" === a;
//               return (
//                 !h &&
//                   v &&
//                   i.touch &&
//                   [
//                     "1024x1366",
//                     "1366x1024",
//                     "834x1194",
//                     "1194x834",
//                     "834x1112",
//                     "1112x834",
//                     "768x1024",
//                     "1024x768",
//                     "820x1180",
//                     "1180x820",
//                     "810x1080",
//                     "1080x810",
//                   ].indexOf(l + "x" + d) >= 0 &&
//                   ((h = r.match(/(Version)\/([\d.]+)/)) ||
//                     (h = [0, 1, "13_0_0"]),
//                   (v = !1)),
//                 p && !f && ((n.os = "android"), (n.android = !0)),
//                 (h || u || c) && ((n.os = "ios"), (n.ios = !0)),
//                 n
//               );
//             })(e)),
//           w
//         );
//       }
//       function z() {
//         return (
//           y ||
//             (y = (function () {
//               var e,
//                 t = o();
//               return {
//                 isEdge: !!t.navigator.userAgent.match(/Edge/g),
//                 isSafari:
//                   ((e = t.navigator.userAgent.toLowerCase()),
//                   e.indexOf("safari") >= 0 &&
//                     e.indexOf("chrome") < 0 &&
//                     e.indexOf("android") < 0),
//                 isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
//                   t.navigator.userAgent
//                 ),
//               };
//             })()),
//           y
//         );
//       }
//       Object.keys(b).forEach(function (e) {
//         m.fn[e] = b[e];
//       });
//       var P = {
//           name: "resize",
//           create: function () {
//             var e = this;
//             E(e, {
//               resize: {
//                 resizeHandler: function () {
//                   e &&
//                     !e.destroyed &&
//                     e.initialized &&
//                     (e.emit("beforeResize"), e.emit("resize"));
//                 },
//                 orientationChangeHandler: function () {
//                   e &&
//                     !e.destroyed &&
//                     e.initialized &&
//                     e.emit("orientationchange");
//                 },
//               },
//             });
//           },
//           on: {
//             init: function (e) {
//               var t = o();
//               t.addEventListener("resize", e.resize.resizeHandler),
//                 t.addEventListener(
//                   "orientationchange",
//                   e.resize.orientationChangeHandler
//                 );
//             },
//             destroy: function (e) {
//               var t = o();
//               t.removeEventListener("resize", e.resize.resizeHandler),
//                 t.removeEventListener(
//                   "orientationchange",
//                   e.resize.orientationChangeHandler
//                 );
//             },
//           },
//         },
//         L = {
//           attach: function (e, t) {
//             void 0 === t && (t = {});
//             var i = o(),
//               s = this,
//               a = new (i.MutationObserver || i.WebkitMutationObserver)(
//                 function (e) {
//                   if (1 !== e.length) {
//                     var t = function () {
//                       s.emit("observerUpdate", e[0]);
//                     };
//                     i.requestAnimationFrame
//                       ? i.requestAnimationFrame(t)
//                       : i.setTimeout(t, 0);
//                   } else s.emit("observerUpdate", e[0]);
//                 }
//               );
//             a.observe(e, {
//               attributes: void 0 === t.attributes || t.attributes,
//               childList: void 0 === t.childList || t.childList,
//               characterData: void 0 === t.characterData || t.characterData,
//             }),
//               s.observer.observers.push(a);
//           },
//           init: function () {
//             if (this.support.observer && this.params.observer) {
//               if (this.params.observeParents)
//                 for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
//                   this.observer.attach(e[t]);
//               this.observer.attach(this.$el[0], {
//                 childList: this.params.observeSlideChildren,
//               }),
//                 this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
//             }
//           },
//           destroy: function () {
//             this.observer.observers.forEach(function (e) {
//               e.disconnect();
//             }),
//               (this.observer.observers = []);
//           },
//         },
//         O = {
//           name: "observer",
//           params: {
//             observer: !1,
//             observeParents: !1,
//             observeSlideChildren: !1,
//           },
//           create: function () {
//             k(this, { observer: t({}, L, { observers: [] }) });
//           },
//           on: {
//             init: function (e) {
//               e.observer.init();
//             },
//             destroy: function (e) {
//               e.observer.destroy();
//             },
//           },
//         };
//       function A(e) {
//         var t = r(),
//           i = o(),
//           s = this.touchEventsData,
//           a = this.params,
//           n = this.touches;
//         if (!this.animating || !a.preventInteractionOnTransition) {
//           var l = e;
//           l.originalEvent && (l = l.originalEvent);
//           var d = m(l.target);
//           if (
//             ("wrapper" !== a.touchEventsTarget ||
//               d.closest(this.wrapperEl).length) &&
//             ((s.isTouchEvent = "touchstart" === l.type),
//             (s.isTouchEvent || !("which" in l) || 3 !== l.which) &&
//               !(
//                 (!s.isTouchEvent && "button" in l && l.button > 0) ||
//                 (s.isTouched && s.isMoved)
//               ))
//           )
//             if (
//               (!!a.noSwipingClass &&
//                 "" !== a.noSwipingClass &&
//                 l.target &&
//                 l.target.shadowRoot &&
//                 e.path &&
//                 e.path[0] &&
//                 (d = m(e.path[0])),
//               a.noSwiping &&
//                 d.closest(
//                   a.noSwipingSelector
//                     ? a.noSwipingSelector
//                     : "." + a.noSwipingClass
//                 )[0])
//             )
//               this.allowClick = !0;
//             else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
//               (n.currentX =
//                 "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
//                 (n.currentY =
//                   "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
//               var p = n.currentX,
//                 h = n.currentY,
//                 c = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
//                 u = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
//               if (!c || !(p <= u || p >= i.innerWidth - u)) {
//                 if (
//                   (E(s, {
//                     isTouched: !0,
//                     isMoved: !1,
//                     allowTouchCallbacks: !0,
//                     isScrolling: void 0,
//                     startMoving: void 0,
//                   }),
//                   (n.startX = p),
//                   (n.startY = h),
//                   (s.touchStartTime = S()),
//                   (this.allowClick = !0),
//                   this.updateSize(),
//                   (this.swipeDirection = void 0),
//                   a.threshold > 0 && (s.allowThresholdMove = !1),
//                   "touchstart" !== l.type)
//                 ) {
//                   var f = !0;
//                   d.is(s.formElements) && (f = !1),
//                     t.activeElement &&
//                       m(t.activeElement).is(s.formElements) &&
//                       t.activeElement !== d[0] &&
//                       t.activeElement.blur();
//                   var v =
//                     f && this.allowTouchMove && a.touchStartPreventDefault;
//                   (!a.touchStartForcePreventDefault && !v) ||
//                     d[0].isContentEditable ||
//                     l.preventDefault();
//                 }
//                 this.emit("touchStart", l);
//               }
//             }
//         }
//       }
//       function I(e) {
//         var t = r(),
//           i = this.touchEventsData,
//           s = this.params,
//           a = this.touches,
//           n = this.rtlTranslate,
//           o = e;
//         if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
//           if (!i.isTouchEvent || "touchmove" === o.type) {
//             var l =
//                 "touchmove" === o.type &&
//                 o.targetTouches &&
//                 (o.targetTouches[0] || o.changedTouches[0]),
//               d = "touchmove" === o.type ? l.pageX : o.pageX,
//               p = "touchmove" === o.type ? l.pageY : o.pageY;
//             if (o.preventedByNestedSwiper)
//               return (a.startX = d), void (a.startY = p);
//             if (!this.allowTouchMove)
//               return (
//                 (this.allowClick = !1),
//                 void (
//                   i.isTouched &&
//                   (E(a, { startX: d, startY: p, currentX: d, currentY: p }),
//                   (i.touchStartTime = S()))
//                 )
//               );
//             if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
//               if (this.isVertical()) {
//                 if (
//                   (p < a.startY && this.translate <= this.maxTranslate()) ||
//                   (p > a.startY && this.translate >= this.minTranslate())
//                 )
//                   return (i.isTouched = !1), void (i.isMoved = !1);
//               } else if (
//                 (d < a.startX && this.translate <= this.maxTranslate()) ||
//                 (d > a.startX && this.translate >= this.minTranslate())
//               )
//                 return;
//             if (
//               i.isTouchEvent &&
//               t.activeElement &&
//               o.target === t.activeElement &&
//               m(o.target).is(i.formElements)
//             )
//               return (i.isMoved = !0), void (this.allowClick = !1);
//             if (
//               (i.allowTouchCallbacks && this.emit("touchMove", o),
//               !(o.targetTouches && o.targetTouches.length > 1))
//             ) {
//               (a.currentX = d), (a.currentY = p);
//               var h,
//                 c = a.currentX - a.startX,
//                 u = a.currentY - a.startY;
//               if (
//                 !(
//                   this.params.threshold &&
//                   Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) <
//                     this.params.threshold
//                 )
//               )
//                 if (
//                   (void 0 === i.isScrolling &&
//                     ((this.isHorizontal() && a.currentY === a.startY) ||
//                     (this.isVertical() && a.currentX === a.startX)
//                       ? (i.isScrolling = !1)
//                       : c * c + u * u >= 25 &&
//                         ((h =
//                           (180 * Math.atan2(Math.abs(u), Math.abs(c))) /
//                           Math.PI),
//                         (i.isScrolling = this.isHorizontal()
//                           ? h > s.touchAngle
//                           : 90 - h > s.touchAngle))),
//                   i.isScrolling && this.emit("touchMoveOpposite", o),
//                   void 0 === i.startMoving &&
//                     ((a.currentX === a.startX && a.currentY === a.startY) ||
//                       (i.startMoving = !0)),
//                   i.isScrolling)
//                 )
//                   i.isTouched = !1;
//                 else if (i.startMoving) {
//                   (this.allowClick = !1),
//                     !s.cssMode && o.cancelable && o.preventDefault(),
//                     s.touchMoveStopPropagation &&
//                       !s.nested &&
//                       o.stopPropagation(),
//                     i.isMoved ||
//                       (s.loop && this.loopFix(),
//                       (i.startTranslate = this.getTranslate()),
//                       this.setTransition(0),
//                       this.animating &&
//                         this.$wrapperEl.trigger(
//                           "webkitTransitionEnd transitionend"
//                         ),
//                       (i.allowMomentumBounce = !1),
//                       !s.grabCursor ||
//                         (!0 !== this.allowSlideNext &&
//                           !0 !== this.allowSlidePrev) ||
//                         this.setGrabCursor(!0),
//                       this.emit("sliderFirstMove", o)),
//                     this.emit("sliderMove", o),
//                     (i.isMoved = !0);
//                   var f = this.isHorizontal() ? c : u;
//                   (a.diff = f),
//                     (f *= s.touchRatio),
//                     n && (f = -f),
//                     (this.swipeDirection = f > 0 ? "prev" : "next"),
//                     (i.currentTranslate = f + i.startTranslate);
//                   var v = !0,
//                     g = s.resistanceRatio;
//                   if (
//                     (s.touchReleaseOnEdges && (g = 0),
//                     f > 0 && i.currentTranslate > this.minTranslate()
//                       ? ((v = !1),
//                         s.resistance &&
//                           (i.currentTranslate =
//                             this.minTranslate() -
//                             1 +
//                             Math.pow(
//                               -this.minTranslate() + i.startTranslate + f,
//                               g
//                             )))
//                       : f < 0 &&
//                         i.currentTranslate < this.maxTranslate() &&
//                         ((v = !1),
//                         s.resistance &&
//                           (i.currentTranslate =
//                             this.maxTranslate() +
//                             1 -
//                             Math.pow(
//                               this.maxTranslate() - i.startTranslate - f,
//                               g
//                             ))),
//                     v && (o.preventedByNestedSwiper = !0),
//                     !this.allowSlideNext &&
//                       "next" === this.swipeDirection &&
//                       i.currentTranslate < i.startTranslate &&
//                       (i.currentTranslate = i.startTranslate),
//                     !this.allowSlidePrev &&
//                       "prev" === this.swipeDirection &&
//                       i.currentTranslate > i.startTranslate &&
//                       (i.currentTranslate = i.startTranslate),
//                     s.threshold > 0)
//                   ) {
//                     if (!(Math.abs(f) > s.threshold || i.allowThresholdMove))
//                       return void (i.currentTranslate = i.startTranslate);
//                     if (!i.allowThresholdMove)
//                       return (
//                         (i.allowThresholdMove = !0),
//                         (a.startX = a.currentX),
//                         (a.startY = a.currentY),
//                         (i.currentTranslate = i.startTranslate),
//                         void (a.diff = this.isHorizontal()
//                           ? a.currentX - a.startX
//                           : a.currentY - a.startY)
//                       );
//                   }
//                   s.followFinger &&
//                     !s.cssMode &&
//                     ((s.freeMode ||
//                       s.watchSlidesProgress ||
//                       s.watchSlidesVisibility) &&
//                       (this.updateActiveIndex(), this.updateSlidesClasses()),
//                     s.freeMode &&
//                       (0 === i.velocities.length &&
//                         i.velocities.push({
//                           position:
//                             a[this.isHorizontal() ? "startX" : "startY"],
//                           time: i.touchStartTime,
//                         }),
//                       i.velocities.push({
//                         position:
//                           a[this.isHorizontal() ? "currentX" : "currentY"],
//                         time: S(),
//                       })),
//                     this.updateProgress(i.currentTranslate),
//                     this.setTranslate(i.currentTranslate));
//                 }
//             }
//           }
//         } else
//           i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
//       }
//       function D(e) {
//         var t = this,
//           i = t.touchEventsData,
//           s = t.params,
//           a = t.touches,
//           r = t.rtlTranslate,
//           n = t.$wrapperEl,
//           o = t.slidesGrid,
//           l = t.snapGrid,
//           d = e;
//         if (
//           (d.originalEvent && (d = d.originalEvent),
//           i.allowTouchCallbacks && t.emit("touchEnd", d),
//           (i.allowTouchCallbacks = !1),
//           !i.isTouched)
//         )
//           return (
//             i.isMoved && s.grabCursor && t.setGrabCursor(!1),
//             (i.isMoved = !1),
//             void (i.startMoving = !1)
//           );
//         s.grabCursor &&
//           i.isMoved &&
//           i.isTouched &&
//           (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
//           t.setGrabCursor(!1);
//         var p,
//           h = S(),
//           c = h - i.touchStartTime;
//         if (
//           (t.allowClick &&
//             (t.updateClickedSlide(d),
//             t.emit("tap click", d),
//             c < 300 &&
//               h - i.lastClickTime < 300 &&
//               t.emit("doubleTap doubleClick", d)),
//           (i.lastClickTime = S()),
//           T(function () {
//             t.destroyed || (t.allowClick = !0);
//           }),
//           !i.isTouched ||
//             !i.isMoved ||
//             !t.swipeDirection ||
//             0 === a.diff ||
//             i.currentTranslate === i.startTranslate)
//         )
//           return (
//             (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
//           );
//         if (
//           ((i.isTouched = !1),
//           (i.isMoved = !1),
//           (i.startMoving = !1),
//           (p = s.followFinger
//             ? r
//               ? t.translate
//               : -t.translate
//             : -i.currentTranslate),
//           !s.cssMode)
//         )
//           if (s.freeMode) {
//             if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
//             if (p > -t.maxTranslate())
//               return void (t.slides.length < l.length
//                 ? t.slideTo(l.length - 1)
//                 : t.slideTo(t.slides.length - 1));
//             if (s.freeModeMomentum) {
//               if (i.velocities.length > 1) {
//                 var u = i.velocities.pop(),
//                   f = i.velocities.pop(),
//                   v = u.position - f.position,
//                   m = u.time - f.time;
//                 (t.velocity = v / m),
//                   (t.velocity /= 2),
//                   Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
//                     (t.velocity = 0),
//                   (m > 150 || S() - u.time > 300) && (t.velocity = 0);
//               } else t.velocity = 0;
//               (t.velocity *= s.freeModeMomentumVelocityRatio),
//                 (i.velocities.length = 0);
//               var g = 1e3 * s.freeModeMomentumRatio,
//                 w = t.velocity * g,
//                 y = t.translate + w;
//               r && (y = -y);
//               var b,
//                 x,
//                 C = !1,
//                 E = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
//               if (y < t.maxTranslate())
//                 s.freeModeMomentumBounce
//                   ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E),
//                     (b = t.maxTranslate()),
//                     (C = !0),
//                     (i.allowMomentumBounce = !0))
//                   : (y = t.maxTranslate()),
//                   s.loop && s.centeredSlides && (x = !0);
//               else if (y > t.minTranslate())
//                 s.freeModeMomentumBounce
//                   ? (y - t.minTranslate() > E && (y = t.minTranslate() + E),
//                     (b = t.minTranslate()),
//                     (C = !0),
//                     (i.allowMomentumBounce = !0))
//                   : (y = t.minTranslate()),
//                   s.loop && s.centeredSlides && (x = !0);
//               else if (s.freeModeSticky) {
//                 for (var k, $ = 0; $ < l.length; $ += 1)
//                   if (l[$] > -y) {
//                     k = $;
//                     break;
//                   }
//                 y = -(y =
//                   Math.abs(l[k] - y) < Math.abs(l[k - 1] - y) ||
//                   "next" === t.swipeDirection
//                     ? l[k]
//                     : l[k - 1]);
//               }
//               if (
//                 (x &&
//                   t.once("transitionEnd", function () {
//                     t.loopFix();
//                   }),
//                 0 !== t.velocity)
//               ) {
//                 if (
//                   ((g = r
//                     ? Math.abs((-y - t.translate) / t.velocity)
//                     : Math.abs((y - t.translate) / t.velocity)),
//                   s.freeModeSticky)
//                 ) {
//                   var M = Math.abs((r ? -y : y) - t.translate),
//                     z = t.slidesSizesGrid[t.activeIndex];
//                   g =
//                     M < z ? s.speed : M < 2 * z ? 1.5 * s.speed : 2.5 * s.speed;
//                 }
//               } else if (s.freeModeSticky) return void t.slideToClosest();
//               s.freeModeMomentumBounce && C
//                 ? (t.updateProgress(b),
//                   t.setTransition(g),
//                   t.setTranslate(y),
//                   t.transitionStart(!0, t.swipeDirection),
//                   (t.animating = !0),
//                   n.transitionEnd(function () {
//                     t &&
//                       !t.destroyed &&
//                       i.allowMomentumBounce &&
//                       (t.emit("momentumBounce"),
//                       t.setTransition(s.speed),
//                       setTimeout(function () {
//                         t.setTranslate(b),
//                           n.transitionEnd(function () {
//                             t && !t.destroyed && t.transitionEnd();
//                           });
//                       }, 0));
//                   }))
//                 : t.velocity
//                 ? (t.updateProgress(y),
//                   t.setTransition(g),
//                   t.setTranslate(y),
//                   t.transitionStart(!0, t.swipeDirection),
//                   t.animating ||
//                     ((t.animating = !0),
//                     n.transitionEnd(function () {
//                       t && !t.destroyed && t.transitionEnd();
//                     })))
//                 : t.updateProgress(y),
//                 t.updateActiveIndex(),
//                 t.updateSlidesClasses();
//             } else if (s.freeModeSticky) return void t.slideToClosest();
//             (!s.freeModeMomentum || c >= s.longSwipesMs) &&
//               (t.updateProgress(),
//               t.updateActiveIndex(),
//               t.updateSlidesClasses());
//           } else {
//             for (
//               var P = 0, L = t.slidesSizesGrid[0], O = 0;
//               O < o.length;
//               O += O < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
//             ) {
//               var A = O < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
//               void 0 !== o[O + A]
//                 ? p >= o[O] && p < o[O + A] && ((P = O), (L = o[O + A] - o[O]))
//                 : p >= o[O] &&
//                   ((P = O), (L = o[o.length - 1] - o[o.length - 2]));
//             }
//             var I = (p - o[P]) / L,
//               D = P < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
//             if (c > s.longSwipesMs) {
//               if (!s.longSwipes) return void t.slideTo(t.activeIndex);
//               "next" === t.swipeDirection &&
//                 (I >= s.longSwipesRatio ? t.slideTo(P + D) : t.slideTo(P)),
//                 "prev" === t.swipeDirection &&
//                   (I > 1 - s.longSwipesRatio ? t.slideTo(P + D) : t.slideTo(P));
//             } else {
//               if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
//               !t.navigation ||
//               (d.target !== t.navigation.nextEl &&
//                 d.target !== t.navigation.prevEl)
//                 ? ("next" === t.swipeDirection && t.slideTo(P + D),
//                   "prev" === t.swipeDirection && t.slideTo(P))
//                 : d.target === t.navigation.nextEl
//                 ? t.slideTo(P + D)
//                 : t.slideTo(P);
//             }
//           }
//       }
//       function H() {
//         var e = this.params,
//           t = this.el;
//         if (!t || 0 !== t.offsetWidth) {
//           e.breakpoints && this.setBreakpoint();
//           var i = this.allowSlideNext,
//             s = this.allowSlidePrev,
//             a = this.snapGrid;
//           (this.allowSlideNext = !0),
//             (this.allowSlidePrev = !0),
//             this.updateSize(),
//             this.updateSlides(),
//             this.updateSlidesClasses(),
//             ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
//             this.isEnd &&
//             !this.isBeginning &&
//             !this.params.centeredSlides
//               ? this.slideTo(this.slides.length - 1, 0, !1, !0)
//               : this.slideTo(this.activeIndex, 0, !1, !0),
//             this.autoplay &&
//               this.autoplay.running &&
//               this.autoplay.paused &&
//               this.autoplay.run(),
//             (this.allowSlidePrev = s),
//             (this.allowSlideNext = i),
//             this.params.watchOverflow &&
//               a !== this.snapGrid &&
//               this.checkOverflow();
//         }
//       }
//       function N(e) {
//         this.allowClick ||
//           (this.params.preventClicks && e.preventDefault(),
//           this.params.preventClicksPropagation &&
//             this.animating &&
//             (e.stopPropagation(), e.stopImmediatePropagation()));
//       }
//       function B() {
//         var e = this.wrapperEl,
//           t = this.rtlTranslate;
//         (this.previousTranslate = this.translate),
//           this.isHorizontal()
//             ? (this.translate = t
//                 ? e.scrollWidth - e.offsetWidth - e.scrollLeft
//                 : -e.scrollLeft)
//             : (this.translate = -e.scrollTop),
//           -0 === this.translate && (this.translate = 0),
//           this.updateActiveIndex(),
//           this.updateSlidesClasses();
//         var i = this.maxTranslate() - this.minTranslate();
//         (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !==
//           this.progress &&
//           this.updateProgress(t ? -this.translate : this.translate),
//           this.emit("setTranslate", this.translate, !1);
//       }
//       var G = !1;
//       function W() {}
//       var X = {
//           init: !0,
//           direction: "horizontal",
//           touchEventsTarget: "container",
//           initialSlide: 0,
//           speed: 300,
//           cssMode: !1,
//           updateOnWindowResize: !0,
//           nested: !1,
//           width: null,
//           height: null,
//           preventInteractionOnTransition: !1,
//           userAgent: null,
//           url: null,
//           edgeSwipeDetection: !1,
//           edgeSwipeThreshold: 20,
//           freeMode: !1,
//           freeModeMomentum: !0,
//           freeModeMomentumRatio: 1,
//           freeModeMomentumBounce: !0,
//           freeModeMomentumBounceRatio: 1,
//           freeModeMomentumVelocityRatio: 1,
//           freeModeSticky: !1,
//           freeModeMinimumVelocity: 0.02,
//           autoHeight: !1,
//           setWrapperSize: !1,
//           virtualTranslate: !1,
//           effect: "slide",
//           breakpoints: void 0,
//           spaceBetween: 0,
//           slidesPerView: 1,
//           slidesPerColumn: 1,
//           slidesPerColumnFill: "column",
//           slidesPerGroup: 1,
//           slidesPerGroupSkip: 0,
//           centeredSlides: !1,
//           centeredSlidesBounds: !1,
//           slidesOffsetBefore: 0,
//           slidesOffsetAfter: 0,
//           normalizeSlideIndex: !0,
//           centerInsufficientSlides: !1,
//           watchOverflow: !1,
//           roundLengths: !1,
//           touchRatio: 1,
//           touchAngle: 45,
//           simulateTouch: !0,
//           shortSwipes: !0,
//           longSwipes: !0,
//           longSwipesRatio: 0.5,
//           longSwipesMs: 300,
//           followFinger: !0,
//           allowTouchMove: !0,
//           threshold: 0,
//           touchMoveStopPropagation: !1,
//           touchStartPreventDefault: !0,
//           touchStartForcePreventDefault: !1,
//           touchReleaseOnEdges: !1,
//           uniqueNavElements: !0,
//           resistance: !0,
//           resistanceRatio: 0.85,
//           watchSlidesProgress: !1,
//           watchSlidesVisibility: !1,
//           grabCursor: !1,
//           preventClicks: !0,
//           preventClicksPropagation: !0,
//           slideToClickedSlide: !1,
//           preloadImages: !0,
//           updateOnImagesReady: !0,
//           loop: !1,
//           loopAdditionalSlides: 0,
//           loopedSlides: null,
//           loopFillGroupWithBlank: !1,
//           loopPreventsSlide: !0,
//           allowSlidePrev: !0,
//           allowSlideNext: !0,
//           swipeHandler: null,
//           noSwiping: !0,
//           noSwipingClass: "swiper-no-swiping",
//           noSwipingSelector: null,
//           passiveListeners: !0,
//           containerModifierClass: "swiper-container-",
//           slideClass: "swiper-slide",
//           slideBlankClass: "swiper-slide-invisible-blank",
//           slideActiveClass: "swiper-slide-active",
//           slideDuplicateActiveClass: "swiper-slide-duplicate-active",
//           slideVisibleClass: "swiper-slide-visible",
//           slideDuplicateClass: "swiper-slide-duplicate",
//           slideNextClass: "swiper-slide-next",
//           slideDuplicateNextClass: "swiper-slide-duplicate-next",
//           slidePrevClass: "swiper-slide-prev",
//           slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
//           wrapperClass: "swiper-wrapper",
//           runCallbacksOnInit: !0,
//           _emitClasses: !1,
//         },
//         Y = {
//           modular: {
//             useParams: function (e) {
//               var t = this;
//               t.modules &&
//                 Object.keys(t.modules).forEach(function (i) {
//                   var s = t.modules[i];
//                   s.params && E(e, s.params);
//                 });
//             },
//             useModules: function (e) {
//               void 0 === e && (e = {});
//               var t = this;
//               t.modules &&
//                 Object.keys(t.modules).forEach(function (i) {
//                   var s = t.modules[i],
//                     a = e[i] || {};
//                   s.on &&
//                     t.on &&
//                     Object.keys(s.on).forEach(function (e) {
//                       t.on(e, s.on[e]);
//                     }),
//                     s.create && s.create.bind(t)(a);
//                 });
//             },
//           },
//           eventsEmitter: {
//             on: function (e, t, i) {
//               var s = this;
//               if ("function" != typeof t) return s;
//               var a = i ? "unshift" : "push";
//               return (
//                 e.split(" ").forEach(function (e) {
//                   s.eventsListeners[e] || (s.eventsListeners[e] = []),
//                     s.eventsListeners[e][a](t);
//                 }),
//                 s
//               );
//             },
//             once: function (e, t, i) {
//               var s = this;
//               if ("function" != typeof t) return s;
//               function a() {
//                 s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
//                 for (
//                   var i = arguments.length, r = new Array(i), n = 0;
//                   n < i;
//                   n++
//                 )
//                   r[n] = arguments[n];
//                 t.apply(s, r);
//               }
//               return (a.__emitterProxy = t), s.on(e, a, i);
//             },
//             onAny: function (e, t) {
//               if ("function" != typeof e) return this;
//               var i = t ? "unshift" : "push";
//               return (
//                 this.eventsAnyListeners.indexOf(e) < 0 &&
//                   this.eventsAnyListeners[i](e),
//                 this
//               );
//             },
//             offAny: function (e) {
//               if (!this.eventsAnyListeners) return this;
//               var t = this.eventsAnyListeners.indexOf(e);
//               return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
//             },
//             off: function (e, t) {
//               var i = this;
//               return i.eventsListeners
//                 ? (e.split(" ").forEach(function (e) {
//                     void 0 === t
//                       ? (i.eventsListeners[e] = [])
//                       : i.eventsListeners[e] &&
//                         i.eventsListeners[e].forEach(function (s, a) {
//                           (s === t ||
//                             (s.__emitterProxy && s.__emitterProxy === t)) &&
//                             i.eventsListeners[e].splice(a, 1);
//                         });
//                   }),
//                   i)
//                 : i;
//             },
//             emit: function () {
//               var e,
//                 t,
//                 i,
//                 s = this;
//               if (!s.eventsListeners) return s;
//               for (
//                 var a = arguments.length, r = new Array(a), n = 0;
//                 n < a;
//                 n++
//               )
//                 r[n] = arguments[n];
//               "string" == typeof r[0] || Array.isArray(r[0])
//                 ? ((e = r[0]), (t = r.slice(1, r.length)), (i = s))
//                 : ((e = r[0].events), (t = r[0].data), (i = r[0].context || s)),
//                 t.unshift(i);
//               var o = Array.isArray(e) ? e : e.split(" ");
//               return (
//                 o.forEach(function (e) {
//                   s.eventsAnyListeners &&
//                     s.eventsAnyListeners.length &&
//                     s.eventsAnyListeners.forEach(function (s) {
//                       s.apply(i, [e].concat(t));
//                     }),
//                     s.eventsListeners &&
//                       s.eventsListeners[e] &&
//                       s.eventsListeners[e].forEach(function (e) {
//                         e.apply(i, t);
//                       });
//                 }),
//                 s
//               );
//             },
//           },
//           update: {
//             updateSize: function () {
//               var e,
//                 t,
//                 i = this.$el;
//               (e =
//                 void 0 !== this.params.width && null !== this.params.width
//                   ? this.params.width
//                   : i[0].clientWidth),
//                 (t =
//                   void 0 !== this.params.height && null !== this.params.height
//                     ? this.params.height
//                     : i[0].clientHeight),
//                 (0 === e && this.isHorizontal()) ||
//                   (0 === t && this.isVertical()) ||
//                   ((e =
//                     e -
//                     parseInt(i.css("padding-left") || 0, 10) -
//                     parseInt(i.css("padding-right") || 0, 10)),
//                   (t =
//                     t -
//                     parseInt(i.css("padding-top") || 0, 10) -
//                     parseInt(i.css("padding-bottom") || 0, 10)),
//                   Number.isNaN(e) && (e = 0),
//                   Number.isNaN(t) && (t = 0),
//                   E(this, {
//                     width: e,
//                     height: t,
//                     size: this.isHorizontal() ? e : t,
//                   }));
//             },
//             updateSlides: function () {
//               var e = o(),
//                 t = this.params,
//                 i = this.$wrapperEl,
//                 s = this.size,
//                 a = this.rtlTranslate,
//                 r = this.wrongRTL,
//                 n = this.virtual && t.virtual.enabled,
//                 l = n ? this.virtual.slides.length : this.slides.length,
//                 d = i.children("." + this.params.slideClass),
//                 p = n ? this.virtual.slides.length : d.length,
//                 h = [],
//                 c = [],
//                 u = [];
//               function f(e, i) {
//                 return !t.cssMode || i !== d.length - 1;
//               }
//               var v = t.slidesOffsetBefore;
//               "function" == typeof v && (v = t.slidesOffsetBefore.call(this));
//               var m = t.slidesOffsetAfter;
//               "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
//               var g = this.snapGrid.length,
//                 w = this.slidesGrid.length,
//                 y = t.spaceBetween,
//                 b = -v,
//                 T = 0,
//                 S = 0;
//               if (void 0 !== s) {
//                 var x, C;
//                 "string" == typeof y &&
//                   y.indexOf("%") >= 0 &&
//                   (y = (parseFloat(y.replace("%", "")) / 100) * s),
//                   (this.virtualSize = -y),
//                   a
//                     ? d.css({ marginLeft: "", marginTop: "" })
//                     : d.css({ marginRight: "", marginBottom: "" }),
//                   t.slidesPerColumn > 1 &&
//                     ((x =
//                       Math.floor(p / t.slidesPerColumn) ===
//                       p / this.params.slidesPerColumn
//                         ? p
//                         : Math.ceil(p / t.slidesPerColumn) * t.slidesPerColumn),
//                     "auto" !== t.slidesPerView &&
//                       "row" === t.slidesPerColumnFill &&
//                       (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
//                 for (
//                   var k,
//                     $ = t.slidesPerColumn,
//                     M = x / $,
//                     z = Math.floor(p / t.slidesPerColumn),
//                     P = 0;
//                   P < p;
//                   P += 1
//                 ) {
//                   C = 0;
//                   var L = d.eq(P);
//                   if (t.slidesPerColumn > 1) {
//                     var O = void 0,
//                       A = void 0,
//                       I = void 0;
//                     if (
//                       "row" === t.slidesPerColumnFill &&
//                       t.slidesPerGroup > 1
//                     ) {
//                       var D = Math.floor(
//                           P / (t.slidesPerGroup * t.slidesPerColumn)
//                         ),
//                         H = P - t.slidesPerColumn * t.slidesPerGroup * D,
//                         N =
//                           0 === D
//                             ? t.slidesPerGroup
//                             : Math.min(
//                                 Math.ceil((p - D * $ * t.slidesPerGroup) / $),
//                                 t.slidesPerGroup
//                               );
//                       (O =
//                         (A =
//                           H -
//                           (I = Math.floor(H / N)) * N +
//                           D * t.slidesPerGroup) +
//                         (I * x) / $),
//                         L.css({
//                           "-webkit-box-ordinal-group": O,
//                           "-moz-box-ordinal-group": O,
//                           "-ms-flex-order": O,
//                           "-webkit-order": O,
//                           order: O,
//                         });
//                     } else
//                       "column" === t.slidesPerColumnFill
//                         ? ((I = P - (A = Math.floor(P / $)) * $),
//                           (A > z || (A === z && I === $ - 1)) &&
//                             (I += 1) >= $ &&
//                             ((I = 0), (A += 1)))
//                         : (A = P - (I = Math.floor(P / M)) * M);
//                     L.css(
//                       "margin-" + (this.isHorizontal() ? "top" : "left"),
//                       0 !== I && t.spaceBetween && t.spaceBetween + "px"
//                     );
//                   }
//                   if ("none" !== L.css("display")) {
//                     if ("auto" === t.slidesPerView) {
//                       var B = e.getComputedStyle(L[0], null),
//                         G = L[0].style.transform,
//                         W = L[0].style.webkitTransform;
//                       if (
//                         (G && (L[0].style.transform = "none"),
//                         W && (L[0].style.webkitTransform = "none"),
//                         t.roundLengths)
//                       )
//                         C = this.isHorizontal()
//                           ? L.outerWidth(!0)
//                           : L.outerHeight(!0);
//                       else if (this.isHorizontal()) {
//                         var X = parseFloat(B.getPropertyValue("width") || 0),
//                           Y = parseFloat(
//                             B.getPropertyValue("padding-left") || 0
//                           ),
//                           F = parseFloat(
//                             B.getPropertyValue("padding-right") || 0
//                           ),
//                           R = parseFloat(
//                             B.getPropertyValue("margin-left") || 0
//                           ),
//                           j = parseFloat(
//                             B.getPropertyValue("margin-right") || 0
//                           ),
//                           _ = B.getPropertyValue("box-sizing");
//                         if (_ && "border-box" === _) C = X + R + j;
//                         else {
//                           var V = L[0],
//                             q = V.clientWidth;
//                           C = X + Y + F + R + j + (V.offsetWidth - q);
//                         }
//                       } else {
//                         var U = parseFloat(B.getPropertyValue("height") || 0),
//                           K = parseFloat(
//                             B.getPropertyValue("padding-top") || 0
//                           ),
//                           J = parseFloat(
//                             B.getPropertyValue("padding-bottom") || 0
//                           ),
//                           Z = parseFloat(B.getPropertyValue("margin-top") || 0),
//                           Q = parseFloat(
//                             B.getPropertyValue("margin-bottom") || 0
//                           ),
//                           ee = B.getPropertyValue("box-sizing");
//                         if (ee && "border-box" === ee) C = U + Z + Q;
//                         else {
//                           var te = L[0],
//                             ie = te.clientHeight;
//                           C = U + K + J + Z + Q + (te.offsetHeight - ie);
//                         }
//                       }
//                       G && (L[0].style.transform = G),
//                         W && (L[0].style.webkitTransform = W),
//                         t.roundLengths && (C = Math.floor(C));
//                     } else
//                       (C = (s - (t.slidesPerView - 1) * y) / t.slidesPerView),
//                         t.roundLengths && (C = Math.floor(C)),
//                         d[P] &&
//                           (this.isHorizontal()
//                             ? (d[P].style.width = C + "px")
//                             : (d[P].style.height = C + "px"));
//                     d[P] && (d[P].swiperSlideSize = C),
//                       u.push(C),
//                       t.centeredSlides
//                         ? ((b = b + C / 2 + T / 2 + y),
//                           0 === T && 0 !== P && (b = b - s / 2 - y),
//                           0 === P && (b = b - s / 2 - y),
//                           Math.abs(b) < 0.001 && (b = 0),
//                           t.roundLengths && (b = Math.floor(b)),
//                           S % t.slidesPerGroup == 0 && h.push(b),
//                           c.push(b))
//                         : (t.roundLengths && (b = Math.floor(b)),
//                           (S - Math.min(this.params.slidesPerGroupSkip, S)) %
//                             this.params.slidesPerGroup ==
//                             0 && h.push(b),
//                           c.push(b),
//                           (b = b + C + y)),
//                       (this.virtualSize += C + y),
//                       (T = C),
//                       (S += 1);
//                   }
//                 }
//                 if (
//                   ((this.virtualSize = Math.max(this.virtualSize, s) + m),
//                   a &&
//                     r &&
//                     ("slide" === t.effect || "coverflow" === t.effect) &&
//                     i.css({ width: this.virtualSize + t.spaceBetween + "px" }),
//                   t.setWrapperSize &&
//                     (this.isHorizontal()
//                       ? i.css({
//                           width: this.virtualSize + t.spaceBetween + "px",
//                         })
//                       : i.css({
//                           height: this.virtualSize + t.spaceBetween + "px",
//                         })),
//                   t.slidesPerColumn > 1 &&
//                     ((this.virtualSize = (C + t.spaceBetween) * x),
//                     (this.virtualSize =
//                       Math.ceil(this.virtualSize / t.slidesPerColumn) -
//                       t.spaceBetween),
//                     this.isHorizontal()
//                       ? i.css({
//                           width: this.virtualSize + t.spaceBetween + "px",
//                         })
//                       : i.css({
//                           height: this.virtualSize + t.spaceBetween + "px",
//                         }),
//                     t.centeredSlides))
//                 ) {
//                   k = [];
//                   for (var se = 0; se < h.length; se += 1) {
//                     var ae = h[se];
//                     t.roundLengths && (ae = Math.floor(ae)),
//                       h[se] < this.virtualSize + h[0] && k.push(ae);
//                   }
//                   h = k;
//                 }
//                 if (!t.centeredSlides) {
//                   k = [];
//                   for (var re = 0; re < h.length; re += 1) {
//                     var ne = h[re];
//                     t.roundLengths && (ne = Math.floor(ne)),
//                       h[re] <= this.virtualSize - s && k.push(ne);
//                   }
//                   (h = k),
//                     Math.floor(this.virtualSize - s) -
//                       Math.floor(h[h.length - 1]) >
//                       1 && h.push(this.virtualSize - s);
//                 }
//                 if (
//                   (0 === h.length && (h = [0]),
//                   0 !== t.spaceBetween &&
//                     (this.isHorizontal()
//                       ? a
//                         ? d.filter(f).css({ marginLeft: y + "px" })
//                         : d.filter(f).css({ marginRight: y + "px" })
//                       : d.filter(f).css({ marginBottom: y + "px" })),
//                   t.centeredSlides && t.centeredSlidesBounds)
//                 ) {
//                   var oe = 0;
//                   u.forEach(function (e) {
//                     oe += e + (t.spaceBetween ? t.spaceBetween : 0);
//                   });
//                   var le = (oe -= t.spaceBetween) - s;
//                   h = h.map(function (e) {
//                     return e < 0 ? -v : e > le ? le + m : e;
//                   });
//                 }
//                 if (t.centerInsufficientSlides) {
//                   var de = 0;
//                   if (
//                     (u.forEach(function (e) {
//                       de += e + (t.spaceBetween ? t.spaceBetween : 0);
//                     }),
//                     (de -= t.spaceBetween) < s)
//                   ) {
//                     var pe = (s - de) / 2;
//                     h.forEach(function (e, t) {
//                       h[t] = e - pe;
//                     }),
//                       c.forEach(function (e, t) {
//                         c[t] = e + pe;
//                       });
//                   }
//                 }
//                 E(this, {
//                   slides: d,
//                   snapGrid: h,
//                   slidesGrid: c,
//                   slidesSizesGrid: u,
//                 }),
//                   p !== l && this.emit("slidesLengthChange"),
//                   h.length !== g &&
//                     (this.params.watchOverflow && this.checkOverflow(),
//                     this.emit("snapGridLengthChange")),
//                   c.length !== w && this.emit("slidesGridLengthChange"),
//                   (t.watchSlidesProgress || t.watchSlidesVisibility) &&
//                     this.updateSlidesOffset();
//               }
//             },
//             updateAutoHeight: function (e) {
//               var t,
//                 i = [],
//                 s = 0;
//               if (
//                 ("number" == typeof e
//                   ? this.setTransition(e)
//                   : !0 === e && this.setTransition(this.params.speed),
//                 "auto" !== this.params.slidesPerView &&
//                   this.params.slidesPerView > 1)
//               )
//                 if (this.params.centeredSlides)
//                   this.visibleSlides.each(function (e) {
//                     i.push(e);
//                   });
//                 else
//                   for (
//                     t = 0;
//                     t < Math.ceil(this.params.slidesPerView);
//                     t += 1
//                   ) {
//                     var a = this.activeIndex + t;
//                     if (a > this.slides.length) break;
//                     i.push(this.slides.eq(a)[0]);
//                   }
//               else i.push(this.slides.eq(this.activeIndex)[0]);
//               for (t = 0; t < i.length; t += 1)
//                 if (void 0 !== i[t]) {
//                   var r = i[t].offsetHeight;
//                   s = r > s ? r : s;
//                 }
//               s && this.$wrapperEl.css("height", s + "px");
//             },
//             updateSlidesOffset: function () {
//               for (var e = this.slides, t = 0; t < e.length; t += 1)
//                 e[t].swiperSlideOffset = this.isHorizontal()
//                   ? e[t].offsetLeft
//                   : e[t].offsetTop;
//             },
//             updateSlidesProgress: function (e) {
//               void 0 === e && (e = (this && this.translate) || 0);
//               var t = this.params,
//                 i = this.slides,
//                 s = this.rtlTranslate;
//               if (0 !== i.length) {
//                 void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
//                 var a = -e;
//                 s && (a = e),
//                   i.removeClass(t.slideVisibleClass),
//                   (this.visibleSlidesIndexes = []),
//                   (this.visibleSlides = []);
//                 for (var r = 0; r < i.length; r += 1) {
//                   var n = i[r],
//                     o =
//                       (a +
//                         (t.centeredSlides ? this.minTranslate() : 0) -
//                         n.swiperSlideOffset) /
//                       (n.swiperSlideSize + t.spaceBetween);
//                   if (
//                     t.watchSlidesVisibility ||
//                     (t.centeredSlides && t.autoHeight)
//                   ) {
//                     var l = -(a - n.swiperSlideOffset),
//                       d = l + this.slidesSizesGrid[r];
//                     ((l >= 0 && l < this.size - 1) ||
//                       (d > 1 && d <= this.size) ||
//                       (l <= 0 && d >= this.size)) &&
//                       (this.visibleSlides.push(n),
//                       this.visibleSlidesIndexes.push(r),
//                       i.eq(r).addClass(t.slideVisibleClass));
//                   }
//                   n.progress = s ? -o : o;
//                 }
//                 this.visibleSlides = m(this.visibleSlides);
//               }
//             },
//             updateProgress: function (e) {
//               if (void 0 === e) {
//                 var t = this.rtlTranslate ? -1 : 1;
//                 e = (this && this.translate && this.translate * t) || 0;
//               }
//               var i = this.params,
//                 s = this.maxTranslate() - this.minTranslate(),
//                 a = this.progress,
//                 r = this.isBeginning,
//                 n = this.isEnd,
//                 o = r,
//                 l = n;
//               0 === s
//                 ? ((a = 0), (r = !0), (n = !0))
//                 : ((r = (a = (e - this.minTranslate()) / s) <= 0),
//                   (n = a >= 1)),
//                 E(this, { progress: a, isBeginning: r, isEnd: n }),
//                 (i.watchSlidesProgress ||
//                   i.watchSlidesVisibility ||
//                   (i.centeredSlides && i.autoHeight)) &&
//                   this.updateSlidesProgress(e),
//                 r && !o && this.emit("reachBeginning toEdge"),
//                 n && !l && this.emit("reachEnd toEdge"),
//                 ((o && !r) || (l && !n)) && this.emit("fromEdge"),
//                 this.emit("progress", a);
//             },
//             updateSlidesClasses: function () {
//               var e,
//                 t = this.slides,
//                 i = this.params,
//                 s = this.$wrapperEl,
//                 a = this.activeIndex,
//                 r = this.realIndex,
//                 n = this.virtual && i.virtual.enabled;
//               t.removeClass(
//                 i.slideActiveClass +
//                   " " +
//                   i.slideNextClass +
//                   " " +
//                   i.slidePrevClass +
//                   " " +
//                   i.slideDuplicateActiveClass +
//                   " " +
//                   i.slideDuplicateNextClass +
//                   " " +
//                   i.slideDuplicatePrevClass
//               ),
//                 (e = n
//                   ? this.$wrapperEl.find(
//                       "." +
//                         i.slideClass +
//                         '[data-swiper-slide-index="' +
//                         a +
//                         '"]'
//                     )
//                   : t.eq(a)).addClass(i.slideActiveClass),
//                 i.loop &&
//                   (e.hasClass(i.slideDuplicateClass)
//                     ? s
//                         .children(
//                           "." +
//                             i.slideClass +
//                             ":not(." +
//                             i.slideDuplicateClass +
//                             ')[data-swiper-slide-index="' +
//                             r +
//                             '"]'
//                         )
//                         .addClass(i.slideDuplicateActiveClass)
//                     : s
//                         .children(
//                           "." +
//                             i.slideClass +
//                             "." +
//                             i.slideDuplicateClass +
//                             '[data-swiper-slide-index="' +
//                             r +
//                             '"]'
//                         )
//                         .addClass(i.slideDuplicateActiveClass));
//               var o = e
//                 .nextAll("." + i.slideClass)
//                 .eq(0)
//                 .addClass(i.slideNextClass);
//               i.loop &&
//                 0 === o.length &&
//                 (o = t.eq(0)).addClass(i.slideNextClass);
//               var l = e
//                 .prevAll("." + i.slideClass)
//                 .eq(0)
//                 .addClass(i.slidePrevClass);
//               i.loop &&
//                 0 === l.length &&
//                 (l = t.eq(-1)).addClass(i.slidePrevClass),
//                 i.loop &&
//                   (o.hasClass(i.slideDuplicateClass)
//                     ? s
//                         .children(
//                           "." +
//                             i.slideClass +
//                             ":not(." +
//                             i.slideDuplicateClass +
//                             ')[data-swiper-slide-index="' +
//                             o.attr("data-swiper-slide-index") +
//                             '"]'
//                         )
//                         .addClass(i.slideDuplicateNextClass)
//                     : s
//                         .children(
//                           "." +
//                             i.slideClass +
//                             "." +
//                             i.slideDuplicateClass +
//                             '[data-swiper-slide-index="' +
//                             o.attr("data-swiper-slide-index") +
//                             '"]'
//                         )
//                         .addClass(i.slideDuplicateNextClass),
//                   l.hasClass(i.slideDuplicateClass)
//                     ? s
//                         .children(
//                           "." +
//                             i.slideClass +
//                             ":not(." +
//                             i.slideDuplicateClass +
//                             ')[data-swiper-slide-index="' +
//                             l.attr("data-swiper-slide-index") +
//                             '"]'
//                         )
//                         .addClass(i.slideDuplicatePrevClass)
//                     : s
//                         .children(
//                           "." +
//                             i.slideClass +
//                             "." +
//                             i.slideDuplicateClass +
//                             '[data-swiper-slide-index="' +
//                             l.attr("data-swiper-slide-index") +
//                             '"]'
//                         )
//                         .addClass(i.slideDuplicatePrevClass)),
//                 this.emitSlidesClasses();
//             },
//             updateActiveIndex: function (e) {
//               var t,
//                 i = this.rtlTranslate ? this.translate : -this.translate,
//                 s = this.slidesGrid,
//                 a = this.snapGrid,
//                 r = this.params,
//                 n = this.activeIndex,
//                 o = this.realIndex,
//                 l = this.snapIndex,
//                 d = e;
//               if (void 0 === d) {
//                 for (var p = 0; p < s.length; p += 1)
//                   void 0 !== s[p + 1]
//                     ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2
//                       ? (d = p)
//                       : i >= s[p] && i < s[p + 1] && (d = p + 1)
//                     : i >= s[p] && (d = p);
//                 r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
//               }
//               if (a.indexOf(i) >= 0) t = a.indexOf(i);
//               else {
//                 var h = Math.min(r.slidesPerGroupSkip, d);
//                 t = h + Math.floor((d - h) / r.slidesPerGroup);
//               }
//               if ((t >= a.length && (t = a.length - 1), d !== n)) {
//                 var c = parseInt(
//                   this.slides.eq(d).attr("data-swiper-slide-index") || d,
//                   10
//                 );
//                 E(this, {
//                   snapIndex: t,
//                   realIndex: c,
//                   previousIndex: n,
//                   activeIndex: d,
//                 }),
//                   this.emit("activeIndexChange"),
//                   this.emit("snapIndexChange"),
//                   o !== c && this.emit("realIndexChange"),
//                   (this.initialized || this.params.runCallbacksOnInit) &&
//                     this.emit("slideChange");
//               } else
//                 t !== l && ((this.snapIndex = t), this.emit("snapIndexChange"));
//             },
//             updateClickedSlide: function (e) {
//               var t = this.params,
//                 i = m(e.target).closest("." + t.slideClass)[0],
//                 s = !1;
//               if (i)
//                 for (var a = 0; a < this.slides.length; a += 1)
//                   this.slides[a] === i && (s = !0);
//               if (!i || !s)
//                 return (
//                   (this.clickedSlide = void 0),
//                   void (this.clickedIndex = void 0)
//                 );
//               (this.clickedSlide = i),
//                 this.virtual && this.params.virtual.enabled
//                   ? (this.clickedIndex = parseInt(
//                       m(i).attr("data-swiper-slide-index"),
//                       10
//                     ))
//                   : (this.clickedIndex = m(i).index()),
//                 t.slideToClickedSlide &&
//                   void 0 !== this.clickedIndex &&
//                   this.clickedIndex !== this.activeIndex &&
//                   this.slideToClickedSlide();
//             },
//           },
//           translate: {
//             getTranslate: function (e) {
//               void 0 === e && (e = this.isHorizontal() ? "x" : "y");
//               var t = this.params,
//                 i = this.rtlTranslate,
//                 s = this.translate,
//                 a = this.$wrapperEl;
//               if (t.virtualTranslate) return i ? -s : s;
//               if (t.cssMode) return s;
//               var r = x(a[0], e);
//               return i && (r = -r), r || 0;
//             },
//             setTranslate: function (e, t) {
//               var i = this.rtlTranslate,
//                 s = this.params,
//                 a = this.$wrapperEl,
//                 r = this.wrapperEl,
//                 n = this.progress,
//                 o = 0,
//                 l = 0;
//               this.isHorizontal() ? (o = i ? -e : e) : (l = e),
//                 s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
//                 s.cssMode
//                   ? (r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
//                       this.isHorizontal() ? -o : -l)
//                   : s.virtualTranslate ||
//                     a.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
//                 (this.previousTranslate = this.translate),
//                 (this.translate = this.isHorizontal() ? o : l);
//               var d = this.maxTranslate() - this.minTranslate();
//               (0 === d ? 0 : (e - this.minTranslate()) / d) !== n &&
//                 this.updateProgress(e),
//                 this.emit("setTranslate", this.translate, t);
//             },
//             minTranslate: function () {
//               return -this.snapGrid[0];
//             },
//             maxTranslate: function () {
//               return -this.snapGrid[this.snapGrid.length - 1];
//             },
//             translateTo: function (e, t, i, s, a) {
//               void 0 === e && (e = 0),
//                 void 0 === t && (t = this.params.speed),
//                 void 0 === i && (i = !0),
//                 void 0 === s && (s = !0);
//               var r = this,
//                 n = r.params,
//                 o = r.wrapperEl;
//               if (r.animating && n.preventInteractionOnTransition) return !1;
//               var l,
//                 d = r.minTranslate(),
//                 p = r.maxTranslate();
//               if (
//                 ((l = s && e > d ? d : s && e < p ? p : e),
//                 r.updateProgress(l),
//                 n.cssMode)
//               ) {
//                 var h,
//                   c = r.isHorizontal();
//                 return (
//                   0 === t
//                     ? (o[c ? "scrollLeft" : "scrollTop"] = -l)
//                     : o.scrollTo
//                     ? o.scrollTo(
//                         (((h = {})[c ? "left" : "top"] = -l),
//                         (h.behavior = "smooth"),
//                         h)
//                       )
//                     : (o[c ? "scrollLeft" : "scrollTop"] = -l),
//                   !0
//                 );
//               }
//               return (
//                 0 === t
//                   ? (r.setTransition(0),
//                     r.setTranslate(l),
//                     i &&
//                       (r.emit("beforeTransitionStart", t, a),
//                       r.emit("transitionEnd")))
//                   : (r.setTransition(t),
//                     r.setTranslate(l),
//                     i &&
//                       (r.emit("beforeTransitionStart", t, a),
//                       r.emit("transitionStart")),
//                     r.animating ||
//                       ((r.animating = !0),
//                       r.onTranslateToWrapperTransitionEnd ||
//                         (r.onTranslateToWrapperTransitionEnd = function (e) {
//                           r &&
//                             !r.destroyed &&
//                             e.target === this &&
//                             (r.$wrapperEl[0].removeEventListener(
//                               "transitionend",
//                               r.onTranslateToWrapperTransitionEnd
//                             ),
//                             r.$wrapperEl[0].removeEventListener(
//                               "webkitTransitionEnd",
//                               r.onTranslateToWrapperTransitionEnd
//                             ),
//                             (r.onTranslateToWrapperTransitionEnd = null),
//                             delete r.onTranslateToWrapperTransitionEnd,
//                             i && r.emit("transitionEnd"));
//                         }),
//                       r.$wrapperEl[0].addEventListener(
//                         "transitionend",
//                         r.onTranslateToWrapperTransitionEnd
//                       ),
//                       r.$wrapperEl[0].addEventListener(
//                         "webkitTransitionEnd",
//                         r.onTranslateToWrapperTransitionEnd
//                       ))),
//                 !0
//               );
//             },
//           },
//           transition: {
//             setTransition: function (e, t) {
//               this.params.cssMode || this.$wrapperEl.transition(e),
//                 this.emit("setTransition", e, t);
//             },
//             transitionStart: function (e, t) {
//               void 0 === e && (e = !0);
//               var i = this.activeIndex,
//                 s = this.params,
//                 a = this.previousIndex;
//               if (!s.cssMode) {
//                 s.autoHeight && this.updateAutoHeight();
//                 var r = t;
//                 if (
//                   (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
//                   this.emit("transitionStart"),
//                   e && i !== a)
//                 ) {
//                   if ("reset" === r)
//                     return void this.emit("slideResetTransitionStart");
//                   this.emit("slideChangeTransitionStart"),
//                     "next" === r
//                       ? this.emit("slideNextTransitionStart")
//                       : this.emit("slidePrevTransitionStart");
//                 }
//               }
//             },
//             transitionEnd: function (e, t) {
//               void 0 === e && (e = !0);
//               var i = this.activeIndex,
//                 s = this.previousIndex,
//                 a = this.params;
//               if (((this.animating = !1), !a.cssMode)) {
//                 this.setTransition(0);
//                 var r = t;
//                 if (
//                   (r || (r = i > s ? "next" : i < s ? "prev" : "reset"),
//                   this.emit("transitionEnd"),
//                   e && i !== s)
//                 ) {
//                   if ("reset" === r)
//                     return void this.emit("slideResetTransitionEnd");
//                   this.emit("slideChangeTransitionEnd"),
//                     "next" === r
//                       ? this.emit("slideNextTransitionEnd")
//                       : this.emit("slidePrevTransitionEnd");
//                 }
//               }
//             },
//           },
//           slide: {
//             slideTo: function (e, t, i, s) {
//               if (
//                 (void 0 === e && (e = 0),
//                 void 0 === t && (t = this.params.speed),
//                 void 0 === i && (i = !0),
//                 "number" != typeof e && "string" != typeof e)
//               )
//                 throw new Error(
//                   "The 'index' argument cannot have type other than 'number' or 'string'. [" +
//                     typeof e +
//                     "] given."
//                 );
//               if ("string" == typeof e) {
//                 var a = parseInt(e, 10);
//                 if (!isFinite(a))
//                   throw new Error(
//                     "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
//                       e +
//                       "] given."
//                   );
//                 e = a;
//               }
//               var r = this,
//                 n = e;
//               n < 0 && (n = 0);
//               var o = r.params,
//                 l = r.snapGrid,
//                 d = r.slidesGrid,
//                 p = r.previousIndex,
//                 h = r.activeIndex,
//                 c = r.rtlTranslate,
//                 u = r.wrapperEl;
//               if (r.animating && o.preventInteractionOnTransition) return !1;
//               var f = Math.min(r.params.slidesPerGroupSkip, n),
//                 v = f + Math.floor((n - f) / r.params.slidesPerGroup);
//               v >= l.length && (v = l.length - 1),
//                 (h || o.initialSlide || 0) === (p || 0) &&
//                   i &&
//                   r.emit("beforeSlideChangeStart");
//               var m,
//                 g = -l[v];
//               if ((r.updateProgress(g), o.normalizeSlideIndex))
//                 for (var w = 0; w < d.length; w += 1)
//                   -Math.floor(100 * g) >= Math.floor(100 * d[w]) && (n = w);
//               if (r.initialized && n !== h) {
//                 if (
//                   !r.allowSlideNext &&
//                   g < r.translate &&
//                   g < r.minTranslate()
//                 )
//                   return !1;
//                 if (
//                   !r.allowSlidePrev &&
//                   g > r.translate &&
//                   g > r.maxTranslate() &&
//                   (h || 0) !== n
//                 )
//                   return !1;
//               }
//               if (
//                 ((m = n > h ? "next" : n < h ? "prev" : "reset"),
//                 (c && -g === r.translate) || (!c && g === r.translate))
//               )
//                 return (
//                   r.updateActiveIndex(n),
//                   o.autoHeight && r.updateAutoHeight(),
//                   r.updateSlidesClasses(),
//                   "slide" !== o.effect && r.setTranslate(g),
//                   "reset" !== m &&
//                     (r.transitionStart(i, m), r.transitionEnd(i, m)),
//                   !1
//                 );
//               if (o.cssMode) {
//                 var y,
//                   b = r.isHorizontal(),
//                   T = -g;
//                 return (
//                   c && (T = u.scrollWidth - u.offsetWidth - T),
//                   0 === t
//                     ? (u[b ? "scrollLeft" : "scrollTop"] = T)
//                     : u.scrollTo
//                     ? u.scrollTo(
//                         (((y = {})[b ? "left" : "top"] = T),
//                         (y.behavior = "smooth"),
//                         y)
//                       )
//                     : (u[b ? "scrollLeft" : "scrollTop"] = T),
//                   !0
//                 );
//               }
//               return (
//                 0 === t
//                   ? (r.setTransition(0),
//                     r.setTranslate(g),
//                     r.updateActiveIndex(n),
//                     r.updateSlidesClasses(),
//                     r.emit("beforeTransitionStart", t, s),
//                     r.transitionStart(i, m),
//                     r.transitionEnd(i, m))
//                   : (r.setTransition(t),
//                     r.setTranslate(g),
//                     r.updateActiveIndex(n),
//                     r.updateSlidesClasses(),
//                     r.emit("beforeTransitionStart", t, s),
//                     r.transitionStart(i, m),
//                     r.animating ||
//                       ((r.animating = !0),
//                       r.onSlideToWrapperTransitionEnd ||
//                         (r.onSlideToWrapperTransitionEnd = function (e) {
//                           r &&
//                             !r.destroyed &&
//                             e.target === this &&
//                             (r.$wrapperEl[0].removeEventListener(
//                               "transitionend",
//                               r.onSlideToWrapperTransitionEnd
//                             ),
//                             r.$wrapperEl[0].removeEventListener(
//                               "webkitTransitionEnd",
//                               r.onSlideToWrapperTransitionEnd
//                             ),
//                             (r.onSlideToWrapperTransitionEnd = null),
//                             delete r.onSlideToWrapperTransitionEnd,
//                             r.transitionEnd(i, m));
//                         }),
//                       r.$wrapperEl[0].addEventListener(
//                         "transitionend",
//                         r.onSlideToWrapperTransitionEnd
//                       ),
//                       r.$wrapperEl[0].addEventListener(
//                         "webkitTransitionEnd",
//                         r.onSlideToWrapperTransitionEnd
//                       ))),
//                 !0
//               );
//             },
//             slideToLoop: function (e, t, i, s) {
//               void 0 === e && (e = 0),
//                 void 0 === t && (t = this.params.speed),
//                 void 0 === i && (i = !0);
//               var a = e;
//               return (
//                 this.params.loop && (a += this.loopedSlides),
//                 this.slideTo(a, t, i, s)
//               );
//             },
//             slideNext: function (e, t, i) {
//               void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
//               var s = this.params,
//                 a = this.animating,
//                 r =
//                   this.activeIndex < s.slidesPerGroupSkip
//                     ? 1
//                     : s.slidesPerGroup;
//               if (s.loop) {
//                 if (a && s.loopPreventsSlide) return !1;
//                 this.loopFix(),
//                   (this._clientLeft = this.$wrapperEl[0].clientLeft);
//               }
//               return this.slideTo(this.activeIndex + r, e, t, i);
//             },
//             slidePrev: function (e, t, i) {
//               void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
//               var s = this.params,
//                 a = this.animating,
//                 r = this.snapGrid,
//                 n = this.slidesGrid,
//                 o = this.rtlTranslate;
//               if (s.loop) {
//                 if (a && s.loopPreventsSlide) return !1;
//                 this.loopFix(),
//                   (this._clientLeft = this.$wrapperEl[0].clientLeft);
//               }
//               function l(e) {
//                 return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
//               }
//               var d,
//                 p = l(o ? this.translate : -this.translate),
//                 h = r.map(function (e) {
//                   return l(e);
//                 }),
//                 c = (r[h.indexOf(p)], r[h.indexOf(p) - 1]);
//               return (
//                 void 0 === c &&
//                   s.cssMode &&
//                   r.forEach(function (e) {
//                     !c && p >= e && (c = e);
//                   }),
//                 void 0 !== c &&
//                   (d = n.indexOf(c)) < 0 &&
//                   (d = this.activeIndex - 1),
//                 this.slideTo(d, e, t, i)
//               );
//             },
//             slideReset: function (e, t, i) {
//               return (
//                 void 0 === e && (e = this.params.speed),
//                 void 0 === t && (t = !0),
//                 this.slideTo(this.activeIndex, e, t, i)
//               );
//             },
//             slideToClosest: function (e, t, i, s) {
//               void 0 === e && (e = this.params.speed),
//                 void 0 === t && (t = !0),
//                 void 0 === s && (s = 0.5);
//               var a = this.activeIndex,
//                 r = Math.min(this.params.slidesPerGroupSkip, a),
//                 n = r + Math.floor((a - r) / this.params.slidesPerGroup),
//                 o = this.rtlTranslate ? this.translate : -this.translate;
//               if (o >= this.snapGrid[n]) {
//                 var l = this.snapGrid[n];
//                 o - l > (this.snapGrid[n + 1] - l) * s &&
//                   (a += this.params.slidesPerGroup);
//               } else {
//                 var d = this.snapGrid[n - 1];
//                 o - d <= (this.snapGrid[n] - d) * s &&
//                   (a -= this.params.slidesPerGroup);
//               }
//               return (
//                 (a = Math.max(a, 0)),
//                 (a = Math.min(a, this.slidesGrid.length - 1)),
//                 this.slideTo(a, e, t, i)
//               );
//             },
//             slideToClickedSlide: function () {
//               var e,
//                 t = this,
//                 i = t.params,
//                 s = t.$wrapperEl,
//                 a =
//                   "auto" === i.slidesPerView
//                     ? t.slidesPerViewDynamic()
//                     : i.slidesPerView,
//                 r = t.clickedIndex;
//               if (i.loop) {
//                 if (t.animating) return;
//                 (e = parseInt(
//                   m(t.clickedSlide).attr("data-swiper-slide-index"),
//                   10
//                 )),
//                   i.centeredSlides
//                     ? r < t.loopedSlides - a / 2 ||
//                       r > t.slides.length - t.loopedSlides + a / 2
//                       ? (t.loopFix(),
//                         (r = s
//                           .children(
//                             "." +
//                               i.slideClass +
//                               '[data-swiper-slide-index="' +
//                               e +
//                               '"]:not(.' +
//                               i.slideDuplicateClass +
//                               ")"
//                           )
//                           .eq(0)
//                           .index()),
//                         T(function () {
//                           t.slideTo(r);
//                         }))
//                       : t.slideTo(r)
//                     : r > t.slides.length - a
//                     ? (t.loopFix(),
//                       (r = s
//                         .children(
//                           "." +
//                             i.slideClass +
//                             '[data-swiper-slide-index="' +
//                             e +
//                             '"]:not(.' +
//                             i.slideDuplicateClass +
//                             ")"
//                         )
//                         .eq(0)
//                         .index()),
//                       T(function () {
//                         t.slideTo(r);
//                       }))
//                     : t.slideTo(r);
//               } else t.slideTo(r);
//             },
//           },
//           loop: {
//             loopCreate: function () {
//               var e = this,
//                 t = r(),
//                 i = e.params,
//                 s = e.$wrapperEl;
//               s.children(
//                 "." + i.slideClass + "." + i.slideDuplicateClass
//               ).remove();
//               var a = s.children("." + i.slideClass);
//               if (i.loopFillGroupWithBlank) {
//                 var n = i.slidesPerGroup - (a.length % i.slidesPerGroup);
//                 if (n !== i.slidesPerGroup) {
//                   for (var o = 0; o < n; o += 1) {
//                     var l = m(t.createElement("div")).addClass(
//                       i.slideClass + " " + i.slideBlankClass
//                     );
//                     s.append(l);
//                   }
//                   a = s.children("." + i.slideClass);
//                 }
//               }
//               "auto" !== i.slidesPerView ||
//                 i.loopedSlides ||
//                 (i.loopedSlides = a.length),
//                 (e.loopedSlides = Math.ceil(
//                   parseFloat(i.loopedSlides || i.slidesPerView, 10)
//                 )),
//                 (e.loopedSlides += i.loopAdditionalSlides),
//                 e.loopedSlides > a.length && (e.loopedSlides = a.length);
//               var d = [],
//                 p = [];
//               a.each(function (t, i) {
//                 var s = m(t);
//                 i < e.loopedSlides && p.push(t),
//                   i < a.length && i >= a.length - e.loopedSlides && d.push(t),
//                   s.attr("data-swiper-slide-index", i);
//               });
//               for (var h = 0; h < p.length; h += 1)
//                 s.append(m(p[h].cloneNode(!0)).addClass(i.slideDuplicateClass));
//               for (var c = d.length - 1; c >= 0; c -= 1)
//                 s.prepend(
//                   m(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass)
//                 );
//             },
//             loopFix: function () {
//               this.emit("beforeLoopFix");
//               var e,
//                 t = this.activeIndex,
//                 i = this.slides,
//                 s = this.loopedSlides,
//                 a = this.allowSlidePrev,
//                 r = this.allowSlideNext,
//                 n = this.snapGrid,
//                 o = this.rtlTranslate;
//               (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
//               var l = -n[t] - this.getTranslate();
//               t < s
//                 ? ((e = i.length - 3 * s + t),
//                   (e += s),
//                   this.slideTo(e, 0, !1, !0) &&
//                     0 !== l &&
//                     this.setTranslate(
//                       (o ? -this.translate : this.translate) - l
//                     ))
//                 : t >= i.length - s &&
//                   ((e = -i.length + t + s),
//                   (e += s),
//                   this.slideTo(e, 0, !1, !0) &&
//                     0 !== l &&
//                     this.setTranslate(
//                       (o ? -this.translate : this.translate) - l
//                     )),
//                 (this.allowSlidePrev = a),
//                 (this.allowSlideNext = r),
//                 this.emit("loopFix");
//             },
//             loopDestroy: function () {
//               var e = this.$wrapperEl,
//                 t = this.params,
//                 i = this.slides;
//               e
//                 .children(
//                   "." +
//                     t.slideClass +
//                     "." +
//                     t.slideDuplicateClass +
//                     ",." +
//                     t.slideClass +
//                     "." +
//                     t.slideBlankClass
//                 )
//                 .remove(),
//                 i.removeAttr("data-swiper-slide-index");
//             },
//           },
//           grabCursor: {
//             setGrabCursor: function (e) {
//               if (
//                 !(
//                   this.support.touch ||
//                   !this.params.simulateTouch ||
//                   (this.params.watchOverflow && this.isLocked) ||
//                   this.params.cssMode
//                 )
//               ) {
//                 var t = this.el;
//                 (t.style.cursor = "move"),
//                   (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
//                   (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
//                   (t.style.cursor = e ? "grabbing" : "grab");
//               }
//             },
//             unsetGrabCursor: function () {
//               this.support.touch ||
//                 (this.params.watchOverflow && this.isLocked) ||
//                 this.params.cssMode ||
//                 (this.el.style.cursor = "");
//             },
//           },
//           manipulation: {
//             appendSlide: function (e) {
//               var t = this.$wrapperEl,
//                 i = this.params;
//               if (
//                 (i.loop && this.loopDestroy(),
//                 "object" == typeof e && "length" in e)
//               )
//                 for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
//               else t.append(e);
//               i.loop && this.loopCreate(),
//                 (i.observer && this.support.observer) || this.update();
//             },
//             prependSlide: function (e) {
//               var t = this.params,
//                 i = this.$wrapperEl,
//                 s = this.activeIndex;
//               t.loop && this.loopDestroy();
//               var a = s + 1;
//               if ("object" == typeof e && "length" in e) {
//                 for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
//                 a = s + e.length;
//               } else i.prepend(e);
//               t.loop && this.loopCreate(),
//                 (t.observer && this.support.observer) || this.update(),
//                 this.slideTo(a, 0, !1);
//             },
//             addSlide: function (e, t) {
//               var i = this.$wrapperEl,
//                 s = this.params,
//                 a = this.activeIndex;
//               s.loop &&
//                 ((a -= this.loopedSlides),
//                 this.loopDestroy(),
//                 (this.slides = i.children("." + s.slideClass)));
//               var r = this.slides.length;
//               if (e <= 0) this.prependSlide(t);
//               else if (e >= r) this.appendSlide(t);
//               else {
//                 for (
//                   var n = a > e ? a + 1 : a, o = [], l = r - 1;
//                   l >= e;
//                   l -= 1
//                 ) {
//                   var d = this.slides.eq(l);
//                   d.remove(), o.unshift(d);
//                 }
//                 if ("object" == typeof t && "length" in t) {
//                   for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
//                   n = a > e ? a + t.length : a;
//                 } else i.append(t);
//                 for (var h = 0; h < o.length; h += 1) i.append(o[h]);
//                 s.loop && this.loopCreate(),
//                   (s.observer && this.support.observer) || this.update(),
//                   s.loop
//                     ? this.slideTo(n + this.loopedSlides, 0, !1)
//                     : this.slideTo(n, 0, !1);
//               }
//             },
//             removeSlide: function (e) {
//               var t = this.params,
//                 i = this.$wrapperEl,
//                 s = this.activeIndex;
//               t.loop &&
//                 ((s -= this.loopedSlides),
//                 this.loopDestroy(),
//                 (this.slides = i.children("." + t.slideClass)));
//               var a,
//                 r = s;
//               if ("object" == typeof e && "length" in e) {
//                 for (var n = 0; n < e.length; n += 1)
//                   (a = e[n]),
//                     this.slides[a] && this.slides.eq(a).remove(),
//                     a < r && (r -= 1);
//                 r = Math.max(r, 0);
//               } else
//                 (a = e),
//                   this.slides[a] && this.slides.eq(a).remove(),
//                   a < r && (r -= 1),
//                   (r = Math.max(r, 0));
//               t.loop && this.loopCreate(),
//                 (t.observer && this.support.observer) || this.update(),
//                 t.loop
//                   ? this.slideTo(r + this.loopedSlides, 0, !1)
//                   : this.slideTo(r, 0, !1);
//             },
//             removeAllSlides: function () {
//               for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
//               this.removeSlide(e);
//             },
//           },
//           events: {
//             attachEvents: function () {
//               var e = r(),
//                 t = this.params,
//                 i = this.touchEvents,
//                 s = this.el,
//                 a = this.wrapperEl,
//                 n = this.device,
//                 o = this.support;
//               (this.onTouchStart = A.bind(this)),
//                 (this.onTouchMove = I.bind(this)),
//                 (this.onTouchEnd = D.bind(this)),
//                 t.cssMode && (this.onScroll = B.bind(this)),
//                 (this.onClick = N.bind(this));
//               var l = !!t.nested;
//               if (!o.touch && o.pointerEvents)
//                 s.addEventListener(i.start, this.onTouchStart, !1),
//                   e.addEventListener(i.move, this.onTouchMove, l),
//                   e.addEventListener(i.end, this.onTouchEnd, !1);
//               else {
//                 if (o.touch) {
//                   var d = !(
//                     "touchstart" !== i.start ||
//                     !o.passiveListener ||
//                     !t.passiveListeners
//                   ) && { passive: !0, capture: !1 };
//                   s.addEventListener(i.start, this.onTouchStart, d),
//                     s.addEventListener(
//                       i.move,
//                       this.onTouchMove,
//                       o.passiveListener ? { passive: !1, capture: l } : l
//                     ),
//                     s.addEventListener(i.end, this.onTouchEnd, d),
//                     i.cancel &&
//                       s.addEventListener(i.cancel, this.onTouchEnd, d),
//                     G || (e.addEventListener("touchstart", W), (G = !0));
//                 }
//                 ((t.simulateTouch && !n.ios && !n.android) ||
//                   (t.simulateTouch && !o.touch && n.ios)) &&
//                   (s.addEventListener("mousedown", this.onTouchStart, !1),
//                   e.addEventListener("mousemove", this.onTouchMove, l),
//                   e.addEventListener("mouseup", this.onTouchEnd, !1));
//               }
//               (t.preventClicks || t.preventClicksPropagation) &&
//                 s.addEventListener("click", this.onClick, !0),
//                 t.cssMode && a.addEventListener("scroll", this.onScroll),
//                 t.updateOnWindowResize
//                   ? this.on(
//                       n.ios || n.android
//                         ? "resize orientationchange observerUpdate"
//                         : "resize observerUpdate",
//                       H,
//                       !0
//                     )
//                   : this.on("observerUpdate", H, !0);
//             },
//             detachEvents: function () {
//               var e = r(),
//                 t = this.params,
//                 i = this.touchEvents,
//                 s = this.el,
//                 a = this.wrapperEl,
//                 n = this.device,
//                 o = this.support,
//                 l = !!t.nested;
//               if (!o.touch && o.pointerEvents)
//                 s.removeEventListener(i.start, this.onTouchStart, !1),
//                   e.removeEventListener(i.move, this.onTouchMove, l),
//                   e.removeEventListener(i.end, this.onTouchEnd, !1);
//               else {
//                 if (o.touch) {
//                   var d = !(
//                     "onTouchStart" !== i.start ||
//                     !o.passiveListener ||
//                     !t.passiveListeners
//                   ) && { passive: !0, capture: !1 };
//                   s.removeEventListener(i.start, this.onTouchStart, d),
//                     s.removeEventListener(i.move, this.onTouchMove, l),
//                     s.removeEventListener(i.end, this.onTouchEnd, d),
//                     i.cancel &&
//                       s.removeEventListener(i.cancel, this.onTouchEnd, d);
//                 }
//                 ((t.simulateTouch && !n.ios && !n.android) ||
//                   (t.simulateTouch && !o.touch && n.ios)) &&
//                   (s.removeEventListener("mousedown", this.onTouchStart, !1),
//                   e.removeEventListener("mousemove", this.onTouchMove, l),
//                   e.removeEventListener("mouseup", this.onTouchEnd, !1));
//               }
//               (t.preventClicks || t.preventClicksPropagation) &&
//                 s.removeEventListener("click", this.onClick, !0),
//                 t.cssMode && a.removeEventListener("scroll", this.onScroll),
//                 this.off(
//                   n.ios || n.android
//                     ? "resize orientationchange observerUpdate"
//                     : "resize observerUpdate",
//                   H
//                 );
//             },
//           },
//           breakpoints: {
//             setBreakpoint: function () {
//               var e = this.activeIndex,
//                 t = this.initialized,
//                 i = this.loopedSlides,
//                 s = void 0 === i ? 0 : i,
//                 a = this.params,
//                 r = this.$el,
//                 n = a.breakpoints;
//               if (n && (!n || 0 !== Object.keys(n).length)) {
//                 var o = this.getBreakpoint(n);
//                 if (o && this.currentBreakpoint !== o) {
//                   var l = o in n ? n[o] : void 0;
//                   l &&
//                     [
//                       "slidesPerView",
//                       "spaceBetween",
//                       "slidesPerGroup",
//                       "slidesPerGroupSkip",
//                       "slidesPerColumn",
//                     ].forEach(function (e) {
//                       var t = l[e];
//                       void 0 !== t &&
//                         (l[e] =
//                           "slidesPerView" !== e ||
//                           ("AUTO" !== t && "auto" !== t)
//                             ? "slidesPerView" === e
//                               ? parseFloat(t)
//                               : parseInt(t, 10)
//                             : "auto");
//                     });
//                   var d = l || this.originalParams,
//                     p = a.slidesPerColumn > 1,
//                     h = d.slidesPerColumn > 1;
//                   p && !h
//                     ? (r.removeClass(
//                         a.containerModifierClass +
//                           "multirow " +
//                           a.containerModifierClass +
//                           "multirow-column"
//                       ),
//                       this.emitContainerClasses())
//                     : !p &&
//                       h &&
//                       (r.addClass(a.containerModifierClass + "multirow"),
//                       "column" === d.slidesPerColumnFill &&
//                         r.addClass(
//                           a.containerModifierClass + "multirow-column"
//                         ),
//                       this.emitContainerClasses());
//                   var c = d.direction && d.direction !== a.direction,
//                     u = a.loop && (d.slidesPerView !== a.slidesPerView || c);
//                   c && t && this.changeDirection(),
//                     E(this.params, d),
//                     E(this, {
//                       allowTouchMove: this.params.allowTouchMove,
//                       allowSlideNext: this.params.allowSlideNext,
//                       allowSlidePrev: this.params.allowSlidePrev,
//                     }),
//                     (this.currentBreakpoint = o),
//                     this.emit("_beforeBreakpoint", d),
//                     u &&
//                       t &&
//                       (this.loopDestroy(),
//                       this.loopCreate(),
//                       this.updateSlides(),
//                       this.slideTo(e - s + this.loopedSlides, 0, !1)),
//                     this.emit("breakpoint", d);
//                 }
//               }
//             },
//             getBreakpoint: function (e) {
//               var t = o();
//               if (e) {
//                 var i = !1,
//                   s = Object.keys(e).map(function (e) {
//                     if ("string" == typeof e && 0 === e.indexOf("@")) {
//                       var i = parseFloat(e.substr(1));
//                       return { value: t.innerHeight * i, point: e };
//                     }
//                     return { value: e, point: e };
//                   });
//                 s.sort(function (e, t) {
//                   return parseInt(e.value, 10) - parseInt(t.value, 10);
//                 });
//                 for (var a = 0; a < s.length; a += 1) {
//                   var r = s[a],
//                     n = r.point;
//                   r.value <= t.innerWidth && (i = n);
//                 }
//                 return i || "max";
//               }
//             },
//           },
//           checkOverflow: {
//             checkOverflow: function () {
//               var e = this.params,
//                 t = this.isLocked,
//                 i =
//                   this.slides.length > 0 &&
//                   e.slidesOffsetBefore +
//                     e.spaceBetween * (this.slides.length - 1) +
//                     this.slides[0].offsetWidth * this.slides.length;
//               e.slidesOffsetBefore && e.slidesOffsetAfter && i
//                 ? (this.isLocked = i <= this.size)
//                 : (this.isLocked = 1 === this.snapGrid.length),
//                 (this.allowSlideNext = !this.isLocked),
//                 (this.allowSlidePrev = !this.isLocked),
//                 t !== this.isLocked &&
//                   this.emit(this.isLocked ? "lock" : "unlock"),
//                 t &&
//                   t !== this.isLocked &&
//                   ((this.isEnd = !1),
//                   this.navigation && this.navigation.update());
//             },
//           },
//           classes: {
//             addClasses: function () {
//               var e = this.classNames,
//                 t = this.params,
//                 i = this.rtl,
//                 s = this.$el,
//                 a = this.device,
//                 r = [];
//               r.push("initialized"),
//                 r.push(t.direction),
//                 t.freeMode && r.push("free-mode"),
//                 t.autoHeight && r.push("autoheight"),
//                 i && r.push("rtl"),
//                 t.slidesPerColumn > 1 &&
//                   (r.push("multirow"),
//                   "column" === t.slidesPerColumnFill &&
//                     r.push("multirow-column")),
//                 a.android && r.push("android"),
//                 a.ios && r.push("ios"),
//                 t.cssMode && r.push("css-mode"),
//                 r.forEach(function (i) {
//                   e.push(t.containerModifierClass + i);
//                 }),
//                 s.addClass(e.join(" ")),
//                 this.emitContainerClasses();
//             },
//             removeClasses: function () {
//               var e = this.$el,
//                 t = this.classNames;
//               e.removeClass(t.join(" ")), this.emitContainerClasses();
//             },
//           },
//           images: {
//             loadImage: function (e, t, i, s, a, r) {
//               var n,
//                 l = o();
//               function d() {
//                 r && r();
//               }
//               m(e).parent("picture")[0] || (e.complete && a)
//                 ? d()
//                 : t
//                 ? (((n = new l.Image()).onload = d),
//                   (n.onerror = d),
//                   s && (n.sizes = s),
//                   i && (n.srcset = i),
//                   t && (n.src = t))
//                 : d();
//             },
//             preloadImages: function () {
//               var e = this;
//               function t() {
//                 null != e &&
//                   e &&
//                   !e.destroyed &&
//                   (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
//                   e.imagesLoaded === e.imagesToLoad.length &&
//                     (e.params.updateOnImagesReady && e.update(),
//                     e.emit("imagesReady")));
//               }
//               e.imagesToLoad = e.$el.find("img");
//               for (var i = 0; i < e.imagesToLoad.length; i += 1) {
//                 var s = e.imagesToLoad[i];
//                 e.loadImage(
//                   s,
//                   s.currentSrc || s.getAttribute("src"),
//                   s.srcset || s.getAttribute("srcset"),
//                   s.sizes || s.getAttribute("sizes"),
//                   !0,
//                   t
//                 );
//               }
//             },
//           },
//         },
//         F = {},
//         R = (function () {
//           function t() {
//             for (
//               var e, i, s = arguments.length, a = new Array(s), r = 0;
//               r < s;
//               r++
//             )
//               a[r] = arguments[r];
//             1 === a.length && a[0].constructor && a[0].constructor === Object
//               ? (i = a[0])
//               : ((e = a[0]), (i = a[1])),
//               i || (i = {}),
//               (i = E({}, i)),
//               e && !i.el && (i.el = e);
//             var n = this;
//             (n.support = $()),
//               (n.device = M({ userAgent: i.userAgent })),
//               (n.browser = z()),
//               (n.eventsListeners = {}),
//               (n.eventsAnyListeners = []),
//               void 0 === n.modules && (n.modules = {}),
//               Object.keys(n.modules).forEach(function (e) {
//                 var t = n.modules[e];
//                 if (t.params) {
//                   var s = Object.keys(t.params)[0],
//                     a = t.params[s];
//                   if ("object" != typeof a || null === a) return;
//                   if (!(s in i) || !("enabled" in a)) return;
//                   !0 === i[s] && (i[s] = { enabled: !0 }),
//                     "object" != typeof i[s] ||
//                       "enabled" in i[s] ||
//                       (i[s].enabled = !0),
//                     i[s] || (i[s] = { enabled: !1 });
//                 }
//               });
//             var o = E({}, X);
//             n.useParams(o),
//               (n.params = E({}, o, F, i)),
//               (n.originalParams = E({}, n.params)),
//               (n.passedParams = E({}, i)),
//               n.params &&
//                 n.params.on &&
//                 Object.keys(n.params.on).forEach(function (e) {
//                   n.on(e, n.params.on[e]);
//                 }),
//               n.params && n.params.onAny && n.onAny(n.params.onAny),
//               (n.$ = m);
//             var l = m(n.params.el);
//             if ((e = l[0])) {
//               if (l.length > 1) {
//                 var d = [];
//                 return (
//                   l.each(function (e) {
//                     var s = E({}, i, { el: e });
//                     d.push(new t(s));
//                   }),
//                   d
//                 );
//               }
//               var p, h, c;
//               return (
//                 (e.swiper = n),
//                 e && e.shadowRoot && e.shadowRoot.querySelector
//                   ? ((p = m(
//                       e.shadowRoot.querySelector("." + n.params.wrapperClass)
//                     )).children = function (e) {
//                       return l.children(e);
//                     })
//                   : (p = l.children("." + n.params.wrapperClass)),
//                 E(n, {
//                   $el: l,
//                   el: e,
//                   $wrapperEl: p,
//                   wrapperEl: p[0],
//                   classNames: [],
//                   slides: m(),
//                   slidesGrid: [],
//                   snapGrid: [],
//                   slidesSizesGrid: [],
//                   isHorizontal: function () {
//                     return "horizontal" === n.params.direction;
//                   },
//                   isVertical: function () {
//                     return "vertical" === n.params.direction;
//                   },
//                   rtl:
//                     "rtl" === e.dir.toLowerCase() ||
//                     "rtl" === l.css("direction"),
//                   rtlTranslate:
//                     "horizontal" === n.params.direction &&
//                     ("rtl" === e.dir.toLowerCase() ||
//                       "rtl" === l.css("direction")),
//                   wrongRTL: "-webkit-box" === p.css("display"),
//                   activeIndex: 0,
//                   realIndex: 0,
//                   isBeginning: !0,
//                   isEnd: !1,
//                   translate: 0,
//                   previousTranslate: 0,
//                   progress: 0,
//                   velocity: 0,
//                   animating: !1,
//                   allowSlideNext: n.params.allowSlideNext,
//                   allowSlidePrev: n.params.allowSlidePrev,
//                   touchEvents:
//                     ((h = [
//                       "touchstart",
//                       "touchmove",
//                       "touchend",
//                       "touchcancel",
//                     ]),
//                     (c = ["mousedown", "mousemove", "mouseup"]),
//                     n.support.pointerEvents &&
//                       (c = ["pointerdown", "pointermove", "pointerup"]),
//                     (n.touchEventsTouch = {
//                       start: h[0],
//                       move: h[1],
//                       end: h[2],
//                       cancel: h[3],
//                     }),
//                     (n.touchEventsDesktop = {
//                       start: c[0],
//                       move: c[1],
//                       end: c[2],
//                     }),
//                     n.support.touch || !n.params.simulateTouch
//                       ? n.touchEventsTouch
//                       : n.touchEventsDesktop),
//                   touchEventsData: {
//                     isTouched: void 0,
//                     isMoved: void 0,
//                     allowTouchCallbacks: void 0,
//                     touchStartTime: void 0,
//                     isScrolling: void 0,
//                     currentTranslate: void 0,
//                     startTranslate: void 0,
//                     allowThresholdMove: void 0,
//                     formElements:
//                       "input, select, option, textarea, button, video, label",
//                     lastClickTime: S(),
//                     clickTimeout: void 0,
//                     velocities: [],
//                     allowMomentumBounce: void 0,
//                     isTouchEvent: void 0,
//                     startMoving: void 0,
//                   },
//                   allowClick: !0,
//                   allowTouchMove: n.params.allowTouchMove,
//                   touches: {
//                     startX: 0,
//                     startY: 0,
//                     currentX: 0,
//                     currentY: 0,
//                     diff: 0,
//                   },
//                   imagesToLoad: [],
//                   imagesLoaded: 0,
//                 }),
//                 n.useModules(),
//                 n.emit("_swiper"),
//                 n.params.init && n.init(),
//                 n
//               );
//             }
//           }
//           var i,
//             s,
//             a,
//             r = t.prototype;
//           return (
//             (r.emitContainerClasses = function () {
//               var e = this;
//               if (e.params._emitClasses && e.el) {
//                 var t = e.el.className.split(" ").filter(function (t) {
//                   return (
//                     0 === t.indexOf("swiper-container") ||
//                     0 === t.indexOf(e.params.containerModifierClass)
//                   );
//                 });
//                 e.emit("_containerClasses", t.join(" "));
//               }
//             }),
//             (r.getSlideClasses = function (e) {
//               var t = this;
//               return e.className
//                 .split(" ")
//                 .filter(function (e) {
//                   return (
//                     0 === e.indexOf("swiper-slide") ||
//                     0 === e.indexOf(t.params.slideClass)
//                   );
//                 })
//                 .join(" ");
//             }),
//             (r.emitSlidesClasses = function () {
//               var e = this;
//               e.params._emitClasses &&
//                 e.el &&
//                 e.slides.each(function (t) {
//                   var i = e.getSlideClasses(t);
//                   e.emit("_slideClass", t, i);
//                 });
//             }),
//             (r.slidesPerViewDynamic = function () {
//               var e = this.params,
//                 t = this.slides,
//                 i = this.slidesGrid,
//                 s = this.size,
//                 a = this.activeIndex,
//                 r = 1;
//               if (e.centeredSlides) {
//                 for (
//                   var n, o = t[a].swiperSlideSize, l = a + 1;
//                   l < t.length;
//                   l += 1
//                 )
//                   t[l] &&
//                     !n &&
//                     ((r += 1), (o += t[l].swiperSlideSize) > s && (n = !0));
//                 for (var d = a - 1; d >= 0; d -= 1)
//                   t[d] &&
//                     !n &&
//                     ((r += 1), (o += t[d].swiperSlideSize) > s && (n = !0));
//               } else
//                 for (var p = a + 1; p < t.length; p += 1)
//                   i[p] - i[a] < s && (r += 1);
//               return r;
//             }),
//             (r.update = function () {
//               var e = this;
//               if (e && !e.destroyed) {
//                 var t = e.snapGrid,
//                   i = e.params;
//                 i.breakpoints && e.setBreakpoint(),
//                   e.updateSize(),
//                   e.updateSlides(),
//                   e.updateProgress(),
//                   e.updateSlidesClasses(),
//                   e.params.freeMode
//                     ? (s(), e.params.autoHeight && e.updateAutoHeight())
//                     : (("auto" === e.params.slidesPerView ||
//                         e.params.slidesPerView > 1) &&
//                       e.isEnd &&
//                       !e.params.centeredSlides
//                         ? e.slideTo(e.slides.length - 1, 0, !1, !0)
//                         : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
//                   i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
//                   e.emit("update");
//               }
//               function s() {
//                 var t = e.rtlTranslate ? -1 * e.translate : e.translate,
//                   i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
//                 e.setTranslate(i),
//                   e.updateActiveIndex(),
//                   e.updateSlidesClasses();
//               }
//             }),
//             (r.changeDirection = function (e, t) {
//               void 0 === t && (t = !0);
//               var i = this.params.direction;
//               return (
//                 e || (e = "horizontal" === i ? "vertical" : "horizontal"),
//                 e === i ||
//                   ("horizontal" !== e && "vertical" !== e) ||
//                   (this.$el
//                     .removeClass("" + this.params.containerModifierClass + i)
//                     .addClass("" + this.params.containerModifierClass + e),
//                   this.emitContainerClasses(),
//                   (this.params.direction = e),
//                   this.slides.each(function (t) {
//                     "vertical" === e
//                       ? (t.style.width = "")
//                       : (t.style.height = "");
//                   }),
//                   this.emit("changeDirection"),
//                   t && this.update()),
//                 this
//               );
//             }),
//             (r.init = function () {
//               this.initialized ||
//                 (this.emit("beforeInit"),
//                 this.params.breakpoints && this.setBreakpoint(),
//                 this.addClasses(),
//                 this.params.loop && this.loopCreate(),
//                 this.updateSize(),
//                 this.updateSlides(),
//                 this.params.watchOverflow && this.checkOverflow(),
//                 this.params.grabCursor && this.setGrabCursor(),
//                 this.params.preloadImages && this.preloadImages(),
//                 this.params.loop
//                   ? this.slideTo(
//                       this.params.initialSlide + this.loopedSlides,
//                       0,
//                       this.params.runCallbacksOnInit
//                     )
//                   : this.slideTo(
//                       this.params.initialSlide,
//                       0,
//                       this.params.runCallbacksOnInit
//                     ),
//                 this.attachEvents(),
//                 (this.initialized = !0),
//                 this.emit("init"),
//                 this.emit("afterInit"));
//             }),
//             (r.destroy = function (e, t) {
//               void 0 === e && (e = !0), void 0 === t && (t = !0);
//               var i,
//                 s = this,
//                 a = s.params,
//                 r = s.$el,
//                 n = s.$wrapperEl,
//                 o = s.slides;
//               return (
//                 void 0 === s.params ||
//                   s.destroyed ||
//                   (s.emit("beforeDestroy"),
//                   (s.initialized = !1),
//                   s.detachEvents(),
//                   a.loop && s.loopDestroy(),
//                   t &&
//                     (s.removeClasses(),
//                     r.removeAttr("style"),
//                     n.removeAttr("style"),
//                     o &&
//                       o.length &&
//                       o
//                         .removeClass(
//                           [
//                             a.slideVisibleClass,
//                             a.slideActiveClass,
//                             a.slideNextClass,
//                             a.slidePrevClass,
//                           ].join(" ")
//                         )
//                         .removeAttr("style")
//                         .removeAttr("data-swiper-slide-index")),
//                   s.emit("destroy"),
//                   Object.keys(s.eventsListeners).forEach(function (e) {
//                     s.off(e);
//                   }),
//                   !1 !== e &&
//                     ((s.$el[0].swiper = null),
//                     (i = s),
//                     Object.keys(i).forEach(function (e) {
//                       try {
//                         i[e] = null;
//                       } catch (e) {}
//                       try {
//                         delete i[e];
//                       } catch (e) {}
//                     })),
//                   (s.destroyed = !0)),
//                 null
//               );
//             }),
//             (t.extendDefaults = function (e) {
//               E(F, e);
//             }),
//             (t.installModule = function (e) {
//               t.prototype.modules || (t.prototype.modules = {});
//               var i =
//                 e.name || Object.keys(t.prototype.modules).length + "_" + S();
//               t.prototype.modules[i] = e;
//             }),
//             (t.use = function (e) {
//               return Array.isArray(e)
//                 ? (e.forEach(function (e) {
//                     return t.installModule(e);
//                   }),
//                   t)
//                 : (t.installModule(e), t);
//             }),
//             (i = t),
//             (a = [
//               {
//                 key: "extendedDefaults",
//                 get: function () {
//                   return F;
//                 },
//               },
//               {
//                 key: "defaults",
//                 get: function () {
//                   return X;
//                 },
//               },
//             ]),
//             (s = null) && e(i.prototype, s),
//             a && e(i, a),
//             t
//           );
//         })();
//       Object.keys(Y).forEach(function (e) {
//         Object.keys(Y[e]).forEach(function (t) {
//           R.prototype[t] = Y[e][t];
//         });
//       }),
//         R.use([P, O]);
//       var j = {
//           update: function (e) {
//             var t = this,
//               i = t.params,
//               s = i.slidesPerView,
//               a = i.slidesPerGroup,
//               r = i.centeredSlides,
//               n = t.params.virtual,
//               o = n.addSlidesBefore,
//               l = n.addSlidesAfter,
//               d = t.virtual,
//               p = d.from,
//               h = d.to,
//               c = d.slides,
//               u = d.slidesGrid,
//               f = d.renderSlide,
//               v = d.offset;
//             t.updateActiveIndex();
//             var m,
//               g,
//               w,
//               y = t.activeIndex || 0;
//             (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
//               r
//                 ? ((g = Math.floor(s / 2) + a + l),
//                   (w = Math.floor(s / 2) + a + o))
//                 : ((g = s + (a - 1) + l), (w = a + o));
//             var b = Math.max((y || 0) - w, 0),
//               T = Math.min((y || 0) + g, c.length - 1),
//               S = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
//             function x() {
//               t.updateSlides(),
//                 t.updateProgress(),
//                 t.updateSlidesClasses(),
//                 t.lazy && t.params.lazy.enabled && t.lazy.load();
//             }
//             if (
//               (E(t.virtual, {
//                 from: b,
//                 to: T,
//                 offset: S,
//                 slidesGrid: t.slidesGrid,
//               }),
//               p === b && h === T && !e)
//             )
//               return (
//                 t.slidesGrid !== u && S !== v && t.slides.css(m, S + "px"),
//                 void t.updateProgress()
//               );
//             if (t.params.virtual.renderExternal)
//               return (
//                 t.params.virtual.renderExternal.call(t, {
//                   offset: S,
//                   from: b,
//                   to: T,
//                   slides: (function () {
//                     for (var e = [], t = b; t <= T; t += 1) e.push(c[t]);
//                     return e;
//                   })(),
//                 }),
//                 void (t.params.virtual.renderExternalUpdate && x())
//               );
//             var C = [],
//               k = [];
//             if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
//             else
//               for (var $ = p; $ <= h; $ += 1)
//                 ($ < b || $ > T) &&
//                   t.$wrapperEl
//                     .find(
//                       "." +
//                         t.params.slideClass +
//                         '[data-swiper-slide-index="' +
//                         $ +
//                         '"]'
//                     )
//                     .remove();
//             for (var M = 0; M < c.length; M += 1)
//               M >= b &&
//                 M <= T &&
//                 (void 0 === h || e
//                   ? k.push(M)
//                   : (M > h && k.push(M), M < p && C.push(M)));
//             k.forEach(function (e) {
//               t.$wrapperEl.append(f(c[e], e));
//             }),
//               C.sort(function (e, t) {
//                 return t - e;
//               }).forEach(function (e) {
//                 t.$wrapperEl.prepend(f(c[e], e));
//               }),
//               t.$wrapperEl.children(".swiper-slide").css(m, S + "px"),
//               x();
//           },
//           renderSlide: function (e, t) {
//             var i = this.params.virtual;
//             if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
//             var s = i.renderSlide
//               ? m(i.renderSlide.call(this, e, t))
//               : m(
//                   '<div class="' +
//                     this.params.slideClass +
//                     '" data-swiper-slide-index="' +
//                     t +
//                     '">' +
//                     e +
//                     "</div>"
//                 );
//             return (
//               s.attr("data-swiper-slide-index") ||
//                 s.attr("data-swiper-slide-index", t),
//               i.cache && (this.virtual.cache[t] = s),
//               s
//             );
//           },
//           appendSlide: function (e) {
//             if ("object" == typeof e && "length" in e)
//               for (var t = 0; t < e.length; t += 1)
//                 e[t] && this.virtual.slides.push(e[t]);
//             else this.virtual.slides.push(e);
//             this.virtual.update(!0);
//           },
//           prependSlide: function (e) {
//             var t = this.activeIndex,
//               i = t + 1,
//               s = 1;
//             if (Array.isArray(e)) {
//               for (var a = 0; a < e.length; a += 1)
//                 e[a] && this.virtual.slides.unshift(e[a]);
//               (i = t + e.length), (s = e.length);
//             } else this.virtual.slides.unshift(e);
//             if (this.params.virtual.cache) {
//               var r = this.virtual.cache,
//                 n = {};
//               Object.keys(r).forEach(function (e) {
//                 var t = r[e],
//                   i = t.attr("data-swiper-slide-index");
//                 i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
//                   (n[parseInt(e, 10) + s] = t);
//               }),
//                 (this.virtual.cache = n);
//             }
//             this.virtual.update(!0), this.slideTo(i, 0);
//           },
//           removeSlide: function (e) {
//             if (null != e) {
//               var t = this.activeIndex;
//               if (Array.isArray(e))
//                 for (var i = e.length - 1; i >= 0; i -= 1)
//                   this.virtual.slides.splice(e[i], 1),
//                     this.params.virtual.cache &&
//                       delete this.virtual.cache[e[i]],
//                     e[i] < t && (t -= 1),
//                     (t = Math.max(t, 0));
//               else
//                 this.virtual.slides.splice(e, 1),
//                   this.params.virtual.cache && delete this.virtual.cache[e],
//                   e < t && (t -= 1),
//                   (t = Math.max(t, 0));
//               this.virtual.update(!0), this.slideTo(t, 0);
//             }
//           },
//           removeAllSlides: function () {
//             (this.virtual.slides = []),
//               this.params.virtual.cache && (this.virtual.cache = {}),
//               this.virtual.update(!0),
//               this.slideTo(0, 0);
//           },
//         },
//         _ = {
//           name: "virtual",
//           params: {
//             virtual: {
//               enabled: !1,
//               slides: [],
//               cache: !0,
//               renderSlide: null,
//               renderExternal: null,
//               renderExternalUpdate: !0,
//               addSlidesBefore: 0,
//               addSlidesAfter: 0,
//             },
//           },
//           create: function () {
//             k(this, {
//               virtual: t({}, j, {
//                 slides: this.params.virtual.slides,
//                 cache: {},
//               }),
//             });
//           },
//           on: {
//             beforeInit: function (e) {
//               if (e.params.virtual.enabled) {
//                 e.classNames.push(e.params.containerModifierClass + "virtual");
//                 var t = { watchSlidesProgress: !0 };
//                 E(e.params, t),
//                   E(e.originalParams, t),
//                   e.params.initialSlide || e.virtual.update();
//               }
//             },
//             setTranslate: function (e) {
//               e.params.virtual.enabled && e.virtual.update();
//             },
//           },
//         },
//         V = {
//           handle: function (e) {
//             var t = o(),
//               i = r(),
//               s = this.rtlTranslate,
//               a = e;
//             a.originalEvent && (a = a.originalEvent);
//             var n = a.keyCode || a.charCode,
//               l = this.params.keyboard.pageUpDown,
//               d = l && 33 === n,
//               p = l && 34 === n,
//               h = 37 === n,
//               c = 39 === n,
//               u = 38 === n,
//               f = 40 === n;
//             if (
//               !this.allowSlideNext &&
//               ((this.isHorizontal() && c) || (this.isVertical() && f) || p)
//             )
//               return !1;
//             if (
//               !this.allowSlidePrev &&
//               ((this.isHorizontal() && h) || (this.isVertical() && u) || d)
//             )
//               return !1;
//             if (
//               !(
//                 a.shiftKey ||
//                 a.altKey ||
//                 a.ctrlKey ||
//                 a.metaKey ||
//                 (i.activeElement &&
//                   i.activeElement.nodeName &&
//                   ("input" === i.activeElement.nodeName.toLowerCase() ||
//                     "textarea" === i.activeElement.nodeName.toLowerCase()))
//               )
//             ) {
//               if (
//                 this.params.keyboard.onlyInViewport &&
//                 (d || p || h || c || u || f)
//               ) {
//                 var v = !1;
//                 if (
//                   this.$el.parents("." + this.params.slideClass).length > 0 &&
//                   0 ===
//                     this.$el.parents("." + this.params.slideActiveClass).length
//                 )
//                   return;
//                 var m = t.innerWidth,
//                   g = t.innerHeight,
//                   w = this.$el.offset();
//                 s && (w.left -= this.$el[0].scrollLeft);
//                 for (
//                   var y = [
//                       [w.left, w.top],
//                       [w.left + this.width, w.top],
//                       [w.left, w.top + this.height],
//                       [w.left + this.width, w.top + this.height],
//                     ],
//                     b = 0;
//                   b < y.length;
//                   b += 1
//                 ) {
//                   var T = y[b];
//                   if (T[0] >= 0 && T[0] <= m && T[1] >= 0 && T[1] <= g) {
//                     if (0 === T[0] && 0 === T[1]) continue;
//                     v = !0;
//                   }
//                 }
//                 if (!v) return;
//               }
//               this.isHorizontal()
//                 ? ((d || p || h || c) &&
//                     (a.preventDefault
//                       ? a.preventDefault()
//                       : (a.returnValue = !1)),
//                   (((p || c) && !s) || ((d || h) && s)) && this.slideNext(),
//                   (((d || h) && !s) || ((p || c) && s)) && this.slidePrev())
//                 : ((d || p || u || f) &&
//                     (a.preventDefault
//                       ? a.preventDefault()
//                       : (a.returnValue = !1)),
//                   (p || f) && this.slideNext(),
//                   (d || u) && this.slidePrev()),
//                 this.emit("keyPress", n);
//             }
//           },
//           enable: function () {
//             var e = r();
//             this.keyboard.enabled ||
//               (m(e).on("keydown", this.keyboard.handle),
//               (this.keyboard.enabled = !0));
//           },
//           disable: function () {
//             var e = r();
//             this.keyboard.enabled &&
//               (m(e).off("keydown", this.keyboard.handle),
//               (this.keyboard.enabled = !1));
//           },
//         },
//         q = {
//           name: "keyboard",
//           params: {
//             keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
//           },
//           create: function () {
//             k(this, { keyboard: t({ enabled: !1 }, V) });
//           },
//           on: {
//             init: function (e) {
//               e.params.keyboard.enabled && e.keyboard.enable();
//             },
//             destroy: function (e) {
//               e.keyboard.enabled && e.keyboard.disable();
//             },
//           },
//         },
//         U = {
//           lastScrollTime: S(),
//           lastEventBeforeSnap: void 0,
//           recentWheelEvents: [],
//           event: function () {
//             return o().navigator.userAgent.indexOf("firefox") > -1
//               ? "DOMMouseScroll"
//               : (function () {
//                   var e = r(),
//                     t = "onwheel" in e;
//                   if (!t) {
//                     var i = e.createElement("div");
//                     i.setAttribute("onwheel", "return;"),
//                       (t = "function" == typeof i.onwheel);
//                   }
//                   return (
//                     !t &&
//                       e.implementation &&
//                       e.implementation.hasFeature &&
//                       !0 !== e.implementation.hasFeature("", "") &&
//                       (t = e.implementation.hasFeature("Events.wheel", "3.0")),
//                     t
//                   );
//                 })()
//               ? "wheel"
//               : "mousewheel";
//           },
//           normalize: function (e) {
//             var t = 0,
//               i = 0,
//               s = 0,
//               a = 0;
//             return (
//               "detail" in e && (i = e.detail),
//               "wheelDelta" in e && (i = -e.wheelDelta / 120),
//               "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
//               "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
//               "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
//               (s = 10 * t),
//               (a = 10 * i),
//               "deltaY" in e && (a = e.deltaY),
//               "deltaX" in e && (s = e.deltaX),
//               e.shiftKey && !s && ((s = a), (a = 0)),
//               (s || a) &&
//                 e.deltaMode &&
//                 (1 === e.deltaMode
//                   ? ((s *= 40), (a *= 40))
//                   : ((s *= 800), (a *= 800))),
//               s && !t && (t = s < 1 ? -1 : 1),
//               a && !i && (i = a < 1 ? -1 : 1),
//               { spinX: t, spinY: i, pixelX: s, pixelY: a }
//             );
//           },
//           handleMouseEnter: function () {
//             this.mouseEntered = !0;
//           },
//           handleMouseLeave: function () {
//             this.mouseEntered = !1;
//           },
//           handle: function (e) {
//             var t = e,
//               i = this,
//               s = i.params.mousewheel;
//             i.params.cssMode && t.preventDefault();
//             var a = i.$el;
//             if (
//               ("container" !== i.params.mousewheel.eventsTarget &&
//                 (a = m(i.params.mousewheel.eventsTarget)),
//               !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges)
//             )
//               return !0;
//             t.originalEvent && (t = t.originalEvent);
//             var r = 0,
//               n = i.rtlTranslate ? -1 : 1,
//               o = U.normalize(t);
//             if (s.forceToAxis)
//               if (i.isHorizontal()) {
//                 if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
//                 r = -o.pixelX * n;
//               } else {
//                 if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
//                 r = -o.pixelY;
//               }
//             else
//               r =
//                 Math.abs(o.pixelX) > Math.abs(o.pixelY)
//                   ? -o.pixelX * n
//                   : -o.pixelY;
//             if (0 === r) return !0;
//             s.invert && (r = -r);
//             var l = i.getTranslate() + r * s.sensitivity;
//             if (
//               (l >= i.minTranslate() && (l = i.minTranslate()),
//               l <= i.maxTranslate() && (l = i.maxTranslate()),
//               (!!i.params.loop ||
//                 !(l === i.minTranslate() || l === i.maxTranslate())) &&
//                 i.params.nested &&
//                 t.stopPropagation(),
//               i.params.freeMode)
//             ) {
//               var d = {
//                   time: S(),
//                   delta: Math.abs(r),
//                   direction: Math.sign(r),
//                 },
//                 p = i.mousewheel.lastEventBeforeSnap,
//                 h =
//                   p &&
//                   d.time < p.time + 500 &&
//                   d.delta <= p.delta &&
//                   d.direction === p.direction;
//               if (!h) {
//                 (i.mousewheel.lastEventBeforeSnap = void 0),
//                   i.params.loop && i.loopFix();
//                 var c = i.getTranslate() + r * s.sensitivity,
//                   u = i.isBeginning,
//                   f = i.isEnd;
//                 if (
//                   (c >= i.minTranslate() && (c = i.minTranslate()),
//                   c <= i.maxTranslate() && (c = i.maxTranslate()),
//                   i.setTransition(0),
//                   i.setTranslate(c),
//                   i.updateProgress(),
//                   i.updateActiveIndex(),
//                   i.updateSlidesClasses(),
//                   ((!u && i.isBeginning) || (!f && i.isEnd)) &&
//                     i.updateSlidesClasses(),
//                   i.params.freeModeSticky)
//                 ) {
//                   clearTimeout(i.mousewheel.timeout),
//                     (i.mousewheel.timeout = void 0);
//                   var v = i.mousewheel.recentWheelEvents;
//                   v.length >= 15 && v.shift();
//                   var g = v.length ? v[v.length - 1] : void 0,
//                     w = v[0];
//                   if (
//                     (v.push(d),
//                     g && (d.delta > g.delta || d.direction !== g.direction))
//                   )
//                     v.splice(0);
//                   else if (
//                     v.length >= 15 &&
//                     d.time - w.time < 500 &&
//                     w.delta - d.delta >= 1 &&
//                     d.delta <= 6
//                   ) {
//                     var y = r > 0 ? 0.8 : 0.2;
//                     (i.mousewheel.lastEventBeforeSnap = d),
//                       v.splice(0),
//                       (i.mousewheel.timeout = T(function () {
//                         i.slideToClosest(i.params.speed, !0, void 0, y);
//                       }, 0));
//                   }
//                   i.mousewheel.timeout ||
//                     (i.mousewheel.timeout = T(function () {
//                       (i.mousewheel.lastEventBeforeSnap = d),
//                         v.splice(0),
//                         i.slideToClosest(i.params.speed, !0, void 0, 0.5);
//                     }, 500));
//                 }
//                 if (
//                   (h || i.emit("scroll", t),
//                   i.params.autoplay &&
//                     i.params.autoplayDisableOnInteraction &&
//                     i.autoplay.stop(),
//                   c === i.minTranslate() || c === i.maxTranslate())
//                 )
//                   return !0;
//               }
//             } else {
//               var b = {
//                   time: S(),
//                   delta: Math.abs(r),
//                   direction: Math.sign(r),
//                   raw: e,
//                 },
//                 x = i.mousewheel.recentWheelEvents;
//               x.length >= 2 && x.shift();
//               var C = x.length ? x[x.length - 1] : void 0;
//               if (
//                 (x.push(b),
//                 C
//                   ? (b.direction !== C.direction ||
//                       b.delta > C.delta ||
//                       b.time > C.time + 150) &&
//                     i.mousewheel.animateSlider(b)
//                   : i.mousewheel.animateSlider(b),
//                 i.mousewheel.releaseScroll(b))
//               )
//                 return !0;
//             }
//             return (
//               t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
//             );
//           },
//           animateSlider: function (e) {
//             var t = o();
//             return !(
//               (this.params.mousewheel.thresholdDelta &&
//                 e.delta < this.params.mousewheel.thresholdDelta) ||
//               (this.params.mousewheel.thresholdTime &&
//                 S() - this.mousewheel.lastScrollTime <
//                   this.params.mousewheel.thresholdTime) ||
//               (!(e.delta >= 6 && S() - this.mousewheel.lastScrollTime < 60) &&
//                 (e.direction < 0
//                   ? (this.isEnd && !this.params.loop) ||
//                     this.animating ||
//                     (this.slideNext(), this.emit("scroll", e.raw))
//                   : (this.isBeginning && !this.params.loop) ||
//                     this.animating ||
//                     (this.slidePrev(), this.emit("scroll", e.raw)),
//                 (this.mousewheel.lastScrollTime = new t.Date().getTime()),
//                 1))
//             );
//           },
//           releaseScroll: function (e) {
//             var t = this.params.mousewheel;
//             if (e.direction < 0) {
//               if (this.isEnd && !this.params.loop && t.releaseOnEdges)
//                 return !0;
//             } else if (
//               this.isBeginning &&
//               !this.params.loop &&
//               t.releaseOnEdges
//             )
//               return !0;
//             return !1;
//           },
//           enable: function () {
//             var e = U.event();
//             if (this.params.cssMode)
//               return (
//                 this.wrapperEl.removeEventListener(e, this.mousewheel.handle),
//                 !0
//               );
//             if (!e) return !1;
//             if (this.mousewheel.enabled) return !1;
//             var t = this.$el;
//             return (
//               "container" !== this.params.mousewheel.eventsTarget &&
//                 (t = m(this.params.mousewheel.eventsTarget)),
//               t.on("mouseenter", this.mousewheel.handleMouseEnter),
//               t.on("mouseleave", this.mousewheel.handleMouseLeave),
//               t.on(e, this.mousewheel.handle),
//               (this.mousewheel.enabled = !0),
//               !0
//             );
//           },
//           disable: function () {
//             var e = U.event();
//             if (this.params.cssMode)
//               return (
//                 this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0
//               );
//             if (!e) return !1;
//             if (!this.mousewheel.enabled) return !1;
//             var t = this.$el;
//             return (
//               "container" !== this.params.mousewheel.eventsTarget &&
//                 (t = m(this.params.mousewheel.eventsTarget)),
//               t.off(e, this.mousewheel.handle),
//               (this.mousewheel.enabled = !1),
//               !0
//             );
//           },
//         },
//         K = {
//           update: function () {
//             var e = this.params.navigation;
//             if (!this.params.loop) {
//               var t = this.navigation,
//                 i = t.$nextEl,
//                 s = t.$prevEl;
//               s &&
//                 s.length > 0 &&
//                 (this.isBeginning
//                   ? s.addClass(e.disabledClass)
//                   : s.removeClass(e.disabledClass),
//                 s[
//                   this.params.watchOverflow && this.isLocked
//                     ? "addClass"
//                     : "removeClass"
//                 ](e.lockClass)),
//                 i &&
//                   i.length > 0 &&
//                   (this.isEnd
//                     ? i.addClass(e.disabledClass)
//                     : i.removeClass(e.disabledClass),
//                   i[
//                     this.params.watchOverflow && this.isLocked
//                       ? "addClass"
//                       : "removeClass"
//                   ](e.lockClass));
//             }
//           },
//           onPrevClick: function (e) {
//             e.preventDefault(),
//               (this.isBeginning && !this.params.loop) || this.slidePrev();
//           },
//           onNextClick: function (e) {
//             e.preventDefault(),
//               (this.isEnd && !this.params.loop) || this.slideNext();
//           },
//           init: function () {
//             var e,
//               t,
//               i = this.params.navigation;
//             (i.nextEl || i.prevEl) &&
//               (i.nextEl &&
//                 ((e = m(i.nextEl)),
//                 this.params.uniqueNavElements &&
//                   "string" == typeof i.nextEl &&
//                   e.length > 1 &&
//                   1 === this.$el.find(i.nextEl).length &&
//                   (e = this.$el.find(i.nextEl))),
//               i.prevEl &&
//                 ((t = m(i.prevEl)),
//                 this.params.uniqueNavElements &&
//                   "string" == typeof i.prevEl &&
//                   t.length > 1 &&
//                   1 === this.$el.find(i.prevEl).length &&
//                   (t = this.$el.find(i.prevEl))),
//               e && e.length > 0 && e.on("click", this.navigation.onNextClick),
//               t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
//               E(this.navigation, {
//                 $nextEl: e,
//                 nextEl: e && e[0],
//                 $prevEl: t,
//                 prevEl: t && t[0],
//               }));
//           },
//           destroy: function () {
//             var e = this.navigation,
//               t = e.$nextEl,
//               i = e.$prevEl;
//             t &&
//               t.length &&
//               (t.off("click", this.navigation.onNextClick),
//               t.removeClass(this.params.navigation.disabledClass)),
//               i &&
//                 i.length &&
//                 (i.off("click", this.navigation.onPrevClick),
//                 i.removeClass(this.params.navigation.disabledClass));
//           },
//         },
//         J = {
//           update: function () {
//             var e = this.rtl,
//               t = this.params.pagination;
//             if (
//               t.el &&
//               this.pagination.el &&
//               this.pagination.$el &&
//               0 !== this.pagination.$el.length
//             ) {
//               var i,
//                 s =
//                   this.virtual && this.params.virtual.enabled
//                     ? this.virtual.slides.length
//                     : this.slides.length,
//                 a = this.pagination.$el,
//                 r = this.params.loop
//                   ? Math.ceil(
//                       (s - 2 * this.loopedSlides) / this.params.slidesPerGroup
//                     )
//                   : this.snapGrid.length;
//               if (
//                 (this.params.loop
//                   ? ((i = Math.ceil(
//                       (this.activeIndex - this.loopedSlides) /
//                         this.params.slidesPerGroup
//                     )) >
//                       s - 1 - 2 * this.loopedSlides &&
//                       (i -= s - 2 * this.loopedSlides),
//                     i > r - 1 && (i -= r),
//                     i < 0 &&
//                       "bullets" !== this.params.paginationType &&
//                       (i = r + i))
//                   : (i =
//                       void 0 !== this.snapIndex
//                         ? this.snapIndex
//                         : this.activeIndex || 0),
//                 "bullets" === t.type &&
//                   this.pagination.bullets &&
//                   this.pagination.bullets.length > 0)
//               ) {
//                 var n,
//                   o,
//                   l,
//                   d = this.pagination.bullets;
//                 if (
//                   (t.dynamicBullets &&
//                     ((this.pagination.bulletSize = d
//                       .eq(0)
//                       [this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
//                     a.css(
//                       this.isHorizontal() ? "width" : "height",
//                       this.pagination.bulletSize * (t.dynamicMainBullets + 4) +
//                         "px"
//                     ),
//                     t.dynamicMainBullets > 1 &&
//                       void 0 !== this.previousIndex &&
//                       ((this.pagination.dynamicBulletIndex +=
//                         i - this.previousIndex),
//                       this.pagination.dynamicBulletIndex >
//                       t.dynamicMainBullets - 1
//                         ? (this.pagination.dynamicBulletIndex =
//                             t.dynamicMainBullets - 1)
//                         : this.pagination.dynamicBulletIndex < 0 &&
//                           (this.pagination.dynamicBulletIndex = 0)),
//                     (n = i - this.pagination.dynamicBulletIndex),
//                     (l =
//                       ((o =
//                         n + (Math.min(d.length, t.dynamicMainBullets) - 1)) +
//                         n) /
//                       2)),
//                   d.removeClass(
//                     t.bulletActiveClass +
//                       " " +
//                       t.bulletActiveClass +
//                       "-next " +
//                       t.bulletActiveClass +
//                       "-next-next " +
//                       t.bulletActiveClass +
//                       "-prev " +
//                       t.bulletActiveClass +
//                       "-prev-prev " +
//                       t.bulletActiveClass +
//                       "-main"
//                   ),
//                   a.length > 1)
//                 )
//                   d.each(function (e) {
//                     var s = m(e),
//                       a = s.index();
//                     a === i && s.addClass(t.bulletActiveClass),
//                       t.dynamicBullets &&
//                         (a >= n &&
//                           a <= o &&
//                           s.addClass(t.bulletActiveClass + "-main"),
//                         a === n &&
//                           s
//                             .prev()
//                             .addClass(t.bulletActiveClass + "-prev")
//                             .prev()
//                             .addClass(t.bulletActiveClass + "-prev-prev"),
//                         a === o &&
//                           s
//                             .next()
//                             .addClass(t.bulletActiveClass + "-next")
//                             .next()
//                             .addClass(t.bulletActiveClass + "-next-next"));
//                   });
//                 else {
//                   var p = d.eq(i),
//                     h = p.index();
//                   if ((p.addClass(t.bulletActiveClass), t.dynamicBullets)) {
//                     for (var c = d.eq(n), u = d.eq(o), f = n; f <= o; f += 1)
//                       d.eq(f).addClass(t.bulletActiveClass + "-main");
//                     if (this.params.loop)
//                       if (h >= d.length - t.dynamicMainBullets) {
//                         for (var v = t.dynamicMainBullets; v >= 0; v -= 1)
//                           d.eq(d.length - v).addClass(
//                             t.bulletActiveClass + "-main"
//                           );
//                         d.eq(d.length - t.dynamicMainBullets - 1).addClass(
//                           t.bulletActiveClass + "-prev"
//                         );
//                       } else
//                         c
//                           .prev()
//                           .addClass(t.bulletActiveClass + "-prev")
//                           .prev()
//                           .addClass(t.bulletActiveClass + "-prev-prev"),
//                           u
//                             .next()
//                             .addClass(t.bulletActiveClass + "-next")
//                             .next()
//                             .addClass(t.bulletActiveClass + "-next-next");
//                     else
//                       c
//                         .prev()
//                         .addClass(t.bulletActiveClass + "-prev")
//                         .prev()
//                         .addClass(t.bulletActiveClass + "-prev-prev"),
//                         u
//                           .next()
//                           .addClass(t.bulletActiveClass + "-next")
//                           .next()
//                           .addClass(t.bulletActiveClass + "-next-next");
//                   }
//                 }
//                 if (t.dynamicBullets) {
//                   var g = Math.min(d.length, t.dynamicMainBullets + 4),
//                     w =
//                       (this.pagination.bulletSize * g -
//                         this.pagination.bulletSize) /
//                         2 -
//                       l * this.pagination.bulletSize,
//                     y = e ? "right" : "left";
//                   d.css(this.isHorizontal() ? y : "top", w + "px");
//                 }
//               }
//               if (
//                 ("fraction" === t.type &&
//                   (a
//                     .find("." + t.currentClass)
//                     .text(t.formatFractionCurrent(i + 1)),
//                   a.find("." + t.totalClass).text(t.formatFractionTotal(r))),
//                 "progressbar" === t.type)
//               ) {
//                 var b;
//                 b = t.progressbarOpposite
//                   ? this.isHorizontal()
//                     ? "vertical"
//                     : "horizontal"
//                   : this.isHorizontal()
//                   ? "horizontal"
//                   : "vertical";
//                 var T = (i + 1) / r,
//                   S = 1,
//                   x = 1;
//                 "horizontal" === b ? (S = T) : (x = T),
//                   a
//                     .find("." + t.progressbarFillClass)
//                     .transform(
//                       "translate3d(0,0,0) scaleX(" + S + ") scaleY(" + x + ")"
//                     )
//                     .transition(this.params.speed);
//               }
//               "custom" === t.type && t.renderCustom
//                 ? (a.html(t.renderCustom(this, i + 1, r)),
//                   this.emit("paginationRender", a[0]))
//                 : this.emit("paginationUpdate", a[0]),
//                 a[
//                   this.params.watchOverflow && this.isLocked
//                     ? "addClass"
//                     : "removeClass"
//                 ](t.lockClass);
//             }
//           },
//           render: function () {
//             var e = this.params.pagination;
//             if (
//               e.el &&
//               this.pagination.el &&
//               this.pagination.$el &&
//               0 !== this.pagination.$el.length
//             ) {
//               var t =
//                   this.virtual && this.params.virtual.enabled
//                     ? this.virtual.slides.length
//                     : this.slides.length,
//                 i = this.pagination.$el,
//                 s = "";
//               if ("bullets" === e.type) {
//                 for (
//                   var a = this.params.loop
//                       ? Math.ceil(
//                           (t - 2 * this.loopedSlides) /
//                             this.params.slidesPerGroup
//                         )
//                       : this.snapGrid.length,
//                     r = 0;
//                   r < a;
//                   r += 1
//                 )
//                   e.renderBullet
//                     ? (s += e.renderBullet.call(this, r, e.bulletClass))
//                     : (s +=
//                         "<" +
//                         e.bulletElement +
//                         ' class="' +
//                         e.bulletClass +
//                         '"></' +
//                         e.bulletElement +
//                         ">");
//                 i.html(s),
//                   (this.pagination.bullets = i.find(
//                     "." + e.bulletClass.replace(/ /g, ".")
//                   ));
//               }
//               "fraction" === e.type &&
//                 ((s = e.renderFraction
//                   ? e.renderFraction.call(this, e.currentClass, e.totalClass)
//                   : '<span class="' +
//                     e.currentClass +
//                     '"></span> / <span class="' +
//                     e.totalClass +
//                     '"></span>'),
//                 i.html(s)),
//                 "progressbar" === e.type &&
//                   ((s = e.renderProgressbar
//                     ? e.renderProgressbar.call(this, e.progressbarFillClass)
//                     : '<span class="' + e.progressbarFillClass + '"></span>'),
//                   i.html(s)),
//                 "custom" !== e.type &&
//                   this.emit("paginationRender", this.pagination.$el[0]);
//             }
//           },
//           init: function () {
//             var e = this,
//               t = e.params.pagination;
//             if (t.el) {
//               var i = m(t.el);
//               0 !== i.length &&
//                 (e.params.uniqueNavElements &&
//                   "string" == typeof t.el &&
//                   i.length > 1 &&
//                   (i = e.$el.find(t.el)),
//                 "bullets" === t.type &&
//                   t.clickable &&
//                   i.addClass(t.clickableClass),
//                 i.addClass(t.modifierClass + t.type),
//                 "bullets" === t.type &&
//                   t.dynamicBullets &&
//                   (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
//                   (e.pagination.dynamicBulletIndex = 0),
//                   t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
//                 "progressbar" === t.type &&
//                   t.progressbarOpposite &&
//                   i.addClass(t.progressbarOppositeClass),
//                 t.clickable &&
//                   i.on(
//                     "click",
//                     "." + t.bulletClass.replace(/ /g, "."),
//                     function (t) {
//                       t.preventDefault();
//                       var i = m(this).index() * e.params.slidesPerGroup;
//                       e.params.loop && (i += e.loopedSlides), e.slideTo(i);
//                     }
//                   ),
//                 E(e.pagination, { $el: i, el: i[0] }));
//             }
//           },
//           destroy: function () {
//             var e = this.params.pagination;
//             if (
//               e.el &&
//               this.pagination.el &&
//               this.pagination.$el &&
//               0 !== this.pagination.$el.length
//             ) {
//               var t = this.pagination.$el;
//               t.removeClass(e.hiddenClass),
//                 t.removeClass(e.modifierClass + e.type),
//                 this.pagination.bullets &&
//                   this.pagination.bullets.removeClass(e.bulletActiveClass),
//                 e.clickable &&
//                   t.off("click", "." + e.bulletClass.replace(/ /g, "."));
//             }
//           },
//         },
//         Z = {
//           setTranslate: function () {
//             if (this.params.scrollbar.el && this.scrollbar.el) {
//               var e = this.scrollbar,
//                 t = this.rtlTranslate,
//                 i = this.progress,
//                 s = e.dragSize,
//                 a = e.trackSize,
//                 r = e.$dragEl,
//                 n = e.$el,
//                 o = this.params.scrollbar,
//                 l = s,
//                 d = (a - s) * i;
//               t
//                 ? (d = -d) > 0
//                   ? ((l = s - d), (d = 0))
//                   : -d + s > a && (l = a + d)
//                 : d < 0
//                 ? ((l = s + d), (d = 0))
//                 : d + s > a && (l = a - d),
//                 this.isHorizontal()
//                   ? (r.transform("translate3d(" + d + "px, 0, 0)"),
//                     (r[0].style.width = l + "px"))
//                   : (r.transform("translate3d(0px, " + d + "px, 0)"),
//                     (r[0].style.height = l + "px")),
//                 o.hide &&
//                   (clearTimeout(this.scrollbar.timeout),
//                   (n[0].style.opacity = 1),
//                   (this.scrollbar.timeout = setTimeout(function () {
//                     (n[0].style.opacity = 0), n.transition(400);
//                   }, 1e3)));
//             }
//           },
//           setTransition: function (e) {
//             this.params.scrollbar.el &&
//               this.scrollbar.el &&
//               this.scrollbar.$dragEl.transition(e);
//           },
//           updateSize: function () {
//             if (this.params.scrollbar.el && this.scrollbar.el) {
//               var e = this.scrollbar,
//                 t = e.$dragEl,
//                 i = e.$el;
//               (t[0].style.width = ""), (t[0].style.height = "");
//               var s,
//                 a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
//                 r = this.size / this.virtualSize,
//                 n = r * (a / this.size);
//               (s =
//                 "auto" === this.params.scrollbar.dragSize
//                   ? a * r
//                   : parseInt(this.params.scrollbar.dragSize, 10)),
//                 this.isHorizontal()
//                   ? (t[0].style.width = s + "px")
//                   : (t[0].style.height = s + "px"),
//                 (i[0].style.display = r >= 1 ? "none" : ""),
//                 this.params.scrollbar.hide && (i[0].style.opacity = 0),
//                 E(e, { trackSize: a, divider: r, moveDivider: n, dragSize: s }),
//                 e.$el[
//                   this.params.watchOverflow && this.isLocked
//                     ? "addClass"
//                     : "removeClass"
//                 ](this.params.scrollbar.lockClass);
//             }
//           },
//           getPointerPosition: function (e) {
//             return this.isHorizontal()
//               ? "touchstart" === e.type || "touchmove" === e.type
//                 ? e.targetTouches[0].clientX
//                 : e.clientX
//               : "touchstart" === e.type || "touchmove" === e.type
//               ? e.targetTouches[0].clientY
//               : e.clientY;
//           },
//           setDragPosition: function (e) {
//             var t,
//               i = this.scrollbar,
//               s = this.rtlTranslate,
//               a = i.$el,
//               r = i.dragSize,
//               n = i.trackSize,
//               o = i.dragStartPos;
//             (t =
//               (i.getPointerPosition(e) -
//                 a.offset()[this.isHorizontal() ? "left" : "top"] -
//                 (null !== o ? o : r / 2)) /
//               (n - r)),
//               (t = Math.max(Math.min(t, 1), 0)),
//               s && (t = 1 - t);
//             var l =
//               this.minTranslate() +
//               (this.maxTranslate() - this.minTranslate()) * t;
//             this.updateProgress(l),
//               this.setTranslate(l),
//               this.updateActiveIndex(),
//               this.updateSlidesClasses();
//           },
//           onDragStart: function (e) {
//             var t = this.params.scrollbar,
//               i = this.scrollbar,
//               s = this.$wrapperEl,
//               a = i.$el,
//               r = i.$dragEl;
//             (this.scrollbar.isTouched = !0),
//               (this.scrollbar.dragStartPos =
//                 e.target === r[0] || e.target === r
//                   ? i.getPointerPosition(e) -
//                     e.target.getBoundingClientRect()[
//                       this.isHorizontal() ? "left" : "top"
//                     ]
//                   : null),
//               e.preventDefault(),
//               e.stopPropagation(),
//               s.transition(100),
//               r.transition(100),
//               i.setDragPosition(e),
//               clearTimeout(this.scrollbar.dragTimeout),
//               a.transition(0),
//               t.hide && a.css("opacity", 1),
//               this.params.cssMode &&
//                 this.$wrapperEl.css("scroll-snap-type", "none"),
//               this.emit("scrollbarDragStart", e);
//           },
//           onDragMove: function (e) {
//             var t = this.scrollbar,
//               i = this.$wrapperEl,
//               s = t.$el,
//               a = t.$dragEl;
//             this.scrollbar.isTouched &&
//               (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
//               t.setDragPosition(e),
//               i.transition(0),
//               s.transition(0),
//               a.transition(0),
//               this.emit("scrollbarDragMove", e));
//           },
//           onDragEnd: function (e) {
//             var t = this.params.scrollbar,
//               i = this.scrollbar,
//               s = this.$wrapperEl,
//               a = i.$el;
//             this.scrollbar.isTouched &&
//               ((this.scrollbar.isTouched = !1),
//               this.params.cssMode &&
//                 (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
//               t.hide &&
//                 (clearTimeout(this.scrollbar.dragTimeout),
//                 (this.scrollbar.dragTimeout = T(function () {
//                   a.css("opacity", 0), a.transition(400);
//                 }, 1e3))),
//               this.emit("scrollbarDragEnd", e),
//               t.snapOnRelease && this.slideToClosest());
//           },
//           enableDraggable: function () {
//             if (this.params.scrollbar.el) {
//               var e = r(),
//                 t = this.scrollbar,
//                 i = this.touchEventsTouch,
//                 s = this.touchEventsDesktop,
//                 a = this.params,
//                 n = this.support,
//                 o = t.$el[0],
//                 l = !(!n.passiveListener || !a.passiveListeners) && {
//                   passive: !1,
//                   capture: !1,
//                 },
//                 d = !(!n.passiveListener || !a.passiveListeners) && {
//                   passive: !0,
//                   capture: !1,
//                 };
//               n.touch
//                 ? (o.addEventListener(i.start, this.scrollbar.onDragStart, l),
//                   o.addEventListener(i.move, this.scrollbar.onDragMove, l),
//                   o.addEventListener(i.end, this.scrollbar.onDragEnd, d))
//                 : (o.addEventListener(s.start, this.scrollbar.onDragStart, l),
//                   e.addEventListener(s.move, this.scrollbar.onDragMove, l),
//                   e.addEventListener(s.end, this.scrollbar.onDragEnd, d));
//             }
//           },
//           disableDraggable: function () {
//             if (this.params.scrollbar.el) {
//               var e = r(),
//                 t = this.scrollbar,
//                 i = this.touchEventsTouch,
//                 s = this.touchEventsDesktop,
//                 a = this.params,
//                 n = this.support,
//                 o = t.$el[0],
//                 l = !(!n.passiveListener || !a.passiveListeners) && {
//                   passive: !1,
//                   capture: !1,
//                 },
//                 d = !(!n.passiveListener || !a.passiveListeners) && {
//                   passive: !0,
//                   capture: !1,
//                 };
//               n.touch
//                 ? (o.removeEventListener(
//                     i.start,
//                     this.scrollbar.onDragStart,
//                     l
//                   ),
//                   o.removeEventListener(i.move, this.scrollbar.onDragMove, l),
//                   o.removeEventListener(i.end, this.scrollbar.onDragEnd, d))
//                 : (o.removeEventListener(
//                     s.start,
//                     this.scrollbar.onDragStart,
//                     l
//                   ),
//                   e.removeEventListener(s.move, this.scrollbar.onDragMove, l),
//                   e.removeEventListener(s.end, this.scrollbar.onDragEnd, d));
//             }
//           },
//           init: function () {
//             if (this.params.scrollbar.el) {
//               var e = this.scrollbar,
//                 t = this.$el,
//                 i = this.params.scrollbar,
//                 s = m(i.el);
//               this.params.uniqueNavElements &&
//                 "string" == typeof i.el &&
//                 s.length > 1 &&
//                 1 === t.find(i.el).length &&
//                 (s = t.find(i.el));
//               var a = s.find("." + this.params.scrollbar.dragClass);
//               0 === a.length &&
//                 ((a = m(
//                   '<div class="' + this.params.scrollbar.dragClass + '"></div>'
//                 )),
//                 s.append(a)),
//                 E(e, { $el: s, el: s[0], $dragEl: a, dragEl: a[0] }),
//                 i.draggable && e.enableDraggable();
//             }
//           },
//           destroy: function () {
//             this.scrollbar.disableDraggable();
//           },
//         },
//         Q = {
//           setTransform: function (e, t) {
//             var i = this.rtl,
//               s = m(e),
//               a = i ? -1 : 1,
//               r = s.attr("data-swiper-parallax") || "0",
//               n = s.attr("data-swiper-parallax-x"),
//               o = s.attr("data-swiper-parallax-y"),
//               l = s.attr("data-swiper-parallax-scale"),
//               d = s.attr("data-swiper-parallax-opacity");
//             if (
//               (n || o
//                 ? ((n = n || "0"), (o = o || "0"))
//                 : this.isHorizontal()
//                 ? ((n = r), (o = "0"))
//                 : ((o = r), (n = "0")),
//               (n =
//                 n.indexOf("%") >= 0
//                   ? parseInt(n, 10) * t * a + "%"
//                   : n * t * a + "px"),
//               (o =
//                 o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px"),
//               null != d)
//             ) {
//               var p = d - (d - 1) * (1 - Math.abs(t));
//               s[0].style.opacity = p;
//             }
//             if (null == l)
//               s.transform("translate3d(" + n + ", " + o + ", 0px)");
//             else {
//               var h = l - (l - 1) * (1 - Math.abs(t));
//               s.transform(
//                 "translate3d(" + n + ", " + o + ", 0px) scale(" + h + ")"
//               );
//             }
//           },
//           setTranslate: function () {
//             var e = this,
//               t = e.$el,
//               i = e.slides,
//               s = e.progress,
//               a = e.snapGrid;
//             t
//               .children(
//                 "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
//               )
//               .each(function (t) {
//                 e.parallax.setTransform(t, s);
//               }),
//               i.each(function (t, i) {
//                 var r = t.progress;
//                 e.params.slidesPerGroup > 1 &&
//                   "auto" !== e.params.slidesPerView &&
//                   (r += Math.ceil(i / 2) - s * (a.length - 1)),
//                   (r = Math.min(Math.max(r, -1), 1)),
//                   m(t)
//                     .find(
//                       "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
//                     )
//                     .each(function (t) {
//                       e.parallax.setTransform(t, r);
//                     });
//               });
//           },
//           setTransition: function (e) {
//             void 0 === e && (e = this.params.speed),
//               this.$el
//                 .find(
//                   "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
//                 )
//                 .each(function (t) {
//                   var i = m(t),
//                     s =
//                       parseInt(i.attr("data-swiper-parallax-duration"), 10) ||
//                       e;
//                   0 === e && (s = 0), i.transition(s);
//                 });
//           },
//         },
//         ee = {
//           getDistanceBetweenTouches: function (e) {
//             if (e.targetTouches.length < 2) return 1;
//             var t = e.targetTouches[0].pageX,
//               i = e.targetTouches[0].pageY,
//               s = e.targetTouches[1].pageX,
//               a = e.targetTouches[1].pageY;
//             return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
//           },
//           onGestureStart: function (e) {
//             var t = this.support,
//               i = this.params.zoom,
//               s = this.zoom,
//               a = s.gesture;
//             if (
//               ((s.fakeGestureTouched = !1),
//               (s.fakeGestureMoved = !1),
//               !t.gestures)
//             ) {
//               if (
//                 "touchstart" !== e.type ||
//                 ("touchstart" === e.type && e.targetTouches.length < 2)
//               )
//                 return;
//               (s.fakeGestureTouched = !0),
//                 (a.scaleStart = ee.getDistanceBetweenTouches(e));
//             }
//             (a.$slideEl && a.$slideEl.length) ||
//             ((a.$slideEl = m(e.target).closest("." + this.params.slideClass)),
//             0 === a.$slideEl.length &&
//               (a.$slideEl = this.slides.eq(this.activeIndex)),
//             (a.$imageEl = a.$slideEl.find(
//               "img, svg, canvas, picture, .swiper-zoom-target"
//             )),
//             (a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass)),
//             (a.maxRatio =
//               a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
//             0 !== a.$imageWrapEl.length)
//               ? (a.$imageEl && a.$imageEl.transition(0),
//                 (this.zoom.isScaling = !0))
//               : (a.$imageEl = void 0);
//           },
//           onGestureChange: function (e) {
//             var t = this.support,
//               i = this.params.zoom,
//               s = this.zoom,
//               a = s.gesture;
//             if (!t.gestures) {
//               if (
//                 "touchmove" !== e.type ||
//                 ("touchmove" === e.type && e.targetTouches.length < 2)
//               )
//                 return;
//               (s.fakeGestureMoved = !0),
//                 (a.scaleMove = ee.getDistanceBetweenTouches(e));
//             }
//             a.$imageEl && 0 !== a.$imageEl.length
//               ? (t.gestures
//                   ? (s.scale = e.scale * s.currentScale)
//                   : (s.scale = (a.scaleMove / a.scaleStart) * s.currentScale),
//                 s.scale > a.maxRatio &&
//                   (s.scale =
//                     a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, 0.5)),
//                 s.scale < i.minRatio &&
//                   (s.scale =
//                     i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, 0.5)),
//                 a.$imageEl.transform(
//                   "translate3d(0,0,0) scale(" + s.scale + ")"
//                 ))
//               : "gesturechange" === e.type && s.onGestureStart(e);
//           },
//           onGestureEnd: function (e) {
//             var t = this.device,
//               i = this.support,
//               s = this.params.zoom,
//               a = this.zoom,
//               r = a.gesture;
//             if (!i.gestures) {
//               if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
//               if (
//                 "touchend" !== e.type ||
//                 ("touchend" === e.type &&
//                   e.changedTouches.length < 2 &&
//                   !t.android)
//               )
//                 return;
//               (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
//             }
//             r.$imageEl &&
//               0 !== r.$imageEl.length &&
//               ((a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio)),
//               r.$imageEl
//                 .transition(this.params.speed)
//                 .transform("translate3d(0,0,0) scale(" + a.scale + ")"),
//               (a.currentScale = a.scale),
//               (a.isScaling = !1),
//               1 === a.scale && (r.$slideEl = void 0));
//           },
//           onTouchStart: function (e) {
//             var t = this.device,
//               i = this.zoom,
//               s = i.gesture,
//               a = i.image;
//             s.$imageEl &&
//               0 !== s.$imageEl.length &&
//               (a.isTouched ||
//                 (t.android && e.cancelable && e.preventDefault(),
//                 (a.isTouched = !0),
//                 (a.touchesStart.x =
//                   "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
//                 (a.touchesStart.y =
//                   "touchstart" === e.type
//                     ? e.targetTouches[0].pageY
//                     : e.pageY)));
//           },
//           onTouchMove: function (e) {
//             var t = this.zoom,
//               i = t.gesture,
//               s = t.image,
//               a = t.velocity;
//             if (
//               i.$imageEl &&
//               0 !== i.$imageEl.length &&
//               ((this.allowClick = !1), s.isTouched && i.$slideEl)
//             ) {
//               s.isMoved ||
//                 ((s.width = i.$imageEl[0].offsetWidth),
//                 (s.height = i.$imageEl[0].offsetHeight),
//                 (s.startX = x(i.$imageWrapEl[0], "x") || 0),
//                 (s.startY = x(i.$imageWrapEl[0], "y") || 0),
//                 (i.slideWidth = i.$slideEl[0].offsetWidth),
//                 (i.slideHeight = i.$slideEl[0].offsetHeight),
//                 i.$imageWrapEl.transition(0),
//                 this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
//               var r = s.width * t.scale,
//                 n = s.height * t.scale;
//               if (!(r < i.slideWidth && n < i.slideHeight)) {
//                 if (
//                   ((s.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
//                   (s.maxX = -s.minX),
//                   (s.minY = Math.min(i.slideHeight / 2 - n / 2, 0)),
//                   (s.maxY = -s.minY),
//                   (s.touchesCurrent.x =
//                     "touchmove" === e.type
//                       ? e.targetTouches[0].pageX
//                       : e.pageX),
//                   (s.touchesCurrent.y =
//                     "touchmove" === e.type
//                       ? e.targetTouches[0].pageY
//                       : e.pageY),
//                   !s.isMoved && !t.isScaling)
//                 ) {
//                   if (
//                     this.isHorizontal() &&
//                     ((Math.floor(s.minX) === Math.floor(s.startX) &&
//                       s.touchesCurrent.x < s.touchesStart.x) ||
//                       (Math.floor(s.maxX) === Math.floor(s.startX) &&
//                         s.touchesCurrent.x > s.touchesStart.x))
//                   )
//                     return void (s.isTouched = !1);
//                   if (
//                     !this.isHorizontal() &&
//                     ((Math.floor(s.minY) === Math.floor(s.startY) &&
//                       s.touchesCurrent.y < s.touchesStart.y) ||
//                       (Math.floor(s.maxY) === Math.floor(s.startY) &&
//                         s.touchesCurrent.y > s.touchesStart.y))
//                   )
//                     return void (s.isTouched = !1);
//                 }
//                 e.cancelable && e.preventDefault(),
//                   e.stopPropagation(),
//                   (s.isMoved = !0),
//                   (s.currentX =
//                     s.touchesCurrent.x - s.touchesStart.x + s.startX),
//                   (s.currentY =
//                     s.touchesCurrent.y - s.touchesStart.y + s.startY),
//                   s.currentX < s.minX &&
//                     (s.currentX =
//                       s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
//                   s.currentX > s.maxX &&
//                     (s.currentX =
//                       s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
//                   s.currentY < s.minY &&
//                     (s.currentY =
//                       s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
//                   s.currentY > s.maxY &&
//                     (s.currentY =
//                       s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
//                   a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
//                   a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
//                   a.prevTime || (a.prevTime = Date.now()),
//                   (a.x =
//                     (s.touchesCurrent.x - a.prevPositionX) /
//                     (Date.now() - a.prevTime) /
//                     2),
//                   (a.y =
//                     (s.touchesCurrent.y - a.prevPositionY) /
//                     (Date.now() - a.prevTime) /
//                     2),
//                   Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 &&
//                     (a.x = 0),
//                   Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 &&
//                     (a.y = 0),
//                   (a.prevPositionX = s.touchesCurrent.x),
//                   (a.prevPositionY = s.touchesCurrent.y),
//                   (a.prevTime = Date.now()),
//                   i.$imageWrapEl.transform(
//                     "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
//                   );
//               }
//             }
//           },
//           onTouchEnd: function () {
//             var e = this.zoom,
//               t = e.gesture,
//               i = e.image,
//               s = e.velocity;
//             if (t.$imageEl && 0 !== t.$imageEl.length) {
//               if (!i.isTouched || !i.isMoved)
//                 return (i.isTouched = !1), void (i.isMoved = !1);
//               (i.isTouched = !1), (i.isMoved = !1);
//               var a = 300,
//                 r = 300,
//                 n = s.x * a,
//                 o = i.currentX + n,
//                 l = s.y * r,
//                 d = i.currentY + l;
//               0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
//                 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
//               var p = Math.max(a, r);
//               (i.currentX = o), (i.currentY = d);
//               var h = i.width * e.scale,
//                 c = i.height * e.scale;
//               (i.minX = Math.min(t.slideWidth / 2 - h / 2, 0)),
//                 (i.maxX = -i.minX),
//                 (i.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
//                 (i.maxY = -i.minY),
//                 (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
//                 (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
//                 t.$imageWrapEl
//                   .transition(p)
//                   .transform(
//                     "translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"
//                   );
//             }
//           },
//           onTransitionEnd: function () {
//             var e = this.zoom,
//               t = e.gesture;
//             t.$slideEl &&
//               this.previousIndex !== this.activeIndex &&
//               (t.$imageEl &&
//                 t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
//               t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
//               (e.scale = 1),
//               (e.currentScale = 1),
//               (t.$slideEl = void 0),
//               (t.$imageEl = void 0),
//               (t.$imageWrapEl = void 0));
//           },
//           toggle: function (e) {
//             var t = this.zoom;
//             t.scale && 1 !== t.scale ? t.out() : t.in(e);
//           },
//           in: function (e) {
//             var t,
//               i,
//               s,
//               a,
//               r,
//               n,
//               o,
//               l,
//               d,
//               p,
//               h,
//               c,
//               u,
//               f,
//               v,
//               m,
//               g = this.zoom,
//               w = this.params.zoom,
//               y = g.gesture,
//               b = g.image;
//             y.$slideEl ||
//               (this.params.virtual &&
//               this.params.virtual.enabled &&
//               this.virtual
//                 ? (y.$slideEl = this.$wrapperEl.children(
//                     "." + this.params.slideActiveClass
//                   ))
//                 : (y.$slideEl = this.slides.eq(this.activeIndex)),
//               (y.$imageEl = y.$slideEl.find(
//                 "img, svg, canvas, picture, .swiper-zoom-target"
//               )),
//               (y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass))),
//               y.$imageEl &&
//                 0 !== y.$imageEl.length &&
//                 (y.$slideEl.addClass("" + w.zoomedSlideClass),
//                 void 0 === b.touchesStart.x && e
//                   ? ((t =
//                       "touchend" === e.type
//                         ? e.changedTouches[0].pageX
//                         : e.pageX),
//                     (i =
//                       "touchend" === e.type
//                         ? e.changedTouches[0].pageY
//                         : e.pageY))
//                   : ((t = b.touchesStart.x), (i = b.touchesStart.y)),
//                 (g.scale =
//                   y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
//                 (g.currentScale =
//                   y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
//                 e
//                   ? ((v = y.$slideEl[0].offsetWidth),
//                     (m = y.$slideEl[0].offsetHeight),
//                     (s = y.$slideEl.offset().left + v / 2 - t),
//                     (a = y.$slideEl.offset().top + m / 2 - i),
//                     (o = y.$imageEl[0].offsetWidth),
//                     (l = y.$imageEl[0].offsetHeight),
//                     (d = o * g.scale),
//                     (p = l * g.scale),
//                     (u = -(h = Math.min(v / 2 - d / 2, 0))),
//                     (f = -(c = Math.min(m / 2 - p / 2, 0))),
//                     (r = s * g.scale) < h && (r = h),
//                     r > u && (r = u),
//                     (n = a * g.scale) < c && (n = c),
//                     n > f && (n = f))
//                   : ((r = 0), (n = 0)),
//                 y.$imageWrapEl
//                   .transition(300)
//                   .transform("translate3d(" + r + "px, " + n + "px,0)"),
//                 y.$imageEl
//                   .transition(300)
//                   .transform("translate3d(0,0,0) scale(" + g.scale + ")"));
//           },
//           out: function () {
//             var e = this.zoom,
//               t = this.params.zoom,
//               i = e.gesture;
//             i.$slideEl ||
//               (this.params.virtual &&
//               this.params.virtual.enabled &&
//               this.virtual
//                 ? (i.$slideEl = this.$wrapperEl.children(
//                     "." + this.params.slideActiveClass
//                   ))
//                 : (i.$slideEl = this.slides.eq(this.activeIndex)),
//               (i.$imageEl = i.$slideEl.find(
//                 "img, svg, canvas, picture, .swiper-zoom-target"
//               )),
//               (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
//               i.$imageEl &&
//                 0 !== i.$imageEl.length &&
//                 ((e.scale = 1),
//                 (e.currentScale = 1),
//                 i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
//                 i.$imageEl
//                   .transition(300)
//                   .transform("translate3d(0,0,0) scale(1)"),
//                 i.$slideEl.removeClass("" + t.zoomedSlideClass),
//                 (i.$slideEl = void 0));
//           },
//           toggleGestures: function (e) {
//             var t = this.zoom,
//               i = t.slideSelector,
//               s = t.passiveListener;
//             this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s),
//               this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s),
//               this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s);
//           },
//           enableGestures: function () {
//             this.zoom.gesturesEnabled ||
//               ((this.zoom.gesturesEnabled = !0),
//               this.zoom.toggleGestures("on"));
//           },
//           disableGestures: function () {
//             this.zoom.gesturesEnabled &&
//               ((this.zoom.gesturesEnabled = !1),
//               this.zoom.toggleGestures("off"));
//           },
//           enable: function () {
//             var e = this.support,
//               t = this.zoom;
//             if (!t.enabled) {
//               t.enabled = !0;
//               var i = !(
//                   "touchstart" !== this.touchEvents.start ||
//                   !e.passiveListener ||
//                   !this.params.passiveListeners
//                 ) && { passive: !0, capture: !1 },
//                 s = !e.passiveListener || { passive: !1, capture: !0 },
//                 a = "." + this.params.slideClass;
//               (this.zoom.passiveListener = i),
//                 (this.zoom.slideSelector = a),
//                 e.gestures
//                   ? (this.$wrapperEl.on(
//                       this.touchEvents.start,
//                       this.zoom.enableGestures,
//                       i
//                     ),
//                     this.$wrapperEl.on(
//                       this.touchEvents.end,
//                       this.zoom.disableGestures,
//                       i
//                     ))
//                   : "touchstart" === this.touchEvents.start &&
//                     (this.$wrapperEl.on(
//                       this.touchEvents.start,
//                       a,
//                       t.onGestureStart,
//                       i
//                     ),
//                     this.$wrapperEl.on(
//                       this.touchEvents.move,
//                       a,
//                       t.onGestureChange,
//                       s
//                     ),
//                     this.$wrapperEl.on(
//                       this.touchEvents.end,
//                       a,
//                       t.onGestureEnd,
//                       i
//                     ),
//                     this.touchEvents.cancel &&
//                       this.$wrapperEl.on(
//                         this.touchEvents.cancel,
//                         a,
//                         t.onGestureEnd,
//                         i
//                       )),
//                 this.$wrapperEl.on(
//                   this.touchEvents.move,
//                   "." + this.params.zoom.containerClass,
//                   t.onTouchMove,
//                   s
//                 );
//             }
//           },
//           disable: function () {
//             var e = this.zoom;
//             if (e.enabled) {
//               var t = this.support;
//               this.zoom.enabled = !1;
//               var i = !(
//                   "touchstart" !== this.touchEvents.start ||
//                   !t.passiveListener ||
//                   !this.params.passiveListeners
//                 ) && { passive: !0, capture: !1 },
//                 s = !t.passiveListener || { passive: !1, capture: !0 },
//                 a = "." + this.params.slideClass;
//               t.gestures
//                 ? (this.$wrapperEl.off(
//                     this.touchEvents.start,
//                     this.zoom.enableGestures,
//                     i
//                   ),
//                   this.$wrapperEl.off(
//                     this.touchEvents.end,
//                     this.zoom.disableGestures,
//                     i
//                   ))
//                 : "touchstart" === this.touchEvents.start &&
//                   (this.$wrapperEl.off(
//                     this.touchEvents.start,
//                     a,
//                     e.onGestureStart,
//                     i
//                   ),
//                   this.$wrapperEl.off(
//                     this.touchEvents.move,
//                     a,
//                     e.onGestureChange,
//                     s
//                   ),
//                   this.$wrapperEl.off(
//                     this.touchEvents.end,
//                     a,
//                     e.onGestureEnd,
//                     i
//                   ),
//                   this.touchEvents.cancel &&
//                     this.$wrapperEl.off(
//                       this.touchEvents.cancel,
//                       a,
//                       e.onGestureEnd,
//                       i
//                     )),
//                 this.$wrapperEl.off(
//                   this.touchEvents.move,
//                   "." + this.params.zoom.containerClass,
//                   e.onTouchMove,
//                   s
//                 );
//             }
//           },
//         },
//         te = {
//           loadInSlide: function (e, t) {
//             void 0 === t && (t = !0);
//             var i = this,
//               s = i.params.lazy;
//             if (void 0 !== e && 0 !== i.slides.length) {
//               var a =
//                   i.virtual && i.params.virtual.enabled
//                     ? i.$wrapperEl.children(
//                         "." +
//                           i.params.slideClass +
//                           '[data-swiper-slide-index="' +
//                           e +
//                           '"]'
//                       )
//                     : i.slides.eq(e),
//                 r = a.find(
//                   "." +
//                     s.elementClass +
//                     ":not(." +
//                     s.loadedClass +
//                     "):not(." +
//                     s.loadingClass +
//                     ")"
//                 );
//               !a.hasClass(s.elementClass) ||
//                 a.hasClass(s.loadedClass) ||
//                 a.hasClass(s.loadingClass) ||
//                 r.push(a[0]),
//                 0 !== r.length &&
//                   r.each(function (e) {
//                     var r = m(e);
//                     r.addClass(s.loadingClass);
//                     var n = r.attr("data-background"),
//                       o = r.attr("data-src"),
//                       l = r.attr("data-srcset"),
//                       d = r.attr("data-sizes"),
//                       p = r.parent("picture");
//                     i.loadImage(r[0], o || n, l, d, !1, function () {
//                       if (null != i && i && (!i || i.params) && !i.destroyed) {
//                         if (
//                           (n
//                             ? (r.css("background-image", 'url("' + n + '")'),
//                               r.removeAttr("data-background"))
//                             : (l &&
//                                 (r.attr("srcset", l),
//                                 r.removeAttr("data-srcset")),
//                               d &&
//                                 (r.attr("sizes", d),
//                                 r.removeAttr("data-sizes")),
//                               p.length &&
//                                 p.children("source").each(function (e) {
//                                   var t = m(e);
//                                   t.attr("data-srcset") &&
//                                     (t.attr("srcset", t.attr("data-srcset")),
//                                     t.removeAttr("data-srcset"));
//                                 }),
//                               o &&
//                                 (r.attr("src", o), r.removeAttr("data-src"))),
//                           r.addClass(s.loadedClass).removeClass(s.loadingClass),
//                           a.find("." + s.preloaderClass).remove(),
//                           i.params.loop && t)
//                         ) {
//                           var e = a.attr("data-swiper-slide-index");
//                           if (a.hasClass(i.params.slideDuplicateClass)) {
//                             var h = i.$wrapperEl.children(
//                               '[data-swiper-slide-index="' +
//                                 e +
//                                 '"]:not(.' +
//                                 i.params.slideDuplicateClass +
//                                 ")"
//                             );
//                             i.lazy.loadInSlide(h.index(), !1);
//                           } else {
//                             var c = i.$wrapperEl.children(
//                               "." +
//                                 i.params.slideDuplicateClass +
//                                 '[data-swiper-slide-index="' +
//                                 e +
//                                 '"]'
//                             );
//                             i.lazy.loadInSlide(c.index(), !1);
//                           }
//                         }
//                         i.emit("lazyImageReady", a[0], r[0]),
//                           i.params.autoHeight && i.updateAutoHeight();
//                       }
//                     }),
//                       i.emit("lazyImageLoad", a[0], r[0]);
//                   });
//             }
//           },
//           load: function () {
//             var e = this,
//               t = e.$wrapperEl,
//               i = e.params,
//               s = e.slides,
//               a = e.activeIndex,
//               r = e.virtual && i.virtual.enabled,
//               n = i.lazy,
//               o = i.slidesPerView;
//             function l(e) {
//               if (r) {
//                 if (
//                   t.children(
//                     "." + i.slideClass + '[data-swiper-slide-index="' + e + '"]'
//                   ).length
//                 )
//                   return !0;
//               } else if (s[e]) return !0;
//               return !1;
//             }
//             function d(e) {
//               return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
//             }
//             if (
//               ("auto" === o && (o = 0),
//               e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
//               e.params.watchSlidesVisibility)
//             )
//               t.children("." + i.slideVisibleClass).each(function (t) {
//                 var i = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
//                 e.lazy.loadInSlide(i);
//               });
//             else if (o > 1)
//               for (var p = a; p < a + o; p += 1) l(p) && e.lazy.loadInSlide(p);
//             else e.lazy.loadInSlide(a);
//             if (n.loadPrevNext)
//               if (o > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
//                 for (
//                   var h = n.loadPrevNextAmount,
//                     c = o,
//                     u = Math.min(a + c + Math.max(h, c), s.length),
//                     f = Math.max(a - Math.max(c, h), 0),
//                     v = a + o;
//                   v < u;
//                   v += 1
//                 )
//                   l(v) && e.lazy.loadInSlide(v);
//                 for (var g = f; g < a; g += 1) l(g) && e.lazy.loadInSlide(g);
//               } else {
//                 var w = t.children("." + i.slideNextClass);
//                 w.length > 0 && e.lazy.loadInSlide(d(w));
//                 var y = t.children("." + i.slidePrevClass);
//                 y.length > 0 && e.lazy.loadInSlide(d(y));
//               }
//           },
//           checkInViewOnLoad: function () {
//             var e = o();
//             if (this && !this.destroyed) {
//               var t = this.params.lazy.scrollingElement
//                   ? m(this.params.lazy.scrollingElement)
//                   : m(e),
//                 i = t[0] === e,
//                 s = i ? e.innerWidth : t[0].offsetWidth,
//                 a = i ? e.innerHeight : t[0].offsetHeight,
//                 r = this.$el.offset(),
//                 n = !1;
//               this.rtlTranslate && (r.left -= this.$el[0].scrollLeft);
//               for (
//                 var l = [
//                     [r.left, r.top],
//                     [r.left + this.width, r.top],
//                     [r.left, r.top + this.height],
//                     [r.left + this.width, r.top + this.height],
//                   ],
//                   d = 0;
//                 d < l.length;
//                 d += 1
//               ) {
//                 var p = l[d];
//                 if (p[0] >= 0 && p[0] <= s && p[1] >= 0 && p[1] <= a) {
//                   if (0 === p[0] && 0 === p[1]) continue;
//                   n = !0;
//                 }
//               }
//               n
//                 ? (this.lazy.load(),
//                   t.off("scroll", this.lazy.checkInViewOnLoad))
//                 : this.lazy.scrollHandlerAttached ||
//                   ((this.lazy.scrollHandlerAttached = !0),
//                   t.on("scroll", this.lazy.checkInViewOnLoad));
//             }
//           },
//         },
//         ie = {
//           LinearSpline: function (e, t) {
//             var i,
//               s,
//               a,
//               r,
//               n,
//               o = function (e, t) {
//                 for (s = -1, i = e.length; i - s > 1; )
//                   e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
//                 return i;
//               };
//             return (
//               (this.x = e),
//               (this.y = t),
//               (this.lastIndex = e.length - 1),
//               (this.interpolate = function (e) {
//                 return e
//                   ? ((n = o(this.x, e)),
//                     (r = n - 1),
//                     ((e - this.x[r]) * (this.y[n] - this.y[r])) /
//                       (this.x[n] - this.x[r]) +
//                       this.y[r])
//                   : 0;
//               }),
//               this
//             );
//           },
//           getInterpolateFunction: function (e) {
//             this.controller.spline ||
//               (this.controller.spline = this.params.loop
//                 ? new ie.LinearSpline(this.slidesGrid, e.slidesGrid)
//                 : new ie.LinearSpline(this.snapGrid, e.snapGrid));
//           },
//           setTranslate: function (e, t) {
//             var i,
//               s,
//               a = this,
//               r = a.controller.control,
//               n = a.constructor;
//             function o(e) {
//               var t = a.rtlTranslate ? -a.translate : a.translate;
//               "slide" === a.params.controller.by &&
//                 (a.controller.getInterpolateFunction(e),
//                 (s = -a.controller.spline.interpolate(-t))),
//                 (s && "container" !== a.params.controller.by) ||
//                   ((i =
//                     (e.maxTranslate() - e.minTranslate()) /
//                     (a.maxTranslate() - a.minTranslate())),
//                   (s = (t - a.minTranslate()) * i + e.minTranslate())),
//                 a.params.controller.inverse && (s = e.maxTranslate() - s),
//                 e.updateProgress(s),
//                 e.setTranslate(s, a),
//                 e.updateActiveIndex(),
//                 e.updateSlidesClasses();
//             }
//             if (Array.isArray(r))
//               for (var l = 0; l < r.length; l += 1)
//                 r[l] !== t && r[l] instanceof n && o(r[l]);
//             else r instanceof n && t !== r && o(r);
//           },
//           setTransition: function (e, t) {
//             var i,
//               s = this,
//               a = s.constructor,
//               r = s.controller.control;
//             function n(t) {
//               t.setTransition(e, s),
//                 0 !== e &&
//                   (t.transitionStart(),
//                   t.params.autoHeight &&
//                     T(function () {
//                       t.updateAutoHeight();
//                     }),
//                   t.$wrapperEl.transitionEnd(function () {
//                     r &&
//                       (t.params.loop &&
//                         "slide" === s.params.controller.by &&
//                         t.loopFix(),
//                       t.transitionEnd());
//                   }));
//             }
//             if (Array.isArray(r))
//               for (i = 0; i < r.length; i += 1)
//                 r[i] !== t && r[i] instanceof a && n(r[i]);
//             else r instanceof a && t !== r && n(r);
//           },
//         },
//         se = {
//           name: "controller",
//           params: { controller: { control: void 0, inverse: !1, by: "slide" } },
//           create: function () {
//             k(this, {
//               controller: t({ control: this.params.controller.control }, ie),
//             });
//           },
//           on: {
//             update: function (e) {
//               e.controller.control &&
//                 e.controller.spline &&
//                 ((e.controller.spline = void 0), delete e.controller.spline);
//             },
//             resize: function (e) {
//               e.controller.control &&
//                 e.controller.spline &&
//                 ((e.controller.spline = void 0), delete e.controller.spline);
//             },
//             observerUpdate: function (e) {
//               e.controller.control &&
//                 e.controller.spline &&
//                 ((e.controller.spline = void 0), delete e.controller.spline);
//             },
//             setTranslate: function (e, t, i) {
//               e.controller.control && e.controller.setTranslate(t, i);
//             },
//             setTransition: function (e, t, i) {
//               e.controller.control && e.controller.setTransition(t, i);
//             },
//           },
//         },
//         ae = {
//           getRandomNumber: function (e) {
//             return (
//               void 0 === e && (e = 16),
//               "x".repeat(e).replace(/x/g, function () {
//                 return Math.round(16 * Math.random()).toString(16);
//               })
//             );
//           },
//           makeElFocusable: function (e) {
//             return e.attr("tabIndex", "0"), e;
//           },
//           makeElNotFocusable: function (e) {
//             return e.attr("tabIndex", "-1"), e;
//           },
//           addElRole: function (e, t) {
//             return e.attr("role", t), e;
//           },
//           addElRoleDescription: function (e, t) {
//             return e.attr("aria-role-description", t), e;
//           },
//           addElControls: function (e, t) {
//             return e.attr("aria-controls", t), e;
//           },
//           addElLabel: function (e, t) {
//             return e.attr("aria-label", t), e;
//           },
//           addElId: function (e, t) {
//             return e.attr("id", t), e;
//           },
//           addElLive: function (e, t) {
//             return e.attr("aria-live", t), e;
//           },
//           disableEl: function (e) {
//             return e.attr("aria-disabled", !0), e;
//           },
//           enableEl: function (e) {
//             return e.attr("aria-disabled", !1), e;
//           },
//           onEnterKey: function (e) {
//             var t = this.params.a11y;
//             if (13 === e.keyCode) {
//               var i = m(e.target);
//               this.navigation &&
//                 this.navigation.$nextEl &&
//                 i.is(this.navigation.$nextEl) &&
//                 ((this.isEnd && !this.params.loop) || this.slideNext(),
//                 this.isEnd
//                   ? this.a11y.notify(t.lastSlideMessage)
//                   : this.a11y.notify(t.nextSlideMessage)),
//                 this.navigation &&
//                   this.navigation.$prevEl &&
//                   i.is(this.navigation.$prevEl) &&
//                   ((this.isBeginning && !this.params.loop) || this.slidePrev(),
//                   this.isBeginning
//                     ? this.a11y.notify(t.firstSlideMessage)
//                     : this.a11y.notify(t.prevSlideMessage)),
//                 this.pagination &&
//                   i.is(
//                     "." + this.params.pagination.bulletClass.replace(/ /g, ".")
//                   ) &&
//                   i[0].click();
//             }
//           },
//           notify: function (e) {
//             var t = this.a11y.liveRegion;
//             0 !== t.length && (t.html(""), t.html(e));
//           },
//           updateNavigation: function () {
//             if (!this.params.loop && this.navigation) {
//               var e = this.navigation,
//                 t = e.$nextEl,
//                 i = e.$prevEl;
//               i &&
//                 i.length > 0 &&
//                 (this.isBeginning
//                   ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i))
//                   : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))),
//                 t &&
//                   t.length > 0 &&
//                   (this.isEnd
//                     ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t))
//                     : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
//             }
//           },
//           updatePagination: function () {
//             var e = this,
//               t = e.params.a11y;
//             e.pagination &&
//               e.params.pagination.clickable &&
//               e.pagination.bullets &&
//               e.pagination.bullets.length &&
//               e.pagination.bullets.each(function (i) {
//                 var s = m(i);
//                 e.a11y.makeElFocusable(s),
//                   e.params.pagination.renderBullet ||
//                     (e.a11y.addElRole(s, "button"),
//                     e.a11y.addElLabel(
//                       s,
//                       t.paginationBulletMessage.replace(
//                         /\{\{index\}\}/,
//                         s.index() + 1
//                       )
//                     ));
//               });
//           },
//           init: function () {
//             var e = this,
//               t = e.params.a11y;
//             e.$el.append(e.a11y.liveRegion);
//             var i = e.$el;
//             t.containerRoleDescriptionMessage &&
//               e.a11y.addElRoleDescription(i, t.containerRoleDescriptionMessage),
//               t.containerMessage && e.a11y.addElLabel(i, t.containerMessage);
//             var s,
//               a,
//               r,
//               n = e.$wrapperEl,
//               o =
//                 n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
//             e.a11y.addElId(n, o),
//               (s =
//                 e.params.autoplay && e.params.autoplay.enabled
//                   ? "off"
//                   : "polite"),
//               e.a11y.addElLive(n, s),
//               t.itemRoleDescriptionMessage &&
//                 e.a11y.addElRoleDescription(
//                   m(e.slides),
//                   t.itemRoleDescriptionMessage
//                 ),
//               e.a11y.addElRole(m(e.slides), "group"),
//               e.slides.each(function (t) {
//                 var i = m(t);
//                 e.a11y.addElLabel(i, i.index() + 1 + " / " + e.slides.length);
//               }),
//               e.navigation &&
//                 e.navigation.$nextEl &&
//                 (a = e.navigation.$nextEl),
//               e.navigation &&
//                 e.navigation.$prevEl &&
//                 (r = e.navigation.$prevEl),
//               a &&
//                 a.length &&
//                 (e.a11y.makeElFocusable(a),
//                 "BUTTON" !== a[0].tagName &&
//                   (e.a11y.addElRole(a, "button"),
//                   a.on("keydown", e.a11y.onEnterKey)),
//                 e.a11y.addElLabel(a, t.nextSlideMessage),
//                 e.a11y.addElControls(a, o)),
//               r &&
//                 r.length &&
//                 (e.a11y.makeElFocusable(r),
//                 "BUTTON" !== r[0].tagName &&
//                   (e.a11y.addElRole(r, "button"),
//                   r.on("keydown", e.a11y.onEnterKey)),
//                 e.a11y.addElLabel(r, t.prevSlideMessage),
//                 e.a11y.addElControls(r, o)),
//               e.pagination &&
//                 e.params.pagination.clickable &&
//                 e.pagination.bullets &&
//                 e.pagination.bullets.length &&
//                 e.pagination.$el.on(
//                   "keydown",
//                   "." + e.params.pagination.bulletClass.replace(/ /g, "."),
//                   e.a11y.onEnterKey
//                 );
//           },
//           destroy: function () {
//             var e, t;
//             this.a11y.liveRegion &&
//               this.a11y.liveRegion.length > 0 &&
//               this.a11y.liveRegion.remove(),
//               this.navigation &&
//                 this.navigation.$nextEl &&
//                 (e = this.navigation.$nextEl),
//               this.navigation &&
//                 this.navigation.$prevEl &&
//                 (t = this.navigation.$prevEl),
//               e && e.off("keydown", this.a11y.onEnterKey),
//               t && t.off("keydown", this.a11y.onEnterKey),
//               this.pagination &&
//                 this.params.pagination.clickable &&
//                 this.pagination.bullets &&
//                 this.pagination.bullets.length &&
//                 this.pagination.$el.off(
//                   "keydown",
//                   "." + this.params.pagination.bulletClass.replace(/ /g, "."),
//                   this.a11y.onEnterKey
//                 );
//           },
//         },
//         re = {
//           init: function () {
//             var e = o();
//             if (this.params.history) {
//               if (!e.history || !e.history.pushState)
//                 return (
//                   (this.params.history.enabled = !1),
//                   void (this.params.hashNavigation.enabled = !0)
//                 );
//               var t = this.history;
//               (t.initialized = !0),
//                 (t.paths = re.getPathValues(this.params.url)),
//                 (t.paths.key || t.paths.value) &&
//                   (t.scrollToSlide(
//                     0,
//                     t.paths.value,
//                     this.params.runCallbacksOnInit
//                   ),
//                   this.params.history.replaceState ||
//                     e.addEventListener(
//                       "popstate",
//                       this.history.setHistoryPopState
//                     ));
//             }
//           },
//           destroy: function () {
//             var e = o();
//             this.params.history.replaceState ||
//               e.removeEventListener(
//                 "popstate",
//                 this.history.setHistoryPopState
//               );
//           },
//           setHistoryPopState: function () {
//             (this.history.paths = re.getPathValues(this.params.url)),
//               this.history.scrollToSlide(
//                 this.params.speed,
//                 this.history.paths.value,
//                 !1
//               );
//           },
//           getPathValues: function (e) {
//             var t = o(),
//               i = (e ? new URL(e) : t.location).pathname
//                 .slice(1)
//                 .split("/")
//                 .filter(function (e) {
//                   return "" !== e;
//                 }),
//               s = i.length;
//             return { key: i[s - 2], value: i[s - 1] };
//           },
//           setHistory: function (e, t) {
//             var i = o();
//             if (this.history.initialized && this.params.history.enabled) {
//               var s;
//               s = this.params.url ? new URL(this.params.url) : i.location;
//               var a = this.slides.eq(t),
//                 r = re.slugify(a.attr("data-history"));
//               s.pathname.includes(e) || (r = e + "/" + r);
//               var n = i.history.state;
//               (n && n.value === r) ||
//                 (this.params.history.replaceState
//                   ? i.history.replaceState({ value: r }, null, r)
//                   : i.history.pushState({ value: r }, null, r));
//             }
//           },
//           slugify: function (e) {
//             return e
//               .toString()
//               .replace(/\s+/g, "-")
//               .replace(/[^\w-]+/g, "")
//               .replace(/--+/g, "-")
//               .replace(/^-+/, "")
//               .replace(/-+$/, "");
//           },
//           scrollToSlide: function (e, t, i) {
//             if (t)
//               for (var s = 0, a = this.slides.length; s < a; s += 1) {
//                 var r = this.slides.eq(s);
//                 if (
//                   re.slugify(r.attr("data-history")) === t &&
//                   !r.hasClass(this.params.slideDuplicateClass)
//                 ) {
//                   var n = r.index();
//                   this.slideTo(n, e, i);
//                 }
//               }
//             else this.slideTo(0, e, i);
//           },
//         },
//         ne = {
//           onHashCange: function () {
//             var e = r();
//             this.emit("hashChange");
//             var t = e.location.hash.replace("#", "");
//             if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
//               var i = this.$wrapperEl
//                 .children(
//                   "." + this.params.slideClass + '[data-hash="' + t + '"]'
//                 )
//                 .index();
//               if (void 0 === i) return;
//               this.slideTo(i);
//             }
//           },
//           setHash: function () {
//             var e = o(),
//               t = r();
//             if (
//               this.hashNavigation.initialized &&
//               this.params.hashNavigation.enabled
//             )
//               if (
//                 this.params.hashNavigation.replaceState &&
//                 e.history &&
//                 e.history.replaceState
//               )
//                 e.history.replaceState(
//                   null,
//                   null,
//                   "#" + this.slides.eq(this.activeIndex).attr("data-hash") || !1
//                 ),
//                   this.emit("hashSet");
//               else {
//                 var i = this.slides.eq(this.activeIndex),
//                   s = i.attr("data-hash") || i.attr("data-history");
//                 (t.location.hash = s || ""), this.emit("hashSet");
//               }
//           },
//           init: function () {
//             var e = r(),
//               t = o();
//             if (
//               !(
//                 !this.params.hashNavigation.enabled ||
//                 (this.params.history && this.params.history.enabled)
//               )
//             ) {
//               this.hashNavigation.initialized = !0;
//               var i = e.location.hash.replace("#", "");
//               if (i)
//                 for (var s = 0, a = this.slides.length; s < a; s += 1) {
//                   var n = this.slides.eq(s);
//                   if (
//                     (n.attr("data-hash") || n.attr("data-history")) === i &&
//                     !n.hasClass(this.params.slideDuplicateClass)
//                   ) {
//                     var l = n.index();
//                     this.slideTo(l, 0, this.params.runCallbacksOnInit, !0);
//                   }
//                 }
//               this.params.hashNavigation.watchState &&
//                 m(t).on("hashchange", this.hashNavigation.onHashCange);
//             }
//           },
//           destroy: function () {
//             var e = o();
//             this.params.hashNavigation.watchState &&
//               m(e).off("hashchange", this.hashNavigation.onHashCange);
//           },
//         },
//         oe = {
//           run: function () {
//             var e = this,
//               t = e.slides.eq(e.activeIndex),
//               i = e.params.autoplay.delay;
//             t.attr("data-swiper-autoplay") &&
//               (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
//               clearTimeout(e.autoplay.timeout),
//               (e.autoplay.timeout = T(function () {
//                 var t;
//                 e.params.autoplay.reverseDirection
//                   ? e.params.loop
//                     ? (e.loopFix(),
//                       (t = e.slidePrev(e.params.speed, !0, !0)),
//                       e.emit("autoplay"))
//                     : e.isBeginning
//                     ? e.params.autoplay.stopOnLastSlide
//                       ? e.autoplay.stop()
//                       : ((t = e.slideTo(
//                           e.slides.length - 1,
//                           e.params.speed,
//                           !0,
//                           !0
//                         )),
//                         e.emit("autoplay"))
//                     : ((t = e.slidePrev(e.params.speed, !0, !0)),
//                       e.emit("autoplay"))
//                   : e.params.loop
//                   ? (e.loopFix(),
//                     (t = e.slideNext(e.params.speed, !0, !0)),
//                     e.emit("autoplay"))
//                   : e.isEnd
//                   ? e.params.autoplay.stopOnLastSlide
//                     ? e.autoplay.stop()
//                     : ((t = e.slideTo(0, e.params.speed, !0, !0)),
//                       e.emit("autoplay"))
//                   : ((t = e.slideNext(e.params.speed, !0, !0)),
//                     e.emit("autoplay")),
//                   ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
//                     e.autoplay.run();
//               }, i));
//           },
//           start: function () {
//             return (
//               void 0 === this.autoplay.timeout &&
//               !this.autoplay.running &&
//               ((this.autoplay.running = !0),
//               this.emit("autoplayStart"),
//               this.autoplay.run(),
//               !0)
//             );
//           },
//           stop: function () {
//             return (
//               !!this.autoplay.running &&
//               void 0 !== this.autoplay.timeout &&
//               (this.autoplay.timeout &&
//                 (clearTimeout(this.autoplay.timeout),
//                 (this.autoplay.timeout = void 0)),
//               (this.autoplay.running = !1),
//               this.emit("autoplayStop"),
//               !0)
//             );
//           },
//           pause: function (e) {
//             this.autoplay.running &&
//               (this.autoplay.paused ||
//                 (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
//                 (this.autoplay.paused = !0),
//                 0 !== e && this.params.autoplay.waitForTransition
//                   ? (this.$wrapperEl[0].addEventListener(
//                       "transitionend",
//                       this.autoplay.onTransitionEnd
//                     ),
//                     this.$wrapperEl[0].addEventListener(
//                       "webkitTransitionEnd",
//                       this.autoplay.onTransitionEnd
//                     ))
//                   : ((this.autoplay.paused = !1), this.autoplay.run())));
//           },
//           onVisibilityChange: function () {
//             var e = r();
//             "hidden" === e.visibilityState &&
//               this.autoplay.running &&
//               this.autoplay.pause(),
//               "visible" === e.visibilityState &&
//                 this.autoplay.paused &&
//                 (this.autoplay.run(), (this.autoplay.paused = !1));
//           },
//           onTransitionEnd: function (e) {
//             this &&
//               !this.destroyed &&
//               this.$wrapperEl &&
//               e.target === this.$wrapperEl[0] &&
//               (this.$wrapperEl[0].removeEventListener(
//                 "transitionend",
//                 this.autoplay.onTransitionEnd
//               ),
//               this.$wrapperEl[0].removeEventListener(
//                 "webkitTransitionEnd",
//                 this.autoplay.onTransitionEnd
//               ),
//               (this.autoplay.paused = !1),
//               this.autoplay.running
//                 ? this.autoplay.run()
//                 : this.autoplay.stop());
//           },
//         },
//         le = {
//           setTranslate: function () {
//             for (var e = this.slides, t = 0; t < e.length; t += 1) {
//               var i = this.slides.eq(t),
//                 s = -i[0].swiperSlideOffset;
//               this.params.virtualTranslate || (s -= this.translate);
//               var a = 0;
//               this.isHorizontal() || ((a = s), (s = 0));
//               var r = this.params.fadeEffect.crossFade
//                 ? Math.max(1 - Math.abs(i[0].progress), 0)
//                 : 1 + Math.min(Math.max(i[0].progress, -1), 0);
//               i.css({ opacity: r }).transform(
//                 "translate3d(" + s + "px, " + a + "px, 0px)"
//               );
//             }
//           },
//           setTransition: function (e) {
//             var t = this,
//               i = t.slides,
//               s = t.$wrapperEl;
//             if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
//               var a = !1;
//               i.transitionEnd(function () {
//                 if (!a && t && !t.destroyed) {
//                   (a = !0), (t.animating = !1);
//                   for (
//                     var e = ["webkitTransitionEnd", "transitionend"], i = 0;
//                     i < e.length;
//                     i += 1
//                   )
//                     s.trigger(e[i]);
//                 }
//               });
//             }
//           },
//         },
//         de = {
//           setTranslate: function () {
//             var e,
//               t = this.$el,
//               i = this.$wrapperEl,
//               s = this.slides,
//               a = this.width,
//               r = this.height,
//               n = this.rtlTranslate,
//               o = this.size,
//               l = this.browser,
//               d = this.params.cubeEffect,
//               p = this.isHorizontal(),
//               h = this.virtual && this.params.virtual.enabled,
//               c = 0;
//             d.shadow &&
//               (p
//                 ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
//                     ((e = m('<div class="swiper-cube-shadow"></div>')),
//                     i.append(e)),
//                   e.css({ height: a + "px" }))
//                 : 0 === (e = t.find(".swiper-cube-shadow")).length &&
//                   ((e = m('<div class="swiper-cube-shadow"></div>')),
//                   t.append(e)));
//             for (var u = 0; u < s.length; u += 1) {
//               var f = s.eq(u),
//                 v = u;
//               h && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
//               var g = 90 * v,
//                 w = Math.floor(g / 360);
//               n && ((g = -g), (w = Math.floor(-g / 360)));
//               var y = Math.max(Math.min(f[0].progress, 1), -1),
//                 b = 0,
//                 T = 0,
//                 S = 0;
//               v % 4 == 0
//                 ? ((b = 4 * -w * o), (S = 0))
//                 : (v - 1) % 4 == 0
//                 ? ((b = 0), (S = 4 * -w * o))
//                 : (v - 2) % 4 == 0
//                 ? ((b = o + 4 * w * o), (S = o))
//                 : (v - 3) % 4 == 0 && ((b = -o), (S = 3 * o + 4 * o * w)),
//                 n && (b = -b),
//                 p || ((T = b), (b = 0));
//               var x =
//                 "rotateX(" +
//                 (p ? 0 : -g) +
//                 "deg) rotateY(" +
//                 (p ? g : 0) +
//                 "deg) translate3d(" +
//                 b +
//                 "px, " +
//                 T +
//                 "px, " +
//                 S +
//                 "px)";
//               if (
//                 (y <= 1 &&
//                   y > -1 &&
//                   ((c = 90 * v + 90 * y), n && (c = 90 * -v - 90 * y)),
//                 f.transform(x),
//                 d.slideShadows)
//               ) {
//                 var C = p
//                     ? f.find(".swiper-slide-shadow-left")
//                     : f.find(".swiper-slide-shadow-top"),
//                   E = p
//                     ? f.find(".swiper-slide-shadow-right")
//                     : f.find(".swiper-slide-shadow-bottom");
//                 0 === C.length &&
//                   ((C = m(
//                     '<div class="swiper-slide-shadow-' +
//                       (p ? "left" : "top") +
//                       '"></div>'
//                   )),
//                   f.append(C)),
//                   0 === E.length &&
//                     ((E = m(
//                       '<div class="swiper-slide-shadow-' +
//                         (p ? "right" : "bottom") +
//                         '"></div>'
//                     )),
//                     f.append(E)),
//                   C.length && (C[0].style.opacity = Math.max(-y, 0)),
//                   E.length && (E[0].style.opacity = Math.max(y, 0));
//               }
//             }
//             if (
//               (i.css({
//                 "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
//                 "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
//                 "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
//                 "transform-origin": "50% 50% -" + o / 2 + "px",
//               }),
//               d.shadow)
//             )
//               if (p)
//                 e.transform(
//                   "translate3d(0px, " +
//                     (a / 2 + d.shadowOffset) +
//                     "px, " +
//                     -a / 2 +
//                     "px) rotateX(90deg) rotateZ(0deg) scale(" +
//                     d.shadowScale +
//                     ")"
//                 );
//               else {
//                 var k = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
//                   $ =
//                     1.5 -
//                     (Math.sin((2 * k * Math.PI) / 360) / 2 +
//                       Math.cos((2 * k * Math.PI) / 360) / 2),
//                   M = d.shadowScale,
//                   z = d.shadowScale / $,
//                   P = d.shadowOffset;
//                 e.transform(
//                   "scale3d(" +
//                     M +
//                     ", 1, " +
//                     z +
//                     ") translate3d(0px, " +
//                     (r / 2 + P) +
//                     "px, " +
//                     -r / 2 / z +
//                     "px) rotateX(-90deg)"
//                 );
//               }
//             var L = l.isSafari || l.isWebView ? -o / 2 : 0;
//             i.transform(
//               "translate3d(0px,0," +
//                 L +
//                 "px) rotateX(" +
//                 (this.isHorizontal() ? 0 : c) +
//                 "deg) rotateY(" +
//                 (this.isHorizontal() ? -c : 0) +
//                 "deg)"
//             );
//           },
//           setTransition: function (e) {
//             var t = this.$el;
//             this.slides
//               .transition(e)
//               .find(
//                 ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
//               )
//               .transition(e),
//               this.params.cubeEffect.shadow &&
//                 !this.isHorizontal() &&
//                 t.find(".swiper-cube-shadow").transition(e);
//           },
//         },
//         pe = {
//           setTranslate: function () {
//             for (
//               var e = this.slides, t = this.rtlTranslate, i = 0;
//               i < e.length;
//               i += 1
//             ) {
//               var s = e.eq(i),
//                 a = s[0].progress;
//               this.params.flipEffect.limitRotation &&
//                 (a = Math.max(Math.min(s[0].progress, 1), -1));
//               var r = -180 * a,
//                 n = 0,
//                 o = -s[0].swiperSlideOffset,
//                 l = 0;
//               if (
//                 (this.isHorizontal()
//                   ? t && (r = -r)
//                   : ((l = o), (o = 0), (n = -r), (r = 0)),
//                 (s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length),
//                 this.params.flipEffect.slideShadows)
//               ) {
//                 var d = this.isHorizontal()
//                     ? s.find(".swiper-slide-shadow-left")
//                     : s.find(".swiper-slide-shadow-top"),
//                   p = this.isHorizontal()
//                     ? s.find(".swiper-slide-shadow-right")
//                     : s.find(".swiper-slide-shadow-bottom");
//                 0 === d.length &&
//                   ((d = m(
//                     '<div class="swiper-slide-shadow-' +
//                       (this.isHorizontal() ? "left" : "top") +
//                       '"></div>'
//                   )),
//                   s.append(d)),
//                   0 === p.length &&
//                     ((p = m(
//                       '<div class="swiper-slide-shadow-' +
//                         (this.isHorizontal() ? "right" : "bottom") +
//                         '"></div>'
//                     )),
//                     s.append(p)),
//                   d.length && (d[0].style.opacity = Math.max(-a, 0)),
//                   p.length && (p[0].style.opacity = Math.max(a, 0));
//               }
//               s.transform(
//                 "translate3d(" +
//                   o +
//                   "px, " +
//                   l +
//                   "px, 0px) rotateX(" +
//                   n +
//                   "deg) rotateY(" +
//                   r +
//                   "deg)"
//               );
//             }
//           },
//           setTransition: function (e) {
//             var t = this,
//               i = t.slides,
//               s = t.activeIndex,
//               a = t.$wrapperEl;
//             if (
//               (i
//                 .transition(e)
//                 .find(
//                   ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
//                 )
//                 .transition(e),
//               t.params.virtualTranslate && 0 !== e)
//             ) {
//               var r = !1;
//               i.eq(s).transitionEnd(function () {
//                 if (!r && t && !t.destroyed) {
//                   (r = !0), (t.animating = !1);
//                   for (
//                     var e = ["webkitTransitionEnd", "transitionend"], i = 0;
//                     i < e.length;
//                     i += 1
//                   )
//                     a.trigger(e[i]);
//                 }
//               });
//             }
//           },
//         },
//         he = {
//           setTranslate: function () {
//             for (
//               var e = this.width,
//                 t = this.height,
//                 i = this.slides,
//                 s = this.slidesSizesGrid,
//                 a = this.params.coverflowEffect,
//                 r = this.isHorizontal(),
//                 n = this.translate,
//                 o = r ? e / 2 - n : t / 2 - n,
//                 l = r ? a.rotate : -a.rotate,
//                 d = a.depth,
//                 p = 0,
//                 h = i.length;
//               p < h;
//               p += 1
//             ) {
//               var c = i.eq(p),
//                 u = s[p],
//                 f = ((o - c[0].swiperSlideOffset - u / 2) / u) * a.modifier,
//                 v = r ? l * f : 0,
//                 g = r ? 0 : l * f,
//                 w = -d * Math.abs(f),
//                 y = a.stretch;
//               "string" == typeof y &&
//                 -1 !== y.indexOf("%") &&
//                 (y = (parseFloat(a.stretch) / 100) * u);
//               var b = r ? 0 : y * f,
//                 T = r ? y * f : 0,
//                 S = 1 - (1 - a.scale) * Math.abs(f);
//               Math.abs(T) < 0.001 && (T = 0),
//                 Math.abs(b) < 0.001 && (b = 0),
//                 Math.abs(w) < 0.001 && (w = 0),
//                 Math.abs(v) < 0.001 && (v = 0),
//                 Math.abs(g) < 0.001 && (g = 0),
//                 Math.abs(S) < 0.001 && (S = 0);
//               var x =
//                 "translate3d(" +
//                 T +
//                 "px," +
//                 b +
//                 "px," +
//                 w +
//                 "px)  rotateX(" +
//                 g +
//                 "deg) rotateY(" +
//                 v +
//                 "deg) scale(" +
//                 S +
//                 ")";
//               if (
//                 (c.transform(x),
//                 (c[0].style.zIndex = 1 - Math.abs(Math.round(f))),
//                 a.slideShadows)
//               ) {
//                 var C = r
//                     ? c.find(".swiper-slide-shadow-left")
//                     : c.find(".swiper-slide-shadow-top"),
//                   E = r
//                     ? c.find(".swiper-slide-shadow-right")
//                     : c.find(".swiper-slide-shadow-bottom");
//                 0 === C.length &&
//                   ((C = m(
//                     '<div class="swiper-slide-shadow-' +
//                       (r ? "left" : "top") +
//                       '"></div>'
//                   )),
//                   c.append(C)),
//                   0 === E.length &&
//                     ((E = m(
//                       '<div class="swiper-slide-shadow-' +
//                         (r ? "right" : "bottom") +
//                         '"></div>'
//                     )),
//                     c.append(E)),
//                   C.length && (C[0].style.opacity = f > 0 ? f : 0),
//                   E.length && (E[0].style.opacity = -f > 0 ? -f : 0);
//               }
//             }
//           },
//           setTransition: function (e) {
//             this.slides
//               .transition(e)
//               .find(
//                 ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
//               )
//               .transition(e);
//           },
//         },
//         ce = {
//           init: function () {
//             var e = this.params.thumbs;
//             if (this.thumbs.initialized) return !1;
//             this.thumbs.initialized = !0;
//             var t = this.constructor;
//             return (
//               e.swiper instanceof t
//                 ? ((this.thumbs.swiper = e.swiper),
//                   E(this.thumbs.swiper.originalParams, {
//                     watchSlidesProgress: !0,
//                     slideToClickedSlide: !1,
//                   }),
//                   E(this.thumbs.swiper.params, {
//                     watchSlidesProgress: !0,
//                     slideToClickedSlide: !1,
//                   }))
//                 : C(e.swiper) &&
//                   ((this.thumbs.swiper = new t(
//                     E({}, e.swiper, {
//                       watchSlidesVisibility: !0,
//                       watchSlidesProgress: !0,
//                       slideToClickedSlide: !1,
//                     })
//                   )),
//                   (this.thumbs.swiperCreated = !0)),
//               this.thumbs.swiper.$el.addClass(
//                 this.params.thumbs.thumbsContainerClass
//               ),
//               this.thumbs.swiper.on("tap", this.thumbs.onThumbClick),
//               !0
//             );
//           },
//           onThumbClick: function () {
//             var e = this.thumbs.swiper;
//             if (e) {
//               var t = e.clickedIndex,
//                 i = e.clickedSlide;
//               if (
//                 !(
//                   (i &&
//                     m(i).hasClass(this.params.thumbs.slideThumbActiveClass)) ||
//                   null == t
//                 )
//               ) {
//                 var s;
//                 if (
//                   ((s = e.params.loop
//                     ? parseInt(
//                         m(e.clickedSlide).attr("data-swiper-slide-index"),
//                         10
//                       )
//                     : t),
//                   this.params.loop)
//                 ) {
//                   var a = this.activeIndex;
//                   this.slides.eq(a).hasClass(this.params.slideDuplicateClass) &&
//                     (this.loopFix(),
//                     (this._clientLeft = this.$wrapperEl[0].clientLeft),
//                     (a = this.activeIndex));
//                   var r = this.slides
//                       .eq(a)
//                       .prevAll('[data-swiper-slide-index="' + s + '"]')
//                       .eq(0)
//                       .index(),
//                     n = this.slides
//                       .eq(a)
//                       .nextAll('[data-swiper-slide-index="' + s + '"]')
//                       .eq(0)
//                       .index();
//                   s =
//                     void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r;
//                 }
//                 this.slideTo(s);
//               }
//             }
//           },
//           update: function (e) {
//             var t = this.thumbs.swiper;
//             if (t) {
//               var i =
//                   "auto" === t.params.slidesPerView
//                     ? t.slidesPerViewDynamic()
//                     : t.params.slidesPerView,
//                 s = this.params.thumbs.autoScrollOffset,
//                 a = s && !t.params.loop;
//               if (this.realIndex !== t.realIndex || a) {
//                 var r,
//                   n,
//                   o = t.activeIndex;
//                 if (t.params.loop) {
//                   t.slides.eq(o).hasClass(t.params.slideDuplicateClass) &&
//                     (t.loopFix(),
//                     (t._clientLeft = t.$wrapperEl[0].clientLeft),
//                     (o = t.activeIndex));
//                   var l = t.slides
//                       .eq(o)
//                       .prevAll(
//                         '[data-swiper-slide-index="' + this.realIndex + '"]'
//                       )
//                       .eq(0)
//                       .index(),
//                     d = t.slides
//                       .eq(o)
//                       .nextAll(
//                         '[data-swiper-slide-index="' + this.realIndex + '"]'
//                       )
//                       .eq(0)
//                       .index();
//                   (r =
//                     void 0 === l
//                       ? d
//                       : void 0 === d
//                       ? l
//                       : d - o == o - l
//                       ? o
//                       : d - o < o - l
//                       ? d
//                       : l),
//                     (n =
//                       this.activeIndex > this.previousIndex ? "next" : "prev");
//                 } else
//                   n =
//                     (r = this.realIndex) > this.previousIndex ? "next" : "prev";
//                 a && (r += "next" === n ? s : -1 * s),
//                   t.visibleSlidesIndexes &&
//                     t.visibleSlidesIndexes.indexOf(r) < 0 &&
//                     (t.params.centeredSlides
//                       ? (r =
//                           r > o
//                             ? r - Math.floor(i / 2) + 1
//                             : r + Math.floor(i / 2) - 1)
//                       : r > o && (r = r - i + 1),
//                     t.slideTo(r, e ? 0 : void 0));
//               }
//               var p = 1,
//                 h = this.params.thumbs.slideThumbActiveClass;
//               if (
//                 (this.params.slidesPerView > 1 &&
//                   !this.params.centeredSlides &&
//                   (p = this.params.slidesPerView),
//                 this.params.thumbs.multipleActiveThumbs || (p = 1),
//                 (p = Math.floor(p)),
//                 t.slides.removeClass(h),
//                 t.params.loop || (t.params.virtual && t.params.virtual.enabled))
//               )
//                 for (var c = 0; c < p; c += 1)
//                   t.$wrapperEl
//                     .children(
//                       '[data-swiper-slide-index="' + (this.realIndex + c) + '"]'
//                     )
//                     .addClass(h);
//               else
//                 for (var u = 0; u < p; u += 1)
//                   t.slides.eq(this.realIndex + u).addClass(h);
//             }
//           },
//         },
//         ue = [
//           _,
//           q,
//           {
//             name: "mousewheel",
//             params: {
//               mousewheel: {
//                 enabled: !1,
//                 releaseOnEdges: !1,
//                 invert: !1,
//                 forceToAxis: !1,
//                 sensitivity: 1,
//                 eventsTarget: "container",
//                 thresholdDelta: null,
//                 thresholdTime: null,
//               },
//             },
//             create: function () {
//               k(this, {
//                 mousewheel: {
//                   enabled: !1,
//                   lastScrollTime: S(),
//                   lastEventBeforeSnap: void 0,
//                   recentWheelEvents: [],
//                   enable: U.enable,
//                   disable: U.disable,
//                   handle: U.handle,
//                   handleMouseEnter: U.handleMouseEnter,
//                   handleMouseLeave: U.handleMouseLeave,
//                   animateSlider: U.animateSlider,
//                   releaseScroll: U.releaseScroll,
//                 },
//               });
//             },
//             on: {
//               init: function (e) {
//                 !e.params.mousewheel.enabled &&
//                   e.params.cssMode &&
//                   e.mousewheel.disable(),
//                   e.params.mousewheel.enabled && e.mousewheel.enable();
//               },
//               destroy: function (e) {
//                 e.params.cssMode && e.mousewheel.enable(),
//                   e.mousewheel.enabled && e.mousewheel.disable();
//               },
//             },
//           },
//           {
//             name: "navigation",
//             params: {
//               navigation: {
//                 nextEl: null,
//                 prevEl: null,
//                 hideOnClick: !1,
//                 disabledClass: "swiper-button-disabled",
//                 hiddenClass: "swiper-button-hidden",
//                 lockClass: "swiper-button-lock",
//               },
//             },
//             create: function () {
//               k(this, { navigation: t({}, K) });
//             },
//             on: {
//               init: function (e) {
//                 e.navigation.init(), e.navigation.update();
//               },
//               toEdge: function (e) {
//                 e.navigation.update();
//               },
//               fromEdge: function (e) {
//                 e.navigation.update();
//               },
//               destroy: function (e) {
//                 e.navigation.destroy();
//               },
//               click: function (e, t) {
//                 var i,
//                   s = e.navigation,
//                   a = s.$nextEl,
//                   r = s.$prevEl;
//                 !e.params.navigation.hideOnClick ||
//                   m(t.target).is(r) ||
//                   m(t.target).is(a) ||
//                   (a
//                     ? (i = a.hasClass(e.params.navigation.hiddenClass))
//                     : r && (i = r.hasClass(e.params.navigation.hiddenClass)),
//                   !0 === i
//                     ? e.emit("navigationShow")
//                     : e.emit("navigationHide"),
//                   a && a.toggleClass(e.params.navigation.hiddenClass),
//                   r && r.toggleClass(e.params.navigation.hiddenClass));
//               },
//             },
//           },
//           {
//             name: "pagination",
//             params: {
//               pagination: {
//                 el: null,
//                 bulletElement: "span",
//                 clickable: !1,
//                 hideOnClick: !1,
//                 renderBullet: null,
//                 renderProgressbar: null,
//                 renderFraction: null,
//                 renderCustom: null,
//                 progressbarOpposite: !1,
//                 type: "bullets",
//                 dynamicBullets: !1,
//                 dynamicMainBullets: 1,
//                 formatFractionCurrent: function (e) {
//                   return e;
//                 },
//                 formatFractionTotal: function (e) {
//                   return e;
//                 },
//                 bulletClass: "swiper-pagination-bullet",
//                 bulletActiveClass: "swiper-pagination-bullet-active",
//                 modifierClass: "swiper-pagination-",
//                 currentClass: "swiper-pagination-current",
//                 totalClass: "swiper-pagination-total",
//                 hiddenClass: "swiper-pagination-hidden",
//                 progressbarFillClass: "swiper-pagination-progressbar-fill",
//                 progressbarOppositeClass:
//                   "swiper-pagination-progressbar-opposite",
//                 clickableClass: "swiper-pagination-clickable",
//                 lockClass: "swiper-pagination-lock",
//               },
//             },
//             create: function () {
//               k(this, { pagination: t({ dynamicBulletIndex: 0 }, J) });
//             },
//             on: {
//               init: function (e) {
//                 e.pagination.init(),
//                   e.pagination.render(),
//                   e.pagination.update();
//               },
//               activeIndexChange: function (e) {
//                 (e.params.loop || void 0 === e.snapIndex) &&
//                   e.pagination.update();
//               },
//               snapIndexChange: function (e) {
//                 e.params.loop || e.pagination.update();
//               },
//               slidesLengthChange: function (e) {
//                 e.params.loop && (e.pagination.render(), e.pagination.update());
//               },
//               snapGridLengthChange: function (e) {
//                 e.params.loop || (e.pagination.render(), e.pagination.update());
//               },
//               destroy: function (e) {
//                 e.pagination.destroy();
//               },
//               click: function (e, t) {
//                 e.params.pagination.el &&
//                   e.params.pagination.hideOnClick &&
//                   e.pagination.$el.length > 0 &&
//                   !m(t.target).hasClass(e.params.pagination.bulletClass) &&
//                   (!0 ===
//                   e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
//                     ? e.emit("paginationShow")
//                     : e.emit("paginationHide"),
//                   e.pagination.$el.toggleClass(
//                     e.params.pagination.hiddenClass
//                   ));
//               },
//             },
//           },
//           {
//             name: "scrollbar",
//             params: {
//               scrollbar: {
//                 el: null,
//                 dragSize: "auto",
//                 hide: !1,
//                 draggable: !1,
//                 snapOnRelease: !0,
//                 lockClass: "swiper-scrollbar-lock",
//                 dragClass: "swiper-scrollbar-drag",
//               },
//             },
//             create: function () {
//               k(this, {
//                 scrollbar: t(
//                   { isTouched: !1, timeout: null, dragTimeout: null },
//                   Z
//                 ),
//               });
//             },
//             on: {
//               init: function (e) {
//                 e.scrollbar.init(),
//                   e.scrollbar.updateSize(),
//                   e.scrollbar.setTranslate();
//               },
//               update: function (e) {
//                 e.scrollbar.updateSize();
//               },
//               resize: function (e) {
//                 e.scrollbar.updateSize();
//               },
//               observerUpdate: function (e) {
//                 e.scrollbar.updateSize();
//               },
//               setTranslate: function (e) {
//                 e.scrollbar.setTranslate();
//               },
//               setTransition: function (e, t) {
//                 e.scrollbar.setTransition(t);
//               },
//               destroy: function (e) {
//                 e.scrollbar.destroy();
//               },
//             },
//           },
//           {
//             name: "parallax",
//             params: { parallax: { enabled: !1 } },
//             create: function () {
//               k(this, { parallax: t({}, Q) });
//             },
//             on: {
//               beforeInit: function (e) {
//                 e.params.parallax.enabled &&
//                   ((e.params.watchSlidesProgress = !0),
//                   (e.originalParams.watchSlidesProgress = !0));
//               },
//               init: function (e) {
//                 e.params.parallax.enabled && e.parallax.setTranslate();
//               },
//               setTranslate: function (e) {
//                 e.params.parallax.enabled && e.parallax.setTranslate();
//               },
//               setTransition: function (e, t) {
//                 e.params.parallax.enabled && e.parallax.setTransition(t);
//               },
//             },
//           },
//           {
//             name: "zoom",
//             params: {
//               zoom: {
//                 enabled: !1,
//                 maxRatio: 3,
//                 minRatio: 1,
//                 toggle: !0,
//                 containerClass: "swiper-zoom-container",
//                 zoomedSlideClass: "swiper-slide-zoomed",
//               },
//             },
//             create: function () {
//               var e = this;
//               k(e, {
//                 zoom: t(
//                   {
//                     enabled: !1,
//                     scale: 1,
//                     currentScale: 1,
//                     isScaling: !1,
//                     gesture: {
//                       $slideEl: void 0,
//                       slideWidth: void 0,
//                       slideHeight: void 0,
//                       $imageEl: void 0,
//                       $imageWrapEl: void 0,
//                       maxRatio: 3,
//                     },
//                     image: {
//                       isTouched: void 0,
//                       isMoved: void 0,
//                       currentX: void 0,
//                       currentY: void 0,
//                       minX: void 0,
//                       minY: void 0,
//                       maxX: void 0,
//                       maxY: void 0,
//                       width: void 0,
//                       height: void 0,
//                       startX: void 0,
//                       startY: void 0,
//                       touchesStart: {},
//                       touchesCurrent: {},
//                     },
//                     velocity: {
//                       x: void 0,
//                       y: void 0,
//                       prevPositionX: void 0,
//                       prevPositionY: void 0,
//                       prevTime: void 0,
//                     },
//                   },
//                   ee
//                 ),
//               });
//               var i = 1;
//               Object.defineProperty(e.zoom, "scale", {
//                 get: function () {
//                   return i;
//                 },
//                 set: function (t) {
//                   if (i !== t) {
//                     var s = e.zoom.gesture.$imageEl
//                         ? e.zoom.gesture.$imageEl[0]
//                         : void 0,
//                       a = e.zoom.gesture.$slideEl
//                         ? e.zoom.gesture.$slideEl[0]
//                         : void 0;
//                     e.emit("zoomChange", t, s, a);
//                   }
//                   i = t;
//                 },
//               });
//             },
//             on: {
//               init: function (e) {
//                 e.params.zoom.enabled && e.zoom.enable();
//               },
//               destroy: function (e) {
//                 e.zoom.disable();
//               },
//               touchStart: function (e, t) {
//                 e.zoom.enabled && e.zoom.onTouchStart(t);
//               },
//               touchEnd: function (e, t) {
//                 e.zoom.enabled && e.zoom.onTouchEnd(t);
//               },
//               doubleTap: function (e, t) {
//                 e.params.zoom.enabled &&
//                   e.zoom.enabled &&
//                   e.params.zoom.toggle &&
//                   e.zoom.toggle(t);
//               },
//               transitionEnd: function (e) {
//                 e.zoom.enabled &&
//                   e.params.zoom.enabled &&
//                   e.zoom.onTransitionEnd();
//               },
//               slideChange: function (e) {
//                 e.zoom.enabled &&
//                   e.params.zoom.enabled &&
//                   e.params.cssMode &&
//                   e.zoom.onTransitionEnd();
//               },
//             },
//           },
//           {
//             name: "lazy",
//             params: {
//               lazy: {
//                 checkInView: !1,
//                 enabled: !1,
//                 loadPrevNext: !1,
//                 loadPrevNextAmount: 1,
//                 loadOnTransitionStart: !1,
//                 scrollingElement: "",
//                 elementClass: "swiper-lazy",
//                 loadingClass: "swiper-lazy-loading",
//                 loadedClass: "swiper-lazy-loaded",
//                 preloaderClass: "swiper-lazy-preloader",
//               },
//             },
//             create: function () {
//               k(this, { lazy: t({ initialImageLoaded: !1 }, te) });
//             },
//             on: {
//               beforeInit: function (e) {
//                 e.params.lazy.enabled &&
//                   e.params.preloadImages &&
//                   (e.params.preloadImages = !1);
//               },
//               init: function (e) {
//                 e.params.lazy.enabled &&
//                   !e.params.loop &&
//                   0 === e.params.initialSlide &&
//                   (e.params.lazy.checkInView
//                     ? e.lazy.checkInViewOnLoad()
//                     : e.lazy.load());
//               },
//               scroll: function (e) {
//                 e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
//               },
//               resize: function (e) {
//                 e.params.lazy.enabled && e.lazy.load();
//               },
//               scrollbarDragMove: function (e) {
//                 e.params.lazy.enabled && e.lazy.load();
//               },
//               transitionStart: function (e) {
//                 e.params.lazy.enabled &&
//                   (e.params.lazy.loadOnTransitionStart ||
//                     (!e.params.lazy.loadOnTransitionStart &&
//                       !e.lazy.initialImageLoaded)) &&
//                   e.lazy.load();
//               },
//               transitionEnd: function (e) {
//                 e.params.lazy.enabled &&
//                   !e.params.lazy.loadOnTransitionStart &&
//                   e.lazy.load();
//               },
//               slideChange: function (e) {
//                 e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
//               },
//             },
//           },
//           se,
//           {
//             name: "a11y",
//             params: {
//               a11y: {
//                 enabled: !0,
//                 notificationClass: "swiper-notification",
//                 prevSlideMessage: "Previous slide",
//                 nextSlideMessage: "Next slide",
//                 firstSlideMessage: "This is the first slide",
//                 lastSlideMessage: "This is the last slide",
//                 paginationBulletMessage: "Go to slide {{index}}",
//                 containerMessage: null,
//                 containerRoleDescriptionMessage: null,
//                 itemRoleDescriptionMessage: null,
//               },
//             },
//             create: function () {
//               k(this, {
//                 a11y: t({}, ae, {
//                   liveRegion: m(
//                     '<span class="' +
//                       this.params.a11y.notificationClass +
//                       '" aria-live="assertive" aria-atomic="true"></span>'
//                   ),
//                 }),
//               });
//             },
//             on: {
//               afterInit: function (e) {
//                 e.params.a11y.enabled &&
//                   (e.a11y.init(), e.a11y.updateNavigation());
//               },
//               toEdge: function (e) {
//                 e.params.a11y.enabled && e.a11y.updateNavigation();
//               },
//               fromEdge: function (e) {
//                 e.params.a11y.enabled && e.a11y.updateNavigation();
//               },
//               paginationUpdate: function (e) {
//                 e.params.a11y.enabled && e.a11y.updatePagination();
//               },
//               destroy: function (e) {
//                 e.params.a11y.enabled && e.a11y.destroy();
//               },
//             },
//           },
//           {
//             name: "history",
//             params: {
//               history: { enabled: !1, replaceState: !1, key: "slides" },
//             },
//             create: function () {
//               k(this, { history: t({}, re) });
//             },
//             on: {
//               init: function (e) {
//                 e.params.history.enabled && e.history.init();
//               },
//               destroy: function (e) {
//                 e.params.history.enabled && e.history.destroy();
//               },
//               transitionEnd: function (e) {
//                 e.history.initialized &&
//                   e.history.setHistory(e.params.history.key, e.activeIndex);
//               },
//               slideChange: function (e) {
//                 e.history.initialized &&
//                   e.params.cssMode &&
//                   e.history.setHistory(e.params.history.key, e.activeIndex);
//               },
//             },
//           },
//           {
//             name: "hash-navigation",
//             params: {
//               hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
//             },
//             create: function () {
//               k(this, { hashNavigation: t({ initialized: !1 }, ne) });
//             },
//             on: {
//               init: function (e) {
//                 e.params.hashNavigation.enabled && e.hashNavigation.init();
//               },
//               destroy: function (e) {
//                 e.params.hashNavigation.enabled && e.hashNavigation.destroy();
//               },
//               transitionEnd: function (e) {
//                 e.hashNavigation.initialized && e.hashNavigation.setHash();
//               },
//               slideChange: function (e) {
//                 e.hashNavigation.initialized &&
//                   e.params.cssMode &&
//                   e.hashNavigation.setHash();
//               },
//             },
//           },
//           {
//             name: "autoplay",
//             params: {
//               autoplay: {
//                 enabled: !1,
//                 delay: 3e3,
//                 waitForTransition: !0,
//                 disableOnInteraction: !0,
//                 stopOnLastSlide: !1,
//                 reverseDirection: !1,
//               },
//             },
//             create: function () {
//               k(this, { autoplay: t({}, oe, { running: !1, paused: !1 }) });
//             },
//             on: {
//               init: function (e) {
//                 e.params.autoplay.enabled &&
//                   (e.autoplay.start(),
//                   r().addEventListener(
//                     "visibilitychange",
//                     e.autoplay.onVisibilityChange
//                   ));
//               },
//               beforeTransitionStart: function (e, t, i) {
//                 e.autoplay.running &&
//                   (i || !e.params.autoplay.disableOnInteraction
//                     ? e.autoplay.pause(t)
//                     : e.autoplay.stop());
//               },
//               sliderFirstMove: function (e) {
//                 e.autoplay.running &&
//                   (e.params.autoplay.disableOnInteraction
//                     ? e.autoplay.stop()
//                     : e.autoplay.pause());
//               },
//               touchEnd: function (e) {
//                 e.params.cssMode &&
//                   e.autoplay.paused &&
//                   !e.params.autoplay.disableOnInteraction &&
//                   e.autoplay.run();
//               },
//               destroy: function (e) {
//                 e.autoplay.running && e.autoplay.stop(),
//                   r().removeEventListener(
//                     "visibilitychange",
//                     e.autoplay.onVisibilityChange
//                   );
//               },
//             },
//           },
//           {
//             name: "effect-fade",
//             params: { fadeEffect: { crossFade: !1 } },
//             create: function () {
//               k(this, { fadeEffect: t({}, le) });
//             },
//             on: {
//               beforeInit: function (e) {
//                 if ("fade" === e.params.effect) {
//                   e.classNames.push(e.params.containerModifierClass + "fade");
//                   var t = {
//                     slidesPerView: 1,
//                     slidesPerColumn: 1,
//                     slidesPerGroup: 1,
//                     watchSlidesProgress: !0,
//                     spaceBetween: 0,
//                     virtualTranslate: !0,
//                   };
//                   E(e.params, t), E(e.originalParams, t);
//                 }
//               },
//               setTranslate: function (e) {
//                 "fade" === e.params.effect && e.fadeEffect.setTranslate();
//               },
//               setTransition: function (e, t) {
//                 "fade" === e.params.effect && e.fadeEffect.setTransition(t);
//               },
//             },
//           },
//           {
//             name: "effect-cube",
//             params: {
//               cubeEffect: {
//                 slideShadows: !0,
//                 shadow: !0,
//                 shadowOffset: 20,
//                 shadowScale: 0.94,
//               },
//             },
//             create: function () {
//               k(this, { cubeEffect: t({}, de) });
//             },
//             on: {
//               beforeInit: function (e) {
//                 if ("cube" === e.params.effect) {
//                   e.classNames.push(e.params.containerModifierClass + "cube"),
//                     e.classNames.push(e.params.containerModifierClass + "3d");
//                   var t = {
//                     slidesPerView: 1,
//                     slidesPerColumn: 1,
//                     slidesPerGroup: 1,
//                     watchSlidesProgress: !0,
//                     resistanceRatio: 0,
//                     spaceBetween: 0,
//                     centeredSlides: !1,
//                     virtualTranslate: !0,
//                   };
//                   E(e.params, t), E(e.originalParams, t);
//                 }
//               },
//               setTranslate: function (e) {
//                 "cube" === e.params.effect && e.cubeEffect.setTranslate();
//               },
//               setTransition: function (e, t) {
//                 "cube" === e.params.effect && e.cubeEffect.setTransition(t);
//               },
//             },
//           },
//           {
//             name: "effect-flip",
//             params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
//             create: function () {
//               k(this, { flipEffect: t({}, pe) });
//             },
//             on: {
//               beforeInit: function (e) {
//                 if ("flip" === e.params.effect) {
//                   e.classNames.push(e.params.containerModifierClass + "flip"),
//                     e.classNames.push(e.params.containerModifierClass + "3d");
//                   var t = {
//                     slidesPerView: 1,
//                     slidesPerColumn: 1,
//                     slidesPerGroup: 1,
//                     watchSlidesProgress: !0,
//                     spaceBetween: 0,
//                     virtualTranslate: !0,
//                   };
//                   E(e.params, t), E(e.originalParams, t);
//                 }
//               },
//               setTranslate: function (e) {
//                 "flip" === e.params.effect && e.flipEffect.setTranslate();
//               },
//               setTransition: function (e, t) {
//                 "flip" === e.params.effect && e.flipEffect.setTransition(t);
//               },
//             },
//           },
//           {
//             name: "effect-coverflow",
//             params: {
//               coverflowEffect: {
//                 rotate: 50,
//                 stretch: 0,
//                 depth: 100,
//                 scale: 1,
//                 modifier: 1,
//                 slideShadows: !0,
//               },
//             },
//             create: function () {
//               k(this, { coverflowEffect: t({}, he) });
//             },
//             on: {
//               beforeInit: function (e) {
//                 "coverflow" === e.params.effect &&
//                   (e.classNames.push(
//                     e.params.containerModifierClass + "coverflow"
//                   ),
//                   e.classNames.push(e.params.containerModifierClass + "3d"),
//                   (e.params.watchSlidesProgress = !0),
//                   (e.originalParams.watchSlidesProgress = !0));
//               },
//               setTranslate: function (e) {
//                 "coverflow" === e.params.effect &&
//                   e.coverflowEffect.setTranslate();
//               },
//               setTransition: function (e, t) {
//                 "coverflow" === e.params.effect &&
//                   e.coverflowEffect.setTransition(t);
//               },
//             },
//           },
//           {
//             name: "thumbs",
//             params: {
//               thumbs: {
//                 swiper: null,
//                 multipleActiveThumbs: !0,
//                 autoScrollOffset: 0,
//                 slideThumbActiveClass: "swiper-slide-thumb-active",
//                 thumbsContainerClass: "swiper-container-thumbs",
//               },
//             },
//             create: function () {
//               k(this, { thumbs: t({ swiper: null, initialized: !1 }, ce) });
//             },
//             on: {
//               beforeInit: function (e) {
//                 var t = e.params.thumbs;
//                 t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
//               },
//               slideChange: function (e) {
//                 e.thumbs.swiper && e.thumbs.update();
//               },
//               update: function (e) {
//                 e.thumbs.swiper && e.thumbs.update();
//               },
//               resize: function (e) {
//                 e.thumbs.swiper && e.thumbs.update();
//               },
//               observerUpdate: function (e) {
//                 e.thumbs.swiper && e.thumbs.update();
//               },
//               setTransition: function (e, t) {
//                 var i = e.thumbs.swiper;
//                 i && i.setTransition(t);
//               },
//               beforeDestroy: function (e) {
//                 var t = e.thumbs.swiper;
//                 t && e.thumbs.swiperCreated && t && t.destroy();
//               },
//             },
//           },
//         ];
//       return R.use(ue), R;
//     })();
//   },
//   function (e, t, i) {
//     var s = i(4);
//     "string" == typeof s && (s = [[e.i, s, ""]]);
//     var a = { hmr: !0, transform: void 0, insertInto: void 0 };
//     i(5)(s, a);
//     s.locals && (e.exports = s.locals);
//   },
//   function (e, t, i) {},
//   ,
//   ,
//   function (e, t, i) {
//     var s, a, r;
//     !(function (n) {
//       "use strict";
//       (a = [i(0)]),
//         void 0 ===
//           (r =
//             "function" ==
//             typeof (s = function (e) {
//               var t = window.Slick || {};
//               (((i = 0),
//               (t = function (t, s) {
//                 var a,
//                   r = this;
//                 (r.defaults = {
//                   accessibility: !0,
//                   adaptiveHeight: !1,
//                   appendArrows: e(t),
//                   appendDots: e(t),
//                   arrows: !0,
//                   asNavFor: null,
//                   prevArrow:
//                     '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
//                   nextArrow:
//                     '<button class="slick-next" aria-label="Next" type="button">Next</button>',
//                   autoplay: !1,
//                   autoplaySpeed: 3e3,
//                   centerMode: !1,
//                   centerPadding: "50px",
//                   cssEase: "ease",
//                   customPaging: function (t, i) {
//                     return e('<button type="button" />').text(i + 1);
//                   },
//                   dots: !1,
//                   dotsClass: "slick-dots",
//                   draggable: !0,
//                   easing: "linear",
//                   edgeFriction: 0.35,
//                   fade: !1,
//                   focusOnSelect: !1,
//                   focusOnChange: !1,
//                   infinite: !0,
//                   initialSlide: 0,
//                   lazyLoad: "ondemand",
//                   mobileFirst: !1,
//                   pauseOnHover: !0,
//                   pauseOnFocus: !0,
//                   pauseOnDotsHover: !1,
//                   respondTo: "window",
//                   responsive: null,
//                   rows: 1,
//                   rtl: !1,
//                   slide: "",
//                   slidesPerRow: 1,
//                   slidesToShow: 1,
//                   slidesToScroll: 1,
//                   speed: 500,
//                   swipe: !0,
//                   swipeToSlide: !1,
//                   touchMove: !0,
//                   touchThreshold: 5,
//                   useCSS: !0,
//                   useTransform: !0,
//                   variableWidth: !1,
//                   vertical: !1,
//                   verticalSwiping: !1,
//                   waitForAnimate: !0,
//                   zIndex: 1e3,
//                 }),
//                   (r.initials = {
//                     animating: !1,
//                     dragging: !1,
//                     autoPlayTimer: null,
//                     currentDirection: 0,
//                     currentLeft: null,
//                     currentSlide: 0,
//                     direction: 1,
//                     $dots: null,
//                     listWidth: null,
//                     listHeight: null,
//                     loadIndex: 0,
//                     $nextArrow: null,
//                     $prevArrow: null,
//                     scrolling: !1,
//                     slideCount: null,
//                     slideWidth: null,
//                     $slideTrack: null,
//                     $slides: null,
//                     sliding: !1,
//                     slideOffset: 0,
//                     swipeLeft: null,
//                     swiping: !1,
//                     $list: null,
//                     touchObject: {},
//                     transformsEnabled: !1,
//                     unslicked: !1,
//                   }),
//                   e.extend(r, r.initials),
//                   (r.activeBreakpoint = null),
//                   (r.animType = null),
//                   (r.animProp = null),
//                   (r.breakpoints = []),
//                   (r.breakpointSettings = []),
//                   (r.cssTransitions = !1),
//                   (r.focussed = !1),
//                   (r.interrupted = !1),
//                   (r.hidden = "hidden"),
//                   (r.paused = !0),
//                   (r.positionProp = null),
//                   (r.respondTo = null),
//                   (r.rowCount = 1),
//                   (r.shouldClick = !0),
//                   (r.$slider = e(t)),
//                   (r.$slidesCache = null),
//                   (r.transformType = null),
//                   (r.transitionType = null),
//                   (r.visibilityChange = "visibilitychange"),
//                   (r.windowWidth = 0),
//                   (r.windowTimer = null),
//                   (a = e(t).data("slick") || {}),
//                   (r.options = e.extend({}, r.defaults, s, a)),
//                   (r.currentSlide = r.options.initialSlide),
//                   (r.originalSettings = r.options),
//                   void 0 !== document.mozHidden
//                     ? ((r.hidden = "mozHidden"),
//                       (r.visibilityChange = "mozvisibilitychange"))
//                     : void 0 !== document.webkitHidden &&
//                       ((r.hidden = "webkitHidden"),
//                       (r.visibilityChange = "webkitvisibilitychange")),
//                   (r.autoPlay = e.proxy(r.autoPlay, r)),
//                   (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
//                   (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
//                   (r.changeSlide = e.proxy(r.changeSlide, r)),
//                   (r.clickHandler = e.proxy(r.clickHandler, r)),
//                   (r.selectHandler = e.proxy(r.selectHandler, r)),
//                   (r.setPosition = e.proxy(r.setPosition, r)),
//                   (r.swipeHandler = e.proxy(r.swipeHandler, r)),
//                   (r.dragHandler = e.proxy(r.dragHandler, r)),
//                   (r.keyHandler = e.proxy(r.keyHandler, r)),
//                   (r.instanceUid = i++),
//                   (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
//                   r.registerBreakpoints(),
//                   r.init(!0);
//               })).prototype.activateADA = function () {
//                 this.$slideTrack
//                   .find(".slick-active")
//                   .attr({ "aria-hidden": "false" })
//                   .find("a, input, button, select")
//                   .attr({ tabindex: "0" });
//               }),
//                 (t.prototype.addSlide = t.prototype.slickAdd =
//                   function (t, i, s) {
//                     var a = this;
//                     if ("boolean" == typeof i) (s = i), (i = null);
//                     else if (i < 0 || i >= a.slideCount) return !1;
//                     a.unload(),
//                       "number" == typeof i
//                         ? 0 === i && 0 === a.$slides.length
//                           ? e(t).appendTo(a.$slideTrack)
//                           : s
//                           ? e(t).insertBefore(a.$slides.eq(i))
//                           : e(t).insertAfter(a.$slides.eq(i))
//                         : !0 === s
//                         ? e(t).prependTo(a.$slideTrack)
//                         : e(t).appendTo(a.$slideTrack),
//                       (a.$slides = a.$slideTrack.children(this.options.slide)),
//                       a.$slideTrack.children(this.options.slide).detach(),
//                       a.$slideTrack.append(a.$slides),
//                       a.$slides.each(function (t, i) {
//                         e(i).attr("data-slick-index", t);
//                       }),
//                       (a.$slidesCache = a.$slides),
//                       a.reinit();
//                   }),
//                 (t.prototype.animateHeight = function () {
//                   var e = this;
//                   if (
//                     1 === e.options.slidesToShow &&
//                     !0 === e.options.adaptiveHeight &&
//                     !1 === e.options.vertical
//                   ) {
//                     var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
//                     e.$list.animate({ height: t }, e.options.speed);
//                   }
//                 }),
//                 (t.prototype.animateSlide = function (t, i) {
//                   var s = {},
//                     a = this;
//                   a.animateHeight(),
//                     !0 === a.options.rtl &&
//                       !1 === a.options.vertical &&
//                       (t = -t),
//                     !1 === a.transformsEnabled
//                       ? !1 === a.options.vertical
//                         ? a.$slideTrack.animate(
//                             { left: t },
//                             a.options.speed,
//                             a.options.easing,
//                             i
//                           )
//                         : a.$slideTrack.animate(
//                             { top: t },
//                             a.options.speed,
//                             a.options.easing,
//                             i
//                           )
//                       : !1 === a.cssTransitions
//                       ? (!0 === a.options.rtl &&
//                           (a.currentLeft = -a.currentLeft),
//                         e({ animStart: a.currentLeft }).animate(
//                           { animStart: t },
//                           {
//                             duration: a.options.speed,
//                             easing: a.options.easing,
//                             step: function (e) {
//                               (e = Math.ceil(e)),
//                                 !1 === a.options.vertical
//                                   ? ((s[a.animType] =
//                                       "translate(" + e + "px, 0px)"),
//                                     a.$slideTrack.css(s))
//                                   : ((s[a.animType] =
//                                       "translate(0px," + e + "px)"),
//                                     a.$slideTrack.css(s));
//                             },
//                             complete: function () {
//                               i && i.call();
//                             },
//                           }
//                         ))
//                       : (a.applyTransition(),
//                         (t = Math.ceil(t)),
//                         !1 === a.options.vertical
//                           ? (s[a.animType] =
//                               "translate3d(" + t + "px, 0px, 0px)")
//                           : (s[a.animType] =
//                               "translate3d(0px," + t + "px, 0px)"),
//                         a.$slideTrack.css(s),
//                         i &&
//                           setTimeout(function () {
//                             a.disableTransition(), i.call();
//                           }, a.options.speed));
//                 }),
//                 (t.prototype.getNavTarget = function () {
//                   var t = this.options.asNavFor;
//                   return t && null !== t && (t = e(t).not(this.$slider)), t;
//                 }),
//                 (t.prototype.asNavFor = function (t) {
//                   var i = this.getNavTarget();
//                   null !== i &&
//                     "object" == typeof i &&
//                     i.each(function () {
//                       var i = e(this).slick("getSlick");
//                       i.unslicked || i.slideHandler(t, !0);
//                     });
//                 }),
//                 (t.prototype.applyTransition = function (e) {
//                   var t = this,
//                     i = {};
//                   !1 === t.options.fade
//                     ? (i[t.transitionType] =
//                         t.transformType +
//                         " " +
//                         t.options.speed +
//                         "ms " +
//                         t.options.cssEase)
//                     : (i[t.transitionType] =
//                         "opacity " +
//                         t.options.speed +
//                         "ms " +
//                         t.options.cssEase),
//                     !1 === t.options.fade
//                       ? t.$slideTrack.css(i)
//                       : t.$slides.eq(e).css(i);
//                 }),
//                 (t.prototype.autoPlay = function () {
//                   var e = this;
//                   e.autoPlayClear(),
//                     e.slideCount > e.options.slidesToShow &&
//                       (e.autoPlayTimer = setInterval(
//                         e.autoPlayIterator,
//                         e.options.autoplaySpeed
//                       ));
//                 }),
//                 (t.prototype.autoPlayClear = function () {
//                   this.autoPlayTimer && clearInterval(this.autoPlayTimer);
//                 }),
//                 (t.prototype.autoPlayIterator = function () {
//                   var e = this,
//                     t = e.currentSlide + e.options.slidesToScroll;
//                   e.paused ||
//                     e.interrupted ||
//                     e.focussed ||
//                     (!1 === e.options.infinite &&
//                       (1 === e.direction &&
//                       e.currentSlide + 1 === e.slideCount - 1
//                         ? (e.direction = 0)
//                         : 0 === e.direction &&
//                           ((t = e.currentSlide - e.options.slidesToScroll),
//                           e.currentSlide - 1 == 0 && (e.direction = 1))),
//                     e.slideHandler(t));
//                 }),
//                 (t.prototype.buildArrows = function () {
//                   var t = this;
//                   !0 === t.options.arrows &&
//                     ((t.$prevArrow = e(t.options.prevArrow).addClass(
//                       "slick-arrow"
//                     )),
//                     (t.$nextArrow = e(t.options.nextArrow).addClass(
//                       "slick-arrow"
//                     )),
//                     t.slideCount > t.options.slidesToShow
//                       ? (t.$prevArrow
//                           .removeClass("slick-hidden")
//                           .removeAttr("aria-hidden tabindex"),
//                         t.$nextArrow
//                           .removeClass("slick-hidden")
//                           .removeAttr("aria-hidden tabindex"),
//                         t.htmlExpr.test(t.options.prevArrow) &&
//                           t.$prevArrow.prependTo(t.options.appendArrows),
//                         t.htmlExpr.test(t.options.nextArrow) &&
//                           t.$nextArrow.appendTo(t.options.appendArrows),
//                         !0 !== t.options.infinite &&
//                           t.$prevArrow
//                             .addClass("slick-disabled")
//                             .attr("aria-disabled", "true"))
//                       : t.$prevArrow
//                           .add(t.$nextArrow)
//                           .addClass("slick-hidden")
//                           .attr({ "aria-disabled": "true", tabindex: "-1" }));
//                 }),
//                 (t.prototype.buildDots = function () {
//                   var t,
//                     i,
//                     s = this;
//                   if (
//                     !0 === s.options.dots &&
//                     s.slideCount > s.options.slidesToShow
//                   ) {
//                     for (
//                       s.$slider.addClass("slick-dotted"),
//                         i = e("<ul />").addClass(s.options.dotsClass),
//                         t = 0;
//                       t <= s.getDotCount();
//                       t += 1
//                     )
//                       i.append(
//                         e("<li />").append(
//                           s.options.customPaging.call(this, s, t)
//                         )
//                       );
//                     (s.$dots = i.appendTo(s.options.appendDots)),
//                       s.$dots.find("li").first().addClass("slick-active");
//                   }
//                 }),
//                 (t.prototype.buildOut = function () {
//                   var t = this;
//                   (t.$slides = t.$slider
//                     .children(t.options.slide + ":not(.slick-cloned)")
//                     .addClass("slick-slide")),
//                     (t.slideCount = t.$slides.length),
//                     t.$slides.each(function (t, i) {
//                       e(i)
//                         .attr("data-slick-index", t)
//                         .data("originalStyling", e(i).attr("style") || "");
//                     }),
//                     t.$slider.addClass("slick-slider"),
//                     (t.$slideTrack =
//                       0 === t.slideCount
//                         ? e('<div class="slick-track"/>').appendTo(t.$slider)
//                         : t.$slides
//                             .wrapAll('<div class="slick-track"/>')
//                             .parent()),
//                     (t.$list = t.$slideTrack
//                       .wrap('<div class="slick-list"/>')
//                       .parent()),
//                     t.$slideTrack.css("opacity", 0),
//                     (!0 !== t.options.centerMode &&
//                       !0 !== t.options.swipeToSlide) ||
//                       (t.options.slidesToScroll = 1),
//                     e("img[data-lazy]", t.$slider)
//                       .not("[src]")
//                       .addClass("slick-loading"),
//                     t.setupInfinite(),
//                     t.buildArrows(),
//                     t.buildDots(),
//                     t.updateDots(),
//                     t.setSlideClasses(
//                       "number" == typeof t.currentSlide ? t.currentSlide : 0
//                     ),
//                     !0 === t.options.draggable && t.$list.addClass("draggable");
//                 }),
//                 (t.prototype.buildRows = function () {
//                   var e,
//                     t,
//                     i,
//                     s,
//                     a,
//                     r,
//                     n,
//                     o = this;
//                   if (
//                     ((s = document.createDocumentFragment()),
//                     (r = o.$slider.children()),
//                     o.options.rows > 0)
//                   ) {
//                     for (
//                       n = o.options.slidesPerRow * o.options.rows,
//                         a = Math.ceil(r.length / n),
//                         e = 0;
//                       e < a;
//                       e++
//                     ) {
//                       var l = document.createElement("div");
//                       for (t = 0; t < o.options.rows; t++) {
//                         var d = document.createElement("div");
//                         for (i = 0; i < o.options.slidesPerRow; i++) {
//                           var p = e * n + (t * o.options.slidesPerRow + i);
//                           r.get(p) && d.appendChild(r.get(p));
//                         }
//                         l.appendChild(d);
//                       }
//                       s.appendChild(l);
//                     }
//                     o.$slider.empty().append(s),
//                       o.$slider
//                         .children()
//                         .children()
//                         .children()
//                         .css({
//                           width: 100 / o.options.slidesPerRow + "%",
//                           display: "flex",
//                         });
//                   }
//                 }),
//                 (t.prototype.checkResponsive = function (t, i) {
//                   var s,
//                     a,
//                     r,
//                     n = this,
//                     o = !1,
//                     l = n.$slider.width(),
//                     d = window.innerWidth || e(window).width();
//                   if (
//                     ("window" === n.respondTo
//                       ? (r = d)
//                       : "slider" === n.respondTo
//                       ? (r = l)
//                       : "min" === n.respondTo && (r = Math.min(d, l)),
//                     n.options.responsive &&
//                       n.options.responsive.length &&
//                       null !== n.options.responsive)
//                   ) {
//                     for (s in ((a = null), n.breakpoints))
//                       n.breakpoints.hasOwnProperty(s) &&
//                         (!1 === n.originalSettings.mobileFirst
//                           ? r < n.breakpoints[s] && (a = n.breakpoints[s])
//                           : r > n.breakpoints[s] && (a = n.breakpoints[s]));
//                     null !== a
//                       ? null !== n.activeBreakpoint
//                         ? (a !== n.activeBreakpoint || i) &&
//                           ((n.activeBreakpoint = a),
//                           "unslick" === n.breakpointSettings[a]
//                             ? n.unslick(a)
//                             : ((n.options = e.extend(
//                                 {},
//                                 n.originalSettings,
//                                 n.breakpointSettings[a]
//                               )),
//                               !0 === t &&
//                                 (n.currentSlide = n.options.initialSlide),
//                               n.refresh(t)),
//                           (o = a))
//                         : ((n.activeBreakpoint = a),
//                           "unslick" === n.breakpointSettings[a]
//                             ? n.unslick(a)
//                             : ((n.options = e.extend(
//                                 {},
//                                 n.originalSettings,
//                                 n.breakpointSettings[a]
//                               )),
//                               !0 === t &&
//                                 (n.currentSlide = n.options.initialSlide),
//                               n.refresh(t)),
//                           (o = a))
//                       : null !== n.activeBreakpoint &&
//                         ((n.activeBreakpoint = null),
//                         (n.options = n.originalSettings),
//                         !0 === t && (n.currentSlide = n.options.initialSlide),
//                         n.refresh(t),
//                         (o = a)),
//                       t || !1 === o || n.$slider.trigger("breakpoint", [n, o]);
//                   }
//                 }),
//                 (t.prototype.changeSlide = function (t, i) {
//                   var s,
//                     a,
//                     r = this,
//                     n = e(t.currentTarget);
//                   switch (
//                     (n.is("a") && t.preventDefault(),
//                     n.is("li") || (n = n.closest("li")),
//                     (s =
//                       r.slideCount % r.options.slidesToScroll != 0
//                         ? 0
//                         : (r.slideCount - r.currentSlide) %
//                           r.options.slidesToScroll),
//                     t.data.message)
//                   ) {
//                     case "previous":
//                       (a =
//                         0 === s
//                           ? r.options.slidesToScroll
//                           : r.options.slidesToShow - s),
//                         r.slideCount > r.options.slidesToShow &&
//                           r.slideHandler(r.currentSlide - a, !1, i);
//                       break;
//                     case "next":
//                       (a = 0 === s ? r.options.slidesToScroll : s),
//                         r.slideCount > r.options.slidesToShow &&
//                           r.slideHandler(r.currentSlide + a, !1, i);
//                       break;
//                     case "index":
//                       var o =
//                         0 === t.data.index
//                           ? 0
//                           : t.data.index ||
//                             n.index() * r.options.slidesToScroll;
//                       r.slideHandler(r.checkNavigable(o), !1, i),
//                         n.children().trigger("focus");
//                       break;
//                     default:
//                       return;
//                   }
//                 }),
//                 (t.prototype.checkNavigable = function (e) {
//                   var t, i;
//                   if (
//                     ((i = 0),
//                     e > (t = this.getNavigableIndexes())[t.length - 1])
//                   )
//                     e = t[t.length - 1];
//                   else
//                     for (var s in t) {
//                       if (e < t[s]) {
//                         e = i;
//                         break;
//                       }
//                       i = t[s];
//                     }
//                   return e;
//                 }),
//                 (t.prototype.cleanUpEvents = function () {
//                   var t = this;
//                   t.options.dots &&
//                     null !== t.$dots &&
//                     (e("li", t.$dots)
//                       .off("click.slick", t.changeSlide)
//                       .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
//                       .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
//                     !0 === t.options.accessibility &&
//                       t.$dots.off("keydown.slick", t.keyHandler)),
//                     t.$slider.off("focus.slick blur.slick"),
//                     !0 === t.options.arrows &&
//                       t.slideCount > t.options.slidesToShow &&
//                       (t.$prevArrow &&
//                         t.$prevArrow.off("click.slick", t.changeSlide),
//                       t.$nextArrow &&
//                         t.$nextArrow.off("click.slick", t.changeSlide),
//                       !0 === t.options.accessibility &&
//                         (t.$prevArrow &&
//                           t.$prevArrow.off("keydown.slick", t.keyHandler),
//                         t.$nextArrow &&
//                           t.$nextArrow.off("keydown.slick", t.keyHandler))),
//                     t.$list.off(
//                       "touchstart.slick mousedown.slick",
//                       t.swipeHandler
//                     ),
//                     t.$list.off(
//                       "touchmove.slick mousemove.slick",
//                       t.swipeHandler
//                     ),
//                     t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
//                     t.$list.off(
//                       "touchcancel.slick mouseleave.slick",
//                       t.swipeHandler
//                     ),
//                     t.$list.off("click.slick", t.clickHandler),
//                     e(document).off(t.visibilityChange, t.visibility),
//                     t.cleanUpSlideEvents(),
//                     !0 === t.options.accessibility &&
//                       t.$list.off("keydown.slick", t.keyHandler),
//                     !0 === t.options.focusOnSelect &&
//                       e(t.$slideTrack)
//                         .children()
//                         .off("click.slick", t.selectHandler),
//                     e(window).off(
//                       "orientationchange.slick.slick-" + t.instanceUid,
//                       t.orientationChange
//                     ),
//                     e(window).off(
//                       "resize.slick.slick-" + t.instanceUid,
//                       t.resize
//                     ),
//                     e("[draggable!=true]", t.$slideTrack).off(
//                       "dragstart",
//                       t.preventDefault
//                     ),
//                     e(window).off(
//                       "load.slick.slick-" + t.instanceUid,
//                       t.setPosition
//                     );
//                 }),
//                 (t.prototype.cleanUpSlideEvents = function () {
//                   var t = this;
//                   t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
//                     t.$list.off(
//                       "mouseleave.slick",
//                       e.proxy(t.interrupt, t, !1)
//                     );
//                 }),
//                 (t.prototype.cleanUpRows = function () {
//                   var e,
//                     t = this;
//                   t.options.rows > 0 &&
//                     ((e = t.$slides.children().children()).removeAttr("style"),
//                     t.$slider.empty().append(e));
//                 }),
//                 (t.prototype.clickHandler = function (e) {
//                   !1 === this.shouldClick &&
//                     (e.stopImmediatePropagation(),
//                     e.stopPropagation(),
//                     e.preventDefault());
//                 }),
//                 (t.prototype.destroy = function (t) {
//                   var i = this;
//                   i.autoPlayClear(),
//                     (i.touchObject = {}),
//                     i.cleanUpEvents(),
//                     e(".slick-cloned", i.$slider).detach(),
//                     i.$dots && i.$dots.remove(),
//                     i.$prevArrow &&
//                       i.$prevArrow.length &&
//                       (i.$prevArrow
//                         .removeClass("slick-disabled slick-arrow slick-hidden")
//                         .removeAttr("aria-hidden aria-disabled tabindex")
//                         .css("display", ""),
//                       i.htmlExpr.test(i.options.prevArrow) &&
//                         i.$prevArrow.remove()),
//                     i.$nextArrow &&
//                       i.$nextArrow.length &&
//                       (i.$nextArrow
//                         .removeClass("slick-disabled slick-arrow slick-hidden")
//                         .removeAttr("aria-hidden aria-disabled tabindex")
//                         .css("display", ""),
//                       i.htmlExpr.test(i.options.nextArrow) &&
//                         i.$nextArrow.remove()),
//                     i.$slides &&
//                       (i.$slides
//                         .removeClass(
//                           "slick-slide slick-active slick-center slick-visible slick-current"
//                         )
//                         .removeAttr("aria-hidden")
//                         .removeAttr("data-slick-index")
//                         .each(function () {
//                           e(this).attr(
//                             "style",
//                             e(this).data("originalStyling")
//                           );
//                         }),
//                       i.$slideTrack.children(this.options.slide).detach(),
//                       i.$slideTrack.detach(),
//                       i.$list.detach(),
//                       i.$slider.append(i.$slides)),
//                     i.cleanUpRows(),
//                     i.$slider.removeClass("slick-slider"),
//                     i.$slider.removeClass("slick-initialized"),
//                     i.$slider.removeClass("slick-dotted"),
//                     (i.unslicked = !0),
//                     t || i.$slider.trigger("destroy", [i]);
//                 }),
//                 (t.prototype.disableTransition = function (e) {
//                   var t = this,
//                     i = {};
//                   (i[t.transitionType] = ""),
//                     !1 === t.options.fade
//                       ? t.$slideTrack.css(i)
//                       : t.$slides.eq(e).css(i);
//                 }),
//                 (t.prototype.fadeSlide = function (e, t) {
//                   var i = this;
//                   !1 === i.cssTransitions
//                     ? (i.$slides.eq(e).css({ zIndex: i.options.zIndex }),
//                       i.$slides
//                         .eq(e)
//                         .animate(
//                           { opacity: 1 },
//                           i.options.speed,
//                           i.options.easing,
//                           t
//                         ))
//                     : (i.applyTransition(e),
//                       i.$slides
//                         .eq(e)
//                         .css({ opacity: 1, zIndex: i.options.zIndex }),
//                       t &&
//                         setTimeout(function () {
//                           i.disableTransition(e), t.call();
//                         }, i.options.speed));
//                 }),
//                 (t.prototype.fadeSlideOut = function (e) {
//                   var t = this;
//                   !1 === t.cssTransitions
//                     ? t.$slides
//                         .eq(e)
//                         .animate(
//                           { opacity: 0, zIndex: t.options.zIndex - 2 },
//                           t.options.speed,
//                           t.options.easing
//                         )
//                     : (t.applyTransition(e),
//                       t.$slides
//                         .eq(e)
//                         .css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
//                 }),
//                 (t.prototype.filterSlides = t.prototype.slickFilter =
//                   function (e) {
//                     var t = this;
//                     null !== e &&
//                       ((t.$slidesCache = t.$slides),
//                       t.unload(),
//                       t.$slideTrack.children(this.options.slide).detach(),
//                       t.$slidesCache.filter(e).appendTo(t.$slideTrack),
//                       t.reinit());
//                   }),
//                 (t.prototype.focusHandler = function () {
//                   var t = this;
//                   t.$slider
//                     .off("focus.slick blur.slick")
//                     .on("focus.slick blur.slick", "*", function (i) {
//                       i.stopImmediatePropagation();
//                       var s = e(this);
//                       setTimeout(function () {
//                         t.options.pauseOnFocus &&
//                           ((t.focussed = s.is(":focus")), t.autoPlay());
//                       }, 0);
//                     });
//                 }),
//                 (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
//                   function () {
//                     return this.currentSlide;
//                   }),
//                 (t.prototype.getDotCount = function () {
//                   var e = this,
//                     t = 0,
//                     i = 0,
//                     s = 0;
//                   if (!0 === e.options.infinite)
//                     if (e.slideCount <= e.options.slidesToShow) ++s;
//                     else
//                       for (; t < e.slideCount; )
//                         ++s,
//                           (t = i + e.options.slidesToScroll),
//                           (i +=
//                             e.options.slidesToScroll <= e.options.slidesToShow
//                               ? e.options.slidesToScroll
//                               : e.options.slidesToShow);
//                   else if (!0 === e.options.centerMode) s = e.slideCount;
//                   else if (e.options.asNavFor)
//                     for (; t < e.slideCount; )
//                       ++s,
//                         (t = i + e.options.slidesToScroll),
//                         (i +=
//                           e.options.slidesToScroll <= e.options.slidesToShow
//                             ? e.options.slidesToScroll
//                             : e.options.slidesToShow);
//                   else
//                     s =
//                       1 +
//                       Math.ceil(
//                         (e.slideCount - e.options.slidesToShow) /
//                           e.options.slidesToScroll
//                       );
//                   return s - 1;
//                 }),
//                 (t.prototype.getLeft = function (e) {
//                   var t,
//                     i,
//                     s,
//                     a,
//                     r = this,
//                     n = 0;
//                   return (
//                     (r.slideOffset = 0),
//                     (i = r.$slides.first().outerHeight(!0)),
//                     !0 === r.options.infinite
//                       ? (r.slideCount > r.options.slidesToShow &&
//                           ((r.slideOffset =
//                             r.slideWidth * r.options.slidesToShow * -1),
//                           (a = -1),
//                           !0 === r.options.vertical &&
//                             !0 === r.options.centerMode &&
//                             (2 === r.options.slidesToShow
//                               ? (a = -1.5)
//                               : 1 === r.options.slidesToShow && (a = -2)),
//                           (n = i * r.options.slidesToShow * a)),
//                         r.slideCount % r.options.slidesToScroll != 0 &&
//                           e + r.options.slidesToScroll > r.slideCount &&
//                           r.slideCount > r.options.slidesToShow &&
//                           (e > r.slideCount
//                             ? ((r.slideOffset =
//                                 (r.options.slidesToShow - (e - r.slideCount)) *
//                                 r.slideWidth *
//                                 -1),
//                               (n =
//                                 (r.options.slidesToShow - (e - r.slideCount)) *
//                                 i *
//                                 -1))
//                             : ((r.slideOffset =
//                                 (r.slideCount % r.options.slidesToScroll) *
//                                 r.slideWidth *
//                                 -1),
//                               (n =
//                                 (r.slideCount % r.options.slidesToScroll) *
//                                 i *
//                                 -1))))
//                       : e + r.options.slidesToShow > r.slideCount &&
//                         ((r.slideOffset =
//                           (e + r.options.slidesToShow - r.slideCount) *
//                           r.slideWidth),
//                         (n = (e + r.options.slidesToShow - r.slideCount) * i)),
//                     r.slideCount <= r.options.slidesToShow &&
//                       ((r.slideOffset = 0), (n = 0)),
//                     !0 === r.options.centerMode &&
//                     r.slideCount <= r.options.slidesToShow
//                       ? (r.slideOffset =
//                           (r.slideWidth * Math.floor(r.options.slidesToShow)) /
//                             2 -
//                           (r.slideWidth * r.slideCount) / 2)
//                       : !0 === r.options.centerMode && !0 === r.options.infinite
//                       ? (r.slideOffset +=
//                           r.slideWidth *
//                             Math.floor(r.options.slidesToShow / 2) -
//                           r.slideWidth)
//                       : !0 === r.options.centerMode &&
//                         ((r.slideOffset = 0),
//                         (r.slideOffset +=
//                           r.slideWidth *
//                           Math.floor(r.options.slidesToShow / 2))),
//                     (t =
//                       !1 === r.options.vertical
//                         ? e * r.slideWidth * -1 + r.slideOffset
//                         : e * i * -1 + n),
//                     !0 === r.options.variableWidth &&
//                       ((s =
//                         r.slideCount <= r.options.slidesToShow ||
//                         !1 === r.options.infinite
//                           ? r.$slideTrack.children(".slick-slide").eq(e)
//                           : r.$slideTrack
//                               .children(".slick-slide")
//                               .eq(e + r.options.slidesToShow)),
//                       (t =
//                         !0 === r.options.rtl
//                           ? s[0]
//                             ? -1 *
//                               (r.$slideTrack.width() -
//                                 s[0].offsetLeft -
//                                 s.width())
//                             : 0
//                           : s[0]
//                           ? -1 * s[0].offsetLeft
//                           : 0),
//                       !0 === r.options.centerMode &&
//                         ((s =
//                           r.slideCount <= r.options.slidesToShow ||
//                           !1 === r.options.infinite
//                             ? r.$slideTrack.children(".slick-slide").eq(e)
//                             : r.$slideTrack
//                                 .children(".slick-slide")
//                                 .eq(e + r.options.slidesToShow + 1)),
//                         (t =
//                           !0 === r.options.rtl
//                             ? s[0]
//                               ? -1 *
//                                 (r.$slideTrack.width() -
//                                   s[0].offsetLeft -
//                                   s.width())
//                               : 0
//                             : s[0]
//                             ? -1 * s[0].offsetLeft
//                             : 0),
//                         (t += (r.$list.width() - s.outerWidth()) / 2))),
//                     t
//                   );
//                 }),
//                 (t.prototype.getOption = t.prototype.slickGetOption =
//                   function (e) {
//                     return this.options[e];
//                   }),
//                 (t.prototype.getNavigableIndexes = function () {
//                   var e,
//                     t = this,
//                     i = 0,
//                     s = 0,
//                     a = [];
//                   for (
//                     !1 === t.options.infinite
//                       ? (e = t.slideCount)
//                       : ((i = -1 * t.options.slidesToScroll),
//                         (s = -1 * t.options.slidesToScroll),
//                         (e = 2 * t.slideCount));
//                     i < e;

//                   )
//                     a.push(i),
//                       (i = s + t.options.slidesToScroll),
//                       (s +=
//                         t.options.slidesToScroll <= t.options.slidesToShow
//                           ? t.options.slidesToScroll
//                           : t.options.slidesToShow);
//                   return a;
//                 }),
//                 (t.prototype.getSlick = function () {
//                   return this;
//                 }),
//                 (t.prototype.getSlideCount = function () {
//                   var t,
//                     i,
//                     s = this;
//                   return (
//                     (i =
//                       !0 === s.options.centerMode
//                         ? s.slideWidth * Math.floor(s.options.slidesToShow / 2)
//                         : 0),
//                     !0 === s.options.swipeToSlide
//                       ? (s.$slideTrack
//                           .find(".slick-slide")
//                           .each(function (a, r) {
//                             if (
//                               r.offsetLeft - i + e(r).outerWidth() / 2 >
//                               -1 * s.swipeLeft
//                             )
//                               return (t = r), !1;
//                           }),
//                         Math.abs(
//                           e(t).attr("data-slick-index") - s.currentSlide
//                         ) || 1)
//                       : s.options.slidesToScroll
//                   );
//                 }),
//                 (t.prototype.goTo = t.prototype.slickGoTo =
//                   function (e, t) {
//                     this.changeSlide(
//                       { data: { message: "index", index: parseInt(e) } },
//                       t
//                     );
//                   }),
//                 (t.prototype.init = function (t) {
//                   var i = this;
//                   e(i.$slider).hasClass("slick-initialized") ||
//                     (e(i.$slider).addClass("slick-initialized"),
//                     i.buildRows(),
//                     i.buildOut(),
//                     i.setProps(),
//                     i.startLoad(),
//                     i.loadSlider(),
//                     i.initializeEvents(),
//                     i.updateArrows(),
//                     i.updateDots(),
//                     i.checkResponsive(!0),
//                     i.focusHandler()),
//                     t && i.$slider.trigger("init", [i]),
//                     !0 === i.options.accessibility && i.initADA(),
//                     i.options.autoplay && ((i.paused = !1), i.autoPlay());
//                 }),
//                 (t.prototype.initADA = function () {
//                   var t = this,
//                     i = Math.ceil(t.slideCount / t.options.slidesToShow),
//                     s = t.getNavigableIndexes().filter(function (e) {
//                       return e >= 0 && e < t.slideCount;
//                     });
//                   t.$slides
//                     .add(t.$slideTrack.find(".slick-cloned"))
//                     .attr({ "aria-hidden": "true", tabindex: "-1" })
//                     .find("a, input, button, select")
//                     .attr({ tabindex: "-1" }),
//                     null !== t.$dots &&
//                       (t.$slides
//                         .not(t.$slideTrack.find(".slick-cloned"))
//                         .each(function (i) {
//                           var a = s.indexOf(i);
//                           if (
//                             (e(this).attr({
//                               role: "tabpanel",
//                               id: "slick-slide" + t.instanceUid + i,
//                               tabindex: -1,
//                             }),
//                             -1 !== a)
//                           ) {
//                             var r = "slick-slide-control" + t.instanceUid + a;
//                             e("#" + r).length &&
//                               e(this).attr({ "aria-describedby": r });
//                           }
//                         }),
//                       t.$dots
//                         .attr("role", "tablist")
//                         .find("li")
//                         .each(function (a) {
//                           var r = s[a];
//                           e(this).attr({ role: "presentation" }),
//                             e(this)
//                               .find("button")
//                               .first()
//                               .attr({
//                                 role: "tab",
//                                 id: "slick-slide-control" + t.instanceUid + a,
//                                 "aria-controls":
//                                   "slick-slide" + t.instanceUid + r,
//                                 "aria-label": a + 1 + " of " + i,
//                                 "aria-selected": null,
//                                 tabindex: "-1",
//                               });
//                         })
//                         .eq(t.currentSlide)
//                         .find("button")
//                         .attr({ "aria-selected": "true", tabindex: "0" })
//                         .end());
//                   for (
//                     var a = t.currentSlide, r = a + t.options.slidesToShow;
//                     a < r;
//                     a++
//                   )
//                     t.options.focusOnChange
//                       ? t.$slides.eq(a).attr({ tabindex: "0" })
//                       : t.$slides.eq(a).removeAttr("tabindex");
//                   t.activateADA();
//                 }),
//                 (t.prototype.initArrowEvents = function () {
//                   var e = this;
//                   !0 === e.options.arrows &&
//                     e.slideCount > e.options.slidesToShow &&
//                     (e.$prevArrow
//                       .off("click.slick")
//                       .on(
//                         "click.slick",
//                         { message: "previous" },
//                         e.changeSlide
//                       ),
//                     e.$nextArrow
//                       .off("click.slick")
//                       .on("click.slick", { message: "next" }, e.changeSlide),
//                     !0 === e.options.accessibility &&
//                       (e.$prevArrow.on("keydown.slick", e.keyHandler),
//                       e.$nextArrow.on("keydown.slick", e.keyHandler)));
//                 }),
//                 (t.prototype.initDotEvents = function () {
//                   var t = this;
//                   !0 === t.options.dots &&
//                     t.slideCount > t.options.slidesToShow &&
//                     (e("li", t.$dots).on(
//                       "click.slick",
//                       { message: "index" },
//                       t.changeSlide
//                     ),
//                     !0 === t.options.accessibility &&
//                       t.$dots.on("keydown.slick", t.keyHandler)),
//                     !0 === t.options.dots &&
//                       !0 === t.options.pauseOnDotsHover &&
//                       t.slideCount > t.options.slidesToShow &&
//                       e("li", t.$dots)
//                         .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
//                         .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
//                 }),
//                 (t.prototype.initSlideEvents = function () {
//                   var t = this;
//                   t.options.pauseOnHover &&
//                     (t.$list.on(
//                       "mouseenter.slick",
//                       e.proxy(t.interrupt, t, !0)
//                     ),
//                     t.$list.on(
//                       "mouseleave.slick",
//                       e.proxy(t.interrupt, t, !1)
//                     ));
//                 }),
//                 (t.prototype.initializeEvents = function () {
//                   var t = this;
//                   t.initArrowEvents(),
//                     t.initDotEvents(),
//                     t.initSlideEvents(),
//                     t.$list.on(
//                       "touchstart.slick mousedown.slick",
//                       { action: "start" },
//                       t.swipeHandler
//                     ),
//                     t.$list.on(
//                       "touchmove.slick mousemove.slick",
//                       { action: "move" },
//                       t.swipeHandler
//                     ),
//                     t.$list.on(
//                       "touchend.slick mouseup.slick",
//                       { action: "end" },
//                       t.swipeHandler
//                     ),
//                     t.$list.on(
//                       "touchcancel.slick mouseleave.slick",
//                       { action: "end" },
//                       t.swipeHandler
//                     ),
//                     t.$list.on("click.slick", t.clickHandler),
//                     e(document).on(
//                       t.visibilityChange,
//                       e.proxy(t.visibility, t)
//                     ),
//                     !0 === t.options.accessibility &&
//                       t.$list.on("keydown.slick", t.keyHandler),
//                     !0 === t.options.focusOnSelect &&
//                       e(t.$slideTrack)
//                         .children()
//                         .on("click.slick", t.selectHandler),
//                     e(window).on(
//                       "orientationchange.slick.slick-" + t.instanceUid,
//                       e.proxy(t.orientationChange, t)
//                     ),
//                     e(window).on(
//                       "resize.slick.slick-" + t.instanceUid,
//                       e.proxy(t.resize, t)
//                     ),
//                     e("[draggable!=true]", t.$slideTrack).on(
//                       "dragstart",
//                       t.preventDefault
//                     ),
//                     e(window).on(
//                       "load.slick.slick-" + t.instanceUid,
//                       t.setPosition
//                     ),
//                     e(t.setPosition);
//                 }),
//                 (t.prototype.initUI = function () {
//                   var e = this;
//                   !0 === e.options.arrows &&
//                     e.slideCount > e.options.slidesToShow &&
//                     (e.$prevArrow.show(), e.$nextArrow.show()),
//                     !0 === e.options.dots &&
//                       e.slideCount > e.options.slidesToShow &&
//                       e.$dots.show();
//                 }),
//                 (t.prototype.keyHandler = function (e) {
//                   var t = this;
//                   e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
//                     (37 === e.keyCode && !0 === t.options.accessibility
//                       ? t.changeSlide({
//                           data: {
//                             message: !0 === t.options.rtl ? "next" : "previous",
//                           },
//                         })
//                       : 39 === e.keyCode &&
//                         !0 === t.options.accessibility &&
//                         t.changeSlide({
//                           data: {
//                             message: !0 === t.options.rtl ? "previous" : "next",
//                           },
//                         }));
//                 }),
//                 (t.prototype.lazyLoad = function () {
//                   var t,
//                     i,
//                     s,
//                     a = this;
//                   function r(t) {
//                     e("img[data-lazy]", t).each(function () {
//                       var t = e(this),
//                         i = e(this).attr("data-lazy"),
//                         s = e(this).attr("data-srcset"),
//                         r =
//                           e(this).attr("data-sizes") ||
//                           a.$slider.attr("data-sizes"),
//                         n = document.createElement("img");
//                       (n.onload = function () {
//                         t.animate({ opacity: 0 }, 100, function () {
//                           s && (t.attr("srcset", s), r && t.attr("sizes", r)),
//                             t
//                               .attr("src", i)
//                               .animate({ opacity: 1 }, 200, function () {
//                                 t.removeAttr(
//                                   "data-lazy data-srcset data-sizes"
//                                 ).removeClass("slick-loading");
//                               }),
//                             a.$slider.trigger("lazyLoaded", [a, t, i]);
//                         });
//                       }),
//                         (n.onerror = function () {
//                           t
//                             .removeAttr("data-lazy")
//                             .removeClass("slick-loading")
//                             .addClass("slick-lazyload-error"),
//                             a.$slider.trigger("lazyLoadError", [a, t, i]);
//                         }),
//                         (n.src = i);
//                     });
//                   }
//                   if (
//                     (!0 === a.options.centerMode
//                       ? !0 === a.options.infinite
//                         ? (s =
//                             (i =
//                               a.currentSlide +
//                               (a.options.slidesToShow / 2 + 1)) +
//                             a.options.slidesToShow +
//                             2)
//                         : ((i = Math.max(
//                             0,
//                             a.currentSlide - (a.options.slidesToShow / 2 + 1)
//                           )),
//                           (s =
//                             a.options.slidesToShow / 2 +
//                             1 +
//                             2 +
//                             a.currentSlide))
//                       : ((i = a.options.infinite
//                           ? a.options.slidesToShow + a.currentSlide
//                           : a.currentSlide),
//                         (s = Math.ceil(i + a.options.slidesToShow)),
//                         !0 === a.options.fade &&
//                           (i > 0 && i--, s <= a.slideCount && s++)),
//                     (t = a.$slider.find(".slick-slide").slice(i, s)),
//                     "anticipated" === a.options.lazyLoad)
//                   )
//                     for (
//                       var n = i - 1,
//                         o = s,
//                         l = a.$slider.find(".slick-slide"),
//                         d = 0;
//                       d < a.options.slidesToScroll;
//                       d++
//                     )
//                       n < 0 && (n = a.slideCount - 1),
//                         (t = (t = t.add(l.eq(n))).add(l.eq(o))),
//                         n--,
//                         o++;
//                   r(t),
//                     a.slideCount <= a.options.slidesToShow
//                       ? r(a.$slider.find(".slick-slide"))
//                       : a.currentSlide >= a.slideCount - a.options.slidesToShow
//                       ? r(
//                           a.$slider
//                             .find(".slick-cloned")
//                             .slice(0, a.options.slidesToShow)
//                         )
//                       : 0 === a.currentSlide &&
//                         r(
//                           a.$slider
//                             .find(".slick-cloned")
//                             .slice(-1 * a.options.slidesToShow)
//                         );
//                 }),
//                 (t.prototype.loadSlider = function () {
//                   var e = this;
//                   e.setPosition(),
//                     e.$slideTrack.css({ opacity: 1 }),
//                     e.$slider.removeClass("slick-loading"),
//                     e.initUI(),
//                     "progressive" === e.options.lazyLoad &&
//                       e.progressiveLazyLoad();
//                 }),
//                 (t.prototype.next = t.prototype.slickNext =
//                   function () {
//                     this.changeSlide({ data: { message: "next" } });
//                   }),
//                 (t.prototype.orientationChange = function () {
//                   this.checkResponsive(), this.setPosition();
//                 }),
//                 (t.prototype.pause = t.prototype.slickPause =
//                   function () {
//                     this.autoPlayClear(), (this.paused = !0);
//                   }),
//                 (t.prototype.play = t.prototype.slickPlay =
//                   function () {
//                     var e = this;
//                     e.autoPlay(),
//                       (e.options.autoplay = !0),
//                       (e.paused = !1),
//                       (e.focussed = !1),
//                       (e.interrupted = !1);
//                   }),
//                 (t.prototype.postSlide = function (t) {
//                   var i = this;
//                   i.unslicked ||
//                     (i.$slider.trigger("afterChange", [i, t]),
//                     (i.animating = !1),
//                     i.slideCount > i.options.slidesToShow && i.setPosition(),
//                     (i.swipeLeft = null),
//                     i.options.autoplay && i.autoPlay(),
//                     !0 === i.options.accessibility &&
//                       (i.initADA(),
//                       i.options.focusOnChange &&
//                         e(i.$slides.get(i.currentSlide))
//                           .attr("tabindex", 0)
//                           .focus()));
//                 }),
//                 (t.prototype.prev = t.prototype.slickPrev =
//                   function () {
//                     this.changeSlide({ data: { message: "previous" } });
//                   }),
//                 (t.prototype.preventDefault = function (e) {
//                   e.preventDefault();
//                 }),
//                 (t.prototype.progressiveLazyLoad = function (t) {
//                   t = t || 1;
//                   var i,
//                     s,
//                     a,
//                     r,
//                     n,
//                     o = this,
//                     l = e("img[data-lazy]", o.$slider);
//                   l.length
//                     ? ((i = l.first()),
//                       (s = i.attr("data-lazy")),
//                       (a = i.attr("data-srcset")),
//                       (r =
//                         i.attr("data-sizes") || o.$slider.attr("data-sizes")),
//                       ((n = document.createElement("img")).onload =
//                         function () {
//                           a && (i.attr("srcset", a), r && i.attr("sizes", r)),
//                             i
//                               .attr("src", s)
//                               .removeAttr("data-lazy data-srcset data-sizes")
//                               .removeClass("slick-loading"),
//                             !0 === o.options.adaptiveHeight && o.setPosition(),
//                             o.$slider.trigger("lazyLoaded", [o, i, s]),
//                             o.progressiveLazyLoad();
//                         }),
//                       (n.onerror = function () {
//                         t < 3
//                           ? setTimeout(function () {
//                               o.progressiveLazyLoad(t + 1);
//                             }, 500)
//                           : (i
//                               .removeAttr("data-lazy")
//                               .removeClass("slick-loading")
//                               .addClass("slick-lazyload-error"),
//                             o.$slider.trigger("lazyLoadError", [o, i, s]),
//                             o.progressiveLazyLoad());
//                       }),
//                       (n.src = s))
//                     : o.$slider.trigger("allImagesLoaded", [o]);
//                 }),
//                 (t.prototype.refresh = function (t) {
//                   var i,
//                     s,
//                     a = this;
//                   (s = a.slideCount - a.options.slidesToShow),
//                     !a.options.infinite &&
//                       a.currentSlide > s &&
//                       (a.currentSlide = s),
//                     a.slideCount <= a.options.slidesToShow &&
//                       (a.currentSlide = 0),
//                     (i = a.currentSlide),
//                     a.destroy(!0),
//                     e.extend(a, a.initials, { currentSlide: i }),
//                     a.init(),
//                     t ||
//                       a.changeSlide(
//                         { data: { message: "index", index: i } },
//                         !1
//                       );
//                 }),
//                 (t.prototype.registerBreakpoints = function () {
//                   var t,
//                     i,
//                     s,
//                     a = this,
//                     r = a.options.responsive || null;
//                   if ("array" === e.type(r) && r.length) {
//                     for (t in ((a.respondTo = a.options.respondTo || "window"),
//                     r))
//                       if (
//                         ((s = a.breakpoints.length - 1), r.hasOwnProperty(t))
//                       ) {
//                         for (i = r[t].breakpoint; s >= 0; )
//                           a.breakpoints[s] &&
//                             a.breakpoints[s] === i &&
//                             a.breakpoints.splice(s, 1),
//                             s--;
//                         a.breakpoints.push(i),
//                           (a.breakpointSettings[i] = r[t].settings);
//                       }
//                     a.breakpoints.sort(function (e, t) {
//                       return a.options.mobileFirst ? e - t : t - e;
//                     });
//                   }
//                 }),
//                 (t.prototype.reinit = function () {
//                   var t = this;
//                   (t.$slides = t.$slideTrack
//                     .children(t.options.slide)
//                     .addClass("slick-slide")),
//                     (t.slideCount = t.$slides.length),
//                     t.currentSlide >= t.slideCount &&
//                       0 !== t.currentSlide &&
//                       (t.currentSlide =
//                         t.currentSlide - t.options.slidesToScroll),
//                     t.slideCount <= t.options.slidesToShow &&
//                       (t.currentSlide = 0),
//                     t.registerBreakpoints(),
//                     t.setProps(),
//                     t.setupInfinite(),
//                     t.buildArrows(),
//                     t.updateArrows(),
//                     t.initArrowEvents(),
//                     t.buildDots(),
//                     t.updateDots(),
//                     t.initDotEvents(),
//                     t.cleanUpSlideEvents(),
//                     t.initSlideEvents(),
//                     t.checkResponsive(!1, !0),
//                     !0 === t.options.focusOnSelect &&
//                       e(t.$slideTrack)
//                         .children()
//                         .on("click.slick", t.selectHandler),
//                     t.setSlideClasses(
//                       "number" == typeof t.currentSlide ? t.currentSlide : 0
//                     ),
//                     t.setPosition(),
//                     t.focusHandler(),
//                     (t.paused = !t.options.autoplay),
//                     t.autoPlay(),
//                     t.$slider.trigger("reInit", [t]);
//                 }),
//                 (t.prototype.resize = function () {
//                   var t = this;
//                   e(window).width() !== t.windowWidth &&
//                     (clearTimeout(t.windowDelay),
//                     (t.windowDelay = window.setTimeout(function () {
//                       (t.windowWidth = e(window).width()),
//                         t.checkResponsive(),
//                         t.unslicked || t.setPosition();
//                     }, 50)));
//                 }),
//                 (t.prototype.removeSlide = t.prototype.slickRemove =
//                   function (e, t, i) {
//                     var s = this;
//                     if (
//                       ((e =
//                         "boolean" == typeof e
//                           ? !0 === (t = e)
//                             ? 0
//                             : s.slideCount - 1
//                           : !0 === t
//                           ? --e
//                           : e),
//                       s.slideCount < 1 || e < 0 || e > s.slideCount - 1)
//                     )
//                       return !1;
//                     s.unload(),
//                       !0 === i
//                         ? s.$slideTrack.children().remove()
//                         : s.$slideTrack
//                             .children(this.options.slide)
//                             .eq(e)
//                             .remove(),
//                       (s.$slides = s.$slideTrack.children(this.options.slide)),
//                       s.$slideTrack.children(this.options.slide).detach(),
//                       s.$slideTrack.append(s.$slides),
//                       (s.$slidesCache = s.$slides),
//                       s.reinit();
//                   }),
//                 (t.prototype.setCSS = function (e) {
//                   var t,
//                     i,
//                     s = this,
//                     a = {};
//                   !0 === s.options.rtl && (e = -e),
//                     (t =
//                       "left" == s.positionProp ? Math.ceil(e) + "px" : "0px"),
//                     (i = "top" == s.positionProp ? Math.ceil(e) + "px" : "0px"),
//                     (a[s.positionProp] = e),
//                     !1 === s.transformsEnabled
//                       ? s.$slideTrack.css(a)
//                       : ((a = {}),
//                         !1 === s.cssTransitions
//                           ? ((a[s.animType] =
//                               "translate(" + t + ", " + i + ")"),
//                             s.$slideTrack.css(a))
//                           : ((a[s.animType] =
//                               "translate3d(" + t + ", " + i + ", 0px)"),
//                             s.$slideTrack.css(a)));
//                 }),
//                 (t.prototype.setDimensions = function () {
//                   var e = this;
//                   !1 === e.options.vertical
//                     ? !0 === e.options.centerMode &&
//                       e.$list.css({ padding: "0px " + e.options.centerPadding })
//                     : (e.$list.height(
//                         e.$slides.first().outerHeight(!0) *
//                           e.options.slidesToShow
//                       ),
//                       !0 === e.options.centerMode &&
//                         e.$list.css({
//                           padding: e.options.centerPadding + " 0px",
//                         })),
//                     (e.listWidth = e.$list.width()),
//                     (e.listHeight = e.$list.height()),
//                     !1 === e.options.vertical && !1 === e.options.variableWidth
//                       ? ((e.slideWidth = Math.ceil(
//                           e.listWidth / e.options.slidesToShow
//                         )),
//                         e.$slideTrack.width(
//                           Math.ceil(
//                             e.slideWidth *
//                               e.$slideTrack.children(".slick-slide").length
//                           )
//                         ))
//                       : !0 === e.options.variableWidth
//                       ? e.$slideTrack.width(5e3 * e.slideCount)
//                       : ((e.slideWidth = Math.ceil(e.listWidth)),
//                         e.$slideTrack.height(
//                           Math.ceil(
//                             e.$slides.first().outerHeight(!0) *
//                               e.$slideTrack.children(".slick-slide").length
//                           )
//                         ));
//                   var t =
//                     e.$slides.first().outerWidth(!0) -
//                     e.$slides.first().width();
//                   !1 === e.options.variableWidth &&
//                     e.$slideTrack
//                       .children(".slick-slide")
//                       .width(e.slideWidth - t);
//                 }),
//                 (t.prototype.setFade = function () {
//                   var t,
//                     i = this;
//                   i.$slides.each(function (s, a) {
//                     (t = i.slideWidth * s * -1),
//                       !0 === i.options.rtl
//                         ? e(a).css({
//                             position: "relative",
//                             right: t,
//                             top: 0,
//                             zIndex: i.options.zIndex - 2,
//                             opacity: 0,
//                           })
//                         : e(a).css({
//                             position: "relative",
//                             left: t,
//                             top: 0,
//                             zIndex: i.options.zIndex - 2,
//                             opacity: 0,
//                           });
//                   }),
//                     i.$slides
//                       .eq(i.currentSlide)
//                       .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
//                 }),
//                 (t.prototype.setHeight = function () {
//                   var e = this;
//                   if (
//                     1 === e.options.slidesToShow &&
//                     !0 === e.options.adaptiveHeight &&
//                     !1 === e.options.vertical
//                   ) {
//                     var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
//                     e.$list.css("height", t);
//                   }
//                 }),
//                 (t.prototype.setOption = t.prototype.slickSetOption =
//                   function () {
//                     var t,
//                       i,
//                       s,
//                       a,
//                       r,
//                       n = this,
//                       o = !1;
//                     if (
//                       ("object" === e.type(arguments[0])
//                         ? ((s = arguments[0]),
//                           (o = arguments[1]),
//                           (r = "multiple"))
//                         : "string" === e.type(arguments[0]) &&
//                           ((s = arguments[0]),
//                           (a = arguments[1]),
//                           (o = arguments[2]),
//                           "responsive" === arguments[0] &&
//                           "array" === e.type(arguments[1])
//                             ? (r = "responsive")
//                             : void 0 !== arguments[1] && (r = "single")),
//                       "single" === r)
//                     )
//                       n.options[s] = a;
//                     else if ("multiple" === r)
//                       e.each(s, function (e, t) {
//                         n.options[e] = t;
//                       });
//                     else if ("responsive" === r)
//                       for (i in a)
//                         if ("array" !== e.type(n.options.responsive))
//                           n.options.responsive = [a[i]];
//                         else {
//                           for (t = n.options.responsive.length - 1; t >= 0; )
//                             n.options.responsive[t].breakpoint ===
//                               a[i].breakpoint &&
//                               n.options.responsive.splice(t, 1),
//                               t--;
//                           n.options.responsive.push(a[i]);
//                         }
//                     o && (n.unload(), n.reinit());
//                   }),
//                 (t.prototype.setPosition = function () {
//                   var e = this;
//                   e.setDimensions(),
//                     e.setHeight(),
//                     !1 === e.options.fade
//                       ? e.setCSS(e.getLeft(e.currentSlide))
//                       : e.setFade(),
//                     e.$slider.trigger("setPosition", [e]);
//                 }),
//                 (t.prototype.setProps = function () {
//                   var e = this,
//                     t = document.body.style;
//                   (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
//                     "top" === e.positionProp
//                       ? e.$slider.addClass("slick-vertical")
//                       : e.$slider.removeClass("slick-vertical"),
//                     (void 0 === t.WebkitTransition &&
//                       void 0 === t.MozTransition &&
//                       void 0 === t.msTransition) ||
//                       (!0 === e.options.useCSS && (e.cssTransitions = !0)),
//                     e.options.fade &&
//                       ("number" == typeof e.options.zIndex
//                         ? e.options.zIndex < 3 && (e.options.zIndex = 3)
//                         : (e.options.zIndex = e.defaults.zIndex)),
//                     void 0 !== t.OTransform &&
//                       ((e.animType = "OTransform"),
//                       (e.transformType = "-o-transform"),
//                       (e.transitionType = "OTransition"),
//                       void 0 === t.perspectiveProperty &&
//                         void 0 === t.webkitPerspective &&
//                         (e.animType = !1)),
//                     void 0 !== t.MozTransform &&
//                       ((e.animType = "MozTransform"),
//                       (e.transformType = "-moz-transform"),
//                       (e.transitionType = "MozTransition"),
//                       void 0 === t.perspectiveProperty &&
//                         void 0 === t.MozPerspective &&
//                         (e.animType = !1)),
//                     void 0 !== t.webkitTransform &&
//                       ((e.animType = "webkitTransform"),
//                       (e.transformType = "-webkit-transform"),
//                       (e.transitionType = "webkitTransition"),
//                       void 0 === t.perspectiveProperty &&
//                         void 0 === t.webkitPerspective &&
//                         (e.animType = !1)),
//                     void 0 !== t.msTransform &&
//                       ((e.animType = "msTransform"),
//                       (e.transformType = "-ms-transform"),
//                       (e.transitionType = "msTransition"),
//                       void 0 === t.msTransform && (e.animType = !1)),
//                     void 0 !== t.transform &&
//                       !1 !== e.animType &&
//                       ((e.animType = "transform"),
//                       (e.transformType = "transform"),
//                       (e.transitionType = "transition")),
//                     (e.transformsEnabled =
//                       e.options.useTransform &&
//                       null !== e.animType &&
//                       !1 !== e.animType);
//                 }),
//                 (t.prototype.setSlideClasses = function (e) {
//                   var t,
//                     i,
//                     s,
//                     a,
//                     r = this;
//                   if (
//                     ((i = r.$slider
//                       .find(".slick-slide")
//                       .removeClass("slick-active slick-center slick-current")
//                       .attr("aria-hidden", "true")),
//                     r.$slides.eq(e).addClass("slick-current"),
//                     !0 === r.options.centerMode)
//                   ) {
//                     var n = r.options.slidesToShow % 2 == 0 ? 1 : 0;
//                     (t = Math.floor(r.options.slidesToShow / 2)),
//                       !0 === r.options.infinite &&
//                         (e >= t && e <= r.slideCount - 1 - t
//                           ? r.$slides
//                               .slice(e - t + n, e + t + 1)
//                               .addClass("slick-active")
//                               .attr("aria-hidden", "false")
//                           : ((s = r.options.slidesToShow + e),
//                             i
//                               .slice(s - t + 1 + n, s + t + 2)
//                               .addClass("slick-active")
//                               .attr("aria-hidden", "false")),
//                         0 === e
//                           ? i
//                               .eq(i.length - 1 - r.options.slidesToShow)
//                               .addClass("slick-center")
//                           : e === r.slideCount - 1 &&
//                             i
//                               .eq(r.options.slidesToShow)
//                               .addClass("slick-center")),
//                       r.$slides.eq(e).addClass("slick-center");
//                   } else
//                     e >= 0 && e <= r.slideCount - r.options.slidesToShow
//                       ? r.$slides
//                           .slice(e, e + r.options.slidesToShow)
//                           .addClass("slick-active")
//                           .attr("aria-hidden", "false")
//                       : i.length <= r.options.slidesToShow
//                       ? i.addClass("slick-active").attr("aria-hidden", "false")
//                       : ((a = r.slideCount % r.options.slidesToShow),
//                         (s =
//                           !0 === r.options.infinite
//                             ? r.options.slidesToShow + e
//                             : e),
//                         r.options.slidesToShow == r.options.slidesToScroll &&
//                         r.slideCount - e < r.options.slidesToShow
//                           ? i
//                               .slice(s - (r.options.slidesToShow - a), s + a)
//                               .addClass("slick-active")
//                               .attr("aria-hidden", "false")
//                           : i
//                               .slice(s, s + r.options.slidesToShow)
//                               .addClass("slick-active")
//                               .attr("aria-hidden", "false"));
//                   ("ondemand" !== r.options.lazyLoad &&
//                     "anticipated" !== r.options.lazyLoad) ||
//                     r.lazyLoad();
//                 }),
//                 (t.prototype.setupInfinite = function () {
//                   var t,
//                     i,
//                     s,
//                     a = this;
//                   if (
//                     (!0 === a.options.fade && (a.options.centerMode = !1),
//                     !0 === a.options.infinite &&
//                       !1 === a.options.fade &&
//                       ((i = null), a.slideCount > a.options.slidesToShow))
//                   ) {
//                     for (
//                       s =
//                         !0 === a.options.centerMode
//                           ? a.options.slidesToShow + 1
//                           : a.options.slidesToShow,
//                         t = a.slideCount;
//                       t > a.slideCount - s;
//                       t -= 1
//                     )
//                       (i = t - 1),
//                         e(a.$slides[i])
//                           .clone(!0)
//                           .attr("id", "")
//                           .attr("data-slick-index", i - a.slideCount)
//                           .prependTo(a.$slideTrack)
//                           .addClass("slick-cloned");
//                     for (t = 0; t < s + a.slideCount; t += 1)
//                       (i = t),
//                         e(a.$slides[i])
//                           .clone(!0)
//                           .attr("id", "")
//                           .attr("data-slick-index", i + a.slideCount)
//                           .appendTo(a.$slideTrack)
//                           .addClass("slick-cloned");
//                     a.$slideTrack
//                       .find(".slick-cloned")
//                       .find("[id]")
//                       .each(function () {
//                         e(this).attr("id", "");
//                       });
//                   }
//                 }),
//                 (t.prototype.interrupt = function (e) {
//                   e || this.autoPlay(), (this.interrupted = e);
//                 }),
//                 (t.prototype.selectHandler = function (t) {
//                   var i = this,
//                     s = e(t.target).is(".slick-slide")
//                       ? e(t.target)
//                       : e(t.target).parents(".slick-slide"),
//                     a = parseInt(s.attr("data-slick-index"));
//                   a || (a = 0),
//                     i.slideCount <= i.options.slidesToShow
//                       ? i.slideHandler(a, !1, !0)
//                       : i.slideHandler(a);
//                 }),
//                 (t.prototype.slideHandler = function (e, t, i) {
//                   var s,
//                     a,
//                     r,
//                     n,
//                     o,
//                     l,
//                     d = this;
//                   if (
//                     ((t = t || !1),
//                     !(
//                       (!0 === d.animating && !0 === d.options.waitForAnimate) ||
//                       (!0 === d.options.fade && d.currentSlide === e)
//                     ))
//                   )
//                     if (
//                       (!1 === t && d.asNavFor(e),
//                       (s = e),
//                       (o = d.getLeft(s)),
//                       (n = d.getLeft(d.currentSlide)),
//                       (d.currentLeft = null === d.swipeLeft ? n : d.swipeLeft),
//                       !1 === d.options.infinite &&
//                         !1 === d.options.centerMode &&
//                         (e < 0 ||
//                           e > d.getDotCount() * d.options.slidesToScroll))
//                     )
//                       !1 === d.options.fade &&
//                         ((s = d.currentSlide),
//                         !0 !== i && d.slideCount > d.options.slidesToShow
//                           ? d.animateSlide(n, function () {
//                               d.postSlide(s);
//                             })
//                           : d.postSlide(s));
//                     else if (
//                       !1 === d.options.infinite &&
//                       !0 === d.options.centerMode &&
//                       (e < 0 || e > d.slideCount - d.options.slidesToScroll)
//                     )
//                       !1 === d.options.fade &&
//                         ((s = d.currentSlide),
//                         !0 !== i && d.slideCount > d.options.slidesToShow
//                           ? d.animateSlide(n, function () {
//                               d.postSlide(s);
//                             })
//                           : d.postSlide(s));
//                     else {
//                       if (
//                         (d.options.autoplay && clearInterval(d.autoPlayTimer),
//                         (a =
//                           s < 0
//                             ? d.slideCount % d.options.slidesToScroll != 0
//                               ? d.slideCount -
//                                 (d.slideCount % d.options.slidesToScroll)
//                               : d.slideCount + s
//                             : s >= d.slideCount
//                             ? d.slideCount % d.options.slidesToScroll != 0
//                               ? 0
//                               : s - d.slideCount
//                             : s),
//                         (d.animating = !0),
//                         d.$slider.trigger("beforeChange", [
//                           d,
//                           d.currentSlide,
//                           a,
//                         ]),
//                         (r = d.currentSlide),
//                         (d.currentSlide = a),
//                         d.setSlideClasses(d.currentSlide),
//                         d.options.asNavFor &&
//                           (l = (l = d.getNavTarget()).slick("getSlick"))
//                             .slideCount <= l.options.slidesToShow &&
//                           l.setSlideClasses(d.currentSlide),
//                         d.updateDots(),
//                         d.updateArrows(),
//                         !0 === d.options.fade)
//                       )
//                         return (
//                           !0 !== i
//                             ? (d.fadeSlideOut(r),
//                               d.fadeSlide(a, function () {
//                                 d.postSlide(a);
//                               }))
//                             : d.postSlide(a),
//                           void d.animateHeight()
//                         );
//                       !0 !== i && d.slideCount > d.options.slidesToShow
//                         ? d.animateSlide(o, function () {
//                             d.postSlide(a);
//                           })
//                         : d.postSlide(a);
//                     }
//                 }),
//                 (t.prototype.startLoad = function () {
//                   var e = this;
//                   !0 === e.options.arrows &&
//                     e.slideCount > e.options.slidesToShow &&
//                     (e.$prevArrow.hide(), e.$nextArrow.hide()),
//                     !0 === e.options.dots &&
//                       e.slideCount > e.options.slidesToShow &&
//                       e.$dots.hide(),
//                     e.$slider.addClass("slick-loading");
//                 }),
//                 (t.prototype.swipeDirection = function () {
//                   var e,
//                     t,
//                     i,
//                     s,
//                     a = this;
//                   return (
//                     (e = a.touchObject.startX - a.touchObject.curX),
//                     (t = a.touchObject.startY - a.touchObject.curY),
//                     (i = Math.atan2(t, e)),
//                     (s = Math.round((180 * i) / Math.PI)) < 0 &&
//                       (s = 360 - Math.abs(s)),
//                     (s <= 45 && s >= 0) || (s <= 360 && s >= 315)
//                       ? !1 === a.options.rtl
//                         ? "left"
//                         : "right"
//                       : s >= 135 && s <= 225
//                       ? !1 === a.options.rtl
//                         ? "right"
//                         : "left"
//                       : !0 === a.options.verticalSwiping
//                       ? s >= 35 && s <= 135
//                         ? "down"
//                         : "up"
//                       : "vertical"
//                   );
//                 }),
//                 (t.prototype.swipeEnd = function (e) {
//                   var t,
//                     i,
//                     s = this;
//                   if (((s.dragging = !1), (s.swiping = !1), s.scrolling))
//                     return (s.scrolling = !1), !1;
//                   if (
//                     ((s.interrupted = !1),
//                     (s.shouldClick = !(s.touchObject.swipeLength > 10)),
//                     void 0 === s.touchObject.curX)
//                   )
//                     return !1;
//                   if (
//                     (!0 === s.touchObject.edgeHit &&
//                       s.$slider.trigger("edge", [s, s.swipeDirection()]),
//                     s.touchObject.swipeLength >= s.touchObject.minSwipe)
//                   ) {
//                     switch ((i = s.swipeDirection())) {
//                       case "left":
//                       case "down":
//                         (t = s.options.swipeToSlide
//                           ? s.checkNavigable(s.currentSlide + s.getSlideCount())
//                           : s.currentSlide + s.getSlideCount()),
//                           (s.currentDirection = 0);
//                         break;
//                       case "right":
//                       case "up":
//                         (t = s.options.swipeToSlide
//                           ? s.checkNavigable(s.currentSlide - s.getSlideCount())
//                           : s.currentSlide - s.getSlideCount()),
//                           (s.currentDirection = 1);
//                     }
//                     "vertical" != i &&
//                       (s.slideHandler(t),
//                       (s.touchObject = {}),
//                       s.$slider.trigger("swipe", [s, i]));
//                   } else
//                     s.touchObject.startX !== s.touchObject.curX &&
//                       (s.slideHandler(s.currentSlide), (s.touchObject = {}));
//                 }),
//                 (t.prototype.swipeHandler = function (e) {
//                   var t = this;
//                   if (
//                     !(
//                       !1 === t.options.swipe ||
//                       ("ontouchend" in document && !1 === t.options.swipe) ||
//                       (!1 === t.options.draggable &&
//                         -1 !== e.type.indexOf("mouse"))
//                     )
//                   )
//                     switch (
//                       ((t.touchObject.fingerCount =
//                         e.originalEvent && void 0 !== e.originalEvent.touches
//                           ? e.originalEvent.touches.length
//                           : 1),
//                       (t.touchObject.minSwipe =
//                         t.listWidth / t.options.touchThreshold),
//                       !0 === t.options.verticalSwiping &&
//                         (t.touchObject.minSwipe =
//                           t.listHeight / t.options.touchThreshold),
//                       e.data.action)
//                     ) {
//                       case "start":
//                         t.swipeStart(e);
//                         break;
//                       case "move":
//                         t.swipeMove(e);
//                         break;
//                       case "end":
//                         t.swipeEnd(e);
//                     }
//                 }),
//                 (t.prototype.swipeMove = function (e) {
//                   var t,
//                     i,
//                     s,
//                     a,
//                     r,
//                     n,
//                     o = this;
//                   return (
//                     (r =
//                       void 0 !== e.originalEvent
//                         ? e.originalEvent.touches
//                         : null),
//                     !(!o.dragging || o.scrolling || (r && 1 !== r.length)) &&
//                       ((t = o.getLeft(o.currentSlide)),
//                       (o.touchObject.curX =
//                         void 0 !== r ? r[0].pageX : e.clientX),
//                       (o.touchObject.curY =
//                         void 0 !== r ? r[0].pageY : e.clientY),
//                       (o.touchObject.swipeLength = Math.round(
//                         Math.sqrt(
//                           Math.pow(o.touchObject.curX - o.touchObject.startX, 2)
//                         )
//                       )),
//                       (n = Math.round(
//                         Math.sqrt(
//                           Math.pow(o.touchObject.curY - o.touchObject.startY, 2)
//                         )
//                       )),
//                       !o.options.verticalSwiping && !o.swiping && n > 4
//                         ? ((o.scrolling = !0), !1)
//                         : (!0 === o.options.verticalSwiping &&
//                             (o.touchObject.swipeLength = n),
//                           (i = o.swipeDirection()),
//                           void 0 !== e.originalEvent &&
//                             o.touchObject.swipeLength > 4 &&
//                             ((o.swiping = !0), e.preventDefault()),
//                           (a =
//                             (!1 === o.options.rtl ? 1 : -1) *
//                             (o.touchObject.curX > o.touchObject.startX
//                               ? 1
//                               : -1)),
//                           !0 === o.options.verticalSwiping &&
//                             (a =
//                               o.touchObject.curY > o.touchObject.startY
//                                 ? 1
//                                 : -1),
//                           (s = o.touchObject.swipeLength),
//                           (o.touchObject.edgeHit = !1),
//                           !1 === o.options.infinite &&
//                             ((0 === o.currentSlide && "right" === i) ||
//                               (o.currentSlide >= o.getDotCount() &&
//                                 "left" === i)) &&
//                             ((s =
//                               o.touchObject.swipeLength *
//                               o.options.edgeFriction),
//                             (o.touchObject.edgeHit = !0)),
//                           !1 === o.options.vertical
//                             ? (o.swipeLeft = t + s * a)
//                             : (o.swipeLeft =
//                                 t + s * (o.$list.height() / o.listWidth) * a),
//                           !0 === o.options.verticalSwiping &&
//                             (o.swipeLeft = t + s * a),
//                           !0 !== o.options.fade &&
//                             !1 !== o.options.touchMove &&
//                             (!0 === o.animating
//                               ? ((o.swipeLeft = null), !1)
//                               : void o.setCSS(o.swipeLeft))))
//                   );
//                 }),
//                 (t.prototype.swipeStart = function (e) {
//                   var t,
//                     i = this;
//                   if (
//                     ((i.interrupted = !0),
//                     1 !== i.touchObject.fingerCount ||
//                       i.slideCount <= i.options.slidesToShow)
//                   )
//                     return (i.touchObject = {}), !1;
//                   void 0 !== e.originalEvent &&
//                     void 0 !== e.originalEvent.touches &&
//                     (t = e.originalEvent.touches[0]),
//                     (i.touchObject.startX = i.touchObject.curX =
//                       void 0 !== t ? t.pageX : e.clientX),
//                     (i.touchObject.startY = i.touchObject.curY =
//                       void 0 !== t ? t.pageY : e.clientY),
//                     (i.dragging = !0);
//                 }),
//                 (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
//                   function () {
//                     var e = this;
//                     null !== e.$slidesCache &&
//                       (e.unload(),
//                       e.$slideTrack.children(this.options.slide).detach(),
//                       e.$slidesCache.appendTo(e.$slideTrack),
//                       e.reinit());
//                   }),
//                 (t.prototype.unload = function () {
//                   var t = this;
//                   e(".slick-cloned", t.$slider).remove(),
//                     t.$dots && t.$dots.remove(),
//                     t.$prevArrow &&
//                       t.htmlExpr.test(t.options.prevArrow) &&
//                       t.$prevArrow.remove(),
//                     t.$nextArrow &&
//                       t.htmlExpr.test(t.options.nextArrow) &&
//                       t.$nextArrow.remove(),
//                     t.$slides
//                       .removeClass(
//                         "slick-slide slick-active slick-visible slick-current"
//                       )
//                       .attr("aria-hidden", "true")
//                       .css("width", "");
//                 }),
//                 (t.prototype.unslick = function (e) {
//                   var t = this;
//                   t.$slider.trigger("unslick", [t, e]), t.destroy();
//                 }),
//                 (t.prototype.updateArrows = function () {
//                   var e = this;
//                   Math.floor(e.options.slidesToShow / 2),
//                     !0 === e.options.arrows &&
//                       e.slideCount > e.options.slidesToShow &&
//                       !e.options.infinite &&
//                       (e.$prevArrow
//                         .removeClass("slick-disabled")
//                         .attr("aria-disabled", "false"),
//                       e.$nextArrow
//                         .removeClass("slick-disabled")
//                         .attr("aria-disabled", "false"),
//                       0 === e.currentSlide
//                         ? (e.$prevArrow
//                             .addClass("slick-disabled")
//                             .attr("aria-disabled", "true"),
//                           e.$nextArrow
//                             .removeClass("slick-disabled")
//                             .attr("aria-disabled", "false"))
//                         : ((e.currentSlide >=
//                             e.slideCount - e.options.slidesToShow &&
//                             !1 === e.options.centerMode) ||
//                             (e.currentSlide >= e.slideCount - 1 &&
//                               !0 === e.options.centerMode)) &&
//                           (e.$nextArrow
//                             .addClass("slick-disabled")
//                             .attr("aria-disabled", "true"),
//                           e.$prevArrow
//                             .removeClass("slick-disabled")
//                             .attr("aria-disabled", "false")));
//                 }),
//                 (t.prototype.updateDots = function () {
//                   var e = this;
//                   null !== e.$dots &&
//                     (e.$dots.find("li").removeClass("slick-active").end(),
//                     e.$dots
//                       .find("li")
//                       .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
//                       .addClass("slick-active"));
//                 }),
//                 (t.prototype.visibility = function () {
//                   var e = this;
//                   e.options.autoplay &&
//                     (document[e.hidden]
//                       ? (e.interrupted = !0)
//                       : (e.interrupted = !1));
//                 }),
//                 (e.fn.slick = function () {
//                   var e,
//                     i,
//                     s = this,
//                     a = arguments[0],
//                     r = Array.prototype.slice.call(arguments, 1),
//                     n = s.length;
//                   for (e = 0; e < n; e++)
//                     if (
//                       ("object" == typeof a || void 0 === a
//                         ? (s[e].slick = new t(s[e], a))
//                         : (i = s[e].slick[a].apply(s[e].slick, r)),
//                       void 0 !== i)
//                     )
//                       return i;
//                   return s;
//                 });
//               var i;
//             })
//               ? s.apply(t, a)
//               : s) || (e.exports = r);
//     })();
//   },
//   function (e, t, i) {
//     (function (e) {
//       e(document).ready(function () {
//         setTimeout(function () {
//           e(".preloader").css({ display: "none" });
//         }, 1e3);
//       });
//     }).call(this, i(0));
//   },
//   function (e, t, i) {
//     (function (e) {
//       e(document).ready(function () {
//         var t = e(window);
//         e(".navigation__content").removeClass("preload"),
//           t.scroll(function () {
//             t.scrollTop() >= t.height() - 100 && e(window).width() >= 767
//               ? e(".navigation").addClass(
//                   "navigation_desktop-theme_dark navigation_desktop-theme_small-logo"
//                 )
//               : e(".navigation").removeClass(
//                   "navigation_desktop-theme_dark navigation_desktop-theme_small-logo"
//                 );
//           }),
//           e(".navigation__item").click(function () {
//             e("body,html")
//               .stop(!0, !1)
//               .animate(
//                 { scrollTop: e("#" + e(this).data("target")).offset().top },
//                 1e3
//               );
//           });
//       });
//     }).call(this, i(0));
//   },
//   function (e, t, i) {
//     (function (e) {
//       e(document).ready(function () {
//         e(".main-screen__downward").click(function () {
//           e("body,html")
//             .stop(!0, !1)
//             .animate(
//               { scrollTop: e("#" + e(this).data("screen-to-go")).offset().top },
//               1e3
//             );
//         });
//       });
//     }).call(this, i(0));
//   },
//   function (e, t, i) {
//     (function (e) {
//       e(document).ready(function () {
//         e("input.sending-form__input-field_date").on("keyup", function () {
//           let e = this.value.replace(/\D/g, "").substring(0, 4);
//           this.value = (function (e) {
//             if (e.length > 2 && e.length <= 4)
//               return e.replace(/(\d{2})/, "$1/");
//             return e.replace(/(\d{2})(\d{3})(\d{2})/, "$1-$2-$3");
//           })(e);
//         });
//       });
//     }).call(this, i(0));
//   },
//   function (e, t, i) {
//     (function (e) {
//       e(document).ready(function () {
//         console.log("hello"),
//           e(".carousel").slick({
//             slidesToShow: 1,
//             dots: !0,
//             centerMode: !0,
//             centerPadding: "0px",
//             infinite: !0,
//             adaptiveHeight: !0,
//           }),
//           e(".slick-arrow").css({ display: "none" });
//       });
//     }).call(this, i(0));
//   },
//   function (e, t, i) {
//     "use strict";
//     (function (e) {
//       var t = i(1);
//       i(2);
//       e(document).ready(function () {
//         e(".menu__tab-container").click(function () {
//           var t = e(this).parent().siblings(".menu__lists-container"),
//             i = e(this).data("trigger");
//           t.children(".menu__list").removeClass("menu__list_active"),
//             t
//               .children(`.menu__list[data-trigger= ${i} ]`)
//               .addClass("menu__list_active"),
//             e(this)
//               .siblings(".menu__tab-container")
//               .removeClass("menu__tab-container_active"),
//             e(this).addClass("menu__tab-container_active");
//         }),
//           Object(t.a)({
//             desWidth: "(min-width:991px)",
//             carouselName: ".menu",
//             spvMobile: 3,
//             spvTablet: 5,
//             spvDesktop: 6,
//           });
//       });
//     }).call(this, i(0));
//   },
//   function (e, t, i) {
//     "use strict";
//     (function (e) {
//       var t = i(1);
//       e(document).ready(function () {
//         Object(t.a)({ delay: 3e3 });
//       });
//     }).call(this, i(0));
//   },
//   function (e, t, i) {
//     "use strict";
//     i.r(t);
//     i(3), i(7), i(8), i(9), i(10), i(11), i(12), i(13), i(14);
//   },
// ]);

setTimeout(() => {
  const preloader = document.querySelector(".preloader");
  preloader.style.display = "none";

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navigation");
    const logo = document.querySelector(".navigation__logo");
    if (window.innerWidth > 766) {
      if (window.scrollY >= 70) {
        nav.style.background = "#333333";
        logo.style.width = "90px";
        logo.style.height = "90px";
        logo.style.top = "-20px";
      } else {
        nav.style.background = "transparent";
        logo.style.width = "150px";
        logo.style.height = "150px";
        logo.style.top = "0px";
      }
    }
  });
}, 1500);
