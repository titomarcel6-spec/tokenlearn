const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TextInput-Dq9UVRiF.js","assets/StageCard-pHlcZboa.js","assets/TokenChip-DaQSHZwk.js","assets/proxy-Dcgb-_mq.js","assets/Preprocessing-KOGJWEbg.js","assets/Tokenization-lgS1RWi6.js","assets/index-DpFSEC25.js","assets/ContextWindow-VGHlXo04.js","assets/CostEstimator-BGtXY8EN.js","assets/GenerationSim-BTrZ4mYN.js"])))=>i.map(i=>d[i]);
let ji, Ui, Dv, ra, Uv, L, k, at;
let __tla = (async ()=>{
    function $f(e, t) {
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
    function oa(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var ia = {
        exports: {}
    }, jl = {}, ua = {
        exports: {}
    }, I = {};
    var _r = Symbol.for("react.element"), Af = Symbol.for("react.portal"), Wf = Symbol.for("react.fragment"), Bf = Symbol.for("react.strict_mode"), Vf = Symbol.for("react.profiler"), Hf = Symbol.for("react.provider"), Qf = Symbol.for("react.context"), Kf = Symbol.for("react.forward_ref"), Gf = Symbol.for("react.suspense"), Yf = Symbol.for("react.memo"), Xf = Symbol.for("react.lazy"), ju = Symbol.iterator;
    function Jf(e) {
        return e === null || typeof e != "object" ? null : (e = ju && e[ju] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var sa = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, aa = Object.assign, ca = {};
    function Pn(e, t, n) {
        this.props = e, this.context = t, this.refs = ca, this.updater = n || sa;
    }
    Pn.prototype.isReactComponent = {};
    Pn.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    Pn.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function fa() {}
    fa.prototype = Pn.prototype;
    function Oi(e, t, n) {
        this.props = e, this.context = t, this.refs = ca, this.updater = n || sa;
    }
    var Ii = Oi.prototype = new fa;
    Ii.constructor = Oi;
    aa(Ii, Pn.prototype);
    Ii.isPureReactComponent = !0;
    var Ou = Array.isArray, da = Object.prototype.hasOwnProperty, Mi = {
        current: null
    }, pa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function ha(e, t, n) {
        var r, l = {}, o = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)da.call(t, r) && !pa.hasOwnProperty(r) && (l[r] = t[r]);
        var u = arguments.length - 2;
        if (u === 1) l.children = n;
        else if (1 < u) {
            for(var s = Array(u), a = 0; a < u; a++)s[a] = arguments[a + 2];
            l.children = s;
        }
        if (e && e.defaultProps) for(r in u = e.defaultProps, u)l[r] === void 0 && (l[r] = u[r]);
        return {
            $$typeof: _r,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: Mi.current
        };
    }
    function Zf(e, t) {
        return {
            $$typeof: _r,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Di(e) {
        return typeof e == "object" && e !== null && e.$$typeof === _r;
    }
    function qf(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Iu = /\/+/g;
    function lo(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? qf("" + e.key) : t.toString(36);
    }
    function Gr(e, t, n, r, l) {
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
                    case _r:
                    case Af:
                        i = !0;
                }
        }
        if (i) return i = e, l = l(i), e = r === "" ? "." + lo(i, 0) : r, Ou(l) ? (n = "", e != null && (n = e.replace(Iu, "$&/") + "/"), Gr(l, t, n, "", function(a) {
            return a;
        })) : l != null && (Di(l) && (l = Zf(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Iu, "$&/") + "/") + e)), t.push(l)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", Ou(e)) for(var u = 0; u < e.length; u++){
            o = e[u];
            var s = r + lo(o, u);
            i += Gr(o, t, n, s, l);
        }
        else if (s = Jf(e), typeof s == "function") for(e = s.call(e), u = 0; !(o = e.next()).done;)o = o.value, s = r + lo(o, u++), i += Gr(o, t, n, s, l);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function Nr(e, t, n) {
        if (e == null) return e;
        var r = [], l = 0;
        return Gr(e, r, "", "", function(o) {
            return t.call(n, o, l++);
        }), r;
    }
    function bf(e) {
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
    }, Yr = {
        transition: null
    }, ed = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: Yr,
        ReactCurrentOwner: Mi
    };
    function ma() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    I.Children = {
        map: Nr,
        forEach: function(e, t, n) {
            Nr(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return Nr(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return Nr(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!Di(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    I.Component = Pn;
    I.Fragment = Wf;
    I.Profiler = Vf;
    I.PureComponent = Oi;
    I.StrictMode = Bf;
    I.Suspense = Gf;
    I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ed;
    I.act = ma;
    I.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = aa({}, e.props), l = e.key, o = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (o = t.ref, i = Mi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
            for(s in t)da.call(t, s) && !pa.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (s === 1) r.children = n;
        else if (1 < s) {
            u = Array(s);
            for(var a = 0; a < s; a++)u[a] = arguments[a + 2];
            r.children = u;
        }
        return {
            $$typeof: _r,
            type: e.type,
            key: l,
            ref: o,
            props: r,
            _owner: i
        };
    };
    I.createContext = function(e) {
        return e = {
            $$typeof: Qf,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: Hf,
            _context: e
        }, e.Consumer = e;
    };
    I.createElement = ha;
    I.createFactory = function(e) {
        var t = ha.bind(null, e);
        return t.type = e, t;
    };
    I.createRef = function() {
        return {
            current: null
        };
    };
    I.forwardRef = function(e) {
        return {
            $$typeof: Kf,
            render: e
        };
    };
    I.isValidElement = Di;
    I.lazy = function(e) {
        return {
            $$typeof: Xf,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: bf
        };
    };
    I.memo = function(e, t) {
        return {
            $$typeof: Yf,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    I.startTransition = function(e) {
        var t = Yr.transition;
        Yr.transition = {};
        try {
            e();
        } finally{
            Yr.transition = t;
        }
    };
    I.unstable_act = ma;
    I.useCallback = function(e, t) {
        return fe.current.useCallback(e, t);
    };
    I.useContext = function(e) {
        return fe.current.useContext(e);
    };
    I.useDebugValue = function() {};
    I.useDeferredValue = function(e) {
        return fe.current.useDeferredValue(e);
    };
    I.useEffect = function(e, t) {
        return fe.current.useEffect(e, t);
    };
    I.useId = function() {
        return fe.current.useId();
    };
    I.useImperativeHandle = function(e, t, n) {
        return fe.current.useImperativeHandle(e, t, n);
    };
    I.useInsertionEffect = function(e, t) {
        return fe.current.useInsertionEffect(e, t);
    };
    I.useLayoutEffect = function(e, t) {
        return fe.current.useLayoutEffect(e, t);
    };
    I.useMemo = function(e, t) {
        return fe.current.useMemo(e, t);
    };
    I.useReducer = function(e, t, n) {
        return fe.current.useReducer(e, t, n);
    };
    I.useRef = function(e) {
        return fe.current.useRef(e);
    };
    I.useState = function(e) {
        return fe.current.useState(e);
    };
    I.useSyncExternalStore = function(e, t, n) {
        return fe.current.useSyncExternalStore(e, t, n);
    };
    I.useTransition = function() {
        return fe.current.useTransition();
    };
    I.version = "18.3.1";
    ua.exports = I;
    k = ua.exports;
    let td;
    Ui = oa(k);
    td = $f({
        __proto__: null,
        default: Ui
    }, [
        k
    ]);
    var nd = k, rd = Symbol.for("react.element"), ld = Symbol.for("react.fragment"), od = Object.prototype.hasOwnProperty, id = nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ud = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function va(e, t, n) {
        var r, l = {}, o = null, i = null;
        n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)od.call(t, r) && !ud.hasOwnProperty(r) && (l[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)l[r] === void 0 && (l[r] = t[r]);
        return {
            $$typeof: rd,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: id.current
        };
    }
    jl.Fragment = ld;
    jl.jsx = va;
    jl.jsxs = va;
    ia.exports = jl;
    let Mo, ga, Ee, ya, wa;
    L = ia.exports;
    Mo = {};
    ga = {
        exports: {}
    };
    Ee = {};
    ya = {
        exports: {}
    };
    wa = {};
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
                e: for(var G = 0, b = C.length, Cr = b >>> 1; G < Cr;){
                    var Tt = 2 * (G + 1) - 1, ro = C[Tt], zt = Tt + 1, Pr = C[zt];
                    if (0 > l(ro, O)) zt < b && 0 > l(Pr, ro) ? (C[G] = Pr, C[zt] = O, G = zt) : (C[G] = ro, C[Tt] = O, G = Tt);
                    else if (zt < b && 0 > l(Pr, O)) C[G] = Pr, C[zt] = O, G = zt;
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
        var s = [], a = [], h = 1, f = null, m = 3, g = !1, y = !1, w = !1, x = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
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
            if (w = !1, p(C), !y) if (n(s) !== null) y = !0, to(S);
            else {
                var R = n(a);
                R !== null && no(v, R.startTime - C);
            }
        }
        function S(C, R) {
            y = !1, w && (w = !1, d(z), z = -1), g = !0;
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
                if (f !== null) var Cr = !0;
                else {
                    var Tt = n(a);
                    Tt !== null && no(v, Tt.startTime - R), Cr = !1;
                }
                return Cr;
            } finally{
                f = null, m = O, g = !1;
            }
        }
        var N = !1, T = null, z = -1, W = 5, j = -1;
        function ye() {
            return !(e.unstable_now() - j < W);
        }
        function Rn() {
            if (T !== null) {
                var C = e.unstable_now();
                j = C;
                var R = !0;
                try {
                    R = T(!0, C);
                } finally{
                    R ? jn() : (N = !1, T = null);
                }
            } else N = !1;
        }
        var jn;
        if (typeof c == "function") jn = function() {
            c(Rn);
        };
        else if (typeof MessageChannel < "u") {
            var Ru = new MessageChannel, Ff = Ru.port2;
            Ru.port1.onmessage = Rn, jn = function() {
                Ff.postMessage(null);
            };
        } else jn = function() {
            x(Rn, 0);
        };
        function to(C) {
            T = C, N || (N = !0, jn());
        }
        function no(C, R) {
            z = x(function() {
                C(e.unstable_now());
            }, R);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
            C.callback = null;
        }, e.unstable_continueExecution = function() {
            y || g || (y = !0, to(S));
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
            }, O > G ? (C.sortIndex = O, t(a, C), n(s) === null && C === n(a) && (w ? (d(z), z = -1) : w = !0, no(v, O - G))) : (C.sortIndex = b, t(s, C), y || g || (y = !0, to(S))), C;
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
    })(wa);
    ya.exports = wa;
    var sd = ya.exports;
    var ad = k, xe = sd;
    function _(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var _a = new Set, tr = {};
    function Vt(e, t) {
        gn(e, t), gn(e + "Capture", t);
    }
    function gn(e, t) {
        for(tr[e] = t, e = 0; e < t.length; e++)_a.add(t[e]);
    }
    var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Do = Object.prototype.hasOwnProperty, cd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Mu = {}, Du = {};
    function fd(e) {
        return Do.call(Du, e) ? !0 : Do.call(Mu, e) ? !1 : cd.test(e) ? Du[e] = !0 : (Mu[e] = !0, !1);
    }
    function dd(e, t, n, r) {
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
    function pd(e, t, n, r) {
        if (t === null || typeof t > "u" || dd(e, t, n, r)) return !0;
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
    var Fi = /[\-:]([a-z])/g;
    function $i(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Fi, $i);
        le[t] = new de(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Fi, $i);
        le[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Fi, $i);
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
    function Ai(e, t, n, r) {
        var l = le.hasOwnProperty(t) ? le[t] : null;
        (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (pd(t, n, l, r) && (n = null), r || l === null ? fd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var nt = ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Tr = Symbol.for("react.element"), Xt = Symbol.for("react.portal"), Jt = Symbol.for("react.fragment"), Wi = Symbol.for("react.strict_mode"), Uo = Symbol.for("react.profiler"), ka = Symbol.for("react.provider"), Sa = Symbol.for("react.context"), Bi = Symbol.for("react.forward_ref"), Fo = Symbol.for("react.suspense"), $o = Symbol.for("react.suspense_list"), Vi = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), xa = Symbol.for("react.offscreen"), Uu = Symbol.iterator;
    function On(e) {
        return e === null || typeof e != "object" ? null : (e = Uu && e[Uu] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Q = Object.assign, oo;
    function Wn(e) {
        if (oo === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            oo = t && t[1] || "";
        }
        return `
` + oo + e;
    }
    var io = !1;
    function uo(e, t) {
        if (!e || io) return "";
        io = !0;
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
            io = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? Wn(e) : "";
    }
    function hd(e) {
        switch(e.tag){
            case 5:
                return Wn(e.type);
            case 16:
                return Wn("Lazy");
            case 13:
                return Wn("Suspense");
            case 19:
                return Wn("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = uo(e.type, !1), e;
            case 11:
                return e = uo(e.type.render, !1), e;
            case 1:
                return e = uo(e.type, !0), e;
            default:
                return "";
        }
    }
    function Ao(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Jt:
                return "Fragment";
            case Xt:
                return "Portal";
            case Uo:
                return "Profiler";
            case Wi:
                return "StrictMode";
            case Fo:
                return "Suspense";
            case $o:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Sa:
                return (e.displayName || "Context") + ".Consumer";
            case ka:
                return (e._context.displayName || "Context") + ".Provider";
            case Bi:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Vi:
                return t = e.displayName || null, t !== null ? t : Ao(e.type) || "Memo";
            case ot:
                t = e._payload, e = e._init;
                try {
                    return Ao(e(t));
                } catch  {}
        }
        return null;
    }
    function md(e) {
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
                return Ao(t);
            case 8:
                return t === Wi ? "StrictMode" : "Mode";
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
    function Ea(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function vd(e) {
        var t = Ea(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function zr(e) {
        e._valueTracker || (e._valueTracker = vd(e));
    }
    function Ca(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Ea(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function il(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Wo(e, t) {
        var n = t.checked;
        return Q({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Fu(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = St(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Pa(e, t) {
        t = t.checked, t != null && Ai(e, "checked", t, !1);
    }
    function Bo(e, t) {
        Pa(e, t);
        var n = St(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Vo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vo(e, t.type, St(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function $u(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Vo(e, t, n) {
        (t !== "number" || il(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var Bn = Array.isArray;
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
    function Ho(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
        return Q({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Au(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(_(92));
                if (Bn(n)) {
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
    function Na(e, t) {
        var n = St(t.value), r = St(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function Wu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Ta(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Qo(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Ta(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Lr, za = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, l);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(Lr = Lr || document.createElement("div"), Lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Lr.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function nr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Qn = {
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
    }, gd = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Qn).forEach(function(e) {
        gd.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Qn[t] = Qn[e];
        });
    });
    function La(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Qn.hasOwnProperty(e) && Qn[e] ? ("" + t).trim() : t + "px";
    }
    function Ra(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, l = La(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
        }
    }
    var yd = Q({
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
    function Ko(e, t) {
        if (t) {
            if (yd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(_(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(_(62));
        }
    }
    function Go(e, t) {
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
    var Yo = null;
    function Hi(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Xo = null, cn = null, fn = null;
    function Bu(e) {
        if (e = xr(e)) {
            if (typeof Xo != "function") throw Error(_(280));
            var t = e.stateNode;
            t && (t = Ul(t), Xo(e.stateNode, e.type, t));
        }
    }
    function ja(e) {
        cn ? fn ? fn.push(e) : fn = [
            e
        ] : cn = e;
    }
    function Oa() {
        if (cn) {
            var e = cn, t = fn;
            if (fn = cn = null, Bu(e), t) for(e = 0; e < t.length; e++)Bu(t[e]);
        }
    }
    function Ia(e, t) {
        return e(t);
    }
    function Ma() {}
    var so = !1;
    function Da(e, t, n) {
        if (so) return e(t, n);
        so = !0;
        try {
            return Ia(e, t, n);
        } finally{
            so = !1, (cn !== null || fn !== null) && (Ma(), Oa());
        }
    }
    function rr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Ul(n);
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
    var Jo = !1;
    if (qe) try {
        var In = {};
        Object.defineProperty(In, "passive", {
            get: function() {
                Jo = !0;
            }
        }), window.addEventListener("test", In, In), window.removeEventListener("test", In, In);
    } catch  {
        Jo = !1;
    }
    function wd(e, t, n, r, l, o, i, u, s) {
        var a = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, a);
        } catch (h) {
            this.onError(h);
        }
    }
    var Kn = !1, ul = null, sl = !1, Zo = null, _d = {
        onError: function(e) {
            Kn = !0, ul = e;
        }
    };
    function kd(e, t, n, r, l, o, i, u, s) {
        Kn = !1, ul = null, wd.apply(_d, arguments);
    }
    function Sd(e, t, n, r, l, o, i, u, s) {
        if (kd.apply(this, arguments), Kn) {
            if (Kn) {
                var a = ul;
                Kn = !1, ul = null;
            } else throw Error(_(198));
            sl || (sl = !0, Zo = a);
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
    function Ua(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Vu(e) {
        if (Ht(e) !== e) throw Error(_(188));
    }
    function xd(e) {
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
                    if (o === n) return Vu(l), e;
                    if (o === r) return Vu(l), t;
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
    function Fa(e) {
        return e = xd(e), e !== null ? $a(e) : null;
    }
    function $a(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = $a(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var Aa = xe.unstable_scheduleCallback, Hu = xe.unstable_cancelCallback, Ed = xe.unstable_shouldYield, Cd = xe.unstable_requestPaint, Y = xe.unstable_now, Pd = xe.unstable_getCurrentPriorityLevel, Qi = xe.unstable_ImmediatePriority, Wa = xe.unstable_UserBlockingPriority, al = xe.unstable_NormalPriority, Nd = xe.unstable_LowPriority, Ba = xe.unstable_IdlePriority, Ol = null, Ve = null;
    function Td(e) {
        if (Ve && typeof Ve.onCommitFiberRoot == "function") try {
            Ve.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var De = Math.clz32 ? Math.clz32 : Rd, zd = Math.log, Ld = Math.LN2;
    function Rd(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (zd(e) / Ld | 0) | 0;
    }
    var Rr = 64, jr = 4194304;
    function Vn(e) {
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
    function cl(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var u = i & ~l;
            u !== 0 ? r = Vn(u) : (o &= i, o !== 0 && (r = Vn(o)));
        } else i = n & ~l, i !== 0 ? r = Vn(i) : o !== 0 && (r = Vn(o));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - De(t), l = 1 << n, r |= e[n], t &= ~l;
        return r;
    }
    function jd(e, t) {
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
    function Od(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;){
            var i = 31 - De(o), u = 1 << i, s = l[i];
            s === -1 ? (!(u & n) || u & r) && (l[i] = jd(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
        }
    }
    function qo(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Va() {
        var e = Rr;
        return Rr <<= 1, !(Rr & 4194240) && (Rr = 64), e;
    }
    function ao(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function kr(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - De(t), e[t] = n;
    }
    function Id(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var l = 31 - De(n), o = 1 << l;
            t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
        }
    }
    function Ki(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - De(n), l = 1 << r;
            l & t | e[r] & t && (e[r] |= t), n &= ~l;
        }
    }
    var D = 0;
    function Ha(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var Qa, Gi, Ka, Ga, Ya, bo = !1, Or = [], pt = null, ht = null, mt = null, lr = new Map, or = new Map, ut = [], Md = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Qu(e, t) {
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
                lr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                or.delete(t.pointerId);
        }
    }
    function Mn(e, t, n, r, l, o) {
        return e === null || e.nativeEvent !== o ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: o,
            targetContainers: [
                l
            ]
        }, t !== null && (t = xr(t), t !== null && Gi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
    }
    function Dd(e, t, n, r, l) {
        switch(t){
            case "focusin":
                return pt = Mn(pt, e, t, n, r, l), !0;
            case "dragenter":
                return ht = Mn(ht, e, t, n, r, l), !0;
            case "mouseover":
                return mt = Mn(mt, e, t, n, r, l), !0;
            case "pointerover":
                var o = l.pointerId;
                return lr.set(o, Mn(lr.get(o) || null, e, t, n, r, l)), !0;
            case "gotpointercapture":
                return o = l.pointerId, or.set(o, Mn(or.get(o) || null, e, t, n, r, l)), !0;
        }
        return !1;
    }
    function Xa(e) {
        var t = Ot(e.target);
        if (t !== null) {
            var n = Ht(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Ua(n), t !== null) {
                        e.blockedOn = t, Ya(e.priority, function() {
                            Ka(n);
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
    function Xr(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = ei(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                Yo = r, n.target.dispatchEvent(r), Yo = null;
            } else return t = xr(n), t !== null && Gi(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Ku(e, t, n) {
        Xr(e) && n.delete(t);
    }
    function Ud() {
        bo = !1, pt !== null && Xr(pt) && (pt = null), ht !== null && Xr(ht) && (ht = null), mt !== null && Xr(mt) && (mt = null), lr.forEach(Ku), or.forEach(Ku);
    }
    function Dn(e, t) {
        e.blockedOn === t && (e.blockedOn = null, bo || (bo = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Ud)));
    }
    function ir(e) {
        function t(l) {
            return Dn(l, e);
        }
        if (0 < Or.length) {
            Dn(Or[0], e);
            for(var n = 1; n < Or.length; n++){
                var r = Or[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(pt !== null && Dn(pt, e), ht !== null && Dn(ht, e), mt !== null && Dn(mt, e), lr.forEach(t), or.forEach(t), n = 0; n < ut.length; n++)r = ut[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < ut.length && (n = ut[0], n.blockedOn === null);)Xa(n), n.blockedOn === null && ut.shift();
    }
    var dn = nt.ReactCurrentBatchConfig, fl = !0;
    function Fd(e, t, n, r) {
        var l = D, o = dn.transition;
        dn.transition = null;
        try {
            D = 1, Yi(e, t, n, r);
        } finally{
            D = l, dn.transition = o;
        }
    }
    function $d(e, t, n, r) {
        var l = D, o = dn.transition;
        dn.transition = null;
        try {
            D = 4, Yi(e, t, n, r);
        } finally{
            D = l, dn.transition = o;
        }
    }
    function Yi(e, t, n, r) {
        if (fl) {
            var l = ei(e, t, n, r);
            if (l === null) _o(e, t, r, dl, n), Qu(e, r);
            else if (Dd(l, e, t, n, r)) r.stopPropagation();
            else if (Qu(e, r), t & 4 && -1 < Md.indexOf(e)) {
                for(; l !== null;){
                    var o = xr(l);
                    if (o !== null && Qa(o), o = ei(e, t, n, r), o === null && _o(e, t, r, dl, n), o === l) break;
                    l = o;
                }
                l !== null && r.stopPropagation();
            } else _o(e, t, r, null, n);
        }
    }
    var dl = null;
    function ei(e, t, n, r) {
        if (dl = null, e = Hi(r), e = Ot(e), e !== null) if (t = Ht(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = Ua(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return dl = e, null;
    }
    function Ja(e) {
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
                switch(Pd()){
                    case Qi:
                        return 1;
                    case Wa:
                        return 4;
                    case al:
                    case Nd:
                        return 16;
                    case Ba:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var ct = null, Xi = null, Jr = null;
    function Za() {
        if (Jr) return Jr;
        var e, t = Xi, n = t.length, r, l = "value" in ct ? ct.value : ct.textContent, o = l.length;
        for(e = 0; e < n && t[e] === l[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === l[o - r]; r++);
        return Jr = l.slice(e, 1 < r ? 1 - r : void 0);
    }
    function Zr(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Ir() {
        return !0;
    }
    function Gu() {
        return !1;
    }
    function Ce(e) {
        function t(n, r, l, o, i) {
            this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
            for(var u in e)e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
            return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ir : Gu, this.isPropagationStopped = Gu, this;
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
    }, Ji = Ce(Nn), Sr = Q({}, Nn, {
        view: 0,
        detail: 0
    }), Ad = Ce(Sr), co, fo, Un, Il = Q({}, Sr, {
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
        getModifierState: Zi,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Un && (Un && e.type === "mousemove" ? (co = e.screenX - Un.screenX, fo = e.screenY - Un.screenY) : fo = co = 0, Un = e), co);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : fo;
        }
    }), Yu = Ce(Il), Wd = Q({}, Il, {
        dataTransfer: 0
    }), Bd = Ce(Wd), Vd = Q({}, Sr, {
        relatedTarget: 0
    }), po = Ce(Vd), Hd = Q({}, Nn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Qd = Ce(Hd), Kd = Q({}, Nn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), Gd = Ce(Kd), Yd = Q({}, Nn, {
        data: 0
    }), Xu = Ce(Yd), Xd = {
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
    }, Jd = {
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
    }, Zd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function qd(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Zd[e]) ? !!t[e] : !1;
    }
    function Zi() {
        return qd;
    }
    var bd = Q({}, Sr, {
        key: function(e) {
            if (e.key) {
                var t = Xd[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = Zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jd[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Zi,
        charCode: function(e) {
            return e.type === "keypress" ? Zr(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? Zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), ep = Ce(bd), tp = Q({}, Il, {
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
    }), Ju = Ce(tp), np = Q({}, Sr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Zi
    }), rp = Ce(np), lp = Q({}, Nn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), op = Ce(lp), ip = Q({}, Il, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), up = Ce(ip), sp = [
        9,
        13,
        27,
        32
    ], qi = qe && "CompositionEvent" in window, Gn = null;
    qe && "documentMode" in document && (Gn = document.documentMode);
    var ap = qe && "TextEvent" in window && !Gn, qa = qe && (!qi || Gn && 8 < Gn && 11 >= Gn), Zu = " ", qu = !1;
    function ba(e, t) {
        switch(e){
            case "keyup":
                return sp.indexOf(t.keyCode) !== -1;
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
    function ec(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Zt = !1;
    function cp(e, t) {
        switch(e){
            case "compositionend":
                return ec(t);
            case "keypress":
                return t.which !== 32 ? null : (qu = !0, Zu);
            case "textInput":
                return e = t.data, e === Zu && qu ? null : e;
            default:
                return null;
        }
    }
    function fp(e, t) {
        if (Zt) return e === "compositionend" || !qi && ba(e, t) ? (e = Za(), Jr = Xi = ct = null, Zt = !1, e) : null;
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
                return qa && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var dp = {
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
    function bu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!dp[e.type] : t === "textarea";
    }
    function tc(e, t, n, r) {
        ja(r), t = pl(t, "onChange"), 0 < t.length && (n = new Ji("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var Yn = null, ur = null;
    function pp(e) {
        dc(e, 0);
    }
    function Ml(e) {
        var t = en(e);
        if (Ca(t)) return e;
    }
    function hp(e, t) {
        if (e === "change") return t;
    }
    var nc = !1;
    if (qe) {
        var ho;
        if (qe) {
            var mo = "oninput" in document;
            if (!mo) {
                var es = document.createElement("div");
                es.setAttribute("oninput", "return;"), mo = typeof es.oninput == "function";
            }
            ho = mo;
        } else ho = !1;
        nc = ho && (!document.documentMode || 9 < document.documentMode);
    }
    function ts() {
        Yn && (Yn.detachEvent("onpropertychange", rc), ur = Yn = null);
    }
    function rc(e) {
        if (e.propertyName === "value" && Ml(ur)) {
            var t = [];
            tc(t, ur, e, Hi(e)), Da(pp, t);
        }
    }
    function mp(e, t, n) {
        e === "focusin" ? (ts(), Yn = t, ur = n, Yn.attachEvent("onpropertychange", rc)) : e === "focusout" && ts();
    }
    function vp(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ml(ur);
    }
    function gp(e, t) {
        if (e === "click") return Ml(t);
    }
    function yp(e, t) {
        if (e === "input" || e === "change") return Ml(t);
    }
    function wp(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Fe = typeof Object.is == "function" ? Object.is : wp;
    function sr(e, t) {
        if (Fe(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var l = n[r];
            if (!Do.call(t, l) || !Fe(e[l], t[l])) return !1;
        }
        return !0;
    }
    function ns(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function rs(e, t) {
        var n = ns(e);
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
            n = ns(n);
        }
    }
    function lc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? lc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function oc() {
        for(var e = window, t = il(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = il(e.document);
        }
        return t;
    }
    function bi(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function _p(e) {
        var t = oc(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && lc(n.ownerDocument.documentElement, n)) {
            if (r !== null && bi(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var l = n.textContent.length, o = Math.min(r.start, l);
                    r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = rs(n, o);
                    var i = rs(n, r);
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
    var kp = qe && "documentMode" in document && 11 >= document.documentMode, qt = null, ti = null, Xn = null, ni = !1;
    function ls(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        ni || qt == null || qt !== il(r) || (r = qt, "selectionStart" in r && bi(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Xn && sr(Xn, r) || (Xn = r, r = pl(ti, "onSelect"), 0 < r.length && (t = new Ji("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = qt)));
    }
    function Mr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var bt = {
        animationend: Mr("Animation", "AnimationEnd"),
        animationiteration: Mr("Animation", "AnimationIteration"),
        animationstart: Mr("Animation", "AnimationStart"),
        transitionend: Mr("Transition", "TransitionEnd")
    }, vo = {}, ic = {};
    qe && (ic = document.createElement("div").style, "AnimationEvent" in window || (delete bt.animationend.animation, delete bt.animationiteration.animation, delete bt.animationstart.animation), "TransitionEvent" in window || delete bt.transitionend.transition);
    function Dl(e) {
        if (vo[e]) return vo[e];
        if (!bt[e]) return e;
        var t = bt[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in ic) return vo[e] = t[n];
        return e;
    }
    var uc = Dl("animationend"), sc = Dl("animationiteration"), ac = Dl("animationstart"), cc = Dl("transitionend"), fc = new Map, os = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Et(e, t) {
        fc.set(e, t), Vt(t, [
            e
        ]);
    }
    for(var go = 0; go < os.length; go++){
        var yo = os[go], Sp = yo.toLowerCase(), xp = yo[0].toUpperCase() + yo.slice(1);
        Et(Sp, "on" + xp);
    }
    Et(uc, "onAnimationEnd");
    Et(sc, "onAnimationIteration");
    Et(ac, "onAnimationStart");
    Et("dblclick", "onDoubleClick");
    Et("focusin", "onFocus");
    Et("focusout", "onBlur");
    Et(cc, "onTransitionEnd");
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
    var Hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ep = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));
    function is(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Sd(r, t, void 0, e), e.currentTarget = null;
    }
    function dc(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], l = r.event;
            r = r.listeners;
            e: {
                var o = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var u = r[i], s = u.instance, a = u.currentTarget;
                    if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
                    is(l, u, a), o = s;
                }
                else for(i = 0; i < r.length; i++){
                    if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
                    is(l, u, a), o = s;
                }
            }
        }
        if (sl) throw e = Zo, sl = !1, Zo = null, e;
    }
    function F(e, t) {
        var n = t[ui];
        n === void 0 && (n = t[ui] = new Set);
        var r = e + "__bubble";
        n.has(r) || (pc(t, e, 2, !1), n.add(r));
    }
    function wo(e, t, n) {
        var r = 0;
        t && (r |= 4), pc(n, e, r, t);
    }
    var Dr = "_reactListening" + Math.random().toString(36).slice(2);
    function ar(e) {
        if (!e[Dr]) {
            e[Dr] = !0, _a.forEach(function(n) {
                n !== "selectionchange" && (Ep.has(n) || wo(n, !1, e), wo(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Dr] || (t[Dr] = !0, wo("selectionchange", !1, t));
        }
    }
    function pc(e, t, n, r) {
        switch(Ja(t)){
            case 1:
                var l = Fd;
                break;
            case 4:
                l = $d;
                break;
            default:
                l = Yi;
        }
        n = l.bind(null, t, n, e), l = void 0, !Jo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: l
        }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
            passive: l
        }) : e.addEventListener(t, n, !1);
    }
    function _o(e, t, n, r, l) {
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
        Da(function() {
            var a = o, h = Hi(n), f = [];
            e: {
                var m = fc.get(e);
                if (m !== void 0) {
                    var g = Ji, y = e;
                    switch(e){
                        case "keypress":
                            if (Zr(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            g = ep;
                            break;
                        case "focusin":
                            y = "focus", g = po;
                            break;
                        case "focusout":
                            y = "blur", g = po;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            g = po;
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
                            g = Yu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            g = Bd;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            g = rp;
                            break;
                        case uc:
                        case sc:
                        case ac:
                            g = Qd;
                            break;
                        case cc:
                            g = op;
                            break;
                        case "scroll":
                            g = Ad;
                            break;
                        case "wheel":
                            g = up;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            g = Gd;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            g = Ju;
                    }
                    var w = (t & 4) !== 0, x = !w && e === "scroll", d = w ? m !== null ? m + "Capture" : null : m;
                    w = [];
                    for(var c = a, p; c !== null;){
                        p = c;
                        var v = p.stateNode;
                        if (p.tag === 5 && v !== null && (p = v, d !== null && (v = rr(c, d), v != null && w.push(cr(c, v, p)))), x) break;
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
                    if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && n !== Yo && (y = n.relatedTarget || n.fromElement) && (Ot(y) || y[be])) break e;
                    if ((g || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = a, y = y ? Ot(y) : null, y !== null && (x = Ht(y), y !== x || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = a), g !== y)) {
                        if (w = Yu, v = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = Ju, v = "onPointerLeave", d = "onPointerEnter", c = "pointer"), x = g == null ? m : en(g), p = y == null ? m : en(y), m = new w(v, c + "leave", g, n, h), m.target = x, m.relatedTarget = p, v = null, Ot(h) === a && (w = new w(d, c + "enter", y, n, h), w.target = p, w.relatedTarget = x, v = w), x = v, g && y) t: {
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
                        g !== null && us(f, m, g, w, !1), y !== null && x !== null && us(f, x, y, w, !0);
                    }
                }
                e: {
                    if (m = a ? en(a) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var S = hp;
                    else if (bu(m)) if (nc) S = yp;
                    else {
                        S = vp;
                        var N = mp;
                    }
                    else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = gp);
                    if (S && (S = S(e, a))) {
                        tc(f, S, n, h);
                        break e;
                    }
                    N && N(e, m, a), e === "focusout" && (N = m._wrapperState) && N.controlled && m.type === "number" && Vo(m, "number", m.value);
                }
                switch(N = a ? en(a) : window, e){
                    case "focusin":
                        (bu(N) || N.contentEditable === "true") && (qt = N, ti = a, Xn = null);
                        break;
                    case "focusout":
                        Xn = ti = qt = null;
                        break;
                    case "mousedown":
                        ni = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ni = !1, ls(f, n, h);
                        break;
                    case "selectionchange":
                        if (kp) break;
                    case "keydown":
                    case "keyup":
                        ls(f, n, h);
                }
                var T;
                if (qi) e: {
                    switch(e){
                        case "compositionstart":
                            var z = "onCompositionStart";
                            break e;
                        case "compositionend":
                            z = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            z = "onCompositionUpdate";
                            break e;
                    }
                    z = void 0;
                }
                else Zt ? ba(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
                z && (qa && n.locale !== "ko" && (Zt || z !== "onCompositionStart" ? z === "onCompositionEnd" && Zt && (T = Za()) : (ct = h, Xi = "value" in ct ? ct.value : ct.textContent, Zt = !0)), N = pl(a, z), 0 < N.length && (z = new Xu(z, e, null, n, h), f.push({
                    event: z,
                    listeners: N
                }), T ? z.data = T : (T = ec(n), T !== null && (z.data = T)))), (T = ap ? cp(e, n) : fp(e, n)) && (a = pl(a, "onBeforeInput"), 0 < a.length && (h = new Xu("onBeforeInput", "beforeinput", null, n, h), f.push({
                    event: h,
                    listeners: a
                }), h.data = T));
            }
            dc(f, t);
        });
    }
    function cr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function pl(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var l = e, o = l.stateNode;
            l.tag === 5 && o !== null && (l = o, o = rr(e, n), o != null && r.unshift(cr(e, o, l)), o = rr(e, t), o != null && r.push(cr(e, o, l))), e = e.return;
        }
        return r;
    }
    function Gt(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function us(e, t, n, r, l) {
        for(var o = t._reactName, i = []; n !== null && n !== r;){
            var u = n, s = u.alternate, a = u.stateNode;
            if (s !== null && s === r) break;
            u.tag === 5 && a !== null && (u = a, l ? (s = rr(n, o), s != null && i.unshift(cr(n, s, u))) : l || (s = rr(n, o), s != null && i.push(cr(n, s, u)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var Cp = /\r\n?/g, Pp = /\u0000|\uFFFD/g;
    function ss(e) {
        return (typeof e == "string" ? e : "" + e).replace(Cp, `
`).replace(Pp, "");
    }
    function Ur(e, t, n) {
        if (t = ss(t), ss(e) !== t && n) throw Error(_(425));
    }
    function hl() {}
    var ri = null, li = null;
    function oi(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var ii = typeof setTimeout == "function" ? setTimeout : void 0, Np = typeof clearTimeout == "function" ? clearTimeout : void 0, as = typeof Promise == "function" ? Promise : void 0, Tp = typeof queueMicrotask == "function" ? queueMicrotask : typeof as < "u" ? function(e) {
        return as.resolve(null).then(e).catch(zp);
    } : ii;
    function zp(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function ko(e, t) {
        var n = t, r = 0;
        do {
            var l = n.nextSibling;
            if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), ir(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = l;
        }while (n);
        ir(t);
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
    function cs(e) {
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
    var Tn = Math.random().toString(36).slice(2), We = "__reactFiber$" + Tn, fr = "__reactProps$" + Tn, be = "__reactContainer$" + Tn, ui = "__reactEvents$" + Tn, Lp = "__reactListeners$" + Tn, Rp = "__reactHandles$" + Tn;
    function Ot(e) {
        var t = e[We];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[be] || n[We]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = cs(e); e !== null;){
                    if (n = e[We]) return n;
                    e = cs(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function xr(e) {
        return e = e[We] || e[be], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function en(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(_(33));
    }
    function Ul(e) {
        return e[fr] || null;
    }
    var si = [], tn = -1;
    function Ct(e) {
        return {
            current: e
        };
    }
    function $(e) {
        0 > tn || (e.current = si[tn], si[tn] = null, tn--);
    }
    function U(e, t) {
        tn++, si[tn] = e.current, e.current = t;
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
    function ml() {
        $(me), $(se);
    }
    function fs(e, t, n) {
        if (se.current !== xt) throw Error(_(168));
        U(se, t), U(me, n);
    }
    function hc(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var l in r)if (!(l in t)) throw Error(_(108, md(e) || "Unknown", l));
        return Q({}, n, r);
    }
    function vl(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xt, Ft = se.current, U(se, e), U(me, me.current), !0;
    }
    function ds(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(_(169));
        n ? (e = hc(e, t, Ft), r.__reactInternalMemoizedMergedChildContext = e, $(me), $(se), U(se, e)) : $(me), U(me, n);
    }
    var Ge = null, Fl = !1, So = !1;
    function mc(e) {
        Ge === null ? Ge = [
            e
        ] : Ge.push(e);
    }
    function jp(e) {
        Fl = !0, mc(e);
    }
    function Pt() {
        if (!So && Ge !== null) {
            So = !0;
            var e = 0, t = D;
            try {
                var n = Ge;
                for(D = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                Ge = null, Fl = !1;
            } catch (l) {
                throw Ge !== null && (Ge = Ge.slice(e + 1)), Aa(Qi, Pt), l;
            } finally{
                D = t, So = !1;
            }
        }
        return null;
    }
    var nn = [], rn = 0, gl = null, yl = 0, Pe = [], Ne = 0, $t = null, Xe = 1, Je = "";
    function Lt(e, t) {
        nn[rn++] = yl, nn[rn++] = gl, gl = e, yl = t;
    }
    function vc(e, t, n) {
        Pe[Ne++] = Xe, Pe[Ne++] = Je, Pe[Ne++] = $t, $t = e;
        var r = Xe;
        e = Je;
        var l = 32 - De(r) - 1;
        r &= ~(1 << l), n += 1;
        var o = 32 - De(t) + l;
        if (30 < o) {
            var i = l - l % 5;
            o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Xe = 1 << 32 - De(t) + l | n << l | r, Je = o + e;
        } else Xe = 1 << o | n << l | r, Je = e;
    }
    function eu(e) {
        e.return !== null && (Lt(e, 1), vc(e, 1, 0));
    }
    function tu(e) {
        for(; e === gl;)gl = nn[--rn], nn[rn] = null, yl = nn[--rn], nn[rn] = null;
        for(; e === $t;)$t = Pe[--Ne], Pe[Ne] = null, Je = Pe[--Ne], Pe[Ne] = null, Xe = Pe[--Ne], Pe[Ne] = null;
    }
    var Se = null, ke = null, A = !1, Me = null;
    function gc(e, t) {
        var n = Te(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function ps(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Se = e, ke = vt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Se = e, ke = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = $t !== null ? {
                    id: Xe,
                    overflow: Je
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = Te(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Se = e, ke = null, !0) : !1;
            default:
                return !1;
        }
    }
    function ai(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function ci(e) {
        if (A) {
            var t = ke;
            if (t) {
                var n = t;
                if (!ps(e, t)) {
                    if (ai(e)) throw Error(_(418));
                    t = vt(n.nextSibling);
                    var r = Se;
                    t && ps(e, t) ? gc(r, n) : (e.flags = e.flags & -4097 | 2, A = !1, Se = e);
                }
            } else {
                if (ai(e)) throw Error(_(418));
                e.flags = e.flags & -4097 | 2, A = !1, Se = e;
            }
        }
    }
    function hs(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Se = e;
    }
    function Fr(e) {
        if (e !== Se) return !1;
        if (!A) return hs(e), A = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !oi(e.type, e.memoizedProps)), t && (t = ke)) {
            if (ai(e)) throw yc(), Error(_(418));
            for(; t;)gc(e, t), t = vt(t.nextSibling);
        }
        if (hs(e), e.tag === 13) {
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
    function yc() {
        for(var e = ke; e;)e = vt(e.nextSibling);
    }
    function wn() {
        ke = Se = null, A = !1;
    }
    function nu(e) {
        Me === null ? Me = [
            e
        ] : Me.push(e);
    }
    var Op = nt.ReactCurrentBatchConfig;
    function Fn(e, t, n) {
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
    function ms(e) {
        var t = e._init;
        return t(e._payload);
    }
    function wc(e) {
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
            return c === null || c.tag !== 6 ? (c = zo(p, d.mode, v), c.return = d, c) : (c = l(c, p), c.return = d, c);
        }
        function s(d, c, p, v) {
            var S = p.type;
            return S === Jt ? h(d, c, p.props.children, v, p.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === ot && ms(S) === c.type) ? (v = l(c, p.props), v.ref = Fn(d, c, p), v.return = d, v) : (v = ll(p.type, p.key, p.props, null, d.mode, v), v.ref = Fn(d, c, p), v.return = d, v);
        }
        function a(d, c, p, v) {
            return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Lo(p, d.mode, v), c.return = d, c) : (c = l(c, p.children || []), c.return = d, c);
        }
        function h(d, c, p, v, S) {
            return c === null || c.tag !== 7 ? (c = Ut(p, d.mode, v, S), c.return = d, c) : (c = l(c, p), c.return = d, c);
        }
        function f(d, c, p) {
            if (typeof c == "string" && c !== "" || typeof c == "number") return c = zo("" + c, d.mode, p), c.return = d, c;
            if (typeof c == "object" && c !== null) {
                switch(c.$$typeof){
                    case Tr:
                        return p = ll(c.type, c.key, c.props, null, d.mode, p), p.ref = Fn(d, null, c), p.return = d, p;
                    case Xt:
                        return c = Lo(c, d.mode, p), c.return = d, c;
                    case ot:
                        var v = c._init;
                        return f(d, v(c._payload), p);
                }
                if (Bn(c) || On(c)) return c = Ut(c, d.mode, p, null), c.return = d, c;
                $r(d, c);
            }
            return null;
        }
        function m(d, c, p, v) {
            var S = c !== null ? c.key : null;
            if (typeof p == "string" && p !== "" || typeof p == "number") return S !== null ? null : u(d, c, "" + p, v);
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case Tr:
                        return p.key === S ? s(d, c, p, v) : null;
                    case Xt:
                        return p.key === S ? a(d, c, p, v) : null;
                    case ot:
                        return S = p._init, m(d, c, S(p._payload), v);
                }
                if (Bn(p) || On(p)) return S !== null ? null : h(d, c, p, v, null);
                $r(d, p);
            }
            return null;
        }
        function g(d, c, p, v, S) {
            if (typeof v == "string" && v !== "" || typeof v == "number") return d = d.get(p) || null, u(c, d, "" + v, S);
            if (typeof v == "object" && v !== null) {
                switch(v.$$typeof){
                    case Tr:
                        return d = d.get(v.key === null ? p : v.key) || null, s(c, d, v, S);
                    case Xt:
                        return d = d.get(v.key === null ? p : v.key) || null, a(c, d, v, S);
                    case ot:
                        var N = v._init;
                        return g(d, c, p, N(v._payload), S);
                }
                if (Bn(v) || On(v)) return d = d.get(p) || null, h(c, d, v, S, null);
                $r(c, v);
            }
            return null;
        }
        function y(d, c, p, v) {
            for(var S = null, N = null, T = c, z = c = 0, W = null; T !== null && z < p.length; z++){
                T.index > z ? (W = T, T = null) : W = T.sibling;
                var j = m(d, T, p[z], v);
                if (j === null) {
                    T === null && (T = W);
                    break;
                }
                e && T && j.alternate === null && t(d, T), c = o(j, c, z), N === null ? S = j : N.sibling = j, N = j, T = W;
            }
            if (z === p.length) return n(d, T), A && Lt(d, z), S;
            if (T === null) {
                for(; z < p.length; z++)T = f(d, p[z], v), T !== null && (c = o(T, c, z), N === null ? S = T : N.sibling = T, N = T);
                return A && Lt(d, z), S;
            }
            for(T = r(d, T); z < p.length; z++)W = g(T, d, z, p[z], v), W !== null && (e && W.alternate !== null && T.delete(W.key === null ? z : W.key), c = o(W, c, z), N === null ? S = W : N.sibling = W, N = W);
            return e && T.forEach(function(ye) {
                return t(d, ye);
            }), A && Lt(d, z), S;
        }
        function w(d, c, p, v) {
            var S = On(p);
            if (typeof S != "function") throw Error(_(150));
            if (p = S.call(p), p == null) throw Error(_(151));
            for(var N = S = null, T = c, z = c = 0, W = null, j = p.next(); T !== null && !j.done; z++, j = p.next()){
                T.index > z ? (W = T, T = null) : W = T.sibling;
                var ye = m(d, T, j.value, v);
                if (ye === null) {
                    T === null && (T = W);
                    break;
                }
                e && T && ye.alternate === null && t(d, T), c = o(ye, c, z), N === null ? S = ye : N.sibling = ye, N = ye, T = W;
            }
            if (j.done) return n(d, T), A && Lt(d, z), S;
            if (T === null) {
                for(; !j.done; z++, j = p.next())j = f(d, j.value, v), j !== null && (c = o(j, c, z), N === null ? S = j : N.sibling = j, N = j);
                return A && Lt(d, z), S;
            }
            for(T = r(d, T); !j.done; z++, j = p.next())j = g(T, d, z, j.value, v), j !== null && (e && j.alternate !== null && T.delete(j.key === null ? z : j.key), c = o(j, c, z), N === null ? S = j : N.sibling = j, N = j);
            return e && T.forEach(function(Rn) {
                return t(d, Rn);
            }), A && Lt(d, z), S;
        }
        function x(d, c, p, v) {
            if (typeof p == "object" && p !== null && p.type === Jt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case Tr:
                        e: {
                            for(var S = p.key, N = c; N !== null;){
                                if (N.key === S) {
                                    if (S = p.type, S === Jt) {
                                        if (N.tag === 7) {
                                            n(d, N.sibling), c = l(N, p.props.children), c.return = d, d = c;
                                            break e;
                                        }
                                    } else if (N.elementType === S || typeof S == "object" && S !== null && S.$$typeof === ot && ms(S) === N.type) {
                                        n(d, N.sibling), c = l(N, p.props), c.ref = Fn(d, N, p), c.return = d, d = c;
                                        break e;
                                    }
                                    n(d, N);
                                    break;
                                } else t(d, N);
                                N = N.sibling;
                            }
                            p.type === Jt ? (c = Ut(p.props.children, d.mode, v, p.key), c.return = d, d = c) : (v = ll(p.type, p.key, p.props, null, d.mode, v), v.ref = Fn(d, c, p), v.return = d, d = v);
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
                            c = Lo(p, d.mode, v), c.return = d, d = c;
                        }
                        return i(d);
                    case ot:
                        return N = p._init, x(d, c, N(p._payload), v);
                }
                if (Bn(p)) return y(d, c, p, v);
                if (On(p)) return w(d, c, p, v);
                $r(d, p);
            }
            return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, p), c.return = d, d = c) : (n(d, c), c = zo(p, d.mode, v), c.return = d, d = c), i(d)) : n(d, c);
        }
        return x;
    }
    var _n = wc(!0), _c = wc(!1), wl = Ct(null), _l = null, ln = null, ru = null;
    function lu() {
        ru = ln = _l = null;
    }
    function ou(e) {
        var t = wl.current;
        $(wl), e._currentValue = t;
    }
    function fi(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function pn(e, t) {
        _l = e, ru = ln = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (he = !0), e.firstContext = null);
    }
    function Le(e) {
        var t = e._currentValue;
        if (ru !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, ln === null) {
            if (_l === null) throw Error(_(308));
            ln = e, _l.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else ln = ln.next = e;
        return t;
    }
    var It = null;
    function iu(e) {
        It === null ? It = [
            e
        ] : It.push(e);
    }
    function kc(e, t, n, r) {
        var l = t.interleaved;
        return l === null ? (n.next = n, iu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, et(e, r);
    }
    function et(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var it = !1;
    function uu(e) {
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
    function Sc(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function Ze(e, t) {
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
        if (r = r.shared, M & 2) {
            var l = r.pending;
            return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, et(e, n);
        }
        return l = r.interleaved, l === null ? (t.next = t, iu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, et(e, n);
    }
    function qr(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Ki(e, n);
        }
    }
    function vs(e, t) {
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
    function kl(e, t, n, r) {
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
    function gs(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(_(191, l));
                l.call(r);
            }
        }
    }
    var Er = {}, He = Ct(Er), dr = Ct(Er), pr = Ct(Er);
    function Mt(e) {
        if (e === Er) throw Error(_(174));
        return e;
    }
    function su(e, t) {
        switch(U(pr, t), U(dr, e), U(He, Er), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Qo(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qo(t, e);
        }
        $(He), U(He, t);
    }
    function kn() {
        $(He), $(dr), $(pr);
    }
    function xc(e) {
        Mt(pr.current);
        var t = Mt(He.current), n = Qo(t, e.type);
        t !== n && (U(dr, e), U(He, n));
    }
    function au(e) {
        dr.current === e && ($(He), $(dr));
    }
    var B = Ct(0);
    function Sl(e) {
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
    var xo = [];
    function cu() {
        for(var e = 0; e < xo.length; e++)xo[e]._workInProgressVersionPrimary = null;
        xo.length = 0;
    }
    var br = nt.ReactCurrentDispatcher, Eo = nt.ReactCurrentBatchConfig, At = 0, V = null, Z = null, ee = null, xl = !1, Jn = !1, hr = 0, Ip = 0;
    function oe() {
        throw Error(_(321));
    }
    function fu(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!Fe(e[n], t[n])) return !1;
        return !0;
    }
    function du(e, t, n, r, l, o) {
        if (At = o, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, br.current = e === null || e.memoizedState === null ? Fp : $p, e = n(r, l), Jn) {
            o = 0;
            do {
                if (Jn = !1, hr = 0, 25 <= o) throw Error(_(301));
                o += 1, ee = Z = null, t.updateQueue = null, br.current = Ap, e = n(r, l);
            }while (Jn);
        }
        if (br.current = El, t = Z !== null && Z.next !== null, At = 0, ee = Z = V = null, xl = !1, t) throw Error(_(300));
        return e;
    }
    function pu() {
        var e = hr !== 0;
        return hr = 0, e;
    }
    function Ae() {
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
        if (Z === null) {
            var e = V.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = Z.next;
        var t = ee === null ? V.memoizedState : ee.next;
        if (t !== null) ee = t, Z = e;
        else {
            if (e === null) throw Error(_(310));
            Z = e, e = {
                memoizedState: Z.memoizedState,
                baseState: Z.baseState,
                baseQueue: Z.baseQueue,
                queue: Z.queue,
                next: null
            }, ee === null ? V.memoizedState = ee = e : ee = ee.next = e;
        }
        return ee;
    }
    function mr(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Co(e) {
        var t = Re(), n = t.queue;
        if (n === null) throw Error(_(311));
        n.lastRenderedReducer = e;
        var r = Z, l = r.baseQueue, o = n.pending;
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
                if ((At & h) === h) s !== null && (s = s.next = {
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
    function Po(e) {
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
    function Ec() {}
    function Cc(e, t) {
        var n = V, r = Re(), l = t(), o = !Fe(r.memoizedState, l);
        if (o && (r.memoizedState = l, he = !0), r = r.queue, hu(Tc.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || o || ee !== null && ee.memoizedState.tag & 1) {
            if (n.flags |= 2048, vr(9, Nc.bind(null, n, r, l, t), void 0, null), te === null) throw Error(_(349));
            At & 30 || Pc(n, t, l);
        }
        return l;
    }
    function Pc(e, t, n) {
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
    function Nc(e, t, n, r) {
        t.value = n, t.getSnapshot = r, zc(t) && Lc(e);
    }
    function Tc(e, t, n) {
        return n(function() {
            zc(t) && Lc(e);
        });
    }
    function zc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Fe(e, n);
        } catch  {
            return !0;
        }
    }
    function Lc(e) {
        var t = et(e, 1);
        t !== null && Ue(t, e, 1, -1);
    }
    function ys(e) {
        var t = Ae();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: mr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Up.bind(null, V, e), [
            t.memoizedState,
            e
        ];
    }
    function vr(e, t, n, r) {
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
    function Rc() {
        return Re().memoizedState;
    }
    function el(e, t, n, r) {
        var l = Ae();
        V.flags |= e, l.memoizedState = vr(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function $l(e, t, n, r) {
        var l = Re();
        r = r === void 0 ? null : r;
        var o = void 0;
        if (Z !== null) {
            var i = Z.memoizedState;
            if (o = i.destroy, r !== null && fu(r, i.deps)) {
                l.memoizedState = vr(t, n, o, r);
                return;
            }
        }
        V.flags |= e, l.memoizedState = vr(1 | t, n, o, r);
    }
    function ws(e, t) {
        return el(8390656, 8, e, t);
    }
    function hu(e, t) {
        return $l(2048, 8, e, t);
    }
    function jc(e, t) {
        return $l(4, 2, e, t);
    }
    function Oc(e, t) {
        return $l(4, 4, e, t);
    }
    function Ic(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Mc(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, $l(4, 4, Ic.bind(null, t, e), n);
    }
    function mu() {}
    function Dc(e, t) {
        var n = Re();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && fu(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function Uc(e, t) {
        var n = Re();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && fu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Fc(e, t, n) {
        return At & 21 ? (Fe(n, t) || (n = Va(), V.lanes |= n, Wt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, he = !0), e.memoizedState = n);
    }
    function Mp(e, t) {
        var n = D;
        D = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Eo.transition;
        Eo.transition = {};
        try {
            e(!1), t();
        } finally{
            D = n, Eo.transition = r;
        }
    }
    function $c() {
        return Re().memoizedState;
    }
    function Dp(e, t, n) {
        var r = wt(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ac(e)) Wc(t, n);
        else if (n = kc(e, t, n, r), n !== null) {
            var l = ce();
            Ue(n, e, r, l), Bc(n, t, r);
        }
    }
    function Up(e, t, n) {
        var r = wt(e), l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ac(e)) Wc(t, l);
        else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
                var i = t.lastRenderedState, u = o(i, n);
                if (l.hasEagerState = !0, l.eagerState = u, Fe(u, i)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l, iu(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
                    return;
                }
            } catch  {} finally{}
            n = kc(e, t, l, r), n !== null && (l = ce(), Ue(n, e, r, l), Bc(n, t, r));
        }
    }
    function Ac(e) {
        var t = e.alternate;
        return e === V || t !== null && t === V;
    }
    function Wc(e, t) {
        Jn = xl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Bc(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Ki(e, n);
        }
    }
    var El = {
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
    }, Fp = {
        readContext: Le,
        useCallback: function(e, t) {
            return Ae().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: Le,
        useEffect: ws,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, el(4194308, 4, Ic.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return el(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return el(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = Ae();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
                e,
                t
            ], e;
        },
        useReducer: function(e, t, n) {
            var r = Ae();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Dp.bind(null, V, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var t = Ae();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: ys,
        useDebugValue: mu,
        useDeferredValue: function(e) {
            return Ae().memoizedState = e;
        },
        useTransition: function() {
            var e = ys(!1), t = e[0];
            return e = Mp.bind(null, e[1]), Ae().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = V, l = Ae();
            if (A) {
                if (n === void 0) throw Error(_(407));
                n = n();
            } else {
                if (n = t(), te === null) throw Error(_(349));
                At & 30 || Pc(r, t, n);
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o, ws(Tc.bind(null, r, o, e), [
                e
            ]), r.flags |= 2048, vr(9, Nc.bind(null, r, o, n, t), void 0, null), n;
        },
        useId: function() {
            var e = Ae(), t = te.identifierPrefix;
            if (A) {
                var n = Je, r = Xe;
                n = (r & ~(1 << 32 - De(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = hr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = Ip++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, $p = {
        readContext: Le,
        useCallback: Dc,
        useContext: Le,
        useEffect: hu,
        useImperativeHandle: Mc,
        useInsertionEffect: jc,
        useLayoutEffect: Oc,
        useMemo: Uc,
        useReducer: Co,
        useRef: Rc,
        useState: function() {
            return Co(mr);
        },
        useDebugValue: mu,
        useDeferredValue: function(e) {
            var t = Re();
            return Fc(t, Z.memoizedState, e);
        },
        useTransition: function() {
            var e = Co(mr)[0], t = Re().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Ec,
        useSyncExternalStore: Cc,
        useId: $c,
        unstable_isNewReconciler: !1
    }, Ap = {
        readContext: Le,
        useCallback: Dc,
        useContext: Le,
        useEffect: hu,
        useImperativeHandle: Mc,
        useInsertionEffect: jc,
        useLayoutEffect: Oc,
        useMemo: Uc,
        useReducer: Po,
        useRef: Rc,
        useState: function() {
            return Po(mr);
        },
        useDebugValue: mu,
        useDeferredValue: function(e) {
            var t = Re();
            return Z === null ? t.memoizedState = e : Fc(t, Z.memoizedState, e);
        },
        useTransition: function() {
            var e = Po(mr)[0], t = Re().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Ec,
        useSyncExternalStore: Cc,
        useId: $c,
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
    function di(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Al = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Ht(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = ce(), l = wt(e), o = Ze(r, l);
            o.payload = t, n != null && (o.callback = n), t = gt(e, o, l), t !== null && (Ue(t, e, l, r), qr(t, e, l));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = ce(), l = wt(e), o = Ze(r, l);
            o.tag = 1, o.payload = t, n != null && (o.callback = n), t = gt(e, o, l), t !== null && (Ue(t, e, l, r), qr(t, e, l));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = ce(), r = wt(e), l = Ze(n, r);
            l.tag = 2, t != null && (l.callback = t), t = gt(e, l, r), t !== null && (Ue(t, e, r, n), qr(t, e, r));
        }
    };
    function _s(e, t, n, r, l, o, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !sr(n, r) || !sr(l, o) : !0;
    }
    function Vc(e, t, n) {
        var r = !1, l = xt, o = t.contextType;
        return typeof o == "object" && o !== null ? o = Le(o) : (l = ve(t) ? Ft : se.current, r = t.contextTypes, o = (r = r != null) ? yn(e, l) : xt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
    }
    function ks(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Al.enqueueReplaceState(t, t.state, null);
    }
    function pi(e, t, n, r) {
        var l = e.stateNode;
        l.props = n, l.state = e.memoizedState, l.refs = {}, uu(e);
        var o = t.contextType;
        typeof o == "object" && o !== null ? l.context = Le(o) : (o = ve(t) ? Ft : se.current, l.context = yn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (di(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Al.enqueueReplaceState(l, l.state, null), kl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Sn(e, t) {
        try {
            var n = "", r = t;
            do n += hd(r), r = r.return;
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
    function No(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        };
    }
    function hi(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var Wp = typeof WeakMap == "function" ? WeakMap : Map;
    function Hc(e, t, n) {
        n = Ze(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Pl || (Pl = !0, Ei = r), hi(e, t);
        }, n;
    }
    function Qc(e, t, n) {
        n = Ze(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = t.value;
            n.payload = function() {
                return r(l);
            }, n.callback = function() {
                hi(e, t);
            };
        }
        var o = e.stateNode;
        return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
            hi(e, t), typeof r != "function" && (yt === null ? yt = new Set([
                this
            ]) : yt.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function Ss(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Wp;
            var l = new Set;
            r.set(t, l);
        } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
        l.has(n) || (l.add(n), e = th.bind(null, e, t, n), t.then(e, e));
    }
    function xs(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function Es(e, t, n, r, l) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ze(-1, 1), t.tag = 2, gt(n, t, 1))), n.lanes |= 1), e);
    }
    var Bp = nt.ReactCurrentOwner, he = !1;
    function ae(e, t, n, r) {
        t.child = e === null ? _c(t, null, n, r) : _n(t, e.child, n, r);
    }
    function Cs(e, t, n, r, l) {
        n = n.render;
        var o = t.ref;
        return pn(t, l), r = du(e, t, n, r, o, l), n = pu(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : (A && n && eu(t), t.flags |= 1, ae(e, t, r, l), t.child);
    }
    function Ps(e, t, n, r, l) {
        if (e === null) {
            var o = n.type;
            return typeof o == "function" && !xu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Kc(e, t, o, r, l)) : (e = ll(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (o = e.child, !(e.lanes & l)) {
            var i = o.memoizedProps;
            if (n = n.compare, n = n !== null ? n : sr, n(i, r) && e.ref === t.ref) return tt(e, t, l);
        }
        return t.flags |= 1, e = _t(o, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Kc(e, t, n, r, l) {
        if (e !== null) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) if (he = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (he = !0);
            else return t.lanes = e.lanes, tt(e, t, l);
        }
        return mi(e, t, n, r, l);
    }
    function Gc(e, t, n) {
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
    function Yc(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function mi(e, t, n, r, l) {
        var o = ve(n) ? Ft : se.current;
        return o = yn(t, o), pn(t, l), n = du(e, t, n, r, o, l), r = pu(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : (A && r && eu(t), t.flags |= 1, ae(e, t, n, l), t.child);
    }
    function Ns(e, t, n, r, l) {
        if (ve(n)) {
            var o = !0;
            vl(t);
        } else o = !1;
        if (pn(t, l), t.stateNode === null) tl(e, t), Vc(t, n, r), pi(t, n, r, l), r = !0;
        else if (e === null) {
            var i = t.stateNode, u = t.memoizedProps;
            i.props = u;
            var s = i.context, a = n.contextType;
            typeof a == "object" && a !== null ? a = Le(a) : (a = ve(n) ? Ft : se.current, a = yn(t, a));
            var h = n.getDerivedStateFromProps, f = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && ks(t, i, r, a), it = !1;
            var m = t.memoizedState;
            i.state = m, kl(t, r, i, l), s = t.memoizedState, u !== r || m !== s || me.current || it ? (typeof h == "function" && (di(t, n, h, r), s = t.memoizedState), (u = it || _s(t, n, u, r, m, s, a)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, Sc(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Oe(t.type, u), i.props = a, f = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Le(s) : (s = ve(n) ? Ft : se.current, s = yn(t, s));
            var g = n.getDerivedStateFromProps;
            (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== f || m !== s) && ks(t, i, r, s), it = !1, m = t.memoizedState, i.state = m, kl(t, r, i, l);
            var y = t.memoizedState;
            u !== f || m !== y || me.current || it ? (typeof g == "function" && (di(t, n, g, r), y = t.memoizedState), (a = it || _s(t, n, a, r, m, y, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return vi(e, t, n, r, o, l);
    }
    function vi(e, t, n, r, l, o) {
        Yc(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return l && ds(t, n, !1), tt(e, t, o);
        r = t.stateNode, Bp.current = t;
        var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = _n(t, e.child, null, o), t.child = _n(t, null, u, o)) : ae(e, t, u, o), t.memoizedState = r.state, l && ds(t, n, !0), t.child;
    }
    function Xc(e) {
        var t = e.stateNode;
        t.pendingContext ? fs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fs(e, t.context, !1), su(e, t.containerInfo);
    }
    function Ts(e, t, n, r, l) {
        return wn(), nu(l), t.flags |= 256, ae(e, t, n, r), t.child;
    }
    var gi = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function yi(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function Jc(e, t, n) {
        var r = t.pendingProps, l = B.current, o = !1, i = (t.flags & 128) !== 0, u;
        if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(B, l & 1), e === null) return ci(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Vl(i, r, 0, null), e = Ut(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = yi(n), t.memoizedState = gi, e) : vu(t, i));
        if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Vp(e, t, i, r, u, l, n);
        if (o) {
            o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
            var s = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = _t(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = _t(u, o) : (o = Ut(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? yi(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = gi, r;
        }
        return o = e.child, e = o.sibling, r = _t(o, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function vu(e, t) {
        return t = Vl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function Ar(e, t, n, r) {
        return r !== null && nu(r), _n(t, e.child, null, n), e = vu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function Vp(e, t, n, r, l, o, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = No(Error(_(422))), Ar(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Vl({
            mode: "visible",
            children: r.children
        }, l, 0, null), o = Ut(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && _n(t, e.child, null, i), t.child.memoizedState = yi(i), t.memoizedState = gi, o);
        if (!(t.mode & 1)) return Ar(e, t, i, null);
        if (l.data === "$!") {
            if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
            return r = u, o = Error(_(419)), r = No(o, r, void 0), Ar(e, t, i, r);
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
            return Su(), r = No(Error(_(421))), Ar(e, t, i, r);
        }
        return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = nh.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ke = vt(l.nextSibling), Se = t, A = !0, Me = null, e !== null && (Pe[Ne++] = Xe, Pe[Ne++] = Je, Pe[Ne++] = $t, Xe = e.id, Je = e.overflow, $t = t), t = vu(t, r.children), t.flags |= 4096, t);
    }
    function zs(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), fi(e.return, t, n);
    }
    function To(e, t, n, r, l) {
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
    function Zc(e, t, n) {
        var r = t.pendingProps, l = r.revealOrder, o = r.tail;
        if (ae(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && zs(e, n, t);
                else if (e.tag === 19) zs(e, n, t);
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
                for(n = t.child, l = null; n !== null;)e = n.alternate, e !== null && Sl(e) === null && (l = n), n = n.sibling;
                n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), To(t, !1, l, n, o);
                break;
            case "backwards":
                for(n = null, l = t.child, t.child = null; l !== null;){
                    if (e = l.alternate, e !== null && Sl(e) === null) {
                        t.child = l;
                        break;
                    }
                    e = l.sibling, l.sibling = n, n = l, l = e;
                }
                To(t, !0, n, null, o);
                break;
            case "together":
                To(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function tl(e, t) {
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
    function Hp(e, t, n) {
        switch(t.tag){
            case 3:
                Xc(t), wn();
                break;
            case 5:
                xc(t);
                break;
            case 1:
                ve(t.type) && vl(t);
                break;
            case 4:
                su(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, l = t.memoizedProps.value;
                U(wl, r._currentValue), r._currentValue = l;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (U(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Jc(e, t, n) : (U(B, B.current & 1), e = tt(e, t, n), e !== null ? e.sibling : null);
                U(B, B.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return Zc(e, t, n);
                    t.flags |= 128;
                }
                if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(B, B.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Gc(e, t, n);
        }
        return tt(e, t, n);
    }
    var qc, wi, bc, ef;
    qc = function(e, t) {
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
    wi = function() {};
    bc = function(e, t, n, r) {
        var l = e.memoizedProps;
        if (l !== r) {
            e = t.stateNode, Mt(He.current);
            var o = null;
            switch(n){
                case "input":
                    l = Wo(e, l), r = Wo(e, r), o = [];
                    break;
                case "select":
                    l = Q({}, l, {
                        value: void 0
                    }), r = Q({}, r, {
                        value: void 0
                    }), o = [];
                    break;
                case "textarea":
                    l = Ho(e, l), r = Ho(e, r), o = [];
                    break;
                default:
                    typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = hl);
            }
            Ko(n, r);
            var i;
            n = null;
            for(a in l)if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null) if (a === "style") {
                var u = l[a];
                for(i in u)u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (tr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
            for(a in r){
                var s = r[a];
                if (u = l?.[a], r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
                    for(i in u)!u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in s)s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
                } else n || (o || (o = []), o.push(a, n)), n = s;
                else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (tr.hasOwnProperty(a) ? (s != null && a === "onScroll" && F("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
            }
            n && (o = o || []).push("style", n);
            var a = o;
            (t.updateQueue = a) && (t.flags |= 4);
        }
    };
    ef = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function $n(e, t) {
        if (!A) switch(e.tailMode){
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
    function Qp(e, t, n) {
        var r = t.pendingProps;
        switch(tu(t), t.tag){
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
                return ve(t.type) && ml(), ie(t), null;
            case 3:
                return r = t.stateNode, kn(), $(me), $(se), cu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Fr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (Ni(Me), Me = null))), wi(e, t), ie(t), null;
            case 5:
                au(t);
                var l = Mt(pr.current);
                if (n = t.type, e !== null && t.stateNode != null) bc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(_(166));
                        return ie(t), null;
                    }
                    if (e = Mt(He.current), Fr(t)) {
                        r = t.stateNode, n = t.type;
                        var o = t.memoizedProps;
                        switch(r[We] = t, r[fr] = o, e = (t.mode & 1) !== 0, n){
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
                                for(l = 0; l < Hn.length; l++)F(Hn[l], r);
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
                                Fu(r, o), F("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!o.multiple
                                }, F("invalid", r);
                                break;
                            case "textarea":
                                Au(r, o), F("invalid", r);
                        }
                        Ko(n, o), l = null;
                        for(var i in o)if (o.hasOwnProperty(i)) {
                            var u = o[i];
                            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Ur(r.textContent, u, e), l = [
                                "children",
                                u
                            ]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Ur(r.textContent, u, e), l = [
                                "children",
                                "" + u
                            ]) : tr.hasOwnProperty(i) && u != null && i === "onScroll" && F("scroll", r);
                        }
                        switch(n){
                            case "input":
                                zr(r), $u(r, o, !0);
                                break;
                            case "textarea":
                                zr(r), Wu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof o.onClick == "function" && (r.onclick = hl);
                        }
                        r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ta(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[We] = t, e[fr] = r, qc(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = Go(n, r), n){
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
                                    for(l = 0; l < Hn.length; l++)F(Hn[l], e);
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
                                    Fu(e, r), l = Wo(e, r), F("invalid", e);
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
                                    Au(e, r), l = Ho(e, r), F("invalid", e);
                                    break;
                                default:
                                    l = r;
                            }
                            Ko(n, l), u = l;
                            for(o in u)if (u.hasOwnProperty(o)) {
                                var s = u[o];
                                o === "style" ? Ra(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && za(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && nr(e, s) : typeof s == "number" && nr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (tr.hasOwnProperty(o) ? s != null && o === "onScroll" && F("scroll", e) : s != null && Ai(e, o, s, i));
                            }
                            switch(n){
                                case "input":
                                    zr(e), $u(e, r, !1);
                                    break;
                                case "textarea":
                                    zr(e), Wu(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + St(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, o = r.value, o != null ? an(e, !!r.multiple, o, !1) : r.defaultValue != null && an(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof l.onClick == "function" && (e.onclick = hl);
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
                if (e && t.stateNode != null) ef(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
                    if (n = Mt(pr.current), Mt(He.current), Fr(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[We] = t, (o = r.nodeValue !== n) && (e = Se, e !== null)) switch(e.tag){
                            case 3:
                                Ur(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Ur(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        o && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[We] = t, t.stateNode = r;
                }
                return ie(t), null;
            case 13:
                if ($(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (A && ke !== null && t.mode & 1 && !(t.flags & 128)) yc(), wn(), t.flags |= 98560, o = !1;
                    else if (o = Fr(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!o) throw Error(_(318));
                            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(_(317));
                            o[We] = t;
                        } else wn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        ie(t), o = !1;
                    } else Me !== null && (Ni(Me), Me = null), o = !0;
                    if (!o) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? q === 0 && (q = 3) : Su())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
            case 4:
                return kn(), wi(e, t), e === null && ar(t.stateNode.containerInfo), ie(t), null;
            case 10:
                return ou(t.type._context), ie(t), null;
            case 17:
                return ve(t.type) && ml(), ie(t), null;
            case 19:
                if ($(B), o = t.memoizedState, o === null) return ie(t), null;
                if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) $n(o, !1);
                else {
                    if (q !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = Sl(e), i !== null) {
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
                    if (!r) if (e = Sl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), $n(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !A) return ie(t), null;
                    } else 2 * Y() - o.renderingStartTime > xn && n !== 1073741824 && (t.flags |= 128, r = !0, $n(o, !1), t.lanes = 4194304);
                    o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
                }
                return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Y(), t.sibling = null, n = B.current, U(B, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
            case 22:
            case 23:
                return ku(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? we & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(_(156, t.tag));
    }
    function Kp(e, t) {
        switch(tu(t), t.tag){
            case 1:
                return ve(t.type) && ml(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return kn(), $(me), $(se), cu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return au(t), null;
            case 13:
                if ($(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(_(340));
                    wn();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return $(B), null;
            case 4:
                return kn(), null;
            case 10:
                return ou(t.type._context), null;
            case 22:
            case 23:
                return ku(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Wr = !1, ue = !1, Gp = typeof WeakSet == "function" ? WeakSet : Set, E = null;
    function on(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            K(e, t, r);
        }
        else n.current = null;
    }
    function _i(e, t, n) {
        try {
            n();
        } catch (r) {
            K(e, t, r);
        }
    }
    var Ls = !1;
    function Yp(e, t) {
        if (ri = fl, e = oc(), bi(e)) {
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
        for(li = {
            focusedElem: e,
            selectionRange: n
        }, fl = !1, E = t; E !== null;)if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
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
                            var w = y.memoizedProps, x = y.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Oe(t.type, w), x);
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
        return y = Ls, Ls = !1, y;
    }
    function Zn(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var l = r = r.next;
            do {
                if ((l.tag & e) === e) {
                    var o = l.destroy;
                    l.destroy = void 0, o !== void 0 && _i(t, n, o);
                }
                l = l.next;
            }while (l !== r);
        }
    }
    function Wl(e, t) {
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
    function ki(e) {
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
    function tf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, tf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[We], delete t[fr], delete t[ui], delete t[Lp], delete t[Rp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function nf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Rs(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || nf(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Si(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = hl));
        else if (r !== 4 && (e = e.child, e !== null)) for(Si(e, t, n), e = e.sibling; e !== null;)Si(e, t, n), e = e.sibling;
    }
    function xi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(xi(e, t, n), e = e.sibling; e !== null;)xi(e, t, n), e = e.sibling;
    }
    var ne = null, Ie = !1;
    function lt(e, t, n) {
        for(n = n.child; n !== null;)rf(e, t, n), n = n.sibling;
    }
    function rf(e, t, n) {
        if (Ve && typeof Ve.onCommitFiberUnmount == "function") try {
            Ve.onCommitFiberUnmount(Ol, n);
        } catch  {}
        switch(n.tag){
            case 5:
                ue || on(n, t);
            case 6:
                var r = ne, l = Ie;
                ne = null, lt(e, t, n), ne = r, Ie = l, ne !== null && (Ie ? (e = ne, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ne.removeChild(n.stateNode));
                break;
            case 18:
                ne !== null && (Ie ? (e = ne, n = n.stateNode, e.nodeType === 8 ? ko(e.parentNode, n) : e.nodeType === 1 && ko(e, n), ir(e)) : ko(ne, n.stateNode));
                break;
            case 4:
                r = ne, l = Ie, ne = n.stateNode.containerInfo, Ie = !0, lt(e, t, n), ne = r, Ie = l;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    l = r = r.next;
                    do {
                        var o = l, i = o.destroy;
                        o = o.tag, i !== void 0 && (o & 2 || o & 4) && _i(n, t, i), l = l.next;
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
    function js(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Gp), t.forEach(function(r) {
                var l = rh.bind(null, e, r);
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
                            ne = u.stateNode, Ie = !1;
                            break e;
                        case 3:
                            ne = u.stateNode.containerInfo, Ie = !0;
                            break e;
                        case 4:
                            ne = u.stateNode.containerInfo, Ie = !0;
                            break e;
                    }
                    u = u.return;
                }
                if (ne === null) throw Error(_(160));
                rf(o, i, l), ne = null, Ie = !1;
                var s = l.alternate;
                s !== null && (s.return = null), l.return = null;
            } catch (a) {
                K(l, t, a);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)lf(t, e), t = t.sibling;
    }
    function lf(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (je(t, e), $e(e), r & 4) {
                    try {
                        Zn(3, e, e.return), Wl(3, e);
                    } catch (w) {
                        K(e, e.return, w);
                    }
                    try {
                        Zn(5, e, e.return);
                    } catch (w) {
                        K(e, e.return, w);
                    }
                }
                break;
            case 1:
                je(t, e), $e(e), r & 512 && n !== null && on(n, n.return);
                break;
            case 5:
                if (je(t, e), $e(e), r & 512 && n !== null && on(n, n.return), e.flags & 32) {
                    var l = e.stateNode;
                    try {
                        nr(l, "");
                    } catch (w) {
                        K(e, e.return, w);
                    }
                }
                if (r & 4 && (l = e.stateNode, l != null)) {
                    var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
                    if (e.updateQueue = null, s !== null) try {
                        u === "input" && o.type === "radio" && o.name != null && Pa(l, o), Go(u, i);
                        var a = Go(u, o);
                        for(i = 0; i < s.length; i += 2){
                            var h = s[i], f = s[i + 1];
                            h === "style" ? Ra(l, f) : h === "dangerouslySetInnerHTML" ? za(l, f) : h === "children" ? nr(l, f) : Ai(l, h, f, a);
                        }
                        switch(u){
                            case "input":
                                Bo(l, o);
                                break;
                            case "textarea":
                                Na(l, o);
                                break;
                            case "select":
                                var m = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var g = o.value;
                                g != null ? an(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? an(l, !!o.multiple, o.defaultValue, !0) : an(l, !!o.multiple, o.multiple ? [] : "", !1));
                        }
                        l[fr] = o;
                    } catch (w) {
                        K(e, e.return, w);
                    }
                }
                break;
            case 6:
                if (je(t, e), $e(e), r & 4) {
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
                if (je(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    ir(t.containerInfo);
                } catch (w) {
                    K(e, e.return, w);
                }
                break;
            case 4:
                je(t, e), $e(e);
                break;
            case 13:
                je(t, e), $e(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (wu = Y())), r & 4 && js(e);
                break;
            case 22:
                if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (a = ue) || h, je(t, e), ue = a) : je(t, e), $e(e), r & 8192) {
                    if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1) for(E = e, h = e.child; h !== null;){
                        for(f = E = h; E !== null;){
                            switch(m = E, g = m.child, m.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Zn(4, m, m.return);
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
                                        Is(f);
                                        continue;
                                    }
                            }
                            g !== null ? (g.return = m, E = g) : Is(f);
                        }
                        h = h.sibling;
                    }
                    e: for(h = null, f = e;;){
                        if (f.tag === 5) {
                            if (h === null) {
                                h = f;
                                try {
                                    l = f.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = f.stateNode, s = f.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = La("display", i));
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
                je(t, e), $e(e), r & 4 && js(e);
                break;
            case 21:
                break;
            default:
                je(t, e), $e(e);
        }
    }
    function $e(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (nf(n)) {
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
                        r.flags & 32 && (nr(l, ""), r.flags &= -33);
                        var o = Rs(e);
                        xi(e, o, l);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, u = Rs(e);
                        Si(e, u, i);
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
    function Xp(e, t, n) {
        E = e, of(e);
    }
    function of(e, t, n) {
        for(var r = (e.mode & 1) !== 0; E !== null;){
            var l = E, o = l.child;
            if (l.tag === 22 && r) {
                var i = l.memoizedState !== null || Wr;
                if (!i) {
                    var u = l.alternate, s = u !== null && u.memoizedState !== null || ue;
                    u = Wr;
                    var a = ue;
                    if (Wr = i, (ue = s) && !a) for(E = l; E !== null;)i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? Ms(l) : s !== null ? (s.return = i, E = s) : Ms(l);
                    for(; o !== null;)E = o, of(o), o = o.sibling;
                    E = l, Wr = u, ue = a;
                }
                Os(e);
            } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : Os(e);
        }
    }
    function Os(e) {
        for(; E !== null;){
            var t = E;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            ue || Wl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ue) if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Oe(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var o = t.updateQueue;
                            o !== null && gs(t, o, r);
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
                                gs(t, i, n);
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
                                        f !== null && ir(f);
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
                    ue || t.flags & 512 && ki(t);
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
    function Is(e) {
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
    function Ms(e) {
        for(; E !== null;){
            var t = E;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Wl(4, t);
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
                            ki(t);
                        } catch (s) {
                            K(t, o, s);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            ki(t);
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
    var Jp = Math.ceil, Cl = nt.ReactCurrentDispatcher, gu = nt.ReactCurrentOwner, ze = nt.ReactCurrentBatchConfig, M = 0, te = null, J = null, re = 0, we = 0, un = Ct(0), q = 0, gr = null, Wt = 0, Bl = 0, yu = 0, qn = null, pe = null, wu = 0, xn = 1 / 0, Ke = null, Pl = !1, Ei = null, yt = null, Br = !1, ft = null, Nl = 0, bn = 0, Ci = null, nl = -1, rl = 0;
    function ce() {
        return M & 6 ? Y() : nl !== -1 ? nl : nl = Y();
    }
    function wt(e) {
        return e.mode & 1 ? M & 2 && re !== 0 ? re & -re : Op.transition !== null ? (rl === 0 && (rl = Va()), rl) : (e = D, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ja(e.type)), e) : 1;
    }
    function Ue(e, t, n, r) {
        if (50 < bn) throw bn = 0, Ci = null, Error(_(185));
        kr(e, n, r), (!(M & 2) || e !== te) && (e === te && (!(M & 2) && (Bl |= n), q === 4 && st(e, re)), ge(e, r), n === 1 && M === 0 && !(t.mode & 1) && (xn = Y() + 500, Fl && Pt()));
    }
    function ge(e, t) {
        var n = e.callbackNode;
        Od(e, t);
        var r = cl(e, e === te ? re : 0);
        if (r === 0) n !== null && Hu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Hu(n), t === 1) e.tag === 0 ? jp(Ds.bind(null, e)) : mc(Ds.bind(null, e)), Tp(function() {
                !(M & 6) && Pt();
            }), n = null;
            else {
                switch(Ha(r)){
                    case 1:
                        n = Qi;
                        break;
                    case 4:
                        n = Wa;
                        break;
                    case 16:
                        n = al;
                        break;
                    case 536870912:
                        n = Ba;
                        break;
                    default:
                        n = al;
                }
                n = hf(n, uf.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function uf(e, t) {
        if (nl = -1, rl = 0, M & 6) throw Error(_(327));
        var n = e.callbackNode;
        if (hn() && e.callbackNode !== n) return null;
        var r = cl(e, e === te ? re : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Tl(e, r);
        else {
            t = r;
            var l = M;
            M |= 2;
            var o = af();
            (te !== e || re !== t) && (Ke = null, xn = Y() + 500, Dt(e, t));
            do try {
                bp();
                break;
            } catch (u) {
                sf(e, u);
            }
            while (!0);
            lu(), Cl.current = o, M = l, J !== null ? t = 0 : (te = null, re = 0, t = q);
        }
        if (t !== 0) {
            if (t === 2 && (l = qo(e), l !== 0 && (r = l, t = Pi(e, l))), t === 1) throw n = gr, Dt(e, 0), st(e, r), ge(e, Y()), n;
            if (t === 6) st(e, r);
            else {
                if (l = e.current.alternate, !(r & 30) && !Zp(l) && (t = Tl(e, r), t === 2 && (o = qo(e), o !== 0 && (r = o, t = Pi(e, o))), t === 1)) throw n = gr, Dt(e, 0), st(e, r), ge(e, Y()), n;
                switch(e.finishedWork = l, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(_(345));
                    case 2:
                        Rt(e, pe, Ke);
                        break;
                    case 3:
                        if (st(e, r), (r & 130023424) === r && (t = wu + 500 - Y(), 10 < t)) {
                            if (cl(e, 0) !== 0) break;
                            if (l = e.suspendedLanes, (l & r) !== r) {
                                ce(), e.pingedLanes |= e.suspendedLanes & l;
                                break;
                            }
                            e.timeoutHandle = ii(Rt.bind(null, e, pe, Ke), t);
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
                        if (r = l, r = Y() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Jp(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = ii(Rt.bind(null, e, pe, Ke), r);
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
        return ge(e, Y()), e.callbackNode === n ? uf.bind(null, e) : null;
    }
    function Pi(e, t) {
        var n = qn;
        return e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256), e = Tl(e, t), e !== 2 && (t = pe, pe = n, t !== null && Ni(t)), e;
    }
    function Ni(e) {
        pe === null ? pe = e : pe.push.apply(pe, e);
    }
    function Zp(e) {
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
        for(t &= ~yu, t &= ~Bl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - De(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Ds(e) {
        if (M & 6) throw Error(_(327));
        hn();
        var t = cl(e, 0);
        if (!(t & 1)) return ge(e, Y()), null;
        var n = Tl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = qo(e);
            r !== 0 && (t = r, n = Pi(e, r));
        }
        if (n === 1) throw n = gr, Dt(e, 0), st(e, t), ge(e, Y()), n;
        if (n === 6) throw Error(_(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Rt(e, pe, Ke), ge(e, Y()), null;
    }
    function _u(e, t) {
        var n = M;
        M |= 1;
        try {
            return e(t);
        } finally{
            M = n, M === 0 && (xn = Y() + 500, Fl && Pt());
        }
    }
    function Bt(e) {
        ft !== null && ft.tag === 0 && !(M & 6) && hn();
        var t = M;
        M |= 1;
        var n = ze.transition, r = D;
        try {
            if (ze.transition = null, D = 1, e) return e();
        } finally{
            D = r, ze.transition = n, M = t, !(M & 6) && Pt();
        }
    }
    function ku() {
        we = un.current, $(un);
    }
    function Dt(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Np(n)), J !== null) for(n = J.return; n !== null;){
            var r = n;
            switch(tu(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && ml();
                    break;
                case 3:
                    kn(), $(me), $(se), cu();
                    break;
                case 5:
                    au(r);
                    break;
                case 4:
                    kn();
                    break;
                case 13:
                    $(B);
                    break;
                case 19:
                    $(B);
                    break;
                case 10:
                    ou(r.type._context);
                    break;
                case 22:
                case 23:
                    ku();
            }
            n = n.return;
        }
        if (te = e, J = e = _t(e.current, null), re = we = t, q = 0, gr = null, yu = Bl = Wt = 0, pe = qn = null, It !== null) {
            for(t = 0; t < It.length; t++)if (n = It[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next, o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l, r.next = i;
                }
                n.pending = r;
            }
            It = null;
        }
        return e;
    }
    function sf(e, t) {
        do {
            var n = J;
            try {
                if (lu(), br.current = El, xl) {
                    for(var r = V.memoizedState; r !== null;){
                        var l = r.queue;
                        l !== null && (l.pending = null), r = r.next;
                    }
                    xl = !1;
                }
                if (At = 0, ee = Z = V = null, Jn = !1, hr = 0, gu.current = null, n === null || n.return === null) {
                    q = 1, gr = t, J = null;
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
                        var g = xs(i);
                        if (g !== null) {
                            g.flags &= -257, Es(g, i, u, o, t), g.mode & 1 && Ss(o, a, t), t = g, s = a;
                            var y = t.updateQueue;
                            if (y === null) {
                                var w = new Set;
                                w.add(s), t.updateQueue = w;
                            } else y.add(s);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                Ss(o, a, t), Su();
                                break e;
                            }
                            s = Error(_(426));
                        }
                    } else if (A && u.mode & 1) {
                        var x = xs(i);
                        if (x !== null) {
                            !(x.flags & 65536) && (x.flags |= 256), Es(x, i, u, o, t), nu(Sn(s, u));
                            break e;
                        }
                    }
                    o = s = Sn(s, u), q !== 4 && (q = 2), qn === null ? qn = [
                        o
                    ] : qn.push(o), o = i;
                    do {
                        switch(o.tag){
                            case 3:
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var d = Hc(o, s, t);
                                vs(o, d);
                                break e;
                            case 1:
                                u = s;
                                var c = o.type, p = o.stateNode;
                                if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (yt === null || !yt.has(p)))) {
                                    o.flags |= 65536, t &= -t, o.lanes |= t;
                                    var v = Qc(o, u, t);
                                    vs(o, v);
                                    break e;
                                }
                        }
                        o = o.return;
                    }while (o !== null);
                }
                ff(n);
            } catch (S) {
                t = S, J === n && n !== null && (J = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function af() {
        var e = Cl.current;
        return Cl.current = El, e === null ? El : e;
    }
    function Su() {
        (q === 0 || q === 3 || q === 2) && (q = 4), te === null || !(Wt & 268435455) && !(Bl & 268435455) || st(te, re);
    }
    function Tl(e, t) {
        var n = M;
        M |= 2;
        var r = af();
        (te !== e || re !== t) && (Ke = null, Dt(e, t));
        do try {
            qp();
            break;
        } catch (l) {
            sf(e, l);
        }
        while (!0);
        if (lu(), M = n, Cl.current = r, J !== null) throw Error(_(261));
        return te = null, re = 0, q;
    }
    function qp() {
        for(; J !== null;)cf(J);
    }
    function bp() {
        for(; J !== null && !Ed();)cf(J);
    }
    function cf(e) {
        var t = pf(e.alternate, e, we);
        e.memoizedProps = e.pendingProps, t === null ? ff(e) : J = t, gu.current = null;
    }
    function ff(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = Kp(n, t), n !== null) {
                    n.flags &= 32767, J = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    q = 6, J = null;
                    return;
                }
            } else if (n = Qp(n, t, we), n !== null) {
                J = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                J = t;
                return;
            }
            J = t = e;
        }while (t !== null);
        q === 0 && (q = 5);
    }
    function Rt(e, t, n) {
        var r = D, l = ze.transition;
        try {
            ze.transition = null, D = 1, eh(e, t, n, r);
        } finally{
            ze.transition = l, D = r;
        }
        return null;
    }
    function eh(e, t, n, r) {
        do hn();
        while (ft !== null);
        if (M & 6) throw Error(_(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(_(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var o = n.lanes | n.childLanes;
        if (Id(e, o), e === te && (J = te = null, re = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Br || (Br = !0, hf(al, function() {
            return hn(), null;
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
            o = ze.transition, ze.transition = null;
            var i = D;
            D = 1;
            var u = M;
            M |= 4, gu.current = null, Yp(e, n), lf(n, e), _p(li), fl = !!ri, li = ri = null, e.current = n, Xp(n), Cd(), M = u, D = i, ze.transition = o;
        } else e.current = n;
        if (Br && (Br = !1, ft = e, Nl = l), o = e.pendingLanes, o === 0 && (yt = null), Td(n.stateNode), ge(e, Y()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
        if (Pl) throw Pl = !1, e = Ei, Ei = null, e;
        return Nl & 1 && e.tag !== 0 && hn(), o = e.pendingLanes, o & 1 ? e === Ci ? bn++ : (bn = 0, Ci = e) : bn = 0, Pt(), null;
    }
    function hn() {
        if (ft !== null) {
            var e = Ha(Nl), t = ze.transition, n = D;
            try {
                if (ze.transition = null, D = 16 > e ? 16 : e, ft === null) var r = !1;
                else {
                    if (e = ft, ft = null, Nl = 0, M & 6) throw Error(_(331));
                    var l = M;
                    for(M |= 4, E = e.current; E !== null;){
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
                                                Zn(8, h, o);
                                        }
                                        var f = h.child;
                                        if (f !== null) f.return = h, E = f;
                                        else for(; E !== null;){
                                            h = E;
                                            var m = h.sibling, g = h.return;
                                            if (tf(h), h === a) {
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
                                            var x = w.sibling;
                                            w.sibling = null, w = x;
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
                                    Zn(9, o, o.return);
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
                                        Wl(9, u);
                                }
                            } catch (S) {
                                K(u, u.return, S);
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
                    if (M = l, Pt(), Ve && typeof Ve.onPostCommitFiberRoot == "function") try {
                        Ve.onPostCommitFiberRoot(Ol, e);
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
    function Us(e, t, n) {
        t = Sn(n, t), t = Hc(e, t, 1), e = gt(e, t, 1), t = ce(), e !== null && (kr(e, 1, t), ge(e, t));
    }
    function K(e, t, n) {
        if (e.tag === 3) Us(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                Us(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (yt === null || !yt.has(r))) {
                    e = Sn(n, e), e = Qc(t, e, 1), t = gt(t, e, 1), e = ce(), t !== null && (kr(t, 1, e), ge(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function th(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, te === e && (re & n) === n && (q === 4 || q === 3 && (re & 130023424) === re && 500 > Y() - wu ? Dt(e, 0) : yu |= n), ge(e, t);
    }
    function df(e, t) {
        t === 0 && (e.mode & 1 ? (t = jr, jr <<= 1, !(jr & 130023424) && (jr = 4194304)) : t = 1);
        var n = ce();
        e = et(e, t), e !== null && (kr(e, t, n), ge(e, n));
    }
    function nh(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), df(e, n);
    }
    function rh(e, t) {
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
        r !== null && r.delete(t), df(e, n);
    }
    var pf;
    pf = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return he = !1, Hp(e, t, n);
            he = !!(e.flags & 131072);
        }
        else he = !1, A && t.flags & 1048576 && vc(t, yl, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                tl(e, t), e = t.pendingProps;
                var l = yn(t, se.current);
                pn(t, n), l = du(null, t, r, e, l, n);
                var o = pu();
                return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ve(r) ? (o = !0, vl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, uu(t), l.updater = Al, t.stateNode = l, l._reactInternals = t, pi(t, r, e, n), t = vi(null, t, r, !0, o, n)) : (t.tag = 0, A && o && eu(t), ae(null, t, l, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(tl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = oh(r), e = Oe(r, e), l){
                        case 0:
                            t = mi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Ns(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Cs(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Ps(null, t, r, Oe(r.type, e), n);
                            break e;
                    }
                    throw Error(_(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), mi(e, t, r, l, n);
            case 1:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), Ns(e, t, r, l, n);
            case 3:
                e: {
                    if (Xc(t), e === null) throw Error(_(387));
                    r = t.pendingProps, o = t.memoizedState, l = o.element, Sc(e, t), kl(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, o.isDehydrated) if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        l = Sn(Error(_(423)), t), t = Ts(e, t, r, n, l);
                        break e;
                    } else if (r !== l) {
                        l = Sn(Error(_(424)), t), t = Ts(e, t, r, n, l);
                        break e;
                    } else for(ke = vt(t.stateNode.containerInfo.firstChild), Se = t, A = !0, Me = null, n = _c(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
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
                return xc(t), e === null && ci(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, oi(r, l) ? i = null : o !== null && oi(r, o) && (t.flags |= 32), Yc(e, t), ae(e, t, i, n), t.child;
            case 6:
                return e === null && ci(t), null;
            case 13:
                return Jc(e, t, n);
            case 4:
                return su(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = _n(t, null, r, n) : ae(e, t, r, n), t.child;
            case 11:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), Cs(e, t, r, l, n);
            case 7:
                return ae(e, t, t.pendingProps, n), t.child;
            case 8:
                return ae(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return ae(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, U(wl, r._currentValue), r._currentValue = i, o !== null) if (Fe(o.value, i)) {
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
                                        s = Ze(-1, n & -n), s.tag = 2;
                                        var a = o.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var h = a.pending;
                                            h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                                        }
                                    }
                                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), fi(o.return, n, t), u.lanes |= n;
                                    break;
                                }
                                s = s.next;
                            }
                        } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (i = o.return, i === null) throw Error(_(341));
                            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), fi(i, n, t), i = o.sibling;
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
                return r = t.type, l = Oe(r, t.pendingProps), l = Oe(r.type, l), Ps(e, t, r, l, n);
            case 15:
                return Kc(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), tl(e, t), t.tag = 1, ve(r) ? (e = !0, vl(t)) : e = !1, pn(t, n), Vc(t, r, l), pi(t, r, l, n), vi(null, t, r, !0, e, n);
            case 19:
                return Zc(e, t, n);
            case 22:
                return Gc(e, t, n);
        }
        throw Error(_(156, t.tag));
    };
    function hf(e, t) {
        return Aa(e, t);
    }
    function lh(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Te(e, t, n, r) {
        return new lh(e, t, n, r);
    }
    function xu(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function oh(e) {
        if (typeof e == "function") return xu(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Bi) return 11;
            if (e === Vi) return 14;
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
    function ll(e, t, n, r, l, o) {
        var i = 2;
        if (r = e, typeof e == "function") xu(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case Jt:
                return Ut(n.children, l, o, t);
            case Wi:
                i = 8, l |= 8;
                break;
            case Uo:
                return e = Te(12, n, t, l | 2), e.elementType = Uo, e.lanes = o, e;
            case Fo:
                return e = Te(13, n, t, l), e.elementType = Fo, e.lanes = o, e;
            case $o:
                return e = Te(19, n, t, l), e.elementType = $o, e.lanes = o, e;
            case xa:
                return Vl(n, l, o, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case ka:
                        i = 10;
                        break e;
                    case Sa:
                        i = 9;
                        break e;
                    case Bi:
                        i = 11;
                        break e;
                    case Vi:
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
    function Vl(e, t, n, r) {
        return e = Te(22, e, r, t), e.elementType = xa, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function zo(e, t, n) {
        return e = Te(6, e, null, t), e.lanes = n, e;
    }
    function Lo(e, t, n) {
        return t = Te(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function ih(e, t, n, r, l) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ao(0), this.expirationTimes = ao(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ao(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
    }
    function Eu(e, t, n, r, l, o, i, u, s) {
        return e = new ih(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Te(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, uu(o), e;
    }
    function uh(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Xt,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function mf(e) {
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
            if (ve(n)) return hc(e, n, t);
        }
        return t;
    }
    function vf(e, t, n, r, l, o, i, u, s) {
        return e = Eu(n, r, !0, e, l, o, i, u, s), e.context = mf(null), n = e.current, r = ce(), l = wt(n), o = Ze(r, l), o.callback = t ?? null, gt(n, o, l), e.current.lanes = l, kr(e, l, r), ge(e, r), e;
    }
    function Hl(e, t, n, r) {
        var l = t.current, o = ce(), i = wt(l);
        return n = mf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ze(o, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gt(l, t, i), e !== null && (Ue(e, l, i, o), qr(e, l, i)), i;
    }
    function zl(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Fs(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Cu(e, t) {
        Fs(e, t), (e = e.alternate) && Fs(e, t);
    }
    function sh() {
        return null;
    }
    var gf = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function Pu(e) {
        this._internalRoot = e;
    }
    Ql.prototype.render = Pu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(_(409));
        Hl(e, t, null, null);
    };
    Ql.prototype.unmount = Pu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Bt(function() {
                Hl(null, e, null, null);
            }), t[be] = null;
        }
    };
    function Ql(e) {
        this._internalRoot = e;
    }
    Ql.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Ga();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
            ut.splice(n, 0, e), n === 0 && Xa(e);
        }
    };
    function Nu(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Kl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function $s() {}
    function ah(e, t, n, r, l) {
        if (l) {
            if (typeof r == "function") {
                var o = r;
                r = function() {
                    var a = zl(i);
                    o.call(a);
                };
            }
            var i = vf(t, r, e, 0, null, !1, !1, "", $s);
            return e._reactRootContainer = i, e[be] = i.current, ar(e.nodeType === 8 ? e.parentNode : e), Bt(), i;
        }
        for(; l = e.lastChild;)e.removeChild(l);
        if (typeof r == "function") {
            var u = r;
            r = function() {
                var a = zl(s);
                u.call(a);
            };
        }
        var s = Eu(e, 0, !1, null, null, !1, !1, "", $s);
        return e._reactRootContainer = s, e[be] = s.current, ar(e.nodeType === 8 ? e.parentNode : e), Bt(function() {
            Hl(t, s, n, r);
        }), s;
    }
    function Gl(e, t, n, r, l) {
        var o = n._reactRootContainer;
        if (o) {
            var i = o;
            if (typeof l == "function") {
                var u = l;
                l = function() {
                    var s = zl(i);
                    u.call(s);
                };
            }
            Hl(t, i, e, l);
        } else i = ah(n, t, e, l, r);
        return zl(i);
    }
    Qa = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Vn(t.pendingLanes);
                    n !== 0 && (Ki(t, n | 1), ge(t, Y()), !(M & 6) && (xn = Y() + 500, Pt()));
                }
                break;
            case 13:
                Bt(function() {
                    var r = et(e, 1);
                    if (r !== null) {
                        var l = ce();
                        Ue(r, e, 1, l);
                    }
                }), Cu(e, 1);
        }
    };
    Gi = function(e) {
        if (e.tag === 13) {
            var t = et(e, 134217728);
            if (t !== null) {
                var n = ce();
                Ue(t, e, 134217728, n);
            }
            Cu(e, 134217728);
        }
    };
    Ka = function(e) {
        if (e.tag === 13) {
            var t = wt(e), n = et(e, t);
            if (n !== null) {
                var r = ce();
                Ue(n, e, t, r);
            }
            Cu(e, t);
        }
    };
    Ga = function() {
        return D;
    };
    Ya = function(e, t) {
        var n = D;
        try {
            return D = e, t();
        } finally{
            D = n;
        }
    };
    Xo = function(e, t, n) {
        switch(t){
            case "input":
                if (Bo(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var l = Ul(r);
                            if (!l) throw Error(_(90));
                            Ca(r), Bo(r, l);
                        }
                    }
                }
                break;
            case "textarea":
                Na(e, n);
                break;
            case "select":
                t = n.value, t != null && an(e, !!n.multiple, t, !1);
        }
    };
    Ia = _u;
    Ma = Bt;
    var ch = {
        usingClientEntryPoint: !1,
        Events: [
            xr,
            en,
            Ul,
            ja,
            Oa,
            _u
        ]
    }, An = {
        findFiberByHostInstance: Ot,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, fh = {
        bundleType: An.bundleType,
        version: An.version,
        rendererPackageName: An.rendererPackageName,
        rendererConfig: An.rendererConfig,
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
            return e = Fa(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: An.findFiberByHostInstance || sh,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Vr.isDisabled && Vr.supportsFiber) try {
            Ol = Vr.inject(fh), Ve = Vr;
        } catch  {}
    }
    Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ch;
    Ee.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Nu(t)) throw Error(_(200));
        return uh(e, t, null, n);
    };
    Ee.createRoot = function(e, t) {
        if (!Nu(e)) throw Error(_(299));
        var n = !1, r = "", l = gf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Eu(e, 1, !1, null, null, n, !1, r, l), e[be] = t.current, ar(e.nodeType === 8 ? e.parentNode : e), new Pu(t);
    };
    Ee.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
        return e = Fa(t), e = e === null ? null : e.stateNode, e;
    };
    Ee.flushSync = function(e) {
        return Bt(e);
    };
    Ee.hydrate = function(e, t, n) {
        if (!Kl(t)) throw Error(_(200));
        return Gl(null, e, t, !0, n);
    };
    Ee.hydrateRoot = function(e, t, n) {
        if (!Nu(e)) throw Error(_(405));
        var r = n != null && n.hydratedSources || null, l = !1, o = "", i = gf;
        if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = vf(t, null, e, 1, n ?? null, l, !1, o, i), e[be] = t.current, ar(e), r) for(e = 0; e < r.length; e++)n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            l
        ] : t.mutableSourceEagerHydrationData.push(n, l);
        return new Ql(t);
    };
    Ee.render = function(e, t, n) {
        if (!Kl(t)) throw Error(_(200));
        return Gl(null, e, t, !1, n);
    };
    Ee.unmountComponentAtNode = function(e) {
        if (!Kl(e)) throw Error(_(40));
        return e._reactRootContainer ? (Bt(function() {
            Gl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[be] = null;
            });
        }), !0) : !1;
    };
    Ee.unstable_batchedUpdates = _u;
    Ee.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Kl(n)) throw Error(_(200));
        if (e == null || e._reactInternals === void 0) throw Error(_(38));
        return Gl(e, t, n, !1, r);
    };
    Ee.version = "18.3.1-next-f1338f8080-20240426";
    function yf() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yf);
        } catch (e) {
            console.error(e);
        }
    }
    yf(), ga.exports = Ee;
    var dh = ga.exports, As = dh;
    Mo.createRoot = As.createRoot, Mo.hydrateRoot = As.hydrateRoot;
    function yr() {
        return yr = Object.assign ? Object.assign.bind() : function(e) {
            for(var t = 1; t < arguments.length; t++){
                var n = arguments[t];
                for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, yr.apply(this, arguments);
    }
    var dt;
    (function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
    })(dt || (dt = {}));
    const Ws = "popstate";
    function ph(e) {
        e === void 0 && (e = {});
        function t(l, o) {
            let { pathname: i = "/", search: u = "", hash: s = "" } = Qt(l.location.hash.substr(1));
            return !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i), Ti("", {
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
            return u + "#" + (typeof o == "string" ? o : Ll(o));
        }
        function r(l, o) {
            Yl(l.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(o) + ")");
        }
        return mh(t, n, r, e);
    }
    function H(e, t) {
        if (e === !1 || e === null || typeof e > "u") throw new Error(t);
    }
    function Yl(e, t) {
        if (!e) {
            typeof console < "u" && console.warn(t);
            try {
                throw new Error(t);
            } catch  {}
        }
    }
    function hh() {
        return Math.random().toString(36).substr(2, 8);
    }
    function Bs(e, t) {
        return {
            usr: e.state,
            key: e.key,
            idx: t
        };
    }
    function Ti(e, t, n, r) {
        return n === void 0 && (n = null), yr({
            pathname: typeof e == "string" ? e : e.pathname,
            search: "",
            hash: ""
        }, typeof t == "string" ? Qt(t) : t, {
            state: n,
            key: t && t.key || r || hh()
        });
    }
    function Ll(e) {
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
    function mh(e, t, n, r) {
        r === void 0 && (r = {});
        let { window: l = document.defaultView, v5Compat: o = !1 } = r, i = l.history, u = dt.Pop, s = null, a = h();
        a == null && (a = 0, i.replaceState(yr({}, i.state, {
            idx: a
        }), ""));
        function h() {
            return (i.state || {
                idx: null
            }).idx;
        }
        function f() {
            u = dt.Pop;
            let x = h(), d = x == null ? null : x - a;
            a = x, s && s({
                action: u,
                location: w.location,
                delta: d
            });
        }
        function m(x, d) {
            u = dt.Push;
            let c = Ti(w.location, x, d);
            n && n(c, x), a = h() + 1;
            let p = Bs(c, a), v = w.createHref(c);
            try {
                i.pushState(p, "", v);
            } catch (S) {
                if (S instanceof DOMException && S.name === "DataCloneError") throw S;
                l.location.assign(v);
            }
            o && s && s({
                action: u,
                location: w.location,
                delta: 1
            });
        }
        function g(x, d) {
            u = dt.Replace;
            let c = Ti(w.location, x, d);
            n && n(c, x), a = h();
            let p = Bs(c, a), v = w.createHref(c);
            i.replaceState(p, "", v), o && s && s({
                action: u,
                location: w.location,
                delta: 0
            });
        }
        function y(x) {
            let d = l.location.origin !== "null" ? l.location.origin : l.location.href, c = typeof x == "string" ? x : Ll(x);
            return c = c.replace(/ $/, "%20"), H(d, "No window.location.(origin|href) available to create URL for href: " + c), new URL(c, d);
        }
        let w = {
            get action () {
                return u;
            },
            get location () {
                return e(l, i);
            },
            listen (x) {
                if (s) throw new Error("A history only accepts one active listener");
                return l.addEventListener(Ws, f), s = x, ()=>{
                    l.removeEventListener(Ws, f), s = null;
                };
            },
            createHref (x) {
                return t(l, x);
            },
            createURL: y,
            encodeLocation (x) {
                let d = y(x);
                return {
                    pathname: d.pathname,
                    search: d.search,
                    hash: d.hash
                };
            },
            push: m,
            replace: g,
            go (x) {
                return i.go(x);
            }
        };
        return w;
    }
    var Vs;
    (function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
    })(Vs || (Vs = {}));
    function vh(e, t, n) {
        return n === void 0 && (n = "/"), gh(e, t, n);
    }
    function gh(e, t, n, r) {
        let l = typeof t == "string" ? Qt(t) : t, o = En(l.pathname || "/", n);
        if (o == null) return null;
        let i = wf(e);
        yh(i);
        let u = null;
        for(let s = 0; u == null && s < i.length; ++s){
            let a = zh(o);
            u = Nh(i[s], a);
        }
        return u;
    }
    function wf(e, t, n, r) {
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
            o.children && o.children.length > 0 && (H(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + a + '".')), wf(o.children, t, h, a)), !(o.path == null && !o.index) && t.push({
                path: a,
                score: Ch(a, o.index),
                routesMeta: h
            });
        };
        return e.forEach((o, i)=>{
            var u;
            if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
            else for (let s of _f(o.path))l(o, i, s);
        }), t;
    }
    function _f(e) {
        let t = e.split("/");
        if (t.length === 0) return [];
        let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
        if (r.length === 0) return l ? [
            o,
            ""
        ] : [
            o
        ];
        let i = _f(r.join("/")), u = [];
        return u.push(...i.map((s)=>s === "" ? o : [
                o,
                s
            ].join("/"))), l && u.push(...i), u.map((s)=>e.startsWith("/") && s === "" ? "/" : s);
    }
    function yh(e) {
        e.sort((t, n)=>t.score !== n.score ? n.score - t.score : Ph(t.routesMeta.map((r)=>r.childrenIndex), n.routesMeta.map((r)=>r.childrenIndex)));
    }
    const wh = /^:[\w-]+$/, _h = 3, kh = 2, Sh = 1, xh = 10, Eh = -2, Hs = (e)=>e === "*";
    function Ch(e, t) {
        let n = e.split("/"), r = n.length;
        return n.some(Hs) && (r += Eh), t && (r += kh), n.filter((l)=>!Hs(l)).reduce((l, o)=>l + (wh.test(o) ? _h : o === "" ? Sh : xh), r);
    }
    function Ph(e, t) {
        return e.length === t.length && e.slice(0, -1).every((r, l)=>r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0;
    }
    function Nh(e, t, n) {
        let { routesMeta: r } = e, l = {}, o = "/", i = [];
        for(let u = 0; u < r.length; ++u){
            let s = r[u], a = u === r.length - 1, h = o === "/" ? t : t.slice(o.length) || "/", f = zi({
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
                pathnameBase: Ih(kt([
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
    function zi(e, t) {
        typeof e == "string" && (e = {
            path: e,
            caseSensitive: !1,
            end: !0
        });
        let [n, r] = Th(e.path, e.caseSensitive, e.end), l = t.match(n);
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
    function Th(e, t, n) {
        t === void 0 && (t = !1), n === void 0 && (n = !0), Yl(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
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
    function zh(e) {
        try {
            return e.split("/").map((t)=>decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
        } catch (t) {
            return Yl(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
        }
    }
    function En(e, t) {
        if (t === "/") return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
        return r && r !== "/" ? null : e.slice(n) || "/";
    }
    const Lh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Rh = (e)=>Lh.test(e);
    function jh(e, t) {
        t === void 0 && (t = "/");
        let { pathname: n, search: r = "", hash: l = "" } = typeof e == "string" ? Qt(e) : e, o;
        if (n) if (Rh(n)) o = n;
        else {
            if (n.includes("//")) {
                let i = n;
                n = n.replace(/\/\/+/g, "/"), Yl(!1, "Pathnames cannot have embedded double slashes - normalizing " + (i + " -> " + n));
            }
            n.startsWith("/") ? o = Qs(n.substring(1), "/") : o = Qs(n, t);
        }
        else o = t;
        return {
            pathname: o,
            search: Mh(r),
            hash: Dh(l)
        };
    }
    function Qs(e, t) {
        let n = t.replace(/\/+$/, "").split("/");
        return e.split("/").forEach((l)=>{
            l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
        }), n.length > 1 ? n.join("/") : "/";
    }
    function Ro(e, t, n, r) {
        return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
    }
    function Oh(e) {
        return e.filter((t, n)=>n === 0 || t.route.path && t.route.path.length > 0);
    }
    function Tu(e, t) {
        let n = Oh(e);
        return t ? n.map((r, l)=>l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r)=>r.pathnameBase);
    }
    function zu(e, t, n, r) {
        r === void 0 && (r = !1);
        let l;
        typeof e == "string" ? l = Qt(e) : (l = yr({}, e), H(!l.pathname || !l.pathname.includes("?"), Ro("?", "pathname", "search", l)), H(!l.pathname || !l.pathname.includes("#"), Ro("#", "pathname", "hash", l)), H(!l.search || !l.search.includes("#"), Ro("#", "search", "hash", l)));
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
        let s = jh(l, u), a = i && i !== "/" && i.endsWith("/"), h = (o || i === ".") && n.endsWith("/");
        return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
    }
    const kt = (e)=>e.join("/").replace(/\/\/+/g, "/"), Ih = (e)=>e.replace(/\/+$/, "").replace(/^\/*/, "/"), Mh = (e)=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Dh = (e)=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
    function Uh(e) {
        return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
    }
    const kf = [
        "post",
        "put",
        "patch",
        "delete"
    ];
    new Set(kf);
    const Fh = [
        "get",
        ...kf
    ];
    new Set(Fh);
    function wr() {
        return wr = Object.assign ? Object.assign.bind() : function(e) {
            for(var t = 1; t < arguments.length; t++){
                var n = arguments[t];
                for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, wr.apply(this, arguments);
    }
    const Xl = k.createContext(null), Sf = k.createContext(null), rt = k.createContext(null), Jl = k.createContext(null), Nt = k.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }), xf = k.createContext(null);
    function $h(e, t) {
        let { relative: n } = t === void 0 ? {} : t;
        zn() || H(!1);
        let { basename: r, navigator: l } = k.useContext(rt), { hash: o, pathname: i, search: u } = Zl(e, {
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
    function Ef(e) {
        k.useContext(rt).static || k.useLayoutEffect(e);
    }
    function Cf() {
        let { isDataRoute: e } = k.useContext(Nt);
        return e ? qh() : Ah();
    }
    function Ah() {
        zn() || H(!1);
        let e = k.useContext(Xl), { basename: t, future: n, navigator: r } = k.useContext(rt), { matches: l } = k.useContext(Nt), { pathname: o } = Kt(), i = JSON.stringify(Tu(l, n.v7_relativeSplatPath)), u = k.useRef(!1);
        return Ef(()=>{
            u.current = !0;
        }), k.useCallback(function(a, h) {
            if (h === void 0 && (h = {}), !u.current) return;
            if (typeof a == "number") {
                r.go(a);
                return;
            }
            let f = zu(a, JSON.parse(i), o, h.relative === "path");
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
    function Zl(e, t) {
        let { relative: n } = t === void 0 ? {} : t, { future: r } = k.useContext(rt), { matches: l } = k.useContext(Nt), { pathname: o } = Kt(), i = JSON.stringify(Tu(l, r.v7_relativeSplatPath));
        return k.useMemo(()=>zu(e, JSON.parse(i), o, n === "path"), [
            e,
            i,
            o,
            n
        ]);
    }
    function Wh(e, t) {
        return Bh(e, t);
    }
    function Bh(e, t, n, r) {
        zn() || H(!1);
        let { navigator: l } = k.useContext(rt), { matches: o } = k.useContext(Nt), i = o[o.length - 1], u = i ? i.params : {};
        i && i.pathname;
        let s = i ? i.pathnameBase : "/";
        i && i.route;
        let a = Kt(), h;
        if (t) {
            var f;
            let x = typeof t == "string" ? Qt(t) : t;
            s === "/" || (f = x.pathname) != null && f.startsWith(s) || H(!1), h = x;
        } else h = a;
        let m = h.pathname || "/", g = m;
        if (s !== "/") {
            let x = s.replace(/^\//, "").split("/");
            g = "/" + m.replace(/^\//, "").split("/").slice(x.length).join("/");
        }
        let y = vh(e, {
            pathname: g
        }), w = Gh(y && y.map((x)=>Object.assign({}, x, {
                params: Object.assign({}, u, x.params),
                pathname: kt([
                    s,
                    l.encodeLocation ? l.encodeLocation(x.pathname).pathname : x.pathname
                ]),
                pathnameBase: x.pathnameBase === "/" ? s : kt([
                    s,
                    l.encodeLocation ? l.encodeLocation(x.pathnameBase).pathname : x.pathnameBase
                ])
            })), o, n, r);
        return t && w ? k.createElement(Jl.Provider, {
            value: {
                location: wr({
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
    function Vh() {
        let e = Zh(), t = Uh(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, l = {
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
    const Hh = k.createElement(Vh, null);
    class Qh extends k.Component {
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
            }, k.createElement(xf.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    }
    function Kh(e) {
        let { routeContext: t, match: n, children: r } = e, l = k.useContext(Xl);
        return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), k.createElement(Nt.Provider, {
            value: t
        }, r);
    }
    function Gh(e, t, n, r) {
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
            let g, y = !1, w = null, x = null;
            n && (g = u && f.route.id ? u[f.route.id] : void 0, w = f.route.errorElement || Hh, s && (a < 0 && m === 0 ? (bh("route-fallback"), y = !0, x = null) : a === m && (y = !0, x = f.route.hydrateFallbackElement || null)));
            let d = t.concat(i.slice(0, m + 1)), c = ()=>{
                let p;
                return g ? p = w : y ? p = x : f.route.Component ? p = k.createElement(f.route.Component, null) : f.route.element ? p = f.route.element : p = h, k.createElement(Kh, {
                    match: f,
                    routeContext: {
                        outlet: h,
                        matches: d,
                        isDataRoute: n != null
                    },
                    children: p
                });
            };
            return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0) ? k.createElement(Qh, {
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
    var Pf = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
    }(Pf || {}), Nf = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
    }(Nf || {});
    function Yh(e) {
        let t = k.useContext(Xl);
        return t || H(!1), t;
    }
    function Xh(e) {
        let t = k.useContext(Sf);
        return t || H(!1), t;
    }
    function Jh(e) {
        let t = k.useContext(Nt);
        return t || H(!1), t;
    }
    function Tf(e) {
        let t = Jh(), n = t.matches[t.matches.length - 1];
        return n.route.id || H(!1), n.route.id;
    }
    function Zh() {
        var e;
        let t = k.useContext(xf), n = Xh(), r = Tf();
        return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
    }
    function qh() {
        let { router: e } = Yh(Pf.UseNavigateStable), t = Tf(Nf.UseNavigateStable), n = k.useRef(!1);
        return Ef(()=>{
            n.current = !0;
        }), k.useCallback(function(l, o) {
            o === void 0 && (o = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, wr({
                fromRouteId: t
            }, o)));
        }, [
            e,
            t
        ]);
    }
    const Ks = {};
    function bh(e, t, n) {
        Ks[e] || (Ks[e] = !0);
    }
    function em(e, t) {
        e?.v7_startTransition, e?.v7_relativeSplatPath;
    }
    function Gs(e) {
        let { to: t, replace: n, state: r, relative: l } = e;
        zn() || H(!1);
        let { future: o, static: i } = k.useContext(rt), { matches: u } = k.useContext(Nt), { pathname: s } = Kt(), a = Cf(), h = zu(t, Tu(u, o.v7_relativeSplatPath), s, l === "path"), f = JSON.stringify(h);
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
    function tm(e) {
        let { basename: t = "/", children: n = null, location: r, navigationType: l = dt.Pop, navigator: o, static: i = !1, future: u } = e;
        zn() && H(!1);
        let s = t.replace(/^\/*/, "/"), a = k.useMemo(()=>({
                basename: s,
                navigator: o,
                static: i,
                future: wr({
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
            let x = En(h, s);
            return x == null ? null : {
                location: {
                    pathname: x,
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
    function nm(e) {
        let { children: t, location: n } = e;
        return Wh(Li(t), n);
    }
    new Promise(()=>{});
    function Li(e, t) {
        t === void 0 && (t = []);
        let n = [];
        return k.Children.forEach(e, (r, l)=>{
            if (!k.isValidElement(r)) return;
            let o = [
                ...t,
                l
            ];
            if (r.type === k.Fragment) {
                n.push.apply(n, Li(r.props.children, o));
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
            r.props.children && (i.children = Li(r.props.children, o)), n.push(i);
        }), n;
    }
    function Rl() {
        return Rl = Object.assign ? Object.assign.bind() : function(e) {
            for(var t = 1; t < arguments.length; t++){
                var n = arguments[t];
                for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, Rl.apply(this, arguments);
    }
    function zf(e, t) {
        if (e == null) return {};
        var n = {}, r = Object.keys(e), l, o;
        for(o = 0; o < r.length; o++)l = r[o], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
        return n;
    }
    function rm(e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
    }
    function lm(e, t) {
        return e.button === 0 && (!t || t === "_self") && !rm(e);
    }
    const om = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "viewTransition"
    ], im = [
        "aria-current",
        "caseSensitive",
        "className",
        "end",
        "style",
        "to",
        "viewTransition",
        "children"
    ], um = "6";
    try {
        window.__reactRouterVersion = um;
    } catch  {}
    const sm = k.createContext({
        isTransitioning: !1
    }), am = "startTransition", Ys = td[am];
    function cm(e) {
        let { basename: t, children: n, future: r, window: l } = e, o = k.useRef();
        o.current == null && (o.current = ph({
            window: l,
            v5Compat: !0
        }));
        let i = o.current, [u, s] = k.useState({
            action: i.action,
            location: i.location
        }), { v7_startTransition: a } = r || {}, h = k.useCallback((f)=>{
            a && Ys ? Ys(()=>s(f)) : s(f);
        }, [
            s,
            a
        ]);
        return k.useLayoutEffect(()=>i.listen(h), [
            i,
            h
        ]), k.useEffect(()=>em(r), [
            r
        ]), k.createElement(tm, {
            basename: t,
            children: n,
            location: u.location,
            navigationType: u.action,
            navigator: i,
            future: r
        });
    }
    const fm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", dm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, pm = k.forwardRef(function(t, n) {
        let { onClick: r, relative: l, reloadDocument: o, replace: i, state: u, target: s, to: a, preventScrollReset: h, viewTransition: f } = t, m = zf(t, om), { basename: g } = k.useContext(rt), y, w = !1;
        if (typeof a == "string" && dm.test(a) && (y = a, fm)) try {
            let p = new URL(window.location.href), v = a.startsWith("//") ? new URL(p.protocol + a) : new URL(a), S = En(v.pathname, g);
            v.origin === p.origin && S != null ? a = S + v.search + v.hash : w = !0;
        } catch  {}
        let x = $h(a, {
            relative: l
        }), d = vm(a, {
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
        return k.createElement("a", Rl({}, m, {
            href: y || x,
            onClick: w || o ? r : c,
            ref: n,
            target: s
        }));
    }), hm = k.forwardRef(function(t, n) {
        let { "aria-current": r = "page", caseSensitive: l = !1, className: o = "", end: i = !1, style: u, to: s, viewTransition: a, children: h } = t, f = zf(t, im), m = Zl(s, {
            relative: f.relative
        }), g = Kt(), y = k.useContext(Sf), { navigator: w, basename: x } = k.useContext(rt), d = y != null && gm(m) && a === !0, c = w.encodeLocation ? w.encodeLocation(m).pathname : m.pathname, p = g.pathname, v = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
        l || (p = p.toLowerCase(), v = v ? v.toLowerCase() : null, c = c.toLowerCase()), v && x && (v = En(v, x) || v);
        const S = c !== "/" && c.endsWith("/") ? c.length - 1 : c.length;
        let N = p === c || !i && p.startsWith(c) && p.charAt(S) === "/", T = v != null && (v === c || !i && v.startsWith(c) && v.charAt(c.length) === "/"), z = {
            isActive: N,
            isPending: T,
            isTransitioning: d
        }, W = N ? r : void 0, j;
        typeof o == "function" ? j = o(z) : j = [
            o,
            N ? "active" : null,
            T ? "pending" : null,
            d ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let ye = typeof u == "function" ? u(z) : u;
        return k.createElement(pm, Rl({}, f, {
            "aria-current": W,
            className: j,
            ref: n,
            style: ye,
            to: s,
            viewTransition: a
        }), typeof h == "function" ? h(z) : h);
    });
    var Ri;
    (function(e) {
        e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
    })(Ri || (Ri = {}));
    var Xs;
    (function(e) {
        e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
    })(Xs || (Xs = {}));
    function mm(e) {
        let t = k.useContext(Xl);
        return t || H(!1), t;
    }
    function vm(e, t) {
        let { target: n, replace: r, state: l, preventScrollReset: o, relative: i, viewTransition: u } = t === void 0 ? {} : t, s = Cf(), a = Kt(), h = Zl(e, {
            relative: i
        });
        return k.useCallback((f)=>{
            if (lm(f, n)) {
                f.preventDefault();
                let m = r !== void 0 ? r : Ll(a) === Ll(h);
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
    function gm(e, t) {
        t === void 0 && (t = {});
        let n = k.useContext(sm);
        n == null && H(!1);
        let { basename: r } = mm(Ri.useViewTransitionState), l = Zl(e, {
            relative: t.relative
        });
        if (!n.isTransitioning) return !1;
        let o = En(n.currentLocation.pathname, r) || n.currentLocation.pathname, i = En(n.nextLocation.pathname, r) || n.nextLocation.pathname;
        return zi(l.pathname, i) != null || zi(l.pathname, o) != null;
    }
    const ym = "modulepreload", wm = function(e) {
        return "/tokenlearn/" + e;
    }, Js = {}, Ln = function(t, n, r) {
        let l = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), u = i?.nonce || i?.getAttribute("nonce");
            l = Promise.allSettled(n.map((s)=>{
                if (s = wm(s), s in Js) return;
                Js[s] = !0;
                const a = s.endsWith(".css"), h = a ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${s}"]${h}`)) return;
                const f = document.createElement("link");
                if (f.rel = a ? "stylesheet" : ym, a || (f.as = "script"), f.crossOrigin = "", f.href = s, u && f.setAttribute("nonce", u), document.head.appendChild(f), a) return new Promise((m, g)=>{
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
    }, _m = {}, Zs = (e)=>{
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
                (_m ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear();
            }
        }, a = t = e(r, l, s);
        return s;
    }, km = (e)=>e ? Zs(e) : Zs;
    var Lf = {
        exports: {}
    }, Rf = {}, jf = {
        exports: {}
    }, Of = {};
    var Cn = k;
    function Sm(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xm = typeof Object.is == "function" ? Object.is : Sm, Em = Cn.useState, Cm = Cn.useEffect, Pm = Cn.useLayoutEffect, Nm = Cn.useDebugValue;
    function Tm(e, t) {
        var n = t(), r = Em({
            inst: {
                value: n,
                getSnapshot: t
            }
        }), l = r[0].inst, o = r[1];
        return Pm(function() {
            l.value = n, l.getSnapshot = t, jo(l) && o({
                inst: l
            });
        }, [
            e,
            n,
            t
        ]), Cm(function() {
            return jo(l) && o({
                inst: l
            }), e(function() {
                jo(l) && o({
                    inst: l
                });
            });
        }, [
            e
        ]), Nm(n), n;
    }
    function jo(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !xm(e, n);
        } catch  {
            return !0;
        }
    }
    function zm(e, t) {
        return t();
    }
    var Lm = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? zm : Tm;
    Of.useSyncExternalStore = Cn.useSyncExternalStore !== void 0 ? Cn.useSyncExternalStore : Lm;
    jf.exports = Of;
    var Rm = jf.exports;
    var ql = k, jm = Rm;
    function Om(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Im = typeof Object.is == "function" ? Object.is : Om, Mm = jm.useSyncExternalStore, Dm = ql.useRef, Um = ql.useEffect, Fm = ql.useMemo, $m = ql.useDebugValue;
    Rf.useSyncExternalStoreWithSelector = function(e, t, n, r, l) {
        var o = Dm(null);
        if (o.current === null) {
            var i = {
                hasValue: !1,
                value: null
            };
            o.current = i;
        } else i = o.current;
        o = Fm(function() {
            function s(g) {
                if (!a) {
                    if (a = !0, h = g, g = r(g), l !== void 0 && i.hasValue) {
                        var y = i.value;
                        if (l(y, g)) return f = y;
                    }
                    return f = g;
                }
                if (y = f, Im(h, g)) return y;
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
        var u = Mm(e, o[0], o[1]);
        return Um(function() {
            i.hasValue = !0, i.value = u;
        }, [
            u
        ]), $m(u), u;
    };
    Lf.exports = Rf;
    var Am = Lf.exports;
    const Wm = oa(Am), If = {}, { useDebugValue: Bm } = Ui, { useSyncExternalStoreWithSelector: Vm } = Wm;
    let qs = !1;
    const Hm = (e)=>e;
    function Qm(e, t = Hm, n) {
        (If ? "production" : void 0) !== "production" && n && !qs && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), qs = !0);
        const r = Vm(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
        return Bm(r), r;
    }
    const bs = (e)=>{
        (If ? "production" : void 0) !== "production" && typeof e != "function" && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
        const t = typeof e == "function" ? km(e) : e, n = (r, l)=>Qm(t, r, l);
        return Object.assign(n, t), n;
    }, Km = (e)=>e ? bs(e) : bs, Gm = "/tokenlearn/assets/tiktoken_bg-YjhjrOPs.wasm", Ym = async (e = {}, t)=>{
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
    function Xm(e) {
        P = e;
    }
    const Jm = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    let Mf = new Jm("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    Mf.decode();
    let Hr = null;
    function mn() {
        return (Hr === null || Hr.byteLength === 0) && (Hr = new Uint8Array(P.memory.buffer)), Hr;
    }
    function bl(e, t) {
        return e = e >>> 0, Mf.decode(mn().subarray(e, e + t));
    }
    const Ye = new Array(128).fill(void 0);
    Ye.push(void 0, null, !0, !1);
    let er = Ye.length;
    function Be(e) {
        er === Ye.length && Ye.push(Ye.length + 1);
        const t = er;
        return er = Ye[t], Ye[t] = e, t;
    }
    function Df(e, t) {
        try {
            return e.apply(this, t);
        } catch (n) {
            P.__wbindgen_export_0(Be(n));
        }
    }
    function eo(e) {
        return Ye[e];
    }
    function Zm(e) {
        e < 132 || (Ye[e] = er, er = e);
    }
    function sn(e) {
        const t = eo(e);
        return Zm(e), t;
    }
    let _e = 0;
    const qm = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
    let ol = new qm("utf-8");
    const bm = typeof ol.encodeInto == "function" ? function(e, t) {
        return ol.encodeInto(e, t);
    } : function(e, t) {
        const n = ol.encode(e);
        return t.set(n), {
            read: e.length,
            written: n.length
        };
    };
    function jt(e, t, n) {
        if (n === void 0) {
            const u = ol.encode(e), s = t(u.length, 1) >>> 0;
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
            const u = mn().subarray(l + i, l + r), s = bm(e, u);
            i += s.written, l = n(l, r, i, 1) >>> 0;
        }
        return _e = i, l;
    }
    function ev(e) {
        return e == null;
    }
    let Yt = null;
    function X() {
        return (Yt === null || Yt.buffer.detached === !0 || Yt.buffer.detached === void 0 && Yt.buffer !== P.memory.buffer) && (Yt = new DataView(P.memory.buffer)), Yt;
    }
    let Qr = null;
    function Uf() {
        return (Qr === null || Qr.byteLength === 0) && (Qr = new Uint32Array(P.memory.buffer)), Qr;
    }
    function ea(e, t) {
        return e = e >>> 0, Uf().subarray(e / 4, e / 4 + t);
    }
    function tv(e, t) {
        const n = t(e.length * 1, 1) >>> 0;
        return mn().set(e, n / 1), _e = e.length, n;
    }
    function nv(e, t) {
        const n = t(e.length * 4, 4) >>> 0;
        return Uf().set(e, n / 4), _e = e.length, n;
    }
    function ta(e, t) {
        return e = e >>> 0, mn().subarray(e / 1, e / 1 + t);
    }
    function rv(e, t) {
        if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
        try {
            const o = P.__wbindgen_add_to_stack_pointer(-16), i = jt(e, P.__wbindgen_export_1, P.__wbindgen_export_2), u = _e;
            P.get_encoding(o, i, u, Be(t));
            var n = X().getInt32(o + 4 * 0, !0), r = X().getInt32(o + 4 * 1, !0), l = X().getInt32(o + 4 * 2, !0);
            if (l) throw sn(r);
            return Lu.__wrap(n);
        } finally{
            P.__wbindgen_add_to_stack_pointer(16);
        }
    }
    const Oo = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>P.__wbg_tiktoken_free(e >>> 0, 1));
    class Lu {
        static __wrap(t) {
            t = t >>> 0;
            const n = Object.create(Lu.prototype);
            return n.__wbg_ptr = t, Oo.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Oo.unregister(this), t;
        }
        free() {
            if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
            const t = this.__destroy_into_raw();
            P.__wbg_tiktoken_free(t, 0);
        }
        constructor(t, n, r){
            if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
            const l = jt(t, P.__wbindgen_export_1, P.__wbindgen_export_2), o = _e, i = jt(r, P.__wbindgen_export_1, P.__wbindgen_export_2), u = _e, s = P.tiktoken_new(l, o, Be(n), i, u);
            return this.__wbg_ptr = s >>> 0, Oo.register(this, this.__wbg_ptr, this), this;
        }
        get name() {
            try {
                const r = P.__wbindgen_add_to_stack_pointer(-16);
                P.tiktoken_name(r, this.__wbg_ptr);
                var t = X().getInt32(r + 4 * 0, !0), n = X().getInt32(r + 4 * 1, !0);
                let l;
                return t !== 0 && (l = bl(t, n).slice(), P.__wbindgen_export_3(t, n * 1, 1)), l;
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
                var s = ea(l, o).slice();
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
                var n = X().getInt32(o + 4 * 0, !0), r = X().getInt32(o + 4 * 1, !0), l = ea(n, r).slice();
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
            const n = tv(t, P.__wbindgen_export_1), r = _e;
            return P.tiktoken_encode_single_token(this.__wbg_ptr, n, r) >>> 0;
        }
        decode(t) {
            if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
            try {
                const o = P.__wbindgen_add_to_stack_pointer(-16), i = nv(t, P.__wbindgen_export_1), u = _e;
                P.tiktoken_decode(o, this.__wbg_ptr, i, u);
                var n = X().getInt32(o + 4 * 0, !0), r = X().getInt32(o + 4 * 1, !0), l = ta(n, r).slice();
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
                var n = X().getInt32(o + 4 * 0, !0), r = X().getInt32(o + 4 * 1, !0), l = ta(n, r).slice();
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
    function lv() {
        return Df(function(e, t) {
            const n = JSON.parse(bl(e, t));
            return Be(n);
        }, arguments);
    }
    function ov() {
        return Df(function(e) {
            const t = JSON.stringify(eo(e));
            return Be(t);
        }, arguments);
    }
    function iv(e, t) {
        const n = new Error(bl(e, t));
        return Be(n);
    }
    function uv(e) {
        return eo(e) === void 0;
    }
    function sv(e) {
        sn(e);
    }
    function av(e, t) {
        if (P == null) throw new Error("tiktoken: WASM binary has not been propery initialized.");
        const n = eo(t), r = typeof n == "string" ? n : void 0;
        var l = ev(r) ? 0 : jt(r, P.__wbindgen_export_1, P.__wbindgen_export_2), o = _e;
        X().setInt32(e + 4 * 1, o, !0), X().setInt32(e + 4 * 0, l, !0);
    }
    function cv(e, t) {
        throw new Error(bl(e, t));
    }
    URL = globalThis.URL;
    const fv = await Ym({
        "./tiktoken_bg.js": {
            __wbindgen_object_drop_ref: sv,
            __wbindgen_is_undefined: uv,
            __wbg_stringify_f7ed6987935b4a24: ov,
            __wbindgen_string_get: av,
            __wbindgen_error_new: iv,
            __wbg_parse_def2e24ef1252aff: lv,
            __wbindgen_throw: cv
        }
    }, Gm), { memory: dv, __wbg_tiktoken_free: pv, tiktoken_new: hv, tiktoken_name: mv, tiktoken_encode: vv, tiktoken_encode_ordinary: gv, tiktoken_encode_with_unstable: yv, tiktoken_encode_single_token: wv, tiktoken_decode: _v, tiktoken_decode_single_token_bytes: kv, tiktoken_token_byte_values: Sv, get_encoding: xv, encoding_for_model: Ev, get_encoding_name_for_model: Cv, __wbindgen_export_0: Pv, __wbindgen_export_1: Nv, __wbindgen_export_2: Tv, __wbindgen_add_to_stack_pointer: zv, __wbindgen_export_3: Lv } = fv, Rv = Object.freeze(Object.defineProperty({
        __proto__: null,
        __wbg_tiktoken_free: pv,
        __wbindgen_add_to_stack_pointer: zv,
        __wbindgen_export_0: Pv,
        __wbindgen_export_1: Nv,
        __wbindgen_export_2: Tv,
        __wbindgen_export_3: Lv,
        encoding_for_model: Ev,
        get_encoding: xv,
        get_encoding_name_for_model: Cv,
        memory: dv,
        tiktoken_decode: _v,
        tiktoken_decode_single_token_bytes: kv,
        tiktoken_encode: vv,
        tiktoken_encode_ordinary: gv,
        tiktoken_encode_single_token: wv,
        tiktoken_encode_with_unstable: yv,
        tiktoken_name: mv,
        tiktoken_new: hv,
        tiktoken_token_byte_values: Sv
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    Xm(Rv);
    let vn = null, Kr = null;
    async function jv() {
        if (!vn) return Kr || (Kr = (async ()=>{
            vn = rv("cl100k_base");
        })(), Kr);
    }
    function Ov() {
        return vn !== null;
    }
    function Iv(e) {
        if (!vn) return Mv(e);
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
    function Mv(e) {
        if (!e) return [];
        const t = e.match(/[a-zA-Z0-9']+|\s+|[^\w\s]/gu) || [], n = [];
        for (const r of t)if (r.length <= 6) n.push({
            id: na(r),
            text: r
        });
        else {
            let l = 0;
            for(; l < r.length;){
                const o = r.slice(l, l + Math.floor(Math.random() * 3) + 3);
                n.push({
                    id: na(o),
                    text: o
                }), l += o.length;
            }
        }
        return n;
    }
    function na(e) {
        let t = 5381;
        for(let n = 0; n < e.length; n++)t = (t << 5) + t ^ e.charCodeAt(n), t = t >>> 0;
        return t % 9e4 + 1e4;
    }
    ji = {
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
    Dv = Object.values(ji);
    ra = function(e, t) {
        return e / 1e6 * t;
    };
    Uv = function(e) {
        return e === 0 ? "$0.000000" : e < 1e-6 ? `$${e.toExponential(2)}` : e < .001 ? `$${e.toFixed(6)}` : e < 1 ? `$${e.toFixed(4)}` : `$${e.toFixed(2)}`;
    };
    let Fv, $v;
    Fv = "Hello, world! 🌍 LLMs don't process words — they process token IDs.";
    at = Km((e, t)=>({
            rawText: Fv,
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
                const r = Ov() ? Iv(n) : [], l = r.length, { selectedModelId: o, outputTokenCount: i } = t(), u = ji[o], s = u ? Math.min(100, l / u.contextWindow * 100) : 0;
                e({
                    tokens: r,
                    contextUsedPct: s
                }), t()._recomputeCosts(l);
            },
            _recomputeCosts: (n)=>{
                const { selectedModelId: r, outputTokenCount: l } = t(), o = ji[r];
                if (!o) return;
                const i = ra(n, o.inputPricePer1M), u = ra(l, o.outputPricePer1M);
                e({
                    inputCostUSD: i,
                    outputCostUSD: u,
                    totalCostUSD: i + u
                });
            }
        }));
    $v = [
        {
            path: "/input",
            label: "Text input",
            num: "01",
            icon: "✏️"
        },
        {
            path: "/preprocessing",
            label: "Preprocessing",
            num: "02",
            icon: "⚙️"
        },
        {
            path: "/tokenization",
            label: "Tokenization",
            num: "03",
            icon: "🧩"
        },
        {
            path: "/context",
            label: "Context window",
            num: "04",
            icon: "📊"
        },
        {
            path: "/cost",
            label: "Cost estimator",
            num: "05",
            icon: "💰"
        },
        {
            path: "/generation",
            label: "Generation sim",
            num: "06",
            icon: "⚡"
        }
    ];
    function Av() {
        const e = at((n)=>n.tokens.length), t = at((n)=>n.tokenizerReady);
        return L.jsxs("aside", {
            className: "w-52 flex-shrink-0 flex flex-col border-r border-white/[0.07] bg-[#0b0b0e]",
            children: [
                L.jsxs("div", {
                    className: "px-5 py-5 border-b border-white/[0.07]",
                    children: [
                        L.jsxs("span", {
                            className: "text-base font-semibold tracking-tight",
                            style: {
                                fontFamily: "var(--font-display)"
                            },
                            children: [
                                "Token",
                                L.jsx("span", {
                                    className: "text-indigo-400",
                                    children: "Learn"
                                })
                            ]
                        }),
                        L.jsx("div", {
                            className: "text-[11px] text-white/30 mt-0.5",
                            children: t ? `tiktoken ready · ${e} tokens` : "Loading tokenizer…"
                        })
                    ]
                }),
                L.jsxs("nav", {
                    className: "flex-1 py-3",
                    children: [
                        L.jsx("div", {
                            className: "px-4 mb-2 text-[10px] font-medium text-white/25 uppercase tracking-widest",
                            children: "Pipeline"
                        }),
                        $v.map((n)=>L.jsxs(hm, {
                                to: n.path,
                                className: ({ isActive: r })=>[
                                        "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                                        r ? "bg-indigo-500/10 text-indigo-300 border-l-2 border-indigo-400" : "text-white/50 hover:text-white/80 hover:bg-white/[0.03] border-l-2 border-transparent"
                                    ].join(" "),
                                children: [
                                    L.jsx("span", {
                                        className: "text-[10px] font-mono text-white/20 w-5 flex-shrink-0",
                                        children: n.num
                                    }),
                                    L.jsx("span", {
                                        children: n.label
                                    })
                                ]
                            }, n.path))
                    ]
                }),
                L.jsx("div", {
                    className: "px-4 py-4 border-t border-white/[0.07]",
                    children: L.jsx("p", {
                        className: "text-[11px] text-white/25 leading-relaxed",
                        children: "Text → Tokens → IDs → Context → Cost"
                    })
                })
            ]
        });
    }
    const la = {
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
    function Wv() {
        const e = Kt(), t = la[e.pathname] || la["/input"], n = at((u)=>u.tokens.length), r = at((u)=>u.selectedModelId), l = at((u)=>u.setSelectedModel), o = at((u)=>u.totalCostUSD), i = at((u)=>u.contextUsedPct);
        return L.jsxs("header", {
            className: "flex items-center justify-between px-6 py-3 border-b border-white/[0.07] bg-[#0f0f12]/80 backdrop-blur sticky top-0 z-10",
            children: [
                L.jsxs("div", {
                    children: [
                        L.jsx("h1", {
                            className: "text-base font-semibold leading-tight",
                            style: {
                                fontFamily: "var(--font-display)"
                            },
                            children: t.title
                        }),
                        L.jsx("p", {
                            className: "text-[12px] text-white/35 mt-0.5",
                            children: t.subtitle
                        })
                    ]
                }),
                L.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                        L.jsxs("div", {
                            className: "hidden sm:flex items-center gap-3 text-[12px]",
                            children: [
                                L.jsx(Io, {
                                    label: "tokens",
                                    value: n.toLocaleString()
                                }),
                                L.jsx(Io, {
                                    label: "context",
                                    value: `${i.toFixed(2)}%`
                                }),
                                L.jsx(Io, {
                                    label: "est. cost",
                                    value: Uv(o),
                                    highlight: !0
                                })
                            ]
                        }),
                        L.jsx("select", {
                            value: r,
                            onChange: (u)=>l(u.target.value),
                            className: "text-[12px] bg-slate-900/90 border border-white/[0.12] rounded-lg px-3 py-1.5 text-white cursor-pointer hover:bg-slate-900 transition-colors outline-none focus:border-indigo-400/60",
                            style: {
                                fontFamily: "var(--font-mono)"
                            },
                            children: Dv.map((u)=>L.jsxs("option", {
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
    function Io({ label: e, value: t, highlight: n }) {
        return L.jsxs("div", {
            className: "flex items-center gap-1.5",
            children: [
                L.jsx("span", {
                    className: "text-white/30",
                    children: e
                }),
                L.jsx("span", {
                    className: n ? "font-medium text-emerald-400" : "font-medium text-white/70",
                    style: {
                        fontFamily: "var(--font-mono)"
                    },
                    children: t
                })
            ]
        });
    }
    function Bv({ label: e = "Loading…" }) {
        return L.jsxs("div", {
            className: "flex flex-col items-center justify-center py-24 gap-3 text-white/30",
            children: [
                L.jsx("div", {
                    className: "w-6 h-6 border-2 border-white/20 border-t-indigo-400 rounded-full animate-spin"
                }),
                L.jsx("span", {
                    className: "text-sm",
                    style: {
                        fontFamily: "var(--font-mono)"
                    },
                    children: e
                })
            ]
        });
    }
    const Vv = k.lazy(()=>Ln(()=>import("./TextInput-Dq9UVRiF.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([0,1,2,3]))), Hv = k.lazy(()=>Ln(()=>import("./Preprocessing-KOGJWEbg.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([4,1,3]))), Qv = k.lazy(()=>Ln(()=>import("./Tokenization-lgS1RWi6.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([5,1,2,6,3]))), Kv = k.lazy(()=>Ln(()=>import("./ContextWindow-VGHlXo04.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([7,1,3]))), Gv = k.lazy(()=>Ln(()=>import("./CostEstimator-BGtXY8EN.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([8,1]))), Yv = k.lazy(()=>Ln(()=>import("./GenerationSim-BTrZ4mYN.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([9,1,6,3])));
    function Xv() {
        return L.jsxs("div", {
            className: "flex h-screen bg-[#0f0f12] text-[#e8e8f0] overflow-hidden",
            children: [
                L.jsx(Av, {}),
                L.jsxs("div", {
                    className: "flex flex-col flex-1 min-w-0",
                    children: [
                        L.jsx(Wv, {}),
                        L.jsx("main", {
                            className: "flex-1 overflow-y-auto p-6",
                            children: L.jsx(k.Suspense, {
                                fallback: L.jsx(Bv, {}),
                                children: L.jsxs(nm, {
                                    children: [
                                        L.jsx(Qe, {
                                            path: "/",
                                            element: L.jsx(Gs, {
                                                to: "/input",
                                                replace: !0
                                            })
                                        }),
                                        L.jsx(Qe, {
                                            path: "/input",
                                            element: L.jsx(Vv, {})
                                        }),
                                        L.jsx(Qe, {
                                            path: "/preprocessing",
                                            element: L.jsx(Hv, {})
                                        }),
                                        L.jsx(Qe, {
                                            path: "/tokenization",
                                            element: L.jsx(Qv, {})
                                        }),
                                        L.jsx(Qe, {
                                            path: "/context",
                                            element: L.jsx(Kv, {})
                                        }),
                                        L.jsx(Qe, {
                                            path: "/cost",
                                            element: L.jsx(Gv, {})
                                        }),
                                        L.jsx(Qe, {
                                            path: "/generation",
                                            element: L.jsx(Yv, {})
                                        }),
                                        L.jsx(Qe, {
                                            path: "*",
                                            element: L.jsx(Gs, {
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
    jv().then(()=>{
        const e = at.getState();
        e.setTokenizerReady(!0), e._recompute(e.rawText);
    });
    Mo.createRoot(document.getElementById("root")).render(L.jsx(Ui.StrictMode, {
        children: L.jsx(cm, {
            children: L.jsx(Xv, {})
        })
    }));
})();
export { ji as M, Ui as R, Dv as a, ra as c, Uv as f, L as j, k as r, at as u, __tla };
