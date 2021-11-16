"use strict";(self.webpackChunkcnv_rus=self.webpackChunkcnv_rus||[]).push([[797],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2793:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={sidebar_position:2,sidebar_label:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0441 \u0430\u043d\u0435\u0443\u043f\u043b\u043e\u0438\u0434\u0438\u0435\u0439 \u0438 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445"},l="\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0441 \u0430\u043d\u0435\u0443\u043f\u043b\u043e\u0438\u0434\u0438\u0435\u0439 \u0438 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445",s={unversionedId:"sample-examples/normal-detected-cnvs",id:"sample-examples/normal-detected-cnvs",isDocsHomePage:!1,title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0441 \u0430\u043d\u0435\u0443\u043f\u043b\u043e\u0438\u0434\u0438\u0435\u0439 \u0438 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445",description:"\u0414\u0430\u043d\u043d\u044b\u043c\u0438 \u0441 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0442\u0435, \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435 \u2265 0,01X \u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0432\u0441\u0435\u043c \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u043e\u0441\u043b\u0435 \u043e\u0447\u0438\u0441\u0442\u043a\u0438. \u0414\u043b\u044f \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0441 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0441\u0435 \u0441\u0442\u0430\u0434\u0438\u0438 \u043f\u0430\u0439\u043f\u043b\u0430\u0439\u043d\u0430 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u044b \u043a\u0430\u043a \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435 \u0438 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d \u201c\u041e\u0442\u0447\u0435\u0442 \u043f\u043e CNV\u201d.",source:"@site/docs/sample-examples/normal-detected-cnvs.md",sourceDirName:"sample-examples",slug:"/sample-examples/normal-detected-cnvs",permalink:"/ngsw-docs-cnv-ru/sample-examples/normal-detected-cnvs",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0441 \u0430\u043d\u0435\u0443\u043f\u043b\u043e\u0438\u0434\u0438\u0435\u0439 \u0438 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445"},sidebar:"tutorialSidebar",previous:{title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0431\u0435\u0437 \u0430\u043d\u0435\u0443\u043f\u043b\u043e\u0438\u0434\u0438\u0438 \u0438 \u0441 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/ngsw-docs-cnv-ru/sample-examples/normal-no-cnvs"},next:{title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0441\u043e \u0441\u0440\u0435\u0434\u043d\u0438\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/ngsw-docs-cnv-ru/sample-examples/medium-quality"}},p=[],u={toc:p};function m(e){var t=e.components,i=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0431\u0440\u0430\u0437\u0446\u0430-\u0441-\u0430\u043d\u0435\u0443\u043f\u043b\u043e\u0438\u0434\u0438\u0435\u0439-\u0438-\u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c-\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c-\u0434\u0430\u043d\u043d\u044b\u0445"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0441 \u0430\u043d\u0435\u0443\u043f\u043b\u043e\u0438\u0434\u0438\u0435\u0439 \u0438 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445"),(0,o.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u043c\u0438 \u0441 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0442\u0435, \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435 \u2265 0,01X \u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0432\u0441\u0435\u043c \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u043e\u0441\u043b\u0435 \u043e\u0447\u0438\u0441\u0442\u043a\u0438. \u0414\u043b\u044f \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0441 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0441\u0435 \u0441\u0442\u0430\u0434\u0438\u0438 \u043f\u0430\u0439\u043f\u043b\u0430\u0439\u043d\u0430 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u044b \u043a\u0430\u043a \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435 \u0438 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d \u201c\u041e\u0442\u0447\u0435\u0442 \u043f\u043e CNV\u201d."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"41",src:n(6444).Z})),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(2064).Z,width:"800"})),(0,o.kt)("p",null,"\u041e \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u0438\u043b\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0430\u043d\u0435\u0443\u043f\u043b\u043e\u0438\u0434\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u0443\u0437\u043d\u0430\u0442\u044c \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \u201c\u041e\u0442\u0447\u0435\u0442 \u043f\u043e CNV\u201d \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043e\u0431\u0440\u0430\u0437\u0446\u0430. \u0422\u0430\u043a, \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043e\u0431\u0440\u0430\u0437\u0435 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u0442\u0441\u044f \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u043b\u0430 \u043a\u043e\u043f\u0438\u0439 \u0445\u0440\u043e\u043c\u043e\u0441\u043e\u043c\u044b 21."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(7259).Z,width:"800"})),(0,o.kt)("p",null,"\u0422\u0443 \u0436\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438 \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \u201c\u041e\u0442\u0447\u0435\u0442 \u043f\u043e CNV\u201d \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430. \u0417\u0434\u0435\u0441\u044c \u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0435\u0440\u0434\u0438\u043a\u0442 \u043f\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0432 \u043a\u043e\u043b\u043e\u043d\u043a\u0435 \u201c\u041e\u0441\u043e\u0431\u044b\u0435 \u043e\u0442\u043c\u0435\u0442\u043a\u0438\u201d. \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043a\u043e\u043b\u043e\u043d\u043a\u0430 \u043f\u0443\u0441\u0442\u0430\u044f, \u0447\u0442\u043e \u0433\u043e\u0432\u043e\u0440\u0438\u0442 \u043e \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043e\u0431\u0440\u0430\u0437\u0446\u0430."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(6189).Z,width:"900"})))}m.isMDXComponent=!0},2064:function(e,t,n){t.Z=n.p+"assets/images/41-main-page-normal-data-quality-a238ae3fc0288b9e3a87e40082006fea.png"},7259:function(e,t,n){t.Z=n.p+"assets/images/42-cnv-report-normal-data-quality-chr21-61b9f4b1d3c188b2653b3260be58584c.png"},6189:function(e,t,n){t.Z=n.p+"assets/images/43-patient-cnv-report-normal-data-quality-chr21-3751ebbdf0aaaacdce13625218779b79.png"},6444:function(e,t,n){t.Z=n.p+"assets/images/41-main-page-normal-data-quality-a238ae3fc0288b9e3a87e40082006fea.png"}}]);