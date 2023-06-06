import{N as aa,O as w,P as ta,Q as j,R as ea,S as q,U as la,V as na,_ as sa,r as V,g as oa,h as F,b as N,c as U,j as X,k as Y,I as ia,J as ra,K as ca,i as H,m as da,L as ua,M as J}from"./index-8b8f96e7.js";function R(a,z,g,u){return a.params.createElements&&Object.keys(u).forEach(c=>{if(!g[c]&&g.auto===!0){let C=aa(a.el,`.${u[c]}`)[0];C||(C=w("div",u[c]),C.className=u[c],a.el.append(C)),g[c]=C,z[c]=C}}),g}function K({swiper:a,extendParams:z,on:g,emit:u}){z({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null};const c=l=>(Array.isArray(l)||(l=[l].filter(f=>!!f)),l);function C(l){let f;return l&&typeof l=="string"&&a.isElement&&(f=a.el.shadowRoot.querySelector(l),f)?f:(l&&(typeof l=="string"&&(f=[...document.querySelectorAll(l)]),a.params.uniqueNavElements&&typeof l=="string"&&f.length>1&&a.el.querySelectorAll(l).length===1&&(f=a.el.querySelector(l))),l&&!f?l:f)}function D(l,f){const v=a.params.navigation;l=c(l),l.forEach(t=>{t&&(t.classList[f?"add":"remove"](...v.disabledClass.split(" ")),t.tagName==="BUTTON"&&(t.disabled=f),a.params.watchOverflow&&a.enabled&&t.classList[a.isLocked?"add":"remove"](v.lockClass))})}function x(){const{nextEl:l,prevEl:f}=a.navigation;if(a.params.loop){D(f,!1),D(l,!1);return}D(f,a.isBeginning&&!a.params.rewind),D(l,a.isEnd&&!a.params.rewind)}function $(l){l.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),u("navigationPrev"))}function m(l){l.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),u("navigationNext"))}function L(){const l=a.params.navigation;if(a.params.navigation=R(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(l.nextEl||l.prevEl))return;let f=C(l.nextEl),v=C(l.prevEl);Object.assign(a.navigation,{nextEl:f,prevEl:v}),f=c(f),v=c(v);const t=(e,n)=>{e&&e.addEventListener("click",n==="next"?m:$),!a.enabled&&e&&e.classList.add(...l.lockClass.split(" "))};f.forEach(e=>t(e,"next")),v.forEach(e=>t(e,"prev"))}function E(){let{nextEl:l,prevEl:f}=a.navigation;l=c(l),f=c(f);const v=(t,e)=>{t.removeEventListener("click",e==="next"?m:$),t.classList.remove(...a.params.navigation.disabledClass.split(" "))};l.forEach(t=>v(t,"next")),f.forEach(t=>v(t,"prev"))}g("init",()=>{a.params.navigation.enabled===!1?A():(L(),x())}),g("toEdge fromEdge lock unlock",()=>{x()}),g("destroy",()=>{E()}),g("enable disable",()=>{let{nextEl:l,prevEl:f}=a.navigation;l=c(l),f=c(f),[...l,...f].filter(v=>!!v).forEach(v=>v.classList[a.enabled?"remove":"add"](a.params.navigation.lockClass))}),g("click",(l,f)=>{let{nextEl:v,prevEl:t}=a.navigation;v=c(v),t=c(t);const e=f.target;if(a.params.navigation.hideOnClick&&!t.includes(e)&&!v.includes(e)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===e||a.pagination.el.contains(e)))return;let n;v.length?n=v[0].classList.contains(a.params.navigation.hiddenClass):t.length&&(n=t[0].classList.contains(a.params.navigation.hiddenClass)),u(n===!0?"navigationShow":"navigationHide"),[...v,...t].filter(d=>!!d).forEach(d=>d.classList.toggle(a.params.navigation.hiddenClass))}});const k=()=>{a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),L(),x()},A=()=>{a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),E()};Object.assign(a.navigation,{enable:k,disable:A,update:x,init:L,destroy:E})}function P(a=""){return`.${a.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Q({swiper:a,extendParams:z,on:g,emit:u}){const c="swiper-pagination";z({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),a.pagination={el:null,bullets:[]};let C,D=0;const x=t=>(Array.isArray(t)||(t=[t].filter(e=>!!e)),t);function $(){return!a.params.pagination.el||!a.pagination.el||Array.isArray(a.pagination.el)&&a.pagination.el.length===0}function m(t,e){const{bulletActiveClass:n}=a.params.pagination;t&&(t=t[`${e==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${n}-${e}`),t=t[`${e==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${n}-${e}-${e}`)))}function L(t){const e=t.target.closest(P(a.params.pagination.bulletClass));if(!e)return;t.preventDefault();const n=j(e)*a.params.slidesPerGroup;if(a.params.loop){if(a.realIndex===n)return;const d=a.getSlideIndexByData(n),S=a.getSlideIndexByData(a.realIndex);d>a.slides.length-a.loopedSlides&&a.loopFix({direction:d>S?"next":"prev",activeSlideIndex:d,slideTo:!1}),a.slideToLoop(n)}else a.slideTo(n)}function E(){const t=a.rtl,e=a.params.pagination;if($())return;let n=a.pagination.el;n=x(n);let d,S;const I=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,M=a.params.loop?Math.ceil(I/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(S=a.previousRealIndex||0,d=a.params.slidesPerGroup>1?Math.floor(a.realIndex/a.params.slidesPerGroup):a.realIndex):typeof a.snapIndex<"u"?(d=a.snapIndex,S=a.previousSnapIndex):(S=a.previousIndex||0,d=a.activeIndex||0),e.type==="bullets"&&a.pagination.bullets&&a.pagination.bullets.length>0){const b=a.pagination.bullets;let O,T,i;if(e.dynamicBullets&&(C=ta(b[0],a.isHorizontal()?"width":"height",!0),n.forEach(r=>{r.style[a.isHorizontal()?"width":"height"]=`${C*(e.dynamicMainBullets+4)}px`}),e.dynamicMainBullets>1&&S!==void 0&&(D+=d-(S||0),D>e.dynamicMainBullets-1?D=e.dynamicMainBullets-1:D<0&&(D=0)),O=Math.max(d-D,0),T=O+(Math.min(b.length,e.dynamicMainBullets)-1),i=(T+O)/2),b.forEach(r=>{const s=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(o=>`${e.bulletActiveClass}${o}`)].map(o=>typeof o=="string"&&o.includes(" ")?o.split(" "):o).flat();r.classList.remove(...s)}),n.length>1)b.forEach(r=>{const s=j(r);s===d&&r.classList.add(...e.bulletActiveClass.split(" ")),e.dynamicBullets&&(s>=O&&s<=T&&r.classList.add(...`${e.bulletActiveClass}-main`.split(" ")),s===O&&m(r,"prev"),s===T&&m(r,"next"))});else{const r=b[d];if(r&&r.classList.add(...e.bulletActiveClass.split(" ")),e.dynamicBullets){const s=b[O],o=b[T];for(let p=O;p<=T;p+=1)b[p]&&b[p].classList.add(...`${e.bulletActiveClass}-main`.split(" "));m(s,"prev"),m(o,"next")}}if(e.dynamicBullets){const r=Math.min(b.length,e.dynamicMainBullets+4),s=(C*r-C)/2-i*C,o=t?"right":"left";b.forEach(p=>{p.style[a.isHorizontal()?o:"top"]=`${s}px`})}}n.forEach((b,O)=>{if(e.type==="fraction"&&(b.querySelectorAll(P(e.currentClass)).forEach(T=>{T.textContent=e.formatFractionCurrent(d+1)}),b.querySelectorAll(P(e.totalClass)).forEach(T=>{T.textContent=e.formatFractionTotal(M)})),e.type==="progressbar"){let T;e.progressbarOpposite?T=a.isHorizontal()?"vertical":"horizontal":T=a.isHorizontal()?"horizontal":"vertical";const i=(d+1)/M;let r=1,s=1;T==="horizontal"?r=i:s=i,b.querySelectorAll(P(e.progressbarFillClass)).forEach(o=>{o.style.transform=`translate3d(0,0,0) scaleX(${r}) scaleY(${s})`,o.style.transitionDuration=`${a.params.speed}ms`})}e.type==="custom"&&e.renderCustom?(b.innerHTML=e.renderCustom(a,d+1,M),O===0&&u("paginationRender",b)):(O===0&&u("paginationRender",b),u("paginationUpdate",b)),a.params.watchOverflow&&a.enabled&&b.classList[a.isLocked?"add":"remove"](e.lockClass)})}function k(){const t=a.params.pagination;if($())return;const e=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length;let n=a.pagination.el;n=x(n);let d="";if(t.type==="bullets"){let S=a.params.loop?Math.ceil(e/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&S>e&&(S=e);for(let I=0;I<S;I+=1)t.renderBullet?d+=t.renderBullet.call(a,I,t.bulletClass):d+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?d=t.renderFraction.call(a,t.currentClass,t.totalClass):d=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?d=t.renderProgressbar.call(a,t.progressbarFillClass):d=`<span class="${t.progressbarFillClass}"></span>`),a.pagination.bullets=[],n.forEach(S=>{t.type!=="custom"&&(S.innerHTML=d||""),t.type==="bullets"&&a.pagination.bullets.push(...S.querySelectorAll(P(t.bulletClass)))}),t.type!=="custom"&&u("paginationRender",n[0])}function A(){a.params.pagination=R(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const t=a.params.pagination;if(!t.el)return;let e;typeof t.el=="string"&&a.isElement&&(e=a.el.shadowRoot.querySelector(t.el)),!e&&typeof t.el=="string"&&(e=[...document.querySelectorAll(t.el)]),e||(e=t.el),!(!e||e.length===0)&&(a.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(e)&&e.length>1&&(e=[...a.el.querySelectorAll(t.el)],e.length>1&&(e=e.filter(n=>ea(n,".swiper")[0]===a.el)[0])),Array.isArray(e)&&e.length===1&&(e=e[0]),Object.assign(a.pagination,{el:e}),e=x(e),e.forEach(n=>{t.type==="bullets"&&t.clickable&&n.classList.add(t.clickableClass),n.classList.add(t.modifierClass+t.type),n.classList.add(a.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(n.classList.add(`${t.modifierClass}${t.type}-dynamic`),D=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&n.classList.add(t.progressbarOppositeClass),t.clickable&&n.addEventListener("click",L),a.enabled||n.classList.add(t.lockClass)}))}function l(){const t=a.params.pagination;if($())return;let e=a.pagination.el;e&&(e=x(e),e.forEach(n=>{n.classList.remove(t.hiddenClass),n.classList.remove(t.modifierClass+t.type),n.classList.remove(a.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&n.removeEventListener("click",L)})),a.pagination.bullets&&a.pagination.bullets.forEach(n=>n.classList.remove(...t.bulletActiveClass.split(" ")))}g("changeDirection",()=>{if(!a.pagination||!a.pagination.el)return;const t=a.params.pagination;let{el:e}=a.pagination;e=x(e),e.forEach(n=>{n.classList.remove(t.horizontalClass,t.verticalClass),n.classList.add(a.isHorizontal()?t.horizontalClass:t.verticalClass)})}),g("init",()=>{a.params.pagination.enabled===!1?v():(A(),k(),E())}),g("activeIndexChange",()=>{typeof a.snapIndex>"u"&&E()}),g("snapIndexChange",()=>{E()}),g("snapGridLengthChange",()=>{k(),E()}),g("destroy",()=>{l()}),g("enable disable",()=>{let{el:t}=a.pagination;t&&(t=x(t),t.forEach(e=>e.classList[a.enabled?"remove":"add"](a.params.pagination.lockClass)))}),g("lock unlock",()=>{E()}),g("click",(t,e)=>{const n=e.target;let{el:d}=a.pagination;if(Array.isArray(d)||(d=[d].filter(S=>!!S)),a.params.pagination.el&&a.params.pagination.hideOnClick&&d&&d.length>0&&!n.classList.contains(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&n===a.navigation.nextEl||a.navigation.prevEl&&n===a.navigation.prevEl))return;const S=d[0].classList.contains(a.params.pagination.hiddenClass);u(S===!0?"paginationShow":"paginationHide"),d.forEach(I=>I.classList.toggle(a.params.pagination.hiddenClass))}});const f=()=>{a.el.classList.remove(a.params.pagination.paginationDisabledClass);let{el:t}=a.pagination;t&&(t=x(t),t.forEach(e=>e.classList.remove(a.params.pagination.paginationDisabledClass))),A(),k(),E()},v=()=>{a.el.classList.add(a.params.pagination.paginationDisabledClass);let{el:t}=a.pagination;t&&(t=x(t),t.forEach(e=>e.classList.add(a.params.pagination.paginationDisabledClass))),l()};Object.assign(a.pagination,{enable:f,disable:v,render:k,update:E,init:A,destroy:l})}function W({swiper:a,extendParams:z,on:g,emit:u}){const c=q();let C=!1,D=null,x=null,$,m,L,E;z({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),a.scrollbar={el:null,dragEl:null};function k(){if(!a.params.scrollbar.el||!a.scrollbar.el)return;const{scrollbar:i,rtlTranslate:r}=a,{dragEl:s,el:o}=i,p=a.params.scrollbar,y=a.params.loop?a.progressLoop:a.progress;let B=m,h=(L-m)*y;r?(h=-h,h>0?(B=m-h,h=0):-h+m>L&&(B=L+h)):h<0?(B=m+h,h=0):h+m>L&&(B=L-h),a.isHorizontal()?(s.style.transform=`translate3d(${h}px, 0, 0)`,s.style.width=`${B}px`):(s.style.transform=`translate3d(0px, ${h}px, 0)`,s.style.height=`${B}px`),p.hide&&(clearTimeout(D),o.style.opacity=1,D=setTimeout(()=>{o.style.opacity=0,o.style.transitionDuration="400ms"},1e3))}function A(i){!a.params.scrollbar.el||!a.scrollbar.el||(a.scrollbar.dragEl.style.transitionDuration=`${i}ms`)}function l(){if(!a.params.scrollbar.el||!a.scrollbar.el)return;const{scrollbar:i}=a,{dragEl:r,el:s}=i;r.style.width="",r.style.height="",L=a.isHorizontal()?s.offsetWidth:s.offsetHeight,E=a.size/(a.virtualSize+a.params.slidesOffsetBefore-(a.params.centeredSlides?a.snapGrid[0]:0)),a.params.scrollbar.dragSize==="auto"?m=L*E:m=parseInt(a.params.scrollbar.dragSize,10),a.isHorizontal()?r.style.width=`${m}px`:r.style.height=`${m}px`,E>=1?s.style.display="none":s.style.display="",a.params.scrollbar.hide&&(s.style.opacity=0),a.params.watchOverflow&&a.enabled&&i.el.classList[a.isLocked?"add":"remove"](a.params.scrollbar.lockClass)}function f(i){return a.isHorizontal()?i.clientX:i.clientY}function v(i){const{scrollbar:r,rtlTranslate:s}=a,{el:o}=r;let p;p=(f(i)-na(o)[a.isHorizontal()?"left":"top"]-($!==null?$:m/2))/(L-m),p=Math.max(Math.min(p,1),0),s&&(p=1-p);const y=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*p;a.updateProgress(y),a.setTranslate(y),a.updateActiveIndex(),a.updateSlidesClasses()}function t(i){const r=a.params.scrollbar,{scrollbar:s,wrapperEl:o}=a,{el:p,dragEl:y}=s;C=!0,$=i.target===y?f(i)-i.target.getBoundingClientRect()[a.isHorizontal()?"left":"top"]:null,i.preventDefault(),i.stopPropagation(),o.style.transitionDuration="100ms",y.style.transitionDuration="100ms",v(i),clearTimeout(x),p.style.transitionDuration="0ms",r.hide&&(p.style.opacity=1),a.params.cssMode&&(a.wrapperEl.style["scroll-snap-type"]="none"),u("scrollbarDragStart",i)}function e(i){const{scrollbar:r,wrapperEl:s}=a,{el:o,dragEl:p}=r;C&&(i.preventDefault?i.preventDefault():i.returnValue=!1,v(i),s.style.transitionDuration="0ms",o.style.transitionDuration="0ms",p.style.transitionDuration="0ms",u("scrollbarDragMove",i))}function n(i){const r=a.params.scrollbar,{scrollbar:s,wrapperEl:o}=a,{el:p}=s;C&&(C=!1,a.params.cssMode&&(a.wrapperEl.style["scroll-snap-type"]="",o.style.transitionDuration=""),r.hide&&(clearTimeout(x),x=la(()=>{p.style.opacity=0,p.style.transitionDuration="400ms"},1e3)),u("scrollbarDragEnd",i),r.snapOnRelease&&a.slideToClosest())}function d(i){const{scrollbar:r,params:s}=a,o=r.el;if(!o)return;const p=o,y=s.passiveListeners?{passive:!1,capture:!1}:!1,B=s.passiveListeners?{passive:!0,capture:!1}:!1;if(!p)return;const h=i==="on"?"addEventListener":"removeEventListener";p[h]("pointerdown",t,y),c[h]("pointermove",e,y),c[h]("pointerup",n,B)}function S(){!a.params.scrollbar.el||!a.scrollbar.el||d("on")}function I(){!a.params.scrollbar.el||!a.scrollbar.el||d("off")}function M(){const{scrollbar:i,el:r}=a;a.params.scrollbar=R(a,a.originalParams.scrollbar,a.params.scrollbar,{el:"swiper-scrollbar"});const s=a.params.scrollbar;if(!s.el)return;let o;typeof s.el=="string"&&a.isElement&&(o=a.el.shadowRoot.querySelector(s.el)),!o&&typeof s.el=="string"?o=c.querySelectorAll(s.el):o||(o=s.el),a.params.uniqueNavElements&&typeof s.el=="string"&&o.length>1&&r.querySelectorAll(s.el).length===1&&(o=r.querySelector(s.el)),o.length>0&&(o=o[0]),o.classList.add(a.isHorizontal()?s.horizontalClass:s.verticalClass);let p;o&&(p=o.querySelector(`.${a.params.scrollbar.dragClass}`),p||(p=w("div",a.params.scrollbar.dragClass),o.append(p))),Object.assign(i,{el:o,dragEl:p}),s.draggable&&S(),o&&o.classList[a.enabled?"remove":"add"](a.params.scrollbar.lockClass)}function b(){const i=a.params.scrollbar,r=a.scrollbar.el;r&&r.classList.remove(a.isHorizontal()?i.horizontalClass:i.verticalClass),I()}g("init",()=>{a.params.scrollbar.enabled===!1?T():(M(),l(),k())}),g("update resize observerUpdate lock unlock",()=>{l()}),g("setTranslate",()=>{k()}),g("setTransition",(i,r)=>{A(r)}),g("enable disable",()=>{const{el:i}=a.scrollbar;i&&i.classList[a.enabled?"remove":"add"](a.params.scrollbar.lockClass)}),g("destroy",()=>{b()});const O=()=>{a.el.classList.remove(a.params.scrollbar.scrollbarDisabledClass),a.scrollbar.el&&a.scrollbar.el.classList.remove(a.params.scrollbar.scrollbarDisabledClass),M(),l(),k()},T=()=>{a.el.classList.add(a.params.scrollbar.scrollbarDisabledClass),a.scrollbar.el&&a.scrollbar.el.classList.add(a.params.scrollbar.scrollbarDisabledClass),b()};Object.assign(a.scrollbar,{enable:O,disable:T,updateSize:l,setTranslate:k,init:M,destroy:b})}function Z({swiper:a,extendParams:z,on:g,emit:u,params:c}){a.autoplay={running:!1,paused:!1,timeLeft:0},z({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let C,D,x=c&&c.autoplay?c.autoplay.delay:3e3,$=c&&c.autoplay?c.autoplay.delay:3e3,m,L=new Date().getTime,E,k,A,l,f,v;function t(y){!a||a.destroyed||!a.wrapperEl||y.target===a.wrapperEl&&(a.wrapperEl.removeEventListener("transitionend",t),b())}const e=()=>{if(a.destroyed||!a.autoplay.running)return;a.autoplay.paused?E=!0:E&&($=m,E=!1);const y=a.autoplay.paused?m:L+$-new Date().getTime();a.autoplay.timeLeft=y,u("autoplayTimeLeft",y,y/x),D=requestAnimationFrame(()=>{e()})},n=()=>{let y;return a.virtual&&a.params.virtual.enabled?y=a.slides.filter(h=>h.classList.contains("swiper-slide-active"))[0]:y=a.slides[a.activeIndex],y?parseInt(y.getAttribute("data-swiper-autoplay"),10):void 0},d=y=>{if(a.destroyed||!a.autoplay.running)return;cancelAnimationFrame(D),e();let B=typeof y>"u"?a.params.autoplay.delay:y;x=a.params.autoplay.delay,$=a.params.autoplay.delay;const h=n();!Number.isNaN(h)&&h>0&&typeof y>"u"&&(B=h,x=h,$=h),m=B;const _=a.params.speed,G=()=>{!a||a.destroyed||(a.params.autoplay.reverseDirection?!a.isBeginning||a.params.loop||a.params.rewind?(a.slidePrev(_,!0,!0),u("autoplay")):a.params.autoplay.stopOnLastSlide||(a.slideTo(a.slides.length-1,_,!0,!0),u("autoplay")):!a.isEnd||a.params.loop||a.params.rewind?(a.slideNext(_,!0,!0),u("autoplay")):a.params.autoplay.stopOnLastSlide||(a.slideTo(0,_,!0,!0),u("autoplay")),a.params.cssMode&&(L=new Date().getTime(),requestAnimationFrame(()=>{d()})))};return B>0?(clearTimeout(C),C=setTimeout(()=>{G()},B)):requestAnimationFrame(()=>{G()}),B},S=()=>{a.autoplay.running=!0,d(),u("autoplayStart")},I=()=>{a.autoplay.running=!1,clearTimeout(C),cancelAnimationFrame(D),u("autoplayStop")},M=(y,B)=>{if(a.destroyed||!a.autoplay.running)return;clearTimeout(C),y||(v=!0);const h=()=>{u("autoplayPause"),a.params.autoplay.waitForTransition?a.wrapperEl.addEventListener("transitionend",t):b()};if(a.autoplay.paused=!0,B){f&&(m=a.params.autoplay.delay),f=!1,h();return}m=(m||a.params.autoplay.delay)-(new Date().getTime()-L),!(a.isEnd&&m<0&&!a.params.loop)&&(m<0&&(m=0),h())},b=()=>{a.isEnd&&m<0&&!a.params.loop||a.destroyed||!a.autoplay.running||(L=new Date().getTime(),v?(v=!1,d(m)):d(),a.autoplay.paused=!1,u("autoplayResume"))},O=()=>{if(a.destroyed||!a.autoplay.running)return;const y=q();y.visibilityState==="hidden"&&(v=!0,M(!0)),y.visibilityState==="visible"&&b()},T=y=>{y.pointerType==="mouse"&&(v=!0,M(!0))},i=y=>{y.pointerType==="mouse"&&a.autoplay.paused&&b()},r=()=>{a.params.autoplay.pauseOnMouseEnter&&(a.el.addEventListener("pointerenter",T),a.el.addEventListener("pointerleave",i))},s=()=>{a.el.removeEventListener("pointerenter",T),a.el.removeEventListener("pointerleave",i)},o=()=>{q().addEventListener("visibilitychange",O)},p=()=>{q().removeEventListener("visibilitychange",O)};g("init",()=>{a.params.autoplay.enabled&&(r(),o(),L=new Date().getTime(),S())}),g("destroy",()=>{s(),p(),a.autoplay.running&&I()}),g("beforeTransitionStart",(y,B,h)=>{a.destroyed||!a.autoplay.running||(h||!a.params.autoplay.disableOnInteraction?M(!0,!0):I())}),g("sliderFirstMove",()=>{if(!(a.destroyed||!a.autoplay.running)){if(a.params.autoplay.disableOnInteraction){I();return}k=!0,A=!1,v=!1,l=setTimeout(()=>{v=!0,A=!0,M(!0)},200)}}),g("touchEnd",()=>{if(!(a.destroyed||!a.autoplay.running||!k)){if(clearTimeout(l),clearTimeout(C),a.params.autoplay.disableOnInteraction){A=!1,k=!1;return}A&&a.params.cssMode&&b(),A=!1,k=!1}}),g("slideChange",()=>{a.destroyed||!a.autoplay.running||(f=!0)}),Object.assign(a.autoplay,{start:S,stop:I,pause:M,resume:b})}const fa={components:[Z,Q,K,W],emits:["addSomeOne"],setup(a,z){const g=V([{id:21,w:1,drag:!0},{id:22,w:1,drag:!0},{id:23,w:1,drag:!0},{id:24,w:1,drag:!0},{id:25,w:1,drag:!0},{id:26,w:1,drag:!0},{id:27,w:1,drag:!0},{id:28,w:1,drag:!0},{id:29,w:1,drag:!0},{id:10,w:1,drag:!0},{id:11,w:1,drag:!0},{id:12,w:1,drag:!0},{id:13,w:1,drag:!0},{id:14,w:1,drag:!0},{id:15,w:1,drag:!0}]),{proxy:u}=oa();return{navigation:V({nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}),modules:[Z,Q,K,W],prevEl:(E,k)=>{},nextEl:()=>{},onSlideChange:E=>{console.log(E.activeIndex)},data:g,reduce:(E,k)=>{g.value.splice(E,1),console.log(u),z.emit("addSomeOne",k)},addSin:E=>{g.value.unshift(E)}}}},ga=["onClick"],ma={class:"addOut"};function ya(a,z,g,u,c,C){const D=F("CirclePlus"),x=F("swiper-slide"),$=F("swiper");return N(),U("div",null,[X($,{style:{width:"calc(100vw - 200px)"},modules:u.modules,loop:!0,"slides-per-view":4,"space-between":20,navigation:u.navigation,pagination:{clickable:!0},scrollbar:{draggable:!1},class:"swiperBox",onSlideChange:u.onSlideChange},{default:Y(()=>[(N(!0),U(ia,null,ra(u.data,(m,L)=>(N(),ca(x,null,{default:Y(()=>[H("div",{class:"box",onClick:E=>u.reduce(L,m)},[da(ua(m.id)+" ",1),H("div",ma,[X(D,{style:{width:"1.5rem",height:"1.5rem"}})])],8,ga)]),_:2},1024))),256)),H("div",{class:"swiper-button-prev",onClick:z[0]||(z[0]=J(m=>u.prevEl(a.item,a.index),["stop"]))},"《"),H("div",{class:"swiper-button-next",onClick:z[1]||(z[1]=J((...m)=>u.nextEl&&u.nextEl(...m),["stop"]))},"》")]),_:1},8,["modules","navigation","onSlideChange"])])}const pa=sa(fa,[["render",ya],["__scopeId","data-v-a1108c14"]]);export{pa as S};