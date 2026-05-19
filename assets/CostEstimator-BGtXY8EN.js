import { u as i, j as e, a as f, c, f as o, M as b, __tla as __tla_0 } from "./index-eVjePRSC.js";
import { S as d, __tla as __tla_1 } from "./StageCard-pHlcZboa.js";
let N;
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
    })()
]).then(async ()=>{
    N = function() {
        const a = i((t)=>t.tokens), s = i((t)=>t.outputTokenCount), l = i((t)=>t.setOutputTokenCount), x = i((t)=>t.selectedModelId), r = a.length, p = b[x];
        return e.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [
                e.jsx(d, {
                    title: "Billing formula",
                    children: e.jsxs("div", {
                        className: "text-sm text-indigo-300/80 bg-[#0f0f12] rounded-lg p-4 leading-loose",
                        style: {
                            fontFamily: "var(--font-mono)"
                        },
                        children: [
                            e.jsx("div", {
                                children: "Input cost  = (input_tokens  / 1,000,000) × price_per_1M_input"
                            }),
                            e.jsx("div", {
                                children: "Output cost = (output_tokens / 1,000,000) × price_per_1M_output"
                            }),
                            e.jsx("div", {
                                className: "mt-2 text-white/40",
                                children: "Total cost   = Input cost + Output cost"
                            })
                        ]
                    })
                }),
                e.jsx(d, {
                    title: "Simulate output",
                    subtitle: "Drag to set expected output token count",
                    children: e.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                            e.jsx("input", {
                                type: "range",
                                min: 0,
                                max: 4096,
                                step: 1,
                                value: s,
                                onChange: (t)=>l(Number(t.target.value)),
                                className: "flex-1 accent-indigo-400"
                            }),
                            e.jsxs("span", {
                                className: "text-sm font-semibold text-white/70 w-20 text-right tabular-nums",
                                style: {
                                    fontFamily: "var(--font-mono)"
                                },
                                children: [
                                    s.toLocaleString(),
                                    " tokens"
                                ]
                            })
                        ]
                    })
                }),
                e.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                    children: f.map((t)=>{
                        const n = c(r, t.inputPricePer1M), u = c(s, t.outputPricePer1M), h = n + u, j = t.id === x;
                        return e.jsxs("div", {
                            className: `rounded-xl border p-4 ${j ? "border-indigo-400/40 bg-indigo-500/5" : "border-white/[0.07] bg-[#16161a]"}`,
                            children: [
                                e.jsxs("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        e.jsxs("div", {
                                            children: [
                                                e.jsx("div", {
                                                    className: "text-sm font-semibold text-white/80",
                                                    children: t.name
                                                }),
                                                e.jsx("div", {
                                                    className: "text-[11px] text-white/30",
                                                    children: t.provider
                                                })
                                            ]
                                        }),
                                        t.estimated && e.jsx("span", {
                                            className: "text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/15",
                                            children: "≈ est."
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "flex flex-col gap-1.5 text-[12px]",
                                    children: [
                                        e.jsx(m, {
                                            label: `Input (${r.toLocaleString()} tokens)`,
                                            value: o(n),
                                            subValue: `$${t.inputPricePer1M}/1M`
                                        }),
                                        e.jsx(m, {
                                            label: `Output (${s.toLocaleString()} tokens)`,
                                            value: o(u),
                                            subValue: `$${t.outputPricePer1M}/1M`
                                        }),
                                        e.jsxs("div", {
                                            className: "border-t border-white/[0.07] pt-2 mt-1 flex justify-between",
                                            children: [
                                                e.jsx("span", {
                                                    className: "text-white/60 font-medium",
                                                    children: "Total"
                                                }),
                                                e.jsx("span", {
                                                    className: "text-emerald-400 font-semibold",
                                                    style: {
                                                        fontFamily: "var(--font-mono)"
                                                    },
                                                    children: o(h)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, t.id);
                    })
                }),
                e.jsx(d, {
                    title: "At scale",
                    className: "mt-3",
                    children: e.jsx("div", {
                        className: "grid grid-cols-3 gap-3 text-center",
                        children: [
                            1e3,
                            1e4,
                            1e6
                        ].map((t)=>{
                            const n = c(r, p.inputPricePer1M) * t;
                            return e.jsxs("div", {
                                className: "bg-[#0f0f12] rounded-lg py-3 px-2",
                                children: [
                                    e.jsxs("div", {
                                        className: "text-[11px] text-white/30 mb-1",
                                        children: [
                                            t.toLocaleString(),
                                            " requests"
                                        ]
                                    }),
                                    e.jsx("div", {
                                        className: "text-base font-semibold text-white/70 tabular-nums",
                                        style: {
                                            fontFamily: "var(--font-mono)"
                                        },
                                        children: o(n)
                                    })
                                ]
                            }, t);
                        })
                    })
                })
            ]
        });
    };
    function m({ label: a, value: s, subValue: l }) {
        return e.jsxs("div", {
            className: "flex justify-between items-baseline",
            children: [
                e.jsx("span", {
                    className: "text-white/40",
                    children: a
                }),
                e.jsxs("div", {
                    className: "text-right",
                    children: [
                        e.jsx("span", {
                            className: "text-white/70",
                            style: {
                                fontFamily: "var(--font-mono)"
                            },
                            children: s
                        }),
                        e.jsx("span", {
                            className: "text-white/25 ml-1.5",
                            children: l
                        })
                    ]
                })
            ]
        });
    }
});
export { N as default, __tla };
