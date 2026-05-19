import { j as e, __tla as __tla_0 } from "./index-Ep7dxLJ3.js";
let x;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    x = function({ title: s, subtitle: a, children: r, className: d = "" }) {
        return e.jsxs("div", {
            className: `rounded-xl border border-white/[0.07] bg-[#16161a] p-5 mb-5 ${d}`,
            children: [
                (s || a) && e.jsxs("div", {
                    className: "mb-4",
                    children: [
                        s && e.jsx("h2", {
                            className: "text-sm font-semibold text-white/80",
                            style: {
                                fontFamily: "var(--font-display)"
                            },
                            children: s
                        }),
                        a && e.jsx("p", {
                            className: "text-[12px] text-white/35 mt-0.5 leading-relaxed",
                            children: a
                        })
                    ]
                }),
                r
            ]
        });
    };
});
export { x as S, __tla };
