(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{468:function(e,a,t){"use strict";t.r(a);var s=t(31),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"frictionless-standards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frictionless-standards"}},[e._v("#")]),e._v(" Frictionless Standards")]),e._v(" "),t("p",[e._v("At the core of "),t("a",{attrs:{href:"http://frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Frictionless"),t("OutboundLink")],1),e._v(" is a set of patterns for describing data including  Table Schema (for tables), Data Resource (for files), and Data Package (for datasets).")]),e._v(" "),t("p",[t("strong",[e._v("This site houses the formal "),t("em",[e._v("specifications")]),e._v(" of these patterns.")])]),e._v(" "),t("p",[e._v("For more info about the project as a whole, please visit "),t("a",{attrs:{href:"http://frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("frictionlessdata.io"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("h3",{attrs:{id:"what-s-a-data-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-a-data-package"}},[e._v("#")]),e._v(" What’s a Data Package?")]),e._v(" "),t("p",[e._v("A Data Package is a simple container format used to describe and package a collection of data (a dataset).")]),e._v(" "),t("p",[e._v("A Data Package can contain any kind of data. At the same time, Data Packages can be specialized and enriched for specific types of data so there are, for example, Tabular Data Packages for tabular data, Geo Data Packages for geo data etc.")]),e._v(" "),t("h3",{attrs:{id:"data-package-specs-suite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-package-specs-suite"}},[e._v("#")]),e._v(" Data Package Specs Suite")]),e._v(" "),t("p",[e._v("When you look more closely you’ll see that Data Package is actually a "),t("em",[e._v("suite")]),e._v(" of specifications. This suite is made of small specs, many of them usuable on their own, that you can also combine together.")]),e._v(" "),t("p",[e._v("This approach also reflects our philosophy of “small pieces, loosely joined” as well as “make the simple things simple and complex things possible”: it easy to just use the piece you need as well to scale up to more complex needs.")]),e._v(" "),t("p",[e._v("For example, for tabular data we can create a Tabular Data Package spec by combining three other specs together: the Data Package spec for the dataset, the Table Schema spec to describe the table structure, and finally CSV or JSON for the data itself.")]),e._v(" "),t("p",[e._v("We also broke down the Data Package spec into Data Package itself and Data Resource. The Data Resource spec just describes an individual data files and a Data Package is a collection of one or more Data Resources with additional dataset-level metadata.")]),e._v(" "),t("p",[t("strong",[e._v("Example: Data Resource spec + Table Schema spec becomes a Tabular Data Resource spec")])]),e._v(" "),t("div",{staticClass:"language-mermaid extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("graph TD\n\n  dr[Data Resource] --add table schema--\x3e tdr[Tabular Data Resource]\n")])])]),t("p",[t("strong",[e._v("Example: How a Tabular Data Package is composed out of other specs")])]),e._v(" "),t("div",{staticClass:"language-mermaid extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("graph TD\n\n  dr[Data Resource] --\x3e tdr\n  tdr[Tabular Data Resource] --\x3e tdp[Tabular Data Package]\n  dp[Data Package] --\x3e tdp\n  jts[Table Schema] --\x3e tdr\n  csvddf[CSV Data Descriptor] -.optional.-> tdr\n\n  style tdp fill:#f9f,stroke:#333,stroke-width:4px;\n")])])]),t("h2",{attrs:{id:"design-philosophy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#design-philosophy"}},[e._v("#")]),e._v(" Design Philosophy")]),e._v(" "),t("h3",{attrs:{id:"simplicity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simplicity"}},[e._v("#")]),e._v(" Simplicity")]),e._v(" "),t("p",[e._v("Seek zen-like simplicity in which there is nothing to add and nothing to take away.")]),e._v(" "),t("h3",{attrs:{id:"extensibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extensibility"}},[e._v("#")]),e._v(" Extensibility")]),e._v(" "),t("p",[e._v("Design for extensibility and customisation. This makes hard things possible and permits future evolution – nothing we build will be perfect.")]),e._v(" "),t("h3",{attrs:{id:"human-editable-and-machine-usable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#human-editable-and-machine-usable"}},[e._v("#")]),e._v(" Human-editable and machine-usable")]),e._v(" "),t("p",[e._v("Specs should preserve human readability and editability whilst making machine-use easy.")]),e._v(" "),t("h3",{attrs:{id:"reuse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reuse"}},[e._v("#")]),e._v(" Reuse")]),e._v(" "),t("p",[e._v("Reuse and build on existing standards and formats.")]),e._v(" "),t("h3",{attrs:{id:"cross-technology"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cross-technology"}},[e._v("#")]),e._v(" Cross technology")]),e._v(" "),t("p",[e._v("Support a broad range of languages, technologies and infrastructures – avoid being tied to any one specific system.")]),e._v(" "),t("h2",{attrs:{id:"contribute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contribute"}},[e._v("#")]),e._v(" Contribute")]),e._v(" "),t("p",[e._v("Contributions, comments and corrections are warmly welcomed. Most work proceeds in an RFC-style manner with discussion in the "),t("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue tracker"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Material is kept in a "),t("a",{attrs:{href:"https://github.com/frictionlessdata/specs",target:"_blank",rel:"noopener noreferrer"}},[e._v("git repo on GitHub"),t("OutboundLink")],1),e._v(" - fork and submit a pull request to add material. There is also an "),t("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue tracker"),t("OutboundLink")],1),e._v(" which can be used for specific issues or suggestions.")]),e._v(" "),t("h2",{attrs:{id:"for-editors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-editors"}},[e._v("#")]),e._v(" For Editors")]),e._v(" "),t("p",[e._v("This repository is the canonical repository for the core Frictionless Data specifications. The repository features:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://json-schema.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Schema"),t("OutboundLink")],1),e._v(" representations of all specifications. These are used both in the site itself, to generate the specification pages, and likewise in the "),t("em",[e._v("schema registry")]),e._v(" that is used by a range of libraries that implement the specifications.")])]),e._v(" "),t("h3",{attrs:{id:"quick-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick start")]),e._v(" "),t("ul",[t("li",[e._v("Clone the repository")]),e._v(" "),t("li",[t("code",[e._v("npm install")]),e._v(" # install the dependencies to build the specifications")]),e._v(" "),t("li",[t("code",[e._v("npm run build")]),e._v(" # build the specifications")]),e._v(" "),t("li",[t("code",[e._v("npm run test")]),e._v(" # test the specifications")])]),e._v(" "),t("h3",{attrs:{id:"contribute-to-the-specifications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contribute-to-the-specifications"}},[e._v("#")]),e._v(" Contribute to the specifications")]),e._v(" "),t("p",[e._v("All the source data for the specifications is in the "),t("code",[e._v("/schemas")]),e._v(" directory. In there, you will find a "),t("code",[e._v(".json")]),e._v(" file for each specification and a set of YAML files under "),t("code",[e._v("/schemas/dictionary/*")]),e._v(". There is a "),t("code",[e._v("build.js")]),e._v(" script to build the specifications.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v(".json")]),e._v(" files are JSON Schemas for each spec, normalised using the "),t("code",[e._v("$ref")]),e._v(" feature of JSON Schema. This normalisation ensures consistency in the way the specifications are written and validated, but is only used directly by the "),t("code",[e._v("build.js")]),e._v(" script, which generated denormalised versions.")]),e._v(" "),t("li",[t("code",[e._v("/build.js")]),e._v(" creates denormalised versions of each specification be dereferencing each "),t("code",[e._v("$ref")]),e._v(" in the source schemas, and then saves these denormalised versions to "),t("code",[e._v("/build/schemas")]),e._v(" directory.")]),e._v(" "),t("li",[t("code",[e._v("/schemas/dictionary/*")]),e._v(" has all the property definitions for each specification. This is the place to add new properties or property collections, to edit contextual information and descriptive examples, and so on. See how this information is rendered in the "),t("a",{attrs:{href:"https://github.com/frictionlessdata/specs/blob/master/templates/macros.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("macros template"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"adding-a-new-specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-specification"}},[e._v("#")]),e._v(" Adding a new specification")]),e._v(" "),t("p",[e._v("Yes we welcome and encourage additions to the registry! Any spec that is added must meet the following criteria:")]),e._v(" "),t("ul",[t("li",[e._v("Be related to the Data Packages family of specifications.")]),e._v(" "),t("li",[e._v("Have a publicly-accessible web page describing the specification.")]),e._v(" "),t("li",[e._v("Have a JSON Schema file that describes the specification.")])]),e._v(" "),t("p",[e._v("See the existing entries in the registry, and then take the following steps to add a new entry:")]),e._v(" "),t("ol",[t("li",[e._v("Make a new pull request called "),t("code",[e._v("registry/{NAME_OF_SPECIFICATION}")])]),e._v(" "),t("li",[e._v("The pull request features a JSON Schema file for the new specification, and adds the spec to "),t("code",[e._v("registry.csv")])]),e._v(" "),t("li",[e._v("Write a brief description of the spec as part of the pull request.")])]),e._v(" "),t("mermaid")],1)}),[],!1,null,null,null);a.default=i.exports}}]);