(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(150)),s={title:"Traverse events"},i={unversionedId:"api/examples/promise/system-events",id:"api/examples/promise/system-events",isDocsHomePage:!1,title:"Traverse events",description:"Query the system events and extract information from them. This example runs until exited via Ctrl-C",source:"@site/docs/api/examples/promise/system-events.md",slug:"/api/examples/promise/system-events",permalink:"/docs/api/examples/promise/system-events",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/system-events.md",version:"current",sidebar:"reference",previous:{title:"Make a simple transfer",permalink:"/docs/api/examples/promise/make-transfer"},next:{title:"Transfer events",permalink:"/docs/api/examples/promise/transfer-events"}},c=[],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Query the system events and extract information from them. This example runs until exited via Ctrl-C"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\n\nasync function main () {\n  // Create our API with a default connection to the local node\n  const api = await ApiPromise.create();\n\n  // Subscribe to system events via storage\n  api.query.system.events((events) => {\n    console.log(`\\nReceived ${events.length} events:`);\n\n    // Loop through the Vec<EventRecord>\n    events.forEach((record) => {\n      // Extract the phase, event and the event types\n      const { event, phase } = record;\n      const types = event.typeDef;\n\n      // Show what we are busy with\n      console.log(`\\t${event.section}:${event.method}:: (phase=${phase.toString()})`);\n      console.log(`\\t\\t${event.meta.documentation.toString()}`);\n\n      // Loop through each of the parameters, displaying the type and data\n      event.data.forEach((data, index) => {\n        console.log(`\\t\\t\\t${types[index].type}: ${data.toString()}`);\n      });\n    });\n  });\n}\n\nmain().catch((error) => {\n  console.error(error);\n  process.exit(-1);\n});\n")))}l.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.a.createElement(f,i(i({ref:t},p),{},{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);