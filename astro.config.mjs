import { defineConfig } from "astro/config";
import { resolve } from "path";
import react from "@astrojs/react";
import decapCmsOauth from "astro-decap-cms-oauth";

// const sveltia = {
//   decapCMSSrcUrl: "https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js",
// };
// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@splidejs/splide/src/css/core/index": resolve(
          "node_modules/@splidejs/splide/src/css/core/index.scss",
        ),
      },
    },
  },

  integrations: [react(), decapCmsOauth()],
});
