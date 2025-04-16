import{r as f,az as F,aA as M}from"./index-Cxn_-gMb.js";const U=(e,s,n,a)=>{var t,d,h,p;const o=[n,{code:s,...a||{}}];if((d=(t=e==null?void 0:e.services)==null?void 0:t.logger)!=null&&d.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);m(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(p=(h=e==null?void 0:e.services)==null?void 0:h.logger)!=null&&p.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},A={},E=(e,s,n,a)=>{m(n)&&A[n]||(m(n)&&(A[n]=new Date),U(e,s,n,a))},P=(e,s)=>()=>{if(e.isInitialized)s();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),s()};e.on("initialized",n)}},C=(e,s,n)=>{e.loadNamespaces(s,P(e,n))},L=(e,s,n,a)=>{if(m(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(s)>-1)return C(e,n,a);n.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(s,P(e,a))},_=(e,s,n={})=>!s.languages||!s.languages.length?(E(s,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:s.languages}),!0):s.hasLoadedNamespace(e,{lng:n.lng,precheck:(a,o)=>{var t;if(((t=n.bindI18n)==null?void 0:t.indexOf("languageChanging"))>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!o(a.isLanguageChangingTo,e))return!1}}),m=e=>typeof e=="string",G=e=>typeof e=="object"&&e!==null,$=f.createContext();class J{constructor(){this.usedNamespaces={}}addUsedNamespaces(s){s.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const W=(e,s)=>{const n=f.useRef();return f.useEffect(()=>{n.current=e},[e,s]),n.current},j=(e,s,n,a)=>e.getFixedT(s,n,a),X=(e,s,n,a)=>f.useCallback(j(e,s,n,a),[e,s,n,a]),q=(e,s={})=>{var I,O,R,v;const{i18n:n}=s,{i18n:a,defaultNS:o}=f.useContext($)||{},t=n||a||F();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new J),!t){E(t,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const i=(u,l)=>m(l)?l:G(l)&&m(l.defaultValue)?l.defaultValue:Array.isArray(u)?u[u.length-1]:u,c=[i,{},!1];return c.t=i,c.i18n={},c.ready=!1,c}(I=t.options.react)!=null&&I.wait&&E(t,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const d={...M(),...t.options.react,...s},{useSuspense:h,keyPrefix:p}=d;let r=o||((O=t.options)==null?void 0:O.defaultNS);r=m(r)?[r]:r||["translation"],(v=(R=t.reportNamespaces).addUsedNamespaces)==null||v.call(R,r);const g=(t.isInitialized||t.initializedStoreOnce)&&r.every(i=>_(i,t,d)),k=X(t,s.lng||null,d.nsMode==="fallback"?r:r[0],p),S=()=>k,x=()=>j(t,s.lng||null,d.nsMode==="fallback"?r:r[0],p),[b,w]=f.useState(S);let y=r.join();s.lng&&(y=`${s.lng}${y}`);const z=W(y),N=f.useRef(!0);f.useEffect(()=>{const{bindI18n:i,bindI18nStore:c}=d;N.current=!0,!g&&!h&&(s.lng?L(t,s.lng,r,()=>{N.current&&w(x)}):C(t,r,()=>{N.current&&w(x)})),g&&z&&z!==y&&N.current&&w(x);const u=()=>{N.current&&w(x)};return i&&(t==null||t.on(i,u)),c&&(t==null||t.store.on(c,u)),()=>{N.current=!1,t&&(i==null||i.split(" ").forEach(l=>t.off(l,u))),c&&t&&c.split(" ").forEach(l=>t.store.off(l,u))}},[t,y]),f.useEffect(()=>{N.current&&g&&w(S)},[t,p,g]);const T=[b,t,g];if(T.t=b,T.i18n=t,T.ready=g,g||!g&&!h)return T;throw new Promise(i=>{s.lng?L(t,s.lng,r,()=>i()):C(t,r,()=>i())})};export{q as u};
