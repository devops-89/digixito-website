(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/hooks/useFetchData.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFetchJson",
    ()=>useFetchJson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useFetchJson(url) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFetchJson.useEffect": ()=>{
            let isMounted = true;
            async function fetchData() {
                try {
                    const res = await fetch(url);
                    if (!res.ok) throw new Error("Failed to fetch: ".concat(res.status));
                    const json = await res.json();
                    if (isMounted) {
                        setData(json);
                        setLoading(false);
                    }
                } catch (err) {
                    if (isMounted) {
                        setError(err.message || "Unknown error");
                        setLoading(false);
                    }
                }
            }
            fetchData();
            return ({
                "useFetchJson.useEffect": ()=>{
                    isMounted = false;
                }
            })["useFetchJson.useEffect"];
        }
    }["useFetchJson.useEffect"], [
        url
    ]);
    return {
        data,
        loading,
        error
    };
}
_s(useFetchJson, "RiL7vLwmC7ZWXKL/bXt2EIBjBYk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/widgets/common/faq-question-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Remove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Accordion$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accordion$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Accordion/Accordion.js [app-client] (ecmascript) <export default as Accordion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AccordionDetails$2f$AccordionDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccordionDetails$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/AccordionDetails/AccordionDetails.js [app-client] (ecmascript) <export default as AccordionDetails>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AccordionSummary$2f$AccordionSummary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccordionSummary$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/AccordionSummary/AccordionSummary.js [app-client] (ecmascript) <export default as AccordionSummary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const FaqQuestionCard = (param)=>{
    let { data } = param;
    _s();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("panel1");
    const handleChange = (panel)=>(event, newExpanded)=>{
            setExpanded(newExpanded ? panel : false);
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: data.map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Accordion$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accordion$3e$__["Accordion"], {
                sx: {
                    boxShadow: "none",
                    borderTop: i === 0 ? "1px solid #000" : "none",
                    borderBottom: "1px solid #000",
                    borderRadius: 0,
                    "& .Mui-paper": {
                        borderRadius: 0
                    },
                    "&.MuiAccordion-root::before": {
                        backgroundColor: "transparent",
                        opacity: 0
                    },
                    "&.MuiAccordion-root:last-of-type": {
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0
                    },
                    "&.MuiAccordion-root:first-of-type": {
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0
                    },
                    mb: 4
                },
                expanded: expanded === "panel".concat(i + 1),
                onChange: handleChange("panel".concat(i + 1)),
                "data-aos": "fade-up",
                "data-aos-delay": i * 100,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AccordionSummary$2f$AccordionSummary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccordionSummary$3e$__["AccordionSummary"], {
                        expandIcon: expanded === "panel".concat(i + 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/common/faq-question-card.tsx",
                            lineNumber: 61,
                            columnNumber: 17
                        }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/common/faq-question-card.tsx",
                            lineNumber: 63,
                            columnNumber: 17
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                color: "#222",
                                fontSize: {
                                    lg: 22,
                                    xs: 18
                                },
                                fontWeight: 500
                            },
                            children: [
                                i + 1,
                                ". ",
                                val.question
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/widgets/common/faq-question-card.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/common/faq-question-card.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AccordionDetails$2f$AccordionDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccordionDetails$3e$__["AccordionDetails"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                color: "#222",
                                fontSize: {
                                    lg: 17,
                                    xs: 15
                                },
                                fontWeight: 500,
                                lineHeight: "28.5px"
                            },
                            children: val.answer
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/common/faq-question-card.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/common/faq-question-card.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/components/widgets/common/faq-question-card.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/widgets/common/faq-question-card.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FaqQuestionCard, "BsI/Vr6N394S8s3db4ycFkc/HjU=");
_c = FaqQuestionCard;
const __TURBOPACK__default__export__ = FaqQuestionCard;
var _c;
__turbopack_context__.k.register(_c, "FaqQuestionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/work/work-1.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/work-1.76f1683d.png");}),
"[project]/public/images/homepage/work/work-1.png.mjs { IMAGE => \"[project]/public/images/homepage/work/work-1.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/work/work-1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAnElEQVR42iXMUQ7CIBAEUISlCyywFFraSGtMGo0H0PtfTaqTyfy8ZERdtjKtnCaiaNBpwF40JFo7uo2l+pCsJa0xcY1hEm07lnXPZTnBEFl+3t8nzLX9r7znQOPj+mn1ZdALTiVy7ss8l/GW446D12CFcyHEHGJxlDV4JREA5UWJYbCIhBgG8CAJlJUSRE9HKbVSxqgU1aalFb98AaLFCfNnmijyAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/work/work-2.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/work-2.c27aefed.png");}),
"[project]/public/images/homepage/work/work-2.png.mjs { IMAGE => \"[project]/public/images/homepage/work/work-2.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/work/work-2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAlElEQVR42iWN2w7DIAxDQwgkXAoUto611Tbt/z9ymSr5wbItH0C0LDHXPrZ9np/99X0c7749AcBY6zikVNY6tvX2KP2eSoN/Y7Qj54VD1IWXSJ7BGTEGL+mtLlTqocnBLlv0RBxTbW2uZQ+uQvYz+FWk5KX3cdZlBtcIGdAQogJCTC2nwZQNWICLjVbJRF5wUeSV/gAiQwbPIOL3tgAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/work/work-3.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/work-3.6c5b44f8.png");}),
"[project]/public/images/homepage/work/work-3.png.mjs { IMAGE => \"[project]/public/images/homepage/work/work-3.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/work/work-3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAeUlEQVR42nWOOw7DMAxDHf0lJ4pdF+1kZOn9z1jPAUKA4PAGvlKesgGurr0D0UrsgHxnkcNrYwkAJhZiBSBRL0f/1hwWadE8umt/9avnLOYptqsdortQjvy1No2yKDemiqiKedqMeCsd29IhMAKv/Gl2mZ6Mjpus7z9X3wTylRdcbwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/work/work-4.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/work-4.adc7052f.png");}),
"[project]/public/images/homepage/work/work-4.png.mjs { IMAGE => \"[project]/public/images/homepage/work/work-4.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$4$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/work/work-4.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$4$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAd0lEQVR42nWNWQrDMAxE5UWStdlxQimEQu9/y7rtVwt5X7PADMAPCS74L1JKuZRSP+Rcln+nOWVEEjGP4bGZdWYBQsXaCHn5Oe/Hfva4KU9oPLqfezxnPNwOIsOiVAKW4mZNvEmIxhLESiQg6ubDYtM1LVaRv+cvRx4E5bfs5cwAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/lock.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/lock.8e075f5b.svg");}),
"[project]/public/images/icons/lock.svg.mjs { IMAGE => \"[project]/public/images/icons/lock.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$lock$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/lock.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$lock$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 64,
    height: 81,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/seven-star.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/seven-star.e2f84b61.svg");}),
"[project]/public/images/icons/seven-star.svg.mjs { IMAGE => \"[project]/public/images/icons/seven-star.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$seven$2d$star$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/seven-star.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$seven$2d$star$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 64,
    height: 64,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/secure.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/secure.2c95ec40.png");}),
"[project]/public/images/homepage/secure.png.mjs { IMAGE => \"[project]/public/images/homepage/secure.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$secure$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/secure.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$secure$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 875,
    height: 650,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAMklEQVR42p3OsQ0AMAwCQRayhYL3X40oA4TCBVRXPKrKaViD7jbJDCQZo7GOvgjvUsMFIwhJbRRHzJMAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/connect.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/connect.33b9be95.png");}),
"[project]/public/images/homepage/connect.png.mjs { IMAGE => \"[project]/public/images/homepage/connect.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$connect$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/connect.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$connect$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 854,
    height: 650,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAANElEQVR42oXKORYAEBAEUfe/rDErUXsCYRNUVL/VXGDJMDQ2PRJdlIPbH6gFIusFHAcxsAFMO7rsfpdPhwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/banners/Globe.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Globe.9549b106.png");}),
"[project]/public/images/banners/Globe.png.mjs { IMAGE => \"[project]/public/images/banners/Globe.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$banners$2f$Globe$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/banners/Globe.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$banners$2f$Globe$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 622,
    height: 622,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42hWOYW9DQABAT1ZlDs2Eaq7tYWVD27FxuDrHOlms6bak///HlPfxvS8PCCO2bWmcV97t9hv//w1x1512o1MFAQAwn4szWiUuY4V7vQ4vP0MXtrx8zrI3pGuqBGRZEssiwQ2j7vmT+2n6iiEcpTh7UBRZBLwpvcvlO2CMYtM0oO/jpesgE0JF3mxsE+R5gsMwsBirsL/zTE2Dcn0qnKahXv9Vx+BwiFaG8aSQ/B1xXrsIrfS6rrZty3AUBTYY4+N+Hy0J+Vh3XeNQWm7LgqDjMbZUFUpgYrHQ5TxP131/9gjJUByF04M4tTsILSPPNEowtQAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/banners/fish.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/fish.9494e075.png");}),
"[project]/public/images/banners/fish.png.mjs { IMAGE => \"[project]/public/images/banners/fish.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$banners$2f$fish$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/banners/fish.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$banners$2f$fish$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1484,
    height: 1018,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAe0lEQVR42m2OPQoDIRhE/ftIgrKykUgUgq2dveANbKz0PHoELxw3VRZ2mgdTvBmklGLWWiCEoMt4729jjHcp5SmlJIwxLISgB1cQopSiGCOfc356769a69Za23POu3Pu/rMAAA4h8JTStvgwxoDWGjjn9DR3KNcX/N99ASDXDrCIg7tDAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/contact-us/carbon_location.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/carbon_location.de997799.svg");}),
"[project]/public/images/contact-us/carbon_location.svg.mjs { IMAGE => \"[project]/public/images/contact-us/carbon_location.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$carbon_location$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/contact-us/carbon_location.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$carbon_location$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 56,
    height: 56,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/contact-us/sharp-phone.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/sharp-phone.6dc76f9b.svg");}),
"[project]/public/images/contact-us/sharp-phone.svg.mjs { IMAGE => \"[project]/public/images/contact-us/sharp-phone.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$sharp$2d$phone$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/contact-us/sharp-phone.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$sharp$2d$phone$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 56,
    height: 56,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/contact-us/email.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/email.1ff7243e.svg");}),
"[project]/public/images/contact-us/email.svg.mjs { IMAGE => \"[project]/public/images/contact-us/email.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$email$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/contact-us/email.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$email$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 56,
    height: 56,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Ai-transformation/machine-learning.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/machine-learning.86c4aba6.png");}),
