// remix.config.js
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "cloudflare-pages",
    serverModuleFormat: "esm",
    ignoredRouteFiles: ["**/.*"],
    future: {
      v3_fetcherPersist: true,
      v3_relativeSplatPath: true,
      v3_throwAbortReason: true
    }
  };
  