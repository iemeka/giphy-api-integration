(this.webpackJsonpspeedpaytest=this.webpackJsonpspeedpaytest||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(26),a=c.n(s),r=(c(33),c(8)),j=c(2),d=(c(34),c(10)),l=c(15),h=c.n(l),o=i.a.createContext({trendingGif:[],setTrendingGif:function(){},searchResult:[],setSearchResult:function(){}}),b=c(0);var u=function(e){var t=e.children,c=Object(n.useState)([]),i=Object(d.a)(c,2),s=i[0],a=i[1],r=Object(n.useState)([]),j=Object(d.a)(r,2),l=j[0],u=j[1];Object(n.useEffect)((function(){h.a.get("https://api.giphy.com/v1/gifs/trending?api_key=BBllUXSslRRw4234LL4rT5VfMbKLLG6A").then((function(e){a(e.data.data)}))}),[]);var O={trendingGif:s,searchResult:l,search:function(e){h.a.get("https://api.giphy.com/v1/gifs/search?q=".concat(e,"&api_key=BBllUXSslRRw4234LL4rT5VfMbKLLG6A")).then((function(e){u(e.data.data)}))}};return Object(b.jsx)(o.Provider,{value:O,children:t})};c(55),c(56);function O(e){var t=e.description;return Object(b.jsxs)("div",{className:"heading-container",children:[Object(b.jsx)("h1",{children:"Giphy API Integration"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:Object(b.jsx)(r.b,{to:"/giphy-api-integration/trending",children:"Trending"})}),Object(b.jsx)("span",{style:{color:"grey"},children:"|"}),Object(b.jsx)("span",{children:Object(b.jsx)(r.b,{to:"/giphy-api-integration/search",children:"Search"})})]}),Object(b.jsx)("h4",{children:t})]})}function p(){return Object(b.jsxs)("div",{className:"homepage",children:[Object(b.jsx)("div",{className:"top",children:Object(b.jsx)("h1",{children:"Images"})}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("div",{className:"intro",children:Object(b.jsx)(O,{description:"Click any of the links above"})})})]})}c(62),c(63);function x(e){var t=e.result;return Object(b.jsx)("div",{className:"result-container",children:0===t.length?"...wait a while.":t.map((function(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"img-holder",children:Object(b.jsx)("div",{className:"result-img",style:{backgroundImage:"url(".concat(e.images.original.url,")")}})}),Object(b.jsxs)("div",{className:"card-detail",children:[Object(b.jsxs)("span",{children:[" by : ",e.username," "]}),e.trending_datetime]})]})}))})}function g(){var e=Object(n.useContext)(o),t=e.search,c=e.searchResult,i=Object(n.useState)(!1),s=Object(d.a)(i,2),a=s[0],j=(s[1],Object(n.useState)()),l=Object(d.a)(j,2),h=l[0],u=l[1];return Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("div",{className:"top",children:Object(b.jsx)(r.b,{to:"/giphy-api-integration",children:"home"})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"headings",children:Object(b.jsx)(O,{description:"Search For Giphy"})}),Object(b.jsxs)("div",{className:"searchbox",children:[Object(b.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){return t(h)},children:"Search"})]}),Object(b.jsx)("div",{className:"search-result",children:Object(b.jsx)(x,{result:c,page:a})})]})]})}c(64);function m(){var e=Object(n.useContext)(o).trendingGif;return Object(b.jsxs)("div",{className:"trending",children:[Object(b.jsx)("div",{className:"top",children:Object(b.jsx)(r.b,{to:"/giphy-api-integration",children:"home"})}),Object(b.jsx)("div",{className:"heading",children:Object(b.jsx)(O,{description:"Trending List Of Giphy"})}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)(x,{result:e,page:!0})})]})}var f=function(){return Object(b.jsx)(r.a,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(u,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/giphy-api-integration",component:p}),Object(b.jsx)(j.a,{exact:!0,path:"/giphy-api-integration/trending",component:m}),Object(b.jsx)(j.a,{exact:!0,path:"/giphy-api-integration/search",component:g})]})})})})};a.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.ae71c37b.chunk.js.map