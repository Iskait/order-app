(function(){"use strict";var e={2970:function(e,t,o){var n=o(9242),i=o(3396);const r={class:"min-h-full flex flex-col justify-center items-between relative overflow-hidden"};function l(e,t,o,l,s,a){const u=(0,i.up)("order"),c=(0,i.up)("send-form"),d=(0,i.up)("response-popup");return(0,i.wg)(),(0,i.iD)("div",r,[e.showInitForm?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(n.uT,{name:"fade"},{default:(0,i.w5)((()=>[e.isVisible?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:0}))])),_:1}),(0,i.Wm)(n.uT,{name:"slide-down"},{default:(0,i.w5)((()=>[e.isVisible?((0,i.wg)(),(0,i.j4)(c,{key:0})):(0,i.kq)("",!0)])),_:1})],64)):(0,i.kq)("",!0),e.showInitForm?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(d,{key:1}))])}var s=o(65),a=o(7139);const u={class:"flex justify-around"};function c(e,t,o,r,l,s){const c=(0,i.up)("order-button");return(0,i.wg)(),(0,i.j4)(n.uT,{name:"slide-fade"},{default:(0,i.w5)((()=>[(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.cities,((e,t)=>((0,i.wg)(),(0,i.j4)(c,{onClick:e=>s.takeOrder(t)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e),1)])),_:2},1032,["onClick"])))),256))])])),_:1})}const d={class:"border-black rounded-lg border p-3 bg-cyan-900 sm:text-2xl text-base m-2"},p=(0,i.Uk)(" Заказать в ");function m(e,t){return(0,i.wg)(),(0,i.iD)("button",d,[p,(0,i.WI)(e.$slots,"default")])}var f=o(89);const h={},v=(0,f.Z)(h,[["render",m]]);var b=v,g={components:{OrderButton:b},data(){return{cities:["Москву","Санкт-Петербург"]}},methods:{...(0,s.OI)(["setVisibleForm","chooseCity"]),takeOrder(e){this.setVisibleForm(),this.chooseCity(e+1)}}};const w=(0,f.Z)(g,[["render",c]]);var y=w;const k={class:"flex items-center absolute right-0 left-0 top-0 bottom-0"},x=(0,i._)("p",{class:"p-2 text-center text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 w-full"},[(0,i.Uk)(" Оставьте данные для "),(0,i._)("br"),(0,i.Uk)(" заказа ")],-1),C={class:"w-2/3 relative"},F=["placeholder","value"],_={key:0,class:"text-red-700 absolute top-2 right-2"},D=(0,i._)("button",{class:"bg-blue-500 w-2/6 p-3 rounded-lg text-lg",type:"submit"}," Оформить заказ ",-1);function O(e,t,o,r,l,s){const a=(0,i.up)("Cities"),u=(0,i.up)("input-data"),c=(0,i.Q2)("imask");return(0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("form",{onSubmit:t[2]||(t[2]=(0,n.iM)(((...e)=>s.send&&s.send(...e)),["prevent"])),class:"h-[400px] pb-8 mx-auto my-auto border-2 border-black rounded-md flex flex-col items-center justify-between w-2/5 bg-slate-300"},[x,(0,i.Wm)(a),(0,i.Wm)(u,{field:l.name},null,8,["field"]),(0,i.Wm)(u,{field:l.email},null,8,["field"]),(0,i._)("div",C,[(0,i.wy)((0,i._)("input",{class:"p-2 rounded-md w-full",type:"text",placeholder:l.phone.placeholder,value:l.phone.value,onAccept:t[0]||(t[0]=(...e)=>s.onAccept&&s.onAccept(...e)),onComplete:t[1]||(t[1]=(...e)=>s.onComplete&&s.onComplete(...e))},null,40,F),[[c,l.mask]]),l.phone.filled?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("p",_,"Заполните это поле"))]),D],32),(0,i._)("button",{onClick:t[3]||(t[3]=(...t)=>e.setVisibleForm&&e.setVisibleForm(...t)),class:"absolute top-2 right-5 font-extrabold text-6xl"},"✕")])}var j=o(2804),I=o(6265),V=o.n(I);const P=async({name:e,city_id:t,email:o,phone:n})=>V()({method:"post",url:"http://hh.autodrive-agency.ru/test-tasks/front/task-7/",data:{name:e,email:o,phone:n,city_id:t}});var T=P;const q=(e,t,o)=>(e.value||(e.filled=!1),t.value||(t.filled=!1),18!==o.value.length&&(o.filled=!1),setTimeout((()=>{[e,t,o].forEach((e=>e.filled=!0))}),3e3),e.value&&t.value&&18===o.value.length);var Z=q;const A=(...e)=>{e.forEach((e=>e.value=""))};var H=A;const W={class:"flex flex-row"},M=(0,i._)("p",{class:"mr-3 text-lg font-bold"},"Ваш город: ",-1),R=["value","selected"];function U(e,t,o,n,r,l){return(0,i.wg)(),(0,i.iD)("div",W,[M,(0,i._)("select",{onChange:t[0]||(t[0]=t=>e.chooseCity(+t.target.value))},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.cities,(t=>((0,i.wg)(),(0,i.iD)("option",{key:t.id,value:t.id,selected:t.id===e.selectedCity},(0,a.zw)(t.name),9,R)))),128))],32)])}var B={computed:{...(0,s.rn)({selectedCity:e=>e.initPopup.selectedCity,cities:e=>e.initPopup.cities})},methods:{...(0,s.OI)(["chooseCity"])}};const Y=(0,f.Z)(B,[["render",U]]);var z=Y;const E={class:"w-2/3 relative"},S=["placeholder"],K={key:0,class:"text-red-700 absolute top-2 right-2"};function L(e,t,o,r,l,s){return(0,i.wg)(),(0,i.iD)("div",E,[(0,i.wy)((0,i._)("input",{class:"p-2 rounded-md w-full",placeholder:o.field.placeholder,"onUpdate:modelValue":t[0]||(t[0]=e=>o.field.value=e)},null,8,S),[[n.nr,o.field.value]]),o.field.filled?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("p",K,"Заполните это поле"))])}var Q={props:["field"]};const $=(0,f.Z)(Q,[["render",L]]);var G=$,J={components:{Cities:z,InputData:G},setup(){return{useSendData:T,useRequiredFields:Z,useClear:H}},data(){return{name:{placeholder:"Введите ваше имя",value:"",filled:!0},email:{placeholder:"Введите ваш email",value:"",filled:!0},phone:{placeholder:"Введите ваш номер телефона",value:"",filled:!0},mask:{mask:"{+7} (000) 000-00-00",lazy:!0}}},computed:{...(0,s.rn)({selectedCity:e=>e.initPopup.selectedCity})},methods:{...(0,s.OI)(["setVisibleForm","getResponseData","toggleForms"]),onAccept(e){const t=e.detail;this.phone.value=t.value},onComplete(e){e.detail},send(){Z(this.name,this.email,this.phone)&&(T({name:this.name.value,phone:this.phone.value.replace(/[() -]/g,""),email:this.email.value,city_id:this.selectedCity}).then((e=>this.getResponseData(e.data))),H(this.name,this.email,this.phone),this.toggleForms())}},directives:{imask:j.An}};const N=(0,f.Z)(J,[["render",O]]);var X=N;const ee={class:"self-center border-black border p-4 rounded-md"},te=["innerHTML"];function oe(e,t,o,n,r,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",ee,[(0,i._)("span",{innerHTML:e.reponseData,class:"text-center"},null,8,te)]),(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>l.toggleBack&&l.toggleBack(...e)),class:"absolute top-2 right-5 font-extrabold text-6xl"}," ✕ ")],64)}var ne={computed:{...(0,s.rn)({reponseData:e=>e.responsePopup.responseData})},methods:{...(0,s.OI)(["toggleForms","setVisibleForm"]),toggleBack(){this.toggleForms(),this.setVisibleForm()}}};const ie=(0,f.Z)(ne,[["render",oe]]);var re=ie,le={name:"App",components:{Order:y,SendForm:X,ResponsePopup:re},computed:{...(0,s.rn)({isVisible:e=>e.initPopup.visibleForm,showInitForm:e=>e.showInitForm})}};const se=(0,f.Z)(le,[["render",l]]);var ae=se;const ue={state:()=>({visibleForm:!1,selectedCity:1,cities:[{id:1,name:"Москва"},{id:2,name:"Санкт-Петербург"},{id:3,name:"Казань"}]}),mutations:{setVisibleForm(e){e.visibleForm=!e.visibleForm},chooseCity(e,t){e.selectedCity=t}}},ce={state:()=>({responseData:""}),mutations:{getResponseData(e,t){e.responseData=t}}};var de=(0,s.MT)({state:()=>({showInitForm:!0}),mutations:{toggleForms:e=>{e.showInitForm=!e.showInitForm}},modules:{initPopup:ue,responsePopup:ce}});const pe=(0,n.ri)(ae);pe.use(de).mount("#app")}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,r){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],r=e[c][2];for(var s=!0,a=0;a<n.length;a++)(!1&r||l>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(s=!1,r<l&&(l=r));if(s){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,i,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,l=n[0],s=n[1],a=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(a)var c=a(o)}for(t&&t(n);u<l.length;u++)r=l[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self["webpackChunkorder_app"]=self["webpackChunkorder_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(2970)}));n=o.O(n)})();
//# sourceMappingURL=app.cb5393e5.js.map