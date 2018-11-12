(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(54)},30:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),s=a.n(c),i=a(56),r=(a(30),a(58)),u=a(57),o=a(6),m=a(7),d=a(9),h=a(8),p=a(10),f=a(11),E=a.n(f),b=a(55),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={item:e.item},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("li",{className:"collection-item"},l.a.createElement(b.a,{to:"/meetups/".concat(this.state.item.id)},this.state.item.name))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={meetups:[]},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.getMeetups()}},{key:"getMeetups",value:function(){var e=this;E.a.get("http://localhost:3000/api/meetups").then(function(t){e.setState({meetups:t.data},function(){})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.meetups.map(function(e,t){return l.a.createElement(v,{key:e.id,item:e})});return l.a.createElement("div",null,l.a.createElement("h1",null,"Meetups"),l.a.createElement("ul",{className:"collection"},e))}}]),t}(n.Component),y=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"About"))},N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={details:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.getMeetups()}},{key:"getMeetups",value:function(){var e=this,t=this.props.match.params.id;E.a.get("http://localhost:3000/api/meetups/".concat(t)).then(function(t){e.setState({details:t.data},function(){console.log(e.state)})}).catch(function(e){return console.log(e)})}},{key:"onDelete",value:function(){var e=this,t=this.state.details.id;E.a.delete("http://localhost:3000/api/meetups/".concat(t)).then(function(t){e.props.history.push("/")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(b.a,{className:"btn grey",to:"/"},"Back"),l.a.createElement("h1",null,this.state.details.name),l.a.createElement("ul",{className:"collection"},l.a.createElement("li",{className:"collection-item"},"Address: ",this.state.details.address)),l.a.createElement(b.a,{className:"btn",to:"/meetups/edit/".concat(this.state.details.id)},"Edit"),l.a.createElement("button",{onClick:this.onDelete.bind(this),className:"btn red right"},"Delete"))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"addMeetup",value:function(e){var t=this;E.a.request({method:"post",url:"http://localhost:3000/api/meetups",data:e}).then(function(e){t.props.history.push("/")}).catch(function(e){console.log(e)})}},{key:"onSubmit",value:function(e){var t={name:this.refs.name.value,address:this.refs.address.value};this.addMeetup(t),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(b.a,{className:"btn grey",to:"/"},"Back"),l.a.createElement("h1",null,"Add Meetup"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",ref:"name"}),l.a.createElement("label",{htmlFor:"name"},"Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"address",ref:"address"}),l.a.createElement("label",{htmlFor:"address"},"Address")),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),t}(n.Component),O=a(23),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={id:"",name:"",address:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.getMeetupDetails()}},{key:"editMeetup",value:function(e){var t=this;E.a.request({method:"put",url:"http://localhost:3000/api/meetups/".concat(this.state.id),data:e}).then(function(e){t.props.history.push("/")}).catch(function(e){console.log(e)})}},{key:"onSubmit",value:function(e){var t={name:this.refs.name.value,address:this.refs.address.value};this.editMeetup(t),e.preventDefault()}},{key:"getMeetupDetails",value:function(){var e=this,t=this.props.match.params.id;E.a.get("http://localhost:3000/api/meetups/".concat(t)).then(function(t){e.setState({id:t.data.id,name:t.data.name,address:t.data.address},function(){console.log(e.state)})}).catch(function(e){return console.log(e)})}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(O.a)({},n,a))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(b.a,{className:"btn grey",to:"/"},"Back"),l.a.createElement("h1",null,"Edit Meetup"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",ref:"name",value:this.state.name,onChange:this.handleInputChange.bind(this)}),l.a.createElement("label",{htmlFor:"name"},"Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"address",ref:"address",value:this.state.address,onChange:this.handleInputChange.bind(this)}),l.a.createElement("label",{htmlFor:"address"},"Address")),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),t}(n.Component),M=function(){return l.a.createElement("main",null,l.a.createElement(r.a,null,l.a.createElement(u.a,{exact:!0,path:"/",component:g}),l.a.createElement(u.a,{exact:!0,path:"/about",component:y}),l.a.createElement(u.a,{exact:!0,path:"/meetups/add",component:j}),l.a.createElement(u.a,{exact:!0,path:"/meetups/:id",component:N}),l.a.createElement(u.a,{exact:!0,path:"/meetups/edit/:id",component:k})))},w=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"blue darken-3"},l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement("a",{href:"/",className:"brand-logo center"},"Meetupz"),l.a.createElement("a",{"data-activates":"main-menu",className:"button-collapse show-on-large"},l.a.createElement("i",{className:"fa fa-bars"})),l.a.createElement("ul",{className:"right hide-on-small-only"},l.a.createElement("li",null,l.a.createElement(b.a,{to:"/"},l.a.createElement("i",{className:"fa fa-users"})," Meetups"))),l.a.createElement("ul",{className:"side-nav",id:"main-menu"},l.a.createElement("li",null,l.a.createElement(b.a,{to:"/"},l.a.createElement("i",{className:"fa fa-users"})," Meetups")),l.a.createElement("li",null,l.a.createElement(b.a,{to:"/meetups/add"},l.a.createElement("i",{className:"fa fa-plus"})," Add Meetup")),l.a.createElement("li",null,l.a.createElement(b.a,{to:"/about"},l.a.createElement("i",{className:"fa fa-question-circle"})," About"))))))}}]),t}(n.Component),C=function(){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement("div",{className:"container"},l.a.createElement(M,null)),l.a.createElement("div",{className:"fixed-action-btn"},l.a.createElement(b.a,{to:"/meetups/add",className:"btn-floating btn-floating btn-large red"},l.a.createElement("i",{className:"fa fa-plus"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(i.a,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.6529b77f.chunk.js.map