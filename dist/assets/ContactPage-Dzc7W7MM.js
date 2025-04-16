import{j as g,y as ae,r as l,R as C,z as K}from"./index-Cxn_-gMb.js";import{F as P}from"./index-Bvrkltx6.js";import{I as H}from"./index-Dj5Owf14.js";import{B as se}from"./button-B0XcDbSf.js";import{s as ie}from"./index-Dgy9QLG3.js";import"./colors-BPo1_XDM.js";import"./Compact-BDAo3LEK.js";import"./collapse-BbEVqHco.js";import"./index-0QHVce1b.js";import"./row-BnMpXTUR.js";import"./useBreakpoint-OwzyyQbf.js";import"./TextArea-CIIm7Cjd.js";import"./CloseOutlined-U-o303_c.js";import"./compact-item-Bj-Dyp9S.js";import"./pickAttrs-B0SgV4ze.js";const le="_heading_1rfsb_25",ce="_form_1rfsb_41",ue="_input_1rfsb_47",de="_textarea_1rfsb_48",fe="_button_1rfsb_60",D={heading:le,form:ce,input:ue,textarea:de,button:fe};function me(){const[t]=P.useForm(),e=n=>{console.log("Submitted:",n),ie.success("Message sent successfully!"),t.resetFields()};return g.jsxs("div",{style:{width:"60%"},children:[g.jsx("h2",{className:D.heading,children:"Contact Us"}),g.jsxs(P,{form:t,layout:"vertical",onFinish:e,className:D.form,children:[g.jsx(P.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please enter your name"}],children:g.jsx(H,{className:D.input})}),g.jsx(P.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please enter your email"},{type:"email",message:"Invalid email address"}],children:g.jsx(H,{className:D.input})}),g.jsx(P.Item,{label:"Message",name:"message",rules:[{required:!0,message:"Please enter your message"}],children:g.jsx(H.TextArea,{rows:6,className:D.textarea})}),g.jsx(P.Item,{children:g.jsx(se,{type:"primary",htmlType:"submit",className:D.button,children:"Send Message"})})]})]})}var Z,q;function ge(){return q||(q=1,Z=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var o,r,a;if(Array.isArray(e)){if(o=e.length,o!=n.length)return!1;for(r=o;r--!==0;)if(!t(e[r],n[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(a=Object.keys(e),o=a.length,o!==Object.keys(n).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[r]))return!1;for(r=o;r--!==0;){var i=a[r];if(!t(e[i],n[i]))return!1}return!0}return e!==e&&n!==n}),Z}var pe=ge();const he=ae(pe);function _(){return _=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_.apply(null,arguments)}function N(t,e){if(t==null)return{};var n={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(e.indexOf(o)!==-1)continue;n[o]=t[o]}return n}function ve(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function ye(t){var e=ve(t,"string");return typeof e=="symbol"?e:e+""}const S={NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",FAILED:"FAILED",AUTH_FAILURE:"AUTH_FAILURE"},Ce="https://maps.googleapis.com/maps/api/js";class T{static async load(e,n){var o;const r=e.libraries?e.libraries.split(","):[],a=this.serializeParams(e);this.listeners.push(n),(o=window.google)!=null&&(o=o.maps)!=null&&o.importLibrary?(this.serializedApiParams||(this.loadingStatus=S.LOADED),this.notifyLoadingStatusListeners()):(this.serializedApiParams=a,this.initImportLibrary(e)),this.serializedApiParams&&this.serializedApiParams!==a&&console.warn("[google-maps-api-loader] The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");const i=["maps",...r];await Promise.all(i.map(s=>google.maps.importLibrary(s)))}static serializeParams(e){return[e.v,e.key,e.language,e.region,e.authReferrerPolicy,e.solutionChannel].join("/")}static initImportLibrary(e){if(window.google||(window.google={}),window.google.maps||(window.google.maps={}),window.google.maps.importLibrary){console.error("[google-maps-api-loader-internal]: initImportLibrary must only be called once");return}let n=null;const o=()=>n||(n=new Promise((r,a)=>{var i;const s=document.createElement("script"),u=new URLSearchParams;for(const[f,d]of Object.entries(e)){const p=f.replace(/[A-Z]/g,v=>"_"+v[0].toLowerCase());u.set(p,String(d))}u.set("loading","async"),u.set("callback","__googleMapsCallback__"),s.async=!0,s.src=Ce+"?"+u.toString(),s.nonce=((i=document.querySelector("script[nonce]"))==null?void 0:i.nonce)||"",s.onerror=()=>{this.loadingStatus=S.FAILED,this.notifyLoadingStatusListeners(),a(new Error("The Google Maps JavaScript API could not load."))},window.__googleMapsCallback__=()=>{this.loadingStatus=S.LOADED,this.notifyLoadingStatusListeners(),r()},window.gm_authFailure=()=>{this.loadingStatus=S.AUTH_FAILURE,this.notifyLoadingStatusListeners()},this.loadingStatus=S.LOADING,this.notifyLoadingStatusListeners(),document.head.append(s)}),n);google.maps.importLibrary=r=>o().then(()=>google.maps.importLibrary(r))}static notifyLoadingStatusListeners(){for(const e of this.listeners)e(this.loadingStatus)}}T.loadingStatus=S.NOT_LOADED;T.serializedApiParams=void 0;T.listeners=[];const be=["onLoad","onError","apiKey","version","libraries"],Ee=["children"],Le="GMP_visgl_rgmlibrary_v1_default",z=C.createContext(null);function Me(){const[t,e]=l.useState({});return{mapInstances:t,addMapInstance:(a,i="default")=>{e(s=>_({},s,{[i]:a}))},removeMapInstance:(a="default")=>{e(i=>N(i,[a].map(ye)))},clearMapInstances:()=>{e({})}}}function _e(t){const{onLoad:e,onError:n,apiKey:o,version:r,libraries:a=[]}=t,i=N(t,be),[s,u]=l.useState(T.loadingStatus),[f,d]=l.useReducer((c,h)=>c[h.name]?c:_({},c,{[h.name]:h.value}),{}),p=l.useMemo(()=>a==null?void 0:a.join(","),[a]),v=l.useMemo(()=>JSON.stringify(_({apiKey:o,version:r},i)),[o,r,i]),m=l.useCallback(async c=>{var h;if(f[c])return f[c];if(!((h=google)!=null&&(h=h.maps)!=null&&h.importLibrary))throw new Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");const E=await window.google.maps.importLibrary(c);return d({name:c,value:E}),E},[f]);return l.useEffect(()=>{(async()=>{try{const c=_({key:o},i);r&&(c.v=r),(p==null?void 0:p.length)>0&&(c.libraries=p),(c.channel===void 0||c.channel<0||c.channel>999)&&delete c.channel,c.solutionChannel===void 0?c.solutionChannel=Le:c.solutionChannel===""&&delete c.solutionChannel,await T.load(c,h=>u(h));for(const h of["core","maps",...a])await m(h);e&&e()}catch(c){n?n(c):console.error("<ApiProvider> failed to load the Google Maps JavaScript API",c)}})()},[o,p,v]),{status:s,loadedLibraries:f,importLibrary:m}}const xe=t=>{const{children:e}=t,n=N(t,Ee),{mapInstances:o,addMapInstance:r,removeMapInstance:a,clearMapInstances:i}=Me(),{status:s,loadedLibraries:u,importLibrary:f}=_e(n),d=l.useMemo(()=>({mapInstances:o,addMapInstance:r,removeMapInstance:a,clearMapInstances:i,status:s,loadedLibraries:u,importLibrary:f}),[o,r,a,i,s,u,f]);return C.createElement(z.Provider,{value:d},e)};function Ie(t,e){for(const n of ke){const o=e[n],r=V[n];l.useEffect(()=>{if(!t||!o)return;const a=google.maps.event.addListener(t,r,i=>{o(Se(r,t,i))});return()=>a.remove()},[t,r,o])}}function Se(t,e,n){const o={type:t,map:e,detail:{},stoppable:!1,stop:()=>{}};if(we.includes(t)){const a=o,i=e.getCenter(),s=e.getZoom(),u=e.getHeading()||0,f=e.getTilt()||0,d=e.getBounds();return(!i||!d||!Number.isFinite(s))&&console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),a.detail={center:(i==null?void 0:i.toJSON())||{lat:0,lng:0},zoom:s||0,heading:u,tilt:f,bounds:(d==null?void 0:d.toJSON())||{north:90,east:180,south:-90,west:-180}},a}else if(Oe.includes(t)){var r;if(!n)throw new Error("[createEvent] mouse events must provide a srcEvent");const a=o;return a.domEvent=n.domEvent,a.stoppable=!0,a.stop=()=>n.stop(),a.detail={latLng:((r=n.latLng)==null?void 0:r.toJSON())||null,placeId:n.placeId},a}return o}const V={onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onContextmenu:"contextmenu",onDblclick:"dblclick",onDrag:"drag",onDragend:"dragend",onDragstart:"dragstart",onHeadingChanged:"heading_changed",onIdle:"idle",onIsFractionalZoomEnabledChanged:"isfractionalzoomenabled_changed",onMapCapabilitiesChanged:"mapcapabilities_changed",onMapTypeIdChanged:"maptypeid_changed",onMousemove:"mousemove",onMouseout:"mouseout",onMouseover:"mouseover",onProjectionChanged:"projection_changed",onRenderingTypeChanged:"renderingtype_changed",onTilesLoaded:"tilesloaded",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed",onCameraChanged:"bounds_changed"},we=["bounds_changed","center_changed","heading_changed","tilt_changed","zoom_changed"],Oe=["click","contextmenu","dblclick","mousemove","mouseout","mouseover"],ke=Object.keys(V);function Ae(t,e){const n=l.useRef(void 0);(!n.current||!he(e,n.current))&&(n.current=e),l.useEffect(t,n.current)}const Pe=new Set(["backgroundColor","clickableIcons","controlSize","disableDefaultUI","disableDoubleClickZoom","draggable","draggableCursor","draggingCursor","fullscreenControl","fullscreenControlOptions","gestureHandling","headingInteractionEnabled","isFractionalZoomEnabled","keyboardShortcuts","mapTypeControl","mapTypeControlOptions","mapTypeId","maxZoom","minZoom","noClear","panControl","panControlOptions","restriction","rotateControl","rotateControlOptions","scaleControl","scaleControlOptions","scrollwheel","streetView","streetViewControl","streetViewControlOptions","styles","tiltInteractionEnabled","zoomControl","zoomControlOptions"]);function De(t,e){const n={},o=Object.keys(e);for(const r of o)Pe.has(r)&&(n[r]=e[r]);Ae(()=>{t&&t.setOptions(n)},[n])}function W(){var t;return((t=l.useContext(z))==null?void 0:t.status)||S.NOT_LOADED}function Ne(t,e){const{viewport:n,viewState:o}=e,r=!!n;return l.useLayoutEffect(()=>{if(!t||!o)return;const{latitude:a,longitude:i,bearing:s,pitch:u,zoom:f}=o;t.moveCamera({center:{lat:a,lng:i},heading:s,tilt:u,zoom:f+1})},[t,o]),r}function Te(t){return!t||typeof t!="object"||!("lat"in t&&"lng"in t)?!1:Number.isFinite(t.lat)&&Number.isFinite(t.lng)}function Q(t){return Te(t)?t:t.toJSON()}function ze(t,e,n){const o=n.center?Q(n.center):null;let r=null,a=null;o&&Number.isFinite(o.lat)&&Number.isFinite(o.lng)&&(r=o.lat,a=o.lng);const i=Number.isFinite(n.zoom)?n.zoom:null,s=Number.isFinite(n.heading)?n.heading:null,u=Number.isFinite(n.tilt)?n.tilt:null;l.useLayoutEffect(()=>{if(!t)return;const f={};let d=!1;r!==null&&a!==null&&(e.current.center.lat!==r||e.current.center.lng!==a)&&(f.center={lat:r,lng:a},d=!0),i!==null&&e.current.zoom!==i&&(f.zoom=i,d=!0),s!==null&&e.current.heading!==s&&(f.heading=s,d=!0),u!==null&&e.current.tilt!==u&&(f.tilt=u,d=!0),d&&t.moveCamera(f)})}const Fe=()=>{const t={position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:999,display:"flex",flexFlow:"column nowrap",textAlign:"center",justifyContent:"center",fontSize:".8rem",color:"rgba(0,0,0,0.6)",background:"#dddddd",padding:"1rem 1.5rem"};return C.createElement("div",{style:t},C.createElement("h2",null,"Error: AuthFailure"),C.createElement("p",null,"A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",C.createElement("code",null,"APIProvider.apiKey")," prop is correct. Check the error-message in the console for further details."))};function je(){const[t,e]=l.useState(null),n=l.useCallback(o=>e(o),[e]);return[t,n]}function Y(){return W()===S.LOADED}function Re(){const[,t]=l.useReducer(e=>e+1,0);return t}function Be(t,e){const n=t.getCenter(),o=t.getZoom(),r=t.getHeading()||0,a=t.getTilt()||0,i=t.getBounds();(!n||!i||!Number.isFinite(o))&&console.warn("[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),Object.assign(e.current,{center:(n==null?void 0:n.toJSON())||{lat:0,lng:0},zoom:o||0,heading:r,tilt:a})}function Ue(t){const e=Re(),n=l.useRef({center:{lat:0,lng:0},heading:0,tilt:0,zoom:0});return l.useEffect(()=>{if(!t)return;const o=google.maps.event.addListener(t,"bounds_changed",()=>{Be(t,n),e()});return()=>o.remove()},[t,e]),n}const He=["id","defaultBounds","defaultCenter","defaultZoom","defaultHeading","defaultTilt","reuseMaps","renderingType","colorScheme"],Ze=["padding"];class R{static has(e){return this.entries[e]&&this.entries[e].length>0}static pop(e){return this.entries[e]&&this.entries[e].pop()||null}static push(e,n){this.entries[e]||(this.entries[e]=[]),this.entries[e].push(n)}}R.entries={};function $e(t,e){const n=Y(),[o,r]=l.useState(null),[a,i]=je(),s=Ue(o),{id:u,defaultBounds:f,defaultCenter:d,defaultZoom:p,defaultHeading:v,defaultTilt:m,reuseMaps:c,renderingType:h,colorScheme:E}=t,y=N(t,He),x=t.zoom!==void 0||t.defaultZoom!==void 0,w=t.center!==void 0||t.defaultCenter!==void 0;!f&&(!x||!w)&&console.warn("<Map> component is missing configuration. You have to provide zoom and center (via the `zoom`/`defaultZoom` and `center`/`defaultCenter` props) or specify the region to show using `defaultBounds`. See https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required"),!y.center&&d&&(y.center=d),!y.zoom&&Number.isFinite(p)&&(y.zoom=p),!y.heading&&Number.isFinite(v)&&(y.heading=v),!y.tilt&&Number.isFinite(m)&&(y.tilt=m);for(const L of Object.keys(y))y[L]===void 0&&delete y[L];const O=l.useRef(void 0);return l.useEffect(()=>{if(!a||!n)return;const{addMapInstance:L,removeMapInstance:M}=e,{mapId:I}=t,A=`${I||"default"}:${h||"default"}:${E||"LIGHT"}`;let k,b;if(c&&R.has(A)?(b=R.pop(A),k=b.getDiv(),a.appendChild(k),b.setOptions(y),setTimeout(()=>b.setCenter(b.getCenter()),0)):(k=document.createElement("div"),k.style.height="100%",a.appendChild(k),b=new google.maps.Map(k,_({},y,h?{renderingType:h}:{},E?{colorScheme:E}:{}))),r(b),L(b,u),f){const{padding:B}=f,U=N(f,Ze);b.fitBounds(U,B)}else(!x||!w)&&b.fitBounds({east:180,west:-180,south:-90,north:90});if(O.current){const{mapId:B,cameraState:U}=O.current;B!==I&&b.setOptions(U)}return()=>{O.current={mapId:I,cameraState:s.current},k.remove(),c?R.push(A,b):google.maps.event.clearInstanceListeners(b),r(null),M(u)}},[a,n,u,t.mapId,t.renderingType,t.colorScheme]),[o,i,s]}const X=C.createContext(null),ee=t=>{const{children:e,id:n,className:o,style:r}=t,a=l.useContext(z),i=W();if(!a)throw new Error("<Map> can only be used inside an <ApiProvider> component.");const[s,u,f]=$e(t,a);ze(s,f,t),Ie(s,t),De(s,t);const d=Ne(s,t),p=!!t.controlled;l.useEffect(()=>{if(s)return d&&s.setOptions({disableDefaultUI:!0}),(d||p)&&s.setOptions({gestureHandling:"none",keyboardShortcuts:!1}),()=>{s.setOptions({gestureHandling:t.gestureHandling,keyboardShortcuts:t.keyboardShortcuts})}},[s,d,p,t.gestureHandling,t.keyboardShortcuts]);const v=t.center?Q(t.center):null;let m=null,c=null;v&&Number.isFinite(v.lat)&&Number.isFinite(v.lng)&&(m=v.lat,c=v.lng);const h=l.useMemo(()=>{var x,w,O,L,M;return{center:{lat:(x=m)!=null?x:0,lng:(w=c)!=null?w:0},zoom:(O=t.zoom)!=null?O:0,heading:(L=t.heading)!=null?L:0,tilt:(M=t.tilt)!=null?M:0}},[m,c,t.zoom,t.heading,t.tilt]);l.useLayoutEffect(()=>{if(!s||!p)return;s.moveCamera(h);const x=s.addListener("bounds_changed",()=>{s.moveCamera(h)});return()=>x.remove()},[s,p,h]);const E=l.useMemo(()=>_({width:"100%",height:"100%",position:"relative",zIndex:d?-1:0},r),[r,d]),y=l.useMemo(()=>({map:s}),[s]);return i===S.AUTH_FAILURE?C.createElement("div",{style:_({position:"relative"},o?{}:E),className:o},C.createElement(Fe,null)):C.createElement("div",_({ref:u,"data-testid":"map",style:o?void 0:E,className:o},n?{id:n}:{}),s?C.createElement(X.Provider,{value:y},e):null)};ee.deckGLViewProps=!0;const G=new Set;function $(...t){const e=JSON.stringify(t);G.has(e)||(G.add(e),console.error(...t))}const te=(t=null)=>{const e=l.useContext(z),{map:n}=l.useContext(X)||{};if(e===null)return $("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."),null;const{mapInstances:o}=e;return t!==null?o[t]||null:n||o.default||null};function qe(t){const e=Y(),n=l.useContext(z);return l.useEffect(()=>{!e||!n||n.importLibrary(t)},[e,n,t]),(n==null?void 0:n.loadedLibraries[t])||null}function F(t,e,n){l.useEffect(()=>{if(!t||!e||!n)return;const o=google.maps.event.addListener(t,e,n);return()=>o.remove()},[t,e,n])}function j(t,e,n){l.useEffect(()=>{t&&(t[e]=n)},[t,e,n])}function J(t,e,n){l.useEffect(()=>{if(!(!t||!e||!n))return t.addEventListener(e,n),()=>t.removeEventListener(e,n)},[t,e,n])}function Ge(t){return t.nodeType===Node.ELEMENT_NODE}const ne=C.createContext(null),Je={BOTTOM:["50%","100%"]},Ke=({children:t,styles:e,className:n,anchorPoint:o})=>{const[r,a]=o??Je.BOTTOM;let i=`-${r}`,s=`-${a}`;r.trimStart().startsWith("-")&&(i=r.substring(1)),a.trimStart().startsWith("-")&&(s=a.substring(1));const u=`translate(50%, 100%) translate(${i}, ${s})`;return C.createElement("div",{style:{transform:u}},C.createElement("div",{className:n,style:e},t))};function Ve(t){const[e,n]=l.useState(null),[o,r]=l.useState(null),a=te(),i=qe("marker"),{children:s,onClick:u,className:f,onMouseEnter:d,onMouseLeave:p,onDrag:v,onDragStart:m,onDragEnd:c,collisionBehavior:h,clickable:E,draggable:y,position:x,title:w,zIndex:O}=t,L=l.Children.count(s);return l.useEffect(()=>{if(!a||!i)return;const M=new i.AdvancedMarkerElement;M.map=a,n(M);let I=null;return L>0&&(I=document.createElement("div"),I.isCustomMarker=!0,M.content=I,r(I)),()=>{var A;M.map=null,(A=I)==null||A.remove(),n(null),r(null)}},[a,i,L]),l.useEffect(()=>{!e||!e.content||L>0||(e.content.className=f||"")},[e,f,L]),j(e,"position",x),j(e,"title",w??""),j(e,"zIndex",O),j(e,"collisionBehavior",h),l.useEffect(()=>{e&&(y!==void 0?e.gmpDraggable=y:v||m||c?e.gmpDraggable=!0:e.gmpDraggable=!1)},[e,y,v,c,m]),l.useEffect(()=>{if(!e)return;const M=E!==void 0||!!u||!!d||!!p;e.gmpClickable=M,M&&e!=null&&e.content&&Ge(e.content)&&(e.content.style.pointerEvents="none",e.content.firstElementChild&&(e.content.firstElementChild.style.pointerEvents="all"))},[e,E,u,d,p]),F(e,"click",u),F(e,"drag",v),F(e,"dragstart",m),F(e,"dragend",c),J(e==null?void 0:e.element,"mouseenter",d),J(e==null?void 0:e.element,"mouseleave",p),[e,o]}const We=l.forwardRef((t,e)=>{const{children:n,style:o,className:r,anchorPoint:a}=t,[i,s]=Ve(t),u=l.useMemo(()=>i?{marker:i}:null,[i]);return l.useImperativeHandle(e,()=>i,[i]),s?C.createElement(ne.Provider,{value:u},K.createPortal(C.createElement(Ke,{anchorPoint:a,styles:o,className:r},n),s)):null}),Qe=["onClick","onDrag","onDragStart","onDragEnd","onMouseOver","onMouseOut"];function Ye(t){const[e,n]=l.useState(null),o=te(),{onClick:r,onDrag:a,onDragStart:i,onDragEnd:s,onMouseOver:u,onMouseOut:f}=t,d=N(t,Qe),{position:p,draggable:v}=d;return l.useEffect(()=>{if(!o){o===void 0&&console.error("<Marker> has to be inside a Map component.");return}const m=new google.maps.Marker(d);return m.setMap(o),n(m),()=>{m.setMap(null),n(null)}},[o]),l.useEffect(()=>{if(!e)return;const m=e,c=google.maps.event;return r&&c.addListener(m,"click",r),a&&c.addListener(m,"drag",a),i&&c.addListener(m,"dragstart",i),s&&c.addListener(m,"dragend",s),u&&c.addListener(m,"mouseover",u),f&&c.addListener(m,"mouseout",f),e.setDraggable(!!v),()=>{c.clearInstanceListeners(m)}},[e,v,r,a,i,s,u,f]),l.useEffect(()=>{e&&d&&e.setOptions(d)},[e,d]),l.useEffect(()=>{v||!p||!e||e.setPosition(p)},[v,p,e]),e}l.forwardRef((t,e)=>{const n=Ye(t);return l.useImperativeHandle(e,()=>n,[n]),C.createElement(C.Fragment,null)});const Xe=t=>{var e;const n=(e=l.useContext(ne))==null?void 0:e.marker,o=l.useMemo(()=>document.createElement("div"),[]);return l.useEffect(()=>{var r;if(!n){n===void 0&&console.error("The <Pin> component can only be used inside <AdvancedMarker>.");return}t.glyph&&t.children&&$("The <Pin> component only uses children to render the glyph if both the glyph property and children are present."),l.Children.count(t.children)>1&&$("Passing multiple children to the <Pin> component might lead to unexpected results.");const a=_({},t),i=new google.maps.marker.PinElement(a);t.children&&(i.glyph=o);const s=(r=n.content)==null||(r=r.firstChild)==null?void 0:r.firstChild;for(;s!=null&&s.firstChild;)s.removeChild(s.firstChild);s&&s.appendChild(i.element)},[n,o,t]),K.createPortal(t.children,o)},et=[{key:"Qendra Zayed",location:{lat:41.31898837813951,lng:19.8134019186025}},{key:"Bulevardi i Ri",location:{lat:41.336523,lng:19.81604}},{key:"Parku Rinia",location:{lat:41.325368521723156,lng:19.818217623222463}}],tt=()=>g.jsx(g.Fragment,{children:et.map(t=>g.jsx(We,{position:t.location,children:g.jsx(Xe,{background:"#FBBC04",glyphColor:"#000",borderColor:"#000"})},t.key))}),oe="AIzaSyCt0D7tLczHFeW5OS2wfEN06QQmr2gUos8",re="f252c37648efef00";console.log("apiKey, mapId",oe,re);const nt=()=>{const t={lat:41.32736053942958,lng:19.818195097218243};return g.jsx(g.Fragment,{children:g.jsx(xe,{apiKey:oe,onLoad:()=>console.log("Maps API has loaded."),children:g.jsx(ee,{defaultZoom:13,mapId:re,defaultCenter:t,onCameraChanged:e=>console.log("camera changed:",e.detail.center,"zoom:",e.detail.zoom),children:g.jsx(tt,{})})})})},ot="_mapContainer_pjtnx_1",rt={mapContainer:ot},at=()=>g.jsx("div",{id:"outer-cont",className:rt.mapContainer,children:g.jsx(nt,{})}),st="_contact_1t491_1",it={contact:st},Mt=()=>g.jsxs("div",{id:"contact",className:it.contact,children:[g.jsx(me,{}),g.jsx(at,{})]});export{Mt as default};
