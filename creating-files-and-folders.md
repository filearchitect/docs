---
title: Creating files and folders
editLink: true
---

# Creating files and folders

**Lines without extensions will be created as folders.**

Folders will be nested according to indentation. Spaces and basic special characters are allowed in folder names, but avoid using `.`, `\`, `/` and `:` as they might cause issues.

**Lines with extensions will be created as files.**

So `img.png` will be a file, but `img` will be a folder. Files are empty by default. If you want to copy or move a file, you can use file paths explained in the [copy and import](/copy-and-import) section.

<div class="structure flex">
    <div class="structure-side">
        <StructureExample :structure="structure" />
    </div>
    <div class="structure-side">
        <FolderStructurePreview :structure="structurePreview" />
    </div>
</div>

<script setup>
import FolderStructurePreview from '.vitepress/theme/components/FolderStructurePreview.vue'
import yaml from 'js-yaml'

const structure = `<p>Folder 1</p>
<p>	subfolder-1-1</p>
<p>		subfolder-1-1-1.txt</p>
<p>	subfolder-1-2</p>
<p>Folder 2</p>
<p>	[path/to/Library]</p>
`;

const yamlStructure = `
- name: Folder 1
  children:
    - name: subfolder-1-1
      children:
        - name: subfolder-1-1-1.txt
          type: file
    - name: subfolder-1-2
- name: Folder 2
  children:
    - name: Library
    - name: config.json
      type: file
`;

const structurePreview = yaml.load(yamlStructure);

</script>
