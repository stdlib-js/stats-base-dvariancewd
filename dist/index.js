"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=c(function(C,p){
function _(r,e,t,a,R){var n,i,u,s,d,o,v;if(o=r-e,r<=0||o<=0)return NaN;if(r===1||a===0)return 0;for(s=R,u=0,i=0,v=0;v<r;v++)d=t[s],n=d-i,i+=n/(v+1),u+=n*(d-i),s+=a;return u/o}p.exports=_
});var y=c(function(D,x){
var E=require('@stdlib/strided-base-stride2offset/dist'),M=q();function O(r,e,t,a){return M(r,e,t,a,E(r,a))}x.exports=O
});var j=c(function(F,w){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=y(),g=q();b(m,"ndarray",g);w.exports=m
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=j(),f,l=k(h(__dirname,"./native.js"));z(l)?f=A:f=l;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
