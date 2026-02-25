---
title: File Architect CLI
---

# Using the CLI

File Architect's core is [open-source](https://github.com/filearchitect/filearchitect) and available from [NPM](https://www.npmjs.com/package/@filearchitect/cli) as a command-line interface.

## Installation

```bash
npm install -g @filearchitect/cli
# or
pnpm add -g @filearchitect/cli
# or
yarn global add @filearchitect/cli
```

## Quick Start

1. Create a structure file (`structure.txt`):

```txt
src
    components
        Button.tsx
        Card.tsx
    styles
        global.css
```

2. Create the structure:

```bash
filearchitect create structure.txt my-project
```

## CLI Usage

```bash
# Create a structure
filearchitect create structure.txt output

# Preview operations without creating
filearchitect show structure.txt output
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
| `name_$*N.ext`        | Repeats a file/folder line N times                 | `file_$*3.txt`                          |

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

### Repeater syntax

Repeat a line with `$*N`:

```txt
filename_$*5.psd
```

If you repeat a folder line, all indented children are repeated inside each generated folder:

```txt
batch_$*3
    test
```

### Complete Example

```txt
---
fileReplacements:
  - search: ".js"
    replace: ".ts"
---
src
    components
        Button.tsx
        Card.tsx
        forms
            LoginForm.tsx
            SignupForm.tsx
    styles
        global.css
        components.css
    utils
        [~/templates/api.js] > api.ts
        helpers.ts
    types
        index.d.ts

# Copy configuration files
config
    [~/configs/base.json] > base.json
    [~/templates/react] > template

# Import existing files
tests
    (~/old-project/components/Button.test.tsx) > components/Button.test.tsx
    (~/old-project/utils/helpers.test.ts) > utils/helpers.test.ts
```

This creates:

```
my-project/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── forms/
│   │       ├── LoginForm.tsx
│   │       └── SignupForm.tsx
│   ├── styles/
│   │   ├── global.css
│   │   └── components.css
│   ├── utils/
│   │   ├── api.ts        # Copied and renamed from ~/templates/api.js
│   │   └── helpers.ts
│   └── types/
│       └── index.d.ts
├── config/
│   ├── base.json         # Copied from ~/configs/base.json
│   └── template/         # Copied from ~/templates/react
└── tests/
    ├── components/
    │   └── Button.test.tsx  # Moved from ~/old-project/components/Button.test.tsx
    └── utils/
        └── helpers.test.ts  # Moved from ~/old-project/utils/helpers.test.ts
```

## Practical Examples

### Generate a React Component

```txt
src
    components
        Button
            Button.tsx
            Button.module.css
            index.ts
            Button.test.tsx
```

### Create a Project Scaffold

```txt
---
fileReplacements:
  - search: "MyProject"
    replace: "TaskManager"
---
MyProject
    src
        index.ts
        models
            User.ts
            Task.ts
        services
            api.ts
        components
            layout
                Header.tsx
                Footer.tsx
            shared
                Button.tsx
                Card.tsx
    public
        index.html
        assets
            logo.svg
    tests
        unit
            models
                User.test.ts
    README.md
    package.json
    tsconfig.json
```

### Import from an Existing Project

```txt
# Create a new project with files from multiple sources
new-project
    # Copy configuration files
    [~/templates/typescript/tsconfig.json]
    [~/templates/eslint/.eslintrc.js]

    # Import key components from another project
    src
        components
            (~/old-project/src/components/Button.tsx)
            (~/old-project/src/components/Card.tsx)

        # Add new files
        pages
            Home.tsx
            About.tsx
            Contact.tsx
```

## Contributing

1. Clone the repository:

```bash
git clone https://github.com/filearchitect/filearchitect.git
cd filearchitect
```

2. Install dependencies:

```bash
pnpm install
```

3. Build the packages:

```bash
pnpm build
```

4. Try it out:

```bash
pnpm cli create structure.txt output
```
