import { b as OAUTH_GITHUB_CLIENT_ID } from '../chunks/server_D08ni6cE.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const GET = ({ redirect }) => {
  const params = new URLSearchParams({
    client_id: OAUTH_GITHUB_CLIENT_ID,
    scope: "repo,user"
  });
  return redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
