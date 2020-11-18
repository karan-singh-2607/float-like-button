(this["webpackJsonpfloating-button"]=this["webpackJsonpfloating-button"]||[]).push([[0],{12:function(t,e,i){},13:function(t,e,i){"use strict";i.r(e);var s=i(0),h=i.n(s),o=i(6),n=i.n(o),r=(i(12),i(1)),a=i(2),c=i(4),l=i(3),u=function(t){Object(c.a)(i,t);var e=Object(l.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement("svg",{className:this.props.class,"data-text":this.props.name,"data-force-factor":"0.1","data-layer-1-viscosity":"0.5","data-layer-2-viscosity":"0.4","data-layer-1-mouse-force":"400","data-layer-2-mouse-force":"500","data-layer-1-force-limit":"1","data-layer-2-force-limit":"2","data-color1":this.props.background,"data-color2":this.props.firstcolor,"data-color3":this.props.secondcolor}))}},{key:"componentDidMount",value:function(){var t=function(){function t(e){Object(r.a)(this,t);var i=e.dataset;this.id=this.constructor.id||(this.constructor.id=1),this.constructor.id++,this.xmlns="http://www.w3.org/2000/svg",this.tension=1*i.tension||.4,this.width=1*i.width||200,this.height=1*i.height||50,this.margin=i.margin||40,this.hoverFactor=i.hoverFactor||-.1,this.gap=i.gap||5,this.debug=i.debug||!1,this.forceFactor=i.forceFactor||.2,this.color1=i.color1||"#ff4800",this.color2=i.color2||"#ff4800",this.color3=i.color3||"#ff4800",this.textColor=i.textColor||"#FFFFFF",this.text=i.text||"FlloatingButton",this.svg=e,this.layers=[{points:[],viscosity:.5,mouseForce:100,forceLimit:2},{points:[],viscosity:.8,mouseForce:150,forceLimit:3}];for(var s=0;s<this.layers.length;s++){var h=this.layers[s];h.viscosity=1*i["layer-"+(s+1)+"Viscosity"]||h.viscosity,h.mouseForce=1*i["layer-"+(s+1)+"MouseForce"]||h.mouseForce,h.forceLimit=1*i["layer-"+(s+1)+"ForceLimit"]||h.forceLimit,h.path=document.createElementNS(this.xmlns,"path"),this.svg.appendChild(h.path)}this.wrapperElement=i.wrapperElement||document.body,this.svg.parentElement||this.wrapperElement.append(this.svg),this.svgText=document.createElementNS(this.xmlns,"text"),this.svgText.setAttribute("x","50%"),this.svgText.setAttribute("y","50%"),this.svgText.setAttribute("dy",~~(this.height/8)+"px"),this.svgText.setAttribute("font-size",~~(this.height/2)),this.svgText.style.fontFamily="sans-serif",this.svgText.setAttribute("text-anchor","middle"),this.svgText.setAttribute("pointer-events","none"),this.svg.appendChild(this.svgText),this.svgDefs=document.createElementNS(this.xmlns,"defs"),this.svg.appendChild(this.svgDefs),this.touches=[],this.noise=i.noise||0,document.body.addEventListener("touchstart",this.touchHandler),document.body.addEventListener("touchmove",this.touchHandler),document.body.addEventListener("touchend",this.clearHandler),document.body.addEventListener("touchcancel",this.clearHandler),this.svg.addEventListener("mousemove",this.mouseHandler),this.svg.addEventListener("mouseout",this.clearHandler),this.initOrigins(),this.animate()}return Object(a.a)(t,[{key:"distance",value:function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}},{key:"update",value:function(){for(var t=0;t<this.layers.length;t++){for(var e=this.layers[t],i=e.points,s=0;s<i.length;s++){var h=i[s],o=h.ox-h.x+(Math.random()-.5)*this.noise,n=h.oy-h.y+(Math.random()-.5)*this.noise,r=Math.sqrt(o*o+n*n),a=r*this.forceFactor;h.vx+=a*(o/r||0),h.vy+=a*(n/r||0);for(var c=0;c<this.touches.length;c++){var l=this.touches[c],u=e.mouseForce;l.x>this.margin&&l.x<this.margin+this.width&&l.y>this.margin&&l.y<this.margin+this.height&&(u*=-this.hoverFactor);var g=h.x-l.x,d=h.y-l.y,v=Math.sqrt(g*g+d*d),f=Math.max(-e.forceLimit,Math.min(e.forceLimit,u*l.force/v));h.vx+=f*(g/v||0),h.vy+=f*(d/v||0)}h.vx*=e.viscosity,h.vy*=e.viscosity,h.x+=h.vx,h.y+=h.vy}for(var m=0;m<i.length;m++){var y=i[(m+i.length-1)%i.length],p=i[m],x=i[(m+i.length+1)%i.length],b=this.distance(p,y),w=this.distance(p,x),F={x:x.x-y.x,y:x.y-y.y},k=Math.sqrt(F.x*F.x+F.y*F.y);p.cPrev={x:p.x-F.x/k*b*this.tension,y:p.y-F.y/k*b*this.tension},p.cNext={x:p.x+F.x/k*w*this.tension,y:p.y+F.y/k*w*this.tension}}}}},{key:"animate",value:function(){var t=this;this.raf((function(){t.update(),t.draw(),t.animate()}))}},{key:"draw",value:function(){for(var t=0;t<this.layers.length;t++){var e=this.layers[t];if(1===t)if(this.touches.length>0){for(;this.svgDefs.firstChild;)this.svgDefs.removeChild(this.svgDefs.firstChild);for(var i=0;i<this.touches.length;i++){var s=this.touches[i],h=document.createElementNS(this.xmlns,"radialGradient");h.id="liquid-gradient-"+this.id+"-"+i;var o=document.createElementNS(this.xmlns,"stop");o.setAttribute("stop-color",this.color3),o.setAttribute("offset","0%");var n=document.createElementNS(this.xmlns,"stop");n.setAttribute("stop-color",this.color2),n.setAttribute("offset","100%"),h.appendChild(o),h.appendChild(n),this.svgDefs.appendChild(h),h.setAttribute("cx",s.x/this.svgWidth),h.setAttribute("cy",s.y/this.svgHeight),h.setAttribute("r",s.force),e.path.style.fill="url(#"+h.id+")",console.log("touch changed")}}else e.path.style.fill=this.color2;else e.path.style.fill=this.color1;var r=e.points,a=[];a.push("M",r[0].x,r[0].y);for(var c=1;c<r.length;c+=1)a.push("C",r[(c+0)%r.length].cNext.x,r[(c+0)%r.length].cNext.y,r[(c+1)%r.length].cPrev.x,r[(c+1)%r.length].cPrev.y,r[(c+1)%r.length].x,r[(c+1)%r.length].y);a.push("Z"),e.path.setAttribute("d",a.join(" "))}this.svgText.textContent=this.text,this.svgText.style.fill=this.textColor}},{key:"createPoint",value:function(t,e){return{x:t,y:e,ox:t,oy:e,vx:0,vy:0}}},{key:"initOrigins",value:function(){this.svg.setAttribute("width",this.svgWidth),this.svg.setAttribute("height",this.svgHeight);for(var t=0;t<this.layers.length;t++){for(var e=this.layers[t],i=[],s=~~(this.height/2);s<this.width-~~(this.height/2);s+=this.gap)i.push(this.createPoint(s+this.margin,this.margin));for(var h=~~(1.25*this.height);h>=0;h-=this.gap){var o=Math.PI/~~(1.25*this.height)*h;i.push(this.createPoint(Math.sin(o)*this.height/2+this.margin+this.width-this.height/2,Math.cos(o)*this.height/2+this.margin+this.height/2))}for(var n=this.width-~~(this.height/2)-1;n>=~~(this.height/2);n-=this.gap)i.push(this.createPoint(n+this.margin,this.margin+this.height));for(var r=0;r<=~~(1.25*this.height);r+=this.gap){var a=Math.PI/~~(1.25*this.height)*r;i.push(this.createPoint(this.height-Math.sin(a)*this.height/2+this.margin-this.height/2,Math.cos(a)*this.height/2+this.margin+this.height/2))}e.points=i}}},{key:"mouseHandler",get:function(){var t=this;return function(e){t.touches=[{x:e.offsetX,y:e.offsetY,force:1}]}}},{key:"touchHandler",get:function(){var t=this;return function(e){t.touches=[];for(var i=t.svg.getBoundingClientRect(),s=0;s<e.changedTouches.length;s++){var h=e.changedTouches[s],o=h.pageX-i.left,n=h.pageY-i.top;o>0&&n>0&&o<t.svgWidth&&n<t.svgHeight&&t.touches.push({x:o,y:n,force:h.force||1})}e.preventDefault()}}},{key:"clearHandler",get:function(){var t=this;return function(e){t.touches=[]}}},{key:"raf",get:function(){return this.__raf||(this.__raf=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){setTimeout(t,10)}).bind(window))}},{key:"svgWidth",get:function(){return this.width+2*this.margin}},{key:"svgHeight",get:function(){return this.height+2*this.margin}}]),t}(),e=document.querySelectorAll("."+this.props.class)[0];e.FloatingButton=new t(e)}}]),i}(s.Component);s.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(h.a.createElement("div",null,h.a.createElement(u,{class:"floating-button",name:"Floating Buton 1",background:"black",firstcolor:"#480048",secondcolor:"#C04848"}),h.a.createElement(u,{class:"floating-button2",name:"Floating Button 2",background:"black",firstcolor:"#12D8FA",secondcolor:"#1FA2FF"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},7:function(t,e,i){t.exports=i(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.90a0a2a8.chunk.js.map