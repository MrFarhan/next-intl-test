/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withTM = require("next-transpile-modules")(["@babel/preset-react"]);

module.exports = withTM(
  withBundleAnalyzer({
    reactStrictMode: true,
    i18n: {
      locales: ["en", "es"],
      defaultLocale: "en",
    },
    images: {
      // domains: ["medicus-dev2.s3-us-east-2.amazonaws.com", "www.google.com"],
      // formats: [""],
      domains: [
        "medicus-dev2.s3-us-east-2.amazonaws.com",
        "medicus-dev.agencypartner.com",
        "medicus-uat.agencypartner.com",
        "medicus-test.agencypartner.com",
        "staging.joinmedicus.com",
        "www.google.com",
      ],
      // minimumCacheTTL: 60,

      // added for images and 502 Error Fix R&D
      // disableStaticImages: true, // added for images and 502 Error Fix R&D
      // dangerouslyAllowSVG: true, // added for images and 502 Error Fix R&D
      // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      // added for images and 502 Error Fix R&D
    },
    // experimental: {
    //   images: {
    //     unoptimized: true,
    //   },
    // },
    // headers: async () => [
    //   // {
    //   //   // list more extensions here if needed; these are all the resources in the `public` folder including the subfolders
    //   //   source: "/:all*(svg|jpg|png)",
    //   //   locale: false,
    //   //   headers: [
    //   //     {
    //   //       key: "Cache-Control",
    //   //       value: "public, max-age=31536000, must-revalidate",
    //   //     },
    //   //   ],
    //   // },
    // ],
  })
);
