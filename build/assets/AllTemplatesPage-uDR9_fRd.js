import{T as We,m as $e,n as Ge,r as g,p as Re,d as se,U as P,j as c,W as Ae,X as He,Y as Me,Z as q,$ as Ve,a0 as Ue,a1 as D,y as Xe,a2 as Qe,a3 as Ye}from"./index-CYq_RD0x.js";import{c as Ze,d as Je}from"./index-DmH5IelL.js";import{u as Ke,p as fe,C as ge}from"./index-Jpzx_g7m.js";import{g as et,m as tt,c as qe,o as rt,r as nt}from"./Compact-BOEYmv0N.js";import{k as ot,l as at,m as st}from"./colors-COBjkXCB.js";import{W as ct,B as H}from"./button-Cugw9VxE.js";import{s as M}from"./index-Cxp-8D49.js";import{u as Be}from"./useFilteredTemplates-CaDeAxTD.js";import{u as B}from"./useTranslation-Dp27TZad.js";import{P as it}from"./Pagination-BZiv1ao2.js";import{S as lt}from"./index-CFaj9sps.js";import{G as ut}from"./iconBase-CCf7GUbk.js";import{I as dt}from"./index-C4AQgalY.js";import{D as pe}from"./DomainConatainer-DN23gupA.js";import"./CloseOutlined-79Li-1gl.js";import"./pickAttrs-CbJZrQb0.js";import"./index-C4MB-Y3X.js";import"./EllipsisOutlined-cXE7ccgh.js";import"./Overflow-CcM3jKlt.js";import"./Dropdown-PaDgNGyW.js";import"./TextArea-CXe28jMq.js";import"./compact-item-CeJq1bvT.js";import"./LeftOutlined-LzDU36C_.js";import"./useBreakpoint-B1syD9uz.js";import"./CheckOutlined-C8WKcUn-.js";const mt=e=>{const{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:r,componentCls:o,calc:a}=e,l=a(r).sub(n).equal(),i=a(t).sub(n).equal();return{[o]:Object.assign(Object.assign({},Ge(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${$e(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:i,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},ie=e=>{const{lineWidth:t,fontSizeIcon:n,calc:r}=e,o=e.fontSizeSM;return tt(e,{tagFontSize:o,tagLineHeight:$e(r(e.lineHeightSM).mul(o).equal()),tagIconSize:r(n).sub(r(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},le=e=>({defaultBg:new We(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),Ee=et("Tag",e=>{const t=ie(e);return mt(t)},le);var ft=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const gt=g.forwardRef((e,t)=>{const{prefixCls:n,style:r,className:o,checked:a,onChange:l,onClick:i}=e,u=ft(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:s,tag:d}=g.useContext(Re),f=_=>{l==null||l(!a),i==null||i(_)},b=s("tag",n),[v,h,p]=Ee(b),S=se(b,`${b}-checkable`,{[`${b}-checkable-checked`]:a},d==null?void 0:d.className,o,h,p);return v(g.createElement("span",Object.assign({},u,{ref:t,style:Object.assign(Object.assign({},r),d==null?void 0:d.style),className:S,onClick:f})))}),pt=e=>ot(e,(t,n)=>{let{textColor:r,lightBorderColor:o,lightColor:a,darkColor:l}=n;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:r,background:a,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),bt=qe(["Tag","preset"],e=>{const t=ie(e);return pt(t)},le);function ht(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const F=(e,t,n)=>{const r=ht(n);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},vt=qe(["Tag","status"],e=>{const t=ie(e);return[F(t,"success","Success"),F(t,"processing","Info"),F(t,"error","Error"),F(t,"warning","Warning")]},le);var Ct=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const yt=g.forwardRef((e,t)=>{const{prefixCls:n,className:r,rootClassName:o,style:a,children:l,icon:i,color:u,onClose:s,bordered:d=!0,visible:f}=e,b=Ct(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:v,direction:h,tag:p}=g.useContext(Re),[S,_]=g.useState(!0),T=rt(b,["closeIcon","closable"]);g.useEffect(()=>{f!==void 0&&_(f)},[f]);const O=at(u),N=st(u),E=O||N,L=Object.assign(Object.assign({backgroundColor:u&&!E?u:void 0},p==null?void 0:p.style),a),C=v("tag",n),[w,k,W]=Ee(C),G=se(C,p==null?void 0:p.className,{[`${C}-${u}`]:E,[`${C}-has-color`]:u&&!E,[`${C}-hidden`]:!S,[`${C}-rtl`]:h==="rtl",[`${C}-borderless`]:!d},r,o,k,W),$=R=>{R.stopPropagation(),s==null||s(R),!R.defaultPrevented&&_(!1)},[,m]=Ke(fe(e),fe(p),{closable:!1,closeIconRender:R=>{const Le=g.createElement("span",{className:`${C}-close-icon`,onClick:$},R);return nt(R,Le,I=>({onClick:me=>{var A;(A=I==null?void 0:I.onClick)===null||A===void 0||A.call(I,me),$(me)},className:se(I==null?void 0:I.className,`${C}-close-icon`)}))}}),y=typeof b.onClick=="function"||l&&l.type==="a",j=i||null,z=j?g.createElement(g.Fragment,null,j,l&&g.createElement("span",null,l)):l,de=g.createElement("span",Object.assign({},T,{ref:t,className:G,style:L}),z,m,O&&g.createElement(bt,{key:"preset",prefixCls:C}),N&&g.createElement(vt,{key:"status",prefixCls:C}));return w(y?g.createElement(ct,{component:"Tag"},de):de)}),ce=yt;ce.CheckableTag=gt;const xt="/assets/image-not-found-DrHh-fVD.jpg",St="_card_1g615_1",jt="_cardDetails_1g615_5",_t="_priceRow_1g615_15",Tt="_price_1g615_15",It="_actions_1g615_26",Ot="_cartButton_1g615_32",Nt="_coverImage_1g615_36",wt="_tags_1g615_41",x={card:St,cardDetails:jt,priceRow:_t,price:Tt,actions:It,cartButton:Ot,coverImage:Nt,tags:wt},$t=g.memo(({template:e,isSelected:t,isFavorite:n,id:r})=>{const{name:o,image:a=xt,niche:l,categ:i,price:u}=e,[s,d]=g.useState(!1);console.log("isSelected :>> ",t);const f=P(),b=()=>{f(n?Ae(r):He(r)),M.success(n?"Removed from favorites":"Added to favorites")},v=()=>{f(Me(t?null:r)),M.success(n?"Select":"Unselect")},h=()=>{d(p=>!p),M.success(s?"Removed from cart":"Added to cart")};return c.jsxs(ge,{hoverable:!0,className:x.card,cover:c.jsx("img",{height:"200px",alt:o,src:a,className:x.coverImage}),children:[c.jsx(ge.Meta,{title:o}),c.jsxs("div",{className:x.tags,children:[c.jsx(ce,{color:"green",children:l}),c.jsxs(ce,{color:"blue",children:["Category ",i]})]}),c.jsxs("div",{className:x.cardDetails,children:[c.jsxs("div",{className:x.priceRow,children:[c.jsxs("div",{className:x.price,children:["$",u]}),c.jsx(H,{type:n?"primary":"default",onClick:b,className:x.favoriteButton,icon:n?c.jsx(Ze,{className:".icon",style:{color:"var(--accent-color)"}}):c.jsx(Je,{className:".icon"})})]}),c.jsxs("div",{className:x.actions,children:[c.jsx(H,{type:t?"primary":"default",onClick:v,className:x.cartButton,children:t?"Select":"Unselect"}),c.jsx(H,{type:s?"primary":"default",onClick:h,className:x.cartButton,children:s?"Remove from Cart":"Add to Cart"})]})]})]},r)}),Rt="_grid_container_7ovvi_1",qt="_grid_templates_7ovvi_11",Pe={grid_container:Rt,grid_templates:qt},Bt=({templates:e})=>{const{templateById:t,favorites:n}=q(a=>a.templates),{template:r}=q(a=>a.flow);console.log("selectedTemplate :>> ",r);const o=e.map(a=>{const l=n.includes(a),i=t[a];return c.jsx($t,{id:a,template:i,isSelected:r===a,isFavorite:l},a)});return c.jsx("div",{className:Pe.grid_templates,children:o})},Et=()=>{const{t:e}=B();return c.jsx("div",{style:{textAlign:"center",fontWeight:"bold",fontStyle:"italic",fontSize:"20px",color:"var(--accent-color)"},children:e("No items available!")})},Pt=()=>{const{templates:e,total:t}=Be();return c.jsx("div",{className:Pe.grid_container,children:t>0?c.jsx(Bt,{templates:e}):c.jsx(Et,{})})},kt="_pagination_cont_t1keh_1",zt={pagination_cont:kt},Dt=e=>{const{total:t}=Be(),{t:n}=B();return c.jsx(it,{style:{flex:1},...e,className:zt.pagination_cont,total:t,showTotal:r=>n(`${r} items`)})},ke=({width:e="var('--input-m-width')",options:t,...n})=>{const{t:r}=B(),o=t==null?void 0:t.map(a=>({...a,label:typeof a.label=="string"?r(a.label):a.label}));return c.jsx(lt,{options:o,style:{width:e},...n})},Ft=()=>{const{nicheAllIds:e,nicheById:t,niche:n}=q(i=>i.flow),r=P(),{t:o}=B(),a=e.map(i=>{const{id:u,name:s}=t[i];return{value:u,label:o(s)}}),l=i=>{r(Ve(i))};return c.jsx(ke,{options:a,width:200,value:n,onChange:l})},Lt=()=>{const{filteredCategs:e,categById:t,category:n}=q(i=>i.flow),r=P(),{t:o}=B(),a=e.map(i=>{const{id:u,name:s}=t[i];return{value:u,label:o(s)}}),l=i=>{r(Ue(i||null))};return c.jsx(ke,{placeholder:o("Category"),allowClear:!0,options:a,width:200,value:n,onChange:l})};function Wt(e){return ut({attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`},child:[]}]}]})(e)}var V,be;function ze(){if(be)return V;be=1;function e(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return V=e,V}var U,he;function Gt(){if(he)return U;he=1;var e=typeof D=="object"&&D&&D.Object===Object&&D;return U=e,U}var X,ve;function De(){if(ve)return X;ve=1;var e=Gt(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=e||t||Function("return this")();return X=n,X}var Q,Ce;function At(){if(Ce)return Q;Ce=1;var e=De(),t=function(){return e.Date.now()};return Q=t,Q}var Y,ye;function Ht(){if(ye)return Y;ye=1;var e=/\s/;function t(n){for(var r=n.length;r--&&e.test(n.charAt(r)););return r}return Y=t,Y}var Z,xe;function Mt(){if(xe)return Z;xe=1;var e=Ht(),t=/^\s+/;function n(r){return r&&r.slice(0,e(r)+1).replace(t,"")}return Z=n,Z}var J,Se;function Fe(){if(Se)return J;Se=1;var e=De(),t=e.Symbol;return J=t,J}var K,je;function Vt(){if(je)return K;je=1;var e=Fe(),t=Object.prototype,n=t.hasOwnProperty,r=t.toString,o=e?e.toStringTag:void 0;function a(l){var i=n.call(l,o),u=l[o];try{l[o]=void 0;var s=!0}catch{}var d=r.call(l);return s&&(i?l[o]=u:delete l[o]),d}return K=a,K}var ee,_e;function Ut(){if(_e)return ee;_e=1;var e=Object.prototype,t=e.toString;function n(r){return t.call(r)}return ee=n,ee}var te,Te;function Xt(){if(Te)return te;Te=1;var e=Fe(),t=Vt(),n=Ut(),r="[object Null]",o="[object Undefined]",a=e?e.toStringTag:void 0;function l(i){return i==null?i===void 0?o:r:a&&a in Object(i)?t(i):n(i)}return te=l,te}var re,Ie;function Qt(){if(Ie)return re;Ie=1;function e(t){return t!=null&&typeof t=="object"}return re=e,re}var ne,Oe;function Yt(){if(Oe)return ne;Oe=1;var e=Xt(),t=Qt(),n="[object Symbol]";function r(o){return typeof o=="symbol"||t(o)&&e(o)==n}return ne=r,ne}var oe,Ne;function Zt(){if(Ne)return oe;Ne=1;var e=Mt(),t=ze(),n=Yt(),r=NaN,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,i=parseInt;function u(s){if(typeof s=="number")return s;if(n(s))return r;if(t(s)){var d=typeof s.valueOf=="function"?s.valueOf():s;s=t(d)?d+"":d}if(typeof s!="string")return s===0?s:+s;s=e(s);var f=a.test(s);return f||l.test(s)?i(s.slice(2),f?2:8):o.test(s)?r:+s}return oe=u,oe}var ae,we;function Jt(){if(we)return ae;we=1;var e=ze(),t=At(),n=Zt(),r="Expected a function",o=Math.max,a=Math.min;function l(i,u,s){var d,f,b,v,h,p,S=0,_=!1,T=!1,O=!0;if(typeof i!="function")throw new TypeError(r);u=n(u)||0,e(s)&&(_=!!s.leading,T="maxWait"in s,b=T?o(n(s.maxWait)||0,u):b,O="trailing"in s?!!s.trailing:O);function N(m){var y=d,j=f;return d=f=void 0,S=m,v=i.apply(j,y),v}function E(m){return S=m,h=setTimeout(w,u),_?N(m):v}function L(m){var y=m-p,j=m-S,z=u-y;return T?a(z,b-j):z}function C(m){var y=m-p,j=m-S;return p===void 0||y>=u||y<0||T&&j>=b}function w(){var m=t();if(C(m))return k(m);h=setTimeout(w,L(m))}function k(m){return h=void 0,O&&d?N(m):(d=f=void 0,v)}function W(){h!==void 0&&clearTimeout(h),S=0,d=p=f=h=void 0}function G(){return h===void 0?v:k(t())}function $(){var m=t(),y=C(m);if(d=arguments,f=this,p=m,y){if(h===void 0)return E(p);if(T)return clearTimeout(h),h=setTimeout(w,u),N(p)}return h===void 0&&(h=setTimeout(w,u)),v}return $.cancel=W,$.flush=G,$}return ae=l,ae}var Kt=Jt();const er=Xe(Kt),{Search:tr}=dt,rr=200,nr=({style:e,value:t,placeholder:n,width:r=rr,handleChange:o,...a})=>{const[l,i]=g.useState(""),{t:u}=B(),s=n&&u(n),d=g.useCallback(er(b=>{o(b)},500),[]),f=b=>{const v=b.target.value.toLocaleLowerCase();i(v),d(v)};return g.useEffect(()=>{i(t)},[t]),c.jsx(tr,{style:{...e,width:r},value:l,onChange:f,enterButton:!0,size:"middle",width:r,placeholder:s,...a})},or=()=>{const e=P(),t=q(n=>n.flow.searchQuery);return c.jsx(nr,{width:250,style:{flexShrink:1},placeholder:"Search by label",prefix:c.jsx(Wt,{className:".icon"}),value:t,handleChange:n=>{e(Qe(n))}})},ar="_cont_12aa8_1",sr="_frstRow_12aa8_15",cr="_secRow_12aa8_25",ue={cont:ar,frstRow:sr,secRow:cr},ir=()=>c.jsxs("div",{className:ue.frstRow,children:[c.jsx(pe,{}),c.jsx(Ft,{}),c.jsx(Lt,{}),c.jsx(pe,{type:"template"})]}),lr=()=>{const{pagination:{currentPage:e,pageSize:t}}=q(o=>o.flow),n=P(),r=(o,a)=>{n(Ye({currentPage:o,pageSize:a}))};return c.jsxs("div",{className:ue.secRow,children:[c.jsx(or,{}),c.jsx(Dt,{current:e,pageSize:t,onChange:r})]})},ur=()=>c.jsxs("div",{className:ue.cont,children:[c.jsx(ir,{}),c.jsx(lr,{})]}),dr="_cont_e2t5m_1",mr={cont:dr},Dr=()=>c.jsxs("div",{className:mr.cont,children:[c.jsx(ur,{}),c.jsx(Pt,{})]});export{Dr as default};
