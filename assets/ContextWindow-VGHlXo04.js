import { u as d, r as g, M as u, j as e, __tla as __tla_0 } from "./index-eVjePRSC.js";
import { S as p, __tla as __tla_1 } from "./StageCard-pHlcZboa.js";
import { m as b, __tla as __tla_2 } from "./proxy-Dcgb-_mq.js";
let k;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })()
]).then(async ()=>{
    k = function() {
        const o = d((t)=>t.tokens), r = d((t)=>t.selectedModelId);
        d((t)=>t.contextUsedPct);
        const i = u[r], [a, c] = g.useState([]), [f, x] = g.useState(o.length), n = f, m = Math.min(100, n / i.contextWindow * 100), h = n > i.contextWindow;
        function w() {
            const t = Math.floor(Math.random() * 120) + 30;
            c((s)=>[
                    ...s,
                    {
                        role: s.length % 2 === 0 ? "user" : "assistant",
                        tokens: t,
                        id: Date.now()
                    }
                ]), x((s)=>s + t);
        }
        function j() {
            c([]), x(o.length);
        }
        return e.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [
                e.jsx("div", {
                    className: "grid grid-cols-2 gap-3 mb-5 sm:grid-cols-4",
                    children: Object.values(u).map((t)=>{
                        const s = Math.min(100, o.length / t.contextWindow * 100), l = t.id === r;
                        return e.jsxs("div", {
                            className: `rounded-xl border p-3 ${l ? "border-indigo-400/40 bg-indigo-500/5" : "border-white/[0.07] bg-[#16161a]"}`,
                            children: [
                                e.jsx("div", {
                                    className: "text-[11px] text-white/40 mb-1",
                                    children: t.name
                                }),
                                e.jsxs("div", {
                                    className: "text-base font-semibold text-white/70 tabular-nums",
                                    style: {
                                        fontFamily: "var(--font-mono)"
                                    },
                                    children: [
                                        (t.contextWindow / 1e3).toFixed(0),
                                        "k"
                                    ]
                                }),
                                e.jsx("div", {
                                    className: "mt-2 h-1 rounded-full bg-white/[0.06] overflow-hidden",
                                    children: e.jsx("div", {
                                        className: "h-full rounded-full bg-indigo-400",
                                        style: {
                                            width: `${s}%`
                                        }
                                    })
                                }),
                                e.jsxs("div", {
                                    className: "text-[10px] text-white/25 mt-1",
                                    children: [
                                        s.toFixed(3),
                                        "% used"
                                    ]
                                })
                            ]
                        }, t.id);
                    })
                }),
                e.jsxs(p, {
                    title: `Context window — ${i.name}`,
                    subtitle: `Max: ${i.contextWindow.toLocaleString()} tokens · Currently: ${n.toLocaleString()} tokens used`,
                    children: [
                        e.jsxs("div", {
                            className: "mb-1 flex justify-between text-[11px] text-white/30",
                            children: [
                                e.jsx("span", {
                                    children: "0"
                                }),
                                e.jsx("span", {
                                    children: (i.contextWindow / 2).toLocaleString()
                                }),
                                e.jsx("span", {
                                    children: i.contextWindow.toLocaleString()
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "relative h-8 rounded-lg bg-[#0f0f12] border border-white/[0.07] overflow-hidden",
                            children: [
                                e.jsx(b.div, {
                                    className: `h-full rounded-lg ${h ? "bg-red-500/70" : "bg-indigo-500/70"}`,
                                    animate: {
                                        width: `${m}%`
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 20
                                    }
                                }),
                                e.jsx("div", {
                                    className: "absolute inset-0 flex items-center justify-end pr-3",
                                    children: e.jsxs("span", {
                                        className: "text-[12px] text-white/60",
                                        style: {
                                            fontFamily: "var(--font-mono)"
                                        },
                                        children: [
                                            m.toFixed(2),
                                            "%",
                                            h && " ⚠ overflow"
                                        ]
                                    })
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "mt-2 flex justify-between text-[11px] text-white/35",
                            children: [
                                e.jsxs("span", {
                                    children: [
                                        n.toLocaleString(),
                                        " used"
                                    ]
                                }),
                                e.jsxs("span", {
                                    children: [
                                        Math.max(0, i.contextWindow - n).toLocaleString(),
                                        " remaining"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                e.jsxs(p, {
                    title: "Conversation accumulation",
                    subtitle: "Each message adds to the running total. Watch the bar fill up.",
                    children: [
                        e.jsxs("div", {
                            className: "flex gap-2 mb-4",
                            children: [
                                e.jsx("button", {
                                    onClick: w,
                                    className: "text-sm px-4 py-2 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 hover:bg-indigo-500/25 transition-colors",
                                    children: "+ Add message"
                                }),
                                e.jsx("button", {
                                    onClick: j,
                                    className: "text-sm px-4 py-2 rounded-lg border border-white/[0.1] text-white/40 hover:text-white/70 transition-colors",
                                    children: "Reset"
                                })
                            ]
                        }),
                        a.length === 0 && e.jsx("p", {
                            className: "text-sm text-white/25 italic",
                            children: 'Click "Add message" to simulate a multi-turn chat.'
                        }),
                        e.jsx("div", {
                            className: "flex flex-col gap-2 max-h-60 overflow-y-auto pr-1",
                            children: a.map((t, s)=>e.jsxs(b.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 6
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    className: `flex justify-between items-center rounded-lg px-3 py-2 text-sm ${t.role === "user" ? "bg-indigo-500/8 border border-indigo-500/15" : "bg-white/[0.03] border border-white/[0.06]"}`,
                                    children: [
                                        e.jsxs("span", {
                                            className: "text-white/50",
                                            children: [
                                                t.role === "user" ? "👤 User" : "🤖 Assistant",
                                                " msg ",
                                                Math.ceil((s + 1) / 2)
                                            ]
                                        }),
                                        e.jsxs("span", {
                                            className: "text-white/40",
                                            style: {
                                                fontFamily: "var(--font-mono)",
                                                fontSize: 12
                                            },
                                            children: [
                                                "+",
                                                t.tokens,
                                                " tokens · total: ",
                                                o.length + a.slice(0, s + 1).reduce((l, v)=>l + v.tokens, 0)
                                            ]
                                        })
                                    ]
                                }, t.id))
                        })
                    ]
                })
            ]
        });
    };
});
export { k as default, __tla };
