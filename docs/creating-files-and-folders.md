---
title: Creating files and folders
editLink: true
---

# Creating files and folders

File Architect makes it simple to create folder structures and files with just text. The key is understanding how files and folders are distinguished.

For the complete syntax table, see [Syntax reference](/syntax-reference).

## Basic Rules

- **Lines with file extensions** (like `.txt`, `.js`, `.md`) create **files**
- **Lines without extensions** create **folders**
- **Indentation creates hierarchy** - use tabs to nest items
- **Spaces are allowed** in names, but avoid `.`, `\`, `/`, and `:` characters

:::tip
If you want a dot in the name of a folder, you can do so by putting a backslash before the dot. So `01\.Folder` will create a folder named `01.Folder`
:::

## Example

<div class="structure flex">
    <div class="structure-side">
        <StructureExample :structure="complexStructure" />
    </div>
    <div class="structure-side">
        <FolderStructurePreview :structure="complexStructurePreview" />
    </div>
</div>

## Tips

- Start with main folders, then add subfolders and files
- Use consistent indentation for the same hierarchy level
- Files are created [blank](/blank-files) by default - use [copy and import](/copy-and-import) to copy or move files instead

## Repeater syntax

Use `$*N` to repeat a file or folder line.

For full examples including nested repeated folders, see [Repeater](/repeater).

<script setup>
import FolderStructurePreview from '../.vitepress/theme/components/FolderStructurePreview.vue'
import yaml from 'js-yaml'

const complexStructure = `<p>01\. My Project</p>
<p>	src</p>
<p>		components</p>
<p>			common</p>
<p>				Button.jsx</p>
<p>				Modal.jsx</p>
<p>			layout</p>
<p>				Header.jsx</p>
<p>				Footer.jsx</p>
<p>		pages</p>
<p>			Home.jsx</p>
<p>			About.jsx</p>
<p>		App.jsx</p>
<p>	public</p>
<p>		images</p>
<p>		favicon.ico</p>
<p>	package.json</p>`;

const complexStructurePreview = yaml.load(`
- name: 01. My Project
  children:
    - name: src
      children:
        - name: components
          children:
            - name: common
              children:
                - name: Button.jsx
                  type: file
                - name: Modal.jsx
                  type: file
            - name: layout
              children:
                - name: Header.jsx
                  type: file
                - name: Footer.jsx
                  type: file
        - name: pages
          children:
            - name: Home.jsx
              type: file
            - name: About.jsx
              type: file
        - name: App.jsx
          type: file
    - name: public
      children:
        - name: images
        - name: favicon.ico
          type: file
    - name: package.json
      type: file
`);

</script>
