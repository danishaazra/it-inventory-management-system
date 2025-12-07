import{r as mt,b as xt,a as Bt,g as fi,i as Tr}from"./firebase-app-CdRXrjY0.js";import{o as Er}from"./vendor-BdN5Q6dY.js";import{g as Ar}from"./firebase-auth-V8RQ8eEz.js";import{getFirestore as Sr}from"./firebase-firestore-DyzXcozE.js";var Yn={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=function(i){const r=[];let o=0;for(let u=0;u<i.length;u++){let c=i.charCodeAt(u);c<128?r[o++]=c:c<2048?(r[o++]=c>>6|192,r[o++]=c&63|128):(c&64512)===55296&&u+1<i.length&&(i.charCodeAt(u+1)&64512)===56320?(c=65536+((c&1023)<<10)+(i.charCodeAt(++u)&1023),r[o++]=c>>18|240,r[o++]=c>>12&63|128,r[o++]=c>>6&63|128,r[o++]=c&63|128):(r[o++]=c>>12|224,r[o++]=c>>6&63|128,r[o++]=c&63|128)}return r},br=function(i){const r=[];let o=0,u=0;for(;o<i.length;){const c=i[o++];if(c<128)r[u++]=String.fromCharCode(c);else if(c>191&&c<224){const v=i[o++];r[u++]=String.fromCharCode((c&31)<<6|v&63)}else if(c>239&&c<365){const v=i[o++],I=i[o++],w=i[o++],E=((c&7)<<18|(v&63)<<12|(I&63)<<6|w&63)-65536;r[u++]=String.fromCharCode(55296+(E>>10)),r[u++]=String.fromCharCode(56320+(E&1023))}else{const v=i[o++],I=i[o++];r[u++]=String.fromCharCode((c&15)<<12|(v&63)<<6|I&63)}}return r.join("")},gi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,r){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const o=r?this.byteToCharMapWebSafe_:this.byteToCharMap_,u=[];for(let c=0;c<i.length;c+=3){const v=i[c],I=c+1<i.length,w=I?i[c+1]:0,E=c+2<i.length,A=E?i[c+2]:0,P=v>>2,k=(v&3)<<4|w>>4;let C=(w&15)<<2|A>>6,M=A&63;E||(M=64,I||(C=64)),u.push(o[P],o[k],o[C],o[M])}return u.join("")},encodeString(i,r){return this.HAS_NATIVE_SUPPORT&&!r?btoa(i):this.encodeByteArray(pi(i),r)},decodeString(i,r){return this.HAS_NATIVE_SUPPORT&&!r?atob(i):br(this.decodeStringToByteArray(i,r))},decodeStringToByteArray(i,r){this.init_();const o=r?this.charToByteMapWebSafe_:this.charToByteMap_,u=[];for(let c=0;c<i.length;){const v=o[i.charAt(c++)],w=c<i.length?o[i.charAt(c)]:0;++c;const A=c<i.length?o[i.charAt(c)]:64;++c;const k=c<i.length?o[i.charAt(c)]:64;if(++c,v==null||w==null||A==null||k==null)throw new Cr;const C=v<<2|w>>4;if(u.push(C),A!==64){const M=w<<4&240|A>>2;if(u.push(M),k!==64){const b=A<<6&192|k;u.push(b)}}}return u},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Cr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _r=function(i){const r=pi(i);return gi.encodeByteArray(r,!0)},Zn=function(i){return _r(i).replace(/\./g,"")},Or=function(i){try{return gi.decodeString(i,!0)}catch(r){console.error("base64Decode failed: ",r)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=()=>Rr().__FIREBASE_DEFAULTS__,Dr=()=>{if(typeof process>"u"||typeof Yn>"u")return;const i=Yn.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Mr=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const r=i&&Or(i[1]);return r&&JSON.parse(r)},le=()=>{try{return kr()||Dr()||Mr()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},jr=i=>{var r,o;return(o=(r=le())===null||r===void 0?void 0:r.emulatorHosts)===null||o===void 0?void 0:o[i]},Pr=i=>{const r=jr(i);if(!r)return;const o=r.lastIndexOf(":");if(o<=0||o+1===r.length)throw new Error(`Invalid host ${r} with no separate hostname and port!`);const u=parseInt(r.substring(o+1),10);return r[0]==="["?[r.substring(1,o-1),u]:[r.substring(0,o),u]},Xo=()=>{var i;return(i=le())===null||i===void 0?void 0:i.config},Ko=i=>{var r;return(r=le())===null||r===void 0?void 0:r[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}wrapCallback(r){return(o,u)=>{o?this.reject(o):this.resolve(u),typeof r=="function"&&(this.promise.catch(()=>{}),r.length===1?r(o):r(o,u))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(i,r){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const o={alg:"none",type:"JWT"},u=r||"demo-project",c=i.iat||0,v=i.sub||i.user_id;if(!v)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const I=Object.assign({iss:`https://securetoken.google.com/${u}`,aud:u,iat:c,exp:c+3600,auth_time:c,sub:v,user_id:v,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Zn(JSON.stringify(o)),Zn(JSON.stringify(I)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(di())}function xr(){var i;const r=(i=le())===null||i===void 0?void 0:i.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lr(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Qo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ta(){const i=di();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ea(){return!xr()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Br(){try{return typeof indexedDB=="object"}catch{return!1}}function Fr(){return new Promise((i,r)=>{try{let o=!0;const u="validate-browser-context-for-indexeddb-analytics-module",c=self.indexedDB.open(u);c.onsuccess=()=>{c.result.close(),o||self.indexedDB.deleteDatabase(u),i(!0)},c.onupgradeneeded=()=>{o=!1},c.onerror=()=>{var v;r(((v=c.error)===null||v===void 0?void 0:v.message)||"")}}catch(o){r(o)}})}function Hr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="FirebaseError";class Ft extends Error{constructor(r,o,u){super(o),this.code=r,this.customData=u,this.name=Ur,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ve.prototype.create)}}class Ve{constructor(r,o,u){this.service=r,this.serviceName=o,this.errors=u}create(r,...o){const u=o[0]||{},c=`${this.service}/${r}`,v=this.errors[r],I=v?$r(v,u):"Error",w=`${this.serviceName}: ${I} (${c}).`;return new Ft(c,w,u)}}function $r(i,r){return i.replace(zr,(o,u)=>{const c=r[u];return c!=null?String(c):`<${u}?>`})}const zr=/\{\$([^}]+)}/g;function na(i){for(const r in i)if(Object.prototype.hasOwnProperty.call(i,r))return!1;return!0}function yi(i,r){if(i===r)return!0;const o=Object.keys(i),u=Object.keys(r);for(const c of o){if(!u.includes(c))return!1;const v=i[c],I=r[c];if(Qn(v)&&Qn(I)){if(!yi(v,I))return!1}else if(v!==I)return!1}for(const c of u)if(!o.includes(c))return!1;return!0}function Qn(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(i){const r=[];for(const[o,u]of Object.entries(i))Array.isArray(u)?u.forEach(c=>{r.push(encodeURIComponent(o)+"="+encodeURIComponent(c))}):r.push(encodeURIComponent(o)+"="+encodeURIComponent(u));return r.length?"&"+r.join("&"):""}function ra(i){const r={};return i.replace(/^\?/,"").split("&").forEach(u=>{if(u){const[c,v]=u.split("=");r[decodeURIComponent(c)]=decodeURIComponent(v)}}),r}function sa(i){const r=i.indexOf("?");if(!r)return"";const o=i.indexOf("#",r);return i.substring(r,o>0?o:void 0)}function oa(i,r){const o=new Vr(i,r);return o.subscribe.bind(o)}class Vr{constructor(r,o){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=o,this.task.then(()=>{r(this)}).catch(u=>{this.error(u)})}next(r){this.forEachObserver(o=>{o.next(r)})}error(r){this.forEachObserver(o=>{o.error(r)}),this.close(r)}complete(){this.forEachObserver(r=>{r.complete()}),this.close()}subscribe(r,o,u){let c;if(r===void 0&&o===void 0&&u===void 0)throw new Error("Missing Observer.");Gr(r,["next","error","complete"])?c=r:c={next:r,error:o,complete:u},c.next===void 0&&(c.next=Be),c.error===void 0&&(c.error=Be),c.complete===void 0&&(c.complete=Be);const v=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?c.error(this.finalError):c.complete()}catch{}}),this.observers.push(c),v}unsubscribeOne(r){this.observers===void 0||this.observers[r]===void 0||(delete this.observers[r],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(r){if(!this.finalized)for(let o=0;o<this.observers.length;o++)this.sendOne(o,r)}sendOne(r,o){this.task.then(()=>{if(this.observers!==void 0&&this.observers[r]!==void 0)try{o(this.observers[r])}catch(u){typeof console<"u"&&console.error&&console.error(u)}})}close(r){this.finalized||(this.finalized=!0,r!==void 0&&(this.finalError=r),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gr(i,r){if(typeof i!="object"||i===null)return!1;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}function Be(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=1e3,Wr=2,Xr=4*60*60*1e3,Kr=.5;function ti(i,r=qr,o=Wr){const u=r*Math.pow(o,i),c=Math.round(Kr*u*(Math.random()-.5)*2);return Math.min(Xr,u+c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(i){return i&&i._delegate?i._delegate:i}class Lt{constructor(r,o,u){this.name=r,this.instanceFactory=o,this.type=u,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(r){return this.instantiationMode=r,this}setMultipleInstances(r){return this.multipleInstances=r,this}setServiceProps(r){return this.serviceProps=r,this}setInstanceCreatedCallback(r){return this.onInstanceCreated=r,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(r,o){this.name=r,this.container=o,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(r){const o=this.normalizeInstanceIdentifier(r);if(!this.instancesDeferred.has(o)){const u=new Nr;if(this.instancesDeferred.set(o,u),this.isInitialized(o)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:o});c&&u.resolve(c)}catch{}}return this.instancesDeferred.get(o).promise}getImmediate(r){var o;const u=this.normalizeInstanceIdentifier(r==null?void 0:r.identifier),c=(o=r==null?void 0:r.optional)!==null&&o!==void 0?o:!1;if(this.isInitialized(u)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:u})}catch(v){if(c)return null;throw v}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(r){if(r.name!==this.name)throw Error(`Mismatching Component ${r.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=r,!!this.shouldAutoInitialize()){if(Zr(r))try{this.getOrInitializeService({instanceIdentifier:ht})}catch{}for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);try{const v=this.getOrInitializeService({instanceIdentifier:c});u.resolve(v)}catch{}}}}clearInstance(r=ht){this.instancesDeferred.delete(r),this.instancesOptions.delete(r),this.instances.delete(r)}async delete(){const r=Array.from(this.instances.values());await Promise.all([...r.filter(o=>"INTERNAL"in o).map(o=>o.INTERNAL.delete()),...r.filter(o=>"_delete"in o).map(o=>o._delete())])}isComponentSet(){return this.component!=null}isInitialized(r=ht){return this.instances.has(r)}getOptions(r=ht){return this.instancesOptions.get(r)||{}}initialize(r={}){const{options:o={}}=r,u=this.normalizeInstanceIdentifier(r.instanceIdentifier);if(this.isInitialized(u))throw Error(`${this.name}(${u}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const c=this.getOrInitializeService({instanceIdentifier:u,options:o});for(const[v,I]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(v);u===w&&I.resolve(c)}return c}onInit(r,o){var u;const c=this.normalizeInstanceIdentifier(o),v=(u=this.onInitCallbacks.get(c))!==null&&u!==void 0?u:new Set;v.add(r),this.onInitCallbacks.set(c,v);const I=this.instances.get(c);return I&&r(I,c),()=>{v.delete(r)}}invokeOnInitCallbacks(r,o){const u=this.onInitCallbacks.get(o);if(u)for(const c of u)try{c(r,o)}catch{}}getOrInitializeService({instanceIdentifier:r,options:o={}}){let u=this.instances.get(r);if(!u&&this.component&&(u=this.component.instanceFactory(this.container,{instanceIdentifier:Yr(r),options:o}),this.instances.set(r,u),this.instancesOptions.set(r,o),this.invokeOnInitCallbacks(u,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,u)}catch{}return u||null}normalizeInstanceIdentifier(r=ht){return this.component?this.component.multipleInstances?r:ht:r}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yr(i){return i===ht?void 0:i}function Zr(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(r){this.name=r,this.providers=new Map}addComponent(r){const o=this.getProvider(r.name);if(o.isComponentSet())throw new Error(`Component ${r.name} has already been registered with ${this.name}`);o.setComponent(r)}addOrOverwriteComponent(r){this.getProvider(r.name).isComponentSet()&&this.providers.delete(r.name),this.addComponent(r)}getProvider(r){if(this.providers.has(r))return this.providers.get(r);const o=new Jr(r,this);return this.providers.set(r,o),o}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(R||(R={}));const Qr={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},ts=R.INFO,es={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},ns=(i,r,...o)=>{if(r<i.logLevel)return;const u=new Date().toISOString(),c=es[r];if(c)console[c](`[${u}]  ${i.name}:`,...o);else throw new Error(`Attempted to log a message with an invalid logType (value: ${r})`)};class is{constructor(r){this.name=r,this._logLevel=ts,this._logHandler=ns,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(r){if(!(r in R))throw new TypeError(`Invalid value "${r}" assigned to \`logLevel\``);this._logLevel=r}setLogLevel(r){this._logLevel=typeof r=="string"?Qr[r]:r}get logHandler(){return this._logHandler}set logHandler(r){if(typeof r!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=r}get userLogHandler(){return this._userLogHandler}set userLogHandler(r){this._userLogHandler=r}debug(...r){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...r),this._logHandler(this,R.DEBUG,...r)}log(...r){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...r),this._logHandler(this,R.VERBOSE,...r)}info(...r){this._userLogHandler&&this._userLogHandler(this,R.INFO,...r),this._logHandler(this,R.INFO,...r)}warn(...r){this._userLogHandler&&this._userLogHandler(this,R.WARN,...r),this._logHandler(this,R.WARN,...r)}error(...r){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...r),this._logHandler(this,R.ERROR,...r)}}const mi="@firebase/installations",Ge="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=1e4,wi=`w:${Ge}`,Ii="FIS_v2",rs="https://firebaseinstallations.googleapis.com/v1",ss=60*60*1e3,os="installations",as="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ut=new Ve(os,as,hs);function Ti(i){return i instanceof Ft&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei({projectId:i}){return`${rs}/projects/${i}/installations`}function Ai(i){return{token:i.token,requestStatus:2,expiresIn:us(i.expiresIn),creationTime:Date.now()}}async function Si(i,r){const u=(await r.json()).error;return ut.create("request-failed",{requestName:i,serverCode:u.code,serverMessage:u.message,serverStatus:u.status})}function bi({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function ls(i,{refreshToken:r}){const o=bi(i);return o.append("Authorization",cs(r)),o}async function Ci(i){const r=await i();return r.status>=500&&r.status<600?i():r}function us(i){return Number(i.replace("s","000"))}function cs(i){return`${Ii} ${i}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs({appConfig:i,heartbeatServiceProvider:r},{fid:o}){const u=Ei(i),c=bi(i),v=r.getImmediate({optional:!0});if(v){const A=await v.getHeartbeatsHeader();A&&c.append("x-firebase-client",A)}const I={fid:o,authVersion:Ii,appId:i.appId,sdkVersion:wi},w={method:"POST",headers:c,body:JSON.stringify(I)},E=await Ci(()=>fetch(u,w));if(E.ok){const A=await E.json();return{fid:A.fid||o,registrationStatus:2,refreshToken:A.refreshToken,authToken:Ai(A.authToken)}}else throw await Si("Create Installation",E)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(i){return new Promise(r=>{setTimeout(r,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=/^[cdef][\w-]{21}$/,$e="";function ds(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const o=ys(i);return gs.test(o)?o:$e}catch{return $e}}function ys(i){return ps(i).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Map;function Ri(i,r){const o=ce(i);ki(o,r),ms(o,r)}function ki(i,r){const o=Oi.get(i);if(o)for(const u of o)u(r)}function ms(i,r){const o=vs();o&&o.postMessage({key:i,fid:r}),ws()}let lt=null;function vs(){return!lt&&"BroadcastChannel"in self&&(lt=new BroadcastChannel("[Firebase] FID Change"),lt.onmessage=i=>{ki(i.data.key,i.data.fid)}),lt}function ws(){Oi.size===0&&lt&&(lt.close(),lt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="firebase-installations-database",Ts=1,ct="firebase-installations-store";let Fe=null;function qe(){return Fe||(Fe=Er(Is,Ts,{upgrade:(i,r)=>{switch(r){case 0:i.createObjectStore(ct)}}})),Fe}async function ae(i,r){const o=ce(i),c=(await qe()).transaction(ct,"readwrite"),v=c.objectStore(ct),I=await v.get(o);return await v.put(r,o),await c.done,(!I||I.fid!==r.fid)&&Ri(i,r.fid),r}async function Di(i){const r=ce(i),u=(await qe()).transaction(ct,"readwrite");await u.objectStore(ct).delete(r),await u.done}async function fe(i,r){const o=ce(i),c=(await qe()).transaction(ct,"readwrite"),v=c.objectStore(ct),I=await v.get(o),w=r(I);return w===void 0?await v.delete(o):await v.put(w,o),await c.done,w&&(!I||I.fid!==w.fid)&&Ri(i,w.fid),w}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(i){let r;const o=await fe(i.appConfig,u=>{const c=Es(u),v=As(i,c);return r=v.registrationPromise,v.installationEntry});return o.fid===$e?{installationEntry:await r}:{installationEntry:o,registrationPromise:r}}function Es(i){const r=i||{fid:ds(),registrationStatus:0};return Mi(r)}function As(i,r){if(r.registrationStatus===0){if(!navigator.onLine){const c=Promise.reject(ut.create("app-offline"));return{installationEntry:r,registrationPromise:c}}const o={fid:r.fid,registrationStatus:1,registrationTime:Date.now()},u=Ss(i,o);return{installationEntry:o,registrationPromise:u}}else return r.registrationStatus===1?{installationEntry:r,registrationPromise:bs(i)}:{installationEntry:r}}async function Ss(i,r){try{const o=await fs(i,r);return ae(i.appConfig,o)}catch(o){throw Ti(o)&&o.customData.serverCode===409?await Di(i.appConfig):await ae(i.appConfig,{fid:r.fid,registrationStatus:0}),o}}async function bs(i){let r=await ei(i.appConfig);for(;r.registrationStatus===1;)await _i(100),r=await ei(i.appConfig);if(r.registrationStatus===0){const{installationEntry:o,registrationPromise:u}=await We(i);return u||o}return r}function ei(i){return fe(i,r=>{if(!r)throw ut.create("installation-not-found");return Mi(r)})}function Mi(i){return Cs(i)?{fid:i.fid,registrationStatus:0}:i}function Cs(i){return i.registrationStatus===1&&i.registrationTime+vi<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s({appConfig:i,heartbeatServiceProvider:r},o){const u=Os(i,o),c=ls(i,o),v=r.getImmediate({optional:!0});if(v){const A=await v.getHeartbeatsHeader();A&&c.append("x-firebase-client",A)}const I={installation:{sdkVersion:wi,appId:i.appId}},w={method:"POST",headers:c,body:JSON.stringify(I)},E=await Ci(()=>fetch(u,w));if(E.ok){const A=await E.json();return Ai(A)}else throw await Si("Generate Auth Token",E)}function Os(i,{fid:r}){return`${Ei(i)}/${r}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(i,r=!1){let o;const u=await fe(i.appConfig,v=>{if(!ji(v))throw ut.create("not-registered");const I=v.authToken;if(!r&&Ds(I))return v;if(I.requestStatus===1)return o=Rs(i,r),v;{if(!navigator.onLine)throw ut.create("app-offline");const w=js(v);return o=ks(i,w),w}});return o?await o:u.authToken}async function Rs(i,r){let o=await ni(i.appConfig);for(;o.authToken.requestStatus===1;)await _i(100),o=await ni(i.appConfig);const u=o.authToken;return u.requestStatus===0?Xe(i,r):u}function ni(i){return fe(i,r=>{if(!ji(r))throw ut.create("not-registered");const o=r.authToken;return Ps(o)?Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}):r})}async function ks(i,r){try{const o=await _s(i,r),u=Object.assign(Object.assign({},r),{authToken:o});return await ae(i.appConfig,u),o}catch(o){if(Ti(o)&&(o.customData.serverCode===401||o.customData.serverCode===404))await Di(i.appConfig);else{const u=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}});await ae(i.appConfig,u)}throw o}}function ji(i){return i!==void 0&&i.registrationStatus===2}function Ds(i){return i.requestStatus===2&&!Ms(i)}function Ms(i){const r=Date.now();return r<i.creationTime||i.creationTime+i.expiresIn<r+ss}function js(i){const r={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:r})}function Ps(i){return i.requestStatus===1&&i.requestTime+vi<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(i){const r=i,{installationEntry:o,registrationPromise:u}=await We(r);return u?u.catch(console.error):Xe(r).catch(console.error),o.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(i,r=!1){const o=i;return await Ls(o),(await Xe(o,r)).token}async function Ls(i){const{registrationPromise:r}=await We(i);r&&await r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(i){if(!i||!i.options)throw He("App Configuration");if(!i.name)throw He("App Name");const r=["projectId","apiKey","appId"];for(const o of r)if(!i.options[o])throw He(o);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function He(i){return ut.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="installations",Fs="installations-internal",Hs=i=>{const r=i.getProvider("app").getImmediate(),o=Bs(r),u=Bt(r,"heartbeat");return{app:r,appConfig:o,heartbeatServiceProvider:u,_delete:()=>Promise.resolve()}},Us=i=>{const r=i.getProvider("app").getImmediate(),o=Bt(r,Pi).getImmediate();return{getId:()=>Ns(o),getToken:c=>xs(o,c)}};function $s(){xt(new Lt(Pi,Hs,"PUBLIC")),xt(new Lt(Fs,Us,"PRIVATE"))}$s();mt(mi,Ge);mt(mi,Ge,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="analytics",zs="firebase_id",Vs="origin",Gs=60*1e3,qs="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ke="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=new is("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},G=new Ve("analytics","Analytics",Ws);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(i){if(!i.startsWith(Ke)){const r=G.create("invalid-gtag-resource",{gtagURL:i});return z.warn(r.message),""}return i}function Ni(i){return Promise.all(i.map(r=>r.catch(o=>o)))}function Ks(i,r){let o;return window.trustedTypes&&(o=window.trustedTypes.createPolicy(i,r)),o}function Js(i,r){const o=Ks("firebase-js-sdk-policy",{createScriptURL:Xs}),u=document.createElement("script"),c=`${Ke}?l=${i}&id=${r}`;u.src=o?o==null?void 0:o.createScriptURL(c):c,u.async=!0,document.head.appendChild(u)}function Ys(i){let r=[];return Array.isArray(window[i])?r=window[i]:window[i]=r,r}async function Zs(i,r,o,u,c,v){const I=u[c];try{if(I)await r[I];else{const E=(await Ni(o)).find(A=>A.measurementId===c);E&&await r[E.appId]}}catch(w){z.error(w)}i("config",c,v)}async function Qs(i,r,o,u,c){try{let v=[];if(c&&c.send_to){let I=c.send_to;Array.isArray(I)||(I=[I]);const w=await Ni(o);for(const E of I){const A=w.find(k=>k.measurementId===E),P=A&&r[A.appId];if(P)v.push(P);else{v=[];break}}}v.length===0&&(v=Object.values(r)),await Promise.all(v),i("event",u,c||{})}catch(v){z.error(v)}}function to(i,r,o,u){async function c(v,...I){try{if(v==="event"){const[w,E]=I;await Qs(i,r,o,w,E)}else if(v==="config"){const[w,E]=I;await Zs(i,r,o,u,w,E)}else if(v==="consent"){const[w,E]=I;i("consent",w,E)}else if(v==="get"){const[w,E,A]=I;i("get",w,E,A)}else if(v==="set"){const[w]=I;i("set",w)}else i(v,...I)}catch(w){z.error(w)}}return c}function eo(i,r,o,u,c){let v=function(...I){window[u].push(arguments)};return window[c]&&typeof window[c]=="function"&&(v=window[c]),window[c]=to(v,i,r,o),{gtagCore:v,wrappedGtag:window[c]}}function no(i){const r=window.document.getElementsByTagName("script");for(const o of Object.values(r))if(o.src&&o.src.includes(Ke)&&o.src.includes(i))return o;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=30,ro=1e3;class so{constructor(r={},o=ro){this.throttleMetadata=r,this.intervalMillis=o}getThrottleMetadata(r){return this.throttleMetadata[r]}setThrottleMetadata(r,o){this.throttleMetadata[r]=o}deleteThrottleMetadata(r){delete this.throttleMetadata[r]}}const xi=new so;function oo(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function ao(i){var r;const{appId:o,apiKey:u}=i,c={method:"GET",headers:oo(u)},v=qs.replace("{app-id}",o),I=await fetch(v,c);if(I.status!==200&&I.status!==304){let w="";try{const E=await I.json();!((r=E.error)===null||r===void 0)&&r.message&&(w=E.error.message)}catch{}throw G.create("config-fetch-failed",{httpStatus:I.status,responseMessage:w})}return I.json()}async function ho(i,r=xi,o){const{appId:u,apiKey:c,measurementId:v}=i.options;if(!u)throw G.create("no-app-id");if(!c){if(v)return{measurementId:v,appId:u};throw G.create("no-api-key")}const I=r.getThrottleMetadata(u)||{backoffCount:0,throttleEndTimeMillis:Date.now()},w=new co;return setTimeout(async()=>{w.abort()},Gs),Li({appId:u,apiKey:c,measurementId:v},I,w,r)}async function Li(i,{throttleEndTimeMillis:r,backoffCount:o},u,c=xi){var v;const{appId:I,measurementId:w}=i;try{await lo(u,r)}catch(E){if(w)return z.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${w} provided in the "measurementId" field in the local Firebase config. [${E==null?void 0:E.message}]`),{appId:I,measurementId:w};throw E}try{const E=await ao(i);return c.deleteThrottleMetadata(I),E}catch(E){const A=E;if(!uo(A)){if(c.deleteThrottleMetadata(I),w)return z.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${w} provided in the "measurementId" field in the local Firebase config. [${A==null?void 0:A.message}]`),{appId:I,measurementId:w};throw E}const P=Number((v=A==null?void 0:A.customData)===null||v===void 0?void 0:v.httpStatus)===503?ti(o,c.intervalMillis,io):ti(o,c.intervalMillis),k={throttleEndTimeMillis:Date.now()+P,backoffCount:o+1};return c.setThrottleMetadata(I,k),z.debug(`Calling attemptFetch again in ${P} millis`),Li(i,k,u,c)}}function lo(i,r){return new Promise((o,u)=>{const c=Math.max(r-Date.now(),0),v=setTimeout(o,c);i.addEventListener(()=>{clearTimeout(v),u(G.create("fetch-throttle",{throttleEndTimeMillis:r}))})})}function uo(i){if(!(i instanceof Ft)||!i.customData)return!1;const r=Number(i.customData.httpStatus);return r===429||r===500||r===503||r===504}class co{constructor(){this.listeners=[]}addEventListener(r){this.listeners.push(r)}abort(){this.listeners.forEach(r=>r())}}async function fo(i,r,o,u,c){if(c&&c.global){i("event",o,u);return}else{const v=await r,I=Object.assign(Object.assign({},u),{send_to:v});i("event",o,I)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(){if(Br())try{await Fr()}catch(i){return z.warn(G.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return z.warn(G.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function go(i,r,o,u,c,v,I){var w;const E=ho(i);E.then(M=>{o[M.measurementId]=M.appId,i.options.measurementId&&M.measurementId!==i.options.measurementId&&z.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${M.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(M=>z.error(M)),r.push(E);const A=po().then(M=>{if(M)return u.getId()}),[P,k]=await Promise.all([E,A]);no(v)||Js(v,P.measurementId),c("js",new Date);const C=(w=I==null?void 0:I.config)!==null&&w!==void 0?w:{};return C[Vs]="firebase",C.update=!0,k!=null&&(C[zs]=k),c("config",P.measurementId,C),P.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(r){this.app=r}_delete(){return delete Nt[this.app.options.appId],Promise.resolve()}}let Nt={},ii=[];const ri={};let Ue="dataLayer",mo="gtag",si,Bi,oi=!1;function vo(){const i=[];if(Lr()&&i.push("This is a browser extension environment."),Hr()||i.push("Cookies are not available."),i.length>0){const r=i.map((u,c)=>`(${c+1}) ${u}`).join(" "),o=G.create("invalid-analytics-context",{errorInfo:r});z.warn(o.message)}}function wo(i,r,o){vo();const u=i.options.appId;if(!u)throw G.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)z.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw G.create("no-api-key");if(Nt[u]!=null)throw G.create("already-exists",{id:u});if(!oi){Ys(Ue);const{wrappedGtag:v,gtagCore:I}=eo(Nt,ii,ri,Ue,mo);Bi=v,si=I,oi=!0}return Nt[u]=go(i,ii,ri,r,si,Ue,o),new yo(i)}function Io(i=fi()){i=ue(i);const r=Bt(i,he);return r.isInitialized()?r.getImmediate():To(i)}function To(i,r={}){const o=Bt(i,he);if(o.isInitialized()){const c=o.getImmediate();if(yi(r,o.getOptions()))return c;throw G.create("already-initialized")}return o.initialize({options:r})}function Eo(i,r,o,u){i=ue(i),fo(Bi,Nt[i.app.options.appId],r,o,u).catch(c=>z.error(c))}const ai="@firebase/analytics",hi="0.10.8";function Ao(){xt(new Lt(he,(r,{options:o})=>{const u=r.getProvider("app").getImmediate(),c=r.getProvider("installations-internal").getImmediate();return wo(u,c,o)},"PUBLIC")),xt(new Lt("analytics-internal",i,"PRIVATE")),mt(ai,hi),mt(ai,hi,"esm2017");function i(r){try{const o=r.getProvider(he).getImmediate();return{logEvent:(u,c,v)=>Eo(o,u,c,v)}}catch(o){throw G.create("interop-component-reg-failed",{reason:o})}}}Ao();var li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var So,bo;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function r(g,a){function l(){}l.prototype=a.prototype,g.D=a.prototype,g.prototype=new l,g.prototype.constructor=g,g.C=function(f,p,y){for(var h=Array(arguments.length-2),J=2;J<arguments.length;J++)h[J-2]=arguments[J];return a.prototype[p].apply(f,h)}}function o(){this.blockSize=-1}function u(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}r(u,o),u.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function c(g,a,l){l||(l=0);var f=Array(16);if(typeof a=="string")for(var p=0;16>p;++p)f[p]=a.charCodeAt(l++)|a.charCodeAt(l++)<<8|a.charCodeAt(l++)<<16|a.charCodeAt(l++)<<24;else for(p=0;16>p;++p)f[p]=a[l++]|a[l++]<<8|a[l++]<<16|a[l++]<<24;a=g.g[0],l=g.g[1],p=g.g[2];var y=g.g[3],h=a+(y^l&(p^y))+f[0]+3614090360&4294967295;a=l+(h<<7&4294967295|h>>>25),h=y+(p^a&(l^p))+f[1]+3905402710&4294967295,y=a+(h<<12&4294967295|h>>>20),h=p+(l^y&(a^l))+f[2]+606105819&4294967295,p=y+(h<<17&4294967295|h>>>15),h=l+(a^p&(y^a))+f[3]+3250441966&4294967295,l=p+(h<<22&4294967295|h>>>10),h=a+(y^l&(p^y))+f[4]+4118548399&4294967295,a=l+(h<<7&4294967295|h>>>25),h=y+(p^a&(l^p))+f[5]+1200080426&4294967295,y=a+(h<<12&4294967295|h>>>20),h=p+(l^y&(a^l))+f[6]+2821735955&4294967295,p=y+(h<<17&4294967295|h>>>15),h=l+(a^p&(y^a))+f[7]+4249261313&4294967295,l=p+(h<<22&4294967295|h>>>10),h=a+(y^l&(p^y))+f[8]+1770035416&4294967295,a=l+(h<<7&4294967295|h>>>25),h=y+(p^a&(l^p))+f[9]+2336552879&4294967295,y=a+(h<<12&4294967295|h>>>20),h=p+(l^y&(a^l))+f[10]+4294925233&4294967295,p=y+(h<<17&4294967295|h>>>15),h=l+(a^p&(y^a))+f[11]+2304563134&4294967295,l=p+(h<<22&4294967295|h>>>10),h=a+(y^l&(p^y))+f[12]+1804603682&4294967295,a=l+(h<<7&4294967295|h>>>25),h=y+(p^a&(l^p))+f[13]+4254626195&4294967295,y=a+(h<<12&4294967295|h>>>20),h=p+(l^y&(a^l))+f[14]+2792965006&4294967295,p=y+(h<<17&4294967295|h>>>15),h=l+(a^p&(y^a))+f[15]+1236535329&4294967295,l=p+(h<<22&4294967295|h>>>10),h=a+(p^y&(l^p))+f[1]+4129170786&4294967295,a=l+(h<<5&4294967295|h>>>27),h=y+(l^p&(a^l))+f[6]+3225465664&4294967295,y=a+(h<<9&4294967295|h>>>23),h=p+(a^l&(y^a))+f[11]+643717713&4294967295,p=y+(h<<14&4294967295|h>>>18),h=l+(y^a&(p^y))+f[0]+3921069994&4294967295,l=p+(h<<20&4294967295|h>>>12),h=a+(p^y&(l^p))+f[5]+3593408605&4294967295,a=l+(h<<5&4294967295|h>>>27),h=y+(l^p&(a^l))+f[10]+38016083&4294967295,y=a+(h<<9&4294967295|h>>>23),h=p+(a^l&(y^a))+f[15]+3634488961&4294967295,p=y+(h<<14&4294967295|h>>>18),h=l+(y^a&(p^y))+f[4]+3889429448&4294967295,l=p+(h<<20&4294967295|h>>>12),h=a+(p^y&(l^p))+f[9]+568446438&4294967295,a=l+(h<<5&4294967295|h>>>27),h=y+(l^p&(a^l))+f[14]+3275163606&4294967295,y=a+(h<<9&4294967295|h>>>23),h=p+(a^l&(y^a))+f[3]+4107603335&4294967295,p=y+(h<<14&4294967295|h>>>18),h=l+(y^a&(p^y))+f[8]+1163531501&4294967295,l=p+(h<<20&4294967295|h>>>12),h=a+(p^y&(l^p))+f[13]+2850285829&4294967295,a=l+(h<<5&4294967295|h>>>27),h=y+(l^p&(a^l))+f[2]+4243563512&4294967295,y=a+(h<<9&4294967295|h>>>23),h=p+(a^l&(y^a))+f[7]+1735328473&4294967295,p=y+(h<<14&4294967295|h>>>18),h=l+(y^a&(p^y))+f[12]+2368359562&4294967295,l=p+(h<<20&4294967295|h>>>12),h=a+(l^p^y)+f[5]+4294588738&4294967295,a=l+(h<<4&4294967295|h>>>28),h=y+(a^l^p)+f[8]+2272392833&4294967295,y=a+(h<<11&4294967295|h>>>21),h=p+(y^a^l)+f[11]+1839030562&4294967295,p=y+(h<<16&4294967295|h>>>16),h=l+(p^y^a)+f[14]+4259657740&4294967295,l=p+(h<<23&4294967295|h>>>9),h=a+(l^p^y)+f[1]+2763975236&4294967295,a=l+(h<<4&4294967295|h>>>28),h=y+(a^l^p)+f[4]+1272893353&4294967295,y=a+(h<<11&4294967295|h>>>21),h=p+(y^a^l)+f[7]+4139469664&4294967295,p=y+(h<<16&4294967295|h>>>16),h=l+(p^y^a)+f[10]+3200236656&4294967295,l=p+(h<<23&4294967295|h>>>9),h=a+(l^p^y)+f[13]+681279174&4294967295,a=l+(h<<4&4294967295|h>>>28),h=y+(a^l^p)+f[0]+3936430074&4294967295,y=a+(h<<11&4294967295|h>>>21),h=p+(y^a^l)+f[3]+3572445317&4294967295,p=y+(h<<16&4294967295|h>>>16),h=l+(p^y^a)+f[6]+76029189&4294967295,l=p+(h<<23&4294967295|h>>>9),h=a+(l^p^y)+f[9]+3654602809&4294967295,a=l+(h<<4&4294967295|h>>>28),h=y+(a^l^p)+f[12]+3873151461&4294967295,y=a+(h<<11&4294967295|h>>>21),h=p+(y^a^l)+f[15]+530742520&4294967295,p=y+(h<<16&4294967295|h>>>16),h=l+(p^y^a)+f[2]+3299628645&4294967295,l=p+(h<<23&4294967295|h>>>9),h=a+(p^(l|~y))+f[0]+4096336452&4294967295,a=l+(h<<6&4294967295|h>>>26),h=y+(l^(a|~p))+f[7]+1126891415&4294967295,y=a+(h<<10&4294967295|h>>>22),h=p+(a^(y|~l))+f[14]+2878612391&4294967295,p=y+(h<<15&4294967295|h>>>17),h=l+(y^(p|~a))+f[5]+4237533241&4294967295,l=p+(h<<21&4294967295|h>>>11),h=a+(p^(l|~y))+f[12]+1700485571&4294967295,a=l+(h<<6&4294967295|h>>>26),h=y+(l^(a|~p))+f[3]+2399980690&4294967295,y=a+(h<<10&4294967295|h>>>22),h=p+(a^(y|~l))+f[10]+4293915773&4294967295,p=y+(h<<15&4294967295|h>>>17),h=l+(y^(p|~a))+f[1]+2240044497&4294967295,l=p+(h<<21&4294967295|h>>>11),h=a+(p^(l|~y))+f[8]+1873313359&4294967295,a=l+(h<<6&4294967295|h>>>26),h=y+(l^(a|~p))+f[15]+4264355552&4294967295,y=a+(h<<10&4294967295|h>>>22),h=p+(a^(y|~l))+f[6]+2734768916&4294967295,p=y+(h<<15&4294967295|h>>>17),h=l+(y^(p|~a))+f[13]+1309151649&4294967295,l=p+(h<<21&4294967295|h>>>11),h=a+(p^(l|~y))+f[4]+4149444226&4294967295,a=l+(h<<6&4294967295|h>>>26),h=y+(l^(a|~p))+f[11]+3174756917&4294967295,y=a+(h<<10&4294967295|h>>>22),h=p+(a^(y|~l))+f[2]+718787259&4294967295,p=y+(h<<15&4294967295|h>>>17),h=l+(y^(p|~a))+f[9]+3951481745&4294967295,g.g[0]=g.g[0]+a&4294967295,g.g[1]=g.g[1]+(p+(h<<21&4294967295|h>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+y&4294967295}u.prototype.u=function(g,a){a===void 0&&(a=g.length);for(var l=a-this.blockSize,f=this.B,p=this.h,y=0;y<a;){if(p==0)for(;y<=l;)c(this,g,y),y+=this.blockSize;if(typeof g=="string"){for(;y<a;)if(f[p++]=g.charCodeAt(y++),p==this.blockSize){c(this,f),p=0;break}}else for(;y<a;)if(f[p++]=g[y++],p==this.blockSize){c(this,f),p=0;break}}this.h=p,this.o+=a},u.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var a=1;a<g.length-8;++a)g[a]=0;var l=8*this.o;for(a=g.length-8;a<g.length;++a)g[a]=l&255,l/=256;for(this.u(g),g=Array(16),a=l=0;4>a;++a)for(var f=0;32>f;f+=8)g[l++]=this.g[a]>>>f&255;return g};function v(g,a){var l=w;return Object.prototype.hasOwnProperty.call(l,g)?l[g]:l[g]=a(g)}function I(g,a){this.h=a;for(var l=[],f=!0,p=g.length-1;0<=p;p--){var y=g[p]|0;f&&y==a||(l[p]=y,f=!1)}this.g=l}var w={};function E(g){return-128<=g&&128>g?v(g,function(a){return new I([a|0],0>a?-1:0)}):new I([g|0],0>g?-1:0)}function A(g){if(isNaN(g)||!isFinite(g))return k;if(0>g)return j(A(-g));for(var a=[],l=1,f=0;g>=l;f++)a[f]=g/l|0,l*=4294967296;return new I(a,0)}function P(g,a){if(g.length==0)throw Error("number format error: empty string");if(a=a||10,2>a||36<a)throw Error("radix out of range: "+a);if(g.charAt(0)=="-")return j(P(g.substring(1),a));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var l=A(Math.pow(a,8)),f=k,p=0;p<g.length;p+=8){var y=Math.min(8,g.length-p),h=parseInt(g.substring(p,p+y),a);8>y?(y=A(Math.pow(a,y)),f=f.j(y).add(A(h))):(f=f.j(l),f=f.add(A(h)))}return f}var k=E(0),C=E(1),M=E(16777216);i=I.prototype,i.m=function(){if(x(this))return-j(this).m();for(var g=0,a=1,l=0;l<this.g.length;l++){var f=this.i(l);g+=(0<=f?f:4294967296+f)*a,a*=4294967296}return g},i.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b(this))return"0";if(x(this))return"-"+j(this).toString(g);for(var a=A(Math.pow(g,6)),l=this,f="";;){var p=Q(l,a).g;l=ft(l,p.j(a));var y=((0<l.g.length?l.g[0]:l.h)>>>0).toString(g);if(l=p,b(l))return y+f;for(;6>y.length;)y="0"+y;f=y+f}},i.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function b(g){if(g.h!=0)return!1;for(var a=0;a<g.g.length;a++)if(g.g[a]!=0)return!1;return!0}function x(g){return g.h==-1}i.l=function(g){return g=ft(this,g),x(g)?-1:b(g)?0:1};function j(g){for(var a=g.g.length,l=[],f=0;f<a;f++)l[f]=~g.g[f];return new I(l,~g.h).add(C)}i.abs=function(){return x(this)?j(this):this},i.add=function(g){for(var a=Math.max(this.g.length,g.g.length),l=[],f=0,p=0;p<=a;p++){var y=f+(this.i(p)&65535)+(g.i(p)&65535),h=(y>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);f=h>>>16,y&=65535,h&=65535,l[p]=h<<16|y}return new I(l,l[l.length-1]&-2147483648?-1:0)};function ft(g,a){return g.add(j(a))}i.j=function(g){if(b(this)||b(g))return k;if(x(this))return x(g)?j(this).j(j(g)):j(j(this).j(g));if(x(g))return j(this.j(j(g)));if(0>this.l(M)&&0>g.l(M))return A(this.m()*g.m());for(var a=this.g.length+g.g.length,l=[],f=0;f<2*a;f++)l[f]=0;for(f=0;f<this.g.length;f++)for(var p=0;p<g.g.length;p++){var y=this.i(f)>>>16,h=this.i(f)&65535,J=g.i(p)>>>16,vt=g.i(p)&65535;l[2*f+2*p]+=h*vt,X(l,2*f+2*p),l[2*f+2*p+1]+=y*vt,X(l,2*f+2*p+1),l[2*f+2*p+1]+=h*J,X(l,2*f+2*p+1),l[2*f+2*p+2]+=y*J,X(l,2*f+2*p+2)}for(f=0;f<a;f++)l[f]=l[2*f+1]<<16|l[2*f];for(f=a;f<2*a;f++)l[f]=0;return new I(l,0)};function X(g,a){for(;(g[a]&65535)!=g[a];)g[a+1]+=g[a]>>>16,g[a]&=65535,a++}function q(g,a){this.g=g,this.h=a}function Q(g,a){if(b(a))throw Error("division by zero");if(b(g))return new q(k,k);if(x(g))return a=Q(j(g),a),new q(j(a.g),j(a.h));if(x(a))return a=Q(g,j(a)),new q(j(a.g),a.h);if(30<g.g.length){if(x(g)||x(a))throw Error("slowDivide_ only works with positive integers.");for(var l=C,f=a;0>=f.l(g);)l=Ht(l),f=Ht(f);var p=K(l,1),y=K(f,1);for(f=K(f,2),l=K(l,2);!b(f);){var h=y.add(f);0>=h.l(g)&&(p=p.add(l),y=h),f=K(f,1),l=K(l,1)}return a=ft(g,p.j(a)),new q(p,a)}for(p=k;0<=g.l(a);){for(l=Math.max(1,Math.floor(g.m()/a.m())),f=Math.ceil(Math.log(l)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),y=A(l),h=y.j(a);x(h)||0<h.l(g);)l-=f,y=A(l),h=y.j(a);b(y)&&(y=C),p=p.add(y),g=ft(g,h)}return new q(p,g)}i.A=function(g){return Q(this,g).h},i.and=function(g){for(var a=Math.max(this.g.length,g.g.length),l=[],f=0;f<a;f++)l[f]=this.i(f)&g.i(f);return new I(l,this.h&g.h)},i.or=function(g){for(var a=Math.max(this.g.length,g.g.length),l=[],f=0;f<a;f++)l[f]=this.i(f)|g.i(f);return new I(l,this.h|g.h)},i.xor=function(g){for(var a=Math.max(this.g.length,g.g.length),l=[],f=0;f<a;f++)l[f]=this.i(f)^g.i(f);return new I(l,this.h^g.h)};function Ht(g){for(var a=g.g.length+1,l=[],f=0;f<a;f++)l[f]=g.i(f)<<1|g.i(f-1)>>>31;return new I(l,g.h)}function K(g,a){var l=a>>5;a%=32;for(var f=g.g.length-l,p=[],y=0;y<f;y++)p[y]=0<a?g.i(y+l)>>>a|g.i(y+l+1)<<32-a:g.i(y+l);return new I(p,g.h)}u.prototype.digest=u.prototype.v,u.prototype.reset=u.prototype.s,u.prototype.update=u.prototype.u,bo=u,I.prototype.add=I.prototype.add,I.prototype.multiply=I.prototype.j,I.prototype.modulo=I.prototype.A,I.prototype.compare=I.prototype.l,I.prototype.toNumber=I.prototype.m,I.prototype.toString=I.prototype.toString,I.prototype.getBits=I.prototype.i,I.fromNumber=A,I.fromString=P,So=I}).apply(typeof li<"u"?li:typeof self<"u"?self:typeof window<"u"?window:{});var oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Co,_o,Oo,Ro,ko,Do,Mo,jo;(function(){var i,r=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function o(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof oe=="object"&&oe];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var u=o(this);function c(t,e){if(e)t:{var n=u;t=t.split(".");for(var s=0;s<t.length-1;s++){var d=t[s];if(!(d in n))break t;n=n[d]}t=t[t.length-1],s=n[t],e=e(s),e!=s&&e!=null&&r(n,t,{configurable:!0,writable:!0,value:e})}}function v(t,e){t instanceof String&&(t+="");var n=0,s=!1,d={next:function(){if(!s&&n<t.length){var m=n++;return{value:e(m,t[m]),done:!1}}return s=!0,{done:!0,value:void 0}}};return d[Symbol.iterator]=function(){return d},d}c("Array.prototype.values",function(t){return t||function(){return v(this,function(e,n){return n})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var I=I||{},w=this||self;function E(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function A(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function P(t,e,n){return t.call.apply(t.bind,arguments)}function k(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(d,s),t.apply(e,d)}}return function(){return t.apply(e,arguments)}}function C(t,e,n){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?P:k,C.apply(null,arguments)}function M(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function b(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(s,d,m){for(var T=Array(arguments.length-2),_=2;_<arguments.length;_++)T[_-2]=arguments[_];return e.prototype[d].apply(s,T)}}function x(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function j(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(E(s)){const d=t.length||0,m=s.length||0;t.length=d+m;for(let T=0;T<m;T++)t[d+T]=s[T]}else t.push(s)}}class ft{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function X(t){return/^[\s\xa0]*$/.test(t)}function q(){var t=w.navigator;return t&&(t=t.userAgent)?t:""}function Q(t){return Q[" "](t),t}Q[" "]=function(){};var Ht=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function K(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function g(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function a(t){const e={};for(const n in t)e[n]=t[n];return e}const l="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f(t,e){let n,s;for(let d=1;d<arguments.length;d++){s=arguments[d];for(n in s)t[n]=s[n];for(let m=0;m<l.length;m++)n=l[m],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function p(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function y(t){w.setTimeout(()=>{throw t},0)}function h(){var t=ge;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class J{constructor(){this.h=this.g=null}add(e,n){const s=vt.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var vt=new ft(()=>new Hi,t=>t.reset());class Hi{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}let wt,It=!1,ge=new J,Je=()=>{const t=w.Promise.resolve(void 0);wt=()=>{t.then(Ui)}};var Ui=()=>{for(var t;t=h();){try{t.h.call(t.g)}catch(n){y(n)}var e=vt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}It=!1};function tt(){this.s=this.s,this.C=this.C}tt.prototype.s=!1,tt.prototype.ma=function(){this.s||(this.s=!0,this.N())},tt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function L(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}L.prototype.h=function(){this.defaultPrevented=!0};var $i=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};w.addEventListener("test",n,e),w.removeEventListener("test",n,e)}catch{}return t}();function Tt(t,e){if(L.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ht){t:{try{Q(e.nodeName);var d=!0;break t}catch{}d=!1}d||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zi[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Tt.aa.h.call(this)}}b(Tt,L);var zi={2:"touch",3:"pen",4:"mouse"};Tt.prototype.h=function(){Tt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ut="closure_listenable_"+(1e6*Math.random()|0),Vi=0;function Gi(t,e,n,s,d){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=d,this.key=++Vi,this.da=this.fa=!1}function $t(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function zt(t){this.src=t,this.g={},this.h=0}zt.prototype.add=function(t,e,n,s,d){var m=t.toString();t=this.g[m],t||(t=this.g[m]=[],this.h++);var T=ye(t,e,s,d);return-1<T?(e=t[T],n||(e.fa=!1)):(e=new Gi(e,this.src,m,!!s,d),e.fa=n,t.push(e)),e};function de(t,e){var n=e.type;if(n in t.g){var s=t.g[n],d=Array.prototype.indexOf.call(s,e,void 0),m;(m=0<=d)&&Array.prototype.splice.call(s,d,1),m&&($t(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ye(t,e,n,s){for(var d=0;d<t.length;++d){var m=t[d];if(!m.da&&m.listener==e&&m.capture==!!n&&m.ha==s)return d}return-1}var me="closure_lm_"+(1e6*Math.random()|0),ve={};function Ye(t,e,n,s,d){if(Array.isArray(e)){for(var m=0;m<e.length;m++)Ye(t,e[m],n,s,d);return null}return n=tn(n),t&&t[Ut]?t.K(e,n,A(s)?!!s.capture:!1,d):qi(t,e,n,!1,s,d)}function qi(t,e,n,s,d,m){if(!e)throw Error("Invalid event type");var T=A(d)?!!d.capture:!!d,_=Ie(t);if(_||(t[me]=_=new zt(t)),n=_.add(e,n,s,T,m),n.proxy)return n;if(s=Wi(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)$i||(d=T),d===void 0&&(d=!1),t.addEventListener(e.toString(),s,d);else if(t.attachEvent)t.attachEvent(Qe(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Wi(){function t(n){return e.call(t.src,t.listener,n)}const e=Xi;return t}function Ze(t,e,n,s,d){if(Array.isArray(e))for(var m=0;m<e.length;m++)Ze(t,e[m],n,s,d);else s=A(s)?!!s.capture:!!s,n=tn(n),t&&t[Ut]?(t=t.i,e=String(e).toString(),e in t.g&&(m=t.g[e],n=ye(m,n,s,d),-1<n&&($t(m[n]),Array.prototype.splice.call(m,n,1),m.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ie(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ye(e,n,s,d)),(n=-1<t?e[t]:null)&&we(n))}function we(t){if(typeof t!="number"&&t&&!t.da){var e=t.src;if(e&&e[Ut])de(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Qe(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ie(e))?(de(n,t),n.h==0&&(n.src=null,e[me]=null)):$t(t)}}}function Qe(t){return t in ve?ve[t]:ve[t]="on"+t}function Xi(t,e){if(t.da)t=!0;else{e=new Tt(e,this);var n=t.listener,s=t.ha||t.src;t.fa&&we(t),t=n.call(s,e)}return t}function Ie(t){return t=t[me],t instanceof zt?t:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function tn(t){return typeof t=="function"?t:(t[Te]||(t[Te]=function(e){return t.handleEvent(e)}),t[Te])}function B(){tt.call(this),this.i=new zt(this),this.M=this,this.F=null}b(B,tt),B.prototype[Ut]=!0,B.prototype.removeEventListener=function(t,e,n,s){Ze(this,t,e,n,s)};function U(t,e){var n,s=t.F;if(s)for(n=[];s;s=s.F)n.push(s);if(t=t.M,s=e.type||e,typeof e=="string")e=new L(e,t);else if(e instanceof L)e.target=e.target||t;else{var d=e;e=new L(s,t),f(e,d)}if(d=!0,n)for(var m=n.length-1;0<=m;m--){var T=e.g=n[m];d=Vt(T,s,!0,e)&&d}if(T=e.g=t,d=Vt(T,s,!0,e)&&d,d=Vt(T,s,!1,e)&&d,n)for(m=0;m<n.length;m++)T=e.g=n[m],d=Vt(T,s,!1,e)&&d}B.prototype.N=function(){if(B.aa.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)$t(n[s]);delete t.g[e],t.h--}}this.F=null},B.prototype.K=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},B.prototype.L=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Vt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var d=!0,m=0;m<e.length;++m){var T=e[m];if(T&&!T.da&&T.capture==n){var _=T.listener,N=T.ha||T.src;T.fa&&de(t.i,T),d=_.call(N,s)!==!1&&d}}return d&&!s.defaultPrevented}function en(t,e,n){if(typeof t=="function")n&&(t=C(t,n));else if(t&&typeof t.handleEvent=="function")t=C(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:w.setTimeout(t,e||0)}function nn(t){t.g=en(()=>{t.g=null,t.i&&(t.i=!1,nn(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}class Ki extends tt{constructor(e,n){super(),this.m=e,this.l=n,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:nn(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Et(t){tt.call(this),this.h=t,this.g={}}b(Et,tt);var rn=[];function sn(t){K(t.g,function(e,n){this.g.hasOwnProperty(n)&&we(e)},t),t.g={}}Et.prototype.N=function(){Et.aa.N.call(this),sn(this)},Et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ee=w.JSON.stringify,Ji=w.JSON.parse,Yi=class{stringify(t){return w.JSON.stringify(t,void 0)}parse(t){return w.JSON.parse(t,void 0)}};function Ae(){}Ae.prototype.h=null;function on(t){return t.h||(t.h=t.i())}function an(){}var At={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Se(){L.call(this,"d")}b(Se,L);function be(){L.call(this,"c")}b(be,L);var rt={},hn=null;function Gt(){return hn=hn||new B}rt.La="serverreachability";function ln(t){L.call(this,rt.La,t)}b(ln,L);function St(t){const e=Gt();U(e,new ln(e))}rt.STAT_EVENT="statevent";function un(t,e){L.call(this,rt.STAT_EVENT,t),this.stat=e}b(un,L);function $(t){const e=Gt();U(e,new un(e,t))}rt.Ma="timingevent";function cn(t,e){L.call(this,rt.Ma,t),this.size=e}b(cn,L);function bt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){t()},e)}function Ct(){this.g=!0}Ct.prototype.xa=function(){this.g=!1};function Zi(t,e,n,s,d,m){t.info(function(){if(t.g)if(m)for(var T="",_=m.split("&"),N=0;N<_.length;N++){var S=_[N].split("=");if(1<S.length){var F=S[0];S=S[1];var H=F.split("_");T=2<=H.length&&H[1]=="type"?T+(F+"="+S+"&"):T+(F+"=redacted&")}}else T=null;else T=m;return"XMLHTTP REQ ("+s+") [attempt "+d+"]: "+e+`
`+n+`
`+T})}function Qi(t,e,n,s,d,m,T){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+d+"]: "+e+`
`+n+`
`+m+" "+T})}function pt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+er(t,n)+(s?" "+s:"")})}function tr(t,e){t.info(function(){return"TIMEOUT: "+e})}Ct.prototype.info=function(){};function er(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var d=s[1];if(Array.isArray(d)&&!(1>d.length)){var m=d[0];if(m!="noop"&&m!="stop"&&m!="close")for(var T=1;T<d.length;T++)d[T]=""}}}}return Ee(n)}catch{return e}}var qt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fn={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ce;function Wt(){}b(Wt,Ae),Wt.prototype.g=function(){return new XMLHttpRequest},Wt.prototype.i=function(){return{}},Ce=new Wt;function et(t,e,n,s){this.j=t,this.i=e,this.l=n,this.R=s||1,this.U=new Et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pn}function pn(){this.i=null,this.g="",this.h=!1}var gn={},_e={};function Oe(t,e,n){t.L=1,t.v=Yt(Y(e)),t.m=n,t.P=!0,dn(t,null)}function dn(t,e){t.F=Date.now(),Xt(t),t.A=Y(t.v);var n=t.A,s=t.R;Array.isArray(s)||(s=[String(s)]),Rn(n.i,"t",s),t.C=0,n=t.j.J,t.h=new pn,t.g=Wn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new Ki(C(t.Y,t,t.g),t.O)),e=t.U,n=t.g,s=t.ca;var d="readystatechange";Array.isArray(d)||(d&&(rn[0]=d.toString()),d=rn);for(var m=0;m<d.length;m++){var T=Ye(n,d[m],s||e.handleEvent,!1,e.h||e);if(!T)break;e.g[T.key]=T}e=t.H?a(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),St(),Zi(t.i,t.u,t.A,t.l,t.R,t.m)}et.prototype.ca=function(t){t=t.target;const e=this.M;e&&Z(t)==3?e.j():this.Y(t)},et.prototype.Y=function(t){try{if(t==this.g)t:{const H=Z(this.g);var e=this.g.Ba();const yt=this.g.Z();if(!(3>H)&&(H!=3||this.g&&(this.h.h||this.g.oa()||xn(this.g)))){this.J||H!=4||e==7||(e==8||0>=yt?St(3):St(2)),Re(this);var n=this.g.Z();this.X=n;e:if(yn(this)){var s=xn(this.g);t="";var d=s.length,m=Z(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){st(this),_t(this);var T="";break e}this.h.i=new w.TextDecoder}for(e=0;e<d;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:!(m&&e==d-1)});s.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=n==200,Qi(this.i,this.u,this.A,this.l,this.R,H,n),this.o){if(this.T&&!this.K){e:{if(this.g){var _,N=this.g;if((_=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(_)){var S=_;break e}}S=null}if(n=S)pt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ke(this,n);else{this.o=!1,this.s=3,$(12),st(this),_t(this);break t}}if(this.P){n=!0;let W;for(;!this.J&&this.C<T.length;)if(W=nr(this,T),W==_e){H==4&&(this.s=4,$(14),n=!1),pt(this.i,this.l,null,"[Incomplete Response]");break}else if(W==gn){this.s=4,$(15),pt(this.i,this.l,T,"[Invalid Chunk]"),n=!1;break}else pt(this.i,this.l,W,null),ke(this,W);if(yn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||T.length!=0||this.h.h||(this.s=1,$(16),n=!1),this.o=this.o&&n,!n)pt(this.i,this.l,T,"[Invalid Chunked Response]"),st(this),_t(this);else if(0<T.length&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.ba&&!F.M&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),xe(F),F.M=!0,$(11))}}else pt(this.i,this.l,T,null),ke(this,T);H==4&&st(this),this.o&&!this.J&&(H==4?zn(this.j,this):(this.o=!1,Xt(this)))}else wr(this.g),n==400&&0<T.indexOf("Unknown SID")?(this.s=3,$(12)):(this.s=0,$(13)),st(this),_t(this)}}}catch{}finally{}};function yn(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function nr(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?_e:(n=Number(e.substring(n,s)),isNaN(n)?gn:(s+=1,s+n>e.length?_e:(e=e.slice(s,s+n),t.C=s+n,e)))}et.prototype.cancel=function(){this.J=!0,st(this)};function Xt(t){t.S=Date.now()+t.I,mn(t,t.I)}function mn(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bt(C(t.ba,t),e)}function Re(t){t.B&&(w.clearTimeout(t.B),t.B=null)}et.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(tr(this.i,this.A),this.L!=2&&(St(),$(17)),st(this),this.s=2,_t(this)):mn(this,this.S-t)};function _t(t){t.j.G==0||t.J||zn(t.j,t)}function st(t){Re(t);var e=t.M;e&&typeof e.ma=="function"&&e.ma(),t.M=null,sn(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ke(t,e){try{var n=t.j;if(n.G!=0&&(n.g==t||De(n.h,t))){if(!t.K&&De(n.h,t)&&n.G==3){try{var s=n.Da.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var d=s;if(d[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ie(n),ee(n);else break t;Ne(n),$(18)}}else n.za=d[1],0<n.za-n.T&&37500>d[2]&&n.F&&n.v==0&&!n.C&&(n.C=bt(C(n.Za,n),6e3));if(1>=In(n.h)&&n.ca){try{n.ca()}catch{}n.ca=void 0}}else at(n,11)}else if((t.K||n.g==t)&&ie(n),!X(e))for(d=n.Da.g.parse(e),e=0;e<d.length;e++){let S=d[e];if(n.T=S[0],S=S[1],n.G==2)if(S[0]=="c"){n.K=S[1],n.ia=S[2];const F=S[3];F!=null&&(n.la=F,n.j.info("VER="+n.la));const H=S[4];H!=null&&(n.Aa=H,n.j.info("SVER="+n.Aa));const yt=S[5];yt!=null&&typeof yt=="number"&&0<yt&&(s=1.5*yt,n.L=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const W=t.g;if(W){const se=W.g?W.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(se){var m=s.h;m.g||se.indexOf("spdy")==-1&&se.indexOf("quic")==-1&&se.indexOf("h2")==-1||(m.j=m.l,m.g=new Set,m.h&&(Me(m,m.h),m.h=null))}if(s.D){const Le=W.g?W.g.getResponseHeader("X-HTTP-Session-Id"):null;Le&&(s.ya=Le,O(s.I,s.D,Le))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),s=n;var T=t;if(s.qa=qn(s,s.J?s.ia:null,s.W),T.K){Tn(s.h,T);var _=T,N=s.L;N&&(_.I=N),_.B&&(Re(_),Xt(_)),s.g=T}else Un(s);0<n.i.length&&ne(n)}else S[0]!="stop"&&S[0]!="close"||at(n,7);else n.G==3&&(S[0]=="stop"||S[0]=="close"?S[0]=="stop"?at(n,7):Pe(n):S[0]!="noop"&&n.l&&n.l.ta(S),n.v=0)}}St(4)}catch{}}var ir=class{constructor(t,e){this.g=t,this.map=e}};function vn(t){this.l=t||10,w.PerformanceNavigationTiming?(t=w.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(w.chrome&&w.chrome.loadTimes&&w.chrome.loadTimes()&&w.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function In(t){return t.h?1:t.g?t.g.size:0}function De(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Me(t,e){t.g?t.g.add(e):t.h=e}function Tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vn.prototype.cancel=function(){if(this.i=En(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function En(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return x(t.i)}function rr(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(E(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function sr(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(E(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function An(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(E(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=sr(t),s=rr(t),d=s.length,m=0;m<d;m++)e.call(void 0,s[m],n&&n[m],t)}var Sn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function or(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),d=null;if(0<=s){var m=t[n].substring(0,s);d=t[n].substring(s+1)}else m=t[n];e(m,d?decodeURIComponent(d.replace(/\+/g," ")):"")}}}function ot(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof ot){this.h=t.h,Kt(this,t.j),this.o=t.o,this.g=t.g,Jt(this,t.s),this.l=t.l;var e=t.i,n=new kt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),bn(this,n),this.m=t.m}else t&&(e=String(t).match(Sn))?(this.h=!1,Kt(this,e[1]||"",!0),this.o=Ot(e[2]||""),this.g=Ot(e[3]||"",!0),Jt(this,e[4]),this.l=Ot(e[5]||"",!0),bn(this,e[6]||"",!0),this.m=Ot(e[7]||"")):(this.h=!1,this.i=new kt(null,this.h))}ot.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rt(e,Cn,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.o)&&t.push(Rt(e,Cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Rt(n,n.charAt(0)=="/"?lr:hr,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Rt(n,cr)),t.join("")};function Y(t){return new ot(t)}function Kt(t,e,n){t.j=n?Ot(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Jt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function bn(t,e,n){e instanceof kt?(t.i=e,fr(t.i,t.h)):(n||(e=Rt(e,ur)),t.i=new kt(e,t.h))}function O(t,e,n){t.i.set(e,n)}function Yt(t){return O(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ot(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ar),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ar(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cn=/[#\/\?@]/g,hr=/[#\?:]/g,lr=/[#\?]/g,ur=/[#\?@]/g,cr=/#/g;function kt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function nt(t){t.g||(t.g=new Map,t.h=0,t.i&&or(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}i=kt.prototype,i.add=function(t,e){nt(this),this.i=null,t=gt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _n(t,e){nt(t),e=gt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function On(t,e){return nt(t),e=gt(t,e),t.g.has(e)}i.forEach=function(t,e){nt(this),this.g.forEach(function(n,s){n.forEach(function(d){t.call(e,d,s,this)},this)},this)},i.na=function(){nt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const d=t[s];for(let m=0;m<d.length;m++)n.push(e[s])}return n},i.V=function(t){nt(this);let e=[];if(typeof t=="string")On(this,t)&&(e=e.concat(this.g.get(gt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return nt(this),this.i=null,t=gt(this,t),On(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e};function Rn(t,e,n){_n(t,e),0<n.length&&(t.i=null,t.g.set(gt(t,e),x(n)),t.h+=n.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const m=encodeURIComponent(String(s)),T=this.V(s);for(s=0;s<T.length;s++){var d=m;T[s]!==""&&(d+="="+encodeURIComponent(String(T[s]))),t.push(d)}}return this.i=t.join("&")};function gt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fr(t,e){e&&!t.j&&(nt(t),t.i=null,t.g.forEach(function(n,s){var d=s.toLowerCase();s!=d&&(_n(this,s),Rn(this,d,n))},t)),t.j=e}function pr(t,e){const n=new Ct;if(w.Image){const s=new Image;s.onload=M(it,n,"TestLoadImage: loaded",!0,e,s),s.onerror=M(it,n,"TestLoadImage: error",!1,e,s),s.onabort=M(it,n,"TestLoadImage: abort",!1,e,s),s.ontimeout=M(it,n,"TestLoadImage: timeout",!1,e,s),w.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function gr(t,e){const n=new Ct,s=new AbortController,d=setTimeout(()=>{s.abort(),it(n,"TestPingServer: timeout",!1,e)},1e4);fetch(t,{signal:s.signal}).then(m=>{clearTimeout(d),m.ok?it(n,"TestPingServer: ok",!0,e):it(n,"TestPingServer: server error",!1,e)}).catch(()=>{clearTimeout(d),it(n,"TestPingServer: error",!1,e)})}function it(t,e,n,s,d){try{d&&(d.onload=null,d.onerror=null,d.onabort=null,d.ontimeout=null),s(n)}catch{}}function dr(){this.g=new Yi}function yr(t,e,n){const s=n||"";try{An(t,function(d,m){let T=d;A(d)&&(T=Ee(d)),e.push(s+m+"="+encodeURIComponent(T))})}catch(d){throw e.push(s+"type="+encodeURIComponent("_badmap")),d}}function Zt(t){this.l=t.Ub||null,this.j=t.eb||!1}b(Zt,Ae),Zt.prototype.g=function(){return new Qt(this.l,this.j)},Zt.prototype.i=function(t){return function(){return t}}({});function Qt(t,e){B.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Qt,B),i=Qt.prototype,i.open=function(t,e){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,Mt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||w).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dt(this)),this.readyState=0},i.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mt(this)),this.g&&(this.readyState=3,Mt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kn(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function kn(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}i.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dt(this):Mt(this),this.readyState==3&&kn(this)}},i.Ra=function(t){this.g&&(this.response=this.responseText=t,Dt(this))},i.Qa=function(t){this.g&&(this.response=t,Dt(this))},i.ga=function(){this.g&&Dt(this)};function Dt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Mt(t)}i.setRequestHeader=function(t,e){this.u.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Mt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Qt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Dn(t){let e="";return K(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function je(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Dn(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):O(t,e,n))}function D(t){B.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(D,B);var mr=/^https?$/i,vr=["POST","PUT"];i=D.prototype,i.Ha=function(t){this.J=t},i.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ce.g(),this.v=this.o?on(this.o):on(Ce),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(m){Mn(this,m);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var d in s)n.set(d,s[d]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const m of s.keys())n.set(m,s.get(m));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(m=>m.toLowerCase()=="content-type"),d=w.FormData&&t instanceof w.FormData,!(0<=Array.prototype.indexOf.call(vr,e,void 0))||s||d||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[m,T]of n)this.g.setRequestHeader(m,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nn(this),this.u=!0,this.g.send(t),this.u=!1}catch(m){Mn(this,m)}};function Mn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,jn(t),te(t)}function jn(t){t.A||(t.A=!0,U(t,"complete"),U(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,U(this,"complete"),U(this,"abort"),te(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),te(this,!0)),D.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Pn(this):this.bb())},i.bb=function(){Pn(this)};function Pn(t){if(t.h&&typeof I<"u"&&(!t.v[1]||Z(t)!=4||t.Z()!=2)){if(t.u&&Z(t)==4)en(t.Ea,0,t);else if(U(t,"readystatechange"),Z(t)==4){t.h=!1;try{const T=t.Z();t:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=T===0){var d=String(t.D).match(Sn)[1]||null;!d&&w.self&&w.self.location&&(d=w.self.location.protocol.slice(0,-1)),s=!mr.test(d?d.toLowerCase():"")}n=s}if(n)U(t,"complete"),U(t,"success");else{t.m=6;try{var m=2<Z(t)?t.g.statusText:""}catch{m=""}t.l=m+" ["+t.Z()+"]",jn(t)}}finally{te(t)}}}}function te(t,e){if(t.g){Nn(t);const n=t.g,s=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||U(t,"ready");try{n.onreadystatechange=s}catch{}}}function Nn(t){t.I&&(w.clearTimeout(t.I),t.I=null)}i.isActive=function(){return!!this.g};function Z(t){return t.g?t.g.readyState:0}i.Z=function(){try{return 2<Z(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ji(e)}};function xn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function wr(t){const e={};t=(t.g&&2<=Z(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(X(t[s]))continue;var n=p(t[s]);const d=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const m=e[d]||[];e[d]=m,m.push(n)}g(e,function(s){return s.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ln(t){this.Aa=0,this.i=[],this.j=new Ct,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jt("baseRetryDelayMs",5e3,t),this.cb=jt("retryDelaySeedMs",1e4,t),this.Wa=jt("forwardChannelMaxRetries",2,t),this.wa=jt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new vn(t&&t.concurrentRequestLimit),this.Da=new dr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ln.prototype,i.la=8,i.G=1,i.connect=function(t,e,n,s){$(0),this.W=t,this.H=e||{},n&&s!==void 0&&(this.H.OSID=n,this.H.OAID=s),this.F=this.X,this.I=qn(this,null,this.W),ne(this)};function Pe(t){if(Bn(t),t.G==3){var e=t.U++,n=Y(t.I);if(O(n,"SID",t.K),O(n,"RID",e),O(n,"TYPE","terminate"),Pt(t,n),e=new et(t,t.j,e),e.L=2,e.v=Yt(Y(n)),n=!1,w.navigator&&w.navigator.sendBeacon)try{n=w.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&w.Image&&(new Image().src=e.v,n=!0),n||(e.g=Wn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),Xt(e)}Gn(t)}function ee(t){t.g&&(xe(t),t.g.cancel(),t.g=null)}function Bn(t){ee(t),t.u&&(w.clearTimeout(t.u),t.u=null),ie(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&w.clearTimeout(t.s),t.s=null)}function ne(t){if(!wn(t.h)&&!t.s){t.s=!0;var e=t.Ga;wt||Je(),It||(wt(),It=!0),ge.add(e,t),t.B=0}}function Ir(t,e){return In(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=bt(C(t.Ga,t,e),Vn(t,t.B)),t.B++,!0)}i.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const d=new et(this,this.j,t);let m=this.o;if(this.S&&(m?(m=a(m),f(m,this.S)):m=this.S),this.m!==null||this.O||(d.H=m,m=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break t}if(e===4096||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Hn(this,d,e),n=Y(this.I),O(n,"RID",t),O(n,"CVER",22),this.D&&O(n,"X-HTTP-Session-Id",this.D),Pt(this,n),m&&(this.O?e="headers="+encodeURIComponent(String(Dn(m)))+"&"+e:this.m&&je(n,this.m,m)),Me(this.h,d),this.Ua&&O(n,"TYPE","init"),this.P?(O(n,"$req",e),O(n,"SID","null"),d.T=!0,Oe(d,n,null)):Oe(d,n,e),this.G=2}}else this.G==3&&(t?Fn(this,t):this.i.length==0||wn(this.h)||Fn(this))};function Fn(t,e){var n;e?n=e.l:n=t.U++;const s=Y(t.I);O(s,"SID",t.K),O(s,"RID",n),O(s,"AID",t.T),Pt(t,s),t.m&&t.o&&je(s,t.m,t.o),n=new et(t,t.j,n,t.B+1),t.m===null&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Hn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Me(t.h,n),Oe(n,s,e)}function Pt(t,e){t.H&&K(t.H,function(n,s){O(e,s,n)}),t.l&&An({},function(n,s){O(e,s,n)})}function Hn(t,e,n){n=Math.min(t.i.length,n);var s=t.l?C(t.l.Na,t.l,t):null;t:{var d=t.i;let m=-1;for(;;){const T=["count="+n];m==-1?0<n?(m=d[0].g,T.push("ofs="+m)):m=0:T.push("ofs="+m);let _=!0;for(let N=0;N<n;N++){let S=d[N].g;const F=d[N].map;if(S-=m,0>S)m=Math.max(0,d[N].g-100),_=!1;else try{yr(F,T,"req"+S+"_")}catch{s&&s(F)}}if(_){s=T.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function Un(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;wt||Je(),It||(wt(),It=!0),ge.add(e,t),t.v=0}}function Ne(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=bt(C(t.Fa,t),Vn(t,t.v)),t.v++,!0)}i.Fa=function(){if(this.u=null,$n(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=bt(C(this.ab,this),t)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$(10),ee(this),$n(this))};function xe(t){t.A!=null&&(w.clearTimeout(t.A),t.A=null)}function $n(t){t.g=new et(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var e=Y(t.qa);O(e,"RID","rpc"),O(e,"SID",t.K),O(e,"AID",t.T),O(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&O(e,"TO",t.ja),O(e,"TYPE","xmlhttp"),Pt(t,e),t.m&&t.o&&je(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Yt(Y(e)),n.m=null,n.P=!0,dn(n,t)}i.Za=function(){this.C!=null&&(this.C=null,ee(this),Ne(this),$(19))};function ie(t){t.C!=null&&(w.clearTimeout(t.C),t.C=null)}function zn(t,e){var n=null;if(t.g==e){ie(t),xe(t),t.g=null;var s=2}else if(De(t.h,e))n=e.D,Tn(t.h,e),s=1;else return;if(t.G!=0){if(e.o)if(s==1){n=e.m?e.m.length:0,e=Date.now()-e.F;var d=t.B;s=Gt(),U(s,new cn(s,n)),ne(t)}else Un(t);else if(d=e.s,d==3||d==0&&0<e.X||!(s==1&&Ir(t,e)||s==2&&Ne(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),d){case 1:at(t,5);break;case 4:at(t,10);break;case 3:at(t,6);break;default:at(t,2)}}}function Vn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function at(t,e){if(t.j.info("Error code "+e),e==2){var n=C(t.fb,t),s=t.Xa;const d=!s;s=new ot(s||"//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||Kt(s,"https"),Yt(s),d?pr(s.toString(),n):gr(s.toString(),n)}else $(2);t.G=0,t.l&&t.l.sa(e),Gn(t),Bn(t)}i.fb=function(t){t?(this.j.info("Successfully pinged google.com"),$(2)):(this.j.info("Failed to ping google.com"),$(1))};function Gn(t){if(t.G=0,t.ka=[],t.l){const e=En(t.h);(e.length!=0||t.i.length!=0)&&(j(t.ka,e),j(t.ka,t.i),t.h.i.length=0,x(t.i),t.i.length=0),t.l.ra()}}function qn(t,e,n){var s=n instanceof ot?Y(n):new ot(n);if(s.g!="")e&&(s.g=e+"."+s.g),Jt(s,s.s);else{var d=w.location;s=d.protocol,e=e?e+"."+d.hostname:d.hostname,d=+d.port;var m=new ot(null);s&&Kt(m,s),e&&(m.g=e),d&&Jt(m,d),n&&(m.l=n),s=m}return n=t.D,e=t.ya,n&&e&&O(s,n,e),O(s,"VER",t.la),Pt(t,s),s}function Wn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new D(new Zt({eb:n})):new D(t.pa),e.Ha(t.J),e}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xn(){}i=Xn.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function re(){}re.prototype.g=function(t,e){return new V(t,e)};function V(t,e){B.call(this),this.g=new Ln(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!X(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!X(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new dt(this)}b(V,B),V.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},V.prototype.close=function(){Pe(this.g)},V.prototype.o=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=Ee(t),t=n);e.i.push(new ir(e.Ya++,t)),e.G==3&&ne(e)},V.prototype.N=function(){this.g.l=null,delete this.j,Pe(this.g),delete this.g,V.aa.N.call(this)};function Kn(t){Se.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}b(Kn,Se);function Jn(){be.call(this),this.status=1}b(Jn,be);function dt(t){this.g=t}b(dt,Xn),dt.prototype.ua=function(){U(this.g,"a")},dt.prototype.ta=function(t){U(this.g,new Kn(t))},dt.prototype.sa=function(t){U(this.g,new Jn)},dt.prototype.ra=function(){U(this.g,"b")},re.prototype.createWebChannel=re.prototype.g,V.prototype.send=V.prototype.o,V.prototype.open=V.prototype.m,V.prototype.close=V.prototype.close,jo=function(){return new re},Mo=function(){return Gt()},Do=rt,ko={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qt.NO_ERROR=0,qt.TIMEOUT=8,qt.HTTP_ERROR=6,Ro=qt,fn.COMPLETE="complete",Oo=fn,an.EventType=At,At.OPEN="a",At.CLOSE="b",At.ERROR="c",At.MESSAGE="d",B.prototype.listen=B.prototype.K,_o=an,D.prototype.listenOnce=D.prototype.L,D.prototype.getLastError=D.prototype.Ka,D.prototype.getLastErrorCode=D.prototype.Ba,D.prototype.getStatus=D.prototype.Z,D.prototype.getResponseJson=D.prototype.Oa,D.prototype.getResponseText=D.prototype.oa,D.prototype.send=D.prototype.ea,D.prototype.setWithCredentials=D.prototype.Ha,Co=D}).apply(typeof oe<"u"?oe:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(r,o,u){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=r.getImmediate({optional:!0}),this.messaging=o.getImmediate({optional:!0}),this.auth||r.get().then(c=>this.auth=c,()=>{}),this.messaging||o.get().then(c=>this.messaging=c,()=>{}),this.appCheck||u.get().then(c=>this.appCheck=c,()=>{})}async getAuthToken(){if(this.auth)try{const r=await this.auth.getToken();return r==null?void 0:r.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(r){if(this.appCheck){const o=r?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return o.error?null:o.token}return null}async getContext(r){const o=await this.getAuthToken(),u=await this.getMessagingToken(),c=await this.getAppCheckToken(r);return{authToken:o,messagingToken:u,appCheckToken:c}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="us-central1";class No{constructor(r,o,u,c,v=ze,I){this.app=r,this.fetchImpl=I,this.emulatorOrigin=null,this.contextProvider=new Po(o,u,c),this.cancelAllRequests=new Promise(w=>{this.deleteService=()=>Promise.resolve(w())});try{const w=new URL(v);this.customDomain=w.origin+(w.pathname==="/"?"":w.pathname),this.region=ze}catch{this.customDomain=null,this.region=v}}_delete(){return this.deleteService()}_url(r){const o=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${o}/${this.region}/${r}`:this.customDomain!==null?`${this.customDomain}/${r}`:`https://${this.region}-${o}.cloudfunctions.net/${r}`}}function xo(i,r,o){i.emulatorOrigin=`http://${r}:${o}`}const ui="@firebase/functions",ci="0.11.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="auth-internal",Bo="app-check-internal",Fo="messaging-internal";function Ho(i,r){const o=(u,{instanceIdentifier:c})=>{const v=u.getProvider("app").getImmediate(),I=u.getProvider(Lo),w=u.getProvider(Fo),E=u.getProvider(Bo);return new No(v,I,w,E,c,i)};xt(new Lt(Fi,o,"PUBLIC").setMultipleInstances(!0)),mt(ui,ci,r),mt(ui,ci,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(i=fi(),r=ze){const u=Bt(ue(i),Fi).getImmediate({identifier:r}),c=Pr("functions");return c&&$o(u,...c),u}function $o(i,r,o){xo(ue(i),r,o)}Ho(fetch.bind(self));const zo={apiKey:"AIzaSyDHe2ckRVh1X9noO2urgHJ_cXKaHVjLCRQ",authDomain:"it-inventory-system-8f03e.firebaseapp.com",projectId:"it-inventory-system-8f03e",storageBucket:"it-inventory-system-8f03e.firebasestorage.app",messagingSenderId:"415207759022",appId:"1:415207759022:web:6a535b9d1e7b5c99c6613f",measurementId:"G-21QGL4M52T"},pe=Tr(zo);Io(pe);const ha=Ar(pe),la=Sr(pe);Uo(pe);export{Ro as A,jo as B,aa as C,Mo as D,Ve as E,Ft as F,Do as G,la as H,So as I,ha as J,Uo as K,is as L,bo as M,pe as N,ko as S,_o as W,Co as X,Lt as a,Zn as b,ue as c,yi as d,Ko as e,jr as f,Xo as g,sa as h,Br as i,di as j,ta as k,na as l,ia as m,Yo as n,Qo as o,Or as p,ra as q,R as r,Lr as s,Zo as t,oa as u,Fr as v,Pr as w,Jo as x,ea as y,Oo as z};
