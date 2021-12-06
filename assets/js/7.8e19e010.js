(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{213:function(t,e,a){"use strict";var s=a(96);a.n(s).a},242:function(t,e,a){"use strict";a.r(e);a(213);var s=a(0),d=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"page-frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$page.frontmatter.title))]),t._v(" "),a("p",[t._v(t._s(t.$page.frontmatter.abstract))]),t._v(" "),a("MetadataTable"),t._v(" "),a("h2",{attrs:{id:"language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[t._v("#")]),t._v(" Language")]),t._v(" "),a("Language"),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("p",[t._v("The tabular diff format expresses the difference between two versions of a table."),a("br"),t._v("\nHere’s an example of a diff:")]),t._v(" "),a("div",{staticClass:"highlighter"},[a("table",[a("tr",[a("th",[t._v("@@")]),a("th",[t._v("bridge")]),a("th",[t._v("designer")]),a("th",[t._v("length")])]),t._v(" "),a("tr",[a("td"),a("td",[t._v("Brooklyn")]),a("td",[t._v("J. A. Roebling")]),a("td",[t._v("1595")])]),t._v(" "),a("tr",{staticClass:"add"},[a("td",[t._v("+++")]),a("td",[t._v("Manhattan")]),a("td",[t._v("G. Lindenthal")]),a("td",[t._v("1470")])]),t._v(" "),a("tr",{staticClass:"modify"},[a("td",{staticClass:"modify"},[t._v("->")]),a("td",[t._v("Williamsburg")]),a("td",{staticClass:"modify"},[t._v("D. Duck->L. L. Buck")]),a("td",[t._v("1600")])]),t._v(" "),a("tr",[a("td"),a("td",[t._v("Queensborough")]),a("td",[t._v("Palmer & Hornbostel")]),a("td",[t._v("1182")])]),t._v(" "),a("tr",[a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),t._v(" "),a("tr",[a("td"),a("td",[t._v("George Washington")]),a("td",[t._v("O. H. Ammann")]),a("td",[t._v("3500")])]),t._v(" "),a("tr",{staticClass:"remove"},[a("td",[t._v("---")]),a("td",[t._v("Spamspan")]),a("td",[t._v("S. Spamington")]),a("td",[t._v("10000 ")])])])]),t._v(" "),a("p",[t._v("As for text diffs, the format emphasizes significant changes.  Also like text diffs, the format is unambiguous without color, but readily enhanced with it.  Unlike text diffs, the format preserves the original tabular structure, allowing presentation with sensible visual alignment.")]),t._v(" "),a("p",[t._v("There is a reference implementation of a tool for generating and processing tabular diffs at "),a("a",{attrs:{href:"https://github.com/paulfitz/daff",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/paulfitz/daff"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[t._v("#")]),t._v(" Scope")]),t._v(" "),a("p",[t._v("The tabular diff format can express the following kinds of changes in a table:")]),t._v(" "),a("ul",[a("li",[t._v("Inserted or deleted rows.")]),t._v(" "),a("li",[t._v("Inserted, deleted, or renamed columns.")]),t._v(" "),a("li",[t._v("Modified cell values.")])]),t._v(" "),a("p",[t._v("If the order of the rows or columns of the the table are meaningful, then the format can also express:")]),t._v(" "),a("ul",[a("li",[t._v("Reordered rows or columns.")])]),t._v(" "),a("p",[t._v("Changes in formatting and systematic transformation of data (such as capitalization) are not expressible.")]),t._v(" "),a("h2",{attrs:{id:"general-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-structure"}},[t._v("#")]),t._v(" General structure")]),t._v(" "),a("p",[t._v("Assume we have two tables, called "),a("code",[t._v("LOCAL")]),t._v(" and "),a("code",[t._v("REMOTE")]),t._v(". The diff summarizes the changes needed to modify "),a("code",[t._v("LOCAL")]),t._v(" to match "),a("code",[t._v("REMOTE")]),t._v(".")]),t._v(" "),a("p",[t._v("The diff contains rows and columns from the tables being compared. As in regular text diffs, there is flexibility in what data is given and what is omitted.")]),t._v(" "),a("ul",[a("li",[t._v("A column or row that is common to the tables being compared should appear at most once.")]),t._v(" "),a("li",[t._v("Any column or row containing a modified cell should be included in the diff, and the modified cell should be represented using the procedure in "),a("a",{attrs:{href:"#expressing-a-modified-cell-value"}},[t._v("Expressing a modified cell value")]),t._v(".")]),t._v(" "),a("li",[t._v("Columns or rows that are present in one table and not in the other should be included in the diff.")]),t._v(" "),a("li",[t._v("Columns or rows that are unchanged and unneeded for context may be omitted, at the diff creator’s discretion.")]),t._v(" "),a("li",[t._v("Omitted blocks of rows or columns should be marked with a row/column full of "),a("code",[t._v("...")]),t._v(" cells.")])]),t._v(" "),a("p",[t._v("In addition, the diff contains the following special rows and columns:")]),t._v(" "),a("ul",[a("li",[t._v("The "),a("em",[t._v("action")]),t._v(" column. This is always present, and is the first column in the diff if columns are ordered. If columns are "),a("em",[t._v("not")]),t._v(" ordered, it is the column named "),a("code",[t._v("__hilite_diff__")]),t._v(".")]),t._v(" "),a("li",[t._v("A "),a("em",[t._v("header")]),t._v(" row with column names. This row can be recognized since it will have the tag "),a("code",[t._v("@@")]),t._v(" in the action column.")]),t._v(" "),a("li",[t._v("A "),a("em",[t._v("schema")]),t._v(" row that is needed when the column structure differs between tables. This row can be recognized since it will have the tag "),a("code",[t._v("!")]),t._v(" in the action column.")])]),t._v(" "),a("p",[t._v("Here’s an example diff, where the tables being compared share the same three columns:")]),t._v(" "),a("div",{staticClass:"highlighter"},[a("table",[a("tr",{staticClass:"desc"},[a("td",{staticClass:"desc"}),a("td",[t._v("action column")]),a("td",{attrs:{colspan:"3"}},[t._v("data from compared tables")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"},[t._v("header row")]),a("th",[t._v("@@")]),a("th",[t._v("bridge")]),a("th",[t._v("designer")]),a("th",[t._v("length")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"}),a("td"),a("td",[t._v("Brooklyn")]),a("td",[t._v("J. A. Roebling")]),a("td",[t._v("1595")])]),t._v(" "),a("tr",{staticClass:"add"},[a("td",{staticClass:"desc"}),a("td",[t._v("+++")]),a("td",[t._v("Manhattan")]),a("td",[t._v("G. Lindenthal")]),a("td",[t._v("1470")])]),t._v(" "),a("tr",{staticClass:"modify"},[a("td",{staticClass:"desc"}),a("td",{staticClass:"modify"},[t._v("->")]),a("td",[t._v("Williamsburg")]),a("td",{staticClass:"modify"},[t._v("D. Duck->L. L. Buck")]),a("td",[t._v("1600")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"}),a("td"),a("td",[t._v("Queensborough")]),a("td",[t._v("Palmer & Hornbostel")]),a("td",[t._v("1182")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"},[t._v("omitted rows")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"}),a("td"),a("td",[t._v("George Washington")]),a("td",[t._v("O. H. Ammann")]),a("td",[t._v("3500")])]),t._v(" "),a("tr",{staticClass:"remove"},[a("td",{staticClass:"desc"}),a("td",[t._v("---")]),a("td",[t._v("Spamspan")]),a("td",[t._v("S. Spamington")]),a("td",[t._v("10000 ")])])])]),t._v(" "),a("p",[t._v("The colors do not make up part of this specification, they are just syntax highlighting. The meaning of the various tags will become clear in later sections, for now we are just concerned with the structure of the diff. Here’s an example where there is a difference in columns: "),a("code",[t._v("LOCAL")]),t._v(" has a "),a("em",[t._v("length")]),t._v(" column that is removed in "),a("code",[t._v("REMOTE")]),t._v(", "),a("code",[t._v("REMOTE")]),t._v(" has an "),a("em",[t._v("opened")]),t._v(" column that wasn’t present in "),a("code",[t._v("LOCAL")]),t._v(", and the "),a("em",[t._v("designer")]),t._v(" column in "),a("code",[t._v("LOCAL")]),t._v(" is renamed as "),a("em",[t._v("lead designer")]),t._v(" in "),a("code",[t._v("REMOTE")]),t._v(":")]),t._v(" "),a("div",{staticClass:"highlighter"},[a("table",[a("tr",{staticClass:"desc"},[a("td",{staticClass:"desc"}),a("td",[t._v("action column")]),a("td",{attrs:{colspan:"4"}},[t._v("data from compared tables")])]),t._v(" "),a("tr",{staticClass:"spec"},[a("td",{staticClass:"desc"},[t._v("schema row")]),a("td",[t._v("!")]),a("td"),a("td",{staticClass:"add"},[t._v("+++")]),a("td",[t._v("(designer)")]),a("td",{staticClass:"remove"},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"},[t._v("header row")]),a("th",[t._v("@@")]),a("th",[t._v("bridge")]),a("th",{staticClass:"add"},[t._v("opened")]),a("th",[t._v("lead designer")]),a("th",{staticClass:"remove"},[t._v("length")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc",attrs:{rowspan:"8"}}),a("td",[t._v("+")]),a("td",[t._v("Brooklyn")]),a("td",{staticClass:"add"},[t._v("1883")]),a("td",[t._v("J. A. Roebling")]),a("td",{staticClass:"remove"},[t._v("1595")])]),t._v(" "),a("tr",[a("td",[t._v("+")]),a("td",[t._v("Manhattan")]),a("td",{staticClass:"add"},[t._v("1909")]),a("td",[t._v("G. Lindenthal")]),a("td",{staticClass:"remove"},[t._v("1470")])]),t._v(" "),a("tr",[a("td",[t._v("+")]),a("td",[t._v("Williamsburg")]),a("td",{staticClass:"add"},[t._v("1903")]),a("td",[t._v("L. L. Buck")]),a("td",{staticClass:"remove"},[t._v("1600")])]),t._v(" "),a("tr",[a("td",[t._v("+")]),a("td",[t._v("Queensborough")]),a("td",{staticClass:"add"},[t._v("1909")]),a("td",[t._v("Palmer & Hornbostel")]),a("td",{staticClass:"remove"},[t._v("1182")])]),t._v(" "),a("tr",[a("td",[t._v("+")]),a("td",[t._v("Triborough")]),a("td",{staticClass:"add"},[t._v("1936")]),a("td",[t._v("O. H. Ammann")]),a("td",{staticClass:"remove"},[t._v("1380,383")])]),t._v(" "),a("tr",[a("td",[t._v("+")]),a("td",[t._v("Bronx Whitestone")]),a("td",{staticClass:"add"},[t._v("1939")]),a("td",[t._v("O. H. Ammann")]),a("td",{staticClass:"remove"},[t._v("2300")])]),t._v(" "),a("tr",[a("td",[t._v("+")]),a("td",[t._v("Throgs Neck")]),a("td",{staticClass:"add"},[t._v("1961")]),a("td",[t._v("O. H. Ammann")]),a("td",{staticClass:"remove"},[t._v("1800")])]),t._v(" "),a("tr",[a("td",[t._v("+")]),a("td",[t._v("George Washington")]),a("td",{staticClass:"add"},[t._v("1931")]),a("td",[t._v("O. H. Ammann")]),a("td",{staticClass:"remove"},[t._v("3500")])])])]),t._v(" "),a("p",[t._v("We see that a schema row is added above the header row to represent the changes in columns. With this general anatomy of a diff in mind, let’s look at the details of how to interpret it.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If writing a rule to “sniff” a file to see if it is a tabular diff, the "),a("code",[t._v("@@")]),t._v(" tag is a handy tell-tale. But watch out for that schema row! Also, to allow for future evolution of this format, please try to be robust to a few extra rows or columns appearing before the "),a("code",[t._v("@@")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"expressing-inserted-and-deleted-columns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expressing-inserted-and-deleted-columns"}},[t._v("#")]),t._v(" Expressing inserted and deleted columns")]),t._v(" "),a("p",[t._v("An inserted column is expressed simply by including that column in the diff, and placing "),a("code",[t._v("+++")]),t._v(" in the schema row above the corresponding column name in the header row. Similarly, a deleted column is expressed by including that column in the diff, and placing "),a("code",[t._v("---")]),t._v(" in the schema row above the corresponding column name. As a special case, a renamed column is represented by simply placing its old name in parentheses in the schema row.")]),t._v(" "),a("p",[t._v("In our earlier example, "),a("code",[t._v("LOCAL")]),t._v(" has the columns "),a("em",[t._v("bridge")]),t._v(", "),a("em",[t._v("designer")]),t._v(", and "),a("em",[t._v("length")]),t._v(", while "),a("code",[t._v("REMOTE")]),t._v(" has the columns "),a("em",[t._v("bridge")]),t._v(", "),a("em",[t._v("opened")]),t._v(", and "),a("em",[t._v("lead designer")]),t._v(" ("),a("em",[t._v("designer")]),t._v(" renamed). So "),a("em",[t._v("opened")]),t._v(" is inserted and "),a("em",[t._v("length")]),t._v(" is deleted:")]),t._v(" "),a("div",{staticClass:"highlighter"},[a("table",[a("tr",{staticClass:"desc"},[a("td",{staticClass:"desc"}),a("td",[t._v("action"),a("br"),t._v("column")]),a("td",{attrs:{colspan:"4"}},[t._v("data from compared tables")])]),t._v(" "),a("tr",{staticClass:"spec"},[a("td",{staticClass:"desc"},[t._v("schema row")]),a("td",[t._v("!")]),a("td"),a("td",{staticClass:"add"},[t._v("+++")]),a("td",[t._v("(designer)")]),a("td",{staticClass:"remove"},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"},[t._v("header row")]),a("th",[t._v("@@")]),a("th",[t._v("bridge")]),a("th",{staticClass:"add"},[t._v("opened")]),a("th",[t._v("lead designer")]),a("th",{staticClass:"remove"},[t._v("length")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc",attrs:{rowspan:"3"}}),a("td",[t._v("+")]),a("td",[t._v("Brooklyn")]),a("td",{staticClass:"add"},[t._v("1883")]),a("td",[t._v("J. A. Roebling")]),a("td",{staticClass:"remove"},[t._v("1595")])]),t._v(" "),a("tr",[a("td",[t._v("+")]),a("td",[t._v("Manhattan")]),a("td",{staticClass:"add"},[t._v("1909")]),a("td",[t._v("G. Lindenthal")]),a("td",{staticClass:"remove"},[t._v("1470")])]),t._v(" "),a("tr",[a("td",[t._v("+")]),a("td",[t._v("Williamsburg")]),a("td",{staticClass:"add"},[t._v("1903")]),a("td",[t._v("L. L. Buck")]),a("td",{staticClass:"remove"},[t._v("1600")])])])]),t._v(" "),a("p",[t._v("If we are dealing with a data store where columns are unordered, then likewise column order in the diff is irrelevant. Otherwise, the inserted and deleted rows should be placed in their appropriate order.")]),t._v(" "),a("p",[t._v("Any rows in the diff that are present only the "),a("code",[t._v("LOCAL")]),t._v(" table will leave inserted columns blank. Similarly, any rows in the diff that are present only in the "),a("code",[t._v("REMOTE")]),t._v(" table will leave deleted columns blank. Rows that are present in both tables will have values in all cells.")]),t._v(" "),a("h2",{attrs:{id:"expressing-inserted-and-deleted-rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expressing-inserted-and-deleted-rows"}},[t._v("#")]),t._v(" Expressing inserted and deleted rows")]),t._v(" "),a("p",[t._v("An inserted row is expressed simply by placing "),a("code",[t._v("+++")]),t._v(" in the action column, and placing cell values in the appropriate columns. If there are columns in the diff that are in "),a("code",[t._v("LOCAL")]),t._v(" but not in "),a("code",[t._v("REMOTE")]),t._v(", these are left blank. Likewise, a deleted row is expressed by placing "),a("code",[t._v("---")]),t._v(" in the action column, and its cell values in the appropriate columns. If there are columns in the diff that are in "),a("code",[t._v("REMOTE")]),t._v(" but not in "),a("code",[t._v("LOCAL")]),t._v(", these are left blank. For example, suppose in "),a("code",[t._v("REMOTE")]),t._v(" there is a row about a New Bridge that wasn’t in "),a("code",[t._v("LOCAL")]),t._v(", and a row about a bridge called Spamspan has been dropped. Here is what the inserted and deleted rows would look like, lined up with the header row for reference:")]),t._v(" "),a("div",{staticClass:"highlighter"},[a("table",[a("tr",{staticClass:"desc"},[a("td",{staticClass:"desc"}),a("td",[t._v("action"),a("br"),t._v("column")]),a("td",{attrs:{colspan:"4"}})]),t._v(" "),a("tr",{staticClass:"spec"},[a("td",{staticClass:"desc"},[t._v("schema row")]),a("td",[t._v("!")]),a("td"),a("td",{staticClass:"add"},[t._v("+++")]),a("td",[t._v("(designer)")]),a("td",{staticClass:"remove"},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"},[t._v("header row")]),a("th",[t._v("@@")]),a("th",[t._v("bridge")]),a("th",{staticClass:"add"},[t._v("opened")]),a("th",[t._v("lead designer")]),a("th",{staticClass:"remove"},[t._v("length")])]),t._v(" "),a("tr",{staticClass:"blank"},[a("td",[t._v(" ")]),a("td"),a("td"),a("td"),a("td"),a("td")]),t._v(" "),a("tr",{staticClass:"add"},[a("td",{staticClass:"desc"},[t._v("inserted row")]),a("td",[t._v("+++")]),a("td",[t._v("New Bridge")]),a("td",{staticClass:"add"},[t._v("2050")]),a("td",[t._v("Chimp N Zee")]),a("td",{staticClass:"remove"},[t._v("   ")])]),t._v(" "),a("tr",{staticClass:"blank"},[a("td",[t._v(" ")]),a("td"),a("td"),a("td"),a("td"),a("td")]),t._v(" "),a("tr",{staticClass:"remove"},[a("td",{staticClass:"desc"},[t._v("deleted row")]),a("td",[t._v("---")]),a("td",[t._v("Spamspan")]),a("td"),a("td",[t._v("S. Spamington")]),a("td",{staticClass:"remove"},[t._v("10000")])])])]),t._v(" "),a("p",[t._v("If the diff is on a database table where rows have no ordering, then we can just stick these rows together and we have our diff:")]),t._v(" "),a("div",{staticClass:"highlighter"},[a("table",[a("tr",{staticClass:"desc"},[a("td",{staticClass:"desc"}),a("td",[t._v("action"),a("br"),t._v("column")]),a("td",{attrs:{colspan:"4"}})]),t._v(" "),a("tr",{staticClass:"spec"},[a("td",{staticClass:"desc"},[t._v("schema row")]),a("td",[t._v("!")]),a("td"),a("td",{staticClass:"add"},[t._v("+++")]),a("td",[t._v("(designer)")]),a("td",{staticClass:"remove"},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"},[t._v("header row")]),a("th",[t._v("@@")]),a("th",[t._v("bridge")]),a("th",{staticClass:"add"},[t._v("opened")]),a("th",[t._v("lead designer")]),a("th",{staticClass:"remove"},[t._v("length")])]),t._v(" "),a("tr",{staticClass:"add"},[a("td",{staticClass:"desc"},[t._v("inserted row")]),a("td",[t._v("+++")]),a("td",[t._v("New Bridge")]),a("td",{staticClass:"add"},[t._v("2050")]),a("td",[t._v("Chimp N Zee")]),a("td",{staticClass:"remove"},[t._v("   ")])]),t._v(" "),a("tr",{staticClass:"remove"},[a("td",{staticClass:"desc"},[t._v("deleted row")]),a("td",[t._v("---")]),a("td",[t._v("Spamspan")]),a("td"),a("td",[t._v("S. Spamington")]),a("td",{staticClass:"remove"},[t._v("10000")])])])]),t._v(" "),a("p",[t._v("If the diff is on a spreadsheet table or CSV file, we’d generally want to respect row ordering. In this case, we can add context rows around insertions so we know where to put them. Less importantly, since they are going away anyway, we can do the same for deletions:")]),t._v(" "),a("div",{staticClass:"highlighter"},[a("table",[a("tr",{staticClass:"desc"},[a("td",{staticClass:"desc"}),a("td",[t._v("action"),a("br"),t._v("column")]),a("td",{attrs:{colspan:"4"}})]),t._v(" "),a("tr",{staticClass:"spec"},[a("td",{staticClass:"desc"},[t._v("schema row")]),a("td",[t._v("!")]),a("td"),a("td",{staticClass:"add"},[t._v("+++")]),a("td",[t._v("(designer)")]),a("td",{staticClass:"remove"},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"},[t._v("header row")]),a("th",[t._v("@@")]),a("th",[t._v("bridge")]),a("th",{staticClass:"add"},[t._v("opened")]),a("th",[t._v("lead designer")]),a("th",{staticClass:"remove"},[t._v("length")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"},[t._v("omitted rows")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"},[t._v("context row")]),a("td",[t._v("+")]),a("td",[t._v("Williamsburg")]),a("td",{staticClass:"add"},[t._v("1903")]),a("td",[t._v("L. L. Buck")]),a("td",{staticClass:"remove"},[t._v("1600")])]),t._v(" "),a("tr",{staticClass:"add"},[a("td",{staticClass:"desc"},[t._v("inserted row")]),a("td",[t._v("+++")]),a("td",[t._v("New Bridge")]),a("td",{staticClass:"add"},[t._v("2050")]),a("td",[t._v("Chimp N Zee")]),a("td",{staticClass:"remove"},[t._v("   ")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"},[t._v("context row")]),a("td",[t._v("+")]),a("td",[t._v("Queensborough")]),a("td",{staticClass:"add"},[t._v("1909")]),a("td",[t._v("Palmer & Hornbostel")]),a("td",{staticClass:"remove"},[t._v("1182")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"},[t._v("omitted rows")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")]),a("td",[t._v("...")])]),t._v(" "),a("tr",[a("td",{staticClass:"desc"},[t._v("context row")]),a("td",[t._v("+")]),a("td",[t._v("George Washington")]),a("td",{staticClass:"add"},[t._v("1931")]),a("td",[t._v("O. H. Ammann")]),a("td",{staticClass:"remove"},[t._v("3500")])]),t._v(" "),a("tr",{staticClass:"remove"},[a("td",{staticClass:"desc"},[t._v("deleted row")]),a("td",[t._v("---")]),a("td",[t._v("Spamspan")]),a("td"),a("td",[t._v("S. Spamington")]),a("td",{staticClass:"remove"},[t._v("10000")])])])]),t._v(" "),a("p",[t._v("The action column for a context row may contain a blank, or "),a("code",[t._v(":")]),t._v(", or "),a("code",[t._v("+")]),t._v(". The "),a("code",[t._v(":")]),t._v(" tag signifies the context row was moved (and its location is now as in the "),a("code",[t._v("REMOTE")]),t._v(" table). The "),a("code",[t._v("+")]),t._v(" signifies that there are cells added on that row.")]),t._v(" "),a("h2",{attrs:{id:"expressing-a-modified-cell-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expressing-a-modified-cell-value"}},[t._v("#")]),t._v(" Expressing a modified cell value")]),t._v(" "),a("p",[t._v("If a row contains a cell whose value is different in the compared tables, then that row should be shown in the diff, with a tag in the action column that ends in "),a("code",[t._v("->")]),t._v(". Then, the modified cell will be represented by converting the "),a("code",[t._v("LOCAL")]),t._v(" and "),a("code",[t._v("REMOTE")]),t._v(" values to text (we have yet to say how) and using the action tag as a separator. So for example here we change the last cell in a row from “Green” to “Blue”:")]),t._v(" "),a("div",{staticClass:"highlighter"},[a("table",[a("tr",[a("td",{staticClass:"modify"},[t._v("->")]),a("td",[t._v("Gnome")]),a("td",[t._v("Home and Garden")]),a("td",{staticClass:"modify"},[t._v("Green->Blue")])])])]),t._v(" "),a("p",[t._v("The tag must be preceded with as many extra "),a("code",[t._v("-")]),t._v(" characters as are needed to avoid collision with any character sequence on that row. So here is another row with exactly one cell changed:")]),t._v(" "),a("div",{staticClass:"highlighter"},[a("table",[a("tr",[a("td",{staticClass:"modify"},[t._v("--\x3e")]),a("td",[t._v("Console")]),a("td",[t._v("Toddlers -> Teenagers")]),a("td",{staticClass:"modify"},[t._v("White--\x3ePale")])])])]),t._v(" "),a("p",[t._v("When encoding a cell change as a string, we lose information about the type of the cell value. One distinction that may be important to retain is the difference between a NULL or empty cell, and the empty string. The tabular diff uses the following encoding:")]),t._v(" "),a("ul",[a("li",[t._v("A NULL value, if available, represents itself.")]),t._v(" "),a("li",[t._v("The encoded string "),a("code",[t._v("NULL")]),t._v(" represents a NULL value.")]),t._v(" "),a("li",[t._v("The encoded string "),a("code",[t._v("_NULL")]),t._v(" represents the string “NULL”.")]),t._v(" "),a("li",[t._v("The encoded string "),a("code",[t._v("__NULL")]),t._v(" represents the string “_NULL”.")]),t._v(" "),a("li",[t._v("…")])]),t._v(" "),a("p",[t._v("The goal is that the diff can be safely converted to and from CSV by existing tools without changing its meaning. To that end:")]),t._v(" "),a("ul",[a("li",[t._v("For matching (e.g. on context lines) blank cells in the diff (either the NULL value or an empty string) should be treated as ambiguous, and match "),a("em",[t._v("either")]),t._v(" of NULL or an empty string if an exact match is not available.")]),t._v(" "),a("li",[t._v("When using a diff as a patch, and inserting new cells, a blank cell in the diff (either the NULL value or an empty string) should be treated as ambiguous, and the “right” thing done given the column type. If either value could be inserted, then the blank string should be inserted (since the encoded string "),a("code",[t._v("NULL")]),t._v(" is available to specifically identify the NULL value).")])]),t._v(" "),a("p",[t._v("Note that if the diff is being expressed in a table that allows nested structure (e.g. a JSON representation), a list representation for modified cells might be used to avoid this issue. There is no specification for that at this time.")]),t._v(" "),a("h2",{attrs:{id:"expressing-a-moved-row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expressing-a-moved-row"}},[t._v("#")]),t._v(" Expressing a moved row")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This can be ignored for tables for which row order is meaningless, e.g. in typical relational databases.")])]),t._v(" "),a("p",[t._v("A row that have been moved in a table for which row order is meaningful is marked with a "),a("code",[t._v(":")]),t._v(" tag in the action column and placed in the order it appears in the "),a("code",[t._v("REMOTE")]),t._v(" table.")]),t._v(" "),a("p",[t._v("To avoid burdening human readers with too much arcana, tags are "),a("em",[t._v("not")]),t._v(" combined when multiple kinds of actions apply to a row or column. So for example, a context row that was moved and had a cell added will "),a("em",[t._v("not")]),t._v(" be tagged as "),a("code",[t._v(":+")]),t._v(" or "),a("code",[t._v("+:")]),t._v(" or such-like, but rather by "),a("code",[t._v(":")]),t._v(". Cell addition can be determined from the schema row. These weak tags are included as aids for highlighting to express the most significant thing to know about a row.")]),t._v(" "),a("h2",{attrs:{id:"expressing-a-moved-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expressing-a-moved-column"}},[t._v("#")]),t._v(" Expressing a moved column")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This can be ignored for tables for which column order is meaningless.")])]),t._v(" "),a("p",[t._v("A column that have been moved in a table for which column order is meaningful is marked with a "),a("code",[t._v(":")]),t._v(" tag in the schema row and placed in the order it appears in the "),a("code",[t._v("REMOTE")]),t._v(" table.")]),t._v(" "),a("p",[t._v("If a diff that contains a "),a("code",[t._v(":")]),t._v(" tag is used to patch a table for which column order is not meaningful, that tag should simply be ignored.")]),t._v(" "),a("h2",{attrs:{id:"reference-action-column-tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-action-column-tags"}},[t._v("#")]),t._v(" Reference: action column tags")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Symbol")]),t._v(" "),a("th",[t._v("Meaning")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("@@")])]),t._v(" "),a("td",[t._v("The header row, giving column names.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("!")])]),t._v(" "),a("td",[t._v("The schema row, given column differences.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("+++")])]),t._v(" "),a("td",[t._v("An inserted row (present in "),a("code",[t._v("REMOTE")]),t._v(", not present in "),a("code",[t._v("LOCAL")]),t._v(").")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("---")])]),t._v(" "),a("td",[t._v("A deleted row (present in "),a("code",[t._v("LOCAL")]),t._v(", not present in "),a("code",[t._v("REMOTE")]),t._v(").")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("->")])]),t._v(" "),a("td",[t._v("A row with at least one cell modified cell. "),a("code",[t._v("--\x3e")]),t._v(", "),a("code",[t._v("---\x3e")]),t._v(", "),a("code",[t._v("----\x3e")]),t._v(" etc. have the same meaning.")])]),t._v(" "),a("tr",[a("td",[t._v("Blank")]),t._v(" "),a("td",[t._v("A blank string or NULL marks a row common to "),a("code",[t._v("LOCAL")]),t._v(" and "),a("code",[t._v("REMOTE")]),t._v(", given for context.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("...")])]),t._v(" "),a("td",[t._v("Declares that rows common to "),a("code",[t._v("LOCAL")]),t._v(" and "),a("code",[t._v("REMOTE")]),t._v(" are being skipped.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("+")])]),t._v(" "),a("td",[t._v("A row with at least one added cell.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v(":")])]),t._v(" "),a("td",[t._v("A reordered row.")])])])]),t._v(" "),a("h2",{attrs:{id:"reference-schema-row-tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-schema-row-tags"}},[t._v("#")]),t._v(" Reference: schema row tags")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Symbol")]),t._v(" "),a("th",[t._v("Meaning")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("+++")])]),t._v(" "),a("td",[t._v("An inserted column (present in "),a("code",[t._v("REMOTE")]),t._v(", not present in "),a("code",[t._v("LOCAL")]),t._v(").")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("---")])]),t._v(" "),a("td",[t._v("A deleted column (present in "),a("code",[t._v("LOCAL")]),t._v(", not present in "),a("code",[t._v("REMOTE")]),t._v(").")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("(<NAME>)")])]),t._v(" "),a("td",[t._v("A renamed column (the name in "),a("code",[t._v("LOCAL")]),t._v(" is given in parenthesis, and the name in "),a("code",[t._v("REMOTE")]),t._v(" will be in the header row).")])]),t._v(" "),a("tr",[a("td",[t._v("Blank")]),t._v(" "),a("td",[t._v("A blank string or NULL marks a column common to "),a("code",[t._v("LOCAL")]),t._v(" and "),a("code",[t._v("REMOTE")]),t._v(", given for context.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("...")])]),t._v(" "),a("td",[t._v("Declares that columns common to "),a("code",[t._v("LOCAL")]),t._v(" and "),a("code",[t._v("REMOTE")]),t._v(" are being skipped.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v(":")])]),t._v(" "),a("td",[t._v("A reordered column.")])])])])],1)}),[],!1,null,null,null);e.default=d.exports},96:function(t,e,a){}}]);