(this["webpackJsonpgoit-react-hw-06-phonebook-toolkit"]=this["webpackJsonpgoit-react-hw-06-phonebook-toolkit"]||[]).push([[0],{137:function(e,t,n){e.exports={enter:"open_enter__ZJ8PG",enterActive:"open_enterActive__3TjEZ",exit:"open_exit__6R-lq",exitActive:"open_exitActive__31iNe"}},138:function(e,t,n){e.exports={window:"AlertWindow_window__3o8ck"}},139:function(e,t,n){e.exports={title:"PhonebookTitle_title__3XVFw"}},140:function(e,t,n){e.exports={wrapper:"SearchForm_wrapper__34DGU"}},141:function(e,t,n){e.exports={enter:"pop_enter__1Ol0-",enterActive:"pop_enterActive__2qtya",exit:"pop_exit__2nQyj",exitActive:"pop_exitActive__PyjmL"}},1453:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=(n(151),n(12)),l="type/ADD_CONTACT",u="type/REMOVE_CONTACT",s="type/ADD_FILTER",m=n(1455),p=n(1454),d=n(39),f=n.n(d),h=n(33),_=n.n(h),v=function(e){var t=e.contacts,n=e.filter,a=e.onRemoveContact;return r.a.createElement(m.a,{component:"ul",className:f.a.list},function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n).map((function(e){var t=e.id,n=e.name,o=e.number;return r.a.createElement(p.a,{key:t,timeout:250,classNames:_.a,unmountOnExit:!0},r.a.createElement("li",{className:f.a.cardWrapper},n,r.a.createElement("span",null,o),r.a.createElement("button",{onClick:function(){return a(t)},className:f.a.cardBtn},"\u2716")))})))},b=Object(i.b)((function(e){return{contacts:e.contacts,filter:e.filter}}),(function(e){return{onRemoveContact:function(t){return e(function(e){return{type:u,payload:e}}(t))}}}))(v),E=n(34),y=n(68),w=n(35),g=n(36),C=n(38),x=n(37),O=n(40),A=n(69),j=n.n(A),N=n(136),k=n.n(N),S=n(41),T=n.n(S),F=n(42),W=n.n(F),B=function(e){var t=e.title,n=e.value,a=e.handleChange,o=e.placeholder;return r.a.createElement("div",{className:W.a.wrapper},r.a.createElement("label",{className:W.a.title},t),r.a.createElement("input",{className:W.a.input,value:n,type:"text",placeholder:o,onChange:a,name:t.toLowerCase()}))},L={color:"#ff0000",display:"block",fontSize:14,fontWeight:300,margin:0,marginBottom:5},D=function(e){var t=e.errorType;return r.a.createElement("span",{style:L},t)},q=n(137),I=n.n(q),J=n(138),R=n.n(J),P=function(e){var t=e.alert,n=e.switchAlert;return r.a.createElement(p.a,{timeout:1e3,classNames:I.a,in:t,onEnter:function(){setTimeout((function(){n(!1)}),1e3)},unmountOnExit:!0},r.a.createElement("div",{className:R.a.window},"Contact already exists!"))},G={name:[O.validations.required(),O.validations.regex(["^[a-zA-Z\u0430-\u044f\u0410-\u042f]+"])],number:"required|string"},M={"name.required":"Please choose a unique username for your account","number.required":"Enter a valid phone number.","name.regex":"Username contains invalid characters, please use only Latin or Cyrillic letters"},U=function(e){Object(C.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",errors:null,alertWindow:!1},e.addContact=function(t){var n=t.name;if(e.props.contacts.find((function(e){return e.name===n})))e.setState({alertWindow:!0});else{var a=Object(y.a)(Object(y.a)({},t),{},{id:k.a.generate(),newItem:!0});e.props.addContact(a)}},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;Object(O.validateAll)({name:a,number:r},G,M).then((function(){e.addContact({name:a,number:r}),e.reset()})).catch((function(t){var n={};t.forEach((function(e){n[e.field]=e.message})),e.setState({errors:n})}))},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(E.a)({},a,r))},e.handleFake=function(){var t=j.a.name.firstName(),n=j.a.phone.phoneNumberFormat();e.setState({name:t,number:n})},e.reset=function(){e.setState({name:"",number:"",errors:null})},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.number,o=t.errors,c=t.alertWindow;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:T.a.form},r.a.createElement(B,{title:"Name",value:n,handleChange:this.handleChange,placeholder:"Write name..."}),o&&r.a.createElement(D,{errorType:o.name}),r.a.createElement(B,{title:"Number",value:a,handleChange:this.handleChange,placeholder:"Write phone..."}),o&&r.a.createElement(D,{errorType:o.number}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:T.a.submitBtn},"Add contact"),r.a.createElement("button",{type:"button",className:T.a.submitBtn,onClick:this.handleFake},"Generate fake contact"))),r.a.createElement(P,{alert:c,switchAlert:function(t){return e.setState({alertWindow:t})}}))}}]),n}(a.Component),Z=Object(i.b)((function(e){return{contacts:e.contacts}}),(function(e){return{addContact:function(t){return e(function(e){return{type:l,payload:e}}(t))}}}))(U),z=n(139),Q=n.n(z),V=function(e){Object(C.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={onLoad:!1},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.setState({onLoad:!0})}},{key:"render",value:function(){var e=this.state.onLoad,t=this.props.name;return r.a.createElement(p.a,{in:e,timeout:500,classNames:_.a,unmountOnExit:!0},r.a.createElement("h2",{className:Q.a.title},t))}}]),n}(a.Component),Y=n(140),H=n.n(Y),X=n(141),K=n.n(X),$=function(e){var t=e.contacts,n=e.filteredString;return r.a.createElement(p.a,{timeout:250,classNames:K.a,in:t.length>2,unmountOnExit:!0},r.a.createElement("div",{className:H.a.wrapper},r.a.createElement(B,{title:"Find contacts by name",handleChange:function(e){return n(e.target.value)},placeholder:"Search something...."})))},ee=Object(i.b)((function(e){return{contacts:e.contacts,filter:e.filter}}),(function(e){return{filteredString:function(t){return e(function(e){return{type:s,payload:e}}(t))}}}))($),te=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{name:"Phonebook"}),r.a.createElement(Z,null),r.a.createElement(ee,null),r.a.createElement(b,null))},ne=n(11),ae=n(142),re=n(144),oe=Object(ne.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case l:return[].concat(Object(re.a)(e),[a]);case u:return e.filter((function(e){return e.id!==a}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s:return a;default:return e}}}),ce=n(143),ie=n.n(ce),le=Object(ne.compose)(Object(ae.devToolsEnhancer)(),ie()()),ue=Object(ne.createStore)(oe,le);c.a.render(r.a.createElement(i.a,{store:ue},r.a.createElement(te,null)),document.getElementById("root"))},146:function(e,t,n){e.exports=n(1453)},151:function(e,t,n){},33:function(e,t,n){e.exports={enter:"slide_enter__3e_lJ",enterActive:"slide_enterActive__2YM8h",exit:"slide_exit__16jP4",exitActive:"slide_exitActive__Jwrkw"}},39:function(e,t,n){e.exports={list:"Contacts_list__3TnjY",cardWrapper:"Contacts_cardWrapper__1GfTJ",cardBtn:"Contacts_cardBtn__1iewe"}},41:function(e,t,n){e.exports={form:"ContactForm_form__NR-9m",submitBtn:"ContactForm_submitBtn__9tHSU"}},42:function(e,t,n){e.exports={wrapper:"InputTitle_wrapper__ClADQ",title:"InputTitle_title__bcI1r",input:"InputTitle_input__3gmAJ"}}},[[146,1,2]]]);
//# sourceMappingURL=main.acd9eff3.chunk.js.map