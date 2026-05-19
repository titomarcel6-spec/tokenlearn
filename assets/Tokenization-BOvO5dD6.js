import { u as i, r as m, j as e, M as h, __tla as __tla_0 } from "./index-Ep7dxLJ3.js";
import { S as o, __tla as __tla_1 } from "./StageCard-Dze6Omqr.js";
import { T as p, __tla as __tla_2 } from "./TokenChip-BC0UnSBT.js";
import { A as f, __tla as __tla_3 } from "./index-BIuVZOqr.js";
import { m as u, __tla as __tla_4 } from "./proxy-Dw4aJrTv.js";
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
    })(),
    (()=>{
        try {
            return __tla_3;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_4;
        } catch  {}
    })()
]).then(async ()=>{
    k = function() {
        const s = i((t)=>t.tokens), r = i((t)=>t.selectedModelId);
        i((t)=>t.tokenizerReady);
        const n = h[r], [l, d] = m.useState(!1), c = s.slice(0, 20).map((t)=>t.id).join(", "), x = s.length > 20;
        return e.jsxs("div", {
            className: "max-w-3xl mx-auto px-4 sm:px-0",
            children: [
                e.jsxs("div", {
                    className: "flex flex-col gap-3 md:flex-row md:items-center justify-between mb-4",
                    children: [
                        e.jsxs("div", {
                            className: "text-sm text-white/40",
                            children: [
                                s.length,
                                " tokens",
                                n?.estimated && e.jsxs("span", {
                                    className: "ml-2 text-[11px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20",
                                    children: [
                                        "≈ estimated for ",
                                        n.name
                                    ]
                                })
                            ]
                        }),
                        e.jsxs("button", {
                            onClick: ()=>d((t)=>!t),
                            className: "w-full md:w-auto text-[12px] px-3 py-1.5 rounded-lg border border-white/[0.1] text-white/50 hover:text-white/80 hover:border-white/20 transition-colors",
                            children: [
                                l ? "Hide" : "Show",
                                " token IDs"
                            ]
                        })
                    ]
                }),
                e.jsxs(o, {
                    title: "Token visualization",
                    subtitle: "Each colored badge is one token. Hover any badge to see its integer ID.",
                    children: [
                        s.length === 0 && e.jsx("p", {
                            className: "text-sm text-white/30 italic",
                            children: "No text entered yet."
                        }),
                        e.jsx(f, {
                            mode: "popLayout",
                            children: e.jsx("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: s.map((t, a)=>e.jsx(u.span, {
                                        layout: !0,
                                        initial: {
                                            opacity: 0,
                                            scale: .8
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: .8
                                        },
                                        transition: {
                                            duration: .1,
                                            delay: Math.min(a * .005, .3)
                                        },
                                        children: e.jsx(p, {
                                            token: t,
                                            colorIndex: a,
                                            showId: l
                                        })
                                    }, `${t.id}-${a}`))
                            })
                        })
                    ]
                }),
                e.jsx(o, {
                    title: "Token ID array",
                    subtitle: "What the model actually receives — a flat list of integers",
                    children: e.jsxs("div", {
                        className: "bg-[#0f0f12] rounded-lg p-4 text-sm text-indigo-300/80 leading-relaxed break-all",
                        style: {
                            fontFamily: "var(--font-mono)"
                        },
                        children: [
                            "[ ",
                            c,
                            x && e.jsxs("span", {
                                className: "text-white/25",
                                children: [
                                    " ",
                                    "… and ",
                                    s.length - 20,
                                    " more"
                                ]
                            }),
                            " ]"
                        ]
                    })
                }),
                e.jsxs(o, {
                    title: "How BPE tokenization works",
                    children: [
                        e.jsx("ol", {
                            className: "flex flex-col gap-3",
                            children: [
                                {
                                    step: "1",
                                    text: "Start with individual characters as the initial vocabulary."
                                },
                                {
                                    step: "2",
                                    text: "Count every adjacent pair of symbols in the training corpus."
                                },
                                {
                                    step: "3",
                                    text: "Merge the most frequent pair into a new single symbol."
                                },
                                {
                                    step: "4",
                                    text: "Repeat until the vocabulary reaches the target size (e.g. 100,276 for cl100k_base)."
                                },
                                {
                                    step: "5",
                                    text: "At inference time, apply these learned merge rules greedily to encode any text."
                                }
                            ].map((t)=>e.jsxs("li", {
                                    className: "flex gap-3 text-sm text-white/55 leading-relaxed",
                                    children: [
                                        e.jsx("span", {
                                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/15 text-indigo-400 flex items-center justify-center text-[11px] font-semibold mt-0.5",
                                            children: t.step
                                        }),
                                        e.jsx("span", {
                                            children: t.text
                                        })
                                    ]
                                }, t.step))
                        }),
                        e.jsxs("div", {
                            className: "mt-4 text-[12px] text-white/30 border-t border-white/[0.06] pt-3",
                            children: [
                                "Result: common words like ",
                                e.jsx("code", {
                                    className: "text-white/50",
                                    style: {
                                        fontFamily: "var(--font-mono)"
                                    },
                                    children: '"the"'
                                }),
                                " are a single token; rare words like ",
                                e.jsx("code", {
                                    className: "text-white/50",
                                    style: {
                                        fontFamily: "var(--font-mono)"
                                    },
                                    children: '"tokenization"'
                                }),
                                " may split into 2–4 subword pieces."
                            ]
                        })
                    ]
                })
            ]
        });
    };
});
export { k as default, __tla };
