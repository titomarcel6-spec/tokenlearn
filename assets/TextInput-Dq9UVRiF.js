import { u as a, r as u, j as t, f, M as v, __tla as __tla_0 } from "./index-eVjePRSC.js";
import { S as c, __tla as __tla_1 } from "./StageCard-pHlcZboa.js";
import { T as w, __tla as __tla_2 } from "./TokenChip-DaQSHZwk.js";
import { m as d, __tla as __tla_3 } from "./proxy-Dcgb-_mq.js";
let C;
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
    const j = [
        {
            label: "Simple sentence",
            text: "Hello, world! 🌍 Let's tokenize this."
        },
        {
            label: "Contraction splitting",
            text: "Don't, can't, won't — contractions often split."
        },
        {
            label: "Code snippet",
            text: `def greet(name: str) -> str:
    return f"Hello, {name}!"`
        },
        {
            label: "Multilingual",
            text: "English: Hello | Japanese: こんにちは | Arabic: مرحبا"
        },
        {
            label: "Emojis",
            text: "🎉🚀🌈🦄 Emojis take multiple tokens!"
        }
    ];
    C = function() {
        const o = a((e)=>e.rawText), s = a((e)=>e.setRawText), l = a((e)=>e.tokens), x = a((e)=>e.tokenizerReady), m = a((e)=>e.selectedModelId), h = a((e)=>e.totalCostUSD), p = a((e)=>e.contextUsedPct), b = v[m], g = u.useCallback((e)=>s(e.target.value), [
            s
        ]), i = l.slice(0, 120), r = l.length - i.length;
        return t.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [
                t.jsx("div", {
                    className: "grid grid-cols-4 gap-3 mb-5",
                    children: [
                        {
                            label: "Tokens",
                            value: l.length.toLocaleString()
                        },
                        {
                            label: "Characters",
                            value: o.length.toLocaleString()
                        },
                        {
                            label: "Context",
                            value: `${p.toFixed(3)}%`
                        },
                        {
                            label: "Input cost",
                            value: f(h),
                            accent: !0
                        }
                    ].map((e)=>t.jsxs("div", {
                            className: "bg-[#16161a] border border-white/[0.07] rounded-xl px-4 py-3",
                            children: [
                                t.jsx("div", {
                                    className: "text-[11px] text-white/30 mb-1",
                                    children: e.label
                                }),
                                t.jsx("div", {
                                    className: `text-xl font-semibold tabular-nums ${e.accent ? "text-emerald-400" : "text-white/80"}`,
                                    style: {
                                        fontFamily: "var(--font-mono)"
                                    },
                                    children: e.value
                                })
                            ]
                        }, e.label))
                }),
                t.jsxs(c, {
                    title: "Your text",
                    subtitle: x ? `Tokenized with tiktoken cl100k_base · ${b?.name ?? ""}` : "Loading tiktoken WASM tokenizer…",
                    children: [
                        t.jsx("textarea", {
                            value: o,
                            onChange: g,
                            rows: 6,
                            placeholder: "Type or paste any text…",
                            className: "w-full bg-[#0f0f12] border border-white/[0.07] rounded-lg px-4 py-3 text-sm text-white/80 resize-none outline-none focus:border-indigo-400/40 transition-colors leading-relaxed",
                            style: {
                                fontFamily: "var(--font-mono)"
                            },
                            spellCheck: !1
                        }),
                        t.jsx("div", {
                            className: "flex flex-wrap gap-2 mt-3",
                            children: j.map((e)=>t.jsx("button", {
                                    onClick: ()=>s(e.text),
                                    className: "text-[11px] px-3 py-1 rounded-full border border-white/[0.1] text-white/40 hover:text-white/70 hover:border-white/20 transition-colors",
                                    children: e.label
                                }, e.label))
                        })
                    ]
                }),
                t.jsxs(c, {
                    title: "Token preview",
                    subtitle: "Each colored chip = 1 token. Hover to see the token ID. Spaces shown as ·",
                    children: [
                        l.length === 0 && t.jsx("p", {
                            className: "text-sm text-white/30 italic",
                            children: "Start typing above…"
                        }),
                        t.jsxs(d.div, {
                            className: "flex flex-wrap gap-1.5",
                            layout: !0,
                            children: [
                                i.map((e, n)=>t.jsx(d.span, {
                                        initial: {
                                            opacity: 0,
                                            scale: .85
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            duration: .12,
                                            delay: Math.min(n * .008, .4)
                                        },
                                        children: t.jsx(w, {
                                            token: e,
                                            colorIndex: n
                                        })
                                    }, `${e.id}-${n}`)),
                                r > 0 && t.jsxs("span", {
                                    className: "text-[12px] text-white/30 self-center ml-1",
                                    children: [
                                        "+",
                                        r,
                                        " more"
                                    ]
                                })
                            ]
                        }),
                        l.length > 0 && t.jsx("div", {
                            className: "mt-4 rounded-lg bg-indigo-500/5 border border-indigo-500/20 px-4 py-3",
                            children: t.jsxs("p", {
                                className: "text-[12px] text-indigo-300/80 leading-relaxed",
                                children: [
                                    t.jsx("span", {
                                        className: "font-semibold",
                                        children: "Key insight: "
                                    }),
                                    'The model never sees "',
                                    o.slice(0, 30),
                                    o.length > 30 ? "…" : "",
                                    '". It receives an integer array like',
                                    " ",
                                    t.jsxs("code", {
                                        className: "text-indigo-200 text-[11px]",
                                        style: {
                                            fontFamily: "var(--font-mono)"
                                        },
                                        children: [
                                            "[",
                                            l.slice(0, 5).map((e)=>e.id).join(", "),
                                            l.length > 5 ? ", …" : "",
                                            "]"
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    };
});
export { C as default, __tla };
