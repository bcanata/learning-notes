// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require("path");
// const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "notlar.im",
  url: "https://notlar.im",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "bcanata", // Usually your GitHub org/user name.
  projectName: "notlar.im", // Usually your repo name.

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "university",
        path: "university",
        routeBasePath: "university",
        editUrl: "https://github.com/bcanata/learning-notes/tree/master",
        sidebarPath: require.resolve("./sidebarsUniversity.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "unity",
        path: "unity",
        routeBasePath: "unity",
        editUrl: "https://github.com/bcanata/learning-notes/tree/master",
        sidebarPath: require.resolve("./sidebarsUnity.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    async function plugin(context, options) {
      return {
        name: "docusaurus-plugin-module-alias",
        configureWebpack() {
          return {
            resolve: {
              alias: {
                "@src": path.resolve(__dirname, "src"),
              },
            },
          };
        },
      };
    },
    "docusaurus-plugin-sass",
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/bcanata/learning-notes/tree/master",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/bcanata/learning-notes/tree/master",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      algolia: {
        appId: "VS21081LW0",
        apiKey: "83afff059461687095919d7eded0c899",
        indexName: "notlarim",
      },
      navbar: {
        title: "Ana Sayfa",
        hideOnScroll: true,
        logo: {
          alt: "Site Logosu",
          src: "img/favicon.ico",
        },
        items: [
          {
            to: "/docs",
            position: "left",
            label: "Notlarım",
          },
          {
            to: "/university",
            label: "Seyahat",
            position: "left",
          },
          {
            to: "/unity",
            label: "Unity",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/showcase", label: "Showcase", position: "left" },
          { to: "/about", label: "Hakkımda", position: "right" },
          {
            href: "https://github.com/bcanata/learning-notes",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Notes",
                to: "/docs",
              },
              {
                label: "University",
                to: "/university",
              },
              {
                label: "Unity",
                to: "/unity",
              },
              {
                label: "Todos",
                to: "/todos",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },

              {
                label: "Resources",
                href: "https://github.com/bcanata/resources",
              },
              {
                label: "GitHub",
                href: "https://github.com/bcanata",
              },
              { to: "/about", label: "About" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Buğra CANATA. Docusaurus ile Hazırlandı.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "nginx"],
      },
    }),
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  i18n: {
    // 2020/08/19 (year/month/day)
    defaultLocale: "tr-TR",
    locales: ["tr-TR"],
  },
  scripts: [
    "https://cdn-go.cn/aegis/aegis-sdk/latest/aegis.min.js",
    "/aegis/init-script.js",
  ],
  trailingSlash: false,
};
module.exports = config;
