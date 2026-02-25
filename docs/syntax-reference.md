---
title: Syntax reference
editLink: true
---

# Syntax reference

Use this page as the canonical reference for File Architect structure syntax.

## Core syntax

| Syntax                | Description                                        | Example                                 |
| --------------------- | -------------------------------------------------- | --------------------------------------- |
| `name.ext`            | Creates an empty file                              | `file.txt`                              |
| `name`                | Creates a directory                                | `folder`                                |
| `[source]`            | Copies a file or folder with its contents          | `[~/path/to/config.json]`               |
| `[source] > name.ext` | Copies and renames a file or folder                | `[~/path/to/config.json] > config.json` |
| `(source)`            | Moves (imports) a file or folder with its contents | `(~/path/to/file.txt)`                  |
| `(source) > name.ext` | Moves and renames a file or folder                 | `(~/old.txt) > new.txt`                 |
| `name_$*N.ext`        | Repeats a file or folder line `N` times            | `file_$*3.txt`                          |

## Indentation

- Use tabs to define nesting.
- Same indentation level means siblings.
- Deeper indentation means child entries.

## Folder names with dots

To create folder names that include dots, escape each dot with `\`.

```txt
01\.Folder
```

Creates folder: `01.Folder`

## Replacements with YAML frontmatter

```yaml
---
fileReplacements:
  - search: ".js"
    replace: ".ts"
folderReplacements:
  - search: "api"
    replace: "rest"
---
src
api
index.js
```

## Repeater

For complete repeater examples, including nested repeated blocks, see [Repeater](/repeater).
