import{r as t,u as p,Q as m,j as d}from"./index-Cxn_-gMb.js";const r=["domain-setup","purchase-templates","favorites","history"],x={templateModule:r[0],setTemplateModule:()=>{}},n=t.createContext(x),h=()=>{const e=t.useContext(n);if(!e)throw new Error("useWebsiteFlow must be used within WebsiteFlowProvider");return e},P=({children:e})=>{const[u,l]=t.useState(r[0]),c=p(),a=m();t.useEffect(()=>{const o=a.pathname;if(["template","template/"].some(s=>o.endsWith(s))){const s=`${o}/domain-setup`;c(s,{replace:!0})}},[a]);const i={templateModule:u,setTemplateModule:l};return d.jsx(n.Provider,{value:i,children:e})};export{r as T,P as a,h as u};
