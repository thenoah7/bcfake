!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).LazyLoad=t()}(this,(function(){"use strict";function n(){return(n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n}).apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(t){return n({},r,t)},u=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},l="src",s="srcset",f="sizes",d="poster",_="llOriginalAttrs",g="loading",v="loaded",b="applied",p="error",h="native",m=function(n,t){return n.getAttribute("data-"+t)},E=function(n){return m(n,"ll-status")},I=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i)}(n,0,t)},y=function(n){return I(n,null)},A=function(n){return null===E(n)},k=function(n){return E(n)===h},L=[g,v,b,p],w=function(n,t,e,i){n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},x=function(n,t){o?n.classList.add(t):n.className+=(n.className?" ":"")+t},O=function(n,t){o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},N=function(n){return n.llTempImage},C=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},M=function(n,t){n&&(n.loadingCount+=t)},z=function(n,t){n&&(n.toLoadCount=t)},R=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},T=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&R(e).forEach(t)},G=function(n,t){R(n).forEach(t)},D=[l],V=[l,d],F=[l,s,f],j=function(n){return!!n[_]},P=function(n){return n[_]},S=function(n){return delete n[_]},U=function(n,t){if(!j(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},$=function(n,t){if(j(n)){var e=P(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},q=function(n,t,e){x(n,t.class_loading),I(n,g),e&&(M(e,1),w(t.callback_loading,n,e))},H=function(n,t,e){e&&n.setAttribute(t,e)},B=function(n,t){H(n,f,m(n,t.data_sizes)),H(n,s,m(n,t.data_srcset)),H(n,l,m(n,t.data_src))},J={IMG:function(n,t){T(n,(function(n){U(n,F),B(n,t)})),U(n,F),B(n,t)},IFRAME:function(n,t){U(n,D),H(n,l,m(n,t.data_src))},VIDEO:function(n,t){G(n,(function(n){U(n,D),H(n,l,m(n,t.data_src))})),U(n,V),H(n,d,m(n,t.data_poster)),H(n,l,m(n,t.data_src)),n.load()}},K=["IMG","IFRAME","VIDEO"],Q=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||w(n.callback_finish,t)},W=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},X=function(n,t,e){n.removeEventListener(t,e)},Y=function(n){return!!n.llEvLisnrs},Z=function(n){if(Y(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];X(n,e,i)}delete n.llEvLisnrs}},nn=function(n,t,e){!function(n){delete n.llTempImage}(n),M(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),O(n,t.class_loading),t.unobserve_completed&&C(n,e)},tn=function(n,t,e){var i=N(n)||n;Y(i)||function(n,t,e){Y(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";W(n,i,t),W(n,"error",e)}(i,(function(o){!function(n,t,e,i){var o=k(t);nn(t,e,i),x(t,e.class_loaded),I(t,v),w(e.callback_loaded,t,i),o||Q(e,i)}(0,n,t,e),Z(i)}),(function(o){!function(n,t,e,i){var o=k(t);nn(t,e,i),x(t,e.class_error),I(t,p),w(e.callback_error,t,i),o||Q(e,i)}(0,n,t,e),Z(i)}))},en=function(n,t,e){!function(n){return K.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),tn(n,t,e),function(n){j(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var i=m(n,t.data_bg),o=m(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),N(n).setAttribute(l,r),q(n,t,e))}(n,t,e),function(n,t,e){var i=m(n,t.data_bg_multi),o=m(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,function(n,t,e){x(n,t.class_applied),I(n,b),e&&(t.unobserve_completed&&C(n,t),w(t.callback_applied,n,e))}(n,t,e))}(n,t,e)}(n,t,e):function(n,t,e){tn(n,t,e),function(n,t,e){var i=J[n.tagName];i&&(i(n,t),q(n,t,e))}(n,t,e)}(n,t,e)},on=function(n){n.removeAttribute(l),n.removeAttribute(s),n.removeAttribute(f)},an=function(n){T(n,(function(n){$(n,F)})),$(n,F)},rn={IMG:an,IFRAME:function(n){$(n,D)},VIDEO:function(n){G(n,(function(n){$(n,D)})),$(n,V),n.load()}},cn=["IMG","IFRAME","VIDEO"],un=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},ln=function(n){return Array.prototype.slice.call(n)},sn=function(n){return n.container.querySelectorAll(n.elements_selector)},fn=function(n){return function(n){return E(n)===p}(n)},dn=function(n,t){return function(n){return ln(n).filter(A)}(n||sn(t))},_n=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!un(n)&&(t._observer=new IntersectionObserver((function(e){!function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return L.indexOf(E(n))>=0}(n);I(n,"entered"),x(n,e.class_entered),O(n,e.class_exited),function(n,t,e){t.unobserve_entered&&C(n,e)}(n,e,i),w(e.callback_enter,n,t,i),o||en(n,e,i)}(n.target,n,t,e):function(n,t,e,i){A(n)||(x(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return E(n)===g}(n)&&"IMG"===n.tagName&&(Z(n),function(n){T(n,(function(n){on(n)})),on(n)}(n),an(n),O(n,e.class_loading),M(i,-1),y(n),w(e.callback_cancel,n,t,i))}(n,t,e,i),w(e.callback_exit,n,t,i))}(n.target,n,t,e)}))}(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(o,this),function(n,e){t&&window.addEventListener("online",(function(){!function(n,t){var e;(e=sn(n),ln(e).filter(fn)).forEach((function(t){O(t,n.class_error),y(t)})),t.update()}(n,e)}))}(o,this),this.update(e)};return _n.prototype={update:function(n){var t,o,a=this._settings,r=dn(n,a);z(this,r.length),!e&&i?un(a)?function(n,t,e){n.forEach((function(n){-1!==cn.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),tn(n,t,e),function(n,t){var e=J[n.tagName];e&&e(n,t)}(n,t),I(n,h)}(n,t,e)})),z(e,0)}(r,a,this):(o=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),sn(this._settings).forEach((function(n){S(n)})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;dn(n,e).forEach((function(n){C(n,t),en(n,e,t)}))},restoreAll:function(){var n=this._settings;sn(n).forEach((function(t){!function(n,t){(function(n){var t=rn[n.tagName];t?t(n):function(n){if(j(n)){var t=P(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){A(n)||k(n)||(O(n,t.class_entered),O(n,t.class_exited),O(n,t.class_applied),O(n,t.class_loading),O(n,t.class_loaded),O(n,t.class_error))}(n,t),y(n),S(n)}(t,n)}))}},_n.load=function(n,t){var e=c(t);en(n,e)},_n.resetStatus=function(n){y(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)u(n,e);else u(n,t)}(_n,window.lazyLoadOptions),_n}));