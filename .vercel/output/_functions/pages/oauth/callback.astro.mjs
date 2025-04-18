import { O as OAUTH_GITHUB_REPO_ID, a as OAUTH_GITHUB_CLIENT_SECRET, b as OAUTH_GITHUB_CLIENT_ID } from '../../chunks/server_D08ni6cE.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ url, redirect }) => {
  const data = {
    code: url.searchParams.get("code"),
    client_id: OAUTH_GITHUB_CLIENT_ID,
    client_secret: OAUTH_GITHUB_CLIENT_SECRET,
    ...OAUTH_GITHUB_REPO_ID ? { repository_id: OAUTH_GITHUB_REPO_ID } : {}
  };
  try {
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const body = await response.json();
    const content = {
      token: body.access_token,
      provider: "github"
    };
    const script = `
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:${content.provider}:success:${JSON.stringify(content)}',
            message.origin
          );

          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);

        window.opener.postMessage("authorizing:${content.provider}", "*");
      <\/script>
    `;
    return new Response(script, {
      headers: { "Content-Type": "text/html" }
    });
  } catch (err) {
    console.log(err);
    return redirect("/?error=😡");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
