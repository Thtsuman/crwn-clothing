(window["webpackJsonpcrwn-clothing"]=window["webpackJsonpcrwn-clothing"]||[]).push([[0],{46:function(e,t,n){e.exports=n(84)},52:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),i=n.n(c),l=n(10),o=n.n(l),s=n(7),u=n(16),m=n(20),p=n(21),d=n(23),b=n(22),f=n(24),h=(n(52),n(12)),g=n(18),E=n(4),v="SET_CURRENT_USER",y=n(2),O=Object(y.a)([function(e){return e.user}],function(e){return e.currentUser}),w=(n(57),n(17)),j=(n(58),n(9)),k=n.n(j),N=Object(g.f)(function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.linkUrl,i=e.history,l=e.match;return r.a.createElement(k.a,{bottom:!0},r.a.createElement("div",{className:"menu-item ".concat(a),onClick:function(){return i.push("".concat(l.url).concat(c))}},r.a.createElement("div",{className:"background-image",style:{background:"url(".concat(n,") center center/cover")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("span",{className:"subtitle"},"Shop Now"))))}),C=Object(y.a)([function(e){return e.directory}],function(e){return e.sections}),P=(n(62),Object(y.b)({sections:C})),U=Object(E.b)(P)(function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map(function(e){var t=e.id,n=Object(w.a)(e,["id"]);return r.a.createElement(N,Object.assign({key:t},n))}))}),S=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(U,null))},I=(n(63),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,c=Object(w.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),t)}),T={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"},D=function(){return{type:T.TOGGLE_CART_HIDDEN}},x=function(e){return{type:T.ADD_ITEM,payload:e}},A=(n(64),Object(E.b)(null,function(e){return{addItem:function(t){return e(x(t))}}})(function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement(k.a,{bottom:!0},r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},"$",c)),r.a.createElement(I,{onClick:function(){return n(t)},inverted:!0},"Add to Cart")))})),R=(n(65),Object(g.f)(function(e){var t=e.title,n=e.items,a=e.history,c=e.match;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement(k.a,{bottom:!0,opposite:!0},r.a.createElement("div",{className:"menu"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("p",{className:"submenu",onClick:function(){return a.push("".concat(c.url,"/").concat(t.toLowerCase()))}},"see more")),r.a.createElement("div",{className:"preview"},n.filter(function(e,t){return t<4}).map(function(e){return r.a.createElement(A,{key:e.id,item:e})}))))})),M=Object(y.a)([function(e){return e.shop}],function(e){return e.collections}),B=Object(y.a)([M],function(e){return Object.keys(e).map(function(t){return e[t]})}),_=(n(66),Object(y.b)({collections:B})),q=Object(E.b)(_)(function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map(function(e){var t=e.id,n=Object(w.a)(e,["id"]);return r.a.createElement(R,Object.assign({key:t},n))}))}),G=(n(67),Object(E.b)(function(e,t){return{collection:(n=t.match.params.collectionId,Object(y.a)([M],function(e){return e[n]}))(e)};var n})(function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map(function(e){return r.a.createElement(A,{key:e.id,item:e})})))})),H=function(e){var t=e.match;return r.a.createElement(k.a,{bottom:!0,opposite:!0},r.a.createElement("div",{className:"shop-page"},r.a.createElement(g.b,{exact:!0,path:"".concat(t.path),component:q}),r.a.createElement(g.b,{path:"".concat(t.path,"/:collectionId"),component:G})))},W=(n(68),n(69),function(e){var t=e.handleChange,n=e.label,a=Object(w.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," \n                    form-input-label")},n):null)}),J=n(25),L=n.n(J);n(70),n(73);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var F=function(){var e=Object(u.a)(o.a.mark(function e(t,n){var a,r,c,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=Q.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(z({displayName:r,email:c,createAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(t,n){return e.apply(this,arguments)}}();L.a.initializeApp({apiKey:"AIzaSyCky48JsGK1G8-gVmrh0Lai6za-ZCThuq0",authDomain:"crwn-clothing-db-2aa35.firebaseapp.com",databaseURL:"https://crwn-clothing-db-2aa35.firebaseio.com",projectId:"crwn-clothing-db-2aa35",storageBucket:"",messagingSenderId:"822764406768",appId:"1:822764406768:web:3c771acfacdd08ff"});var K=L.a.auth(),Q=L.a.firestore(),Y=new L.a.auth.GoogleAuthProvider;Y.setCustomParameters({prompt:"select_account"});var X=function(){return K.signInWithRedirect(Y)},Z=(L.a,function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},n.handleSubmit=function(){var e=Object(u.a)(o.a.mark(function e(t){var a,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,K.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(s.a)({},r,a))},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(W,{type:"email",name:"email",label:"Email",value:this.state.email,handleChange:this.handleChange,required:!0}),r.a.createElement(W,{type:"password",name:"password",label:"Password",value:this.state.password,handleChange:this.handleChange,required:!0}),r.a.createElement(k.a,{top:!0},r.a.createElement("div",{className:"buttons"},r.a.createElement(I,{type:"submit"}," Sign In"),r.a.createElement(I,{onClick:X,isGoogleSignIn:!0}," Sign In With Google")))))}}]),t}(r.a.Component)),$=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={displayName:"",email:"",password:"",confirmPassword:""},n.handleSubmit=function(){var e=Object(u.a)(o.a.mark(function e(t){var a,r,c,i,l,s,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){e.next=5;break}return alert("Password don't match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,K.createUserWithEmailAndPassword(c,i);case 8:return s=e.sent,u=s.user,e.next=12,F(u,{displayName:r});case 12:n.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0);case 18:case"end":return e.stop()}},e,null,[[5,15]])}));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(s.a)({},a,r))},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with email & password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(W,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(W,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(W,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(W,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(I,{type:"submit"},"Sign up")))}}]),t}(r.a.Component),ee=(n(75),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(Z,null),r.a.createElement($,null))}),te=function(e){return e.cart},ne=Object(y.a)([te],function(e){return e.hidden}),ae=Object(y.a)([te],function(e){return e.cartItems}),re=Object(y.a)([ae],function(e){return e.reduce(function(e,t){return e+t.quantity},0)}),ce=Object(y.a)([ae],function(e){return e.reduce(function(e,t){return e+t.quantity*t.price},0)}),ie=(n(76),Object(E.b)(null,function(e){return{clearItem:function(t){return e(function(e){return{type:T.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(x(t))},removeItem:function(t){return e(function(e){return{type:T.REMOVE_ITEM,payload:e}}(t))}}})(function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{alt:"item",src:l})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("div",{onClick:function(){return n(t)},className:"remove-button"},"\u2715"))})),le=n(41),oe=n.n(le),se=function(e){var t=e.price,n=100*t;return r.a.createElement(oe.a,{label:"Pay now",name:"CRWN CLOTHING",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay now",locale:"IND",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_VfxXNVrnHVXeiqXcuRGBB3nJ00IYyTFo3Z"})},ue=(n(77),Object(E.b)(function(){return Object(y.b)({cartItems:ae,total:ce})})(function(e){var t=e.cartItems,n=e.total;return r.a.createElement(k.a,{bottom:!0,opposite:!0},r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Products")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map(function(e){return r.a.createElement(ie,{key:e.id,cartItem:e})}),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $",n)),r.a.createElement("div",{className:"payment-warning"},"*PLEASE ENTER THE DETAILS FOR PAYMENT*",r.a.createElement("br",null),"4242 4242 4242 4242 Exp: 01/20 CVV:123"),r.a.createElement(se,{price:n})))}));function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var de=r.a.createElement("title",null,"Group"),be=r.a.createElement("desc",null,"Created with Sketch."),fe=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),he=function(e){var t=e.svgRef,n=e.title,a=pe(e,["svgRef","title"]);return r.a.createElement("svg",me({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?de:r.a.createElement("title",null,n),be,fe)},ge=r.a.forwardRef(function(e,t){return r.a.createElement(he,me({svgRef:t},e))});n.p;function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ye=r.a.createElement("g",null),Oe=r.a.createElement("g",null),we=r.a.createElement("g",null),je=r.a.createElement("g",null),ke=r.a.createElement("g",null),Ne=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Se=r.a.createElement("g",null),Ie=r.a.createElement("g",null),Te=r.a.createElement("g",null),De=r.a.createElement("g",null),xe=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Re=function(e){var t=e.svgRef,n=e.title,a=ve(e,["svgRef","title"]);return r.a.createElement("svg",Ee({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),r.a.createElement("title",null,n),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ye,Oe,we,je,ke,Ne,Ce,Pe,Ue,Se,Ie,Te,De,xe,Ae)},Me=r.a.forwardRef(function(e,t){return r.a.createElement(Re,Ee({svgRef:t},e))}),Be=(n.p,n(78),Object(y.b)({itemCounts:re})),_e=Object(E.b)(Be,function(e){return{toggleCartHidden:function(){return e(D())}}})(function(e){var t=e.toggleCartHidden,n=e.itemCounts;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Me,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))}),qe=(n(79),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"}," ",i," x $",a)))}),Ge=(n(80),Object(y.b)({cartItems:ae})),He=Object(g.f)(Object(E.b)(Ge)(function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map(function(e){return r.a.createElement(qe,{key:e.id,item:e})}):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(I,{onClick:function(){n.push("/checkout"),a(D())}},"GO TO CHECKOUT"))})),We=(n(81),Object(y.b)({currentUser:O,hidden:ne})),Je=Object(E.b)(We)(function(e){var t=e.currentUser,n=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(h.b,{className:"logo-container",to:"/"},r.a.createElement(ge,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(h.b,{to:"/shop",className:"option"},"SHOP"),r.a.createElement(h.b,{to:"/shop",className:"option"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return K.signOut()}},"SIGN OUT"):r.a.createElement(h.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(_e,null)),n?null:r.a.createElement(He,null))});function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ze=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=K.onAuthStateChanged(function(){var t=Object(u.a)(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,F(n);case 3:t.sent.onSnapshot(function(t){e(Ve({id:t.id},t.data()))}),t.next=8;break;case 7:e(n);case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.a,{basename:"/"},r.a.createElement(Je,null),r.a.createElement(g.b,{exact:!0,path:"/",component:S}),r.a.createElement(g.b,{path:"/shop",component:H}),r.a.createElement(g.b,{exact:!0,path:"/checkout",component:ue}),r.a.createElement(g.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(g.a,{to:"/"}):r.a.createElement(ee,null)}})))}}]),t}(r.a.Component),Fe=Object(y.b)({currentUser:O}),Ke=Object(E.b)(Fe,function(e){return{setCurrentUser:function(t){return e(function(e){return{type:v,payload:e}}(t))}}})(ze),Qe=n(42),Ye=n(13),Xe=n(29),Ze=n(43),$e=n.n(Ze),et=n(44),tt=n.n(et);function nt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?nt(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var rt={currentUser:null},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return at({},e,{currentUser:t.payload});default:return e}},it=n(45);function lt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?lt(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var st=function(e,t){return e.find(function(e){return e.id===t.id})?e.map(function(e){return e.id===t.id?ot({},e,{quantity:e.quantity+1}):e}):[].concat(Object(it.a)(e),[ot({},t,{quantity:1})])},ut=function(e,t){return 1===e.find(function(e){return e.id===t.id}).quantity?e.filter(function(e){return e.id!==t.id}):e.map(function(e){return e.id===t.id?ot({},e,{quantity:e.quantity-1}):e})};function mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function pt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?mt(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var dt={hidden:!0,cartItems:[]},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.TOGGLE_CART_HIDDEN:return pt({},e,{hidden:!e.hidden});case T.ADD_ITEM:return pt({},e,{cartItems:st(e.cartItems,t.payload)});case T.REMOVE_ITEM:return pt({},e,{cartItems:ut(e.cartItems,t.payload)});case T.CLEAR_ITEM_FROM_CART:return pt({},e,{cartItems:e.cartItems.filter(function(e){return e.id!==t.payload.id})});default:return e}},ft={sections:[{title:"HATS",imageUrl:"https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",id:1,linkUrl:"shop/hats"},{title:"JACKETS",imageUrl:"https://images.unsplash.com/photo-1509539662397-116cb90542f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",id:2,linkUrl:"shop/jackets"},{title:"SNEAKERS",imageUrl:"https://images.unsplash.com/photo-1511318316897-47dc82cd9ebb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1179&q=80",id:3,linkUrl:"shop/sneakers"},{title:"WOMENS",imageUrl:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",size:"large",id:4,linkUrl:"shop/womens"},{title:"MENS",imageUrl:"https://images.unsplash.com/photo-1543322748-33df6d3db806?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",size:"large",id:5,linkUrl:"shop/mens"}]},ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;return t.types,e},gt={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},vt={key:"root",storage:tt.a,whitelist:["cart"]},yt=Object(Ye.c)({user:ct,cart:bt,directory:ht,shop:Et}),Ot=Object(Xe.a)(vt,yt),wt=[$e.a],jt=Object(Ye.d)(Ot,Ye.a.apply(void 0,wt)),kt=Object(Xe.b)(jt);i.a.render(r.a.createElement(E.a,{store:jt},r.a.createElement(Qe.a,{persistor:kt},r.a.createElement(Ke,null))),document.querySelector("#root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.41f99c13.chunk.js.map