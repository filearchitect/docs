<template>
  <div :class="containerClasses">
    <pre class="structure-example" :style="exampleStyles">
            <div v-html="code"></div>
            <button class="copy-button" @click="copyToClipboard">{{ copyText }}</button>
        </pre>
    <div
      v-if="additionalHtml"
      class="additional-content"
      :style="additionalStyles"
      v-html="additionalHtml"
    ></div>
    <slot name="additional"></slot>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  structure: {
    type: String,
    required: true,
  },
  additionalHtml: {
    type: String,
    default: "",
  },
  widthRatio: {
    type: String,
    default: "1:1",
    validator: (value) => /^\d+:\d+$/.test(value),
  },
});

const copyText = ref("Copy");

const code = computed(() => {
  return props.structure
    .split("\n")
    .map((line) => `${line}`)
    .join("\n")
    .replaceAll("\t", '<span class="tab"></span>');
});

const containerClasses = computed(() => [
  "structure-container",
  { flex: props.additionalHtml },
]);

const [leftRatio, rightRatio] = computed(() => {
  const [left, right] = props.widthRatio.split(":").map(Number);
  const total = left + right;
  return [(left / total) * 100, (right / total) * 100];
}).value;

const exampleStyles = computed(() => ({
  width: props.additionalHtml ? `${leftRatio}%` : "100%",
}));

const additionalStyles = computed(() => ({
  width: `${rightRatio}%`,
}));

function copyToClipboard() {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = props.structure.replace(/<\/?p[^>]*>/g, "");
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  copyText.value = "Copied!";
  setTimeout(() => {
    copyText.value = "Copy";
  }, 2000);
}
</script>

<style scoped>
.structure-container {
  display: block;
}

.structure-container.flex {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.structure-example {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  line-height: 1;
  font-family: "Fira code", "Fira Mono", monospace;
  font-size: 14px;
  background-color: #f9f9f9;
  tab-size: 2;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  height: 100%;
  overflow-x: auto;
  position: relative;
  width: 50%;
}

.additional-content {
  padding: 10px;
  width: 50%;
}

.structure-example :deep(p) {
  line-height: 1 !important;
  margin: 0 !important;
}

.structure-example :deep(.tab) {
  position: relative;
  display: inline-block;
  width: 1rem;
}

.structure-example :deep(.tab::before) {
  content: "│";
  color: rgba(0, 0, 0, 0.3);
  font-weight: normal;
}

/* Additional styling for better visual hierarchy at deeper levels */
.structure-example :deep(.tab:nth-child(5n)::before) {
  color: rgba(0, 0, 0, 0.4);
}

.structure-example :deep(.tab:nth-child(6n)::before) {
  color: rgba(0, 0, 0, 0.5);
}

.structure-example :deep(.file) {
  font-weight: bold;
  color: #1c4ed8;
}

.structure-example :deep(.path) {
  color: #17803d;
  font-weight: bold;
}

.structure-example:hover .copy-button {
  opacity: 1;
}

.copy-button {
  transition: opacity 0.3s ease;
  opacity: 0;
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
}
</style>
