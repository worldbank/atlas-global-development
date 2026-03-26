import{V as Q,b as w,f as ee,e as te,g as ie,P as se,s as R,h as oe,i as ne,j as re,t as ae,k as le,C as ce,L as de,m as ue,n as z,o as pe,p as fe,W as he,q as ge,r as ve,v as ye,U as V,M as _e,G as xe,w as Pe,D as W,x as me,y as Ce,z as _,A as M,d as be}from"./DuiYm5wb.js";const Le=`

struct ColorUniforms {
  opacity: f32,
};

var<private> color: ColorUniforms = ColorUniforms(1.0);
// TODO (kaapp) avoiding binding index collisions to handle layer opacity 
// requires some thought.
// @group(0) @binding(0) var<uniform> color: ColorUniforms;

@must_use
fn deckgl_premultiplied_alpha(fragColor: vec4<f32>) -> vec4<f32> {
    return vec4(fragColor.rgb * fragColor.a, fragColor.a); 
};
`,Me={name:"color",dependencies:[],source:Le,getUniforms:t=>({}),uniformTypes:{opacity:"f32"}},L=Math.PI/180,N=180/Math.PI,E=6370972,y=256;function Ee(){const t=y/E,e=Math.PI/180*y;return{unitsPerMeter:[t,t,t],unitsPerMeter2:[0,0,0],metersPerUnit:[1/t,1/t,1/t],unitsPerDegree:[e,e,t],unitsPerDegree2:[0,0,0],degreesPerUnit:[1/e,1/e,1/t]}}class Ie extends Q{constructor(e={}){const{longitude:i=0,zoom:o=0,nearZMultiplier:s=.5,farZMultiplier:n=1,resolution:r=10}=e;let{latitude:a=0,height:l,altitude:c=1.5,fovy:d}=e;a=Math.max(Math.min(a,w),-w),l=l||1,d?c=ee(d):d=te(c);const u=1/Math.PI/Math.cos(a*Math.PI/180),f=Math.pow(2,o)*u,h=e.nearZ??s,g=e.farZ??(c+y*2*f/l)*n,p=new ie().lookAt({eye:[0,-c,0],up:[0,0,1]});p.rotateX(a*L),p.rotateZ(-i*L),p.scale(f/l),super({...e,height:l,viewMatrix:p,longitude:i,latitude:a,zoom:o,distanceScales:Ee(),fovy:d,focalDistance:c,near:h,far:g}),this.scale=f,this.latitude=a,this.longitude=i,this.resolution=r}get projectionMode(){return se.GLOBE}getDistanceScales(){return this.distanceScales}getBounds(e={}){const i={targetZ:e.z||0},o=this.unproject([0,this.height/2],i),s=this.unproject([this.width/2,0],i),n=this.unproject([this.width,this.height/2],i),r=this.unproject([this.width/2,this.height],i);return n[0]<this.longitude&&(n[0]+=360),o[0]>this.longitude&&(o[0]-=360),[Math.min(o[0],n[0],s[0],r[0]),Math.min(o[1],n[1],s[1],r[1]),Math.max(o[0],n[0],s[0],r[0]),Math.max(o[1],n[1],s[1],r[1])]}unproject(e,{topLeft:i=!0,targetZ:o}={}){const[s,n,r]=e,a=i?n:this.height-n,{pixelUnprojectionMatrix:l}=this;let c;if(Number.isFinite(r))c=S(l,[s,a,r,1]);else{const h=S(l,[s,a,-1,1]),g=S(l,[s,a,1,1]),p=((o||0)/E+1)*y,v=R(oe([],h,g)),x=R(h),b=R(g),j=4*((4*x*b-(v-x-b)**2)/16)/v,H=Math.sqrt(x-j),$=Math.sqrt(Math.max(0,p*p-j)),J=(H-$)/Math.sqrt(v);c=ne([],h,g,J)}const[d,u,f]=this.unprojectPosition(c);return Number.isFinite(r)?[d,u,f]:Number.isFinite(o)?[d,u,o]:[d,u]}projectPosition(e){const[i,o,s=0]=e,n=i*L,r=o*L,a=Math.cos(r),l=(s/E+1)*y;return[Math.sin(n)*a*l,-Math.cos(n)*a*l,Math.sin(r)*l]}unprojectPosition(e){const[i,o,s]=e,n=re(e),r=Math.asin(s/n),l=Math.atan2(i,-o)*N,c=r*N,d=(n/y-1)*E;return[l,c,d]}projectFlat(e){return e}unprojectFlat(e){return e}panByPosition(e,i){const o=this.unproject(i);return{longitude:e[0]-o[0]+this.longitude,latitude:e[1]-o[1]+this.latitude}}}function S(t,e){const i=ae([],e,t);return le(i,i,1/i[3]),i}class we extends ue{applyConstraints(e){const{maxZoom:i,minZoom:o,zoom:s}=e;e.zoom=z(s,o,i);const{longitude:n,latitude:r}=e;return(n<-180||n>180)&&(e.longitude=pe(n+180,360)-180),e.latitude=z(r,-w,w),e}}class Re extends ce{constructor(){super(...arguments),this.ControllerState=we,this.transition={transitionDuration:300,transitionInterpolator:new de(["longitude","latitude","zoom"])},this.dragMode="pan"}setProps(e){super.setProps(e),this.dragRotate=!1,this.touchRotate=!1}}class K extends fe{constructor(e={}){super(e)}getViewportType(e){return e.zoom>12?he:Ie}get ControllerType(){return Re}}K.displayName="GlobeView";const Z=`uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,Se={name:"scatterplot",vs:Z,fs:Z,source:"",uniformTypes:{radiusScale:"f32",radiusMinPixels:"f32",radiusMaxPixels:"f32",lineWidthScale:"f32",lineWidthMinPixels:"f32",lineWidthMaxPixels:"f32",stroked:"f32",filled:"f32",antialiasing:"f32",billboard:"f32",radiusUnits:"i32",lineWidthUnits:"i32"}},De=`#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
geometry.pickingColor = instancePickingColors;
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,Fe=`#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Oe=`// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

