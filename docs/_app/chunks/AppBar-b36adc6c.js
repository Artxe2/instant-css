import{S as z,i as O,s as P,M as U,N as j,a as g,d as u,b as _,g as V,J as f,K as Q,D as ae,F as ne,e as b,c as w,O as le,T as re,G as oe,H as ce,I as ie,q as G,o as L,w as B,k as D,x as K,m as T,y as N,B as R,v as fe,t as Y,h as F,L as ue}from"./vendor-aa867c43.js";function he(t){let e,s;return{c(){e=U("svg"),s=U("path"),this.h()},l(a){e=j(a,"svg",{id:!0});var n=g(e);s=j(n,"path",{d:!0}),g(s).forEach(u),n.forEach(u),this.h()},h(){_(s,"d","M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"),_(e,"id",t[0])},m(a,n){V(a,e,n),f(e,s)},p(a,[n]){n&1&&_(e,"id",a[0])},i:Q,o:Q,d(a){a&&u(e)}}}function de(t,e,s){let{id:a=null}=e;return t.$$set=n=>{"id"in n&&s(0,a=n.id)},[a]}class _e extends z{constructor(e){super();O(this,e,de,he,P,{id:0})}}const x=ae("");function me(t){let e,s,a,n,l,v,p;const r=t[4].default,h=ne(r,t,t[3],null);return{c(){e=b("a"),s=b("button"),a=b("span"),h&&h.c(),this.h()},l(o){e=w(o,"A",{href:!0});var c=g(e);s=w(c,"BUTTON",{class:!0});var I=g(s);a=w(I,"SPAN",{});var E=g(a);h&&h.l(E),E.forEach(u),I.forEach(u),c.forEach(u),this.h()},h(){var o;_(s,"class",n=(o=t[2])!=null?o:"bg=var(--primary) w=6.25 h=2.5 br=0.25"),_(e,"href",t[0])},m(o,c){V(o,e,c),f(e,s),f(s,a),h&&h.m(a,null),l=!0,v||(p=le(s,"click",function(){re(t[1])&&t[1].apply(this,arguments)}),v=!0)},p(o,[c]){var I;t=o,h&&h.p&&(!l||c&8)&&oe(h,r,t,t[3],l?ie(r,t[3],c,null):ce(t[3]),null),(!l||c&4&&n!==(n=(I=t[2])!=null?I:"bg=var(--primary) w=6.25 h=2.5 br=0.25"))&&_(s,"class",n),(!l||c&1)&&_(e,"href",t[0])},i(o){l||(G(h,o),l=!0)},o(o){L(h,o),l=!1},d(o){o&&u(e),h&&h.d(o),v=!1,p()}}}function ve(t,e,s){let{$$slots:a={},$$scope:n}=e,{href:l=null}=e,{onClick:v=null}=e,{classs:p=null}=e;return t.$$set=r=>{"href"in r&&s(0,l=r.href),"onClick"in r&&s(1,v=r.onClick),"classs"in r&&s(2,p=r.classs),"$$scope"in r&&s(3,n=r.$$scope)},[l,v,p,n,a]}class J extends z{constructor(e){super();O(this,e,ve,me,P,{href:0,onClick:1,classs:2})}}function pe(t){let e;return{c(){e=Y("LIGHT")},l(s){e=F(s,"LIGHT")},m(s,a){V(s,e,a)},d(s){s&&u(e)}}}function ge(t){let e;return{c(){e=Y("DARK")},l(s){e=F(s,"DARK")},m(s,a){V(s,e,a)},d(s){s&&u(e)}}}function $e(t){let e;return{c(){e=Y("SYSTEM")},l(s){e=F(s,"SYSTEM")},m(s,a){V(s,e,a)},d(s){s&&u(e)}}}function be(t){let e,s,a,n,l,v,p,r,h,o,c,I,E;return a=new J({props:{classs:t[0]==="LIGHT"?A:H,onClick:t[3],$$slots:{default:[pe]},$$scope:{ctx:t}}}),p=new J({props:{classs:t[0]==="DARK"?A:H,onClick:t[4],$$slots:{default:[ge]},$$scope:{ctx:t}}}),c=new J({props:{classs:t[0]?H:A,onClick:t[2],$$slots:{default:[$e]},$$scope:{ctx:t}}}),{c(){e=b("div"),s=b("div"),B(a.$$.fragment),n=D(),l=b("div"),v=D(),B(p.$$.fragment),r=D(),h=b("div"),o=D(),B(c.$$.fragment),this.h()},l(i){e=w(i,"DIV",{class:!0});var d=g(e);s=w(d,"DIV",{class:!0});var m=g(s);K(a.$$.fragment,m),n=T(m),l=w(m,"DIV",{class:!0}),g(l).forEach(u),v=T(m),K(p.$$.fragment,m),r=T(m),h=w(m,"DIV",{class:!0}),g(h).forEach(u),o=T(m),K(c.$$.fragment,m),m.forEach(u),d.forEach(u),this.h()},h(){_(l,"class","h=0.5"),_(h,"class","h=0.5"),_(s,"class",I="absolute flex column right=0 top=0 :hover/transition=top_0.5s"+(t[0]?t[0]==="LIGHT"?"":" :not(:hover)/top=-3":" :not(:hover)/top=-6")),_(e,"class","relative w=6.25 h=2.5 top=0 overflow=hidden :hover/transition=0.5s :hover/h=8.5 :hover/top=3")},m(i,d){V(i,e,d),f(e,s),N(a,s,null),f(s,n),f(s,l),f(s,v),N(p,s,null),f(s,r),f(s,h),f(s,o),N(c,s,null),E=!0},p(i,[d]){const m={};d&1&&(m.classs=i[0]==="LIGHT"?A:H),d&32&&(m.$$scope={dirty:d,ctx:i}),a.$set(m);const S={};d&1&&(S.classs=i[0]==="DARK"?A:H),d&32&&(S.$$scope={dirty:d,ctx:i}),p.$set(S);const C={};d&1&&(C.classs=i[0]?H:A),d&32&&(C.$$scope={dirty:d,ctx:i}),c.$set(C),(!E||d&1&&I!==(I="absolute flex column right=0 top=0 :hover/transition=top_0.5s"+(i[0]?i[0]==="LIGHT"?"":" :not(:hover)/top=-3":" :not(:hover)/top=-6")))&&_(s,"class",I)},i(i){E||(G(a.$$.fragment,i),G(p.$$.fragment,i),G(c.$$.fragment,i),E=!0)},o(i){L(a.$$.fragment,i),L(p.$$.fragment,i),L(c.$$.fragment,i),E=!1},d(i){i&&u(e),R(a),R(p),R(c)}}}const H="bg=var(--primary) w=6.25 h=2.5 br=0.25",A="bg=var(--primary) w=6.25 h=2.5 br=0.25 fw=bold";function we(t,e,s){const a=r=>{x.set(r),localStorage.setItem("THEME",r),window.instantCss()},n=()=>{localStorage.removeItem("THEME"),window.instantCss(),x.set("")};let l;return fe(()=>{x.set(localStorage.getItem("THEME")),x.subscribe(r=>s(0,l=r))}),[l,a,n,()=>a("LIGHT"),()=>a("DARK")]}class Ie extends z{constructor(e){super();O(this,e,we,be,P,{})}}function Ee(t){let e,s,a,n,l,v,p,r,h,o,c,I,E,i,d,m,S,C,M,q;return c=new Ie({}),S=new _e({props:{id:"git-icon"}}),{c(){e=b("div"),s=b("div"),a=D(),n=b("div"),l=b("span"),v=Y("InstantCSS"),p=D(),r=b("div"),h=D(),o=b("div"),B(c.$$.fragment),I=D(),E=b("div"),i=D(),d=b("div"),m=U("svg"),B(S.$$.fragment),C=D(),M=b("div"),this.h()},l(k){e=w(k,"DIV",{class:!0});var $=g(e);s=w($,"DIV",{class:!0}),g(s).forEach(u),a=T($),n=w($,"DIV",{class:!0});var W=g(n);l=w(W,"SPAN",{class:!0});var X=g(l);v=F(X,"InstantCSS"),X.forEach(u),W.forEach(u),p=T($),r=w($,"DIV",{class:!0}),g(r).forEach(u),h=T($),o=w($,"DIV",{class:!0});var Z=g(o);K(c.$$.fragment,Z),Z.forEach(u),I=T($),E=w($,"DIV",{class:!0}),g(E).forEach(u),i=T($),d=w($,"DIV",{class:!0});var y=g(d);m=j(y,"svg",{class:!0});var ee=g(m);K(S.$$.fragment,ee),ee.forEach(u),y.forEach(u),C=T($),M=w($,"DIV",{class:!0}),g(M).forEach(u),$.forEach(u),this.h()},h(){_(s,"class","w=1"),_(l,"class","font=3em_'sans-serif' fw=bold lh=1 m=auto"),_(n,"class","flex"),_(r,"class","flexGrow=1"),_(o,"class","flex alignItems=center"),_(E,"class","w=1.5"),_(m,"class","w=2.5 h=2.5 b=1px_solid_black"),_(d,"class","flex alignItems=center b=1px_solid_black"),_(M,"class","w=1.5"),_(e,"class",se+te)},m(k,$){V(k,e,$),f(e,s),f(e,a),f(e,n),f(n,l),f(l,v),f(e,p),f(e,r),f(e,h),f(e,o),N(c,o,null),f(e,I),f(e,E),f(e,i),f(e,d),f(d,m),N(S,m,null),f(e,C),f(e,M),t[2](e),q=!0},p:Q,i(k){q||(G(c.$$.fragment,k),G(S.$$.fragment,k),q=!0)},o(k){L(c.$$.fragment,k),L(S.$$.fragment,k),q=!1},d(k){k&&u(e),R(c),R(S),t[2](null)}}}let se="z=1000 absolute flex w=100vw h=4 transition=background-color_0.5s ",te="bg=#3b599850 c=black @dark@c=white boxShadow=0px_5px_5px_#3b5998",Se="bg=#3b599825 c=#00000050 @dark@c=#ffffff50 boxShadow=0px_5px_5px_#3b599850 :hover/bg=#3b599850;c=black;boxShadow=0px_5px_5px_#3b5998 @dark@:hover/c=white";function ke(t,e,s){const a=v=>{s(0,n.className=se+(v?Se:te),n)};let n=null;function l(v){ue[v?"unshift":"push"](()=>{n=v,s(0,n)})}return[n,a,l]}class Te extends z{constructor(e){super();O(this,e,ke,Ee,P,{checkScroll:1})}get checkScroll(){return this.$$.ctx[1]}}export{Te as A,J as B};