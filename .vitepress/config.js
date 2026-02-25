import { copyFileSync } from "fs";

export default {
  title: "File Architect",
  description: "Create file and folder structures from simple text outlines",
  // For GitHub Pages deployment with custom domain
  base: "/",
  // No need to output to a public/docs subfolder anymore
  outDir: "./.vitepress/dist",
  srcDir: "./docs",
  assetsDir: "",
  ignoreDeadLinks: true,
  build: {
    minify: false, // Disable minification
  },
  appearance: false,
  theme: {
    light: true,
    dark: false,
  },

  buildEnd() {
    copyFileSync("./.vitepress/CNAME", "./.vitepress/dist/CNAME");
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
          { text: "Syntax reference", link: "/syntax-reference" },
          { text: "Copy and import", link: "/copy-and-import" },
          { text: "Repeater", link: "/repeater" },
          { text: "Blank files", link: "/blank-files" },
          { text: "Templates", link: "/templates" },
          { text: "Common mistakes", link: "/common-mistakes" },
          { text: "Recipes", link: "/recipes" },
        ],
      },
      {
        text: "Developers",
        items: [
          {
            text: "CLI",
            link: "/cli",
          },
          {
            text: "Library",
            link: "/library",
          },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present File Architect",
    },
  },
};
