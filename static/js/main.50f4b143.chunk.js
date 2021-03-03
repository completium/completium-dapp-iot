(this["webpackJsonpcompletium-dapp-iot"]=this["webpackJsonpcompletium-dapp-iot"]||[]).push([[0],{152:function(e,t,n){},158:function(e,t){},160:function(e,t){},228:function(e,t){},230:function(e,t){},243:function(e,t){},245:function(e,t){},267:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),i=n.n(a),o=n(16),r=n.n(o),s=(n(67),n(23)),l=n.n(s),j=n(34),d=n(15),h=(n(152),"KT19ZQUnVrDT5xnfvPqYhn1DeM489875oWGU"),u="https://edonet-tezos.giganode.io/",b="IotCorp.",x=n(305),p=n(306),f=n(136),m=n(304),O=n(307),g=n(123),y=n(81),w=Object(g.a)((function(e){var t=e.appName,n=i.a.useState((function(){return{wallet:null,tezos:null,accountPkh:null}})),c=Object(d.a)(n,2),a=c[0],o=a.wallet,r=a.tezos,s=a.accountPkh,h=c[1],u=Boolean(r);i.a.useEffect((function(){return y.a.onAvailabilityChange((function(e){h({wallet:e?new y.a(t):null,tezos:null,accountPkh:null})}))}),[h,t]);var b=i.a.useCallback(function(){var e=Object(j.a)(l.a.mark((function e(t,n){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o){e.next=3;break}throw new Error("Thanos Wallet not available");case 3:return e.next=5,o.connect(t,n);case 5:return c=o.toTezos(),e.next=8,c.wallet.pkh();case 8:a=e.sent,h({wallet:o,tezos:c,accountPkh:a}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert("Failed to connect ThanosWallet: ".concat(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),[h,o]);return{wallet:o,tezos:r,accountPkh:s,ready:u,connect:b}}),(function(e){return e.wallet}),(function(e){return e.tezos}),(function(e){return e.accountPkh}),(function(e){return e.ready}),(function(e){return e.connect})),v=Object(d.a)(w,6),k=v[0],S=v[1],C=v[2],T=v[3],B=v[4],D=v[5];var I=n(301),z=n(303),A=function(e){var t=B(),n=S();return t?Object(c.jsx)("div",{}):n?Object(c.jsx)(I.a,{variant:"contained",color:"secondary",disableElevation:!0,size:"small",style:{position:"absolute",right:"90px"},onClick:e.handleConnect,children:"connect to wallet"}):Object(c.jsx)(z.a,{href:"https://thanoswallet.com/",rel:"noopener",underline:"none",style:{position:"absolute",right:"1%"},children:Object(c.jsx)(I.a,{variant:"contained",size:"small",disableElevation:!0,style:{backgroundColor:"#ed8936",color:"white",fontWeight:"bold"},children:"Install Thanos"})})},P=n(126),F=n.n(P),E=function(e){var t=Object(m.a)("(min-width:600px)")?"visible":"hidden",n="dark"===e.theme.palette.type;return Object(c.jsx)(x.a,{position:"static",color:n?"default":"secondary",style:{boxShadow:"none",opacity:1},children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)("a",{href:"https://edukera.github.io/completium-landing/index.html",target:"_blank",style:{color:"white",height:"32px"},children:Object(c.jsx)(f.a,{variant:"h6",style:{position:"absolute",fontFamily:"Alegreya Sans SC, sans-serif"},children:"Completium"})}),Object(c.jsx)(O.a,{container:!0,justify:"center",alignItems:"center",children:Object(c.jsx)(O.a,{item:!0,children:Object(c.jsx)(f.a,{variant:"h6",style:{visibility:t,textAlign:"center"},children:e.appTitle})})}),e.istouch?Object(c.jsx)("div",{}):Object(c.jsx)(A,{handleConnect:e.handleConnect}),Object(c.jsx)("a",{href:"https://edukera.github.io/completium-landing/docs/dapp-iot/presentation",target:"_blank",children:Object(c.jsx)(I.a,{style:{color:"white"},component:"span",children:Object(c.jsx)(F.a,{})})})]})})},M=n(134),L=n(315),W=n(316),R=n(308),Z=n(321),N=n(128),X=n.n(N),H=function(e){var t=e.switch.dateofstop>Date.now()?"on":"off";return i.a.useEffect((function(){var t=setTimeout((function(){e.loadSwitchContent()}),500);return function(){clearTimeout(t)}})),Object(c.jsx)(R.a,{maxWidth:"md",style:{marginTop:50,backgroundImage:"url(/completium-dapp-iot/bulb"+t+".svg)",backgroundRepeat:"no-repeat",backgroundPosition:"right 50% top 10%",height:410},children:Object(c.jsx)(O.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{},children:Object(c.jsx)(O.a,{children:Object(c.jsx)(Z.a,{label:h,color:"secondary",onDelete:function(){},deleteIcon:Object(c.jsx)(X.a,{}),variant:"outlined",style:{marginTop:350}})})})})},q=n(9),G=function(e){var t;return Object(c.jsx)(x.a,{position:"static",color:"default",style:{boxShadow:"none",opacity:1,heigh:300},children:Object(c.jsx)(p.a,{style:{minHeight:256},children:Object(c.jsx)(O.a,{container:!0,justify:"center",alignItems:"center",children:Object(c.jsx)(O.a,{item:!0,children:Object(c.jsxs)(f.a,(t={variant:"body2",color:"textSecondary",style:{flexGrow:1}},Object(q.a)(t,"style",{textAlign:"center"}),Object(q.a)(t,"children",["@copyright ",e.appName," 2021"]),t))})})})})},J=n(269),Q=n(312),U=n(313),V=n(314),_=n(131),K=n.n(_),Y=n(132),$=n.n(Y),ee=n(130),te=n.n(ee),ne=n(320),ce=n(317),ae=n(309),ie=n(310),oe=n(129),re=n.n(oe),se=function(e){return Object(c.jsxs)(ce.a,{open:e.open,onClick:e.close,children:[Object(c.jsx)(ae.a,{children:"Scan Object's QR code"}),Object(c.jsx)(ie.a,{style:{paddingBottom:20},children:Object(c.jsx)(re.a,{value:e.url,size:300,includeMargin:!1,bgColor:e.theme.palette.background.paper,fgColor:"light"===e.theme.palette.type?e.theme.palette.common.black:e.theme.palette.common.white})})]})},le=n(311),je=function(e){var t=T(),n=C(),a=i.a.useCallback(Object(j.a)(l.a.mark((function c(){var a;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,n.tz.getBalance(t);case 2:a=c.sent,e.setBalance(n.format("mutez","tz",a).toString());case 4:case"end":return c.stop()}}),c)}))),[n,t,e.setBalance]);return null===e.balance&&a(),Object(c.jsxs)(R.a,{style:{height:"300px"},children:[Object(c.jsx)(R.a,{style:{height:"40px"}}),Object(c.jsx)(J.a,{style:{opacity:.8,paddingLeft:18,paddingRight:28},children:Object(c.jsxs)(O.a,{container:!0,direction:"row",alignItems:"center",spacing:2,children:[Object(c.jsx)(O.a,{item:!0,xs:2,direction:"row",children:Object(c.jsx)(f.a,{color:"textSecondary",style:{textAlign:"right"},children:"Account :"})}),Object(c.jsx)(O.a,{item:!0,xs:4,children:Object(c.jsx)(f.a,{style:{fontFamily:"Courier Prime, monospace"},children:t})}),Object(c.jsx)(O.a,{item:!0,xs:6,children:Object(c.jsxs)(O.a,{container:!0,direction:"row",justify:"flex-end",spacing:2,children:[Object(c.jsx)(O.a,{item:!0,children:Object(c.jsx)(f.a,{color:"textSecondary",children:"Balance:"})}),null===e.balance?Object(c.jsx)(le.a,{color:"secondary"}):Object(c.jsx)(O.a,{item:!0,children:Object(c.jsxs)(f.a,{children:[e.balance," XTZ"]})})]})})]})})]})},de=n(26),he=function(e,t){var n=2*e%2;return Math.floor(e).toString()+(0===n?"":"\xbd")},ue=function(e){var t=C(),n=Object(a.useState)(0),i=Object(d.a)(n,2),o=i[0],r=i[1],s=Object(a.useState)(!1),l=Object(d.a)(s,2),j=l[0],u=l[1];return Object(c.jsxs)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,style:{padding:12,paddingLeft:20,marginTop:40},children:[Object(c.jsx)(O.a,{item:!0,xs:1,children:Object(c.jsx)(te.a,{})}),Object(c.jsx)(O.a,{item:!0,xs:11,style:{paddingRight:30},children:Object(c.jsx)(ne.a,{defaultValue:0,"aria-labelledby":"discrete-slider-small-steps",step:.5,marks:!0,min:0,max:15,valueLabelDisplay:"on",color:"secondary",onChangeCommitted:function(e){r(e.target.innerText)},disabled:j})}),Object(c.jsx)(O.a,{item:!0,xs:12,style:{textAlign:"center",marginTop:0},children:Object(c.jsxs)(f.a,{color:"textSecondary",children:["Price for ",he(o)," minute(s):"]})}),Object(c.jsx)(O.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(c.jsxs)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(c.jsx)(O.a,{item:!0,children:Object(c.jsx)(f.a,{variant:"h6",children:(e.switch.rate*o).toFixed(2)})}),Object(c.jsx)(O.a,{item:!0,children:Object(c.jsx)(f.a,{color:"textSecondary",style:{marginLeft:10},children:"XTZ"})})]})}),Object(c.jsx)(O.a,{item:!0,style:{marginBottom:20,marginTop:36},children:Object(c.jsx)(I.a,{variant:"contained",color:"secondary",disableElevation:!0,onClick:function(n){t.wallet.at(h).then((function(t){var n=(e.switch.rate*o).toFixed(6);console.log("calling start with ".concat(n," XTZ")),t.methods.start(de.b).send({amount:n,fee:"0.1"}).then((function(t){Date.now();console.log("waiting for ".concat(t.opHash," to be confirmed")),u(!0),e.openSnack(),t.receipt().then((function(){u(!1),e.closeSnack(),e.resetBalance(),e.loadSwitchContent()}))}))}))},disabled:j,children:"switch on"})})]})},be=function(e){var t={};return e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},xe=function(e){var t=C(),n=Object(a.useState)(be(e.dateofstop-Date.now())),i=Object(d.a)(n,2),o=i[0],r=i[1],s=Object(a.useState)(!1),l=Object(d.a)(s,2),j=l[0],u=l[1];Object(a.useEffect)((function(){var t=setTimeout((function(){r(be(e.dateofstop-Date.now()))}),1e3);return function(){clearTimeout(t)}}));var b=Math.floor(100*(Date.now()-e.dateofstart)/(e.dateofstop-e.dateofstart)),x=[];Object.keys(o).forEach((function(e){o[e]&&x.push(Object(c.jsxs)("span",{children:[o[e]," ",e," "]}))}));if(0===x.length){var p=Date.now();e.setBCSwitch({dateofstart:p,dateofstop:p,rate:e.switch.rate,user:e.switch.user})}return Object(c.jsxs)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,style:{padding:12,paddingLeft:20,marginTop:0},children:[Object(c.jsxs)(O.a,{item:!0,xs:12,style:{textAlign:"center"},children:[Object(c.jsx)(Q.a,{style:{position:"relative",left:"50px"},variant:"static",value:"100",size:100,thickness:5,color:"primary"}),Object(c.jsx)(Q.a,{style:{position:"relative",left:"-50px"},variant:"static",value:b,size:100,thickness:5,color:"secondary"}),Object(c.jsxs)(f.a,{variant:"h6",color:"secondary",style:{position:"relative",top:"-70px",left:"5px"},children:[b,"%"]})]}),Object(c.jsx)(O.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(c.jsxs)(f.a,{children:["Time remaining: ",x.length?x:Object(c.jsx)("span",{children:"Time's up!"})]})}),Object(c.jsx)(O.a,{item:!0,children:Object(c.jsx)(I.a,{style:{margin:20},variant:"outlined",color:"inherit",disableElevation:!0,onClick:function(){t.wallet.at(h).then((function(t){t.methods.interrupt(de.b).send().then((function(t){var n=Date.now();console.log("waiting for ".concat(t.opHash," to be confirmed")),u(!0),e.openSnack(),t.receipt().then((function(){u(!1),e.closeSnack(),e.resetBalance(),e.setBCSwitch({dateofstart:n,dateofstop:n,rate:e.switch.rate,user:e.switch.user})}))}))}))},disabled:j,children:"interrupt"})})]})},pe=function(e){var t=Object(a.useState)(be(e.dateofstop-Date.now())),n=Object(d.a)(t,2),i=n[0],o=n[1];Object(a.useEffect)((function(){var t=setTimeout((function(){o(be(e.dateofstop-Date.now()))}),1e3);return function(){clearTimeout(t)}}));var r=[];Object.keys(i).forEach((function(e){i[e]&&r.push(Object(c.jsxs)("span",{children:[i[e]," ",e," "]}))}));return 0===r.length&&function(){var t=Date.now();e.setBCSwitch({dateofstart:t,dateofstop:t,rate:e.switch.rate,user:e.switch.user})}(),Object(c.jsx)(R.a,{style:{height:301},children:Object(c.jsxs)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,style:{padding:12,paddingLeft:20,marginTop:0},children:[Object(c.jsx)(O.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(c.jsx)(f.a,{color:"textSecondary",children:"Object has been switched on by:"})}),Object(c.jsx)(O.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(c.jsx)(f.a,{style:{fontFamily:"Courier Prime, monospace"},children:e.user})}),Object(c.jsx)(O.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(c.jsxs)(f.a,{color:"textSecondary",children:["Time remaining: ",r.length?r:Object(c.jsx)("span",{children:"Time's up!"})]})}),Object(c.jsx)(O.a,{item:!0})]})})},fe=function(e){return Object(c.jsx)(R.a,{style:{height:301,backgroundImage:"url(/completium-dapp-iot/wifiplug.svg)",backgroundRepeat:"no-repeat",backgroundPosition:"right 50% top 50%"},children:Object(c.jsx)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{height:301},children:Object(c.jsx)(f.a,{color:"textSecondary",children:"Connect to Wallet to interact with object."})})})},me=function(e){var t=B(),n=T(),a=i.a.useState(!1),o=Object(d.a)(a,2),r=o[0],s=o[1],l=i.a.useState(null),j=Object(d.a)(l,2),u=j[0],x=j[1],p=function(){x(null)},m=e.switch.dateofstop-e.switch.dateofstart,g=e.switch.dateofstop>Date.now()&&m>0;return Object(c.jsxs)("div",{children:[Object(c.jsx)(R.a,{maxWidth:"md",style:{height:120},children:t?Object(c.jsx)(je,{balance:u,setBalance:x}):Object(c.jsx)("div",{})}),Object(c.jsx)(R.a,{maxWidth:"sm",style:{marginBottom:150},children:Object(c.jsxs)(J.a,{children:[Object(c.jsxs)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,style:{padding:12,paddingLeft:20},children:[Object(c.jsx)(O.a,{item:!0,xs:1,children:Object(c.jsx)(K.a,{})}),Object(c.jsx)(O.a,{item:!0,xs:11,children:Object(c.jsx)(f.a,{style:{fontFamily:"Courier Prime, monospace"},children:h})}),Object(c.jsx)(O.a,{item:!0,xs:1,children:Object(c.jsx)($.a,{})}),Object(c.jsx)(O.a,{item:!0,xs:11,children:Object(c.jsxs)(O.a,{container:!0,direction:"row",spacing:1,children:[Object(c.jsx)(O.a,{item:!0,children:Object(c.jsx)(f.a,{children:e.switch.rate.toFixed(2)})}),Object(c.jsx)(O.a,{item:!0,children:Object(c.jsx)(f.a,{color:"textSecondary",children:" XTZ / minute"})})]})})]}),Object(c.jsx)(U.a,{}),t?g?n===e.switch.user?Object(c.jsx)(xe,{dateofstart:e.switch.dateofstart,dateofstop:e.switch.dateofstop,switch:e.switch,setBCSwitch:e.setBCSwitch,openSnack:e.openSnack,closeSnack:e.closeSnack,resetBalance:p}):Object(c.jsx)(pe,{user:e.switch.user,dateofstop:e.switch.dateofstop,switch:e.switch,setBCSwitch:e.setBCSwitch}):Object(c.jsx)(ue,{duration:m,switch:e.switch,loadSwitchContent:e.loadSwitchContent,openSnack:e.openSnack,closeSnack:e.closeSnack,resetBalance:p}):Object(c.jsx)(fe,{}),Object(c.jsx)(U.a,{}),Object(c.jsx)(V.a,{onClick:function(e){s(!0)},children:Object(c.jsxs)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,style:{padding:22},children:[Object(c.jsx)(O.a,{item:!0,xs:2,children:Object(c.jsx)(R.a,{style:{height:50,backgroundImage:"url(/completium-dapp-iot/qr"+("dark"===e.theme.palette.type?"white":"black")+".svg)",backgroundRepeat:"no-repeat"}})}),Object(c.jsx)(O.a,{item:!0,xs:10,children:Object(c.jsx)(f.a,{children:"Click here to get the Object on your Mobile Device."})})]})})]})}),Object(c.jsx)(se,{url:"http://edukera.github.io/completium-dapp-iot",open:r,close:function(e){s(!1)},theme:e.theme}),Object(c.jsx)(G,{appName:b})]})},Oe=n(133),ge=n(319),ye=n(318);function we(e){return Object(c.jsx)(ye.a,Object(Oe.a)({elevation:6,variant:"filled"},e))}var ve=function(e){return Object(c.jsx)(ge.a,{open:e.open,children:Object(c.jsx)(we,{severity:"info",style:{backgroundColor:e.theme.palette.secondary.main},children:"Waiting for operation confirmation ..."})})};function ke(){return navigator.maxTouchPoints||"ontouchstart"in document.documentElement}function Se(){var e=B(),t=D(),n=i.a.useState(null),a=Object(d.a)(n,2),o=a[0],r=a[1],s=i.a.useState(!1),b=Object(d.a)(s,2),x=b[0],p=b[1],f=i.a.useMemo((function(){return Object(M.a)({palette:{type:"light",primary:{light:"#F5F5F5",main:"#D3D3D3",dark:"#A9A9A9"},secondary:{light:"#81c784",main:"#4caf50",dark:"#388e3c",contrastText:"#fff"}}})}),[false]),m=i.a.useCallback(Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("edo2net");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.message);case 8:case 9:case"end":return e.stop()}}),e,null,[[0,5]])}))),[t]);function O(){return g.apply(this,arguments)}function g(){return(g=Object(j.a)(l.a.mark((function e(){var t,n,c,a,i,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new de.a(u),e.next=4,t.contract.at(h);case 4:return n=e.sent,e.next=7,n.storage();case 7:c=e.sent,a=new Date(c.dateofstart),i=new Date(c.dateofstop),o=parseInt(0+c.rate[4])/parseInt(0+c.rate[3]),s=c.user,r({dateofstart:a,dateofstop:i,rate:o,user:s}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("Error: ".concat(e.t0));case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}null===o&&O();return Object(c.jsxs)(L.a,{theme:f,children:[Object(c.jsx)(W.a,{}),Object(c.jsx)(E,{theme:f,appTitle:"Switch on a Connected Object!",handleConnect:m,istouch:ke()}),null===o?Object(c.jsx)(le.a,{color:"secondary"}):ke()?Object(c.jsx)(H,{loadSwitchContent:O,switch:o}):Object(c.jsx)(me,{ready:e,theme:f,switch:o,loadSwitchContent:O,setBCSwitch:r,openSnack:function(){p(!0)},closeSnack:function(){p(!1)}}),Object(c.jsx)(ve,{open:x,theme:f})]})}var Ce=function(){return Object(c.jsx)(k,{appName:b,children:Object(c.jsx)(i.a.Suspense,{fallback:null,children:Object(c.jsx)(Se,{})})})},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,323)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(Ce,{})}),document.getElementById("root")),Te()},67:function(e,t,n){}},[[267,1,2]]]);
//# sourceMappingURL=main.50f4b143.chunk.js.map