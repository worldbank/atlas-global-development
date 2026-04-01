import{D as Rt,I as A,v as tt,J as Gt,G as Dt,Q as Vt,w as Ut,E as Ft}from"./BTPvuzdk.js";const V=Object.create(null),st=Object.create(null);function et(r,t){let e=st[r];return e===void 0&&(V[t]===void 0&&(V[t]=1),st[r]=e=V[t]++),e}let P;function bt(){return(!P||P!=null&&P.isContextLost())&&(P=Rt.get().createCanvas().getContext("webgl",{})),P}let R;function $t(){if(!R){R="mediump";const r=bt();r&&r.getShaderPrecisionFormat&&(R=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision?"highp":"mediump")}return R}function kt(r,t,e){return t?r:e?(r=r.replace("out vec4 finalColor;",""),`

        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${r}
        `):`

        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${r}
        `}function Nt(r,t,e){const i=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(r.substring(0,9)!=="precision"){let s=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return s==="highp"&&i!=="highp"&&(s="mediump"),`precision ${s} float;
${r}`}else if(i!=="highp"&&r.substring(0,15)==="precision highp")return r.replace("precision highp","precision mediump");return r}function Ot(r,t){return t?`#version 300 es
${r}`:r}const Lt={},jt={};function Yt(r,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const i=e?Lt:jt;return i[t]?(i[t]++,t+=`-${i[t]}`):i[t]=1,r.indexOf("#define SHADER_NAME")!==-1?r:`${`#define SHADER_NAME ${t}`}
${r}`}function Ht(r,t){return t?r.replace("#version 300 es",""):r}const U={stripVersion:Ht,ensurePrecision:Nt,addProgramDefines:kt,setProgramName:Yt,insertVersion:Ot},E=Object.create(null),_t=class q{constructor(t){t={...q.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,i={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:$t()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let s=t.fragment,n=t.vertex;Object.keys(U).forEach(a=>{const o=i[a];s=U[a](s,o,!0),n=U[a](n,o,!1)}),this.fragment=s,this.vertex=n,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=et(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null,E[this._cacheKey]=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return E[e]||(E[e]=new q(t),E[e]._cacheKey=e),E[e]}};_t.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let yt=_t;const nt={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Wt(r){return nt[r]??nt.float32}const Xt={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Kt({source:r,entryPoint:t}){const e={},i=r.indexOf(`fn ${t}`);if(i!==-1){const s=r.indexOf("->",i);if(s!==-1){const n=r.substring(i,s),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let o;for(;(o=a.exec(n))!==null;){const u=Xt[o[3]]??"float32";e[o[2]]={location:parseInt(o[1],10),format:u,stride:Wt(u).stride,offset:0,instance:!1,start:0}}}}return e}function F(r){var d,m;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,i=/@binding\((\d+)\)/,s=/var(<[^>]+>)? (\w+)/,n=/:\s*(\w+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,o=/(\w+)\s*:\s*([\w\<\>]+)/g,u=/struct\s+(\w+)/,h=(d=r.match(t))==null?void 0:d.map(f=>({group:parseInt(f.match(e)[1],10),binding:parseInt(f.match(i)[1],10),name:f.match(s)[2],isUniform:f.match(s)[1]==="<uniform>",type:f.match(n)[1]}));if(!h)return{groups:[],structs:[]};const l=((m=r.match(a))==null?void 0:m.map(f=>{const p=f.match(u)[1],b=f.match(o).reduce((c,v)=>{const[x,g]=v.split(":");return c[x.trim()]=g.trim(),c},{});return b?{name:p,members:b}:null}).filter(({name:f})=>h.some(p=>p.type===f)))??[];return{groups:h,structs:l}}var z=(r=>(r[r.VERTEX=1]="VERTEX",r[r.FRAGMENT=2]="FRAGMENT",r[r.COMPUTE=4]="COMPUTE",r))(z||{});function Qt({groups:r}){const t=[];for(let e=0;e<r.length;e++){const i=r[e];t[i.group]||(t[i.group]=[]),i.isUniform?t[i.group].push({binding:i.binding,visibility:z.VERTEX|z.FRAGMENT,buffer:{type:"uniform"}}):i.type==="sampler"?t[i.group].push({binding:i.binding,visibility:z.FRAGMENT,sampler:{type:"filtering"}}):i.type==="texture_2d"&&t[i.group].push({binding:i.binding,visibility:z.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function qt({groups:r}){const t=[];for(let e=0;e<r.length;e++){const i=r[e];t[i.group]||(t[i.group]={}),t[i.group][i.name]=i.binding}return t}function Zt(r,t){const e=new Set,i=new Set,s=[...r.structs,...t.structs].filter(a=>e.has(a.name)?!1:(e.add(a.name),!0)),n=[...r.groups,...t.groups].filter(a=>{const o=`${a.name}-${a.binding}`;return i.has(o)?!1:(i.add(o),!0)});return{structs:s,groups:n}}const B=Object.create(null);class D{constructor(t){var o,u;this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:e,vertex:i,layout:s,gpuLayout:n,name:a}=t;if(this.name=a,this.fragment=e,this.vertex=i,e.source===i.source){const h=F(e.source);this.structsAndGroups=h}else{const h=F(i.source),l=F(e.source);this.structsAndGroups=Zt(h,l)}this.layout=s??qt(this.structsAndGroups),this.gpuLayout=n??Qt(this.structsAndGroups),this.autoAssignGlobalUniforms=((o=this.layout[0])==null?void 0:o.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((u=this.layout[1])==null?void 0:u.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,i=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=et(i,"program")}get attributeData(){return this._attributeData??(this._attributeData=Kt(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null,B[this._cacheKey]=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return B[e]||(B[e]=new D(t),B[e]._cacheKey=e),B[e]}}const vt=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],Jt=vt.reduce((r,t)=>(r[t]=!0,r),{});function te(r,t){switch(r){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const St=class At{constructor(t,e){this._touched=0,this.uid=A("uniform"),this._resourceType="uniformGroup",this._resourceId=A("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...At.defaultOptions,...e},this.uniformStructures=t;const i={};for(const s in t){const n=t[s];if(n.name=s,n.size=n.size??1,!Jt[n.type]){const a=n.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);if(a){const[,o,u]=a;throw new Error(`Uniform type ${n.type} is not supported. Use type: '${o}', size: ${u} instead.`)}throw new Error(`Uniform type ${n.type} is not supported. Supported uniform types are: ${vt.join(", ")}`)}n.value??(n.value=te(n.type,n.size)),i[s]=n.value}this.uniforms=i,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=et(Object.keys(i).map(s=>`${s}-${t[s].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};St.defaultOptions={ubo:!1,isStatic:!1};let wt=St;class ${constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const i in t){const s=t[i];this.setResource(s,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const i in this.resources)t[e++]=this.resources[i]._resourceId;this._key=t.join("|")}setResource(t,e){var s,n;const i=this.resources[e];t!==i&&(i&&((s=t.off)==null||s.call(t,"change",this.onResourceChange,this)),(n=t.on)==null||n.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const i in e)e[i]._touched=t}destroy(){var e;const t=this.resources;for(const i in t){const s=t[i];(e=s==null?void 0:s.off)==null||e.call(s,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const i in e)e[i]===t&&(e[i]=null)}else this._updateKey()}}var Z=(r=>(r[r.WEBGL=1]="WEBGL",r[r.WEBGPU=2]="WEBGPU",r[r.BOTH=3]="BOTH",r))(Z||{});class rt extends tt{constructor(t){super(),this.uid=A("shader"),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:i,groups:s,resources:n,compatibleRenderers:a,groupMap:o}=t;this.gpuProgram=e,this.glProgram=i,a===void 0&&(a=0,e&&(a|=Z.WEBGPU),i&&(a|=Z.WEBGL)),this.compatibleRenderers=a;const u={};if(!n&&!s&&(n={}),n&&s)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&s&&!o)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&s&&o)for(const h in o)for(const l in o[h]){const d=o[h][l];u[d]={group:h,binding:l,name:d}}else if(e&&s&&!o){const h=e.structsAndGroups.groups;o={},h.forEach(l=>{o[l.group]=o[l.group]||{},o[l.group][l.binding]=l.name,u[l.name]=l})}else if(n){s={},o={},e&&e.structsAndGroups.groups.forEach(d=>{o[d.group]=o[d.group]||{},o[d.group][d.binding]=d.name,u[d.name]=d});let h=0;for(const l in n)u[l]||(s[99]||(s[99]=new $,this._ownedBindGroups.push(s[99])),u[l]={group:99,binding:h,name:l},o[99]=o[99]||{},o[99][h]=l,h++);for(const l in n){const d=l;let m=n[l];!m.source&&!m._resourceType&&(m=new wt(m));const f=u[d];f&&(s[f.group]||(s[f.group]=new $,this._ownedBindGroups.push(s[f.group])),s[f.group].setResource(m,f.binding))}}this.groups=s,this._uniformBindMap=o,this.resources=this._buildResourceAccessor(s,u)}addResource(t,e,i){var s,n;(s=this._uniformBindMap)[e]||(s[e]={}),(n=this._uniformBindMap[e])[i]||(n[i]=t),this.groups[e]||(this.groups[e]=new $,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const i={};for(const s in e){const n=e[s];Object.defineProperty(i,n.name,{get(){return t[n.group].getResource(n.binding)},set(a){t[n.group].setResource(a,n.binding)}})}return i}destroy(t=!1){var e,i;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(i=this.glProgram)==null||i.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(s=>{s.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:e,gl:i,...s}=t;let n,a;return e&&(n=D.from(e)),i&&(a=yt.from(i)),new rt({gpuProgram:n,glProgram:a,...s})}}const ee={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},k=0,N=1,O=2,L=3,j=4,Y=5,J=class Pt{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<k)}set blend(t){!!(this.data&1<<k)!==t&&(this.data^=1<<k)}get offsets(){return!!(this.data&1<<N)}set offsets(t){!!(this.data&1<<N)!==t&&(this.data^=1<<N)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<O)}set culling(t){!!(this.data&1<<O)!==t&&(this.data^=1<<O)}get depthTest(){return!!(this.data&1<<L)}set depthTest(t){!!(this.data&1<<L)!==t&&(this.data^=1<<L)}get depthMask(){return!!(this.data&1<<Y)}set depthMask(t){!!(this.data&1<<Y)!==t&&(this.data^=1<<Y)}get clockwiseFrontFace(){return!!(this.data&1<<j)}set clockwiseFrontFace(t){!!(this.data&1<<j)!==t&&(this.data^=1<<j)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=ee[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new Pt;return t.depthTest=!1,t.blend=!0,t}};J.default2d=J.for2d();let Ye=J;class ot{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function at(r,t){const e=r.byteLength/8|0,i=new Float64Array(r,0,e);new Float64Array(t,0,e).set(i);const n=r.byteLength-e*8;if(n>0){const a=new Uint8Array(r,e*8,n);new Uint8Array(t,e*8,n).set(a)}}const re={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var ie=(r=>(r[r.DISABLED=0]="DISABLED",r[r.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",r[r.MASK_ACTIVE=2]="MASK_ACTIVE",r[r.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",r[r.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",r[r.NONE=5]="NONE",r))(ie||{});function ut(r,t){return t.alphaMode==="no-premultiply-alpha"&&re[r]||r}const se=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function ne(r){let t="";for(let e=0;e<r;++e)e>0&&(t+=`
else `),e<r-1&&(t+=`if(test == ${e}.0){}`);return t}function oe(r,t){if(r===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const e=t.createShader(t.FRAGMENT_SHADER);try{for(;;){const i=se.replace(/%forloop%/gi,ne(r));if(t.shaderSource(e,i),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))r=r/2|0;else break}}finally{t.deleteShader(e)}return r}let I=null;function ae(){var t;if(I)return I;const r=bt();return I=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),I=oe(I,r),(t=r.getExtension("WEBGL_lose_context"))==null||t.loseContext(),I}class ue{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class ce{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new ue,this.blendMode="normal",this.topology="triangle-strip",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const M=[];let G=0;Dt.register({clear:()=>{if(M.length>0)for(const r of M)r&&r.destroy();M.length=0,G=0}});function ct(){return G>0?M[--G]:new ce}function lt(r){M[G++]=r}let T=0;const It=class Et{constructor(t){this.uid=A("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],t={...Et.defaultOptions,...t},t.maxTextures||(Gt("v8.8.0","maxTextures is a required option for Batcher now, please pass it in the options"),t.maxTextures=ae());const{maxTextures:e,attributesInitialSize:i,indicesInitialSize:s}=t;this.attributeBuffer=new ot(i*4),this.indexBuffer=new Uint16Array(s),this.maxTextures=e}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let t=0;t<this.batchIndex;t++)lt(this.batches[t]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t._indexStart=this.indexSize,t._attributeStart=this.attributeSize,t._batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.attributeSize*this.vertexSize}checkAndUpdateTexture(t,e){const i=t._batch.textures.ids[e._source.uid];return!i&&i!==0?!1:(t._textureId=i,t.texture=e,!0)}updateElement(t){this.dirty=!0;const e=this.attributeBuffer;t.packAsQuad?this.packQuadAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId):this.packAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId)}break(t){const e=this._elements;if(!e[this.elementStart])return;let i=ct(),s=i.textures;s.clear();const n=e[this.elementStart];let a=ut(n.blendMode,n.texture._source),o=n.topology;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const u=this.attributeBuffer.float32View,h=this.attributeBuffer.uint32View,l=this.indexBuffer;let d=this._batchIndexSize,m=this._batchIndexStart,f="startBatch";const p=this.maxTextures;for(let b=this.elementStart;b<this.elementSize;++b){const c=e[b];e[b]=null;const x=c.texture._source,g=ut(c.blendMode,x),y=a!==g||o!==c.topology;if(x._batchTick===T&&!y){c._textureId=x._textureBindLocation,d+=c.indexSize,c.packAsQuad?(this.packQuadAttributes(c,u,h,c._attributeStart,c._textureId),this.packQuadIndex(l,c._indexStart,c._attributeStart/this.vertexSize)):(this.packAttributes(c,u,h,c._attributeStart,c._textureId),this.packIndex(c,l,c._indexStart,c._attributeStart/this.vertexSize)),c._batch=i;continue}x._batchTick=T,(s.count>=p||y)&&(this._finishBatch(i,m,d-m,s,a,o,t,f),f="renderBatch",m=d,a=g,o=c.topology,i=ct(),s=i.textures,s.clear(),++T),c._textureId=x._textureBindLocation=s.count,s.ids[x.uid]=s.count,s.textures[s.count++]=x,c._batch=i,d+=c.indexSize,c.packAsQuad?(this.packQuadAttributes(c,u,h,c._attributeStart,c._textureId),this.packQuadIndex(l,c._indexStart,c._attributeStart/this.vertexSize)):(this.packAttributes(c,u,h,c._attributeStart,c._textureId),this.packIndex(c,l,c._indexStart,c._attributeStart/this.vertexSize))}s.count>0&&(this._finishBatch(i,m,d-m,s,a,o,t,f),m=d,++T),this.elementStart=this.elementSize,this._batchIndexStart=m,this._batchIndexSize=d}_finishBatch(t,e,i,s,n,a,o,u){t.gpuBindGroup=null,t.bindGroup=null,t.action=u,t.batcher=this,t.textures=s,t.blendMode=n,t.topology=a,t.start=e,t.size=i,++T,this.batches[this.batchIndex++]=t,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),i=new ot(e);at(this.attributeBuffer.rawBinaryData,i.rawBinaryData),this.attributeBuffer=i}_resizeIndexBuffer(t){const e=this.indexBuffer;let i=Math.max(t,e.length*1.5);i+=i%2;const s=i>65535?new Uint32Array(i):new Uint16Array(i);if(s.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let n=0;n<e.length;n++)s[n]=e[n];else at(e.buffer,s.buffer);this.indexBuffer=s}packQuadIndex(t,e,i){t[e]=i+0,t[e+1]=i+1,t[e+2]=i+2,t[e+3]=i+0,t[e+4]=i+2,t[e+5]=i+3}packIndex(t,e,i,s){const n=t.indices,a=t.indexSize,o=t.indexOffset,u=t.attributeOffset;for(let h=0;h<a;h++)e[i++]=s+n[h+o]-u}destroy(){if(this.batches!==null){for(let t=0;t<this.batches.length;t++)lt(this.batches[t]);this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t]&&(this._elements[t]._batch=null);this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}}};It.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let le=It;var _=(r=>(r[r.MAP_READ=1]="MAP_READ",r[r.MAP_WRITE=2]="MAP_WRITE",r[r.COPY_SRC=4]="COPY_SRC",r[r.COPY_DST=8]="COPY_DST",r[r.INDEX=16]="INDEX",r[r.VERTEX=32]="VERTEX",r[r.UNIFORM=64]="UNIFORM",r[r.STORAGE=128]="STORAGE",r[r.INDIRECT=256]="INDIRECT",r[r.QUERY_RESOLVE=512]="QUERY_RESOLVE",r[r.STATIC=1024]="STATIC",r))(_||{});class C extends tt{constructor(t){let{data:e,size:i}=t;const{usage:s,label:n,shrinkToFit:a}=t;super(),this.uid=A("buffer"),this._resourceType="buffer",this._resourceId=A("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,i??(i=e==null?void 0:e.byteLength);const o=!!e;this.descriptor={size:i,usage:s,mappedAtCreation:o,label:n},this.shrinkToFit=a??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&_.STATIC)}set static(t){t?this.descriptor.usage|=_.STATIC:this.descriptor.usage&=~_.STATIC}setDataWithSize(t,e,i){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){i&&this.emit("update",this);return}const s=this._data;if(this._data=t,this._dataInt32=null,!s||s.length!==t.length){!this.shrinkToFit&&s&&t.byteLength<s.byteLength?i&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=A("resource"),this.emit("change",this));return}i&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Bt(r,t){if(!(r instanceof C)){let e=t?_.INDEX:_.VERTEX;r instanceof Array&&(t?(r=new Uint32Array(r),e=_.INDEX|_.COPY_DST):(r=new Float32Array(r),e=_.VERTEX|_.COPY_DST)),r=new C({data:r,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return r}function he(r,t,e){const i=r.getAttribute(t);if(!i)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const s=i.buffer.data;let n=1/0,a=1/0,o=-1/0,u=-1/0;const h=s.BYTES_PER_ELEMENT,l=(i.offset||0)/h,d=(i.stride||2*4)/h;for(let m=l;m<s.length;m+=d){const f=s[m],p=s[m+1];f>o&&(o=f),p>u&&(u=p),f<n&&(n=f),p<a&&(a=p)}return e.minX=n,e.minY=a,e.maxX=o,e.maxY=u,e}function fe(r){return(r instanceof C||Array.isArray(r)||r.BYTES_PER_ELEMENT)&&(r={buffer:r}),r.buffer=Bt(r.buffer,!1),r}class de extends tt{constructor(t={}){super(),this.uid=A("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Vt,this._boundsDirty=!0;const{attributes:e,indexBuffer:i,topology:s}=t;if(this.buffers=[],this.attributes={},e)for(const n in e)this.addAttribute(n,e[n]);this.instanceCount=t.instanceCount??1,i&&this.addIndex(i),this.topology=s||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}addAttribute(t,e){const i=fe(e);this.buffers.indexOf(i.buffer)===-1&&(this.buffers.push(i.buffer),i.buffer.on("update",this.onBufferUpdate,this),i.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=i}addIndex(t){this.indexBuffer=Bt(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,he(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const me=new Float32Array(1),pe=new Uint32Array(1);class ge extends de{constructor(){const e=new C({data:me,label:"attribute-batch-buffer",usage:_.VERTEX|_.COPY_DST,shrinkToFit:!1}),i=new C({data:pe,label:"index-batch-buffer",usage:_.INDEX|_.COPY_DST,shrinkToFit:!1}),s=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:s,offset:0},aUV:{buffer:e,format:"float32x2",stride:s,offset:2*4},aColor:{buffer:e,format:"unorm8x4",stride:s,offset:4*4},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:s,offset:5*4}},indexBuffer:i})}}function ht(r,t,e){if(r)for(const i in r){const s=i.toLocaleLowerCase(),n=t[s];if(n){let a=r[i];i==="header"&&(a=a.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),e&&n.push(`//----${e}----//`),n.push(a)}else Ut(`${i} placement hook does not exist in shader`)}}const xe=/\{\{(.*?)\}\}/g;function ft(r){var i;const t={};return(((i=r.match(xe))==null?void 0:i.map(s=>s.replace(/[{()}]/g,"")))??[]).forEach(s=>{t[s]=[]}),t}function dt(r,t){let e;const i=/@in\s+([^;]+);/g;for(;(e=i.exec(r))!==null;)t.push(e[1])}function mt(r,t,e=!1){const i=[];dt(t,i),r.forEach(o=>{o.header&&dt(o.header,i)});const s=i;e&&s.sort();const n=s.map((o,u)=>`       @location(${u}) ${o},`).join(`
`);let a=t.replace(/@in\s+[^;]+;\s*/g,"");return a=a.replace("{{in}}",`
${n}
`),a}function pt(r,t){let e;const i=/@out\s+([^;]+);/g;for(;(e=i.exec(r))!==null;)t.push(e[1])}function be(r){const e=/\b(\w+)\s*:/g.exec(r);return e?e[1]:""}function _e(r){const t=/@.*?\s+/g;return r.replace(t,"")}function ye(r,t){const e=[];pt(t,e),r.forEach(u=>{u.header&&pt(u.header,e)});let i=0;const s=e.sort().map(u=>u.indexOf("builtin")>-1?u:`@location(${i++}) ${u}`).join(`,
`),n=e.sort().map(u=>`       var ${_e(u)};`).join(`
`),a=`return VSOutput(
            ${e.sort().map(u=>` ${be(u)}`).join(`,
`)});`;let o=t.replace(/@out\s+[^;]+;\s*/g,"");return o=o.replace("{{struct}}",`
${s}
`),o=o.replace("{{start}}",`
${n}
`),o=o.replace("{{return}}",`
${a}
`),o}function gt(r,t){let e=r;for(const i in t){const s=t[i];s.join(`
`).length?e=e.replace(`{{${i}}}`,`//-----${i} START-----//
${s.join(`
`)}
//----${i} FINISH----//`):e=e.replace(`{{${i}}}`,"")}return e}const S=Object.create(null),H=new Map;let ve=0;function Se({template:r,bits:t}){const e=Tt(r,t);if(S[e])return S[e];const{vertex:i,fragment:s}=we(r,t);return S[e]=zt(i,s,t),S[e]}function Ae({template:r,bits:t}){const e=Tt(r,t);return S[e]||(S[e]=zt(r.vertex,r.fragment,t)),S[e]}function we(r,t){const e=t.map(a=>a.vertex).filter(a=>!!a),i=t.map(a=>a.fragment).filter(a=>!!a);let s=mt(e,r.vertex,!0);s=ye(e,s);const n=mt(i,r.fragment,!0);return{vertex:s,fragment:n}}function Tt(r,t){return t.map(e=>(H.has(e)||H.set(e,ve++),H.get(e))).sort((e,i)=>e-i).join("-")+r.vertex+r.fragment}function zt(r,t,e){const i=ft(r),s=ft(t);return e.forEach(n=>{ht(n.vertex,i,n.name),ht(n.fragment,s,n.name)}),{vertex:gt(r,i),fragment:gt(t,s)}}const Pe=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,Ie=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,Ee=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,Be=`

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`,Te={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},ze={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function Me({bits:r,name:t}){const e=Se({template:{fragment:Ie,vertex:Pe},bits:[Te,...r]});return D.from({name:t,vertex:{source:e.vertex,entryPoint:"main"},fragment:{source:e.fragment,entryPoint:"main"}})}function Ce({bits:r,name:t}){return new yt({name:t,...Ae({template:{vertex:Ee,fragment:Be},bits:[ze,...r]})})}const Re={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},Ge={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},W={};function De(r){const t=[];if(r===1)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let e=0;for(let i=0;i<r;i++)t.push(`@group(1) @binding(${e++}) var textureSource${i+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${i+1}: sampler;`)}return t.join(`
`)}function Ve(r){const t=[];if(r===1)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let e=0;e<r;e++)e===r-1?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join(`
`)}function Ue(r){return W[r]||(W[r]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${De(r)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${Ve(r)}
            `}}),W[r]}const X={};function Fe(r){const t=[];for(let e=0;e<r;e++)e>0&&t.push("else"),e<r-1&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join(`
`)}function $e(r){return X[r]||(X[r]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${r}];

            `,main:`

                ${Fe(r)}
            `}}),X[r]}const ke={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Ne={name:"round-pixels-bit",vertex:{header:`
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},xt={};function Oe(r){let t=xt[r];if(t)return t;const e=new Int32Array(r);for(let i=0;i<r;i++)e[i]=i;return t=xt[r]=new wt({uTextures:{value:e,type:"i32",size:r}},{isStatic:!0}),t}class Le extends rt{constructor(t){const e=Ce({name:"batch",bits:[Ge,$e(t),Ne]}),i=Me({name:"batch",bits:[Re,Ue(t),ke]});super({glProgram:e,gpuProgram:i,resources:{batchSamplers:Oe(t)}})}}let K=null;const Mt=class Ct extends le{constructor(t){super(t),this.geometry=new ge,this.name=Ct.extension.name,this.vertexSize=6,K??(K=new Le(t.maxTextures)),this.shader=K}packAttributes(t,e,i,s,n){const a=n<<16|t.roundPixels&65535,o=t.transform,u=o.a,h=o.b,l=o.c,d=o.d,m=o.tx,f=o.ty,{positions:p,uvs:b}=t,c=t.color,v=t.attributeOffset,x=v+t.attributeSize;for(let g=v;g<x;g++){const y=g*2,w=p[y],it=p[y+1];e[s++]=u*w+l*it+m,e[s++]=d*it+h*w+f,e[s++]=b[y],e[s++]=b[y+1],i[s++]=c,i[s++]=a}}packQuadAttributes(t,e,i,s,n){const a=t.texture,o=t.transform,u=o.a,h=o.b,l=o.c,d=o.d,m=o.tx,f=o.ty,p=t.bounds,b=p.maxX,c=p.minX,v=p.maxY,x=p.minY,g=a.uvs,y=t.color,w=n<<16|t.roundPixels&65535;e[s+0]=u*c+l*x+m,e[s+1]=d*x+h*c+f,e[s+2]=g.x0,e[s+3]=g.y0,i[s+4]=y,i[s+5]=w,e[s+6]=u*b+l*x+m,e[s+7]=d*x+h*b+f,e[s+8]=g.x1,e[s+9]=g.y1,i[s+10]=y,i[s+11]=w,e[s+12]=u*b+l*v+m,e[s+13]=d*v+h*b+f,e[s+14]=g.x2,e[s+15]=g.y2,i[s+16]=y,i[s+17]=w,e[s+18]=u*c+l*v+m,e[s+19]=d*v+h*c+f,e[s+20]=g.x3,e[s+21]=g.y3,i[s+22]=y,i[s+23]=w}};Mt.extension={type:[Ft.Batcher],name:"default"};let He=Mt;const Q={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},We={...Q,vertex:{...Q.vertex,header:Q.vertex.header.replace("group(1)","group(2)")}},Xe={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}};class Ke{constructor(){this.batcherName="default",this.topology="triangle-list",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}destroy(){}}function Qe(r,t,e){const i=(r>>24&255)/255;t[e++]=(r&255)/255*i,t[e++]=(r>>8&255)/255*i,t[e++]=(r>>16&255)/255*i,t[e++]=i}export{$ as B,He as D,D as G,Z as R,Ye as S,wt as U,ot as V,ie as a,_ as b,C as c,et as d,Me as e,at as f,Re as g,Ue as h,rt as i,Q as j,yt as k,We as l,Wt as m,Ke as n,Qe as o,de as p,oe as q,ke as r,Ce as s,Ge as t,Xe as u,Ne as v,$e as w,Oe as x,ut as y};
