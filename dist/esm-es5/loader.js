import{C as CSS,p as plt,w as win,a as promiseResolve,b as bootstrapLazy}from"./index-303021a9.js";var patchEsm=function(){if(!(CSS&&CSS.supports&&CSS.supports("color","var(--c)"))){return import("./css-shim-2bc9d17d.js").then((function(){if(plt.$cssShim$=win.__cssshim){return plt.$cssShim$.i()}else{return 0}}))}return promiseResolve()};var defineCustomElements=function(e,t){if(typeof window==="undefined")return Promise.resolve();return patchEsm().then((function(){return bootstrapLazy([["duet-date-picker",[[0,"duet-date-picker",{name:[1],identifier:[1],disabled:[516],role:[1],direction:[1],value:[513],min:[1],max:[1],firstDayOfWeek:[2,"first-day-of-week"],localization:[16],dateAdapter:[16],activeFocus:[32],focusedDay:[32],open:[32],setFocus:[64],show:[64],hide:[64]},[[6,"click","handleDocumentClick"]]]]]],t)}))};export{defineCustomElements};