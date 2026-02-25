---
title: Common mistakes
editLink: true
---

# Common mistakes

## 1. Mixing tabs and spaces

File Architect expects tab-based indentation for hierarchy.  
If nesting looks wrong, replace leading spaces with tabs.

## 2. Folder names with dots

`my.folder` is interpreted like a file name pattern.  
Use escaped dots for folder names:

```txt
my\.folder
```

## 3. Assuming binary blank files contain real content

Blank binary files (like `.psd`, `.pdf`, `.png`) are placeholders.  
If a file does not open as expected, replace it with your real asset.

## 4. Repeater expectations

- Repeater counting starts at `1`.
- Repeated folders also repeat their nested children.
- For predictable output on a single line with multiple repeaters, use the same count.

See [Repeater](/repeater) for examples.

## 5. Copy vs import

- `[...]` copies from source.
- `(...)` imports (moves) from source.

If you need to keep the original source files, use copy.
