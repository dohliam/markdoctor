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
