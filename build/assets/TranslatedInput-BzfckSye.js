import{r as l,a6 as S,g as $,d as T,aa as b,f as D,c as g,R as M,F as x,j as R}from"./index-CYq_RD0x.js";import{n as z}from"./colors-COBjkXCB.js";import{u as V}from"./useTranslation-Dp27TZad.js";import{I as _}from"./index-C4AQgalY.js";var W=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],G=l.forwardRef(function(e,t){var r=e.prefixCls,n=r===void 0?"rc-checkbox":r,u=e.className,c=e.style,y=e.checked,i=e.disabled,f=e.defaultChecked,P=f===void 0?!1:f,p=e.type,v=p===void 0?"checkbox":p,E=e.title,d=e.onChange,N=S(e,W),o=l.useRef(null),h=l.useRef(null),j=z(P,{value:y}),m=$(j,2),k=m[0],w=m[1];l.useImperativeHandle(t,function(){return{focus:function(a){var s;(s=o.current)===null||s===void 0||s.focus(a)},blur:function(){var a;(a=o.current)===null||a===void 0||a.blur()},input:o.current,nativeElement:h.current}});var I=T(n,u,b(b({},"".concat(n,"-checked"),k),"".concat(n,"-disabled"),i)),L=function(a){i||("checked"in e||w(a.target.checked),d==null||d({target:g(g({},e),{},{type:v,checked:a.target.checked}),stopPropagation:function(){a.stopPropagation()},preventDefault:function(){a.preventDefault()},nativeEvent:a.nativeEvent}))};return l.createElement("span",{className:I,title:E,style:c,ref:h},l.createElement("input",D({},N,{className:"".concat(n,"-input"),ref:o,onChange:L,disabled:i,checked:!!k,type:v})),l.createElement("span",{className:"".concat(n,"-inner")}))});function J(e){const t=M.useRef(null),r=()=>{x.cancel(t.current),t.current=null};return[()=>{r(),t.current=x(()=>{t.current=null})},c=>{t.current&&(c.stopPropagation(),r()),e==null||e(c)}]}const A="var('--input-m-width')",K=({width:e=A,placeholder:t,type:r="text",...n})=>{const{t:u}=V(),c=t&&u(t);return r==="password"?R.jsx(_.Password,{size:"middle",width:e,placeholder:c,...n}):R.jsx(_,{type:r,size:"middle",width:e,placeholder:c,...n})};export{G as C,K as T,J as u};
