// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import StructureExample from "./components/StructureExample.vue";
import "./styles/structure.css";
import "./tailwind.css";

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // register your custom global components
        app.component("StructureExample", StructureExample);
    },
};
