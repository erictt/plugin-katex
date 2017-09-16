Math typesetting using KaTex
==============

Use it for your book, by adding to your book.json:

```
{
    "plugins": ["katex@git+https://github.com/erictt/plugin-katex.git#2.0.0"]
}
```

Block `\\[...\\]`, sample:

```
\\[\sin(\frac{\pi}{2}) = 1\\]
```

Inline `\\(...\\)`, sample:

```
\\(\sin(\frac{\pi}{2}) = 1\\)
```
