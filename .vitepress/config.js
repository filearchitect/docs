export default {
  title: "File Architect",
  description: "Create file and folder structures from simple text outlines",
  // For GitHub Pages deployment
  base: "/docs/",
  // No need to output to a public/docs subfolder anymore
  outDir: "./.vitepress/dist",
  assetsDir: "",
  build: {
    minify: false, // Disable minification
  },
  appearance: false,
  theme: {
    light: true,
    dark: false,
  },
  head: [
    [
      "script",
      {},
      `
            window.op = window.op || function(...args) {
                (window.op.q = window.op.q || []).push(args);
            };
            window.op('init', {
                clientId: '5e908313-55c2-4c92-bab2-0f7c2c128301',
                trackScreenViews: true,
                trackOutgoingLinks: true,
                trackAttributes: true,
            });
            `,
    ],
    [
      "script",
      { defer: true, async: true, src: "https://openpanel.dev/op1.js" },
    ],
  ],

  themeConfig: {
    search: {
      provider: "local",
    },
    appearance: "light",
    nav: [
      { text: "Home", link: "https://filearchitect.com" },
      { text: "Docs", link: "/" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/" },
          {
            text: "Creating files and folders",
            link: "/creating-files-and-folders",
          },
          { text: "Copy and import", link: "/copy-and-import" },
          { text: "Blank files", link: "/blank-files" },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present File Architect",
    },
  },
};
