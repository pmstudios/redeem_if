(this.webpackJsonpredeem_if=this.webpackJsonpredeem_if||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),i=n.n(r),o=(n(3),n(5)),s=n(6),c=n(1),d=n(7),u=n(8),m=(n(14),{width:"100vw",height:"100vh",backgroundImage:"url(./images/Logo_IrisFall_VoucherWeb.png)",backgroundSize:"cover"}),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={visibleDownloadLink:!1,visibleError:!1,redeemCode:""},a.handleLink=function(){},a.renderDownloadLink=function(){return l.a.createElement("div",{className:"signin vertical-center"},l.a.createElement("p",null,"Google Drive Link - ",l.a.createElement("a",{href:"#",onClick:a.handleLink},"Download")),l.a.createElement("p",null,"Direct Download Link - ",l.a.createElement("a",{href:"#",onClick:a.handleLink},"Download")))},a.renderErrorMsg=function(){return l.a.createElement("div",{className:"errmsg"},l.a.createElement("p",null,"Invalid Redeem Code"))},a.handleSignin=function(){},a.updateInput=a.updateInput.bind(Object(c.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(c.a)(a)),a}return Object(s.a)(n,[{key:"updateInput",value:function(e){this.setState({redeemCode:e.target.value})}},{key:"handleSubmit",value:function(){"FS72P5"===this.state.redeemCode?this.setState({visibleDownloadLink:!0,visibleError:!1}):this.setState({visibleDownloadLink:!1,visibleError:!0})}},{key:"handleChange",value:function(e){console.log(e)}},{key:"render",value:function(){return l.a.createElement("div",{style:m},l.a.createElement("div",{className:"frame"},l.a.createElement("div",{className:"top center"},l.a.createElement("img",{src:"./images/Logo_IrisFall_VoucherWeb.png",alt:"if"}),l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"Iris.Fall Bonus Digital Soundtrack Download"))),l.a.createElement("div",{className:"middle center"},l.a.createElement("div",{className:"text01"},"Thank you for purchasing Iris.Fall. This is the Downloadable Soundtrack page to redeem your bonus",l.a.createElement("br",null),"voucher included with first print copies for PlayStation 4 and/or Nintendo Switch."),l.a.createElement("div",{className:"text02"},"**This is not to purchase the actual game. Please do not purchase this item as it is non-refundable",l.a.createElement("br",null),"and only to download the digital soundtrack. The purpose of this page is for Downloadable voucher",l.a.createElement("br",null),"redemption included with certain retail copies.**"),l.a.createElement("div",{className:"text03"},l.a.createElement("div",{className:"padding-l-32"},"Please note:",l.a.createElement("br",null),l.a.createElement("br",null),"\u2022 Code valid only for one time use.",l.a.createElement("br",null),"\u2022 Bonus vouchers are only available in first print copies and brand new factory sealed copies.",l.a.createElement("br",null),"We are not responsible for opened merchandise. ",l.a.createElement("br",null),"\u2022 Please download to your PC. ",l.a.createElement("br",null),"\u2022 A zip file containing sound files will be downloaded. ",l.a.createElement("br",null),"\u2022 Cannot be re-issued. No returns accepted, non-transferable unless stated otherwise.")),l.a.createElement("div",{className:"signup margin-b-16"},l.a.createElement("form",null,l.a.createElement("h2",null,"Enter Redeem Code"),l.a.createElement("input",{type:"text",name:"code",placeholder:"Redeem Code",onChange:this.updateInput,onKeyPress:this.updateInput,maxLength:"10",required:!0}),l.a.createElement("div",{onClick:this.handleSubmit,className:"submit"},l.a.createElement("p",null,"Submit"))),l.a.createElement("div",{className:"errmsg"},this.state.visibleError&&this.renderErrorMsg())),this.state.visibleDownloadLink&&this.renderDownloadLink())))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.3731f577.chunk.js.map