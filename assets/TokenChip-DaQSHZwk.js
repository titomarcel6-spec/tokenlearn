import { r, j as a, __tla as __tla_0 } from "./index-eVjePRSC.js";
let l;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const f = [
        "#e0e7ff",
        "#d1fae5",
        "#fef3c7",
        "#fce7f3",
        "#dbeafe",
        "#dcfce7"
    ], i = [
        "#3730a3",
        "#065f46",
        "#92400e",
        "#9d174d",
        "#1e40af",
        "#14532d"
    ];
    l = function({ token: e, showId: c = !1, colorIndex: o }) {
        const [d, t] = r.useState(!1), s = o !== void 0 ? o % 6 : void 0;
        return a.jsxs("span", {
            className: "tok-chip",
            style: s !== void 0 ? {
                background: f[s],
                color: i[s]
            } : void 0,
            title: `Token ID: ${e.id}`,
            onMouseEnter: ()=>t(!0),
            onMouseLeave: ()=>t(!1),
            children: [
                e.text.replace(/ /g, "·"),
                (c || d) && a.jsx("span", {
                    className: "tok-id ml-1",
                    children: e.id
                })
            ]
        });
    };
});
export { l as T, __tla };
