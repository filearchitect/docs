---
title: File Architect Library
---

# Using the Library

File Architect's core is [open-source](https://github.com/filearchitect/filearchitect) and available from [NPM](https://www.npmjs.com/package/@filearchitect/core) as a JavaScript/TypeScript library.

You can find the source code at [github.com/filearchitect](https://github.com/filearchitect/filearchitect)

## Installation

```bash
npm install @filearchitect/core
# or
pnpm add @filearchitect/core
# or
yarn add @filearchitect/core
```

## Quick Start

```typescript
import { createStructure } from "@filearchitect/core";

const structure = `
src
    components
        Button.tsx
        Card.tsx
    styles
        global.css
`;

// Uses Node.js filesystem by default
await createStructure(structure, "./my-project");

// Or with options
await createStructure(structure, "./my-project", {
  replacements: {
    files: [{ search: ".js", replace: ".ts" }],
  },
});
```

## Syntax Guide

| Syntax                | Description                                        | Example                                 |
| --------------------- | -------------------------------------------------- | --------------------------------------- |
| `name.ext`            | Creates an empty file                              | `file.txt`                              |
| `name`                | Creates a directory                                | `folder`                                |
| `[source]`            | Copies a file or folder with its contents          | `[~/path/to/config.json]`               |
| `[souce] > name.ext`  | Copies and renames a file or folder                | `[~/path/to/config.json] > config.json` |
| `(source)`            | Moves (imports) a file or folder with its contents | `(~/path/to/file.txt)`                  |
| `(source) > name.ext` | Moves and renames a file or folder                 | `(~/old.txt) > new.txt`                 |

### YAML Frontmatter

You can include YAML frontmatter at the start of your structure file to configure replacements:

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

## Library Usage

```typescript
import { createStructure, getStructure } from "@filearchitect/core";

// Basic usage with Node.js filesystem (default)
await createStructure(structureText, "./output");

// With replacements
await createStructure(structureText, "./output", {
  replacements: {
    files: [{ search: ".js", replace: ".ts" }],
    folders: [{ search: "api", replace: "rest" }],
  },
});

// Preview operations without creating files
const { operations } = await getStructure(structureText, {
  rootDir: "./output",
});
console.log(operations);

// Use the operations for custom processing
operations.forEach((operation) => {
  console.log(`${operation.type}: ${operation.targetPath}`);
});
```

## Browser Usage

File Architect also works in the browser with an in-memory filesystem:

```typescript
import { createStructure, BrowserFileSystem } from "@filearchitect/core";

const fs = new BrowserFileSystem();

// Browser requires explicit filesystem
await createStructure(structureText, "/", {
  fs, // Browser filesystem must be provided explicitly
  replacements: {
    files: [{ search: ".js", replace: ".ts" }],
  },
});

// Access the in-memory files
const files = fs.getFiles();
const directories = fs.getDirectories();
```

## Structure Operations

When using `getStructure`, you get access to all planned operations before execution:

```typescript
import { getStructure } from "@filearchitect/core";

const { operations } = await getStructure(structureText, {
  rootDir: "./output",
});
```

Each operation has the following structure:

```typescript
interface StructureOperation {
  // Type of operation: "create", "copy", "move", or "included"
  type: "create" | "copy" | "move" | "included";

  // Target path where the file/directory will be created
  targetPath: string;

  // For copy/move operations, the source path
  sourcePath?: string;

  // Whether this is a directory or file
  isDirectory: boolean;

  // Indentation depth in the original structure
  depth: number;

  // Base name of the file/directory
  name: string;

  // Warning message if there might be an issue
  warning?: string;
}
```

You can use these operations to:

- Preview changes before execution
- Create custom validation rules
- Implement your own file processing logic
- Generate documentation about the structure

## ZIP Archive Support

File Architect also provides a ZIP archiver to bundle your generated files:

```typescript
import { createStructure, ZipArchiver } from "@filearchitect/core";

// Create your file structure
await createStructure(structureText, "./output");

// Create a ZIP archive of the results
const zipArchiver = new ZipArchiver({ relativeTo: "./output" });

// Add specific files or directories
await zipArchiver.addFile("./output/config.json", '{"key": "value"}');
await zipArchiver.addDirectory("./output/src");

// Add files from the filesystem
await zipArchiver.addFromFileSystem([
  "./output/package.json",
  "./output/README.md",
]);

// Generate the ZIP archive
const zipOutput = await zipArchiver.generate("buffer"); // or "blob" for browser

// In Node.js, you can write the buffer to disk
import fs from "fs";
fs.writeFileSync("project.zip", zipOutput.data);
```

The ZIP archiver works in both Node.js and browser environments.

## Practical Examples

### Generate a React Component Structure

```typescript
import { createStructure } from "@filearchitect/core";

const componentStructure = `
src
    components
        Button
            Button.tsx
            Button.module.css
            index.ts
            Button.test.tsx
`;

await createStructure(componentStructure, "./my-project");
```

### Create a Project Scaffold with Replacements

```typescript
import { createStructure } from "@filearchitect/core";

const projectStructure = `
MyProject
    src
        index.ts
        components
            App.tsx
        styles
            global.css
    package.json
    README.md
`;

await createStructure(projectStructure, "./output", {
  replacements: {
    files: [{ search: "MyProject", replace: "TaskManager" }],
  },
});
```
