const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=n.split("").reduce((function(n,t,e){return n[t]=e,n}),{});var e=function(n){if(void 0!==t[n])return t[n];let e=0,o=1,s=36,r=1;for(;o<n.length;e+=s,o++,s*=36);for(let t=n.length-1;t>=0;t--,r*=36){let o=n.charCodeAt(t)-48;o>10&&(o-=7),e+=o*r}return e};const o=function(n,t,o){const s=e(t);return s<n.symCount?n.syms[s]:o+s+1-n.symCount},s=function(n){const t={nodes:n.split(";"),syms:[],symCount:0};return n.match(":")&&function(n){const t=new RegExp("([0-9A-Z]+):([0-9A-Z]+)");for(let o=0;o<n.nodes.length;o++){const s=t.exec(n.nodes[o]);if(!s){n.symCount=o;break}n.syms[e(s[1])]=e(s[2])}n.nodes=n.nodes.slice(n.symCount,n.nodes.length)}(t),function(n){const t=[],e=(s,r)=>{let c=n.nodes[s];"!"===c[0]&&(t.push(r),c=c.slice(1));const u=c.split(/([A-Z0-9,]+)/g);for(let c=0;c<u.length;c+=2){const i=u[c],l=u[c+1];if(!i)continue;const f=r+i;if(","===l||void 0===l){t.push(f);continue}const d=o(n,l,s);e(d,f)}};return e(0,""),t}(t)};export default function(n){const t=n.split("|").reduce(((n,t)=>{const e=t.split("¦");return n[e[0]]=e[1],n}),{}),e={};return Object.keys(t).forEach((function(n){const o=s(t[n]);"true"===n&&(n=!0);for(let t=0;t<o.length;t++){const s=o[t];!0===e.hasOwnProperty(s)?!1===Array.isArray(e[s])?e[s]=[e[s],n]:e[s].push(n):e[s]=n}})),e}
