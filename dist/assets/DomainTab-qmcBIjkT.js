import{Q as i,u as r,j as l}from"./index-Cxn_-gMb.js";import{u as m}from"./useTranslation-CrG5dD_n.js";import{T as p}from"./index-D5hJRkY6.js";const b="_domain_page_1ejc1_1",h="_domain_page_outlet_1ejc1_17",g="_heading_1ejc1_22",N={domain_page:b,domain_page_outlet:h,heading:g},T="_domain_tab_p9mvz_1",_={domain_tab:T},y=[{key:"custom-domain",label:"Use My Domain"},{key:"purchase-domain",label:"Purchase a New Domain"}],j=[{key:"self",label:"Self-hosted (download backup)"},{key:"our-servers",label:"Host on BulkWeb.io servers"}],d=e=>{const t=e.split("/");return t.pop(),t.join("/")||"/"},f=()=>{const{t:e}=m(),t=i(),n=r(),o=y.map(a=>({...a,label:e(a.label)})),s=a=>{const c=`${d(t.pathname)}/${a}`;n(c)};return l.jsx(p,{className:_.domain_tab,onChange:s,centered:!0,type:"card",items:o})},x=()=>{const{t:e}=m(),t=i(),n=r(),o=j.map(a=>({...a,label:e(a.label)})),s=a=>{const c=`${d(t.pathname)}/${a}`;n(c)};return l.jsx(p,{className:_.domain_tab,onChange:s,centered:!0,type:"card",items:o})};export{f as D,x as H,N as s};
