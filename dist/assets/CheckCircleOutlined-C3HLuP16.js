import{n as Y,m as H,r as s,x as Z,d as S,C as ee,H as oe,an as ne,ao as z,ap as te,ac as re,ag as se,ae,f as ce}from"./index-Cxn_-gMb.js";import{p as ie,R as le,b as de,a as me}from"./pickAttrs-B0SgV4ze.js";import{a as ue,R as pe}from"./CloseOutlined-U-o303_c.js";import{g as fe,r as ge,I as Ce}from"./Compact-BDAo3LEK.js";const v=(e,o,n,t,r)=>({background:e,border:`${H(t.lineWidth)} ${t.lineType} ${o}`,[`${r}-icon`]:{color:n}}),ye=e=>{const{componentCls:o,motionDurationSlow:n,marginXS:t,marginSM:r,fontSize:a,fontSizeLG:l,lineHeight:d,borderRadiusLG:u,motionEaseInOutCirc:m,withDescriptionIconSize:f,colorText:g,colorTextHeading:$,withDescriptionPadding:h,defaultPadding:c}=e;return{[o]:Object.assign(Object.assign({},Y(e)),{position:"relative",display:"flex",alignItems:"center",padding:c,wordWrap:"break-word",borderRadius:u,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:t,lineHeight:0},"&-description":{display:"none",fontSize:a,lineHeight:d},"&-message":{color:$},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${n} ${m}, opacity ${n} ${m},
        padding-top ${n} ${m}, padding-bottom ${n} ${m},
        margin-bottom ${n} ${m}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",padding:h,[`${o}-icon`]:{marginInlineEnd:r,fontSize:f,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:t,color:$,fontSize:l},[`${o}-description`]:{display:"block",color:g}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},$e=e=>{const{componentCls:o,colorSuccess:n,colorSuccessBorder:t,colorSuccessBg:r,colorWarning:a,colorWarningBorder:l,colorWarningBg:d,colorError:u,colorErrorBorder:m,colorErrorBg:f,colorInfo:g,colorInfoBorder:$,colorInfoBg:h}=e;return{[o]:{"&-success":v(r,t,n,e,o),"&-info":v(h,$,g,e,o),"&-warning":v(d,l,a,e,o),"&-error":Object.assign(Object.assign({},v(f,m,u,e,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},he=e=>{const{componentCls:o,iconCls:n,motionDurationMid:t,marginXS:r,fontSizeIcon:a,colorIcon:l,colorIconHover:d}=e;return{[o]:{"&-action":{marginInlineStart:r},[`${o}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:a,lineHeight:H(a),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${n}-close`]:{color:l,transition:`color ${t}`,"&:hover":{color:d}}},"&-close-text":{color:l,transition:`color ${t}`,"&:hover":{color:d}}}}},be=e=>({withDescriptionIconSize:e.fontSizeHeading3,defaultPadding:`${e.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`}),Ie=fe("Alert",e=>[ye(e),$e(e),he(e)],be);var B=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const ve={success:me,info:de,error:ue,warning:le},Se=e=>{const{icon:o,prefixCls:n,type:t}=e,r=ve[t]||null;return o?ge(o,s.createElement("span",{className:`${n}-icon`},o),()=>({className:S(`${n}-icon`,o.props.className)})):s.createElement(r,{className:`${n}-icon`})},xe=e=>{const{isClosable:o,prefixCls:n,closeIcon:t,handleClose:r,ariaProps:a}=e,l=t===!0||t===void 0?s.createElement(pe,null):t;return o?s.createElement("button",Object.assign({type:"button",onClick:r,className:`${n}-close-icon`,tabIndex:0},a),l):null},M=s.forwardRef((e,o)=>{const{description:n,prefixCls:t,message:r,banner:a,className:l,rootClassName:d,style:u,onMouseEnter:m,onMouseLeave:f,onClick:g,afterClose:$,showIcon:h,closable:c,closeText:I,closeIcon:C,action:x,id:P}=e,_=B(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[E,k]=s.useState(!1),w=s.useRef(null);s.useImperativeHandle(o,()=>({nativeElement:w.current}));const{getPrefixCls:D,direction:T,closable:y,closeIcon:N,className:A,style:L}=Z("alert"),i=D("alert",t),[W,G,V]=Ie(i),X=p=>{var b;k(!0),(b=e.onClose)===null||b===void 0||b.call(e,p)},O=s.useMemo(()=>e.type!==void 0?e.type:a?"warning":"info",[e.type,a]),F=s.useMemo(()=>typeof c=="object"&&c.closeIcon||I?!0:typeof c=="boolean"?c:C!==!1&&C!==null&&C!==void 0?!0:!!y,[I,C,c,y]),R=a&&h===void 0?!0:h,q=S(i,`${i}-${O}`,{[`${i}-with-description`]:!!n,[`${i}-no-icon`]:!R,[`${i}-banner`]:!!a,[`${i}-rtl`]:T==="rtl"},A,l,d,V,G),J=ie(_,{aria:!0,data:!0}),K=s.useMemo(()=>typeof c=="object"&&c.closeIcon?c.closeIcon:I||(C!==void 0?C:typeof y=="object"&&y.closeIcon?y.closeIcon:N),[C,c,I,N]),Q=s.useMemo(()=>{const p=c??y;if(typeof p=="object"){const{closeIcon:b}=p;return B(p,["closeIcon"])}return{}},[c,y]);return W(s.createElement(ee,{visible:!E,motionName:`${i}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:p=>({maxHeight:p.offsetHeight}),onLeaveEnd:$},(p,b)=>{let{className:j,style:U}=p;return s.createElement("div",Object.assign({id:P,ref:oe(w,b),"data-show":!E,className:S(q,j),style:Object.assign(Object.assign(Object.assign({},L),u),U),onMouseEnter:m,onMouseLeave:f,onClick:g,role:"alert"},J),R?s.createElement(Se,{description:n,icon:e.icon,prefixCls:i,type:O}):null,s.createElement("div",{className:`${i}-content`},r?s.createElement("div",{className:`${i}-message`},r):null,n?s.createElement("div",{className:`${i}-description`},n):null),x?s.createElement("div",{className:`${i}-action`},x):null,s.createElement(xe,{isClosable:F,prefixCls:i,closeIcon:K,handleClose:X,ariaProps:Q}))}))});function Ee(e,o,n){return o=z(o),ne(e,te()?Reflect.construct(o,n||[],z(e).constructor):o.apply(e,n))}let we=function(e){function o(){var n;return ae(this,o),n=Ee(this,o,arguments),n.state={error:void 0,info:{componentStack:""}},n}return re(o,e),se(o,[{key:"componentDidCatch",value:function(t,r){this.setState({error:t,info:r})}},{key:"render",value:function(){const{message:t,description:r,id:a,children:l}=this.props,{error:d,info:u}=this.state,m=(u==null?void 0:u.componentStack)||null,f=typeof t>"u"?(d||"").toString():t,g=typeof r>"u"?m:r;return d?s.createElement(M,{id:a,type:"error",message:f,description:s.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},g)}):l}}])}(s.Component);const Ne=M;Ne.ErrorBoundary=we;var Oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"},Re=function(o,n){return s.createElement(Ce,ce({},o,{ref:n,icon:Oe}))},Me=s.forwardRef(Re);export{Ne as A,Me as R};
