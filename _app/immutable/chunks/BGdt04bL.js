import{B as Oe,q as D,E as Fe,z as Re,F as Be,H as De,A as Ge,I as ke,c as Ct,J as Ne,K as Ue,r as Y,v as J,U as H,M as E,G as B,d as G,N as ft}from"./DuiYm5wb.js";import{g as We}from"./Cpj98o6Y.js";const Et=`precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

uniform lightingUniforms {
  int enabled;
  int lightType;

  int directionalLightCount;
  int pointLightCount;

  vec3 ambientColor;

  vec3 lightColor0;
  vec3 lightPosition0;
  vec3 lightDirection0;
  vec3 lightAttenuation0;

  vec3 lightColor1;
  vec3 lightPosition1;
  vec3 lightDirection1;
  vec3 lightAttenuation1;

  vec3 lightColor2;
  vec3 lightPosition2;
  vec3 lightDirection2;
  vec3 lightAttenuation2;
} lighting;

PointLight lighting_getPointLight(int index) {
  switch (index) {
    case 0:
      return PointLight(lighting.lightColor0, lighting.lightPosition0, lighting.lightAttenuation0);
    case 1:
      return PointLight(lighting.lightColor1, lighting.lightPosition1, lighting.lightAttenuation1);
    case 2:
    default:  
      return PointLight(lighting.lightColor2, lighting.lightPosition2, lighting.lightAttenuation2);
  }
}

DirectionalLight lighting_getDirectionalLight(int index) {
  switch (index) {
    case 0:
      return DirectionalLight(lighting.lightColor0, lighting.lightDirection0);
    case 1:
      return DirectionalLight(lighting.lightColor1, lighting.lightDirection1);
    case 2:
    default:   
      return DirectionalLight(lighting.lightColor2, lighting.lightDirection2);
  }
} 

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

// #endif
`,He=`// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct lightingUniforms {
  enabled: i32,
  pointLightCount: i32,
  directionalLightCount: i32,

  ambientColor: vec3<f32>,

  // TODO - support multiple lights by uncommenting arrays below
  lightType: i32,
  lightColor: vec3<f32>,
  lightDirection: vec3<f32>,
  lightPosition: vec3<f32>,
  lightAttenuation: vec3<f32>,

  // AmbientLight ambientLight;
  // PointLight pointLight[MAX_LIGHTS];
  // DirectionalLight directionalLight[MAX_LIGHTS];
};

// Binding 0:1 is reserved for lighting (Note: could go into separate bind group as it is stable across draw calls)
@binding(1) @group(0) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  return PointLight(lighting.lightColor, lighting.lightPosition, lighting.lightAttenuation);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  return DirectionalLight(lighting.lightColor, lighting.lightDirection);
} 

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}
`,Ve=5,je=255;var V;(function(i){i[i.POINT=0]="POINT",i[i.DIRECTIONAL=1]="DIRECTIONAL"})(V||(V={}));const U={props:{},uniforms:{},name:"lighting",defines:{},uniformTypes:{enabled:"i32",lightType:"i32",directionalLightCount:"i32",pointLightCount:"i32",ambientColor:"vec3<f32>",lightColor0:"vec3<f32>",lightPosition0:"vec3<f32>",lightDirection0:"vec3<f32>",lightAttenuation0:"vec3<f32>",lightColor1:"vec3<f32>",lightPosition1:"vec3<f32>",lightDirection1:"vec3<f32>",lightAttenuation1:"vec3<f32>",lightColor2:"vec3<f32>",lightPosition2:"vec3<f32>",lightDirection2:"vec3<f32>",lightAttenuation2:"vec3<f32>"},defaultUniforms:{enabled:1,lightType:V.POINT,directionalLightCount:0,pointLightCount:0,ambientColor:[.1,.1,.1],lightColor0:[1,1,1],lightPosition0:[1,1,2],lightDirection0:[1,1,1],lightAttenuation0:[1,0,0],lightColor1:[1,1,1],lightPosition1:[1,1,2],lightDirection1:[1,1,1],lightAttenuation1:[1,0,0],lightColor2:[1,1,1],lightPosition2:[1,1,2],lightDirection2:[1,1,1],lightAttenuation2:[1,0,0]},source:He,vs:Et,fs:Et,getUniforms:$e};function $e(i,t={}){if(i=i&&{...i},!i)return{...U.defaultUniforms};i.lights&&(i={...i,...Ke(i.lights),lights:void 0});const{ambientLight:e,pointLights:o,directionalLights:n}=i||{};if(!(e||o&&o.length>0||n&&n.length>0))return{...U.defaultUniforms,enabled:0};const r={...U.defaultUniforms,...t,...Ze({ambientLight:e,pointLights:o,directionalLights:n})};return i.enabled!==void 0&&(r.enabled=i.enabled?1:0),r}function Ze({ambientLight:i,pointLights:t=[],directionalLights:e=[]}){const o={};o.ambientColor=gt(i);let n=0;for(const s of t){o.lightType=V.POINT;const r=n;o[`lightColor${r}`]=gt(s),o[`lightPosition${r}`]=s.position,o[`lightAttenuation${r}`]=s.attenuation||[1,0,0],n++}for(const s of e){o.lightType=V.DIRECTIONAL;const r=n;o[`lightColor${r}`]=gt(s),o[`lightDirection${r}`]=s.direction,n++}return n>Ve&&Oe.warn("MAX_LIGHTS exceeded")(),o.directionalLightCount=e.length,o.pointLightCount=t.length,o}function Ke(i){var e,o;const t={pointLights:[],directionalLights:[]};for(const n of i||[])switch(n.type){case"ambient":t.ambientLight=n;break;case"directional":(e=t.directionalLights)==null||e.push(n);break;case"point":(o=t.pointLights)==null||o.push(n);break}return t}function gt(i={}){const{color:t=[0,0,0],intensity:e=1}=i;return t.map(o=>o*e/je)}const re=`uniform phongMaterialUniforms {
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,ae=`#define MAX_LIGHTS 3

