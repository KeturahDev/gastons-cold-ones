(this["webpackJsonpgastons-cold-ones"]=this["webpackJsonpgastons-cold-ones"]||[]).push([[0],{12:function(e,t,n){e.exports=n(22)},17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),i=n.n(r);n(17);var c=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Gaston's Cold Ones"))},o=n(10),s=n(7),m=n(8),d=n(11),u=n(9),p=n(1),g=n.n(p);function b(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-md-4 container",style:{backgroundColor:"black",color:"rgb(175, 175, 175)"}},l.a.createElement("div",{className:"row",onClick:function(){return e.showDetails(e.id)}},l.a.createElement("div",{className:"col-md-8 container"},l.a.createElement("h3",{onClick:e.showDetails},e.name),l.a.createElement("p",null,"By: ",e.brand)),l.a.createElement("div",{className:"col-md-4 container center"},l.a.createElement("p",null,"Price: ",e.price),l.a.createElement("p",null,"Alc: ",e.alcCont))),e.pints>0&&l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("p",{style:{margineTop:"10px",border:"2px solid blue"}},"Pints lefts: ",e.pints)),l.a.createElement("div",{className:"centerBox col-md-6"},l.a.createElement("button",{className:"button",onClick:function(){return e.sellPint(e.id)}},"Sell Pint"))),e.pints<=10&&e.pints>0&&l.a.createElement("p",null,"This keg is almost empty!"),0===e.pints&&l.a.createElement("p",null,"This keg is empty.")))}b.propType={name:g.a.string,brand:g.a.string,price:g.a.string,alcContent:g.a.string,id:g.a.string,key:g.a.string,pints:g.a.string,showDetails:g.a.func,sellPint:g.a.func};var E=b;var h=function(e){var t=e.list.sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},t.map((function(t){return l.a.createElement(E,{name:t.name,price:t.price,pints:t.pints,brand:t.brand,id:t.id,key:t.id,alcCont:t.alcoholContent,showDetails:e.onSelectingKeg,sellPint:e.onSellingPint})}))))};var f=function(e){var t=e.keg;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{backgroundColor:"black",color:"rgb(175, 175, 175)",borderRadius:"10px",padding:"5%"}},l.a.createElement("h2",null,t.name),l.a.createElement("p",null,"Description: ",t.description),l.a.createElement("p",null,"Brand: ",t.brand),l.a.createElement("p",null,"Price: ",t.price),l.a.createElement("p",null,"Alcohol Content: ",t.alcoholContent),l.a.createElement("p",null,"Pints Left: ",t.pints)))},v=n(2);var k=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{backgroundColor:"black",color:"rgb(175, 175, 175)",borderRadius:"10px",padding:"5%",textAlign:"center"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:"https://media1.giphy.com/media/XI4Gl6KPVkOBgpLmhF/200w.webp?cid=ecf05e47549f2f2b0326215fb88985e02d8afc4311cc5e7e&rid=200w.webp",alt:"gif"})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onKegCreation({name:t.target.name.value,id:Object(v.v4)(),brand:t.target.brand.value,alcoholContent:t.target.alcoholContent.value,price:t.target.price.value,description:t.target.description})}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"name",placeholder:"Drink's Name"}),l.a.createElement("br",null)),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"brand",placeholder:"brand"}),l.a.createElement("br",null)),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"alcoholContent",placeholder:"Alcohol Content"}),l.a.createElement("br",null)),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"price",placeholder:"Price per Pint"}),l.a.createElement("br",null)),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"description",placeholder:"Describe this drink"}),l.a.createElement("br",null)),l.a.createElement("button",{className:"button",type:"submit"},"Submit"))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:"https://media1.giphy.com/media/XI4Gl6KPVkOBgpLmhF/200w.webp?cid=ecf05e47549f2f2b0326215fb88985e02d8afc4311cc5e7e&rid=200w.webp",alt:"gif"})))))},y=[{name:"Marry Me Belle",brand:"Gaston",price:"$11",alcoholContent:"12%",description:"My specially made Vodka cocktail to get Belle to losen up and just marry me like I know she should.",pints:124,id:Object(v.v4)()},{name:"Antler Decor",brand:"BuckWiser",price:"$8",alcoholContent:"6%",description:"A quality light beer for my lightweight friends to sit back and enjoy my decor.",pints:124,id:Object(v.v4)()},{name:"Egged Barge",brand:"Gaston",price:"$15",alcoholContent:"9%",description:"Spiked Eggnog to meet my 5 dozen egg standards.",pints:124,id:Object(v.v4)()},{name:"Lady Lifts",brand:"BlueBarrel",price:"$6",alcoholContent:"5%",description:"A light beer for the ladies to sip on while I raise there tables.",pints:124,id:Object(v.v4)()},{name:"Kill the Beast",brand:"MonsterMan",price:"$10",alcoholContent:"9%",description:"A pre pitchfork raising rum to get in the hero's spirit. Ride with me brothers!",pints:124,id:Object(v.v4)()}],C=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleClick=function(){null!==a.state.selectedKeg?a.setState({formVisible:!1,selectedKeg:null}):a.setState((function(e){return{formVisible:!e.formVisible}}))},a.handleAddNewKeg=function(e){var t=a.state.kegList.concat(e);a.setState({formVisible:!1,kegList:t})},a.handleChangeingSelectedKeg=function(e){var t=a.state.kegList.filter((function(t){return t.id===e}))[0];a.setState({selectedKeg:t})},a.handleSellingPint=function(e){var t=a.state.kegList.filter((function(t){return t.id===e}))[0],n=t.pints-1,l=Object(o.a)({},t,{pints:n});console.log("pints:",l.pints);var r=a.state.kegList.filter((function(t){return t.id!==e})).concat(l);a.setState({kegList:r})},a.setVisiblitiy=function(){return null!==a.state.selectedKeg?{component:l.a.createElement(f,{keg:a.state.selectedKeg}),buttonText:"Back to Kegs"}:a.state.formVisible?{component:l.a.createElement(k,{onKegCreation:a.handleAddNewKeg}),buttonText:"Back to Kegs"}:{component:l.a.createElement(h,{list:a.state.kegList,onSelectingKeg:a.handleChangeingSelectedKeg,onSellingPint:a.handleSellingPint}),buttonText:"Add New Keg"}},a.state={formVisible:!1,selectedKeg:null,kegList:y},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.setVisiblitiy();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{backgroundColor:"rgba(22, 22, 22, 0.342)",borderRadius:"10px",marginBottom:"3%",marginTop:"3%"}},e.component,l.a.createElement("div",{className:"centerBox"},l.a.createElement("button",{className:"buttondark",onClick:this.handleClick},e.buttonText))))}}]),n}(l.a.Component);var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"header"},l.a.createElement(c,null)),l.a.createElement(C,null)))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.13be5c4c.chunk.js.map