"[project]/public/images/icons/Ai-transformation/machine-learning.png.mjs { IMAGE => \"[project]/public/images/icons/Ai-transformation/machine-learning.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$machine$2d$learning$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Ai-transformation/machine-learning.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$machine$2d$learning$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAiUlEQVR42i3OXQsBURDG8REpUcQVbsQNIhfkTl5DURJbu7Vtu21b+/0/wf6nnqlfp855zsyYmRV444sPfrhjZKoeHiiRIkeAMzoeuOCPGDtskOGKmalthAQrzNXlqLC1cNOvTI++Tx9PDzQ1c48pFmiji4MHhgh1etUwwRZjv2homROWWOOFAeoVE+EN2JLOEgQAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Ai-transformation/creative.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/creative.49484bf4.png");}),
"[project]/public/images/icons/Ai-transformation/creative.png.mjs { IMAGE => \"[project]/public/images/icons/Ai-transformation/creative.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$creative$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Ai-transformation/creative.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$creative$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAc0lEQVR42l3POwqAMBBF0ViJpYWVCFrYqaWgpZ9GsXIH4v7X4J3wAsHikGQyvEyccy5BqnWUuOY3FxpM0qhmd77LCitKVNhU8wkWOaPFjQWdksbQYIcBJw70cYPF1IrNUWCPnwhDWuwr3X9I22R4JAvf/ADTTwoR1NC94gAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Ai-transformation/computer-vision.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/computer-vision.448083b5.png");}),
"[project]/public/images/icons/Ai-transformation/computer-vision.png.mjs { IMAGE => \"[project]/public/images/icons/Ai-transformation/computer-vision.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$computer$2d$vision$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Ai-transformation/computer-vision.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$computer$2d$vision$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQ0lEQVR42o3OsQkAIAxE0YBLhCxgYxvIBBbu4f4reMhhJ8mH1xyCESnWwaCRcXsNcJjk3G4KCwI2BTctPUi/KB357QDoWQepZhFmiAAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Ai-transformation/data-science.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/data-science.84db5c12.png");}),
"[project]/public/images/icons/Ai-transformation/data-science.png.mjs { IMAGE => \"[project]/public/images/icons/Ai-transformation/data-science.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$data$2d$science$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Ai-transformation/data-science.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$data$2d$science$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAgklEQVR42jXPzQqCUBCG4fE2qlsIaVEtWoTWql/CQERBQXAl6MqFV+87+nnggcOcjzkzZmYJWuxtOQE2iPDzQowTPjjjily1ObBDihI38XuPiwceaFDjILVqTw/c1WpU+IVBX8frDJ0eClQKfrH1wBshMvzVzWc4apO5EGm1QEKtnkzl0BGaDh/AdgAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/Creative-Transformation.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Creative-Transformation.f451a0c0.png");}),
"[project]/public/images/icons/Business-Transformation/Creative-Transformation.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/Creative-Transformation.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Creative$2d$Transformation$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/Creative-Transformation.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Creative$2d$Transformation$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAgklEQVR42l3PPQuCYBSG4RMWfdDS0NbiFDU01RJBIIJOgosOTioO6i/QQfzp3q+cF8QHru18iohscMQFZxxklRNe+OELF3ttnHNHiCc+8OAjgGMKrkjRoUWDBJVOlB3+KBAjR4kItV1jRo8YkGmxq0fPuaHXNWbdG9vlJ45+8bCH2UyofQvsust86gAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/brand-strategy.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/brand-strategy.2106fc59.png");}),
"[project]/public/images/icons/Business-Transformation/brand-strategy.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/brand-strategy.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$brand$2d$strategy$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/brand-strategy.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$brand$2d$strategy$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAbklEQVR42l3PQQqAIBCFYYMgQTpAN8hFO3eB6/bhunUnqk2dtaf9SCR8MMwbZTTmPY10MsgiPb0atjLKLLtM9MqQJYyyIdLLmXESZJVbLupAVgeSnHJQ14G8nOfZhEiv+y7puRWo2/9PLE866hI+dEUKPeIPzwUAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/creative.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/creative.2df65ab8.png");}),
"[project]/public/images/icons/Business-Transformation/creative.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/creative.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$creative$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/creative.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$creative$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAjElEQVR42i3PuwrCQBCF4bFRMIhgZ2enhWIjaKEIoiKKV1QEQyCEFOlCmrxD6jxw/oGz8LHscnZ2xsysJb4G6GOCHgK/POKEEYbYYIUFuh4I8cMBc+xw1z72wBN/nDHFR+c1Oh6IUCDXyxQ1ZurLKikR44YMW7Q98MYXD5Xfq9JSk9hFf75wVZVETQYNGwoQLhxe4OMAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/Press-ads.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Press-ads.2d68b943.png");}),
"[project]/public/images/icons/Business-Transformation/Press-ads.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/Press-ads.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Press$2d$ads$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/Press-ads.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Press$2d$ads$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAgElEQVR42m3POwrCQBSF4SuKjQRtVHwUNq5AEGyENHkQyKNMkQSyguy/yn/hDKTIwMfAzJnLGTOzCDFKyfDG1rQeaDDgLxXOIfBEhxHpYtIpBO46+Ol1rnC0DHiHWhN8n/DFxgNXJOrhly0KdTp6YIcLburjU3q8sLeVdcAnfHMGpg8LvwoIOHcAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/digital-transformation.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/digital-transformation.65525e3b.png");}),
"[project]/public/images/icons/Business-Transformation/digital-transformation.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/digital-transformation.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$digital$2d$transformation$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/digital-transformation.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$digital$2d$transformation$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAfklEQVR42k3OwQqCQBSF4ZO1KGgRBVEUtIu2LYKgINBlu0hERXQj+v5P4D9wBAc+uNxzhhlJ+mGLCDuLvAuZ7ngixt9i70KmK1LUaFB5Tp3pgAQlenSeE2fKcMMJX7QuFMhD4YgF1vhg4/mFiyZn748tscID82lhhrNvvsf3B/91DBbFEGfcAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/Paid-Search.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Paid-Search.20b11ee7.png");}),
"[project]/public/images/icons/Business-Transformation/Paid-Search.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/Paid-Search.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Paid$2d$Search$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/Paid-Search.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Paid$2d$Search$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAfUlEQVR42n3OoQqDUBSA4bOxlRVhY9sLLA1WlsaKBtEgJpOCGgRFxCwmi8W39leOQYMHvsuF/144IiIHGLhtGNrkihwVUvjwEGiTJ1yY6DHAga1tPj4IkSFGge/y4I4/akRI0MDSJme88EOJDi3e2lZz0l/Tgg/ZmQuO02UExAELw6dJN9QAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/Natural-Search.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Natural-Search.7a8a74de.png");}),
"[project]/public/images/icons/Business-Transformation/Natural-Search.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/Natural-Search.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Natural$2d$Search$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/Natural-Search.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Natural$2d$Search$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAg0lEQVR42n3OsQuCUBDH8ZOopSEIGoKmoqiIGiIaIkFUcHIS0UkEJwcH/f/B78kJTh584HHv3u+diMgfB6ywxMnoeagSFX5IkaOGC0cH7vgiQosQR2Rjygs3eCjQWUqDjQ5c8cTDXsX4IEGgA2u8LcW3S8f653FR/WuLPS4yUwvspo0ehz0Km9Qv0AQAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/Performance-Display.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Performance-Display.d891daf4.png");}),
"[project]/public/images/icons/Business-Transformation/Performance-Display.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/Performance-Display.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Performance$2d$Display$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/Performance-Display.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Performance$2d$Display$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAfElEQVR42l3PvQqDUAyG4eBSewedvIIunQqFKv7gIIKgTk7iJIKijoL37nskinjgGU6+EBIREQs2nje2ZvKGix8qxKhRaCZfvBBgQIIeOXzT8EeLFQs8ZDrBTJYIsxqRYkKH0DR8UKpGHX+T7Zs+4FwCR2v7FcezLieewQZ2mw3kbsYaRAAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/Social-Media-Marketing.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Social-Media-Marketing.fe12c66c.png");}),
"[project]/public/images/icons/Business-Transformation/Social-Media-Marketing.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/Social-Media-Marketing.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Social$2d$Media$2d$Marketing$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/Social-Media-Marketing.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Social$2d$Media$2d$Marketing$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAg0lEQVR42i3OuQrCUBCF4YNa+gJa2YsiqOCCiuBSaeGOIi4kJGXev8o/4Vz4irlzmBlJqqGBLVL0MMQfb+iAsz8KLDHGA8cI/JwcYIapp61d64McXSwwxwptNOVUjLujhQ1uuHp1lY7dCZ6YYOc67tMJe1zwcrODEfoR+CJzM3OwLr8Sy94RG34vL0UAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/Marketplace-Management.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Marketplace-Management.59eadda1.png");}),
"[project]/public/images/icons/Business-Transformation/Marketplace-Management.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/Marketplace-Management.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Marketplace$2d$Management$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/Marketplace-Management.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Marketplace$2d$Management$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAhElEQVR42k3OuwrCQBCF4RErSx/AwssLKDaiCBaCYmEhihpyJyFluoQkD59/4QSy8DF7mZ0ZM7MdUhTIkSHAwrR8fPHBW9Gdb5iafkcIFWN5YmbaHPCQO866m7iEo+ao0KFRCw+bIWGLPX54oUarwe2Eq0r+kYyqlS5hjhWWWKtSqsdLD7g7EwhNxlFeAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/Catalog-Management.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Catalog-Management.2ec02c9a.png");}),
"[project]/public/images/icons/Business-Transformation/Catalog-Management.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/Catalog-Management.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Catalog$2d$Management$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/Catalog-Management.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Catalog$2d$Management$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAcElEQVR42n3PPQqDQBBA4blMiCFdICIIaqH4BypiJWhh4QG08va+gREWC4sPluXNwIiIePjd+AjwhVR4Od6I0GG6ArUiQWPTgb2lxobDot5RXcH+FIRIsdha/SxRINegxYgZg8mMbpcP/kbPi51zvRPF9hGnyTYpwQAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/Partner-Value.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Partner-Value.9f632560.png");}),
"[project]/public/images/icons/Business-Transformation/Partner-Value.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/Partner-Value.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Partner$2d$Value$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/Partner-Value.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Partner$2d$Value$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAb0lEQVR42l3PMQ6AIAyF4Z7Ayc1JnRRjnBy8it6ASUN0krP7ID+Lw0eavqaAmZmXS1pp0NJLmT0SZfqJZNbLLLWsqOmlLK90ssghO7Ujy8coA+FBPZaBjjsrHuWpJzI75WblBkcvZRbkZbp8s6MXPuN4D7t9qVn6AAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/sales-boost.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/sales-boost.2557b84b.png");}),
"[project]/public/images/icons/Business-Transformation/sales-boost.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/sales-boost.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$sales$2d$boost$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/sales-boost.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$sales$2d$boost$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAgElEQVR42jXOuwqDQBCF4XmMQKqkyIUUIV1uRSQkVgqKCKIoKoqlvn/jv3IsPpbdmZ05ZmYjYpSodXboMcE8bHBEhT0ifFSzB3ZIUaBFghvua8MVATI0muRpqj3ha2ctLsNfn5fLoECrUW+uZif88MJb3P4QZ9ewRa4cX7ko9GEG7mwS1k3/x6oAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/Business-Transformation/Inventory-Management.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Inventory-Management.30914f1c.png");}),
"[project]/public/images/icons/Business-Transformation/Inventory-Management.png.mjs { IMAGE => \"[project]/public/images/icons/Business-Transformation/Inventory-Management.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Inventory$2d$Management$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/Business-Transformation/Inventory-Management.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Inventory$2d$Management$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAhElEQVR42jXOSwfDUBCG4aGU/oVWVbsIvdBuWrqollZvciNyEyGyCdlF/j95T8w5PMyZ71uMiMgEc3zQ4oeF7se3whsZQhR4YWkLDhoNjRtOOju2UOELH2ct9biawgYdUr3jghgPTEWHCAn28FBia2/4w9XgiQB3rG3hgBo5jvrfYWbCAWm+DnwmqTEBAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/data/generic-array.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AI_MARKETING_GROWTH",
    ()=>AI_MARKETING_GROWTH,
    "AI_TRANSFORMATION_DATA",
    ()=>AI_TRANSFORMATION_DATA,
    "BUSINESS_TRANSFORMATION_DATA",
    ()=>BUSINESS_TRANSFORMATION_DATA,
    "CONTACT_CARD_DATA",
    ()=>CONTACT_CARD_DATA,
    "COUNTER_CARD_DATA",
    ()=>COUNTER_CARD_DATA,
    "DESIGN_INTELLIGENCE_DATA",
    ()=>DESIGN_INTELLIGENCE_DATA,
    "FAQ_DATA",
    ()=>FAQ_DATA,
    "LINK_LIST_DATA",
    ()=>LINK_LIST_DATA,
    "PRODUCT_ENGINEERING",
    ()=>PRODUCT_ENGINEERING,
    "SECURE_CARD_DATA",
    ()=>SECURE_CARD_DATA,
    "SERVCIES_ARROW_CARD_DATA",
    ()=>SERVCIES_ARROW_CARD_DATA,
    "SERVICES_TAB",
    ()=>SERVICES_TAB,
    "SERVICES_TAB_DATA",
    ()=>SERVICES_TAB_DATA,
    "TERMS_PAGE_LINKS",
    ()=>TERMS_PAGE_LINKS,
    "TESTIMONIAL_CARD_DATA",
    ()=>TESTIMONIAL_CARD_DATA,
    "VALUE_CARD_DATA",
    ()=>VALUE_CARD_DATA,
    "WHAT_WE_VALUE_CARD_PROPS",
    ()=>WHAT_WE_VALUE_CARD_PROPS,
    "WORK_AT_DIGIXITO_CARD_DATA",
    ()=>WORK_AT_DIGIXITO_CARD_DATA,
    "WORK_CARD_DATA",
    ()=>WORK_CARD_DATA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/work/work-1.png.mjs { IMAGE => "[project]/public/images/homepage/work/work-1.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/work/work-2.png.mjs { IMAGE => "[project]/public/images/homepage/work/work-2.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/work/work-3.png.mjs { IMAGE => "[project]/public/images/homepage/work/work-3.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/work/work-4.png.mjs { IMAGE => "[project]/public/images/homepage/work/work-4.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$lock$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$lock$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/lock.svg.mjs { IMAGE => "[project]/public/images/icons/lock.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$seven$2d$star$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$seven$2d$star$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/seven-star.svg.mjs { IMAGE => "[project]/public/images/icons/seven-star.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$secure$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$secure$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/secure.png.mjs { IMAGE => "[project]/public/images/homepage/secure.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$connect$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$connect$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/connect.png.mjs { IMAGE => "[project]/public/images/homepage/connect.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$banners$2f$Globe$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$banners$2f$Globe$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/banners/Globe.png.mjs { IMAGE => "[project]/public/images/banners/Globe.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$banners$2f$fish$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$banners$2f$fish$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/banners/fish.png.mjs { IMAGE => "[project]/public/images/banners/fish.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$carbon_location$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$carbon_location$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/contact-us/carbon_location.svg.mjs { IMAGE => "[project]/public/images/contact-us/carbon_location.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$sharp$2d$phone$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$sharp$2d$phone$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/contact-us/sharp-phone.svg.mjs { IMAGE => "[project]/public/images/contact-us/sharp-phone.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$email$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$email$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/contact-us/email.svg.mjs { IMAGE => "[project]/public/images/contact-us/email.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$machine$2d$learning$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$machine$2d$learning$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Ai-transformation/machine-learning.png.mjs { IMAGE => "[project]/public/images/icons/Ai-transformation/machine-learning.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$creative$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$creative$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Ai-transformation/creative.png.mjs { IMAGE => "[project]/public/images/icons/Ai-transformation/creative.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$computer$2d$vision$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$computer$2d$vision$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Ai-transformation/computer-vision.png.mjs { IMAGE => "[project]/public/images/icons/Ai-transformation/computer-vision.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$data$2d$science$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$data$2d$science$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Ai-transformation/data-science.png.mjs { IMAGE => "[project]/public/images/icons/Ai-transformation/data-science.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Creative$2d$Transformation$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Creative$2d$Transformation$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/Creative-Transformation.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/Creative-Transformation.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$brand$2d$strategy$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$brand$2d$strategy$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/brand-strategy.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/brand-strategy.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$creative$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$creative$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/creative.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/creative.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Press$2d$ads$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Press$2d$ads$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/Press-ads.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/Press-ads.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$digital$2d$transformation$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$digital$2d$transformation$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/digital-transformation.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/digital-transformation.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Paid$2d$Search$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Paid$2d$Search$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/Paid-Search.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/Paid-Search.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Natural$2d$Search$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Natural$2d$Search$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/Natural-Search.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/Natural-Search.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Performance$2d$Display$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Performance$2d$Display$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/Performance-Display.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/Performance-Display.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Social$2d$Media$2d$Marketing$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Social$2d$Media$2d$Marketing$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/Social-Media-Marketing.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/Social-Media-Marketing.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Marketplace$2d$Management$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Marketplace$2d$Management$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/Marketplace-Management.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/Marketplace-Management.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Catalog$2d$Management$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Catalog$2d$Management$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/Catalog-Management.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/Catalog-Management.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Partner$2d$Value$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Partner$2d$Value$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/Partner-Value.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/Partner-Value.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$sales$2d$boost$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$sales$2d$boost$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/sales-boost.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/sales-boost.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Inventory$2d$Management$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Inventory$2d$Management$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/Business-Transformation/Inventory-Management.png.mjs { IMAGE => "[project]/public/images/icons/Business-Transformation/Inventory-Management.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const SERVICES_TAB = [
    {
        label: "AI Transformation"
    },
    {
        label: "Business Transformation"
    },
    {
        label: "Product Engineering"
    },
    {
        label: "Design Intelligence"
    }
];
const SERVCIES_ARROW_CARD_DATA = [
    {
        title: "Specialists who speak the same language: Success",
        backgroundColor: "#2B2B2B",
        textColor: "#ffffff",
        iconBgColor: "#333",
        iconColor: "#ffffff",
        secondTitle: "Meet our experts"
    },
    {
        title: "We build foundations that outlast economies.",
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
        textColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
        iconBgColor: "#ffffff",
        iconColor: "#333333",
        secondTitle: "See how we work"
    }
];
const WORK_CARD_DATA = [
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        number: "01",
        title: "Market Intelligence",
        description: "We dissect markets like scientists and decode trends like prophets. Every strategy starts with research, user psychology, competitor blind spots, and algorithm patterns. We know your audience better than they know themselves."
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        number: "02",
        title: "Dedicated Specialists",
        description: "No multitasking. No divided attention. Your brand gets brand strategists. Your growth gets growth engineers. Each expert owns their domain completely. Specialized teams working in perfect sync"
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        number: "03",
        title: "Zero to hero Brands",
        description: "We architect brands with deep roots, strong enough to weather recessions, agile enough to capture booms. While others chase quick wins, we engineer sustainable growth DNA into every brand element"
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$work$2f$work$2d$4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        number: "04",
        title: "A decade of powers",
        description: "Ten years. Hundreds of brands. Thousands of pivots. We've survived algorithm apocalypses, platform deaths, through recessions and revolutions. We've solved problems without playbooks."
    }
];
const TESTIMONIAL_CARD_DATA = [
    {
        name: "Alan Baker",
        designation: "CEO of Redbird Company",
        description: "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
    },
    {
        name: "Alan Baker",
        designation: "CEO of Redbird Company",
        description: "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
    },
    {
        name: "Alan Baker",
        designation: "CEO of Redbird Company",
        description: "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
    },
    {
        name: "Alan Baker",
        designation: "CEO of Redbird Company",
        description: "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
    },
    {
        name: "Alan Baker",
        designation: "CEO of Redbird Company",
        description: "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
    },
    {
        name: "Alan Baker",
        designation: "CEO of Redbird Company",
        description: "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
    },
    {
        name: "Alan Baker",
        designation: "CEO of Redbird Company",
        description: "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
    },
    {
        name: "Alan Baker",
        designation: "CEO of Redbird Company",
        description: "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
    },
    {
        name: "Alan Baker",
        designation: "CEO of Redbird Company",
        description: "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
    },
    {
        name: "Alan Baker",
        designation: "CEO of Redbird Company",
        description: "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!"
    }
];
const FAQ_DATA = [
    {
        question: "What makes Digixito different from other agencies?",
        answer: "We’re not just a digital agency — we’re a digital ecosystem. Our multidisciplinary team of strategists, designers, developers, and AI engineers work together to deliver end-to-end solutions that drive measurable growth and long-term impact."
    },
    {
        question: "Does Digixito work with startups or only established companies?",
        answer: "We work with both! Whether you’re a startup building your first online presence or an enterprise optimizing digital performance, we customize our approach to match your stage, industry, and goals."
    },
    {
        question: "Can Digixito handle complete 360° brand solutions?",
        answer: "Yes — from naming and identity design to digital marketing, software development, and AI integration — we deliver holistic brand transformation under one roof."
    },
    {
        question: "How can I get started with Digixito?",
        answer: "Simply reach out through our Contact page or email us with your project details. Our team will schedule a free consultation to discuss your goals, understand your needs, and create a customized action plan."
    }
];
const SECURE_CARD_DATA = [
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$lock$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$lock$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        backgroundImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$secure$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$secure$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        heading: "Secure. Smart. Scalable.",
        description: "Digixito is engineered to protect your data while scaling your vision. Security isn’t an add-on — it’s our foundation. ",
        isButton: true,
        button: "Learn About Compliance"
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$seven$2d$star$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$seven$2d$star$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        backgroundImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$connect$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$connect$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        heading: "Connected by Intelligence",
        description: "From marketing tools to AI workflows — Digixito connects everything that drives your growth. One hub. Infinite possibilities.",
        isButton: false,
        button: "Discover Integrations"
    }
];
const TERMS_PAGE_LINKS = [
    {
        label: "Privacy Policy",
        url: "/privacy-policy"
    },
    {
        label: "Terms",
        url: "/terms"
    }
];
const LINK_LIST_DATA = [
    {
        heading: "What we offer",
        data: [
            {
                label: "AI Transformation",
                url: "/ai-transformation"
            },
            {
                label: "Business Transformation",
                url: "/business-transformation"
            },
            {
                label: "Product Engineering",
                url: "/product-engineering"
            },
            {
                label: "AI in Marketing & Growth",
                url: "/ai-marketing-growth"
            },
            {
                label: "Design Intelligence",
                url: "/design-intelligence"
            }
        ]
    },
    {
        heading: "What we are",
        data: [
            {
                label: "About Us",
                url: "/about-us"
            }
        ]
    },
    {
        heading: "Career",
        data: [
            {
                label: "Life At Digixito",
                url: "/careers/life-at-digixito"
            },
            {
                label: "Contact Us",
                url: "/contact-us"
            }
        ]
    }
];
const VALUE_CARD_DATA = [
    {
        number: "01",
        title: "Innovation",
        description: "We don't follow trends, we create them. Every solution pushes boundaries, challenges conventions, and redefines what's possible."
    },
    {
        title: "Passion",
        description: "This isn't just work, it's craft. We obsess over pixels, perfect code, and celebrate breakthroughs.",
        number: "02"
    },
    {
        title: "Ownership",
        description: "Your project becomes our mission. We take responsibility for outcomes, not just outputs. Success or learnings, we own it.",
        number: "03"
    },
    {
        title: "Growth",
        description: "Stagnation is death. We evolve daily, new skills, new tech, new perspectives. Your growth fuels our growth ",
        number: "04"
    },
    {
        number: "01",
        title: "Innovation",
        description: "We don't follow trends, we create them. Every solution pushes boundaries, challenges conventions, and redefines what's possible."
    },
    {
        title: "Passion",
        description: "This isn't just work, it's craft. We obsess over pixels, perfect code, and celebrate breakthroughs.",
        number: "02"
    },
    {
        title: "Ownership",
        description: "Your project becomes our mission. We take responsibility for outcomes, not just outputs. Success or learnings, we own it.",
        number: "03"
    },
    {
        title: "Growth",
        description: "Stagnation is death. We evolve daily, new skills, new tech, new perspectives. Your growth fuels our growth ",
        number: "04"
    }
];
const COUNTER_CARD_DATA = [
    {
        number: 99,
        suffix: "%",
        title: "Customer Satisfaction"
    },
    {
        number: 32,
        suffix: "+",
        title: "Active Clients"
    },
    {
        number: 125,
        suffix: "+",
        title: "Team Members"
    },
    {
        number: 240,
        suffix: "%",
        title: "Company Growth"
    }
];
const WHAT_WE_VALUE_CARD_PROPS = [
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$banners$2f$Globe$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$banners$2f$Globe$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        data: [
            {
                serial_number: "01",
                heading: "Act for the Greater Good",
                description: "We build technology that benefits businesses and communities alike. Every decision we make  from code to customer delivery  reflects our belief that innovation should improve lives and empower progress."
            },
            {
                serial_number: "02",
                heading: "Balance Vision and Reality",
                description: "We acknowledge both the challenges and the potential of the digital era. By staying grounded in data and empathy, we design solutions that are bold yet practical  balancing creativity with technical precision."
            },
            {
                serial_number: "03",
                heading: "Be Human-Centric",
                description: "Whether we’re designing user interfaces or optimizing machine learning models, we start with people. Our goal is to craft experiences that are intuitive, inclusive, and truly impactful."
            }
        ]
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$banners$2f$fish$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$banners$2f$fish$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        data: [
            {
                serial_number: "04",
                heading: "Build Responsibly with AI",
                description: "We champion an ethical approach to AI/ML  prioritizing transparency, security, and fairness. At Digixito, innovation isn’t a race to the fastest product, but to the most responsible one."
            },
            {
                serial_number: "05",
                heading: "Keep It Simple",
                description: "Complex systems deserve simple solutions. We believe clarity is strength — in our design, our communication, and our code. The simplest path that works well is the one we take."
            },
            {
                serial_number: "06",
                heading: "Be Honest, Be Kind",
                description: "We work in a culture of trust, humility, and openness. Every idea is valued, and feedback is shared with empathy. We learn fast, stay grounded, and always uplift each other."
            }
        ],
        isReverse: true
    }
];
const WORK_AT_DIGIXITO_CARD_DATA = [
    {
        serial_number: "01",
        heading: "Create with purpose.",
        description: "Every line of code and every pixel we design must create impact. We don’t just build for clients  we build for real problems that matter. Our focus is on outcomes that drive progress, improve experiences, and make technology genuinely useful."
    },
    {
        serial_number: "02",
        heading: "Embrace curiosity and learning.",
        description: "We believe innovation thrives where curiosity lives. From exploring the latest in AI/ML to experimenting with new design tools, we constantly learn, adapt, and evolve. Every project is a classroom, and every challenge is an opportunity to grow."
    },
    {
        serial_number: "03",
        heading: "Design for humans.",
        description: "At Digixito, user experience isn’t an afterthought it’s the foundation. We design interfaces and systems that are intuitive, inclusive, and deeply human. Technology should feel effortless, not complex, and we take pride in making that happen."
    },
    {
        serial_number: "04",
        heading: "Collaborate without boundaries.",
        description: "We work as one team  across disciplines, ideas, and time zones. Engineers think like designers. Designers talk like strategists. Strategists build like makers. Collaboration isn’t a process here; it’s our superpower."
    }
];
const CONTACT_CARD_DATA = [
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$carbon_location$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$carbon_location$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        heading: "Address",
        description: "2nd Floor, D-320, Sector 63 Rd, Noida, Uttar Pradesh, India"
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$sharp$2d$phone$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$sharp$2d$phone$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        heading: "Phone Number",
        description: "+91 8800291352"
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$email$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$contact$2d$us$2f$email$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        heading: "E - mail",
        description: "Info@digixito.com"
    }
];
const SERVICES_TAB_DATA = {
    AI_TRANSFORMATION: [
        {
            starCardData: {
                normalHeading: "We study the game before we rewrite",
                boldHeading: "the rules"
            },
            data: [
                {
                    heading: "Specialists who speak the same language: Success",
                    bottomTitle: "Meet our experts",
                    backgroundColor: "#2B2B2B",
                    textColor: "#ffffff",
                    iconBgColor: "#333",
                    iconColor: "#ffffff"
                },
                {
                    heading: "We build foundations that outlast economies.",
                    bottomTitle: "See how we work",
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                    textColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                    iconBgColor: "#ffffff",
                    iconColor: "#333333"
                }
            ]
        }
    ],
    BUSINESS_TRANSFORMATION: [
        {
            starCardData: {
                normalHeading: "We redesign what your business can become not just",
                boldHeading: "what it is."
            },
            data: [
                {
                    heading: "Strategists who convert complexity into clarity.",
                    bottomTitle: "Meet our experts",
                    backgroundColor: "#2B2B2B",
                    textColor: "#ffffff",
                    iconBgColor: "#333",
                    iconColor: "#ffffff"
                },
                {
                    heading: "We build business foundations that thrive in any market.",
                    bottomTitle: "See how we work",
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                    textColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                    iconBgColor: "#ffffff",
                    iconColor: "#333333"
                }
            ]
        }
    ],
    Product_Engineering: [
        {
            starCardData: {
                normalHeading: "We build products that perform today and evolve for",
                boldHeading: "tomorrow"
            },
            data: [
                {
                    heading: "Engineers who turn bold ideas into reliable systems.",
                    bottomTitle: "Meet our experts",
                    backgroundColor: "#2B2B2B",
                    textColor: "#ffffff",
                    iconBgColor: "#333",
                    iconColor: "#ffffff"
                },
                {
                    heading: "We build scalable architectures that grow with you.",
                    bottomTitle: "See how we work",
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                    textColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                    iconBgColor: "#ffffff",
                    iconColor: "#333333"
                }
            ]
        }
    ],
    Design_intelligence: [
        {
            starCardData: {
                normalHeading: "We design experiences that think, adapt, and",
                boldHeading: "convert"
            },
            data: [
                {
                    heading: "Designers who blend creativity with behavioral science.",
                    bottomTitle: "Meet our experts",
                    backgroundColor: "#2B2B2B",
                    textColor: "#ffffff",
                    iconBgColor: "#333",
                    iconColor: "#ffffff"
                },
                {
                    heading: "We create design systems that stay timeless, not trendy.",
                    bottomTitle: "See how we work",
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                    textColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                    iconBgColor: "#ffffff",
                    iconColor: "#333333"
                }
            ]
        }
    ]
};
const AI_TRANSFORMATION_DATA = [
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$machine$2d$learning$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$machine$2d$learning$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        title: "Machine Learning & Predictive Models",
        description: "At Digixito, we combine the power of machine learning with predictive analytics to build solutions that scale.\nFrom real-time insights to intelligent automation, our models learn from your data to uncover patterns, forecast outcomes, and enhance performance across your operations.\nWe help businesses use AI responsibly — transforming complex datasets into actionable intelligence that drives measurable results.",
        url: "/ai-transformation/machine-learning-and-predictive-models"
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$creative$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$creative$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        title: "Generative AI",
        description: "At Digixito, we harness the potential of Generative AI to bring automation, personalization, and creativity together.\nOur solutions use advanced LLMs and transformer-based architectures to deliver natural conversations, intelligent workflows, and human-like content generation — all tailored to your brand voice.\nFrom customer engagement to document processing, we design AI systems that not only respond but also learn, adapt, and evolve with your users.",
        url: "/ai-transformation/generative-ai"
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$computer$2d$vision$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$computer$2d$vision$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        title: "Computer Vision & OCR Systems",
        description: "At Digixito, we help businesses unlock the power of computer vision and document intelligence to transform how they process visuals and data.\nFrom object detection and face recognition to real-time image classification and automated document extraction, our solutions combine AI precision with operational speed.\nOur vision models bring structure to unstructured data — reading, identifying, and interpreting the world the way humans do, but at machine scale.",
        url: "/ai-transformation/computer-vision-and-ocr-systems"
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$data$2d$science$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Ai$2d$transformation$2f$data$2d$science$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        title: "Data Engineering & MLOps",
        description: "At Digixito, we empower organizations to manage data as a strategic asset.\nOur Data Engineering and MLOps solutions help teams unify data sources, ensure quality, and automate model operations at scale.\nWe focus on building the foundation for AI success — enabling faster experimentation, cleaner data, and seamless deployment of production-ready ML models across any infrastructure.",
        url: "/ai-transformation/data-engineering-and-mlops"
    }
];
const BUSINESS_TRANSFORMATION_DATA = [
    {
        title: "Creative Transformation",
        description: "Creativity today is not just about visuals — it’s about vision.\nIn a world driven by digital-first interactions, brands need more than design; they need stories, systems, and experiences that make them unforgettable.\nAt Digixito, we help companies discover their creative identity and align it with a clear digital strategy.\nOur multidisciplinary approach unites design thinking, marketing psychology, and emerging technology to deliver consistent, meaningful, and high-performing creative ecosystems",
        url: "/business-transformation/creative-transformation",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Creative$2d$Transformation$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Creative$2d$Transformation$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Brand Strategy",
        description: "In today’s fast-evolving digital landscape, brands don’t just compete on products — they compete on meaning.\nYour audience connects with purpose, values, and authenticity. That’s why our Brand Strategy services focus on building the emotional and strategic foundation that drives every visual, message, and experience.\nAt Digixito, we partner with you to define what your brand stands for — then translate that vision into an actionable strategy that influences design, marketing, and customer relationships.\nWe blend data, creativity, and psychology to ensure your brand not only looks right but feels right to the people who matter most.",
        url: "/business-transformation/brand-strategy",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$brand$2d$strategy$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$brand$2d$strategy$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "360° Creative Campaigns",
        description: "In today’s hyperconnected world, creativity thrives on connection.\nA brand’s message must move seamlessly across every channel — online and offline — while staying true to its essence.\nOur 360° Creative Campaigns service unifies strategy, storytelling, and design to deliver cohesive, impactful campaigns that resonate across mediums.\nWe help brands speak in one powerful voice — whether it’s a digital launch, a social movement, or a product rollout.\nAt Digixito, we believe campaigns shouldn’t just be creative — they should be experiential, data-driven, and emotionally intelligent.",
        url: "/business-transformation/360-creative-campaigns",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$creative$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$creative$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Press Ads & TV Commercials",
        description: "In an era of endless scrolling, timeless storytelling still wins attention.\nPress ads and television commercials remain two of the most influential ways to create emotional connections and build trust — when done with purpose and creativity.\nAt Digixito, we blend the art of storytelling with the science of audience psychology to produce campaigns that strike the perfect balance between brand message and emotional pull.\nWhether it’s a print ad that captures a thought in one frame or a TVC that moves millions in 30 seconds, we ensure every frame, word, and sound works together to make your brand unforgettable.\nOur creative team crafts campaigns that don’t just sell — they shape perception, build credibility, and drive cultural relevance.",
        url: "/business-transformation/press-ads-and-tv-commercials",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Press$2d$ads$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Press$2d$ads$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Digital Transformation",
        description: "The future belongs to brands that adapt.\n  In a world where customer expectations evolve faster than ever, digital transformation is no longer optional — it’s essential.\n  At Digixito, we help businesses evolve from traditional operations into data-driven, technology-powered ecosystems.\n  From AI-driven automation to cloud adoption, we design systems that improve efficiency, scale faster, and enhance customer experience at every touchpoint.\n  Our goal is to build future-ready organizations — where technology empowers people, decisions are data-informed, and innovation becomes part of your company’s DNA.\n  We don’t just implement tools — we transform the way you think, build, and deliver.",
        url: "/business-transformation/digital-transformation",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$digital$2d$transformation$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$digital$2d$transformation$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Paid Search",
        description: "Your audience is searching for solutions — every second, every day.With the right strategy, your brand can be the answer they find first.\nAt Digixito, our Paid Search solutions help brands dominate search results through data-backed precision and creative storytelling. We don’t just drive traffic — we attract intent-driven users who are ready to act.\nOur team leverages years of PPC expertise, advanced keyword intelligence, and conversion-focused landing page design to deliver results that scale revenue, not just clicks. Whether it’s Google Ads, Bing, or YouTube, we optimize every campaign for performance, efficiency, and measurable ROI — ensuring your business is seen, remembered, and chosen.",
        url: "/business-transformation/paid-search",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Paid$2d$Search$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Paid$2d$Search$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Natural Search",
        description: "Search isn’t just about algorithms — it’s about understanding people.Today’s digital world demands more than quick fixes or paid visibility. It requires long-term search strategies that build authority, trust, and brand value.\nAt Digixito, we specialize in Organic Search Optimization (SEO) that aligns with how your audience searches, interacts, and buys.\nWe combine deep keyword research, content optimization, technical SEO, and backlink strategies to ensure your website not only ranks higher but also stays relevant in every search journey.\nOur approach goes beyond traffic — we build digital ecosystems that grow naturally, sustain momentum, and convert audience intent into measurable success.",
        url: "/business-transformation/natural-search",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Natural$2d$Search$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Natural$2d$Search$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Performance Display",
        description: "In a world overflowing with visuals, standing out requires more than just creative design — it demands strategy.\n  That’s where Performance Display Advertising bridges the gap between art and analytics.\n  At Digixito, we design, deploy, and optimize display campaigns that deliver beyond impressions.\n  From banner ads to video display, our approach focuses on precision audience targeting, real-time performance analysis, and creative excellence that speaks directly to intent-driven users.\n  Our team blends the science of data with the craft of storytelling — ensuring every ad not only looks good but also performs brilliantly.\n  We turn visibility into engagement, engagement into action, and action into lasting brand growth.",
        url: "/business-transformation/performance-display",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Performance$2d$Display$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Performance$2d$Display$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Social Media Marketing",
        description: "Social media isn’t just a platform — it’s your brand’s voice in motion.\n  From storytelling to sales, every post, story, and campaign shapes how people perceive your business.\n  At Digixito, we help brands make that voice powerful, consistent, and strategic.\n  Our Social Media Marketing service blends creative content, paid strategy, and real-time analytics to create meaningful digital conversations that convert into business results.\n  We focus on connection over clutter — building brands that don’t just appear on feeds but leave a lasting impression.\n  Whether it’s launching a product, scaling brand presence, or creating viral moments, we make sure every pixel and caption has a purpose.",
        url: "/business-transformation/social-media-marketing",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Social$2d$Media$2d$Marketing$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Social$2d$Media$2d$Marketing$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Marketplace Management",
        description: "Marketplaces are where discovery meets decision.\n  From Amazon and Flipkart to Meesho and Nykaa, these platforms define how customers explore, evaluate, and buy — making them critical growth engines for every modern business.\n  At Digixito, we help brands establish, manage, and scale their presence across multiple online marketplaces with end-to-end management solutions.\n  Our approach blends platform expertise, content optimization, performance ads, and operational efficiency to increase visibility and boost conversions.\n  We turn complex marketplace ecosystems into streamlined, scalable, and sales-ready operations that grow your brand’s reach and revenue consistently.",
        url: "/business-transformation/marketplace-management",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Marketplace$2d$Management$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Marketplace$2d$Management$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Catalog Management",
        description: "Your product catalog is more than a list — it’s your brand’s digital storefront.\n  An inconsistent or poorly structured catalog can lead to missed sales opportunities, low visibility, and reduced customer trust.\n  At Digixito, we help brands create and maintain high-performing, optimized catalogs that convert browsers into buyers.\n  Our process ensures every product — across every platform — is properly categorized, described, and visually represented for maximum impact.\n  From SKUs and attributes to imagery and SEO tagging, we bring clarity, precision, and consistency to your catalog — empowering you to sell effortlessly across e-commerce platforms and marketplaces.\n  We make your digital catalog a growth engine, not a data headache.",
        url: "/business-transformation/catalog-management",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Catalog$2d$Management$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Catalog$2d$Management$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Inventory Management",
        description: "In today’s fast-paced e-commerce ecosystem, inventory is the backbone of every successful business.\n  Poor visibility, manual tracking, and delayed updates can lead to overstocking, lost sales, and frustrated customers.\n  At Digixito, we simplify the chaos.\n  Our Inventory Management systems are designed to give you full control and visibility — from warehouse to checkout. We unify multi-platform operations, synchronize data across marketplaces, and automate replenishment to ensure your products are always available when customers need them.\n  Whether you manage hundreds or thousands of SKUs, we make sure your inventory runs lean, accurate, and aligned with your growth goals.\n  We help brands move from manual management to intelligent automation — unlocking operational excellence and higher profitability.",
        url: "/business-transformation/inventory-management",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Inventory$2d$Management$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Inventory$2d$Management$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Partner Value Added Services",
        description: "In today’s connected business world, success isn’t built alone — it’s built together.\n  Partnerships thrive when each side brings innovation, trust, and shared value to the table.\n  At Digixito, we collaborate with technology providers, marketing agencies, and enterprise platforms to deliver end-to-end value-added services that elevate customer experience, accelerate digital transformation, and unlock new growth opportunities.\n  We bridge gaps between systems, services, and solutions — ensuring our partners gain access to extended capabilities, expertise, and new revenue streams.\n  Our mission is simple: to co-create smarter solutions that deliver greater value, together.",
        url: "/business-transformation/partner-value-added-services",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Partner$2d$Value$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$Partner$2d$Value$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Sales Boost Program",
        description: "At Digixito, we help brands unlock their highest revenue potential through intelligent marketing systems, optimized funnels, and automation-driven strategies.\nOur Sales Boost Program merges analytics, creativity, and technology to create powerful growth engines that deliver consistent, measurable results.\nBecause growth isn’t about luck — it’s about building a system that sells.",
        url: "/business-transformation/sales-boost-program",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$sales$2d$boost$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$Business$2d$Transformation$2f$sales$2d$boost$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    }
];
const PRODUCT_ENGINEERING = [
    {
        title: "Application & SaaS Development",
        description: "At Digixito, we design and develop custom web applications and SaaS platforms that blend powerful technology with exceptional user experience.\nOur solutions are built to scale, adapt, and perform — enabling startups and enterprises to innovate faster and operate smarter.\nBecause great software doesn’t just work — it evolves with your business.",
        url: "/product-engineering/application-and-saas-development"
    },
    {
        title: "Web and Mobile Platforms",
        description: "At Digixito, we craft powerful, high-performing web and mobile platforms designed to connect brands with users through meaningful, intuitive, and scalable experiences.\nWhether you’re building a responsive website, enterprise web portal, or next-gen mobile app — we ensure design, technology, and performance come together perfectly.\nBecause in today’s world, your platform is your brand.",
        url: "/product-engineering/web-and-mobile-platforms"
    },
    {
        title: "System Integration & API Development",
        description: "At Digixito, we build powerful APIs and seamless system integrations that unify your technology ecosystem — ensuring your platforms, products, and processes work as one.\nOur integration-first approach eliminates silos, improves data flow, and enhances business agility across every layer of your digital infrastructure.\nBecause when your systems talk to each other — your business moves faster.",
        url: "/product-engineering/system-integration-and-api-development"
    },
    {
        title: "Cloud Infrastructure",
        description: "At Digixito, we architect, deploy, and manage scalable cloud infrastructure that helps businesses accelerate performance, improve reliability, and reduce operational costs.\nOur cloud solutions are built for agility — ensuring your digital ecosystem runs efficiently, securely, and seamlessly across AWS, Azure, and Google Cloud.\nBecause in the digital era, the cloud isn’t just infrastructure — it’s the foundation of innovation.",
        url: "/product-engineering/cloud-infrastructure"
    }
];
const AI_MARKETING_GROWTH = [
    {
        title: "AI-Driven Digital Marketing",
        description: "Marketing has evolved beyond guesswork.\nModern brands need precision — strategies that learn from data, adapt to behavior, and evolve in real time.\nAt Digixito, we blend data science with storytelling to create AI-powered marketing ecosystems that identify trends before they happen and connect with customers before competitors do.\nFrom automated ad bidding to AI-personalized content, we help you build marketing systems that continuously analyze, optimize, and perform — so every click, conversion, and impression contributes to measurable business growth.\nOur philosophy is simple: let intelligence lead creativity — and creativity humanize data.",
        url: "/ai-marketing-growth/ai-driven-digital-marketing"
    },
    {
        title: "Marketplace Management & Sales Boost",
        description: "Online marketplaces have become the new battleground for brands — fast, competitive, and opportunity-rich.\nBut managing multiple platforms, optimizing catalogs, handling inventory, and scaling sales simultaneously can be overwhelming.\nThat’s where Digixito steps in.\nWe simplify your marketplace journey through data-led management, automation, and strategic sales acceleration — ensuring your products stay visible, competitive, and profitable.\nOur experts handle everything — from onboarding and catalog optimization to performance ads, pricing strategies, and logistics alignment — turning your marketplace operations into a sustainable sales engine.\nWe don’t just list your products; we elevate your brand to outperform in every marketplace.",
        url: "/ai-marketing-growth/market-management-and-sales-boost"
    },
    {
        title: "Brand Strategy & Positioning",
        description: "In a world overflowing with products and messages, your brand isn’t just what you sell — it’s what people remember, believe, and trust.\nThat’s why brand strategy lies at the heart of every successful business transformation.\nAt Digixito, we help brands discover their purpose, define their positioning, and express it across every touchpoint.\nThrough in-depth market analysis, audience segmentation, and value proposition mapping, we craft brand strategies that make your business stand out, stay relevant, and scale globally.\nWe go beyond logos and taglines — creating meaningful brand identities that build relationships and inspire loyalty.",
        url: "/ai-marketing-growth/brand-strategy-and-positioning"
    },
    {
        title: "Performance Marketing & Conversion Optimization",
        description: "Marketing today isn’t about spending more — it’s about spending smarter.\nEvery rupee should bring you closer to your audience and further from your competitors.\nAt Digixito, we design performance-first marketing ecosystems that balance creativity with analytics.\nFrom paid campaigns and retargeting to landing page optimization and funnel automation, we focus on building high-performing journeys that attract, engage, and convert.\nOur conversion optimization process goes beyond surface-level metrics.\nWe analyze data patterns, user behavior, and interaction touchpoints to understand why users act — and how to make them act faster.\nWe don’t just run ads — we engineer performance that grows with precision.",
        url: "/ai-marketing-growth/performance-marketing-and-conversion-optimization"
    },
    {
        title: "Social & Search Intelligence (AI-Enhanced SEO/SEM)",
        description: "Visibility drives opportunity — but in a world of constant algorithm updates, guesswork doesn’t work.\nThat’s why we built Social & Search Intelligence — a smart, AI-powered system that turns raw data into optimized strategies for higher rankings, better engagement, and more qualified leads.\nAt Digixito, we go beyond traditional SEO and SEM by integrating machine learning, predictive analysis, and automation into your digital marketing mix.\nWe don’t just help you appear in search results — we help you dominate them through adaptive strategies that evolve with your audience and Google’s algorithms.\nOur goal is simple: make your brand visible everywhere your audience searches, scrolls, or speaks.",
        url: "/ai-marketing-growth/social-and-search-intelligence"
    }
];
const DESIGN_INTELLIGENCE_DATA = [
    {
        title: "AI-Powered UI/UX Design",
        description: "User experience has evolved — from static interfaces to intelligent ecosystems.\n  In this new era, great design is not just about how something looks, but how it learns, adapts, and responds to user behavior.\n  At Digixito, we leverage AI and machine learning to design interfaces that are dynamic, data-informed, and delightfully human.\n  We use predictive analytics, personalization algorithms, and user journey mapping to understand what users need before they even ask for it.\n  Our design philosophy fuses creativity with cognitive intelligence — ensuring your product delivers emotion, efficiency, and engagement in every interaction.\n  We don’t just create experiences; we engineer intuitive ecosystems that evolve with your users.",
        url: "/design-intelligence/ai-powered-ui-ux-design"
    },
    {
        title: "Conversational Interface Design",
        description: "The way users interact with technology has changed — it’s no longer about clicks, it’s about conversations.\n  Whether it’s through chat, voice, or text, modern users expect context-aware, intelligent experiences that understand their intent and respond naturally.\n  At Digixito, we specialize in Conversational Interface Design that combines empathy, design strategy, and AI intelligence.\n  We design systems that don’t just answer questions — they guide, assist, and build trust through seamless, natural dialogue.\n  Our goal is to humanize technology — crafting interactions that feel less mechanical and more meaningful.\n  From customer support bots to in-app assistants, every conversation we design enhances usability, accessibility, and engagement.",
        url: "/design-intelligence/conversational-interface-design"
    },
    {
        title: "Prototyping & User Research",
        description: "Designing successful products requires more than creativity — it demands clarity, curiosity, and connection.\n  That’s why our approach starts with research and ends with experience.\n  At Digixito, we help businesses discover what their users truly want, how they behave, and why they act.\n  Through user interviews, data analytics, and usability testing, we translate insights into actionable design strategies.\n  Once validated, we move to rapid prototyping, bringing ideas to life through high-fidelity mockups, wireframes, and interactive prototypes that visualize the user journey before development begins.\n  We make sure every design decision is backed by real evidence — not assumptions.",
        url: "/design-intelligence/prototyping-and-user-research"
    },
    {
        title: "Experience Optimization",
        description: "User expectations change faster than ever. What worked yesterday might frustrate users today.\n  That’s why Experience Optimization isn’t a one-time effort — it’s a continuous cycle of learning, testing, and improving.\n  At Digixito, we help businesses create digital ecosystems that adapt to users in real time.\n  Through A/B testing, heatmap analysis, conversion tracking, and AI-driven feedback systems, we identify what users love — and what stops them.\n  Our approach fuses UX design, behavioral psychology, and performance analytics to enhance engagement, retention, and satisfaction across every platform.\n  We refine not just interfaces — but the emotions and experiences that define them.",
        url: "/design-intelligence/experience-optimization"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/widgets/faq-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__archivo$3e$__ = __turbopack_context__.i("[project]/utils/archivo_6241f89f.js [app-client] (ecmascript) <export default as archivo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$common$2f$faq$2d$question$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/common/faq-question-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assets/data/generic-array.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const FaqSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            pt: 10,
            height: {
                lg: "90vh",
                xs: "100%"
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
            maxWidth: "lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        size: {
                            lg: 6,
                            xs: 12,
                            sm: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    fontSize: {
                                        lg: 38,
                                        xs: 25,
                                        sm: 30
                                    },
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily,
                                    textTransform: "capitalize"
                                },
                                "data-aos": "fade-up",
                                children: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/faq-section.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                    fontSize: 18,
                                    mt: 4
                                },
                                "data-aos": "fade-up",
                                children: "Still you have any questions? Contact our Team via info@digixito.com"
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/faq-section.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                direction: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                spacing: 4,
                                sx: {
                                    mt: 5
                                },
                                "data-aos": "fade-up",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact-us",
                                    style: {
                                        textDecoration: "none"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        sx: {
                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__archivo$3e$__["archivo"].style.fontFamily,
                                            borderRadius: "50px",
                                            border: "1px solid #010205",
                                            padding: "17px",
                                            width: "176px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: 700,
                                            textTransform: "capitalize",
                                            fontSize: 16,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK
                                        },
                                        children: "Contact Us"
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/faq-section.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/faq-section.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/faq-section.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/faq-section.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        size: {
                            lg: 6,
                            xs: 12,
                            sm: 6
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$common$2f$faq$2d$question$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            data: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQ_DATA"]
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/faq-section.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/faq-section.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/faq-section.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/widgets/faq-section.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/widgets/faq-section.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FaqSection;
const __TURBOPACK__default__export__ = FaqSection;
var _c;
__turbopack_context__.k.register(_c, "FaqSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/widgets/common/secure-connect-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
;
;
;
;
;
const SecureConnectCard = (param)=>{
    let { backgroundImage, img, heading, description, isButton, button } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                backgroundImage: "url(".concat(backgroundImage, ")"),
                height: {
                    lg: "80vh",
                    xs: "50vh"
                },
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                maxWidth: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                    container: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        size: {
                            lg: 8,
                            xs: 12
                        },
                        margin: "auto",
                        sx: {
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: img,
                                alt: "",
                                width: 50,
                                "data-aos": "fade-up"
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/common/secure-connect-card.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                "data-aos": "fade-up",
                                "data-aos-delay": 100,
                                sx: {
                                    fontSize: 30,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily,
                                    color: isButton ? __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE : __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                                    lineHeight: "55px",
                                    letterSpacing: "-0.92px",
                                    fontWeight: 800
                                },
                                children: heading
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/common/secure-connect-card.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    fontSize: 16,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                    color: isButton ? "#ffffff60" : "#00000060"
                                },
                                "data-aos": "fade-up",
                                "data-aos-delay": 200,
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/common/secure-connect-card.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/common/secure-connect-card.tsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/widgets/common/secure-connect-card.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/widgets/common/secure-connect-card.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/widgets/common/secure-connect-card.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/widgets/common/secure-connect-card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SecureConnectCard;
const __TURBOPACK__default__export__ = SecureConnectCard;
var _c;
__turbopack_context__.k.register(_c, "SecureConnectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/widgets/secure-connect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$common$2f$secure$2d$connect$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/common/secure-connect-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assets/data/generic-array.ts [app-client] (ecmascript)");
;
;
;
;
const SecureConnect = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            mt: 5
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
            container: true,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECURE_CARD_DATA"].map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                    size: {
                        lg: 6,
                        xs: 12,
                        sm: 6
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$common$2f$secure$2d$connect$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        backgroundImage: val.backgroundImage,
                        img: val.img,
                        heading: val.heading,
                        description: val.description,
                        isButton: val.isButton,
                        button: val.button
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/secure-connect.tsx",
                        lineNumber: 12,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, i, false, {
                    fileName: "[project]/components/widgets/secure-connect.tsx",
                    lineNumber: 11,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/components/widgets/secure-connect.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/widgets/secure-connect.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SecureConnect;
const __TURBOPACK__default__export__ = SecureConnect;
var _c;
__turbopack_context__.k.register(_c, "SecureConnect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/logo/Digixito_Logo.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Digixito_Logo.de5e09fe.svg");}),
"[project]/public/images/logo/Digixito_Logo.svg.mjs { IMAGE => \"[project]/public/images/logo/Digixito_Logo.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_Logo$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/logo/Digixito_Logo.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_Logo$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 431,
    height: 188,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/widgets/subfooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__archivo$3e$__ = __turbopack_context__.i("[project]/utils/archivo_6241f89f.js [app-client] (ecmascript) <export default as archivo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_Logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/logo/Digixito_Logo.svg.mjs { IMAGE => "[project]/public/images/logo/Digixito_Logo.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const SubFooter = ()=>{
    _s();
    const phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(max-width:600px)");
    const tablet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(max-width:1024px)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
            position: "relative",
            height: {
                lg: "60vh",
                xs: "60vh"
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
            maxWidth: "lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    sx: {
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily,
                        fontSize: {
                            lg: 38,
                            xs: 20,
                            sm: 25
                        },
                        fontWeight: 400,
                        textAlign: "center"
                    },
                    "data-aos": "fade-up",
                    children: "Thank you for your Interest in Digixito."
                }, void 0, false, {
                    fileName: "[project]/components/widgets/subfooter.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    sx: {
                        textAlign: "center",
                        mt: 4,
                        fontSize: {
                            lg: 25,
                            xs: 16,
                            sm: 20
                        },
                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily
                    },
                    "data-aos": "fade-up",
                    "data-aos-delay": "100",
                    children: "Ready to turn your vision into victory? Let’s collaborate and engineer your digital dominance from concept to conquest."
                }, void 0, false, {
                    fileName: "[project]/components/widgets/subfooter.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact-us",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            sx: {
                                mt: 4,
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__archivo$3e$__["archivo"].style.fontFamily,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                                borderRadius: "50px",
                                border: "1px solid" + __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                                padding: "12px 24px",
                                fontWeight: 700,
                                fontSize: 16
                            },
                            children: "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/subfooter.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/subfooter.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/widgets/subfooter.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        mt: {
                            lg: 20,
                            xs: 20
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/components/widgets/subfooter.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_Logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "",
                        style: {
                            width: phone ? 200 : 400
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/subfooter.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/widgets/subfooter.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/widgets/subfooter.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/widgets/subfooter.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SubFooter, "kPvZdDGrCGM35BAASnVn6t5+jxE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"]
    ];
});
_c = SubFooter;
const __TURBOPACK__default__export__ = SubFooter;
var _c;
__turbopack_context__.k.register(_c, "SubFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/useHomepageData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHomepageData",
    ()=>useHomepageData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useHomepageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        pageData: null,
        setPageData: (pageData)=>set({
                pageData
            }),
        cleanPageData: ()=>set({
                pageData: null
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/star-banner.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/star-banner.82ccf9c3.svg");}),
"[project]/public/images/icons/star-banner.svg.mjs { IMAGE => \"[project]/public/images/icons/star-banner.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$star$2d$banner$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/star-banner.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$star$2d$banner$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/widgets/star-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$star$2d$banner$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$star$2d$banner$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/star-banner.svg.mjs { IMAGE => "[project]/public/images/icons/star-banner.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const StarCard = (param)=>{
    let { heading, boldHeading, iconPosition, backgroundImage, height, isStar } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            height: height || "60vh"
        },
        "data-aos": "fade-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    backgroundImage: "url(".concat(backgroundImage, ")"),
                    height: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "20px",
                    ":hover": {
                        transform: "scale(1.1)"
                    },
                    transition: "0.5s ease all"
                },
                children: heading && boldHeading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        background: "rgba(0,0,0,0.3)",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "20px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            textAlign: "center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                fontSize: {
                                    lg: 30,
                                    xs: 20,
                                    sm: 25
                                },
                                fontWeight: 400,
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE
                            },
                            children: [
                                heading,
                                " ",
                                boldHeading
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/widgets/star-card.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/star-card.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/widgets/star-card.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/widgets/star-card.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isStar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    position: "absolute",
                    top: iconPosition === "bottom" ? "" : -20,
                    left: iconPosition === "bottom" ? "" : -20,
                    transform: "rotate(-37deg)",
                    right: iconPosition === "bottom" ? -20 : "",
                    bottom: iconPosition === "bottom" ? -20 : ""
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$star$2d$banner$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$star$2d$banner$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/components/widgets/star-card.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/widgets/star-card.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/widgets/star-card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StarCard;
const __TURBOPACK__default__export__ = StarCard;
var _c;
__turbopack_context__.k.register(_c, "StarCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/best-service1.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/best-service1.758611ae.png");}),
"[project]/public/images/homepage/best-service1.png.mjs { IMAGE => \"[project]/public/images/homepage/best-service1.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/best-service1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1984,
    height: 1310,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AG95bYCNgH6MgYCNhXaFgISSjIWUkHeJigBscmyGi3t1c2OTm5GaoJisqqCwu7ONnZkAa3Nqc3RoeX+Jf4GGb3V3lI2PnK2siqKXAGFmXZKXm4aQonaDk01ZaHB/mEdfh2NtZwBRXGCSnqt/ipuElKFKVGBlfI9AUWhRVlop3zwMzXsmnQAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/best-service2.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/best-service2.79cf7cdc.png");}),
"[project]/public/images/homepage/best-service2.png.mjs { IMAGE => \"[project]/public/images/homepage/best-service2.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/best-service2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/ANre08bFuL6ymsi/qtLLuOzp2dzVwtjRvgDX2tDDwLHQxKvGvafb07/l3srTzbnbz7MAx8e8zMWw2s2z1Mu1zL6kzcKsyMCru6qMAMjBrdrNstvSvcS6paCOcqqYfK2dgcm9oQDHvaS8rpO8spu7sZq+r5TEtprMxK3V0b8AvK2Pua2Uwr+wwbqnwLSby8Wy6OTU7+zfAL+0m8G6psC3oM/BptXGqeHaxezo1/Dv4gDHvaO9sZjAuaXDu6fHvKTw69fn5dXf39FBWo/nscfvswAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/home-layout/best-services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$star$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/star-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/best-service1.png.mjs { IMAGE => "[project]/public/images/homepage/best-service1.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/best-service2.png.mjs { IMAGE => "[project]/public/images/homepage/best-service2.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useHomepageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useHomepageData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const BestService = ()=>{
    _s();
    const { pageData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useHomepageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHomepageData"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        sx: {
            pt: {
                lg: 10,
                xs: 5
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                container: true,
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        size: {
                            lg: 6,
                            xs: 12,
                            sm: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily,
                                    fontSize: {
                                        lg: 28,
                                        xs: 22
                                    },
                                    fontWeight: 400,
                                    lineHeight: {
                                        lg: "42px",
                                        xs: "30px"
                                    }
                                },
                                children: "Driving Conversions with our Creative Edge"
                            }, void 0, false, {
                                fileName: "[project]/components/layouts/home-layout/best-services.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                sx: {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                                    width: "90%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/layouts/home-layout/best-services.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layouts/home-layout/best-services.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        size: {
                            lg: 6,
                            xs: 12,
                            sm: 6
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                fontSize: 19,
                                fontWeight: 500,
                                lineHeight: "30px",
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                textAlign: "justify"
                            },
                            children: "Our passionate & strategic team builds stronger businesses in a digital-first era. With our deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies."
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/best-services.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layouts/home-layout/best-services.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/layouts/home-layout/best-services.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                container: true,
                sx: {
                    mt: 5
                },
                spacing: 5,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        size: {
                            lg: 7.5,
                            xs: 12,
                            sm: 12
                        },
                        "data-aos": "fade-up",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$star$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            backgroundImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                            iconPosition: "top",
                            height: {
                                xs: "40vh",
                                lg: "60vh",
                                sm: "20vh"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/best-services.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layouts/home-layout/best-services.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        size: {
                            lg: 4.5,
                            xs: 12,
                            sm: 12
                        },
                        "data-aos": "fade-down",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$star$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            heading: "Genesis to",
                            boldHeading: "Greatest Creation.",
                            backgroundImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                            iconPosition: "bottom",
                            height: {
                                xs: "40vh",
                                lg: "60vh",
                                sm: "20vh"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/best-services.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layouts/home-layout/best-services.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/layouts/home-layout/best-services.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/layouts/home-layout/best-services.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BestService, "E9TdX6SaMK70gPIkK6e0omEXqu8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useHomepageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHomepageData"]
    ];
});
_c = BestService;
const __TURBOPACK__default__export__ = BestService;
var _c;
__turbopack_context__.k.register(_c, "BestService");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/heading-banner.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/heading-banner.fc5509fe.png");}),
"[project]/public/images/homepage/heading-banner.png.mjs { IMAGE => \"[project]/public/images/homepage/heading-banner.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$heading$2d$banner$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/heading-banner.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$heading$2d$banner$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 408,
    height: 64,
    blurWidth: 8,
    blurHeight: 1,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAGElEQVR42mN4d9/x9f/3bv+x4bf3HF8BAKGcGSK67iopAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/widgets/image-heading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$heading$2d$banner$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$heading$2d$banner$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/heading-banner.png.mjs { IMAGE => "[project]/public/images/homepage/heading-banner.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>");
;
;
;
;
const ImageHeading = (param)=>{
    let { title, sx } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                backgroundImage: "url(".concat(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$heading$2d$banner$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$heading$2d$banner$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src, ")"),
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                px: 2,
                ...sx,
                transform: "skew(-10deg)",
                borderRadius: 4
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                sx: {
                    fontSize: {
                        lg: 40,
                        xs: 20,
                        sm: 20
                    },
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily,
                    fontWeight: 400,
                    textAlign: "center"
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/components/widgets/image-heading.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/widgets/image-heading.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/widgets/image-heading.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ImageHeading;
const __TURBOPACK__default__export__ = ImageHeading;
var _c;
__turbopack_context__.k.register(_c, "ImageHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/widgets/section-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
;
;
;
;
const SectionCard = (param)=>{
    let { variant, title } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            position: "relative"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                position: "absolute",
                left: -60,
                top: 80,
                transform: "rotate(-90deg )",
                padding: "16px 24px",
                backgroundColor: variant === __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VARIANTS"].DARK ? "#333" : __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                zIndex: 4,
                display: {
                    lg: "flex",
                    xs: "none"
                },
                alignItems: "center",
                justifyContent: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                sx: {
                    color: variant === __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VARIANTS"].DARK ? __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE : __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                    fontSize: 16,
                    textTransform: "uppercase",
                    fontWeight: 600
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/components/widgets/section-card.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/widgets/section-card.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/widgets/section-card.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SectionCard;
const __TURBOPACK__default__export__ = SectionCard;
var _c;
__turbopack_context__.k.register(_c, "SectionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/primary-rotatable-border-down.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/primary-rotatable-border-down.472f3940.png");}),
"[project]/public/images/homepage/primary-rotatable-border-down.png.mjs { IMAGE => \"[project]/public/images/homepage/primary-rotatable-border-down.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$primary$2d$rotatable$2d$border$2d$down$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/primary-rotatable-border-down.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$primary$2d$rotatable$2d$border$2d$down$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1728,
    height: 201,
    blurWidth: 8,
    blurHeight: 1,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAALElEQVR42gEhAN7/AJSLKZOZjyqYnJIrm5ySK5uakCqZlYwplI+GJ42GfiWF/HMO8E0qzDoAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/primary-rotatable-border.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/primary-rotatable-border.2d8d8f57.png");}),
"[project]/public/images/homepage/primary-rotatable-border.png.mjs { IMAGE => \"[project]/public/images/homepage/primary-rotatable-border.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$primary$2d$rotatable$2d$border$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/primary-rotatable-border.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$primary$2d$rotatable$2d$border$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1728,
    height: 208,
    blurWidth: 8,
    blurHeight: 1,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAALElEQVR42gEhAN7/AJOKKJKYjiqWmpEqmZuRKpmYjyqXlIopk42EJ4yEfCSD+gUOyDz/macAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/icons/white-star.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/white-star.bc9c3845.png");}),
"[project]/public/images/icons/white-star.png.mjs { IMAGE => \"[project]/public/images/icons/white-star.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$white$2d$star$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/icons/white-star.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$white$2d$star$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 42,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAk0lEQVR42m2OMQrDIBiFXUIjgeABusZR9049gkNAeoJ2FAQHD9KtF3BxyR3Ec3TopqNj2wchZMiDDz7eG/6fkF201ldAjjIMwynG+ALwbWCMUSnl5L2/11o/4O8PIcQ0jiMlzrk557y01up3DTyltFhrZ9L3fcc5PxtjbqWUN4Cjw7adopR2IYQngB8+qpS6gH33AwNRQeiHLVtZAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/home-layout/components/work-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>");
;
;
;
;
const WorkCard = (param)=>{
    let { number, title, description, img } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            backgroundColor: "#2A2A2A",
            display: "flex",
            flexDirection: "column",
            borderRadius: "56px",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "30px",
            padding: {
                lg: "40px",
                xs: "20px"
            },
            height: 450,
            ":hover": {
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                ".work-card-image": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease-in-out"
                }
            },
            ".work-card-image": {
                transition: "transform 0.3s ease-in-out"
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    backgroundImage: "url(".concat(img, ")"),
                    height: "300px",
                    borderRadius: "32px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                },
                className: "work-card-image",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                textAlign: "center",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE,
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily,
                                lineHeight: "36px",
                                letterSpacing: "-0.144px",
                                fontSize: {
                                    lg: 24,
                                    xs: 18
                                }
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/components/work-card.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/layouts/home-layout/components/work-card.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        sx: {
                            fontSize: 32,
                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily,
                            color: "#666",
                            m: 2,
                            position: "absolute",
                            top: 0
                        },
                        children: number
                    }, void 0, false, {
                        fileName: "[project]/components/layouts/home-layout/components/work-card.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/layouts/home-layout/components/work-card.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                sx: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_90,
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                    fontSize: 15,
                    lineHeight: "30px",
                    letterSpacing: "-0.12px",
                    textAlign: "justify"
                },
                children: description
            }, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/components/work-card.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/layouts/home-layout/components/work-card.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WorkCard;
const __TURBOPACK__default__export__ = WorkCard;
var _c;
__turbopack_context__.k.register(_c, "WorkCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/home-layout/how-it-works.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assets/data/generic-array.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$image$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/image-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/section-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$primary$2d$rotatable$2d$border$2d$down$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$primary$2d$rotatable$2d$border$2d$down$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/primary-rotatable-border-down.png.mjs { IMAGE => "[project]/public/images/homepage/primary-rotatable-border-down.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$primary$2d$rotatable$2d$border$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$primary$2d$rotatable$2d$border$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/primary-rotatable-border.png.mjs { IMAGE => "[project]/public/images/homepage/primary-rotatable-border.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$white$2d$star$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$white$2d$star$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/white-star.png.mjs { IMAGE => "[project]/public/images/icons/white-star.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$components$2f$work$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layouts/home-layout/components/work-card.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const HowitWorks = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$primary$2d$rotatable$2d$border$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$primary$2d$rotatable$2d$border$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                alt: "",
                style: {
                    width: "100%",
                    position: "absolute",
                    top: -20,
                    zIndex: 0,
                    height: 50
                }
            }, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "How it works",
                variant: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VARIANTS"].DARK
            }, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    backgroundColor: "#222222",
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    maxWidth: "lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$white$2d$star$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$white$2d$star$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "",
                            className: "rotator spin"
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                            direction: {
                                lg: "row",
                                xs: "column",
                                sm: "row"
                            },
                            alignItems: {
                                lg: "center",
                                xs: "flex-start"
                            },
                            spacing: 2,
                            justifyContent: {
                                lg: "center",
                                xs: "flex-start"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    sx: {
                                        textAlign: "center",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE,
                                        fontSize: {
                                            lg: 40,
                                            xs: 30
                                        },
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily
                                    },
                                    children: "why choose"
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$image$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Digixito."
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].GRAY_90,
                                fontSize: 18,
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                lineHeight: "24px",
                                letterSpacing: "-0.114px",
                                mt: 3
                            },
                            children: "Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            container: true,
                            sx: {
                                mt: 3
                            },
                            spacing: 3,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORK_CARD_DATA"].map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                    size: {
                                        lg: 6,
                                        xs: 12,
                                        sm: 6
                                    },
                                    "data-aos": "fade-up",
                                    "data-aos-delay": i * 100,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$components$2f$work$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: val.title,
                                        description: val.description,
                                        img: val.img,
                                        number: val.number
                                    }, void 0, false, {
                                        fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, i, false, {
                                    fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                textAlign: "end",
                                mt: 4
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$white$2d$star$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$white$2d$star$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "",
                                className: "rotator spin"
                            }, void 0, false, {
                                fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$primary$2d$rotatable$2d$border$2d$down$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$primary$2d$rotatable$2d$border$2d$down$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                alt: "",
                style: {
                    width: "100%",
                    position: "absolute",
                    bottom: -20,
                    zIndex: 0,
                    height: 50
                }
            }, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/layouts/home-layout/how-it-works.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HowitWorks;
const __TURBOPACK__default__export__ = HowitWorks;
var _c;
__turbopack_context__.k.register(_c, "HowitWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/best-service3.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/best-service3.9ac9bb0a.png");}),
"[project]/public/images/homepage/best-service3.png.mjs { IMAGE => \"[project]/public/images/homepage/best-service3.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/best-service3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AHBwcUNDQygoKBwcHFVVVZCQkYqKip+foACEhIRXV1c9PT1RUVGnp6eHh4ePkJBYWFgAhoeHWltbUVFRV1dYZmdnQUFBNDQ0YmNjAMjIyIODhGZmZk9QUCIiIhwcHElJSaampgCkpKTQ0NGoqKh4eHiGhoeampq+vr7IyMkAUFBQoqKi0NDQrKysnJydtLW1yMjJ3+DgACgoKDc3N1JSUmZmZ4ODg8fHyPX19v7+/wAlJSUkJCQwMDBpaWqrrKzd3t73+Pj+/v9Y5198gkQnqwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/home-layout/components/arrow-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
;
;
;
const ArrowCard = (param)=>{
    let { backgroundColor, textColor, iconBgColor, iconColor, title, secondTitle, height, sx } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            backgroundColor: backgroundColor,
            height: height || "100%",
            borderRadius: 4,
            padding: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            ...sx
        },
        "data-aos": "fade-up",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            sx: {
                fontSize: 22,
                color: textColor,
                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily
            },
            children: title
        }, void 0, false, {
            fileName: "[project]/components/layouts/home-layout/components/arrow-card.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/layouts/home-layout/components/arrow-card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ArrowCard;
const __TURBOPACK__default__export__ = ArrowCard;
var _c;
__turbopack_context__.k.register(_c, "ArrowCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/home-layout/service-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assets/data/generic-array.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$star$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/star-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowForward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ArrowForward.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tab/Tab.js [app-client] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tabs/Tabs.js [app-client] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/best-service3.png.mjs { IMAGE => "[project]/public/images/homepage/best-service3.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$tab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/tab-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$components$2f$arrow$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layouts/home-layout/components/arrow-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/section-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$image$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/image-heading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const ServiceSection = ()=>{
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [servicesData, setServicesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES_TAB_DATA"].AI_TRANSFORMATION);
    const SERVICES_MAP = {
        "AI Transformation": __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES_TAB_DATA"].AI_TRANSFORMATION,
        "Business Transformation": __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES_TAB_DATA"].BUSINESS_TRANSFORMATION,
        "Design Intelligence": __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES_TAB_DATA"].Design_intelligence,
        "Product Engineering": __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES_TAB_DATA"].Product_Engineering
    };
    const tabChangeHandler = (e, newValue)=>{
        setValue(newValue);
        const selectedLabel = __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES_TAB"][newValue].label;
        setServicesData(SERVICES_MAP[selectedLabel]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            my: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$section$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "What we do",
                variant: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VARIANTS"].PRIMARY
            }, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                maxWidth: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                    container: true,
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                lg: 5,
                                xs: 12,
                                sm: 5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                    direction: "row",
                                    alignItems: "center",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            sx: {
                                                fontSize: {
                                                    lg: 35,
                                                    xs: 25
                                                },
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily
                                            },
                                            children: "Our"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$image$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            title: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    sx: {
                                        mt: 4,
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                        fontSize: 18,
                                        fontWeight: 300
                                    },
                                    children: "Transform your brand with our innovative digital solutions that captivate and engage your audience."
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        width: "100%",
                                        mt: 3
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
                                        value: value,
                                        orientation: "vertical",
                                        TabIndicatorProps: {
                                            style: {
                                                display: "none"
                                            }
                                        },
                                        sx: {
                                            width: "100%",
                                            "& .MuiTab-root": {
                                                minHeight: "auto",
                                                padding: "18px 20px",
                                                borderRadius: "50px",
                                                backgroundColor: "#fff",
                                                color: "#000",
                                                textTransform: "none",
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                                fontSize: {
                                                    lg: "18px",
                                                    sm: "14px"
                                                },
                                                fontWeight: 400,
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                transition: "all 0.3s ease",
                                                border: "1px solid #D7D7D7",
                                                width: "100%",
                                                mb: "20px"
                                            },
                                            "& .Mui-selected": {
                                                color: "#fff !important",
                                                backgroundColor: "#000",
                                                border: "1px solid #000",
                                                "& svg": {
                                                    color: "#fff"
                                                },
                                                "& .number": {
                                                    color: "#FFD84D"
                                                }
                                            }
                                        },
                                        onChange: tabChangeHandler,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES_TAB"].map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                                                // disableRipple
                                                label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        width: "100%"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                            sx: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 2
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                    component: "span",
                                                                    className: "number",
                                                                    sx: {
                                                                        fontWeight: 700
                                                                    },
                                                                    children: [
                                                                        "0",
                                                                        i + 1
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 27
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                    component: "span",
                                                                    children: val.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 27
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 25
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowForward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            sx: {
                                                                fontSize: 22,
                                                                color: "inherit"
                                                            },
                                                            className: "arrow-icon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 25
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, void 0)
                                            }, i, false, {
                                                fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                lg: 7,
                                xs: 12,
                                sm: 7
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$generic$2d$array$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES_TAB"].map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$tab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: value,
                                    index: i,
                                    children: servicesData.map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                            container: true,
                                            spacing: 2,
                                            alignItems: "stretch",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                    size: {
                                                        lg: 6,
                                                        xs: 12
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$star$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        backgroundImage: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$best$2d$service3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                                        iconPosition: "top",
                                                        heading: val.starCardData.normalHeading,
                                                        boldHeading: val.starCardData.boldHeading,
                                                        height: {
                                                            lg: "60vh",
                                                            xs: "40vh"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                    size: {
                                                        lg: 6,
                                                        xs: 12
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                                        alignItems: "center",
                                                        spacing: 1,
                                                        height: "100%",
                                                        children: val.data.map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$components$2f$arrow$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                title: val.heading,
                                                                textColor: val.textColor,
                                                                backgroundColor: val.backgroundColor,
                                                                secondTitle: val.bottomTitle,
                                                                iconBgColor: val.iconBgColor,
                                                                iconColor: val.iconColor
                                                            }, i, false, {
                                                                fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, i, false, {
                                    fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/service-section.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/layouts/home-layout/service-section.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ServiceSection, "6BmVk+9wqCVgSAwabpvVbFZbQTY=");
_c = ServiceSection;
const __TURBOPACK__default__export__ = ServiceSection;
var _c;
__turbopack_context__.k.register(_c, "ServiceSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/widgets/BlurText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlurText",
    ()=>BlurText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const MotionTypography = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"]);
_c = MotionTypography;
const buildKeyframes = (from, steps)=>{
    const keys = new Set([
        ...Object.keys(from),
        ...steps.flatMap((s)=>Object.keys(s))
    ]);
    const keyframes = {};
    keys.forEach((k)=>{
        keyframes[k] = [
            from[k],
            ...steps.map((s)=>s[k])
        ];
    });
    return keyframes;
};
const BlurText = (param)=>{
    let { text = "", delay = 200, className = "", animateBy = "words", direction = "top", threshold = 0.1, rootMargin = "0px", animationFrom, animationTo, easing = (t)=>t, onAnimationComplete, stepDuration = 0.35, motionProps, ...props } = param;
    _s();
    const elements = animateBy === "words" ? text.split(" ") : text.split("");
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlurText.useEffect": ()=>{
            if (!ref.current) return;
            const observer = new IntersectionObserver({
                "BlurText.useEffect": (param)=>{
                    let [entry] = param;
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.unobserve(ref.current);
                    }
                }
            }["BlurText.useEffect"], {
                threshold,
                rootMargin
            });
            observer.observe(ref.current);
            return ({
                "BlurText.useEffect": ()=>observer.disconnect()
            })["BlurText.useEffect"];
        }
    }["BlurText.useEffect"], [
        threshold,
        rootMargin
    ]);
    const defaultFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BlurText.useMemo[defaultFrom]": ()=>direction === "top" ? {
                filter: "blur(10px)",
                opacity: 0,
                y: -50
            } : {
                filter: "blur(10px)",
                opacity: 0,
                y: 50
            }
    }["BlurText.useMemo[defaultFrom]"], [
        direction
    ]);
    const defaultTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BlurText.useMemo[defaultTo]": ()=>[
                {
                    filter: "blur(5px)",
                    opacity: 0.5,
                    y: direction === "top" ? 5 : -5
                },
                {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0
                }
            ]
    }["BlurText.useMemo[defaultTo]"], [
        direction
    ]);
    const fromSnapshot = animationFrom !== null && animationFrom !== void 0 ? animationFrom : defaultFrom;
    const toSnapshots = animationTo !== null && animationTo !== void 0 ? animationTo : defaultTo;
    const stepCount = toSnapshots.length + 1;
    const totalDuration = stepDuration * (stepCount - 1);
    const times = Array.from({
        length: stepCount
    }, (_, i)=>stepCount === 1 ? 0 : i / (stepCount - 1));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionTypography, {
        ref: ref,
        className: className,
        sx: {
            display: "flex",
            flexWrap: "wrap",
            ...props.sx
        },
        ...motionProps,
        ...props,
        children: elements.map((segment, index)=>{
            const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
            const spanTransition = {
                duration: totalDuration,
                times,
                delay: index * delay / 1000,
                ease: easing
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: fromSnapshot,
                animate: inView ? animateKeyframes : fromSnapshot,
                transition: spanTransition,
                onAnimationComplete: index === elements.length - 1 ? onAnimationComplete : undefined,
                style: {
                    display: "inline-block",
                    willChange: "transform, filter, opacity"
                },
                children: [
                    segment === " " ? "\u00A0" : segment,
                    animateBy === "words" && index < elements.length - 1 && "\u00A0"
                ]
            }, index, true, {
                fileName: "[project]/components/widgets/BlurText.tsx",
                lineNumber: 129,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/components/widgets/BlurText.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BlurText, "IxnOfDOifNR2DM+0TATKkPR86iM=");
_c1 = BlurText;
var _c, _c1;
__turbopack_context__.k.register(_c, "MotionTypography");
__turbopack_context__.k.register(_c1, "BlurText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/hero.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/hero.9ec59b73.png");}),
"[project]/public/images/homepage/hero.png.mjs { IMAGE => \"[project]/public/images/homepage/hero.png (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$hero$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/hero.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$hero$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1728,
    height: 1043,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAYklEQVR42m2NOQ6AIBBFOQcMomPU0t2EaCUR73+iL5BIo8Vr/pInxr5A12oQSUj5RVwnY7cluFL/A+8Yh63ATDlUSqLQKiGGpKCsiGXbENbZYFsMRCxi+L51eC2TgXc17sADlUo3sUH3uUwAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/homepage/mouse.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/mouse.6f94ebcf.svg");}),
"[project]/public/images/homepage/mouse.svg.mjs { IMAGE => \"[project]/public/images/homepage/mouse.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$mouse$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/homepage/mouse.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$mouse$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 50,
    height: 47,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/home-layout/banner-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$star$2d$banner$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$star$2d$banner$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/star-banner.svg.mjs { IMAGE => "[project]/public/images/icons/star-banner.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useHomepageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useHomepageData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const Bannertext = ()=>{
    var _pageData_heroSection_bannerText, _pageData_heroSection;
    _s();
    const text = [
        {
            label: "Innovate"
        },
        {
            label: "Inspire"
        },
        {
            label: "Create"
        }
    ];
    const phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(max-width:600px)");
    const { pageData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useHomepageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHomepageData"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
            maxWidth: "lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                direction: {
                    lg: "row",
                    xs: "row"
                },
                alignItems: {
                    lg: "center",
                    xs: "center"
                },
                justifyContent: {
                    lg: "center",
                    xs: "center"
                },
                spacing: {
                    lg: 5,
                    xs: 2
                },
                sx: {
                    ml: {
                        lg: 8,
                        xs: 0
                    }
                },
                "dat-aos": "fade-up",
                children: pageData === null || pageData === void 0 ? void 0 : (_pageData_heroSection = pageData.heroSection) === null || _pageData_heroSection === void 0 ? void 0 : (_pageData_heroSection_bannerText = _pageData_heroSection.bannerText) === null || _pageData_heroSection_bannerText === void 0 ? void 0 : _pageData_heroSection_bannerText.map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    fontSize: {
                                        lg: 50,
                                        xs: 15
                                    },
                                    fontWeight: 800,
                                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE
                                },
                                children: val.heading
                            }, void 0, false, {
                                fileName: "[project]/components/layouts/home-layout/banner-text.tsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            text.length - 1 != i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$star$2d$banner$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$star$2d$banner$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "",
                                style: {
                                    height: phone ? 30 : ""
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/layouts/home-layout/banner-text.tsx",
                                lineNumber: 57,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/components/layouts/home-layout/banner-text.tsx",
                        lineNumber: 45,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/banner-text.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/layouts/home-layout/banner-text.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/layouts/home-layout/banner-text.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Bannertext, "vVGVFyUDmIjjwqd6YTD8s6a3X8g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useHomepageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHomepageData"]
    ];
});
_c = Bannertext;
const __TURBOPACK__default__export__ = Bannertext;
var _c;
__turbopack_context__.k.register(_c, "Bannertext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/home-layout/Simple-Hero-Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$BlurText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/BlurText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$hero$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$hero$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/hero.png.mjs { IMAGE => "[project]/public/images/homepage/hero.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$mouse$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$mouse$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/homepage/mouse.svg.mjs { IMAGE => "[project]/public/images/homepage/mouse.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$white$2d$star$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$white$2d$star$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/icons/white-star.png.mjs { IMAGE => "[project]/public/images/icons/white-star.png (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$banner$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layouts/home-layout/banner-text.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const SimpleHeroSection = ()=>{
    _s();
    const phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(max-width:600px)");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                backgroundImage: "url(".concat(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$hero$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$hero$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src, ")"),
                height: {
                    lg: "90vh",
                    sm: "60vh",
                    xs: "100%"
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pt: {
                    lg: 10,
                    xs: 20
                },
                pb: {
                    lg: 2,
                    xs: 1
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                maxWidth: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$BlurText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurText"], {
                            text: "Concept to Conquest.",
                            delay: 150,
                            animateBy: "words",
                            direction: "top",
                            className: "text-2xl mb-8",
                            sx: {
                                fontSize: {
                                    lg: 70,
                                    xs: 40
                                },
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily,
                                fontWeight: 400,
                                lineHeight: {
                                    lg: "148px",
                                    xs: "50px"
                                },
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE,
                                textAlign: "center"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                fontSize: {
                                    lg: 35,
                                    xs: 20
                                },
                                fontWeight: 500,
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                textAlign: "center",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE,
                                mt: 3
                            },
                            "data-aos": "fade-up",
                            children: "Engineering 360° digital experiences from concept to conquest"
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                            direction: {
                                lg: "row",
                                xs: "column"
                            },
                            alignItems: "center",
                            justifyContent: "center",
                            spacing: 4,
                            sx: {
                                mt: 5
                            },
                            "data-aos": "fade-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                    href: "/about-us",
                                    sx: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                                        width: 250,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                        textTransform: "capitalize",
                                        fontSize: 16,
                                        borderRadius: "160px",
                                        p: 2
                                    },
                                    children: "Know more about us"
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                    href: "/contact-us",
                                    sx: {
                                        width: 250,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                        textTransform: "capitalize",
                                        fontSize: 16,
                                        borderRadius: "160px",
                                        p: 2,
                                        border: "1px solid ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY)
                                    },
                                    children: "Connect With Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                textAlign: "center",
                                my: 7
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$homepage$2f$mouse$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$homepage$2f$mouse$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "scroll",
                                "data-aos": "fade-up"
                            }, void 0, false, {
                                fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$banner$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                            direction: "row",
                            alignItems: "center",
                            spacing: 2,
                            "data-aos": "fade-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE,
                                        width: "100%",
                                        height: 2
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$icons$2f$white$2d$star$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$icons$2f$white$2d$star$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "divider star"
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE,
                                        width: "100%",
                                        height: 2
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/layouts/home-layout/Simple-Hero-Section.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SimpleHeroSection, "ypf7FZQD4COmRPQW2kgQ5EV+mws=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"]
    ];
});
_c = SimpleHeroSection;
const __TURBOPACK__default__export__ = SimpleHeroSection;
var _c;
__turbopack_context__.k.register(_c, "SimpleHeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layouts/home-layout/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useFetchData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hooks/useFetchData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$faq$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/faq-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$secure$2d$connect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/secure-connect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$subfooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/subfooter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useHomepageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useHomepageData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$best$2d$services$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layouts/home-layout/best-services.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$how$2d$it$2d$works$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layouts/home-layout/how-it-works.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$service$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layouts/home-layout/service-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$Simple$2d$Hero$2d$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layouts/home-layout/Simple-Hero-Section.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const HomeLayouts = ()=>{
    _s();
    const phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(max-width:600px)");
    const { pageData, setPageData, cleanPageData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useHomepageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHomepageData"])();
    const { data, error, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useFetchData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchJson"])("/locale/homepage.json");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeLayouts.useEffect": ()=>{
            if (data) {
                setPageData(data);
            }
        }
    }["HomeLayouts.useEffect"], [
        setPageData,
        data
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeLayouts.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                duration: 1000,
                mirror: true
            });
        }
    }["HomeLayouts.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE
                }
            }, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/index.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$Simple$2d$Hero$2d$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/index.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$best$2d$services$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/index.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$service$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/index.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layouts$2f$home$2d$layout$2f$how$2d$it$2d$works$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/index.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$faq$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/index.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$secure$2d$connect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/index.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$subfooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/layouts/home-layout/index.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/layouts/home-layout/index.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HomeLayouts, "xlT/tGDAJVJZ1Rzjlgho9/CJSic=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useHomepageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHomepageData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hooks$2f$useFetchData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchJson"]
    ];
});
_c = HomeLayouts;
const __TURBOPACK__default__export__ = HomeLayouts;
var _c;
__turbopack_context__.k.register(_c, "HomeLayouts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_909e5d02._.js.map