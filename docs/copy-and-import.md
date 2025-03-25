---
title: Copy and import
editLink: true
---

# Copy and import

You can copy and import files and folders from another folder into your project structure. This will copy the contents of the files and folders into your new structure instead of creating new files and folders.

:::tip

To get the full path of a file or folder, in macOS Finder hold `⌥` and right-click on a file or folder and then click `Copy as Pathname`.

You can also drag and drop a file or folder into the File Architect text editor to get its full path.

:::

<script setup>
    import FolderStructurePreview from '../.vitepress/theme/components/FolderStructurePreview.vue'
    import yaml from 'js-yaml'

    const structure = `<p>2025_projects</p>
<p>	[path/to/2024_ideas]</p>
<p>	[path/to/2024_projects]</p>
<p>	[path/to/2024_goals.txt]</p>
<p>	(/Users/You/Images/dev_logo.png)</p>
`;

const yamlStructure = `
- name: 2025_projects
  children:
    - name: 2024_ideas
      children:
        - name: travel-blog
          type: folder-plus
        - name: screenplay
          type: folder-plus
    - name: 2024_projects_archived
      type: folder-plus
    - name: 2025_goals.txt
      type: file
`;

const structurePreview = yaml.load(yamlStructure);
</script>

<div class="structure">
    <div class="structure-full">
        <StructureExample :structure="structure" />
    </div>
    <div class="structure-full">
        <FolderStructurePreview :structure="structurePreview" />
    </div>
</div>

## Folder copy

You can copy a the content of a folder by putting its full path inbetween brackets. This will copy the full contents of the folder with all its files and subfolders into your new structure.

```
[path/to/folder]
```

## Folder import

You can import a the content of a folder by putting its full path inbetween brackets. This will move the full contents of the folder with all its files and subfolders into your new structure.

```
(path/to/folder)
```

## File copy

You can copy a single file by putting its full path between brackets.

```
[path/to/file.txt]
```

## File import

You can import a single file by putting its full path between brackets.

```
(path/to/file.txt)
```
