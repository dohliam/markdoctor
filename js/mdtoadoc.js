function convMdAdoc(txt) {

// horizontal rules
  txt = txt.replace(/^\-{3,}$/gm, "'''").replace(/^[\*_]{3,}/gm, "'''");

// general text formatting
  txt = txt.replace(/^\*([^\s\*][^\*]+)\*/gm, "_$1_").replace(/\s\*([^\*\s]+)\*/g, " _$1_").replace(/\*\*_/g, "*_").replace(/_\*\*/g, "_*").replace(/^\*\*([^\*]+)\*\*/gm, "*$1*").replace(/\s\*\*([^\*]+)\*\*/g, " *$1*");

// headings
  txt = txt.replace(/^#\s(.*)$/gm, "= $1\n:doctype: book\n\n= $1").replace(/^#{2}\s/gm, "== ").replace(/^#{3}\s/gm, "=== ").replace(/^#{4}\s/gm, "==== ").replace(/^#{5}\s/gm, "===== ").replace(/^#{6}\s/gm, "====== ");

// images
  txt = txt.replace(/\[\!\[([^\]]*)\]\(([^\)]+)\)\]\(([^\)]+)\)/g, "image::$2[$1, link=\"$3\"]").replace(/\!\[([^\]]*)\]\(([^\)]+)\)/g, "image::$2[$1]");

// links
  txt = txt.replace(/\[([^\]]+)\]\(([a-z\.\/]+[^:\)]+)\)/g, "link:$2[$1]").replace(/\[([^\]]+)\]\(([a-z]+:\/\/[^\)]+)\)/g, "$2[$1]");

// unordered lists
  txt = txt.replace(/^\s{2}[\*\-]\s/gm, "** ").replace(/^\s{4}[\*\-]\s/gm, "*** ").replace(/^\s{6}[\*\-]\s/gm, "**** ").replace(/^\s{8}[\*\-]\s/gm, "***** ");

// ordered lists
  txt = txt.replace(/^\d+\.\s/gm, ". ").replace(/^\s{2}\d+\.\s/gm, ".. ").replace(/^\s{4}\d+\.\s/gm, "... ").replace(/^\s{6}\d+\.\s/gm, ".... ").replace(/^\s{8}\d+\.\s/gm, "..... ");

// tables
  txt = txt.replace(/^\|*\s*(.*?)\s+\|\s+(.*?)\n\|*\s*\-+.*\n/gm, "[options=\"header\"]\n|===\n| $1 | $2\n").replace(/^\|*\s*(.*?\s+\|\s+.*?)\n\n/gm, "| $1\n|===\n\n").replace(/^([^\|]+\s+\|\s+.*$)/gm, "| $1");

  return txt
}

function convertBtn() {
  mdToadoc();
  mdTohtml();
  adocTohtml();
}

function mdToadoc() {
  var mdInput = document.getElementById("mdInput").value;
  var adocResult = document.getElementById("adocResult");

  var adoc = convMdAdoc(mdInput);
  adocResult.value = adoc;
}

function mdTohtml() {
  var output = document.getElementById("mdOutput");
  var mdText = document.getElementById("mdInput").value;
  var html = marked(mdText);
  document.getElementById("headings").style.display = "";
  output.innerHTML = html;
}

function adocTohtml() {
  var output = document.getElementById("adocOutput");
  var asciidoctor = Asciidoctor();
  var adocTxt = document.getElementById("adocResult").value;
  var html = asciidoctor.convert(adocTxt);
  output.innerHTML = html;
}

function sampleTxt() {
  txt = "# Title\n\n## Text formatting\n\n### Unordered lists\n\n* Bullet point level 1\n  * Bullet point level 2 number 1\n  * Bullet point level 2 number 2\n* Bullet point level 1 number 2\n* Level 1\n  * Level 2\n    * Level 3\n      * Level 4\n        * Level 5\n\n### Ordered lists\n\n1. Ordered list\n2. Another item\n3. A third item\n  1. A sub-item\n  2. A second sub-item\n4. Continuation of the list\n\n## Formatting\n\nSome **bold** text (**bold text**), some _italic_ text (_italic text_), and **_bold italic text_**\n\n**Bold text** at the beginning of a line\n\n## Links\n\n* [A link with link text](https://example.com)\n* A bare link: https://example.com\n* An image link: ![](image.png \"alt text\")\n\n## Tables\n\nTable Heading 1 | Table Heading 2\n-------------- | --------------\nSome data | Another column of data\nSecond row | And more\n\n## Headings\n\n### Level 2 heading\n\n#### Level 3 heading\n\n##### Level 4 heading\n\n###### Level 5 heading\n\n";
  var mdText = document.getElementById("mdInput");
  mdText.value = txt;
}
