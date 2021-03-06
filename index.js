var katex = require("katex");

module.exports = {
    book: {
        assets: "./static",
        js: [],
        css: [
            "katex.min.css"
        ]
    },
    ebook: {
        assets: "./static",
        css: [
            "katex.min.css"
        ]
    },
    blocks: {
        math: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "\\\\[",
                end: "\\\\]"
            },
            process: function(blk) {
                var tex = blk.body;
                var output = katex.renderToString(tex, {
                    displayMode: true,
                    colorIsTextColor: true
                });

                return output;
            }
        },
        math2: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "\\\\(",
                end: "\\\\)"
            },
            process: function(blk) {
                var tex = blk.body;
                var output = katex.renderToString(tex, {
                    displayMode: false,
                    colorIsTextColor: true
                });

                return output;
            }
        }
    }
};
