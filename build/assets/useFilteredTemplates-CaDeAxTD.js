import{Z as c,r as u}from"./index-CYq_RD0x.js";const m=()=>{const{templateById:r,templateAllIds:s}=c(e=>e.templates),{niche:l,category:o,searchQuery:t,pagination:{currentPage:a,pageSize:n}}=c(e=>e.flow);return u.useMemo(()=>{let e=s;return l==="all-niches"?e=s:e=e.filter(i=>r[i].niche===l),o&&(e=e.filter(i=>r[i].categ===o)),t!==""&&(e=e.filter(i=>r[i].name.toLowerCase().includes(t))),{templates:e.slice((a-1)*n,a*n),total:e.length}},[s,l,o,t,a,n])},w=()=>{const{websites:r}=c(t=>t.user),{domain:s,template:l}=c(t=>t.flow);return u.useMemo(()=>{let t=null;const a=`https://www.${s}`,n=Object.keys(r).length+1;return s&&(l||l===0)&&(t={id:n,domain:s,template:l,url:a}),t},[s,l,r])};export{w as a,m as u};
