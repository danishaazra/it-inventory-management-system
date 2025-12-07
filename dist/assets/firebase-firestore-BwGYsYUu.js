import{g as Is,a as As,S as vs,b as Rs,r as Pn}from"./firebase-app-J8-aw7xu.js";import{c as ce,w as ws,F as Vs,x as Ps,L as Cs,r as rt,I as Et,a as Ss,y as bs,X as ks,z as Ds,A as Ce,B as Ns,D as xs,W as ne,G as Ls,j as Fs,S as Cn,M as Ms}from"./firebase-vendor-V7RN5xDf.js";const Sn="@firebase/firestore";/**
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
 */class ${constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}$.UNAUTHENTICATED=new $(null),$.GOOGLE_CREDENTIALS=new $("google-credentials-uid"),$.FIRST_PARTY=new $("first-party-uid"),$.MOCK_USER=new $("mock-user");/**
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
 */let Ct="10.14.0";/**
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
 */const lt=new Cs("@firebase/firestore");function Dt(){return lt.logLevel}function p(r,...t){if(lt.logLevel<=rt.DEBUG){const e=t.map(Ge);lt.debug(`Firestore (${Ct}): ${r}`,...e)}}function et(r,...t){if(lt.logLevel<=rt.ERROR){const e=t.map(Ge);lt.error(`Firestore (${Ct}): ${r}`,...e)}}function It(r,...t){if(lt.logLevel<=rt.WARN){const e=t.map(Ge);lt.warn(`Firestore (${Ct}): ${r}`,...e)}}function Ge(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
 */function T(r="Unexpected state"){const t=`FIRESTORE (${Ct}) INTERNAL ASSERTION FAILED: `+r;throw et(t),new Error(t)}function C(r,t){r||T()}function A(r,t){return r}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends Vs{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class it{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class lr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Os{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e($.UNAUTHENTICATED))}shutdown(){}}class Us{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class qs{constructor(t){this.t=t,this.currentUser=$.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){C(this.o===void 0);let n=this.i;const s=u=>this.i!==n?(n=this.i,e(u)):Promise.resolve();let i=new it;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new it,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new it)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(C(typeof n.accessToken=="string"),new lr(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return C(t===null||typeof t=="string"),new $(t)}}class Bs{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=$.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zs{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Bs(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e($.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $s{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qs{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){C(this.o===void 0);const n=i=>{i.error!=null&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,p("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(C(typeof e.token=="string"),this.R=e.token,new $s(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ks(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class hr{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Ks(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function P(r,t){return r<t?-1:r>t?1:0}function At(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
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
 */class L{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new g(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new g(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new g(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new g(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return L.fromMillis(Date.now())}static fromDate(t){return L.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new L(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new L(0,0))}static max(){return new I(new L(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ut{constructor(t,e,n){e===void 0?e=0:e>t.length&&T(),n===void 0?n=t.length-e:n>t.length-e&&T(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ut.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ut?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.get(s),o=e.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class b extends Ut{construct(t,e,n){return new b(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new g(f.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new b(e)}static emptyPath(){return new b([])}}const Gs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class U extends Ut{construct(t,e,n){return new U(t,e,n)}static isValidIdentifier(t){return Gs.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),U.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new U(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new g(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new g(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new g(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(n+=a,s++):(i(),s++)}if(i(),o)throw new g(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new U(e)}static emptyPath(){return new U([])}}/**
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
 */class y{constructor(t){this.path=t}static fromPath(t){return new y(b.fromString(t))}static fromName(t){return new y(b.fromString(t).popFirst(5))}static empty(){return new y(b.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&b.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return b.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new y(new b(t.slice()))}}function js(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=I.fromTimestamp(n===1e9?new L(e+1,0):new L(e,n));return new ot(s,y.empty(),t)}function Ws(r){return new ot(r.readTime,r.key,-1)}class ot{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ot(I.min(),y.empty(),-1)}static max(){return new ot(I.max(),y.empty(),-1)}}function Hs(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=y.comparator(r.documentKey,t.documentKey),e!==0?e:P(r.largestBatchId,t.largestBatchId))}/**
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
 */const Ys="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Wt(r){if(r.code!==f.FAILED_PRECONDITION||r.message!==Ys)throw r;p("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new d((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof d?e:d.resolve(e)}catch(e){return d.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):d.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):d.reject(e)}static resolve(t){return new d((e,n)=>{e(t)})}static reject(t){return new d((e,n)=>{n(t)})}static waitFor(t){return new d((e,n)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&e()},u=>n(u))}),o=!0,i===s&&e()})}static or(t){let e=d.resolve(!1);for(const n of t)e=e.next(s=>s?d.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new d((n,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;e(t[c]).next(l=>{o[c]=l,++a,a===i&&n(o)},l=>s(l))}})}static doWhile(t,e){return new d((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}function Js(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ht(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class je{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}je.oe=-1;function ye(r){return r==null}function le(r){return r===0&&1/r==-1/0}function Zs(r){return typeof r=="number"&&Number.isInteger(r)&&!le(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function bn(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function St(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function dr(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class S{constructor(t,e){this.comparator=t,this.root=e||O.EMPTY}insert(t,e){return new S(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,O.BLACK,null,null))}remove(t){return new S(this.comparator,this.root.remove(t,this.comparator).copy(null,null,O.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new re(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new re(this.root,t,this.comparator,!1)}getReverseIterator(){return new re(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new re(this.root,t,this.comparator,!0)}}class re{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class O{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??O.RED,this.left=s??O.EMPTY,this.right=i??O.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new O(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return O.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return O.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,O.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,O.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}O.EMPTY=null,O.RED=!0,O.BLACK=!1;O.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,e,n,s,i){return this}insert(t,e,n){return new O(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class q{constructor(t){this.comparator=t,this.data=new S(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new kn(this.data.getIterator())}getIteratorFrom(t){return new kn(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof q)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new q(this.comparator);return e.data=t,e}}class kn{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class W{constructor(t){this.fields=t,t.sort(U.comparator)}static empty(){return new W([])}unionWith(t){let e=new q(U.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new W(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return At(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class fr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class B{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fr("Invalid base64 string: "+i):i}}(t);return new B(e)}static fromUint8Array(t){const e=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new B(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}B.EMPTY_BYTE_STRING=new B("");const ti=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function at(r){if(C(!!r),typeof r=="string"){let t=0;const e=ti.exec(r);if(C(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:D(r.seconds),nanos:D(r.nanos)}}function D(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ht(r){return typeof r=="string"?B.fromBase64String(r):B.fromUint8Array(r)}/**
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
 */function We(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function He(r){const t=r.mapValue.fields.__previous_value__;return We(t)?He(t):t}function qt(r){const t=at(r.mapValue.fields.__local_write_time__.timestampValue);return new L(t.seconds,t.nanos)}/**
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
 */class ei{constructor(t,e,n,s,i,o,a,u,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Bt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Bt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Bt&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const se={mapValue:{}};function dt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?We(r)?4:ri(r)?9007199254740991:ni(r)?10:11:T()}function X(r,t){if(r===t)return!0;const e=dt(r);if(e!==dt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return qt(r).isEqual(qt(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=at(s.timestampValue),a=at(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ht(s.bytesValue).isEqual(ht(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return D(s.geoPointValue.latitude)===D(i.geoPointValue.latitude)&&D(s.geoPointValue.longitude)===D(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return D(s.integerValue)===D(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=D(s.doubleValue),a=D(i.doubleValue);return o===a?le(o)===le(a):isNaN(o)&&isNaN(a)}return!1}(r,t);case 9:return At(r.arrayValue.values||[],t.arrayValue.values||[],X);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(bn(o)!==bn(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!X(o[u],a[u])))return!1;return!0}(r,t);default:return T()}}function zt(r,t){return(r.values||[]).find(e=>X(e,t))!==void 0}function vt(r,t){if(r===t)return 0;const e=dt(r),n=dt(t);if(e!==n)return P(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return P(r.booleanValue,t.booleanValue);case 2:return function(i,o){const a=D(i.integerValue||i.doubleValue),u=D(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(r,t);case 3:return Dn(r.timestampValue,t.timestampValue);case 4:return Dn(qt(r),qt(t));case 5:return P(r.stringValue,t.stringValue);case 6:return function(i,o){const a=ht(i),u=ht(o);return a.compareTo(u)}(r.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=P(a[c],u[c]);if(l!==0)return l}return P(a.length,u.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,o){const a=P(D(i.latitude),D(o.latitude));return a!==0?a:P(D(i.longitude),D(o.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Nn(r.arrayValue,t.arrayValue);case 10:return function(i,o){var a,u,c,l;const h=i.fields||{},m=o.fields||{},_=(a=h.value)===null||a===void 0?void 0:a.arrayValue,V=(u=m.value)===null||u===void 0?void 0:u.arrayValue,R=P(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((l=V==null?void 0:V.values)===null||l===void 0?void 0:l.length)||0);return R!==0?R:Nn(_,V)}(r.mapValue,t.mapValue);case 11:return function(i,o){if(i===se.mapValue&&o===se.mapValue)return 0;if(i===se.mapValue)return 1;if(o===se.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const m=P(u[h],l[h]);if(m!==0)return m;const _=vt(a[u[h]],c[l[h]]);if(_!==0)return _}return P(u.length,l.length)}(r.mapValue,t.mapValue);default:throw T()}}function Dn(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return P(r,t);const e=at(r),n=at(t),s=P(e.seconds,n.seconds);return s!==0?s:P(e.nanos,n.nanos)}function Nn(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=vt(e[s],n[s]);if(i)return i}return P(e.length,n.length)}function Rt(r){return Ne(r)}function Ne(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=at(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ht(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return y.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=Ne(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${Ne(e.fields[o])}`;return s+"}"}(r.mapValue):T()}function xe(r){return!!r&&"integerValue"in r}function Ye(r){return!!r&&"arrayValue"in r}function xn(r){return!!r&&"nullValue"in r}function Ln(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function oe(r){return!!r&&"mapValue"in r}function ni(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Lt(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return St(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Lt(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Lt(r.arrayValue.values[e]);return t}return Object.assign({},r)}function ri(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class G{constructor(t){this.value=t}static empty(){return new G({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!oe(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Lt(e)}setAll(t){let e=U.emptyPath(),n={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,n,s),n={},s=[],e=a.popLast()}o?n[a.lastSegment()]=Lt(o):s.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());oe(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return X(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];oe(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){St(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new G(Lt(this.value))}}function mr(r){const t=[];return St(r.fields,(e,n)=>{const s=new U([e]);if(oe(n)){const i=mr(n.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new W(t)}/**
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
 */class Q{constructor(t,e,n,s,i,o,a){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Q(t,0,I.min(),I.min(),I.min(),G.empty(),0)}static newFoundDocument(t,e,n,s){return new Q(t,1,e,I.min(),n,s,0)}static newNoDocument(t,e){return new Q(t,2,e,I.min(),I.min(),G.empty(),0)}static newUnknownDocument(t,e){return new Q(t,3,e,I.min(),I.min(),G.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=G.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=G.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Q(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class he{constructor(t,e){this.position=t,this.inclusive=e}}function Fn(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],o=r.position[s];if(i.field.isKeyField()?n=y.comparator(y.fromName(o.referenceValue),e.key):n=vt(o,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Mn(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!X(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class de{constructor(t,e="asc"){this.field=t,this.dir=e}}function si(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class _r{}class x extends _r{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new oi(t,e,n):e==="array-contains"?new ci(t,n):e==="in"?new li(t,n):e==="not-in"?new hi(t,n):e==="array-contains-any"?new di(t,n):new x(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new ai(t,n):new ui(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(vt(e,this.value)):e!==null&&dt(this.value)===dt(e)&&this.matchesComparison(vt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class J extends _r{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new J(t,e)}matches(t){return pr(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pr(r){return r.op==="and"}function gr(r){return ii(r)&&pr(r)}function ii(r){for(const t of r.filters)if(t instanceof J)return!1;return!0}function Le(r){if(r instanceof x)return r.field.canonicalString()+r.op.toString()+Rt(r.value);if(gr(r))return r.filters.map(t=>Le(t)).join(",");{const t=r.filters.map(e=>Le(e)).join(",");return`${r.op}(${t})`}}function yr(r,t){return r instanceof x?function(n,s){return s instanceof x&&n.op===s.op&&n.field.isEqual(s.field)&&X(n.value,s.value)}(r,t):r instanceof J?function(n,s){return s instanceof J&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,a)=>i&&yr(o,s.filters[a]),!0):!1}(r,t):void T()}function Er(r){return r instanceof x?function(e){return`${e.field.canonicalString()} ${e.op} ${Rt(e.value)}`}(r):r instanceof J?function(e){return e.op.toString()+" {"+e.getFilters().map(Er).join(" ,")+"}"}(r):"Filter"}class oi extends x{constructor(t,e,n){super(t,e,n),this.key=y.fromName(n.referenceValue)}matches(t){const e=y.comparator(t.key,this.key);return this.matchesComparison(e)}}class ai extends x{constructor(t,e){super(t,"in",e),this.keys=Tr("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ui extends x{constructor(t,e){super(t,"not-in",e),this.keys=Tr("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Tr(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>y.fromName(n.referenceValue))}class ci extends x{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ye(e)&&zt(e.arrayValue,this.value)}}class li extends x{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&zt(this.value.arrayValue,e)}}class hi extends x{constructor(t,e){super(t,"not-in",e)}matches(t){if(zt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!zt(this.value.arrayValue,e)}}class di extends x{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ye(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>zt(this.value.arrayValue,n))}}/**
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
 */class fi{constructor(t,e=null,n=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function On(r,t=null,e=[],n=[],s=null,i=null,o=null){return new fi(r,t,e,n,s,i,o)}function Xe(r){const t=A(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Le(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),ye(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Rt(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Rt(n)).join(",")),t.ue=e}return t.ue}function Je(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!si(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!yr(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Mn(r.startAt,t.startAt)&&Mn(r.endAt,t.endAt)}function Fe(r){return y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Ee{constructor(t,e=null,n=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mi(r,t,e,n,s,i,o,a){return new Ee(r,t,e,n,s,i,o,a)}function Ze(r){return new Ee(r)}function Un(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function _i(r){return r.collectionGroup!==null}function Ft(r){const t=A(r);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new q(U.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new de(i,n))}),e.has(U.keyField().canonicalString())||t.ce.push(new de(U.keyField(),n))}return t.ce}function H(r){const t=A(r);return t.le||(t.le=pi(t,Ft(r))),t.le}function pi(r,t){if(r.limitType==="F")return On(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new de(s.field,i)});const e=r.endAt?new he(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new he(r.startAt.position,r.startAt.inclusive):null;return On(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Me(r,t,e){return new Ee(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Te(r,t){return Je(H(r),H(t))&&r.limitType===t.limitType}function Ir(r){return`${Xe(H(r))}|lt:${r.limitType}`}function pt(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Er(s)).join(", ")}]`),ye(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Rt(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Rt(s)).join(",")),`Target(${n})`}(H(r))}; limitType=${r.limitType})`}function Ie(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of Ft(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(o,a,u){const c=Fn(o,a,u);return o.inclusive?c<=0:c<0}(n.startAt,Ft(n),s)||n.endAt&&!function(o,a,u){const c=Fn(o,a,u);return o.inclusive?c>=0:c>0}(n.endAt,Ft(n),s))}(r,t)}function gi(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ar(r){return(t,e)=>{let n=!1;for(const s of Ft(r)){const i=yi(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function yi(r,t,e){const n=r.field.isKeyField()?y.comparator(t.key,e.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?vt(u,c):T()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return T()}}/**
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
 */class bt{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){St(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return dr(this.inner)}size(){return this.innerSize}}/**
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
 */const Ei=new S(y.comparator);function nt(){return Ei}const vr=new S(y.comparator);function Nt(...r){let t=vr;for(const e of r)t=t.insert(e.key,e);return t}function Rr(r){let t=vr;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ct(){return Mt()}function wr(){return Mt()}function Mt(){return new bt(r=>r.toString(),(r,t)=>r.isEqual(t))}const Ti=new S(y.comparator),Ii=new q(y.comparator);function v(...r){let t=Ii;for(const e of r)t=t.add(e);return t}const Ai=new q(P);function vi(){return Ai}/**
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
 */function tn(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:le(t)?"-0":t}}function Vr(r){return{integerValue:""+r}}function Ri(r,t){return Zs(t)?Vr(t):tn(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ae{constructor(){this._=void 0}}function wi(r,t,e){return r instanceof $t?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&We(i)&&(i=He(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):r instanceof Qt?Cr(r,t):r instanceof Kt?Sr(r,t):function(s,i){const o=Pr(s,i),a=qn(o)+qn(s.Pe);return xe(o)&&xe(s.Pe)?Vr(a):tn(s.serializer,a)}(r,t)}function Vi(r,t,e){return r instanceof Qt?Cr(r,t):r instanceof Kt?Sr(r,t):e}function Pr(r,t){return r instanceof fe?function(n){return xe(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class $t extends Ae{}class Qt extends Ae{constructor(t){super(),this.elements=t}}function Cr(r,t){const e=br(t);for(const n of r.elements)e.some(s=>X(s,n))||e.push(n);return{arrayValue:{values:e}}}class Kt extends Ae{constructor(t){super(),this.elements=t}}function Sr(r,t){let e=br(t);for(const n of r.elements)e=e.filter(s=>!X(s,n));return{arrayValue:{values:e}}}class fe extends Ae{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function qn(r){return D(r.integerValue||r.doubleValue)}function br(r){return Ye(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Pi{constructor(t,e){this.field=t,this.transform=e}}function Ci(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Qt&&s instanceof Qt||n instanceof Kt&&s instanceof Kt?At(n.elements,s.elements,X):n instanceof fe&&s instanceof fe?X(n.Pe,s.Pe):n instanceof $t&&s instanceof $t}(r.transform,t.transform)}class Si{constructor(t,e){this.version=t,this.transformResults=e}}class tt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new tt}static exists(t){return new tt(void 0,t)}static updateTime(t){return new tt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ae(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ve{}function kr(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Nr(r.key,tt.none()):new Yt(r.key,r.data,tt.none());{const e=r.data,n=G.empty();let s=new q(U.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new ft(r.key,n,new W(s.toArray()),tt.none())}}function bi(r,t,e){r instanceof Yt?function(s,i,o){const a=s.value.clone(),u=zn(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(r,t,e):r instanceof ft?function(s,i,o){if(!ae(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=zn(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Dr(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(r,t,e):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Ot(r,t,e,n){return r instanceof Yt?function(i,o,a,u){if(!ae(i.precondition,o))return a;const c=i.value.clone(),l=$n(i.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(r,t,e,n):r instanceof ft?function(i,o,a,u){if(!ae(i.precondition,o))return a;const c=$n(i.fieldTransforms,u,o),l=o.data;return l.setAll(Dr(i)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(r,t,e,n):function(i,o,a){return ae(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(r,t,e)}function ki(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=Pr(n.transform,s||null);i!=null&&(e===null&&(e=G.empty()),e.set(n.field,i))}return e||null}function Bn(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&At(n,s,(i,o)=>Ci(i,o))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Yt extends ve{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ft extends ve{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dr(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function zn(r,t,e){const n=new Map;C(r.length===e.length);for(let s=0;s<e.length;s++){const i=r[s],o=i.transform,a=t.data.field(i.field);n.set(i.field,Vi(o,a,e[s]))}return n}function $n(r,t,e){const n=new Map;for(const s of r){const i=s.transform,o=e.data.field(s.field);n.set(s.field,wi(i,o,t))}return n}class Nr extends ve{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Di extends ve{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ni{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&bi(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ot(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ot(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=wr();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(s.key)?null:a;const u=kr(o,a);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(I.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),v())}isEqual(t){return this.batchId===t.batchId&&At(this.mutations,t.mutations,(e,n)=>Bn(e,n))&&At(this.baseMutations,t.baseMutations,(e,n)=>Bn(e,n))}}class en{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){C(t.mutations.length===n.length);let s=function(){return Ti}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new en(t,e,n,s)}}/**
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
 */class xi{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Li{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var N,w;function Fi(r){switch(r){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function xr(r){if(r===void 0)return et("GRPC error has no .code"),f.UNKNOWN;switch(r){case N.OK:return f.OK;case N.CANCELLED:return f.CANCELLED;case N.UNKNOWN:return f.UNKNOWN;case N.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case N.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case N.INTERNAL:return f.INTERNAL;case N.UNAVAILABLE:return f.UNAVAILABLE;case N.UNAUTHENTICATED:return f.UNAUTHENTICATED;case N.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case N.NOT_FOUND:return f.NOT_FOUND;case N.ALREADY_EXISTS:return f.ALREADY_EXISTS;case N.PERMISSION_DENIED:return f.PERMISSION_DENIED;case N.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case N.ABORTED:return f.ABORTED;case N.OUT_OF_RANGE:return f.OUT_OF_RANGE;case N.UNIMPLEMENTED:return f.UNIMPLEMENTED;case N.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(w=N||(N={}))[w.OK=0]="OK",w[w.CANCELLED=1]="CANCELLED",w[w.UNKNOWN=2]="UNKNOWN",w[w.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",w[w.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",w[w.NOT_FOUND=5]="NOT_FOUND",w[w.ALREADY_EXISTS=6]="ALREADY_EXISTS",w[w.PERMISSION_DENIED=7]="PERMISSION_DENIED",w[w.UNAUTHENTICATED=16]="UNAUTHENTICATED",w[w.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",w[w.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",w[w.ABORTED=10]="ABORTED",w[w.OUT_OF_RANGE=11]="OUT_OF_RANGE",w[w.UNIMPLEMENTED=12]="UNIMPLEMENTED",w[w.INTERNAL=13]="INTERNAL",w[w.UNAVAILABLE=14]="UNAVAILABLE",w[w.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Mi(){return new TextEncoder}/**
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
 */const Oi=new Et([4294967295,4294967295],0);function Qn(r){const t=Mi().encode(r),e=new Ms;return e.update(t),new Uint8Array(e.digest())}function Kn(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Et([e,n],0),new Et([s,i],0)]}class nn{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new xt(`Invalid padding: ${e}`);if(n<0)throw new xt(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new xt(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new xt(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Et.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(Et.fromNumber(n)));return s.compare(Oi)===1&&(s=new Et([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Qn(t),[n,s]=Kn(e);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new nn(i,s,e);return n.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Qn(t),[n,s]=Kn(e);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class xt extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Re{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Xt.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Re(I.min(),s,new S(P),nt(),v())}}class Xt{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Xt(n,e,v(),v(),v())}}/**
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
 */class ue{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class Lr{constructor(t,e){this.targetId=t,this.me=e}}class Fr{constructor(t,e,n=B.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Gn{constructor(){this.fe=0,this.ge=Wn(),this.pe=B.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=v(),e=v(),n=v();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:T()}}),new Xt(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Wn()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,C(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ui{constructor(t){this.Le=t,this.Be=new Map,this.ke=nt(),this.qe=jn(),this.Qe=new S(P)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:T()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const i=s.target;if(Fe(i))if(n===0){const o=new y(i.path);this.Ue(e,o,Q.newNoDocument(o,I.min()))}else C(n===1);else{const o=this.Ye(e);if(o!==n){const a=this.Ze(t),u=a?this.Xe(a,t,o):1;if(u!==0){this.je(e);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,c)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let o,a;try{o=ht(n).toUint8Array()}catch(u){if(u instanceof fr)return It("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new nn(o,s,i)}catch(u){return It(u instanceof xt?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,i,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Fe(a.target)){const u=new y(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Q.newNoDocument(u,t))}i.be&&(e.set(o,i.ve()),i.Ce())}});let n=v();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(t));const s=new Re(t,e,this.Qe,this.ke,n);return this.ke=nt(),this.qe=jn(),this.Qe=new S(P),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Gn,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new q(P),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||p("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Gn),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function jn(){return new S(y.comparator)}function Wn(){return new S(y.comparator)}const qi={asc:"ASCENDING",desc:"DESCENDING"},Bi={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zi={and:"AND",or:"OR"};class $i{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Oe(r,t){return r.useProto3Json||ye(t)?t:{value:t}}function me(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Mr(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Qi(r,t){return me(r,t.toTimestamp())}function Y(r){return C(!!r),I.fromTimestamp(function(e){const n=at(e);return new L(n.seconds,n.nanos)}(r))}function rn(r,t){return Ue(r,t).canonicalString()}function Ue(r,t){const e=function(s){return new b(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Or(r){const t=b.fromString(r);return C($r(t)),t}function qe(r,t){return rn(r.databaseId,t.path)}function Se(r,t){const e=Or(t);if(e.get(1)!==r.databaseId.projectId)throw new g(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new g(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new y(qr(e))}function Ur(r,t){return rn(r.databaseId,t)}function Ki(r){const t=Or(r);return t.length===4?b.emptyPath():qr(t)}function Be(r){return new b(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function qr(r){return C(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Hn(r,t,e){return{name:qe(r,t),fields:e.value.mapValue.fields}}function Gi(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(C(l===void 0||typeof l=="string"),B.fromBase64String(l||"")):(C(l===void 0||l instanceof Buffer||l instanceof Uint8Array),B.fromUint8Array(l||new Uint8Array))}(r,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?f.UNKNOWN:xr(c.code);return new g(l,c.message||"")}(o);e=new Fr(n,s,i,a||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Se(r,n.document.name),i=Y(n.document.updateTime),o=n.document.createTime?Y(n.document.createTime):I.min(),a=new G({mapValue:{fields:n.document.fields}}),u=Q.newFoundDocument(s,i,o,a),c=n.targetIds||[],l=n.removedTargetIds||[];e=new ue(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Se(r,n.document),i=n.readTime?Y(n.readTime):I.min(),o=Q.newNoDocument(s,i),a=n.removedTargetIds||[];e=new ue([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Se(r,n.document),i=n.removedTargetIds||[];e=new ue([],i,s,null)}else{if(!("filter"in t))return T();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new Li(s,i),a=n.targetId;e=new Lr(a,o)}}return e}function ji(r,t){let e;if(t instanceof Yt)e={update:Hn(r,t.key,t.value)};else if(t instanceof Nr)e={delete:qe(r,t.key)};else if(t instanceof ft)e={update:Hn(r,t.key,t.data),updateMask:no(t.fieldMask)};else{if(!(t instanceof Di))return T();e={verify:qe(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,o){const a=o.transform;if(a instanceof $t)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Kt)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fe)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw T()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Qi(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(r,t.precondition)),e}function Wi(r,t){return r&&r.length>0?(C(t!==void 0),r.map(e=>function(s,i){let o=s.updateTime?Y(s.updateTime):Y(i);return o.isEqual(I.min())&&(o=Y(i)),new Si(o,s.transformResults||[])}(e,t))):[]}function Hi(r,t){return{documents:[Ur(r,t.path)]}}function Yi(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ur(r,s);const i=function(c){if(c.length!==0)return zr(J.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(l=>function(m){return{field:gt(m.field),direction:Zi(m.dir)}}(l))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Oe(r,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{_t:e,parent:s}}function Xi(r){let t=Ki(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){C(n===1);const l=e.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];e.where&&(i=function(h){const m=Br(h);return m instanceof J&&gr(m)?m.getFilters():[m]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(m=>function(V){return new de(yt(V.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(m))}(e.orderBy));let a=null;e.limit&&(a=function(h){let m;return m=typeof h=="object"?h.value:h,ye(m)?null:m}(e.limit));let u=null;e.startAt&&(u=function(h){const m=!!h.before,_=h.values||[];return new he(_,m)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const m=!h.before,_=h.values||[];return new he(_,m)}(e.endAt)),mi(t,s,o,i,a,"F",u,c)}function Ji(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Br(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=yt(e.unaryFilter.field);return x.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=yt(e.unaryFilter.field);return x.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yt(e.unaryFilter.field);return x.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yt(e.unaryFilter.field);return x.create(o,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(r):r.fieldFilter!==void 0?function(e){return x.create(yt(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return J.create(e.compositeFilter.filters.map(n=>Br(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return T()}}(e.compositeFilter.op))}(r):T()}function Zi(r){return qi[r]}function to(r){return Bi[r]}function eo(r){return zi[r]}function gt(r){return{fieldPath:r.canonicalString()}}function yt(r){return U.fromServerFormat(r.fieldPath)}function zr(r){return r instanceof x?function(e){if(e.op==="=="){if(Ln(e.value))return{unaryFilter:{field:gt(e.field),op:"IS_NAN"}};if(xn(e.value))return{unaryFilter:{field:gt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ln(e.value))return{unaryFilter:{field:gt(e.field),op:"IS_NOT_NAN"}};if(xn(e.value))return{unaryFilter:{field:gt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gt(e.field),op:to(e.op),value:e.value}}}(r):r instanceof J?function(e){const n=e.getFilters().map(s=>zr(s));return n.length===1?n[0]:{compositeFilter:{op:eo(e.op),filters:n}}}(r):T()}function no(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function $r(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class st{constructor(t,e,n,s,i=I.min(),o=I.min(),a=B.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new st(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new st(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new st(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new st(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class ro{constructor(t){this.ct=t}}function so(r){const t=Xi({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Me(t,t.limit,"L"):t}/**
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
 */class io{constructor(){this.un=new oo}addToCollectionParentIndex(t,e){return this.un.add(e),d.resolve()}getCollectionParents(t,e){return d.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return d.resolve()}deleteFieldIndex(t,e){return d.resolve()}deleteAllFieldIndexes(t){return d.resolve()}createTargetIndexes(t,e){return d.resolve()}getDocumentsMatchingTarget(t,e){return d.resolve(null)}getIndexType(t,e){return d.resolve(0)}getFieldIndexes(t,e){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,e){return d.resolve(ot.min())}getMinOffsetFromCollectionGroup(t,e){return d.resolve(ot.min())}updateCollectionGroup(t,e,n){return d.resolve()}updateIndexEntries(t,e){return d.resolve()}}class oo{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new q(b.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new q(b.comparator)).toArray()}}/**
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
 */class wt{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new wt(0)}static kn(){return new wt(-1)}}/**
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
 */class ao{constructor(){this.changes=new bt(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Q.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?d.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class uo{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class co{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&Ot(n.mutation,s,W.empty(),L.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,v()).next(()=>n))}getLocalViewOfDocuments(t,e,n=v()){const s=ct();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let o=Nt();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=ct();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,v()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,n,s){let i=nt();const o=Mt(),a=function(){return Mt()}();return e.forEach((u,c)=>{const l=n.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof ft)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Ot(l.mutation,c,l.mutation.getFieldMask(),L.now())):o.set(c.key,W.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,l)=>o.set(c,l)),e.forEach((c,l)=>{var h;return a.set(c,new uo(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const n=Mt();let s=new S((o,a)=>o-a),i=v();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=e.get(u);if(c===null)return;let l=n.get(u)||W.empty();l=a.applyToLocalView(c,l),n.set(u,l);const h=(s.get(a.batchId)||v()).add(u);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=wr();l.forEach(m=>{if(!i.has(m)){const _=kr(e.get(m),n.get(m));_!==null&&h.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return d.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(o){return y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):_i(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):d.resolve(ct());let a=-1,u=i;return o.next(c=>d.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?d.resolve():this.remoteDocumentCache.getEntry(t,l).next(m=>{u=u.insert(l,m)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,v())).next(l=>({batchId:a,changes:Rr(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new y(e)).next(n=>{let s=Nt();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let o=Nt();return this.indexManager.getCollectionParents(t,i).next(a=>d.forEach(a,u=>{const c=function(h,m){return new Ee(m,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,n,s).next(l=>{l.forEach((h,m)=>{o=o.insert(h,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(o=>{i.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,Q.newInvalidDocument(l)))});let a=Nt();return o.forEach((u,c)=>{const l=i.get(u);l!==void 0&&Ot(l.mutation,c,W.empty(),L.now()),Ie(e,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class lo{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return d.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Y(s.createTime)}}(e)),d.resolve()}getNamedQuery(t,e){return d.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:so(s.bundledQuery),readTime:Y(s.readTime)}}(e)),d.resolve()}}/**
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
 */class ho{constructor(){this.overlays=new S(y.comparator),this.Ir=new Map}getOverlay(t,e){return d.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ct();return d.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.ht(t,e,i)}),d.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),d.resolve()}getOverlaysForCollection(t,e,n){const s=ct(),i=e.length+1,o=new y(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return d.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new S((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>n){let l=i.get(c.largestBatchId);l===null&&(l=ct(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=ct(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=s)););return d.resolve(a)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new xi(e,n));let i=this.Ir.get(e);i===void 0&&(i=v(),this.Ir.set(e,i)),this.Ir.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class fo{constructor(){this.sessionToken=B.EMPTY_BYTE_STRING}getSessionToken(t){return d.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,d.resolve()}}/**
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
 */class sn{constructor(){this.Tr=new q(F.Er),this.dr=new q(F.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new F(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new F(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new y(new b([])),n=new F(e,t),s=new F(e,t+1),i=[];return this.dr.forEachInRange([n,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new y(new b([])),n=new F(e,t),s=new F(e,t+1);let i=v();return this.dr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new F(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class F{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return y.comparator(t.key,e.key)||P(t.wr,e.wr)}static Ar(t,e){return P(t.wr,e.wr)||y.comparator(t.key,e.key)}}/**
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
 */class mo{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new q(F.Er)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ni(i,e,n,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new F(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,e){return d.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),i=s<0?0:s;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new F(e,0),s=new F(e,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],o=>{const a=this.Dr(o.wr);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new q(P);return e.forEach(s=>{const i=new F(s,0),o=new F(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{n=n.add(a.wr)})}),d.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;y.isDocumentKey(i)||(i=i.child(""));const o=new F(new y(i),0);let a=new q(P);return this.br.forEachWhile(u=>{const c=u.key.path;return!!n.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.wr)),!0)},o),d.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(n=>{const s=this.Dr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){C(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return d.forEach(e.mutations,s=>{const i=new F(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new F(e,0),s=this.br.firstAfterOrEqual(n);return d.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class _o{constructor(t){this.Mr=t,this.docs=function(){return new S(y.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,o=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return d.resolve(n?n.document.mutableCopy():Q.newInvalidDocument(e))}getEntries(t,e){let n=nt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Q.newInvalidDocument(s))}),d.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=nt();const o=e.path,a=new y(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Hs(Ws(l),n)<=0||(s.has(l.key)||Ie(e,l))&&(i=i.insert(l.key,l.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,e,n,s){T()}Or(t,e){return d.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new po(this)}getSize(t){return d.resolve(this.size)}}class po extends ao{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)}),d.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class go{constructor(t){this.persistence=t,this.Nr=new bt(e=>Xe(e),Je),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Lr=0,this.Br=new sn,this.targetCount=0,this.kr=wt.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,s)=>e(s)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),d.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new wt(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,d.resolve()}updateTargetData(t,e){return this.Kn(e),d.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&n.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),d.waitFor(i).next(()=>s)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return d.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),d.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),d.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return d.resolve(n)}containsKey(t,e){return d.resolve(this.Br.containsKey(e))}}/**
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
 */class yo{constructor(t,e){this.qr={},this.overlays={},this.Qr=new je(0),this.Kr=!1,this.Kr=!0,this.$r=new fo,this.referenceDelegate=t(this),this.Ur=new go(this),this.indexManager=new io,this.remoteDocumentCache=function(s){return new _o(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new ro(e),this.Gr=new lo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ho,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new mo(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const s=new Eo(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(t,e){return d.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class Eo extends Xs{constructor(t){super(),this.currentSequenceNumber=t}}class on{constructor(t){this.persistence=t,this.Jr=new sn,this.Yr=null}static Zr(t){return new on(t)}get Xr(){if(this.Yr)return this.Yr;throw T()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),d.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),d.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),d.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Xr,n=>{const s=y.fromPath(n);return this.ei(t,s).next(i=>{i||e.removeEntry(s,I.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return d.or([()=>d.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class an{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=v(),s=v();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new an(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class To{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Io{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return bs()?8:Js(Fs())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.Yi(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(t,e,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new To;return this.Xi(t,e,o).next(a=>{if(i.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>i.result)}es(t,e,n,s){return n.documentReadCount<this.ji?(Dt()<=rt.DEBUG&&p("QueryEngine","SDK will not create cache indexes for query:",pt(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),d.resolve()):(Dt()<=rt.DEBUG&&p("QueryEngine","Query:",pt(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(Dt()<=rt.DEBUG&&p("QueryEngine","The SDK decides to create cache indexes for query:",pt(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,H(e))):d.resolve())}Yi(t,e){if(Un(e))return d.resolve(null);let n=H(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Me(e,null,"F"),n=H(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const o=v(...i);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,n).next(u=>{const c=this.ts(e,a);return this.ns(e,c,o,u.readTime)?this.Yi(t,Me(e,null,"F")):this.rs(t,c,e,u)}))})))}Zi(t,e,n,s){return Un(e)||s.isEqual(I.min())?d.resolve(null):this.Ji.getDocuments(t,n).next(i=>{const o=this.ts(e,i);return this.ns(e,o,n,s)?d.resolve(null):(Dt()<=rt.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pt(e)),this.rs(t,o,e,js(s,-1)).next(a=>a))})}ts(t,e){let n=new q(Ar(t));return e.forEach((s,i)=>{Ie(t,i)&&(n=n.add(i))}),n}ns(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(t,e,n){return Dt()<=rt.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",pt(e)),this.Ji.getDocumentsMatchingQuery(t,e,ot.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Ao{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new S(P),this._s=new bt(i=>Xe(i),Je),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new co(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function vo(r,t,e,n){return new Ao(r,t,e,n)}async function Qr(r,t){const e=A(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],a=[];let u=v();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return e.localDocuments.getDocuments(n,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function Ro(r,t){const e=A(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,m=h.keys();let _=d.resolve();return m.forEach(V=>{_=_.next(()=>l.getEntry(u,V)).next(R=>{const E=c.docVersions.get(V);C(E!==null),R.version.compareTo(E)<0&&(h.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),l.addEntry(R)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let u=v();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Kr(r){const t=A(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function wo(r,t){const e=A(r),n=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const a=[];t.targetChanges.forEach((l,h)=>{const m=s.get(h);if(!m)return;a.push(e.Ur.removeMatchingKeys(i,l.removedDocuments,h).next(()=>e.Ur.addMatchingKeys(i,l.addedDocuments,h)));let _=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?_=_.withResumeToken(B.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):l.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(l.resumeToken,n)),s=s.insert(h,_),function(R,E,k){return R.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,_,l)&&a.push(e.Ur.updateTargetData(i,_))});let u=nt(),c=v();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Vo(i,o,t.documentUpdates).next(l=>{u=l.Ps,c=l.Is})),!n.isEqual(I.min())){const l=e.Ur.getLastRemoteSnapshotVersion(i).next(h=>e.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));a.push(l)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(e.os=s,i))}function Vo(r,t,e){let n=v(),s=v();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let o=nt();return e.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(I.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):p("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function Po(r,t){const e=A(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Co(r,t){const e=A(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Ur.getTargetData(n,t).next(i=>i?(s=i,d.resolve(s)):e.Ur.allocateTargetId(n).next(o=>(s=new st(t,o,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function ze(r,t,e){const n=A(r),s=n.os.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ht(o))throw o;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}n.os=n.os.remove(t),n._s.delete(s.target)}function Yn(r,t,e){const n=A(r);let s=I.min(),i=v();return n.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=A(u),m=h._s.get(l);return m!==void 0?d.resolve(h.os.get(m)):h.Ur.getTargetData(c,l)}(n,o,H(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>n.ss.getDocumentsMatchingQuery(o,t,e?s:I.min(),e?i:v())).next(a=>(So(n,gi(t),a),{documents:a,Ts:i})))}function So(r,t,e){let n=r.us.get(t)||I.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(t,n)}class Xn{constructor(){this.activeTargetIds=vi()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class bo{constructor(){this.so=new Xn,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Xn,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ko{_o(t){}shutdown(){}}/**
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
 */class Jn{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let ie=null;function be(){return ie===null?ie=function(){return 268435456+Math.round(2147483648*Math.random())}():ie++,"0x"+ie.toString(16)}/**
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
 */const Do={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class No{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const z="WebChannelConnection";class xo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(e,n,s,i,o){const a=be(),u=this.xo(e,n.toUriEncodedString());p("RestConnection",`Sending RPC '${e}' ${a}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(e,u,c,s).then(l=>(p("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw It("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",u,"request:",s),l})}Lo(e,n,s,i,o,a){return this.Mo(e,n,s,i,o)}Oo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ct}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>e[o]=i),s&&s.headers.forEach((i,o)=>e[o]=i)}xo(e,n){const s=Do[e];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const i=be();return new Promise((o,a)=>{const u=new ks;u.setWithCredentials(!0),u.listenOnce(Ds.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ce.NO_ERROR:const l=u.getResponseJson();p(z,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case Ce.TIMEOUT:p(z,`RPC '${t}' ${i} timed out`),a(new g(f.DEADLINE_EXCEEDED,"Request time out"));break;case Ce.HTTP_ERROR:const h=u.getStatus();if(p(z,`RPC '${t}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const V=function(E){const k=E.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(k)>=0?k:f.UNKNOWN}(_.status);a(new g(V,_.message))}else a(new g(f.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new g(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{p(z,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);p(z,`RPC '${t}' ${i} sending request:`,s),u.send(e,"POST",c,n,15)})}Bo(t,e,n){const s=be(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ns(),a=xs(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,n),u.encodeInitMessageHeaders=!0;const l=i.join("");p(z,`Creating RPC '${t}' stream ${s}: ${l}`,u);const h=o.createWebChannel(l,u);let m=!1,_=!1;const V=new No({Io:E=>{_?p(z,`Not sending because RPC '${t}' stream ${s} is closed:`,E):(m||(p(z,`Opening RPC '${t}' stream ${s} transport.`),h.open(),m=!0),p(z,`RPC '${t}' stream ${s} sending:`,E),h.send(E))},To:()=>h.close()}),R=(E,k,M)=>{E.listen(k,K=>{try{M(K)}catch(Z){setTimeout(()=>{throw Z},0)}})};return R(h,ne.EventType.OPEN,()=>{_||(p(z,`RPC '${t}' stream ${s} transport opened.`),V.yo())}),R(h,ne.EventType.CLOSE,()=>{_||(_=!0,p(z,`RPC '${t}' stream ${s} transport closed`),V.So())}),R(h,ne.EventType.ERROR,E=>{_||(_=!0,It(z,`RPC '${t}' stream ${s} transport errored:`,E),V.So(new g(f.UNAVAILABLE,"The operation could not be completed")))}),R(h,ne.EventType.MESSAGE,E=>{var k;if(!_){const M=E.data[0];C(!!M);const K=M,Z=K.error||((k=K[0])===null||k===void 0?void 0:k.error);if(Z){p(z,`RPC '${t}' stream ${s} received error:`,Z);const te=Z.status;let _t=function(Ts){const Vn=N[Ts];if(Vn!==void 0)return xr(Vn)}(te),ee=Z.message;_t===void 0&&(_t=f.INTERNAL,ee="Unknown error status: "+te+" with message "+Z.message),_=!0,V.So(new g(_t,ee)),h.close()}else p(z,`RPC '${t}' stream ${s} received:`,M),V.bo(M)}}),R(a,Ls.STAT_EVENT,E=>{E.stat===Cn.PROXY?p(z,`RPC '${t}' stream ${s} detected buffering proxy`):E.stat===Cn.NOPROXY&&p(z,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function ke(){return typeof document<"u"?document:null}/**
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
 */function we(r){return new $i(r,!0)}/**
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
 */class Gr{constructor(t,e,n=1e3,s=1.5,i=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&p("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class jr{constructor(t,e,n,s,i,o,a,u){this.ui=t,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Gr(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===f.RESOURCE_EXHAUSTED?(et(e.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===e&&this.P_(n,s)},n=>{t(()=>{const s=new g(f.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lo extends jr{constructor(t,e,n,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,o),this.serializer=i}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Gi(this.serializer,t),n=function(i){if(!("targetChange"in i))return I.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?I.min():o.readTime?Y(o.readTime):I.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Be(this.serializer),e.addTarget=function(i,o){let a;const u=o.target;if(a=Fe(u)?{documents:Hi(i,u)}:{query:Yi(i,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Mr(i,o.resumeToken);const c=Oe(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(I.min())>0){a.readTime=me(i,o.snapshotVersion.toTimestamp());const c=Oe(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const n=Ji(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Be(this.serializer),e.removeTarget=t,this.a_(e)}}class Fo extends jr{constructor(t,e,n,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return C(!!t.streamToken),this.lastStreamToken=t.streamToken,C(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){C(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Wi(t.writeResults,t.commitTime),n=Y(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Be(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>ji(this.serializer,n))};this.a_(e)}}/**
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
 */class Mo extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new g(f.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(t,Ue(e,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(f.UNKNOWN,i.toString())})}Lo(t,e,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,Ue(e,n),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new g(f.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Oo{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(et(e),this.D_=!1):p("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Uo{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{n.enqueueAndForget(async()=>{mt(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=A(u);c.L_.add(4),await Jt(c),c.q_.set("Unknown"),c.L_.delete(4),await Ve(c)}(this))})}),this.q_=new Oo(n,s)}}async function Ve(r){if(mt(r))for(const t of r.B_)await t(!0)}async function Jt(r){for(const t of r.B_)await t(!1)}function Wr(r,t){const e=A(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),hn(e)?ln(e):kt(e).r_()&&cn(e,t))}function un(r,t){const e=A(r),n=kt(e);e.N_.delete(t),n.r_()&&Hr(e,t),e.N_.size===0&&(n.r_()?n.o_():mt(e)&&e.q_.set("Unknown"))}function cn(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(I.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}kt(r).A_(t)}function Hr(r,t){r.Q_.xe(t),kt(r).R_(t)}function ln(r){r.Q_=new Ui({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),kt(r).start(),r.q_.v_()}function hn(r){return mt(r)&&!kt(r).n_()&&r.N_.size>0}function mt(r){return A(r).L_.size===0}function Yr(r){r.Q_=void 0}async function qo(r){r.q_.set("Online")}async function Bo(r){r.N_.forEach((t,e)=>{cn(r,t)})}async function zo(r,t){Yr(r),hn(r)?(r.q_.M_(t),ln(r)):r.q_.set("Unknown")}async function $o(r,t,e){if(r.q_.set("Online"),t instanceof Fr&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(r,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await _e(r,n)}else if(t instanceof ue?r.Q_.Ke(t):t instanceof Lr?r.Q_.He(t):r.Q_.We(t),!e.isEqual(I.min()))try{const n=await Kr(r.localStore);e.compareTo(n)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.N_.get(c);l&&i.N_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=i.N_.get(u);if(!l)return;i.N_.set(u,l.withResumeToken(B.EMPTY_BYTE_STRING,l.snapshotVersion)),Hr(i,u);const h=new st(l.target,u,c,l.sequenceNumber);cn(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(r,e)}catch(n){p("RemoteStore","Failed to raise snapshot:",n),await _e(r,n)}}async function _e(r,t,e){if(!Ht(t))throw t;r.L_.add(1),await Jt(r),r.q_.set("Offline"),e||(e=()=>Kr(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await Ve(r)})}function Xr(r,t){return t().catch(e=>_e(r,e,t))}async function Pe(r){const t=A(r),e=ut(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Qo(t);)try{const s=await Po(t.localStore,n);if(s===null){t.O_.length===0&&e.o_();break}n=s.batchId,Ko(t,s)}catch(s){await _e(t,s)}Jr(t)&&Zr(t)}function Qo(r){return mt(r)&&r.O_.length<10}function Ko(r,t){r.O_.push(t);const e=ut(r);e.r_()&&e.V_&&e.m_(t.mutations)}function Jr(r){return mt(r)&&!ut(r).n_()&&r.O_.length>0}function Zr(r){ut(r).start()}async function Go(r){ut(r).p_()}async function jo(r){const t=ut(r);for(const e of r.O_)t.m_(e.mutations)}async function Wo(r,t,e){const n=r.O_.shift(),s=en.from(n,t,e);await Xr(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Pe(r)}async function Ho(r,t){t&&ut(r).V_&&await async function(n,s){if(function(o){return Fi(o)&&o!==f.ABORTED}(s.code)){const i=n.O_.shift();ut(n).s_(),await Xr(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Pe(n)}}(r,t),Jr(r)&&Zr(r)}async function Zn(r,t){const e=A(r);e.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const n=mt(e);e.L_.add(3),await Jt(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Ve(e)}async function Yo(r,t){const e=A(r);t?(e.L_.delete(2),await Ve(e)):t||(e.L_.add(2),await Jt(e),e.q_.set("Unknown"))}function kt(r){return r.K_||(r.K_=function(e,n,s){const i=A(e);return i.w_(),new Lo(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:qo.bind(null,r),Ro:Bo.bind(null,r),mo:zo.bind(null,r),d_:$o.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),hn(r)?ln(r):r.q_.set("Unknown")):(await r.K_.stop(),Yr(r))})),r.K_}function ut(r){return r.U_||(r.U_=function(e,n,s){const i=A(e);return i.w_(),new Fo(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Go.bind(null,r),mo:Ho.bind(null,r),f_:jo.bind(null,r),g_:Wo.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await Pe(r)):(await r.U_.stop(),r.O_.length>0&&(p("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class dn{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const o=Date.now()+n,a=new dn(t,e,o,s,i);return a.start(n),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fn(r,t){if(et("AsyncQueue",`${t}: ${r}`),Ht(r))return new g(f.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Tt{constructor(t){this.comparator=t?(e,n)=>t(e,n)||y.comparator(e.key,n.key):(e,n)=>y.comparator(e.key,n.key),this.keyedMap=Nt(),this.sortedSet=new S(this.comparator)}static emptySet(t){return new Tt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Tt)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Tt;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class tr{constructor(){this.W_=new S(y.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):T():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Vt{constructor(t,e,n,s,i,o,a,u,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Vt(t,e,Tt.emptySet(e),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Te(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class Xo{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Jo{constructor(){this.queries=er(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const s=A(e),i=s.queries;s.queries=er(),i.forEach((o,a)=>{for(const u of a.j_)u.onError(n)})})(this,new g(f.ABORTED,"Firestore shutting down"))}}function er(){return new bt(r=>Ir(r),Te)}async function Zo(r,t){const e=A(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.H_()&&t.J_()&&(n=2):(i=new Xo,n=t.J_()?0:1);try{switch(n){case 0:i.z_=await e.onListen(s,!0);break;case 1:i.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=fn(o,`Initialization of query '${pt(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,i),i.j_.push(t),t.Z_(e.onlineState),i.z_&&t.X_(i.z_)&&mn(e)}async function ta(r,t){const e=A(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const o=i.j_.indexOf(t);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=t.J_()?0:1:!i.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function ea(r,t){const e=A(r);let n=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(n=!0);o.z_=s}}n&&mn(e)}function na(r,t,e){const n=A(r),s=n.queries.get(t);if(s)for(const i of s.j_)i.onError(e);n.queries.delete(t)}function mn(r){r.Y_.forEach(t=>{t.next()})}var $e,nr;(nr=$e||($e={})).ea="default",nr.Cache="cache";class ra{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Vt(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Vt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==$e.Cache}}/**
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
 */class ts{constructor(t){this.key=t}}class es{constructor(t){this.key=t}}class sa{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=v(),this.mutatedKeys=v(),this.Aa=Ar(t),this.Ra=new Tt(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new tr,s=e?e.Ra:this.Ra;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const m=s.get(l),_=Ie(this.query,h)?h:null,V=!!m&&this.mutatedKeys.has(m.key),R=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let E=!1;m&&_?m.data.isEqual(_.data)?V!==R&&(n.track({type:3,doc:_}),E=!0):this.ga(m,_)||(n.track({type:2,doc:_}),E=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!m&&_?(n.track({type:0,doc:_}),E=!0):m&&!_&&(n.track({type:1,doc:m}),E=!0,(u||c)&&(a=!0)),E&&(_?(o=o.add(_),i=R?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),n.track({type:1,doc:l})}return{Ra:o,fa:n,ns:a,mutatedKeys:i}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((l,h)=>function(_,V){const R=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return R(_)-R(V)}(l.type,h.type)||this.Aa(l.doc,h.doc)),this.pa(n),s=s!=null&&s;const a=e&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Vt(this.query,t.Ra,i,o,t.mutatedKeys,u===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new tr,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=v(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new es(n))}),this.da.forEach(n=>{t.has(n)||e.push(new ts(n))}),e}ba(t){this.Ta=t.Ts,this.da=v();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Vt.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ia{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class oa{constructor(t){this.key=t,this.va=!1}}class aa{constructor(t,e,n,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new bt(a=>Ir(a),Te),this.Ma=new Map,this.xa=new Set,this.Oa=new S(y.comparator),this.Na=new Map,this.La=new sn,this.Ba={},this.ka=new Map,this.qa=wt.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ua(r,t,e=!0){const n=as(r);let s;const i=n.Fa.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await ns(n,t,e,!0),s}async function ca(r,t){const e=as(r);await ns(e,t,!0,!1)}async function ns(r,t,e,n){const s=await Co(r.localStore,H(t)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,e);let a;return n&&(a=await la(r,t,i,o==="current",s.resumeToken)),r.isPrimaryClient&&e&&Wr(r.remoteStore,s),a}async function la(r,t,e,n,s){r.Ka=(h,m,_)=>async function(R,E,k,M){let K=E.view.ma(k);K.ns&&(K=await Yn(R.localStore,E.query,!1).then(({documents:ee})=>E.view.ma(ee,K)));const Z=M&&M.targetChanges.get(E.targetId),te=M&&M.targetMismatches.get(E.targetId)!=null,_t=E.view.applyChanges(K,R.isPrimaryClient,Z,te);return sr(R,E.targetId,_t.wa),_t.snapshot}(r,h,m,_);const i=await Yn(r.localStore,t,!0),o=new sa(t,i.Ts),a=o.ma(i.documents),u=Xt.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),c=o.applyChanges(a,r.isPrimaryClient,u);sr(r,e,c.wa);const l=new ia(t,e,o);return r.Fa.set(t,l),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),c.snapshot}async function ha(r,t,e){const n=A(r),s=n.Fa.get(t),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(o=>!Te(o,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ze(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&un(n.remoteStore,s.targetId),Qe(n,s.targetId)}).catch(Wt)):(Qe(n,s.targetId),await ze(n.localStore,s.targetId,!0))}async function da(r,t){const e=A(r),n=e.Fa.get(t),s=e.Ma.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),un(e.remoteStore,n.targetId))}async function fa(r,t,e){const n=Ta(r);try{const s=await function(o,a){const u=A(o),c=L.now(),l=a.reduce((_,V)=>_.add(V.key),v());let h,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let V=nt(),R=v();return u.cs.getEntries(_,l).next(E=>{V=E,V.forEach((k,M)=>{M.isValidDocument()||(R=R.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,V)).next(E=>{h=E;const k=[];for(const M of a){const K=ki(M,h.get(M.key).overlayedDocument);K!=null&&k.push(new ft(M.key,K,mr(K.value.mapValue),tt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,k,a)}).next(E=>{m=E;const k=E.applyToLocalDocumentSet(h,R);return u.documentOverlayCache.saveOverlays(_,E.batchId,k)})}).then(()=>({batchId:m.batchId,changes:Rr(h)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new S(P)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(n,s.batchId,e),await Zt(n,s.changes),await Pe(n.remoteStore)}catch(s){const i=fn(s,"Failed to persist write");e.reject(i)}}async function rs(r,t){const e=A(r);try{const n=await wo(e.localStore,t);t.targetChanges.forEach((s,i)=>{const o=e.Na.get(i);o&&(C(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?C(o.va):s.removedDocuments.size>0&&(C(o.va),o.va=!1))}),await Zt(e,n,t)}catch(n){await Wt(n)}}function rr(r,t,e){const n=A(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Fa.forEach((i,o)=>{const a=o.view.Z_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=A(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const m of h.j_)m.Z_(a)&&(c=!0)}),c&&mn(u)}(n.eventManager,t),s.length&&n.Ca.d_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function ma(r,t,e){const n=A(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Na.get(t),i=s&&s.key;if(i){let o=new S(y.comparator);o=o.insert(i,Q.newNoDocument(i,I.min()));const a=v().add(i),u=new Re(I.min(),new Map,new S(P),o,a);await rs(n,u),n.Oa=n.Oa.remove(i),n.Na.delete(t),_n(n)}else await ze(n.localStore,t,!1).then(()=>Qe(n,t,e)).catch(Wt)}async function _a(r,t){const e=A(r),n=t.batch.batchId;try{const s=await Ro(e.localStore,t);is(e,n,null),ss(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Zt(e,s)}catch(s){await Wt(s)}}async function pa(r,t,e){const n=A(r);try{const s=await function(o,a){const u=A(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(C(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(n.localStore,t);is(n,t,e),ss(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Zt(n,s)}catch(s){await Wt(s)}}function ss(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function is(r,t,e){const n=A(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Ba[n.currentUser.toKey()]=s}}function Qe(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||os(r,n)})}function os(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(un(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),_n(r))}function sr(r,t,e){for(const n of e)n instanceof ts?(r.La.addReference(n.key,t),ga(r,n)):n instanceof es?(p("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||os(r,n.key)):T()}function ga(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(p("SyncEngine","New document in limbo: "+e),r.xa.add(n),_n(r))}function _n(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new y(b.fromString(t)),n=r.qa.next();r.Na.set(n,new oa(e)),r.Oa=r.Oa.insert(e,n),Wr(r.remoteStore,new st(H(Ze(e.path)),n,"TargetPurposeLimboResolution",je.oe))}}async function Zt(r,t,e){const n=A(r),s=[],i=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((a,u)=>{o.push(n.Ka(u,t,e).then(c=>{var l;if((c||e)&&n.isPrimaryClient){const h=c?!c.fromCache:(l=e==null?void 0:e.targetChanges.get(u.targetId))===null||l===void 0?void 0:l.current;n.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){s.push(c);const h=an.Wi(u.targetId,c);i.push(h)}}))}),await Promise.all(o),n.Ca.d_(s),await async function(u,c){const l=A(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>d.forEach(c,m=>d.forEach(m.$i,_=>l.persistence.referenceDelegate.addReference(h,m.targetId,_)).next(()=>d.forEach(m.Ui,_=>l.persistence.referenceDelegate.removeReference(h,m.targetId,_)))))}catch(h){if(!Ht(h))throw h;p("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const m=h.targetId;if(!h.fromCache){const _=l.os.get(m),V=_.snapshotVersion,R=_.withLastLimboFreeSnapshotVersion(V);l.os=l.os.insert(m,R)}}}(n.localStore,i))}async function ya(r,t){const e=A(r);if(!e.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const n=await Qr(e.localStore,t);e.currentUser=t,function(i,o){i.ka.forEach(a=>{a.forEach(u=>{u.reject(new g(f.CANCELLED,o))})}),i.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Zt(e,n.hs)}}function Ea(r,t){const e=A(r),n=e.Na.get(t);if(n&&n.va)return v().add(n.key);{let s=v();const i=e.Ma.get(t);if(!i)return s;for(const o of i){const a=e.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function as(r){const t=A(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=rs.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ea.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ma.bind(null,t),t.Ca.d_=ea.bind(null,t.eventManager),t.Ca.$a=na.bind(null,t.eventManager),t}function Ta(r){const t=A(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=_a.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=pa.bind(null,t),t}class pe{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=we(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return vo(this.persistence,new Io,t.initialUser,this.serializer)}Ga(t){return new yo(on.Zr,this.serializer)}Wa(t){return new bo}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pe.provider={build:()=>new pe};class Ke{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>rr(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=ya.bind(null,this.syncEngine),await Yo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Jo}()}createDatastore(t){const e=we(t.databaseInfo.databaseId),n=function(i){return new xo(i)}(t.databaseInfo);return function(i,o,a,u){return new Mo(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,o,a){return new Uo(n,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>rr(this.syncEngine,e,0),function(){return Jn.D()?new Jn:new ko}())}createSyncEngine(t,e){return function(s,i,o,a,u,c,l){const h=new aa(s,i,o,a,u,c);return l&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=A(s);p("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Jt(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ke.provider={build:()=>new Ke};/**
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
 *//**
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
 */class Ia{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):et("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Aa{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=$.UNAUTHENTICATED,this.clientId=hr.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{p("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(p("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=fn(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function De(r,t){r.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Qr(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ir(r,t){r.asyncQueue.verifyOperationInProgress();const e=await va(r);p("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Zn(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Zn(t.remoteStore,s)),r._onlineComponents=t}async function va(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await De(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===f.FAILED_PRECONDITION||s.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;It("Error using user provided cache. Falling back to memory cache: "+e),await De(r,new pe)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await De(r,new pe);return r._offlineComponents}async function us(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await ir(r,r._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await ir(r,new Ke))),r._onlineComponents}function Ra(r){return us(r).then(t=>t.syncEngine)}async function wa(r){const t=await us(r),e=t.eventManager;return e.onListen=ua.bind(null,t.syncEngine),e.onUnlisten=ha.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ca.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=da.bind(null,t.syncEngine),e}function Va(r,t,e={}){const n=new it;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const l=new Ia({next:m=>{l.Za(),o.enqueueAndForget(()=>ta(i,h));const _=m.docs.has(a);!_&&m.fromCache?c.reject(new g(f.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&u&&u.source==="server"?c.reject(new g(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),h=new ra(Ze(a.path),l,{includeMetadataChanges:!0,_a:!0});return Zo(i,h)}(await wa(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function cs(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const or=new Map;/**
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
 */function Pa(r,t,e){if(!e)throw new g(f.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Ca(r,t,e,n){if(t===!0&&n===!0)throw new g(f.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function ar(r){if(!y.isDocumentKey(r))throw new g(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function pn(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":T()}function Gt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new g(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=pn(r);throw new g(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */class ur{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new g(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new g(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ca("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cs((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new g(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new g(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new g(f.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class gn{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ur({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new g(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new g(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ur(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Os;switch(n.type){case"firstParty":return new zs(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new g(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=or.get(e);n&&(p("ComponentProvider","Removing Datastore"),or.delete(e),n.terminate())}(this),Promise.resolve()}}function Sa(r,t,e,n={}){var s;const i=(r=Gt(r,gn))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&It("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),n.mockUserToken){let a,u;if(typeof n.mockUserToken=="string")a=n.mockUserToken,u=$.MOCK_USER;else{a=Ps(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const c=n.mockUserToken.sub||n.mockUserToken.user_id;if(!c)throw new g(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new $(c)}r._authCredentials=new Us(new lr(a,u))}}/**
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
 */class yn{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new yn(this.firestore,t,this._query)}}class j{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new j(this.firestore,t,this._key)}}class jt extends yn{constructor(t,e,n){super(t,e,Ze(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new j(this.firestore,null,new y(t))}withConverter(t){return new jt(this.firestore,t,this._path)}}function Za(r,t,...e){if(r=ce(r),arguments.length===1&&(t=hr.newId()),Pa("doc","path",t),r instanceof gn){const n=b.fromString(t,...e);return ar(n),new j(r,null,new y(n))}{if(!(r instanceof j||r instanceof jt))throw new g(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(b.fromString(t,...e));return ar(n),new j(r.firestore,r instanceof jt?r.converter:null,new y(n))}}/**
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
 */class cr{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Gr(this,"async_queue_retry"),this.Vu=()=>{const n=ke();n&&p("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=ke();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=ke();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new it;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Ht(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(n);throw et("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=dn.createAndSchedule(this,t,e,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&T()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class En extends gn{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new cr,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new cr(t),this._firestoreClient=void 0,await t}}}function tu(r,t){const e=typeof r=="object"?r:Is(),n=typeof r=="string"?r:"(default)",s=As(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=ws("firestore");i&&Sa(s,...i)}return s}function ls(r){if(r._terminated)throw new g(f.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||ba(r),r._firestoreClient}function ba(r){var t,e,n;const s=r._freezeSettings(),i=function(a,u,c,l){return new ei(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,cs(l.experimentalLongPollingOptions),l.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Aa(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(r._componentsProvider))}/**
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
 */class Pt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pt(B.fromBase64String(t))}catch(e){throw new g(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pt(B.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Tn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new g(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new U(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class In{constructor(t){this._methodName=t}}/**
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
 */class An{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new g(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new g(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class vn{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
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
 */const ka=/^__.*__$/;class Da{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ft(t,this.data,this.fieldMask,e,this.fieldTransforms):new Yt(t,this.data,e,this.fieldTransforms)}}function hs(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Rn{constructor(t,e,n,s,i,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Rn(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.Ou(t),s}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return ge(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(hs(this.Cu)&&ka.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Na{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||we(t)}Qu(t,e,n,s=!1){return new Rn({Cu:t,methodName:e,qu:n,path:U.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xa(r){const t=r._freezeSettings(),e=we(r._databaseId);return new Na(r._databaseId,!!t.ignoreUndefinedProperties,e)}function La(r,t,e,n,s,i={}){const o=r.Qu(i.merge||i.mergeFields?2:0,t,e,s);_s("Data must be an object, but it was:",o,n);const a=fs(n,o);let u,c;if(i.merge)u=new W(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const m=Fa(t,h,e);if(!o.contains(m))throw new g(f.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Oa(l,m)||l.push(m)}u=new W(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new Da(new G(a),u,c)}class wn extends In{_toFieldTransform(t){return new Pi(t.path,new $t)}isEqual(t){return t instanceof wn}}function ds(r,t){if(ms(r=ce(r)))return _s("Unsupported field value:",t,r),fs(r,t);if(r instanceof In)return function(n,s){if(!hs(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const a of n){let u=ds(a,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=ce(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ri(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=L.fromDate(n);return{timestampValue:me(s.serializer,i)}}if(n instanceof L){const i=new L(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:me(s.serializer,i)}}if(n instanceof An)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pt)return{bytesValue:Mr(s.serializer,n._byteString)};if(n instanceof j){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rn(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof vn)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return tn(a.serializer,u)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${pn(n)}`)}(r,t)}function fs(r,t){const e={};return dr(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):St(r,(n,s)=>{const i=ds(s,t.Mu(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function ms(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof L||r instanceof An||r instanceof Pt||r instanceof j||r instanceof In||r instanceof vn)}function _s(r,t,e){if(!ms(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=pn(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function Fa(r,t,e){if((t=ce(t))instanceof Tn)return t._internalPath;if(typeof t=="string")return ps(r,t);throw ge("Field path arguments must be of type string or ",r,!1,void 0,e)}const Ma=new RegExp("[~\\*/\\[\\]]");function ps(r,t,e){if(t.search(Ma)>=0)throw ge(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Tn(...t.split("."))._internalPath}catch{throw ge(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ge(r,t,e,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new g(f.INVALID_ARGUMENT,a+r+u)}function Oa(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class gs{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new j(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ua(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ys("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ua extends gs{data(){return super.data()}}function ys(r,t){return typeof t=="string"?ps(r,t):t instanceof Tn?t._internalPath:t._delegate._internalPath}class qa{convertValue(t,e="none"){switch(dt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return D(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw T()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return St(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>D(o.doubleValue));return new vn(i)}convertGeoPoint(t){return new An(D(t.latitude),D(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=He(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(qt(t));default:return null}}convertTimestamp(t){const e=at(t);return new L(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=b.fromString(t);C($r(n));const s=new Bt(n.get(1),n.get(3)),i=new y(n.popFirst(5));return s.isEqual(e)||et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function Ba(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
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
 */class za{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Es extends gs{constructor(t,e,n,s,i,o){super(t,e,n,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ys("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class $a extends Es{data(t={}){return super.data(t)}}/**
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
 */function eu(r){r=Gt(r,j);const t=Gt(r.firestore,En);return Va(ls(t),r._key).then(e=>Ga(t,r,e))}class Qa extends qa{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new j(this.firestore,null,e)}}function nu(r,t,e){r=Gt(r,j);const n=Gt(r.firestore,En),s=Ba(r.converter,t);return Ka(n,[La(xa(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,tt.none())])}function Ka(r,t){return function(n,s){const i=new it;return n.asyncQueue.enqueueAndForget(async()=>fa(await Ra(n),s,i)),i.promise}(ls(r),t)}function Ga(r,t,e){const n=e.docs.get(t._key),s=new Qa(r);return new Es(r,s,t._key,n,new za(e.hasPendingWrites,e.fromCache),t.converter)}function ru(){return new wn("serverTimestamp")}(function(t,e=!0){(function(s){Ct=s})(vs),Rs(new Ss("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new En(new qs(n.getProvider("auth-internal")),new Qs(n.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new g(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bt(c.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Pn(Sn,"4.7.3",t),Pn(Sn,"4.7.3","esm2017")})();export{eu as a,ru as b,Za as d,tu as g,nu as s};
