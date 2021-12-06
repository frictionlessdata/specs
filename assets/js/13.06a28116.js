(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{227:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"page-frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$page.frontmatter.title))]),e._v(" "),a("p",[e._v(e._s(e.$page.frontmatter.abstract))]),e._v(" "),a("MetadataTable"),e._v(" "),a("h2",{attrs:{id:"language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[e._v("#")]),e._v(" Language")]),e._v(" "),a("Language"),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("CSV Dialect defines a simple format to describe the various dialects of CSV files in a language agnostic manner. It aims to deal with a reasonably large subset of the features which differ between dialects, such as terminator strings, quoting rules, escape rules and so on. The specification has been modeled around the union of the csv  modules in Python and Ruby, and the bulk load capabilities of MySQL and PostgresQL.")]),e._v(" "),a("h3",{attrs:{id:"excluded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#excluded"}},[e._v("#")]),e._v(" Excluded")]),e._v(" "),a("p",[e._v("CSV Dialect has nothing to do with the names, contents or types of the headers or data within the CSV file, only how it is formatted. However, CSV Dialect does allow the presence or absence of a header to be specified, similarly to "),a("a",{attrs:{href:"http://www.ietf.org/rfc/rfc4180.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC4180"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("CSV Dialect is also orthogonal to the character encoding used in the CSV file. Note that it is possible for files in CSV format to contain data in more than one encoding.")]),e._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("CSV Dialect is useful for programmes which might have to deal with multiple dialects of CSV file, but which can rely on being told out-of-band which dialect will be used in a given input stream. This reduces the need for heuristic inference of CSV dialects, and simplifies the implementation of CSV readers, which must juggle dialect inference, schema inference, unseekable input streams, character encoding issues, and the lazy reading of very large input streams.")]),e._v(" "),a("p",[e._v("Some related work can be found in "),a("a",{attrs:{href:"https://docs.google.com/spreadsheet/ccc?key=0AmU3V2vcPKrIdEhoU1NQSWtoQmJwcUNCelJtdkx2bFE&usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("this comparison of csv dialect support"),a("OutboundLink")],1),e._v(", this "),a("a",{attrs:{href:"http://panda.readthedocs.org/en/latest/api.html#data-uploads",target:"_blank",rel:"noopener noreferrer"}},[e._v("example of similar JSON format"),a("OutboundLink")],1),e._v(", and in Python’s "),a("a",{attrs:{href:"http://www.python.org/dev/peps/pep-0305/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PEP 305"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("A CSV Dialect descriptor, "),a("code",[e._v("dialect")]),e._v(", "),a("code",[e._v("MUST")]),e._v(" be a JSON "),a("code",[e._v("object")]),e._v(" with the following properties:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("delimiter")]),e._v(" - specifies the character sequence which should separate fields (aka columns). Default = "),a("code",[e._v(",")]),e._v(". Example "),a("code",[e._v("\\t")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("lineTerminator")]),e._v(" - specifies the character sequence which should terminate rows. Default = "),a("code",[e._v("\\r\\n")])]),e._v(" "),a("li",[a("code",[e._v("quoteChar")]),e._v(" - specifies a one-character string to use as the quoting character. Default = "),a("code",[e._v('"')])]),e._v(" "),a("li",[a("code",[e._v("doubleQuote")]),e._v(" - controls the handling of quotes inside fields. If true, two consecutive quotes should be interpreted as one. Default = "),a("code",[e._v("true")])]),e._v(" "),a("li",[a("code",[e._v("escapeChar")]),e._v(" - specifies a one-character string to use for escaping (for example, "),a("code",[e._v("\\")]),e._v("), mutually exclusive with "),a("code",[e._v("quoteChar")]),e._v(". Not set by default")]),e._v(" "),a("li",[a("code",[e._v("nullSequence")]),e._v(" - specifies the null sequence (for example "),a("code",[e._v("\\N")]),e._v("). Not set by default")]),e._v(" "),a("li",[a("code",[e._v("skipInitialSpace")]),e._v(" - specifies how to interpret whitespace which immediately follows a delimiter; if "),a("code",[e._v("false")]),e._v(", it means that whitespace immediately after a delimiter should be treated as part of the following field. Default = "),a("code",[e._v("false")])]),e._v(" "),a("li",[a("code",[e._v("header")]),e._v(" - indicates whether the file includes a header row. If "),a("code",[e._v("true")]),e._v(" the first row in the file is a header row, not data. Default = "),a("code",[e._v("true")])]),e._v(" "),a("li",[a("code",[e._v("commentChar")]),e._v(" - indicates a one-character string to ignore any line whose row begins with this character")]),e._v(" "),a("li",[a("code",[e._v("caseSensitiveHeader")]),e._v(" - indicates that case in the header is meaningful. For example, columns "),a("code",[e._v("CAT")]),e._v(" and "),a("code",[e._v("Cat")]),e._v(" should not be equated. Default = "),a("code",[e._v("false")])]),e._v(" "),a("li",[a("code",[e._v("csvddfVersion")]),e._v(" - a number, in n.n format, e.g., "),a("code",[e._v("1.2")]),e._v(". If not present, consumers should assume latest schema version.")])]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("Here’s an example:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dialect"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"csvddfVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"delimiter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('";"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"doubleQuote"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"lineTerminator"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\\r\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"quoteChar"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\\""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"skipInitialSpace"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"header"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"commentChar"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"#"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);