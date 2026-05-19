import { u as l, r as c, j as t, R as d, __tla as __tla_0 } from "./index-eVjePRSC.js";
import { S as r, __tla as __tla_1 } from "./StageCard-pHlcZboa.js";
import { m as p, __tla as __tla_2 } from "./proxy-Dcgb-_mq.js";
let g;
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
    function m(i) {
        const s = [
            {
                id: "original",
                label: "Original input",
                description: "Raw text as entered",
                transform: (a)=>a
            },
            {
                id: "lowercase",
                label: "Lowercase normalization",
                description: "Some NLP pipelines normalise case. Note: real LLMs skip this.",
                transform: (a)=>a.toLowerCase()
            },
            {
                id: "whitespace",
                label: "Whitespace cleanup",
                description: "Collapse runs of spaces/tabs. Leading/trailing spaces stripped.",
                transform: (a)=>a.replace(/\s+/g, " ").trim()
            },
            {
                id: "unicode",
                label: "Unicode normalisation (NFC)",
                description: "Compose unicode characters to canonical form.",
                transform: (a)=>a.normalize("NFC")
            },
            {
                id: "punct",
                label: "Punctuation handling (example)",
                description: "Traditional NLP strips punctuation. LLMs keep it — this step is for comparison only.",
                transform: (a)=>a.replace(/[.,!?;:'"()\[\]{}<>]/g, "")
            }
        ];
        let e = i;
        return s.map((a)=>{
            const n = a.transform(e), o = n !== e;
            return e = n, {
                ...a,
                output: n,
                changed: o
            };
        });
    }
    g = function() {
        const i = l((e)=>e.rawText), s = c.useMemo(()=>m(i), [
            i
        ]);
        return t.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [
                t.jsxs(r, {
                    title: "Text preprocessing pipeline",
                    subtitle: "Shows common NLP transformations step-by-step. Green left border = this step changed the text.",
                    children: [
                        t.jsx("div", {
                            className: "flex items-center flex-wrap gap-1 text-[11px] mb-5 text-white/30",
                            children: s.map((e, a)=>t.jsxs(d.Fragment, {
                                    children: [
                                        t.jsx("span", {
                                            className: e.changed ? "text-emerald-400/70" : "",
                                            children: e.label
                                        }),
                                        a < s.length - 1 && t.jsx("span", {
                                            className: "text-white/15",
                                            children: "→"
                                        })
                                    ]
                                }, e.id))
                        }),
                        t.jsx("div", {
                            className: "flex flex-col gap-3",
                            children: s.map((e, a)=>t.jsxs(p.div, {
                                    initial: {
                                        opacity: 0,
                                        x: -8
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: a * .06
                                    },
                                    className: `rounded-lg px-4 py-3 border-l-2 bg-[#0f0f12] ${e.changed ? "border-emerald-500/60" : "border-white/[0.06]"}`,
                                    children: [
                                        t.jsxs("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                t.jsx("span", {
                                                    className: "text-[11px] font-semibold text-white/50 uppercase tracking-wider",
                                                    children: e.label
                                                }),
                                                e.changed && t.jsx("span", {
                                                    className: "text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400",
                                                    children: "changed"
                                                }),
                                                !e.changed && a > 0 && t.jsx("span", {
                                                    className: "text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/25",
                                                    children: "no change"
                                                })
                                            ]
                                        }),
                                        t.jsx("div", {
                                            className: "text-[11px] text-white/25 mb-2",
                                            children: e.description
                                        }),
                                        t.jsxs("pre", {
                                            className: "text-sm text-white/70 whitespace-pre-wrap break-all leading-relaxed",
                                            style: {
                                                fontFamily: "var(--font-mono)"
                                            },
                                            children: [
                                                e.output.substring(0, 300),
                                                e.output.length > 300 && t.jsx("span", {
                                                    className: "text-white/25",
                                                    children: "…"
                                                })
                                            ]
                                        })
                                    ]
                                }, e.id))
                        })
                    ]
                }),
                t.jsx(r, {
                    title: "Important note for students",
                    children: t.jsxs("p", {
                        className: "text-sm text-white/55 leading-relaxed",
                        children: [
                            "Real LLMs like GPT-4, Claude, and Gemini",
                            " ",
                            t.jsx("span", {
                                className: "text-white/80 font-medium",
                                children: "do not"
                            }),
                            " strip punctuation or lowercase before tokenization. The BPE tokenizer operates directly on raw unicode bytes. The steps above model traditional NLP pipelines (e.g. scikit-learn, NLTK) to show the contrast — and to illustrate what each transformation does to the text."
                        ]
                    })
                })
            ]
        });
    };
});
export { g as default, __tla };
