"use strict";var f=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var l=f(function(A,x){
function R(r,a,d,t){var o,e,i,v,u,s,n;if(s=r-a,r<=0||s<=0)return NaN;if(r===1||t===0)return 0;for(t<0?v=(1-r)*t:v=0,i=0,e=0,n=0;n<r;n++)u=d[v],o=u-e,e+=o/(n+1),i+=o*(u-e),v+=t;return i/s}x.exports=R
});var p=f(function(B,m){
function _(r,a,d,t,o){var e,i,v,u,s,n,c;if(n=r-a,r<=0||n<=0)return NaN;if(r===1||t===0)return 0;for(u=o,v=0,i=0,c=0;c<r;c++)s=d[u],e=s-i,i+=e/(c+1),v+=e*(s-i),u+=t;return v/n}m.exports=_
});var j=f(function(C,y){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=l(),O=p();E(w,"ndarray",O);y.exports=w
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=j(),q,M=g(b(__dirname,"./native.js"));h(M)?q=k:q=M;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
