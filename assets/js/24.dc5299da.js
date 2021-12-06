(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{238:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"page-frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$page.frontmatter.title))]),e._v(" "),a("p",[e._v(e._s(e.$page.frontmatter.abstract))]),e._v(" "),a("MetadataTable"),e._v(" "),a("h2",{attrs:{id:"language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[e._v("#")]),e._v(" Language")]),e._v(" "),a("Language"),e._v(" "),a("h2",{attrs:{id:"library-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#library-users"}},[e._v("#")]),e._v(" Library users")]),e._v(" "),a("p",[e._v("Data packages is a container format that allows the creator to specify payload data (Resources) either as JSON"),a("br"),e._v("\nobjects/arrays or via pointers. There are two pointer formats:")]),e._v(" "),a("ul",[a("li",[e._v("local file system references. Those follow POSIX naming conventions and have to be relative to the Package Descriptor"),a("br"),e._v("\nfile (“datapackage.json”). Absolute paths are disallowed as they would open data exfiltration attacks. They would also"),a("br"),e._v("\nbe rarely useful, considering you typically cannot know the file system layout of the user’s computer")]),e._v(" "),a("li",[e._v("URLs as pointers to remote Resources. They are intended to load datasets from sites like statistic’s offices as the"),a("br"),e._v("\nbasis of Data Packages. Only HTTP/HTTPS URLs are allowed, library maintainers have to filter out others like file-URLs")])]),e._v(" "),a("p",[e._v("Both formats can open security holes that can be used to attack the user’s computer and/or network. It is therefore"),a("br"),e._v("\nSTRONGLY recommended to limit the kind of Resource pointers you allow on your machines if you accept Data Packages"),a("br"),e._v("\nfrom third party sources.")]),e._v(" "),a("p",[e._v("ONLY in a trusted environment (eg. your own computer during development of Data Packages) is it recommended to allow"),a("br"),e._v("\nall kinds of Resource pointers. In every other environment, you MUST keep the various attack scenarios in mind and"),a("br"),e._v("\nfilter out potentially dangerous Resource pointer types")]),e._v(" "),a("h2",{attrs:{id:"dangerous-descriptor-resource-pointer-combinations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dangerous-descriptor-resource-pointer-combinations"}},[e._v("#")]),e._v(" Dangerous Descriptor/Resource pointer combinations")]),e._v(" "),a("p",[e._v("How to read the table: if your “datapackage.json”-file comes from one of the sources on the left, you should treat"),a("br"),e._v("\nResources in the format on the top as:")]),e._v(" "),a("ul",[a("li",[e._v("red: disallowed")]),e._v(" "),a("li",[e._v("yellow: potentially dangerous")]),e._v(" "),a("li",[e._v("green: safe to use")])]),e._v(" "),a("p",[a("img",{attrs:{src:"security_matrix.png",alt:"alt text"}})]),e._v(" "),a("h3",{attrs:{id:"descriptor-source-is-a-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#descriptor-source-is-a-url"}},[e._v("#")]),e._v(" Descriptor source is a URL")]),e._v(" "),a("p",[e._v("If your descriptor is loaded via URL, and the server to which the URL points is not fully trusted, you"),a("br"),e._v("\nSHOULD NOT allow Data Packages with Resource pointers in")]),e._v(" "),a("ul",[a("li",[e._v("URLs. As described in "),a("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues/650",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue #650"),a("OutboundLink")],1),e._v(", URLs crafted by the author"),a("br"),e._v("\nof a Data Package can be used in a “keyhole” attack to probe your network layout.")]),e._v(" "),a("li",[e._v("Absolute file system references. Absolute paths can be used to exfiltrate system files (eg. /etc/passwd on"),a("br"),e._v("\nUnix-like systems). Relative paths will be converted to URLs relative to the descriptor URL, so they will"),a("br"),e._v("\nnot load data from the local file system and are therefore safe.")])]),e._v(" "),a("p",[e._v("URL-based Resource pointers can furthermore be used for denial of service attacks on either the user’s system or a"),a("br"),e._v("\nservice hosting Resource data. A relatively small Data Package could still hold thousands of Resource URLs that"),a("br"),e._v("\neach could point to very large CSV files hosted somewhere. The Data Package processing library would load all"),a("br"),e._v("\nthose CSV files which might overwhelm the user’s computer. If an attacker were able to spread such a malicious"),a("br"),e._v("\nData Package, this could exhaust the resources of a hosting service.")]),e._v(" "),a("h3",{attrs:{id:"descriptor-source-is-a-local-relative-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#descriptor-source-is-a-local-relative-path"}},[e._v("#")]),e._v(" Descriptor source is a local relative path")]),e._v(" "),a("p",[e._v("If your descriptor is loaded via a local relative path, and the source of the Data Package is not fully trusted, you"),a("br"),e._v("\nSHOULD NOT allow Data Packages with Resource pointers in")]),e._v(" "),a("ul",[a("li",[e._v("URLs. As described in "),a("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues/650",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue #650"),a("OutboundLink")],1),e._v(", URLs crafted by the author"),a("br"),e._v("\nof a Data Package can be used in a “keyhole” attack to probe your network layout.")]),e._v(" "),a("li",[e._v("Absolute file system references. Absolute paths can be used to exfiltrate system files (eg. /etc/passwd on"),a("br"),e._v("\nUnix-like systems). Relative paths will be converted to paths relative to the Descriptor file system reference,"),a("br"),e._v("\nso they are considered harmless.")])]),e._v(" "),a("p",[e._v("As long as the producer of the Data Package is on the same local network as the computer/server parsing it, it is"),a("br"),e._v("\nconsidered safe to reference Resources via URLs, as the creator could map the network from their own workstation just"),a("br"),e._v("\nas well as crafting malicious Data Packages. In the above table, this case is therefore coded in yellow.")]),e._v(" "),a("p",[e._v("If Data Package parsing is part of a service offered to computers across subnets on the same LAN or even open to the"),a("br"),e._v("\ninternet, it NEVER safe to accept Data Packages containing URL-based Resource pointers.")]),e._v(" "),a("h3",{attrs:{id:"descriptor-source-is-a-local-relative-path-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#descriptor-source-is-a-local-relative-path-2"}},[e._v("#")]),e._v(" Descriptor source is a local relative path")]),e._v(" "),a("p",[e._v("While it is never safe to accept absolute file paths for Resources, it is perfectly safe to accept them for Descriptor"),a("br"),e._v("\nfiles. If your descriptor is loaded via a local absolute path, and the source of the Data Package is not fully"),a("br"),e._v("\ntrusted, you SHOULD NOT allow Data Packages with Resource pointers in")]),e._v(" "),a("ul",[a("li",[e._v("URLs. As described in "),a("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues/650",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue #650"),a("OutboundLink")],1),e._v(", URLs crafted by the author"),a("br"),e._v("\nof a Data Package can be used in a “keyhole” attack to probe your network layout.")]),e._v(" "),a("li",[e._v("Absolute file system references. Absolute paths can be used to exfiltrate system files (eg. /etc/passwd on"),a("br"),e._v("\nUnix-like systems). Relative paths will be converted to paths relative to the Descriptor file system reference,"),a("br"),e._v("\nso they are considered harmless.")])]),e._v(" "),a("p",[e._v("As long as the producer of the Data Package is on the same local network as the computer/server parsing it, it is"),a("br"),e._v("\nconsidered safe to reference Resources via URLs, as the creator could map the network from their own workstation just"),a("br"),e._v("\nas well as crafting malicious Data Packages. In the above table, this case is therefore coded in yellow.")]),e._v(" "),a("p",[e._v("If Data Package parsing is part of a service offered to computers across subnets on the same LAN or even open to the"),a("br"),e._v("\ninternet, it NEVER safe to accept Data Packages containing URL-based Resource pointers.")]),e._v(" "),a("h3",{attrs:{id:"descriptor-source-is-a-json-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#descriptor-source-is-a-json-object"}},[e._v("#")]),e._v(" Descriptor source is a JSON object")]),e._v(" "),a("p",[e._v("If the Descriptor is not loaded from file but created in-memory and the source of the Data Package is not fully"),a("br"),e._v("\ntrusted, you SHOULD NOT allow Data Packages with Resource pointers in")]),e._v(" "),a("ul",[a("li",[e._v("URLs. As described in "),a("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues/650",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue #650"),a("OutboundLink")],1),e._v(", URLs crafted by the author"),a("br"),e._v("\nof a Data Package can be used in a “keyhole” attack to probe your network layout.")]),e._v(" "),a("li",[e._v("file system references, relative or absolute. Absolute paths can be used to exfiltrate system files"),a("br"),e._v("\n(eg. /etc/passwd on Unix-like systems). Relative paths would be constructed relative to the parsing software’s working"),a("br"),e._v("\ndirectory and could be used to guess at configuration files to exfiltrate. OTOH, in creation of a Data Package,"),a("br"),e._v("\nand if the relative paths are confined to a subdirectory, it is safe to use relative paths.")])]),e._v(" "),a("p",[e._v("As long as the producer of the Data Package is on the same local network as the computer/server parsing it, it is"),a("br"),e._v("\nconsidered safe to reference Resources via URLs, as the creator could map the network from their own workstation just"),a("br"),e._v("\nas well as crafting malicious Data Packages. In the above table, this case is therefore coded in yellow.")]),e._v(" "),a("p",[e._v("If Data Package parsing is part of a service offered to computers across subnets on the same LAN or even open to the"),a("br"),e._v("\ninternet, it NEVER safe to accept Data Packages containing URL-based Resource pointers.")]),e._v(" "),a("h3",{attrs:{id:"descriptor-source-is-a-self-created-json-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#descriptor-source-is-a-self-created-json-object"}},[e._v("#")]),e._v(" Descriptor source is a self-created JSON object")]),e._v(" "),a("p",[e._v("If the Descriptor is not loaded from file or created via a third-party application but by your software, it is"),a("br"),e._v("\ngenerally assumed you know what you do and therefore, loading Resources from URLs or file is considered safe. You"),a("br"),e._v("\nstill SHOULD NOT use absolute paths as a matter of precaution - and implementing libraries should filter them out.")]),e._v(" "),a("h2",{attrs:{id:"library-creators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#library-creators"}},[e._v("#")]),e._v(" Library creators")]),e._v(" "),a("p",[e._v("Two kinds of Resource pointers can never be guaranteed to be totally safe:")]),e._v(" "),a("ul",[a("li",[e._v("Absolute file system references. Absolute paths can be used to exfiltrate system files (eg. /etc/passwd on"),a("br"),e._v("\nUnix-like systems). In your implementation, you SHOULD either raise an error if an absolute local path is encountered"),a("br"),e._v("\nor relativize it to the Descriptor path.")]),e._v(" "),a("li",[e._v("URLs. As described in "),a("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues/650",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue #650"),a("OutboundLink")],1),e._v(", URLs crafted by the author"),a("br"),e._v("\nof a Data Package can be used in a “keyhole” attack to probe your user’s network layout. It is up to the library creator"),a("br"),e._v("\nto create means that allow their users to mitigate this attack.")])]),e._v(" "),a("p",[e._v("As URLs are part of the DNA of Data Packages, it is not advisable to disallow their use completely. However, you should"),a("br"),e._v("\nallow for a security setting that stops your implementation from loading URL-based Resources. This could be done")]),e._v(" "),a("ul",[a("li",[e._v("via a setting switch ("),a("code",[e._v("insecure")]),e._v("/"),a("code",[e._v("default")]),e._v(") that allows the user of your library implementation to allow or"),a("br"),e._v("\ndisallow absolute file paths and URL-based Resource pointers")]),e._v(" "),a("li",[e._v("via a pluggable security filter that is applied as an interceptor "),a("em",[e._v("before")]),e._v(" loading any pointer-based Resources. If"),a("br"),e._v("\nyou decide to use such a scheme, you SHOULD provide default implementations for a filter disallowing URL-based"),a("br"),e._v("\nResource and an insecure filter that allows loading of all Resources.")])]),e._v(" "),a("h3",{attrs:{id:"security-filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-filters"}},[e._v("#")]),e._v(" Security Filters")]),e._v(" "),a("p",[e._v("If disallowing all URL-based Resources is too heavy-handed and allowing all is too insecure, finer-grained filters"),a("br"),e._v("\nshould be implemented. Those finer security filters can be implemented as either blacklist or whitelist filters."),a("br"),e._v("\nBlacklist filters in principle allow all URLs and restrict some, whereas whitelist filters deny all as a default"),a("br"),e._v("\nand have a limited list of allowed URLs.")]),e._v(" "),a("p",[e._v("Blacklist filters in their most basic implementation would have to disallow all non-routed IP-addresses like the"),a("br"),e._v("\n192.168.x.x range or the 10.100.x.x range. This would blunt mapping attacks against the internal network of your users"),a("br"),e._v("\nbut needs to be well thought out as even one omission could endanger network security")]),e._v(" "),a("p",[e._v("Whitelist filters are much more secure as they allow the loading of Resources from a named list of domains only, but"),a("br"),e._v("\nmight be too restrictive for some uses.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);