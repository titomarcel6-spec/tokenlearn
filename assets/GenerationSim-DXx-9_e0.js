import { r as a, j as e, __tla as __tla_0 } from "./index-Ep7dxLJ3.js";
import { S as d, __tla as __tla_1 } from "./StageCard-Dze6Omqr.js";
import { A as j, __tla as __tla_2 } from "./index-BIuVZOqr.js";
import { m as v, __tla as __tla_3 } from "./proxy-Dw4aJrTv.js";
let T;
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
    })(),
    (()=>{
        try {
            return __tla_3;
        } catch  {}
    })()
]).then(async ()=>{
    const m = [
        "The",
        " model",
        " predicts",
        " each",
        " token",
        " one",
        " at",
        " a",
        " time",
        ",",
        " always",
        " conditioning",
        " on",
        " all",
        " previous",
        " context",
        ".",
        " This",
        " is",
        " called",
        " autoregressive",
        " generation",
        ".",
        " Temperature",
        " controls",
        " how",
        " random",
        " the",
        " sampling",
        " is",
        ":",
        " lower",
        " values",
        " make",
        " output",
        " more",
        " deterministic",
        ",",
        " higher",
        " values",
        " increase",
        " diversity",
        "."
    ], h = [
        {
            bg: "#e0e7ff",
            fg: "#3730a3"
        },
        {
            bg: "#d1fae5",
            fg: "#065f46"
        },
        {
            bg: "#fef3c7",
            fg: "#92400e"
        },
        {
            bg: "#fce7f3",
            fg: "#9d174d"
        },
        {
            bg: "#dbeafe",
            fg: "#1e40af"
        },
        {
            bg: "#dcfce7",
            fg: "#14532d"
        }
    ];
    T = function() {
        const [i, p] = a.useState(.7), [o, x] = a.useState([]), [s, c] = a.useState(!1), l = a.useRef(null), r = a.useRef(0);
        function f() {
            s || (c(!0), r.current = o.length, l.current = setInterval(()=>{
                if (r.current >= m.length) {
                    clearInterval(l.current), c(!1);
                    return;
                }
                const t = m[r.current], n = Math.max(.05, 1 - i * .4 + (Math.random() - .5) * i * .3);
                x((b)=>[
                        ...b,
                        {
                            text: t,
                            prob: Math.min(1, n),
                            id: r.current
                        }
                    ]), r.current++;
            }, Math.max(60, 300 - i * 200)));
        }
        function u() {
            clearInterval(l.current), c(!1);
        }
        function g() {
            u(), x([]), r.current = 0;
        }
        return a.useEffect(()=>()=>clearInterval(l.current), []), e.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [
                e.jsxs(d, {
                    title: "Generation settings",
                    children: [
                        e.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                                e.jsx("label", {
                                    className: "text-sm text-white/40 w-28 flex-shrink-0",
                                    children: "Temperature"
                                }),
                                e.jsx("input", {
                                    type: "range",
                                    min: 0,
                                    max: 200,
                                    step: 1,
                                    value: Math.round(i * 100),
                                    onChange: (t)=>p(Number(t.target.value) / 100),
                                    className: "flex-1 accent-indigo-400"
                                }),
                                e.jsx("span", {
                                    className: "text-sm font-semibold text-white/70 w-12 text-right tabular-nums",
                                    style: {
                                        fontFamily: "var(--font-mono)"
                                    },
                                    children: i.toFixed(2)
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "flex items-center gap-3 mt-1 text-[12px] text-white/30",
                            children: [
                                e.jsx("span", {
                                    children: "0.0 = deterministic"
                                }),
                                e.jsx("span", {
                                    className: "flex-1 border-t border-dashed border-white/10"
                                }),
                                e.jsx("span", {
                                    children: "2.0 = very random"
                                })
                            ]
                        })
                    ]
                }),
                e.jsxs(d, {
                    title: "Token-by-token output",
                    subtitle: "Each token appears one at a time. Opacity reflects the model's confidence.",
                    children: [
                        e.jsxs("div", {
                            className: "min-h-[100px] mb-4 flex flex-wrap gap-1 items-start content-start",
                            children: [
                                e.jsx(j, {
                                    children: o.map((t)=>{
                                        const n = h[t.id % h.length];
                                        return e.jsx(v.span, {
                                            initial: {
                                                opacity: 0,
                                                y: 4,
                                                scale: .85
                                            },
                                            animate: {
                                                opacity: t.prob,
                                                y: 0,
                                                scale: 1
                                            },
                                            transition: {
                                                duration: .15
                                            },
                                            title: `Prob: ${(t.prob * 100).toFixed(1)}%`,
                                            className: "tok-chip",
                                            style: {
                                                background: n.bg,
                                                color: n.fg,
                                                opacity: .4 + t.prob * .6
                                            },
                                            children: t.text.replace(/ /g, "·")
                                        }, t.id);
                                    })
                                }),
                                s && e.jsx("span", {
                                    className: "inline-block w-2 h-4 bg-indigo-400 rounded-sm animate-pulse align-middle ml-0.5"
                                }),
                                o.length === 0 && !s && e.jsx("span", {
                                    className: "text-sm text-white/25 italic",
                                    children: "Press generate to start…"
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                                e.jsx("button", {
                                    onClick: s ? u : f,
                                    className: `text-sm px-4 py-2 rounded-lg border transition-colors ${s ? "bg-red-500/10 text-red-400 border-red-500/25 hover:bg-red-500/20" : "bg-indigo-500/15 text-indigo-300 border-indigo-500/25 hover:bg-indigo-500/25"}`,
                                    children: s ? "⏸ Pause" : o.length > 0 ? "▶ Continue" : "▶ Generate"
                                }),
                                e.jsx("button", {
                                    onClick: g,
                                    className: "text-sm px-4 py-2 rounded-lg border border-white/[0.1] text-white/40 hover:text-white/70 transition-colors",
                                    children: "Reset"
                                }),
                                e.jsxs("span", {
                                    className: "ml-auto text-[12px] text-white/30 self-center",
                                    style: {
                                        fontFamily: "var(--font-mono)"
                                    },
                                    children: [
                                        o.length,
                                        " / ",
                                        m.length,
                                        " tokens"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                e.jsx(d, {
                    title: "How autoregressive generation works",
                    children: e.jsx("ol", {
                        className: "flex flex-col gap-3",
                        children: [
                            "The model receives your input as a sequence of token IDs.",
                            "It computes attention over all tokens, producing a probability distribution over the vocabulary (~100k entries).",
                            "One token is sampled from this distribution. Temperature scales the logits before softmax — lower = peakier distribution.",
                            "The new token is appended to the context, and the process repeats from step 2.",
                            "Generation stops when the model outputs an end-of-sequence token, or a max-token limit is reached."
                        ].map((t, n)=>e.jsxs("li", {
                                className: "flex gap-3 text-sm text-white/55 leading-relaxed",
                                children: [
                                    e.jsx("span", {
                                        className: "flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/15 text-indigo-400 flex items-center justify-center text-[11px] font-semibold mt-0.5",
                                        children: n + 1
                                    }),
                                    e.jsx("span", {
                                        children: t
                                    })
                                ]
                            }, n))
                    })
                })
            ]
        });
    };
});
export { T as default, __tla };
