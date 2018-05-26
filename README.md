# Markdoctor - A simple online Markdown to Asciidoctor converter

See demo [here](https://dohliam.github.io/md-to-adoc).

This is a simple online tool to convert Markdown documents into their rough equivalents in [Asciidoctor](https://asciidoctor.org/) syntax. A live preview shows the results of both the rendered source and output side by side so that they can be easily compared.

## Features

The following Markdown features are supported in addition to many others that are already supported by Asciidoctor by default:

Syntax | Examples
------ | --------
horizontal rules | `***`, `---`, `___`
bold text | `**bold**`
italic text | `_italic_`, `*italic*`
bold and italic text | `**_bold and italic text_**`
headings (up to level 6) | `## Heading 2`, `### Heading 3`
images | `![](image.png)`
image text | `![Image text](image.png)`
image links | `[![Image text](image.png)](https://www.example.com/)`
links | `https://example.com`, `[Example](https://example.com)`, `[FTP](ftp://example.com)`
relative links | `[directory structure](../structure)`
unordered lists | `* bullet point`, `- bullet point`
ordered lists | `1. numbered item`, `2. numbered item`
nested lists (up to level 5) | `  * nested list item`, `  1. nested numbered item`
tables | _e.g., this one_

## See also

* [Kramdown AsciiDoc](https://github.com/asciidoctor/kramdown-asciidoc) - A Kramdown extension for converting Markdown documents to AsciiDoc (in Ruby)

## Acknowledgements

* Markdown preview: [Marked.js](https://github.com/markedjs/marked)
* Asciidoctor preview: [Asciidoctor.js](https://github.com/asciidoctor/asciidoctor.js)
* CSS: [Concise CSS](https://github.com/ConciseCSS/concise.css)
  * Prototyped using [dropin-minimal-css](https://github.com/dohliam/dropin-minimal-css)
* [AsciiDoc language features as they compare to Markdown](https://asciidoctor.org/docs/user-manual/#compared-to-markdown) on the Asciidoctor site provided a useful reference for this converter

## License

MIT.
