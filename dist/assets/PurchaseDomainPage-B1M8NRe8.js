import{r as t,f,j as e}from"./index-Cxn_-gMb.js";import{I as x,R as g}from"./index-Dj5Owf14.js";import{S as v}from"./index-B1pndIgd.js";import{B as m}from"./button-B0XcDbSf.js";import{S as _}from"./index-Bhdfv_bh.js";import{A as d,R as C}from"./CheckCircleOutlined-C3HLuP16.js";import{T as b}from"./index-B3RQ0AdE.js";import{I as S}from"./Compact-BDAo3LEK.js";import{s as k}from"./index-Dgy9QLG3.js";import"./colors-BPo1_XDM.js";import"./TextArea-CIIm7Cjd.js";import"./CloseOutlined-U-o303_c.js";import"./compact-item-Bj-Dyp9S.js";import"./pickAttrs-B0SgV4ze.js";import"./Overflow-EHotLezS.js";import"./CheckOutlined-Chi-5KhW.js";import"./index-0QHVce1b.js";var I={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z"}}]},name:"close-circle",theme:"outlined"},N=function(r,a){return t.createElement(S,f({},r,{ref:a,icon:I}))},R=t.forwardRef(N);const $="_inputGroup_jky20_1",w="_input_jky20_1",B="_select_jky20_13",L="_buyContainer_jky20_17",E="_result_jky20_23",G="_spinner_jky20_28",s={inputGroup:$,input:w,select:B,buyContainer:L,result:E,spinner:G},{Text:i}=b,T=[".com",".net",".org",".io",".dev"],Z=()=>{const[n,r]=t.useState(""),[a,h]=t.useState(".com"),[c,l]=t.useState(!1),[u,p]=t.useState(null),y=()=>{l(!0),p(null),setTimeout(()=>{p(Math.random()>.3),l(!1)},1200)},j=()=>{k.success("Domain purchased with 13 credits 🎉")};return e.jsxs("div",{className:s.buyContainer,children:[e.jsxs("div",{className:s.inputGroup,children:[e.jsx(x,{placeholder:"e.g. yourbrand",value:n,onChange:o=>r(o.target.value),className:s.input}),e.jsx(v,{value:a,onChange:h,options:T.map(o=>({value:o,label:o})),className:s.select}),e.jsx(m,{type:"default",onClick:y,icon:e.jsx(g,{}),children:"Search"})]}),c&&e.jsx(_,{className:s.spinner,tip:"Checking availability..."}),u!==null&&!c&&(u?e.jsx(d,{type:"success",showIcon:!0,icon:e.jsx(C,{}),message:e.jsxs("div",{className:s.result,children:[e.jsxs(i,{strong:!0,children:[`${n}${a}`," is available"]}),e.jsx(i,{type:"secondary",children:"Price: 13 credits"})]}),action:e.jsx(m,{type:"primary",onClick:j,children:"Buy Now"})}):e.jsx(d,{type:"error",showIcon:!0,icon:e.jsx(R,{}),message:e.jsxs(i,{strong:!0,children:[`${n}${a}`," is not available"]})}))]})};export{Z as default};
