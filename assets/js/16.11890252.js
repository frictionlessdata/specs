(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{386:function(t,a,e){"use strict";e.r(a);var r=e(26),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"page-frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$page.frontmatter.title))]),t._v(" "),e("p",[t._v(t._s(t.$page.frontmatter.abstract))]),t._v(" "),e("MetadataTable"),t._v(" "),e("h2",{attrs:{id:"language"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[t._v("#")]),t._v(" Language")]),t._v(" "),e("Language"),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Data Package Identifiers are a simple way to identify a Data Package (and its location) using a string or small JSON object.")]),t._v(" "),e("p",[t._v("It exists because of the consistent need across applications to identify a Data Package. For example, in command line tools or libraries one will frequently want to take a Data Package Identifier as an argument.")]),t._v(" "),e("p",[t._v("For example, "),e("a",{attrs:{href:"http://datahub.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("DataHub"),e("OutboundLink")],1),t._v("’s "),e("code",[t._v("data-cli")]),t._v(" tool has commands like:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# gdp is a Data Package identifier\ndata info gdp\n\n# https://github.com/datasets/gold-prices is a Data Package identifier\ndata install https://github.com/datasets/gold-prices\n")])])]),e("h3",{attrs:{id:"identifier-object-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#identifier-object-structure"}},[t._v("#")]),t._v(" Identifier Object Structure")]),t._v(" "),e("p",[t._v("The object structure looks like:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{\n  // URL to base of the Data Package\n  // This URL should *always* have a trailing slash ('/')\n  url: ...\n  // URL to datapackage.json\n  dataPackageJsonUrl: ...\n  // name of the Data Package\n  name: ...\n  // version of the Data Package\n  version: ...\n  // if parsed from a Identifier String this is the original\n  // specString\n  original:\n}\n")])])]),e("p",[t._v("It can be parsed (and less importantly) serialized to a simple string. Spec strings will be frequently used on e.g. the command line to identify a data package.")]),t._v(" "),e("h3",{attrs:{id:"identifier-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#identifier-string"}},[t._v("#")]),t._v(" Identifier String")]),t._v(" "),e("p",[t._v("An Identifier String is a single string (rather than JSON object) that points to a Data Package.  An Identifier String can be, in decreasing order of explicitness:")]),t._v(" "),e("ul",[e("li",[t._v("A URL that points directly to the "),e("code",[t._v("datapackage.json")]),t._v(" (no resolution needed):")])]),t._v(" "),e("p",[e("a",{attrs:{href:"http://mywebsite.com/mydatapackage/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mywebsite.com/mydatapackage/datapackage.json"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("A URL that points directly to the Data Package (that is, the directory containing the "),e("code",[t._v("datapackage.json")]),t._v("):")])]),t._v(" "),e("p",[e("a",{attrs:{href:"http://mywebsite.com/mydatapackage/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mywebsite.com/mydatapackage/"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("resolves to:")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://mywebsite.com/mydatapackage/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mywebsite.com/mydatapackage/datapackage.json"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("A GitHub URL:")])]),t._v(" "),e("p",[e("a",{attrs:{href:"http://github.com/datasets/gold-prices",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://github.com/datasets/gold-prices"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("resolves to:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://raw.githubusercontent.com/datasets/gold-prices/master/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.githubusercontent.com/datasets/gold-prices/master/datapackage.json"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("The "),e("code",[t._v("name")]),t._v(" of a dataset in the "),e("a",{attrs:{href:"https://datahub.io/core",target:"_blank",rel:"noopener noreferrer"}},[t._v("Core Datasets registry"),e("OutboundLink")],1),t._v(":")])]),t._v(" "),e("p",[t._v("gold-prices")]),t._v(" "),e("p",[t._v("resolves to:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://datahub.io/core/gold-prices/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://datahub.io/core/gold-prices/datapackage.json"),e("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=n.exports}}]);