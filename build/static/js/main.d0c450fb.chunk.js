(this["webpackJsonpdashboard-final"]=this["webpackJsonpdashboard-final"]||[]).push([[0],{156:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(45),o=a.n(i),s=(a(73),a(74),a(75),a(76),a(7)),u=a(11),l=a(9),c=a(6),h=a(8),m=a(159),d=a(160),p=a(161),f=a(162),g=a(46),w=(a(79),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{ref:this.tweetContainerRef},r.a.createElement("h3",null,this.props.title),r.a.createElement(f.a,{style:{overflow:"scroll",height:"50vh"}},this.props.tweets?this.props.tweets.map((function(e,t){return r.a.createElement(f.a.Item,{key:t,style:{padding:0}},r.a.createElement(g.a,{tweetId:e.tweet_url.split("/")[3],options:{width:"100%",lang:"es"}}))})):r.a.createElement(r.a.Fragment,null)))}}]),t}(n.Component)),y=a(59),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={data:{nodes:[{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9}],links:[{source:1,target:0},{source:2,target:0},{source:3,target:0},{source:4,target:1},{source:5,target:3},{source:6,target:5},{source:7,target:5},{source:8,target:0},{source:9,target:0}]}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{backgroundColor:"#dddddd",width:this.props.width,height:this.props.height,graphData:this.state.data}))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).updateDimensions=function(){a.setState({graphDimensions:a.graphContainerRef.current?{width:a.graphContainerRef.current.offsetWidth,height:a.graphContainerRef.current.offsetWidth}:{width:0,height:0}})},a.componentDidUpdate=function(){!a.state.graphDimensions&&a.tweetContainerRef.current&&a.updateDimensions()},a.state={tweets:[{fullname:"Diego Sierra",likes:0,new_query:"gorro AND peque\xf1o",query:"condon AND peque\xf1o",text:"@AleVillafaneM xD era para ver si ten\xedas un gorro de tela peque\xf1o que mi hermanita nota uno",timestamp:"21-Jun-2013",user_id:121282899,tweet_url:"/Dieguito_1456/status/347893314755907584"},{fullname:"Mayo Cuello",likes:0,new_query:"forro AND peque\xf1o",query:"condon AND peque\xf1o",text:"IPhone 6 de 16gb dorado peque\xf1o detalles en vacover nada q un forro\u2026 https://www.instagram.com/p/BL9S-A9gyg-69fd78zY4WVsvynbC-eTuG3iTiQ0/\xa0\u2026",timestamp:"24-Oct-2016",user_id:409721398,tweet_url:"/mayocuello22/status/790639252598063104"},{fullname:"K\xe9yla.",likes:0,new_query:"forro AND peque\xf1o",query:"condon AND peque\xf1o",text:"Mi celular sin forro que peque\xf1o se siente jjjjj",timestamp:"01-Aug-2014",user_id:287968384,tweet_url:"/KeyJaner/status/495215976313806848"},{fullname:"MiLu\u2661",likes:0,new_query:"forrito AND peque\xf1o",query:"condon AND peque\xf1o",text:"El forrito lo compre porque es pitufo peque\xf1o como yo;$",timestamp:"04-Oct-2012",user_id:197915750,tweet_url:"/JoselinPerezO/status/253931296328392706"},{fullname:"\u277e\xbe\u26af\u035b \ud83e\udd2f",likes:0,new_query:"goma AND peque\xf1o",query:"condon AND peque\xf1o",text:"La confianza es como una goma de borrar, se hace m\xe1s y m\xe1s peque\xf1o despu\xe9s de cada error.",timestamp:"09-Jun-2014",user_id:823831892,tweet_url:"/Danielaa_BM21/status/475834056362295296"}],graphDimensions:null},a.graphContainerRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(d.a,{className:"Graph",style:{height:"50vh"}},r.a.createElement(p.a,{ref:this.graphContainerRef},this.state.graphDimensions?r.a.createElement(E,{width:this.state.graphDimensions.width,height:this.state.graphDimensions.height}):r.a.createElement(r.a.Fragment,null)),r.a.createElement(p.a,null,r.a.createElement(w,{title:"boli",tweets:this.state.tweets}))),r.a.createElement(d.a,{className:"Tweets",style:{height:"50vh"}},r.a.createElement(p.a,null,r.a.createElement(w,{title:"boli",tweets:this.state.tweets})),r.a.createElement(p.a,null,r.a.createElement(w,{title:"coca",tweets:this.state.tweets})),r.a.createElement(p.a,null,r.a.createElement(w,{title:"pastillas",tweets:this.state.tweets})),r.a.createElement(p.a,null,r.a.createElement(w,{title:"menstruaci\xf3n",tweets:this.state.tweets}))))}}]),t}(n.Component);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},68:function(e,t,a){e.exports=a(156)},73:function(e,t,a){},74:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},76:function(e,t,a){},79:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.d0c450fb.chunk.js.map