(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{150:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),h=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=h(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=h(n),u=o,p=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return n?r.a.createElement(p,c(c({ref:t},l),{},{components:n})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return h}));var o=n(2),r=n(6),a=(n(0),n(150)),i={title:"Blocks"},c={unversionedId:"api/cookbook/blocks",id:"api/cookbook/blocks",isDocsHomePage:!1,title:"Blocks",description:"The building blocks for each blockchain. As such there are a number of examples for working with blocks and headers, that could be useful.",source:"@site/docs/api/cookbook/blocks.md",slug:"/api/cookbook/blocks",permalink:"/docs/api/cookbook/blocks",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/cookbook/blocks.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/docs/api/cookbook/intro"},next:{title:"Storage",permalink:"/docs/api/cookbook/storage"}},s=[{value:"How do I retrieve the header/extrinsic hash from blocks?",id:"how-do-i-retrieve-the-headerextrinsic-hash-from-blocks",children:[]},{value:"How do I extract the block author?",id:"how-do-i-extract-the-block-author",children:[]},{value:"How do I view block extrinsic information?",id:"how-do-i-view-block-extrinsic-information",children:[]}],l={rightToc:s};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The building blocks for each blockchain. As such there are a number of examples for working with blocks and headers, that could be useful."),Object(a.b)("h2",{id:"how-do-i-retrieve-the-headerextrinsic-hash-from-blocks"},"How do I retrieve the header/extrinsic hash from blocks?"),Object(a.b)("p",null,"A block hash refers to the hash over the header, the extrinsic hash refers to the hash of the encoded extrinsic. Since all objects returned by the API implements the ",Object(a.b)("inlineCode",{parentName:"p"},".hash => Hash")," getter, we can simply use this to view the actual hash."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// returns Hash\nconst blockHash = await this.api.rpc.chain.getBlockHash(blockNumber);\n// returns SignedBlock\nconst signedBlock = await this.api.rpc.chain.getBlock(blockHash);\n\n// the hash for the block, always via header (Hash -> toHex()) - will be\n// the same as blockHash above (also available on any header retrieved,\n// subscription or once-off)\nconsole.log(signedBlock.header.hash.toHex());\n\n// the hash for each extrinsic in the block\nsignedBlock.block.extrinsics.forEach((ex, index) => {\n  console.log(index, ex.hash.toHex());\n});\n")),Object(a.b)("h2",{id:"how-do-i-extract-the-block-author"},"How do I extract the block author?"),Object(a.b)("p",null,"The block author is encoded inside the consensus logs for the block. To extract, you need to decode the log (which the API does do) and then map the index of the validator to the list of session validators. This extraction is however available on the api derive for new head subscriptions, which returns an extended header with the author populated (assuming that the digest logs are known)."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// subscribe to all new headers (with extended info)\napi.derive.chain.subscribeNewHeads((header) => {\n  console.log(`#${header.number}: ${header.author}`);\n});\n")),Object(a.b)("p",null,"For a single header only, the derives also contain a ",Object(a.b)("inlineCode",{parentName:"p"},"getHeader"),", which once again returns a header extended with the author -"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// retrieve the last header (hash optional)\nconst header = await api.derive.chain.getHeader();\n\nconsole.log(`#${header.number}: ${header.author}`);\n")),Object(a.b)("h2",{id:"how-do-i-view-block-extrinsic-information"},"How do I view block extrinsic information?"),Object(a.b)("p",null,"The transactions are included in a signed block as part of the extrinsics - some of these will be unsigned and generated by the block author and some of these may be submitted from external sources and be signed. (Some palettes do use unsigned transactions, so signed/unsigned is not an indication of origin). To retrieve the block and display the transaction information, we can do the following -"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// no blockHash is specified, so we retrieve the latest\nconst signedBlock = await this.api.rpc.chain.getBlock();\n\n// the information for each of the contained extrinsics\nsignedBlock.block.extrinsics.forEach((ex, index) => {\n  // the extrinsics are decoded by the API, human-like view\n  console.log(index, ex.toHuman());\n\n  const { isSigned, meta, method: { args, method, section } } = ex;\n\n  // explicit display of name, args & documentation\n  console.log(`${section}.${method}(${args.map((a) => a.toString()).join(', ')})`);\n  console.log(meta.documentation.map((d) => d.toString()).join('\\n'));\n\n  // signer/nonce info\n  if (isSigned) {\n    console.log(`signer=${ex.signer.toString()}, nonce=${ex.nonce.toString()}`);\n  }\n});\n")),Object(a.b)("p",null,"In the above ",Object(a.b)("inlineCode",{parentName:"p"},".toHuman()")," is used to format into a human-readable representation. You can inspect/extract specific fields from the decoded extrinsic as required, for instance ",Object(a.b)("inlineCode",{parentName:"p"},"ex.method.section")," would return the pallete that executed this transaction."))}h.isMDXComponent=!0}}]);