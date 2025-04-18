import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BwWB8Eil.mjs';
import { manifest } from './manifest_DFz9qPHi.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/events/_slug_.astro.mjs');
const _page3 = () => import('./pages/events.astro.mjs');
const _page4 = () => import('./pages/news/_slug_.astro.mjs');
const _page5 = () => import('./pages/news.astro.mjs');
const _page6 = () => import('./pages/oauth/callback.astro.mjs');
const _page7 = () => import('./pages/oauth.astro.mjs');
const _page8 = () => import('./pages/works/_slug_.astro.mjs');
const _page9 = () => import('./pages/works.astro.mjs');
const _page10 = () => import('./pages/_slug_.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro-decap-cms-oauth/src/admin.astro", _page1],
    ["src/pages/events/[slug].astro", _page2],
    ["src/pages/events/index.astro", _page3],
    ["src/pages/news/[slug].astro", _page4],
    ["src/pages/news/index.astro", _page5],
    ["node_modules/astro-decap-cms-oauth/src/oauth/callback.ts", _page6],
    ["node_modules/astro-decap-cms-oauth/src/oauth/index.ts", _page7],
    ["src/pages/works/[slug].astro", _page8],
    ["src/pages/works/index.astro", _page9],
    ["src/pages/[slug].astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1f06fce9-d226-4371-9242-144e21a613f7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
