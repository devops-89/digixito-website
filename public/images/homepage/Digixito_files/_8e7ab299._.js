(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/public/images/logo/Digixito_White_Logo.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Digixito_White_Logo.f973f239.svg");}),
"[project]/public/images/logo/Digixito_White_Logo.svg.mjs { IMAGE => \"[project]/public/images/logo/Digixito_White_Logo.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_White_Logo$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/logo/Digixito_White_Logo.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_White_Logo$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 436,
    height: 436,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/enum.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLORS",
    ()=>COLORS,
    "HEADER_TABS_DATA",
    ()=>HEADER_TABS_DATA,
    "SERVICES_TAB_CONSTANT",
    ()=>SERVICES_TAB_CONSTANT,
    "VARIANTS",
    ()=>VARIANTS
]);
var COLORS = /*#__PURE__*/ function(COLORS) {
    COLORS["BLACK"] = "#000000";
    COLORS["WHITE"] = "#ffffff";
    COLORS["GRAY"] = "rgba(33, 33, 33, 0.70)";
    COLORS["LIGHT_GRAY"] = "rgba(0, 0, 0, 0.13)";
    COLORS["PRIMARY"] = "#FFEF46";
    COLORS["TRANSPARENT"] = "transparent";
    COLORS["GRAY_90"] = "#e6e6e6";
    return COLORS;
}({});
var VARIANTS = /*#__PURE__*/ function(VARIANTS) {
    VARIANTS["DARK"] = "dark";
    VARIANTS["PRIMARY"] = "primary";
    return VARIANTS;
}({});
var HEADER_TABS_DATA = /*#__PURE__*/ function(HEADER_TABS_DATA) {
    HEADER_TABS_DATA["WHAT_WE_OFFER"] = "What we offer";
    HEADER_TABS_DATA["WHAT_WE_ARE"] = "What we are";
    HEADER_TABS_DATA["CAREERS"] = "Careers";
    return HEADER_TABS_DATA;
}({});
var SERVICES_TAB_CONSTANT = /*#__PURE__*/ function(SERVICES_TAB_CONSTANT) {
    SERVICES_TAB_CONSTANT["AI_TRANSFORMATION"] = "AI Transformation";
    SERVICES_TAB_CONSTANT["BUSINESS_TRANSFORMATION"] = "Business Transformation";
    SERVICES_TAB_CONSTANT["PRODUCT_ENGINEERING"] = "Product Engineering";
    SERVICES_TAB_CONSTANT["DESIGN_INTELLIGENCE"] = "Design Intelligence";
    return SERVICES_TAB_CONSTANT;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/assets/data/header-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEADER_LINKS",
    ()=>HEADER_LINKS,
    "HEADER_TABS",
    ()=>HEADER_TABS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
;
const HEADER_TABS = [
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TABS_DATA"].WHAT_WE_OFFER
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TABS_DATA"].WHAT_WE_ARE,
        url: "/about-us"
    },
    {
        label: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TABS_DATA"].CAREERS,
        url: "/careers/life-at-digixito"
    }
];
const HEADER_LINKS = {
    what_we_offer: [
        {
            heading: "AI Transformation",
            url: "/ai-transformation",
            data: [
                {
                    label: "Machine Learning & Predictive Models",
                    url: "/ai-transformation/machine-learning-and-predictive-models"
                },
                {
                    label: "Generative AI (Chatbots, LLMs, Automation)",
                    url: "/ai-transformation/generative-ai"
                },
                {
                    label: "Computer Vision & OCR Systems",
                    url: "/ai-transformation/computer-vision-and-ocr-systems"
                },
                {
                    label: "Data Engineering & MLOps",
                    url: "/ai-transformation/data-engineering-mlops"
                }
            ]
        },
        {
            heading: "Business Transformation",
            url: "/business-transformation",
            data: [
                {
                    label: "Creative Transformation",
                    url: "/business-transformation/creative-transformation"
                },
                {
                    label: "Brand Strategy",
                    url: "/business-transformation/brand-strategy"
                },
                {
                    label: "360° Creative Campaigns",
                    url: "/business-transformation/360-creative-campaigns"
                },
                {
                    label: "Press Ads & TV Commercials",
                    url: "/business-transformation/press-ads-and-tv-commercials"
                },
                {
                    label: "Digital Transformation",
                    url: "/business-transformation/digital-transformation"
                },
                {
                    label: "Paid Search",
                    url: "/business-transformation/paid-search"
                },
                {
                    label: "Natural (Organic) Search",
                    url: "/business-transformation/natural-search"
                },
                {
                    label: "Performance Display",
                    url: "/business-transformation/performance-display"
                },
                {
                    label: "Social Media Marketing",
                    url: "/business-transformation/social-media-marketing"
                },
                {
                    label: "Sales Boost Program",
                    url: "/business-transformation/sales-boost-program"
                },
                {
                    label: "Marketplace Management",
                    url: "/business-transformation/marketplace-management"
                },
                {
                    label: "Catalog Management",
                    url: "/business-transformation/catalog-management"
                },
                {
                    label: "Inventory Management",
                    url: "/business-transformation/inventory-management"
                },
                {
                    label: "Partner Value Added Services",
                    url: "/business-transformation/partner-value-added-services"
                }
            ]
        },
        {
            heading: "Product Engineering",
            url: "/product-engineering",
            data: [
                {
                    label: "Application & SaaS Development",
                    url: "/product-engineering/application-and-saas-development"
                },
                {
                    label: "Web and Mobile Platforms",
                    url: "/product-engineering/web-and-mobile-platforms"
                },
                {
                    label: "System Integration & API Development",
                    url: "/product-engineering/system-integration-and-api-development"
                },
                {
                    label: "Cloud Infrastructure",
                    url: "/product-engineering/cloud-infrastructure"
                }
            ]
        },
        {
            heading: "AI in Marketing & Growth",
            url: "/ai-marketing-growth",
            data: [
                {
                    label: "AI-Driven Digital Marketing",
                    url: "/ai-marketing-growth/ai-driven-digital-marketing"
                },
                {
                    label: "Marketplace Management & Sales Boost",
                    url: "/ai-marketing-growth/market-management-and-sales-boost"
                },
                {
                    label: "Brand Strategy & Positioning",
                    url: "/ai-marketing-growth/brand-strategy-and-positioning"
                },
                {
                    label: "Performance Marketing & Conversion Optimization",
                    url: "/ai-marketing-growth/performance-marketing-and-conversion-optimization"
                },
                {
                    label: "Social & Search Intelligence (AI-Enhanced SEO/SEM)",
                    url: "/ai-marketing-growth/social-and-search-intelligence"
                }
            ]
        },
        {
            heading: "Design Intelligence",
            url: "/design-intelligence",
            data: [
                {
                    label: "AI-Powered UI/UX Design",
                    url: "/design-intelligence/ai-powered-ui-ux-design"
                },
                {
                    label: "Conversational Interface Design",
                    url: "/design-intelligence/conversational-interface-design"
                },
                {
                    label: "Prototyping & User Research",
                    url: "/design-intelligence/prototyping-and-user-research"
                },
                {
                    label: "Experience Optimization",
                    url: "/design-intelligence/experience-optimization"
                }
            ]
        }
    ],
    what_we_are: [
        {
            heading: "Our organization"
        }
    ],
    CAREERS: [
        {
            heading: "Join the Future with Digixito"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/monument_3cff3ef6.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "monument_3cff3ef6-module__57zWta__className",
});
}),
"[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'monument', 'monument Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/kessel_c2841281.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "kessel_c2841281-module__V9LIwa__className",
});
}),
"[project]/utils/kessel_c2841281.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'kessel', 'kessel Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/archivo_6241f89f.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "archivo_6241f89f-module__iHV3PG__className",
});
}),
"[project]/utils/archivo_6241f89f.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/utils/archivo_6241f89f.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'archivo', 'archivo Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/fonts.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/archivo_6241f89f.js [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
;
;
;
}),
"[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "monument",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript)");
}),
"[project]/components/widgets/tab-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
;
;
const TabPanel = (props)=>{
    const { children, value, index, sx, ...other } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            role: "tabpanel",
            hidden: value !== index,
            id: "simple-tabpanel-".concat(index),
            "aria-labelledby": "simple-tab-".concat(index),
            ...other,
            sx: {
                ...sx
            },
            children: value === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    p: 3
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/components/widgets/tab-panel.tsx",
                lineNumber: 21,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/widgets/tab-panel.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/widgets/tab-panel.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TabPanel;
const __TURBOPACK__default__export__ = TabPanel;
var _c;
__turbopack_context__.k.register(_c, "TabPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "kessel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript)");
}),
"[project]/components/widgets/common/header-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Circle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ExpandMore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Collapse/Collapse.js [app-client] (ecmascript) <export default as Collapse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/List/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemAvatar$2f$ListItemAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemAvatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemAvatar/ListItemAvatar.js [app-client] (ecmascript) <export default as ListItemAvatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js [app-client] (ecmascript) <export default as ListItemButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const Headerlist = (param)=>{
    let { heading, data, setAnchorEl, setMenuOpen } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleChangePage = (url)=>{
        router.push(url);
        setAnchorEl(null);
        setMenuOpen && setMenuOpen(false);
    };
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleToggle = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                sx: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                    fontSize: 15,
                    fontWeight: 900,
                    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily
                },
                children: heading
            }, void 0, false, {
                fileName: "[project]/components/widgets/common/header-list.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                children: data.map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__["ListItemButton"], {
                                sx: {
                                    width: "fit-content",
                                    p: 0,
                                    mb: 0.5
                                },
                                onClick: val.url ? ()=>handleChangePage(val.url || "#") : ()=>handleToggle(i),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                        primary: val.label,
                                        slotProps: {
                                            primary: {
                                                fontSize: 13,
                                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                                fontWeight: 550
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/common/header-list.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    val.subData && val.subData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                                            transition: "transform 0.3s"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/common/header-list.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/common/header-list.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            val.subData && val.subData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Collapse$3e$__["Collapse"], {
                                in: openIndex === i,
                                timeout: "auto",
                                unmountOnExit: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                    component: "div",
                                    disablePadding: true,
                                    children: val.subData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__["ListItemButton"], {
                                            sx: {
                                                pl: 2
                                            },
                                            onClick: ()=>item.url && handleChangePage(item.url),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemAvatar$2f$ListItemAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemAvatar$3e$__["ListItemAvatar"], {
                                                    sx: {
                                                        minWidth: 30
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        sx: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY,
                                                            fontSize: 10
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/widgets/common/header-list.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/widgets/common/header-list.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                                    primary: item.label,
                                                    slotProps: {
                                                        primary: {
                                                            fontSize: 15,
                                                            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                                            fontWeight: 500
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/widgets/common/header-list.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/widgets/common/header-list.tsx",
                                            lineNumber: 94,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/common/header-list.tsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/common/header-list.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/components/widgets/common/header-list.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/widgets/common/header-list.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/widgets/common/header-list.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Headerlist, "9VgF+53tGml+yCdBESMzcDp+gGA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Headerlist;
const __TURBOPACK__default__export__ = Headerlist;
var _c;
__turbopack_context__.k.register(_c, "Headerlist");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/logo/Digixito_black_outline.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Digixito_black_outline.91470fa8.svg");}),
"[project]/public/images/logo/Digixito_black_outline.svg.mjs { IMAGE => \"[project]/public/images/logo/Digixito_black_outline.svg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/logo/Digixito_black_outline.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 436,
    height: 436,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/widgets/common/header-tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$header$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assets/data/header-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__ = __turbopack_context__.i("[project]/utils/monument_3cff3ef6.js [app-client] (ecmascript) <export default as monument>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tab/Tab.js [app-client] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tabs/Tabs.js [app-client] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$tab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/tab-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$common$2f$header$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/common/header-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/logo/Digixito_black_outline.svg.mjs { IMAGE => "[project]/public/images/logo/Digixito_black_outline.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
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
const HeaderTabs = (param)=>{
    let { setAnchorEl, setMenuOpen } = param;
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$header$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_LINKS"].what_we_offer);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleChange = (e, newValue)=>{
        setValue(newValue);
        switch(__TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$header$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TABS"][newValue].label){
            case __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TABS_DATA"].WHAT_WE_OFFER:
                setData(__TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$header$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_LINKS"].what_we_offer);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TABS_DATA"].WHAT_WE_ARE:
                setData([]);
                router.push("/about-us");
                setAnchorEl(null);
                setMenuOpen === null || setMenuOpen === void 0 ? void 0 : setMenuOpen(false);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TABS_DATA"].CAREERS:
                // setData(HEADER_LINKS.CAREERS);
                router.push("/careers/life-at-digixito");
                setAnchorEl(null);
                setMenuOpen === null || setMenuOpen === void 0 ? void 0 : setMenuOpen(false);
                break;
            default:
                setData([]);
                break;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                sx: {
                    mt: 3
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "black outline logo",
                        width: 80
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/common/header-tabs.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: ()=>setAnchorEl(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                                fontSize: 30
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/common/header-tabs.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/common/header-tabs.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/common/header-tabs.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
                sx: {
                    width: "100%",
                    "& .MuiTabs-list": {
                        justifyContent: "space-between",
                        borderBottom: "1px solid #B2B2B2"
                    },
                    "& .MuiTabs-indicator": {
                        backgroundColor: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].PRIMARY, " !important"),
                        borderWidth: 2
                    },
                    py: 3
                },
                value: value,
                onChange: handleChange,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$header$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TABS"].map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: {
                                color: "#595959",
                                fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$monument_3cff3ef6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__monument$3e$__["monument"].style.fontFamily,
                                fontSize: 25,
                                fontWeight: 800
                            },
                            children: val.label
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/common/header-tabs.tsx",
                            lineNumber: 93,
                            columnNumber: 15
                        }, void 0)
                    }, i, false, {
                        fileName: "[project]/components/widgets/common/header-tabs.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/widgets/common/header-tabs.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$header$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TABS"].map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$tab$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    value: value,
                    index: i,
                    sx: {
                        maxHeight: "calc(100vh - 200px)",
                        overflowY: "auto"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                        container: true,
                        spacing: 4,
                        children: data.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                size: 2.4,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$common$2f$header$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    heading: item.heading,
                                    data: item.data,
                                    setAnchorEl: setAnchorEl,
                                    setMenuOpen: setMenuOpen
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/common/header-tabs.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, j, false, {
                                fileName: "[project]/components/widgets/common/header-tabs.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/common/header-tabs.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, i, false, {
                    fileName: "[project]/components/widgets/common/header-tabs.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/components/widgets/common/header-tabs.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeaderTabs, "+8oT6LdeZ8d/B5oIybXMhVH9m78=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HeaderTabs;
const __TURBOPACK__default__export__ = HeaderTabs;
var _c;
__turbopack_context__.k.register(_c, "HeaderTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/archivo_6241f89f.js [app-client] (ecmascript) <export default as archivo>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "archivo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/archivo_6241f89f.js [app-client] (ecmascript)");
}),
"[project]/components/widgets/mobile-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/List/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js [app-client] (ecmascript) <export default as ListItemButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$header$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assets/data/header-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$fonts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/utils/fonts.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__archivo$3e$__ = __turbopack_context__.i("[project]/utils/archivo_6241f89f.js [app-client] (ecmascript) <export default as archivo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__ = __turbopack_context__.i("[project]/utils/kessel_c2841281.js [app-client] (ecmascript) <export default as kessel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/logo/Digixito_black_outline.svg.mjs { IMAGE => "[project]/public/images/logo/Digixito_black_outline.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const MobileHeader = (param)=>{
    let { setAnchorEl } = param;
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleToggle = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    const getSubMenuData = (label)=>{
        if (label === __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_TABS_DATA"].WHAT_WE_OFFER) return __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$header$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_LINKS"].what_we_offer;
        // if (label === HEADER_TABS_DATA.WHAT_WE_ARE) return [];
        // if (label === HEADER_TABS_DATA.CAREERS) return [];
        return [];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            mt: 2,
            position: "relative",
            height: "100vh",
            overflowY: "hidden",
            display: "flex",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                direction: "row",
                alignItems: "center",
                spacing: 2,
                justifyContent: "space-between",
                sx: {
                    mt: 0,
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                        alt: "logo",
                        width: 50
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/mobile-header.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: ()=>setAnchorEl(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/widgets/mobile-header.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/mobile-header.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/mobile-header.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                sx: {
                    flexGrow: 1,
                    overflowY: "auto"
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$data$2f$header$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_LINKS"].what_we_offer.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            mb: 2
                        },
                        children: [
                            section.heading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: section.url || "#",
                                onClick: ()=>setAnchorEl(null),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    sx: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                                        fontSize: 16,
                                        fontWeight: 900,
                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$archivo_6241f89f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__archivo$3e$__["archivo"].style.fontFamily,
                                        mb: 1,
                                        mt: 1,
                                        textTransform: "uppercase"
                                    },
                                    children: section.heading
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/mobile-header.tsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/mobile-header.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                disablePadding: true,
                                children: section.data.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.url || "#",
                                        onClick: ()=>setAnchorEl(null),
                                        style: {
                                            textDecoration: "none",
                                            display: "block"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__["ListItemButton"], {
                                            sx: {
                                                borderRadius: "8px",
                                                py: 0.5,
                                                px: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                                primary: item.label,
                                                slotProps: {
                                                    primary: {
                                                        fontSize: 14,
                                                        fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$kessel_c2841281$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__kessel$3e$__["kessel"].style.fontFamily,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK,
                                                        fontWeight: 500
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/widgets/mobile-header.tsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/widgets/mobile-header.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, j, false, {
                                        fileName: "[project]/components/widgets/mobile-header.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/mobile-header.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/widgets/mobile-header.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/widgets/mobile-header.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/widgets/mobile-header.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MobileHeader, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = MobileHeader;
const __TURBOPACK__default__export__ = MobileHeader;
var _c;
__turbopack_context__.k.register(_c, "MobileHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/widgets/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_White_Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_White_Logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/logo/Digixito_White_Logo.svg.mjs { IMAGE => "[project]/public/images/logo/Digixito_White_Logo.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/enum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Popover/Popover.js [app-client] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grow$2f$Grow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grow/Grow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$common$2f$header$2d$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/common/header-tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$mobile$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/mobile-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/logo/Digixito_black_outline.svg.mjs { IMAGE => "[project]/public/images/logo/Digixito_black_outline.svg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
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
const Navbar = ()=>{
    _s();
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openMenu, setOpenMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClick = (event)=>{
        setAnchorEl(event === null || event === void 0 ? void 0 : event.currentTarget);
        setOpenMenu(true);
    };
    const phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(max-width:600px)");
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const open = Boolean(anchorEl);
    const handleClose = ()=>{
        setAnchorEl(null);
        setOpenMenu(false);
    };
    const [showAbsoluteHeader, setShowAbsoluteHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (pathname === "/") {
                setShowAbsoluteHeader(true);
            } else {
                setShowAbsoluteHeader(false);
            }
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            // p: 2,
            position: "relative",
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE,
            zIndex: showAbsoluteHeader ? 1 : 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                maxWidth: "lg",
                sx: {
                    position: showAbsoluteHeader ? "absolute" : "relative",
                    top: showAbsoluteHeader ? 20 : 10,
                    left: showAbsoluteHeader ? "50%" : 0,
                    transform: showAbsoluteHeader ? "translateX(-50%)" : "translateX(0)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                    direction: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: showAbsoluteHeader ? __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_White_Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_White_Logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo$2f$Digixito_black_outline$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "",
                                width: 70
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/navbar.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            onClick: handleClick,
                            sx: {
                                color: showAbsoluteHeader ? __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].WHITE : __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$enum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLORS"].BLACK
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    fontSize: 45
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/navbar.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/navbar.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/widgets/navbar.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/widgets/navbar.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
                open: open,
                onClose: handleClose,
                TransitionComponent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grow$2f$Grow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                transitionDuration: 200,
                TransitionProps: {
                    style: {
                        transformOrigin: "right top"
                    }
                },
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                anchorEl: anchorEl,
                sx: {
                    "& .MuiPaper-root": {
                        width: "100%",
                        height: "100%",
                        top: "0 !important",
                        right: "0px !important",
                        left: "0px !important",
                        "&.MuiPopover-paper": {
                            maxWidth: "100% !important",
                            maxHeight: "100vh",
                            boxShadow: "none"
                        },
                        position: "relative",
                        overflow: "hidden"
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    maxWidth: "lg",
                    children: phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$mobile$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setAnchorEl: setAnchorEl
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/navbar.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$common$2f$header$2d$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setAnchorEl: setAnchorEl,
                        setMenuOpen: setOpenMenu
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/navbar.tsx",
                        lineNumber: 126,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/widgets/navbar.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/widgets/navbar.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/widgets/navbar.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "xzm2qKuaW/ThJpSzE1hEG7JXGCQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/widgets/AosInit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AosInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AosInit() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AosInit.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                duration: 1000,
                mirror: true,
                once: false
            });
        }
    }["AosInit.useEffect"], []);
    return null;
}
_s(AosInit, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AosInit;
var _c;
__turbopack_context__.k.register(_c, "AosInit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_8e7ab299._.js.map