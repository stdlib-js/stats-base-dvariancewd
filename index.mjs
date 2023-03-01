// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,t){var a,i,f,u,o,d,s;if(d=r-n,r<=0||d<=0)return NaN;if(1===r||0===t)return 0;for(u=t<0?(1-r)*t:0,f=0,i=0,s=0;s<r;s++)f+=(a=(o=e[u])-i)*(o-(i+=a/(s+1))),u+=t;return f/d}function e(r,n,e,t,a){var i,f,u,o,d,s,l;if(s=r-n,r<=0||s<=0)return NaN;if(1===r||0===t)return 0;for(o=a,u=0,f=0,l=0;l<r;l++)u+=(i=(d=e[o])-f)*(d-(f+=i/(l+1))),o+=t;return u/s}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
