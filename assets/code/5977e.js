! function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).barba = n()
}(this, (function() {
    function t(t, n) {
        for (var r = 0; r < n.length; r++) {
            var e = n[r];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
        }
    }

    function n(n, r, e) {
        return r && t(n.prototype, r), e && t(n, e), n
    }

    function r() {
        return (r = Object.assign || function(t) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
            }
            return t
        }).apply(this, arguments)
    }

    function e(t, n) {
        t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n
    }

    function i(t) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function o(t, n) {
        return (o = Object.setPrototypeOf || function(t, n) {
            return t.__proto__ = n, t
        })(t, n)
    }

    function u(t, n, r) {
        return (u = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }() ? Reflect.construct : function(t, n, r) {
            var e = [null];
            e.push.apply(e, n);
            var i = new(Function.bind.apply(t, e));
            return r && o(i, r.prototype), i
        }).apply(null, arguments)
    }

    function f(t) {
        var n = "function" == typeof Map ? new Map : void 0;
        return (f = function(t) {
            if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, r)
            }

            function r() {
                return u(t, arguments, i(this).constructor)
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o(r, t)
        })(t)
    }

    function s(t, n) {
        try {
            var r = t()
        } catch (t) {
            return n(t)
        }
        return r && r.then ? r.then(void 0, n) : r
    }
    "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
    var c, a = "2.9.7",
        h = function() {};
    ! function(t) {
        t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug"
    }(c || (c = {}));
    var v = c.off,
        l = function() {
            function t(t) {
                this.t = t
            }
            t.getLevel = function() {
                return v
            }, t.setLevel = function(t) {
                return v = c[t]
            };
            var n = t.prototype;
            return n.error = function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                this.i(console.error, c.error, n)
            }, n.warn = function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                this.i(console.warn, c.warning, n)
            }, n.info = function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                this.i(console.info, c.info, n)
            }, n.debug = function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                this.i(console.log, c.debug, n)
            }, n.i = function(n, r, e) {
                r <= t.getLevel() && n.apply(console, ["[" + this.t + "] "].concat(e))
            }, t
        }(),
        d = O,
        m = E,
        p = g,
        w = x,
        b = T,
        y = "/",
        P = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

    function g(t, n) {
        for (var r, e = [], i = 0, o = 0, u = "", f = n && n.delimiter || y, s = n && n.whitelist || void 0, c = !1; null !== (r = P.exec(t));) {
            var a = r[0],
                h = r[1],
                v = r.index;
            if (u += t.slice(o, v), o = v + a.length, h) u += h[1], c = !0;
            else {
                var l = "",
                    d = r[2],
                    m = r[3],
                    p = r[4],
                    w = r[5];
                if (!c && u.length) {
                    var b = u.length - 1,
                        g = u[b];
                    (!s || s.indexOf(g) > -1) && (l = g, u = u.slice(0, b))
                }
                u && (e.push(u), u = "", c = !1);
                var E = m || p,
                    x = l || f;
                e.push({
                    name: d || i++,
                    prefix: l,
                    delimiter: x,
                    optional: "?" === w || "*" === w,
                    repeat: "+" === w || "*" === w,
                    pattern: E ? A(E) : "[^" + k(x === f ? x : x + f) + "]+?"
                })
            }
        }
        return (u || o < t.length) && e.push(u + t.substr(o)), e
    }

    function E(t, n) {
        return function(r, e) {
            var i = t.exec(r);
            if (!i) return !1;
            for (var o = i[0], u = i.index, f = {}, s = e && e.decode || decodeURIComponent, c = 1; c < i.length; c++)
                if (void 0 !== i[c]) {
                    var a = n[c - 1];
                    f[a.name] = a.repeat ? i[c].split(a.delimiter).map((function(t) {
                        return s(t, a)
                    })) : s(i[c], a)
                }
            return {
                path: o,
                index: u,
                params: f
            }
        }
    }

    function x(t, n) {
        for (var r = new Array(t.length), e = 0; e < t.length; e++) "object" == typeof t[e] && (r[e] = new RegExp("^(?:" + t[e].pattern + ")$", R(n)));
        return function(n, e) {
            for (var i = "", o = e && e.encode || encodeURIComponent, u = !e || !1 !== e.validate, f = 0; f < t.length; f++) {
                var s = t[f];
                if ("string" != typeof s) {
                    var c, a = n ? n[s.name] : void 0;
                    if (Array.isArray(a)) {
                        if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but got array');
                        if (0 === a.length) {
                            if (s.optional) continue;
                            throw new TypeError('Expected "' + s.name + '" to not be empty')
                        }
                        for (var h = 0; h < a.length; h++) {
                            if (c = o(a[h], s), u && !r[f].test(c)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '"');
                            i += (0 === h ? s.prefix : s.delimiter) + c
                        }
                    } else if ("string" != typeof a && "number" != typeof a && "boolean" != typeof a) {
                        if (!s.optional) throw new TypeError('Expected "' + s.name + '" to be ' + (s.repeat ? "an array" : "a string"))
                    } else {
                        if (c = o(String(a), s), u && !r[f].test(c)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but got "' + c + '"');
                        i += s.prefix + c
                    }
                } else i += s
            }
            return i
        }
    }

    function k(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
    }

    function A(t) {
        return t.replace(/([=!:$/()])/g, "\\$1")
    }

    function R(t) {
        return t && t.sensitive ? "" : "i"
    }

    function T(t, n, r) {
        for (var e = (r = r || {}).strict, i = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || y, f = [].concat(r.endsWith || []).map(k).concat("$").join("|"), s = i ? "^" : "", c = 0; c < t.length; c++) {
            var a = t[c];
            if ("string" == typeof a) s += k(a);
            else {
                var h = a.repeat ? "(?:" + a.pattern + ")(?:" + k(a.delimiter) + "(?:" + a.pattern + "))*" : a.pattern;
                n && n.push(a), s += a.optional ? a.prefix ? "(?:" + k(a.prefix) + "(" + h + "))?" : "(" + h + ")?" : k(a.prefix) + "(" + h + ")"
            }
        }
        if (o) e || (s += "(?:" + k(u) + ")?"), s += "$" === f ? "$" : "(?=" + f + ")";
        else {
            var v = t[t.length - 1],
                l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v;
            e || (s += "(?:" + k(u) + "(?=" + f + "))?"), l || (s += "(?=" + k(u) + "|" + f + ")")
        }
        return new RegExp(s, R(r))
    }

    function O(t, n, r) {
        return t instanceof RegExp ? function(t, n) {
            if (!n) return t;
            var r = t.source.match(/\((?!\?)/g);
            if (r)
                for (var e = 0; e < r.length; e++) n.push({
                    name: e,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    pattern: null
                });
            return t
        }(t, n) : Array.isArray(t) ? function(t, n, r) {
            for (var e = [], i = 0; i < t.length; i++) e.push(O(t[i], n, r).source);
            return new RegExp("(?:" + e.join("|") + ")", R(r))
        }(t, n, r) : function(t, n, r) {
            return T(g(t, r), n, r)
        }(t, n, r)
    }
    d.match = function(t, n) {
        var r = [];
        return E(O(t, r, n), r)
    }, d.regexpToFunction = m, d.parse = p, d.compile = function(t, n) {
        return x(g(t, n), n)
    }, d.tokensToFunction = w, d.tokensToRegExp = b;
    var S = {
            container: "container",
            history: "history",
            namespace: "namespace",
            prefix: "data-barba",
            prevent: "prevent",
            wrapper: "wrapper"
        },
        j = new(function() {
            function t() {
                this.o = S, this.u = new DOMParser
            }
            var n = t.prototype;
            return n.toString = function(t) {
                return t.outerHTML
            }, n.toDocument = function(t) {
                return this.u.parseFromString(t, "text/html")
            }, n.toElement = function(t) {
                var n = document.createElement("div");
                return n.innerHTML = t, n
            }, n.getHtml = function(t) {
                return void 0 === t && (t = document), this.toString(t.documentElement)
            }, n.getWrapper = function(t) {
                return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
            }, n.getContainer = function(t) {
                return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
            }, n.removeContainer = function(t) {
                document.body.contains(t) && t.parentNode.removeChild(t)
            }, n.addContainer = function(t, n) {
                var r = this.getContainer();
                r ? this.s(t, r) : n.appendChild(t)
            }, n.getNamespace = function(t) {
                void 0 === t && (t = document);
                var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
                return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
            }, n.getHref = function(t) {
                if (t.tagName && "a" === t.tagName.toLowerCase()) {
                    if ("string" == typeof t.href) return t.href;
                    var n = t.getAttribute("href") || t.getAttribute("xlink:href");
                    if (n) return this.resolveUrl(n.baseVal || n)
                }
                return null
            }, n.resolveUrl = function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                var e = n.length;
                if (0 === e) throw new Error("resolveUrl requires at least one argument; got none.");
                var i = document.createElement("base");
                if (i.href = arguments[0], 1 === e) return i.href;
                var o = document.getElementsByTagName("head")[0];
                o.insertBefore(i, o.firstChild);
                for (var u, f = document.createElement("a"), s = 1; s < e; s++) f.href = arguments[s], i.href = u = f.href;
                return o.removeChild(i), u
            }, n.s = function(t, n) {
                n.parentNode.insertBefore(t, n.nextSibling)
            }, t
        }()),
        M = new(function() {
            function t() {
                this.h = [], this.v = -1
            }
            var e = t.prototype;
            return e.init = function(t, n) {
                this.l = "barba";
                var r = {
                    ns: n,
                    scroll: {
                        x: window.scrollX,
                        y: window.scrollY
                    },
                    url: t
                };
                this.h.push(r), this.v = 0;
                var e = {
                    from: this.l,
                    index: 0,
                    states: [].concat(this.h)
                };
                window.history && window.history.replaceState(e, "", t)
            }, e.change = function(t, n, r) {
                if (r && r.state) {
                    var e = r.state,
                        i = e.index;
                    n = this.m(this.v - i), this.replace(e.states), this.v = i
                } else this.add(t, n);
                return n
            }, e.add = function(t, n) {
                var r = this.size,
                    e = this.p(n),
                    i = {
                        ns: "tmp",
                        scroll: {
                            x: window.scrollX,
                            y: window.scrollY
                        },
                        url: t
                    };
                this.h.push(i), this.v = r;
                var o = {
                    from: this.l,
                    index: r,
                    states: [].concat(this.h)
                };
                switch (e) {
                    case "push":
                        if(t.slice(-5)==".webp" | t.slice(-5)==".jpg"){
                            console.log(t.slice(-5));
                        }else{
                            console.log("pushing history state");
                            window.history && window.history.pushState(o, "", t);
                        }
                        break;
                    case "replace":
                        window.history && window.history.replaceState(o, "", t)
                }
            }, e.update = function(t, n) {
                var e = n || this.v,
                    i = r({}, this.get(e), {}, t);
                this.set(e, i)
            }, e.remove = function(t) {
                t ? this.h.splice(t, 1) : this.h.pop(), this.v--
            }, e.clear = function() {
                this.h = [], this.v = -1
            }, e.replace = function(t) {
                this.h = t
            }, e.get = function(t) {
                return this.h[t]
            }, e.set = function(t, n) {
                return this.h[t] = n
            }, e.p = function(t) {
                var n = "push",
                    r = t,
                    e = S.prefix + "-" + S.history;
                return r.hasAttribute && r.hasAttribute(e) && (n = r.getAttribute(e)), n
            }, e.m = function(t) {
                return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward"
            }, n(t, [{
                key: "current",
                get: function() {
                    return this.h[this.v]
                }
            }, {
                key: "state",
                get: function() {
                    return this.h[this.h.length - 1]
                }
            }, {
                key: "previous",
                get: function() {
                    return this.v < 1 ? null : this.h[this.v - 1]
                }
            }, {
                key: "size",
                get: function() {
                    return this.h.length
                }
            }]), t
        }()),
        L = function(t, n) {
            try {
                var r = function() {
                    if (!n.next.html) return Promise.resolve(t).then((function(t) {
                        var r = n.next;
                        if (t) {
                            var e = j.toElement(t);
                            r.namespace = j.getNamespace(e), r.container = j.getContainer(e), r.html = t, M.update({
                                ns: r.namespace
                            });
                            var i = j.toDocument(t);
                            document.title = i.title
                        }
                    }))
                }();
                return Promise.resolve(r && r.then ? r.then((function() {})) : void 0)
            } catch (t) {
                return Promise.reject(t)
            }
        },
        $ = d,
        _ = {
            __proto__: null,
            update: L,
            nextTick: function() {
                return new Promise((function(t) {
                    window.requestAnimationFrame(t)
                }))
            },
            pathToRegexp: $
        },
        q = function() {
            return window.location.origin
        },
        B = function(t) {
            return void 0 === t && (t = window.location.href), U(t).port
        },
        U = function(t) {
            var n, r = t.match(/:\d+/);
            if (null === r) /^http/.test(t) && (n = 80), /^https/.test(t) && (n = 443);
            else {
                var e = r[0].substring(1);
                n = parseInt(e, 10)
            }
            var i, o = t.replace(q(), ""),
                u = {},
                f = o.indexOf("#");
            f >= 0 && (i = o.slice(f + 1), o = o.slice(0, f));
            var s = o.indexOf("?");
            return s >= 0 && (u = D(o.slice(s + 1)), o = o.slice(0, s)), {
                hash: i,
                path: o,
                port: n,
                query: u
            }
        },
        D = function(t) {
            return t.split("&").reduce((function(t, n) {
                var r = n.split("=");
                return t[r[0]] = r[1], t
            }), {})
        },
        F = function(t) {
            return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "")
        },
        H = {
            __proto__: null,
            getHref: function() {
                return window.location.href
            },
            getOrigin: q,
            getPort: B,
            getPath: function(t) {
                return void 0 === t && (t = window.location.href), U(t).path
            },
            parse: U,
            parseQuery: D,
            clean: F
        };

    function I(t, n, r) {
        return void 0 === n && (n = 2e3), new Promise((function(e, i) {
            var o = new XMLHttpRequest;
            o.onreadystatechange = function() {
                if (o.readyState === XMLHttpRequest.DONE)
                    if (200 === o.status) e(o.responseText);
                    else if (o.status) {
                    var n = {
                        status: o.status,
                        statusText: o.statusText
                    };
                    r(t, n), i(n)
                }
            }, o.ontimeout = function() {
                var e = new Error("Timeout error [" + n + "]");
                r(t, e), i(e)
            }, o.onerror = function() {
                var n = new Error("Fetch error");
                r(t, n), i(n)
            }, o.open("GET", t), o.timeout = n, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes") //, o.send()
        }))
    }
    var C = function(t) {
        return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then
    };

    function N(t, n) {
        return void 0 === n && (n = {}),
            function() {
                for (var r = arguments.length, e = new Array(r), i = 0; i < r; i++) e[i] = arguments[i];
                var o = !1,
                    u = new Promise((function(r, i) {
                        n.async = function() {
                            return o = !0,
                                function(t, n) {
                                    t ? i(t) : r(n)
                                }
                        };
                        var u = t.apply(n, e);
                        o || (C(u) ? u.then(r, i) : r(u))
                    }));
                return u
            }
    }
    var X = new(function(t) {
            function n() {
                var n;
                return (n = t.call(this) || this).logger = new l("@barba/core"), n.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n.registered = new Map, n.init(), n
            }
            e(n, t);
            var r = n.prototype;
            return r.init = function() {
                var t = this;
                this.registered.clear(), this.all.forEach((function(n) {
                    t[n] || (t[n] = function(r, e) {
                        t.registered.has(n) || t.registered.set(n, new Set), t.registered.get(n).add({
                            ctx: e || {},
                            fn: r
                        })
                    })
                }))
            }, r.do = function(t) {
                for (var n = this, r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) e[i - 1] = arguments[i];
                if (this.registered.has(t)) {
                    var o = Promise.resolve();
                    return this.registered.get(t).forEach((function(t) {
                        o = o.then((function() {
                            return N(t.fn, t.ctx).apply(void 0, e)
                        }))
                    })), o.catch((function(r) {
                        n.logger.debug("Hook error [" + t + "]"), n.logger.error(r)
                    }))
                }
                return Promise.resolve()
            }, r.clear = function() {
                var t = this;
                this.all.forEach((function(n) {
                    delete t[n]
                })), this.init()
            }, r.help = function() {
                this.logger.info("Available hooks: " + this.all.join(","));
                var t = [];
                this.registered.forEach((function(n, r) {
                    return t.push(r)
                })), this.logger.info("Registered hooks: " + t.join(","))
            }, n
        }(h)),
        z = function() {
            function t(t) {
                if (this.P = [], "boolean" == typeof t) this.g = t;
                else {
                    var n = Array.isArray(t) ? t : [t];
                    this.P = n.map((function(t) {
                        return $(t)
                    }))
                }
            }
            return t.prototype.checkHref = function(t) {
                if ("boolean" == typeof this.g) return this.g;
                var n = U(t).path;
                return this.P.some((function(t) {
                    return null !== t.exec(n)
                }))
            }, t
        }(),
        G = function(t) {
            function n(n) {
                var r;
                return (r = t.call(this, n) || this).k = new Map, r
            }
            e(n, t);
            var i = n.prototype;
            return i.set = function(t, n, r) {
                return this.k.set(t, {
                    action: r,
                    request: n
                }), {
                    action: r,
                    request: n
                }
            }, i.get = function(t) {
                return this.k.get(t)
            }, i.getRequest = function(t) {
                return this.k.get(t).request
            }, i.getAction = function(t) {
                return this.k.get(t).action
            }, i.has = function(t) {
                return !this.checkHref(t) && this.k.has(t)
            }, i.delete = function(t) {
                return this.k.delete(t)
            }, i.update = function(t, n) {
                var e = r({}, this.k.get(t), {}, n);
                return this.k.set(t, e), e
            }, n
        }(z),
        Q = function() {
            return !window.history.pushState
        },
        W = function(t) {
            return !t.el || !t.href
        },
        J = function(t) {
            var n = t.event;
            return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey
        },
        K = function(t) {
            var n = t.el;
            return n.hasAttribute("target") && "_blank" === n.target
        },
        V = function(t) {
            var n = t.el;
            return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname
        },
        Y = function(t) {
            var n = t.el;
            return void 0 !== n.port && B() !== B(n.href)
        },
        Z = function(t) {
            var n = t.el;
            return n.getAttribute && "string" == typeof n.getAttribute("download")
        },
        tt = function(t) {
            return t.el.hasAttribute(S.prefix + "-" + S.prevent)
        },
        nt = function(t) {
            return Boolean(t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'))
        },
        rt = function(t) {
            var n = t.href;
            return F(n) === F() && B(n) === B()
        },
        et = function(t) {
            function n(n) {
                var r;
                return (r = t.call(this, n) || this).suite = [], r.tests = new Map, r.init(), r
            }
            e(n, t);
            var r = n.prototype;
            return r.init = function() {
                this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, !1)
            }, r.add = function(t, n, r) {
                void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t)
            }, r.run = function(t, n, r, e) {
                return this.tests.get(t)({
                    el: n,
                    event: r,
                    href: e
                })
            }, r.checkLink = function(t, n, r) {
                var e = this;
                return this.suite.some((function(i) {
                    return e.run(i, t, n, r)
                }))
            }, n
        }(z),
        it = function(t) {
            function n(r, e) {
                var i;
                void 0 === e && (e = "Barba error");
                for (var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), f = 2; f < o; f++) u[f - 2] = arguments[f];
                return (i = t.call.apply(t, [this].concat(u)) || this).error = r, i.label = e, Error.captureStackTrace && Error.captureStackTrace(function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(i), n), i.name = "BarbaError", i
            }
            return e(n, t), n
        }(f(Error)),
        ot = function() {
            function t(t) {
                void 0 === t && (t = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
                    name: "namespace",
                    type: "strings"
                }, {
                    name: "custom",
                    type: "function"
                }], t && (this.all = this.all.concat(t)), this.update()
            }
            var n = t.prototype;
            return n.add = function(t, n) {
                switch (t) {
                    case "rule":
                        this.A.splice(n.position || 0, 0, n.value);
                        break;
                    case "transition":
                    default:
                        this.all.push(n)
                }
                this.update()
            }, n.resolve = function(t, n) {
                var r = this;
                void 0 === n && (n = {});
                var e = n.once ? this.once : this.page;
                e = e.filter(n.self ? function(t) {
                    return t.name && "self" === t.name
                } : function(t) {
                    return !t.name || "self" !== t.name
                });
                var i = new Map,
                    o = e.find((function(e) {
                        var o = !0,
                            u = {};
                        return !(!n.self || "self" !== e.name) || (r.A.reverse().forEach((function(n) {
                            o && (o = r.R(e, n, t, u), e.from && e.to && (o = r.R(e, n, t, u, "from") && r.R(e, n, t, u, "to")), e.from && !e.to && (o = r.R(e, n, t, u, "from")), !e.from && e.to && (o = r.R(e, n, t, u, "to")))
                        })), i.set(e, u), o)
                    })),
                    u = i.get(o),
                    f = [];
                if (f.push(n.once ? "once" : "page"), n.self && f.push("self"), u) {
                    var s, c = [o];
                    Object.keys(u).length > 0 && c.push(u), (s = this.logger).info.apply(s, ["Transition found [" + f.join(",") + "]"].concat(c))
                } else this.logger.info("No transition found [" + f.join(",") + "]");
                return o
            }, n.update = function() {
                var t = this;
                this.all = this.all.map((function(n) {
                    return t.T(n)
                })).sort((function(t, n) {
                    return t.priority - n.priority
                })).reverse().map((function(t) {
                    return delete t.priority, t
                })), this.page = this.all.filter((function(t) {
                    return void 0 !== t.leave || void 0 !== t.enter
                })), this.once = this.all.filter((function(t) {
                    return void 0 !== t.once
                }))
            }, n.R = function(t, n, r, e, i) {
                var o = !0,
                    u = !1,
                    f = t,
                    s = n.name,
                    c = s,
                    a = s,
                    h = s,
                    v = i ? f[i] : f,
                    l = "to" === i ? r.next : r.current;
                if (i ? v && v[s] : v[s]) {
                    switch (n.type) {
                        case "strings":
                        default:
                            var d = Array.isArray(v[c]) ? v[c] : [v[c]];
                            l[c] && -1 !== d.indexOf(l[c]) && (u = !0), -1 === d.indexOf(l[c]) && (o = !1);
                            break;
                        case "object":
                            var m = Array.isArray(v[a]) ? v[a] : [v[a]];
                            l[a] ? (l[a].name && -1 !== m.indexOf(l[a].name) && (u = !0), -1 === m.indexOf(l[a].name) && (o = !1)) : o = !1;
                            break;
                        case "function":
                            v[h](r) ? u = !0 : o = !1
                    }
                    u && (i ? (e[i] = e[i] || {}, e[i][s] = f[i][s]) : e[s] = f[s])
                }
                return o
            }, n.O = function(t, n, r) {
                var e = 0;
                return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (e += Math.pow(10, r), t.from && t.from[n] && (e += 1), t.to && t.to[n] && (e += 2)), e
            }, n.T = function(t) {
                var n = this;
                t.priority = 0;
                var r = 0;
                return this.A.forEach((function(e, i) {
                    r += n.O(t, e.name, i + 1)
                })), t.priority = r, t
            }, t
        }(),
        ut = function() {
            function t(t) {
                void 0 === t && (t = []), this.logger = new l("@barba/core"), this.S = !1, this.store = new ot(t)
            }
            var r = t.prototype;
            return r.get = function(t, n) {
                return this.store.resolve(t, n)
            }, r.doOnce = function(t) {
                var n = t.data,
                    r = t.transition;
                try {
                    var e = function() {
                            i.S = !1
                        },
                        i = this,
                        o = r || {};
                    i.S = !0;
                    var u = s((function() {
                        return Promise.resolve(i.j("beforeOnce", n, o)).then((function() {
                            return Promise.resolve(i.once(n, o)).then((function() {
                                return Promise.resolve(i.j("afterOnce", n, o)).then((function() {}))
                            }))
                        }))
                    }), (function(t) {
                        i.S = !1, i.logger.debug("Transition error [before/after/once]"), i.logger.error(t)
                    }));
                    return Promise.resolve(u && u.then ? u.then(e) : e())
                } catch (t) {
                    return Promise.reject(t)
                }
            }, r.doPage = function(t) {
                var n = t.data,
                    r = t.transition,
                    e = t.page,
                    i = t.wrapper;
                try {
                    var o = function(t) {
                            if (u) return t;
                            f.S = !1
                        },
                        u = !1,
                        f = this,
                        c = r || {},
                        a = !0 === c.sync || !1;
                    f.S = !0;
                    var h = s((function() {
                        function t() {
                            return Promise.resolve(f.j("before", n, c)).then((function() {
                                var t = !1;

                                function r(r) {
                                    return t ? r : Promise.resolve(f.remove(n)).then((function() {
                                        return Promise.resolve(f.j("after", n, c)).then((function() {}))
                                    }))
                                }
                                var o = function() {
                                    if (a) return s((function() {
                                        return Promise.resolve(f.add(n, i)).then((function() {
                                            return Promise.resolve(f.j("beforeLeave", n, c)).then((function() {
                                                return Promise.resolve(f.j("beforeEnter", n, c)).then((function() {
                                                    return Promise.resolve(Promise.all([f.leave(n, c), f.enter(n, c)])).then((function() {
                                                        return Promise.resolve(f.j("afterLeave", n, c)).then((function() {
                                                            return Promise.resolve(f.j("afterEnter", n, c)).then((function() {}))
                                                        }))
                                                    }))
                                                }))
                                            }))
                                        }))
                                    }), (function(t) {
                                        if (f.M(t)) throw new it(t, "Transition error [sync]")
                                    }));
                                    var r = function(r) {
                                            return t ? r : s((function() {
                                                var t = function() {
                                                    if (!1 !== o) return Promise.resolve(f.add(n, i)).then((function() {
                                                        return Promise.resolve(f.j("beforeEnter", n, c)).then((function() {
                                                            return Promise.resolve(f.enter(n, c, o)).then((function() {
                                                                return Promise.resolve(f.j("afterEnter", n, c)).then((function() {}))
                                                            }))
                                                        }))
                                                    }))
                                                }();
                                                if (t && t.then) return t.then((function() {}))
                                            }), (function(t) {
                                                if (f.M(t)) throw new it(t, "Transition error [before/after/enter]")
                                            }))
                                        },
                                        o = !1,
                                        u = s((function() {
                                            return Promise.resolve(f.j("beforeLeave", n, c)).then((function() {
                                                return Promise.resolve(Promise.all([f.leave(n, c), L(e, n)]).then((function(t) {
                                                    return t[0]
                                                }))).then((function(t) {
                                                    return o = t, Promise.resolve(f.j("afterLeave", n, c)).then((function() {}))
                                                }))
                                            }))
                                        }), (function(t) {
                                            if (f.M(t)) throw new it(t, "Transition error [before/after/leave]")
                                        }));
                                    return u && u.then ? u.then(r) : r(u)
                                }();
                                return o && o.then ? o.then(r) : r(o)
                            }))
                        }
                        var r = function() {
                            if (a) return Promise.resolve(L(e, n)).then((function() {}))
                        }();
                        return r && r.then ? r.then(t) : t()
                    }), (function(t) {
                        if (f.S = !1, t.name && "BarbaError" === t.name) throw f.logger.debug(t.label), f.logger.error(t.error), t;
                        throw f.logger.debug("Transition error [page]"), f.logger.error(t), t
                    }));
                    return Promise.resolve(h && h.then ? h.then(o) : o(h))
                } catch (t) {
                    return Promise.reject(t)
                }
            }, r.once = function(t, n) {
                try {
                    return Promise.resolve(X.do("once", t, n)).then((function() {
                        return n.once ? N(n.once, n)(t) : Promise.resolve()
                    }))
                } catch (t) {
                    return Promise.reject(t)
                }
            }, r.leave = function(t, n) {
                try {
                    return Promise.resolve(X.do("leave", t, n)).then((function() {
                        return n.leave ? N(n.leave, n)(t) : Promise.resolve()
                    }))
                } catch (t) {
                    return Promise.reject(t)
                }
            }, r.enter = function(t, n, r) {
                try {
                    return Promise.resolve(X.do("enter", t, n)).then((function() {
                        return n.enter ? N(n.enter, n)(t, r) : Promise.resolve()
                    }))
                } catch (t) {
                    return Promise.reject(t)
                }
            }, r.add = function(t, n) {
                try {
                    return j.addContainer(t.next.container, n), X.do("nextAdded", t), Promise.resolve()
                } catch (t) {
                    return Promise.reject(t)
                }
            }, r.remove = function(t) {
                try {
                    return j.removeContainer(t.current.container), X.do("currentRemoved", t), Promise.resolve()
                } catch (t) {
                    return Promise.reject(t)
                }
            }, r.M = function(t) {
                return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status
            }, r.j = function(t, n, r) {
                try {
                    return Promise.resolve(X.do(t, n, r)).then((function() {
                        return r[t] ? N(r[t], r)(n) : Promise.resolve()
                    }))
                } catch (t) {
                    return Promise.reject(t)
                }
            }, n(t, [{
                key: "isRunning",
                get: function() {
                    return this.S
                },
                set: function(t) {
                    this.S = t
                }
            }, {
                key: "hasOnce",
                get: function() {
                    return this.store.once.length > 0
                }
            }, {
                key: "hasSelf",
                get: function() {
                    return this.store.all.some((function(t) {
                        return "self" === t.name
                    }))
                }
            }, {
                key: "shouldWait",
                get: function() {
                    return this.store.all.some((function(t) {
                        return t.to && !t.to.route || t.sync
                    }))
                }
            }]), t
        }(),
        ft = function() {
            function t(t) {
                var n = this;
                this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== t.length && (t.forEach((function(t) {
                    n.byNamespace.set(t.namespace, t)
                })), this.names.forEach((function(t) {
                    X[t](n.L(t))
                })))
            }
            return t.prototype.L = function(t) {
                var n = this;
                return function(r) {
                    var e = t.match(/enter/i) ? r.next : r.current,
                        i = n.byNamespace.get(e.namespace);
                    return i && i[t] ? N(i[t], i)(r) : Promise.resolve()
                }
            }, t
        }();
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
        var n = this;
        do {
            if (n.matches(t)) return n;
            n = n.parentElement || n.parentNode
        } while (null !== n && 1 === n.nodeType);
        return null
    });
    var st = {
        container: null,
        html: "",
        namespace: "",
        url: {
            hash: "",
            href: "",
            path: "",
            port: null,
            query: {}
        }
    };
    return new(function() {
        function t() {
            this.version = a, this.schemaPage = st, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H
        }
        var e = t.prototype;
        return e.use = function(t, n) {
            var r = this.plugins;
            r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.')
        }, e.init = function(t) {
            var n = void 0 === t ? {} : t,
                e = n.transitions,
                i = void 0 === e ? [] : e,
                o = n.views,
                u = void 0 === o ? [] : o,
                f = n.schema,
                s = void 0 === f ? S : f,
                c = n.requestError,
                a = n.timeout,
                h = void 0 === a ? 2e3 : a,
                v = n.cacheIgnore,
                d = void 0 !== v && v,
                m = n.prefetchIgnore,
                p = void 0 !== m && m,
                w = n.preventRunning,
                b = void 0 !== w && w,
                y = n.prevent,
                P = void 0 === y ? null : y,
                g = n.debug,
                E = n.logLevel;
            if (l.setLevel(!0 === (void 0 !== g && g) ? "debug" : void 0 === E ? "off" : E), this.logger.info(this.version), Object.keys(s).forEach((function(t) {
                    S[t] && (S[t] = s[t])
                })), this.$ = c, this.timeout = h, this.cacheIgnore = d, this.prefetchIgnore = p, this.preventRunning = b, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var x = this.data.current;
            if (!x.container) throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new G(d), this.prevent = new et(p), this.transitions = new ut(i), this.views = new ft(u), null !== P) {
                if ("function" != typeof P) throw new Error("[@barba/core] Prevent should be a function");
                this.prevent.add("preventCustom", P)
            }
            this.history.init(x.url.href, x.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach((function(t) {
                return t.init()
            }));
            var k = this.data;
            k.trigger = "barba", k.next = k.current, k.current = r({}, this.schemaPage), this.hooks.do("ready", k), this.once(k), this.q()
        }, e.destroy = function() {
            this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = []
        }, e.force = function(t) {
            window.location.assign(t)
        }, e.go = function(t, n, r) {
            var e;
            if (void 0 === n && (n = "barba"), this.transitions.isRunning) this.force(t);
            else if (!(e = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n = this.history.change(t, n, r), r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, e)
        }, e.once = function(t) {
            try {
                var n = this;
                return Promise.resolve(n.hooks.do("beforeEnter", t)).then((function() {
                    function r() {
                        return Promise.resolve(n.hooks.do("afterEnter", t)).then((function() {}))
                    }
                    var e = function() {
                        if (n.transitions.hasOnce) {
                            var r = n.transitions.get(t, {
                                once: !0
                            });
                            return Promise.resolve(n.transitions.doOnce({
                                transition: r,
                                data: t
                            })).then((function() {}))
                        }
                    }();
                    return e && e.then ? e.then(r) : r()
                }))
            } catch (t) {
                return Promise.reject(t)
            }
        }, e.page = function(t, n, e) {
            try {
                var i = function() {
                        var t = o.data;
                        return Promise.resolve(o.hooks.do("page", t)).then((function() {
                            var n = s((function() {
                                var n = o.transitions.get(t, {
                                    once: !1,
                                    self: e
                                });
                                return Promise.resolve(o.transitions.doPage({
                                    data: t,
                                    page: u,
                                    transition: n,
                                    wrapper: o._
                                })).then((function() {
                                    o.q()
                                }))
                            }), (function() {
                                0 === l.getLevel() && o.force(t.current.url.href)
                            }));
                            if (n && n.then) return n.then((function() {}))
                        }))
                    },
                    o = this;
                o.data.next.url = r({
                    href: t
                }, o.url.parse(t)), o.data.trigger = n;
                var u = o.cache.has(t) ? o.cache.update(t, {
                        action: "click"
                    }).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, n)), "click").request,
                    f = function() {
                        if (o.transitions.shouldWait) return Promise.resolve(L(u, o.data)).then((function() {}))
                    }();
                return Promise.resolve(f && f.then ? f.then(i) : i())
            } catch (t) {
                return Promise.reject(t)
            }
        }, e.onRequestError = function(t) {
            this.transitions.isRunning = !1;
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
            var i = r[0],
                o = r[1],
                u = this.cache.getAction(i);
            return this.cache.delete(i), !(this.$ && !1 === this.$(t, u, i, o) || ("click" === u && this.force(i), 1))
        }, e.prefetch = function(t) {
            var n = this;
            this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch((function(t) {
                n.logger.error(t)
            })), "prefetch")
        }, e.F = function() {
            !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D)
        }, e.H = function() {
            !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D)
        }, e.B = function(t) {
            var n = this,
                r = this.I(t);
            if (r) {
                var e = this.dom.getHref(r);
                this.prevent.checkHref(e) || this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, r)).catch((function(t) {
                    n.logger.error(t)
                })), "enter")
            }
        }, e.U = function(t) {
            var n = this.I(t);
            if (n) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(n), n, t)
        }, e.D = function(t) {
            this.go(this.url.getHref(), "popstate", t)
        }, e.I = function(t) {
            for (var n = t.target; n && !this.dom.getHref(n);) n = n.parentNode;
            if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n
        }, e.q = function() {
            var t = this.url.getHref(),
                n = {
                    container: this.dom.getContainer(),
                    html: this.dom.getHtml(),
                    namespace: this.dom.getNamespace(),
                    url: r({
                        href: t
                    }, this.url.parse(t))
                };
            this.C = {
                current: n,
                next: r({}, this.schemaPage),
                trigger: void 0
            }, this.hooks.do("reset", this.data)
        }, n(t, [{
            key: "data",
            get: function() {
                return this.C
            }
        }, {
            key: "wrapper",
            get: function() {
                return this._
            }
        }]), t
    }())
}));

