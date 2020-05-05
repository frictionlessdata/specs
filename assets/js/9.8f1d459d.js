(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{332:function(e,t,i){"use strict";i.r(t);var s=i(33),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"frictionless-data-specifications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#frictionless-data-specifications"}},[e._v("#")]),e._v(" Frictionless Data Specifications")]),e._v(" "),i("p",[e._v("This site is the home for "),i("em",[e._v("specifications")]),e._v(" related to "),i("strong",[i("a",{attrs:{href:"http://frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Frictionless Data"),i("OutboundLink")],1),e._v(".")])]),e._v(" "),i("p",[i("strong",[e._v("Frictionless Data")]),e._v(" is about removing the friction in working with data through the development of a set of tools, specifications, and best practices for publishing data. The heart of Frictionless Data is "),i("em",[e._v("Data Package")]),e._v(", a containerization format for any kind of data based on existing practices for publishing open-source software.")]),e._v(" "),i("p",[e._v("For more info about the project as a whole, please visit "),i("a",{attrs:{href:"http://frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("frictionlessdata.io"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"design-philosophy"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#design-philosophy"}},[e._v("#")]),e._v(" Design Philosophy")]),e._v(" "),i("p",[e._v("Our specifications follow our design philosophy:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Simplicity:")]),e._v(" seek zen-like simplicity in which there is nothing to add and nothing to take away.")]),e._v(" "),i("li",[i("strong",[e._v("Extensibility:")]),e._v(" design for extensibility and customisation. This makes hard things possible and allows for future evolution – nothing we build will be perfect.")]),e._v(" "),i("li",[i("strong",[e._v("Human-editable and machine-usable:")]),e._v(" specs should preserve human readability and editability whilst making machine-use easy.")]),e._v(" "),i("li",[i("strong",[e._v("Reuse:")]),e._v(" reuse and build on existing standards and formats wherever possible.")]),e._v(" "),i("li",[i("strong",[e._v("Cross technology:")]),e._v(" support a broad range of languages, technologies and infrastructures – avoid being tied to any one specific system.")])]),e._v(" "),i("p",[e._v("This philosophy is itself based on the overall design principles of the Frictionless Data project:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Focused:")]),e._v(" We have a sharp focus on one part of the data chain, one specific feature – packaging – and a few specific types of data (e.g. tabular).")]),e._v(" "),i("li",[i("strong",[e._v("Web Oriented:")]),e._v(" We build for the web using formats that are web “native” such as JSON, work naturally with HTTP such as plain text CSVs (which stream).")]),e._v(" "),i("li",[i("strong",[e._v("Distributed:")]),e._v(" we design for a distributed ecosystem with no centralized, single point of failure or dependence.")]),e._v(" "),i("li",[i("strong",[e._v("Open:")]),e._v(" Anyone should be able to freely and openly use and reuse what we build. Our community is open to everyone.")]),e._v(" "),i("li",[i("strong",[e._v("Existing Tooling:")]),e._v(" Integrate as easily as possible with existing tools both by building integrations and designing for direct use – for example we like CSV because everyone has a tool that can access CSV.")]),e._v(" "),i("li",[i("strong",[e._v("Simple, Lightweight:")]),e._v(" Add the minimum, do the least required, keep it simple. For example, use the most basic formats, require only the most essential metadata, data should have nothing extraneous.")])]),e._v(" "),i("h2",{attrs:{id:"participate-and-contribute"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#participate-and-contribute"}},[e._v("#")]),e._v(" Participate and Contribute")]),e._v(" "),i("p",[e._v("This effort is community-run and contributions, comments and corrections are warmly welcomed. Most work proceeds in an RFC-style manner with discussion on the "),i("a",{attrs:{href:"https://discuss.okfn.org/c/frictionless-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("forum"),i("OutboundLink")],1),e._v(" and the "),i("a",{attrs:{href:"https://gitter.im/frictionlessdata/chat",target:"_blank",rel:"noopener noreferrer"}},[e._v("chat"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("Material is kept in a "),i("a",{attrs:{href:"https://github.com/frictionlessdata/specs",target:"_blank",rel:"noopener noreferrer"}},[e._v("git repo on GitHub"),i("OutboundLink")],1),e._v(" - fork and submit a pull request to add material. There is also an "),i("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue tracker"),i("OutboundLink")],1),e._v(" which can be used for specific issues or suggestions.")]),e._v(" "),i("h2",{attrs:{id:"for-editors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#for-editors"}},[e._v("#")]),e._v(" For Editors")]),e._v(" "),i("p",[e._v("This repository is the canonical repository for the core Frictionless Data specifications. The repository features:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"http://json-schema.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Schema"),i("OutboundLink")],1),e._v(" representations of all specifications. These are used both in the site itself, to generate the specification pages, and likewise in the "),i("em",[e._v("schema registry")]),e._v(" that is used by a range of libraries that implement the specifications.")])]),e._v(" "),i("h3",{attrs:{id:"quick-start"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick start")]),e._v(" "),i("ul",[i("li",[e._v("Clone the repository")]),e._v(" "),i("li",[i("code",[e._v("npm install")]),e._v(" # install the dependencies to build the specifications")]),e._v(" "),i("li",[i("code",[e._v("npm run build")]),e._v(" # build the specifications")]),e._v(" "),i("li",[i("code",[e._v("npm run test")]),e._v(" # test the specifications")])]),e._v(" "),i("h3",{attrs:{id:"contribute-to-the-specifications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#contribute-to-the-specifications"}},[e._v("#")]),e._v(" Contribute to the specifications")]),e._v(" "),i("p",[e._v("All the source data for the specifications is in the "),i("code",[e._v("/schemas")]),e._v(" directory. In there, you will find a "),i("code",[e._v(".json")]),e._v(" file for each specification and a set of YAML files under "),i("code",[e._v("/schemas/dictionary/*")]),e._v(". There is a "),i("code",[e._v("build.js")]),e._v(" script to build the specifications.")]),e._v(" "),i("ul",[i("li",[i("code",[e._v(".json")]),e._v(" files are JSON Schemas for each spec, normalised using the "),i("code",[e._v("$ref")]),e._v(" feature of JSON Schema. This normalisation ensures consistency in the way the specifications are written and validated, but is only used directly by the "),i("code",[e._v("build.js")]),e._v(" script, which generated denormalised versions.")]),e._v(" "),i("li",[i("code",[e._v("/build.js")]),e._v(" creates denormalised versions of each specification be dereferencing each "),i("code",[e._v("$ref")]),e._v(" in the source schemas, and then saves these denormalised versions to "),i("code",[e._v("/build/schemas")]),e._v(" directory.")]),e._v(" "),i("li",[i("code",[e._v("/schemas/dictionary/*")]),e._v(" has all the property definitions for each specification. This is the place to add new properties or property collections, to edit contextual information and descriptive examples, and so on. See how this information is rendered in the "),i("a",{attrs:{href:"https://github.com/frictionlessdata/specs/blob/master/templates/macros.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("macros template"),i("OutboundLink")],1),e._v(".")])]),e._v(" "),i("h3",{attrs:{id:"adding-a-new-specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-specification"}},[e._v("#")]),e._v(" Adding a new specification")]),e._v(" "),i("p",[e._v("Yes we welcome and encourage additions to the registry! Any spec that is added must meet the following criteria:")]),e._v(" "),i("ul",[i("li",[e._v("Be related to the Data Packages family of specifications.")]),e._v(" "),i("li",[e._v("Have a publicly-accessible web page describing the specification.")]),e._v(" "),i("li",[e._v("Have a JSON Schema file that describes the specification.")])]),e._v(" "),i("p",[e._v("See the existing entries in the registry, and then take the following steps to add a new entry:")]),e._v(" "),i("ol",[i("li",[e._v("Make a new pull request called "),i("code",[e._v("registry/{NAME_OF_SPECIFICATION}")])]),e._v(" "),i("li",[e._v("The pull request features a JSON Schema file for the new specification, and adds the spec to "),i("code",[e._v("registry.csv")])]),e._v(" "),i("li",[e._v("Write a brief description of the spec as part of the pull request.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);