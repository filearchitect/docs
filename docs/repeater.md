---
title: Repeater
editLink: true
---

# Repeater

Use `$*N` in a file or folder name to repeat that line `N` times.

## Basic repeat

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

## Repeated folders with children

If the repeated line is a folder, all indented children are repeated inside each generated folder.

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

## Nested repeaters

You can combine repeaters in nested levels.

```txt
batch_$*2
    shot_$*3.psd
```

Creates:

```txt
batch_1
    shot_1.psd
    shot_2.psd
    shot_3.psd
batch_2
    shot_1.psd
    shot_2.psd
    shot_3.psd
```

## Notes

- Repeater counting starts at `1`.
- Repeaters work in app input, CLI, and library usage (core parser).
- If multiple repeaters are on the same line, use the same count for predictable output.
