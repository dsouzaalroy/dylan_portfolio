(this.webpackJsonpportfolio_project=this.webpackJsonpportfolio_project||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},103:function(e,t,c){},105:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(32),i=c.n(a),r=(c(56),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,109)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))}),l=c(16),o=c(49),j=c(3),d=c(12),b=c(13),h=c(22),O=c(15),p=c(14),m=(c(76),c(108)),u=c.p+"static/media/animation_img.bad36184.jpg",g=c.p+"static/media/branding_img.793a2bc7.png",x=c.p+"static/media/graphic_design_image.572152fb.jpg",v=c(0);function f(e){var t=e.value;return console.log(t),Object(v.jsx)(m.a.img,{variants:{visible:{opacity:1},hidden:{opacity:0}},initial:"hidden",animate:"visible",transition:{ease:"easeIn",duration:.5},class:"bg",src:t})}var A=function(e){Object(O.a)(c,e);var t=Object(p.a)(c);function c(e){var n;return Object(d.a)(this,c),(n=t.call(this,e)).img_store={0:"",1:g,2:x,3:u},n.changeToImage=n.changeToImage.bind(Object(h.a)(n)),n.changeToDefault=n.changeToDefault.bind(Object(h.a)(n)),n.counter=n.changeToDefault.bind(Object(h.a)(n)),n.state={bgImage:"",animations:{y:["3%","-3%"]}},n}return Object(b.a)(c,[{key:"render",value:function(){var e=this,t={y:{duration:.3,yoyo:1/0,ease:"easeOut"}};return Object(v.jsx)("div",{className:"setUp",children:Object(v.jsxs)("div",{className:"all_content_Contents",children:[Object(v.jsx)(f,{value:this.state.bgImage},this.state.bgImage),Object(v.jsxs)("ul",{children:[Object(v.jsxs)("a",{href:"#/Branding/",children:[Object(v.jsx)(m.a.li,{className:"hover",onHoverStart:function(){e.state.animations={y:[]},console.log(e.state.animations),t={y:{}}},animate:this.state.animations,transition:t,value:"1",onMouseEnter:this.changeToImage,onMouseOut:this.changeToDefault,children:"Branding"}),Object(v.jsx)("br",{})]}),Object(v.jsxs)("a",{href:"#/Graphic_Design/",children:[Object(v.jsx)("li",{value:"2",className:"hover",onMouseEnter:this.changeToImage,onMouseOut:this.changeToDefault,children:"Graphic Design"}),Object(v.jsx)("br",{})]}),Object(v.jsxs)("a",{href:"#/Animation/",children:[Object(v.jsx)("li",{value:"3",className:"hover",onMouseEnter:this.changeToImage,onMouseOut:this.changeToDefault,children:"Animation"}),Object(v.jsx)("br",{})]})]})]})})}},{key:"changeToImage",value:function(e){this.setState({bgImage:this.img_store[e.target.value]})}},{key:"changeToDefault",value:function(){this.setState({bgImage:this.img_store[0]})}}]),c}(n.Component),N=(c(78),function(e){Object(O.a)(c,e);var t=Object(p.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){var e={y:{duration:.5,yoyo:1/0,ease:"easeInOut"}};return Object(v.jsxs)(m.a.div,{variants:{visible:{opacity:1},hidden:{opacity:0}},initial:"hidden",animate:"visible",transition:{ease:"easeIn",duration:.5},className:"all_content",children:[Object(v.jsxs)("div",{className:"upper_text",children:[Object(v.jsx)("span",{className:"small_help",children:" I help you "}),Object(v.jsx)("span",{className:"big_create",children:"Create "}),Object(v.jsx)("span",{className:"uq_inverse",children:" Unique"}),Object(v.jsx)("div",{className:"white_box"})]}),Object(v.jsx)("div",{className:"lower_Text",children:Object(v.jsx)("span",{className:"bld_dsgn",children:" Design Experiences."})}),Object(v.jsx)("div",{children:Object(v.jsx)("p",{id:"desc",children:"Creative designer and Visualiser"})}),Object(v.jsx)(m.a.img,{animate:{y:["15%","-10%"]},transition:e,className:"mouse",src:"data:image/png;base64,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"})]})}}]),c}(n.Component)),y=c(21),w=(c(79),c.p+"static/media/eye.45c5a6ec.png");var C=function(){var e=Object(n.useState)(0),t=Object(y.a)(e,2),c=t[0],s=t[1],a=function(){return s(window.pageYOffset)},i=.7;return Object(n.useEffect)((function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}}),[]),Object(v.jsx)("div",{className:"setUp",children:Object(v.jsxs)("div",{className:"all_content_Statement",children:[Object(v.jsxs)("div",{className:"same_line",children:[Object(v.jsx)("span",{className:"creative",children:"Creative Thinking"}),Object(v.jsx)("span",{className:"interactive",children:"Interactive Design"})]}),Object(v.jsx)("p",{className:"statement_1",style:{transform:"translateX(-".concat(c*i,"px)")},children:"LETS BRING YOUR THOUGHTS"}),Object(v.jsx)("p",{className:"statement_2",style:{transform:"translateX(".concat(c*i,"px)")},children:"TO ACTION."}),Object(v.jsx)("p",{className:"statement_1_2",style:{transform:"translateX(-".concat(c*i,"px)")},children:"LETS BRING YOUR THOUGHTS"}),Object(v.jsx)("p",{className:"statement_2_2",style:{transform:"translateX(".concat(c*i,"px)")},children:"TO ACTION."}),Object(v.jsx)("img",{className:"eye_image",src:w})]})})},k=(c(80),function(e){Object(O.a)(c,e);var t=Object(p.a)(c);function c(e){return Object(d.a)(this,c),t.call(this,e)}return Object(b.a)(c,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"setUp",children:Object(v.jsxs)("div",{className:"all_content_Services",children:[Object(v.jsx)("p",{className:"Title",children:"SERVICES"}),Object(v.jsxs)("div",{className:"Services",children:[Object(v.jsx)("p",{children:"I want to help my clients bring about a postitive change."}),Object(v.jsx)("p",{children:"While using an impactful and fun design process."}),Object(v.jsx)("p",{style:{lineHeight:"5"},children:"Brand Identity / Motion Graphics / Communication Design"})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"Tools",children:[Object(v.jsx)("p",{className:"Title",children:"TOOLS"}),Object(v.jsx)("p",{children:"Adobe Illustrator / Photoshop / After Effects / Premier Pro / XD"})]})]})})}}]),c}(n.Component)),T=(c(81),c.p+"static/media/photo.cbbf45a9.png"),S=c.p+"static/media/dylan_cv.6606d62b.pdf",D=function(e){Object(O.a)(c,e);var t=Object(p.a)(c);function c(e){return Object(d.a)(this,c),t.call(this,e)}return Object(b.a)(c,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"setUp",children:Object(v.jsxs)("div",{className:"all_content_AboutMe",children:[Object(v.jsx)("img",{className:"dylan",src:T}),Object(v.jsxs)("div",{className:"description",children:[Object(v.jsx)("p",{className:"hello",children:"Hello"}),Object(v.jsxs)("p",{className:"about_text",children:["My name is ",Object(v.jsx)("b",{children:"Dylan Fernandes"}),", I'm a ",Object(v.jsx)("b",{children:"Digital Designer"})," based in India"]}),Object(v.jsx)("p",{className:"about_text",children:"I'm currently studying at Rachana Sansad College of Applied Art and craft"})]}),Object(v.jsx)("div",{className:"CV",children:Object(v.jsx)("a",{href:S,target:"_blank",children:Object(v.jsx)("p",{className:"hover",children:"View my CV"})})})]})})}}]),c}(n.Component);c(82);var E,I,L,X,M,U,R=c.p+"static/media/over_canvas.3aad84f1.jpg",Q=c.p+"static/media/canvas_back3.79790fc5.png",B=c(19),G=c(20),V=G.a.div(E||(E=Object(B.a)(["\n  background: ",";\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  margin-bottom: 296px;\n"])),(function(e){return e.theme.background})),Y=(G.a.div(I||(I=Object(B.a)(["\n  height: 100%;\n  width: 100%;\n  video {\n    object-fit: cover;\n  }\n"]))),G.a.canvas(L||(L=Object(B.a)(["\n  position: absolute; \n  top: 0;\n  left: 0;\n  height: 100%;\n  display: block;\n"])))),_=G.a.img(X||(X=Object(B.a)(["\nheight: 100vh;\nwidth: 100%;\n\n"]))),P=(Object(G.a)(m.a.h1)(M||(M=Object(B.a)(["\n  position: absolute;\n  bottom: -120px;\n  left: -18px;\n  color: ",";\n  pointer-events: none;\n"])),(function(e){return e.theme.text})),Object(G.a)(m.a.span)(U||(U=Object(B.a)(["\n  display: block;\n  font-size: 23rem;\n  font-weight: 900;\n  line-height: 0.76;\n"]))),function(e){var t=e.onCursor,c=function(){function e(){return{width:window.innerWidth,height:window.innerHeight}}var t=Object(n.useState)(e),c=Object(y.a)(t,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){function t(){a(e())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),s}(),s=Object(n.useRef)(null);Object(n.useEffect)((function(){var e,t,n=s.current,a=n.cloneNode(),i=a.getContext("2d"),r=n.getContext("2d"),l=!1;window.scrollTo(0,0),r.globalCompositeOperation="source-over";var o=new Image;o.onload=function(){r.drawImage(o,0,0,c.width,c.height)},o.src=R,n.addEventListener("mouseover",(function(c){l=!0,e=c.pageX-n.offsetLeft,t=c.pageY-n.offsetTop})),n.addEventListener("click",(function(c){l=!0,e=c.pageX-n.offsetLeft,t=c.pageY-n.offsetTop})),n.addEventListener("mouseup",(function(c){l=!1,e=c.pageX-n.offsetLeft,t=c.pageY-n.offsetTop})),n.addEventListener("mousemove",(function(c){if(l){i.globalCompositeOperation="source-over",r.globalCompositeOperation="destination-out";var s=c.pageX-n.offsetLeft,o=c.pageY-n.offsetTop;i.lineJoin="round",i.moveTo(e,t),i.lineTo(s,o),i.closePath(),i.lineWidth=90,i.stroke(),e=s,t=o,r.drawImage(a,0,0)}}))}),[]);return Object(v.jsxs)(V,{children:[Object(v.jsx)(_,{src:Q}),Object(v.jsx)(Y,{height:c.height,width:c.width,ref:s,onMouseEnter:function(){return t("hovered")},onMouseLeave:t})]})}),F=(c(85),function(){var e=s.a.useRef(null),t=s.a.useRef({mouseX:0,mouseY:0,destinationX:0,destinationY:0,distanceX:0,distanceY:0,key:-1});return s.a.useEffect((function(){return document.addEventListener("mousemove",(function(c){var n=c.clientX,s=c.clientY;t.current.mouseX=n-e.current.clientWidth/2,t.current.mouseY=s-e.current.clientHeight/2})),function(){}}),[]),s.a.useEffect((function(){!function c(){t.current.key=requestAnimationFrame(c);var n=t.current,s=n.mouseX,a=n.mouseY,i=n.destinationX,r=n.destinationY,l=n.distanceX,o=n.distanceY;i&&r?(t.current.distanceX=.1*(s-i),t.current.distanceY=.1*(a-r),Math.abs(t.current.distanceX)+Math.abs(t.current.distanceY)<.1?(t.current.destinationX=s,t.current.destinationY=a):(t.current.destinationX+=l,t.current.destinationY+=o)):(t.current.destinationX=s,t.current.destinationY=a),e&&e.current&&(e.current.style.transform="translate3d(".concat(i,"px, ").concat(r,"px, 0)"))}()}),[]),Object(v.jsx)("div",{className:"cursor-wrapper default",children:Object(v.jsx)("div",{className:"secondary-cursor",ref:e})})});c(86);function Z(){return Object(v.jsx)("div",{className:"all_content_Colophone",children:Object(v.jsxs)("div",{className:"center_colophone",children:[Object(v.jsx)("p",{className:"title",children:"Designed by"}),Object(v.jsx)("p",{className:"person",children:"Dylan Fernandes"}),Object(v.jsx)("p",{className:"title",children:"Developed by"}),Object(v.jsx)("p",{className:"person",children:"Alroy D'souza"})]})})}c(87);function H(){return Object(v.jsx)("div",{className:"setUp",children:Object(v.jsxs)("div",{className:"all_content_Connect",children:[Object(v.jsx)("p",{className:"Title_connect",children:"Let's Connect"}),Object(v.jsx)("p",{children:"Email"}),Object(v.jsx)("p",{children:"Instagram"}),Object(v.jsx)("p",{children:"LinkedIn"})]})})}var z=c(10),q=(c(88),c(23)),J=(c(95),c(96),c(97),c.p+"static/media/slide2.deea19a7.jpg"),K=c.p+"static/media/slide1.45f95bc1.jpg",W=(c.p,c.p+"static/media/stationary_1.8fb49752.png"),$=c.p+"static/media/stationary_2.a5226d79.png",ee=c.p+"static/media/folder.f5cf7845.png",te=c.p+"static/media/lanyard.7c1e51f0.png",ce=c.p+"static/media/visitingCard_1.ea447172.png",ne=c.p+"static/media/visitingCard_2.d1535d9f.png",se=c.p+"static/media/duct_tape.d74c39bd.png",ae=c.p+"static/media/bag_shirt.3f3e9cb6.jpg",ie=c.p+"static/media/clock.24dbb172.jpg",re=c.p+"static/media/shirt_back.2108083b.jpg",le=c.p+"static/media/shirt_front.2ce1457d.jpg",oe=c.p+"static/media/shopbag.65350aae.jpg",je=c.p+"static/media/tshirt_2.5065a9aa.jpg",de=c.p+"static/media/baatli.26b61f9d.jpg",be=c.p+"static/media/package1.ac5cd00b.jpg",he=c.p+"static/media/package2.a7ebc5ca.jpg",Oe=c.p+"static/media/package3.a41f30fe.jpg",pe=c.p+"static/media/package4.b92fd418.jpg",me=c.p+"static/media/12moods.a6cd6e2e.png",ue=c.p+"static/media/product_final.e0201883.png",ge=c.p+"static/media/product_purchase.34fddcb3.png",xe=c.p+"static/media/signUp.ca777af8.png",ve=c.p+"static/media/website_2.380e3896.png",fe=c(17),Ae=c.n(fe),Ne=(c(98),function(e){return Object(v.jsxs)("div",{className:"navigator_footer",style:{color:"white",fontSize:"1vw"},children:[Object(v.jsxs)("a",{href:e.nextProject,className:"nextProject",children:[Object(v.jsx)("p",{children:"Go to next project"}),Object(v.jsx)("img",{style:{display:"inline-block",width:"20%",position:"relative",left:"18vw",bottom:"10vh"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABCCAYAAAEqBWgjAAAACXBIWXMAAAsSAAALEgHS3X78AAAEQklEQVR42u2c71HjMBDFf/bkO7kKLlSQpAJCBZerAKeC4zqACoAKLlRwUMGZCjAVXKggTgW6D5YPxdiJ/0S2pNHOZAabcZTV233at1ISCCGoaRNgk1+E1LcN8NTmQdQHgwYfNTcBBCGwkBd1X9nDQjR+JUII2jw4E0IwauNfm1kNusxqYxxF2wcD9eE2PgqAUfEj1LSoU8hpx1GoOIZtwO8UADXwDroGThOPcrjHxX+O0GcBkAJnbbFoY2PF21QXhgdx1e3hTAnvQDeGAngrRquOAT8Fiu48nAFJHzk4A15PsVLUsUTiJfqaxkpKCzWySqd1s+2A97qnsTilX4BUN5sA3ALbLsVAKw9HVdmuYyrDngZ6BFLdAbKXb2FfA+kcbN1X9TWWoR70UXltgVVfRLyRKrQ31j+VRcCvQ0XxqZTWELYGHpRsShutPIYjVyVjV0pGO+GcyhzUCdUQuyyVDj0raCauIHcoVOdFR0PstkA6hVQdn8rkBc26faa9XkvQjF1ArsouXMi5stz7juxg247cveLYTubgk85myRBo9dav7GOtyx17OLSQ24TcEvhdtzqxyTk1BM9RNtlsLr/GimN5d3VT92EbloJYFhpOaTkhF+PYNcfUSiNyTaC2IhAbHGskSG0KxRS4rEDQ+hyLyZrEqrNOOIYkj538+4wjTSAbJY36gS+rlgJbtZr6ob+UhaatOu1c+XvrioxBrmWrQ0xps7JeAy/KtVNtuoXClFPg2nbyOEQmcyAJhCOeFdne1b6jcNWxB1dybA1cKW2EmQuOlXaybHesUqvZnmPbijLLasfUwndVbBnYGoqJrDT+k4ULtWKkOLUrc8pGxCbA3zKysN2xowLTxlAs7mgebOiEFpFFbo8ou5k2h+I98EMhi3Gt8t5wx4qny2ufoDM9FG/aOGVLKEYyxxLXHDM9VWKyzvS7vE51Dxr6ee9Uh79KwAC+SsGx9qCZLXXLDr1fyVppoWtgT4+nsSfgW8n9Nwle6jPNPFuStdl3hftTSZk3PtPMtmvgruT+TmZd4kEzWy5PKyhz5unRXDlQRZkCZUvWg2Zeto3JvrZctDtZoDTOOk+P/UqEuIIyX5pIBJ9p/YrxGfsnM3O7kJQZ+Uwz29Z8nBgoVpkTHNmRcc0isu2y98L9M460wzxow1PmhGxbsGh5O2zp6dFOytzbQQiEEAvgj58vK+wRiEZ+HqyyKyD29GihlvOFiDl2LavGaYkEmKvi24M2vOUFRtnOwK3Mvr2dAb+mDWutNk99pg0nrEUFYJccOSDkM63/QiMhOwRUWs7XeRMP2vDC+Wiv0dPjMIWGqABsJbOv0cEfn2nDaK5nSnqKPtPM1lzLLm/uM+30VBjzcepYtZ8ovwPvQTPDYuSPZDbRXJ4eh9VcZYDN0fClDJ9p3QqNTQUV1tZcPtP6tVQC96Dceyc7QhDpHNhvzVho/wAiv+h+jBd+wwAAAABJRU5ErkJggg=="})]}),Object(v.jsxs)("a",{href:"#/",className:"back",children:[Object(v.jsx)("p",{children:"Back"}),Object(v.jsx)("img",{style:{width:"20%",position:"relative",right:"18vw",bottom:"10vh"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABCCAYAAAEqBWgjAAAACXBIWXMAAAsSAAALEgHS3X78AAAEQUlEQVR42u1c3VEbMRD+5PG7LxXEqcBHBeAKMBVwVBDTAVQQqABTAU4HpoLYFYDf8ob9mCfl4VZjRaM7nwQntIp2xjPGNze6/fv225U4IaWEjwyMv6XPjRKAcL3R6SYAGAK4c31MABBkHOcV1aMK1xV14whfq8LlccVHBMDO98bS1Y/eASA9AmA61NzgHQDeVn1X5Kw/IgCkrxouoQoAM83IH7qYHje6Vps+FrIFKvpcqM2kQRYUWoLchNRQ+OSID/YHSwtIKZs+s5ZrXp9j2okQ0SkB3IfwW295OAi1kLnYum9kUWYcA3jpG8KUZi8ALvqGLiF9GY9nJVD4+MWVKPma8QrAWwgz6vRvFCIag+eZvsguxGJqwRGAKlRNKyhggqD+DsBjyGrdJCWAX0QFS0QsQ1cioX2vELl0pa4LTbGNa48Tq+cKA6kFGEmb53aaYlfcFGtSrqIQHAHYk1ILMJRhC2D0zlJCEZM1gIkGGEvwl4U+kUxNpkMNBVkj4zFA2ZFCz1r+rVPIuWNs5ISjom11TpBSIC4pU1JOoaggBFXeXKYQlsdCNfo66DrzFTgMV95iV04EnNFE7TVVLiTqWVwyiq2JSCN2QHFRrNI45z72sULXHBujnsyyoWJdFWPX9gwclbrg0st1YSFKHlNhIHcAvmtgUaTA+NVQlW3f1qSY5N6MDjr0ZklQKh3x7jl31rpiC40ubQDMUxgXzAA8cc8rUzFzcnWbQtsSdNM8dI5dpKrYEv9utW5xOLHF9mM7eKB4YZUCKtqK8xTAKhXFWPZeXSmVTqPeOIOHrQe7bqBZ7Nm9UlDfMCy5e0zvyfb0fcKNO3YZ5rDcYuqiGMtd0C5Tqh3VNJsHWSsGKtSPnJDSdcS9pe8jRH4AxmcbSb/hG4DXGBUb+hgDgc4hh/aYj1QAHihP52B+5Cl1pxVU078av6stttfsgn5B31UWxFtsDhtnh8XltJLqwqXl2hVlX4bHwMW6DQpXWqOqyzOAs2zuuDJtTlA4sUDhSXZYXE4rCep+WK7dakQkSyTwuARwbvl9Q5mV61ZEmVYR0bA57ETLviwRZFpBNH1kucZ+qy3FTFM9l+mwLeqRT3ZYRE47O9JzjTMUxgOPbT3XT9THmLJElGk3R3qu7LCIMq2k7LIRjWsc3tyX5ZNFTflXAE6zOVjIdEAZVmZb8ILHNRGPOezjqD9E+X9nc0Uhr+YmaJ7UM2SPO4JK2z/DnFLPlhvpSJtr9a4C2zslH8i542y+z2WPbZIbbSaZZoPMqeXaeYbMODPNlAXss0h1YCfPIiPINFMq1JP9vfH7CPX4a5HNGp/TFGQWqCf9plwSZOb2ICJ4tEk+esAg00yZoT7Ub0LmhCAzD5sjzDSz5j00XGP5dsH/wWlKVrDvHGTIjAQebXJGmdUEmfNs/vicBhx2EMwXkGzB+F0CKcOjKQXVu0xK3il/AdxvrlwwepBoAAAAAElFTkSuQmCC"})]})]})});function ye(){var e={showArrows:!1,autoPlay:!0,autoFocus:!1,centerMode:!0,dynamicHeight:!0,infiniteLoop:!0,showIndicators:!0,showStatus:!1,width:"100vw",interval:2e3,centerSlidePercentage:50,className:"Carousel",thumbWidth:"6%",thumbHeight:"auto",stopOnHover:!1},t=[W,$,se,ee,te,ce,ne],c=[ae,ie,re,le,oe,je,de],n=[be,he,Oe,pe],s=[me,ue,ge,xe,ve];return Object(v.jsx)("div",{className:"setUp",children:Object(v.jsxs)("div",{className:"all_content_Slideshow",children:[Object(v.jsx)("div",{id:"logo_design",className:"Slide_Title",children:Object(v.jsx)("p",{children:"Logo Design"})}),Object(v.jsxs)(q.Carousel,Object(z.a)(Object(z.a)({},e),{},{children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{className:"resize",src:J})}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{className:"resize",src:K})})]})),Object(v.jsx)("div",{id:"corporate_identity",className:"Slide_Title",children:Object(v.jsx)("p",{children:"Corporate Identity"})}),Object(v.jsx)(q.Carousel,Object(z.a)(Object(z.a)({},e),{},{children:t.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:e})})}))})),Object(v.jsx)("div",{id:"apparel_design",className:"Slide_Title",children:Object(v.jsx)("p",{children:"Apparel Design"})}),Object(v.jsx)(q.Carousel,Object(z.a)(Object(z.a)({},e),{},{children:c.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:e})})}))})),Object(v.jsx)("div",{id:"package_design",className:"Slide_Title",children:Object(v.jsx)("p",{children:"Package Design"})}),Object(v.jsx)(q.Carousel,Object(z.a)(Object(z.a)({},e),{},{children:n.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:e})})}))})),Object(v.jsx)("div",{id:"website_design",className:"Slide_Title",children:Object(v.jsx)("p",{children:"Website Design"})}),Object(v.jsx)(q.Carousel,Object(z.a)(Object(z.a)({},e),{},{children:s.map((function(e){return Object(v.jsx)("div",{className:"zoomA",children:Object(v.jsx)("img",{src:e})})}))})),Object(v.jsx)(Ne,{nextProject:"#/Graphic_Design/"})]})})}var we=c.p+"static/media/skullcandy_pattern.e212325d.png";c(99);function Ce(){var e=Object(n.useState)(!1),t=Object(y.a)(e,2),c=(t[0],t[1]);return Object(n.useEffect)((function(){c(!1)})),Object(v.jsxs)("div",{className:"setUp",children:[Object(v.jsx)("div",{}),Object(v.jsxs)("div",{className:"custom_class",children:[Object(v.jsxs)("div",{className:"same_line",children:[Object(v.jsx)("span",{className:"academic",children:"Academic Project"}),Object(v.jsx)("span",{className:"year",children:"Year:2019-2020"})]}),Object(v.jsxs)(l.Parallax,{x:[-20,20],tagOuter:"figure",children:[Object(v.jsx)("p",{className:"parallax_1",children:"Complete Rebrand for"}),Object(v.jsx)("p",{className:"parallax_1_1",children:"Complete Rebrand for"})]}),Object(v.jsxs)(l.Parallax,{x:[20,-20],tagOuter:"figure",children:[Object(v.jsx)("p",{className:"parallax_2",children:"Skullcandy studios"}),Object(v.jsx)("p",{className:"parallax_2_1",children:"Skullcandy studios"})]}),Object(v.jsx)("img",{className:"skullcandy_pattern",src:we})]})]})}c(100);function ke(){var e={textDecoration:"none",color:"inherit",display:"table",fontWeight:500};return Object(v.jsx)("div",{className:"setUp",children:Object(v.jsx)("div",{className:"all_content_Branding_Content",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{className:"Title_Branding_Contents",children:"Contents"}),Object(v.jsx)("li",{className:"hover",children:Object(v.jsx)(Ae.a,{style:e,href:"#logo_design",children:"Logo Design"})}),Object(v.jsx)("br",{}),Object(v.jsx)("li",{className:"hover",children:Object(v.jsx)(Ae.a,{style:e,href:"#corporate_identity",children:"Corporate Identity"})}),Object(v.jsx)("br",{}),Object(v.jsx)("li",{className:"hover",children:Object(v.jsx)(Ae.a,{style:e,href:"#apparel_design",children:"Apparel Design"})}),Object(v.jsx)("br",{}),Object(v.jsx)("li",{className:"hover",children:Object(v.jsx)(Ae.a,{style:e,href:"#package_design",children:"Package Design"})}),Object(v.jsx)("br",{}),Object(v.jsx)("li",{className:"hover",children:Object(v.jsx)(Ae.a,{style:e,href:"#website_design",children:"Website Design"})}),Object(v.jsx)("br",{})]})})})}c(101);function Te(){return Object(v.jsx)("div",{className:"setUp",children:Object(v.jsxs)("div",{className:"all_content_About",children:[Object(v.jsx)("p",{className:"about_me",children:"About Me"}),Object(v.jsx)("p",{children:"Lorem Ipsum"}),Object(v.jsx)("p",{children:"Lorem Ipsum"}),Object(v.jsx)("a",{className:"hover",style:{position:"relative",fontSize:"1vw",top:"8vh"},children:"View Process"})]})})}var Se=c(51),De=c.p+"static/media/displacement_image.923d213c.jpg",Ee=(c.p,c.p+"static/media/test_img.321b54a0.jpg");c(103);function Ie(){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){new Se.a({parent:e.current,intensity:.1,image1:Ee,image2:x,displacementImage:De})}),[e]),Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"imgContainer",id:"imgContainer",style:{height:700,width:750},ref:e})})}function Le(){var e=function(e){};return Object(v.jsx)("div",{className:"\xe7ontainer",children:Object(v.jsxs)(o.a,{basename:"/",children:[Object(v.jsx)(F,{}),Object(v.jsxs)(j.c,{children:[Object(v.jsxs)(j.a,{exact:!0,path:"/",children:[Object(v.jsx)("section",{className:"child",children:Object(v.jsx)(N,{})}),Object(v.jsx)("section",{className:"child",children:Object(v.jsx)(C,{})}),Object(v.jsx)("section",{className:"child",children:Object(v.jsx)(A,{})}),Object(v.jsx)("section",{className:"child",children:Object(v.jsx)(k,{})}),Object(v.jsx)("section",{className:"child",children:Object(v.jsx)(D,{})}),Object(v.jsx)("section",{className:"child",children:Object(v.jsx)(H,{})}),Object(v.jsx)("section",{className:"child",children:Object(v.jsx)(Z,{})})]}),Object(v.jsx)(j.a,{path:"/Branding",children:Object(v.jsxs)(l.ParallaxProvider,{children:[Object(v.jsx)(P,{onCursor:e}),Object(v.jsx)(Ce,{}),Object(v.jsx)(Te,{}),Object(v.jsx)(ke,{}),Object(v.jsx)(ye,{})]})}),Object(v.jsx)(j.a,{path:"/Graphic_Design",children:Object(v.jsx)(Ie,{})}),Object(v.jsx)(j.a,{path:"/Animation",children:Object(v.jsxs)(l.ParallaxProvider,{children:[Object(v.jsx)(P,{onCursor:e}),Object(v.jsx)(Ce,{})]})})]})]})})}i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(Le,{})}),document.getElementById("root")),r()},56:function(e,t,c){},76:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[105,1,2]]]);
//# sourceMappingURL=main.ac0dd56a.chunk.js.map