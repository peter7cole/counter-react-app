(this["webpackJsonpcounter-component-based"]=this["webpackJsonpcounter-component-based"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(2),c=n(4),u=n(3),l=n(0),o=n.n(l),i=n(6),s=n.n(i),m=(n(12),n(13),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"header"},o.a.createElement("header",null,o.a.createElement("h1",null,"Counter App")))}}]),n}(l.Component)),b=(n(14),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).getNumberColor=function(e){return e>0?{color:"green"}:e<0?{color:"red"}:{color:"#000"}},a.onIncrement=function(e){e.preventDefault();var t=a.state.number;t++,a.setState({number:t})},a.onDecrement=function(e){e.preventDefault();var t=a.state.number;t--,a.setState({number:t})},a.state={number:0},a}return Object(a.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"counter"},o.a.createElement("p",null,"The Number:"," ",o.a.createElement("span",{id:"number",class:"font-strong",style:this.getNumberColor(this.state.number)},this.state.number)),o.a.createElement("div",null,o.a.createElement("button",{class:"font-strong",onClick:this.onIncrement},"\u2191")),o.a.createElement("div",null,o.a.createElement("button",{class:"font-strong",onClick:this.onDecrement},"\u2193")))}}]),n}(l.Component)),f=(n(15),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={year:(new Date).getFullYear()},a}return Object(a.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"footer"},o.a.createElement("footer",null,o.a.createElement("p",null,o.a.createElement("small",null,"\xa9 Peter Cole ",this.state.year))))}}]),n}(l.Component)),p=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null),o.a.createElement(b,null),o.a.createElement(f,null))}}]),n}(l.Component),h=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return o.a.createElement(p,null)}}]),n}(l.Component),d=document.getElementById("root");s.a.render(o.a.createElement(h,null),d)}],[[7,1,2]]]);
//# sourceMappingURL=main.2eef78a0.chunk.js.map