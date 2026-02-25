---
title: Getting Started
---

# Getting Started

File Architect allows you to create file and folder structures from simple text outlines. It's simple, but gives you many options.

## Key Features

- 📁 Simple indentation-based syntax for structure design
- ⚡ Fast and efficient structure creation
- ↔ Copy or move existing files and folders into your structure
- 📄 Templates for common project structures
- 📎 Easily shareable, reusable, and readable plain text format

## How It Works

You can create structures with a simple syntax like this:

<div class="structure">
    <div class="structure-full">
        <StructureExample :structure="structure" />
    </div>
    <p>This will give you this structure:</p>
    <div class="structure-full">
        <FolderStructurePreview :structure="structurePreview" />
    </div>
</div>

<script setup>
    import FolderStructurePreview from '../.vitepress/theme/components/FolderStructurePreview.vue'

import yaml from 'js-yaml'
const structure = `<p>project-X</p>
<p>	src</p>
<p>		components</p>
<p class="file">			Header.js</p>
<p class="file">			Footer.js</p>
<p>		pages</p>
<p class="file">			Home.js</p>
<p class="file">			About.js</p>
<p>	public</p>
<p>		images</p>
<p class="path">			[/Users/You/dev_logo.png]</p>
<p class="path">			(/Users/You/client-name_logo.png)</p>
<p class="path">	[path/to/project-docs]</p>
<p>	README.md</p>`;

const yamlStructure = `
- name: project-X
  children:
    - name: src
      children:
        - name: components
          children:
            - name: Header.js
              type: file
            - name: Footer.js
              type: file
        - name: pages
          children:
            - name: Home.js
              type: file
            - name: About.js
              type: file
    - name: public
      children:
        - name: images
          children:
            - name: dev_logo.png
              type: file
            - name: company-logo.png
              type: file
    - name: README.md
      type: file
    - name: project-docs
      type: folder-plus
      children:
        - name: file-copied-from-docs.docx
          type: file
`;

const structurePreview = yaml.load(yamlStructure);




</script>

## Quick syntax guide

| Syntax                | Action                   | Example                                                                                  |
| --------------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| Plain text            | Creates a folder         | `project`                                                                                |
| Text with extension   | Creates a file           | `index.js`                                                                               |
| Bracketed file path   | Copies existing file     | `[/Users/You/logo.png]`                                                                  |
| Bracketed folder path | Copies entire folder     | `[path/to/folder]`                                                                       |
| Parentheses file path | Moves existing file      | `(/Users/You/logo.png)`                                                                  |
| Repeater              | Repeats a line N times   | `filename_$*5.psd`                                                                       |
| Nested repeater block | Repeats children too     | `batch_$*3` + indented children                                                          |
| Tab indentation       | Creates nested structure | parent<div class="border-l-2  border-gray-300" style="padding: 0 0 0 .8rem;">child</div> |

## Syntax

### Indentations

Tab indentation is used to determine the structure and nesting level. Tabs are visually represented by the character `|` in the editor to help you see the structure, but you only need to use `Tab` when creating your own.

### Folder

By default, if a line does not have an extension (`.js`, `.png`, etc.) or a path separator (`/`), it will be treated as a folder name.

### File

If a line has an extension, it will be treated as a file name, and will be created as an empty file.

::: info Note
When files are empty, plain text files (eg. `.js`, `.vue`, `.css`, `.html`, etc.) will be behave normally and be editable, but binary data files like `.png`, `.psd`, `.pdf`, might not work or open in your usual software. They can still be useful as placeholders to be replaced.
:::

### File path copy

If a string has a path separator `/` (eg. `/Users/You/logo.png`), it will be treated as an existing file to copy to the new structure.

### Folder path copy

If a string has a path inside of brackets, it will be treated as a full folder copy path (eg. `[path/to/folder]`). The folder with all of its content will be copied into the current project structure.

### Repeater syntax

Use `$*N` in a file or folder name to repeat that line `N` times.

```txt
filename_$*5.psd
```

Creates:

```txt
filename_1.psd
filename_2.psd
filename_3.psd
filename_4.psd
filename_5.psd
```

If the repeated line is a folder, its indented children are repeated inside each generated folder:

```txt
batch_$*3
    test
```

Creates:

```txt
batch_1
    test
batch_2
    test
batch_3
    test
```

## Next Steps

Now that you're familiar with the basics of File Architect, explore our advanced features and integrations to further enhance your development workflow.

- [Creating files and folders](/creating-files-and-folders)
- [Copy and import](/copy-and-import)
- [Templates](/templates)