struct ConstantAttributeUniforms {
 instancePositions: vec3<f32>,
 instancePositions64Low: vec3<f32>,
 instanceRadius: f32,
 instanceLineWidths: f32,
 instanceFillColors: vec4<f32>,
 instanceLineColors: vec4<f32>,
 instancePickingColors: vec3<f32>,

 instancePositionsConstant: i32,
 instancePositions64LowConstant: i32,
 instanceRadiusConstant: i32,
 instanceLineWidthsConstant: i32,
 instanceFillColorsConstant: i32,
 instanceLineColorsConstant: i32,
 instancePickingColorsConstant: i32
};

@group(0) @binding(2) var<uniform> scatterplot: ScatterplotUniforms;

struct ConstantAttributes {
  instancePositions: vec3<f32>,
  instancePositions64Low: vec3<f32>,
  instanceRadius: f32,
  instanceLineWidths: f32,
  instanceFillColors: vec4<f32>,
  instanceLineColors: vec4<f32>,
  instancePickingColors: vec3<f32>
};

const constants = ConstantAttributes(
  vec3<f32>(0.0),
  vec3<f32>(0.0),
  0.0,
  0.0,
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec3<f32>(0.0)
);

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePickingColors: vec3<f32>
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  // var geometry: Geometry;
  // geometry.worldPosition = instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  let edgePadding = select(
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    1.0,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = attributes.instancePickingColors;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, vec3<f32>(0.0)); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    let offset = attributes.positions; // * edgePadding * varyings.outerRadiusPixels;
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position.x = clipPixels.x;
    varyings.position.y = clipPixels.y;
  } else {
    let offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    // DECKGL_FILTER_SIZE(offset, geometry);
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, offset); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * color.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * color.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    step(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;
  // DECKGL_FILTER_COLOR(fragColor, geometry);

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`,q=[0,0,0,255],ke={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:"accessor",value:t=>t.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:q},getLineColor:{type:"accessor",value:q},getLineWidth:{type:"accessor",value:1},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class X extends ge{getShaders(){return super.getShaders({vs:De,fs:Fe,source:Oe,modules:[ve,Me,ye,Se]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}updateState(e){var i;super.updateState(e),e.changeFlags.extensionsChanged&&((i=this.state.model)==null||i.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){const{radiusUnits:i,radiusScale:o,radiusMinPixels:s,radiusMaxPixels:n,stroked:r,filled:a,billboard:l,antialiasing:c,lineWidthUnits:d,lineWidthScale:u,lineWidthMinPixels:f,lineWidthMaxPixels:h}=this.props,g={stroked:r,filled:a,billboard:l,antialiasing:c,radiusUnits:V[i],radiusScale:o,radiusMinPixels:s,radiusMaxPixels:n,lineWidthUnits:V[d],lineWidthScale:u,lineWidthMinPixels:f,lineWidthMaxPixels:h},p=this.state.model;p.shaderInputs.setProps({scatterplot:g}),this.context.device.type==="webgpu"&&(p.instanceCount=this.props.data.length),p.draw(this.context.renderPass)}_getModel(){const e=this.context.device.type==="webgpu"?{depthWriteEnabled:!0,depthCompare:"less-equal"}:void 0,i=[-1,-1,0,1,-1,0,-1,1,0,1,1,0];return new _e(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new xe({topology:"triangle-strip",attributes:{positions:{size:3,value:new Float32Array(i)}}}),isInstanced:!0,parameters:e})}}X.defaultProps=ke;X.layerName="ScatterplotLayer";const m="mapbox",D=512,We=Math.PI/180;function G({map:t,gl:e,deck:i}){if(t.__deck)return t.__deck;const o=i==null?void 0:i.props._customRender,s=i==null?void 0:i.props.onLoad,n={...i==null?void 0:i.props,_customRender:()=>{t.triggerRepaint(),o==null||o("")}};n.parameters={...I(t,!0),...n.parameters},n.views||(n.views=P(t));let r;return(!i||i.props.gl===e)&&(Object.assign(n,{gl:e,width:null,height:null,touchAction:"unset",viewState:C(t)}),i!=null&&i.isInitialized?B(i,t):n.onLoad=()=>{s==null||s(),B(r,t)}),i?(r=i,i.setProps(n),i.userData.isExternal=!0):(r=new W(n),t.on("remove",()=>{Y(t)})),r.userData.mapboxLayers=new Set,t.__deck=r,t.on("render",()=>{r.isInitialized&&Ve(r,t)}),r}function B(t,e){const i=()=>{t.isInitialized?Ne(t,e):e.off("move",i)};e.on("move",i)}function Y(t){var e;(e=t.__deck)==null||e.finalize(),t.__deck=null}function I(t,e){const i=e?{depthWriteEnabled:!0,depthCompare:"less-equal",depthBias:0,blend:!0,blendColorSrcFactor:"src-alpha",blendColorDstFactor:"one-minus-src-alpha",blendAlphaSrcFactor:"one",blendAlphaDstFactor:"one-minus-src-alpha",blendColorOperation:"add",blendAlphaOperation:"add"}:{};return T(t)==="globe"&&(i.cullMode="back"),i}function Ge(t,e){t.userData.mapboxLayers.add(e),U(t)}function Te(t,e){t.userData.mapboxLayers.delete(e),U(t)}function Ae(t,e){U(t)}function Ue(t,e,i,o){let{currentViewport:s}=t.userData,n=!1;s||(s=A(t,e,o),t.userData.currentViewport=s,n=!0),t.isInitialized&&t._drawLayers("mapbox-repaint",{viewports:[s],layerFilter:r=>(!t.props.layerFilter||t.props.layerFilter(r))&&(i.id===r.layer.id||r.layer.props.operation.includes("terrain")),clearStack:n,clearCanvas:!1})}function je(t,e,i,o){let{currentViewport:s}=t.userData,n=!1;s||(s=A(t,e,o),t.userData.currentViewport=s,n=!0),t.isInitialized&&t._drawLayers("mapbox-repaint",{viewports:[s],layerFilter:r=>{if(t.props.layerFilter&&!t.props.layerFilter(r))return!1;const a=r.layer;return a.props.beforeId===i.beforeId&&a.props.slot===i.slot},clearStack:n,clearCanvas:!1})}function T(t){var o;const e=(o=t.getProjection)==null?void 0:o.call(t),i=(e==null?void 0:e.type)||(e==null?void 0:e.name);if(i==="globe")return"globe";if(i&&i!=="mercator")throw new Error("Unsupported projection");return"mercator"}function P(t){return T(t)==="globe"?new K({id:m}):new Pe({id:m})}function C(t){var s;const{lng:e,lat:i}=t.getCenter(),o={longitude:(e+540)%360-180,latitude:i,zoom:t.getZoom(),bearing:t.getBearing(),pitch:t.getPitch(),padding:t.getPadding(),repeat:t.getRenderWorldCopies()};return(s=t.getTerrain)!=null&&s.call(t)&&ze(t,o),o}function ze(t,e){if(t.getFreeCameraOptions){const{position:i}=t.getFreeCameraOptions();if(!i||i.z===void 0)return;const o=t.transform.height,{longitude:s,latitude:n,pitch:r}=e,a=i.x*D,l=(1-i.y)*D,c=i.z*D,d=me([s,n]),u=a-d[0],f=l-d[1],h=Math.sqrt(u*u+f*f),g=r*We,p=1.5*o,v=g<.001?p*Math.cos(g)/c:p*Math.sin(g)/h;e.zoom=Math.log2(v);const x=p*Math.cos(g)/v,b=c-x;e.position=[0,0,b/Ce(n)]}else typeof t.transform.elevation=="number"&&(e.position=[0,0,t.transform.elevation])}function A(t,e,i){const o=C(e),{views:s}=t.props,n=s&&_(s).find(l=>l.id===m)||P(e);i&&(n.props.nearZMultiplier=.2);const r=(i==null?void 0:i.nearZ)??e.transform._nearZ,a=(i==null?void 0:i.farZ)??e.transform._farZ;return Number.isFinite(r)&&(o.nearZ=r/e.transform.height,o.farZ=a/e.transform.height),n.makeViewport({width:t.width,height:t.height,viewState:o})}function Ve(t,e){const{mapboxLayers:i,isExternal:o}=t.userData;if(o){const s=Array.from(i,d=>d.id),r=_(t.props.layers,Boolean).some(d=>d&&!s.includes(d.id));let a=t.getViewports();const l=a.findIndex(d=>d.id===m),c=a.length>1||l<0;(r||c)&&(l>=0&&(a=a.slice(),a[l]=A(t,e)),t._drawLayers("mapbox-repaint",{viewports:a,layerFilter:d=>(!t.props.layerFilter||t.props.layerFilter(d))&&(d.viewport.id!==m||!s.includes(d.layer.id)),clearCanvas:!1}))}t.userData.currentViewport=null}function Ne(t,e){t.setProps({viewState:C(e)}),t.needsRedraw({clearRedrawFlags:!0})}function U(t){if(t.userData.isExternal)return;const e=[];t.userData.mapboxLayers.forEach(i=>{const o=i.props.type,s=new o(i.props);e.push(s)}),t.setProps({layers:e})}class Ze{constructor(e){if(!e.id)throw new Error("Layer must have an unique id");this.id=e.id,this.type="custom",this.renderingMode=e.renderingMode||"3d",this.slot=e.slot,this.map=null,this.deck=null,this.props=e}onAdd(e,i){this.map=e,this.deck=G({map:e,gl:i,deck:this.props.deck}),Ge(this.deck,this)}onRemove(){this.deck&&Te(this.deck,this)}setProps(e){Object.assign(this.props,e,{id:this.id}),this.deck&&Ae(this.deck)}render(e,i){Ue(this.deck,this.map,this,i)}}const F="__UNDEFINED__";function qe(t,e,i,o){if(!t||!e||!t.style||!t.style._loaded)return;const s=_(o,Boolean);if(i!==o){const a=_(i,Boolean),l=new Set(a.map(c=>c.id));for(const c of s)l.delete(c.id);for(const c of l)t.getLayer(c)&&t.removeLayer(c)}for(const a of s){const l=t.getLayer(a.id);l?(l.implementation||l).setProps(a.props):t.addLayer(new Ze({id:a.id,deck:e,slot:a.props.slot}),a.props.beforeId)}const n=t.style._order,r={};for(const a of s){let{beforeId:l}=a.props;(!l||!n.includes(l))&&(l=F),r[l]=r[l]||[],r[l].push(a.id)}for(const a in r){const l=r[a];let c=a===F?n.length:n.indexOf(a),d=a===F?void 0:a;for(let u=l.length-1;u>=0;u--){const f=l[u],h=n.indexOf(f);h!==c-1&&(t.moveLayer(f,d),h>c&&c++),c--,d=f}}}class Be{constructor(e){M(e.id,"id is required"),this.id=e.id,this.type="custom",this.renderingMode=e.renderingMode||"3d",this.slot=e.slot,this.beforeId=e.beforeId,this.map=null,this.deck=null}onAdd(e,i){this.map=e,this.deck=G({map:e,gl:i})}render(e,i){!this.deck||!this.map||je(this.deck,this.map,this,i)}}const O="__UNDEFINED__";function k(t){return t.props.beforeId?`deck-layer-group-before:${t.props.beforeId}`:t.props.slot?`deck-layer-group-slot:${t.props.slot}`:"deck-layer-group-last"}function Ke(t,e,i){if(!t||!t.style||!t.style._loaded)return;const o=_(i,Boolean);if(e!==i){const r=_(e,Boolean),a=new Set(r.map(c=>k(c))),l=new Set(o.map(c=>k(c)));for(const c of a)l.has(c)||t.getLayer(c)&&t.removeLayer(c)}const s={};for(const r of o){const a=k(r),l=t.getLayer(a);if(l){const c=l.implementation||l;s[a]=c}else{const c=new Be({id:a,slot:r.props.slot,beforeId:r.props.beforeId});s[a]=c,t.addLayer(c,r.props.beforeId)}}const n=t.style._order;for(const[r,a]of Object.entries(s)){const l=a.beforeId||O,c=l===O?n.length:n.indexOf(l);if(n.indexOf(r)!==c-1){const u=l===O?void 0:l;t.moveLayer(r,u)}}}class He{constructor(e){this._handleStyleChange=()=>{var s;if(this._resolveLayers(this._map,this._deck,this._props.layers,this._props.layers),!this._map)return;T(this._map)&&!this._props.views&&((s=this._deck)==null||s.setProps({views:P(this._map)}))},this._updateContainerSize=()=>{if(this._map&&this._container){const{clientWidth:o,clientHeight:s}=this._map.getContainer();Object.assign(this._container.style,{width:`${o}px`,height:`${s}px`})}},this._updateViewState=()=>{const o=this._deck,s=this._map;o&&s&&(o.setProps({views:this._props.views||P(s),viewState:C(s)}),o.isInitialized&&o.redraw())},this._handleMouseEvent=o=>{const s=this._deck;if(!s||!s.isInitialized)return;const n={type:o.type,offsetCenter:o.point,srcEvent:o},r=this._lastMouseDownPoint;switch(!o.point&&r&&(n.deltaX=o.originalEvent.clientX-r.clientX,n.deltaY=o.originalEvent.clientY-r.clientY,n.offsetCenter={x:r.x+n.deltaX,y:r.y+n.deltaY}),n.type){case"mousedown":s._onPointerDown(n),this._lastMouseDownPoint={...o.point,clientX:o.originalEvent.clientX,clientY:o.originalEvent.clientY};break;case"dragstart":n.type="panstart",s._onEvent(n);break;case"drag":n.type="panmove",s._onEvent(n);break;case"dragend":n.type="panend",s._onEvent(n);break;case"click":n.tapCount=1,s._onEvent(n);break;case"dblclick":n.type="click",n.tapCount=2,s._onEvent(n);break;case"mousemove":n.type="pointermove",s._onPointerMove(n);break;case"mouseout":n.type="pointerleave",s._onPointerMove(n);break;default:return}};const{interleaved:i=!1}=e;this._interleaved=i,this._renderLayersInGroups=e._renderLayersInGroups||!1,this._props=this.filterProps(e)}filterProps(e){const{interleaved:i=!1,useDevicePixels:o,...s}=e;return!i&&o!==void 0&&(s.useDevicePixels=o),s}setProps(e){this._interleaved&&e.layers&&this._resolveLayers(this._map,this._deck,this._props.layers,e.layers),Object.assign(this._props,this.filterProps(e)),this._deck&&this._map&&this._deck.setProps({...this._props,parameters:{...I(this._map,this._interleaved),...this._props.parameters}})}onAdd(e){return this._map=e,this._interleaved?this._onAddInterleaved(e):this._onAddOverlaid(e)}_onAddOverlaid(e){const i=document.createElement("div");return Object.assign(i.style,{position:"absolute",left:0,top:0,textAlign:"initial",pointerEvents:"none"}),this._container=i,this._deck=new W({...this._props,parent:i,parameters:{...I(e,!1),...this._props.parameters},views:this._props.views||P(e),viewState:C(e)}),e.on("resize",this._updateContainerSize),e.on("render",this._updateViewState),e.on("mousedown",this._handleMouseEvent),e.on("dragstart",this._handleMouseEvent),e.on("drag",this._handleMouseEvent),e.on("dragend",this._handleMouseEvent),e.on("mousemove",this._handleMouseEvent),e.on("mouseout",this._handleMouseEvent),e.on("click",this._handleMouseEvent),e.on("dblclick",this._handleMouseEvent),this._updateContainerSize(),i}_onAddInterleaved(e){const i=e.painter.context.gl;return i instanceof WebGLRenderingContext&&be.warn("Incompatible basemap library. See: https://deck.gl/docs/api-reference/mapbox/overview#compatibility")(),this._deck=G({map:e,gl:i,deck:new W({...this._props,gl:i,parameters:{...I(e,!0),...this._props.parameters}})}),e.on("styledata",this._handleStyleChange),this._resolveLayers(e,this._deck,[],this._props.layers),document.createElement("div")}_resolveLayers(e,i,o,s){this._renderLayersInGroups?Ke(e,o,s):qe(e,i,o,s)}onRemove(){const e=this._map;e&&(this._interleaved?this._onRemoveInterleaved(e):this._onRemoveOverlaid(e)),this._deck=void 0,this._map=void 0,this._container=void 0}_onRemoveOverlaid(e){var i;e.off("resize",this._updateContainerSize),e.off("render",this._updateViewState),e.off("mousedown",this._handleMouseEvent),e.off("dragstart",this._handleMouseEvent),e.off("drag",this._handleMouseEvent),e.off("dragend",this._handleMouseEvent),e.off("mousemove",this._handleMouseEvent),e.off("mouseout",this._handleMouseEvent),e.off("click",this._handleMouseEvent),e.off("dblclick",this._handleMouseEvent),(i=this._deck)==null||i.finalize()}_onRemoveInterleaved(e){e.off("styledata",this._handleStyleChange),this._resolveLayers(e,this._deck,this._props.layers,[]),Y(e)}getDefaultPosition(){return"top-left"}pickObject(e){return M(this._deck),this._deck.pickObject(e)}pickMultipleObjects(e){return M(this._deck),this._deck.pickMultipleObjects(e)}pickObjects(e){return M(this._deck),this._deck.pickObjects(e)}finalize(){this._map&&this._map.removeControl(this)}getCanvas(){return this._map?this._interleaved?this._map.getCanvas():this._deck.getCanvas():null}}export{He as M,X as S};