uniform phongMaterialUniforms {
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * material.specularColor) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  int totalLights = min(MAX_LIGHTS, lighting.pointLightCount + lighting.directionalLightCount);
  for (int i = lighting.pointLightCount; i < totalLights; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`,le=`struct phongMaterialUniforms {
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@binding(2) @group(0) var<uniform> phongMaterial : phongMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, phongMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * phongMaterial.diffuse * surfaceColor + specular * phongMaterial.specularColor) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = phongMaterial.ambient * surfaceColor * lighting.ambientColor;

  if (lighting.lightType == 0) {
    let pointLight: PointLight  = lighting_getPointLight(0);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
  } else if (lighting.lightType == 1) {
    var directionalLight: DirectionalLight = lighting_getDirectionalLight(0);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
  /*
  for (int i = 0; i < MAX_LIGHTS; i++) {
    if (i >= lighting.pointLightCount) {
      break;
    }
    PointLight pointLight = lighting.pointLight[i];
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
  }

  for (int i = 0; i < MAX_LIGHTS; i++) {
    if (i >= lighting.directionalLightCount) {
      break;
    }
    DirectionalLight directionalLight = lighting.directionalLight[i];
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  */
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled == 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    switch (lighting.lightType) {
      case 0, default: {
        let pointLight: PointLight = lighting_getPointLight(0);
        let light_position_worldspace: vec3<f32> = pointLight.position;
        let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
        lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
      }
      case 1: {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(0);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
      }
    }
  }
  return lightColor;
}
`,Lt={props:{},name:"gouraudMaterial",vs:ae.replace("phongMaterial","gouraudMaterial"),fs:re.replace("phongMaterial","gouraudMaterial"),source:le.replaceAll("phongMaterial","gouraudMaterial"),defines:{LIGHTING_VERTEX:!0},dependencies:[U],uniformTypes:{ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{ambient:.35,diffuse:.6,shininess:32,specularColor:[.15,.15,.15]},getUniforms(i){const t={...i};return t.specularColor&&(t.specularColor=t.specularColor.map(e=>e/255)),{...Lt.defaultUniforms,...t}}},ce={name:"phongMaterial",dependencies:[U],source:le,vs:re,fs:ae,defines:{LIGHTING_FRAGMENT:!0},uniformTypes:{ambient:"f32",diffuse:"f32",shininess:"f32",specularColor:"vec3<f32>"},defaultUniforms:{ambient:.35,diffuse:.6,shininess:32,specularColor:[.15,.15,.15]},getUniforms(i){const t={...i};return t.specularColor&&(t.specularColor=t.specularColor.map(e=>e/255)),{...ce.defaultUniforms,...t}}},Xe="compositeLayer.renderLayers";class fe extends D{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(t=>t.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(t){}setState(t){super.setState(t),this.setNeedsUpdate()}getPickingInfo({info:t}){const{object:e}=t;return e&&e.__source&&e.__source.parent&&e.__source.parent.id===this.id&&(t.object=e.__source.object,t.index=e.__source.index),t}filterSubLayer(t){return!0}shouldRenderSubLayer(t,e){return e&&e.length}getSubLayerClass(t,e){const{_subLayerProps:o}=this.props;return o&&o[t]&&o[t].type||e}getSubLayerRow(t,e,o){return t.__source={parent:this,object:e,index:o},t}getSubLayerAccessor(t){if(typeof t=="function"){const e={index:-1,data:this.props.data,target:[]};return(o,n)=>o&&o.__source?(e.index=o.__source.index,t(o.__source.object,e)):t(o,n)}return t}getSubLayerProps(t={}){var b;const{opacity:e,pickable:o,visible:n,parameters:s,getPolygonOffset:r,highlightedObjectIndex:a,autoHighlight:l,highlightColor:c,coordinateSystem:f,coordinateOrigin:u,wrapLongitude:g,positionFormat:h,modelMatrix:d,extensions:p,fetch:v,operation:y,_subLayerProps:_}=this.props,m={id:"",updateTriggers:{},opacity:e,pickable:o,visible:n,parameters:s,getPolygonOffset:r,highlightedObjectIndex:a,autoHighlight:l,highlightColor:c,coordinateSystem:f,coordinateOrigin:u,wrapLongitude:g,positionFormat:h,modelMatrix:d,extensions:p,fetch:v,operation:y},x=_&&t.id&&_[t.id],P=x&&x.updateTriggers,L=t.id||"sublayer";if(x){const T=this.props[Fe],S=t.type?t.type._propTypes:{};for(const z in x){const k=S[z]||T[z];k&&k.type==="accessor"&&(x[z]=this.getSubLayerAccessor(x[z]))}}Object.assign(m,t,x),m.id=`${this.props.id}-${L}`,m.updateTriggers={all:(b=this.props.updateTriggers)==null?void 0:b.all,...t.updateTriggers,...P};for(const T of p){const S=T.getSubLayerProps.call(this,T);S&&Object.assign(m,S,{updateTriggers:Object.assign(m.updateTriggers,S.updateTriggers)})}return m}_updateAutoHighlight(t){for(const e of this.getSubLayers())e.updateAutoHighlight(t)}_getAttributeManager(){return null}_postUpdate(t,e){let o=this.internalState.subLayers;const n=!o||this.needsUpdate();if(n){const s=this.renderLayers();o=Re(s,Boolean),this.internalState.subLayers=o}Be(Xe,this,n,o);for(const s of o)s.parent=this}}fe.layerName="CompositeLayer";class ge{constructor(t){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;const{attributes:e={}}=t;this.typedArrayManager=De,this.attributes={},this._attributeDefs=e,this.opts=t,this.updateGeometry(t)}updateGeometry(t){Object.assign(this.opts,t);const{data:e,buffers:o={},getGeometry:n,geometryBuffer:s,positionFormat:r,dataChanged:a,normalize:l=!0}=this.opts;if(this.data=e,this.getGeometry=n,this.positionSize=s&&s.size||(r==="XY"?2:3),this.buffers=o,this.normalize=l,s&&(Ge(e.startIndices),this.getGeometry=this.getGeometryFromBuffer(s),l||(o.vertexPositions=s)),this.geometryBuffer=o.vertexPositions,Array.isArray(a))for(const c of a)this._rebuildGeometry(c);else this._rebuildGeometry()}updatePartialGeometry({startRow:t,endRow:e}){this._rebuildGeometry({startRow:t,endRow:e})}getGeometryFromBuffer(t){const e=t.value||t;return ArrayBuffer.isView(e)?ke(e,{size:this.positionSize,offset:t.offset,stride:t.stride,startIndices:this.data.startIndices}):null}_allocate(t,e){const{attributes:o,buffers:n,_attributeDefs:s,typedArrayManager:r}=this;for(const a in s)if(a in n)r.release(o[a]),o[a]=null;else{const l=s[a];l.copy=e,o[a]=r.allocate(o[a],t,l)}}_forEachGeometry(t,e,o){const{data:n,getGeometry:s}=this,{iterable:r,objectInfo:a}=Ct(n,e,o);for(const l of r){a.index++;const c=s?s(l,a):null;t(c,a.index)}}_rebuildGeometry(t){if(!this.data)return;let{indexStarts:e,vertexStarts:o,instanceCount:n}=this;const{data:s,geometryBuffer:r}=this,{startRow:a=0,endRow:l=1/0}=t||{},c={};if(t||(e=[0],o=[0]),this.normalize||!r)this._forEachGeometry((u,g)=>{const h=u&&this.normalizeGeometry(u);c[g]=h,o[g+1]=o[g]+(h?this.getGeometrySize(h):0)},a,l),n=o[o.length-1];else if(o=s.startIndices,n=o[s.length]||0,ArrayBuffer.isView(r))n=n||r.length/this.positionSize;else if(r instanceof Ne){const u=this.positionSize*4;n=n||r.byteLength/u}else if(r.buffer){const u=r.stride||this.positionSize*4;n=n||r.buffer.byteLength/u}else if(r.value){const u=r.value,g=r.stride/u.BYTES_PER_ELEMENT||this.positionSize;n=n||u.length/g}this._allocate(n,!!t),this.indexStarts=e,this.vertexStarts=o,this.instanceCount=n;const f={};this._forEachGeometry((u,g)=>{const h=c[g]||u;f.vertexStart=o[g],f.indexStart=e[g];const d=g<o.length-1?o[g+1]:n;f.geometrySize=d-o[g],f.geometryIndex=g,this.updateGeometryAttributes(h,f)},a,l),this.vertexCount=e[e.length-1]}}const zt=`uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,Ye={name:"icon",vs:zt,fs:zt,uniformTypes:{sizeScale:"f32",iconsTextureDim:"vec2<f32>",sizeBasis:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",billboard:"f32",sizeUnits:"i32",alphaCutoff:"f32"}},Je=`#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,qe=`#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,Qe=1024,ti=4,Ot=()=>{},Ft={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},ei={x:0,y:0,width:0,height:0};function ii(i){return Math.pow(2,Math.ceil(Math.log2(i)))}function oi(i,t,e,o){const n=Math.min(e/t.width,o/t.height),s=Math.floor(t.width*n),r=Math.floor(t.height*n);return n===1?{image:t,width:s,height:r}:(i.canvas.height=r,i.canvas.width=s,i.clearRect(0,0,s,r),i.drawImage(t,0,0,t.width,t.height,0,0,s,r),{image:i.canvas,width:s,height:r})}function j(i){return i&&(i.id||i.url)}function ni(i,t,e,o){const{width:n,height:s,device:r}=i,a=r.createTexture({format:"rgba8unorm",width:t,height:e,sampler:o,mipLevels:r.getMipLevelCount(t,e)}),l=r.createCommandEncoder();return l.copyTextureToTexture({sourceTexture:i,destinationTexture:a,width:n,height:s}),l.finish(),a.generateMipmapsWebGL(),i.destroy(),a}function Rt(i,t,e){for(let o=0;o<t.length;o++){const{icon:n,xOffset:s}=t[o],r=j(n);i[r]={...n,x:s,y:e}}}function si({icons:i,buffer:t,mapping:e={},xOffset:o=0,yOffset:n=0,rowHeight:s=0,canvasWidth:r}){let a=[];for(let l=0;l<i.length;l++){const c=i[l],f=j(c);if(!e[f]){const{height:u,width:g}=c;o+g+t>r&&(Rt(e,a,n),o=0,n=s+n+t,s=0,a=[]),a.push({icon:c,xOffset:o}),o=o+g+t,s=Math.max(s,u)}}return a.length>0&&Rt(e,a,n),{mapping:e,rowHeight:s,xOffset:o,yOffset:n,canvasWidth:r,canvasHeight:ii(s+n+t)}}function ri(i,t,e){if(!i||!t)return null;e=e||{};const o={},{iterable:n,objectInfo:s}=Ct(i);for(const r of n){s.index++;const a=t(r,s),l=j(a);if(!a)throw new Error("Icon is missing.");if(!a.url)throw new Error("Icon url is missing.");!o[l]&&(!e[l]||a.url!==e[l].url)&&(o[l]={...a,source:r,sourceIndex:s.index})}return o}class ai{constructor(t,{onUpdate:e=Ot,onError:o=Ot}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=ti,this._canvasWidth=Qe,this._canvasHeight=0,this._canvas=null,this.device=t,this.onUpdate=e,this.onError=o}finalize(){var t;(t=this._texture)==null||t.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(t){const e=this._autoPacking?j(t):t;return this._mapping[e]||ei}setProps({loadOptions:t,autoPacking:e,iconAtlas:o,iconMapping:n,textureParameters:s}){var r;t&&(this._loadOptions=t),e!==void 0&&(this._autoPacking=e),n&&(this._mapping=n),o&&((r=this._texture)==null||r.delete(),this._texture=null,this._externalTexture=o),s&&(this._samplerParameters=s)}get isLoaded(){return this._pendingCount===0}packIcons(t,e){if(!this._autoPacking||typeof document>"u")return;const o=Object.values(ri(t,e,this._mapping)||{});if(o.length>0){const{mapping:n,xOffset:s,yOffset:r,rowHeight:a,canvasHeight:l}=si({icons:o,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=a,this._mapping=n,this._xOffset=s,this._yOffset=r,this._canvasHeight=l,this._texture||(this._texture=this.device.createTexture({format:"rgba8unorm",data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||Ft,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)})),this._texture.height!==this._canvasHeight&&(this._texture=ni(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||Ft)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement("canvas"),this._loadIcons(o)}}_loadIcons(t){const e=this._canvas.getContext("2d",{willReadFrequently:!0});for(const o of t)this._pendingCount++,Ue(o.url,this._loadOptions).then(n=>{var v,y;const s=j(o),r=this._mapping[s],{x:a,y:l,width:c,height:f}=r,{image:u,width:g,height:h}=oi(e,n,c,f),d=a+(c-g)/2,p=l+(f-h)/2;(v=this._texture)==null||v.copyExternalImage({image:u,x:d,y:p,width:g,height:h}),r.x=d,r.y=p,r.width=g,r.height=h,(y=this._texture)==null||y.generateMipmapsWebGL(),this.onUpdate(g!==c||h!==f)}).catch(n=>{this.onError({url:o.url,source:o.source,sourceIndex:o.sourceIndex,loadOptions:this._loadOptions,error:n})}).finally(()=>{this._pendingCount--})}}const ue=[0,0,0,255],li={iconAtlas:{type:"image",value:null,async:!0},iconMapping:{type:"object",value:{},async:!0},sizeScale:{type:"number",value:1,min:0},billboard:!0,sizeUnits:"pixels",sizeBasis:"height",sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},alphaCutoff:{type:"number",value:.05,min:0,max:1},getPosition:{type:"accessor",value:i=>i.position},getIcon:{type:"accessor",value:i=>i.icon},getColor:{type:"accessor",value:ue},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},onIconError:{type:"function",value:null,optional:!0},textureParameters:{type:"object",ignore:!0,value:null}};class wt extends D{getShaders(){return super.getShaders({vs:Je,fs:qe,modules:[Y,J,Ye]})}initializeState(){this.state={iconManager:new ai(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,accessor:"getSize",defaultValue:1},instanceOffsets:{size:2,accessor:"getIcon",transform:this.getInstanceOffset},instanceIconFrames:{size:4,accessor:"getIcon",transform:this.getInstanceIconFrame},instanceColorModes:{size:1,type:"uint8",accessor:"getIcon",transform:this.getInstanceColorMode},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getColor",defaultValue:ue},instanceAngles:{size:1,transition:!0,accessor:"getAngle"},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset"}})}updateState(t){var h;super.updateState(t);const{props:e,oldProps:o,changeFlags:n}=t,s=this.getAttributeManager(),{iconAtlas:r,iconMapping:a,data:l,getIcon:c,textureParameters:f}=e,{iconManager:u}=this.state;if(typeof r=="string")return;const g=r||this.internalState.isAsyncPropLoading("iconAtlas");u.setProps({loadOptions:e.loadOptions,autoPacking:!g,iconAtlas:r,iconMapping:g?a:null,textureParameters:f}),g?o.iconMapping!==e.iconMapping&&s.invalidate("getIcon"):(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getIcon))&&u.packIcons(l,c),n.extensionsChanged&&((h=this.state.model)==null||h.destroy(),this.state.model=this._getModel(),s.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(t){super.finalizeState(t),this.state.iconManager.finalize()}draw({uniforms:t}){const{sizeScale:e,sizeBasis:o,sizeMinPixels:n,sizeMaxPixels:s,sizeUnits:r,billboard:a,alphaCutoff:l}=this.props,{iconManager:c}=this.state,f=c.getTexture();if(f){const u=this.state.model,g={iconsTexture:f,iconsTextureDim:[f.width,f.height],sizeUnits:H[r],sizeScale:e,sizeBasis:o==="height"?1:0,sizeMinPixels:n,sizeMaxPixels:s,billboard:a,alphaCutoff:l};u.shaderInputs.setProps({icon:g}),u.draw(this.context.renderPass)}}_getModel(){const t=[-1,-1,1,-1,-1,1,1,1];return new E(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new B({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array(t)}}}),isInstanced:!0})}_onUpdate(t){var e;t?((e=this.getAttributeManager())==null||e.invalidate("getIcon"),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(t){var o;const e=(o=this.getCurrentLayer())==null?void 0:o.props.onIconError;e?e(t):G.error(t.error.message)()}getInstanceOffset(t){const{width:e,height:o,anchorX:n=e/2,anchorY:s=o/2}=this.state.iconManager.getIconMapping(t);return[e/2-n,o/2-s]}getInstanceColorMode(t){return this.state.iconManager.getIconMapping(t).mask?1:0}getInstanceIconFrame(t){const{x:e,y:o,width:n,height:s}=this.state.iconManager.getIconMapping(t);return[e,o,n,s]}}wt.defaultProps=li;wt.layerName="IconLayer";const St={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function bt(i,t,e={}){return ci(i,e)!==t?(gi(i,e),!0):!1}function ci(i,t={}){return Math.sign(fi(i,t))}const Bt={x:0,y:1,z:2};function fi(i,t={}){const{start:e=0,end:o=i.length,plane:n="xy"}=t,s=t.size||2;let r=0;const a=Bt[n[0]],l=Bt[n[1]];for(let c=e,f=o-s;c<o;c+=s)r+=(i[c+a]-i[f+a])*(i[c+l]+i[f+l]),f=c;return r/2}function gi(i,t){const{start:e=0,end:o=i.length,size:n=2}=t,s=(o-e)/n,r=Math.floor(s/2);for(let a=0;a<r;++a){const l=e+a*n,c=e+(s-1-a)*n;for(let f=0;f<n;++f){const u=i[l+f];i[l+f]=i[c+f],i[c+f]=u}}}function I(i,t){const e=t.length,o=i.length;if(o>0){let n=!0;for(let s=0;s<e;s++)if(i[o-e+s]!==t[s]){n=!1;break}if(n)return!1}for(let n=0;n<e;n++)i[o+n]=t[n];return!0}function mt(i,t){const e=t.length;for(let o=0;o<e;o++)i[o]=t[o]}function $(i,t,e,o,n=[]){const s=o+t*e;for(let r=0;r<e;r++)n[r]=i[s+r];return n}function xt(i,t,e,o,n=[]){let s,r;if(e&8)s=(o[3]-i[1])/(t[1]-i[1]),r=3;else if(e&4)s=(o[1]-i[1])/(t[1]-i[1]),r=1;else if(e&2)s=(o[2]-i[0])/(t[0]-i[0]),r=2;else if(e&1)s=(o[0]-i[0])/(t[0]-i[0]),r=0;else return null;for(let a=0;a<i.length;a++)n[a]=(r&1)===a?o[r]:s*(t[a]-i[a])+i[a];return n}function ot(i,t){let e=0;return i[0]<t[0]?e|=1:i[0]>t[2]&&(e|=2),i[1]<t[1]?e|=4:i[1]>t[3]&&(e|=8),e}function he(i,t){const{size:e=2,broken:o=!1,gridResolution:n=10,gridOffset:s=[0,0],startIndex:r=0,endIndex:a=i.length}=t||{},l=(a-r)/e;let c=[];const f=[c],u=$(i,0,e,r);let g,h;const d=pe(u,n,s,[]),p=[];I(c,u);for(let v=1;v<l;v++){for(g=$(i,v,e,r,g),h=ot(g,d);h;){xt(u,g,h,d,p);const y=ot(p,d);y&&(xt(u,p,y,d,p),h=y),I(c,p),mt(u,p),hi(d,n,h),o&&c.length>e&&(c=[],f.push(c),I(c,u)),h=ot(g,d)}I(c,g),mt(u,g)}return o?f:f[0]}const Dt=0,ui=1;function de(i,t=null,e){if(!i.length)return[];const{size:o=2,gridResolution:n=10,gridOffset:s=[0,0],edgeTypes:r=!1}=e||{},a=[],l=[{pos:i,types:r?new Array(i.length/o).fill(ui):null,holes:t||[]}],c=[[],[]];let f=[];for(;l.length;){const{pos:u,types:g,holes:h}=l.shift();di(u,o,h[0]||u.length,c),f=pe(c[0],n,s,f);const d=ot(c[1],f);if(d){let p=Gt(u,g,o,0,h[0]||u.length,f,d);const v={pos:p[0].pos,types:p[0].types,holes:[]},y={pos:p[1].pos,types:p[1].types,holes:[]};l.push(v,y);for(let _=0;_<h.length;_++)p=Gt(u,g,o,h[_],h[_+1]||u.length,f,d),p[0]&&(v.holes.push(v.pos.length),v.pos=q(v.pos,p[0].pos),r&&(v.types=q(v.types,p[0].types))),p[1]&&(y.holes.push(y.pos.length),y.pos=q(y.pos,p[1].pos),r&&(y.types=q(y.types,p[1].types)))}else{const p={positions:u};r&&(p.edgeTypes=g),h.length&&(p.holeIndices=h),a.push(p)}}return a}function Gt(i,t,e,o,n,s,r){const a=(n-o)/e,l=[],c=[],f=[],u=[],g=[];let h,d,p;const v=$(i,a-1,e,o);let y=Math.sign(r&8?v[1]-s[3]:v[0]-s[2]),_=t&&t[a-1],m=0,x=0;for(let P=0;P<a;P++)h=$(i,P,e,o,h),d=Math.sign(r&8?h[1]-s[3]:h[0]-s[2]),p=t&&t[o/e+P],d&&y&&y!==d&&(xt(v,h,r,s,g),I(l,g)&&f.push(_),I(c,g)&&u.push(_)),d<=0?(I(l,h)&&f.push(p),m-=d):f.length&&(f[f.length-1]=Dt),d>=0?(I(c,h)&&u.push(p),x+=d):u.length&&(u[u.length-1]=Dt),mt(v,h),y=d,_=p;return[m?{pos:l,types:t&&f}:null,x?{pos:c,types:t&&u}:null]}function pe(i,t,e,o){const n=Math.floor((i[0]-e[0])/t)*t+e[0],s=Math.floor((i[1]-e[1])/t)*t+e[1];return o[0]=n,o[1]=s,o[2]=n+t,o[3]=s+t,o}function hi(i,t,e){e&8?(i[1]+=t,i[3]+=t):e&4?(i[1]-=t,i[3]-=t):e&2?(i[0]+=t,i[2]+=t):e&1&&(i[0]-=t,i[2]-=t)}function di(i,t,e,o){let n=1/0,s=-1/0,r=1/0,a=-1/0;for(let l=0;l<e;l+=t){const c=i[l],f=i[l+1];n=c<n?c:n,s=c>s?c:s,r=f<r?f:r,a=f>a?f:a}return o[0][0]=n,o[0][1]=r,o[1][0]=s,o[1][1]=a,o}function q(i,t){for(let e=0;e<t.length;e++)i.push(t[e]);return i}const pi=85.051129;function vi(i,t){const{size:e=2,startIndex:o=0,endIndex:n=i.length,normalize:s=!0}=t||{},r=i.slice(o,n);ve(r,e,0,n-o);const a=he(r,{size:e,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(s)for(const l of a)me(l,e);return a}function mi(i,t=null,e){const{size:o=2,normalize:n=!0,edgeTypes:s=!1}=e||{};t=t||[];const r=[],a=[];let l=0,c=0;for(let u=0;u<=t.length;u++){const g=t[u]||i.length,h=c,d=xi(i,o,l,g);for(let p=d;p<g;p++)r[c++]=i[p];for(let p=l;p<d;p++)r[c++]=i[p];ve(r,o,h,c),yi(r,o,h,c,e==null?void 0:e.maxLatitude),l=g,a[u]=c}a.pop();const f=de(r,a,{size:o,gridResolution:360,gridOffset:[-180,-180],edgeTypes:s});if(n)for(const u of f)me(u.positions,o);return f}function xi(i,t,e,o){let n=-1,s=-1;for(let r=e+1;r<o;r+=t){const a=Math.abs(i[r]);a>n&&(n=a,s=r-1)}return s}function yi(i,t,e,o,n=pi){const s=i[e],r=i[o-t];if(Math.abs(s-r)>180){const a=$(i,0,t,e);a[0]+=Math.round((r-s)/360)*360,I(i,a),a[1]=Math.sign(a[1])*n,I(i,a),a[0]=s,I(i,a)}}function ve(i,t,e,o){let n=i[0],s;for(let r=e;r<o;r+=t){s=i[r];const a=s-n;(a>180||a<-180)&&(s-=Math.round(a/360)*360),i[r]=n=s}}function me(i,t){let e;const o=i.length/t;for(let s=0;s<o&&(e=i[s*t],(e+180)%360===0);s++);const n=-Math.round(e/360)*360;if(n!==0)for(let s=0;s<o;s++)i[s*t]+=n}class _i extends B{constructor(t){const{indices:e,attributes:o}=Pi(t);super({...t,indices:e,attributes:o})}}function Pi(i){const{radius:t,height:e=1,nradial:o=10}=i;let{vertices:n}=i;n&&(G.assert(n.length>=o),n=n.flatMap(h=>[h[0],h[1]]),bt(n,St.COUNTER_CLOCKWISE));const s=e>0,r=o+1,a=s?r*3+1:o,l=Math.PI*2/o,c=new Uint16Array(s?o*3*2:0),f=new Float32Array(a*3),u=new Float32Array(a*3);let g=0;if(s){for(let h=0;h<r;h++){const d=h*l,p=h%o,v=Math.sin(d),y=Math.cos(d);for(let _=0;_<2;_++)f[g+0]=n?n[p*2]:y*t,f[g+1]=n?n[p*2+1]:v*t,f[g+2]=(1/2-_)*e,u[g+0]=n?n[p*2]:y,u[g+1]=n?n[p*2+1]:v,g+=3}f[g+0]=f[g-3],f[g+1]=f[g-2],f[g+2]=f[g-1],g+=3}for(let h=s?0:1;h<r;h++){const d=Math.floor(h/2)*Math.sign(.5-h%2),p=d*l,v=(d+o)%o,y=Math.sin(p),_=Math.cos(p);f[g+0]=n?n[v*2]:_*t,f[g+1]=n?n[v*2+1]:y*t,f[g+2]=e/2,u[g+2]=1,g+=3}if(s){let h=0;for(let d=0;d<o;d++)c[h++]=d*2+0,c[h++]=d*2+2,c[h++]=d*2+0,c[h++]=d*2+1,c[h++]=d*2+1,c[h++]=d*2+3}return{indices:c,attributes:{POSITION:{size:3,value:f},NORMAL:{size:3,value:u}}}}const kt=`uniform columnUniforms {
  float radius;
  float angle;
  vec2 offset;
  bool extruded;
  bool stroked;
  bool isStroke;
  float coverage;
  float elevationScale;
  float edgeDistance;
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  highp int radiusUnits;
  highp int widthUnits;
} column;
`,Ci={name:"column",vs:kt,fs:kt,uniformTypes:{radius:"f32",angle:"f32",offset:"vec2<f32>",extruded:"f32",stroked:"f32",isStroke:"f32",coverage:"f32",elevationScale:"f32",edgeDistance:"f32",widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",radiusUnits:"i32",widthUnits:"i32"}},Li=`#version 300 es
#define SHADER_NAME column-layer-vertex-shader
in vec3 positions;
in vec3 normals;
in vec3 instancePositions;
in float instanceElevations;
in vec3 instancePositions64Low;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in float instanceStrokeWidths;
in vec3 instancePickingColors;
out vec4 vColor;
#ifdef FLAT_SHADING
out vec3 cameraPosition;
out vec4 position_commonspace;
#endif
void main(void) {
geometry.worldPosition = instancePositions;
vec4 color = column.isStroke ? instanceLineColors : instanceFillColors;
mat2 rotationMatrix = mat2(cos(column.angle), sin(column.angle), -sin(column.angle), cos(column.angle));
float elevation = 0.0;
float strokeOffsetRatio = 1.0;
if (column.extruded) {
elevation = instanceElevations * (positions.z + 1.0) / 2.0 * column.elevationScale;
} else if (column.stroked) {
float widthPixels = clamp(
project_size_to_pixel(instanceStrokeWidths * column.widthScale, column.widthUnits),
column.widthMinPixels, column.widthMaxPixels) / 2.0;
float halfOffset = project_pixel_size(widthPixels) / project_size(column.edgeDistance * column.coverage * column.radius);
if (column.isStroke) {
strokeOffsetRatio -= sign(positions.z) * halfOffset;
} else {
strokeOffsetRatio -= halfOffset;
}
}
float shouldRender = float(color.a > 0.0 && instanceElevations >= 0.0);
float dotRadius = column.radius * column.coverage * shouldRender;
geometry.pickingColor = instancePickingColors;
vec3 centroidPosition = vec3(instancePositions.xy, instancePositions.z + elevation);
vec3 centroidPosition64Low = instancePositions64Low;
vec2 offset = (rotationMatrix * positions.xy * strokeOffsetRatio + column.offset) * dotRadius;
if (column.radiusUnits == UNIT_METERS) {
offset = project_size(offset);
} else if (column.radiusUnits == UNIT_PIXELS) {
offset = project_pixel_size(offset);
}
vec3 pos = vec3(offset, 0.);
DECKGL_FILTER_SIZE(pos, geometry);
gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64Low, pos, geometry.position);
geometry.normal = project_normal(vec3(rotationMatrix * normals.xy, normals.z));
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (column.extruded && !column.isStroke) {
#ifdef FLAT_SHADING
cameraPosition = project.cameraPosition;
position_commonspace = geometry.position;
vColor = vec4(color.rgb, color.a * layer.opacity);
#else
vec3 lightColor = lighting_getLightColor(color.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, color.a * layer.opacity);
#endif
} else {
vColor = vec4(color.rgb, color.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,wi=`#version 300 es
#define SHADER_NAME column-layer-fragment-shader
precision highp float;
out vec4 fragColor;
in vec4 vColor;
#ifdef FLAT_SHADING
in vec3 cameraPosition;
in vec4 position_commonspace;
#endif
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
#ifdef FLAT_SHADING
if (column.extruded && !column.isStroke && !bool(picking.isActive)) {
vec3 normal = normalize(cross(dFdx(position_commonspace.xyz), dFdy(position_commonspace.xyz)));
fragColor.rgb = lighting_getLightColor(vColor.rgb, cameraPosition, position_commonspace.xyz, normal);
}
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,st=[0,0,0,255],Si={diskResolution:{type:"number",min:4,value:20},vertices:null,radius:{type:"number",min:0,value:1e3},angle:{type:"number",value:0},offset:{type:"array",value:[0,0]},coverage:{type:"number",min:0,max:1,value:1},elevationScale:{type:"number",min:0,value:1},radiusUnits:"meters",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,extruded:!0,wireframe:!1,filled:!0,stroked:!1,flatShading:!1,getPosition:{type:"accessor",value:i=>i.position},getFillColor:{type:"accessor",value:st},getLineColor:{type:"accessor",value:st},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0,getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class xe extends D{getShaders(){const t={},{flatShading:e}=this.props;return e&&(t.FLAT_SHADING=1),super.getShaders({vs:Li,fs:wi,defines:t,modules:[Y,e?ce:Lt,J,Ci]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceElevations:{size:1,transition:!0,accessor:"getElevation"},instanceFillColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getFillColor",defaultValue:st},instanceLineColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getLineColor",defaultValue:st},instanceStrokeWidths:{size:1,accessor:"getLineWidth",transition:!0}})}updateState(t){var a;super.updateState(t);const{props:e,oldProps:o,changeFlags:n}=t,s=n.extensionsChanged||e.flatShading!==o.flatShading;s&&((a=this.state.models)==null||a.forEach(l=>l.destroy()),this.setState(this._getModels()),this.getAttributeManager().invalidateAll());const r=this.getNumInstances();this.state.fillModel.setInstanceCount(r),this.state.wireframeModel.setInstanceCount(r),(s||e.diskResolution!==o.diskResolution||e.vertices!==o.vertices||(e.extruded||e.stroked)!==(o.extruded||o.stroked))&&this._updateGeometry(e)}getGeometry(t,e,o){const n=new _i({radius:1,height:o?2:0,vertices:e,nradial:t});let s=0;if(e)for(let r=0;r<t;r++){const a=e[r],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]);s+=l/t}else s=1;return this.setState({edgeDistance:Math.cos(Math.PI/t)*s}),n}_getModels(){const t=this.getShaders(),e=this.getAttributeManager().getBufferLayouts(),o=new E(this.context.device,{...t,id:`${this.props.id}-fill`,bufferLayout:e,isInstanced:!0}),n=new E(this.context.device,{...t,id:`${this.props.id}-wireframe`,bufferLayout:e,isInstanced:!0});return{fillModel:o,wireframeModel:n,models:[n,o]}}_updateGeometry({diskResolution:t,vertices:e,extruded:o,stroked:n}){const s=this.getGeometry(t,e,o||n);this.setState({fillVertexCount:s.attributes.POSITION.value.length/3});const r=this.state.fillModel,a=this.state.wireframeModel;r.setGeometry(s),r.setTopology("triangle-strip"),r.setIndexBuffer(null),a.setGeometry(s),a.setTopology("line-list")}draw({uniforms:t}){const{lineWidthUnits:e,lineWidthScale:o,lineWidthMinPixels:n,lineWidthMaxPixels:s,radiusUnits:r,elevationScale:a,extruded:l,filled:c,stroked:f,wireframe:u,offset:g,coverage:h,radius:d,angle:p}=this.props,v=this.state.fillModel,y=this.state.wireframeModel,{fillVertexCount:_,edgeDistance:m}=this.state,x={radius:d,angle:p/180*Math.PI,offset:g,extruded:l,stroked:f,coverage:h,elevationScale:a,edgeDistance:m,radiusUnits:H[r],widthUnits:H[e],widthScale:o,widthMinPixels:n,widthMaxPixels:s};l&&u&&(y.shaderInputs.setProps({column:{...x,isStroke:!0}}),y.draw(this.context.renderPass)),c&&(v.setVertexCount(_),v.shaderInputs.setProps({column:{...x,isStroke:!1}}),v.draw(this.context.renderPass)),!l&&f&&(v.setVertexCount(_*2/3),v.shaderInputs.setProps({column:{...x,isStroke:!0}}),v.draw(this.context.renderPass))}}xe.layerName="ColumnLayer";xe.defaultProps=Si;function bi(i,t,e,o){let n;if(Array.isArray(i[0])){const s=i.length*t;n=new Array(s);for(let r=0;r<i.length;r++)for(let a=0;a<t;a++)n[r*t+a]=i[r][a]||0}else n=i;return e?he(n,{size:t,gridResolution:e}):o?vi(n,{size:t}):n}const Ai=1,Ti=2,ut=4;class Ii extends ge{constructor(t){super({...t,attributes:{positions:{size:3,padding:18,initialize:!0,type:t.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}})}get(t){return this.attributes[t]}getGeometryFromBuffer(t){return this.normalize?super.getGeometryFromBuffer(t):null}normalizeGeometry(t){return this.normalize?bi(t,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):t}getGeometrySize(t){if(Nt(t)){let o=0;for(const n of t)o+=this.getGeometrySize(n);return o}const e=this.getPathLength(t);return e<2?0:this.isClosed(t)?e<3?0:e+2:e}updateGeometryAttributes(t,e){if(e.geometrySize!==0)if(t&&Nt(t))for(const o of t){const n=this.getGeometrySize(o);e.geometrySize=n,this.updateGeometryAttributes(o,e),e.vertexStart+=n}else this._updateSegmentTypes(t,e),this._updatePositions(t,e)}_updateSegmentTypes(t,e){const o=this.attributes.segmentTypes,n=t?this.isClosed(t):!1,{vertexStart:s,geometrySize:r}=e;o.fill(0,s,s+r),n?(o[s]=ut,o[s+r-2]=ut):(o[s]+=Ai,o[s+r-2]+=Ti),o[s+r-1]=ut}_updatePositions(t,e){const{positions:o}=this.attributes;if(!o||!t)return;const{vertexStart:n,geometrySize:s}=e,r=new Array(3);for(let a=n,l=0;l<s;a++,l++)this.getPointOnPath(t,l,r),o[a*3]=r[0],o[a*3+1]=r[1],o[a*3+2]=r[2]}getPathLength(t){return t.length/this.positionSize}getPointOnPath(t,e,o=[]){const{positionSize:n}=this;e*n>=t.length&&(e+=1-t.length/n);const s=e*n;return o[0]=t[s],o[1]=t[s+1],o[2]=n===3&&t[s+2]||0,o}isClosed(t){if(!this.normalize)return!!this.opts.loop;const{positionSize:e}=this,o=t.length-e;return t[0]===t[o]&&t[1]===t[o+1]&&(e===2||t[2]===t[o+2])}}function Nt(i){return Array.isArray(i[0])}const Ut=`uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,Mi={name:"path",vs:Ut,fs:Ut,uniformTypes:{widthScale:"f32",widthMinPixels:"f32",widthMaxPixels:"f32",jointType:"f32",capType:"f32",miterLimit:"f32",billboard:"f32",widthUnits:"i32"}},Ei=`#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in vec3 instancePickingColors;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
vPathLength = L;
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
dot(offsetFromStartOfPath, dir)
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
void main() {
geometry.pickingColor = instancePickingColors;
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
);
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(prevPosition, currPosition, nextPosition, width.xy);
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,zi=`#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,ye=[0,0,0,255],Oi={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},billboard:!1,_pathType:null,getPath:{type:"accessor",value:i=>i.path},getColor:{type:"accessor",value:ye},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},ht={enter:(i,t)=>t.length?t.subarray(t.length-i.length):i};class _e extends D{getShaders(){return super.getShaders({vs:Ei,fs:zi,modules:[Y,J,Mi]})}get wrapLongitude(){return!1}getBounds(){var t;return(t=this.getAttributeManager())==null?void 0:t.getBounds(["vertexPositions"])}initializeState(){this.getAttributeManager().addInstanced({vertexPositions:{size:3,vertexOffset:1,type:"float64",fp64:this.use64bitPositions(),transition:ht,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:"uint8",update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:ht,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",accessor:"getColor",transition:ht,defaultValue:ye},instancePickingColors:{size:4,type:"uint8",accessor:(o,{index:n,target:s})=>this.encodePickingColor(o&&o.__source?o.__source.index:n,s)}}),this.setState({pathTesselator:new Ii({fp64:this.use64bitPositions()})})}updateState(t){var r;super.updateState(t);const{props:e,changeFlags:o}=t,n=this.getAttributeManager();if(o.dataChanged||o.updateTriggersChanged&&(o.updateTriggersChanged.all||o.updateTriggersChanged.getPath)){const{pathTesselator:a}=this.state,l=e.data.attributes||{};a.updateGeometry({data:e.data,geometryBuffer:l.getPath,buffers:l,normalize:!e._pathType,loop:e._pathType==="loop",getGeometry:e.getPath,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:o.dataChanged}),this.setState({numInstances:a.instanceCount,startIndices:a.vertexStarts}),o.dataChanged||n.invalidateAll()}o.extensionsChanged&&((r=this.state.model)==null||r.destroy(),this.state.model=this._getModel(),n.invalidateAll())}getPickingInfo(t){const e=super.getPickingInfo(t),{index:o}=e,n=this.props.data;return n[0]&&n[0].__source&&(e.object=n.find(s=>s.__source.index===o)),e}disablePickingIndex(t){const e=this.props.data;if(e[0]&&e[0].__source)for(let o=0;o<e.length;o++)e[o].__source.index===t&&this._disablePickingIndex(o);else super.disablePickingIndex(t)}draw({uniforms:t}){const{jointRounded:e,capRounded:o,billboard:n,miterLimit:s,widthUnits:r,widthScale:a,widthMinPixels:l,widthMaxPixels:c}=this.props,f=this.state.model,u={jointType:Number(e),capType:Number(o),billboard:n,widthUnits:H[r],widthScale:a,miterLimit:s,widthMinPixels:l,widthMaxPixels:c};f.shaderInputs.setProps({path:u}),f.draw(this.context.renderPass)}_getModel(){const t=[0,1,2,1,4,2,1,3,4,3,5,4],e=[0,0,0,-1,0,1,1,-1,1,1,1,0];return new E(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new B({topology:"triangle-list",attributes:{indices:new Uint16Array(t),positions:{value:new Float32Array(e),size:2}}}),isInstanced:!0})}calculatePositions(t){const{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("positions")}calculateSegmentTypes(t){const{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("segmentTypes")}}_e.defaultProps=Oi;_e.layerName="PathLayer";var At={exports:{}};At.exports=lt;At.exports.default=lt;function lt(i,t,e){e=e||2;var o=t&&t.length,n=o?t[0]*e:i.length,s=Pe(i,0,n,e,!0),r=[];if(!s||s.next===s.prev)return r;var a,l,c,f,u,g,h;if(o&&(s=Gi(i,t,s,e)),i.length>80*e){a=c=i[0],l=f=i[1];for(var d=e;d<n;d+=e)u=i[d],g=i[d+1],u<a&&(a=u),g<l&&(l=g),u>c&&(c=u),g>f&&(f=g);h=Math.max(c-a,f-l),h=h!==0?32767/h:0}return Z(s,r,e,a,l,h,0),r}function Pe(i,t,e,o,n){var s,r;if(n===Pt(i,t,e,o)>0)for(s=t;s<e;s+=o)r=Wt(s,i[s],i[s+1],r);else for(s=e-o;s>=t;s-=o)r=Wt(s,i[s],i[s+1],r);return r&&ct(r,r.next)&&(X(r),r=r.next),r}function O(i,t){if(!i)return i;t||(t=i);var e=i,o;do if(o=!1,!e.steiner&&(ct(e,e.next)||C(e.prev,e,e.next)===0)){if(X(e),e=t=e.prev,e===e.next)break;o=!0}else e=e.next;while(o||e!==t);return t}function Z(i,t,e,o,n,s,r){if(i){!r&&s&&Hi(i,o,n,s);for(var a=i,l,c;i.prev!==i.next;){if(l=i.prev,c=i.next,s?Ri(i,o,n,s):Fi(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),X(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Bi(O(i),t,e),Z(i,t,e,o,n,s,2)):r===2&&Di(i,t,e,o,n,s):Z(O(i),t,e,o,n,s,1);break}}}}function Fi(i){var t=i.prev,e=i,o=i.next;if(C(t,e,o)>=0)return!1;for(var n=t.x,s=e.x,r=o.x,a=t.y,l=e.y,c=o.y,f=n<s?n<r?n:r:s<r?s:r,u=a<l?a<c?a:c:l<c?l:c,g=n>s?n>r?n:r:s>r?s:r,h=a>l?a>c?a:c:l>c?l:c,d=o.next;d!==t;){if(d.x>=f&&d.x<=g&&d.y>=u&&d.y<=h&&F(n,a,s,l,r,c,d.x,d.y)&&C(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function Ri(i,t,e,o){var n=i.prev,s=i,r=i.next;if(C(n,s,r)>=0)return!1;for(var a=n.x,l=s.x,c=r.x,f=n.y,u=s.y,g=r.y,h=a<l?a<c?a:c:l<c?l:c,d=f<u?f<g?f:g:u<g?u:g,p=a>l?a>c?a:c:l>c?l:c,v=f>u?f>g?f:g:u>g?u:g,y=yt(h,d,t,e,o),_=yt(p,v,t,e,o),m=i.prevZ,x=i.nextZ;m&&m.z>=y&&x&&x.z<=_;){if(m.x>=h&&m.x<=p&&m.y>=d&&m.y<=v&&m!==n&&m!==r&&F(a,f,l,u,c,g,m.x,m.y)&&C(m.prev,m,m.next)>=0||(m=m.prevZ,x.x>=h&&x.x<=p&&x.y>=d&&x.y<=v&&x!==n&&x!==r&&F(a,f,l,u,c,g,x.x,x.y)&&C(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;m&&m.z>=y;){if(m.x>=h&&m.x<=p&&m.y>=d&&m.y<=v&&m!==n&&m!==r&&F(a,f,l,u,c,g,m.x,m.y)&&C(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;x&&x.z<=_;){if(x.x>=h&&x.x<=p&&x.y>=d&&x.y<=v&&x!==n&&x!==r&&F(a,f,l,u,c,g,x.x,x.y)&&C(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Bi(i,t,e){var o=i;do{var n=o.prev,s=o.next.next;!ct(n,s)&&Ce(n,o,o.next,s)&&K(n,s)&&K(s,n)&&(t.push(n.i/e|0),t.push(o.i/e|0),t.push(s.i/e|0),X(o),X(o.next),o=i=s),o=o.next}while(o!==i);return O(o)}function Di(i,t,e,o,n,s){var r=i;do{for(var a=r.next.next;a!==r.prev;){if(r.i!==a.i&&$i(r,a)){var l=Le(r,a);r=O(r,r.next),l=O(l,l.next),Z(r,t,e,o,n,s,0),Z(l,t,e,o,n,s,0);return}a=a.next}r=r.next}while(r!==i)}function Gi(i,t,e,o){var n=[],s,r,a,l,c;for(s=0,r=t.length;s<r;s++)a=t[s]*o,l=s<r-1?t[s+1]*o:i.length,c=Pe(i,a,l,o,!1),c===c.next&&(c.steiner=!0),n.push(ji(c));for(n.sort(ki),s=0;s<n.length;s++)e=Ni(n[s],e);return e}function ki(i,t){return i.x-t.x}function Ni(i,t){var e=Ui(i,t);if(!e)return t;var o=Le(e,i);return O(o,o.next),O(e,e.next)}function Ui(i,t){var e=t,o=i.x,n=i.y,s=-1/0,r;do{if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){var a=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=o&&a>s&&(s=a,r=e.x<e.next.x?e:e.next,a===o))return r}e=e.next}while(e!==t);if(!r)return null;var l=r,c=r.x,f=r.y,u=1/0,g;e=r;do o>=e.x&&e.x>=c&&o!==e.x&&F(n<f?o:s,n,c,f,n<f?s:o,n,e.x,e.y)&&(g=Math.abs(n-e.y)/(o-e.x),K(e,i)&&(g<u||g===u&&(e.x>r.x||e.x===r.x&&Wi(r,e)))&&(r=e,u=g)),e=e.next;while(e!==l);return r}function Wi(i,t){return C(i.prev,i,t.prev)<0&&C(t.next,i,i.next)<0}function Hi(i,t,e,o){var n=i;do n.z===0&&(n.z=yt(n.x,n.y,t,e,o)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==i);n.prevZ.nextZ=null,n.prevZ=null,Vi(n)}function Vi(i){var t,e,o,n,s,r,a,l,c=1;do{for(e=i,i=null,s=null,r=0;e;){for(r++,o=e,a=0,t=0;t<c&&(a++,o=o.nextZ,!!o);t++);for(l=c;a>0||l>0&&o;)a!==0&&(l===0||!o||e.z<=o.z)?(n=e,e=e.nextZ,a--):(n=o,o=o.nextZ,l--),s?s.nextZ=n:i=n,n.prevZ=s,s=n;e=o}s.nextZ=null,c*=2}while(r>1);return i}function yt(i,t,e,o,n){return i=(i-e)*n|0,t=(t-o)*n|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ji(i){var t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function F(i,t,e,o,n,s,r,a){return(n-r)*(t-a)>=(i-r)*(s-a)&&(i-r)*(o-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(n-r)*(o-a)}function $i(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zi(i,t)&&(K(i,t)&&K(t,i)&&Ki(i,t)&&(C(i.prev,i,t.prev)||C(i,t.prev,t))||ct(i,t)&&C(i.prev,i,i.next)>0&&C(t.prev,t,t.next)>0)}function C(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ct(i,t){return i.x===t.x&&i.y===t.y}function Ce(i,t,e,o){var n=tt(C(i,t,e)),s=tt(C(i,t,o)),r=tt(C(e,o,i)),a=tt(C(e,o,t));return!!(n!==s&&r!==a||n===0&&Q(i,e,t)||s===0&&Q(i,o,t)||r===0&&Q(e,i,o)||a===0&&Q(e,t,o))}function Q(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function tt(i){return i>0?1:i<0?-1:0}function Zi(i,t){var e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ce(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function K(i,t){return C(i.prev,i,i.next)<0?C(i,t,i.next)>=0&&C(i,i.prev,t)>=0:C(i,t,i.prev)<0||C(i,i.next,t)<0}function Ki(i,t){var e=i,o=!1,n=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(o=!o),e=e.next;while(e!==i);return o}function Le(i,t){var e=new _t(i.i,i.x,i.y),o=new _t(t.i,t.x,t.y),n=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=n,n.prev=e,o.next=e,e.prev=o,s.next=o,o.prev=s,o}function Wt(i,t,e,o){var n=new _t(i,t,e);return o?(n.next=o.next,n.prev=o,o.next.prev=n,o.next=n):(n.prev=n,n.next=n),n}function X(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _t(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}lt.deviation=function(i,t,e,o){var n=t&&t.length,s=n?t[0]*e:i.length,r=Math.abs(Pt(i,0,s,e));if(n)for(var a=0,l=t.length;a<l;a++){var c=t[a]*e,f=a<l-1?t[a+1]*e:i.length;r-=Math.abs(Pt(i,c,f,e))}var u=0;for(a=0;a<o.length;a+=3){var g=o[a]*e,h=o[a+1]*e,d=o[a+2]*e;u+=Math.abs((i[g]-i[d])*(i[h+1]-i[g+1])-(i[g]-i[h])*(i[d+1]-i[g+1]))}return r===0&&u===0?0:Math.abs((u-r)/r)};function Pt(i,t,e,o){for(var n=0,s=t,r=e-o;s<e;s+=o)n+=(i[r]-i[s])*(i[s+1]+i[r+1]),r=s;return n}lt.flatten=function(i){for(var t=i[0][0].length,e={vertices:[],holes:[],dimensions:t},o=0,n=0;n<i.length;n++){for(var s=0;s<i[n].length;s++)for(var r=0;r<t;r++)e.vertices.push(i[n][s][r]);n>0&&(o+=i[n-1].length,e.holes.push(o))}return e};var Xi=At.exports;const Yi=We(Xi),et=St.CLOCKWISE,Ht=St.COUNTER_CLOCKWISE,M={};function Ji(i){if(i=i&&i.positions||i,!Array.isArray(i)&&!ArrayBuffer.isView(i))throw new Error("invalid polygon")}function N(i){return"positions"in i?i.positions:i}function nt(i){return"holeIndices"in i?i.holeIndices:null}function qi(i){return Array.isArray(i[0])}function Qi(i){return i.length>=1&&i[0].length>=2&&Number.isFinite(i[0][0])}function to(i){const t=i[0],e=i[i.length-1];return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function eo(i,t,e,o){for(let n=0;n<t;n++)if(i[e+n]!==i[o-t+n])return!1;return!0}function Vt(i,t,e,o,n){let s=t;const r=e.length;for(let a=0;a<r;a++)for(let l=0;l<o;l++)i[s++]=e[a][l]||0;if(!to(e))for(let a=0;a<o;a++)i[s++]=e[0][a]||0;return M.start=t,M.end=s,M.size=o,bt(i,n,M),s}function jt(i,t,e,o,n=0,s,r){s=s||e.length;const a=s-n;if(a<=0)return t;let l=t;for(let c=0;c<a;c++)i[l++]=e[n+c];if(!eo(e,o,n,s))for(let c=0;c<o;c++)i[l++]=e[n+c];return M.start=t,M.end=l,M.size=o,bt(i,r,M),l}function io(i,t){Ji(i);const e=[],o=[];if("positions"in i){const{positions:n,holeIndices:s}=i;if(s){let r=0;for(let a=0;a<=s.length;a++)r=jt(e,r,n,t,s[a-1],s[a],a===0?et:Ht),o.push(r);return o.pop(),{positions:e,holeIndices:o}}i=n}if(!qi(i))return jt(e,0,i,t,0,e.length,et),e;if(!Qi(i)){let n=0;for(const[s,r]of i.entries())n=Vt(e,n,r,t,s===0?et:Ht),o.push(n);return o.pop(),{positions:e,holeIndices:o}}return Vt(e,0,i,t,et),e}function dt(i,t,e){const o=i.length/3;let n=0;for(let s=0;s<o;s++){const r=(s+1)%o;n+=i[s*3+t]*i[r*3+e],n-=i[r*3+t]*i[s*3+e]}return Math.abs(n/2)}function $t(i,t,e,o){const n=i.length/3;for(let s=0;s<n;s++){const r=s*3,a=i[r+0],l=i[r+1],c=i[r+2];i[r+t]=a,i[r+e]=l,i[r+o]=c}}function oo(i,t,e,o){let n=nt(i);n&&(n=n.map(a=>a/t));let s=N(i);const r=o&&t===3;if(e){const a=s.length;s=s.slice();const l=[];for(let c=0;c<a;c+=t){l[0]=s[c],l[1]=s[c+1],r&&(l[2]=s[c+2]);const f=e(l);s[c]=f[0],s[c+1]=f[1],r&&(s[c+2]=f[2])}}if(r){const a=dt(s,0,1),l=dt(s,0,2),c=dt(s,1,2);if(!a&&!l&&!c)return[];a>l&&a>c||(l>c?(e||(s=s.slice()),$t(s,0,2,1)):(e||(s=s.slice()),$t(s,2,0,1)))}return Yi(s,n,t)}class no extends ge{constructor(t){const{fp64:e,IndexType:o=Uint32Array}=t;super({...t,attributes:{positions:{size:3,type:e?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:o,size:1}}})}get(t){const{attributes:e}=this;return t==="indices"?e.indices&&e.indices.subarray(0,this.vertexCount):e[t]}updateGeometry(t){super.updateGeometry(t);const e=this.buffers.indices;if(e)this.vertexCount=(e.value||e).length;else if(this.data&&!this.getGeometry)throw new Error("missing indices buffer")}normalizeGeometry(t){if(this.normalize){const e=io(t,this.positionSize);return this.opts.resolution?de(N(e),nt(e),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?mi(N(e),nt(e),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):e}return t}getGeometrySize(t){if(Zt(t)){let e=0;for(const o of t)e+=this.getGeometrySize(o);return e}return N(t).length/this.positionSize}getGeometryFromBuffer(t){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(t):null}updateGeometryAttributes(t,e){if(t&&Zt(t))for(const o of t){const n=this.getGeometrySize(o);e.geometrySize=n,this.updateGeometryAttributes(o,e),e.vertexStart+=n,e.indexStart=this.indexStarts[e.geometryIndex+1]}else{const o=t;this._updateIndices(o,e),this._updatePositions(o,e),this._updateVertexValid(o,e)}}_updateIndices(t,{geometryIndex:e,vertexStart:o,indexStart:n}){const{attributes:s,indexStarts:r,typedArrayManager:a}=this;let l=s.indices;if(!l||!t)return;let c=n;const f=oo(t,this.positionSize,this.opts.preproject,this.opts.full3d);l=a.allocate(l,n+f.length,{copy:!0});for(let u=0;u<f.length;u++)l[c++]=f[u]+o;r[e+1]=n+f.length,s.indices=l}_updatePositions(t,{vertexStart:e,geometrySize:o}){const{attributes:{positions:n},positionSize:s}=this;if(!n||!t)return;const r=N(t);for(let a=e,l=0;l<o;a++,l++){const c=r[l*s],f=r[l*s+1],u=s>2?r[l*s+2]:0;n[a*3]=c,n[a*3+1]=f,n[a*3+2]=u}}_updateVertexValid(t,{vertexStart:e,geometrySize:o}){const{positionSize:n}=this,s=this.attributes.vertexValid,r=t&&nt(t);if(t&&t.edgeTypes?s.set(t.edgeTypes,e):s.fill(1,e,e+o),r)for(let a=0;a<r.length;a++)s[e+r[a]/n-1]=0;s[e+o-1]=0}}function Zt(i){return Array.isArray(i)&&i.length>0&&!Number.isFinite(i[0])}const Kt=`uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,so={name:"solidPolygon",vs:Kt,fs:Kt,uniformTypes:{extruded:"f32",isWireframe:"f32",elevationScale:"f32"}},we=`in vec4 fillColors;
in vec4 lineColors;
in vec3 pickingColors;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = pickingColors;
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,ro=`#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${we}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`,ao=`#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${we}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`,lo=`#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,rt=[0,0,0,255],co={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:"CW",_full3d:!1,elevationScale:{type:"number",min:0,value:1},getPolygon:{type:"accessor",value:i=>i.polygon},getElevation:{type:"accessor",value:1e3},getFillColor:{type:"accessor",value:rt},getLineColor:{type:"accessor",value:rt},material:!0},it={enter:(i,t)=>t.length?t.subarray(t.length-i.length):i};class Se extends D{getShaders(t){return super.getShaders({vs:t==="top"?ro:ao,fs:lo,defines:{RING_WINDING_ORDER_CW:!this.props._normalize&&this.props._windingOrder==="CCW"?0:1},modules:[Y,Lt,J,so]})}get wrapLongitude(){return!1}getBounds(){var t;return(t=this.getAttributeManager())==null?void 0:t.getBounds(["vertexPositions"])}initializeState(){const{viewport:t}=this.context;let{coordinateSystem:e}=this.props;const{_full3d:o}=this.props;t.isGeospatial&&e===ft.DEFAULT&&(e=ft.LNGLAT);let n;e===ft.LNGLAT&&(o?n=t.projectPosition.bind(t):n=t.projectFlat.bind(t)),this.setState({numInstances:0,polygonTesselator:new no({preproject:n,fp64:this.use64bitPositions(),IndexType:Uint32Array})});const s=this.getAttributeManager(),r=!0;s.remove(["instancePickingColors"]),s.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:r},vertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:it,accessor:"getPolygon",update:this.calculatePositions,noAlloc:r,shaderAttributes:{nextVertexPositions:{vertexOffset:1}}},instanceVertexValid:{size:1,type:"uint16",stepMode:"instance",update:this.calculateVertexValid,noAlloc:r},elevations:{size:1,stepMode:"dynamic",transition:it,accessor:"getElevation"},fillColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:it,accessor:"getFillColor",defaultValue:rt},lineColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:it,accessor:"getLineColor",defaultValue:rt},pickingColors:{size:4,type:"uint8",stepMode:"dynamic",accessor:(a,{index:l,target:c})=>this.encodePickingColor(a&&a.__source?a.__source.index:l,c)}})}getPickingInfo(t){const e=super.getPickingInfo(t),{index:o}=e,n=this.props.data;return n[0]&&n[0].__source&&(e.object=n.find(s=>s.__source.index===o)),e}disablePickingIndex(t){const e=this.props.data;if(e[0]&&e[0].__source)for(let o=0;o<e.length;o++)e[o].__source.index===t&&this._disablePickingIndex(o);else super.disablePickingIndex(t)}draw({uniforms:t}){const{extruded:e,filled:o,wireframe:n,elevationScale:s}=this.props,{topModel:r,sideModel:a,wireframeModel:l,polygonTesselator:c}=this.state,f={extruded:!!e,elevationScale:s,isWireframe:!1};l&&n&&(l.setInstanceCount(c.instanceCount-1),l.shaderInputs.setProps({solidPolygon:{...f,isWireframe:!0}}),l.draw(this.context.renderPass)),a&&o&&(a.setInstanceCount(c.instanceCount-1),a.shaderInputs.setProps({solidPolygon:f}),a.draw(this.context.renderPass)),r&&o&&(r.setVertexCount(c.vertexCount),r.shaderInputs.setProps({solidPolygon:f}),r.draw(this.context.renderPass))}updateState(t){var a;super.updateState(t),this.updateGeometry(t);const{props:e,oldProps:o,changeFlags:n}=t,s=this.getAttributeManager();(n.extensionsChanged||e.filled!==o.filled||e.extruded!==o.extruded)&&((a=this.state.models)==null||a.forEach(l=>l.destroy()),this.setState(this._getModels()),s.invalidateAll())}updateGeometry({props:t,oldProps:e,changeFlags:o}){if(o.dataChanged||o.updateTriggersChanged&&(o.updateTriggersChanged.all||o.updateTriggersChanged.getPolygon)){const{polygonTesselator:s}=this.state,r=t.data.attributes||{};s.updateGeometry({data:t.data,normalize:t._normalize,geometryBuffer:r.getPolygon,buffers:r,getGeometry:t.getPolygon,positionFormat:t.positionFormat,wrapLongitude:t.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:o.dataChanged,full3d:t._full3d}),this.setState({numInstances:s.instanceCount,startIndices:s.vertexStarts}),o.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){const{id:t,filled:e,extruded:o}=this.props;let n,s,r;if(e){const a=this.getShaders("top");a.defines.NON_INSTANCED_MODEL=1;const l=this.getAttributeManager().getBufferLayouts({isInstanced:!1});n=new E(this.context.device,{...a,id:`${t}-top`,topology:"triangle-list",bufferLayout:l,isIndexed:!0,userData:{excludeAttributes:{instanceVertexValid:!0}}})}if(o){const a=this.getAttributeManager().getBufferLayouts({isInstanced:!0});s=new E(this.context.device,{...this.getShaders("side"),id:`${t}-side`,bufferLayout:a,geometry:new B({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),r=new E(this.context.device,{...this.getShaders("side"),id:`${t}-wireframe`,bufferLayout:a,geometry:new B({topology:"line-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[s,r,n].filter(Boolean),topModel:n,sideModel:s,wireframeModel:r}}calculateIndices(t){const{polygonTesselator:e}=this.state;t.startIndices=e.indexStarts,t.value=e.get("indices")}calculatePositions(t){const{polygonTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("positions")}calculateVertexValid(t){t.value=this.state.polygonTesselator.get("vertexValid")}}Se.defaultProps=co;Se.layerName="SolidPolygonLayer";function Do({data:i,getIndex:t,dataRange:e,replace:o}){const{startRow:n=0,endRow:s=1/0}=e,r=i.length;let a=r,l=r;for(let g=0;g<r;g++){const h=t(i[g]);if(a>g&&h>=n&&(a=g),h>=s){l=g;break}}let c=a;const u=l-a!==o.length?i.slice(l):void 0;for(let g=0;g<o.length;g++)i[c++]=o[g];if(u){for(let g=0;g<u.length;g++)i[c++]=u[g];i.length=c}return{startRow:a,endRow:a+o.length}}const Xt=`uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,fo={name:"sdf",vs:Xt,fs:Xt,uniformTypes:{gamma:"f32",enabled:"f32",buffer:"f32",outlineBuffer:"f32",outlineColor:"vec4<f32>"}},go=`#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,pt=192/256,Yt=[],uo={getIconOffsets:{type:"accessor",value:i=>i.offsets},alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:"color",value:[0,0,0,255]}};class Tt extends wt{getShaders(){const t=super.getShaders();return{...t,modules:[...t.modules,fo],fs:go}}initializeState(){super.initializeState(),this.getAttributeManager().addInstanced({instanceOffsets:{size:2,accessor:"getIconOffsets"},instancePickingColors:{type:"uint8",size:3,accessor:(e,{index:o,target:n})=>this.encodePickingColor(o,n)}})}updateState(t){super.updateState(t);const{props:e,oldProps:o}=t,{outlineColor:n}=e;if(n!==o.outlineColor){const s=[n[0]/255,n[1]/255,n[2]/255,(n[3]??255)/255];this.setState({outlineColor:s})}!e.sdf&&e.outlineWidth&&G.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(t){const{sdf:e,smoothing:o,outlineWidth:n}=this.props,{outlineColor:s}=this.state,r=n?Math.max(o,pt*(1-n)):-1,a=this.state.model,l={buffer:pt,outlineBuffer:r,gamma:o,enabled:!!e,outlineColor:s};if(a.shaderInputs.setProps({sdf:l}),super.draw(t),e&&n){const{iconManager:c}=this.state;c.getTexture()&&(a.shaderInputs.setProps({sdf:{...l,outlineBuffer:pt}}),a.draw(this.context.renderPass))}}getInstanceOffset(t){return t?Array.from(t).flatMap(e=>super.getInstanceOffset(e)):Yt}getInstanceColorMode(t){return 1}getInstanceIconFrame(t){return t?Array.from(t).flatMap(e=>super.getInstanceIconFrame(e)):Yt}}Tt.defaultProps=uo;Tt.layerName="MultiIconLayer";const W=1e20;class ho{constructor({fontSize:t=24,buffer:e=3,radius:o=8,cutoff:n=.25,fontFamily:s="sans-serif",fontWeight:r="normal",fontStyle:a="normal",lang:l=null}={}){this.buffer=e,this.cutoff=n,this.radius=o,this.lang=l;const c=this.size=t+e*4,f=this._createCanvas(c),u=this.ctx=f.getContext("2d",{willReadFrequently:!0});u.font=`${a} ${r} ${t}px ${s}`,u.textBaseline="alphabetic",u.textAlign="left",u.fillStyle="black",this.gridOuter=new Float64Array(c*c),this.gridInner=new Float64Array(c*c),this.f=new Float64Array(c),this.z=new Float64Array(c+1),this.v=new Uint16Array(c)}_createCanvas(t){const e=document.createElement("canvas");return e.width=e.height=t,e}draw(t){const{width:e,actualBoundingBoxAscent:o,actualBoundingBoxDescent:n,actualBoundingBoxLeft:s,actualBoundingBoxRight:r}=this.ctx.measureText(t),a=Math.ceil(o),l=0,c=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(r-s))),f=Math.min(this.size-this.buffer,a+Math.ceil(n)),u=c+2*this.buffer,g=f+2*this.buffer,h=Math.max(u*g,0),d=new Uint8ClampedArray(h),p={data:d,width:u,height:g,glyphWidth:c,glyphHeight:f,glyphTop:a,glyphLeft:l,glyphAdvance:e};if(c===0||f===0)return p;const{ctx:v,buffer:y,gridInner:_,gridOuter:m}=this;this.lang&&(v.lang=this.lang),v.clearRect(y,y,c,f),v.fillText(t,y,y+a);const x=v.getImageData(y,y,c,f);m.fill(W,0,h),_.fill(0,0,h);for(let P=0;P<f;P++)for(let L=0;L<c;L++){const b=x.data[4*(P*c+L)+3]/255;if(b===0)continue;const T=(P+y)*u+L+y;if(b===1)m[T]=0,_[T]=W;else{const S=.5-b;m[T]=S>0?S*S:0,_[T]=S<0?S*S:0}}Jt(m,0,0,u,g,u,this.f,this.v,this.z),Jt(_,y,y,c,f,u,this.f,this.v,this.z);for(let P=0;P<h;P++){const L=Math.sqrt(m[P])-Math.sqrt(_[P]);d[P]=Math.round(255-255*(L/this.radius+this.cutoff))}return p}}function Jt(i,t,e,o,n,s,r,a,l){for(let c=t;c<t+o;c++)qt(i,e*s+c,s,n,r,a,l);for(let c=e;c<e+n;c++)qt(i,c*s+t,1,o,r,a,l)}function qt(i,t,e,o,n,s,r){s[0]=0,r[0]=-W,r[1]=W,n[0]=i[t];for(let a=1,l=0,c=0;a<o;a++){n[a]=i[t+a*e];const f=a*a;do{const u=s[l];c=(n[a]-n[u]+f-u*u)/(a-u)/2}while(c<=r[l]&&--l>-1);l++,s[l]=a,r[l]=c,r[l+1]=W}for(let a=0,l=0;a<o;a++){for(;r[l+1]<a;)l++;const c=s[l],f=a-c;i[t+a*e]=n[c]+f*f}}const po=32,vo=[];function mo(i){return Math.pow(2,Math.ceil(Math.log2(i)))}function xo({characterSet:i,getFontWidth:t,fontHeight:e,buffer:o,maxCanvasWidth:n,mapping:s={},xOffset:r=0,yOffset:a=0}){let l=0,c=r;const f=e+o*2;for(const u of i)if(!s[u]){const g=t(u);c+g+o*2>n&&(c=0,l++),s[u]={x:c+o,y:a+l*f+o,width:g,height:f,layoutWidth:g,layoutHeight:e},c+=g+o*2}return{mapping:s,xOffset:c,yOffset:a+l*f,canvasHeight:mo(a+(l+1)*f)}}function be(i,t,e,o){var s;let n=0;for(let r=t;r<e;r++){const a=i[r];n+=((s=o[a])==null?void 0:s.layoutWidth)||0}return n}function Ae(i,t,e,o,n,s){let r=t,a=0;for(let l=t;l<e;l++){const c=be(i,l,l+1,n);a+c>o&&(r<l&&s.push(l),r=l,a=0),a+=c}return a}function yo(i,t,e,o,n,s){let r=t,a=t,l=t,c=0;for(let f=t;f<e;f++)if((i[f]===" "||i[f+1]===" "||f+1===e)&&(l=f+1),l>a){let u=be(i,a,l,n);c+u>o&&(r<a&&(s.push(a),r=a,c=0),u>o&&(u=Ae(i,a,l,o,n,s),r=s[s.length-1])),a=l,c+=u}return c}function _o(i,t,e,o,n=0,s){s===void 0&&(s=i.length);const r=[];return t==="break-all"?Ae(i,n,s,e,o,r):yo(i,n,s,e,o,r),r}function Po(i,t,e,o,n,s){let r=0,a=0;for(let l=t;l<e;l++){const c=i[l],f=o[c];f?(a||(a=f.layoutHeight),n[l]=r+f.layoutWidth/2,r+=f.layoutWidth):(G.warn(`Missing character: ${c} (${c.codePointAt(0)})`)(),n[l]=r,r+=po)}s[0]=r,s[1]=a}function Co(i,t,e,o,n){var v;const s=Array.from(i),r=s.length,a=new Array(r),l=new Array(r),c=new Array(r),f=(e==="break-word"||e==="break-all")&&isFinite(o)&&o>0,u=[0,0],g=[0,0];let h=0,d=0,p=0;for(let y=0;y<=r;y++){const _=s[y];if((_===`
`||y===r)&&(p=y),p>d){const m=f?_o(s,e,o,n,d,p):vo;for(let x=0;x<=m.length;x++){const P=x===0?d:m[x-1],L=x<m.length?m[x]:p;Po(s,P,L,n,a,g);for(let b=P;b<L;b++){const T=s[b],S=((v=n[T])==null?void 0:v.layoutOffsetY)||0;l[b]=h+g[1]/2+S,c[b]=g[0]}h=h+g[1]*t,u[0]=Math.max(u[0],g[0])}d=p}_===`
`&&(a[d]=0,l[d]=0,c[d]=0,d++)}return u[1]=h,{x:a,y:l,rowWidth:c,size:u}}function Lo({value:i,length:t,stride:e,offset:o,startIndices:n,characterSet:s}){const r=i.BYTES_PER_ELEMENT,a=e?e/r:1,l=o?o/r:0,c=n[t]||Math.ceil((i.length-l)/a),f=s&&new Set,u=new Array(t);let g=i;if(a>1||l>0){const h=i.constructor;g=new h(c);for(let d=0;d<c;d++)g[d]=i[d*a+l]}for(let h=0;h<t;h++){const d=n[h],p=n[h+1]||c,v=g.subarray(d,p);u[h]=String.fromCodePoint.apply(null,v),f&&v.forEach(f.add,f)}if(f)for(const h of f)s.add(String.fromCodePoint(h));return{texts:u,characterCount:c}}class Te{constructor(t=5){this._cache={},this._order=[],this.limit=t}get(t){const e=this._cache[t];return e&&(this._deleteOrder(t),this._appendOrder(t)),e}set(t,e){this._cache[t]?(this.delete(t),this._cache[t]=e,this._appendOrder(t)):(Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[t]=e,this._appendOrder(t))}delete(t){this._cache[t]&&(delete this._cache[t],this._deleteOrder(t))}_deleteOrder(t){const e=this._order.indexOf(t);e>=0&&this._order.splice(e,1)}_appendOrder(t){this._order.push(t)}}function wo(){const i=[];for(let t=32;t<128;t++)i.push(String.fromCharCode(t));return i}const R={fontFamily:"Monaco, monospace",fontWeight:"normal",characterSet:wo(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},Qt=1024,te=.9,ee=1.2,Ie=3;let at=new Te(Ie);function So(i,t){let e;typeof t=="string"?e=new Set(Array.from(t)):e=new Set(t);const o=at.get(i);if(!o)return e;for(const n in o.mapping)e.has(n)&&e.delete(n);return e}function bo(i,t){for(let e=0;e<i.length;e++)t.data[4*e+3]=i[e]}function ie(i,t,e,o){i.font=`${o} ${e}px ${t}`,i.fillStyle="#000",i.textBaseline="alphabetic",i.textAlign="left"}function Ao(i){G.assert(Number.isFinite(i)&&i>=Ie,"Invalid cache limit"),at=new Te(i)}class To{constructor(){this.props={...R}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}get scale(){const{fontSize:t,buffer:e}=this.props;return(t*ee+e*2)/t}setProps(t={}){Object.assign(this.props,t),this._key=this._getKey();const e=So(this._key,this.props.characterSet),o=at.get(this._key);if(o&&e.size===0){this._atlas!==o&&(this._atlas=o);return}const n=this._generateFontAtlas(e,o);this._atlas=n,at.set(this._key,n)}_generateFontAtlas(t,e){const{fontFamily:o,fontWeight:n,fontSize:s,buffer:r,sdf:a,radius:l,cutoff:c}=this.props;let f=e&&e.data;f||(f=document.createElement("canvas"),f.width=Qt);const u=f.getContext("2d",{willReadFrequently:!0});ie(u,o,s,n);const{mapping:g,canvasHeight:h,xOffset:d,yOffset:p}=xo({getFontWidth:v=>u.measureText(v).width,fontHeight:s*ee,buffer:r,characterSet:t,maxCanvasWidth:Qt,...e&&{mapping:e.mapping,xOffset:e.xOffset,yOffset:e.yOffset}});if(f.height!==h){const v=u.getImageData(0,0,f.width,f.height);f.height=h,u.putImageData(v,0,0)}if(ie(u,o,s,n),a){const v=new ho({fontSize:s,buffer:r,radius:l,cutoff:c,fontFamily:o,fontWeight:`${n}`});for(const y of t){const{data:_,width:m,height:x,glyphTop:P}=v.draw(y);g[y].width=m,g[y].layoutOffsetY=s*te-P;const L=u.createImageData(m,x);bo(_,L),u.putImageData(L,g[y].x,g[y].y)}}else for(const v of t)u.fillText(v,g[v].x,g[v].y+r+s*te);return{xOffset:d,yOffset:p,mapping:g,data:f,width:f.width,height:f.height}}_getKey(){const{fontFamily:t,fontWeight:e,fontSize:o,buffer:n,sdf:s,radius:r,cutoff:a}=this.props;return s?`${t} ${e} ${o} ${n} ${r} ${a}`:`${t} ${e} ${o} ${n}`}}const oe=`uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,Io={name:"textBackground",vs:oe,fs:oe,uniformTypes:{billboard:"f32",sizeScale:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",borderRadius:"vec4<f32>",padding:"vec4<f32>",sizeUnits:"i32",stroked:"f32"}},Mo=`#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
dimensions = instanceRects.zw * sizePixels + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * sizePixels + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,Eo=`#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
float shapeAlpha = smoothedge(-distToEdge, 0.0);
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,zo={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,borderRadius:{type:"object",value:0},padding:{type:"array",value:[0,0,0,0]},getPosition:{type:"accessor",value:i=>i.position},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},getBoundingRect:{type:"accessor",value:[0,0,0,0]},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:[0,0,0,255]},getLineWidth:{type:"accessor",value:1}};class It extends D{getShaders(){return super.getShaders({vs:Mo,fs:Eo,modules:[Y,J,Io]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,accessor:"getSize",defaultValue:1},instanceAngles:{size:1,transition:!0,accessor:"getAngle"},instanceRects:{size:4,accessor:"getBoundingRect"},instancePixelOffsets:{size:2,transition:!0,accessor:"getPixelOffset"},instanceFillColors:{size:4,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}updateState(t){var o;super.updateState(t);const{changeFlags:e}=t;e.extensionsChanged&&((o=this.state.model)==null||o.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:t}){const{billboard:e,sizeScale:o,sizeUnits:n,sizeMinPixels:s,sizeMaxPixels:r,getLineWidth:a}=this.props;let{padding:l,borderRadius:c}=this.props;l.length<4&&(l=[l[0],l[1],l[0],l[1]]),Array.isArray(c)||(c=[c,c,c,c]);const f=this.state.model,u={billboard:e,stroked:!!a,borderRadius:c,padding:l,sizeUnits:H[n],sizeScale:o,sizeMinPixels:s,sizeMaxPixels:r};f.shaderInputs.setProps({textBackground:u}),f.draw(this.context.renderPass)}_getModel(){const t=[0,0,1,0,0,1,1,1];return new E(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new B({topology:"triangle-strip",vertexCount:4,attributes:{positions:{size:2,value:new Float32Array(t)}}}),isInstanced:!0})}}It.defaultProps=zo;It.layerName="TextBackgroundLayer";const ne={start:1,middle:0,end:-1},se={top:1,center:0,bottom:-1},vt=[0,0,0,255],Oo=1,Fo={billboard:!0,sizeScale:1,sizeUnits:"pixels",sizeMinPixels:0,sizeMaxPixels:Number.MAX_SAFE_INTEGER,background:!1,getBackgroundColor:{type:"accessor",value:[255,255,255,255]},getBorderColor:{type:"accessor",value:vt},getBorderWidth:{type:"accessor",value:0},backgroundBorderRadius:{type:"object",value:0},backgroundPadding:{type:"array",value:[0,0,0,0]},characterSet:{type:"object",value:R.characterSet},fontFamily:R.fontFamily,fontWeight:R.fontWeight,lineHeight:Oo,outlineWidth:{type:"number",value:0,min:0},outlineColor:{type:"color",value:vt},fontSettings:{type:"object",value:{},compare:1},wordBreak:"break-word",maxWidth:{type:"number",value:-1},getText:{type:"accessor",value:i=>i.text},getPosition:{type:"accessor",value:i=>i.position},getColor:{type:"accessor",value:vt},getSize:{type:"accessor",value:32},getAngle:{type:"accessor",value:0},getTextAnchor:{type:"accessor",value:"middle"},getAlignmentBaseline:{type:"accessor",value:"center"},getPixelOffset:{type:"accessor",value:[0,0]},backgroundColor:{deprecatedFor:["background","getBackgroundColor"]}};class Me extends fe{constructor(){super(...arguments),this.getBoundingRect=(t,e)=>{let{size:[o,n]}=this.transformParagraph(t,e);const{fontSize:s}=this.state.fontAtlasManager.props;o/=s,n/=s;const{getTextAnchor:r,getAlignmentBaseline:a}=this.props,l=ne[typeof r=="function"?r(t,e):r],c=se[typeof a=="function"?a(t,e):a];return[(l-1)*o/2,(c-1)*n/2,o,n]},this.getIconOffsets=(t,e)=>{const{getTextAnchor:o,getAlignmentBaseline:n}=this.props,{x:s,y:r,rowWidth:a,size:[l,c]}=this.transformParagraph(t,e),f=ne[typeof o=="function"?o(t,e):o],u=se[typeof n=="function"?n(t,e):n],g=s.length,h=new Array(g*2);let d=0;for(let p=0;p<g;p++){const v=(1-f)*(l-a[p])/2;h[d++]=(f-1)*l/2+v+s[p],h[d++]=(u-1)*c/2+r[p]}return h}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new To},this.props.maxWidth>0&&G.once(1,"v8.9 breaking change: TextLayer maxWidth is now relative to text size")()}updateState(t){const{props:e,oldProps:o,changeFlags:n}=t;(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||e.lineHeight!==o.lineHeight||e.wordBreak!==o.wordBreak||e.maxWidth!==o.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:t}){return t.object=t.index>=0?this.props.data[t.index]:null,t}_updateFontAtlas(){const{fontSettings:t,fontFamily:e,fontWeight:o}=this.props,{fontAtlasManager:n,characterSet:s}=this.state,r={...t,characterSet:s,fontFamily:e,fontWeight:o};if(!n.mapping)return n.setProps(r),!0;for(const a in r)if(r[a]!==n.props[a])return n.setProps(r),!0;return!1}_updateText(){var l;const{data:t,characterSet:e}=this.props,o=(l=t.attributes)==null?void 0:l.getText;let{getText:n}=this.props,s=t.startIndices,r;const a=e==="auto"&&new Set;if(o&&s){const{texts:c,characterCount:f}=Lo({...ArrayBuffer.isView(o)?{value:o}:o,length:t.length,startIndices:s,characterSet:a});r=f,n=(u,{index:g})=>c[g]}else{const{iterable:c,objectInfo:f}=Ct(t);s=[0],r=0;for(const u of c){f.index++;const g=Array.from(n(u,f)||"");a&&g.forEach(a.add,a),r+=g.length,s.push(r)}}this.setState({getText:n,startIndices:s,numInstances:r,characterSet:a||e})}transformParagraph(t,e){const{fontAtlasManager:o}=this.state,n=o.mapping,s=this.state.getText,{wordBreak:r,lineHeight:a,maxWidth:l}=this.props,c=s(t,e)||"";return Co(c,a,r,l*o.props.fontSize,n)}renderLayers(){const{startIndices:t,numInstances:e,getText:o,fontAtlasManager:{scale:n,atlas:s,mapping:r},styleVersion:a}=this.state,{data:l,_dataDiff:c,getPosition:f,getColor:u,getSize:g,getAngle:h,getPixelOffset:d,getBackgroundColor:p,getBorderColor:v,getBorderWidth:y,backgroundBorderRadius:_,backgroundPadding:m,background:x,billboard:P,fontSettings:L,outlineWidth:b,outlineColor:T,sizeScale:S,sizeUnits:z,sizeMinPixels:k,sizeMaxPixels:Mt,transitions:A,updateTriggers:w}=this.props,Ee=this.getSubLayerClass("characters",Tt),ze=this.getSubLayerClass("background",It);return[x&&new ze({getFillColor:p,getLineColor:v,getLineWidth:y,borderRadius:_,padding:m,getPosition:f,getSize:g,getAngle:h,getPixelOffset:d,billboard:P,sizeScale:S,sizeUnits:z,sizeMinPixels:k,sizeMaxPixels:Mt,transitions:A&&{getPosition:A.getPosition,getAngle:A.getAngle,getSize:A.getSize,getFillColor:A.getBackgroundColor,getLineColor:A.getBorderColor,getLineWidth:A.getBorderWidth,getPixelOffset:A.getPixelOffset}},this.getSubLayerProps({id:"background",updateTriggers:{getPosition:w.getPosition,getAngle:w.getAngle,getSize:w.getSize,getFillColor:w.getBackgroundColor,getLineColor:w.getBorderColor,getLineWidth:w.getBorderWidth,getPixelOffset:w.getPixelOffset,getBoundingRect:{getText:w.getText,getTextAnchor:w.getTextAnchor,getAlignmentBaseline:w.getAlignmentBaseline,styleVersion:a}}}),{data:l.attributes&&l.attributes.background?{length:l.length,attributes:l.attributes.background}:l,_dataDiff:c,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new Ee({sdf:L.sdf,smoothing:Number.isFinite(L.smoothing)?L.smoothing:R.smoothing,outlineWidth:b/(L.radius||R.radius),outlineColor:T,iconAtlas:s,iconMapping:r,getPosition:f,getColor:u,getSize:g,getAngle:h,getPixelOffset:d,billboard:P,sizeScale:S*n,sizeUnits:z,sizeMinPixels:k*n,sizeMaxPixels:Mt*n,transitions:A&&{getPosition:A.getPosition,getAngle:A.getAngle,getColor:A.getColor,getSize:A.getSize,getPixelOffset:A.getPixelOffset}},this.getSubLayerProps({id:"characters",updateTriggers:{all:w.getText,getPosition:w.getPosition,getAngle:w.getAngle,getColor:w.getColor,getSize:w.getSize,getPixelOffset:w.getPixelOffset,getIconOffsets:{getTextAnchor:w.getTextAnchor,getAlignmentBaseline:w.getAlignmentBaseline,styleVersion:a}}}),{data:l,_dataDiff:c,startIndices:t,numInstances:e,getIconOffsets:this.getIconOffsets,getIcon:o})]}static set fontAtlasCacheLimit(t){Ao(t)}}Me.defaultProps=Fo;Me.layerName="TextLayer";export{fe as C,wt as I,_e as P,Se as S,Me as T,xe as a,io as n,Do as r};
