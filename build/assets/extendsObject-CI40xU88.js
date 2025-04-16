import{r as i,m as z,n as _,ah as V,p as L,H as Z,E as ee,d as H}from"./index-CYq_RD0x.js";import{e as oe,u as te,n as re}from"./colors-COBjkXCB.js";import{p as ne}from"./pickAttrs-CbJZrQb0.js";import{g as ie,m as le,u as F,e as ae}from"./Compact-BOEYmv0N.js";import{u as de,C as se}from"./TranslatedInput-BzfckSye.js";import{W as ce,T as ue}from"./button-Cugw9VxE.js";const X=i.createContext(null),be=X.Provider,J=i.createContext(null),ge=J.Provider,pe=t=>{const{componentCls:r,antCls:n}=t,o=`${r}-group`;return{[o]:Object.assign(Object.assign({},_(t)),{display:"inline-block",fontSize:0,[`&${o}-rtl`]:{direction:"rtl"},[`&${o}-block`]:{display:"flex"},[`${n}-badge ${n}-badge-count`]:{zIndex:1},[`> ${n}-badge:not(:first-child) > ${n}-button-wrapper`]:{borderInlineStart:"none"}})}},Ce=t=>{const{componentCls:r,wrapperMarginInlineEnd:n,colorPrimary:o,radioSize:e,motionDurationSlow:c,motionDurationMid:g,motionEaseInOutCirc:S,colorBgContainer:a,colorBorder:x,lineWidth:f,colorBgContainerDisabled:k,colorTextDisabled:I,paddingXS:$,dotColorDisabled:w,lineType:y,radioColor:u,radioBgColor:v,calc:b}=t,m=`${r}-inner`,O=b(e).sub(b(4).mul(2)),d=b(1).mul(e).equal({unit:!0});return{[`${r}-wrapper`]:Object.assign(Object.assign({},_(t)),{display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:n,cursor:"pointer","&:last-child":{marginInlineEnd:0},[`&${r}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:t.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},"&-block":{flex:1,justifyContent:"center"},[`${r}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${z(f)} ${y} ${o}`,borderRadius:"50%",visibility:"hidden",opacity:0,content:'""'},[r]:Object.assign(Object.assign({},_(t)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center",borderRadius:"50%"}),[`${r}-wrapper:hover &,
        &:hover ${m}`]:{borderColor:o},[`${r}-input:focus-visible + ${m}`]:Object.assign({},V(t)),[`${r}:hover::after, ${r}-wrapper:hover &::after`]:{visibility:"visible"},[`${r}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:d,height:d,marginBlockStart:b(1).mul(e).div(-2).equal({unit:!0}),marginInlineStart:b(1).mul(e).div(-2).equal({unit:!0}),backgroundColor:u,borderBlockStart:0,borderInlineStart:0,borderRadius:d,transform:"scale(0)",opacity:0,transition:`all ${c} ${S}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:d,height:d,backgroundColor:a,borderColor:x,borderStyle:"solid",borderWidth:f,borderRadius:"50%",transition:`all ${g}`},[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0},[`${r}-checked`]:{[m]:{borderColor:o,backgroundColor:v,"&::after":{transform:`scale(${t.calc(t.dotSize).div(e).equal()})`,opacity:1,transition:`all ${c} ${S}`}}},[`${r}-disabled`]:{cursor:"not-allowed",[m]:{backgroundColor:k,borderColor:x,cursor:"not-allowed","&::after":{backgroundColor:w}},[`${r}-input`]:{cursor:"not-allowed"},[`${r}-disabled + span`]:{color:I,cursor:"not-allowed"},[`&${r}-checked`]:{[m]:{"&::after":{transform:`scale(${b(O).div(e).equal()})`}}}},[`span${r} + *`]:{paddingInlineStart:$,paddingInlineEnd:$}})}},he=t=>{const{buttonColor:r,controlHeight:n,componentCls:o,lineWidth:e,lineType:c,colorBorder:g,motionDurationSlow:S,motionDurationMid:a,buttonPaddingInline:x,fontSize:f,buttonBg:k,fontSizeLG:I,controlHeightLG:$,controlHeightSM:w,paddingXS:y,borderRadius:u,borderRadiusSM:v,borderRadiusLG:b,buttonCheckedBg:m,buttonSolidCheckedColor:p,colorTextDisabled:O,colorBgContainerDisabled:d,buttonCheckedBgDisabled:j,buttonCheckedColorDisabled:T,colorPrimary:C,colorPrimaryHover:E,colorPrimaryActive:l,buttonSolidCheckedBg:R,buttonSolidCheckedHoverBg:B,buttonSolidCheckedActiveBg:P,calc:h}=t;return{[`${o}-button-wrapper`]:{position:"relative",display:"inline-block",height:n,margin:0,paddingInline:x,paddingBlock:0,color:r,fontSize:f,lineHeight:z(h(n).sub(h(e).mul(2)).equal()),background:k,border:`${z(e)} ${c} ${g}`,borderBlockStartWidth:h(e).add(.02).equal(),borderInlineStartWidth:0,borderInlineEndWidth:e,cursor:"pointer",transition:[`color ${a}`,`background ${a}`,`box-shadow ${a}`].join(","),a:{color:r},[`> ${o}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:h(e).mul(-1).equal(),insetInlineStart:h(e).mul(-1).equal(),display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:e,paddingInline:0,backgroundColor:g,transition:`background-color ${S}`,content:'""'}},"&:first-child":{borderInlineStart:`${z(e)} ${c} ${g}`,borderStartStartRadius:u,borderEndStartRadius:u},"&:last-child":{borderStartEndRadius:u,borderEndEndRadius:u},"&:first-child:last-child":{borderRadius:u},[`${o}-group-large &`]:{height:$,fontSize:I,lineHeight:z(h($).sub(h(e).mul(2)).equal()),"&:first-child":{borderStartStartRadius:b,borderEndStartRadius:b},"&:last-child":{borderStartEndRadius:b,borderEndEndRadius:b}},[`${o}-group-small &`]:{height:w,paddingInline:h(y).sub(e).equal(),paddingBlock:0,lineHeight:z(h(w).sub(h(e).mul(2)).equal()),"&:first-child":{borderStartStartRadius:v,borderEndStartRadius:v},"&:last-child":{borderStartEndRadius:v,borderEndEndRadius:v}},"&:hover":{position:"relative",color:C},"&:has(:focus-visible)":Object.assign({},V(t)),[`${o}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${o}-button-wrapper-disabled)`]:{zIndex:1,color:C,background:m,borderColor:C,"&::before":{backgroundColor:C},"&:first-child":{borderColor:C},"&:hover":{color:E,borderColor:E,"&::before":{backgroundColor:E}},"&:active":{color:l,borderColor:l,"&::before":{backgroundColor:l}}},[`${o}-group-solid &-checked:not(${o}-button-wrapper-disabled)`]:{color:p,background:R,borderColor:R,"&:hover":{color:p,background:B,borderColor:B},"&:active":{color:p,background:P,borderColor:P}},"&-disabled":{color:O,backgroundColor:d,borderColor:g,cursor:"not-allowed","&:first-child, &:hover":{color:O,backgroundColor:d,borderColor:g}},[`&-disabled${o}-button-wrapper-checked`]:{color:T,backgroundColor:j,borderColor:g,boxShadow:"none"},"&-block":{flex:1,textAlign:"center"}}}},fe=t=>{const{wireframe:r,padding:n,marginXS:o,lineWidth:e,fontSizeLG:c,colorText:g,colorBgContainer:S,colorTextDisabled:a,controlItemBgActiveDisabled:x,colorTextLightSolid:f,colorPrimary:k,colorPrimaryHover:I,colorPrimaryActive:$,colorWhite:w}=t,y=4,u=c,v=r?u-y*2:u-(y+e)*2;return{radioSize:u,dotSize:v,dotColorDisabled:a,buttonSolidCheckedColor:f,buttonSolidCheckedBg:k,buttonSolidCheckedHoverBg:I,buttonSolidCheckedActiveBg:$,buttonBg:S,buttonCheckedBg:S,buttonColor:g,buttonCheckedBgDisabled:x,buttonCheckedColorDisabled:a,buttonPaddingInline:n-e,wrapperMarginInlineEnd:o,radioColor:r?k:w,radioBgColor:r?S:k}},K=ie("Radio",t=>{const{controlOutline:r,controlOutlineWidth:n}=t,o=`0 0 0 ${z(n)} ${r}`,c=le(t,{radioFocusShadow:o,radioButtonFocusShadow:o});return[pe(c),Ce(c),he(c)]},fe,{unitless:{radioSize:!0,dotSize:!0}});var me=function(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,o=Object.getOwnPropertySymbols(t);e<o.length;e++)r.indexOf(o[e])<0&&Object.prototype.propertyIsEnumerable.call(t,o[e])&&(n[o[e]]=t[o[e]]);return n};const Se=(t,r)=>{var n,o;const e=i.useContext(X),c=i.useContext(J),{getPrefixCls:g,direction:S,radio:a}=i.useContext(L),x=i.useRef(null),f=Z(r,x),{isFormItemInput:k}=i.useContext(oe),I=N=>{var M,D;(M=t.onChange)===null||M===void 0||M.call(t,N),(D=e==null?void 0:e.onChange)===null||D===void 0||D.call(e,N)},{prefixCls:$,className:w,rootClassName:y,children:u,style:v,title:b}=t,m=me(t,["prefixCls","className","rootClassName","children","style","title"]),p=g("radio",$),O=((e==null?void 0:e.optionType)||c)==="button",d=O?`${p}-button`:p,j=F(p),[T,C,E]=K(p,j),l=Object.assign({},m),R=i.useContext(ee);e&&(l.name=e.name,l.onChange=I,l.checked=t.value===e.value,l.disabled=(n=l.disabled)!==null&&n!==void 0?n:e.disabled),l.disabled=(o=l.disabled)!==null&&o!==void 0?o:R;const B=H(`${d}-wrapper`,{[`${d}-wrapper-checked`]:l.checked,[`${d}-wrapper-disabled`]:l.disabled,[`${d}-wrapper-rtl`]:S==="rtl",[`${d}-wrapper-in-form-item`]:k,[`${d}-wrapper-block`]:!!(e!=null&&e.block)},a==null?void 0:a.className,w,y,C,E,j),[P,h]=de(l.onClick);return T(i.createElement(ce,{component:"Radio",disabled:l.disabled},i.createElement("label",{className:B,style:Object.assign(Object.assign({},a==null?void 0:a.style),v),onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,title:b,onClick:P},i.createElement(se,Object.assign({},l,{className:H(l.className,{[ue]:!O}),type:"radio",prefixCls:d,ref:f,onClick:h})),u!==void 0?i.createElement("span",{className:`${d}-label`},u):null)))},q=i.forwardRef(Se),ve=i.forwardRef((t,r)=>{const{getPrefixCls:n,direction:o}=i.useContext(L),e=te(),{prefixCls:c,className:g,rootClassName:S,options:a,buttonStyle:x="outline",disabled:f,children:k,size:I,style:$,id:w,optionType:y,name:u=e,defaultValue:v,value:b,block:m=!1,onChange:p,onMouseEnter:O,onMouseLeave:d,onFocus:j,onBlur:T}=t,[C,E]=re(v,{value:b}),l=i.useCallback(s=>{const Y=C,A=s.target.value;"value"in t||E(A),A!==Y&&(p==null||p(s))},[C,E,p]),R=n("radio",c),B=`${R}-group`,P=F(R),[h,N,M]=K(R,P);let D=k;a&&a.length>0&&(D=a.map(s=>typeof s=="string"||typeof s=="number"?i.createElement(q,{key:s.toString(),prefixCls:R,disabled:f,value:s,checked:C===s},s):i.createElement(q,{key:`radio-group-value-options-${s.value}`,prefixCls:R,disabled:s.disabled||f,value:s.value,checked:C===s.value,title:s.title,style:s.style,id:s.id,required:s.required},s.label)));const W=ae(I),Q=H(B,`${B}-${x}`,{[`${B}-${W}`]:W,[`${B}-rtl`]:o==="rtl",[`${B}-block`]:m},g,S,N,M,P),U=i.useMemo(()=>({onChange:l,value:C,disabled:f,name:u,optionType:y,block:m}),[l,C,f,u,y,m]);return h(i.createElement("div",Object.assign({},ne(t,{aria:!0,data:!0}),{className:Q,style:$,onMouseEnter:O,onMouseLeave:d,onFocus:j,onBlur:T,id:w,ref:r}),i.createElement(be,{value:U},D)))}),ke=i.memo(ve);var $e=function(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,o=Object.getOwnPropertySymbols(t);e<o.length;e++)r.indexOf(o[e])<0&&Object.prototype.propertyIsEnumerable.call(t,o[e])&&(n[o[e]]=t[o[e]]);return n};const ye=(t,r)=>{const{getPrefixCls:n}=i.useContext(L),{prefixCls:o}=t,e=$e(t,["prefixCls"]),c=n("radio",o);return i.createElement(ge,{value:"button"},i.createElement(q,Object.assign({prefixCls:c},e,{type:"radio",ref:r})))},xe=i.forwardRef(ye),G=q;G.Button=xe;G.Group=ke;G.__ANT_RADIO=!0;const Pe=function(){const t=Object.assign({},arguments.length<=0?void 0:arguments[0]);for(let r=1;r<arguments.length;r++){const n=r<0||arguments.length<=r?void 0:arguments[r];n&&Object.keys(n).forEach(o=>{const e=n[o];e!==void 0&&(t[o]=e)})}return t};export{G as R,Pe as e};
