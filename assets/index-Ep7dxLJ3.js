const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TextInput-CqhBt4nm.js","assets/StageCard-Dze6Omqr.js","assets/TokenChip-BC0UnSBT.js","assets/proxy-Dw4aJrTv.js","assets/Preprocessing-DkN0uXNC.js","assets/Tokenization-BOvO5dD6.js","assets/index-BIuVZOqr.js","assets/ContextWindow-b3tieLp5.js","assets/CostEstimator-i-rl87KU.js","assets/GenerationSim-DXx-9_e0.js"])))=>i.map(i=>d[i]);
let Mi, Ai, Wv, ia, Bv, T, k, at;
let __tla = (async ()=>{
    function Qf(e, t) {
        for(var n = 0; n < t.length; n++){
            const r = t[n];
            if (typeof r != "string" && !Array.isArray(r)) {
                for(const l in r)if (l !== "default" && !(l in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, l);
                    o && Object.defineProperty(e, l, o.get ? o : {
                        enumerable: !0,
                        get: ()=>r[l]
                    });
                }
            }
        }
        return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }));
    }
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);
        new MutationObserver((l)=>{
            for (const o of l)if (o.type === "childList") for (const i of o.addedNodes)i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function n(l) {
            const o = {};
            return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
        }
        function r(l) {
            if (l.ep) return;
            l.ep = !0;
            const o = n(l);
            fetch(l.href, o);
        }
    })();
    function ca(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var fa = {
        exports: {}
    }, Ol = {}, da = {
        exports: {}
    }, M = {};
    var kr = Symbol.for("react.element"), Kf = Symbol.for("react.portal"), Gf = Symbol.for("react.fragment"), Yf = Symbol.for("react.strict_mode"), Xf = Symbol.for("react.profiler"), Zf = Symbol.for("react.provider"), Jf = Symbol.for("react.context"), qf = Symbol.for("react.forward_ref"), bf = Symbol.for("react.suspense"), ed = Symbol.for("react.memo"), td = Symbol.for("react.lazy"), Mu = Symbol.iterator;
    function nd(e) {
        return e === null || typeof e != "object" ? null : (e = Mu && e[Mu] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var pa = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, ha = Object.assign, ma = {};
    function Pn(e, t, n) {
        this.props = e, this.context = t, this.refs = ma, this.updater = n || pa;
    }
    Pn.prototype.isReactComponent = {};
    Pn.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    Pn.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function va() {}
    va.prototype = Pn.prototype;
    function Ii(e, t, n) {
        this.props = e, this.context = t, this.refs = ma, this.updater = n || pa;
    }
    var Di = Ii.prototype = new va;
    Di.constructor = Ii;
    ha(Di, Pn.prototype);
    Di.isPureReactComponent = !0;
    var Iu = Array.isArray, ga = Object.prototype.hasOwnProperty, Ui = {
        current: null
    }, ya = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function wa(e, t, n) {
        var r, l = {}, o = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)ga.call(t, r) && !ya.hasOwnProperty(r) && (l[r] = t[r]);
        var u = arguments.length - 2;
        if (u === 1) l.children = n;
        else if (1 < u) {
            for(var s = Array(u), a = 0; a < u; a++)s[a] = arguments[a + 2];
            l.children = s;
        }
        if (e && e.defaultProps) for(r in u = e.defaultProps, u)l[r] === void 0 && (l[r] = u[r]);
        return {
            $$typeof: kr,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: Ui.current
        };
    }
    function rd(e, t) {
        return {
            $$typeof: kr,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Fi(e) {
        return typeof e == "object" && e !== null && e.$$typeof === kr;
    }
    function ld(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Du = /\/+/g;
    function oo(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? ld("" + e.key) : t.toString(36);
    }
    function Yr(e, t, n, r, l) {
        var o = typeof e;
        (o === "undefined" || o === "boolean") && (e = null);
        var i = !1;
        if (e === null) i = !0;
        else switch(o){
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch(e.$$typeof){
                    case kr:
                    case Kf:
                        i = !0;
                }
        }
        if (i) return i = e, l = l(i), e = r === "" ? "." + oo(i, 0) : r, Iu(l) ? (n = "", e != null && (n = e.replace(Du, "$&/") + "/"), Yr(l, t, n, "", function(a) {
            return a;
        })) : l != null && (Fi(l) && (l = rd(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Du, "$&/") + "/") + e)), t.push(l)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", Iu(e)) for(var u = 0; u < e.length; u++){
            o = e[u];
            var s = r + oo(o, u);
            i += Yr(o, t, n, s, l);
        }
        else if (s = nd(e), typeof s == "function") for(e = s.call(e), u = 0; !(o = e.next()).done;)o = o.value, s = r + oo(o, u++), i += Yr(o, t, n, s, l);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function Tr(e, t, n) {
        if (e == null) return e;
        var r = [], l = 0;
        return Yr(e, r, "", "", function(o) {
            return t.call(n, o, l++);
        }), r;
    }
    function od(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(), t.then(function(n) {
                (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
            }, function(n) {
                (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
            }), e._status === -1 && (e._status = 0, e._result = t);
        }
        if (e._status === 1) return e._result.default;
        throw e._result;
    }
    var fe = {
        current: null
    }, Xr = {
        transition: null
    }, id = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: Xr,
        ReactCurrentOwner: Ui
    };
    function _a() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    M.Children = {
        map: Tr,
        forEach: function(e, t, n) {
            Tr(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return Tr(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return Tr(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!Fi(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    M.Component = Pn;
    M.Fragment = Gf;
    M.Profiler = Xf;
    M.PureComponent = Ii;
    M.StrictMode = Yf;
    M.Suspense = bf;
    M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = id;
    M.act = _a;
    M.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = ha({}, e.props), l = e.key, o = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (o = t.ref, i = Ui.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
            for(s in t)ga.call(t, s) && !ya.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (s === 1) r.children = n;
        else if (1 < s) {
            u = Array(s);
            for(var a = 0; a < s; a++)u[a] = arguments[a + 2];
            r.children = u;
        }
        return {
            $$typeof: kr,
            type: e.type,
            key: l,
            ref: o,
            props: r,
            _owner: i
        };
    };
    M.createContext = function(e) {
        return e = {
            $$typeof: Jf,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: Zf,
            _context: e
        }, e.Consumer = e;
    };
    M.createElement = wa;
    M.createFactory = function(e) {
        var t = wa.bind(null, e);
        return t.type = e, t;
    };
    M.createRef = function() {
        return {
            current: null
        };
    };
    M.forwardRef = function(e) {
        return {
            $$typeof: qf,
            render: e
        };
    };
    M.isValidElement = Fi;
    M.lazy = function(e) {
        return {
            $$typeof: td,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: od
        };
    };
    M.memo = function(e, t) {
        return {
            $$typeof: ed,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    M.startTransition = function(e) {
        var t = Xr.transition;
        Xr.transition = {};
        try {
            e();
        } finally{
            Xr.transition = t;
        }
    };
    M.unstable_act = _a;
    M.useCallback = function(e, t) {
        return fe.current.useCallback(e, t);
    };
    M.useContext = function(e) {
        return fe.current.useContext(e);
    };
    M.useDebugValue = function() {};
    M.useDeferredValue = function(e) {
        return fe.current.useDeferredValue(e);
    };
    M.useEffect = function(e, t) {
        return fe.current.useEffect(e, t);
    };
    M.useId = function() {
        return fe.current.useId();
    };
    M.useImperativeHandle = function(e, t, n) {
        return fe.current.useImperativeHandle(e, t, n);
    };
    M.useInsertionEffect = function(e, t) {
        return fe.current.useInsertionEffect(e, t);
    };
    M.useLayoutEffect = function(e, t) {
        return fe.current.useLayoutEffect(e, t);
    };
    M.useMemo = function(e, t) {
        return fe.current.useMemo(e, t);
    };
    M.useReducer = function(e, t, n) {
        return fe.current.useReducer(e, t, n);
    };
    M.useRef = function(e) {
        return fe.current.useRef(e);
    };
    M.useState = function(e) {
        return fe.current.useState(e);
    };
    M.useSyncExternalStore = function(e, t, n) {
        return fe.current.useSyncExternalStore(e, t, n);
    };
    M.useTransition = function() {
        return fe.current.useTransition();
    };
    M.version = "18.3.1";
    da.exports = M;
    k = da.exports;
    let ud;
    Ai = ca(k);
    ud = Qf({
        __proto__: null,
        default: Ai
    }, [
        k
    ]);
    var sd = k, ad = Symbol.for("react.element"), cd = Symbol.for("react.fragment"), fd = Object.prototype.hasOwnProperty, dd = sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, pd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function ka(e, t, n) {
        var r, l = {}, o = null, i = null;
        n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)fd.call(t, r) && !pd.hasOwnProperty(r) && (l[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)l[r] === void 0 && (l[r] = t[r]);
        return {
            $$typeof: ad,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: dd.current
        };
    }
    Ol.Fragment = cd;
    Ol.jsx = ka;
    Ol.jsxs = ka;
    fa.exports = Ol;
    let Uo, Sa, Ee, xa, Ea;
    T = fa.exports;
    Uo = {};
    Sa = {
        exports: {}
    };
    Ee = {};
    xa = {
        exports: {}
    };
    Ea = {};
    (function(e) {
        function t(C, R) {
            var O = C.length;
            C.push(R);
            e: for(; 0 < O;){
                var G = O - 1 >>> 1, b = C[G];
                if (0 < l(b, R)) C[G] = R, C[O] = b, O = G;
                else break e;
            }
        }
        function n(C) {
            return C.length === 0 ? null : C[0];
        }
        function r(C) {
            if (C.length === 0) return null;
            var R = C[0], O = C.pop();
            if (O !== R) {
                C[0] = O;
                e: for(var G = 0, b = C.length, Pr = b >>> 1; G < Pr;){
                    var Tt = 2 * (G + 1) - 1, lo = C[Tt], zt = Tt + 1, Nr = C[zt];
                    if (0 > l(lo, O)) zt < b && 0 > l(Nr, lo) ? (C[G] = Nr, C[zt] = O, G = zt) : (C[G] = lo, C[Tt] = O, G = Tt);
                    else if (zt < b && 0 > l(Nr, O)) C[G] = Nr, C[zt] = O, G = zt;
                    else break e;
                }
            }
            return R;
        }
        function l(C, R) {
            var O = C.sortIndex - R.sortIndex;
            return O !== 0 ? O : C.id - R.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var o = performance;
            e.unstable_now = function() {
                return o.now();
            };
        } else {
            var i = Date, u = i.now();
            e.unstable_now = function() {
                return i.now() - u;
            };
        }
        var s = [], a = [], h = 1, f = null, m = 3, g = !1, y = !1, w = !1, S = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function p(C) {
            for(var R = n(a); R !== null;){
                if (R.callback === null) r(a);
                else if (R.startTime <= C) r(a), R.sortIndex = R.expirationTime, t(s, R);
                else break;
                R = n(a);
            }
        }
        function v(C) {
            if (w = !1, p(C), !y) if (n(s) !== null) y = !0, no(x);
            else {
                var R = n(a);
                R !== null && ro(v, R.startTime - C);
            }
        }
        function x(C, R) {
            y = !1, w && (w = !1, d(L), L = -1), g = !0;
            var O = m;
            try {
                for(p(R), f = n(s); f !== null && (!(f.expirationTime > R) || C && !ye());){
                    var G = f.callback;
                    if (typeof G == "function") {
                        f.callback = null, m = f.priorityLevel;
                        var b = G(f.expirationTime <= R);
                        R = e.unstable_now(), typeof b == "function" ? f.callback = b : f === n(s) && r(s), p(R);
                    } else r(s);
                    f = n(s);
                }
                if (f !== null) var Pr = !0;
                else {
                    var Tt = n(a);
                    Tt !== null && ro(v, Tt.startTime - R), Pr = !1;
                }
                return Pr;
            } finally{
                f = null, m = O, g = !1;
            }
        }
        var N = !1, z = null, L = -1, W = 5, j = -1;
        function ye() {
            return !(e.unstable_now() - j < W);
        }
        function jn() {
            if (z !== null) {
                var C = e.unstable_now();
                j = C;
                var R = !0;
                try {
                    R = z(!0, C);
                } finally{
                    R ? On() : (N = !1, z = null);
                }
            } else N = !1;
        }
        var On;
        if (typeof c == "function") On = function() {
            c(jn);
        };
        else if (typeof MessageChannel < "u") {
            var Ou = new MessageChannel, Hf = Ou.port2;
            Ou.port1.onmessage = jn, On = function() {
                Hf.postMessage(null);
            };
        } else On = function() {
            S(jn, 0);
        };
        function no(C) {
            z = C, N || (N = !0, On());
        }
        function ro(C, R) {
            L = S(function() {
                C(e.unstable_now());
            }, R);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
            C.callback = null;
        }, e.unstable_continueExecution = function() {
            y || g || (y = !0, no(x));
        }, e.unstable_forceFrameRate = function(C) {
            0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < C ? Math.floor(1e3 / C) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return m;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(s);
        }, e.unstable_next = function(C) {
            switch(m){
                case 1:
                case 2:
                case 3:
                    var R = 3;
                    break;
                default:
                    R = m;
            }
            var O = m;
            m = R;
            try {
                return C();
            } finally{
                m = O;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(C, R) {
            switch(C){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    C = 3;
            }
            var O = m;
            m = C;
            try {
                return R();
            } finally{
                m = O;
            }
        }, e.unstable_scheduleCallback = function(C, R, O) {
            var G = e.unstable_now();
            switch(typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? G + O : G) : O = G, C){
                case 1:
                    var b = -1;
                    break;
                case 2:
                    b = 250;
                    break;
                case 5:
                    b = 1073741823;
                    break;
                case 4:
                    b = 1e4;
                    break;
                default:
                    b = 5e3;
            }
            return b = O + b, C = {
                id: h++,
                callback: R,
                priorityLevel: C,
                startTime: O,
                expirationTime: b,
                sortIndex: -1
            }, O > G ? (C.sortIndex = O, t(a, C), n(s) === null && C === n(a) && (w ? (d(L), L = -1) : w = !0, ro(v, O - G))) : (C.sortIndex = b, t(s, C), y || g || (y = !0, no(x))), C;
        }, e.unstable_shouldYield = ye, e.unstable_wrapCallback = function(C) {
            var R = m;
            return function() {
                var O = m;
                m = R;
                try {
                    return C.apply(this, arguments);
                } finally{
                    m = O;
                }
            };
        };
    })(Ea);
    xa.exports = Ea;
    var hd = xa.exports;
    var md = k, xe = hd;
    function _(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var Ca = new Set, nr = {};
    function Vt(e, t) {
        gn(e, t), gn(e + "Capture", t);
    }
    function gn(e, t) {
        for(nr[e] = t, e = 0; e < t.length; e++)Ca.add(t[e]);
    }
    var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fo = Object.prototype.hasOwnProperty, vd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Uu = {}, Fu = {};
    function gd(e) {
        return Fo.call(Fu, e) ? !0 : Fo.call(Uu, e) ? !1 : vd.test(e) ? Fu[e] = !0 : (Uu[e] = !0, !1);
    }
    function yd(e, t, n, r) {
        if (n !== null && n.type === 0) return !1;
        switch(typeof t){
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function wd(e, t, n, r) {
        if (t === null || typeof t > "u" || yd(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null) switch(n.type){
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
        return !1;
    }
    function de(e, t, n, r, l, o, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
    }
    var le = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        le[e] = new de(e, 0, !1, e, null, !1, !1);
    });
    [
        [
            "acceptCharset",
            "accept-charset"
        ],
        [
            "className",
            "class"
        ],
        [
            "htmlFor",
            "for"
        ],
        [
            "httpEquiv",
            "http-equiv"
        ]
    ].forEach(function(e) {
        var t = e[0];
        le[t] = new de(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        le[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        le[e] = new de(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        le[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        le[e] = new de(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        le[e] = new de(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        le[e] = new de(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        le[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var $i = /[\-:]([a-z])/g;
    function Wi(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace($i, Wi);
        le[t] = new de(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace($i, Wi);
        le[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace($i, Wi);
        le[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        le[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    le.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        le[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Bi(e, t, n, r) {
        var l = le.hasOwnProperty(t) ? le[t] : null;
        (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (wd(t, n, l, r) && (n = null), r || l === null ? gd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var nt = md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, zr = Symbol.for("react.element"), Xt = Symbol.for("react.portal"), Zt = Symbol.for("react.fragment"), Vi = Symbol.for("react.strict_mode"), Ao = Symbol.for("react.profiler"), Pa = Symbol.for("react.provider"), Na = Symbol.for("react.context"), Hi = Symbol.for("react.forward_ref"), $o = Symbol.for("react.suspense"), Wo = Symbol.for("react.suspense_list"), Qi = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), Ta = Symbol.for("react.offscreen"), Au = Symbol.iterator;
    function Mn(e) {
        return e === null || typeof e != "object" ? null : (e = Au && e[Au] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Q = Object.assign, io;
    function Bn(e) {
        if (io === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            io = t && t[1] || "";
        }
        return `
` + io + e;
    }
    var uo = !1;
    function so(e, t) {
        if (!e || uo) return "";
        uo = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t) if (t = function() {
                throw Error();
            }, Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error();
                }
            }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, []);
                } catch (a) {
                    var r = a;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (a) {
                    r = a;
                }
                e.call(t.prototype);
            }
            else {
                try {
                    throw Error();
                } catch (a) {
                    r = a;
                }
                e();
            }
        } catch (a) {
            if (a && r && typeof a.stack == "string") {
                for(var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u];)u--;
                for(; 1 <= i && 0 <= u; i--, u--)if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1) do if (i--, u--, 0 > u || l[i] !== o[u]) {
                        var s = `
` + l[i].replace(" at new ", " at ");
                        return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                    }
                    while (1 <= i && 0 <= u);
                    break;
                }
            }
        } finally{
            uo = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? Bn(e) : "";
    }
    function _d(e) {
        switch(e.tag){
            case 5:
                return Bn(e.type);
            case 16:
                return Bn("Lazy");
            case 13:
                return Bn("Suspense");
            case 19:
                return Bn("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = so(e.type, !1), e;
            case 11:
                return e = so(e.type.render, !1), e;
            case 1:
                return e = so(e.type, !0), e;
            default:
                return "";
        }
    }
    function Bo(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Zt:
                return "Fragment";
            case Xt:
                return "Portal";
            case Ao:
                return "Profiler";
            case Vi:
                return "StrictMode";
            case $o:
                return "Suspense";
            case Wo:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Na:
                return (e.displayName || "Context") + ".Consumer";
            case Pa:
                return (e._context.displayName || "Context") + ".Provider";
            case Hi:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Qi:
                return t = e.displayName || null, t !== null ? t : Bo(e.type) || "Memo";
            case ot:
                t = e._payload, e = e._init;
                try {
                    return Bo(e(t));
                } catch  {}
        }
        return null;
    }
    function kd(e) {
        var t = e.type;
        switch(e.tag){
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return Bo(t);
            case 8:
                return t === Vi ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t;
        }
        return null;
    }
    function St(e) {
        switch(typeof e){
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return "";
        }
    }
    function za(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Sd(e) {
        var t = za(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var l = n.get, o = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return l.call(this);
                },
                set: function(i) {
                    r = "" + i, o.call(this, i);
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return r;
                },
                setValue: function(i) {
                    r = "" + i;
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t];
                }
            };
        }
    }
    function Lr(e) {
        e._valueTracker || (e._valueTracker = Sd(e));
    }
    function La(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = za(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function ul(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Vo(e, t) {
        var n = t.checked;
        return Q({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function $u(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = St(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Ra(e, t) {
        t = t.checked, t != null && Bi(e, "checked", t, !1);
    }
    function Ho(e, t) {
        Ra(e, t);
        var n = St(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Qo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qo(e, t.type, St(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Wu(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Qo(e, t, n) {
        (t !== "number" || ul(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var Vn = Array.isArray;
    function an(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var l = 0; l < n.length; l++)t["$" + n[l]] = !0;
            for(n = 0; n < e.length; n++)l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + St(n), t = null, l = 0; l < e.length; l++){
                if (e[l].value === n) {
                    e[l].selected = !0, r && (e[l].defaultSelected = !0);
                    return;
                }
                t !== null || e[l].disabled || (t = e[l]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Ko(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
        return Q({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Bu(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(_(92));
                if (Vn(n)) {
                    if (1 < n.length) throw Error(_(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), n = t;
        }
        e._wrapperState = {
            initialValue: St(n)
        };
    }
    function ja(e, t) {
        var n = St(t.value), r = St(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function Vu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Oa(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Go(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Oa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Rr, Ma = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, l);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(Rr = Rr || document.createElement("div"), Rr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Rr.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function rr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Kn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, xd = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Kn).forEach(function(e) {
        xd.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Kn[t] = Kn[e];
        });
    });
    function Ia(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kn.hasOwnProperty(e) && Kn[e] ? ("" + t).trim() : t + "px";
    }
    function Da(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, l = Ia(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
        }
    }
    var Ed = Q({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Yo(e, t) {
        if (t) {
            if (Ed[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(_(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(_(62));
        }
    }
    function Xo(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch(e){
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    var Zo = null;
    function Ki(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Jo = null, cn = null, fn = null;
    function Hu(e) {
        if (e = Er(e)) {
            if (typeof Jo != "function") throw Error(_(280));
            var t = e.stateNode;
            t && (t = Fl(t), Jo(e.stateNode, e.type, t));
        }
    }
    function Ua(e) {
        cn ? fn ? fn.push(e) : fn = [
            e
        ] : cn = e;
    }
    function Fa() {
        if (cn) {
            var e = cn, t = fn;
            if (fn = cn = null, Hu(e), t) for(e = 0; e < t.length; e++)Hu(t[e]);
        }
    }
    function Aa(e, t) {
        return e(t);
    }
    function $a() {}
    var ao = !1;
    function Wa(e, t, n) {
        if (ao) return e(t, n);
        ao = !0;
        try {
            return Aa(e, t, n);
        } finally{
            ao = !1, (cn !== null || fn !== null) && ($a(), Fa());
        }
    }
    function lr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Fl(n);
        if (r === null) return null;
        n = r[t];
        e: switch(t){
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(_(231, t, typeof n));
        return n;
    }
    var qo = !1;
    if (qe) try {
        var In = {};
        Object.defineProperty(In, "passive", {
            get: function() {
                qo = !0;
            }
        }), window.addEventListener("test", In, In), window.removeEventListener("test", In, In);
    } catch  {
        qo = !1;
    }
    function Cd(e, t, n, r, l, o, i, u, s) {
        var a = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, a);
        } catch (h) {
            this.onError(h);
        }
    }
    var Gn = !1, sl = null, al = !1, bo = null, Pd = {
        onError: function(e) {
            Gn = !0, sl = e;
        }
    };
    function Nd(e, t, n, r, l, o, i, u, s) {
        Gn = !1, sl = null, Cd.apply(Pd, arguments);
    }
    function Td(e, t, n, r, l, o, i, u, s) {
        if (Nd.apply(this, arguments), Gn) {
            if (Gn) {
                var a = sl;
                Gn = !1, sl = null;
            } else throw Error(_(198));
            al || (al = !0, bo = a);
        }
    }
    function Ht(e) {
        var t = e, n = e;
        if (e.alternate) for(; t.return;)t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return;
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function Ba(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Qu(e) {
        if (Ht(e) !== e) throw Error(_(188));
    }
    function zd(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Ht(e), t === null) throw Error(_(188));
            return t !== e ? null : e;
        }
        for(var n = e, r = t;;){
            var l = n.return;
            if (l === null) break;
            var o = l.alternate;
            if (o === null) {
                if (r = l.return, r !== null) {
                    n = r;
                    continue;
                }
                break;
            }
            if (l.child === o.child) {
                for(o = l.child; o;){
                    if (o === n) return Qu(l), e;
                    if (o === r) return Qu(l), t;
                    o = o.sibling;
                }
                throw Error(_(188));
            }
            if (n.return !== r.return) n = l, r = o;
            else {
                for(var i = !1, u = l.child; u;){
                    if (u === n) {
                        i = !0, n = l, r = o;
                        break;
                    }
                    if (u === r) {
                        i = !0, r = l, n = o;
                        break;
                    }
                    u = u.sibling;
                }
                if (!i) {
                    for(u = o.child; u;){
                        if (u === n) {
                            i = !0, n = o, r = l;
                            break;
                        }
                        if (u === r) {
                            i = !0, r = o, n = l;
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!i) throw Error(_(189));
                }
            }
            if (n.alternate !== r) throw Error(_(190));
        }
        if (n.tag !== 3) throw Error(_(188));
        return n.stateNode.current === n ? e : t;
    }
    function Va(e) {
        return e = zd(e), e !== null ? Ha(e) : null;
    }
    function Ha(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = Ha(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var Qa = xe.unstable_scheduleCallback, Ku = xe.unstable_cancelCallback, Ld = xe.unstable_shouldYield, Rd = xe.unstable_requestPaint, Y = xe.unstable_now, jd = xe.unstable_getCurrentPriorityLevel, Gi = xe.unstable_ImmediatePriority, Ka = xe.unstable_UserBlockingPriority, cl = xe.unstable_NormalPriority, Od = xe.unstable_LowPriority, Ga = xe.unstable_IdlePriority, Ml = null, Ve = null;
    function Md(e) {
        if (Ve && typeof Ve.onCommitFiberRoot == "function") try {
            Ve.onCommitFiberRoot(Ml, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var De = Math.clz32 ? Math.clz32 : Ud, Id = Math.log, Dd = Math.LN2;
    function Ud(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Id(e) / Dd | 0) | 0;
    }
    var jr = 64, Or = 4194304;
    function Hn(e) {
        switch(e & -e){
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e;
        }
    }
    function fl(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var u = i & ~l;
            u !== 0 ? r = Hn(u) : (o &= i, o !== 0 && (r = Hn(o)));
        } else i = n & ~l, i !== 0 ? r = Hn(i) : o !== 0 && (r = Hn(o));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - De(t), l = 1 << n, r |= e[n], t &= ~l;
        return r;
    }
    function Fd(e, t) {
        switch(e){
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function Ad(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;){
            var i = 31 - De(o), u = 1 << i, s = l[i];
            s === -1 ? (!(u & n) || u & r) && (l[i] = Fd(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
        }
    }
    function ei(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Ya() {
        var e = jr;
        return jr <<= 1, !(jr & 4194240) && (jr = 64), e;
    }
    function co(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function Sr(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - De(t), e[t] = n;
    }
    function $d(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var l = 31 - De(n), o = 1 << l;
            t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
        }
    }
    function Yi(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - De(n), l = 1 << r;
            l & t | e[r] & t && (e[r] |= t), n &= ~l;
        }
    }
    var D = 0;
    function Xa(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var Za, Xi, Ja, qa, ba, ti = !1, Mr = [], pt = null, ht = null, mt = null, or = new Map, ir = new Map, ut = [], Wd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Gu(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                pt = null;
                break;
            case "dragenter":
            case "dragleave":
                ht = null;
                break;
            case "mouseover":
            case "mouseout":
                mt = null;
                break;
            case "pointerover":
            case "pointerout":
                or.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ir.delete(t.pointerId);
        }
    }
    function Dn(e, t, n, r, l, o) {
        return e === null || e.nativeEvent !== o ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: o,
            targetContainers: [
                l
            ]
        }, t !== null && (t = Er(t), t !== null && Xi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
    }
    function Bd(e, t, n, r, l) {
        switch(t){
            case "focusin":
                return pt = Dn(pt, e, t, n, r, l), !0;
            case "dragenter":
                return ht = Dn(ht, e, t, n, r, l), !0;
            case "mouseover":
                return mt = Dn(mt, e, t, n, r, l), !0;
            case "pointerover":
                var o = l.pointerId;
                return or.set(o, Dn(or.get(o) || null, e, t, n, r, l)), !0;
            case "gotpointercapture":
                return o = l.pointerId, ir.set(o, Dn(ir.get(o) || null, e, t, n, r, l)), !0;
        }
        return !1;
    }
    function ec(e) {
        var t = Ot(e.target);
        if (t !== null) {
            var n = Ht(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Ba(n), t !== null) {
                        e.blockedOn = t, ba(e.priority, function() {
                            Ja(n);
                        });
                        return;
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function Zr(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = ni(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                Zo = r, n.target.dispatchEvent(r), Zo = null;
            } else return t = Er(n), t !== null && Xi(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Yu(e, t, n) {
        Zr(e) && n.delete(t);
    }
    function Vd() {
        ti = !1, pt !== null && Zr(pt) && (pt = null), ht !== null && Zr(ht) && (ht = null), mt !== null && Zr(mt) && (mt = null), or.forEach(Yu), ir.forEach(Yu);
    }
    function Un(e, t) {
        e.blockedOn === t && (e.blockedOn = null, ti || (ti = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Vd)));
    }
    function ur(e) {
        function t(l) {
            return Un(l, e);
        }
        if (0 < Mr.length) {
            Un(Mr[0], e);
            for(var n = 1; n < Mr.length; n++){
                var r = Mr[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(pt !== null && Un(pt, e), ht !== null && Un(ht, e), mt !== null && Un(mt, e), or.forEach(t), ir.forEach(t), n = 0; n < ut.length; n++)r = ut[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < ut.length && (n = ut[0], n.blockedOn === null);)ec(n), n.blockedOn === null && ut.shift();
    }
    var dn = nt.ReactCurrentBatchConfig, dl = !0;
    function Hd(e, t, n, r) {
        var l = D, o = dn.transition;
        dn.transition = null;
        try {
            D = 1, Zi(e, t, n, r);
        } finally{
            D = l, dn.transition = o;
        }
    }
    function Qd(e, t, n, r) {
        var l = D, o = dn.transition;
        dn.transition = null;
        try {
            D = 4, Zi(e, t, n, r);
        } finally{
            D = l, dn.transition = o;
        }
    }
    function Zi(e, t, n, r) {
        if (dl) {
            var l = ni(e, t, n, r);
            if (l === null) ko(e, t, r, pl, n), Gu(e, r);
            else if (Bd(l, e, t, n, r)) r.stopPropagation();
            else if (Gu(e, r), t & 4 && -1 < Wd.indexOf(e)) {
                for(; l !== null;){
                    var o = Er(l);
                    if (o !== null && Za(o), o = ni(e, t, n, r), o === null && ko(e, t, r, pl, n), o === l) break;
                    l = o;
                }
                l !== null && r.stopPropagation();
            } else ko(e, t, r, null, n);
        }
    }
    var pl = null;
    function ni(e, t, n, r) {
        if (pl = null, e = Ki(r), e = Ot(e), e !== null) if (t = Ht(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = Ba(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return pl = e, null;
    }
    function tc(e) {
        switch(e){
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch(jd()){
                    case Gi:
                        return 1;
                    case Ka:
                        return 4;
                    case cl:
                    case Od:
                        return 16;
                    case Ga:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var ct = null, Ji = null, Jr = null;
    function nc() {
        if (Jr) return Jr;
        var e, t = Ji, n = t.length, r, l = "value" in ct ? ct.value : ct.textContent, o = l.length;
        for(e = 0; e < n && t[e] === l[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === l[o - r]; r++);
        return Jr = l.slice(e, 1 < r ? 1 - r : void 0);
    }
    function qr(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Ir() {
        return !0;
    }
    function Xu() {
        return !1;
    }
    function Ce(e) {
        function t(n, r, l, o, i) {
            this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
            for(var u in e)e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
            return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ir : Xu, this.isPropagationStopped = Xu, this;
        }
        return Q(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ir);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ir);
            },
            persist: function() {},
            isPersistent: Ir
        }), t;
    }
    var Nn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, qi = Ce(Nn), xr = Q({}, Nn, {
        view: 0,
        detail: 0
    }), Kd = Ce(xr), fo, po, Fn, Il = Q({}, xr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: bi,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Fn && (Fn && e.type === "mousemove" ? (fo = e.screenX - Fn.screenX, po = e.screenY - Fn.screenY) : po = fo = 0, Fn = e), fo);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : po;
        }
    }), Zu = Ce(Il), Gd = Q({}, Il, {
        dataTransfer: 0
    }), Yd = Ce(Gd), Xd = Q({}, xr, {
        relatedTarget: 0
    }), ho = Ce(Xd), Zd = Q({}, Nn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Jd = Ce(Zd), qd = Q({}, Nn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), bd = Ce(qd), ep = Q({}, Nn, {
        data: 0
    }), Ju = Ce(ep), tp = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, np = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, rp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function lp(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = rp[e]) ? !!t[e] : !1;
    }
    function bi() {
        return lp;
    }
    var op = Q({}, xr, {
        key: function(e) {
            if (e.key) {
                var t = tp[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = qr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? np[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: bi,
        charCode: function(e) {
            return e.type === "keypress" ? qr(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? qr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), ip = Ce(op), up = Q({}, Il, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }), qu = Ce(up), sp = Q({}, xr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: bi
    }), ap = Ce(sp), cp = Q({}, Nn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), fp = Ce(cp), dp = Q({}, Il, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), pp = Ce(dp), hp = [
        9,
        13,
        27,
        32
    ], eu = qe && "CompositionEvent" in window, Yn = null;
    qe && "documentMode" in document && (Yn = document.documentMode);
    var mp = qe && "TextEvent" in window && !Yn, rc = qe && (!eu || Yn && 8 < Yn && 11 >= Yn), bu = " ", es = !1;
    function lc(e, t) {
        switch(e){
            case "keyup":
                return hp.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function oc(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Jt = !1;
    function vp(e, t) {
        switch(e){
            case "compositionend":
                return oc(t);
            case "keypress":
                return t.which !== 32 ? null : (es = !0, bu);
            case "textInput":
                return e = t.data, e === bu && es ? null : e;
            default:
                return null;
        }
    }
    function gp(e, t) {
        if (Jt) return e === "compositionend" || !eu && lc(e, t) ? (e = nc(), Jr = Ji = ct = null, Jt = !1, e) : null;
        switch(e){
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case "compositionend":
                return rc && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var yp = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function ts(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!yp[e.type] : t === "textarea";
    }
    function ic(e, t, n, r) {
        Ua(r), t = hl(t, "onChange"), 0 < t.length && (n = new qi("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var Xn = null, sr = null;
    function wp(e) {
        gc(e, 0);
    }
    function Dl(e) {
        var t = en(e);
        if (La(t)) return e;
    }
    function _p(e, t) {
        if (e === "change") return t;
    }
    var uc = !1;
    if (qe) {
        var mo;
        if (qe) {
            var vo = "oninput" in document;
            if (!vo) {
                var ns = document.createElement("div");
                ns.setAttribute("oninput", "return;"), vo = typeof ns.oninput == "function";
            }
            mo = vo;
        } else mo = !1;
        uc = mo && (!document.documentMode || 9 < document.documentMode);
    }
    function rs() {
        Xn && (Xn.detachEvent("onpropertychange", sc), sr = Xn = null);
    }
    function sc(e) {
        if (e.propertyName === "value" && Dl(sr)) {
            var t = [];
            ic(t, sr, e, Ki(e)), Wa(wp, t);
        }
    }
    function kp(e, t, n) {
        e === "focusin" ? (rs(), Xn = t, sr = n, Xn.attachEvent("onpropertychange", sc)) : e === "focusout" && rs();
    }
    function Sp(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Dl(sr);
    }
    function xp(e, t) {
        if (e === "click") return Dl(t);
    }
    function Ep(e, t) {
        if (e === "input" || e === "change") return Dl(t);
    }
    function Cp(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Fe = typeof Object.is == "function" ? Object.is : Cp;
    function ar(e, t) {
        if (Fe(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var l = n[r];
            if (!Fo.call(t, l) || !Fe(e[l], t[l])) return !1;
        }
        return !0;
    }
    function ls(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function os(e, t) {
        var n = ls(e);
        e = 0;
        for(var r; n;){
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {
                    node: n,
                    offset: t - e
                };
                e = r;
            }
            e: {
                for(; n;){
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e;
                    }
                    n = n.parentNode;
                }
                n = void 0;
            }
            n = ls(n);
        }
    }
    function ac(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ac(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function cc() {
        for(var e = window, t = ul(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = ul(e.document);
        }
        return t;
    }
    function tu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Pp(e) {
        var t = cc(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && ac(n.ownerDocument.documentElement, n)) {
            if (r !== null && tu(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var l = n.textContent.length, o = Math.min(r.start, l);
                    r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = os(n, o);
                    var i = os(n, r);
                    l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
                }
            }
            for(t = [], e = n; e = e.parentNode;)e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for(typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
        }
    }
    var Np = qe && "documentMode" in document && 11 >= document.documentMode, qt = null, ri = null, Zn = null, li = !1;
    function is(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        li || qt == null || qt !== ul(r) || (r = qt, "selectionStart" in r && tu(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Zn && ar(Zn, r) || (Zn = r, r = hl(ri, "onSelect"), 0 < r.length && (t = new qi("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = qt)));
    }
    function Dr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var bt = {
        animationend: Dr("Animation", "AnimationEnd"),
        animationiteration: Dr("Animation", "AnimationIteration"),
        animationstart: Dr("Animation", "AnimationStart"),
        transitionend: Dr("Transition", "TransitionEnd")
    }, go = {}, fc = {};
    qe && (fc = document.createElement("div").style, "AnimationEvent" in window || (delete bt.animationend.animation, delete bt.animationiteration.animation, delete bt.animationstart.animation), "TransitionEvent" in window || delete bt.transitionend.transition);
    function Ul(e) {
        if (go[e]) return go[e];
        if (!bt[e]) return e;
        var t = bt[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in fc) return go[e] = t[n];
        return e;
    }
    var dc = Ul("animationend"), pc = Ul("animationiteration"), hc = Ul("animationstart"), mc = Ul("transitionend"), vc = new Map, us = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Et(e, t) {
        vc.set(e, t), Vt(t, [
            e
        ]);
    }
    for(var yo = 0; yo < us.length; yo++){
        var wo = us[yo], Tp = wo.toLowerCase(), zp = wo[0].toUpperCase() + wo.slice(1);
        Et(Tp, "on" + zp);
    }
    Et(dc, "onAnimationEnd");
    Et(pc, "onAnimationIteration");
    Et(hc, "onAnimationStart");
    Et("dblclick", "onDoubleClick");
    Et("focusin", "onFocus");
    Et("focusout", "onBlur");
    Et(mc, "onTransitionEnd");
    gn("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    gn("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    gn("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    gn("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    Vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Vt("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    Vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Qn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));
    function ss(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Td(r, t, void 0, e), e.currentTarget = null;
    }
    function gc(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], l = r.event;
            r = r.listeners;
            e: {
                var o = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var u = r[i], s = u.instance, a = u.currentTarget;
                    if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
                    ss(l, u, a), o = s;
                }
                else for(i = 0; i < r.length; i++){
                    if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
                    ss(l, u, a), o = s;
                }
            }
        }
        if (al) throw e = bo, al = !1, bo = null, e;
    }
    function F(e, t) {
        var n = t[ai];
        n === void 0 && (n = t[ai] = new Set);
        var r = e + "__bubble";
        n.has(r) || (yc(t, e, 2, !1), n.add(r));
    }
    function _o(e, t, n) {
        var r = 0;
        t && (r |= 4), yc(n, e, r, t);
    }
    var Ur = "_reactListening" + Math.random().toString(36).slice(2);
    function cr(e) {
        if (!e[Ur]) {
            e[Ur] = !0, Ca.forEach(function(n) {
                n !== "selectionchange" && (Lp.has(n) || _o(n, !1, e), _o(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ur] || (t[Ur] = !0, _o("selectionchange", !1, t));
        }
    }
    function yc(e, t, n, r) {
        switch(tc(t)){
            case 1:
                var l = Hd;
                break;
            case 4:
                l = Qd;
                break;
            default:
                l = Zi;
        }
        n = l.bind(null, t, n, e), l = void 0, !qo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: l
        }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
            passive: l
        }) : e.addEventListener(t, n, !1);
    }
    function ko(e, t, n, r, l) {
        var o = r;
        if (!(t & 1) && !(t & 2) && r !== null) e: for(;;){
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || u.nodeType === 8 && u.parentNode === l) break;
                if (i === 4) for(i = r.return; i !== null;){
                    var s = i.tag;
                    if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                    i = i.return;
                }
                for(; u !== null;){
                    if (i = Ot(u), i === null) return;
                    if (s = i.tag, s === 5 || s === 6) {
                        r = o = i;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
        Wa(function() {
            var a = o, h = Ki(n), f = [];
            e: {
                var m = vc.get(e);
                if (m !== void 0) {
                    var g = qi, y = e;
                    switch(e){
                        case "keypress":
                            if (qr(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            g = ip;
                            break;
                        case "focusin":
                            y = "focus", g = ho;
                            break;
                        case "focusout":
                            y = "blur", g = ho;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            g = ho;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            g = Zu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            g = Yd;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            g = ap;
                            break;
                        case dc:
                        case pc:
                        case hc:
                            g = Jd;
                            break;
                        case mc:
                            g = fp;
                            break;
                        case "scroll":
                            g = Kd;
                            break;
                        case "wheel":
                            g = pp;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            g = bd;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            g = qu;
                    }
                    var w = (t & 4) !== 0, S = !w && e === "scroll", d = w ? m !== null ? m + "Capture" : null : m;
                    w = [];
                    for(var c = a, p; c !== null;){
                        p = c;
                        var v = p.stateNode;
                        if (p.tag === 5 && v !== null && (p = v, d !== null && (v = lr(c, d), v != null && w.push(fr(c, v, p)))), S) break;
                        c = c.return;
                    }
                    0 < w.length && (m = new g(m, y, null, n, h), f.push({
                        event: m,
                        listeners: w
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && n !== Zo && (y = n.relatedTarget || n.fromElement) && (Ot(y) || y[be])) break e;
                    if ((g || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = a, y = y ? Ot(y) : null, y !== null && (S = Ht(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = a), g !== y)) {
                        if (w = Zu, v = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = qu, v = "onPointerLeave", d = "onPointerEnter", c = "pointer"), S = g == null ? m : en(g), p = y == null ? m : en(y), m = new w(v, c + "leave", g, n, h), m.target = S, m.relatedTarget = p, v = null, Ot(h) === a && (w = new w(d, c + "enter", y, n, h), w.target = p, w.relatedTarget = S, v = w), S = v, g && y) t: {
                            for(w = g, d = y, c = 0, p = w; p; p = Gt(p))c++;
                            for(p = 0, v = d; v; v = Gt(v))p++;
                            for(; 0 < c - p;)w = Gt(w), c--;
                            for(; 0 < p - c;)d = Gt(d), p--;
                            for(; c--;){
                                if (w === d || d !== null && w === d.alternate) break t;
                                w = Gt(w), d = Gt(d);
                            }
                            w = null;
                        }
                        else w = null;
                        g !== null && as(f, m, g, w, !1), y !== null && S !== null && as(f, S, y, w, !0);
                    }
                }
                e: {
                    if (m = a ? en(a) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var x = _p;
                    else if (ts(m)) if (uc) x = Ep;
                    else {
                        x = Sp;
                        var N = kp;
                    }
                    else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = xp);
                    if (x && (x = x(e, a))) {
                        ic(f, x, n, h);
                        break e;
                    }
                    N && N(e, m, a), e === "focusout" && (N = m._wrapperState) && N.controlled && m.type === "number" && Qo(m, "number", m.value);
                }
                switch(N = a ? en(a) : window, e){
                    case "focusin":
                        (ts(N) || N.contentEditable === "true") && (qt = N, ri = a, Zn = null);
                        break;
                    case "focusout":
                        Zn = ri = qt = null;
                        break;
                    case "mousedown":
                        li = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        li = !1, is(f, n, h);
                        break;
                    case "selectionchange":
                        if (Np) break;
                    case "keydown":
                    case "keyup":
                        is(f, n, h);
                }
                var z;
                if (eu) e: {
                    switch(e){
                        case "compositionstart":
                            var L = "onCompositionStart";
                            break e;
                        case "compositionend":
                            L = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            L = "onCompositionUpdate";
                            break e;
                    }
                    L = void 0;
                }
                else Jt ? lc(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
                L && (rc && n.locale !== "ko" && (Jt || L !== "onCompositionStart" ? L === "onCompositionEnd" && Jt && (z = nc()) : (ct = h, Ji = "value" in ct ? ct.value : ct.textContent, Jt = !0)), N = hl(a, L), 0 < N.length && (L = new Ju(L, e, null, n, h), f.push({
                    event: L,
                    listeners: N
                }), z ? L.data = z : (z = oc(n), z !== null && (L.data = z)))), (z = mp ? vp(e, n) : gp(e, n)) && (a = hl(a, "onBeforeInput"), 0 < a.length && (h = new Ju("onBeforeInput", "beforeinput", null, n, h), f.push({
                    event: h,
                    listeners: a
                }), h.data = z));
            }
            gc(f, t);
        });
    }
    function fr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function hl(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var l = e, o = l.stateNode;
            l.tag === 5 && o !== null && (l = o, o = lr(e, n), o != null && r.unshift(fr(e, o, l)), o = lr(e, t), o != null && r.push(fr(e, o, l))), e = e.return;
        }
        return r;
    }
    function Gt(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function as(e, t, n, r, l) {
        for(var o = t._reactName, i = []; n !== null && n !== r;){
            var u = n, s = u.alternate, a = u.stateNode;
            if (s !== null && s === r) break;
            u.tag === 5 && a !== null && (u = a, l ? (s = lr(n, o), s != null && i.unshift(fr(n, s, u))) : l || (s = lr(n, o), s != null && i.push(fr(n, s, u)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var Rp = /\r\n?/g, jp = /\u0000|\uFFFD/g;
    function cs(e) {
        return (typeof e == "string" ? e : "" + e).replace(Rp, `
`).replace(jp, "");
    }
    function Fr(e, t, n) {
        if (t = cs(t), cs(e) !== t && n) throw Error(_(425));
    }
    function ml() {}
    var oi = null, ii = null;
    function ui(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var si = typeof setTimeout == "function" ? setTimeout : void 0, Op = typeof clearTimeout == "function" ? clearTimeout : void 0, fs = typeof Promise == "function" ? Promise : void 0, Mp = typeof queueMicrotask == "function" ? queueMicrotask : typeof fs < "u" ? function(e) {
        return fs.resolve(null).then(e).catch(Ip);
    } : si;
    function Ip(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function So(e, t) {
        var n = t, r = 0;
        do {
            var l = n.nextSibling;
            if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), ur(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = l;
        }while (n);
        ur(t);
    }
    function vt(e) {
        for(; e != null; e = e.nextSibling){
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null;
            }
        }
        return e;
    }
    function ds(e) {
        e = e.previousSibling;
        for(var t = 0; e;){
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--;
                } else n === "/$" && t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var Tn = Math.random().toString(36).slice(2), We = "__reactFiber$" + Tn, dr = "__reactProps$" + Tn, be = "__reactContainer$" + Tn, ai = "__reactEvents$" + Tn, Dp = "__reactListeners$" + Tn, Up = "__reactHandles$" + Tn;
    function Ot(e) {
        var t = e[We];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[be] || n[We]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = ds(e); e !== null;){
                    if (n = e[We]) return n;
                    e = ds(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function Er(e) {
        return e = e[We] || e[be], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function en(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(_(33));
    }
    function Fl(e) {
        return e[dr] || null;
    }
    var ci = [], tn = -1;
    function Ct(e) {
        return {
            current: e
        };
    }
    function A(e) {
        0 > tn || (e.current = ci[tn], ci[tn] = null, tn--);
    }
    function U(e, t) {
        tn++, ci[tn] = e.current, e.current = t;
    }
    var xt = {}, se = Ct(xt), me = Ct(!1), Ft = xt;
    function yn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return xt;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var l = {}, o;
        for(o in n)l[o] = t[o];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
    }
    function ve(e) {
        return e = e.childContextTypes, e != null;
    }
    function vl() {
        A(me), A(se);
    }
    function ps(e, t, n) {
        if (se.current !== xt) throw Error(_(168));
        U(se, t), U(me, n);
    }
    function wc(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var l in r)if (!(l in t)) throw Error(_(108, kd(e) || "Unknown", l));
        return Q({}, n, r);
    }
    function gl(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xt, Ft = se.current, U(se, e), U(me, me.current), !0;
    }
    function hs(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(_(169));
        n ? (e = wc(e, t, Ft), r.__reactInternalMemoizedMergedChildContext = e, A(me), A(se), U(se, e)) : A(me), U(me, n);
    }
    var Ge = null, Al = !1, xo = !1;
    function _c(e) {
        Ge === null ? Ge = [
            e
        ] : Ge.push(e);
    }
    function Fp(e) {
        Al = !0, _c(e);
    }
    function Pt() {
        if (!xo && Ge !== null) {
            xo = !0;
            var e = 0, t = D;
            try {
                var n = Ge;
                for(D = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                Ge = null, Al = !1;
            } catch (l) {
                throw Ge !== null && (Ge = Ge.slice(e + 1)), Qa(Gi, Pt), l;
            } finally{
                D = t, xo = !1;
            }
        }
        return null;
    }
    var nn = [], rn = 0, yl = null, wl = 0, Pe = [], Ne = 0, At = null, Xe = 1, Ze = "";
    function Lt(e, t) {
        nn[rn++] = wl, nn[rn++] = yl, yl = e, wl = t;
    }
    function kc(e, t, n) {
        Pe[Ne++] = Xe, Pe[Ne++] = Ze, Pe[Ne++] = At, At = e;
        var r = Xe;
        e = Ze;
        var l = 32 - De(r) - 1;
        r &= ~(1 << l), n += 1;
        var o = 32 - De(t) + l;
        if (30 < o) {
            var i = l - l % 5;
            o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Xe = 1 << 32 - De(t) + l | n << l | r, Ze = o + e;
        } else Xe = 1 << o | n << l | r, Ze = e;
    }
    function nu(e) {
        e.return !== null && (Lt(e, 1), kc(e, 1, 0));
    }
    function ru(e) {
        for(; e === yl;)yl = nn[--rn], nn[rn] = null, wl = nn[--rn], nn[rn] = null;
        for(; e === At;)At = Pe[--Ne], Pe[Ne] = null, Ze = Pe[--Ne], Pe[Ne] = null, Xe = Pe[--Ne], Pe[Ne] = null;
    }
    var Se = null, ke = null, $ = !1, Ie = null;
    function Sc(e, t) {
        var n = Te(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function ms(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Se = e, ke = vt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Se = e, ke = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = At !== null ? {
                    id: Xe,
                    overflow: Ze
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = Te(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Se = e, ke = null, !0) : !1;
            default:
                return !1;
        }
    }
    function fi(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function di(e) {
        if ($) {
            var t = ke;
            if (t) {
                var n = t;
                if (!ms(e, t)) {
                    if (fi(e)) throw Error(_(418));
                    t = vt(n.nextSibling);
                    var r = Se;
                    t && ms(e, t) ? Sc(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, Se = e);
                }
            } else {
                if (fi(e)) throw Error(_(418));
                e.flags = e.flags & -4097 | 2, $ = !1, Se = e;
            }
        }
    }
    function vs(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Se = e;
    }
    function Ar(e) {
        if (e !== Se) return !1;
        if (!$) return vs(e), $ = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ui(e.type, e.memoizedProps)), t && (t = ke)) {
            if (fi(e)) throw xc(), Error(_(418));
            for(; t;)Sc(e, t), t = vt(t.nextSibling);
        }
        if (vs(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(_(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                ke = vt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                ke = null;
            }
        } else ke = Se ? vt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function xc() {
        for(var e = ke; e;)e = vt(e.nextSibling);
    }
    function wn() {
        ke = Se = null, $ = !1;
    }
    function lu(e) {
        Ie === null ? Ie = [
            e
        ] : Ie.push(e);
    }
    var Ap = nt.ReactCurrentBatchConfig;
    function An(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(_(309));
                    var r = n.stateNode;
                }
                if (!r) throw Error(_(147, e));
                var l = r, o = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                    var u = l.refs;
                    i === null ? delete u[o] : u[o] = i;
                }, t._stringRef = o, t);
            }
            if (typeof e != "string") throw Error(_(284));
            if (!n._owner) throw Error(_(290, e));
        }
        return e;
    }
    function $r(e, t) {
        throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function gs(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Ec(e) {
        function t(d, c) {
            if (e) {
                var p = d.deletions;
                p === null ? (d.deletions = [
                    c
                ], d.flags |= 16) : p.push(c);
            }
        }
        function n(d, c) {
            if (!e) return null;
            for(; c !== null;)t(d, c), c = c.sibling;
            return null;
        }
        function r(d, c) {
            for(d = new Map; c !== null;)c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
            return d;
        }
        function l(d, c) {
            return d = _t(d, c), d.index = 0, d.sibling = null, d;
        }
        function o(d, c, p) {
            return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < c ? (d.flags |= 2, c) : p) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
        }
        function i(d) {
            return e && d.alternate === null && (d.flags |= 2), d;
        }
        function u(d, c, p, v) {
            return c === null || c.tag !== 6 ? (c = Lo(p, d.mode, v), c.return = d, c) : (c = l(c, p), c.return = d, c);
        }
        function s(d, c, p, v) {
            var x = p.type;
            return x === Zt ? h(d, c, p.props.children, v, p.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ot && gs(x) === c.type) ? (v = l(c, p.props), v.ref = An(d, c, p), v.return = d, v) : (v = ol(p.type, p.key, p.props, null, d.mode, v), v.ref = An(d, c, p), v.return = d, v);
        }
        function a(d, c, p, v) {
            return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Ro(p, d.mode, v), c.return = d, c) : (c = l(c, p.children || []), c.return = d, c);
        }
        function h(d, c, p, v, x) {
            return c === null || c.tag !== 7 ? (c = Ut(p, d.mode, v, x), c.return = d, c) : (c = l(c, p), c.return = d, c);
        }
        function f(d, c, p) {
            if (typeof c == "string" && c !== "" || typeof c == "number") return c = Lo("" + c, d.mode, p), c.return = d, c;
            if (typeof c == "object" && c !== null) {
                switch(c.$$typeof){
                    case zr:
                        return p = ol(c.type, c.key, c.props, null, d.mode, p), p.ref = An(d, null, c), p.return = d, p;
                    case Xt:
                        return c = Ro(c, d.mode, p), c.return = d, c;
                    case ot:
                        var v = c._init;
                        return f(d, v(c._payload), p);
                }
                if (Vn(c) || Mn(c)) return c = Ut(c, d.mode, p, null), c.return = d, c;
                $r(d, c);
            }
            return null;
        }
        function m(d, c, p, v) {
            var x = c !== null ? c.key : null;
            if (typeof p == "string" && p !== "" || typeof p == "number") return x !== null ? null : u(d, c, "" + p, v);
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case zr:
                        return p.key === x ? s(d, c, p, v) : null;
                    case Xt:
                        return p.key === x ? a(d, c, p, v) : null;
                    case ot:
                        return x = p._init, m(d, c, x(p._payload), v);
                }
                if (Vn(p) || Mn(p)) return x !== null ? null : h(d, c, p, v, null);
                $r(d, p);
            }
            return null;
        }
        function g(d, c, p, v, x) {
            if (typeof v == "string" && v !== "" || typeof v == "number") return d = d.get(p) || null, u(c, d, "" + v, x);
            if (typeof v == "object" && v !== null) {
                switch(v.$$typeof){
                    case zr:
                        return d = d.get(v.key === null ? p : v.key) || null, s(c, d, v, x);
                    case Xt:
                        return d = d.get(v.key === null ? p : v.key) || null, a(c, d, v, x);
                    case ot:
                        var N = v._init;
                        return g(d, c, p, N(v._payload), x);
                }
                if (Vn(v) || Mn(v)) return d = d.get(p) || null, h(c, d, v, x, null);
                $r(c, v);
            }
            return null;
        }
        function y(d, c, p, v) {
            for(var x = null, N = null, z = c, L = c = 0, W = null; z !== null && L < p.length; L++){
                z.index > L ? (W = z, z = null) : W = z.sibling;
                var j = m(d, z, p[L], v);
                if (j === null) {
                    z === null && (z = W);
                    break;
                }
                e && z && j.alternate === null && t(d, z), c = o(j, c, L), N === null ? x = j : N.sibling = j, N = j, z = W;
            }
            if (L === p.length) return n(d, z), $ && Lt(d, L), x;
            if (z === null) {
                for(; L < p.length; L++)z = f(d, p[L], v), z !== null && (c = o(z, c, L), N === null ? x = z : N.sibling = z, N = z);
                return $ && Lt(d, L), x;
            }
            for(z = r(d, z); L < p.length; L++)W = g(z, d, L, p[L], v), W !== null && (e && W.alternate !== null && z.delete(W.key === null ? L : W.key), c = o(W, c, L), N === null ? x = W : N.sibling = W, N = W);
            return e && z.forEach(function(ye) {
                return t(d, ye);
            }), $ && Lt(d, L), x;
        }
        function w(d, c, p, v) {
            var x = Mn(p);
            if (typeof x != "function") throw Error(_(150));
            if (p = x.call(p), p == null) throw Error(_(151));
            for(var N = x = null, z = c, L = c = 0, W = null, j = p.next(); z !== null && !j.done; L++, j = p.next()){
                z.index > L ? (W = z, z = null) : W = z.sibling;
                var ye = m(d, z, j.value, v);
                if (ye === null) {
                    z === null && (z = W);
                    break;
                }
                e && z && ye.alternate === null && t(d, z), c = o(ye, c, L), N === null ? x = ye : N.sibling = ye, N = ye, z = W;
            }
            if (j.done) return n(d, z), $ && Lt(d, L), x;
            if (z === null) {
                for(; !j.done; L++, j = p.next())j = f(d, j.value, v), j !== null && (c = o(j, c, L), N === null ? x = j : N.sibling = j, N = j);
                return $ && Lt(d, L), x;
            }
            for(z = r(d, z); !j.done; L++, j = p.next())j = g(z, d, L, j.value, v), j !== null && (e && j.alternate !== null && z.delete(j.key === null ? L : j.key), c = o(j, c, L), N === null ? x = j : N.sibling = j, N = j);
            return e && z.forEach(function(jn) {
                return t(d, jn);
            }), $ && Lt(d, L), x;
        }
        function S(d, c, p, v) {
            if (typeof p == "object" && p !== null && p.type === Zt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case zr:
                        e: {
                            for(var x = p.key, N = c; N !== null;){
                                if (N.key === x) {
                                    if (x = p.type, x === Zt) {
                                        if (N.tag === 7) {
                                            n(d, N.sibling), c = l(N, p.props.children), c.return = d, d = c;
                                            break e;
                                        }
                                    } else if (N.elementType === x || typeof x == "object" && x !== null && x.$$typeof === ot && gs(x) === N.type) {
                                        n(d, N.sibling), c = l(N, p.props), c.ref = An(d, N, p), c.return = d, d = c;
                                        break e;
                                    }
                                    n(d, N);
                                    break;
                                } else t(d, N);
                                N = N.sibling;
                            }
                            p.type === Zt ? (c = Ut(p.props.children, d.mode, v, p.key), c.return = d, d = c) : (v = ol(p.type, p.key, p.props, null, d.mode, v), v.ref = An(d, c, p), v.return = d, d = v);
                        }
                        return i(d);
                    case Xt:
                        e: {
                            for(N = p.key; c !== null;){
                                if (c.key === N) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                    n(d, c.sibling), c = l(c, p.children || []), c.return = d, d = c;
                                    break e;
                                } else {
                                    n(d, c);
                                    break;
                                }
                                else t(d, c);
                                c = c.sibling;
                            }
                            c = Ro(p, d.mode, v), c.return = d, d = c;
                        }
                        return i(d);
                    case ot:
                        return N = p._init, S(d, c, N(p._payload), v);
                }
                if (Vn(p)) return y(d, c, p, v);
                if (Mn(p)) return w(d, c, p, v);
                $r(d, p);
            }
            return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, p), c.return = d, d = c) : (n(d, c), c = Lo(p, d.mode, v), c.return = d, d = c), i(d)) : n(d, c);
        }
        return S;
    }
    var _n = Ec(!0), Cc = Ec(!1), _l = Ct(null), kl = null, ln = null, ou = null;
    function iu() {
        ou = ln = kl = null;
    }
    function uu(e) {
        var t = _l.current;
        A(_l), e._currentValue = t;
    }
    function pi(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function pn(e, t) {
        kl = e, ou = ln = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (he = !0), e.firstContext = null);
    }
    function Le(e) {
        var t = e._currentValue;
        if (ou !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, ln === null) {
            if (kl === null) throw Error(_(308));
            ln = e, kl.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else ln = ln.next = e;
        return t;
    }
    var Mt = null;
    function su(e) {
        Mt === null ? Mt = [
            e
        ] : Mt.push(e);
    }
    function Pc(e, t, n, r) {
        var l = t.interleaved;
        return l === null ? (n.next = n, su(t)) : (n.next = l.next, l.next = n), t.interleaved = n, et(e, r);
    }
    function et(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var it = !1;
    function au(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        };
    }
    function Nc(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function Je(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function gt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, I & 2) {
            var l = r.pending;
            return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, et(e, n);
        }
        return l = r.interleaved, l === null ? (t.next = t, su(r)) : (t.next = l.next, l.next = t), r.interleaved = t, et(e, n);
    }
    function br(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Yi(e, n);
        }
    }
    function ys(e, t) {
        var n = e.updateQueue, r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
            var l = null, o = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var i = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    o === null ? l = o = i : o = o.next = i, n = n.next;
                }while (n !== null);
                o === null ? l = o = t : o = o.next = t;
            } else l = o = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = n;
            return;
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
    }
    function Sl(e, t, n, r) {
        var l = e.updateQueue;
        it = !1;
        var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
        if (u !== null) {
            l.shared.pending = null;
            var s = u, a = s.next;
            s.next = null, i === null ? o = a : i.next = a, i = s;
            var h = e.alternate;
            h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = a : u.next = a, h.lastBaseUpdate = s));
        }
        if (o !== null) {
            var f = l.baseState;
            i = 0, h = a = s = null, u = o;
            do {
                var m = u.lane, g = u.eventTime;
                if ((r & m) === m) {
                    h !== null && (h = h.next = {
                        eventTime: g,
                        lane: 0,
                        tag: u.tag,
                        payload: u.payload,
                        callback: u.callback,
                        next: null
                    });
                    e: {
                        var y = e, w = u;
                        switch(m = t, g = n, w.tag){
                            case 1:
                                if (y = w.payload, typeof y == "function") {
                                    f = y.call(g, f, m);
                                    break e;
                                }
                                f = y;
                                break e;
                            case 3:
                                y.flags = y.flags & -65537 | 128;
                            case 0:
                                if (y = w.payload, m = typeof y == "function" ? y.call(g, f, m) : y, m == null) break e;
                                f = Q({}, f, m);
                                break e;
                            case 2:
                                it = !0;
                        }
                    }
                    u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [
                        u
                    ] : m.push(u));
                } else g = {
                    eventTime: g,
                    lane: m,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                }, h === null ? (a = h = g, s = f) : h = h.next = g, i |= m;
                if (u = u.next, u === null) {
                    if (u = l.shared.pending, u === null) break;
                    m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
                }
            }while (!0);
            if (h === null && (s = f), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
                l = t;
                do i |= l.lane, l = l.next;
                while (l !== t);
            } else o === null && (l.shared.lanes = 0);
            Wt |= i, e.lanes = i, e.memoizedState = f;
        }
    }
    function ws(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(_(191, l));
                l.call(r);
            }
        }
    }
    var Cr = {}, He = Ct(Cr), pr = Ct(Cr), hr = Ct(Cr);
    function It(e) {
        if (e === Cr) throw Error(_(174));
        return e;
    }
    function cu(e, t) {
        switch(U(hr, t), U(pr, e), U(He, Cr), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Go(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Go(t, e);
        }
        A(He), U(He, t);
    }
    function kn() {
        A(He), A(pr), A(hr);
    }
    function Tc(e) {
        It(hr.current);
        var t = It(He.current), n = Go(t, e.type);
        t !== n && (U(pr, e), U(He, n));
    }
    function fu(e) {
        pr.current === e && (A(He), A(pr));
    }
    var B = Ct(0);
    function xl(e) {
        for(var t = e; t !== null;){
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128) return t;
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === e) return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
        return null;
    }
    var Eo = [];
    function du() {
        for(var e = 0; e < Eo.length; e++)Eo[e]._workInProgressVersionPrimary = null;
        Eo.length = 0;
    }
    var el = nt.ReactCurrentDispatcher, Co = nt.ReactCurrentBatchConfig, $t = 0, V = null, J = null, ee = null, El = !1, Jn = !1, mr = 0, $p = 0;
    function oe() {
        throw Error(_(321));
    }
    function pu(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!Fe(e[n], t[n])) return !1;
        return !0;
    }
    function hu(e, t, n, r, l, o) {
        if ($t = o, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, el.current = e === null || e.memoizedState === null ? Hp : Qp, e = n(r, l), Jn) {
            o = 0;
            do {
                if (Jn = !1, mr = 0, 25 <= o) throw Error(_(301));
                o += 1, ee = J = null, t.updateQueue = null, el.current = Kp, e = n(r, l);
            }while (Jn);
        }
        if (el.current = Cl, t = J !== null && J.next !== null, $t = 0, ee = J = V = null, El = !1, t) throw Error(_(300));
        return e;
    }
    function mu() {
        var e = mr !== 0;
        return mr = 0, e;
    }
    function $e() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ee === null ? V.memoizedState = ee = e : ee = ee.next = e, ee;
    }
    function Re() {
        if (J === null) {
            var e = V.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = J.next;
        var t = ee === null ? V.memoizedState : ee.next;
        if (t !== null) ee = t, J = e;
        else {
            if (e === null) throw Error(_(310));
            J = e, e = {
                memoizedState: J.memoizedState,
                baseState: J.baseState,
                baseQueue: J.baseQueue,
                queue: J.queue,
                next: null
            }, ee === null ? V.memoizedState = ee = e : ee = ee.next = e;
        }
        return ee;
    }
    function vr(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Po(e) {
        var t = Re(), n = t.queue;
        if (n === null) throw Error(_(311));
        n.lastRenderedReducer = e;
        var r = J, l = r.baseQueue, o = n.pending;
        if (o !== null) {
            if (l !== null) {
                var i = l.next;
                l.next = o.next, o.next = i;
            }
            r.baseQueue = l = o, n.pending = null;
        }
        if (l !== null) {
            o = l.next, r = r.baseState;
            var u = i = null, s = null, a = o;
            do {
                var h = a.lane;
                if (($t & h) === h) s !== null && (s = s.next = {
                    lane: 0,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
                else {
                    var f = {
                        lane: h,
                        action: a.action,
                        hasEagerState: a.hasEagerState,
                        eagerState: a.eagerState,
                        next: null
                    };
                    s === null ? (u = s = f, i = r) : s = s.next = f, V.lanes |= h, Wt |= h;
                }
                a = a.next;
            }while (a !== null && a !== o);
            s === null ? i = r : s.next = u, Fe(r, t.memoizedState) || (he = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            l = e;
            do o = l.lane, V.lanes |= o, Wt |= o, l = l.next;
            while (l !== e);
        } else l === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function No(e) {
        var t = Re(), n = t.queue;
        if (n === null) throw Error(_(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, l = n.pending, o = t.memoizedState;
        if (l !== null) {
            n.pending = null;
            var i = l = l.next;
            do o = e(o, i.action), i = i.next;
            while (i !== l);
            Fe(o, t.memoizedState) || (he = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
        }
        return [
            o,
            r
        ];
    }
    function zc() {}
    function Lc(e, t) {
        var n = V, r = Re(), l = t(), o = !Fe(r.memoizedState, l);
        if (o && (r.memoizedState = l, he = !0), r = r.queue, vu(Oc.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || o || ee !== null && ee.memoizedState.tag & 1) {
            if (n.flags |= 2048, gr(9, jc.bind(null, n, r, l, t), void 0, null), te === null) throw Error(_(349));
            $t & 30 || Rc(n, t, l);
        }
        return l;
    }
    function Rc(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = V.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, V.updateQueue = t, t.stores = [
            e
        ]) : (n = t.stores, n === null ? t.stores = [
            e
        ] : n.push(e));
    }
    function jc(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Mc(t) && Ic(e);
    }
    function Oc(e, t, n) {
        return n(function() {
            Mc(t) && Ic(e);
        });
    }
    function Mc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Fe(e, n);
        } catch  {
            return !0;
        }
    }
    function Ic(e) {
        var t = et(e, 1);
        t !== null && Ue(t, e, 1, -1);
    }
    function _s(e) {
        var t = $e();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: vr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Vp.bind(null, V, e), [
            t.memoizedState,
            e
        ];
    }
    function gr(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = V.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
    }
    function Dc() {
        return Re().memoizedState;
    }
    function tl(e, t, n, r) {
        var l = $e();
        V.flags |= e, l.memoizedState = gr(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function $l(e, t, n, r) {
        var l = Re();
        r = r === void 0 ? null : r;
        var o = void 0;
        if (J !== null) {
            var i = J.memoizedState;
            if (o = i.destroy, r !== null && pu(r, i.deps)) {
                l.memoizedState = gr(t, n, o, r);
                return;
            }
        }
        V.flags |= e, l.memoizedState = gr(1 | t, n, o, r);
    }
    function ks(e, t) {
        return tl(8390656, 8, e, t);
    }
    function vu(e, t) {
        return $l(2048, 8, e, t);
    }
    function Uc(e, t) {
        return $l(4, 2, e, t);
    }
    function Fc(e, t) {
        return $l(4, 4, e, t);
    }
    function Ac(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function $c(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, $l(4, 4, Ac.bind(null, t, e), n);
    }
    function gu() {}
    function Wc(e, t) {
        var n = Re();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && pu(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function Bc(e, t) {
        var n = Re();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && pu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Vc(e, t, n) {
        return $t & 21 ? (Fe(n, t) || (n = Ya(), V.lanes |= n, Wt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, he = !0), e.memoizedState = n);
    }
    function Wp(e, t) {
        var n = D;
        D = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Co.transition;
        Co.transition = {};
        try {
            e(!1), t();
        } finally{
            D = n, Co.transition = r;
        }
    }
    function Hc() {
        return Re().memoizedState;
    }
    function Bp(e, t, n) {
        var r = wt(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Qc(e)) Kc(t, n);
        else if (n = Pc(e, t, n, r), n !== null) {
            var l = ce();
            Ue(n, e, r, l), Gc(n, t, r);
        }
    }
    function Vp(e, t, n) {
        var r = wt(e), l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Qc(e)) Kc(t, l);
        else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
                var i = t.lastRenderedState, u = o(i, n);
                if (l.hasEagerState = !0, l.eagerState = u, Fe(u, i)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l, su(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
                    return;
                }
            } catch  {} finally{}
            n = Pc(e, t, l, r), n !== null && (l = ce(), Ue(n, e, r, l), Gc(n, t, r));
        }
    }
    function Qc(e) {
        var t = e.alternate;
        return e === V || t !== null && t === V;
    }
    function Kc(e, t) {
        Jn = El = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Gc(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Yi(e, n);
        }
    }
    var Cl = {
        readContext: Le,
        useCallback: oe,
        useContext: oe,
        useEffect: oe,
        useImperativeHandle: oe,
        useInsertionEffect: oe,
        useLayoutEffect: oe,
        useMemo: oe,
        useReducer: oe,
        useRef: oe,
        useState: oe,
        useDebugValue: oe,
        useDeferredValue: oe,
        useTransition: oe,
        useMutableSource: oe,
        useSyncExternalStore: oe,
        useId: oe,
        unstable_isNewReconciler: !1
    }, Hp = {
        readContext: Le,
        useCallback: function(e, t) {
            return $e().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: Le,
        useEffect: ks,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, tl(4194308, 4, Ac.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return tl(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return tl(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = $e();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
                e,
                t
            ], e;
        },
        useReducer: function(e, t, n) {
            var r = $e();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Bp.bind(null, V, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var t = $e();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: _s,
        useDebugValue: gu,
        useDeferredValue: function(e) {
            return $e().memoizedState = e;
        },
        useTransition: function() {
            var e = _s(!1), t = e[0];
            return e = Wp.bind(null, e[1]), $e().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = V, l = $e();
            if ($) {
                if (n === void 0) throw Error(_(407));
                n = n();
            } else {
                if (n = t(), te === null) throw Error(_(349));
                $t & 30 || Rc(r, t, n);
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o, ks(Oc.bind(null, r, o, e), [
                e
            ]), r.flags |= 2048, gr(9, jc.bind(null, r, o, n, t), void 0, null), n;
        },
        useId: function() {
            var e = $e(), t = te.identifierPrefix;
            if ($) {
                var n = Ze, r = Xe;
                n = (r & ~(1 << 32 - De(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = mr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = $p++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, Qp = {
        readContext: Le,
        useCallback: Wc,
        useContext: Le,
        useEffect: vu,
        useImperativeHandle: $c,
        useInsertionEffect: Uc,
        useLayoutEffect: Fc,
        useMemo: Bc,
        useReducer: Po,
        useRef: Dc,
        useState: function() {
            return Po(vr);
        },
        useDebugValue: gu,
        useDeferredValue: function(e) {
            var t = Re();
            return Vc(t, J.memoizedState, e);
        },
        useTransition: function() {
            var e = Po(vr)[0], t = Re().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: zc,
        useSyncExternalStore: Lc,
        useId: Hc,
        unstable_isNewReconciler: !1
    }, Kp = {
        readContext: Le,
        useCallback: Wc,
        useContext: Le,
        useEffect: vu,
        useImperativeHandle: $c,
        useInsertionEffect: Uc,
        useLayoutEffect: Fc,
        useMemo: Bc,
        useReducer: No,
        useRef: Dc,
        useState: function() {
            return No(vr);
        },
        useDebugValue: gu,
        useDeferredValue: function(e) {
            var t = Re();
            return J === null ? t.memoizedState = e : Vc(t, J.memoizedState, e);
        },
        useTransition: function() {
            var e = No(vr)[0], t = Re().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: zc,
        useSyncExternalStore: Lc,
        useId: Hc,
        unstable_isNewReconciler: !1
    };
    function Oe(e, t) {
        if (e && e.defaultProps) {
            t = Q({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function hi(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Wl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Ht(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = ce(), l = wt(e), o = Je(r, l);
            o.payload = t, n != null && (o.callback = n), t = gt(e, o, l), t !== null && (Ue(t, e, l, r), br(t, e, l));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = ce(), l = wt(e), o = Je(r, l);
            o.tag = 1, o.payload = t, n != null && (o.callback = n), t = gt(e, o, l), t !== null && (Ue(t, e, l, r), br(t, e, l));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = ce(), r = wt(e), l = Je(n, r);
            l.tag = 2, t != null && (l.callback = t), t = gt(e, l, r), t !== null && (Ue(t, e, r, n), br(t, e, r));
        }
    };
    function Ss(e, t, n, r, l, o, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !ar(n, r) || !ar(l, o) : !0;
    }
    function Yc(e, t, n) {
        var r = !1, l = xt, o = t.contextType;
        return typeof o == "object" && o !== null ? o = Le(o) : (l = ve(t) ? Ft : se.current, r = t.contextTypes, o = (r = r != null) ? yn(e, l) : xt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Wl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
    }
    function xs(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Wl.enqueueReplaceState(t, t.state, null);
    }
    function mi(e, t, n, r) {
        var l = e.stateNode;
        l.props = n, l.state = e.memoizedState, l.refs = {}, au(e);
        var o = t.contextType;
        typeof o == "object" && o !== null ? l.context = Le(o) : (o = ve(t) ? Ft : se.current, l.context = yn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (hi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Wl.enqueueReplaceState(l, l.state, null), Sl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Sn(e, t) {
        try {
            var n = "", r = t;
            do n += _d(r), r = r.return;
            while (r);
            var l = n;
        } catch (o) {
            l = `
Error generating stack: ` + o.message + `
` + o.stack;
        }
        return {
            value: e,
            source: t,
            stack: l,
            digest: null
        };
    }
    function To(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        };
    }
    function vi(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var Gp = typeof WeakMap == "function" ? WeakMap : Map;
    function Xc(e, t, n) {
        n = Je(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Nl || (Nl = !0, Pi = r), vi(e, t);
        }, n;
    }
    function Zc(e, t, n) {
        n = Je(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = t.value;
            n.payload = function() {
                return r(l);
            }, n.callback = function() {
                vi(e, t);
            };
        }
        var o = e.stateNode;
        return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
            vi(e, t), typeof r != "function" && (yt === null ? yt = new Set([
                this
            ]) : yt.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function Es(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Gp;
            var l = new Set;
            r.set(t, l);
        } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
        l.has(n) || (l.add(n), e = uh.bind(null, e, t, n), t.then(e, e));
    }
    function Cs(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function Ps(e, t, n, r, l) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Je(-1, 1), t.tag = 2, gt(n, t, 1))), n.lanes |= 1), e);
    }
    var Yp = nt.ReactCurrentOwner, he = !1;
    function ae(e, t, n, r) {
        t.child = e === null ? Cc(t, null, n, r) : _n(t, e.child, n, r);
    }
    function Ns(e, t, n, r, l) {
        n = n.render;
        var o = t.ref;
        return pn(t, l), r = hu(e, t, n, r, o, l), n = mu(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : ($ && n && nu(t), t.flags |= 1, ae(e, t, r, l), t.child);
    }
    function Ts(e, t, n, r, l) {
        if (e === null) {
            var o = n.type;
            return typeof o == "function" && !Cu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Jc(e, t, o, r, l)) : (e = ol(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (o = e.child, !(e.lanes & l)) {
            var i = o.memoizedProps;
            if (n = n.compare, n = n !== null ? n : ar, n(i, r) && e.ref === t.ref) return tt(e, t, l);
        }
        return t.flags |= 1, e = _t(o, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Jc(e, t, n, r, l) {
        if (e !== null) {
            var o = e.memoizedProps;
            if (ar(o, r) && e.ref === t.ref) if (he = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (he = !0);
            else return t.lanes = e.lanes, tt(e, t, l);
        }
        return gi(e, t, n, r, l);
    }
    function qc(e, t, n) {
        var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, U(un, we), we |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, U(un, we), we |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, U(un, we), we |= r;
        }
        else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(un, we), we |= r;
        return ae(e, t, l, n), t.child;
    }
    function bc(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function gi(e, t, n, r, l) {
        var o = ve(n) ? Ft : se.current;
        return o = yn(t, o), pn(t, l), n = hu(e, t, n, r, o, l), r = mu(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : ($ && r && nu(t), t.flags |= 1, ae(e, t, n, l), t.child);
    }
    function zs(e, t, n, r, l) {
        if (ve(n)) {
            var o = !0;
            gl(t);
        } else o = !1;
        if (pn(t, l), t.stateNode === null) nl(e, t), Yc(t, n, r), mi(t, n, r, l), r = !0;
        else if (e === null) {
            var i = t.stateNode, u = t.memoizedProps;
            i.props = u;
            var s = i.context, a = n.contextType;
            typeof a == "object" && a !== null ? a = Le(a) : (a = ve(n) ? Ft : se.current, a = yn(t, a));
            var h = n.getDerivedStateFromProps, f = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && xs(t, i, r, a), it = !1;
            var m = t.memoizedState;
            i.state = m, Sl(t, r, i, l), s = t.memoizedState, u !== r || m !== s || me.current || it ? (typeof h == "function" && (hi(t, n, h, r), s = t.memoizedState), (u = it || Ss(t, n, u, r, m, s, a)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, Nc(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Oe(t.type, u), i.props = a, f = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Le(s) : (s = ve(n) ? Ft : se.current, s = yn(t, s));
            var g = n.getDerivedStateFromProps;
            (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== f || m !== s) && xs(t, i, r, s), it = !1, m = t.memoizedState, i.state = m, Sl(t, r, i, l);
            var y = t.memoizedState;
            u !== f || m !== y || me.current || it ? (typeof g == "function" && (hi(t, n, g, r), y = t.memoizedState), (a = it || Ss(t, n, a, r, m, y, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return yi(e, t, n, r, o, l);
    }
    function yi(e, t, n, r, l, o) {
        bc(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return l && hs(t, n, !1), tt(e, t, o);
        r = t.stateNode, Yp.current = t;
        var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = _n(t, e.child, null, o), t.child = _n(t, null, u, o)) : ae(e, t, u, o), t.memoizedState = r.state, l && hs(t, n, !0), t.child;
    }
    function ef(e) {
        var t = e.stateNode;
        t.pendingContext ? ps(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ps(e, t.context, !1), cu(e, t.containerInfo);
    }
    function Ls(e, t, n, r, l) {
        return wn(), lu(l), t.flags |= 256, ae(e, t, n, r), t.child;
    }
    var wi = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function _i(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function tf(e, t, n) {
        var r = t.pendingProps, l = B.current, o = !1, i = (t.flags & 128) !== 0, u;
        if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(B, l & 1), e === null) return di(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Hl(i, r, 0, null), e = Ut(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = _i(n), t.memoizedState = wi, e) : yu(t, i));
        if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Xp(e, t, i, r, u, l, n);
        if (o) {
            o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
            var s = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = _t(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = _t(u, o) : (o = Ut(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? _i(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = wi, r;
        }
        return o = e.child, e = o.sibling, r = _t(o, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function yu(e, t) {
        return t = Hl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function Wr(e, t, n, r) {
        return r !== null && lu(r), _n(t, e.child, null, n), e = yu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function Xp(e, t, n, r, l, o, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = To(Error(_(422))), Wr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Hl({
            mode: "visible",
            children: r.children
        }, l, 0, null), o = Ut(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && _n(t, e.child, null, i), t.child.memoizedState = _i(i), t.memoizedState = wi, o);
        if (!(t.mode & 1)) return Wr(e, t, i, null);
        if (l.data === "$!") {
            if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
            return r = u, o = Error(_(419)), r = To(o, r, void 0), Wr(e, t, i, r);
        }
        if (u = (i & e.childLanes) !== 0, he || u) {
            if (r = te, r !== null) {
                switch(i & -i){
                    case 4:
                        l = 2;
                        break;
                    case 16:
                        l = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        l = 32;
                        break;
                    case 536870912:
                        l = 268435456;
                        break;
                    default:
                        l = 0;
                }
                l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, et(e, l), Ue(r, e, l, -1));
            }
            return Eu(), r = To(Error(_(421))), Wr(e, t, i, r);
        }
        return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sh.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ke = vt(l.nextSibling), Se = t, $ = !0, Ie = null, e !== null && (Pe[Ne++] = Xe, Pe[Ne++] = Ze, Pe[Ne++] = At, Xe = e.id, Ze = e.overflow, At = t), t = yu(t, r.children), t.flags |= 4096, t);
    }
    function Rs(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), pi(e.return, t, n);
    }
    function zo(e, t, n, r, l) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: l
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
    }
    function nf(e, t, n) {
        var r = t.pendingProps, l = r.revealOrder, o = r.tail;
        if (ae(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Rs(e, n, t);
                else if (e.tag === 19) Rs(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue;
                }
                if (e === t) break e;
                for(; e.sibling === null;){
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
            }
            r &= 1;
        }
        if (U(B, r), !(t.mode & 1)) t.memoizedState = null;
        else switch(l){
            case "forwards":
                for(n = t.child, l = null; n !== null;)e = n.alternate, e !== null && xl(e) === null && (l = n), n = n.sibling;
                n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), zo(t, !1, l, n, o);
                break;
            case "backwards":
                for(n = null, l = t.child, t.child = null; l !== null;){
                    if (e = l.alternate, e !== null && xl(e) === null) {
                        t.child = l;
                        break;
                    }
                    e = l.sibling, l.sibling = n, n = l, l = e;
                }
                zo(t, !0, n, null, o);
                break;
            case "together":
                zo(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function nl(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function tt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), Wt |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(_(153));
        if (t.child !== null) {
            for(e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = _t(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function Zp(e, t, n) {
        switch(t.tag){
            case 3:
                ef(t), wn();
                break;
            case 5:
                Tc(t);
                break;
            case 1:
                ve(t.type) && gl(t);
                break;
            case 4:
                cu(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, l = t.memoizedProps.value;
                U(_l, r._currentValue), r._currentValue = l;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (U(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? tf(e, t, n) : (U(B, B.current & 1), e = tt(e, t, n), e !== null ? e.sibling : null);
                U(B, B.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return nf(e, t, n);
                    t.flags |= 128;
                }
                if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(B, B.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, qc(e, t, n);
        }
        return tt(e, t, n);
    }
    var rf, ki, lf, of;
    rf = function(e, t) {
        for(var n = t.child; n !== null;){
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === t) break;
            for(; n.sibling === null;){
                if (n.return === null || n.return === t) return;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        }
    };
    ki = function() {};
    lf = function(e, t, n, r) {
        var l = e.memoizedProps;
        if (l !== r) {
            e = t.stateNode, It(He.current);
            var o = null;
            switch(n){
                case "input":
                    l = Vo(e, l), r = Vo(e, r), o = [];
                    break;
                case "select":
                    l = Q({}, l, {
                        value: void 0
                    }), r = Q({}, r, {
                        value: void 0
                    }), o = [];
                    break;
                case "textarea":
                    l = Ko(e, l), r = Ko(e, r), o = [];
                    break;
                default:
                    typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ml);
            }
            Yo(n, r);
            var i;
            n = null;
            for(a in l)if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null) if (a === "style") {
                var u = l[a];
                for(i in u)u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (nr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
            for(a in r){
                var s = r[a];
                if (u = l?.[a], r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
                    for(i in u)!u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in s)s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
                } else n || (o || (o = []), o.push(a, n)), n = s;
                else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (nr.hasOwnProperty(a) ? (s != null && a === "onScroll" && F("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
            }
            n && (o = o || []).push("style", n);
            var a = o;
            (t.updateQueue = a) && (t.flags |= 4);
        }
    };
    of = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function $n(e, t) {
        if (!$) switch(e.tailMode){
            case "hidden":
                t = e.tail;
                for(var n = null; t !== null;)t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for(var r = null; n !== null;)n.alternate !== null && (r = n), n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        }
    }
    function ie(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var l = e.child; l !== null;)n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
        else for(l = e.child; l !== null;)n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function Jp(e, t, n) {
        var r = t.pendingProps;
        switch(ru(t), t.tag){
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return ie(t), null;
            case 1:
                return ve(t.type) && vl(), ie(t), null;
            case 3:
                return r = t.stateNode, kn(), A(me), A(se), du(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ar(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ie !== null && (zi(Ie), Ie = null))), ki(e, t), ie(t), null;
            case 5:
                fu(t);
                var l = It(hr.current);
                if (n = t.type, e !== null && t.stateNode != null) lf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(_(166));
                        return ie(t), null;
                    }
                    if (e = It(He.current), Ar(t)) {
                        r = t.stateNode, n = t.type;
                        var o = t.memoizedProps;
                        switch(r[We] = t, r[dr] = o, e = (t.mode & 1) !== 0, n){
                            case "dialog":
                                F("cancel", r), F("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                F("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(l = 0; l < Qn.length; l++)F(Qn[l], r);
                                break;
                            case "source":
                                F("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                F("error", r), F("load", r);
                                break;
                            case "details":
                                F("toggle", r);
                                break;
                            case "input":
                                $u(r, o), F("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!o.multiple
                                }, F("invalid", r);
                                break;
                            case "textarea":
                                Bu(r, o), F("invalid", r);
                        }
                        Yo(n, o), l = null;
                        for(var i in o)if (o.hasOwnProperty(i)) {
                            var u = o[i];
                            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Fr(r.textContent, u, e), l = [
                                "children",
                                u
                            ]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Fr(r.textContent, u, e), l = [
                                "children",
                                "" + u
                            ]) : nr.hasOwnProperty(i) && u != null && i === "onScroll" && F("scroll", r);
                        }
                        switch(n){
                            case "input":
                                Lr(r), Wu(r, o, !0);
                                break;
                            case "textarea":
                                Lr(r), Vu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof o.onClick == "function" && (r.onclick = ml);
                        }
                        r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Oa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[We] = t, e[dr] = r, rf(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = Xo(n, r), n){
                                case "dialog":
                                    F("cancel", e), F("close", e), l = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    F("load", e), l = r;
                                    break;
                                case "video":
                                case "audio":
                                    for(l = 0; l < Qn.length; l++)F(Qn[l], e);
                                    l = r;
                                    break;
                                case "source":
                                    F("error", e), l = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    F("error", e), F("load", e), l = r;
                                    break;
                                case "details":
                                    F("toggle", e), l = r;
                                    break;
                                case "input":
                                    $u(e, r), l = Vo(e, r), F("invalid", e);
                                    break;
                                case "option":
                                    l = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, l = Q({}, r, {
                                        value: void 0
                                    }), F("invalid", e);
                                    break;
                                case "textarea":
                                    Bu(e, r), l = Ko(e, r), F("invalid", e);
                                    break;
                                default:
                                    l = r;
                            }
                            Yo(n, l), u = l;
                            for(o in u)if (u.hasOwnProperty(o)) {
                                var s = u[o];
                                o === "style" ? Da(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ma(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && rr(e, s) : typeof s == "number" && rr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (nr.hasOwnProperty(o) ? s != null && o === "onScroll" && F("scroll", e) : s != null && Bi(e, o, s, i));
                            }
                            switch(n){
                                case "input":
                                    Lr(e), Wu(e, r, !1);
                                    break;
                                case "textarea":
                                    Lr(e), Vu(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + St(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, o = r.value, o != null ? an(e, !!r.multiple, o, !1) : r.defaultValue != null && an(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof l.onClick == "function" && (e.onclick = ml);
                            }
                            switch(n){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
                }
                return ie(t), null;
            case 6:
                if (e && t.stateNode != null) of(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
                    if (n = It(hr.current), It(He.current), Ar(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[We] = t, (o = r.nodeValue !== n) && (e = Se, e !== null)) switch(e.tag){
                            case 3:
                                Fr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Fr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        o && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[We] = t, t.stateNode = r;
                }
                return ie(t), null;
            case 13:
                if (A(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if ($ && ke !== null && t.mode & 1 && !(t.flags & 128)) xc(), wn(), t.flags |= 98560, o = !1;
                    else if (o = Ar(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!o) throw Error(_(318));
                            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(_(317));
                            o[We] = t;
                        } else wn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        ie(t), o = !1;
                    } else Ie !== null && (zi(Ie), Ie = null), o = !0;
                    if (!o) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? q === 0 && (q = 3) : Eu())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
            case 4:
                return kn(), ki(e, t), e === null && cr(t.stateNode.containerInfo), ie(t), null;
            case 10:
                return uu(t.type._context), ie(t), null;
            case 17:
                return ve(t.type) && vl(), ie(t), null;
            case 19:
                if (A(B), o = t.memoizedState, o === null) return ie(t), null;
                if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) $n(o, !1);
                else {
                    if (q !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = xl(e), i !== null) {
                            for(t.flags |= 128, $n(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return U(B, B.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    o.tail !== null && Y() > xn && (t.flags |= 128, r = !0, $n(o, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = xl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), $n(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !$) return ie(t), null;
                    } else 2 * Y() - o.renderingStartTime > xn && n !== 1073741824 && (t.flags |= 128, r = !0, $n(o, !1), t.lanes = 4194304);
                    o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
                }
                return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Y(), t.sibling = null, n = B.current, U(B, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
            case 22:
            case 23:
                return xu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? we & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(_(156, t.tag));
    }
    function qp(e, t) {
        switch(ru(t), t.tag){
            case 1:
                return ve(t.type) && vl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return kn(), A(me), A(se), du(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return fu(t), null;
            case 13:
                if (A(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(_(340));
                    wn();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return A(B), null;
            case 4:
                return kn(), null;
            case 10:
                return uu(t.type._context), null;
            case 22:
            case 23:
                return xu(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Br = !1, ue = !1, bp = typeof WeakSet == "function" ? WeakSet : Set, E = null;
    function on(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            K(e, t, r);
        }
        else n.current = null;
    }
    function Si(e, t, n) {
        try {
            n();
        } catch (r) {
            K(e, t, r);
        }
    }
    var js = !1;
    function eh(e, t) {
        if (oi = dl, e = cc(), tu(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset, o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch  {
                        n = null;
                        break e;
                    }
                    var i = 0, u = -1, s = -1, a = 0, h = 0, f = e, m = null;
                    t: for(;;){
                        for(var g; f !== n || l !== 0 && f.nodeType !== 3 || (u = i + l), f !== o || r !== 0 && f.nodeType !== 3 || (s = i + r), f.nodeType === 3 && (i += f.nodeValue.length), (g = f.firstChild) !== null;)m = f, f = g;
                        for(;;){
                            if (f === e) break t;
                            if (m === n && ++a === l && (u = i), m === o && ++h === r && (s = i), (g = f.nextSibling) !== null) break;
                            f = m, m = f.parentNode;
                        }
                        f = g;
                    }
                    n = u === -1 || s === -1 ? null : {
                        start: u,
                        end: s
                    };
                } else n = null;
            }
            n = n || {
                start: 0,
                end: 0
            };
        } else n = null;
        for(ii = {
            focusedElem: e,
            selectionRange: n
        }, dl = !1, E = t; E !== null;)if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
        else for(; E !== null;){
            t = E;
            try {
                var y = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (y !== null) {
                            var w = y.memoizedProps, S = y.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Oe(t.type, w), S);
                            d.__reactInternalSnapshotBeforeUpdate = c;
                        }
                        break;
                    case 3:
                        var p = t.stateNode.containerInfo;
                        p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                        break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        throw Error(_(163));
                }
            } catch (v) {
                K(t, t.return, v);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, E = e;
                break;
            }
            E = t.return;
        }
        return y = js, js = !1, y;
    }
    function qn(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var l = r = r.next;
            do {
                if ((l.tag & e) === e) {
                    var o = l.destroy;
                    l.destroy = void 0, o !== void 0 && Si(t, n, o);
                }
                l = l.next;
            }while (l !== r);
        }
    }
    function Bl(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            }while (n !== t);
        }
    }
    function xi(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch(e.tag){
                case 5:
                    e = n;
                    break;
                default:
                    e = n;
            }
            typeof t == "function" ? t(e) : t.current = e;
        }
    }
    function uf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, uf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[We], delete t[dr], delete t[ai], delete t[Dp], delete t[Up])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function sf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Os(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || sf(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Ei(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ml));
        else if (r !== 4 && (e = e.child, e !== null)) for(Ei(e, t, n), e = e.sibling; e !== null;)Ei(e, t, n), e = e.sibling;
    }
    function Ci(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(Ci(e, t, n), e = e.sibling; e !== null;)Ci(e, t, n), e = e.sibling;
    }
    var ne = null, Me = !1;
    function lt(e, t, n) {
        for(n = n.child; n !== null;)af(e, t, n), n = n.sibling;
    }
    function af(e, t, n) {
        if (Ve && typeof Ve.onCommitFiberUnmount == "function") try {
            Ve.onCommitFiberUnmount(Ml, n);
        } catch  {}
        switch(n.tag){
            case 5:
                ue || on(n, t);
            case 6:
                var r = ne, l = Me;
                ne = null, lt(e, t, n), ne = r, Me = l, ne !== null && (Me ? (e = ne, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ne.removeChild(n.stateNode));
                break;
            case 18:
                ne !== null && (Me ? (e = ne, n = n.stateNode, e.nodeType === 8 ? So(e.parentNode, n) : e.nodeType === 1 && So(e, n), ur(e)) : So(ne, n.stateNode));
                break;
            case 4:
                r = ne, l = Me, ne = n.stateNode.containerInfo, Me = !0, lt(e, t, n), ne = r, Me = l;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    l = r = r.next;
                    do {
                        var o = l, i = o.destroy;
                        o = o.tag, i !== void 0 && (o & 2 || o & 4) && Si(n, t, i), l = l.next;
                    }while (l !== r);
                }
                lt(e, t, n);
                break;
            case 1:
                if (!ue && (on(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (u) {
                    K(n, t, u);
                }
                lt(e, t, n);
                break;
            case 21:
                lt(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null, lt(e, t, n), ue = r) : lt(e, t, n);
                break;
            default:
                lt(e, t, n);
        }
    }
    function Ms(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new bp), t.forEach(function(r) {
                var l = ah.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l));
            });
        }
    }
    function je(e, t) {
        var n = t.deletions;
        if (n !== null) for(var r = 0; r < n.length; r++){
            var l = n[r];
            try {
                var o = e, i = t, u = i;
                e: for(; u !== null;){
                    switch(u.tag){
                        case 5:
                            ne = u.stateNode, Me = !1;
                            break e;
                        case 3:
                            ne = u.stateNode.containerInfo, Me = !0;
                            break e;
                        case 4:
                            ne = u.stateNode.containerInfo, Me = !0;
                            break e;
                    }
                    u = u.return;
                }
                if (ne === null) throw Error(_(160));
                af(o, i, l), ne = null, Me = !1;
                var s = l.alternate;
                s !== null && (s.return = null), l.return = null;
            } catch (a) {
                K(l, t, a);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)cf(t, e), t = t.sibling;
    }
    function cf(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (je(t, e), Ae(e), r & 4) {
                    try {
                        qn(3, e, e.return), Bl(3, e);
                    } catch (w) {
                        K(e, e.return, w);
                    }
                    try {
                        qn(5, e, e.return);
                    } catch (w) {
                        K(e, e.return, w);
                    }
                }
                break;
            case 1:
                je(t, e), Ae(e), r & 512 && n !== null && on(n, n.return);
                break;
            case 5:
                if (je(t, e), Ae(e), r & 512 && n !== null && on(n, n.return), e.flags & 32) {
                    var l = e.stateNode;
                    try {
                        rr(l, "");
                    } catch (w) {
                        K(e, e.return, w);
                    }
                }
                if (r & 4 && (l = e.stateNode, l != null)) {
                    var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
                    if (e.updateQueue = null, s !== null) try {
                        u === "input" && o.type === "radio" && o.name != null && Ra(l, o), Xo(u, i);
                        var a = Xo(u, o);
                        for(i = 0; i < s.length; i += 2){
                            var h = s[i], f = s[i + 1];
                            h === "style" ? Da(l, f) : h === "dangerouslySetInnerHTML" ? Ma(l, f) : h === "children" ? rr(l, f) : Bi(l, h, f, a);
                        }
                        switch(u){
                            case "input":
                                Ho(l, o);
                                break;
                            case "textarea":
                                ja(l, o);
                                break;
                            case "select":
                                var m = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var g = o.value;
                                g != null ? an(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? an(l, !!o.multiple, o.defaultValue, !0) : an(l, !!o.multiple, o.multiple ? [] : "", !1));
                        }
                        l[dr] = o;
                    } catch (w) {
                        K(e, e.return, w);
                    }
                }
                break;
            case 6:
                if (je(t, e), Ae(e), r & 4) {
                    if (e.stateNode === null) throw Error(_(162));
                    l = e.stateNode, o = e.memoizedProps;
                    try {
                        l.nodeValue = o;
                    } catch (w) {
                        K(e, e.return, w);
                    }
                }
                break;
            case 3:
                if (je(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    ur(t.containerInfo);
                } catch (w) {
                    K(e, e.return, w);
                }
                break;
            case 4:
                je(t, e), Ae(e);
                break;
            case 13:
                je(t, e), Ae(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ku = Y())), r & 4 && Ms(e);
                break;
            case 22:
                if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (a = ue) || h, je(t, e), ue = a) : je(t, e), Ae(e), r & 8192) {
                    if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1) for(E = e, h = e.child; h !== null;){
                        for(f = E = h; E !== null;){
                            switch(m = E, g = m.child, m.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    qn(4, m, m.return);
                                    break;
                                case 1:
                                    on(m, m.return);
                                    var y = m.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                                        } catch (w) {
                                            K(r, n, w);
                                        }
                                    }
                                    break;
                                case 5:
                                    on(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Ds(f);
                                        continue;
                                    }
                            }
                            g !== null ? (g.return = m, E = g) : Ds(f);
                        }
                        h = h.sibling;
                    }
                    e: for(h = null, f = e;;){
                        if (f.tag === 5) {
                            if (h === null) {
                                h = f;
                                try {
                                    l = f.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = f.stateNode, s = f.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ia("display", i));
                                } catch (w) {
                                    K(e, e.return, w);
                                }
                            }
                        } else if (f.tag === 6) {
                            if (h === null) try {
                                f.stateNode.nodeValue = a ? "" : f.memoizedProps;
                            } catch (w) {
                                K(e, e.return, w);
                            }
                        } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                            f.child.return = f, f = f.child;
                            continue;
                        }
                        if (f === e) break e;
                        for(; f.sibling === null;){
                            if (f.return === null || f.return === e) break e;
                            h === f && (h = null), f = f.return;
                        }
                        h === f && (h = null), f.sibling.return = f.return, f = f.sibling;
                    }
                }
                break;
            case 19:
                je(t, e), Ae(e), r & 4 && Ms(e);
                break;
            case 21:
                break;
            default:
                je(t, e), Ae(e);
        }
    }
    function Ae(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (sf(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(_(160));
                }
                switch(r.tag){
                    case 5:
                        var l = r.stateNode;
                        r.flags & 32 && (rr(l, ""), r.flags &= -33);
                        var o = Os(e);
                        Ci(e, o, l);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, u = Os(e);
                        Ei(e, u, i);
                        break;
                    default:
                        throw Error(_(161));
                }
            } catch (s) {
                K(e, e.return, s);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function th(e, t, n) {
        E = e, ff(e);
    }
    function ff(e, t, n) {
        for(var r = (e.mode & 1) !== 0; E !== null;){
            var l = E, o = l.child;
            if (l.tag === 22 && r) {
                var i = l.memoizedState !== null || Br;
                if (!i) {
                    var u = l.alternate, s = u !== null && u.memoizedState !== null || ue;
                    u = Br;
                    var a = ue;
                    if (Br = i, (ue = s) && !a) for(E = l; E !== null;)i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? Us(l) : s !== null ? (s.return = i, E = s) : Us(l);
                    for(; o !== null;)E = o, ff(o), o = o.sibling;
                    E = l, Br = u, ue = a;
                }
                Is(e);
            } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : Is(e);
        }
    }
    function Is(e) {
        for(; E !== null;){
            var t = E;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            ue || Bl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ue) if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Oe(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var o = t.updateQueue;
                            o !== null && ws(t, o, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (n = null, t.child !== null) switch(t.child.tag){
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode;
                                }
                                ws(t, i, n);
                            }
                            break;
                        case 5:
                            var u = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = u;
                                var s = t.memoizedProps;
                                switch(t.type){
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        s.src && (n.src = s.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var a = t.alternate;
                                if (a !== null) {
                                    var h = a.memoizedState;
                                    if (h !== null) {
                                        var f = h.dehydrated;
                                        f !== null && ur(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(_(163));
                    }
                    ue || t.flags & 512 && xi(t);
                } catch (m) {
                    K(t, t.return, m);
                }
            }
            if (t === e) {
                E = null;
                break;
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, E = n;
                break;
            }
            E = t.return;
        }
    }
    function Ds(e) {
        for(; E !== null;){
            var t = E;
            if (t === e) {
                E = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, E = n;
                break;
            }
            E = t.return;
        }
    }
    function Us(e) {
        for(; E !== null;){
            var t = E;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Bl(4, t);
                        } catch (s) {
                            K(t, n, s);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var l = t.return;
                            try {
                                r.componentDidMount();
                            } catch (s) {
                                K(t, l, s);
                            }
                        }
                        var o = t.return;
                        try {
                            xi(t);
                        } catch (s) {
                            K(t, o, s);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            xi(t);
                        } catch (s) {
                            K(t, i, s);
                        }
                }
            } catch (s) {
                K(t, t.return, s);
            }
            if (t === e) {
                E = null;
                break;
            }
            var u = t.sibling;
            if (u !== null) {
                u.return = t.return, E = u;
                break;
            }
            E = t.return;
        }
    }
    var nh = Math.ceil, Pl = nt.ReactCurrentDispatcher, wu = nt.ReactCurrentOwner, ze = nt.ReactCurrentBatchConfig, I = 0, te = null, Z = null, re = 0, we = 0, un = Ct(0), q = 0, yr = null, Wt = 0, Vl = 0, _u = 0, bn = null, pe = null, ku = 0, xn = 1 / 0, Ke = null, Nl = !1, Pi = null, yt = null, Vr = !1, ft = null, Tl = 0, er = 0, Ni = null, rl = -1, ll = 0;
    function ce() {
        return I & 6 ? Y() : rl !== -1 ? rl : rl = Y();
    }
    function wt(e) {
        return e.mode & 1 ? I & 2 && re !== 0 ? re & -re : Ap.transition !== null ? (ll === 0 && (ll = Ya()), ll) : (e = D, e !== 0 || (e = window.event, e = e === void 0 ? 16 : tc(e.type)), e) : 1;
    }
    function Ue(e, t, n, r) {
        if (50 < er) throw er = 0, Ni = null, Error(_(185));
        Sr(e, n, r), (!(I & 2) || e !== te) && (e === te && (!(I & 2) && (Vl |= n), q === 4 && st(e, re)), ge(e, r), n === 1 && I === 0 && !(t.mode & 1) && (xn = Y() + 500, Al && Pt()));
    }
    function ge(e, t) {
        var n = e.callbackNode;
        Ad(e, t);
        var r = fl(e, e === te ? re : 0);
        if (r === 0) n !== null && Ku(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Ku(n), t === 1) e.tag === 0 ? Fp(Fs.bind(null, e)) : _c(Fs.bind(null, e)), Mp(function() {
                !(I & 6) && Pt();
            }), n = null;
            else {
                switch(Xa(r)){
                    case 1:
                        n = Gi;
                        break;
                    case 4:
                        n = Ka;
                        break;
                    case 16:
                        n = cl;
                        break;
                    case 536870912:
                        n = Ga;
                        break;
                    default:
                        n = cl;
                }
                n = wf(n, df.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function df(e, t) {
        if (rl = -1, ll = 0, I & 6) throw Error(_(327));
        var n = e.callbackNode;
        if (hn() && e.callbackNode !== n) return null;
        var r = fl(e, e === te ? re : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = zl(e, r);
        else {
            t = r;
            var l = I;
            I |= 2;
            var o = hf();
            (te !== e || re !== t) && (Ke = null, xn = Y() + 500, Dt(e, t));
            do try {
                oh();
                break;
            } catch (u) {
                pf(e, u);
            }
            while (!0);
            iu(), Pl.current = o, I = l, Z !== null ? t = 0 : (te = null, re = 0, t = q);
        }
        if (t !== 0) {
            if (t === 2 && (l = ei(e), l !== 0 && (r = l, t = Ti(e, l))), t === 1) throw n = yr, Dt(e, 0), st(e, r), ge(e, Y()), n;
            if (t === 6) st(e, r);
            else {
                if (l = e.current.alternate, !(r & 30) && !rh(l) && (t = zl(e, r), t === 2 && (o = ei(e), o !== 0 && (r = o, t = Ti(e, o))), t === 1)) throw n = yr, Dt(e, 0), st(e, r), ge(e, Y()), n;
                switch(e.finishedWork = l, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(_(345));
                    case 2:
                        Rt(e, pe, Ke);
                        break;
                    case 3:
                        if (st(e, r), (r & 130023424) === r && (t = ku + 500 - Y(), 10 < t)) {
                            if (fl(e, 0) !== 0) break;
                            if (l = e.suspendedLanes, (l & r) !== r) {
                                ce(), e.pingedLanes |= e.suspendedLanes & l;
                                break;
                            }
                            e.timeoutHandle = si(Rt.bind(null, e, pe, Ke), t);
                            break;
                        }
                        Rt(e, pe, Ke);
                        break;
                    case 4:
                        if (st(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, l = -1; 0 < r;){
                            var i = 31 - De(r);
                            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
                        }
                        if (r = l, r = Y() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * nh(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = si(Rt.bind(null, e, pe, Ke), r);
                            break;
                        }
                        Rt(e, pe, Ke);
                        break;
                    case 5:
                        Rt(e, pe, Ke);
                        break;
                    default:
                        throw Error(_(329));
                }
            }
        }
        return ge(e, Y()), e.callbackNode === n ? df.bind(null, e) : null;
    }
    function Ti(e, t) {
        var n = bn;
        return e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256), e = zl(e, t), e !== 2 && (t = pe, pe = n, t !== null && zi(t)), e;
    }
    function zi(e) {
        pe === null ? pe = e : pe.push.apply(pe, e);
    }
    function rh(e) {
        for(var t = e;;){
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for(var r = 0; r < n.length; r++){
                    var l = n[r], o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Fe(o(), l)) return !1;
                    } catch  {
                        return !1;
                    }
                }
            }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for(; t.sibling === null;){
                    if (t.return === null || t.return === e) return !0;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
        }
        return !0;
    }
    function st(e, t) {
        for(t &= ~_u, t &= ~Vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - De(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Fs(e) {
        if (I & 6) throw Error(_(327));
        hn();
        var t = fl(e, 0);
        if (!(t & 1)) return ge(e, Y()), null;
        var n = zl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = ei(e);
            r !== 0 && (t = r, n = Ti(e, r));
        }
        if (n === 1) throw n = yr, Dt(e, 0), st(e, t), ge(e, Y()), n;
        if (n === 6) throw Error(_(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Rt(e, pe, Ke), ge(e, Y()), null;
    }
    function Su(e, t) {
        var n = I;
        I |= 1;
        try {
            return e(t);
        } finally{
            I = n, I === 0 && (xn = Y() + 500, Al && Pt());
        }
    }
    function Bt(e) {
        ft !== null && ft.tag === 0 && !(I & 6) && hn();
        var t = I;
        I |= 1;
        var n = ze.transition, r = D;
        try {
            if (ze.transition = null, D = 1, e) return e();
        } finally{
            D = r, ze.transition = n, I = t, !(I & 6) && Pt();
        }
    }
    function xu() {
        we = un.current, A(un);
    }
    function Dt(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Op(n)), Z !== null) for(n = Z.return; n !== null;){
            var r = n;
            switch(ru(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && vl();
                    break;
                case 3:
                    kn(), A(me), A(se), du();
                    break;
                case 5:
                    fu(r);
                    break;
                case 4:
                    kn();
                    break;
                case 13:
                    A(B);
                    break;
                case 19:
                    A(B);
                    break;
                case 10:
                    uu(r.type._context);
                    break;
                case 22:
                case 23:
                    xu();
            }
            n = n.return;
        }
        if (te = e, Z = e = _t(e.current, null), re = we = t, q = 0, yr = null, _u = Vl = Wt = 0, pe = bn = null, Mt !== null) {
            for(t = 0; t < Mt.length; t++)if (n = Mt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next, o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l, r.next = i;
                }
                n.pending = r;
            }
            Mt = null;
        }
        return e;
    }
    function pf(e, t) {
        do {
            var n = Z;
            try {
                if (iu(), el.current = Cl, El) {
                    for(var r = V.memoizedState; r !== null;){
                        var l = r.queue;
                        l !== null && (l.pending = null), r = r.next;
                    }
                    El = !1;
                }
                if ($t = 0, ee = J = V = null, Jn = !1, mr = 0, wu.current = null, n === null || n.return === null) {
                    q = 1, yr = t, Z = null;
                    break;
                }
                e: {
                    var o = e, i = n.return, u = n, s = t;
                    if (t = re, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                        var a = s, h = u, f = h.tag;
                        if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                            var m = h.alternate;
                            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
                        }
                        var g = Cs(i);
                        if (g !== null) {
                            g.flags &= -257, Ps(g, i, u, o, t), g.mode & 1 && Es(o, a, t), t = g, s = a;
                            var y = t.updateQueue;
                            if (y === null) {
                                var w = new Set;
                                w.add(s), t.updateQueue = w;
                            } else y.add(s);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                Es(o, a, t), Eu();
                                break e;
                            }
                            s = Error(_(426));
                        }
                    } else if ($ && u.mode & 1) {
                        var S = Cs(i);
                        if (S !== null) {
                            !(S.flags & 65536) && (S.flags |= 256), Ps(S, i, u, o, t), lu(Sn(s, u));
                            break e;
                        }
                    }
                    o = s = Sn(s, u), q !== 4 && (q = 2), bn === null ? bn = [
                        o
                    ] : bn.push(o), o = i;
                    do {
                        switch(o.tag){
                            case 3:
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var d = Xc(o, s, t);
                                ys(o, d);
                                break e;
                            case 1:
                                u = s;
                                var c = o.type, p = o.stateNode;
                                if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (yt === null || !yt.has(p)))) {
                                    o.flags |= 65536, t &= -t, o.lanes |= t;
                                    var v = Zc(o, u, t);
                                    ys(o, v);
                                    break e;
                                }
                        }
                        o = o.return;
                    }while (o !== null);
                }
                vf(n);
            } catch (x) {
                t = x, Z === n && n !== null && (Z = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function hf() {
        var e = Pl.current;
        return Pl.current = Cl, e === null ? Cl : e;
    }
    function Eu() {
        (q === 0 || q === 3 || q === 2) && (q = 4), te === null || !(Wt & 268435455) && !(Vl & 268435455) || st(te, re);
    }
    function zl(e, t) {
        var n = I;
        I |= 2;
        var r = hf();
        (te !== e || re !== t) && (Ke = null, Dt(e, t));
        do try {
            lh();
            break;
        } catch (l) {
            pf(e, l);
        }
        while (!0);
        if (iu(), I = n, Pl.current = r, Z !== null) throw Error(_(261));
        return te = null, re = 0, q;
    }
    function lh() {
        for(; Z !== null;)mf(Z);
    }
    function oh() {
        for(; Z !== null && !Ld();)mf(Z);
    }
    function mf(e) {
        var t = yf(e.alternate, e, we);
        e.memoizedProps = e.pendingProps, t === null ? vf(e) : Z = t, wu.current = null;
    }
    function vf(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = qp(n, t), n !== null) {
                    n.flags &= 32767, Z = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    q = 6, Z = null;
                    return;
                }
            } else if (n = Jp(n, t, we), n !== null) {
                Z = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                Z = t;
                return;
            }
            Z = t = e;
        }while (t !== null);
        q === 0 && (q = 5);
    }
    function Rt(e, t, n) {
        var r = D, l = ze.transition;
        try {
            ze.transition = null, D = 1, ih(e, t, n, r);
        } finally{
            ze.transition = l, D = r;
        }
        return null;
    }
    function ih(e, t, n, r) {
        do hn();
        while (ft !== null);
        if (I & 6) throw Error(_(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(_(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var o = n.lanes | n.childLanes;
        if ($d(e, o), e === te && (Z = te = null, re = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Vr || (Vr = !0, wf(cl, function() {
            return hn(), null;
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
            o = ze.transition, ze.transition = null;
            var i = D;
            D = 1;
            var u = I;
            I |= 4, wu.current = null, eh(e, n), cf(n, e), Pp(ii), dl = !!oi, ii = oi = null, e.current = n, th(n), Rd(), I = u, D = i, ze.transition = o;
        } else e.current = n;
        if (Vr && (Vr = !1, ft = e, Tl = l), o = e.pendingLanes, o === 0 && (yt = null), Md(n.stateNode), ge(e, Y()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
        if (Nl) throw Nl = !1, e = Pi, Pi = null, e;
        return Tl & 1 && e.tag !== 0 && hn(), o = e.pendingLanes, o & 1 ? e === Ni ? er++ : (er = 0, Ni = e) : er = 0, Pt(), null;
    }
    function hn() {
        if (ft !== null) {
            var e = Xa(Tl), t = ze.transition, n = D;
            try {
                if (ze.transition = null, D = 16 > e ? 16 : e, ft === null) var r = !1;
                else {
                    if (e = ft, ft = null, Tl = 0, I & 6) throw Error(_(331));
                    var l = I;
                    for(I |= 4, E = e.current; E !== null;){
                        var o = E, i = o.child;
                        if (E.flags & 16) {
                            var u = o.deletions;
                            if (u !== null) {
                                for(var s = 0; s < u.length; s++){
                                    var a = u[s];
                                    for(E = a; E !== null;){
                                        var h = E;
                                        switch(h.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                qn(8, h, o);
                                        }
                                        var f = h.child;
                                        if (f !== null) f.return = h, E = f;
                                        else for(; E !== null;){
                                            h = E;
                                            var m = h.sibling, g = h.return;
                                            if (uf(h), h === a) {
                                                E = null;
                                                break;
                                            }
                                            if (m !== null) {
                                                m.return = g, E = m;
                                                break;
                                            }
                                            E = g;
                                        }
                                    }
                                }
                                var y = o.alternate;
                                if (y !== null) {
                                    var w = y.child;
                                    if (w !== null) {
                                        y.child = null;
                                        do {
                                            var S = w.sibling;
                                            w.sibling = null, w = S;
                                        }while (w !== null);
                                    }
                                }
                                E = o;
                            }
                        }
                        if (o.subtreeFlags & 2064 && i !== null) i.return = o, E = i;
                        else e: for(; E !== null;){
                            if (o = E, o.flags & 2048) switch(o.tag){
                                case 0:
                                case 11:
                                case 15:
                                    qn(9, o, o.return);
                            }
                            var d = o.sibling;
                            if (d !== null) {
                                d.return = o.return, E = d;
                                break e;
                            }
                            E = o.return;
                        }
                    }
                    var c = e.current;
                    for(E = c; E !== null;){
                        i = E;
                        var p = i.child;
                        if (i.subtreeFlags & 2064 && p !== null) p.return = i, E = p;
                        else e: for(i = c; E !== null;){
                            if (u = E, u.flags & 2048) try {
                                switch(u.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Bl(9, u);
                                }
                            } catch (x) {
                                K(u, u.return, x);
                            }
                            if (u === i) {
                                E = null;
                                break e;
                            }
                            var v = u.sibling;
                            if (v !== null) {
                                v.return = u.return, E = v;
                                break e;
                            }
                            E = u.return;
                        }
                    }
                    if (I = l, Pt(), Ve && typeof Ve.onPostCommitFiberRoot == "function") try {
                        Ve.onPostCommitFiberRoot(Ml, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                D = n, ze.transition = t;
            }
        }
        return !1;
    }
    function As(e, t, n) {
        t = Sn(n, t), t = Xc(e, t, 1), e = gt(e, t, 1), t = ce(), e !== null && (Sr(e, 1, t), ge(e, t));
    }
    function K(e, t, n) {
        if (e.tag === 3) As(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                As(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (yt === null || !yt.has(r))) {
                    e = Sn(n, e), e = Zc(t, e, 1), t = gt(t, e, 1), e = ce(), t !== null && (Sr(t, 1, e), ge(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function uh(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, te === e && (re & n) === n && (q === 4 || q === 3 && (re & 130023424) === re && 500 > Y() - ku ? Dt(e, 0) : _u |= n), ge(e, t);
    }
    function gf(e, t) {
        t === 0 && (e.mode & 1 ? (t = Or, Or <<= 1, !(Or & 130023424) && (Or = 4194304)) : t = 1);
        var n = ce();
        e = et(e, t), e !== null && (Sr(e, t, n), ge(e, n));
    }
    function sh(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), gf(e, n);
    }
    function ah(e, t) {
        var n = 0;
        switch(e.tag){
            case 13:
                var r = e.stateNode, l = e.memoizedState;
                l !== null && (n = l.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(_(314));
        }
        r !== null && r.delete(t), gf(e, n);
    }
    var yf;
    yf = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return he = !1, Zp(e, t, n);
            he = !!(e.flags & 131072);
        }
        else he = !1, $ && t.flags & 1048576 && kc(t, wl, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                nl(e, t), e = t.pendingProps;
                var l = yn(t, se.current);
                pn(t, n), l = hu(null, t, r, e, l, n);
                var o = mu();
                return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ve(r) ? (o = !0, gl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, au(t), l.updater = Wl, t.stateNode = l, l._reactInternals = t, mi(t, r, e, n), t = yi(null, t, r, !0, o, n)) : (t.tag = 0, $ && o && nu(t), ae(null, t, l, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(nl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = fh(r), e = Oe(r, e), l){
                        case 0:
                            t = gi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = zs(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Ns(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Ts(null, t, r, Oe(r.type, e), n);
                            break e;
                    }
                    throw Error(_(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), gi(e, t, r, l, n);
            case 1:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), zs(e, t, r, l, n);
            case 3:
                e: {
                    if (ef(t), e === null) throw Error(_(387));
                    r = t.pendingProps, o = t.memoizedState, l = o.element, Nc(e, t), Sl(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, o.isDehydrated) if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        l = Sn(Error(_(423)), t), t = Ls(e, t, r, n, l);
                        break e;
                    } else if (r !== l) {
                        l = Sn(Error(_(424)), t), t = Ls(e, t, r, n, l);
                        break e;
                    } else for(ke = vt(t.stateNode.containerInfo.firstChild), Se = t, $ = !0, Ie = null, n = Cc(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (wn(), r === l) {
                            t = tt(e, t, n);
                            break e;
                        }
                        ae(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return Tc(t), e === null && di(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, ui(r, l) ? i = null : o !== null && ui(r, o) && (t.flags |= 32), bc(e, t), ae(e, t, i, n), t.child;
            case 6:
                return e === null && di(t), null;
            case 13:
                return tf(e, t, n);
            case 4:
                return cu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = _n(t, null, r, n) : ae(e, t, r, n), t.child;
            case 11:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), Ns(e, t, r, l, n);
            case 7:
                return ae(e, t, t.pendingProps, n), t.child;
            case 8:
                return ae(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return ae(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, U(_l, r._currentValue), r._currentValue = i, o !== null) if (Fe(o.value, i)) {
                        if (o.children === l.children && !me.current) {
                            t = tt(e, t, n);
                            break e;
                        }
                    } else for(o = t.child, o !== null && (o.return = t); o !== null;){
                        var u = o.dependencies;
                        if (u !== null) {
                            i = o.child;
                            for(var s = u.firstContext; s !== null;){
                                if (s.context === r) {
                                    if (o.tag === 1) {
                                        s = Je(-1, n & -n), s.tag = 2;
                                        var a = o.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var h = a.pending;
                                            h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                                        }
                                    }
                                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), pi(o.return, n, t), u.lanes |= n;
                                    break;
                                }
                                s = s.next;
                            }
                        } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (i = o.return, i === null) throw Error(_(341));
                            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), pi(i, n, t), i = o.sibling;
                        } else i = o.child;
                        if (i !== null) i.return = o;
                        else for(i = o; i !== null;){
                            if (i === t) {
                                i = null;
                                break;
                            }
                            if (o = i.sibling, o !== null) {
                                o.return = i.return, i = o;
                                break;
                            }
                            i = i.return;
                        }
                        o = i;
                    }
                    ae(e, t, l.children, n), t = t.child;
                }
                return t;
            case 9:
                return l = t.type, r = t.pendingProps.children, pn(t, n), l = Le(l), r = r(l), t.flags |= 1, ae(e, t, r, n), t.child;
            case 14:
                return r = t.type, l = Oe(r, t.pendingProps), l = Oe(r.type, l), Ts(e, t, r, l, n);
            case 15:
                return Jc(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), nl(e, t), t.tag = 1, ve(r) ? (e = !0, gl(t)) : e = !1, pn(t, n), Yc(t, r, l), mi(t, r, l, n), yi(null, t, r, !0, e, n);
            case 19:
                return nf(e, t, n);
            case 22:
                return qc(e, t, n);
        }
        throw Error(_(156, t.tag));
    };
    function wf(e, t) {
        return Qa(e, t);
    }
    function ch(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Te(e, t, n, r) {
        return new ch(e, t, n, r);
    }
    function Cu(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function fh(e) {
        if (typeof e == "function") return Cu(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Hi) return 11;
            if (e === Qi) return 14;
        }
        return 2;
    }
    function _t(e, t) {
        var n = e.alternate;
        return n === null ? (n = Te(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function ol(e, t, n, r, l, o) {
        var i = 2;
        if (r = e, typeof e == "function") Cu(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case Zt:
                return Ut(n.children, l, o, t);
            case Vi:
                i = 8, l |= 8;
                break;
            case Ao:
                return e = Te(12, n, t, l | 2), e.elementType = Ao, e.lanes = o, e;
            case $o:
                return e = Te(13, n, t, l), e.elementType = $o, e.lanes = o, e;
            case Wo:
                return e = Te(19, n, t, l), e.elementType = Wo, e.lanes = o, e;
            case Ta:
                return Hl(n, l, o, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Pa:
                        i = 10;
                        break e;
                    case Na:
                        i = 9;
                        break e;
                    case Hi:
                        i = 11;
                        break e;
                    case Qi:
                        i = 14;
                        break e;
                    case ot:
                        i = 16, r = null;
                        break e;
                }
                throw Error(_(130, e == null ? e : typeof e, ""));
        }
        return t = Te(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
    }
    function Ut(e, t, n, r) {
        return e = Te(7, e, r, t), e.lanes = n, e;
    }
    function Hl(e, t, n, r) {
        return e = Te(22, e, r, t), e.elementType = Ta, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function Lo(e, t, n) {
        return e = Te(6, e, null, t), e.lanes = n, e;
    }
    function Ro(e, t, n) {
        return t = Te(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function dh(e, t, n, r, l) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = co(0), this.expirationTimes = co(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = co(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
    }
    function Pu(e, t, n, r, l, o, i, u, s) {
        return e = new dh(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Te(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, au(o), e;
    }
    function ph(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Xt,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function _f(e) {
        if (!e) return xt;
        e = e._reactInternals;
        e: {
            if (Ht(e) !== e || e.tag !== 1) throw Error(_(170));
            var t = e;
            do {
                switch(t.tag){
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (ve(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                t = t.return;
            }while (t !== null);
            throw Error(_(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if (ve(n)) return wc(e, n, t);
        }
        return t;
    }
    function kf(e, t, n, r, l, o, i, u, s) {
        return e = Pu(n, r, !0, e, l, o, i, u, s), e.context = _f(null), n = e.current, r = ce(), l = wt(n), o = Je(r, l), o.callback = t ?? null, gt(n, o, l), e.current.lanes = l, Sr(e, l, r), ge(e, r), e;
    }
    function Ql(e, t, n, r) {
        var l = t.current, o = ce(), i = wt(l);
        return n = _f(n), t.context === null ? t.context = n : t.pendingContext = n, t = Je(o, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gt(l, t, i), e !== null && (Ue(e, l, i, o), br(e, l, i)), i;
    }
    function Ll(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function $s(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Nu(e, t) {
        $s(e, t), (e = e.alternate) && $s(e, t);
    }
    function hh() {
        return null;
    }
    var Sf = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function Tu(e) {
        this._internalRoot = e;
    }
    Kl.prototype.render = Tu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(_(409));
        Ql(e, t, null, null);
    };
    Kl.prototype.unmount = Tu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Bt(function() {
                Ql(null, e, null, null);
            }), t[be] = null;
        }
    };
    function Kl(e) {
        this._internalRoot = e;
    }
    Kl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = qa();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
            ut.splice(n, 0, e), n === 0 && ec(e);
        }
    };
    function zu(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Gl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Ws() {}
    function mh(e, t, n, r, l) {
        if (l) {
            if (typeof r == "function") {
                var o = r;
                r = function() {
                    var a = Ll(i);
                    o.call(a);
                };
            }
            var i = kf(t, r, e, 0, null, !1, !1, "", Ws);
            return e._reactRootContainer = i, e[be] = i.current, cr(e.nodeType === 8 ? e.parentNode : e), Bt(), i;
        }
        for(; l = e.lastChild;)e.removeChild(l);
        if (typeof r == "function") {
            var u = r;
            r = function() {
                var a = Ll(s);
                u.call(a);
            };
        }
        var s = Pu(e, 0, !1, null, null, !1, !1, "", Ws);
        return e._reactRootContainer = s, e[be] = s.current, cr(e.nodeType === 8 ? e.parentNode : e), Bt(function() {
            Ql(t, s, n, r);
        }), s;
    }
    function Yl(e, t, n, r, l) {
        var o = n._reactRootContainer;
        if (o) {
            var i = o;
            if (typeof l == "function") {
                var u = l;
                l = function() {
                    var s = Ll(i);
                    u.call(s);
                };
            }
            Ql(t, i, e, l);
        } else i = mh(n, t, e, l, r);
        return Ll(i);
    }
    Za = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Hn(t.pendingLanes);
                    n !== 0 && (Yi(t, n | 1), ge(t, Y()), !(I & 6) && (xn = Y() + 500, Pt()));
                }
                break;
            case 13:
                Bt(function() {
                    var r = et(e, 1);
                    if (r !== null) {
                        var l = ce();
                        Ue(r, e, 1, l);
                    }
                }), Nu(e, 1);
        }
    };
    Xi = function(e) {
        if (e.tag === 13) {
            var t = et(e, 134217728);
            if (t !== null) {
                var n = ce();
                Ue(t, e, 134217728, n);
            }
            Nu(e, 134217728);
        }
    };
    Ja = function(e) {
        if (e.tag === 13) {
            var t = wt(e), n = et(e, t);
            if (n !== null) {
                var r = ce();
                Ue(n, e, t, r);
            }
            Nu(e, t);
        }
    };
    qa = function() {
        return D;
    };
    ba = function(e, t) {
        var n = D;
        try {
            return D = e, t();
        } finally{
            D = n;
        }
    };
    Jo = function(e, t, n) {
        switch(t){
            case "input":
                if (Ho(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var l = Fl(r);
                            if (!l) throw Error(_(90));
                            La(r), Ho(r, l);
                        }
                    }
                }
                break;
            case "textarea":
                ja(e, n);
                break;
            case "select":
                t = n.value, t != null && an(e, !!n.multiple, t, !1);
        }
    };
    Aa = Su;
    $a = Bt;
    var vh = {
        usingClientEntryPoint: !1,
        Events: [
            Er,
            en,
            Fl,
            Ua,
            Fa,
            Su
        ]
    }, Wn = {
        findFiberByHostInstance: Ot,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, gh = {
        bundleType: Wn.bundleType,
        version: Wn.version,
        rendererPackageName: Wn.rendererPackageName,
        rendererConfig: Wn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: nt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Va(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Wn.findFiberByHostInstance || hh,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Hr.isDisabled && Hr.supportsFiber) try {
            Ml = Hr.inject(gh), Ve = Hr;
        } catch  {}
    }
    Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vh;
    Ee.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!zu(t)) throw Error(_(200));
        return ph(e, t, null, n);
    };
    Ee.createRoot = function(e, t) {
        if (!zu(e)) throw Error(_(299));
        var n = !1, r = "", l = Sf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Pu(e, 1, !1, null, null, n, !1, r, l), e[be] = t.current, cr(e.nodeType === 8 ? e.parentNode : e), new Tu(t);
    };
    Ee.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
        return e = Va(t), e = e === null ? null : e.stateNode, e;
    };
    Ee.flushSync = function(e) {
        return Bt(e);
    };
    Ee.hydrate = function(e, t, n) {
        if (!Gl(t)) throw Error(_(200));
        return Yl(null, e, t, !0, n);
    };
    Ee.hydrateRoot = function(e, t, n) {
        if (!zu(e)) throw Error(_(405));
        var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Sf;
        if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = kf(t, null, e, 1, n ?? null, l, !1, o, i), e[be] = t.current, cr(e), r) for(e = 0; e < r.length; e++)n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            l
        ] : t.mutableSourceEagerHydrationData.push(n, l);
        return new Kl(t);
    };
    Ee.render = function(e, t, n) {
        if (!Gl(t)) throw Error(_(200));
        return Yl(null, e, t, !1, n);
    };
    Ee.unmountComponentAtNode = function(e) {
        if (!Gl(e)) throw Error(_(40));
        return e._reactRootContainer ? (Bt(function() {
            Yl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[be] = null;
            });
        }), !0) : !1;
    };
    Ee.unstable_batchedUpdates = Su;
    Ee.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Gl(n)) throw Error(_(200));
        if (e == null || e._reactInternals === void 0) throw Error(_(38));
        return Yl(e, t, n, !1, r);
    };
    Ee.version = "18.3.1-next-f1338f8080-20240426";
    function xf() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xf);
        } catch (e) {
            console.error(e);
        }
    }
    xf(), Sa.exports = Ee;
    var yh = Sa.exports, Bs = yh;
    Uo.createRoot = Bs.createRoot, Uo.hydrateRoot = Bs.hydrateRoot;
    function wr() {
        return wr = Object.assign ? Object.assign.bind() : function(e) {
            for(var t = 1; t < arguments.length; t++){
                var n = arguments[t];
                for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, wr.apply(this, arguments);
    }
    var dt;
    (function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
    })(dt || (dt = {}));
    const Vs = "popstate";
    function wh(e) {
        e === void 0 && (e = {});
        function t(l, o) {
            let { pathname: i = "/", search: u = "", hash: s = "" } = Qt(l.location.hash.substr(1));
            return !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i), Li("", {
                pathname: i,
                search: u,
                hash: s
            }, o.state && o.state.usr || null, o.state && o.state.key || "default");
        }
        function n(l, o) {
            let i = l.document.querySelector("base"), u = "";
            if (i && i.getAttribute("href")) {
                let s = l.location.href, a = s.indexOf("#");
                u = a === -1 ? s : s.slice(0, a);
            }
            return u + "#" + (typeof o == "string" ? o : Rl(o));
        }
        function r(l, o) {
            Xl(l.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(o) + ")");
        }
        return kh(t, n, r, e);
    }
    function H(e, t) {
        if (e === !1 || e === null || typeof e > "u") throw new Error(t);
    }
    function Xl(e, t) {
        if (!e) {
            typeof console < "u" && console.warn(t);
            try {
                throw new Error(t);
            } catch  {}
        }
    }
    function _h() {
        return Math.random().toString(36).substr(2, 8);
    }
    function Hs(e, t) {
        return {
            usr: e.state,
            key: e.key,
            idx: t
        };
    }
    function Li(e, t, n, r) {
        return n === void 0 && (n = null), wr({
            pathname: typeof e == "string" ? e : e.pathname,
            search: "",
            hash: ""
        }, typeof t == "string" ? Qt(t) : t, {
            state: n,
            key: t && t.key || r || _h()
        });
    }
    function Rl(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
    }
    function Qt(e) {
        let t = {};
        if (e) {
            let n = e.indexOf("#");
            n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
            let r = e.indexOf("?");
            r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
        }
        return t;
    }
    function kh(e, t, n, r) {
        r === void 0 && (r = {});
        let { window: l = document.defaultView, v5Compat: o = !1 } = r, i = l.history, u = dt.Pop, s = null, a = h();
        a == null && (a = 0, i.replaceState(wr({}, i.state, {
            idx: a
        }), ""));
        function h() {
            return (i.state || {
                idx: null
            }).idx;
        }
        function f() {
            u = dt.Pop;
            let S = h(), d = S == null ? null : S - a;
            a = S, s && s({
                action: u,
                location: w.location,
                delta: d
            });
        }
        function m(S, d) {
            u = dt.Push;
            let c = Li(w.location, S, d);
            n && n(c, S), a = h() + 1;
            let p = Hs(c, a), v = w.createHref(c);
            try {
                i.pushState(p, "", v);
            } catch (x) {
                if (x instanceof DOMException && x.name === "DataCloneError") throw x;
                l.location.assign(v);
            }
            o && s && s({
                action: u,
                location: w.location,
                delta: 1
            });
        }
        function g(S, d) {
            u = dt.Replace;
            let c = Li(w.location, S, d);
            n && n(c, S), a = h();
            let p = Hs(c, a), v = w.createHref(c);
            i.replaceState(p, "", v), o && s && s({
                action: u,
                location: w.location,
                delta: 0
            });
        }
        function y(S) {
            let d = l.location.origin !== "null" ? l.location.origin : l.location.href, c = typeof S == "string" ? S : Rl(S);
            return c = c.replace(/ $/, "%20"), H(d, "No window.location.(origin|href) available to create URL for href: " + c), new URL(c, d);
        }
        let w = {
            get action () {
                return u;
            },
            get location () {
                return e(l, i);
            },
            listen (S) {
                if (s) throw new Error("A history only accepts one active listener");
                return l.addEventListener(Vs, f), s = S, ()=>{
                    l.removeEventListener(Vs, f), s = null;
                };
            },
            createHref (S) {
                return t(l, S);
            },
            createURL: y,
            encodeLocation (S) {
                let d = y(S);
                return {
                    pathname: d.pathname,
                    search: d.search,
                    hash: d.hash
                };
            },
            push: m,
            replace: g,
            go (S) {
                return i.go(S);
            }
        };
        return w;
    }
    var Qs;
    (function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
    })(Qs || (Qs = {}));
    function Sh(e, t, n) {
        return n === void 0 && (n = "/"), xh(e, t, n);
    }
    function xh(e, t, n, r) {
        let l = typeof t == "string" ? Qt(t) : t, o = En(l.pathname || "/", n);
        if (o == null) return null;
        let i = Ef(e);
        Eh(i);
        let u = null;
        for(let s = 0; u == null && s < i.length; ++s){
            let a = Ih(o);
            u = Oh(i[s], a);
        }
        return u;
    }
    function Ef(e, t, n, r) {
        t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
        let l = (o, i, u)=>{
            let s = {
                relativePath: u === void 0 ? o.path || "" : u,
                caseSensitive: o.caseSensitive === !0,
                childrenIndex: i,
                route: o
            };
            s.relativePath.startsWith("/") && (H(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), s.relativePath = s.relativePath.slice(r.length));
            let a = kt([
                r,
                s.relativePath
            ]), h = n.concat(s);
            o.children && o.children.length > 0 && (H(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + a + '".')), Ef(o.children, t, h, a)), !(o.path == null && !o.index) && t.push({
                path: a,
                score: Rh(a, o.index),
                routesMeta: h
            });
        };
        return e.forEach((o, i)=>{
            var u;
            if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
            else for (let s of Cf(o.path))l(o, i, s);
        }), t;
    }
    function Cf(e) {
        let t = e.split("/");
        if (t.length === 0) return [];
        let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
        if (r.length === 0) return l ? [
            o,
            ""
        ] : [
            o
        ];
        let i = Cf(r.join("/")), u = [];
        return u.push(...i.map((s)=>s === "" ? o : [
                o,
                s
            ].join("/"))), l && u.push(...i), u.map((s)=>e.startsWith("/") && s === "" ? "/" : s);
    }
    function Eh(e) {
        e.sort((t, n)=>t.score !== n.score ? n.score - t.score : jh(t.routesMeta.map((r)=>r.childrenIndex), n.routesMeta.map((r)=>r.childrenIndex)));
    }
    const Ch = /^:[\w-]+$/, Ph = 3, Nh = 2, Th = 1, zh = 10, Lh = -2, Ks = (e)=>e === "*";
    function Rh(e, t) {
        let n = e.split("/"), r = n.length;
        return n.some(Ks) && (r += Lh), t && (r += Nh), n.filter((l)=>!Ks(l)).reduce((l, o)=>l + (Ch.test(o) ? Ph : o === "" ? Th : zh), r);
    }
    function jh(e, t) {
        return e.length === t.length && e.slice(0, -1).every((r, l)=>r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0;
    }
    function Oh(e, t, n) {
        let { routesMeta: r } = e, l = {}, o = "/", i = [];
        for(let u = 0; u < r.length; ++u){
            let s = r[u], a = u === r.length - 1, h = o === "/" ? t : t.slice(o.length) || "/", f = Ri({
                path: s.relativePath,
                caseSensitive: s.caseSensitive,
                end: a
            }, h), m = s.route;
            if (!f) return null;
            Object.assign(l, f.params), i.push({
                params: l,
                pathname: kt([
                    o,
                    f.pathname
                ]),
                pathnameBase: $h(kt([
                    o,
                    f.pathnameBase
                ])),
                route: m
            }), f.pathnameBase !== "/" && (o = kt([
                o,
                f.pathnameBase
            ]));
        }
        return i;
    }
    function Ri(e, t) {
        typeof e == "string" && (e = {
            path: e,
            caseSensitive: !1,
            end: !0
        });
        let [n, r] = Mh(e.path, e.caseSensitive, e.end), l = t.match(n);
        if (!l) return null;
        let o = l[0], i = o.replace(/(.)\/+$/, "$1"), u = l.slice(1);
        return {
            params: r.reduce((a, h, f)=>{
                let { paramName: m, isOptional: g } = h;
                if (m === "*") {
                    let w = u[f] || "";
                    i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
                }
                const y = u[f];
                return g && !y ? a[m] = void 0 : a[m] = (y || "").replace(/%2F/g, "/"), a;
            }, {}),
            pathname: o,
            pathnameBase: i,
            pattern: e
        };
    }
    function Mh(e, t, n) {
        t === void 0 && (t = !1), n === void 0 && (n = !0), Xl(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
        let r = [], l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, u, s)=>(r.push({
                paramName: u,
                isOptional: s != null
            }), s ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return e.endsWith("*") ? (r.push({
            paramName: "*"
        }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [
            new RegExp(l, t ? void 0 : "i"),
            r
        ];
    }
    function Ih(e) {
        try {
            return e.split("/").map((t)=>decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
        } catch (t) {
            return Xl(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
        }
    }
    function En(e, t) {
        if (t === "/") return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
        return r && r !== "/" ? null : e.slice(n) || "/";
    }
    const Dh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Uh = (e)=>Dh.test(e);
    function Fh(e, t) {
        t === void 0 && (t = "/");
        let { pathname: n, search: r = "", hash: l = "" } = typeof e == "string" ? Qt(e) : e, o;
        if (n) if (Uh(n)) o = n;
        else {
            if (n.includes("//")) {
                let i = n;
                n = n.replace(/\/\/+/g, "/"), Xl(!1, "Pathnames cannot have embedded double slashes - normalizing " + (i + " -> " + n));
            }
            n.startsWith("/") ? o = Gs(n.substring(1), "/") : o = Gs(n, t);
        }
        else o = t;
        return {
            pathname: o,
            search: Wh(r),
            hash: Bh(l)
        };
    }
    function Gs(e, t) {
        let n = t.replace(/\/+$/, "").split("/");
        return e.split("/").forEach((l)=>{
            l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
        }), n.length > 1 ? n.join("/") : "/";
    }
    function jo(e, t, n, r) {
        return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
    }
    function Ah(e) {
        return e.filter((t, n)=>n === 0 || t.route.path && t.route.path.length > 0);
    }
    function Lu(e, t) {
        let n = Ah(e);
        return t ? n.map((r, l)=>l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r)=>r.pathnameBase);
    }
    function Ru(e, t, n, r) {
        r === void 0 && (r = !1);
        let l;
        typeof e == "string" ? l = Qt(e) : (l = wr({}, e), H(!l.pathname || !l.pathname.includes("?"), jo("?", "pathname", "search", l)), H(!l.pathname || !l.pathname.includes("#"), jo("#", "pathname", "hash", l)), H(!l.search || !l.search.includes("#"), jo("#", "search", "hash", l)));
        let o = e === "" || l.pathname === "", i = o ? "/" : l.pathname, u;
        if (i == null) u = n;
        else {
            let f = t.length - 1;
            if (!r && i.startsWith("..")) {
                let m = i.split("/");
                for(; m[0] === "..";)m.shift(), f -= 1;
                l.pathname = m.join("/");
            }
            u = f >= 0 ? t[f] : "/";
        }
        let s = Fh(l, u), a = i && i !== "/" && i.endsWith("/"), h = (o || i === ".") && n.endsWith("/");
        return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
    }
    const kt = (e)=>e.join("/").replace(/\/\/+/g, "/"), $h = (e)=>e.replace(/\/+$/, "").replace(/^\/*/, "/"), Wh = (e)=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Bh = (e)=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
    function Vh(e) {
        return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
    }
    const Pf = [
        "post",
        "put",
        "patch",
        "delete"
    ];
    new Set(Pf);
    const Hh = [
        "get",
        ...Pf
    ];
    new Set(Hh);
    function _r() {
        return _r = Object.assign ? Object.assign.bind() : function(e) {
            for(var t = 1; t < arguments.length; t++){
                var n = arguments[t];
                for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, _r.apply(this, arguments);
    }
    const Zl = k.createContext(null), Nf = k.createContext(null), rt = k.createContext(null), Jl = k.createContext(null), Nt = k.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }), Tf = k.createContext(null);
    function Qh(e, t) {
        let { relative: n } = t === void 0 ? {} : t;
        zn() || H(!1);
        let { basename: r, navigator: l } = k.useContext(rt), { hash: o, pathname: i, search: u } = ql(e, {
            relative: n
        }), s = i;
        return r !== "/" && (s = i === "/" ? r : kt([
            r,
            i
        ])), l.createHref({
            pathname: s,
            search: u,
            hash: o
        });
    }
    function zn() {
        return k.useContext(Jl) != null;
    }
    function Kt() {
        return zn() || H(!1), k.useContext(Jl).location;
    }
    function zf(e) {
        k.useContext(rt).static || k.useLayoutEffect(e);
    }
    function Lf() {
        let { isDataRoute: e } = k.useContext(Nt);
        return e ? lm() : Kh();
    }
    function Kh() {
        zn() || H(!1);
        let e = k.useContext(Zl), { basename: t, future: n, navigator: r } = k.useContext(rt), { matches: l } = k.useContext(Nt), { pathname: o } = Kt(), i = JSON.stringify(Lu(l, n.v7_relativeSplatPath)), u = k.useRef(!1);
        return zf(()=>{
            u.current = !0;
        }), k.useCallback(function(a, h) {
            if (h === void 0 && (h = {}), !u.current) return;
            if (typeof a == "number") {
                r.go(a);
                return;
            }
            let f = Ru(a, JSON.parse(i), o, h.relative === "path");
            e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : kt([
                t,
                f.pathname
            ])), (h.replace ? r.replace : r.push)(f, h.state, h);
        }, [
            t,
            r,
            i,
            o,
            e
        ]);
    }
    function ql(e, t) {
        let { relative: n } = t === void 0 ? {} : t, { future: r } = k.useContext(rt), { matches: l } = k.useContext(Nt), { pathname: o } = Kt(), i = JSON.stringify(Lu(l, r.v7_relativeSplatPath));
        return k.useMemo(()=>Ru(e, JSON.parse(i), o, n === "path"), [
            e,
            i,
            o,
            n
        ]);
    }
    function Gh(e, t) {
        return Yh(e, t);
    }
    function Yh(e, t, n, r) {
        zn() || H(!1);
        let { navigator: l } = k.useContext(rt), { matches: o } = k.useContext(Nt), i = o[o.length - 1], u = i ? i.params : {};
        i && i.pathname;
        let s = i ? i.pathnameBase : "/";
        i && i.route;
        let a = Kt(), h;
        if (t) {
            var f;
            let S = typeof t == "string" ? Qt(t) : t;
            s === "/" || (f = S.pathname) != null && f.startsWith(s) || H(!1), h = S;
        } else h = a;
        let m = h.pathname || "/", g = m;
        if (s !== "/") {
            let S = s.replace(/^\//, "").split("/");
            g = "/" + m.replace(/^\//, "").split("/").slice(S.length).join("/");
        }
        let y = Sh(e, {
            pathname: g
        }), w = bh(y && y.map((S)=>Object.assign({}, S, {
                params: Object.assign({}, u, S.params),
                pathname: kt([
                    s,
                    l.encodeLocation ? l.encodeLocation(S.pathname).pathname : S.pathname
                ]),
                pathnameBase: S.pathnameBase === "/" ? s : kt([
                    s,
                    l.encodeLocation ? l.encodeLocation(S.pathnameBase).pathname : S.pathnameBase
                ])
            })), o, n, r);
        return t && w ? k.createElement(Jl.Provider, {
            value: {
                location: _r({
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, h),
                navigationType: dt.Pop
            }
        }, w) : w;
    }
    function Xh() {
        let e = rm(), t = Vh(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, l = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
        return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, t), n ? k.createElement("pre", {
            style: l
        }, n) : null, null);
    }
    const Zh = k.createElement(Xh, null);
    class Jh extends k.Component {
        constructor(t){
            super(t), this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error
            };
        }
        static getDerivedStateFromError(t) {
            return {
                error: t
            };
        }
        static getDerivedStateFromProps(t, n) {
            return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
                error: t.error,
                location: t.location,
                revalidation: t.revalidation
            } : {
                error: t.error !== void 0 ? t.error : n.error,
                location: n.location,
                revalidation: t.revalidation || n.revalidation
            };
        }
        componentDidCatch(t, n) {
            console.error("React Router caught the following error during render", t, n);
        }
        render() {
            return this.state.error !== void 0 ? k.createElement(Nt.Provider, {
                value: this.props.routeContext
            }, k.createElement(Tf.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    }
    function qh(e) {
        let { routeContext: t, match: n, children: r } = e, l = k.useContext(Zl);
        return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), k.createElement(Nt.Provider, {
            value: t
        }, r);
    }
    function bh(e, t, n, r) {
        var l;
        if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
            var o;
            if (!n) return null;
            if (n.errors) e = n.matches;
            else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
            else return null;
        }
        let i = e, u = (l = n) == null ? void 0 : l.errors;
        if (u != null) {
            let h = i.findIndex((f)=>f.route.id && u?.[f.route.id] !== void 0);
            h >= 0 || H(!1), i = i.slice(0, Math.min(i.length, h + 1));
        }
        let s = !1, a = -1;
        if (n && r && r.v7_partialHydration) for(let h = 0; h < i.length; h++){
            let f = i[h];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (a = h), f.route.id) {
                let { loaderData: m, errors: g } = n, y = f.route.loader && m[f.route.id] === void 0 && (!g || g[f.route.id] === void 0);
                if (f.route.lazy || y) {
                    s = !0, a >= 0 ? i = i.slice(0, a + 1) : i = [
                        i[0]
                    ];
                    break;
                }
            }
        }
        return i.reduceRight((h, f, m)=>{
            let g, y = !1, w = null, S = null;
            n && (g = u && f.route.id ? u[f.route.id] : void 0, w = f.route.errorElement || Zh, s && (a < 0 && m === 0 ? (om("route-fallback"), y = !0, S = null) : a === m && (y = !0, S = f.route.hydrateFallbackElement || null)));
            let d = t.concat(i.slice(0, m + 1)), c = ()=>{
                let p;
                return g ? p = w : y ? p = S : f.route.Component ? p = k.createElement(f.route.Component, null) : f.route.element ? p = f.route.element : p = h, k.createElement(qh, {
                    match: f,
                    routeContext: {
                        outlet: h,
                        matches: d,
                        isDataRoute: n != null
                    },
                    children: p
                });
            };
            return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0) ? k.createElement(Jh, {
                location: n.location,
                revalidation: n.revalidation,
                component: w,
                error: g,
                children: c(),
                routeContext: {
                    outlet: null,
                    matches: d,
                    isDataRoute: !0
                }
            }) : c();
        }, null);
    }
    var Rf = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
    }(Rf || {}), jf = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
    }(jf || {});
    function em(e) {
        let t = k.useContext(Zl);
        return t || H(!1), t;
    }
    function tm(e) {
        let t = k.useContext(Nf);
        return t || H(!1), t;
    }
    function nm(e) {
        let t = k.useContext(Nt);
        return t || H(!1), t;
    }
    function Of(e) {
        let t = nm(), n = t.matches[t.matches.length - 1];
        return n.route.id || H(!1), n.route.id;
    }
    function rm() {
        var e;
        let t = k.useContext(Tf), n = tm(), r = Of();
        return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
    }
    function lm() {
        let { router: e } = em(Rf.UseNavigateStable), t = Of(jf.UseNavigateStable), n = k.useRef(!1);
        return zf(()=>{
            n.current = !0;
        }), k.useCallback(function(l, o) {
            o === void 0 && (o = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, _r({
                fromRouteId: t
            }, o)));
        }, [
            e,
            t
        ]);
    }
    const Ys = {};
    function om(e, t, n) {
        Ys[e] || (Ys[e] = !0);
    }
    function im(e, t) {
        e?.v7_startTransition, e?.v7_relativeSplatPath;
    }
    function Xs(e) {
        let { to: t, replace: n, state: r, relative: l } = e;
        zn() || H(!1);
        let { future: o, static: i } = k.useContext(rt), { matches: u } = k.useContext(Nt), { pathname: s } = Kt(), a = Lf(), h = Ru(t, Lu(u, o.v7_relativeSplatPath), s, l === "path"), f = JSON.stringify(h);
        return k.useEffect(()=>a(JSON.parse(f), {
                replace: n,
                state: r,
                relative: l
            }), [
            a,
            f,
            l,
            n,
            r
        ]), null;
    }
    function Qe(e) {
        H(!1);
    }
    function um(e) {
        let { basename: t = "/", children: n = null, location: r, navigationType: l = dt.Pop, navigator: o, static: i = !1, future: u } = e;
        zn() && H(!1);
        let s = t.replace(/^\/*/, "/"), a = k.useMemo(()=>({
                basename: s,
                navigator: o,
                static: i,
                future: _r({
                    v7_relativeSplatPath: !1
                }, u)
            }), [
            s,
            u,
            o,
            i
        ]);
        typeof r == "string" && (r = Qt(r));
        let { pathname: h = "/", search: f = "", hash: m = "", state: g = null, key: y = "default" } = r, w = k.useMemo(()=>{
            let S = En(h, s);
            return S == null ? null : {
                location: {
                    pathname: S,
                    search: f,
                    hash: m,
                    state: g,
                    key: y
                },
                navigationType: l
            };
        }, [
            s,
            h,
            f,
            m,
            g,
            y,
            l
        ]);
        return w == null ? null : k.createElement(rt.Provider, {
            value: a
        }, k.createElement(Jl.Provider, {
            children: n,
            value: w
        }));
    }
    function sm(e) {
        let { children: t, location: n } = e;
        return Gh(ji(t), n);
    }
    new Promise(()=>{});
    function ji(e, t) {
        t === void 0 && (t = []);
        let n = [];
        return k.Children.forEach(e, (r, l)=>{
            if (!k.isValidElement(r)) return;
            let o = [
                ...t,
                l
            ];
            if (r.type === k.Fragment) {
                n.push.apply(n, ji(r.props.children, o));
                return;
            }
            r.type !== Qe && H(!1), !r.props.index || !r.props.children || H(!1);
            let i = {
                id: r.props.id || o.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy
            };
            r.props.children && (i.children = ji(r.props.children, o)), n.push(i);
        }), n;
    }
    function jl() {
        return jl = Object.assign ? Object.assign.bind() : function(e) {
            for(var t = 1; t < arguments.length; t++){
                var n = arguments[t];
                for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, jl.apply(this, arguments);
    }
    function Mf(e, t) {
        if (e == null) return {};
        var n = {}, r = Object.keys(e), l, o;
        for(o = 0; o < r.length; o++)l = r[o], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
        return n;
    }
    function am(e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
    }
    function cm(e, t) {
        return e.button === 0 && (!t || t === "_self") && !am(e);
    }
    const fm = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "viewTransition"
    ], dm = [
        "aria-current",
        "caseSensitive",
        "className",
        "end",
        "style",
        "to",
        "viewTransition",
        "children"
    ], pm = "6";
    try {
        window.__reactRouterVersion = pm;
    } catch  {}
    const hm = k.createContext({
        isTransitioning: !1
    }), mm = "startTransition", Zs = ud[mm];
    function vm(e) {
        let { basename: t, children: n, future: r, window: l } = e, o = k.useRef();
        o.current == null && (o.current = wh({
            window: l,
            v5Compat: !0
        }));
        let i = o.current, [u, s] = k.useState({
            action: i.action,
            location: i.location
        }), { v7_startTransition: a } = r || {}, h = k.useCallback((f)=>{
            a && Zs ? Zs(()=>s(f)) : s(f);
        }, [
            s,
            a
        ]);
        return k.useLayoutEffect(()=>i.listen(h), [
            i,
            h
        ]), k.useEffect(()=>im(r), [
            r
        ]), k.createElement(um, {
            basename: t,
            children: n,
            location: u.location,
            navigationType: u.action,
            navigator: i,
            future: r
        });
    }
    const gm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ym = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, wm = k.forwardRef(function(t, n) {
        let { onClick: r, relative: l, reloadDocument: o, replace: i, state: u, target: s, to: a, preventScrollReset: h, viewTransition: f } = t, m = Mf(t, fm), { basename: g } = k.useContext(rt), y, w = !1;
        if (typeof a == "string" && ym.test(a) && (y = a, gm)) try {
            let p = new URL(window.location.href), v = a.startsWith("//") ? new URL(p.protocol + a) : new URL(a), x = En(v.pathname, g);
            v.origin === p.origin && x != null ? a = x + v.search + v.hash : w = !0;
        } catch  {}
        let S = Qh(a, {
            relative: l
        }), d = km(a, {
            replace: i,
            state: u,
            target: s,
            preventScrollReset: h,
            relative: l,
            viewTransition: f
        });
        function c(p) {
            r && r(p), p.defaultPrevented || d(p);
        }
        return k.createElement("a", jl({}, m, {
            href: y || S,
            onClick: w || o ? r : c,
            ref: n,
            target: s
        }));
    }), Js = k.forwardRef(function(t, n) {
        let { "aria-current": r = "page", caseSensitive: l = !1, className: o = "", end: i = !1, style: u, to: s, viewTransition: a, children: h } = t, f = Mf(t, dm), m = ql(s, {
            relative: f.relative
        }), g = Kt(), y = k.useContext(Nf), { navigator: w, basename: S } = k.useContext(rt), d = y != null && Sm(m) && a === !0, c = w.encodeLocation ? w.encodeLocation(m).pathname : m.pathname, p = g.pathname, v = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
        l || (p = p.toLowerCase(), v = v ? v.toLowerCase() : null, c = c.toLowerCase()), v && S && (v = En(v, S) || v);
        const x = c !== "/" && c.endsWith("/") ? c.length - 1 : c.length;
        let N = p === c || !i && p.startsWith(c) && p.charAt(x) === "/", z = v != null && (v === c || !i && v.startsWith(c) && v.charAt(c.length) === "/"), L = {
            isActive: N,
            isPending: z,
            isTransitioning: d
        }, W = N ? r : void 0, j;
        typeof o == "function" ? j = o(L) : j = [
            o,
            N ? "active" : null,
            z ? "pending" : null,
            d ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let ye = typeof u == "function" ? u(L) : u;
        return k.createElement(wm, jl({}, f, {
            "aria-current": W,
            className: j,
            ref: n,
            style: ye,
            to: s,
            viewTransition: a
        }), typeof h == "function" ? h(L) : h);
    });
    var Oi;
    (function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
    })(Oi || (Oi = {}));
    var qs;
    (function(e) {
        e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
    })(qs || (qs = {}));
    function _m(e) {
        let t = k.useContext(Zl);
        return t || H(!1), t;
    }
    function km(e, t) {
        let { target: n, replace: r, state: l, preventScrollReset: o, relative: i, viewTransition: u } = t === void 0 ? {} : t, s = Lf(), a = Kt(), h = ql(e, {
            relative: i
        });
        return k.useCallback((f)=>{
            if (cm(f, n)) {
                f.preventDefault();
                let m = r !== void 0 ? r : Rl(a) === Rl(h);
                s(e, {
                    replace: m,
                    state: l,
                    preventScrollReset: o,
                    relative: i,
                    viewTransition: u
                });
            }
        }, [
            a,
            s,
            h,
            r,
            l,
            n,
            e,
            o,
            i,
            u
        ]);
    }
    function Sm(e, t) {
        t === void 0 && (t = {});
        let n = k.useContext(hm);
        n == null && H(!1);
        let { basename: r } = _m(Oi.useViewTransitionState), l = ql(e, {
            relative: t.relative
        });
        if (!n.isTransitioning) return !1;
        let o = En(n.currentLocation.pathname, r) || n.currentLocation.pathname, i = En(n.nextLocation.pathname, r) || n.nextLocation.pathname;
        return Ri(l.pathname, i) != null || Ri(l.pathname, o) != null;
    }
    const xm = "modulepreload", Em = function(e) {
        return "/tokenlearn/" + e;
    }, bs = {}, Ln = function(t, n, r) {
        let l = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), u = i?.nonce || i?.getAttribute("nonce");
            l = Promise.allSettled(n.map((s)=>{
                if (s = Em(s), s in bs) return;
                bs[s] = !0;
                const a = s.endsWith(".css"), h = a ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${s}"]${h}`)) return;
                const f = document.createElement("link");
                if (f.rel = a ? "stylesheet" : xm, a || (f.as = "script"), f.crossOrigin = "", f.href = s, u && f.setAttribute("nonce", u), document.head.appendChild(f), a) return new Promise((m, g)=>{
                    f.addEventListener("load", m), f.addEventListener("error", ()=>g(new Error(`Unable to preload CSS for ${s}`)));
                });
            }));
        }
        function o(i) {
            const u = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (u.payload = i, window.dispatchEvent(u), !u.defaultPrevented) throw i;
        }
        return l.then((i)=>{
            for (const u of i || [])u.status === "rejected" && o(u.reason);
            return t().catch(o);
        });
    }, Cm = {}, ea = (e)=>{
        let t;
        const n = new Set, r = (h, f)=>{
            const m = typeof h == "function" ? h(t) : h;
            if (!Object.is(m, t)) {
                const g = t;
                t = f ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), n.forEach((y)=>y(t, g));
            }
        }, l = ()=>t, s = {
            setState: r,
            getState: l,
            getInitialState: ()=>a,
            subscribe: (h)=>(n.add(h), ()=>n.delete(h)),
            destroy: ()=>{
                (Cm ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear();
            }
        }, a = t = e(r, l, s);
        return s;
    }, Pm = (e)=>e ? ea(e) : ea;
    var If = {
        exports: {}
    }, Df = {}, Uf = {
        exports: {}
    }, Ff = {};
    var Cn = k;
    function Nm(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Tm = typeof Object.is == "function" ? Object.is : Nm, zm = Cn.useState, Lm = Cn.useEffect, Rm = Cn.useLayoutEffect, jm = Cn.useDebugValue;
    function Om(e, t) {
        var n = t(), r = zm({
            inst: {
                value: n,
                getSnapshot: t
            }
        }), l = r[0].inst, o = r[1];
        return Rm(function() {
            l.value = n, l.getSnapshot = t, Oo(l) && o({
                inst: l
            });
        }, [
            e,
            n,
            t
        ]), Lm(function() {
            return Oo(l) && o({
                inst: l
            }), e(function() {
                Oo(l) && o({
                    inst: l
                });
            });
        }, [
            e
        ]), jm(n), n;
    }
    function Oo(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Tm(e, n);
        } catch  {
            return !0;
        }
    }
    function Mm(e, t) {
        return t();
    }
    var Im = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Mm : Om;
    Ff.useSyncExternalStore = Cn.useSyncExternalStore !== void 0 ? Cn.useSyncExternalStore : Im;
    Uf.exports = Ff;
    var Dm = Uf.exports;
    var bl = k, Um = Dm;
    function Fm(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Am = typeof Object.is == "function" ? Object.is : Fm, $m = Um.useSyncExternalStore, Wm = bl.useRef, Bm = bl.useEffect, Vm = bl.useMemo, Hm = bl.useDebugValue;
    Df.useSyncExternalStoreWithSelector = function(e, t, n, r, l) {
        var o = Wm(null);
        if (o.current === null) {
            var i = {
                hasValue: !1,
                value: null
            };
            o.current = i;
        } else i = o.current;
        o = Vm(function() {
            function s(g) {
                if (!a) {
                    if (a = !0, h = g, g = r(g), l !== void 0 && i.hasValue) {
                        var y = i.value;
                        if (l(y, g)) return f = y;
                    }
                    return f = g;
                }
                if (y = f, Am(h, g)) return y;
                var w = r(g);
                return l !== void 0 && l(y, w) ? (h = g, y) : (h = g, f = w);
            }
            var a = !1, h, f, m = n === void 0 ? null : n;
            return [
                function() {
                    return s(t());
                },
                m === null ? void 0 : function() {
                    return s(m());
                }
            ];
        }, [
            t,
            n,
            r,
            l
        ]);
        var u = $m(e, o[0], o[1]);
        return Bm(function() {
            i.hasValue = !0, i.value = u;
        }, [
            u
        ]), Hm(u), u;
    };
    If.exports = Df;
    var Qm = If.exports;
    const Km = ca(Qm), Af = {}, { useDebugValue: Gm } = Ai, { useSyncExternalStoreWithSelector: Ym } = Km;
    let ta = !1;
    const Xm = (e)=>e;
    function Zm(e, t = Xm, n) {
        (Af ? "production" : void 0) !== "production" && n && !ta && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), ta = !0);
        const r = Ym(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
        return Gm(r), r;
    }
    const na = (e)=>{
        (Af ? "production" : void 0) !== "production" && typeof e != "function" && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
        const t = typeof e == "function" ? Pm(e) : e, n = (r, l)=>Zm(t, r, l);
        return Object.assign(n, t), n;
    }, Jm = (e)=>e ? na(e) : na, qm = "/tokenlearn/assets/tiktoken_bg-YjhjrOPs.wasm", bm = async (e = {}, t)=>{
        let n;
        if (t.startsWith("data:")) {
            const r = t.replace(/^data:.*?base64,/, "");
            let l;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") l = Buffer.from(r, "base64");
            else if (typeof atob == "function") {
                const o = atob(r);
                l = new Uint8Array(o.length);
                for(let i = 0; i < o.length; i++)l[i] = o.charCodeAt(i);
            } else throw new Error("Cannot decode base64-encoded data URL");
            n = await WebAssembly.instantiate(l, e);
        } else {
            const r = await fetch(t), l = r.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && l.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, e);
            else {
                const o = await r.arrayBuffer();
                n = await WebAssembly.instantiate(o, e);
            }
        }
        return n.instance.exports;
    };
    let P;
    function ev(e) {
        P = e;
    }
    const tv = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    let $f = new tv("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    $f.decode();
    let Qr = null;
    function mn() {
        return (Qr === null || Qr.byteLength === 0) && (Qr = new Uint8Array(P.memory.buffer)), Qr;
    }
    function eo(e, t) {
        return e = e >>> 0, $f.decode(mn().subarray(e, e + t));
    }
    const Ye = new Array(128).fill(void 0);
    Ye.push(void 0, null, !0, !1);
    let tr = Ye.length;
    function Be(e) {
        tr === Ye.length && Ye.push(Ye.length + 1);
        const t = tr;
        return tr = Ye[t], Ye[t] = e, t;
    }
    function Wf(e, t) {
        try {
            return e.apply(this, t);
        } catch (n) {
            P.__wbindgen_export_0(Be(n));
        }
    }
    function to(e) {
        return Ye[e];
    }
    function nv(e) {
        e < 132 || (Ye[e] = tr, tr = e);
    }
    function sn(e) {
        const t = to(e);
        return nv(e), t;
    }
    let _e = 0;
    const rv = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
    let il = new rv("utf-8");
    const lv = typeof il.encodeInto == "function" ? function(e, t) {
        return il.encodeInto(e, t);
    } : function(e, t) {
        const n = il.encode(e);
        return t.set(n), {
            read: e.length,
            written: n.length
        };
    };
    function jt(e, t, n) {
        if (n === void 0) {
            const u = il.encode(e), s = t(u.length, 1) >>> 0;
            return mn().subarray(s, s + u.length).set(u), _e = u.length, s;
        }
        let r = e.length, l = t(r, 1) >>> 0;
        const o = mn();
        let i = 0;
        for(; i < r; i++){
            const u = e.charCodeAt(i);
            if (u > 127) break;
            o[l + i] = u;
        }
        if (i !== r) {
            i !== 0 && (e = e.slice(i)), l = n(l, r, r = i + e.length * 3, 1) >>> 0;
            const u = mn().subarray(l + i, l + r), s = lv(e, u);
            i += s.written, l = n(l, r, i, 1) >>> 0;
        }
        return _e = i, l;
    }
    function ov(e) {
        return e == null;
    }
    let Yt = null;
    function X() {
        return (Yt === null || Yt.buffer.detached === !0 || Yt.buffer.detached === void 0 && Yt.buffer !== P.memory.buffer) && (Yt = new DataView(P.memory.buffer)), Yt;
    }
    let Kr = null;
    function Bf() {
        return (Kr === null || Kr.byteLength === 0) && (Kr = new Uint32Array(P.memory.buffer)), Kr;
    }
    function ra(e, t) {
        return e = e >>> 0, Bf().subarray(e / 4, e / 4 + t);
    }
    function iv(e, t) {
        const n = t(e.length * 1, 1) >>> 0;
        return mn().set(e, n / 1), _e = e.length, n;
    }
    function uv(e, t) {
        const n = t(e.length * 4, 4) >>> 0;
        return Bf().set(e, n / 4), _e = e.length, n;
    }
    function la(e, t) {
        return e = e >>> 0, mn().subarray(e / 1, e / 1 + t);
    }
    function sv(e, t) {
        if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
        try {
            const o = P.__wbindgen_add_to_stack_pointer(-16), i = jt(e, P.__wbindgen_export_1, P.__wbindgen_export_2), u = _e;
            P.get_encoding(o, i, u, Be(t));
            var n = X().getInt32(o + 4 * 0, !0), r = X().getInt32(o + 4 * 1, !0), l = X().getInt32(o + 4 * 2, !0);
            if (l) throw sn(r);
            return ju.__wrap(n);
        } finally{
            P.__wbindgen_add_to_stack_pointer(16);
        }
    }
    const Mo = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>P.__wbg_tiktoken_free(e >>> 0, 1));
    class ju {
        static __wrap(t) {
            t = t >>> 0;
            const n = Object.create(ju.prototype);
            return n.__wbg_ptr = t, Mo.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Mo.unregister(this), t;
        }
        free() {
            if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
            const t = this.__destroy_into_raw();
            P.__wbg_tiktoken_free(t, 0);
        }
        constructor(t, n, r){
            if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
            const l = jt(t, P.__wbindgen_export_1, P.__wbindgen_export_2), o = _e, i = jt(r, P.__wbindgen_export_1, P.__wbindgen_export_2), u = _e, s = P.tiktoken_new(l, o, Be(n), i, u);
            return this.__wbg_ptr = s >>> 0, Mo.register(this, this.__wbg_ptr, this), this;
        }
        get name() {
            try {
                const r = P.__wbindgen_add_to_stack_pointer(-16);
                P.tiktoken_name(r, this.__wbg_ptr);
                var t = X().getInt32(r + 4 * 0, !0), n = X().getInt32(r + 4 * 1, !0);
                let l;
                return t !== 0 && (l = eo(t, n).slice(), P.__wbindgen_export_3(t, n * 1, 1)), l;
            } finally{
                P.__wbindgen_add_to_stack_pointer(16);
            }
        }
        encode(t, n, r) {
            if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
            try {
                const a = P.__wbindgen_add_to_stack_pointer(-16), h = jt(t, P.__wbindgen_export_1, P.__wbindgen_export_2), f = _e;
                P.tiktoken_encode(a, this.__wbg_ptr, h, f, Be(n), Be(r));
                var l = X().getInt32(a + 4 * 0, !0), o = X().getInt32(a + 4 * 1, !0), i = X().getInt32(a + 4 * 2, !0), u = X().getInt32(a + 4 * 3, !0);
                if (u) throw sn(i);
                var s = ra(l, o).slice();
                return P.__wbindgen_export_3(l, o * 4, 4), s;
            } finally{
                P.__wbindgen_add_to_stack_pointer(16);
            }
        }
        encode_ordinary(t) {
            if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
            try {
                const o = P.__wbindgen_add_to_stack_pointer(-16), i = jt(t, P.__wbindgen_export_1, P.__wbindgen_export_2), u = _e;
                P.tiktoken_encode_ordinary(o, this.__wbg_ptr, i, u);
                var n = X().getInt32(o + 4 * 0, !0), r = X().getInt32(o + 4 * 1, !0), l = ra(n, r).slice();
                return P.__wbindgen_export_3(n, r * 4, 4), l;
            } finally{
                P.__wbindgen_add_to_stack_pointer(16);
            }
        }
        encode_with_unstable(t, n, r) {
            if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
            try {
                const u = P.__wbindgen_add_to_stack_pointer(-16), s = jt(t, P.__wbindgen_export_1, P.__wbindgen_export_2), a = _e;
                P.tiktoken_encode_with_unstable(u, this.__wbg_ptr, s, a, Be(n), Be(r));
                var l = X().getInt32(u + 4 * 0, !0), o = X().getInt32(u + 4 * 1, !0), i = X().getInt32(u + 4 * 2, !0);
                if (i) throw sn(o);
                return sn(l);
            } finally{
                P.__wbindgen_add_to_stack_pointer(16);
            }
        }
        encode_single_token(t) {
            if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
            const n = iv(t, P.__wbindgen_export_1), r = _e;
            return P.tiktoken_encode_single_token(this.__wbg_ptr, n, r) >>> 0;
        }
        decode(t) {
            if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
            try {
                const o = P.__wbindgen_add_to_stack_pointer(-16), i = uv(t, P.__wbindgen_export_1), u = _e;
                P.tiktoken_decode(o, this.__wbg_ptr, i, u);
                var n = X().getInt32(o + 4 * 0, !0), r = X().getInt32(o + 4 * 1, !0), l = la(n, r).slice();
                return P.__wbindgen_export_3(n, r * 1, 1), l;
            } finally{
                P.__wbindgen_add_to_stack_pointer(16);
            }
        }
        decode_single_token_bytes(t) {
            if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
            try {
                const o = P.__wbindgen_add_to_stack_pointer(-16);
                P.tiktoken_decode_single_token_bytes(o, this.__wbg_ptr, t);
                var n = X().getInt32(o + 4 * 0, !0), r = X().getInt32(o + 4 * 1, !0), l = la(n, r).slice();
                return P.__wbindgen_export_3(n, r * 1, 1), l;
            } finally{
                P.__wbindgen_add_to_stack_pointer(16);
            }
        }
        token_byte_values() {
            if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
            const t = P.tiktoken_token_byte_values(this.__wbg_ptr);
            return sn(t);
        }
    }
    function av() {
        return Wf(function(e, t) {
            const n = JSON.parse(eo(e, t));
            return Be(n);
        }, arguments);
    }
    function cv() {
        return Wf(function(e) {
            const t = JSON.stringify(to(e));
            return Be(t);
        }, arguments);
    }
    function fv(e, t) {
        const n = new Error(eo(e, t));
        return Be(n);
    }
    function dv(e) {
        return to(e) === void 0;
    }
    function pv(e) {
        sn(e);
    }
    function hv(e, t) {
        if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
        const n = to(t), r = typeof n == "string" ? n : void 0;
        var l = ov(r) ? 0 : jt(r, P.__wbindgen_export_1, P.__wbindgen_export_2), o = _e;
        X().setInt32(e + 4 * 1, o, !0), X().setInt32(e + 4 * 0, l, !0);
    }
    function mv(e, t) {
        throw new Error(eo(e, t));
    }
    URL = globalThis.URL;
    const vv = await bm({
        "./tiktoken_bg.js": {
            __wbindgen_object_drop_ref: pv,
            __wbindgen_is_undefined: dv,
            __wbg_stringify_f7ed6987935b4a24: cv,
            __wbindgen_string_get: hv,
            __wbindgen_error_new: fv,
            __wbg_parse_def2e24ef1252aff: av,
            __wbindgen_throw: mv
        }
    }, qm), { memory: gv, __wbg_tiktoken_free: yv, tiktoken_new: wv, tiktoken_name: _v, tiktoken_encode: kv, tiktoken_encode_ordinary: Sv, tiktoken_encode_with_unstable: xv, tiktoken_encode_single_token: Ev, tiktoken_decode: Cv, tiktoken_decode_single_token_bytes: Pv, tiktoken_token_byte_values: Nv, get_encoding: Tv, encoding_for_model: zv, get_encoding_name_for_model: Lv, __wbindgen_export_0: Rv, __wbindgen_export_1: jv, __wbindgen_export_2: Ov, __wbindgen_add_to_stack_pointer: Mv, __wbindgen_export_3: Iv } = vv, Dv = Object.freeze(Object.defineProperty({
        __proto__: null,
        __wbg_tiktoken_free: yv,
        __wbindgen_add_to_stack_pointer: Mv,
        __wbindgen_export_0: Rv,
        __wbindgen_export_1: jv,
        __wbindgen_export_2: Ov,
        __wbindgen_export_3: Iv,
        encoding_for_model: zv,
        get_encoding: Tv,
        get_encoding_name_for_model: Lv,
        memory: gv,
        tiktoken_decode: Cv,
        tiktoken_decode_single_token_bytes: Pv,
        tiktoken_encode: kv,
        tiktoken_encode_ordinary: Sv,
        tiktoken_encode_single_token: Ev,
        tiktoken_encode_with_unstable: xv,
        tiktoken_name: _v,
        tiktoken_new: wv,
        tiktoken_token_byte_values: Nv
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    ev(Dv);
    let vn = null, Gr = null;
    async function Uv() {
        if (!vn) return Gr || (Gr = (async ()=>{
            vn = sv("cl100k_base");
        })(), Gr);
    }
    function Fv() {
        return vn !== null;
    }
    function Av(e) {
        if (!vn) return $v(e);
        const t = Array.from(vn.encode(e)), n = new TextDecoder("utf-8", {
            fatal: !1
        });
        return t.map((r)=>{
            const l = vn.decode(new Uint32Array([
                r
            ])), o = n.decode(l);
            return {
                id: r,
                text: o
            };
        });
    }
    function $v(e) {
        if (!e) return [];
        const t = e.match(/[a-zA-Z0-9']+|\s+|[^\w\s]/gu) || [], n = [];
        for (const r of t)if (r.length <= 6) n.push({
            id: oa(r),
            text: r
        });
        else {
            let l = 0;
            for(; l < r.length;){
                const o = r.slice(l, l + Math.floor(Math.random() * 3) + 3);
                n.push({
                    id: oa(o),
                    text: o
                }), l += o.length;
            }
        }
        return n;
    }
    function oa(e) {
        let t = 5381;
        for(let n = 0; n < e.length; n++)t = (t << 5) + t ^ e.charCodeAt(n), t = t >>> 0;
        return t % 9e4 + 1e4;
    }
    Mi = {
        gpt4o: {
            id: "gpt4o",
            name: "GPT-4o",
            provider: "OpenAI",
            inputPricePer1M: 5,
            outputPricePer1M: 15,
            contextWindow: 128e3,
            encoding: "cl100k_base",
            estimated: !1,
            color: "#10b981"
        },
        gpt35: {
            id: "gpt35",
            name: "GPT-3.5 Turbo",
            provider: "OpenAI",
            inputPricePer1M: .5,
            outputPricePer1M: 1.5,
            contextWindow: 16385,
            encoding: "cl100k_base",
            estimated: !1,
            color: "#3b82f6"
        },
        claude35: {
            id: "claude35",
            name: "Claude 3.5 Sonnet",
            provider: "Anthropic",
            inputPricePer1M: 3,
            outputPricePer1M: 15,
            contextWindow: 2e5,
            encoding: "cl100k_base",
            estimated: !0,
            color: "#f59e0b"
        },
        gemini15: {
            id: "gemini15",
            name: "Gemini 1.5 Pro",
            provider: "Google",
            inputPricePer1M: 1.25,
            outputPricePer1M: 5,
            contextWindow: 1e6,
            encoding: "cl100k_base",
            estimated: !0,
            color: "#8b5cf6"
        }
    };
    Wv = Object.values(Mi);
    ia = function(e, t) {
        return e / 1e6 * t;
    };
    Bv = function(e) {
        return e === 0 ? "$0.000000" : e < 1e-6 ? `$${e.toExponential(2)}` : e < .001 ? `$${e.toFixed(6)}` : e < 1 ? `$${e.toFixed(4)}` : `$${e.toFixed(2)}`;
    };
    let Vv;
    Vv = "Hello, world! 🌍 LLMs don't process words — they process token IDs.";
    at = Jm((e, t)=>({
            rawText: Vv,
            setRawText: (n)=>{
                e({
                    rawText: n
                }), t()._recompute(n);
            },
            tokenizerReady: !1,
            setTokenizerReady: (n)=>e({
                    tokenizerReady: n
                }),
            tokens: [],
            selectedModelId: "gpt4o",
            setSelectedModel: (n)=>{
                e({
                    selectedModelId: n
                }), t()._recomputeCosts(t().tokens.length);
            },
            outputTokenCount: 500,
            setOutputTokenCount: (n)=>{
                e({
                    outputTokenCount: n
                }), t()._recomputeCosts(t().tokens.length);
            },
            inputCostUSD: 0,
            outputCostUSD: 0,
            totalCostUSD: 0,
            contextUsedPct: 0,
            _recompute: (n)=>{
                const r = Fv() ? Av(n) : [], l = r.length, { selectedModelId: o, outputTokenCount: i } = t(), u = Mi[o], s = u ? Math.min(100, l / u.contextWindow * 100) : 0;
                e({
                    tokens: r,
                    contextUsedPct: s
                }), t()._recomputeCosts(l);
            },
            _recomputeCosts: (n)=>{
                const { selectedModelId: r, outputTokenCount: l } = t(), o = Mi[r];
                if (!o) return;
                const i = ia(n, o.inputPricePer1M), u = ia(l, o.outputPricePer1M);
                e({
                    inputCostUSD: i,
                    outputCostUSD: u,
                    totalCostUSD: i + u
                });
            }
        }));
    const Vf = (...e)=>e.filter((t, n, r)=>!!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
    const Hv = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const Qv = (e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r)=>r ? r.toUpperCase() : n.toLowerCase());
    const ua = (e)=>{
        const t = Qv(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var Io = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    const Kv = (e)=>{
        for(const t in e)if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
        return !1;
    }, Gv = k.createContext({}), Yv = ()=>k.useContext(Gv), Xv = k.forwardRef(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: l = "", children: o, iconNode: i, ...u }, s)=>{
        const { size: a = 24, strokeWidth: h = 2, absoluteStrokeWidth: f = !1, color: m = "currentColor", className: g = "" } = Yv() ?? {}, y = r ?? f ? Number(n ?? h) * 24 / Number(t ?? a) : n ?? h;
        return k.createElement("svg", {
            ref: s,
            ...Io,
            width: t ?? a ?? Io.width,
            height: t ?? a ?? Io.height,
            stroke: e ?? m,
            strokeWidth: y,
            className: Vf("lucide", g, l),
            ...!o && !Kv(u) && {
                "aria-hidden": "true"
            },
            ...u
        }, [
            ...i.map(([w, S])=>k.createElement(w, S)),
            ...Array.isArray(o) ? o : [
                o
            ]
        ]);
    });
    const Rn = (e, t)=>{
        const n = k.forwardRef(({ className: r, ...l }, o)=>k.createElement(Xv, {
                ref: o,
                iconNode: t,
                className: Vf(`lucide-${Hv(ua(e))}`, `lucide-${e}`, r),
                ...l
            }));
        return n.displayName = ua(e), n;
    };
    const Zv = [
        [
            "path",
            {
                d: "M3 3v16a2 2 0 0 0 2 2h16",
                key: "c24i48"
            }
        ],
        [
            "path",
            {
                d: "M18 17V9",
                key: "2bz60n"
            }
        ],
        [
            "path",
            {
                d: "M13 17V5",
                key: "1frdt8"
            }
        ],
        [
            "path",
            {
                d: "M8 17v-3",
                key: "17ska0"
            }
        ]
    ], Jv = Rn("chart-column", Zv);
    const qv = [
        [
            "line",
            {
                x1: "12",
                x2: "12",
                y1: "2",
                y2: "22",
                key: "7eqyqh"
            }
        ],
        [
            "path",
            {
                d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
                key: "1b0p4s"
            }
        ]
    ], bv = Rn("dollar-sign", qv);
    const e0 = [
        [
            "path",
            {
                d: "M13 21h8",
                key: "1jsn5i"
            }
        ],
        [
            "path",
            {
                d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
                key: "1a8usu"
            }
        ]
    ], t0 = Rn("pen-line", e0);
    const n0 = [
        [
            "path",
            {
                d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
                key: "w46dr5"
            }
        ]
    ], r0 = Rn("puzzle", n0);
    const l0 = [
        [
            "path",
            {
                d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
                key: "1i5ecw"
            }
        ],
        [
            "circle",
            {
                cx: "12",
                cy: "12",
                r: "3",
                key: "1v7zrd"
            }
        ]
    ], o0 = Rn("settings", l0);
    const i0 = [
        [
            "path",
            {
                d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
                key: "1xq2db"
            }
        ]
    ], u0 = Rn("zap", i0), sa = [
        {
            path: "/input",
            label: "Text input",
            num: "01",
            icon: t0
        },
        {
            path: "/preprocessing",
            label: "Preprocessing",
            num: "02",
            icon: o0
        },
        {
            path: "/tokenization",
            label: "Tokenization",
            num: "03",
            icon: r0
        },
        {
            path: "/context",
            label: "Context window",
            num: "04",
            icon: Jv
        },
        {
            path: "/cost",
            label: "Cost estimator",
            num: "05",
            icon: bv
        },
        {
            path: "/generation",
            label: "Generation sim",
            num: "06",
            icon: u0
        }
    ];
    function s0() {
        const e = at((n)=>n.tokens.length), t = at((n)=>n.tokenizerReady);
        return T.jsxs("aside", {
            className: "w-full md:w-52 flex-shrink-0 flex flex-col border-b border-white/[0.07] md:border-b-0 md:border-r bg-[#0b0b0e]",
            children: [
                T.jsxs("div", {
                    className: "px-5 py-5 border-b border-white/[0.07]",
                    children: [
                        T.jsxs("span", {
                            className: "text-base font-semibold tracking-tight",
                            style: {
                                fontFamily: "var(--font-display)"
                            },
                            children: [
                                "Token",
                                T.jsx("span", {
                                    className: "text-indigo-400",
                                    children: "Learn"
                                })
                            ]
                        }),
                        T.jsx("div", {
                            className: "text-[11px] text-white/30 mt-0.5",
                            children: t ? `tiktoken ready · ${e} tokens` : "Loading tokenizer…"
                        })
                    ]
                }),
                T.jsxs("nav", {
                    className: "hidden md:flex flex-1 flex-col py-3",
                    children: [
                        T.jsx("div", {
                            className: "px-4 mb-2 text-[10px] font-medium text-white/25 uppercase tracking-widest",
                            children: "Pipeline"
                        }),
                        sa.map((n)=>T.jsxs(Js, {
                                to: n.path,
                                className: ({ isActive: r })=>[
                                        "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                                        r ? "bg-indigo-500/10 text-indigo-300 border-l-2 border-indigo-400" : "text-white/50 hover:text-white/80 hover:bg-white/[0.03] border-l-2 border-transparent"
                                    ].join(" "),
                                children: [
                                    T.jsx("span", {
                                        className: "text-[10px] font-mono text-white/20 w-5 flex-shrink-0",
                                        children: n.num
                                    }),
                                    T.jsx("span", {
                                        children: n.label
                                    })
                                ]
                            }, n.path))
                    ]
                }),
                T.jsx("div", {
                    className: "hidden md:block px-4 py-4 border-t border-white/[0.07]",
                    children: T.jsx("p", {
                        className: "text-[11px] text-white/25 leading-relaxed",
                        children: "Text → Tokens → IDs → Context → Cost"
                    })
                }),
                T.jsx("nav", {
                    className: "fixed inset-x-0 bottom-0 z-20 border-t border-white/[0.08] bg-[#0b0b0e]/95 backdrop-blur-md px-1 py-2 md:hidden",
                    children: T.jsx("div", {
                        className: "flex items-center justify-between gap-1 overflow-x-hidden px-1",
                        children: sa.map((n)=>T.jsxs(Js, {
                                to: n.path,
                                className: ({ isActive: r })=>[
                                        "flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[11px] transition-colors whitespace-nowrap",
                                        r ? "bg-indigo-500/15 text-indigo-300" : "text-white/50 hover:text-white/80 hover:bg-white/[0.05]"
                                    ].join(" "),
                                children: [
                                    T.jsx(n.icon, {
                                        className: "h-4 w-4",
                                        "aria-hidden": "true"
                                    }),
                                    T.jsx("span", {
                                        children: n.num
                                    })
                                ]
                            }, n.path))
                    })
                })
            ]
        });
    }
    const aa = {
        "/input": {
            title: "Text input",
            subtitle: "Type or paste text to start the pipeline"
        },
        "/preprocessing": {
            title: "Preprocessing",
            subtitle: "Step-by-step text cleaning before tokenization"
        },
        "/tokenization": {
            title: "Tokenization",
            subtitle: "How raw text becomes token IDs"
        },
        "/context": {
            title: "Context window",
            subtitle: "How tokens accumulate across a conversation"
        },
        "/cost": {
            title: "Cost estimator",
            subtitle: "Real API billing formulas, live"
        },
        "/generation": {
            title: "Generation sim",
            subtitle: "Autoregressive next-token prediction"
        }
    };
    function a0() {
        const e = Kt(), t = aa[e.pathname] || aa["/input"], n = at((u)=>u.tokens.length), r = at((u)=>u.selectedModelId), l = at((u)=>u.setSelectedModel), o = at((u)=>u.totalCostUSD), i = at((u)=>u.contextUsedPct);
        return T.jsxs("header", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-3 border-b border-white/[0.07] bg-[#0f0f12]/80 backdrop-blur sticky top-0 z-10",
            children: [
                T.jsxs("div", {
                    children: [
                        T.jsx("h1", {
                            className: "text-base font-semibold leading-tight",
                            style: {
                                fontFamily: "var(--font-display)"
                            },
                            children: t.title
                        }),
                        T.jsx("p", {
                            className: "text-[12px] text-white/35 mt-0.5",
                            children: t.subtitle
                        })
                    ]
                }),
                T.jsxs("div", {
                    className: "flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto",
                    children: [
                        T.jsxs("div", {
                            className: "hidden sm:flex items-center gap-3 text-[12px]",
                            children: [
                                T.jsx(Do, {
                                    label: "tokens",
                                    value: n.toLocaleString()
                                }),
                                T.jsx(Do, {
                                    label: "context",
                                    value: `${i.toFixed(2)}%`
                                }),
                                T.jsx(Do, {
                                    label: "est. cost",
                                    value: Bv(o),
                                    highlight: !0
                                })
                            ]
                        }),
                        T.jsx("select", {
                            value: r,
                            onChange: (u)=>l(u.target.value),
                            className: "w-full sm:w-auto text-[12px] bg-slate-900/90 border border-white/[0.12] rounded-lg px-3 py-1.5 text-white cursor-pointer hover:bg-slate-900 transition-colors outline-none focus:border-indigo-400/60",
                            style: {
                                fontFamily: "var(--font-mono)"
                            },
                            children: Wv.map((u)=>T.jsxs("option", {
                                    value: u.id,
                                    children: [
                                        u.name,
                                        u.estimated ? " ~" : ""
                                    ]
                                }, u.id))
                        })
                    ]
                })
            ]
        });
    }
    function Do({ label: e, value: t, highlight: n }) {
        return T.jsxs("div", {
            className: "flex items-center gap-1.5",
            children: [
                T.jsx("span", {
                    className: "text-white/30",
                    children: e
                }),
                T.jsx("span", {
                    className: n ? "font-medium text-emerald-400" : "font-medium text-white/70",
                    style: {
                        fontFamily: "var(--font-mono)"
                    },
                    children: t
                })
            ]
        });
    }
    function c0({ label: e = "Loading…" }) {
        return T.jsxs("div", {
            className: "flex flex-col items-center justify-center py-24 gap-3 text-white/30",
            children: [
                T.jsx("div", {
                    className: "w-6 h-6 border-2 border-white/20 border-t-indigo-400 rounded-full animate-spin"
                }),
                T.jsx("span", {
                    className: "text-sm",
                    style: {
                        fontFamily: "var(--font-mono)"
                    },
                    children: e
                })
            ]
        });
    }
    const f0 = k.lazy(()=>Ln(()=>import("./TextInput-CqhBt4nm.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3]))), d0 = k.lazy(()=>Ln(()=>import("./Preprocessing-DkN0uXNC.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([4,1,3]))), p0 = k.lazy(()=>Ln(()=>import("./Tokenization-BOvO5dD6.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([5,1,2,6,3]))), h0 = k.lazy(()=>Ln(()=>import("./ContextWindow-b3tieLp5.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([7,1,3]))), m0 = k.lazy(()=>Ln(()=>import("./CostEstimator-i-rl87KU.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([8,1]))), v0 = k.lazy(()=>Ln(()=>import("./GenerationSim-DXx-9_e0.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([9,1,6,3])));
    function g0() {
        return T.jsxs("div", {
            className: "flex min-h-screen flex-col md:flex-row bg-[#0f0f12] text-[#e8e8f0] overflow-hidden",
            children: [
                T.jsx(s0, {}),
                T.jsxs("div", {
                    className: "flex flex-col flex-1 min-w-0",
                    children: [
                        T.jsx(a0, {}),
                        T.jsx("main", {
                            className: "flex-1 overflow-y-auto p-6 pb-24 md:pb-6",
                            children: T.jsx(k.Suspense, {
                                fallback: T.jsx(c0, {}),
                                children: T.jsxs(sm, {
                                    children: [
                                        T.jsx(Qe, {
                                            path: "/",
                                            element: T.jsx(Xs, {
                                                to: "/input",
                                                replace: !0
                                            })
                                        }),
                                        T.jsx(Qe, {
                                            path: "/input",
                                            element: T.jsx(f0, {})
                                        }),
                                        T.jsx(Qe, {
                                            path: "/preprocessing",
                                            element: T.jsx(d0, {})
                                        }),
                                        T.jsx(Qe, {
                                            path: "/tokenization",
                                            element: T.jsx(p0, {})
                                        }),
                                        T.jsx(Qe, {
                                            path: "/context",
                                            element: T.jsx(h0, {})
                                        }),
                                        T.jsx(Qe, {
                                            path: "/cost",
                                            element: T.jsx(m0, {})
                                        }),
                                        T.jsx(Qe, {
                                            path: "/generation",
                                            element: T.jsx(v0, {})
                                        }),
                                        T.jsx(Qe, {
                                            path: "*",
                                            element: T.jsx(Xs, {
                                                to: "/input",
                                                replace: !0
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        });
    }
    Uv().then(()=>{
        const e = at.getState();
        e.setTokenizerReady(!0), e._recompute(e.rawText);
    });
    Uo.createRoot(document.getElementById("root")).render(T.jsx(Ai.StrictMode, {
        children: T.jsx(vm, {
            children: T.jsx(g0, {})
        })
    }));
})();
export { Mi as M, Ai as R, Wv as a, ia as c, Bv as f, T as j, k as r, at as u, __tla };