;
/*!
 * GSAP 3.5.1
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function n(t) {
        return "string" == typeof t
    }

    function o(t) {
        return "function" == typeof t
    }

    function p(t) {
        return "number" == typeof t
    }

    function q(t) {
        return void 0 === t
    }

    function r(t) {
        return "object" == typeof t
    }

    function s(t) {
        return !1 !== t
    }

    function t() {
        return "undefined" != typeof window
    }

    function u(t) {
        return o(t) || n(t)
    }

    function K(t) {
        return (l = mt(t, ot)) && ae
    }

    function L(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function M(t, e) {
        return !e //&& console.warn(t)
    }

    function N(t, e) {
        return t && (ot[t] = e) && l && (l[t] = e) || ot
    }

    function O() {
        return 0
    }

    function Y(t) {
        var e, i, n = t[0];
        if (r(n) || o(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
            for (i = _t.length; i-- && !_t[i].targetTest(n););
            e = _t[i]
        }
        for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new It(t[i], e))) || t.splice(i, 1);
        return t
    }

    function Z(t) {
        return t._gsap || Y(bt(t))[0]._gsap
    }

    function $(t, e, r) {
        return (r = t[e]) && o(r) ? t[e]() : q(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function _(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function aa(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function ba(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r
    }

    function ca(t, e, r) {
        var i, n = p(t[1]),
            a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
            o = t[a];
        if (n && (o.duration = t[1]), o.parent = r, e) {
            for (i = o; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = s(r.vars.inherit) && r.parent;
            o.immediateRender = s(i.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
        }
        return o
    }

    function da() {
        var t, e, r = ht.length,
            i = ht.slice(0);
        for (lt = {}, t = ht.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function ea(t, e, r, i) {
        ht.length && da(), t.render(e, r, i), ht.length && da()
    }

    function fa(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(st).length < 2 ? e : n(t) ? t.trim() : t
    }

    function ga(t) {
        return t
    }

    function ha(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function ia(t, e) {
        for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r])
    }

    function ka(t, e) {
        for (var i in e) t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];
        return t
    }

    function la(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function ma(t) {
        var e = t.parent || E,
            r = t.keyframes ? ia : ha;
        if (s(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function pa(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function qa(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function ra(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function ua(t) {
        return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function wa(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function xa(t) {
        return t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || U) || 0))
    }

    function ya(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = aa(t._dp._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), xa(t), r._dirty || ra(r, t)), t
    }

    function za(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = wa(t.rawTime(), e), (!e._dur || yt(0, e.totalDuration(), r) - e._tTime > U) && e.render(r, !0)), ra(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -U
        }
    }

    function Aa(t, e, r, i) {
        return e.parent && qa(e), e._start = aa(r + e._delay), e._end = aa(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            function _addLinkedListItem(t, e, r, i, n) {
                void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                var a, s = t[i];
                if (n)
                    for (a = e[n]; s && s[n] > a;) s = s._prev;
                s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || za(t, e), t
    }

    function Ba(t, e) {
        return (ot.ScrollTrigger || L("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function Ca(t, e, r, i) {
        return Nt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== At.frame ? (ht.push(t), t._lazy = [e, i], 1) : void 0 : 1
    }

    function Fa(t, e, r, i) {
        var n = t._repeat,
            a = aa(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : aa(a * (n + 1) + t._rDelay * n) : a, s && !i ? ya(t, t._tTime = t._tDur * s) : t.parent && xa(t), r || ra(t.parent, t), t
    }

    function Ga(t) {
        return t instanceof Bt ? ra(t) : Fa(t, t._dur)
    }

    function Ia(t, e) {
        var r, i, a = t.labels,
            s = t._recent || vt,
            o = t.duration() >= B ? s.endTime(!1) : t._dur;
        return n(e) && (isNaN(e) || e in a) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o), a[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? Ia(t, e.substr(0, r - 1)) + i : o + i) : null == e ? o : +e
    }

    function Ja(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function La(t) {
        return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : ""
    }

    function Oa(t, e) {
        return t && r(t) && "length" in t && (!e && !t.length || t.length - 1 in t && r(t[0])) && !t.nodeType && t !== i
    }

    function Ra(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function Sa(t) {
        if (o(t)) return t;
        var _ = r(t) ? t : {
                each: t
            },
            c = Rt(_.ease),
            m = _.from || 0,
            g = parseFloat(_.base) || 0,
            v = {},
            e = 0 < m && m < 1,
            y = isNaN(m) || e,
            T = _.axis,
            b = m,
            w = m;
        return n(m) ? b = w = {
                center: .5,
                edges: .5,
                end: 1
            }[m] || 0 : !e && y && (b = m[0], w = m[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = (r || _).length,
                    p = v[d];
                if (!p) {
                    if (!(f = "auto" === _.grid ? 0 : (_.grid || [1, B])[1])) {
                        for (h = -B; h < (h = r[f++].getBoundingClientRect().left) && f < d;);
                        f--
                    }
                    for (p = v[d] = [], i = y ? Math.min(f, d) * b - .5 : m % f, n = y ? d * w / f - .5 : m / f | 0, l = B, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), p[u] = o = T ? Math.abs("y" === T ? s : a) : J(a * a + s * s), h < o && (h = o), o < l && (l = o);
                    "random" === m && Ra(p), p.max = h - l, p.min = l, p.v = d = (parseFloat(_.amount) || parseFloat(_.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), p.b = d < 0 ? g - d : g, p.u = La(_.amount || _.each) || 0, c = c && d < 0 ? Ft(c) : c
                }
                return d = (p[t] - p.min) / p.max || 0, aa(p.b + (c ? c(d) : d) * p.v) + p.u
            }
    }

    function Ta(e) {
        var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function(t) {
            return Math.floor(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : La(t))
        }
    }

    function Ua(u, t) {
        var h, l, e = tt(u);
        return !e && r(u) && (h = e = u.radius || B, u.values ? (u = bt(u.values), (l = !p(u[0])) && (h *= h)) : u = Ta(u.increment)), Ja(t, e ? o(u) ? function(t) {
            return l = u(t), Math.abs(l - t) <= h ? l : t
        } : function(t) {
            for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = B, s = 0, o = u.length; o--;)(e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
            return s = !h || a <= h ? u[s] : t, l || s === t || p(t) ? s : s + La(t)
        } : Ta(u))
    }

    function Va(t, e, r, i) {
        return Ja(tt(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return tt(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i
        })
    }

    function Za(e, r, t) {
        return Ja(t, function(t) {
            return e[~~r(t)]
        })
    }

    function ab(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? st : et), s += t.substr(a, e - a) + Va(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function db(t, e, r) {
        var i, n, a, s = t.labels,
            o = B;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function fb(t) {
        return qa(t), t.progress() < 1 && xt(t, "onInterrupt"), t
    }

    function kb(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * kt + .5 | 0
    }

    function lb(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, _ = t ? p(t) ? [t >> 16, t >> 8 & kt, t & kt] : 0 : Ot.black;
        if (!_) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ot[t]) _ = Ot[t];
            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a), _ = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & kt, t & kt];
            else if ("hsl" === t.substr(0, 3))
                if (_ = d = t.match(et), e) {
                    if (~t.indexOf("=")) return _ = t.match(rt), r && _.length < 4 && (_[3] = 1), _
                } else s = +_[0] % 360 / 360, o = _[1] / 100, i = 2 * (u = _[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < _.length && (_[3] *= 1), _[0] = kb(s + 1 / 3, i, n), _[1] = kb(s, i, n), _[2] = kb(s - 1 / 3, i, n);
            else _ = t.match(et) || Ot.transparent;
            _ = _.map(Number)
        }
        return e && !d && (i = _[0] / kt, n = _[1] / kt, a = _[2] / kt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), _[0] = ~~(s + .5), _[1] = ~~(100 * o + .5), _[2] = ~~(100 * u + .5)), r && _.length < 4 && (_[3] = 1), _
    }

    function mb(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(Mt).forEach(function(t) {
            var e = t.match(it) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function nb(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(Mt),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = lb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (a = mb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(Mt, "1").split(it)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(Mt)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function qb(t) {
        var e, r = t.join(" ");
        if (Mt.lastIndex = 0, Mt.test(r)) return e = Ct.test(r), t[1] = nb(t[1], e), t[0] = nb(t[0], e, mb(t[1])), !0
    }

    function zb(t) {
        var e = (t + "").split("("),
            r = Dt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(zt, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(fa)) : Dt._CE && St.test(t) ? Dt._CE("", t) : r
    }

    function Bb(t, e) {
        for (var r, i = t._first; i;) i instanceof Bt ? Bb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Bb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Db(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return _(t, function(t) {
            for (var e in Dt[t] = ot[t] = a, Dt[n = t.toLowerCase()] = r, a) Dt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Dt[t + "." + e] = a[e]
        }), a
    }

    function Eb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Fb(r, t, e) {
        function ul(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * W((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / V * (Math.asin(1 / i) || 0),
            s = "out" === r ? ul : "in" === r ? function(t) {
                return 1 - ul(1 - t)
            } : Eb(ul);
        return n = V / n, s.config = function(t, e) {
            return Fb(r, t, e)
        }, s
    }

    function Gb(e, r) {
        function Cl(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Cl : "in" === e ? function(t) {
            return 1 - Cl(1 - t)
        } : Eb(Cl);
        return t.config = function(t) {
            return Gb(e, t)
        }, t
    }
    var E, i, a, h, l, f, d, c, m, g, v, y, T, b, w, x, k, C, A, P, D, S, z, F, R, j = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        I = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        B = 1e8,
        U = 1 / B,
        V = 2 * Math.PI,
        X = V / 4,
        G = 0,
        J = Math.sqrt,
        Q = Math.cos,
        W = Math.sin,
        H = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        tt = Array.isArray,
        et = /(?:-?\.?\d|\.)+/gi,
        rt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        it = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        nt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        at = /[+-]=-?[\.\d]+/,
        st = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        ot = {},
        ut = {},
        ht = [],
        lt = {},
        ft = {},
        dt = {},
        pt = 30,
        _t = [],
        ct = "",
        mt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        gt = function _animationCycle(t, e) {
            return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
        },
        vt = {
            _start: 0,
            endTime: O
        },
        yt = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        Tt = [].slice,
        bt = function toArray(t, e) {
            return !n(t) || e || !a && Pt() ? tt(t) ? function _flatten(t, e, r) {
                return void 0 === r && (r = []), t.forEach(function(t) {
                    return n(t) && !e || Oa(t, 1) ? r.push.apply(r, bt(t)) : r.push(t)
                }) || r
            }(t, e) : Oa(t) ? Tt.call(t, 0) : t ? [t] : [] : Tt.call(h.querySelectorAll(t), 0)
        },
        wt = function mapRange(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Ja(n, function(t) {
                return r + ((t - e) / a * s || 0)
            })
        },
        xt = function _callback(t, e, r) {
            var i, n, a = t.vars,
                s = a[e];
            if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && da(), i ? s.apply(n, i) : s.call(n)
        },
        kt = 255,
        Ot = {
            aqua: [0, kt, kt],
            lime: [0, kt, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, kt],
            navy: [0, 0, 128],
            white: [kt, kt, kt],
            olive: [128, 128, 0],
            yellow: [kt, kt, 0],
            orange: [kt, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [kt, 0, 0],
            pink: [kt, 192, 203],
            cyan: [0, kt, kt],
            transparent: [kt, kt, kt, 0]
        },
        Mt = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in Ot) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Ct = /hsl[a]?\(/,
        At = (x = Date.now, k = 500, C = 33, A = x(), P = A, S = D = 1e3 / 240, T = {
            time: 0,
            frame: 0,
            tick: function tick() {
                qk(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return b / (1e3 / (t || 60))
            },
            wake: function wake() {
                f && (!a && t() && (i = a = window, h = i.document || {}, ot.gsap = ae, (i.gsapVersions || (i.gsapVersions = [])).push(ae.version), K(l || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), g && T.sleep(), v = y || function(t) {
                    return setTimeout(t, S - 1e3 * T.time + 1 | 0)
                }, m = 1, qk(2))
            },
            sleep: function sleep() {
                (y ? i.cancelAnimationFrame : clearTimeout)(g), m = 0, v = O
            },
            lagSmoothing: function lagSmoothing(t, e) {
                k = t || 1e8, C = Math.min(e, k, 0)
            },
            fps: function fps(t) {
                D = 1e3 / (t || 240), S = 1e3 * T.time + D
            },
            add: function add(t) {
                z.indexOf(t) < 0 && z.push(t), Pt()
            },
            remove: function remove(t) {
                var e;
                ~(e = z.indexOf(t)) && z.splice(e, 1) && e <= w && w--
            },
            _listeners: z = []
        }),
        Pt = function _wake() {
            return !m && At.wake()
        },
        Dt = {},
        St = /^[\d.\-M][\d.\-,\s]/,
        zt = /["']/g,
        Ft = function _invertEase(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        Rt = function _parseEase(t, e) {
            return t && (o(t) ? t : Dt[t] || zb(t)) || e
        };

    function qk(t) {
        var e, r, i, n, a = x() - P,
            s = !0 === t;
        if (k < a && (A += a - C), (0 < (e = (i = (P += a) - A) - S) || s) && (n = ++T.frame, b = i - 1e3 * T.time, T.time = i /= 1e3, S += e + (D <= e ? 4 : D - e), r = 1), s || (g = v(qk)), r)
            for (w = 0; w < z.length; w++) z[w](i, b, n, t)
    }

    function Tl(t) {
        return t < R ? F * t * t : t < .7272727272727273 ? F * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? F * (t -= 2.25 / 2.75) * t + .9375 : F * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    _("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Db(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), Dt.Linear.easeNone = Dt.none = Dt.Linear.easeIn, Db("Elastic", Fb("in"), Fb("out"), Fb()), F = 7.5625, R = 1 / 2.75, Db("Bounce", function(t) {
        return 1 - Tl(1 - t)
    }, Tl), Db("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Db("Circ", function(t) {
        return -(J(1 - t * t) - 1)
    }), Db("Sine", function(t) {
        return 1 === t ? 1 : 1 - Q(t * X)
    }), Db("Back", Gb("in"), Gb("out"), Gb()), Dt.SteppedEase = Dt.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * yt(0, .99999999, t) | 0) + n) * r
            }
        }
    }, I.ease = Dt["quad.out"], _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return ct += t + "," + t + "Params,"
    });
    var Et, It = function GSCache(t, e) {
            this.id = G++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : $, this.set = e ? e.getSetter : Qt
        },
        Lt = ((Et = Animation.prototype).delay = function delay(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Et.duration = function duration(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Et.totalDuration = function totalDuration(t) {
            return arguments.length ? (this._dirty = 0, Fa(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Et.totalTime = function totalTime(t, e) {
            if (Pt(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (ya(this, t); r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Aa(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === U || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ea(this, t, e)), this
        }, Et.time = function time(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ua(this)) % this._dur || (t ? this._dur : 0), e) : this._time
        }, Et.totalProgress = function totalProgress(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, Et.progress = function progress(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ua(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, Et.iteration = function iteration(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1
        }, Et.timeScale = function timeScale(t) {
            if (!arguments.length) return this._rts === -U ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -U ? 0 : this._rts,
                function _recacheAncestors(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this.totalTime(yt(-this._delay, this._tDur, e), !0))
        }, Et.paused = function paused(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= U) && Math.abs(this._zTime) !== U))), this) : this._ps
        }, Et.startTime = function startTime(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || Aa(e, this, t - this._delay), this
            }
            return this._start
        }, Et.endTime = function endTime(t) {
            return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }, Et.rawTime = function rawTime(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(e.rawTime(t), this) : this._tTime : this._tTime
        }, Et.globalTime = function globalTime(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return r
        }, Et.repeat = function repeat(t) {
            return arguments.length ? (this._repeat = t, Ga(this)) : this._repeat
        }, Et.repeatDelay = function repeatDelay(t) {
            return arguments.length ? (this._rDelay = t, Ga(this)) : this._rDelay
        }, Et.yoyo = function yoyo(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Et.seek = function seek(t, e) {
            return this.totalTime(Ia(this, t), s(e))
        }, Et.restart = function restart(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, s(e))
        }, Et.play = function play(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Et.reverse = function reverse(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Et.pause = function pause(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Et.resume = function resume() {
            return this.paused(!1)
        }, Et.reversed = function reversed(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -U : 0)), this) : this._rts < 0
        }, Et.invalidate = function invalidate() {
            return this._initted = 0, this._zTime = -U, this
        }, Et.isActive = function isActive() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - U))
        }, Et.eventCallback = function eventCallback(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, Et.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                function jn() {
                    var t = i.then;
                    i.then = null, o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = o(t) ? t : ga;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? jn() : i._prom = jn
            })
        }, Et.kill = function kill() {
            fb(this)
        }, Animation);

    function Animation(t, e) {
        var r = t.parent || E;
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Fa(this, +t.duration, 1, 1), this.data = t.data, m || At.wake(), r && Aa(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
    }
    ha(Lt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -U,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Bt = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), (r = i.call(this, t, e) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = s(t.sortChildren), r.parent && za(r.parent, _assertThisInitialized(r)), t.scrollTrigger && Ba(_assertThisInitialized(r), t.scrollTrigger), r
        }
        _inheritsLoose(Timeline, i);
        var t = Timeline.prototype;
        return t.to = function to(t, e, r, i) {
            return new Xt(t, ca(arguments, 0, this), Ia(this, p(e) ? i : r)), this
        }, t.from = function from(t, e, r, i) {
            return new Xt(t, ca(arguments, 1, this), Ia(this, p(e) ? i : r)), this
        }, t.fromTo = function fromTo(t, e, r, i, n) {
            return new Xt(t, ca(arguments, 2, this), Ia(this, p(e) ? n : i)), this
        }, t.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, ma(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Xt(t, e, Ia(this, r), 1), this
        }, t.call = function call(t, e, r) {
            return Aa(this, Xt.delayedCall(0, t, e), Ia(this, r))
        }, t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Xt(t, r, Ia(this, n)), this
        }, t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {
            return r.runBackwards = 1, ma(r).immediateRender = s(r.immediateRender), this.staggerTo(t, e, r, i, n, a, o)
        }, t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {
            return i.startAt = r, ma(i).immediateRender = s(i.immediateRender), this.staggerTo(t, e, i, n, a, o, u)
        }, t.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, p, _, c = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = this !== E && m - U < t && 0 <= t ? m : t < U ? 0 : t,
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (v !== this._tTime || r || y) {
                if (c !== this._time && g && (v += this._time - c, t += this._time - c), i = v, f = this._start, u = !(l = this._ts), y && (g || (c = this._zTime), !t && e || (this._zTime = t)), this._repeat && (p = this._yoyo, o = g + this._rDelay, i = aa(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), !c && this._tTime && d !== s && (d = s), p && 1 & s && (i = g - i, _ = 1), s !== d && !this._lock)) {
                    var T = p && 1 & d,
                        b = T === (p && 1 & s);
                    if (s < d && (T = !T), c = T ? 0 : g, this._lock = 1, this.render(c || (_ ? 0 : aa(s * o)), e, !g)._lock = 0, !e && this.parent && xt(this, "onRepeat"), this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1), c !== this._time || u != !this._ts) return this;
                    if (g = this._dur, m = this._tDur, b && (this._lock = 2, c = T ? g : -1e-4, this.render(c, !0), this.vars.repeatRefresh && !_ && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                    Bb(this, _)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, aa(c), aa(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), c || !i || e || xt(this, "onStart"), c <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = -U);
                                break
                            }
                        }
                        n = a
                    } else {
                        n = this._last;
                        for (var w = t < 0 ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                    h = 0, a && (v += this._zTime = w ? -U : U);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(c <= i ? 0 : -U)._zTime = c <= i ? 1 : -1, this._ts)) return this._start = f, xa(this), this.render(t, e, r);
                this._onUpdate && !e && xt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && c) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || qa(this, 1), e || t < 0 && !c || !v && !c || (xt(this, v === m ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, t.add = function add(t, e) {
            var r = this;
            if (p(e) || (e = Ia(this, e)), !(t instanceof Lt)) {
                if (tt(t)) return t.forEach(function(t) {
                    return r.add(t, e)
                }), this;
                if (n(t)) return this.addLabel(t, e);
                if (!o(t)) return this;
                t = Xt.delayedCall(0, t)
            }
            return this !== t ? Aa(this, t, e) : this
        }, t.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -B);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Xt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, t.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, t.remove = function remove(t) {
            return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (pa(this, t), t === this._recent && (this._recent = this._last), ra(this))
        }, t.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = aa(At.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, t.addLabel = function addLabel(t, e) {
            return this.labels[t] = Ia(this, e), this
        }, t.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this
        }, t.addPause = function addPause(t, e, r) {
            var i = Xt.delayedCall(0, e || O, r);
            return i.data = "isPause", this._hasPause = 1, Aa(this, i, Ia(this, t))
        }, t.removePause = function removePause(t) {
            var e = this._first;
            for (t = Ia(this, t); e;) e._start === t && "isPause" === e.data && qa(e), e = e._next
        }, t.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) qt !== i[n] && i[n].kill(t, e);
            return this
        }, t.getTweensOf = function getTweensOf(t, e) {
            for (var r, i = [], n = bt(t), a = this._first, s = p(e); a;) a instanceof Xt ? ba(a._targets, n) && (s ? (!qt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
            return i
        }, t.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r = this,
                i = Ia(r, t),
                n = e.startAt,
                a = e.onStart,
                s = e.onStartParams,
                o = Xt.to(r, ha(e, {
                    ease: "none",
                    lazy: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || U,
                    onStart: function onStart() {
                        r.pause();
                        var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                        o._dur !== t && Fa(o, t, 0, 1).render(o._time, !0, !0), a && a.apply(o, s || [])
                    }
                }));
            return o
        }, t.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, ha({
                startAt: {
                    time: Ia(this, t)
                }
            }, r))
        }, t.recent = function recent() {
            return this._recent
        }, t.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), db(this, Ia(this, t))
        }, t.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), db(this, Ia(this, t), 1)
        }, t.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + U)
        }, t.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return ra(this)
        }, t.invalidate = function invalidate() {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), t = t._next;
            return i.prototype.invalidate.call(this)
        }, t.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), ra(this)
        }, t.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = B;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Aa(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Fa(a, a === E && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (E._ts && (ea(E, wa(t, E)), d = At.frame), At.frame >= pt) {
                pt += j.autoSleep || 120;
                var e = E._first;
                if ((!e || !e._ts) && j.autoSleep && At._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || At.sleep()
                }
            }
        }, Timeline
    }(Lt);
    ha(Bt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function Nb(t, e, i, a, s, u) {
        var h, l, f, d;
        if (ft[t] && !1 !== (h = new ft[t]).init(s, h.rawVars ? e[t] : function _processVars(t, e, i, a, s) {
                if (o(t) && (t = jt(t, s, e, i, a)), !r(t) || t.style && t.nodeType || tt(t) || H(t)) return n(t) ? jt(t, s, e, i, a) : t;
                var u, h = {};
                for (u in t) h[u] = jt(t[u], s, e, i, a);
                return h
            }(e[t], a, s, u, i), i, a, u) && (i._pt = l = new ie(i._pt, s, t, 0, 1, h.render, h, 0, h.priority), i !== c))
            for (f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--;) f[h._props[d]] = l;
        return h
    }
    var qt, Yt = function _addPropTween(t, e, r, i, a, s, u, h, l) {
            o(i) && (i = i(a || 0, t, s));
            var f, d = t[e],
                p = "get" !== r ? r : o(d) ? l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
                _ = o(d) ? l ? Jt : Zt : Gt;
            if (n(i) && (~i.indexOf("random(") && (i = ab(i)), "=" === i.charAt(1) && (i = parseFloat(p) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (La(p) || 0))), p !== i) return isNaN(p * i) ? (d || e in t || L(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, d, p, _, c = new ie(this._pt, t, e, 0, 1, Ht, null, n),
                    m = 0,
                    g = 0;
                for (c.b = r, c.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = ab(i)), a && (a(_ = [r, i], t, e), r = _[0], i = _[1]), u = r.match(nt) || []; o = nt.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, c._pt = {
                    _next: c._pt,
                    p: f || 1 === g ? f : ",",
                    s: d,
                    c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                    m: h && h < 4 ? Math.round : 0
                }, m = nt.lastIndex);
                return c.c = m < i.length ? i.substring(m, i.length) : "", c.fp = s, (at.test(i) || p) && (c.e = 0), this._pt = c
            }.call(this, t, e, p, i, _, h || j.stringFilter, l)) : (f = new ie(this._pt, t, e, +p || 0, i - (p || 0), "boolean" == typeof d ? $t : Wt, 0, _), l && (f.fp = l), u && f.modifier(u, this, t), this._pt = f)
        },
        Nt = function _initTween(t, e) {
            var r, i, n, a, o, u, h, l, f, d, p, _, c, m = t.vars,
                g = m.ease,
                v = m.startAt,
                y = m.immediateRender,
                T = m.lazy,
                b = m.onUpdate,
                w = m.onUpdateParams,
                x = m.callbackScope,
                k = m.runBackwards,
                O = m.yoyoEase,
                M = m.keyframes,
                C = m.autoRevert,
                A = t._dur,
                P = t._startAt,
                D = t._targets,
                S = t.parent,
                z = S && "nested" === S.data ? S.parent._targets : D,
                F = "auto" === t._overwrite,
                R = t.timeline;
            if (!R || M && g || (g = "none"), t._ease = Rt(g, I.ease), t._yEase = O ? Ft(Rt(!0 === O ? g : O, I.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), !R) {
                if (_ = (l = D[0] ? Z(D[0]).harness : 0) && m[l.prop], r = la(m, ut), P && P.render(-1, !0).kill(), v) {
                    if (qa(t._startAt = Xt.set(D, ha({
                            data: "isStart",
                            overwrite: !1,
                            parent: S,
                            immediateRender: !0,
                            lazy: s(T),
                            startAt: null,
                            delay: 0,
                            onUpdate: b,
                            onUpdateParams: w,
                            callbackScope: x,
                            stagger: 0
                        }, v))), y)
                        if (0 < e) C || (t._startAt = 0);
                        else if (A && !(e < 0 && P)) return void(e && (t._zTime = e))
                } else if (k && A)
                    if (P) C || (t._startAt = 0);
                    else if (e && (y = !1), n = ha({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: y && s(T),
                        immediateRender: y,
                        stagger: 0,
                        parent: S
                    }, r), _ && (n[l.prop] = _), qa(t._startAt = Xt.set(D, n)), y) {
                    if (!e) return
                } else _initTween(t._startAt, U);
                for (t._pt = 0, T = A && s(T) || T && !A, i = 0; i < D.length; i++) {
                    if (h = (o = D[i])._gsap || Y(D)[i]._gsap, t._ptLookup[i] = d = {}, lt[h.id] && ht.length && da(), p = z === D ? i : z.indexOf(o), l && !1 !== (f = new l).init(o, _ || r, t, p, z) && (t._pt = a = new ie(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                            d[t] = a
                        }), f.priority && (u = 1)), !l || _)
                        for (n in r) ft[n] && (f = Nb(n, r, t, p, o, z)) ? f.priority && (u = 1) : d[n] = a = Yt.call(t, o, n, "get", r[n], p, z, 0, m.stringFilter);
                    t._op && t._op[i] && t.kill(o, t._op[i]), F && t._pt && (qt = t, E.killTweensOf(o, d, t.globalTime(0)), c = !t.parent, qt = 0), t._pt && T && (lt[h.id] = 1)
                }
                u && re(t), t._onInit && t._onInit(t)
            }
            t._from = !R && !!m.runBackwards, t._onUpdate = b, t._initted = (!t._op || t._pt) && !c
        },
        jt = function _parseFuncOrString(t, e, r, i, a) {
            return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? ab(t) : t
        },
        Ut = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Vt = (Ut + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Xt = function(S) {
            function Tween(t, e, i, n) {
                var a;
                "number" == typeof e && (i.duration = e, e = i, i = null);
                var o, h, l, f, d, _, c, m, g = (a = S.call(this, n ? e : ma(e), i) || this).vars,
                    v = g.duration,
                    y = g.delay,
                    T = g.immediateRender,
                    b = g.stagger,
                    w = g.overwrite,
                    x = g.keyframes,
                    k = g.defaults,
                    C = g.scrollTrigger,
                    A = g.yoyoEase,
                    P = a.parent,
                    D = (tt(t) || H(t) ? p(t[0]) : "length" in e) ? [t] : bt(t);
                if (a._targets = D.length ? Y(D) : M("GSAP target " + t + " not found. https://greensock.com", !j.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = w, x || b || u(v) || u(y)) {
                    if (e = a.vars, (o = a.timeline = new Bt({
                            data: "nested",
                            defaults: k || {}
                        })).kill(), o.parent = _assertThisInitialized(a), x) ha(o.vars.defaults, {
                        ease: "none"
                    }), x.forEach(function(t) {
                        return o.to(D, t, ">")
                    });
                    else {
                        if (f = D.length, c = b ? Sa(b) : O, r(b))
                            for (d in b) ~Ut.indexOf(d) && ((m = m || {})[d] = b[d]);
                        for (h = 0; h < f; h++) {
                            for (d in l = {}, e) Vt.indexOf(d) < 0 && (l[d] = e[d]);
                            l.stagger = 0, A && (l.yoyoEase = A), m && mt(l, m), _ = D[h], l.duration = +jt(v, _assertThisInitialized(a), h, _, D), l.delay = (+jt(y, _assertThisInitialized(a), h, _, D) || 0) - a._delay, !b && 1 === f && l.delay && (a._delay = y = l.delay, a._start += y, l.delay = 0), o.to(_, l, c(h, _, D))
                        }
                        o.duration() ? v = y = 0 : a.timeline = 0
                    }
                    v || a.duration(v = o.duration())
                } else a.timeline = 0;
                return !0 === w && (qt = _assertThisInitialized(a), E.killTweensOf(D), qt = 0), P && za(P, _assertThisInitialized(a)), (T || !v && !x && a._start === aa(P._time) && s(T) && function _hasNoPausedAncestors(t) {
                    return !t || t._ts && _hasNoPausedAncestors(t.parent)
                }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -U, a.render(Math.max(0, -y))), C && Ba(_assertThisInitialized(a), C), a
            }
            _inheritsLoose(Tween, S);
            var t = Tween.prototype;
            return t.render = function render(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = this._time,
                    p = this._tDur,
                    _ = this._dur,
                    c = p - U < t && 0 <= t ? p : t < U ? 0 : t;
                if (_) {
                    if (c !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {
                        if (i = c, l = this.timeline, this._repeat) {
                            if (s = _ + this._rDelay, i = aa(c % s), c === p ? (a = this._repeat, i = _) : ((a = ~~(c / s)) && a === c / s && (i = _, a--), _ < i && (i = _)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = _ - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this;
                            a !== o && (l && this._yEase && Bb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(aa(s * a), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Ca(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
                            if (_ !== this._dur) return this.render(t, e, r)
                        }
                        for (this._tTime = c, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / _), this._from && (this.ratio = h = 1 - h), !i || d || e || xt(this, "onStart"), n = this._pt; n;) n.r(h, n.d), n = n._next;
                        l && l.render(t < 0 ? t : !i && u ? -U : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), xt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && xt(this, "onRepeat"), c !== this._tDur && c || this._tTime !== c || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && _ || !(c === this._tDur && 0 < this._ts || !c && this._ts < 0) || qa(this, 1), e || t < 0 && !d || !c && !d || (xt(this, c === p ? "onComplete" : "onReverseComplete", !0), !this._prom || c < p && 0 < this.timeScale() || this._prom()))
                    }
                } else ! function _renderZeroDurationTween(t, e, r, i) {
                    var n, a, s = t.ratio,
                        o = e < 0 || !e && s && !t._start && t._zTime > U && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1,
                        u = t._rDelay,
                        h = 0;
                    if (u && t._repeat && (h = yt(0, t._tDur, e), gt(h, u) !== (a = gt(t._tTime, u)) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || i || t._zTime === U || !e && t._zTime) {
                        if (!t._initted && Ca(t, e, i, r)) return;
                        for (a = t._zTime, t._zTime = e || (r ? U : 0), r = r || e && !a, t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = h, r || xt(t, "onStart"), n = t._pt; n;) n.r(o, n.d), n = n._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && xt(t, "onUpdate"), h && t._repeat && !r && t.parent && xt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && qa(t, 1), r || (xt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, r);
                return this
            }, t.targets = function targets() {
                return this._targets
            }, t.invalidate = function invalidate() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), S.prototype.invalidate.call(this)
            }, t.kill = function kill(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return fb(this);
                if (this.timeline) {
                    var r = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, qt && !0 !== qt.vars.overwrite)._first || fb(this), this.parent && r !== this.timeline.totalDuration() && Fa(this, this._dur * this.timeline._tDur / r, 0, 1), this
                }
                var i, a, s, o, u, h, l, f = this._targets,
                    d = t ? bt(t) : f,
                    p = this._ptLookup,
                    c = this._pt;
                if ((!e || "all" === e) && function _arraysMatch(t, e) {
                        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                        return r < 0
                    }(f, d)) return "all" === e && (this._pt = 0), fb(this);
                for (i = this._op = this._op || [], "all" !== e && (n(e) && (u = {}, _(e, function(t) {
                        return u[t] = 1
                    }), e = u), e = function _addAliasesToVars(t, e) {
                        var r, i, n, a, s = t[0] ? Z(t[0]).harness : 0,
                            o = s && s.aliases;
                        if (!o) return e;
                        for (i in r = mt({}, e), o)
                            if (i in r)
                                for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                        return r
                    }(f, e)), l = f.length; l--;)
                    if (~d.indexOf(f[l]))
                        for (u in a = p[l], "all" === e ? (i[l] = e, o = a, s = {}) : (s = i[l] = i[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || pa(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
                return this._initted && !this._pt && c && fb(this), this
            }, Tween.to = function to(t, e, r) {
                return new Tween(t, e, r)
            }, Tween.from = function from(t, e) {
                return new Tween(t, ca(arguments, 1))
            }, Tween.delayedCall = function delayedCall(t, e, r, i) {
                return new Tween(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: i
                })
            }, Tween.fromTo = function fromTo(t, e, r) {
                return new Tween(t, ca(arguments, 2))
            }, Tween.set = function set(t, e) {
                return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
            }, Tween.killTweensOf = function killTweensOf(t, e, r) {
                return E.killTweensOf(t, e, r)
            }, Tween
        }(Lt);
    ha(Xt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), _("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Xt[r] = function() {
            var t = new Bt,
                e = Tt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function Yb(t, e, r) {
        return t.setAttribute(e, r)
    }

    function ec(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Gt = function _setterPlain(t, e, r) {
            return t[e] = r
        },
        Zt = function _setterFunc(t, e, r) {
            return t[e](r)
        },
        Jt = function _setterFuncWithParam(t, e, r, i) {
            return t[e](i.fp, r)
        },
        Qt = function _getSetter(t, e) {
            return o(t[e]) ? Zt : q(t[e]) && t.setAttribute ? Yb : Gt
        },
        Wt = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        },
        $t = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        Ht = function _renderComplexString(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        Kt = function _renderPropTweens(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        te = function _addPluginModifier(t, e, r, i) {
            for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
        },
        ee = function _killPropTweensOf(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? pa(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        re = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        ie = (PropTween.prototype.modifier = function modifier(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = ec, this.m = t, this.mt = r, this.tween = e
        }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Wt, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    _(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ut[t] = 1
    }), ot.TweenMax = ot.TweenLite = Xt, ot.TimelineLite = ot.TimelineMax = Bt, E = new Bt({
        sortChildren: !1,
        defaults: I,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), j.stringFilter = qb;
    var ne = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name,
                        r = o(t),
                        i = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        n = {
                            init: O,
                            render: Kt,
                            add: Yt,
                            kill: ee,
                            modifier: te,
                            rawVars: 0
                        },
                        a = {
                            targetTest: 0,
                            get: 0,
                            getSetter: Qt,
                            aliases: {},
                            register: 0
                        };
                    if (Pt(), t !== i) {
                        if (ft[e]) return;
                        ha(i, ha(la(t, n), a)), mt(i.prototype, mt(n, la(t, a))), ft[i.prop = e] = i, t.targetTest && (_t.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    N(e, i), t.register && t.register(ae, i, ie)
                }(t)
            })
        },
        timeline: function timeline(t) {
            return new Bt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return E.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, r) {
            n(i) && (i = bt(i)[0]);
            var a = Z(i || {}).get,
                s = e ? ga : fa;
            return "native" === e && (e = ""), i ? t ? s((ft[t] && ft[t].get || a)(i, t, e, r)) : function(t, e, r) {
                return s((ft[t] && ft[t].get || a)(i, t, e, r))
            } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = bt(r)).length) {
                var n = r.map(function(t) {
                        return ae.quickSetter(t, e, i)
                    }),
                    a = n.length;
                return function(t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = ft[e],
                o = Z(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && Kt(1, c)
                } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        isTweening: function isTweening(t) {
            return 0 < E.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Rt(t.ease, I.ease)), ka(I, t || {})
        },
        config: function config(t) {
            return ka(j, t || {})
        },
        registerEffect: function registerEffect(t) {
            var n = t.name,
                i = t.effect,
                e = t.plugins,
                a = t.defaults,
                s = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ft[t] && !ot[t] && M(n + " effect requires " + t + " plugin.")
            }), dt[n] = function(t, e, r) {
                return i(bt(t), ha(e || {}, a), r)
            }, s && (Bt.prototype[n] = function(t, e, i) {
                return this.add(dt[n](t, r(e) ? e : (i = e) && {}, this), i)
            })
        },
        registerEase: function registerEase(t, e) {
            Dt[t] = Rt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Rt(t, e) : Dt
        },
        getById: function getById(t) {
            return E.getById(t)
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Bt(t);
            for (n.smoothChildTiming = s(t.smoothChildTiming), E.remove(n), n._dp = 0, n._time = n._tTime = E._time, r = E._first; r;) i = r._next, !e && !r._dur && r instanceof Xt && r.vars.onComplete === r._targets[0] || Aa(n, r, r._start - r._delay), r = i;
            return Aa(E, n, 0), n
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return tt(e) ? Za(e, wrap(0, e.length), t) : Ja(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return tt(e) ? Za(e, wrapYoyo(0, e.length - 1), t) : Ja(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: Sa,
            random: Va,
            snap: Ua,
            normalize: function normalize(t, e, r) {
                return wt(t, e, 0, 1, r)
            },
            getUnit: La,
            clamp: function clamp(e, r, t) {
                return Ja(t, function(t) {
                    return yt(e, r, t)
                })
            },
            splitColor: lb,
            toArray: bt,
            mapRange: wt,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || La(t))
                }
            },
            interpolate: function interpolate(e, r, t, i) {
                var a = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                };
                if (!a) {
                    var s, o, u, h, l, f = n(e),
                        d = {};
                    if (!0 === t && (i = 1) && (t = null), f) e = {
                        p: e
                    }, r = {
                        p: r
                    };
                    else if (tt(e) && !tt(r)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
                        h--, a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = r
                    } else i || (e = mt(tt(e) ? [] : {}, e));
                    if (!u) {
                        for (s in r) Yt.call(d, e, s, "get", r[s]);
                        a = function func(t) {
                            return Kt(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return Ja(t, a)
            },
            shuffle: Ra
        },
        install: K,
        effects: dt,
        ticker: At,
        updateRoot: Bt.updateRoot,
        plugins: ft,
        globalTimeline: E,
        core: {
            PropTween: ie,
            globals: N,
            Tween: Xt,
            Timeline: Bt,
            Animation: Lt,
            getCache: Z,
            _removeLinkedListItem: pa
        }
    };
    _("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return ne[t] = Xt[t]
    }), At.add(Bt.updateRoot), c = ne.to({}, {
        duration: 0
    });

    function ic(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function kc(t, a) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (n(i) && (e = {}, _(i, function(t) {
                            return e[t] = 1
                        }), i = e), a) {
                        for (r in e = {}, i) e[r] = a(i[r]);
                        i = e
                    }! function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = ic(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, i)
                }
            }
        }
    }
    var ae = ne.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s;
            for (a in e)(s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a)
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
        }
    }, kc("roundProps", Ta), kc("modifiers"), kc("snap", Ua)) || ne;
    Xt.version = Bt.version = ae.version = "3.5.1", f = 1, t() && Pt();

    function Vc(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function Wc(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function Xc(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function Yc(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function Zc(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function $c(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function _c(t, e, r) {
        return t.style[e] = r
    }

    function ad(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function bd(t, e, r) {
        return t._gsap[e] = r
    }

    function cd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function dd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function ed(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function id(t, e) {
        var r = oe.createElementNS ? oe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : oe.createElement(t);
        return r.style ? r : oe.createElement(t)
    }

    function jd(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Ie, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && jd(t, Ue(e) || e, 1) || ""
    }

    function md() {
        (function _windowExists() {
            return "undefined" != typeof window
        })() && window.document && (se = window, oe = se.document, ue = oe.documentElement, le = id("div") || {
            style: {}
        }, fe = id("div"), Ye = Ue(Ye), Ne = Ye + "Origin", le.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", pe = !!Ue("perspective"), he = 1)
    }

    function nd(t) {
        var e, r = id("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText;
        if (ue.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = nd
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), ue.removeChild(r), this.style.cssText = a, e
    }

    function od(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function pd(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = nd.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === nd || (r = nd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +od(e, ["x", "cx", "x1"]) || 0,
            y: +od(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function qd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !pd(t))
    }

    function rd(t, e) {
        if (e) {
            var r = t.style;
            e in ze && e !== Ne && (e = Ye), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Ie, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function sd(t, e, r, i, n, a) {
        var s = new ie(t._pt, e, r, 0, 1, a ? $c : Zc);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function ud(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = le.style,
            f = Le.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            _ = "px" === i,
            c = "%" === i;
        return i === h || !u || Ve[i] || Ve[h] ? u : ("px" === h || _ || (u = ud(t, e, r, "px")), o = t.getCTM && qd(t), c && (ze[e] || ~e.indexOf("adius")) ? aa(u / (o ? t.getBBox()[f ? "width" : "height"] : t[p]) * 100) : (l[f ? "width" : "height"] = 100 + (_ ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== oe && a.appendChild || (a = oe.body), (s = a._gsap) && c && s.width && f && s.time === At.time ? aa(u / s.width * 100) : (!c && "%" !== h || (l.position = jd(t, "position")), a === t && (l.position = "static"), a.appendChild(le), n = le[p], a.removeChild(le), l.position = "absolute", f && c && ((s = Z(a)).time = At.time, s.width = a[p]), aa(_ ? n * u / 100 : n && u ? 100 / n * u : 0))))
    }

    function vd(t, e, r, i) {
        var n;
        return he || md(), e in qe && "transform" !== e && ~(e = qe[e]).indexOf(",") && (e = e.split(",")[0]), ze[e] && "transform" !== e ? (n = Qe(t, i), n = "transformOrigin" !== e ? n[e] : We(jd(t, Ne)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ge[e] && Ge[e](t, e, r) || jd(t, e) || $(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").indexOf(" ") ? ud(t, e, n, r) + r : n
    }

    function wd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Ue(e, t, 1),
                a = n && jd(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = jd(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, p, _, c, m, g, v = new ie(this._pt, t.style, e, 0, 1, Ht),
            y = 0,
            T = 0;
        if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = jd(t, e) || i, t.style[e] = r), qb(s = [r, i]), i = s[1], u = (r = s[0]).match(it) || [], (i.match(it) || []).length) {
            for (; o = it.exec(i);) d = o[0], _ = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (l = 1), d !== (f = u[T++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), p = parseFloat(d), c = d.substr((p + "").length), y = it.lastIndex - c.length, c || (c = c || j.units[e] || m, y === i.length && (i += c, v.e += c)), m !== c && (h = ud(t, e, f, c) || 0), v._pt = {
                _next: v._pt,
                p: _ || 1 === T ? _ : ",",
                s: h,
                c: g ? g * p : p - h,
                m: l && l < 4 ? Math.round : 0
            });
            v.c = y < i.length ? i.substring(y, i.length) : ""
        } else v.r = "display" === e && "none" === i ? $c : Zc;
        return at.test(i) && (v.e = 0), this._pt = v
    }

    function yd(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Xe[r] || r, e[1] = Xe[i] || i, e.join(" ")
    }

    function zd(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], ze[r] && (i = 1, r = "transformOrigin" === r ? Ne : Ye), rd(a, r);
            i && (rd(a, Ye), u && (u.svg && a.removeAttribute("transform"), Qe(a, 1), u.uncache = 1))
        }
    }

    function Dd(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function Ed(t) {
        var e = jd(t, Ye);
        return Dd(e) ? Ze : e.substr(7).match(rt).map(aa)
    }

    function Fd(t, e) {
        var r, i, n, a, s = t._gsap || Z(t),
            o = t.style,
            u = Ed(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ze : u : (u !== Ze || t.offsetParent || t === ue || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, ue.appendChild(t)), u = Ed(t), n ? o.display = n : rd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : ue.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function Gd(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || Fd(t, !0),
            f = h.xOrigin || 0,
            d = h.yOrigin || 0,
            p = h.xOffset || 0,
            _ = h.yOffset || 0,
            c = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            T = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
        r ? l !== Ze && (o = c * v - m * g) && (u = w * (-m / o) + x * (c / o) - (c * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = pd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = p + (y * c + T * g) - y, h.yOffset = _ + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Ne] = "0px 0px", a && (sd(a, h, "xOrigin", f, w), sd(a, h, "yOrigin", d, x), sd(a, h, "xOffset", p, h.xOffset), sd(a, h, "yOffset", _, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function Jd(t, e, r) {
        var i = La(e);
        return aa(parseFloat(e) + parseFloat(ud(t, "x", r + "px", i))) + i
    }

    function Qd(t, e, r, i, a, s) {
        var o, u, h = 360,
            l = n(a),
            f = parseFloat(a) * (l && ~a.indexOf("rad") ? Fe : 1),
            d = s ? f * s : f - i,
            p = i + d + "deg";
        return l && ("short" === (o = a.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === o && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === o && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ie(t._pt, e, r, i, d, Wc), u.e = p, u.u = "deg", t._props.push(r), u
    }

    function Rd(t, e, r) {
        var i, n, a, s, o, u, h, l = fe.style,
            f = r._gsap;
        for (n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", l[Ye] = e, oe.body.appendChild(fe), i = Qe(fe, 1), ze)(a = f[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = La(a) !== (h = La(s)) ? ud(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ie(t._pt, f, n, o, u - o, Vc), t._pt.u = h || 0, t._props.push(n));
        oe.body.removeChild(fe)
    }
    var se, oe, ue, he, le, fe, de, pe, _e = Dt.Power0,
        ce = Dt.Power1,
        me = Dt.Power2,
        ge = Dt.Power3,
        ve = Dt.Power4,
        ye = Dt.Linear,
        Te = Dt.Quad,
        be = Dt.Cubic,
        we = Dt.Quart,
        xe = Dt.Quint,
        ke = Dt.Strong,
        Oe = Dt.Elastic,
        Me = Dt.Back,
        Ce = Dt.SteppedEase,
        Ae = Dt.Bounce,
        Pe = Dt.Sine,
        De = Dt.Expo,
        Se = Dt.Circ,
        ze = {},
        Fe = 180 / Math.PI,
        Re = Math.PI / 180,
        Ee = Math.atan2,
        Ie = /([A-Z])/g,
        Le = /(?:left|right|width|margin|padding|x)/i,
        Be = /[\s,\(]\S/,
        qe = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Ye = "transform",
        Ne = Ye + "Origin",
        je = "O,Moz,ms,Ms,Webkit".split(","),
        Ue = function _checkPropPrefix(t, e, r) {
            var i = (e || le).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(je[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? je[n] : "") + t
        },
        Ve = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Xe = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Ge = {
            clearProps: function clearProps(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new ie(t._pt, e, r, 0, 0, zd);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        },
        Ze = [1, 0, 0, 1, 0, 0],
        Je = {},
        Qe = function _parseTransform(t, e) {
            var r = t._gsap || new It(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, d, p, _, c, m, g, v, y, T, b, w, x, k, O, M, C, A, P, D, S, z, F, R, E = t.style,
                I = r.scaleX < 0,
                L = "deg",
                B = jd(t, Ne) || "0";
            return i = n = a = u = h = l = f = d = p = 0, s = o = 1, r.svg = !(!t.getCTM || !qd(t)), m = Fd(t, r.svg), r.svg && (M = !r.uncache && t.getAttribute("data-svg-origin"), Gd(t, M || B, !!M || r.originIsAbsolute, !1 !== r.smooth, m)), _ = r.xOrigin || 0, c = r.yOrigin || 0, m !== Ze && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? Ee(b, T) * Fe : 0, (f = w || x ? Ee(w, x) * Fe + u : 0) && (o *= Math.cos(f * Re)), r.svg && (i -= _ - (_ * T + c * w), n -= c - (_ * b + c * x))) : (R = m[6], z = m[7], P = m[8], D = m[9], S = m[10], F = m[11], i = m[12], n = m[13], a = m[14], h = (g = Ee(R, S)) * Fe, g && (M = k * (v = Math.cos(-g)) + P * (y = Math.sin(-g)), C = O * v + D * y, A = R * v + S * y, P = k * -y + P * v, D = O * -y + D * v, S = R * -y + S * v, F = z * -y + F * v, k = M, O = C, R = A), l = (g = Ee(-w, S)) * Fe, g && (v = Math.cos(-g), F = x * (y = Math.sin(-g)) + F * v, T = M = T * v - P * y, b = C = b * v - D * y, w = A = w * v - S * y), u = (g = Ee(b, T)) * Fe, g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), C = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = M, k = C), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = aa(Math.sqrt(T * T + b * b + w * w)), o = aa(Math.sqrt(O * O + R * R)), g = Ee(k, O), f = 2e-4 < Math.abs(g) ? g * Fe : 0, p = F ? 1 / (F < 0 ? -F : F) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Dd(jd(t, Ye)), M && t.setAttribute("transform", M))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", r.z = a + "px", r.scaleX = aa(s), r.scaleY = aa(o), r.rotation = aa(u) + L, r.rotationX = aa(h) + L, r.rotationY = aa(l) + L, r.skewX = f + L, r.skewY = d + L, r.transformPerspective = p + "px", (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (E[Ne] = We(B)), r.xOffset = r.yOffset = 0, r.force3D = j.force3D, r.renderTransform = r.svg ? rr : pe ? er : $e, r.uncache = 0, r
        },
        We = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        $e = function _renderNon3DTransforms(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, er(t, e)
        },
        He = "0deg",
        Ke = "0px",
        tr = ") ",
        er = function _renderCSSTransforms(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                d = r.skewY,
                p = r.scaleX,
                _ = r.scaleY,
                c = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== He || h !== He)) {
                var b, w = parseFloat(h) * Re,
                    x = Math.sin(w),
                    k = Math.cos(w);
                w = parseFloat(l) * Re, b = Math.cos(w), a = Jd(g, a, x * b * -v), s = Jd(g, s, -Math.sin(w) * -v), o = Jd(g, o, k * b * -v + v)
            }
            c !== Ke && (y += "perspective(" + c + tr), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Ke && s === Ke && o === Ke || (y += o !== Ke || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + tr), u !== He && (y += "rotate(" + u + tr), h !== He && (y += "rotateY(" + h + tr), l !== He && (y += "rotateX(" + l + tr), f === He && d === He || (y += "skew(" + f + ", " + d + tr), 1 === p && 1 === _ || (y += "scale(" + p + ", " + _ + tr), g.style[Ye] = y || "translate(0, 0)"
        },
        rr = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                d = o.rotation,
                p = o.skewX,
                _ = o.skewY,
                c = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                k = parseFloat(f);
            d = parseFloat(d), p = parseFloat(p), (_ = parseFloat(_)) && (p += _ = parseFloat(_), d += _), d || p ? (d *= Re, p *= Re, r = Math.cos(d) * c, i = Math.sin(d) * c, n = Math.sin(d - p) * -m, a = Math.cos(d - p) * m, p && (_ *= Re, s = Math.tan(p - _), n *= s = Math.sqrt(1 + s * s), a *= s, _ && (s = Math.tan(_), r *= s = Math.sqrt(1 + s * s), i *= s)), r = aa(r), i = aa(i), n = aa(n), a = aa(a)) : (r = c, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = ud(g, "x", l, "px"), k = ud(g, "y", f, "px")), (v || y || T || b) && (x = aa(x + v - (v * r + y * n) + T), k = aa(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = aa(x + u / 100 * s.width), k = aa(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[Ye] = s)
        };
    _("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return r < 2 ? e + t : "border" + t + e
            });
        Ge[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return vd(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n)
        }
    });
    var ir, nr, ar, sr = {
        name: "css",
        register: md,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, r, i, n) {
            var a, s, o, u, h, l, f, d, p, _, c, m, g, v, y, T = this._props,
                b = t.style;
            for (f in he || md(), e)
                if ("autoRound" !== f && (s = e[f], !ft[f] || !Nb(f, e, r, i, t, n)))
                    if (h = typeof s, l = Ge[f], "function" === h && (h = typeof(s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = ab(s)), l) l(this, t, f, s, r) && (y = 1);
                    else if ("--" === f.substr(0, 2)) this.add(b, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, n, 0, 0, f);
            else if ("undefined" !== h) {
                if (a = vd(t, f), u = parseFloat(a), (_ = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in qe && ("autoAlpha" === f && (1 === u && "hidden" === vd(t, "visibility") && o && (u = 0), sd(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = qe[f]).indexOf(",") && (f = f.split(",")[0])), c = f in ze)
                    if (m || ((g = t._gsap).renderTransform || Qe(t), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ie(this._pt, b, Ye, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new ie(this._pt, g, "scaleY", g.scaleY, _ ? _ * o : o - g.scaleY), T.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            s = yd(s), g.svg ? Gd(t, s, 0, v, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && sd(this, g, "zOrigin", g.zOrigin, p), sd(this, b, f, We(a), We(s)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            Gd(t, s, 1, v, 0, this);
                            continue
                        }
                        if (f in Je) {
                            Qd(this, g, f, u, s, _);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            sd(this, g, "smooth", g.smooth, s);
                            continue
                        }
                        if ("force3D" === f) {
                            g[f] = s;
                            continue
                        }
                        if ("transform" === f) {
                            Rd(this, s, t);
                            continue
                        }
                    }
                else f in b || (f = Ue(f) || f);
                if (c || (o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b) o = o || 0, (d = (a + "").substr((u + "").length)) !== (p = La(s) || (f in j.units ? j.units[f] : d)) && (u = ud(t, f, a, p)), this._pt = new ie(this._pt, c ? g : b, f, u, _ ? _ * o : o - u, "px" !== p || !1 === e.autoRound || c ? Vc : Yc), this._pt.u = p || 0, d !== p && (this._pt.b = a, this._pt.r = Xc);
                else if (f in b) wd.call(this, t, f, a, s);
                else {
                    if (!(f in t)) {
                        L(f, s);
                        continue
                    }
                    this.add(t, f, t[f], s, i, n)
                }
                T.push(f)
            }
            y && re(this)
        },
        get: vd,
        aliases: qe,
        getSetter: function getSetter(t, e, r) {
            var i = qe[e];
            return i && i.indexOf(",") < 0 && (e = i), e in ze && e !== Ne && (t._gsap.x || vd(t, "x")) ? r && de === r ? "scale" === e ? cd : bd : (de = r || {}) && ("scale" === e ? dd : ed) : t.style && !q(t.style[e]) ? _c : ~e.indexOf("-") ? ad : Qt(t, e)
        },
        core: {
            _removeProperty: rd,
            _getMatrix: Fd
        }
    };
    ae.utils.checkPrefix = Ue, ar = _((ir = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (nr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        ze[t] = 1
    }), _(nr, function(t) {
        j.units[t] = "deg", Je[t] = 1
    }), qe[ar[13]] = ir + "," + nr, _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        qe[e[1]] = ar[e[0]]
    }), _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        j.units[t] = "px"
    }), ae.registerPlugin(sr);
    var or = ae.registerPlugin(sr) || ae,
        ur = or.core.Tween;
    e.Back = Me, e.Bounce = Ae, e.CSSPlugin = sr, e.Circ = Se, e.Cubic = be, e.Elastic = Oe, e.Expo = De, e.Linear = ye, e.Power0 = _e, e.Power1 = ce, e.Power2 = me, e.Power3 = ge, e.Power4 = ve, e.Quad = Te, e.Quart = we, e.Quint = xe, e.Sine = Pe, e.SteppedEase = Ce, e.Strong = ke, e.TimelineLite = Bt, e.TimelineMax = Bt, e.TweenLite = Xt, e.TweenMax = ur, e.default = or, e.gsap = or;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

;
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});

;
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Splitting = t()
}(this, function() {
    "use strict"
    var u = document,
        l = u.createTextNode.bind(u)

    function d(n, t, e) {
        n.style.setProperty(t, e)
    }

    function f(n, t) {
        return n.appendChild(t)
    }

    function p(n, t, e, r) {
        var i = u.createElement("span")
        return t && (i.className = t), e && (!r && i.setAttribute("data-" + t, e), i.textContent = e), n && f(n, i) || i
    }

    function h(n, t) {
        return n.getAttribute("data-" + t)
    }

    function m(n, t) {
        return n && 0 != n.length ? n.nodeName ? [n] : [].slice.call(n[0].nodeName ? n : (t || u).querySelectorAll(n)) : []
    }

    function o(n) {
        for (var t = []; n--;) t[n] = []
        return t
    }

    function g(n, t) {
        n && n.some(t)
    }

    function c(t) {
        return function(n) {
            return t[n]
        }
    }
    var a = {}

    function n(n, t, e, r) {
        return {
            by: n,
            depends: t,
            key: e,
            split: r
        }
    }

    function e(n) {
        return function t(e, n, r) {
            var i = r.indexOf(e)
            if (-1 == i) r.unshift(e), g(a[e].depends, function(n) {
                t(n, e, r)
            })
            else {
                var u = r.indexOf(n)
                r.splice(i, 1), r.splice(u, 0, e)
            }
            return r
        }(n, 0, []).map(c(a))
    }

    function t(n) {
        a[n.by] = n
    }

    function v(n, r, i, u, o) {
        n.normalize()
        var c = [],
            a = document.createDocumentFragment()
        u && c.push(n.previousSibling)
        var s = []
        return m(n.childNodes).some(function(n) {
            if (!n.tagName || n.hasChildNodes()) {
                if (n.childNodes && n.childNodes.length) return s.push(n), void c.push.apply(c, v(n, r, i, u, o))
                var t = n.wholeText || "",
                    e = t.trim()
                e.length && (" " === t[0] && s.push(l(" ")), g(e.split(i), function(n, t) {
                    t && o && s.push(p(a, "whitespace", " ", o))
                    var e = p(a, r, n)
                    c.push(e), s.push(e)
                }), " " === t[t.length - 1] && s.push(l(" ")))
            } else s.push(n)
        }), g(s, function(n) {
            f(a, n)
        }), n.innerHTML = "", f(n, a), c
    }
    var s = 0
    var i = "words",
        r = n(i, s, "word", function(n) {
            return v(n, "word", /\s+/, 0, 1)
        }),
        y = "chars",
        w = n(y, [i], "char", function(n, e, t) {
            var r = []
            return g(t[i], function(n, t) {
                r.push.apply(r, v(n, "char", "", e.whitespace && t))
            }), r
        })

    function b(t) {
        var f = (t = t || {}).key
        return m(t.target || "[data-splitting]").map(function(a) {
            var s = a["🍌"]
            if (!t.force && s) return s
            s = a["🍌"] = {
                el: a
            }
            var n = e(t.by || h(a, "splitting") || y),
                l = function(n, t) {
                    for (var e in t) n[e] = t[e]
                    return n
                }({}, t)
            return g(n, function(n) {
                if (n.split) {
                    var t = n.by,
                        e = (f ? "-" + f : "") + n.key,
                        r = n.split(a, l, s)
                    e && (i = a, c = (o = "--" + e) + "-index", g(u = r, function(n, t) {
                        Array.isArray(n) ? g(n, function(n) {
                            d(n, c, t)
                        }) : d(n, c, t)
                    }), d(i, o + "-total", u.length)), s[t] = r, a.classList.add(t)
                }
                var i, u, o, c
            }), a.classList.add("splitting"), s
        })
    }

    function N(n, t, e) {
        var r = m(t.matching || n.children, n),
            i = {}
        return g(r, function(n) {
            var t = Math.round(n[e]);
            (i[t] || (i[t] = [])).push(n)
        }), Object.keys(i).map(Number).sort(x).map(c(i))
    }

    function x(n, t) {
        return n - t
    }
    b.html = function(n) {
        var t = (n = n || {}).target = p()
        return t.innerHTML = n.content, b(n), t.outerHTML
    }, b.add = t
    var T = n("lines", [i], "line", function(n, t, e) {
            return N(n, {
                matching: e[i]
            }, "offsetTop")
        }),
        L = n("items", s, "item", function(n, t) {
            return m(t.matching || n.children, n)
        }),
        k = n("rows", s, "row", function(n, t) {
            return N(n, t, "offsetTop")
        }),
        A = n("cols", s, "col", function(n, t) {
            return N(n, t, "offsetLeft")
        }),
        C = n("grid", ["rows", "cols"]),
        M = "layout",
        S = n(M, s, s, function(n, t) {
            var e = t.rows = +(t.rows || h(n, "rows") || 1),
                r = t.columns = +(t.columns || h(n, "columns") || 1)
            if (t.image = t.image || h(n, "image") || n.currentSrc || n.src, t.image) {
                var i = m("img", n)[0]
                t.image = i && (i.currentSrc || i.src)
            }
            t.image && d(n, "background-image", "url(" + t.image + ")")
            for (var u = e * r, o = [], c = p(s, "cell-grid"); u--;) {
                var a = p(c, "cell")
                p(a, "cell-inner"), o.push(a)
            }
            return f(n, c), o
        }),
        H = n("cellRows", [M], "row", function(n, t, e) {
            var r = t.rows,
                i = o(r)
            return g(e[M], function(n, t, e) {
                i[Math.floor(t / (e.length / r))].push(n)
            }), i
        }),
        O = n("cellColumns", [M], "col", function(n, t, e) {
            var r = t.columns,
                i = o(r)
            return g(e[M], function(n, t) {
                i[t % r].push(n)
            }), i
        }),
        j = n("cells", ["cellRows", "cellColumns"], "cell", function(n, t, e) {
            return e[M]
        })
    return t(r), t(w), t(T), t(L), t(k), t(A), t(C), t(S), t(H), t(O), t(j), b
})

;
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).LocomotiveScroll = e()
}(this, (function() {
    "use strict";

    function t(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function e(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
        }
    }

    function i(t, i, s) {
        return i && e(t.prototype, i), s && e(t, s), t
    }

    function s(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function n(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, s)
        }
        return i
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(i), !0).forEach((function(e) {
                s(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
        }
        return t
    }

    function l(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && a(t, e)
    }

    function r(t) {
        return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function h(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? c(t) : e
    }

    function d(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, s = r(t);
            if (e) {
                var n = r(this).constructor;
                i = Reflect.construct(s, arguments, n)
            } else i = s.apply(this, arguments);
            return h(this, i)
        }
    }

    function u(t, e, i) {
        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var s = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)););
                return t
            }(t, e);
            if (s) {
                var n = Object.getOwnPropertyDescriptor(s, e);
                return n.get ? n.get.call(i) : n.value
            }
        })(t, e, i || t)
    }

    function f(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var i = [],
                s = !0,
                n = !1,
                o = void 0;
            try {
                for (var l, r = t[Symbol.iterator](); !(s = (l = r.next()).done) && (i.push(l.value), !e || i.length !== e); s = !0);
            } catch (t) {
                n = !0, o = t
            } finally {
                try {
                    s || null == r.return || r.return()
                } finally {
                    if (n) throw o
                }
            }
            return i
        }(t, e) || m(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function p(t) {
        return function(t) {
            if (Array.isArray(t)) return v(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || m(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(t, e) {
        if (t) {
            if ("string" == typeof t) return v(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? v(t, e) : void 0
        }
    }

    function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
        return s
    }
    var y = {
            el: document,
            name: "scroll",
            offset: [0, 0],
            repeat: !1,
            smooth: !1,
            initPosition: {
                x: 0,
                y: 0
            },
            direction: "vertical",
            gestureDirection: "vertical",
            reloadOnContextChange: !1,
            lerp: .1,
            class: "is-inview",
            scrollbarContainer: !1,
            scrollbarClass: "c-scrollbar",
            scrollingClass: "has-scroll-scrolling",
            draggingClass: "has-scroll-dragging",
            smoothClass: "has-scroll-smooth",
            initClass: "has-scroll-init",
            getSpeed: !1,
            getDirection: !1,
            scrollFromAnywhere: !1,
            multiplier: 1,
            firefoxMultiplier: 50,
            touchMultiplier: 2,
            resetNativeScroll: !0,
            tablet: {
                smooth: !1,
                direction: "vertical",
                gestureDirection: "vertical",
                breakpoint: 1024
            },
            smartphone: {
                smooth: !1,
                direction: "vertical",
                gestureDirection: "vertical"
            }
        },
        b = function() {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e), Object.assign(this, y, i), this.smartphone = y.smartphone, i.smartphone && Object.assign(this.smartphone, i.smartphone), this.tablet = y.tablet, i.tablet && Object.assign(this.tablet, i.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2
                }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                    scroll: {
                        x: 0,
                        y: 0
                    },
                    limit: {
                        x: this.html.offsetWidth,
                        y: this.html.offsetHeight
                    },
                    currentElements: this.currentElements
                }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
            }
            return i(e, [{
                key: "init",
                value: function() {
                    this.initEvents()
                }
            }, {
                key: "checkScroll",
                value: function() {
                    this.dispatchScroll()
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.resizeTick || (this.resizeTick = !0, requestAnimationFrame((function() {
                        t.resize(), t.resizeTick = !1
                    })))
                }
            }, {
                key: "resize",
                value: function() {}
            }, {
                key: "checkContext",
                value: function() {
                    if (this.reloadOnContextChange) {
                        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                        var t = this.context;
                        if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context)("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                    }
                }
            }, {
                key: "initEvents",
                value: function() {
                    var t = this;
                    this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach((function(e) {
                        e.addEventListener("click", t.setScrollTo, !1)
                    }))
                }
            }, {
                key: "setScrollTo",
                value: function(t) {
                    t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                        offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                    })
                }
            }, {
                key: "addElements",
                value: function() {}
            }, {
                key: "detectElements",
                value: function(t) {
                    var e = this,
                        i = this.instance.scroll.y,
                        s = i + this.windowHeight,
                        n = this.instance.scroll.x,
                        o = n + this.windowWidth;
                    Object.entries(this.els).forEach((function(l) {
                        var r = f(l, 2),
                            a = r[0],
                            c = r[1];
                        if (!c || c.inView && !t || ("horizontal" === e.direction ? o >= c.left && n < c.right && e.setInView(c, a) : s >= c.top && i < c.bottom && e.setInView(c, a)), c && c.inView)
                            if ("horizontal" === e.direction) {
                                var h = c.right - c.left;
                                c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (h + e.windowWidth), (o < c.left || n > c.right) && e.setOutOfView(c, a)
                            } else {
                                var d = c.bottom - c.top;
                                c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (d + e.windowHeight), (s < c.top || i > c.bottom) && e.setOutOfView(c, a)
                            }
                    })), this.hasScrollTicking = !1
                }
            }, {
                key: "setInView",
                value: function(t, e) {
                    this.els[e].inView = !0, t.el.classList.add(t.class), this.currentElements[e] = t, t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1))
                }
            }, {
                key: "setOutOfView",
                value: function(t, e) {
                    var i = this;
                    this.els[e].inView = !1, Object.keys(this.currentElements).forEach((function(t) {
                        t === e && delete i.currentElements[t]
                    })), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
                }
            }, {
                key: "dispatchCall",
                value: function(t, e) {
                    this.callWay = e, this.callValue = t.call.split(",").map((function(t) {
                        return t.trim()
                    })), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                    var i = new Event(this.namespace + "call");
                    this.el.dispatchEvent(i)
                }
            }, {
                key: "dispatchScroll",
                value: function() {
                    var t = new Event(this.namespace + "scroll");
                    this.el.dispatchEvent(t)
                }
            }, {
                key: "setEvents",
                value: function(t, e) {
                    this.listeners[t] || (this.listeners[t] = []);
                    var i = this.listeners[t];
                    i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
                }
            }, {
                key: "unsetEvents",
                value: function(t, e) {
                    if (this.listeners[t]) {
                        var i = this.listeners[t],
                            s = i.indexOf(e);
                        s < 0 || (i.splice(s, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                    }
                }
            }, {
                key: "checkEvent",
                value: function(t) {
                    var e = this,
                        i = t.type.replace(this.namespace, ""),
                        s = this.listeners[i];
                    s && 0 !== s.length && s.forEach((function(t) {
                        switch (i) {
                            case "scroll":
                                return t(e.instance);
                            case "call":
                                return t(e.callValue, e.callWay, e.callObj);
                            default:
                                return t()
                        }
                    }))
                }
            }, {
                key: "startScroll",
                value: function() {}
            }, {
                key: "stopScroll",
                value: function() {}
            }, {
                key: "setScroll",
                value: function(t, e) {
                    this.instance.scroll = {
                        x: 0,
                        y: 0
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach((function(e) {
                        t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                    })), this.listeners = {}, this.scrollToEls.forEach((function(e) {
                        e.removeEventListener("click", t.setScrollTo, !1)
                    })), this.html.classList.remove(this.initClass)
                }
            }]), e
        }(),
        g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function w(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var S = w((function(t, e) {
            t.exports = {
                polyfill: function() {
                    var t = window,
                        e = document;
                    if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                        var i, s = t.HTMLElement || t.Element,
                            n = {
                                scroll: t.scroll || t.scrollTo,
                                scrollBy: t.scrollBy,
                                elementScroll: s.prototype.scroll || r,
                                scrollIntoView: s.prototype.scrollIntoView
                            },
                            o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                            l = (i = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                        t.scroll = t.scrollTo = function() {
                            void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : n.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                        }, t.scrollBy = function() {
                            void 0 !== arguments[0] && (a(arguments[0]) ? n.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                        }, s.prototype.scroll = s.prototype.scrollTo = function() {
                            if (void 0 !== arguments[0])
                                if (!0 !== a(arguments[0])) {
                                    var t = arguments[0].left,
                                        e = arguments[0].top;
                                    p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                } else {
                                    if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                    n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                }
                        }, s.prototype.scrollBy = function() {
                            void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }, s.prototype.scrollIntoView = function() {
                            if (!0 !== a(arguments[0])) {
                                var i = u(this),
                                    s = i.getBoundingClientRect(),
                                    o = this.getBoundingClientRect();
                                i !== e.body ? (p.call(this, i, i.scrollLeft + o.left - s.left, i.scrollTop + o.top - s.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                                    left: s.left,
                                    top: s.top,
                                    behavior: "smooth"
                                })) : t.scrollBy({
                                    left: o.left,
                                    top: o.top,
                                    behavior: "smooth"
                                })
                            } else n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        }
                    }

                    function r(t, e) {
                        this.scrollLeft = t, this.scrollTop = e
                    }

                    function a(t) {
                        if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                        if ("object" == typeof t && "smooth" === t.behavior) return !1;
                        throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                    }

                    function c(t, e) {
                        return "Y" === e ? t.clientHeight + l < t.scrollHeight : "X" === e ? t.clientWidth + l < t.scrollWidth : void 0
                    }

                    function h(e, i) {
                        var s = t.getComputedStyle(e, null)["overflow" + i];
                        return "auto" === s || "scroll" === s
                    }

                    function d(t) {
                        var e = c(t, "Y") && h(t, "Y"),
                            i = c(t, "X") && h(t, "X");
                        return e || i
                    }

                    function u(t) {
                        for (; t !== e.body && !1 === d(t);) t = t.parentNode || t.host;
                        return t
                    }

                    function f(e) {
                        var i, s, n, l, r = (o() - e.startTime) / 468;
                        l = r = r > 1 ? 1 : r, i = .5 * (1 - Math.cos(Math.PI * l)), s = e.startX + (e.x - e.startX) * i, n = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, s, n), s === e.x && n === e.y || t.requestAnimationFrame(f.bind(t, e))
                    }

                    function p(i, s, l) {
                        var a, c, h, d, u = o();
                        i === e.body ? (a = t, c = t.scrollX || t.pageXOffset, h = t.scrollY || t.pageYOffset, d = n.scroll) : (a = i, c = i.scrollLeft, h = i.scrollTop, d = r), f({
                            scrollable: a,
                            method: d,
                            startTime: u,
                            startX: c,
                            startY: h,
                            x: s,
                            y: l
                        })
                    }
                }
            }
        })),
        x = (S.polyfill, function(e) {
            l(n, e);
            var s = d(n);

            function n() {
                var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t(this, n), (e = s.call(this, i)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", e.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = S, window.smoothscrollPolyfill.polyfill()), e
            }
            return i(n, [{
                key: "init",
                value: function() {
                    this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), u(r(n.prototype), "init", this).call(this)
                }
            }, {
                key: "checkScroll",
                value: function() {
                    var t = this;
                    u(r(n.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function() {
                        t.detectElements()
                    })), this.hasScrollTicking = !0))
                }
            }, {
                key: "addDirection",
                value: function() {
                    window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                }
            }, {
                key: "addSpeed",
                value: function() {
                    window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                }
            }, {
                key: "resize",
                value: function() {
                    Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements())
                }
            }, {
                key: "addElements",
                value: function() {
                    var t = this;
                    this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach((function(e, i) {
                        e.getBoundingClientRect();
                        var s, n, o, l = e.dataset[t.name + "Class"] || t.class,
                            r = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i,
                            a = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                            c = e.dataset[t.name + "Repeat"],
                            h = e.dataset[t.name + "Call"],
                            d = e.dataset[t.name + "Target"],
                            u = (o = void 0 !== d ? document.querySelector("".concat(d)) : e).getBoundingClientRect();
                        s = u.top + t.instance.scroll.y, n = u.left + t.instance.scroll.x;
                        var f = s + o.offsetHeight,
                            p = n + o.offsetWidth;
                        c = "false" != c && (null != c || t.repeat);
                        var m = t.getRelativeOffset(a),
                            v = {
                                el: e,
                                targetEl: o,
                                id: r,
                                class: l,
                                top: s += m[0],
                                bottom: f -= m[1],
                                left: n,
                                right: p,
                                offset: a,
                                progress: 0,
                                repeat: c,
                                inView: !1,
                                call: h
                            };
                        t.els[r] = v, e.classList.contains(l) && t.setInView(t.els[r], r)
                    }))
                }
            }, {
                key: "updateElements",
                value: function() {
                    var t = this;
                    Object.entries(this.els).forEach((function(e) {
                        var i = f(e, 2),
                            s = i[0],
                            n = i[1],
                            o = n.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
                            l = o + n.targetEl.offsetHeight,
                            r = t.getRelativeOffset(n.offset);
                        t.els[s].top = o + r[0], t.els[s].bottom = l - r[1]
                    })), this.hasScrollTicking = !1
                }
            }, {
                key: "getRelativeOffset",
                value: function(t) {
                    var e = [0, 0];
                    if (t)
                        for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                    return e
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = parseInt(e.offset) || 0,
                        s = !!e.callback && e.callback;
                    if ("string" == typeof t) {
                        if ("top" === t) t = this.html;
                        else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
                        else if (!(t = document.querySelector(t))) return
                    } else if ("number" == typeof t) t = parseInt(t);
                    else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                    i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i;
                    var n = function() {
                        return parseInt(window.pageYOffset) === parseInt(i)
                    };
                    if (s) {
                        if (n()) return void s();
                        var o = function t() {
                            n() && (window.removeEventListener("scroll", t), s())
                        };
                        window.addEventListener("scroll", o)
                    }
                    window.scrollTo({
                        top: i,
                        behavior: 0 === e.duration ? "auto" : "smooth"
                    })
                }
            }, {
                key: "update",
                value: function() {
                    this.addElements(), this.detectElements()
                }
            }, {
                key: "destroy",
                value: function() {
                    u(r(n.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
                }
            }]), n
        }(b)),
        k = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        E = Object.prototype.propertyIsEnumerable;

    function A(t) {
        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    var O = function() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharcode(i)] = i;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                    return e[t]
                })).join("")) return !1;
            var s = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                s[t] = t
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var i, s, n = A(t), o = 1; o < arguments.length; o++) {
            for (var l in i = Object(arguments[o])) T.call(i, l) && (n[l] = i[l]);
            if (k) {
                s = k(i);
                for (var r = 0; r < s.length; r++) E.call(i, s[r]) && (n[s[r]] = i[s[r]])
            }
        }
        return n
    };

    function D() {}
    D.prototype = {
        on: function(t, e, i) {
            var s = this.e || (this.e = {});
            return (s[t] || (s[t] = [])).push({
                fn: e,
                ctx: i
            }), this
        },
        once: function(t, e, i) {
            var s = this;

            function n() {
                s.off(t, n), e.apply(i, arguments)
            }
            return n._ = e, this.on(t, n, i)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, n = i.length; s < n; s++) i[s].fn.apply(i[s].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {}),
                s = i[t],
                n = [];
            if (s && e)
                for (var o = 0, l = s.length; o < l; o++) s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
            return n.length ? i[t] = n : delete i[t], this
        }
    };
    var C = D,
        L = w((function(t, e) {
            (function() {
                (null !== e ? e : this).Lethargy = function() {
                    function t(t, e, i, s) {
                        this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != s ? s : 150, this.lastUpDeltas = function() {
                            var t, e, i;
                            for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                            return i
                        }.call(this), this.lastDownDeltas = function() {
                            var t, e, i;
                            for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                            return i
                        }.call(this), this.deltasTimestamp = function() {
                            var t, e, i;
                            for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                            return i
                        }.call(this)
                    }
                    return t.prototype.check = function(t) {
                        var e;
                        return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                    }, t.prototype.isInertia = function(t) {
                        var e, i, s, n, o, l, r;
                        return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (s = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), r = s.reduce((function(t, e) {
                            return t + e
                        })), o = i.reduce((function(t, e) {
                            return t + e
                        })), l = r / s.length, n = o / i.length, Math.abs(l) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
                    }, t.prototype.showLastUpDeltas = function() {
                        return this.lastUpDeltas
                    }, t.prototype.showLastDownDeltas = function() {
                        return this.lastDownDeltas
                    }, t
                }()
            }).call(g)
        })),
        M = {
            hasWheelEvent: "onwheel" in document,
            hasMouseWheelEvent: "onmousewheel" in document,
            hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
            hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: "onkeydown" in document,
            isFirefox: navigator.userAgent.indexOf("Firefox") > -1
        },
        j = Object.prototype.toString,
        _ = Object.prototype.hasOwnProperty;

    function B(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    var W = L.Lethargy,
        H = "virtualscroll",
        R = V,
        P = 37,
        Y = 38,
        I = 39,
        z = 40,
        X = 32;

    function V(t) {
        ! function(t) {
            if (!t) return console.warn("bindAll requires at least one argument.");
            var e = Array.prototype.slice.call(arguments, 1);
            if (0 === e.length)
                for (var i in t) _.call(t, i) && "function" == typeof t[i] && "[object Function]" == j.call(t[i]) && e.push(i);
            for (var s = 0; s < e.length; s++) {
                var n = e[s];
                t[n] = B(t[n], t)
            }
        }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = O({
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1,
            useKeyboard: !0,
            useTouch: !0
        }, t), this.options.limitInertia && (this._lethargy = new W), this._emitter = new C, this._event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0
        }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
            passive: this.options.passive
        })
    }

    function F(t, e, i) {
        return (1 - i) * t + i * e
    }

    function q(t) {
        var e = {};
        if (window.getComputedStyle) {
            var i = getComputedStyle(t),
                s = i.transform || i.webkitTransform || i.mozTransform,
                n = s.match(/^matrix3d\((.+)\)$/);
            return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0, e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = s.match(/^matrix\((.+)\)$/), e.x = n ? parseFloat(n[1].split(", ")[4]) : 0, e.y = n ? parseFloat(n[1].split(", ")[5]) : 0), e
        }
    }

    function K(t) {
        for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
        return e
    }
    V.prototype._notify = function(t) {
        var e = this._event;
        e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(H, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t
        })
    }, V.prototype._onWheel = function(t) {
        var e = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
            var i = this._event;
            i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, M.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t)
        }
    }, V.prototype._onMouseWheel = function(t) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
            var e = this._event;
            e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
        }
    }, V.prototype._onTouchStart = function(t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStartX = e.pageX, this.touchStartY = e.pageY
    }, V.prototype._onTouchMove = function(t) {
        var e = this.options;
        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
        var i = this._event,
            s = t.targetTouches ? t.targetTouches[0] : t;
        i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = s.pageX, this.touchStartY = s.pageY, this._notify(t)
    }, V.prototype._onKeyDown = function(t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var i = window.innerHeight - 40;
        switch (t.keycode) {
            case P:
            case Y:
                e.deltaY = this.options.keyStep;
                break;
            case I:
            case z:
                e.deltaY = -this.options.keyStep;
                break;
            case t.shiftKey:
                e.deltaY = i;
                break;
            case X:
                e.deltaY = -i;
                break;
            default:
                return
        }
        this._notify(t)
    }, V.prototype._bind = function() {
        M.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), M.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), M.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), M.hasPointer && M.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
    }, V.prototype._unbind = function() {
        M.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), M.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), M.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), M.hasPointer && M.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
    }, V.prototype.on = function(t, e) {
        this._emitter.on(H, t, e);
        var i = this._emitter.e;
        i && i[H] && 1 === i[H].length && this._bind()
    }, V.prototype.off = function(t, e) {
        this._emitter.off(H, t, e);
        var i = this._emitter.e;
        (!i[H] || i[H].length <= 0) && this._unbind()
    }, V.prototype.reset = function() {
        var t = this._event;
        t.x = 0, t.y = 0
    }, V.prototype.destroy = function() {
        this._emitter.off(), this._unbind()
    };
    var N = "function" == typeof Float32Array;

    function U(t, e) {
        return 1 - 3 * e + 3 * t
    }

    function $(t, e) {
        return 3 * e - 6 * t
    }

    function G(t) {
        return 3 * t
    }

    function J(t, e, i) {
        return ((U(e, i) * t + $(e, i)) * t + G(e)) * t
    }

    function Q(t, e, i) {
        return 3 * U(e, i) * t * t + 2 * $(e, i) * t + G(e)
    }

    function Z(t) {
        return t
    }
    var tt = function(t, e, i, s) {
            if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            if (t === e && i === s) return Z;
            for (var n = N ? new Float32Array(11) : new Array(11), o = 0; o < 11; ++o) n[o] = J(.1 * o, t, i);

            function l(e) {
                for (var s = 0, o = 1; 10 !== o && n[o] <= e; ++o) s += .1;
                --o;
                var l = s + .1 * ((e - n[o]) / (n[o + 1] - n[o])),
                    r = Q(l, t, i);
                return r >= .001 ? function(t, e, i, s) {
                    for (var n = 0; n < 4; ++n) {
                        var o = Q(e, i, s);
                        if (0 === o) return e;
                        e -= (J(e, i, s) - t) / o
                    }
                    return e
                }(e, l, t, i) : 0 === r ? l : function(t, e, i, s, n) {
                    var o, l, r = 0;
                    do {
                        (o = J(l = e + (i - e) / 2, s, n) - t) > 0 ? i = l : e = l
                    } while (Math.abs(o) > 1e-7 && ++r < 10);
                    return l
                }(e, s, s + .1, t, i)
            }
            return function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : J(l(t), e, s)
            }
        },
        et = 38,
        it = 40,
        st = 32,
        nt = 9,
        ot = 33,
        lt = 34,
        rt = 36,
        at = 35,
        ct = function(e) {
            l(n, e);
            var s = d(n);

            function n() {
                var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t(this, n), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (e = s.call(this, i)).inertia && (e.lerp = .1 * e.inertia), e.isScrolling = !1, e.isDraggingScrollbar = !1, e.isTicking = !1, e.hasScrollTicking = !1, e.parallaxElements = {}, e.stop = !1, e.scrollbarContainer = i.scrollbarContainer, e.checkKey = e.checkKey.bind(c(e)), window.addEventListener("keydown", e.checkKey, !1), e
            }
            return i(n, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = o({
                        delta: {
                            x: this.initPosition.x,
                            y: this.initPosition.y
                        },
                        scroll: {
                            x: this.initPosition.x,
                            y: this.initPosition.y
                        }
                    }, this.instance), this.vs = new R({
                        el: this.scrollFromAnywhere ? document : this.el,
                        mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                        firefoxMultiplier: this.firefoxMultiplier,
                        touchMultiplier: this.touchMultiplier,
                        useKeyboard: !1,
                        passive: !0
                    }), this.vs.on((function(e) {
                        t.stop || t.isDraggingScrollbar || requestAnimationFrame((function() {
                            t.updateDelta(e), t.isScrolling || t.startScrolling()
                        }))
                    })), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), u(r(n.prototype), "init", this).call(this)
                }
            }, {
                key: "setScrollLimit",
                value: function() {
                    if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
                        for (var t = 0, e = this.el.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;
                        this.instance.limit.x = t - this.windowWidth
                    }
                }
            }, {
                key: "startScrolling",
                value: function() {
                    this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                }
            }, {
                key: "stopScrolling",
                value: function() {
                    cancelAnimationFrame(this.checkScrollRaf), this.startScrollTs = void 0, this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
                }
            }, {
                key: "checkKey",
                value: function(t) {
                    var e = this;
                    if (this.stop) t.keycode == nt && requestAnimationFrame((function() {
                        e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0
                    }));
                    else {
                        switch (t.keycode) {
                            case nt:
                                requestAnimationFrame((function() {
                                    e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, {
                                        offset: -window.innerHeight / 2
                                    })
                                }));
                                break;
                            case et:
                                this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] -= 240);
                                break;
                            case it:
                                this.isActiveElementScrollSensitive() && (this.instance.delta[this.directionAxis] += 240);
                                break;
                            case ot:
                                this.instance.delta[this.directionAxis] -= window.innerHeight;
                                break;
                            case lt:
                                this.instance.delta[this.directionAxis] += window.innerHeight;
                                break;
                            case rt:
                                this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                                break;
                            case at:
                                this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                                break;
                            case st:
                                this.isActiveElementScrollSensitive() && (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                                break;
                            default:
                                return
                        }
                        this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                    }
                }
            }, {
                key: "isActiveElementScrollSensitive",
                value: function() {
                    return !(document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLButtonElement || document.activeElement instanceof HTMLSelectElement)
                }
            }, {
                key: "checkScroll",
                value: function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e || this.isScrolling || this.isDraggingScrollbar) {
                        this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function() {
                            return t.checkScroll()
                        })), this.hasScrollTicking = !0), this.updateScroll();
                        var i = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
                            s = Date.now() - this.startScrollTs;
                        if (!this.animatingScroll && s > 100 && (i < .5 && 0 != this.instance.delta[this.directionAxis] || i < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach((function(i) {
                                var s = f(i, 2),
                                    n = (s[0], s[1]);
                                n.persistent || t.instance.scroll[t.directionAxis] > n.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < n.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(n.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(n.el, 0, -t.instance.scroll[t.directionAxis]), n.inView || (n.inView = !0, n.el.style.opacity = 1, n.el.style.pointerEvents = "all", n.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((n.inView || e) && (n.inView = !1, n.el.style.opacity = 0, n.el.style.pointerEvents = "none", n.el.removeAttribute("data-".concat(t.name, "-section-inview"))), t.transform(n.el, 0, 0))
                            })), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar) {
                            var o = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                            "horizontal" === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o)
                        }
                        u(r(n.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1
                    }
                }
            }, {
                key: "resize",
                value: function() {
                    this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
                        x: this.windowWidth / 2,
                        y: this.windowHeight / 2
                    }, this.update()
                }
            }, {
                key: "updateDelta",
                value: function(t) {
                    var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                    e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY, this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
                }
            }, {
                key: "updateScroll",
                value: function(t) {
                    this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = F(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
                }
            }, {
                key: "addDirection",
                value: function() {
                    this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
                }
            }, {
                key: "addSpeed",
                value: function() {
                    this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                }
            }, {
                key: "initScrollBar",
                value: function() {
                    if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
                        if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                    } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                    this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                    }
                }
            }, {
                key: "reinitScrollBar",
                value: function() {
                    if (this.hasScrollbar = !1, "horizontal" == this.direction) {
                        if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                    } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                    this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                    }
                }
            }, {
                key: "destroyScrollBar",
                value: function() {
                    this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
                }
            }, {
                key: "getScrollBar",
                value: function(t) {
                    this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
                }
            }, {
                key: "releaseScrollBar",
                value: function(t) {
                    this.isDraggingScrollbar = !1, this.isScrolling && this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
                }
            }, {
                key: "moveScrollBar",
                value: function(t) {
                    var e = this;
                    this.isDraggingScrollbar && requestAnimationFrame((function() {
                        var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100,
                            s = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                        s > 0 && s < e.instance.limit.y && (e.instance.delta.y = s), i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i)
                    }))
                }
            }, {
                key: "addElements",
                value: function() {
                    var t = this;
                    this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function(e, i) {
                        var s, n, o, l = K(e),
                            r = Object.entries(t.sections).map((function(t) {
                                var e = f(t, 2);
                                e[0];
                                return e[1]
                            })).find((function(t) {
                                return l.includes(t.el)
                            })),
                            a = e.dataset[t.name + "Class"] || t.class,
                            c = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i,
                            h = e.dataset[t.name + "Repeat"],
                            d = e.dataset[t.name + "Call"],
                            u = e.dataset[t.name + "Position"],
                            p = e.dataset[t.name + "Delay"],
                            m = e.dataset[t.name + "Direction"],
                            v = "string" == typeof e.dataset[t.name + "Sticky"],
                            y = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                            b = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                            g = e.dataset[t.name + "Target"],
                            w = (o = void 0 !== g ? document.querySelector("".concat(g)) : e).getBoundingClientRect();
                        null === r || r.inView ? (s = w.top + t.instance.scroll.y - q(o).y, n = w.left + t.instance.scroll.x - q(o).x) : (s = w.top - q(r.el).y - q(o).y, n = w.left - q(r.el).x - q(o).x);
                        var S = s + o.offsetHeight,
                            x = n + o.offsetWidth,
                            k = {
                                x: (x - n) / 2 + n,
                                y: (S - s) / 2 + s
                            };
                        if (v) {
                            var T = e.getBoundingClientRect(),
                                E = T.top,
                                A = T.left,
                                O = {
                                    x: A - n,
                                    y: E - s
                                };
                            s += window.innerHeight, n += window.innerWidth, S = E + o.offsetHeight - e.offsetHeight - O[t.directionAxis], k = {
                                x: ((x = A + o.offsetWidth - e.offsetWidth - O[t.directionAxis]) - n) / 2 + n,
                                y: (S - s) / 2 + s
                            }
                        }
                        h = "false" != h && (null != h || t.repeat);
                        var D = [0, 0];
                        if (b)
                            if ("horizontal" === t.direction) {
                                for (var C = 0; C < b.length; C++) "string" == typeof b[C] ? b[C].includes("%") ? D[C] = parseInt(b[C].replace("%", "") * t.windowWidth / 100) : D[C] = parseInt(b[C]) : D[C] = b[C];
                                n += D[0], x -= D[1]
                            } else {
                                for (C = 0; C < b.length; C++) "string" == typeof b[C] ? b[C].includes("%") ? D[C] = parseInt(b[C].replace("%", "") * t.windowHeight / 100) : D[C] = parseInt(b[C]) : D[C] = b[C];
                                s += D[0], S -= D[1]
                            }
                        var L = {
                            el: e,
                            id: c,
                            class: a,
                            section: r,
                            top: s,
                            middle: k,
                            bottom: S,
                            left: n,
                            right: x,
                            offset: b,
                            progress: 0,
                            repeat: h,
                            inView: !1,
                            call: d,
                            speed: y,
                            delay: p,
                            position: u,
                            target: o,
                            direction: m,
                            sticky: v
                        };
                        t.els[c] = L, e.classList.contains(a) && t.setInView(t.els[c], c), (!1 !== y || v) && (t.parallaxElements[c] = L)
                    }))
                }
            }, {
                key: "addSections",
                value: function() {
                    var t = this;
                    this.sections = {};
                    var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                    0 === e.length && (e = [this.el]), e.forEach((function(e, i) {
                        var s = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i,
                            n = e.getBoundingClientRect(),
                            o = {
                                x: n.left - 1.5 * window.innerWidth - q(e).x,
                                y: n.top - 1.5 * window.innerHeight - q(e).y
                            },
                            l = {
                                x: o.x + n.width + 2 * window.innerWidth,
                                y: o.y + n.height + 2 * window.innerHeight
                            },
                            r = "string" == typeof e.dataset[t.name + "Persistent"];
                        e.setAttribute("data-scroll-section-id", s);
                        var a = {
                            el: e,
                            offset: o,
                            limit: l,
                            inView: !1,
                            persistent: r,
                            id: s
                        };
                        t.sections[s] = a
                    }))
                }
            }, {
                key: "transform",
                value: function(t, e, i, s) {
                    var n;
                    if (s) {
                        var o = q(t),
                            l = F(o.x, e, s),
                            r = F(o.y, i, s);
                        n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l, ",").concat(r, ",0,1)")
                    } else n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                    t.style.webkitTransform = n, t.style.msTransform = n, t.style.transform = n
                }
            }, {
                key: "transformElements",
                value: function(t) {
                    var e = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        s = this.instance.scroll.x + this.windowWidth,
                        n = this.instance.scroll.y + this.windowHeight,
                        o = {
                            x: this.instance.scroll.x + this.windowMiddle.x,
                            y: this.instance.scroll.y + this.windowMiddle.y
                        };
                    Object.entries(this.parallaxElements).forEach((function(l) {
                        var r = f(l, 2),
                            a = (r[0], r[1]),
                            c = !1;
                        if (t && (c = 0), a.inView || i) switch (a.position) {
                            case "top":
                                c = e.instance.scroll[e.directionAxis] * -a.speed;
                                break;
                            case "elementTop":
                                c = (n - a.top) * -a.speed;
                                break;
                            case "bottom":
                                c = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * a.speed;
                                break;
                            case "left":
                                c = e.instance.scroll[e.directionAxis] * -a.speed;
                                break;
                            case "elementLeft":
                                c = (s - a.left) * -a.speed;
                                break;
                            case "right":
                                c = (e.instance.limit[e.directionAxis] - s + e.windowHeight) * a.speed;
                                break;
                            default:
                                c = (o[e.directionAxis] - a.middle[e.directionAxis]) * -a.speed
                        }
                        a.sticky && (c = a.inView ? "horizontal" === e.direction ? e.instance.scroll.x - a.left + window.innerWidth : e.instance.scroll.y - a.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < a.left - window.innerWidth && e.instance.scroll.x < a.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > a.right && e.instance.scroll.x > a.right + 100 && a.right - a.left + window.innerWidth : e.instance.scroll.y < a.top - window.innerHeight && e.instance.scroll.y < a.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > a.bottom && e.instance.scroll.y > a.bottom + 100 && a.bottom - a.top + window.innerHeight), !1 !== c && ("horizontal" === a.direction || "horizontal" === e.direction && "vertical" !== a.direction ? e.transform(a.el, c, 0, !t && a.delay) : e.transform(a.el, 0, c, !t && a.delay))
                    }))
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    var e = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = parseInt(i.offset) || 0,
                        n = isNaN(parseInt(i.duration)) ? 1e3 : parseInt(i.duration),
                        o = i.easing || [.25, 0, .35, 1],
                        l = !!i.disableLerp,
                        r = !!i.callback && i.callback;
                    if (o = tt.apply(void 0, p(o)), "string" == typeof t) {
                        if ("top" === t) t = 0;
                        else if ("bottom" === t) t = this.instance.limit.y;
                        else if ("left" === t) t = 0;
                        else if ("right" === t) t = this.instance.limit.x;
                        else if (!(t = document.querySelector(t))) return
                    } else if ("number" == typeof t) t = parseInt(t);
                    else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                    if ("number" != typeof t) {
                        var a = K(t).includes(this.el);
                        if (!a) return;
                        var c = t.getBoundingClientRect(),
                            h = c.top,
                            d = c.left,
                            u = K(t),
                            m = u.find((function(t) {
                                return Object.entries(e.sections).map((function(t) {
                                    var e = f(t, 2);
                                    e[0];
                                    return e[1]
                                })).find((function(e) {
                                    return e.el == t
                                }))
                            })),
                            v = 0;
                        v = m ? q(m)[this.directionAxis] : -this.instance.scroll[this.directionAxis], s = "horizontal" === this.direction ? d + s - v : h + s - v
                    } else s = t + s;
                    var y = parseFloat(this.instance.delta[this.directionAxis]),
                        b = Math.max(0, Math.min(s, this.instance.limit[this.directionAxis])),
                        g = b - y,
                        w = function(t) {
                            l ? "horizontal" === e.direction ? e.setScroll(y + g * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, y + g * t) : e.instance.delta[e.directionAxis] = y + g * t
                        };
                    this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
                    var S = Date.now(),
                        x = function t() {
                            var i = (Date.now() - S) / n;
                            i > 1 ? (w(1), e.animatingScroll = !1, 0 == n && e.update(), r && r()) : (e.scrollToRaf = requestAnimationFrame(t), w(o(i)))
                        };
                    x()
                }
            }, {
                key: "update",
                value: function() {
                    this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
                }
            }, {
                key: "startScroll",
                value: function() {
                    this.stop = !1
                }
            }, {
                key: "stopScroll",
                value: function() {
                    this.stop = !0
                }
            }, {
                key: "setScroll",
                value: function(t, e) {
                    this.instance = o(o({}, this.instance), {}, {
                        scroll: {
                            x: t,
                            y: e
                        },
                        delta: {
                            x: t,
                            y: e
                        },
                        speed: 0
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    u(r(n.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
                }
            }]), n
        }(b);
    return function() {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e), this.options = i, Object.assign(this, y, i), this.smartphone = y.smartphone, i.smartphone && Object.assign(this.smartphone, i.smartphone), this.tablet = y.tablet, i.tablet && Object.assign(this.tablet, i.tablet), this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init()
        }
        return i(e, [{
            key: "init",
            value: function() {
                if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new ct(this.options) : this.scroll = new x(this.options), this.scroll.init(), window.location.hash) {
                    var t = window.location.hash.slice(1, window.location.hash.length),
                        e = document.getElementById(t);
                    e && this.scroll.scrollTo(e)
                }
            }
        }, {
            key: "update",
            value: function() {
                this.scroll.update()
            }
        }, {
            key: "start",
            value: function() {
                this.scroll.startScroll()
            }
        }, {
            key: "stop",
            value: function() {
                this.scroll.stopScroll()
            }
        }, {
            key: "scrollTo",
            value: function(t, e) {
                this.scroll.scrollTo(t, e)
            }
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.scroll.setScroll(t, e)
            }
        }, {
            key: "on",
            value: function(t, e) {
                this.scroll.setEvents(t, e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                this.scroll.unsetEvents(t, e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.scroll.destroy()
            }
        }]), e
    }()
}));

;

function isMobile() {
    var check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

function isTouchDevice() {
    return typeof window.ontouchstart !== 'undefined';
};
var app = function() {
    barba.hooks.beforeEnter((data) => {
        isTouchDevice();
        $("html").addClass("is-loading");
        $(".next").css({
            width: 0
        });
    });
    barba.hooks.after((data) => {
        $("html").removeClass('is-loading');
        setTimeout(function() {
            $(".project").css('transition-duration', '0s');
        }, 900);
        ga('set', 'page', window.location.pathname);
        ga('send', 'pageview');
    });
    barba.hooks.once((data) => {
        var currentPage = $(data.next.container).attr("data-barba-namespace");

        function urlExists(url, callback) {
            // fetch(url, {
            //     method: 'head'
            // }).then(function(status) {
            //     callback(status.ok)
            // });
        }
        var url = window.location.href;
        urlExists(url, function(exists) {
            if (exists) {} else {
                $(data.next.container).attr("scroll-direction", "vertical");
            }
            if (currentPage == '' || currentPage == 'editorial' || currentPage == 'commercial' || currentPage == 'artwork' || currentPage == 'projects') {
                setTimeout(function() {
                    $(".project").css('transition-duration', '0s');
                }, 1000);
            } else if (currentPage == 'editorial' || currentPage == 'commercial' || currentPage == 'artwork') {} else if (currentPage == 'project') {
                Splitting();
            } else if (currentPage == 'pagenotfound' || currentPage == '404') {
                $(data.next.container).attr("data-barba-namespace", "404");
                setTimeout(function() {
                    barba.go("/");
                }, 2000);
            } else {}
        });
    });
    barba.hooks.afterEnter((data) => {
        cursorScale();
        checkScreen();
        var currentPage = $(data.next.container).attr("data-barba-namespace");
        if (currentPage == '') {
            $(".filter-archive li, .menu__category li").removeClass("current-menu-item");
        } else if (currentPage == 'editorial' || currentPage == 'commercial' || currentPage == 'artwork') {
            Splitting();
            currentCategory = currentPage.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });
            currentCategoryCaps = currentCategory.toUpperCase();
            $(".filter-archive li, .menu__category li, #footer .menu__category li").removeClass("current-menu-item");
            $(".filter-archive li").has("a:contains('" + currentCategory + "')").addClass("current-menu-item");
            $(".menu__category li").has("a:contains('" + currentCategory + "')").addClass("current-menu-item");
            $("#footer .menu__category li").has("a:contains('" + currentCategory + "')").addClass("current-menu-item");
        } else if (currentPage == 'journal') {} else if (currentPage == 'project') {
            Splitting();
            $(".filter-archive li, .menu__category li, .menu__category li p").removeClass("current-menu-item");
        } else if (currentPage == 'pagenotfound' || currentPage == '404') {
            setTimeout(function() {
                barba.go("/");
            }, 2000);
        } else {
            $(".filter-archive li, .menu__category li").removeClass("current-menu-item");
        }
    });
    barba.init({
        requestError: (trigger, action, url, response) => {
            if (response.status === 404) {
                barba.go('/404');
            }
            return false;
        },
        transitions: [{
            sync: true,
            preventRunning: true,
            prefetchIgnore: '/wp',
            prefetchIgnore: false,
            debug: true,
            beforeOnce: function(data) {},
            once: function(data) {
                window.addEventListener('resize', () => {
                    let vh = window.innerHeight * 0.01;
                    document.documentElement.style.setProperty('--vh', `${vh}px`);
                    setTimeout(function() {
                        $(".cursor").attr('style', 'opacity: 1 !important; mix-blend-mode: normal !important');
                        setTimeout(function() {
                            $(".cursor").attr('style', 'opacity: 1 !important; mix-blend-mode: difference !important');
                        }, 100);
                    }, 100);
                });
                window.dispatchEvent(new Event('resize'));
                setTimeout(function() {
                    $(".cursor").attr('style', 'opacity: 1 !important; mix-blend-mode: normal !important');
                    setTimeout(function() {
                        $(".cursor").attr('style', 'opacity: 1 !important; mix-blend-mode: difference !important');
                    }, 100);
                }, 100);
                var currentPage = $("#page").attr("data-barba-namespace");
                if (!sessionStorage.alreadyClicked) {
                    sessionStorage.alreadyClicked = 1;
                }
                if (currentPage == 'project' && !isMobile()) {
                    gsap.to($("#loader"), 1, {
                        width: 0,
                        ease: Expo.easeInOut,
                    });
                } else {
                    gsap.to($("#loader"), 1, {
                        height: 0, //!! 0 to remove loader once content is loaded, "100vh" to temporary disable
                        ease: Expo.easeInOut,
                    });
                }
                gsap.set($(".nav__text p"), {
                    y: 0,
                });
                gsap.to($(".nav__text p"), 1, {
                    delay: 1,
                    y: "-100%",
                    ease: Expo.easeInOut,
                    onComplete: removeLoader,
                });

                function removeLoader() {
                    $(".nav__text").remove(); //!! comment out to disable temporary
                    $("#loader").remove(); //!! comment out to disable temporary
                }
                split();
                smooth(data.next.container);
                var direction = $("html").attr("data-scroll-direction");
                $(data.next.container).attr("scroll-direction", direction);
            },
            afterOnce: function(data) {
                scroll.update();
                $("body").removeClass('is-loading');
                $(data.next.container).removeClass("is-unseen");
                color(data.next.container);
            },
            beforeEnter: function(data) {
                $(".menu__main li, .filter-archive li").removeClass("current-menu-item");
                $(data.trigger).parent().addClass("current-menu-item");
                $(data.current.container).css({
                    position: 'absolute'
                });
                $(data.next.container).css({
                    position: 'relative',
                });
                scroll.destroy();
                split();
                smooth(data.next.container);
                scroll.update();
                $(data.next.container).find('[data-scroll-section] a').css('pointer-events', 'none');
            },
            enter: function(data) {
                var done = this.async();
                gsap.set($(data.next.container), {
                    scale: '0.96',
                    transformOrigin: 'top',
                    transform: 'translateY(100vh)',
                    ease: Expo.easeOut,
                }, 0);
                load($(data.next.container), onComplete);
                color(data.next.container);

                function onComplete() {
                    done();
                }
            },
            afterEnter: function(data) {
                var done = this.async();
                setTimeout(function() {
                    scroll.update();
                }, 800);
                gsap.set($(data.current.container), {
                    width: '100%',
                }, 0);
                gsap.to($(data.current.container), 0.7, {
                    scale: '0.92',
                    transformOrigin: 'top',
                    transform: 'translateY(6vh)',
                    opacity: '0.95',
                    ease: Power3.easeInOut
                }, 0);
                gsap.to($(data.next.container), 1, {
                    delay: 0.2,
                    scale: '1',
                    transformOrigin: 'top',
                    transform: 'translateY(0)',
                    ease: Expo.easeOut,
                    onComplete: done,
                }, 0);
                $("#wrapper").css("cursor", "default");
                $(data.next.container).removeClass("is-unseen");
            },
            after: function(data) {
                scroll.update();
                $(data.next.container).find('[data-scroll-section] a').css('pointer-events', 'all');
            },
        }, {
            name: 'back & forward',
            priority: 1,
            custom: ({
                trigger
            }) => {
                return trigger === 'back' || trigger === 'forward'
            },
            beforeEnter: function(data) {
                $(".menu__main li, .filter-archive li").removeClass("current-menu-item");
                $(data.trigger).parent().addClass("current-menu-item");
                $(data.current.container).css({
                    position: 'absolute'
                });
                $(data.next.container).css({
                    position: 'relative',
                });
                scroll.destroy();
                split();
                smooth(data.next.container);
                color(data.next.container);
                scroll.update();
                $(data.next.container).find('[data-scroll-section] a').css('pointer-events', 'none');
            },
            enter: function(data) {
                var done = this.async();
                gsap.set($(data.next.container), {
                    scale: '0.96',
                    transformOrigin: 'top',
                    transform: 'translateY(100vh)',
                    ease: Expo.easeOut,
                }, 0);
                load($(data.next.container), onComplete);

                function onComplete() {
                    done();
                }
            },
            afterEnter: function(data) {
                var done = this.async();
                setTimeout(function() {
                    scroll.update();
                }, 800);
                gsap.set($(data.current.container), {
                    width: '100%',
                }, 0);
                gsap.to($(data.current.container), 0.7, {
                    scale: '0.92',
                    transformOrigin: 'top',
                    transform: 'translateY(6vh)',
                    opacity: '0.95',
                    ease: Power3.easeInOut
                }, 0);
                gsap.to($(data.next.container), 1, {
                    delay: 0.2,
                    scale: '1',
                    transformOrigin: 'top',
                    transform: 'translateY(0)',
                    ease: Expo.easeOut,
                    onComplete: done,
                }, 0);
                $("#wrapper").css("cursor", "default");
                $(data.next.container).removeClass("is-unseen");
            },
            after: function(data) {
                scroll.update();
                $(data.next.container).find('[data-scroll-section] a').css('pointer-events', 'all');
            },
        }, {
            name: 'project',
            custom: ({
                trigger
            }) => {
                return trigger.classList && trigger.classList.contains('zoom');
            },
            beforeEnter: function(data) {
                const done = this.async();
                $(".menu__main li, .filter-archive li").removeClass("current-menu-item");
                clone(data.trigger, onComplete);
                gsap.to($("#cursor-outer"), 1, {
                    y: '-1em',
                    ease: Expo.easeOut
                });
                gsap.set($(data.next.container), {
                    opacity: '0',
                });
                gsap.set($(data.current.container), {
                    opacity: '1',
                });
                $(data.current.container).css({
                    position: 'absolute',
                });

                function onComplete() {
                    var tlIn = gsap.timeline({
                        paused: true
                    });
                    if (isMobile()) {
                        tlIn.add("first", 0);
                        tlIn.to($("#single"), 0.1, {
                            backgroundColor: "rgba(0,0,0,0.6)",
                            ease: Expo.easeOut
                        }, "first");
                        tlIn.to($("#clone"), 1, {
                            backgroundColor: "rgba(255,255,255,1)",
                            ease: Expo.easeInOut
                        }, "first");
                        tlIn.to($("#single"), 1, {
                            delay: 0.4,
                            backgroundColor: "rgba(0,0,0,1)",
                            ease: Expo.easeInOut
                        }, "first");
                        tlIn.set($("#clone img"), {
                            height: "auto",
                            width: "100%",
                        }, "first");
                        tlIn.add("second", 0.8);
                        let vh = window.innerHeight * 0.01;
                        document.documentElement.style.setProperty('--vh', `${vh}px`);
                        tlIn.to($("#clone"), 0.6, {
                            left: 0,
                            yPercent: -50,
                            top: "50%",
                            x: 0,
                            y: (window.innerHeight * 0.01) * 75,
                            height: "100%",
                            width: "100%",
                            ease: Expo.easeOut
                        }, "second");
                        tlIn.to($("#clone img"), 0.6, {
                            ease: Expo.easeOut
                        }, "second");
                        tlIn.to($("#single-title .word>span"), 0.6, {
                            y: "0",
                            ease: Expo.easeOut,
                            stagger: {
                                each: 0.2
                            }
                        }, "second");
                        tlIn.add("third", 1.0);
                        tlIn.to($("#clone img"), 0.4, {
                            opacity: 1,
                            ease: Expo.easeInOut,
                            onComplete: done
                        }, "third");
                    } else {
                        tlIn.add("first", 0);
                        tlIn.to($("#single"), 0.1, {
                            backgroundColor: "rgba(0,0,0,0.6)",
                            ease: Expo.easeOut
                        }, "first");
                        tlIn.to($("#clone"), 1, {
                            backgroundColor: "rgba(255,255,255,1)",
                            ease: Expo.easeInOut
                        }, "first");
                        tlIn.to($("#single"), 1, {
                            delay: 0.4,
                            backgroundColor: "rgba(0,0,0,1)",
                            ease: Expo.easeInOut
                        }, "first");
                        tlIn.set($("#clone img"), {
                            height: "100%",
                            width: "auto",
                        }, "first");
                        tlIn.add("second", 0.8);
                        tlIn.to($("#clone"), 0.6, {
                            left: "75vw",
                            yPercent: -50,
                            top: "50%",
                            x: 0,
                            y: 0,
                            height: "100%",
                            width: "100%",
                            ease: Expo.easeOut
                        }, "second");
                        tlIn.to($("#clone img"), 0.6, {
                            ease: Expo.easeOut
                        }, "second");
                        tlIn.to($("#single-title .word>span"), 0.3, {
                            y: "0",
                            ease: Expo.easeOut,
                            stagger: {
                                each: 0.2
                            }
                        }, "second");
                        tlIn.add("third", 1.0);
                        tlIn.to($("#clone img"), 0.4, {
                            opacity: 1,
                            ease: Expo.easeInOut,
                            onComplete: done
                        }, "third");
                    }
                    tlIn.play();
                }
                scroll.destroy();
                if (isMobile()) {
                    $(data.next.container).attr("scroll-direction", "MOBILE vertical");
                } else {
                    $(data.next.container).attr("scroll-direction", "DESKTOP horizontal");
                }
                split();
                smooth(data.next.container);
                color(data.next.container);
                scroll.update();
                scroll.stop();
                $(data.next.container).find('[data-scroll-section]').css('pointer-events', 'none');
            },
            enter: function(data) {
                const done = this.async();
                ("enter");
                $("#wrapper").css("cursor", "wait");

                function onComplete() {
                    done();
                    gsap.set($(data.current.container), {
                        opacity: '0',
                    }, 0);
                }
                load($(data.next.container), onComplete);
                $(data.current.container).find(".project__transition").addClass("is-loading");
            },
            afterEnter: function(data) {
                const done = this.async();
                const tlOut = gsap.timeline();
                if (isMobile()) {
                    tlOut.to($('#single'), .9, {
                        bottom: '100%',
                        ease: Expo.easeInOut,
                        onComplete: done
                    });
                } else {
                    tlOut.to($('#single'), .9, {
                        right: '100%',
                        ease: Expo.easeInOut,
                        onComplete: done
                    });
                }
                $("#wrapper").css("cursor", "default");
                setTimeout(function() {
                    $(data.next.container).removeClass("is-unseen");
                }, 500);
            },
            after: function(data) {
                $(data.next.container).find('[data-scroll-section]').css('pointer-events', 'all');
                $("#clone").remove();
                $("#single").remove();
                scroll.update();
                scroll.start();
                setTimeout(function() {
                    $("#clone").remove();
                }, 2000);
            },
        }, {
            name: 'archive',
            from: {
                namespace: ['editorial', 'commercial', 'artwork', ]
            },
            to: {
                namespace: ['editorial', 'commercial', 'artwork', ]
            },
            beforeEnter: function(data) {
                $(data.current.container).removeAttr('style');
                $(".project").css('transition-duration', '0s');
                var done = this.async();
                scroll.stop();
                scroll.scrollTo(0, {
                    'duration': 0,
                    'disableLerp': false,
                });
                var checkPos = false;
                scroll.on('scroll', ({
                    limit,
                    scroll
                }) => {
                    if (scroll.y < 10) {
                        checkPos = false;
                    } else {
                        checkPos = true;
                    }
                    scrollTop();
                });
                var scrollTop = (function() {
                    var executed = false;
                    return function() {
                        if (!executed) {
                            executed = true;
                            if (!checkPos) {
                                done();
                            } else {
                                scroll.scrollTo('top', {
                                    'callback': function() {
                                        done();
                                    },
                                    'easing': [0.20, 0.80, 0.20, 1.00],
                                    'duration': 800,
                                    'disableLerp': true,
                                });
                            }
                        }
                    };
                })();
                var direction = $("html").attr("data-scroll-direction");
                $(data.current.container).attr("scroll-direction", direction);
                $('[data-scroll-section]').css('pointer-events', 'none');
            },
            enter: function(data) {
                var done = this.async();
                scroll.destroy();
                smooth(data.next.container);
                scroll.stop();
                color(data.next.container);
                load($(data.next.container), onComplete);

                function onComplete() {
                    done();
                }
            },
            afterEnter: function(data) {
                var done = this.async();
                var currentPage = $(data.current.container).attr("data-barba-namespace");
                var nextPage = $(data.next.container).attr("data-barba-namespace");
                var griderOld = $(data.current.container).find('.project-grid .project')
                var griderNew = $(data.next.container).find('.project-grid .project');
                $(data.current.container).find('.filter-archive').css('visibility', 'hidden');
                $(data.current.container).css({
                    position: 'absolute'
                });
                $(data.next.container).css({
                    position: 'relative',
                });
                $('[data-scroll-section]').css('opacity', '1');
                if (currentPage == 'editorial' || currentPage == 'artwork' && nextPage == 'commercial') {
                    gsap.to(griderOld, 0.8, {
                        transformOrigin: 'top left',
                        y: 0,
                        x: "-100vw",
                        stagger: {
                            each: 0.15
                        },
                        ease: Expo.easeInOut,
                    });
                    gsap.set(griderNew, {
                        x: "100vw",
                    });
                } else {
                    gsap.to(griderOld, 0.8, {
                        transformOrigin: 'top left',
                        y: 0,
                        x: "100vw",
                        stagger: {
                            each: 0.15
                        },
                        ease: Expo.easeInOut,
                    });
                    gsap.set(griderNew, {
                        transformOrigin: 'top left',
                        y: 0,
                        x: "-100vw",
                    });
                }
                gsap.to(griderNew, 0.8, {
                    transformOrigin: 'top left',
                    delay: 0.4,
                    y: 0,
                    x: 0,
                    stagger: {
                        each: 0.05
                    },
                    ease: Expo.easeOut,
                    onComplete: done,
                });
                setTimeout(function() {
                    done();
                }, 900);
            },
            after: function(data) {
                $(".project").css('transition-duration', '1s');
                $('.project-grid .project').attr("data-scroll", "");
                setTimeout(function() {
                    $(".project").css('transition-duration', '0s');
                    scroll.update();
                    scroll.start();
                }, 0);
            },
        }, {
            name: 'next-project',
            from: {
                namespace: ['project', ]
            },
            to: {
                namespace: ['project', ]
            },
            beforeEnter: function(data) {
                var done = this.async();
                $("#single-thumb").unbind('mouseenter mouseleave');
                $("#single-thumb").removeClass('hover');
                if (isMobile()) {
                    gsap.set($(".next"), {
                        top: "100vh",
                        left: 0,
                        width: "100%",
                        height: "100vh",
                    });
                    var docStyle = getComputedStyle(document.documentElement);
                    var outerMargin = docStyle.getPropertyValue("--outer-margin");
                    gsap.to($("#single-next"), 1, {
                        paddingTop: outerMargin,
                        ease: Expo.easeInOut,
                    });
                    $(".next").css({
                        top: "0%",
                        'transition': 'top 1s cubic-bezier(0.87, 0, 0.13, 1)',
                    });
                    scroll.scrollTo('bottom', {
                        'callback': function() {
                            load($(data.next.container), done);
                        },
                        'easing': [0.20, 0.80, 0.20, 1.00],
                        'duration': 800,
                        'disableLerp': true,
                    });
                } else {
                    gsap.to($("#single-next"), 1, {
                        x: "-25vw",
                        ease: Expo.easeInOut,
                    });
                    $(".next").css({
                        width: "102%",
                        'transition': 'width 1s cubic-bezier(0.87, 0, 0.13, 1)',
                    });
                    scroll.scrollTo('right', {
                        'callback': function() {
                            load($(data.next.container), done);
                        },
                        'easing': [0.20, 0.80, 0.20, 1.00],
                        'duration': 800,
                        'disableLerp': true,
                    });
                }
                $(".c-scrollbar").fadeTo("0", 0);
                scroll.stop();
                options.direction = 'horizontal';
                var direction = $("html").attr("data-scroll-direction");
                $(data.next.container).attr("scroll-direction", direction);
            },
            enter: function(data) {
                scroll.destroy();
                smooth(data.next.container);
                scroll.stop();
                color(data.next.container);
            },
            afterEnter: function(data) {
                var done = this.async();
                $('.next').css('transition-duration', '0s', 'important');
                if (isMobile()) {
                    gsap.to($(".next"), 1, {
                        delay: 0.2,
                        top: 0,
                        height: 0,
                        ease: Expo.easeOut,
                        onComplete: done
                    });
                } else {
                    gsap.to($(".next"), 1, {
                        delay: 0.2,
                        right: "",
                        left: 0,
                        width: 0,
                        ease: Expo.easeOut,
                        onComplete: done
                    });
                }
            },
            after: function(data) {
                $(data.next.container).removeClass("is-unseen");
                $(".next").removeAttr("style");
                scroll.update();
                scroll.start();
            },
        }]
    });
};

function removeComments() {
    var bodyHtml = document.body.innerHTML;
    var newBody = bodyHtml.replace(/<!--[\s\S]*?(?:-->)/g, '');
    document.body.innerHTML = newBody;
}
$(document).ready(function() {
    removeComments();
    if (isMobile() || isTouchDevice()) {
        gsap.set($("#cursor-inner"), {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            xPercent: -50,
            yPercent: -50,
            scale: 0,
        });
        gsap.set($("#cursor-outer"), {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            xPercent: 0,
            yPercent: -50,
        });
    } else {
        cursor();
    }
    gsap.to($("#loader p"), 0.5, {
        delay: 0.1,
        y: 0,
        ease: Expo.easeOut,
        stagger: {
            each: 0.1
        },
    });
    initMenu();
    checkScreen();
    load($("body"), onLoaded);
})

function onLoaded() {
    app();
    cookie();
    gsap.set($("#wrapper"), {
        autoAlpha: 1,
    });
    gsap.to($("#wrapper"), 1, {
        delay: 1,
        autoAlpha: 1,
        ease: Power4.easeOut,
    });
    gsap.to($(".menu"), 0.5, {
        delay: 0.5,
        opacity: 1,
        ease: Expo.easeOut,
    });
    gsap.to($("#cursor-outer"), 0.5, {
        delay: 0.5,
        left: 20,
        ease: Expo.easeOut,
    });
    $(".menu").css('pointer-events', 'all');
    $(".menu__btn").css('pointer-events', 'all');
    $(".has-chars div p").css({
        transition: 'transform 0s ease-in-out'
    });
};

function load(nextContainer, callback) {
    $("html").addClass("is-loading");
    var hasAttraction = document.querySelectorAll('.has-attraction');
    var hasScale = document.querySelectorAll('.has-scale');
    hasAttraction.forEach((hasAttraction) => {
        hasAttraction.removeEventListener('mousemove', moveMagnet);
    });
    $("#cursor-outer").text("");
    $("#cursor-outer").append("<span></span><span></span><span></span>");
    var p = document.querySelector('.progress circle');
    gsap.set($("#cursor-outer"), {
        opacity: 0,
    });
    $('.progress circle').css('transition-duration', '0s');
    if (isMobile() || isTouchDevice()) {
        gsap.set("#cursor-inner", {
            scale: 0,
        })
    }
    var notLoaded = true;
    var alreadyLoaded = false;
    var checkLoad = function() {
        if (notLoaded == true) {
            gsap.to($("#cursor-inner"), 0.3, {
                css: {
                    opacity: 1
                },
                ease: Expo.easeIn
            });
            p.style.strokeDasharray = "0,100";
            gsap.set($("#cursor-outer"), {
                delay: 0.1,
                opacity: 1,
                ease: Expo.easeOut,
            });
            gsap.set($("#cursor-outer span"), {
                y: '0',
                yPercent: '100',
                ease: Expo.easeOut,
            });
            gsap.to($("#cursor-outer span"), 0.5, {
                delay: 0.1,
                yPercent: '0',
                ease: Expo.easeOut,
                stagger: {
                    each: 0.05
                },
            });
            setTimeout(function() {
                if (alreadyLoaded == false) {
                    $('.progress circle').css('transition-duration', '0.3s');
                    gsap.to("#cursor-inner", 0.4, {
                        scale: 0.4,
                        ease: Expo.easeOut
                    })
                }
            }, 20);
            notLoaded = false;
        } else {}
    };
    var counter = 0;

    function already() {
        counter++;
    };
    setInterval(already, 40);
    setTimeout(function() {
        nextContainer.imagesLoaded().always(function(instance) {}).done(function(instance) {
            p.style.strokeDasharray = "100,100";
            setTimeout(function() {
                if ($('#cursor-outer span').length) {
                    gsap.to($("#cursor-outer span"), 0.6, {
                        y: '0',
                        yPercent: '-100',
                        ease: Expo.easeInOut,
                        stagger: {
                            each: 0.04
                        },
                    });
                }
                gsap.set(nextContainer, {
                    opacity: '1',
                    ease: Expo.easeOut,
                }, 0);
                if (isMobile() || isTouchDevice()) {
                    gsap.to("#cursor-inner", 0.5, {
                        scale: 0,
                        ease: Expo.easeIn
                    })
                } else {
                    gsap.to("#cursor-inner", 0.5, {
                        scale: 0.2,
                        ease: Expo.easeOut
                    })
                }
                $('.progress circle').css('transition-duration', '0s');
                callback();
                setTimeout(function() {
                    $("html").removeClass("is-loading");
                    gsap.set($("#cursor-outer"), {
                        opacity: 1,
                    });
                    cursorAttraction();
                }, 1000);
                cursorText();
            }, 300);
        }).progress(function(instance, image) {
            var result = image.isLoaded ? 'loaded' : 'broken';
            const images = nextContainer.find('img');
            const loaded = Math.round(instance.progressedCount * 100 / images.length);
            if (loaded == 100 && counter == 0) {
                alreadyLoaded = true;
                gsap.set($("#cursor-outer"), {
                    opacity: 0,
                });
                $("#cursor-outer").text("");
                p.style.strokeDasharray = "100,100";
                if (isMobile() || isTouchDevice()) {
                    gsap.to("#cursor-inner", 0.5, {
                        scale: 0,
                        ease: Expo.easeIn
                    })
                } else {
                    gsap.to("#cursor-inner", 0.5, {
                        scale: 0.2,
                        ease: Expo.easeOut
                    })
                }
            } else {
                checkLoad();
            }
            setTimeout(function() {
                updateProgress(loaded);
            }, 20);
            p.style.strokeDasharray = loaded + ",100";
        });
    }, 20);

    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    function updateProgress(value) {
        var loadNum = pad(value, 3);
        $("#cursor-outer span:nth-child(1)").text(loadNum.charAt(loadNum.length - 3));
        $("#cursor-outer span:nth-child(2)").text(loadNum.charAt(loadNum.length - 2));
        $("#cursor-outer span:nth-child(3)").text(loadNum.charAt(loadNum.length - 1));
    }
};

function split() {
    Splitting();
    $(".lines .word").attr("data-scroll", "");
    $(".has-words>span").attr("data-scroll", "");
    $(".has-words>span").attr("data-scroll-direction", "horizontal");
    $(".has-words>span").attr("data-scroll-position", "top");
    $(".has-words>span:nth-of-type(odd)").attr("data-scroll-speed", "2");
    $(".has-words>span:nth-of-type(2n)").attr("data-scroll-speed", "-2");
    $(".has-chars .char").attr("data-scroll", "");
    $(".has-chars .char").attr("data-scroll-position", "top");
    $(".has-chars .char:nth-of-type(1n)").attr("data-scroll-speed", "0");
    $(".has-chars .char:nth-of-type(2n)").attr("data-scroll-speed", "0");
    $(".has-chars .char:nth-of-type(3n)").attr("data-scroll-speed", "0");
    $(".has-chars .char:nth-of-type(4n)").attr("data-scroll-speed", "0");
    $(".has-chars .char:nth-of-type(5n)").attr("data-scroll-speed", "-5");
    $(".has-chars .char:nth-of-type(6n)").attr("data-scroll-speed", "-5");
    $(".has-chars .char:nth-of-type(7n)").attr("data-scroll-speed", "-5");
    $(".has-chars .char:nth-of-type(8n)").attr("data-scroll-speed", "-5");
    $(".single__title>h1>span").attr("data-scroll", "");
    $(".single__title>h1>span:nth-of-type(odd)").attr("data-scroll-speed", "5");
    $(".single__title>h1>span:nth-of-type(2n)").attr("data-scroll-speed", "-8");
};

function cookie() {
    function createCookie(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = encodeURIComponent(name) + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0)
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }
    var x = readCookie('cookie')
    if (x) {} else {}
    $('.ok').on('click', function(e) {
        createCookie('cookie', 'RWYcookie', 7)
        console.log("COOKIE CREATED");
        gsap.to($("#cookie"), 1, {
            yPercent: 200,
            ease: Power4.easeOut,
            onComplete: remove,
        });
    });

    function remove() {
        onComplete: $('#cookie').remove();
    }
};
var speed = 0.15;
var fpms = 60 / 1000;
var strength = 50;

function cursor() {
    cursorScale();
    cursorAttraction()
    var xSet = gsap.quickSetter($("#cursor-inner"), "x", "px");
    var ySet = gsap.quickSetter($("#cursor-inner"), "y", "px");
    var xSet2 = gsap.quickSetter($("#cursor-outer"), "x", "px");
    var ySet2 = gsap.quickSetter($("#cursor-outer"), "y", "px");
    gsap.set($("#cursor-inner"), {
        xPercent: -50,
        yPercent: -50,
    });
    gsap.set($("#cursor-outer"), {
        yPercent: -55,
    });
    var pos = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };
    var pos2 = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };
    var mouse = {
        x: pos.x,
        y: pos.y
    };
    var mouse2 = {
        x: pos2.x,
        y: pos2.y
    };

    function moveCursor(e) {
        gsap.to($("#cursor-inner"), 0.3, {
            css: {
                opacity: 1
            },
            ease: Expo.easeIn
        });
        $(window).off('mousemove', moveCursor);
    }
    $(window).on('mousemove', moveCursor);
    setTimeout(function() {
        window.addEventListener("mousemove", e => {
            mouse.x = e.x;
            mouse.y = e.y;
            mouse2.x = e.x;
            mouse2.y = e.y;
        });
        gsap.ticker.add((time, deltaTime) => {
            var delta = deltaTime * fpms;
            var dt = 1.05 - Math.pow(1.0 - speed, delta);
            var dt2 = 1.0 - Math.pow(1.0 - speed, delta);
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            pos2.x += (mouse2.x - pos2.x) * dt2;
            pos2.y += (mouse2.y - pos2.y) * dt2;
            xSet(pos.x);
            ySet(pos.y);
            xSet2(pos2.x);
            ySet2(pos2.y);
        });
    }, 100);
    $("body").mouseleave(function() {
        gsap.to(".cursor", 0.3, {
            opacity: 0,
            ease: Expo.easeOut
        });
    }).mouseenter(function() {
        gsap.to(".cursor", 0.3, {
            delay: 0.2,
            opacity: 1,
            ease: Expo.easeOut
        });
    });
}

function cursorAttraction() {
    if (!isMobile()) {
        var hasAttraction = document.querySelectorAll('.has-attraction')
        hasAttraction.forEach((hasAttraction) => {
            hasAttraction.addEventListener('mousemove', moveMagnet);
            hasAttraction.addEventListener('mouseout', function(event) {
                gsap.to("#cursor-inner", 0.6, {
                    scale: 0.2,
                    ease: Power4.easeOut
                })
                gsap.to(event.currentTarget, 1, {
                    x: 0,
                    y: 0,
                    ease: Power2.easeOut
                })
            });
        });
    }
};

function cursorScale() {
    if (!isMobile()) {
        var hasScale = document.querySelectorAll('.has-scale')
        hasScale.forEach((hasScale) => {
            hasScale.addEventListener('mouseover', function(event) {
                gsap.to("#cursor-inner", 0.6, {
                    scale: 1,
                    ease: Power4.easeOut
                })
                gsap.to(event.currentTarget, 1, {
                    x: 0,
                    y: 0,
                    ease: Power2.easeOut
                })
            });
            hasScale.addEventListener('mouseout', function(event) {
                gsap.to("#cursor-inner", 0.6, {
                    scale: 0.2,
                    ease: Power4.easeOut
                })
                gsap.to(event.currentTarget, 1, {
                    x: 0,
                    y: 0,
                    ease: Power4.easeOut
                })
            });
        });
    }
};

function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();
    var offseter = $(".nav__btn").offset();
    gsap.to($("#cursor-outer"), 0.6, {
        x: offseter.left + magnetButton.offsetWidth / 3,
        y: offseter.top + magnetButton.offsetHeight / 3,
        scale: 1,
        ease: Power4.easeOut
    })
    gsap.to($("#cursor-inner"), 0.6, {
        x: offseter.left + magnetButton.offsetWidth / 3,
        y: offseter.top + magnetButton.offsetHeight / 3,
        scale: 1,
        ease: Power4.easeOut
    })
    gsap.to(magnetButton, 1, {
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
        ease: Power2.easeOut
    })
};
var over = gsap.timeline({
        paused: true
    }),
    out = gsap.timeline({
        paused: true
    });

function cursorText() {
    if (!isMobile() || !isTouchDevice()) {
        const ptext = $('.project__caption').clone().toArray();
        $("#cursor-outer").append(ptext);
        $("#cursor-outer .project__caption").addClass("is-inactive");
        $(".zoom").hover(mouseOver, mouseOut);
    };
}

function mouseOver() {
    var hoveredProject = $(this).find('.project__caption').text();
    var hoveredProjectActive = $("#cursor-outer .project__caption:contains('" + hoveredProject + "')");
    $(hoveredProjectActive).filter(function() {
        if ($(this).text() === hoveredProject) {
            $(this).removeClass("is-inactive").addClass("is-active");
            gsap.to($("#cursor-outer .is-active"), 0.8, {
                y: '0',
                yPercent: 0,
                ease: Expo.easeOut,
            });
            gsap.to($("#cursor-outer .is-inactive"), 0, {
                y: '0',
                delay: 0.01,
                yPercent: 120,
                onComplete: setBack,
                ease: Expo.easeOut,
            });
        }
    });
}

function mouseOut() {
    var hoveredProject = $(this).find('.project__caption').text();
    var hoveredProjectActive = $(".project__caption:contains('" + hoveredProject + "')");
    gsap.to($("#cursor-outer .is-active"), 0.8, {
        y: '0',
        yPercent: -120,
        onComplete: setBack,
        ease: Expo.easeOut,
    });
    gsap.to($("#cursor-outer .is-inactive"), 0, {
        y: '0',
        delay: 0.01,
        yPercent: 120,
        ease: Expo.easeOut,
    });
    hoveredProjectActive.removeClass("is-active").addClass("is-inactive");
}

function setBack() {
    if (document.querySelector("#cursor-outer .is-inactive")) {
        gsap.to($("#cursor-outer .is-inactive"), 0, {
            y: '0',
            yPercent: 120,
            ease: Expo.easeOut
        });
    }
};
var menuState = 0;
var spacer = 0.015;
var outerMargin = 0.04;
var tlIn = gsap.timeline();
tlIn.pause();
var tlOut = gsap.timeline();
tlOut.pause();

function initMenu() {
    gsap.set($('.menu .menu__category li p'), {
        yPercent: 100,
    });
    $('.nav__btn').on('click', function(e) {
        if (menuState == 0 && !$("html").hasClass("is-loading")) {
            menuState = 1;
            tlOut.kill();
            createOpening();
            $('#wrapper').css('cursor', 'none');
            $('[data-scroll-section]').css('cursor', 'none');
            $('[data-scroll-section]').css('pointer-events', 'none');
            $(".single").css('pointer-events', 'none');
            $('.nav__btn').addClass('menu-open-css') // new code
            console.log("menu clicked open") // new code
        } else if (menuState == 1) {
            menuState = 0;
            tlIn.kill();
            createClosing();
            $('#wrapper').css('cursor', 'none');
            $('[data-scroll-section]').css('cursor', 'none');
            $('[data-scroll-section]').css('pointer-events', 'all');
            $(".single").css('pointer-events', 'all');
            $(".single").css('cssText', 'pointer-events: all !important');
            console.log("menu click closed") // new code
        }
    });

    function createOpening() {
        tlOut.kill();
        tlIn.clear();
        checkScreen();
        tlIn.set($('#wrapper'), {
            width: '100%',
        }, 0).set($('.menu .menu__category li p'), {
            yPercent: 100,
        }, 0).staggerTo($('.menu .menu__category li p'), 0.7, {
            delay: 0.05,
            yPercent: 0,
            ease: Expo.easeOut,
        }, 0.1).to($('.menu .menu__category__num span'), 1, {
            opacity: 0.5,
            y: 0,
            ease: Expo.easeOut,
            stagger: {
                each: 0.1,
            }
        }, 0).to($('.menu .menu__main li'), 0.4, {
            y: 0,
            opacity: '1',
            ease: Expo.easeOut,
            stagger: {
                each: 0.04,
            }
        }, 0).to($('#wrapper'), 1, {
            scale: 1 - outerMargin * 2,
            transform: 'translateY(66vh)',
            transformOrigin: 'top center',
            ease: Expo.easeOut,
            onComplete: menuEnded,
        }, 0);
        tlIn.play(0);
    }

    function createClosing() {
        tlIn.kill();
        tlOut.clear();
        checkScreen();
        tlOut.to($('.menu .menu__category li p'), 0.9, {
            yPercent: -100,
            ease: Expo.easeInOut,
            stagger: {
                each: 0.05,
            }
        }, 0).to($('.menu .menu__category__num span'), 0.7, {
            transform: 'translateY(2em)',
            ease: Expo.easeInOut,
            stagger: {
                each: -0.05,
            }
        }, 0).to($('#wrapper'), 1.1, {
            width: '100%',
            scale: 1,
            transform: 'translateY(0)',
            transformOrigin: 'top center',
            ease: Expo.easeInOut
        }, 0.1).to($('.menu .menu__main li'), 0.4, {
            delay: 0.1,
            opacity: '0',
            ease: Expo.easeIn,
            stagger: {
                each: 0.04,
                from: "end",
            },
            onComplete: menuEnded2,
        }, 0)
        tlOut.play(0);
    }

    function menuEnded() {
        $('.nav').css('pointer-events', 'auto');
        $('body').bind('mousewheel', function(e) {
            if (e.originalEvent.wheelDelta / 120 > 0) {} else {
                createClosing();
                $('body').unbind("mousewheel");
            }
        });
    }

    function menuEnded2() {
        $('.nav').css('pointer-events', 'auto');
        menuState = 0;
        tlIn.kill();
        $('#wrapper').css('cursor', 'none');
        $('[data-scroll-section]').css('cursor', 'none');
        $('[data-scroll-section]').css('pointer-events', 'all');
        $(".single").css('pointer-events', 'all');
        $(".single").css('cssText', 'pointer-events: all !important');
        $('.nav__btn').removeClass('menu-open-css') // new code
        console.log("closing menu")
    }
    $('#wrapper, .overlay-nav li a, .menu a, li.current-menu-item').click(function() {
        if (menuState == 1) {
            menuState = 0;
            createClosing();
            $('#wrapper').css('cursor', 'none');
            $('[data-scroll-section]').css('cursor', 'none');
            $('[data-scroll-section]').css('pointer-events', 'all');
            $(".single").css('pointer-events', 'all');
            $(".single").css('cssText', 'pointer-events: all !important');
            console.log("menu closed using action")
        }
    });
};

function checkScreen() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        outerMargin = 0.04;
        $("[data-scroll-mobile]").attr("data-scroll-speed", "0");
    } else if (window.matchMedia('(min-width:767px) and (max-width: 1024px)').matches) {
        $("[data-scroll-mobile]").attr("data-scroll-speed", "0");
        outerMargin = 0.03;
    } else if (window.matchMedia('(min-width:1024px) and (max-width: 1200px)').matches) {
        outerMargin = 0.02;
    } else {
        outerMargin = 0.015;
    }
}
const xs = window.matchMedia('screen and (max-width: 767px)');
const sm = window.matchMedia('screen and (min-width: 768px) and (max-width: 1199px)');
const md = window.matchMedia('screen and (min-width: 1200px) and (max-width: 1439px)');
const lg = window.matchMedia('screen and (min-width: 1440px)');
const desktop = window.matchMedia('screen and (min-width: 768px)');
const mobile = window.matchMedia('screen and (max-width: 767px)');
desktop.addListener(function(e) {
    if (e.matches) {
        location.reload();
    }
});
mobile.addListener(function(e) {
    if (e.matches) {
        location.reload();
    }
});
xs.addListener(function(e) {
    if (e.matches) {
        outerMargin = 0.04;
        $("[data-scroll-mobile]").attr("data-scroll-speed", "0");
        scroll.update();
    }
});
sm.addListener(function(e) {
    if (e.matches) {
        outerMargin = 0.03;
    }
});
md.addListener(function(e) {
    if (e.matches) {
        outerMargin = 0.02;
    }
});
lg.addListener(function(e) {
    if (e.matches) {
        outerMargin = 0.015;
    }
});;

function color(colorContainer) {
    customBackground = colorContainer.getAttribute('data-bgcolor');
    customColor = colorContainer.getAttribute('data-color');
    $(colorContainer).css('background-color', customBackground, 'important');
    $(colorContainer).find(".project__transition, .img__transition").css('background-color', customBackground, 'important');
    $(colorContainer).not(".ignore, .ignore>span, .ignore>span>span").css('color', customColor, 'important');
    $(".c-scrollbar_thumb, .underline::before, .underline::after").css('background', customColor, 'important');
    $(".underline::before, .underline::after").css('background', customColor, 'important');
    $(".c-scrollbar_thumb, .underline::before, .underline::after").css('background', customColor, 'important');
    $(".underline::before, .underline::after").css('background', customColor, 'important');
    if (!customColor) {
        customColor = "black";
        $(".underline").append('<style>.underline::after{background:' + customColor + ';} .underline:hover::before{background:' + customColor + ';}</style>');
    } else {
        $(".underline").append('<style>.underline::after{background:' + customColor + ';} .underline:hover::before{background:' + customColor + ';}</style>');
    }
};
let options;
let scroll;
var firstTime = true;

function smooth(scrollContainer) {
    let currentScrollContainer = scrollContainer.querySelector('[data-scroll-container]');
    options = {
        el: scrollContainer,
        smooth: true,
        offset: [0, "-100%"],
        getSpeed: true,
        getDirection: true,
        smoothMobile: true,
        lerp: 0.15,
        repeat: true,
        direction: 'vertical',
        touchMultiplier: 3,
        reloadOnContextChange: true,
        scrollbarContainer: document.querySelector('.app'),
    }
    if (scrollContainer.getAttribute('data-barba-namespace') == 'project' && !isMobile() && window.matchMedia('(min-width: 768px)').matches) {
        $(scrollContainer).attr("scroll-direction", "horizontal");
        options.direction = 'horizontal';
        options.offset = [0, "-100%"];
        options.gestureDirection = 'both';
        options.repeat = true;
        options.reloadOnContextChange = true, options.tablet = {
            breakpoint: 768,
            smooth: true,
            repeat: true,
            direction: 'horizontal',
            horizontalGesture: true,
            reloadOnContextChange: true,
        }
        options.smartphone = {
            breakpoint: 768,
            repeat: true,
            smooth: true,
            direction: 'vertical',
            reloadOnContextChange: true,
        }
    } else {
        $(scrollContainer).attr("scroll-direction", "vertical");
        options.direction = 'vertical';
        options.reloadOnContextChange = true, options.tablet = {
            breakpoint: 480,
            smooth: true,
            direction: 'vertical',
            reloadOnContextChange: true,
        }
        options.smartphone = {
            breakpoint: 480,
            smooth: true,
            direction: 'vertical',
            reloadOnContextChange: true,
        }
    }
    scroll = new LocomotiveScroll(options);
    $(window).resize(function() {
        scroll.update();
    });
    var once = true;
    var clicked = false;
    var cursor = true;
    $("#single-next h1, #single-thumb").bind('mouseover', function() {
        $("#single-thumb").addClass('hover');
    });
    $("#single-next h1, #single-thumb").bind('mouseout', function() {
        $("#single-thumb").removeClass('hover');
    });
    $("#single-next h1, #single-thumb").click(function() {
        nextProject();
    });

    function nextProject() {
        clicked = true;
        once = false;
        $("#single-next h1, #single-thumb").css('pointer-events', 'none');
        var nextLink = $('#single-next').attr("data-url");
        barba.go(nextLink);
    }
    scroll.on('call', function(e) {
        scroll.on('scroll', ({
            limit,
            scroll
        }) => {
            if (scrollContainer.getAttribute('data-barba-namespace') == 'project' && clicked == false) {
                if (Math.round(scroll.x) == Math.round(limit.x)) {
                    if (cursor == true && firstTime == true && !isTouchDevice()) {
                        $("#cursor-outer").append("<div class='next-project'></div>");
                        var np = gsap.timeline();
                        np.set($("#cursor-outer .next-project"), {
                            onComplete: initText,
                            y: '0',
                            yPercent: 100,
                            ease: Power4.easeOut,
                        }).to($("#cursor-outer .next-project"), 0.4, {
                            y: '0',
                            yPercent: 25,
                            ease: Power4.easeOut,
                        }).to($("#cursor-outer .next-project"), 0.4, {
                            delay: 0.2,
                            y: '0',
                            yPercent: -25,
                            ease: Power4.easeOut,
                        }).to($("#cursor-outer .next-project"), 0.4, {
                            delay: 0.2,
                            y: '0',
                            yPercent: -100,
                            ease: Power4.easeOut,
                            onComplete: removeText,
                        });

                        function initText() {
                            $("#cursor-outer .next-project").html("NEXT PROJECT<br>SCROLL");
                        }

                        function removeText() {
                            $("#cursor-outer .next-project").text("");
                        }
                        cursor = false;
                        firstTime = false;
                    }
                    if (scrollCount < 27) {
                        $(".c-scrollbar").css("opacity", "0");
                        scrollCount += 1;
                        $(".next").css({
                            width: scrollCount + "%"
                        });
                    } else if (scrollCount => 27) {
                        if (once == true) {
                            nextProject();
                        }
                    }
                } else {
                    scrollCount = 0;
                    $(".next").css({
                        width: 0
                    });
                    $(".c-scrollbar").css("opacity", "1");
                }
            }
        });
    });
};
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})//(window, document, 'script', 'echo_path.js', 'ga');
//ga('create', 'UA-19725622-1', 'auto');
//ga('send', 'pageview');
console.log(window.location.pathname)

function createCloneOnTop(sourceElement) {
    const box = sourceElement.getBoundingClientRect();
    const clone = sourceElement.cloneNode(true);
    return clone;
}

function clone(project, callback) {
    const sourceElement = project.querySelector('img');
    const caption = project.querySelector('.project__caption').textContent;
    const category = project.querySelector('.project__category').textContent;
    const box = sourceElement.getBoundingClientRect();
    const clone = sourceElement.cloneNode(true);
    const single = $('<div id="single"><div id="clone"></div><div id="single-title" data-splitting="lines"><h1 data-splitting="words">' + caption + '</h1></div></div>');
    $('body').append(single);
    $('#clone').append(clone);
    $('#clone').css("width", box.width + "px");
    $('#clone').css("height", box.height + "px");
    $('#clone').css({
        transform: "translate3d(" + box.left + "px, " + box.top + "px, 0px)"
    });
    Splitting();
    sourceElement.style.visibility = 'hidden';
    callback();
}