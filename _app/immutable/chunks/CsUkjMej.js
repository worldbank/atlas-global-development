import{b as cn,a as un}from"./DYpMO4kp.js";import{p as Bt,v as Xe,x as ke,y as ie,f as zt,z as Lt,B as Ge,g as p,C as me,D as Oe,F as Ve,I as Ke,i as fe,G as bt,u as En,P as Os,Q as Bs,L as dn,K as Ct,J as Dt,aa as ea}from"./D7B53N8o.js";import{s as Ut,b as D,e as yt,n as xt,f as Qe,x as Vi,y as Wi}from"./Dj_5KqpC.js";import{p as Vt,i as lt,b as zs}from"./uDwqrKIs.js";import{C as yn}from"./RRMZb1xZ.js";import{C as xe,r as ks,e as di,b as v1}from"./D1LBnF_s.js";import{g as xn}from"./su98l1wz.js";import{l as y1}from"./Co2p4suz.js";import{c as $i}from"./UAFRlFgY.js";import{a as Qo}from"./DROhtFDv.js";import{s as Hs,a as Gs}from"./D7YRea9s.js";import{i as Vs}from"./CEYz6AUG.js";import{T as In}from"./CXv2-5E2.js";import{c as Nn}from"./Dv3aAGed.js";import{e as x1}from"./D_RpC-O5.js";import{c as W1}from"./CE6Kp46i.js";import{d as X1}from"./BNtUbFRg.js";import{l as Dn,m as mr,e as q1,p as Ws,d as Xs,s as Y1,b as qs,g as j1,h as Zi,o as qr}from"./BjjTemDu.js";import{b as Ys}from"./DNB7ZTU3.js";import{r as Pi}from"./OtVwhkKS.js";import{S as js}from"./Dav9YT8E.js";import{s as Ks}from"./6le00zqJ.js";import{L as or}from"./Br11VgYI.js";import{p as M1,d as Zs,e as Js}from"./s248wtrs.js";import{s as sr}from"./DVwM-0qY.js";import{b as $o}from"./C1DB3E_j.js";import{C as Qs}from"./i8C1kmi0.js";function K1(i,e,t){var n=Pi(i,e-Dn,t).concat(e);return function(r){return n.map(function(a){return[r,a]})}}function Z1(i,e,t){var n=Pi(i,e-Dn,t).concat(e);return function(r){return n.map(function(a){return[a,r]})}}function $s(){var i,e,t,n,r,a,o,s,l=10,c=l,f=90,u=360,h,m,y,_,g=2.5;function d(){return{type:"MultiLineString",coordinates:x()}}function x(){return Pi(mr(n/f)*f,t,f).map(y).concat(Pi(mr(s/u)*u,o,u).map(_)).concat(Pi(mr(e/l)*l,i,l).filter(function(v){return q1(v%f)>Dn}).map(h)).concat(Pi(mr(a/c)*c,r,c).filter(function(v){return q1(v%u)>Dn}).map(m))}return d.lines=function(){return x().map(function(v){return{type:"LineString",coordinates:v}})},d.outline=function(){return{type:"Polygon",coordinates:[y(n).concat(_(o).slice(1),y(t).reverse().slice(1),_(s).reverse().slice(1))]}},d.extent=function(v){return arguments.length?d.extentMajor(v).extentMinor(v):d.extentMinor()},d.extentMajor=function(v){return arguments.length?(n=+v[0][0],t=+v[1][0],s=+v[0][1],o=+v[1][1],n>t&&(v=n,n=t,t=v),s>o&&(v=s,s=o,o=v),d.precision(g)):[[n,s],[t,o]]},d.extentMinor=function(v){return arguments.length?(e=+v[0][0],i=+v[1][0],a=+v[0][1],r=+v[1][1],e>i&&(v=e,e=i,i=v),a>r&&(v=a,a=r,r=v),d.precision(g)):[[e,a],[i,r]]},d.step=function(v){return arguments.length?d.stepMajor(v).stepMinor(v):d.stepMinor()},d.stepMajor=function(v){return arguments.length?(f=+v[0],u=+v[1],d):[f,u]},d.stepMinor=function(v){return arguments.length?(l=+v[0],c=+v[1],d):[l,c]},d.precision=function(v){return arguments.length?(g=+v,h=K1(a,r,90),m=Z1(e,i,g),y=K1(s,o,90),_=Z1(n,t,g),d):g},d.extentMajor([[-180,-90+Dn],[180,90-Dn]]).extentMinor([[-180,-80-Dn],[180,80+Dn]])}function es(i,e){return[Xs(e)*Y1(i),Y1(e)]}es.invert=Ys(qs);function Br(){return Ws(es).scale(249.5).clipAngle(90+Dn)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const S1="179",e3=0,J1=1,t3=2,ts=1,n3=2,Cn=3,qn=0,Yt=1,Ln=2,Wn=0,Di=1,Q1=2,$1=3,eo=4,i3=5,ai=100,r3=101,a3=102,o3=103,s3=104,l3=200,c3=201,u3=202,d3=203,La=204,Ua=205,f3=206,h3=207,p3=208,m3=209,g3=210,_3=211,v3=212,y3=213,x3=214,Fa=0,Ia=1,Na=2,Fi=3,Oa=4,Ba=5,za=6,ka=7,E1=0,M3=1,S3=2,Xn=0,E3=1,T3=2,b3=3,A3=4,w3=5,R3=6,P3=7,ns=300,Ii=301,Ni=302,Ha=303,Ga=304,Kr=306,Va=1e3,si=1001,Wa=1002,ln=1003,C3=1004,gr=1005,pn=1006,ta=1007,li=1008,Mn=1009,is=1010,rs=1011,er=1012,T1=1013,ci=1014,Un=1015,lr=1016,b1=1017,A1=1018,tr=1020,as=35902,os=1021,ss=1022,sn=1023,nr=1026,ir=1027,ls=1028,w1=1029,cs=1030,R1=1031,P1=1033,zr=33776,kr=33777,Hr=33778,Gr=33779,Xa=35840,qa=35841,Ya=35842,ja=35843,Ka=36196,Za=37492,Ja=37496,Qa=37808,$a=37809,e1=37810,t1=37811,n1=37812,i1=37813,r1=37814,a1=37815,o1=37816,s1=37817,l1=37818,c1=37819,u1=37820,d1=37821,Vr=36492,f1=36494,h1=36495,us=36283,p1=36284,m1=36285,g1=36286,D3=3200,L3=3201,ds=0,U3=1,Vn="",qt="srgb",Oi="srgb-linear",Yr="linear",ut="srgb",hi=7680,to=519,F3=512,I3=513,N3=514,fs=515,O3=516,B3=517,z3=518,k3=519,no=35044,io="300 es",mn=2e3,jr=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ro=1234567;const Ji=Math.PI/180,rr=180/Math.PI;function ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function C1(i,e){return(i%e+e)%e}function H3(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function G3(i,e,t){return i!==e?(t-i)/(e-i):0}function Qi(i,e,t){return(1-t)*i+t*e}function V3(i,e,t,n){return Qi(i,e,1-Math.exp(-t*n))}function W3(i,e=1){return e-Math.abs(C1(i,e*2)-e)}function X3(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function q3(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Y3(i,e){return i+Math.floor(Math.random()*(e-i+1))}function j3(i,e){return i+Math.random()*(e-i)}function K3(i){return i*(.5-Math.random())}function Z3(i){i!==void 0&&(ro=i);let e=ro+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J3(i){return i*Ji}function Q3(i){return i*rr}function $3(i){return(i&i-1)===0&&i!==0}function e4(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function t4(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function n4(i,e,t,n,r){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+n)/2),f=o((e+n)/2),u=a((e-n)/2),h=o((e-n)/2),m=a((n-e)/2),y=o((n-e)/2);switch(r){case"XYX":i.set(s*f,l*u,l*h,s*c);break;case"YZY":i.set(l*h,s*f,l*u,s*c);break;case"ZXZ":i.set(l*u,l*h,s*f,s*c);break;case"XZX":i.set(s*f,l*y,l*m,s*c);break;case"YXY":i.set(l*m,s*f,l*y,s*c);break;case"ZYZ":i.set(l*y,l*m,s*f,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ao={DEG2RAD:Ji,RAD2DEG:rr,generateUUID:ki,clamp:et,euclideanModulo:C1,mapLinear:H3,inverseLerp:G3,lerp:Qi,damp:V3,pingpong:W3,smoothstep:X3,smootherstep:q3,randInt:Y3,randFloat:j3,randFloatSpread:K3,seededRandom:Z3,degToRad:J3,radToDeg:Q3,isPowerOfTwo:$3,ceilPowerOfTwo:e4,floorPowerOfTwo:t4,setQuaternionFromProperEuler:n4,normalize:Ht,denormalize:Ri};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let l=n[r+0],c=n[r+1],f=n[r+2],u=n[r+3];const h=a[o+0],m=a[o+1],y=a[o+2],_=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u;return}if(s===1){e[t+0]=h,e[t+1]=m,e[t+2]=y,e[t+3]=_;return}if(u!==_||l!==h||c!==m||f!==y){let g=1-s;const d=l*h+c*m+f*y+u*_,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const P=Math.sqrt(v),A=Math.atan2(P,d*x);g=Math.sin(g*A)/P,s=Math.sin(s*A)/P}const E=s*x;if(l=l*g+h*E,c=c*g+m*E,f=f*g+y*E,u=u*g+_*E,g===1-s){const P=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=P,c*=P,f*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,a,o){const s=n[r],l=n[r+1],c=n[r+2],f=n[r+3],u=a[o],h=a[o+1],m=a[o+2],y=a[o+3];return e[t]=s*y+f*u+l*m-c*h,e[t+1]=l*y+f*h+c*u-s*m,e[t+2]=c*y+f*m+s*h-l*u,e[t+3]=f*y-s*u-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(n/2),f=s(r/2),u=s(a/2),h=l(n/2),m=l(r/2),y=l(a/2);switch(o){case"XYZ":this._x=h*f*u+c*m*y,this._y=c*m*u-h*f*y,this._z=c*f*y+h*m*u,this._w=c*f*u-h*m*y;break;case"YXZ":this._x=h*f*u+c*m*y,this._y=c*m*u-h*f*y,this._z=c*f*y-h*m*u,this._w=c*f*u+h*m*y;break;case"ZXY":this._x=h*f*u-c*m*y,this._y=c*m*u+h*f*y,this._z=c*f*y+h*m*u,this._w=c*f*u-h*m*y;break;case"ZYX":this._x=h*f*u-c*m*y,this._y=c*m*u+h*f*y,this._z=c*f*y-h*m*u,this._w=c*f*u+h*m*y;break;case"YZX":this._x=h*f*u+c*m*y,this._y=c*m*u+h*f*y,this._z=c*f*y-h*m*u,this._w=c*f*u-h*m*y;break;case"XZY":this._x=h*f*u-c*m*y,this._y=c*m*u-h*f*y,this._z=c*f*y+h*m*u,this._w=c*f*u+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=n+s+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(a-c)*m,this._z=(o-r)*m}else if(n>s&&n>u){const m=2*Math.sqrt(1+n-s-u);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+c)/m}else if(s>u){const m=2*Math.sqrt(1+s-n-u);this._w=(a-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+u-n-s);this._w=(o-r)/m,this._x=(a+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+o*s+r*c-a*l,this._y=r*f+o*l+a*s-n*c,this._z=a*f+o*c+n*l-r*s,this._w=o*f-n*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,s),u=Math.sin((1-t)*f)/c,h=Math.sin(t*f)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=r*u+this._y*h,this._z=a*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*n),f=2*(s*t-a*r),u=2*(a*n-o*t);return this.x=t+l*c+o*u-s*f,this.y=n+l*f+s*c-a*u,this.z=r+l*u+a*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-n*l,this.z=n*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new W,oo=new cr;class je{constructor(e,t,n,r,a,o,s,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,l,c)}set(e,t,n,r,a,o,s,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=s,f[3]=t,f[4]=a,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],m=n[5],y=n[8],_=r[0],g=r[3],d=r[6],x=r[1],v=r[4],E=r[7],P=r[2],A=r[5],R=r[8];return a[0]=o*_+s*x+l*P,a[3]=o*g+s*v+l*A,a[6]=o*d+s*E+l*R,a[1]=c*_+f*x+u*P,a[4]=c*g+f*v+u*A,a[7]=c*d+f*E+u*R,a[2]=h*_+m*x+y*P,a[5]=h*g+m*v+y*A,a[8]=h*d+m*E+y*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*s*c-n*a*f+n*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],f=e[8],u=f*o-s*c,h=s*l-f*a,m=c*a-o*l,y=t*u+n*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=u*_,e[1]=(r*c-f*n)*_,e[2]=(s*n-r*o)*_,e[3]=h*_,e[4]=(f*t-r*l)*_,e[5]=(r*a-s*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new je;function hs(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function i4(){const i=ar("canvas");return i.style.display="block",i}const so={};function Li(i){i in so||(so[i]=!0,console.warn(i))}function r4(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const lo=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),co=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a4(){const i={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(r,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===ut&&(r.r=Fn(r.r),r.g=Fn(r.g),r.b=Fn(r.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vn?Yr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Li("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Li("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oi]:{primaries:e,whitePoint:n,transfer:Yr,toXYZ:lo,fromXYZ:co,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:lo,fromXYZ:co,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}const it=a4();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pi;class o4{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pi===void 0&&(pi=ar("canvas")),pi.width=e.width,pi.height=e.height;const r=pi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Fn(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s4=0;class D1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s4++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(ra(r[o].image)):a.push(ra(r[o]))}else a=ra(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?o4.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let l4=0;const aa=new W;class Wt extends zi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=si,r=si,a=pn,o=li,s=sn,l=Mn,c=Wt.DEFAULT_ANISOTROPY,f=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l4++}),this.uuid=ki(),this.name="",this.source=new D1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(aa).x}get height(){return this.source.getSize(aa).y}get depth(){return this.source.getSize(aa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ns)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=ns;Wt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],m=l[5],y=l[9],_=l[2],g=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-_)<.01&&Math.abs(y-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+_)<.1&&Math.abs(y+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(m+1)/2,P=(d+1)/2,A=(f+h)/4,R=(u+_)/4,L=(y+g)/4;return v>E&&v>P?v<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(v),r=A/n,a=R/n):E>P?E<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),n=A/r,a=L/r):P<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),n=R/a,r=L/a),this.set(n,r,a,t),this}let x=Math.sqrt((g-y)*(g-y)+(u-_)*(u-_)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(g-y)/x,this.y=(u-_)/x,this.z=(h-f)/x,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c4 extends zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new Wt(r);this.textures=[];const o=n.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new D1(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends c4{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ps extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u4 extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,tn):tn.fromBufferAttribute(a,o),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),vr.subVectors(this.max,Xi),mi.subVectors(e.a,Xi),gi.subVectors(e.b,Xi),_i.subVectors(e.c,Xi),On.subVectors(gi,mi),Bn.subVectors(_i,gi),Jn.subVectors(mi,_i);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-Jn.z,Jn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,Jn.z,0,-Jn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-Jn.y,Jn.x,0];return!oa(t,mi,gi,_i,vr)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,mi,gi,_i,vr))?!1:(yr.crossVectors(On,Bn),t=[yr.x,yr.y,yr.z],oa(t,mi,gi,_i,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bn=[new W,new W,new W,new W,new W,new W,new W,new W],tn=new W,_r=new ur,mi=new W,gi=new W,_i=new W,On=new W,Bn=new W,Jn=new W,Xi=new W,vr=new W,yr=new W,Qn=new W;function oa(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){Qn.fromArray(i,a);const s=r.x*Math.abs(Qn.x)+r.y*Math.abs(Qn.y)+r.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),f=n.dot(Qn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>s)return!1}return!0}const d4=new ur,qi=new W,sa=new W;class L1{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):d4.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(qi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(sa)),this.expandByPoint(qi.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const An=new W,la=new W,xr=new W,zn=new W,ca=new W,Mr=new W,ua=new W;class f4{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){la.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(la);const a=e.distanceTo(t)*.5,o=-this.direction.dot(xr),s=zn.dot(this.direction),l=-zn.dot(xr),c=zn.lengthSq(),f=Math.abs(1-o*o);let u,h,m,y;if(f>0)if(u=o*l-s,h=o*s-l,y=a*f,u>=0)if(h>=-y)if(h<=y){const _=1/f;u*=_,h*=_,m=u*(u+o*h+2*s)+h*(o*u+h+2*l)+c}else h=a,u=Math.max(0,-(o*h+s)),m=-u*u+h*(h+2*l)+c;else h=-a,u=Math.max(0,-(o*h+s)),m=-u*u+h*(h+2*l)+c;else h<=-y?(u=Math.max(0,-(-o*a+s)),h=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+h*(h+2*l)+c):h<=y?(u=0,h=Math.min(Math.max(-a,-l),a),m=h*(h+2*l)+c):(u=Math.max(0,-(o*a+s)),h=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+h*(h+2*l)+c);else h=o>0?-a:a,u=Math.max(0,-(o*h+s)),m=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(la).addScaledVector(xr,h),m}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),r=An.dot(An)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=n-o,l=n+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(a=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(a=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),u>=0?(s=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(s=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||s>r)||((s>n||n!==n)&&(n=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,r,a){ca.subVectors(t,e),Mr.subVectors(n,e),ua.crossVectors(ca,Mr);let o=this.direction.dot(ua),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;zn.subVectors(this.origin,e);const l=s*this.direction.dot(Mr.crossVectors(zn,Mr));if(l<0)return null;const c=s*this.direction.dot(ca.cross(zn));if(c<0||l+c>o)return null;const f=-s*zn.dot(ua);return f<0?null:this.at(f/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,n,r,a,o,s,l,c,f,u,h,m,y,_,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,l,c,f,u,h,m,y,_,g)}set(e,t,n,r,a,o,s,l,c,f,u,h,m,y,_,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=a,d[5]=o,d[9]=s,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=h,d[3]=m,d[7]=y,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/vi.setFromMatrixColumn(e,0).length(),a=1/vi.setFromMatrixColumn(e,1).length(),o=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const h=o*f,m=o*u,y=s*f,_=s*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=m+y*c,t[5]=h-_*c,t[9]=-s*l,t[2]=_-h*c,t[6]=y+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*u,y=c*f,_=c*u;t[0]=h+_*s,t[4]=y*s-m,t[8]=o*c,t[1]=o*u,t[5]=o*f,t[9]=-s,t[2]=m*s-y,t[6]=_+h*s,t[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*u,y=c*f,_=c*u;t[0]=h-_*s,t[4]=-o*u,t[8]=y+m*s,t[1]=m+y*s,t[5]=o*f,t[9]=_-h*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*u,y=s*f,_=s*u;t[0]=l*f,t[4]=y*c-m,t[8]=h*c+_,t[1]=l*u,t[5]=_*c+h,t[9]=m*c-y,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,y=s*l,_=s*c;t[0]=l*f,t[4]=_-h*u,t[8]=y*u+m,t[1]=u,t[5]=o*f,t[9]=-s*f,t[2]=-c*f,t[6]=m*u+y,t[10]=h-_*u}else if(e.order==="XZY"){const h=o*l,m=o*c,y=s*l,_=s*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+_,t[5]=o*f,t[9]=m*u-y,t[2]=y*u-m,t[6]=s*f,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h4,e,p4)}lookAt(e,t,n){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),kn.crossVectors(n,Zt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),kn.crossVectors(n,Zt)),kn.normalize(),Sr.crossVectors(Zt,kn),r[0]=kn.x,r[4]=Sr.x,r[8]=Zt.x,r[1]=kn.y,r[5]=Sr.y,r[9]=Zt.y,r[2]=kn.z,r[6]=Sr.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],m=n[13],y=n[2],_=n[6],g=n[10],d=n[14],x=n[3],v=n[7],E=n[11],P=n[15],A=r[0],R=r[4],L=r[8],M=r[12],T=r[1],w=r[5],B=r[9],k=r[13],N=r[2],Y=r[6],V=r[10],j=r[14],I=r[3],Z=r[7],$=r[11],oe=r[15];return a[0]=o*A+s*T+l*N+c*I,a[4]=o*R+s*w+l*Y+c*Z,a[8]=o*L+s*B+l*V+c*$,a[12]=o*M+s*k+l*j+c*oe,a[1]=f*A+u*T+h*N+m*I,a[5]=f*R+u*w+h*Y+m*Z,a[9]=f*L+u*B+h*V+m*$,a[13]=f*M+u*k+h*j+m*oe,a[2]=y*A+_*T+g*N+d*I,a[6]=y*R+_*w+g*Y+d*Z,a[10]=y*L+_*B+g*V+d*$,a[14]=y*M+_*k+g*j+d*oe,a[3]=x*A+v*T+E*N+P*I,a[7]=x*R+v*w+E*Y+P*Z,a[11]=x*L+v*B+E*V+P*$,a[15]=x*M+v*k+E*j+P*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],m=e[14],y=e[3],_=e[7],g=e[11],d=e[15];return y*(+a*l*u-r*c*u-a*s*h+n*c*h+r*s*m-n*l*m)+_*(+t*l*m-t*c*h+a*o*h-r*o*m+r*c*f-a*l*f)+g*(+t*c*u-t*s*m-a*o*u+n*o*m+a*s*f-n*c*f)+d*(-r*s*f-t*l*u+t*s*h+r*o*u-n*o*h+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],m=e[11],y=e[12],_=e[13],g=e[14],d=e[15],x=u*g*c-_*h*c+_*l*m-s*g*m-u*l*d+s*h*d,v=y*h*c-f*g*c-y*l*m+o*g*m+f*l*d-o*h*d,E=f*_*c-y*u*c+y*s*m-o*_*m-f*s*d+o*u*d,P=y*u*l-f*_*l-y*s*h+o*_*h+f*s*g-o*u*g,A=t*x+n*v+r*E+a*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=x*R,e[1]=(_*h*a-u*g*a-_*r*m+n*g*m+u*r*d-n*h*d)*R,e[2]=(s*g*a-_*l*a+_*r*c-n*g*c-s*r*d+n*l*d)*R,e[3]=(u*l*a-s*h*a-u*r*c+n*h*c+s*r*m-n*l*m)*R,e[4]=v*R,e[5]=(f*g*a-y*h*a+y*r*m-t*g*m-f*r*d+t*h*d)*R,e[6]=(y*l*a-o*g*a-y*r*c+t*g*c+o*r*d-t*l*d)*R,e[7]=(o*h*a-f*l*a+f*r*c-t*h*c-o*r*m+t*l*m)*R,e[8]=E*R,e[9]=(y*u*a-f*_*a-y*n*m+t*_*m+f*n*d-t*u*d)*R,e[10]=(o*_*a-y*s*a+y*n*c-t*_*c-o*n*d+t*s*d)*R,e[11]=(f*s*a-o*u*a-f*n*c+t*u*c+o*n*m-t*s*m)*R,e[12]=P*R,e[13]=(f*_*r-y*u*r+y*n*h-t*_*h-f*n*g+t*u*g)*R,e[14]=(y*s*r-o*_*r-y*n*l+t*_*l+o*n*g-t*s*g)*R,e[15]=(o*u*r-f*s*r+f*n*l-t*u*l-o*n*h+t*s*h)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,l=e.z,c=a*o,f=a*s;return this.set(c*o+n,c*s-r*l,c*l+r*s,0,c*s+r*l,f*s+n,f*l-r*o,0,c*l-r*s,f*l+r*o,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,f=o+o,u=s+s,h=a*c,m=a*f,y=a*u,_=o*f,g=o*u,d=s*u,x=l*c,v=l*f,E=l*u,P=n.x,A=n.y,R=n.z;return r[0]=(1-(_+d))*P,r[1]=(m+E)*P,r[2]=(y-v)*P,r[3]=0,r[4]=(m-E)*A,r[5]=(1-(h+d))*A,r[6]=(g+x)*A,r[7]=0,r[8]=(y+v)*R,r[9]=(g-x)*R,r[10]=(1-(h+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=vi.set(r[0],r[1],r[2]).length();const o=vi.set(r[4],r[5],r[6]).length(),s=vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/a,f=1/o,u=1/s;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=f,nn.elements[5]*=f,nn.elements[6]*=f,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,a,o,s=mn,l=!1){const c=this.elements,f=2*a/(t-e),u=2*a/(n-r),h=(t+e)/(t-e),m=(n+r)/(n-r);let y,_;if(l)y=a/(o-a),_=o*a/(o-a);else if(s===mn)y=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===jr)y=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,o,s=mn,l=!1){const c=this.elements,f=2/(t-e),u=2/(n-r),h=-(t+e)/(t-e),m=-(n+r)/(n-r);let y,_;if(l)y=1/(o-a),_=o/(o-a);else if(s===mn)y=-2/(o-a),_=-(o+a)/(o-a);else if(s===jr)y=-1/(o-a),_=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=y,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new W,nn=new Et,h4=new W(0,0,0),p4=new W(1,1,1),kn=new W,Sr=new W,Zt=new W,uo=new Et,fo=new cr;class Sn{constructor(e=0,t=0,n=0,r=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fo.setFromEuler(this),this.setFromQuaternion(fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class ms{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m4=0;const ho=new W,yi=new cr,wn=new Et,Er=new W,Yi=new W,g4=new W,_4=new cr,po=new W(1,0,0),mo=new W(0,1,0),go=new W(0,0,1),_o={type:"added"},v4={type:"removed"},xi={type:"childadded",child:null},da={type:"childremoved",child:null};class Nt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m4++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new W,t=new Sn,n=new cr,r=new W(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new je}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(po,e)}rotateY(e){return this.rotateOnAxis(mo,e)}rotateZ(e){return this.rotateOnAxis(go,e)}translateOnAxis(e,t){return ho.copy(e).applyQuaternion(this.quaternion),this.position.add(ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(po,e)}translateY(e){return this.translateOnAxis(mo,e)}translateZ(e){return this.translateOnAxis(go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Yi,Er,this.up):wn.lookAt(Er,Yi,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(wn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_o),xi.child=e,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(v4),da.child=e,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_o),xi.child=e,this.dispatchEvent(xi),xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,g4),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,_4,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(s=>({...s,boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(s=>({...s})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),m=o(e.animations),y=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(s){const l=[];for(const c in s){const f=s[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new W(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new W,Rn=new W,fa=new W,Pn=new W,Mi=new W,Si=new W,vo=new W,ha=new W,pa=new W,ma=new W,ga=new Mt,_a=new Mt,va=new Mt;class on{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),rn.subVectors(e,t),r.cross(rn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){rn.subVectors(r,t),Rn.subVectors(n,t),fa.subVectors(e,t);const o=rn.dot(rn),s=rn.dot(Rn),l=rn.dot(fa),c=Rn.dot(Rn),f=Rn.dot(fa),u=o*c-s*s;if(u===0)return a.set(0,0,0),null;const h=1/u,m=(c*l-s*f)*h,y=(o*f-s*l)*h;return a.set(1-m-y,y,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,r,a,o,s,l){return this.getBarycoord(e,t,n,r,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(s,Pn.z),l)}static getInterpolatedAttribute(e,t,n,r,a,o){return ga.setScalar(0),_a.setScalar(0),va.setScalar(0),ga.fromBufferAttribute(e,t),_a.fromBufferAttribute(e,n),va.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ga,a.x),o.addScaledVector(_a,a.y),o.addScaledVector(va,a.z),o}static isFrontFacing(e,t,n,r){return rn.subVectors(n,t),Rn.subVectors(e,t),rn.cross(Rn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),rn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return on.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,s;Mi.subVectors(r,n),Si.subVectors(a,n),ha.subVectors(e,n);const l=Mi.dot(ha),c=Si.dot(ha);if(l<=0&&c<=0)return t.copy(n);pa.subVectors(e,r);const f=Mi.dot(pa),u=Si.dot(pa);if(f>=0&&u<=f)return t.copy(r);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Mi,o);ma.subVectors(e,a);const m=Mi.dot(ma),y=Si.dot(ma);if(y>=0&&m<=y)return t.copy(a);const _=m*c-l*y;if(_<=0&&c>=0&&y<=0)return s=c/(c-y),t.copy(n).addScaledVector(Si,s);const g=f*y-m*u;if(g<=0&&u-f>=0&&m-y>=0)return vo.subVectors(a,r),s=(u-f)/(u-f+(m-y)),t.copy(r).addScaledVector(vo,s);const d=1/(g+_+h);return o=_*d,s=h*d,t.copy(n).addScaledVector(Mi,o).addScaledVector(Si,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function ya(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=C1(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=ya(o,a,e+1/3),this.g=ya(o,a,e),this.b=ya(o,a,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=qt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=gs[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return it.workingToColorSpace(It.copy(this),e),Math.round(et(It.r*255,0,255))*65536+Math.round(et(It.g*255,0,255))*256+Math.round(et(It.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(It.copy(this),t);const n=It.r,r=It.g,a=It.b,o=Math.max(n,r,a),s=Math.min(n,r,a);let l,c;const f=(s+o)/2;if(s===o)l=0,c=0;else{const u=o-s;switch(c=f<=.5?u/(o+s):u/(2-o-s),o){case n:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-n)/u+2;break;case a:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=qt){it.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,r=It.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Tr);const n=Qi(Hn.h,Tr.h,t),r=Qi(Hn.s,Tr.s,t),a=Qi(Hn.l,Tr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new tt;tt.NAMES=gs;let y4=0;class dr extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y4++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Di,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ua,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=to,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==to&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _s extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=E1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new W,br=new at;let x4=0;class _n{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x4++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=no,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==no&&(e.usage=this.usage),e}}class vs extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ys extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vn extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}}let M4=0;const en=new Et,xa=new Nt,Ei=new W,Jt=new ur,ji=new ur,Pt=new W;class jn extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M4++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hs(e)?ys:vs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new je().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Jt.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new L1);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];ji.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(Jt.min,ji.min),Jt.expandByPoint(Pt),Pt.addVectors(Jt.max,ji.max),Jt.expandByPoint(Pt)):(Jt.expandByPoint(ji.min),Jt.expandByPoint(ji.max))}Jt.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)Pt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Pt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,f=s.count;c<f;c++)Pt.fromBufferAttribute(s,c),l&&(Ei.fromBufferAttribute(e,c),Pt.add(Ei)),r=Math.max(r,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let L=0;L<n.count;L++)s[L]=new W,l[L]=new W;const c=new W,f=new W,u=new W,h=new at,m=new at,y=new at,_=new W,g=new W;function d(L,M,T){c.fromBufferAttribute(n,L),f.fromBufferAttribute(n,M),u.fromBufferAttribute(n,T),h.fromBufferAttribute(a,L),m.fromBufferAttribute(a,M),y.fromBufferAttribute(a,T),f.sub(c),u.sub(c),m.sub(h),y.sub(h);const w=1/(m.x*y.y-y.x*m.y);isFinite(w)&&(_.copy(f).multiplyScalar(y.y).addScaledVector(u,-m.y).multiplyScalar(w),g.copy(u).multiplyScalar(m.x).addScaledVector(f,-y.x).multiplyScalar(w),s[L].add(_),s[M].add(_),s[T].add(_),l[L].add(g),l[M].add(g),l[T].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,M=x.length;L<M;++L){const T=x[L],w=T.start,B=T.count;for(let k=w,N=w+B;k<N;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new W,E=new W,P=new W,A=new W;function R(L){P.fromBufferAttribute(r,L),A.copy(P);const M=s[L];v.copy(M),v.sub(P.multiplyScalar(P.dot(M))).normalize(),E.crossVectors(A,M);const w=E.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,w)}for(let L=0,M=x.length;L<M;++L){const T=x[L],w=T.start,B=T.count;for(let k=w,N=w+B;k<N;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new W,a=new W,o=new W,s=new W,l=new W,c=new W,f=new W,u=new W;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),f.subVectors(o,a),u.subVectors(r,a),f.cross(u),s.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),s.add(f),l.add(f),c.add(f),n.setXYZ(y,s.x,s.y,s.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,a),u.subVectors(r,a),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(s,l){const c=s.array,f=s.itemSize,u=s.normalized,h=new c.constructor(l.length*f);let m=0,y=0;for(let _=0,g=l.length;_<g;_++){s.isInterleavedBufferAttribute?m=l[_]*s.data.stride+s.offset:m=l[_]*f;for(let d=0;d<f;d++)h[y++]=c[m++]}return new _n(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,n=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,n);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let f=0,u=c.length;f<u;f++){const h=c[f],m=e(h,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const m=c[u];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const a=e.morphAttributes;for(const c in a){const f=[],u=a[c];for(let h=0,m=u.length;h<m;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yo=new Et,$n=new f4,Ar=new L1,xo=new W,wr=new W,Rr=new W,Pr=new W,Ma=new W,Cr=new W,Mo=new W,Dr=new W;class gn extends Nt{constructor(e=new jn,t=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Cr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const f=s[l],u=a[l];f!==0&&(Ma.fromBufferAttribute(u,e),o?Cr.addScaledVector(Ma,f):Cr.addScaledVector(Ma.sub(t),f))}t.add(Cr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(a),$n.copy(e.ray).recast(e.near),!(Ar.containsPoint($n.origin)===!1&&($n.intersectSphere(Ar,xo)===null||$n.origin.distanceToSquared(xo)>(e.far-e.near)**2))&&(yo.copy(a).invert(),$n.copy(e.ray).applyMatrix4(yo),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,u=a.attributes.normal,h=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const g=h[y],d=o[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(s.count,Math.min(g.start+g.count,m.start+m.count));for(let E=x,P=v;E<P;E+=3){const A=s.getX(E),R=s.getX(E+1),L=s.getX(E+2);r=Lr(this,d,e,n,c,f,u,A,R,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const y=Math.max(0,m.start),_=Math.min(s.count,m.start+m.count);for(let g=y,d=_;g<d;g+=3){const x=s.getX(g),v=s.getX(g+1),E=s.getX(g+2);r=Lr(this,o,e,n,c,f,u,x,v,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const g=h[y],d=o[g.materialIndex],x=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=x,P=v;E<P;E+=3){const A=E,R=E+1,L=E+2;r=Lr(this,d,e,n,c,f,u,A,R,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const y=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=y,d=_;g<d;g+=3){const x=g,v=g+1,E=g+2;r=Lr(this,o,e,n,c,f,u,x,v,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function S4(i,e,t,n,r,a,o,s){let l;if(e.side===Yt?l=n.intersectTriangle(o,a,r,!0,s):l=n.intersectTriangle(r,a,o,e.side===qn,s),l===null)return null;Dr.copy(s),Dr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:i}}function Lr(i,e,t,n,r,a,o,s,l,c){i.getVertexPosition(s,wr),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Pr);const f=S4(i,e,t,n,wr,Rr,Pr,Mo);if(f){const u=new W;on.getBarycoord(Mo,wr,Rr,Pr,u),r&&(f.uv=on.getInterpolatedAttribute(r,s,l,c,u,new at)),a&&(f.uv1=on.getInterpolatedAttribute(a,s,l,c,u,new at)),o&&(f.normal=on.getInterpolatedAttribute(o,s,l,c,u,new W),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new W,materialIndex:0};on.getNormal(wr,Rr,Pr,h.normal),f.face=h,f.barycoord=u}return f}class fr extends jn{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],f=[],u=[];let h=0,m=0;y("z","y","x",-1,-1,n,t,e,o,a,0),y("z","y","x",1,-1,n,t,-e,o,a,1),y("x","z","y",1,1,e,n,t,r,o,2),y("x","z","y",1,-1,e,n,-t,r,o,3),y("x","y","z",1,-1,e,t,n,r,a,4),y("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(f,3)),this.setAttribute("uv",new vn(u,2));function y(_,g,d,x,v,E,P,A,R,L,M){const T=E/R,w=P/L,B=E/2,k=P/2,N=A/2,Y=R+1,V=L+1;let j=0,I=0;const Z=new W;for(let $=0;$<V;$++){const oe=$*w-k;for(let ce=0;ce<Y;ce++){const be=ce*T-B;Z[_]=be*x,Z[g]=oe*v,Z[d]=N,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[g]=0,Z[d]=A>0?1:-1,f.push(Z.x,Z.y,Z.z),u.push(ce/R),u.push(1-$/L),j+=1}}for(let $=0;$<L;$++)for(let oe=0;oe<R;oe++){const ce=h+oe+Y*$,be=h+oe+Y*($+1),Ae=h+(oe+1)+Y*($+1),H=h+(oe+1)+Y*$;l.push(ce,be,H),l.push(be,Ae,H),I+=6}s.addGroup(m,I,M),m+=I,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=Bi(i[t]);for(const r in n)e[r]=n[r]}return e}function E4(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xs(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const T4={clone:Bi,merge:Gt};var b4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b4,this.fragmentShader=A4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=E4(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ms extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new W,So=new at,Eo=new at;class an extends Ms{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(Ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,So,Eo),t.subVectors(Eo,So)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ji*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,bi=1;class w4 extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Ti,bi,e,t);r.layers=this.layers,this.add(r);const a=new an(Ti,bi,e,t);a.layers=this.layers,this.add(a);const o=new an(Ti,bi,e,t);o.layers=this.layers,this.add(o);const s=new an(Ti,bi,e,t);s.layers=this.layers,this.add(s);const l=new an(Ti,bi,e,t);l.layers=this.layers,this.add(l);const c=new an(Ti,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,s),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(u,h,m),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Ss extends Wt{constructor(e=[],t=Ii,n,r,a,o,s,l,c,f){super(e,t,n,r,a,o,s,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R4 extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ss(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fr(5,5,5),a=new Yn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Wn});a.uniforms.tEquirect.value=t;const o=new gn(r,a),s=t.minFilter;return t.minFilter===li&&(t.minFilter=pn),new w4(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}class Ur extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P4={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),d=this._getHandJoint(c,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),m=.02,y=.005;c.inputState.pinching&&h>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(P4)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class C4 extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ea=new W,D4=new W,L4=new je;class ii{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ea.subVectors(n,t).cross(D4.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ea),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||L4.getNormalMatrix(e),r=this.coplanarPoint(Ea).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new L1,U4=new at(.5,.5),Fr=new W;class U1{constructor(e=new ii,t=new ii,n=new ii,r=new ii,a=new ii,o=new ii){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn,n=!1){const r=this.planes,a=e.elements,o=a[0],s=a[1],l=a[2],c=a[3],f=a[4],u=a[5],h=a[6],m=a[7],y=a[8],_=a[9],g=a[10],d=a[11],x=a[12],v=a[13],E=a[14],P=a[15];if(r[0].setComponents(c-o,m-f,d-y,P-x).normalize(),r[1].setComponents(c+o,m+f,d+y,P+x).normalize(),r[2].setComponents(c+s,m+u,d+_,P+v).normalize(),r[3].setComponents(c-s,m-u,d-_,P-v).normalize(),n)r[4].setComponents(l,h,g,E).normalize(),r[5].setComponents(c-l,m-h,d-g,P-E).normalize();else if(r[4].setComponents(c-l,m-h,d-g,P-E).normalize(),t===mn)r[5].setComponents(c+l,m+h,d+g,P+E).normalize();else if(t===jr)r[5].setComponents(l,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);const t=U4.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fr.x=r.normal.x>0?e.max.x:e.min.x,Fr.y=r.normal.y>0?e.max.y:e.min.y,Fr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Es extends Wt{constructor(e,t,n=ci,r,a,o,s=ln,l=ln,c,f=nr,u=1){if(f!==nr&&f!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,a,o,s,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new D1(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zr extends jn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(n),l=Math.floor(r),c=s+1,f=l+1,u=e/s,h=t/l,m=[],y=[],_=[],g=[];for(let d=0;d<f;d++){const x=d*h-o;for(let v=0;v<c;v++){const E=v*u-a;y.push(E,-x,0),_.push(0,0,1),g.push(v/s),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<s;x++){const v=x+c*d,E=x+c*(d+1),P=x+1+c*(d+1),A=x+1+c*d;m.push(v,E,A),m.push(E,P,A)}this.setIndex(m),this.setAttribute("position",new vn(y,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.widthSegments,e.heightSegments)}}class F1 extends jn{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+s,Math.PI);let c=0;const f=[],u=new W,h=new W,m=[],y=[],_=[],g=[];for(let d=0;d<=n;d++){const x=[],v=d/n;let E=0;d===0&&o===0?E=.5/t:d===n&&l===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){const A=P/t;u.x=-e*Math.cos(r+A*a)*Math.sin(o+v*s),u.y=e*Math.cos(o+v*s),u.z=e*Math.sin(r+A*a)*Math.sin(o+v*s),y.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),g.push(A+E,1-v),x.push(c++)}f.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){const v=f[d][x+1],E=f[d][x],P=f[d+1][x],A=f[d+1][x+1];(d!==0||o>0)&&m.push(v,E,A),(d!==n-1||l<Math.PI)&&m.push(E,P,A)}this.setIndex(m),this.setAttribute("position",new vn(y,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new F1(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class F4 extends dr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new tt(16777215),this.specular=new tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=E1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class I4 extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N4 extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ta={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class O4{constructor(e,t,n){const r=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){s++,a===!1&&r.onStart!==void 0&&r.onStart(f,o,s),a=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const m=c[u],y=c[u+1];if(m.global&&(m.lastIndex=0),m.test(f))return y}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const B4=new O4;class I1{constructor(e){this.manager=e!==void 0?e:B4,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}I1.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai=new WeakMap;class z4 extends I1{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=Ta.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0);else{let u=Ai.get(o);u===void 0&&(u=[],Ai.set(o,u)),u.push({onLoad:t,onError:r})}return o}const s=ar("img");function l(){f(),t&&t(this);const u=Ai.get(this)||[];for(let h=0;h<u.length;h++){const m=u[h];m.onLoad&&m.onLoad(this)}Ai.delete(this),a.manager.itemEnd(e)}function c(u){f(),r&&r(u),Ta.remove(`image:${e}`);const h=Ai.get(this)||[];for(let m=0;m<h.length;m++){const y=h[m];y.onError&&y.onError(u)}Ai.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function f(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),Ta.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}}class k4 extends I1{constructor(e){super(e)}load(e,t,n,r){const a=new Wt,o=new z4(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Ts extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ba=new Et,To=new W,bo=new W;class H4{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new U1,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;To.setFromMatrixPosition(e.matrixWorld),t.position.copy(To),bo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bo),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class N1 extends Ms{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=f*this.view.offsetY,l=s-f*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class G4 extends H4{constructor(){super(new N1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ao extends Ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new G4}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class V4 extends Ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class W4 extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function wo(i,e,t,n){const r=X4(n);switch(t){case os:return i*e;case ls:return i*e/r.components*r.byteLength;case w1:return i*e/r.components*r.byteLength;case cs:return i*e*2/r.components*r.byteLength;case R1:return i*e*2/r.components*r.byteLength;case ss:return i*e*3/r.components*r.byteLength;case sn:return i*e*4/r.components*r.byteLength;case P1:return i*e*4/r.components*r.byteLength;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:case ja:return Math.max(i,16)*Math.max(e,8)/4;case Xa:case Ya:return Math.max(i,8)*Math.max(e,8)/2;case Ka:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case e1:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case t1:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case n1:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case i1:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case r1:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case a1:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case o1:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case s1:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case l1:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case c1:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case u1:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case d1:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vr:case f1:case h1:return Math.ceil(i/4)*Math.ceil(e/4)*16;case us:case p1:return Math.ceil(i/4)*Math.ceil(e/4)*8;case m1:case g1:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X4(i){switch(i){case Mn:case is:return{byteLength:1,components:1};case er:case rs:case lr:return{byteLength:2,components:1};case b1:case A1:return{byteLength:2,components:4};case ci:case T1:case Un:return{byteLength:4,components:1};case as:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:S1}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=S1);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bs(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function q4(i){const e=new WeakMap;function t(s,l){const c=s.array,f=s.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),s.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:u}}function n(s,l,c){const f=l.array,u=l.updateRanges;if(i.bindBuffer(c,s),u.length===0)i.bufferSubData(c,0,f);else{u.sort((m,y)=>m.start-y.start);let h=0;for(let m=1;m<u.length;m++){const y=u[h],_=u[m];_.start<=y.start+y.count+1?y.count=Math.max(y.count,_.start+_.count-y.start):(++h,u[h]=_)}u.length=h+1;for(let m=0,y=u.length;m<y;m++){const _=u[m];i.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(i.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const f=e.get(s);(!f||f.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,t(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,s,l),c.version=s.version}}return{get:r,remove:a,update:o}}var Y4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j4=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$4=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,e2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,n2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,l2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,c2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,g2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,v2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E2="gl_FragColor = linearToOutputTexel( gl_FragColor );",T2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,A2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,z2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,k2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e5=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n5=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a5=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o5=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l5=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,c5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d5=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,f5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m5=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,g5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M5=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,S5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R5=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,P5=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D5=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U5=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I5=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z5=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k5=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,H5=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,G5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,X5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y5=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K5=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$5=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,el=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,il=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rl=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,al=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ol=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sl=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ll=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ul=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dl=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fl=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pl=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ml=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gl=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_l=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vl=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yl=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xl=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ml=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sl=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,El=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tl=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Y4,alphahash_pars_fragment:j4,alphamap_fragment:K4,alphamap_pars_fragment:Z4,alphatest_fragment:J4,alphatest_pars_fragment:Q4,aomap_fragment:$4,aomap_pars_fragment:e2,batching_pars_vertex:t2,batching_vertex:n2,begin_vertex:i2,beginnormal_vertex:r2,bsdfs:a2,iridescence_fragment:o2,bumpmap_pars_fragment:s2,clipping_planes_fragment:l2,clipping_planes_pars_fragment:c2,clipping_planes_pars_vertex:u2,clipping_planes_vertex:d2,color_fragment:f2,color_pars_fragment:h2,color_pars_vertex:p2,color_vertex:m2,common:g2,cube_uv_reflection_fragment:_2,defaultnormal_vertex:v2,displacementmap_pars_vertex:y2,displacementmap_vertex:x2,emissivemap_fragment:M2,emissivemap_pars_fragment:S2,colorspace_fragment:E2,colorspace_pars_fragment:T2,envmap_fragment:b2,envmap_common_pars_fragment:A2,envmap_pars_fragment:w2,envmap_pars_vertex:R2,envmap_physical_pars_fragment:z2,envmap_vertex:P2,fog_vertex:C2,fog_pars_vertex:D2,fog_fragment:L2,fog_pars_fragment:U2,gradientmap_pars_fragment:F2,lightmap_pars_fragment:I2,lights_lambert_fragment:N2,lights_lambert_pars_fragment:O2,lights_pars_begin:B2,lights_toon_fragment:k2,lights_toon_pars_fragment:H2,lights_phong_fragment:G2,lights_phong_pars_fragment:V2,lights_physical_fragment:W2,lights_physical_pars_fragment:X2,lights_fragment_begin:q2,lights_fragment_maps:Y2,lights_fragment_end:j2,logdepthbuf_fragment:K2,logdepthbuf_pars_fragment:Z2,logdepthbuf_pars_vertex:J2,logdepthbuf_vertex:Q2,map_fragment:$2,map_pars_fragment:e5,map_particle_fragment:t5,map_particle_pars_fragment:n5,metalnessmap_fragment:i5,metalnessmap_pars_fragment:r5,morphinstance_vertex:a5,morphcolor_vertex:o5,morphnormal_vertex:s5,morphtarget_pars_vertex:l5,morphtarget_vertex:c5,normal_fragment_begin:u5,normal_fragment_maps:d5,normal_pars_fragment:f5,normal_pars_vertex:h5,normal_vertex:p5,normalmap_pars_fragment:m5,clearcoat_normal_fragment_begin:g5,clearcoat_normal_fragment_maps:_5,clearcoat_pars_fragment:v5,iridescence_pars_fragment:y5,opaque_fragment:x5,packing:M5,premultiplied_alpha_fragment:S5,project_vertex:E5,dithering_fragment:T5,dithering_pars_fragment:b5,roughnessmap_fragment:A5,roughnessmap_pars_fragment:w5,shadowmap_pars_fragment:R5,shadowmap_pars_vertex:P5,shadowmap_vertex:C5,shadowmask_pars_fragment:D5,skinbase_vertex:L5,skinning_pars_vertex:U5,skinning_vertex:F5,skinnormal_vertex:I5,specularmap_fragment:N5,specularmap_pars_fragment:O5,tonemapping_fragment:B5,tonemapping_pars_fragment:z5,transmission_fragment:k5,transmission_pars_fragment:H5,uv_pars_fragment:G5,uv_pars_vertex:V5,uv_vertex:W5,worldpos_vertex:X5,background_vert:q5,background_frag:Y5,backgroundCube_vert:j5,backgroundCube_frag:K5,cube_vert:Z5,cube_frag:J5,depth_vert:Q5,depth_frag:$5,distanceRGBA_vert:el,distanceRGBA_frag:tl,equirect_vert:nl,equirect_frag:il,linedashed_vert:rl,linedashed_frag:al,meshbasic_vert:ol,meshbasic_frag:sl,meshlambert_vert:ll,meshlambert_frag:cl,meshmatcap_vert:ul,meshmatcap_frag:dl,meshnormal_vert:fl,meshnormal_frag:hl,meshphong_vert:pl,meshphong_frag:ml,meshphysical_vert:gl,meshphysical_frag:_l,meshtoon_vert:vl,meshtoon_frag:yl,points_vert:xl,points_frag:Ml,shadow_vert:Sl,shadow_frag:El,sprite_vert:Tl,sprite_frag:bl},pe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},hn={basic:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Gt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Gt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Gt([pe.points,pe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Gt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Gt([pe.common,pe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Gt([pe.sprite,pe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Gt([pe.common,pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Gt([pe.lights,pe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};hn.physical={uniforms:Gt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Ir={r:0,b:0,g:0},ti=new Sn,Al=new Et;function wl(i,e,t,n,r,a,o){const s=new tt(0);let l=a===!0?0:1,c,f,u=null,h=0,m=null;function y(v){let E=v.isScene===!0?v.background:null;return E&&E.isTexture&&(E=(v.backgroundBlurriness>0?t:e).get(E)),E}function _(v){let E=!1;const P=y(v);P===null?d(s,l):P&&P.isColor&&(d(P,1),E=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,E){const P=y(E);P&&(P.isCubeTexture||P.mapping===Kr)?(f===void 0&&(f=new gn(new fr(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Bi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ti.copy(E.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),f.material.uniforms.envMap.value=P,f.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Al.makeRotationFromEuler(ti)),f.material.toneMapped=it.getTransfer(P.colorSpace)!==ut,(u!==P||h!==P.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,u=P,h=P.version,m=i.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new gn(new Zr(2,2),new Yn({name:"BackgroundMaterial",uniforms:Bi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=it.getTransfer(P.colorSpace)!==ut,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||h!==P.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=P,h=P.version,m=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,E){v.getRGB(Ir,xs(i)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,E,o)}function x(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(v,E=1){s.set(v),l=E,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(s,l)},render:_,addToRenderList:g,dispose:x}}function Rl(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let a=r,o=!1;function s(T,w,B,k,N){let Y=!1;const V=u(k,B,w);a!==V&&(a=V,c(a.object)),Y=m(T,k,B,N),Y&&y(T,k,B,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,E(T,w,B,k),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function f(T){return i.deleteVertexArray(T)}function u(T,w,B){const k=B.wireframe===!0;let N=n[T.id];N===void 0&&(N={},n[T.id]=N);let Y=N[w.id];Y===void 0&&(Y={},N[w.id]=Y);let V=Y[k];return V===void 0&&(V=h(l()),Y[k]=V),V}function h(T){const w=[],B=[],k=[];for(let N=0;N<t;N++)w[N]=0,B[N]=0,k[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:B,attributeDivisors:k,object:T,attributes:{},index:null}}function m(T,w,B,k){const N=a.attributes,Y=w.attributes;let V=0;const j=B.getAttributes();for(const I in j)if(j[I].location>=0){const $=N[I];let oe=Y[I];if(oe===void 0&&(I==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),I==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor)),$===void 0||$.attribute!==oe||oe&&$.data!==oe.data)return!0;V++}return a.attributesNum!==V||a.index!==k}function y(T,w,B,k){const N={},Y=w.attributes;let V=0;const j=B.getAttributes();for(const I in j)if(j[I].location>=0){let $=Y[I];$===void 0&&(I==="instanceMatrix"&&T.instanceMatrix&&($=T.instanceMatrix),I==="instanceColor"&&T.instanceColor&&($=T.instanceColor));const oe={};oe.attribute=$,$&&$.data&&(oe.data=$.data),N[I]=oe,V++}a.attributes=N,a.attributesNum=V,a.index=k}function _(){const T=a.newAttributes;for(let w=0,B=T.length;w<B;w++)T[w]=0}function g(T){d(T,0)}function d(T,w){const B=a.newAttributes,k=a.enabledAttributes,N=a.attributeDivisors;B[T]=1,k[T]===0&&(i.enableVertexAttribArray(T),k[T]=1),N[T]!==w&&(i.vertexAttribDivisor(T,w),N[T]=w)}function x(){const T=a.newAttributes,w=a.enabledAttributes;for(let B=0,k=w.length;B<k;B++)w[B]!==T[B]&&(i.disableVertexAttribArray(B),w[B]=0)}function v(T,w,B,k,N,Y,V){V===!0?i.vertexAttribIPointer(T,w,B,N,Y):i.vertexAttribPointer(T,w,B,k,N,Y)}function E(T,w,B,k){_();const N=k.attributes,Y=B.getAttributes(),V=w.defaultAttributeValues;for(const j in Y){const I=Y[j];if(I.location>=0){let Z=N[j];if(Z===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Z=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Z=T.instanceColor)),Z!==void 0){const $=Z.normalized,oe=Z.itemSize,ce=e.get(Z);if(ce===void 0)continue;const be=ce.buffer,Ae=ce.type,H=ce.bytesPerElement,ee=Ae===i.INT||Ae===i.UNSIGNED_INT||Z.gpuType===T1;if(Z.isInterleavedBufferAttribute){const ne=Z.data,he=ne.stride,ve=Z.offset;if(ne.isInstancedInterleavedBuffer){for(let Le=0;Le<I.locationSize;Le++)d(I.location+Le,ne.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Le=0;Le<I.locationSize;Le++)g(I.location+Le);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Le=0;Le<I.locationSize;Le++)v(I.location+Le,oe/I.locationSize,Ae,$,he*H,(ve+oe/I.locationSize*Le)*H,ee)}else{if(Z.isInstancedBufferAttribute){for(let ne=0;ne<I.locationSize;ne++)d(I.location+ne,Z.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ne=0;ne<I.locationSize;ne++)g(I.location+ne);i.bindBuffer(i.ARRAY_BUFFER,be);for(let ne=0;ne<I.locationSize;ne++)v(I.location+ne,oe/I.locationSize,Ae,$,oe*H,oe/I.locationSize*ne*H,ee)}}else if(V!==void 0){const $=V[j];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(I.location,$);break;case 3:i.vertexAttrib3fv(I.location,$);break;case 4:i.vertexAttrib4fv(I.location,$);break;default:i.vertexAttrib1fv(I.location,$)}}}}x()}function P(){L();for(const T in n){const w=n[T];for(const B in w){const k=w[B];for(const N in k)f(k[N].object),delete k[N];delete w[B]}delete n[T]}}function A(T){if(n[T.id]===void 0)return;const w=n[T.id];for(const B in w){const k=w[B];for(const N in k)f(k[N].object),delete k[N];delete w[B]}delete n[T.id]}function R(T){for(const w in n){const B=n[w];if(B[T.id]===void 0)continue;const k=B[T.id];for(const N in k)f(k[N].object),delete k[N];delete B[T.id]}}function L(){M(),o=!0,a!==r&&(a=r,c(a.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:L,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function Pl(i,e,t){let n;function r(c){n=c}function a(c,f){i.drawArrays(n,c,f),t.update(f,n,1)}function o(c,f,u){u!==0&&(i.drawArraysInstanced(n,c,f,u),t.update(f,n,u))}function s(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,u);let m=0;for(let y=0;y<u;y++)m+=f[y];t.update(m,n,1)}function l(c,f,u,h){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<c.length;y++)o(c[y],f[y],h[y]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,f,0,h,0,u);let y=0;for(let _=0;_<u;_++)y+=f[_]*h[_];t.update(y,n,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function Cl(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(R){const L=R===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Un&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:P,maxSamples:A}}function Dl(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new ii,s=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||n!==0||r;return r=h,n=u.length,m},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,m){const y=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,d=i.get(u);if(!r||y===null||y.length===0||a&&!g)a?f(null):c();else{const x=a?0:n,v=x*4;let E=d.clippingState||null;l.value=E,E=f(y,h,v,m);for(let P=0;P!==v;++P)E[P]=t[P];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,m,y){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,y!==!0||g===null){const d=m+_*4,x=h.matrixWorldInverse;s.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,E=m;v!==_;++v,E+=4)o.copy(u[v]).applyMatrix4(x,s),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Ll(i){let e=new WeakMap;function t(o,s){return s===Ha?o.mapping=Ii:s===Ga&&(o.mapping=Ni),o}function n(o){if(o&&o.isTexture){const s=o.mapping;if(s===Ha||s===Ga)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new R4(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Ci=4,Ro=[.125,.215,.35,.446,.526,.582],oi=20,Aa=new N1,Po=new tt;let wa=null,Ra=0,Pa=0,Ca=!1;const ri=(1+Math.sqrt(5))/2,wi=1/ri,Co=[new W(-ri,wi,0),new W(ri,wi,0),new W(-wi,0,ri),new W(wi,0,ri),new W(0,ri,-wi),new W(0,ri,wi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Ul=new W;class Do{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,a={}){const{size:o=256,position:s=Ul}=a;wa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,s),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Ra,Pa),this._renderer.xr.enabled=Ca,e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:lr,format:sn,colorSpace:Oi,depthBuffer:!1},r=Lo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lo(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fl(a)),this._blurMaterial=Il(a,e,t)}return r}_compileMaterial(e){const t=new gn(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,r,a){const l=new an(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(Po),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const _=new _s({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new gn(new fr,_);let d=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,d=!0):(_.color.copy(Po),d=!0);for(let v=0;v<6;v++){const E=v%3;E===0?(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[v],a.y,a.z)):E===1?(l.up.set(0,0,c[v]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[v],a.z)):(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[v]));const P=this._cubeSize;Nr(r,E*P,v>2?P:0,P,P),u.setRenderTarget(r),d&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.autoClear=h,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ii||e.mapping===Ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Nr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Co[(r-a-1)%Co.length];this._blur(e,a-1,a,o,s)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new gn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*oi-1),_=a/y,g=isFinite(a)?1+Math.floor(f*_):oi;g>oi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${oi}`);const d=[];let x=0;for(let R=0;R<oi;++R){const L=R/_,M=Math.exp(-L*L/2);d.push(M),R===0?x+=M:R<g&&(x+=2*M)}for(let R=0;R<d.length;R++)d[R]=d[R]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:v}=this;h.dTheta.value=y,h.mipInt.value=v-n;const E=this._sizeLods[r],P=3*E*(r>v-Ci?r-v+Ci:0),A=4*(this._cubeSize-E);Nr(t,P,A,3*E,2*E),l.setRenderTarget(t),l.render(u,Aa)}}function Fl(i){const e=[],t=[],n=[];let r=i;const a=i-Ci+1+Ro.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>i-Ci?l=Ro[o-i+Ci-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],m=6,y=6,_=3,g=2,d=1,x=new Float32Array(_*y*m),v=new Float32Array(g*y*m),E=new Float32Array(d*y*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,L=A>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];x.set(M,_*y*A),v.set(h,g*y*A);const T=[A,A,A,A,A,A];E.set(T,d*y*A)}const P=new jn;P.setAttribute("position",new _n(x,_)),P.setAttribute("uv",new _n(v,g)),P.setAttribute("faceIndex",new _n(E,d)),e.push(P),r>Ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lo(i,e,t){const n=new ui(i,e,t);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Il(i,e,t){const n=new Float32Array(oi),r=new W(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:O1(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Uo(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:O1(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Fo(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:O1(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function O1(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nl(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Ha||l===Ga,f=l===Ii||l===Ni;if(c||f){let u=e.get(s);const h=u!==void 0?u.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return t===null&&(t=new Do(i)),u=c?t.fromEquirectangular(s,u):t.fromCubemap(s,u),u.texture.pmremVersion=s.pmremVersion,e.set(s,u),u.texture;if(u!==void 0)return u.texture;{const m=s.image;return c&&m&&m.height>0||f&&m&&r(m)?(t===null&&(t=new Do(i)),u=c?t.fromEquirectangular(s):t.fromCubemap(s),u.texture.pmremVersion=s.pmremVersion,e.set(s,u),s.addEventListener("dispose",a),u.texture):null}}}return s}function r(s){let l=0;const c=6;for(let f=0;f<c;f++)s[f]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ol(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Li("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Bl(i,e,t,n){const r={},a=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",o),delete r[h.id];const m=a.get(h);m&&(e.remove(m),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(u){const h=[],m=u.index,y=u.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let v=0,E=x.length;v<E;v+=3){const P=x[v+0],A=x[v+1],R=x[v+2];h.push(P,A,A,R,R,P)}}else if(y!==void 0){const x=y.array;_=y.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const P=v+0,A=v+1,R=v+2;h.push(P,A,A,R,R,P)}}else return;const g=new(hs(h)?ys:vs)(h,1);g.version=_;const d=a.get(u);d&&e.remove(d),a.set(u,g)}function f(u){const h=a.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:s,update:l,getWireframeAttribute:f}}function zl(i,e,t){let n;function r(h){n=h}let a,o;function s(h){a=h.type,o=h.bytesPerElement}function l(h,m){i.drawElements(n,m,a,h*o),t.update(m,n,1)}function c(h,m,y){y!==0&&(i.drawElementsInstanced(n,m,a,h*o,y),t.update(m,n,y))}function f(h,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,h,0,y);let g=0;for(let d=0;d<y;d++)g+=m[d];t.update(g,n,1)}function u(h,m,y,_){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],_[d]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,a,h,0,_,0,y);let d=0;for(let x=0;x<y;x++)d+=m[x]*_[x];t.update(d,n,1)}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function kl(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Hl(i,e,t){const n=new WeakMap,r=new Mt;function a(o,s,l){const c=o.morphTargetInfluences,f=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,u=f!==void 0?f.length:0;let h=n.get(s);if(h===void 0||h.count!==u){let M=function(){R.dispose(),n.delete(s),s.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const m=s.morphAttributes.position!==void 0,y=s.morphAttributes.normal!==void 0,_=s.morphAttributes.color!==void 0,g=s.morphAttributes.position||[],d=s.morphAttributes.normal||[],x=s.morphAttributes.color||[];let v=0;m===!0&&(v=1),y===!0&&(v=2),_===!0&&(v=3);let E=s.attributes.position.count*v,P=1;E>e.maxTextureSize&&(P=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*P*4*u),R=new ps(A,E,P,u);R.type=Un,R.needsUpdate=!0;const L=v*4;for(let T=0;T<u;T++){const w=g[T],B=d[T],k=x[T],N=E*P*4*T;for(let Y=0;Y<w.count;Y++){const V=Y*L;m===!0&&(r.fromBufferAttribute(w,Y),A[N+V+0]=r.x,A[N+V+1]=r.y,A[N+V+2]=r.z,A[N+V+3]=0),y===!0&&(r.fromBufferAttribute(B,Y),A[N+V+4]=r.x,A[N+V+5]=r.y,A[N+V+6]=r.z,A[N+V+7]=0),_===!0&&(r.fromBufferAttribute(k,Y),A[N+V+8]=r.x,A[N+V+9]=r.y,A[N+V+10]=r.z,A[N+V+11]=k.itemSize===4?r.w:1)}}h={count:u,texture:R,size:new at(E,P)},n.set(s,h),s.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const y=s.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:a}}function Gl(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const As=new Wt,Io=new Es(1,1),ws=new ps,Rs=new u4,Ps=new Ss,No=[],Oo=[],Bo=new Float32Array(16),zo=new Float32Array(9),ko=new Float32Array(4);function Hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=No[r];if(a===void 0&&(a=new Float32Array(r),No[r]=a),e!==0){n.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jr(i,e){let t=Oo[e];t===void 0&&(t=new Int32Array(e),Oo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vl(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wl(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function Xl(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function ql(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Yl(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;ko.set(n),i.uniformMatrix2fv(this.addr,!1,ko),wt(t,n)}}function jl(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;zo.set(n),i.uniformMatrix3fv(this.addr,!1,zo),wt(t,n)}}function Kl(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Bo.set(n),i.uniformMatrix4fv(this.addr,!1,Bo),wt(t,n)}}function Zl(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jl(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function Ql(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function $l(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function e0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function r0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Io.compareFunction=fs,a=Io):a=As,t.setTexture2D(e||a,r)}function a0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Rs,r)}function o0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ps,r)}function s0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ws,r)}function l0(i){switch(i){case 5126:return Vl;case 35664:return Wl;case 35665:return Xl;case 35666:return ql;case 35674:return Yl;case 35675:return jl;case 35676:return Kl;case 5124:case 35670:return Zl;case 35667:case 35671:return Jl;case 35668:case 35672:return Ql;case 35669:case 35673:return $l;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return s0}}function c0(i,e){i.uniform1fv(this.addr,e)}function u0(i,e){const t=Hi(e,this.size,2);i.uniform2fv(this.addr,t)}function d0(i,e){const t=Hi(e,this.size,3);i.uniform3fv(this.addr,t)}function f0(i,e){const t=Hi(e,this.size,4);i.uniform4fv(this.addr,t)}function h0(i,e){const t=Hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p0(i,e){const t=Hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function m0(i,e){const t=Hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g0(i,e){i.uniform1iv(this.addr,e)}function _0(i,e){i.uniform2iv(this.addr,e)}function v0(i,e){i.uniform3iv(this.addr,e)}function y0(i,e){i.uniform4iv(this.addr,e)}function x0(i,e){i.uniform1uiv(this.addr,e)}function M0(i,e){i.uniform2uiv(this.addr,e)}function S0(i,e){i.uniform3uiv(this.addr,e)}function E0(i,e){i.uniform4uiv(this.addr,e)}function T0(i,e,t){const n=this.cache,r=e.length,a=Jr(t,r);At(n,a)||(i.uniform1iv(this.addr,a),wt(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||As,a[o])}function b0(i,e,t){const n=this.cache,r=e.length,a=Jr(t,r);At(n,a)||(i.uniform1iv(this.addr,a),wt(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Rs,a[o])}function A0(i,e,t){const n=this.cache,r=e.length,a=Jr(t,r);At(n,a)||(i.uniform1iv(this.addr,a),wt(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ps,a[o])}function w0(i,e,t){const n=this.cache,r=e.length,a=Jr(t,r);At(n,a)||(i.uniform1iv(this.addr,a),wt(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ws,a[o])}function R0(i){switch(i){case 5126:return c0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return h0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return y0;case 5125:return x0;case 36294:return M0;case 36295:return S0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return w0}}class P0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=l0(t.type)}}class C0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R0(t.type)}}class D0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function Ho(i,e){i.seq.push(e),i.map[e.id]=e}function L0(i,e,t){const n=i.name,r=n.length;for(Da.lastIndex=0;;){const a=Da.exec(n),o=Da.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Ho(t,c===void 0?new P0(s,i,e):new C0(s,i,e));break}else{let u=t.map[s];u===void 0&&(u=new D0(s),Ho(t,u)),t=u}}}class Wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);L0(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Go(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const U0=37297;let F0=0;function I0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}const Vo=new je;function N0(i){it._getMatrix(Vo,it.workingColorSpace,i);const e=`mat3( ${Vo.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Yr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+I0(i.getShaderSource(e),s)}else return a}function O0(i,e){const t=N0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function B0(i,e){let t;switch(e){case E3:t="Linear";break;case T3:t="Reinhard";break;case b3:t="Cineon";break;case A3:t="ACESFilmic";break;case R3:t="AgX";break;case P3:t="Neutral";break;case w3:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Or=new W;function z0(){it.getLuminanceCoefficients(Or);const i=Or.x.toFixed(4),e=Or.y.toFixed(4),t=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function H0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function G0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function Ki(i){return i!==""}function Xo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _1(i){return i.replace(V0,X0)}const W0=new Map;function X0(i,e){let t=Ze[e];if(t===void 0){const n=W0.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _1(t)}const q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yo(i){return i.replace(q0,Y0)}function Y0(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function jo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ts?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===n3?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function K0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Ni:e="ENVMAP_TYPE_CUBE";break;case Kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function J0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case E1:e="ENVMAP_BLENDING_MULTIPLY";break;case M3:e="ENVMAP_BLENDING_MIX";break;case S3:e="ENVMAP_BLENDING_ADD";break}return e}function Q0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $0(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=j0(t),c=K0(t),f=Z0(t),u=J0(t),h=Q0(t),m=k0(t),y=H0(a),_=r.createProgram();let g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ki).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ki).join(`
`),d.length>0&&(d+=`
`)):(g=[jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),d=[jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Xn?B0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,O0("linearToOutputTexel",t.outputColorSpace),z0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),o=_1(o),o=Xo(o,t),o=qo(o,t),s=_1(s),s=Xo(s,t),s=qo(s,t),o=Yo(o),s=Yo(s),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=x+g+o,E=x+d+s,P=Go(r,r.VERTEX_SHADER,v),A=Go(r,r.FRAGMENT_SHADER,E);r.attachShader(_,P),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(w){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(P)||"",N=r.getShaderInfoLog(A)||"",Y=B.trim(),V=k.trim(),j=N.trim();let I=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,P,A);else{const $=Wo(r,P,"vertex"),oe=Wo(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+Y+`
`+$+`
`+oe)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(V===""||j==="")&&(Z=!1);Z&&(w.diagnostics={runnable:I,programLog:Y,vertexShader:{log:V,prefix:g},fragmentShader:{log:j,prefix:d}})}r.deleteShader(P),r.deleteShader(A),L=new Wr(r,_),M=G0(r,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,U0)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let e6=0;class t6{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new n6(e),t.set(e,n)),n}}class n6{constructor(e){this.id=e6++,this.code=e,this.usedTimes=0}}function i6(i,e,t,n,r,a,o){const s=new ms,l=new t6,c=new Set,f=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,T,w,B,k){const N=B.fog,Y=k.geometry,V=M.isMeshStandardMaterial?B.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),I=j&&j.mapping===Kr?j.image.height:null,Z=y[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const $=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=$!==void 0?$.length:0;let ce=0;Y.morphAttributes.position!==void 0&&(ce=1),Y.morphAttributes.normal!==void 0&&(ce=2),Y.morphAttributes.color!==void 0&&(ce=3);let be,Ae,H,ee;if(Z){const st=hn[Z];be=st.vertexShader,Ae=st.fragmentShader}else be=M.vertexShader,Ae=M.fragmentShader,l.update(M),H=l.getVertexShaderID(M),ee=l.getFragmentShaderID(M);const ne=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),ve=k.isInstancedMesh===!0,Le=k.isBatchedMesh===!0,ft=!!M.map,qe=!!M.matcap,U=!!j,ot=!!M.aoMap,Ie=!!M.lightMap,rt=!!M.bumpMap,Ue=!!M.normalMap,mt=!!M.displacementMap,Ee=!!M.emissiveMap,Je=!!M.metalnessMap,Rt=!!M.roughnessMap,St=M.anisotropy>0,C=M.clearcoat>0,S=M.dispersion>0,G=M.iridescence>0,J=M.sheen>0,te=M.transmission>0,K=St&&!!M.anisotropyMap,De=C&&!!M.clearcoatMap,ue=C&&!!M.clearcoatNormalMap,Re=C&&!!M.clearcoatRoughnessMap,Pe=G&&!!M.iridescenceMap,se=G&&!!M.iridescenceThicknessMap,ye=J&&!!M.sheenColorMap,ze=J&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,ge=!!M.specularColorMap,Ye=!!M.specularIntensityMap,F=te&&!!M.transmissionMap,le=te&&!!M.thicknessMap,de=!!M.gradientMap,Se=!!M.alphaMap,re=M.alphaTest>0,Q=!!M.alphaHash,we=!!M.extensions;let We=Xn;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(We=i.toneMapping);const ht={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:be,fragmentShader:Ae,defines:M.defines,customVertexShaderID:H,customFragmentShaderID:ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Le,batchingColor:Le&&k._colorsTexture!==null,instancing:ve,instancingColor:ve&&k.instanceColor!==null,instancingMorph:ve&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Oi,alphaToCoverage:!!M.alphaToCoverage,map:ft,matcap:qe,envMap:U,envMapMode:U&&j.mapping,envMapCubeUVHeight:I,aoMap:ot,lightMap:Ie,bumpMap:rt,normalMap:Ue,displacementMap:h&&mt,emissiveMap:Ee,normalMapObjectSpace:Ue&&M.normalMapType===U3,normalMapTangentSpace:Ue&&M.normalMapType===ds,metalnessMap:Je,roughnessMap:Rt,anisotropy:St,anisotropyMap:K,clearcoat:C,clearcoatMap:De,clearcoatNormalMap:ue,clearcoatRoughnessMap:Re,dispersion:S,iridescence:G,iridescenceMap:Pe,iridescenceThicknessMap:se,sheen:J,sheenColorMap:ye,sheenRoughnessMap:ze,specularMap:Ce,specularColorMap:ge,specularIntensityMap:Ye,transmission:te,transmissionMap:F,thicknessMap:le,gradientMap:de,opaque:M.transparent===!1&&M.blending===Di&&M.alphaToCoverage===!1,alphaMap:Se,alphaTest:re,alphaHash:Q,combine:M.combine,mapUv:ft&&_(M.map.channel),aoMapUv:ot&&_(M.aoMap.channel),lightMapUv:Ie&&_(M.lightMap.channel),bumpMapUv:rt&&_(M.bumpMap.channel),normalMapUv:Ue&&_(M.normalMap.channel),displacementMapUv:mt&&_(M.displacementMap.channel),emissiveMapUv:Ee&&_(M.emissiveMap.channel),metalnessMapUv:Je&&_(M.metalnessMap.channel),roughnessMapUv:Rt&&_(M.roughnessMap.channel),anisotropyMapUv:K&&_(M.anisotropyMap.channel),clearcoatMapUv:De&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&_(M.sheenRoughnessMap.channel),specularMapUv:Ce&&_(M.specularMap.channel),specularColorMapUv:ge&&_(M.specularColorMap.channel),specularIntensityMapUv:Ye&&_(M.specularIntensityMap.channel),transmissionMapUv:F&&_(M.transmissionMap.channel),thicknessMapUv:le&&_(M.thicknessMap.channel),alphaMapUv:Se&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ue||St),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(ft||Se),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:ft&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===ut,decodeVideoTextureEmissive:Ee&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ln,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:we&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&M.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)T.push(w),T.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(x(T,M),v(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){s.disableAll(),T.supportsVertexTextures&&s.enable(0),T.instancing&&s.enable(1),T.instancingColor&&s.enable(2),T.instancingMorph&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),T.alphaHash&&s.enable(18),T.batching&&s.enable(19),T.dispersion&&s.enable(20),T.batchingColor&&s.enable(21),T.gradientMap&&s.enable(22),M.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),M.push(s.mask)}function E(M){const T=y[M.type];let w;if(T){const B=hn[T];w=T4.clone(B.uniforms)}else w=M.uniforms;return w}function P(M,T){let w;for(let B=0,k=f.length;B<k;B++){const N=f[B];if(N.cacheKey===T){w=N,++w.usedTimes;break}}return w===void 0&&(w=new $0(i,T,M,a),f.push(w)),w}function A(M){if(--M.usedTimes===0){const T=f.indexOf(M);f[T]=f[f.length-1],f.pop(),M.destroy()}}function R(M){l.remove(M)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:E,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:f,dispose:L}}function r6(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let s=i.get(o);return s===void 0&&(s={},i.set(o,s)),s}function n(o){i.delete(o)}function r(o,s,l){i.get(o)[s]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function a6(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ko(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zo(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(u,h,m,y,_,g){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:m,groupOrder:y,renderOrder:u.renderOrder,z:_,group:g},i[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=m,d.groupOrder=y,d.renderOrder=u.renderOrder,d.z=_,d.group=g),e++,d}function s(u,h,m,y,_,g){const d=o(u,h,m,y,_,g);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(u,h,m,y,_,g){const d=o(u,h,m,y,_,g);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,h){t.length>1&&t.sort(u||a6),n.length>1&&n.sort(h||Ko),r.length>1&&r.sort(h||Ko)}function f(){for(let u=e,h=i.length;u<h;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:l,finish:f,sort:c}}function o6(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new Zo,i.set(n,[o])):r>=a.length?(o=new Zo,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function s6(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new tt};break;case"SpotLight":t={position:new W,direction:new W,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function l6(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let c6=0;function u6(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d6(i){const e=new s6,t=l6(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const r=new W,a=new Et,o=new Et;function s(c){let f=0,u=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,y=0,_=0,g=0,d=0,x=0,v=0,E=0,P=0,A=0,R=0;c.sort(u6);for(let M=0,T=c.length;M<T;M++){const w=c[M],B=w.color,k=w.intensity,N=w.distance,Y=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=B.r*k,u+=B.g*k,h+=B.b*k;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],k);R++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,I=t.get(w);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,n.directionalShadow[m]=I,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=w.shadow.matrix,x++}n.directional[m]=V,m++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(B).multiplyScalar(k),V.distance=N,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[_]=V;const j=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,j.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[_]=j.matrix,w.castShadow){const I=t.get(w);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=Y,E++}_++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(B).multiplyScalar(k),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=V,g++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const j=w.shadow,I=t.get(w);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,I.shadowCameraNear=j.camera.near,I.shadowCameraFar=j.camera.far,n.pointShadow[y]=I,n.pointShadowMap[y]=Y,n.pointShadowMatrix[y]=w.shadow.matrix,v++}n.point[y]=V,y++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(k),V.groundColor.copy(w.groundColor).multiplyScalar(k),n.hemi[d]=V,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==m||L.pointLength!==y||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==d||L.numDirectionalShadows!==x||L.numPointShadows!==v||L.numSpotShadows!==E||L.numSpotMaps!==P||L.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=g,n.point.length=y,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=E+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,L.directionalLength=m,L.pointLength=y,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=d,L.numDirectionalShadows=x,L.numPointShadows=v,L.numSpotShadows=E,L.numSpotMaps=P,L.numLightProbes=R,n.version=c6++)}function l(c,f){let u=0,h=0,m=0,y=0,_=0;const g=f.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const v=c[d];if(v.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),u++}else if(v.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const E=n.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),o.identity(),a.copy(v.matrixWorld),a.premultiply(g),o.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),_++}}}return{setup:s,setupView:l,state:n}}function Jo(i){const e=new d6(i),t=[],n=[];function r(f){c.camera=f,t.length=0,n.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function s(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function f6(i){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let s;return o===void 0?(s=new Jo(i),e.set(r,[s])):a>=o.length?(s=new Jo(i),o.push(s)):s=o[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}const h6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p6=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function m6(i,e,t){let n=new U1;const r=new at,a=new at,o=new Mt,s=new I4({depthPacking:L3}),l=new N4,c={},f=t.maxTextureSize,u={[qn]:Yt,[Yt]:qn,[Ln]:Ln},h=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:h6,fragmentShader:p6}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new jn;y.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gn(y,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ts;let d=this.type;this.render=function(A,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),T=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Wn),B.buffers.depth.getReversed()?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=d!==Cn&&this.type===Cn,N=d===Cn&&this.type!==Cn;for(let Y=0,V=A.length;Y<V;Y++){const j=A[Y],I=j.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Z=I.getFrameExtents();if(r.multiply(Z),a.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(a.x=Math.floor(f/Z.x),r.x=a.x*Z.x,I.mapSize.x=a.x),r.y>f&&(a.y=Math.floor(f/Z.y),r.y=a.y*Z.y,I.mapSize.y=a.y)),I.map===null||k===!0||N===!0){const oe=this.type!==Cn?{minFilter:ln,magFilter:ln}:{};I.map!==null&&I.map.dispose(),I.map=new ui(r.x,r.y,oe),I.map.texture.name=j.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();const $=I.getViewportCount();for(let oe=0;oe<$;oe++){const ce=I.getViewport(oe);o.set(a.x*ce.x,a.y*ce.y,a.x*ce.z,a.y*ce.w),B.viewport(o),I.updateMatrices(j,oe),n=I.getFrustum(),E(R,L,I.camera,j,this.type)}I.isPointLightShadow!==!0&&this.type===Cn&&x(I,L),I.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(M,T,w)};function x(A,R){const L=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ui(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,L,h,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,L,m,_,null)}function v(A,R,L,M){let T=null;const w=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)T=w;else if(T=L.isPointLight===!0?l:s,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=T.uuid,k=R.uuid;let N=c[B];N===void 0&&(N={},c[B]=N);let Y=N[k];Y===void 0&&(Y=T.clone(),N[k]=Y,R.addEventListener("dispose",P)),T=Y}if(T.visible=R.visible,T.wireframe=R.wireframe,M===Cn?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:u[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const B=i.properties.get(T);B.light=L}return T}function E(A,R,L,M,T){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Cn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const k=e.update(A),N=A.material;if(Array.isArray(N)){const Y=k.groups;for(let V=0,j=Y.length;V<j;V++){const I=Y[V],Z=N[I.materialIndex];if(Z&&Z.visible){const $=v(A,Z,M,T);A.onBeforeShadow(i,A,R,L,k,$,I),i.renderBufferDirect(L,null,k,$,A,I),A.onAfterShadow(i,A,R,L,k,$,I)}}}else if(N.visible){const Y=v(A,N,M,T);A.onBeforeShadow(i,A,R,L,k,Y,null),i.renderBufferDirect(L,null,k,Y,A,null),A.onAfterShadow(i,A,R,L,k,Y,null)}}const B=A.children;for(let k=0,N=B.length;k<N;k++)E(B[k],R,L,M,T)}function P(A){A.target.removeEventListener("dispose",P);for(const L in c){const M=c[L],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const g6={[Fa]:Ia,[Na]:za,[Oa]:ka,[Fi]:Ba,[Ia]:Fa,[za]:Na,[ka]:Oa,[Ba]:Fi};function _6(i,e){function t(){let F=!1;const le=new Mt;let de=null;const Se=new Mt(0,0,0,0);return{setMask:function(re){de!==re&&!F&&(i.colorMask(re,re,re,re),de=re)},setLocked:function(re){F=re},setClear:function(re,Q,we,We,ht){ht===!0&&(re*=We,Q*=We,we*=We),le.set(re,Q,we,We),Se.equals(le)===!1&&(i.clearColor(re,Q,we,We),Se.copy(le))},reset:function(){F=!1,de=null,Se.set(-1,0,0,0)}}}function n(){let F=!1,le=!1,de=null,Se=null,re=null;return{setReversed:function(Q){if(le!==Q){const we=e.get("EXT_clip_control");Q?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),le=Q;const We=re;re=null,this.setClear(We)}},getReversed:function(){return le},setTest:function(Q){Q?ne(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(Q){de!==Q&&!F&&(i.depthMask(Q),de=Q)},setFunc:function(Q){if(le&&(Q=g6[Q]),Se!==Q){switch(Q){case Fa:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=Q}},setLocked:function(Q){F=Q},setClear:function(Q){re!==Q&&(le&&(Q=1-Q),i.clearDepth(Q),re=Q)},reset:function(){F=!1,de=null,Se=null,re=null,le=!1}}}function r(){let F=!1,le=null,de=null,Se=null,re=null,Q=null,we=null,We=null,ht=null;return{setTest:function(st){F||(st?ne(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(st){le!==st&&!F&&(i.stencilMask(st),le=st)},setFunc:function(st,Tn,fn){(de!==st||Se!==Tn||re!==fn)&&(i.stencilFunc(st,Tn,fn),de=st,Se=Tn,re=fn)},setOp:function(st,Tn,fn){(Q!==st||we!==Tn||We!==fn)&&(i.stencilOp(st,Tn,fn),Q=st,we=Tn,We=fn)},setLocked:function(st){F=st},setClear:function(st){ht!==st&&(i.clearStencil(st),ht=st)},reset:function(){F=!1,le=null,de=null,Se=null,re=null,Q=null,we=null,We=null,ht=null}}}const a=new t,o=new n,s=new r,l=new WeakMap,c=new WeakMap;let f={},u={},h=new WeakMap,m=[],y=null,_=!1,g=null,d=null,x=null,v=null,E=null,P=null,A=null,R=new tt(0,0,0),L=0,M=!1,T=null,w=null,B=null,k=null,N=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(I)[1]),V=j>=1):I.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),V=j>=2);let Z=null,$={};const oe=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),be=new Mt().fromArray(oe),Ae=new Mt().fromArray(ce);function H(F,le,de,Se){const re=new Uint8Array(4),Q=i.createTexture();i.bindTexture(F,Q),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<de;we++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(le+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return Q}const ee={};ee[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ne(i.DEPTH_TEST),o.setFunc(Fi),rt(!1),Ue(J1),ne(i.CULL_FACE),ot(Wn);function ne(F){f[F]!==!0&&(i.enable(F),f[F]=!0)}function he(F){f[F]!==!1&&(i.disable(F),f[F]=!1)}function ve(F,le){return u[F]!==le?(i.bindFramebuffer(F,le),u[F]=le,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Le(F,le){let de=m,Se=!1;if(F){de=h.get(le),de===void 0&&(de=[],h.set(le,de));const re=F.textures;if(de.length!==re.length||de[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,we=re.length;Q<we;Q++)de[Q]=i.COLOR_ATTACHMENT0+Q;de.length=re.length,Se=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Se=!0);Se&&i.drawBuffers(de)}function ft(F){return y!==F?(i.useProgram(F),y=F,!0):!1}const qe={[ai]:i.FUNC_ADD,[r3]:i.FUNC_SUBTRACT,[a3]:i.FUNC_REVERSE_SUBTRACT};qe[o3]=i.MIN,qe[s3]=i.MAX;const U={[l3]:i.ZERO,[c3]:i.ONE,[u3]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[g3]:i.SRC_ALPHA_SATURATE,[p3]:i.DST_COLOR,[f3]:i.DST_ALPHA,[d3]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[m3]:i.ONE_MINUS_DST_COLOR,[h3]:i.ONE_MINUS_DST_ALPHA,[_3]:i.CONSTANT_COLOR,[v3]:i.ONE_MINUS_CONSTANT_COLOR,[y3]:i.CONSTANT_ALPHA,[x3]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(F,le,de,Se,re,Q,we,We,ht,st){if(F===Wn){_===!0&&(he(i.BLEND),_=!1);return}if(_===!1&&(ne(i.BLEND),_=!0),F!==i3){if(F!==g||st!==M){if((d!==ai||E!==ai)&&(i.blendEquation(i.FUNC_ADD),d=ai,E=ai),st)switch(F){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Q1:i.blendFunc(i.ONE,i.ONE);break;case $1:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Q1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $1:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,v=null,P=null,A=null,R.set(0,0,0),L=0,g=F,M=st}return}re=re||le,Q=Q||de,we=we||Se,(le!==d||re!==E)&&(i.blendEquationSeparate(qe[le],qe[re]),d=le,E=re),(de!==x||Se!==v||Q!==P||we!==A)&&(i.blendFuncSeparate(U[de],U[Se],U[Q],U[we]),x=de,v=Se,P=Q,A=we),(We.equals(R)===!1||ht!==L)&&(i.blendColor(We.r,We.g,We.b,ht),R.copy(We),L=ht),g=F,M=!1}function Ie(F,le){F.side===Ln?he(i.CULL_FACE):ne(i.CULL_FACE);let de=F.side===Yt;le&&(de=!de),rt(de),F.blending===Di&&F.transparent===!1?ot(Wn):ot(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),a.setMask(F.colorWrite);const Se=F.stencilWrite;s.setTest(Se),Se&&(s.setMask(F.stencilWriteMask),s.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),s.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ee(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(F){T!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),T=F)}function Ue(F){F!==e3?(ne(i.CULL_FACE),F!==w&&(F===J1?i.cullFace(i.BACK):F===t3?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),w=F}function mt(F){F!==B&&(V&&i.lineWidth(F),B=F)}function Ee(F,le,de){F?(ne(i.POLYGON_OFFSET_FILL),(k!==le||N!==de)&&(i.polygonOffset(le,de),k=le,N=de)):he(i.POLYGON_OFFSET_FILL)}function Je(F){F?ne(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function Rt(F){F===void 0&&(F=i.TEXTURE0+Y-1),Z!==F&&(i.activeTexture(F),Z=F)}function St(F,le,de){de===void 0&&(Z===null?de=i.TEXTURE0+Y-1:de=Z);let Se=$[de];Se===void 0&&(Se={type:void 0,texture:void 0},$[de]=Se),(Se.type!==F||Se.texture!==le)&&(Z!==de&&(i.activeTexture(de),Z=de),i.bindTexture(F,le||ee[F]),Se.type=F,Se.texture=le)}function C(){const F=$[Z];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(F){be.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),be.copy(F))}function ze(F){Ae.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ae.copy(F))}function Ce(F,le){let de=c.get(le);de===void 0&&(de=new WeakMap,c.set(le,de));let Se=de.get(F);Se===void 0&&(Se=i.getUniformBlockIndex(le,F.name),de.set(F,Se))}function ge(F,le){const Se=c.get(le).get(F);l.get(le)!==Se&&(i.uniformBlockBinding(le,Se,F.__bindingPointIndex),l.set(le,Se))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Z=null,$={},u={},h=new WeakMap,m=[],y=null,_=!1,g=null,d=null,x=null,v=null,E=null,P=null,A=null,R=new tt(0,0,0),L=0,M=!1,T=null,w=null,B=null,k=null,N=null,be.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ne,disable:he,bindFramebuffer:ve,drawBuffers:Le,useProgram:ft,setBlending:ot,setMaterial:Ie,setFlipSided:rt,setCullFace:Ue,setLineWidth:mt,setPolygonOffset:Ee,setScissorTest:Je,activeTexture:Rt,bindTexture:St,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Pe,texImage3D:se,updateUBOMapping:Ce,uniformBlockBinding:ge,texStorage2D:ue,texStorage3D:Re,texSubImage2D:J,texSubImage3D:te,compressedTexSubImage2D:K,compressedTexSubImage3D:De,scissor:ye,viewport:ze,reset:Ye}}function v6(i,e,t,n,r,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,f=new WeakMap;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,S){return m?new OffscreenCanvas(C,S):ar("canvas")}function _(C,S,G){let J=1;const te=St(C);if((te.width>G||te.height>G)&&(J=G/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(J*te.width),De=Math.floor(J*te.height);u===void 0&&(u=y(K,De));const ue=S?y(K,De):u;return ue.width=K,ue.height=De,ue.getContext("2d").drawImage(C,0,0,K,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+De+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function g(C){return C.generateMipmaps}function d(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,S,G,J,te=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=S;if(S===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),S===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),S===i.RGBA){const De=te?Yr:it.getTransfer(J);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=De===ut?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(C,S){let G;return C?S===null||S===ci||S===tr?G=i.DEPTH24_STENCIL8:S===Un?G=i.DEPTH32F_STENCIL8:S===er&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ci||S===tr?G=i.DEPTH_COMPONENT24:S===Un?G=i.DEPTH_COMPONENT32F:S===er&&(G=i.DEPTH_COMPONENT16),G}function P(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==pn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),L(S),S.isVideoTexture&&f.delete(S)}function R(C){const S=C.target;S.removeEventListener("dispose",R),T(S)}function L(C){const S=n.get(C);if(S.__webglInit===void 0)return;const G=C.source,J=h.get(G);if(J){const te=J[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&M(C),Object.keys(J).length===0&&h.delete(G)}n.remove(C)}function M(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const G=C.source,J=h.get(G);delete J[S.__cacheKey],o.memory.textures--}function T(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let te=0;te<S.__webglFramebuffer[J].length;te++)i.deleteFramebuffer(S.__webglFramebuffer[J][te]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=C.textures;for(let J=0,te=G.length;J<te;J++){const K=n.get(G[J]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(C)}let w=0;function B(){w=0}function k(){const C=w;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),w+=1,C}function N(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Y(C,S){const G=n.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(G,C,S);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function V(C,S){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ee(G,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function j(C,S){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ee(G,C,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function I(C,S){const G=n.get(C);if(C.version>0&&G.__version!==C.version){ne(G,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const Z={[Va]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},$={[ln]:i.NEAREST,[C3]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[ta]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},oe={[F3]:i.NEVER,[k3]:i.ALWAYS,[I3]:i.LESS,[fs]:i.LEQUAL,[N3]:i.EQUAL,[z3]:i.GEQUAL,[O3]:i.GREATER,[B3]:i.NOTEQUAL};function ce(C,S){if(S.type===Un&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===pn||S.magFilter===ta||S.magFilter===gr||S.magFilter===li||S.minFilter===pn||S.minFilter===ta||S.minFilter===gr||S.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Z[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Z[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Z[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,$[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,$[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ln||S.minFilter!==gr&&S.minFilter!==li||S.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function be(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const J=S.source;let te=h.get(J);te===void 0&&(te={},h.set(J,te));const K=N(S);if(K!==C.__cacheKey){te[K]===void 0&&(te[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[K].usedTimes++;const De=te[C.__cacheKey];De!==void 0&&(te[C.__cacheKey].usedTimes--,De.usedTimes===0&&M(S)),C.__cacheKey=K,C.__webglTexture=te[K].texture}return G}function Ae(C,S,G){return Math.floor(Math.floor(C/G)/S)}function H(C,S,G,J){const K=C.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,G,J,S.data);else{K.sort((se,ye)=>se.start-ye.start);let De=0;for(let se=1;se<K.length;se++){const ye=K[De],ze=K[se],Ce=ye.start+ye.count,ge=Ae(ze.start,S.width,4),Ye=Ae(ye.start,S.width,4);ze.start<=Ce+1&&ge===Ye&&Ae(ze.start+ze.count-1,S.width,4)===ge?ye.count=Math.max(ye.count,ze.start+ze.count-ye.start):(++De,K[De]=ze)}K.length=De+1;const ue=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Pe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let se=0,ye=K.length;se<ye;se++){const ze=K[se],Ce=Math.floor(ze.start/4),ge=Math.ceil(ze.count/4),Ye=Ce%S.width,F=Math.floor(Ce/S.width),le=ge,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ye,F,le,de,G,J,S.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function ee(C,S,G){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const te=be(C,S),K=S.source;t.bindTexture(J,C.__webglTexture,i.TEXTURE0+G);const De=n.get(K);if(K.version!==De.__version||te===!0){t.activeTexture(i.TEXTURE0+G);const ue=it.getPrimaries(it.workingColorSpace),Re=S.colorSpace===Vn?null:it.getPrimaries(S.colorSpace),Pe=S.colorSpace===Vn||ue===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let se=_(S.image,!1,r.maxTextureSize);se=Rt(S,se);const ye=a.convert(S.format,S.colorSpace),ze=a.convert(S.type);let Ce=v(S.internalFormat,ye,ze,S.colorSpace,S.isVideoTexture);ce(J,S);let ge;const Ye=S.mipmaps,F=S.isVideoTexture!==!0,le=De.__version===void 0||te===!0,de=K.dataReady,Se=P(S,se);if(S.isDepthTexture)Ce=E(S.format===ir,S.type),le&&(F?t.texStorage2D(i.TEXTURE_2D,1,Ce,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ce,se.width,se.height,0,ye,ze,null));else if(S.isDataTexture)if(Ye.length>0){F&&le&&t.texStorage2D(i.TEXTURE_2D,Se,Ce,Ye[0].width,Ye[0].height);for(let re=0,Q=Ye.length;re<Q;re++)ge=Ye[re],F?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,ye,ze,ge.data):t.texImage2D(i.TEXTURE_2D,re,Ce,ge.width,ge.height,0,ye,ze,ge.data);S.generateMipmaps=!1}else F?(le&&t.texStorage2D(i.TEXTURE_2D,Se,Ce,se.width,se.height),de&&H(S,se,ye,ze)):t.texImage2D(i.TEXTURE_2D,0,Ce,se.width,se.height,0,ye,ze,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ce,Ye[0].width,Ye[0].height,se.depth);for(let re=0,Q=Ye.length;re<Q;re++)if(ge=Ye[re],S.format!==sn)if(ye!==null)if(F){if(de)if(S.layerUpdates.size>0){const we=wo(ge.width,ge.height,S.format,S.type);for(const We of S.layerUpdates){const ht=ge.data.subarray(We*we/ge.data.BYTES_PER_ELEMENT,(We+1)*we/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,We,ge.width,ge.height,1,ye,ht)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,se.depth,ye,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Ce,ge.width,ge.height,se.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,se.depth,ye,ze,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Ce,ge.width,ge.height,se.depth,0,ye,ze,ge.data)}else{F&&le&&t.texStorage2D(i.TEXTURE_2D,Se,Ce,Ye[0].width,Ye[0].height);for(let re=0,Q=Ye.length;re<Q;re++)ge=Ye[re],S.format!==sn?ye!==null?F?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Ce,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,ye,ze,ge.data):t.texImage2D(i.TEXTURE_2D,re,Ce,ge.width,ge.height,0,ye,ze,ge.data)}else if(S.isDataArrayTexture)if(F){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ce,se.width,se.height,se.depth),de)if(S.layerUpdates.size>0){const re=wo(se.width,se.height,S.format,S.type);for(const Q of S.layerUpdates){const we=se.data.subarray(Q*re/se.data.BYTES_PER_ELEMENT,(Q+1)*re/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,ye,ze,we)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ye,ze,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,se.width,se.height,se.depth,0,ye,ze,se.data);else if(S.isData3DTexture)F?(le&&t.texStorage3D(i.TEXTURE_3D,Se,Ce,se.width,se.height,se.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ye,ze,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,se.width,se.height,se.depth,0,ye,ze,se.data);else if(S.isFramebufferTexture){if(le)if(F)t.texStorage2D(i.TEXTURE_2D,Se,Ce,se.width,se.height);else{let re=se.width,Q=se.height;for(let we=0;we<Se;we++)t.texImage2D(i.TEXTURE_2D,we,Ce,re,Q,0,ye,ze,null),re>>=1,Q>>=1}}else if(Ye.length>0){if(F&&le){const re=St(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Se,Ce,re.width,re.height)}for(let re=0,Q=Ye.length;re<Q;re++)ge=Ye[re],F?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ye,ze,ge):t.texImage2D(i.TEXTURE_2D,re,Ce,ye,ze,ge);S.generateMipmaps=!1}else if(F){if(le){const re=St(se);t.texStorage2D(i.TEXTURE_2D,Se,Ce,re.width,re.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,ze,se)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ye,ze,se);g(S)&&d(J),De.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ne(C,S,G){if(S.image.length!==6)return;const J=be(C,S),te=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);const K=n.get(te);if(te.version!==K.__version||J===!0){t.activeTexture(i.TEXTURE0+G);const De=it.getPrimaries(it.workingColorSpace),ue=S.colorSpace===Vn?null:it.getPrimaries(S.colorSpace),Re=S.colorSpace===Vn||De===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let Q=0;Q<6;Q++)!Pe&&!se?ye[Q]=_(S.image[Q],!0,r.maxCubemapSize):ye[Q]=se?S.image[Q].image:S.image[Q],ye[Q]=Rt(S,ye[Q]);const ze=ye[0],Ce=a.convert(S.format,S.colorSpace),ge=a.convert(S.type),Ye=v(S.internalFormat,Ce,ge,S.colorSpace),F=S.isVideoTexture!==!0,le=K.__version===void 0||J===!0,de=te.dataReady;let Se=P(S,ze);ce(i.TEXTURE_CUBE_MAP,S);let re;if(Pe){F&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ye,ze.width,ze.height);for(let Q=0;Q<6;Q++){re=ye[Q].mipmaps;for(let we=0;we<re.length;we++){const We=re[we];S.format!==sn?Ce!==null?F?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,We.width,We.height,Ce,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Ye,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,We.width,We.height,Ce,ge,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Ye,We.width,We.height,0,Ce,ge,We.data)}}}else{if(re=S.mipmaps,F&&le){re.length>0&&Se++;const Q=St(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ye,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ye[Q].width,ye[Q].height,Ce,ge,ye[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,ye[Q].width,ye[Q].height,0,Ce,ge,ye[Q].data);for(let we=0;we<re.length;we++){const ht=re[we].image[Q].image;F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,ht.width,ht.height,Ce,ge,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Ye,ht.width,ht.height,0,Ce,ge,ht.data)}}else{F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,ge,ye[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,Ce,ge,ye[Q]);for(let we=0;we<re.length;we++){const We=re[we];F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,Ce,ge,We.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Ye,Ce,ge,We.image[Q])}}}g(S)&&d(i.TEXTURE_CUBE_MAP),K.__version=te.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function he(C,S,G,J,te,K){const De=a.convert(G.format,G.colorSpace),ue=a.convert(G.type),Re=v(G.internalFormat,De,ue,G.colorSpace),Pe=n.get(S),se=n.get(G);if(se.__renderTarget=S,!Pe.__hasExternalTextures){const ye=Math.max(1,S.width>>K),ze=Math.max(1,S.height>>K);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,K,Re,ye,ze,S.depth,0,De,ue,null):t.texImage2D(te,K,Re,ye,ze,0,De,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ee(S)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,te,se.__webglTexture,0,mt(S)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,te,se.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(C,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const J=S.depthTexture,te=J&&J.isDepthTexture?J.type:null,K=E(S.stencilBuffer,te),De=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=mt(S);Ee(S)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,K,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,C)}else{const J=S.textures;for(let te=0;te<J.length;te++){const K=J[te],De=a.convert(K.format,K.colorSpace),ue=a.convert(K.type),Re=v(K.internalFormat,De,ue,K.colorSpace),Pe=mt(S);G&&Ee(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Re,S.width,S.height):Ee(S)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,Re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Re,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const te=J.__webglTexture,K=mt(S);if(S.depthTexture.format===nr)Ee(S)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(S.depthTexture.format===ir)Ee(S)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ft(C){const S=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=J}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const J=C.texture.mipmaps;J&&J.length>0?Le(S.__webglFramebuffer[0],C):Le(S.__webglFramebuffer,C)}else if(G){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),ve(S.__webglDepthbuffer[J],C,!1);else{const te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,K)}}else{const J=C.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ve(S.__webglDepthbuffer,C,!1);else{const te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(C,S,G){const J=n.get(C);S!==void 0&&he(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ft(C)}function U(C){const S=C.texture,G=n.get(C),J=n.get(S);C.addEventListener("dispose",R);const te=C.textures,K=C.isWebGLCubeRenderTarget===!0,De=te.length>1;if(De||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let Re=0;Re<S.mipmaps.length;Re++)G.__webglFramebuffer[ue][Re]=i.createFramebuffer()}else G.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)G.__webglFramebuffer[ue]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(De)for(let ue=0,Re=te.length;ue<Re;ue++){const Pe=n.get(te[ue]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ee(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const Re=te[ue];G.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const Pe=a.convert(Re.format,Re.colorSpace),se=a.convert(Re.type),ye=v(Re.internalFormat,Pe,se,Re.colorSpace,C.isXRRenderTarget===!0),ze=mt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,ye,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ce(i.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)he(G.__webglFramebuffer[ue][Re],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re);else he(G.__webglFramebuffer[ue],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(S)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ue=0,Re=te.length;ue<Re;ue++){const Pe=te[ue],se=n.get(Pe);let ye=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ye=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,se.__webglTexture),ce(ye,Pe),he(G.__webglFramebuffer,C,Pe,i.COLOR_ATTACHMENT0+ue,ye,0),g(Pe)&&d(ye)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),ce(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)he(G.__webglFramebuffer[Re],C,S,i.COLOR_ATTACHMENT0,ue,Re);else he(G.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ue,0);g(S)&&d(ue),t.unbindTexture()}C.depthBuffer&&ft(C)}function ot(C){const S=C.textures;for(let G=0,J=S.length;G<J;G++){const te=S[G];if(g(te)){const K=x(C),De=n.get(te).__webglTexture;t.bindTexture(K,De),d(K),t.unbindTexture()}}}const Ie=[],rt=[];function Ue(C){if(C.samples>0){if(Ee(C)===!1){const S=C.textures,G=C.width,J=C.height;let te=i.COLOR_BUFFER_BIT;const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(C),ue=S.length>1;if(ue)for(let Pe=0;Pe<S.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Re=C.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);const se=n.get(S[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,te,i.NEAREST),l===!0&&(Ie.length=0,rt.length=0,Ie.push(i.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ie.push(K),rt.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Pe=0;Pe<S.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);const se=n.get(S[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function mt(C){return Math.min(r.maxSamples,C.samples)}function Ee(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Je(C){const S=o.render.frame;f.get(C)!==S&&(f.set(C,S),C.update())}function Rt(C,S){const G=C.colorSpace,J=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Oi&&G!==Vn&&(it.getTransfer(G)===ut?(J!==sn||te!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function St(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=I,this.rebindTextures=qe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ee}function y6(i,e){function t(n,r=Vn){let a;const o=it.getTransfer(r);if(n===Mn)return i.UNSIGNED_BYTE;if(n===b1)return i.UNSIGNED_SHORT_4_4_4_4;if(n===A1)return i.UNSIGNED_SHORT_5_5_5_1;if(n===as)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===is)return i.BYTE;if(n===rs)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===T1)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===os)return i.ALPHA;if(n===ss)return i.RGB;if(n===sn)return i.RGBA;if(n===nr)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===ls)return i.RED;if(n===w1)return i.RED_INTEGER;if(n===cs)return i.RG;if(n===R1)return i.RG_INTEGER;if(n===P1)return i.RGBA_INTEGER;if(n===zr||n===kr||n===Hr||n===Gr)if(o===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===zr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===zr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===ja)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Xa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===Za||n===Ja)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ka||n===Za)return o===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qa||n===$a||n===e1||n===t1||n===n1||n===i1||n===r1||n===a1||n===o1||n===s1||n===l1||n===c1||n===u1||n===d1)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Qa)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===e1)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===t1)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===n1)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===i1)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===r1)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===a1)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===o1)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===s1)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===l1)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===c1)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===u1)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===d1)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vr||n===f1||n===h1)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Vr)return o===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===f1)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===h1)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===us||n===p1||n===m1||n===g1)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Vr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===p1)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===m1)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===g1)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Cs extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const x6=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M6=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class S6{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Cs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yn({vertexShader:x6,fragmentShader:M6,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new Zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E6 extends zi{constructor(e,t){super();const n=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,f=null,u=null,h=null,m=null,y=null;const _=new S6,g={},d=t.getContextAttributes();let x=null,v=null;const E=[],P=[],A=new at;let R=null;const L=new an;L.viewport=new Mt;const M=new an;M.viewport=new Mt;const T=[L,M],w=new W4;let B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=E[H];return ee===void 0&&(ee=new Sa,E[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=E[H];return ee===void 0&&(ee=new Sa,E[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=E[H];return ee===void 0&&(ee=new Sa,E[H]=ee),ee.getHandSpace()};function N(H){const ee=P.indexOf(H.inputSource);if(ee===-1)return;const ne=E[ee];ne!==void 0&&(ne.update(H.inputSource,H.frame,c||o),ne.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",V);for(let H=0;H<E.length;H++){const ee=P[H];ee!==null&&(P[H]=null,E[H].disconnect(ee))}B=null,k=null,_.reset();for(const H in g)delete g[H];e.setRenderTarget(x),m=null,h=null,u=null,r=null,v=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",V),d.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(r,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,he=null,ve=null;d.depth&&(ve=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=d.stencil?ir:nr,he=d.stencil?tr:ci);const Le={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};h=u.createProjectionLayer(Le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new ui(h.textureWidth,h.textureHeight,{format:sn,type:Mn,depthTexture:new Es(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ne={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new ui(m.framebufferWidth,m.framebufferHeight,{format:sn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),Ae.setContext(r),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(H){for(let ee=0;ee<H.removed.length;ee++){const ne=H.removed[ee],he=P.indexOf(ne);he>=0&&(P[he]=null,E[he].disconnect(ne))}for(let ee=0;ee<H.added.length;ee++){const ne=H.added[ee];let he=P.indexOf(ne);if(he===-1){for(let Le=0;Le<E.length;Le++)if(Le>=P.length){P.push(ne),he=Le;break}else if(P[Le]===null){P[Le]=ne,he=Le;break}if(he===-1)break}const ve=E[he];ve&&ve.connect(ne)}}const j=new W,I=new W;function Z(H,ee,ne){j.setFromMatrixPosition(ee.matrixWorld),I.setFromMatrixPosition(ne.matrixWorld);const he=j.distanceTo(I),ve=ee.projectionMatrix.elements,Le=ne.projectionMatrix.elements,ft=ve[14]/(ve[10]-1),qe=ve[14]/(ve[10]+1),U=(ve[9]+1)/ve[5],ot=(ve[9]-1)/ve[5],Ie=(ve[8]-1)/ve[0],rt=(Le[8]+1)/Le[0],Ue=ft*Ie,mt=ft*rt,Ee=he/(-Ie+rt),Je=Ee*-Ie;if(ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Je),H.translateZ(Ee),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ve[10]===-1)H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Rt=ft+Ee,St=qe+Ee,C=Ue-Je,S=mt+(he-Je),G=U*qe/St*Rt,J=ot*qe/St*Rt;H.projectionMatrix.makePerspective(C,S,G,J,Rt,St),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function $(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let ee=H.near,ne=H.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),w.near=M.near=L.near=ee,w.far=M.far=L.far=ne,(B!==w.near||k!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,k=w.far),w.layers.mask=H.layers.mask|6,L.layers.mask=w.layers.mask&3,M.layers.mask=w.layers.mask&5;const he=H.parent,ve=w.cameras;$(w,he);for(let Le=0;Le<ve.length;Le++)$(ve[Le],he);ve.length===2?Z(w,L,M):w.projectionMatrix.copy(L.projectionMatrix),oe(H,w,he)};function oe(H,ee,ne){ne===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(ne.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=rr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)},this.getCameraTexture=function(H){return g[H]};let ce=null;function be(H,ee){if(f=ee.getViewerPose(c||o),y=ee,f!==null){const ne=f.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let he=!1;ne.length!==w.cameras.length&&(w.cameras.length=0,he=!0);for(let qe=0;qe<ne.length;qe++){const U=ne[qe];let ot=null;if(m!==null)ot=m.getViewport(U);else{const rt=u.getViewSubImage(h,U);ot=rt.viewport,qe===0&&(e.setRenderTargetTextures(v,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(v))}let Ie=T[qe];Ie===void 0&&(Ie=new an,Ie.layers.enable(qe),Ie.viewport=new Mt,T[qe]=Ie),Ie.matrix.fromArray(U.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(U.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(ot.x,ot.y,ot.width,ot.height),qe===0&&(w.matrix.copy(Ie.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),he===!0&&w.cameras.push(Ie)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const qe=u.getDepthInformation(ne[0]);qe&&qe.isValid&&qe.texture&&_.init(qe,r.renderState)}if(ve&&ve.includes("camera-access")&&(e.state.unbindTexture(),u))for(let qe=0;qe<ne.length;qe++){const U=ne[qe].camera;if(U){let ot=g[U];ot||(ot=new Cs,g[U]=ot);const Ie=u.getCameraImage(U);ot.sourceTexture=Ie}}}for(let ne=0;ne<E.length;ne++){const he=P[ne],ve=E[ne];he!==null&&ve!==void 0&&ve.update(he,ee,c||o)}ce&&ce(H,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),y=null}const Ae=new bs;Ae.setAnimationLoop(be),this.setAnimationLoop=function(H){ce=H},this.dispose=function(){}}}const ni=new Sn,T6=new Et;function b6(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,xs(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,v,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(g,d):d.isMeshToonMaterial?(a(g,d),u(g,d)):d.isMeshPhongMaterial?(a(g,d),f(g,d)):d.isMeshStandardMaterial?(a(g,d),h(g,d),d.isMeshPhysicalMaterial&&m(g,d,E)):d.isMeshMatcapMaterial?(a(g,d),y(g,d)):d.isMeshDepthMaterial?a(g,d):d.isMeshDistanceMaterial?(a(g,d),_(g,d)):d.isMeshNormalMaterial?a(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&s(g,d)):d.isPointsMaterial?l(g,d,x,v):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Yt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Yt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),v=x.envMap,E=x.envMapRotation;v&&(g.envMap.value=v,ni.copy(E),ni.x*=-1,ni.y*=-1,ni.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),g.envMapRotation.value.setFromMatrix4(T6.makeRotationFromEuler(ni)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function s(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=v*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function A6(i,e,t,n){let r={},a={},o=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const E=v.program;n.uniformBlockBinding(x,E)}function c(x,v){let E=r[x.id];E===void 0&&(y(x),E=f(x),r[x.id]=E,x.addEventListener("dispose",g));const P=v.program;n.updateUBOMapping(x,P);const A=e.render.frame;a[x.id]!==A&&(h(x),a[x.id]=A)}function f(x){const v=u();x.__bindingPointIndex=v;const E=i.createBuffer(),P=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function u(){for(let x=0;x<s;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],E=x.uniforms,P=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,R=E.length;A<R;A++){const L=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,T=L.length;M<T;M++){const w=L[M];if(m(w,A,M,P)===!0){const B=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let Y=0;Y<k.length;Y++){const V=k[Y],j=_(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,B+N,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,N),N+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,v,E,P){const A=x.value,R=v+"_"+E;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{const L=P[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return P[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function y(x){const v=x.uniforms;let E=0;const P=16;for(let R=0,L=v.length;R<L;R++){const M=Array.isArray(v[R])?v[R]:[v[R]];for(let T=0,w=M.length;T<w;T++){const B=M[T],k=Array.isArray(B.value)?B.value:[B.value];for(let N=0,Y=k.length;N<Y;N++){const V=k[N],j=_(V),I=E%P,Z=I%j.boundary,$=I+Z;E+=Z,$!==0&&P-$<j.storage&&(E+=P-$),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=j.storage}}}const A=E%P;return A>0&&(E+=P-A),x.__size=E,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function d(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},a={}}return{bind:l,update:c,dispose:d}}class w6{constructor(e={}){const{canvas:t=i4(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const y=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1;this._outputColorSpace=qt;let A=0,R=0,L=null,M=-1,T=null;const w=new Mt,B=new Mt;let k=null;const N=new tt(0);let Y=0,V=t.width,j=t.height,I=1,Z=null,$=null;const oe=new Mt(0,0,V,j),ce=new Mt(0,0,V,j);let be=!1;const Ae=new U1;let H=!1,ee=!1;const ne=new Et,he=new W,ve=new Mt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function qe(){return L===null?I:1}let U=n;function ot(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${S1}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",re,!1),U===null){const O="webgl2";if(U=ot(O,b),U===null)throw ot(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ie,rt,Ue,mt,Ee,Je,Rt,St,C,S,G,J,te,K,De,ue,Re,Pe,se,ye,ze,Ce,ge,Ye;function F(){Ie=new Ol(U),Ie.init(),Ce=new y6(U,Ie),rt=new Cl(U,Ie,e,Ce),Ue=new _6(U,Ie),rt.reversedDepthBuffer&&h&&Ue.buffers.depth.setReversed(!0),mt=new kl(U),Ee=new r6,Je=new v6(U,Ie,Ue,Ee,rt,Ce,mt),Rt=new Ll(E),St=new Nl(E),C=new q4(U),ge=new Rl(U,C),S=new Bl(U,C,mt,ge),G=new Gl(U,S,C,mt),se=new Hl(U,rt,Je),ue=new Dl(Ee),J=new i6(E,Rt,St,Ie,rt,ge,ue),te=new b6(E,Ee),K=new o6,De=new f6(Ie),Pe=new wl(E,Rt,St,Ue,G,m,l),Re=new m6(E,G,rt),Ye=new A6(U,mt,rt,Ue),ye=new Pl(U,Ie,mt),ze=new zl(U,Ie,mt),mt.programs=J.programs,E.capabilities=rt,E.extensions=Ie,E.properties=Ee,E.renderLists=K,E.shadowMap=Re,E.state=Ue,E.info=mt}F();const le=new E6(E,U);this.xr=le,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(V,j,!1))},this.getSize=function(b){return b.set(V,j)},this.setSize=function(b,O,X=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,j=O,t.width=Math.floor(b*I),t.height=Math.floor(O*I),X===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(V*I,j*I).floor()},this.setDrawingBufferSize=function(b,O,X){V=b,j=O,I=X,t.width=Math.floor(b*X),t.height=Math.floor(O*X),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,O,X,q){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,O,X,q),Ue.viewport(w.copy(oe).multiplyScalar(I).round())},this.getScissor=function(b){return b.copy(ce)},this.setScissor=function(b,O,X,q){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,O,X,q),Ue.scissor(B.copy(ce).multiplyScalar(I).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(b){Ue.setScissorTest(be=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,X=!0){let q=0;if(b){let z=!1;if(L!==null){const ae=L.texture.format;z=ae===P1||ae===R1||ae===w1}if(z){const ae=L.texture.type,_e=ae===Mn||ae===ci||ae===er||ae===tr||ae===b1||ae===A1,Te=Pe.getClearColor(),Me=Pe.getClearAlpha(),Be=Te.r,He=Te.g,Fe=Te.b;_e?(y[0]=Be,y[1]=He,y[2]=Fe,y[3]=Me,U.clearBufferuiv(U.COLOR,0,y)):(_[0]=Be,_[1]=He,_[2]=Fe,_[3]=Me,U.clearBufferiv(U.COLOR,0,_))}else q|=U.COLOR_BUFFER_BIT}O&&(q|=U.DEPTH_BUFFER_BIT),X&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Pe.dispose(),K.dispose(),De.dispose(),Ee.dispose(),Rt.dispose(),St.dispose(),G.dispose(),ge.dispose(),Ye.dispose(),J.dispose(),le.dispose(),le.removeEventListener("sessionstart",fn),le.removeEventListener("sessionend",B1),Kn.stop()};function de(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=mt.autoReset,O=Re.enabled,X=Re.autoUpdate,q=Re.needsUpdate,z=Re.type;F(),mt.autoReset=b,Re.enabled=O,Re.autoUpdate=X,Re.needsUpdate=q,Re.type=z}function re(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Q(b){const O=b.target;O.removeEventListener("dispose",Q),we(O)}function we(b){We(b),Ee.remove(b)}function We(b){const O=Ee.get(b).programs;O!==void 0&&(O.forEach(function(X){J.releaseProgram(X)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,X,q,z,ae){O===null&&(O=Le);const _e=z.isMesh&&z.matrixWorld.determinant()<0,Te=Ds(b,O,X,q,z);Ue.setMaterial(q,_e);let Me=X.index,Be=1;if(q.wireframe===!0){if(Me=S.getWireframeAttribute(X),Me===void 0)return;Be=2}const He=X.drawRange,Fe=X.attributes.position;let $e=He.start*Be,ct=(He.start+He.count)*Be;ae!==null&&($e=Math.max($e,ae.start*Be),ct=Math.min(ct,(ae.start+ae.count)*Be)),Me!==null?($e=Math.max($e,0),ct=Math.min(ct,Me.count)):Fe!=null&&($e=Math.max($e,0),ct=Math.min(ct,Fe.count));const vt=ct-$e;if(vt<0||vt===1/0)return;ge.setup(z,q,Te,X,Me);let pt,dt=ye;if(Me!==null&&(pt=C.get(Me),dt=ze,dt.setIndex(pt)),z.isMesh)q.wireframe===!0?(Ue.setLineWidth(q.wireframeLinewidth*qe()),dt.setMode(U.LINES)):dt.setMode(U.TRIANGLES);else if(z.isLine){let Ne=q.linewidth;Ne===void 0&&(Ne=1),Ue.setLineWidth(Ne*qe()),z.isLineSegments?dt.setMode(U.LINES):z.isLineLoop?dt.setMode(U.LINE_LOOP):dt.setMode(U.LINE_STRIP)}else z.isPoints?dt.setMode(U.POINTS):z.isSprite&&dt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Li("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ne=z._multiDrawStarts,gt=z._multiDrawCounts,nt=z._multiDrawCount,jt=Me?C.get(Me).bytesPerElement:1,fi=Ee.get(q).currentProgram.getUniforms();for(let Kt=0;Kt<nt;Kt++)fi.setValue(U,"_gl_DrawID",Kt),dt.render(Ne[Kt]/jt,gt[Kt])}else if(z.isInstancedMesh)dt.renderInstances($e,vt,z.count);else if(X.isInstancedBufferGeometry){const Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,gt=Math.min(X.instanceCount,Ne);dt.renderInstances($e,vt,gt)}else dt.render($e,vt)};function ht(b,O,X){b.transparent===!0&&b.side===Ln&&b.forceSinglePass===!1?(b.side=Yt,b.needsUpdate=!0,pr(b,O,X),b.side=qn,b.needsUpdate=!0,pr(b,O,X),b.side=Ln):pr(b,O,X)}this.compile=function(b,O,X=null){X===null&&(X=b),d=De.get(X),d.init(O),v.push(d),X.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),b!==X&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const q=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ae=z.material;if(ae)if(Array.isArray(ae))for(let _e=0;_e<ae.length;_e++){const Te=ae[_e];ht(Te,X,z),q.add(Te)}else ht(ae,X,z),q.add(ae)}),d=v.pop(),q},this.compileAsync=function(b,O,X=null){const q=this.compile(b,O,X);return new Promise(z=>{function ae(){if(q.forEach(function(_e){Ee.get(_e).currentProgram.isReady()&&q.delete(_e)}),q.size===0){z(b);return}setTimeout(ae,10)}Ie.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let st=null;function Tn(b){st&&st(b)}function fn(){Kn.stop()}function B1(){Kn.start()}const Kn=new bs;Kn.setAnimationLoop(Tn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(b){st=b,le.setAnimationLoop(b),b===null?Kn.stop():Kn.start()},le.addEventListener("sessionstart",fn),le.addEventListener("sessionend",B1),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(O),O=le.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,O,L),d=De.get(b,v.length),d.init(O),v.push(d),ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ae.setFromProjectionMatrix(ne,mn,O.reversedDepth),ee=this.localClippingEnabled,H=ue.init(this.clippingPlanes,ee),g=K.get(b,x.length),g.init(),x.push(g),le.enabled===!0&&le.isPresenting===!0){const ae=E.xr.getDepthSensingMesh();ae!==null&&Qr(ae,O,-1/0,E.sortObjects)}Qr(b,O,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(Z,$),ft=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ft&&Pe.addToRenderList(g,b),this.info.render.frame++,H===!0&&ue.beginShadows();const X=d.state.shadowsArray;Re.render(X,b,O),H===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,z=g.transmissive;if(d.setupLights(),O.isArrayCamera){const ae=O.cameras;if(z.length>0)for(let _e=0,Te=ae.length;_e<Te;_e++){const Me=ae[_e];k1(q,z,b,Me)}ft&&Pe.render(b);for(let _e=0,Te=ae.length;_e<Te;_e++){const Me=ae[_e];z1(g,b,Me,Me.viewport)}}else z.length>0&&k1(q,z,b,O),ft&&Pe.render(b),z1(g,b,O);L!==null&&R===0&&(Je.updateMultisampleRenderTarget(L),Je.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(E,b,O),ge.resetDefaultState(),M=-1,T=null,v.pop(),v.length>0?(d=v[v.length-1],H===!0&&ue.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Qr(b,O,X,q){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ae.intersectsSprite(b)){q&&ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne);const _e=G.update(b),Te=b.material;Te.visible&&g.push(b,_e,Te,X,ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ae.intersectsObject(b))){const _e=G.update(b),Te=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ve.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ve.copy(_e.boundingSphere.center)),ve.applyMatrix4(b.matrixWorld).applyMatrix4(ne)),Array.isArray(Te)){const Me=_e.groups;for(let Be=0,He=Me.length;Be<He;Be++){const Fe=Me[Be],$e=Te[Fe.materialIndex];$e&&$e.visible&&g.push(b,_e,$e,X,ve.z,Fe)}}else Te.visible&&g.push(b,_e,Te,X,ve.z,null)}}const ae=b.children;for(let _e=0,Te=ae.length;_e<Te;_e++)Qr(ae[_e],O,X,q)}function z1(b,O,X,q){const z=b.opaque,ae=b.transmissive,_e=b.transparent;d.setupLightsView(X),H===!0&&ue.setGlobalState(E.clippingPlanes,X),q&&Ue.viewport(w.copy(q)),z.length>0&&hr(z,O,X),ae.length>0&&hr(ae,O,X),_e.length>0&&hr(_e,O,X),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function k1(b,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new ui(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?lr:Mn,minFilter:li,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ae=d.state.transmissionRenderTarget[q.id],_e=q.viewport||w;ae.setSize(_e.z*E.transmissionResolutionScale,_e.w*E.transmissionResolutionScale);const Te=E.getRenderTarget(),Me=E.getActiveCubeFace(),Be=E.getActiveMipmapLevel();E.setRenderTarget(ae),E.getClearColor(N),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),ft&&Pe.render(X);const He=E.toneMapping;E.toneMapping=Xn;const Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),H===!0&&ue.setGlobalState(E.clippingPlanes,q),hr(b,X,q),Je.updateMultisampleRenderTarget(ae),Je.updateRenderTargetMipmap(ae),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ct=0,vt=O.length;ct<vt;ct++){const pt=O[ct],dt=pt.object,Ne=pt.geometry,gt=pt.material,nt=pt.group;if(gt.side===Ln&&dt.layers.test(q.layers)){const jt=gt.side;gt.side=Yt,gt.needsUpdate=!0,H1(dt,X,q,Ne,gt,nt),gt.side=jt,gt.needsUpdate=!0,$e=!0}}$e===!0&&(Je.updateMultisampleRenderTarget(ae),Je.updateRenderTargetMipmap(ae))}E.setRenderTarget(Te,Me,Be),E.setClearColor(N,Y),Fe!==void 0&&(q.viewport=Fe),E.toneMapping=He}function hr(b,O,X){const q=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ae=b.length;z<ae;z++){const _e=b[z],Te=_e.object,Me=_e.geometry,Be=_e.group;let He=_e.material;He.allowOverride===!0&&q!==null&&(He=q),Te.layers.test(X.layers)&&H1(Te,O,X,Me,He,Be)}}function H1(b,O,X,q,z,ae){b.onBeforeRender(E,O,X,q,z,ae),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(E,O,X,q,b,ae),z.transparent===!0&&z.side===Ln&&z.forceSinglePass===!1?(z.side=Yt,z.needsUpdate=!0,E.renderBufferDirect(X,O,q,z,b,ae),z.side=qn,z.needsUpdate=!0,E.renderBufferDirect(X,O,q,z,b,ae),z.side=Ln):E.renderBufferDirect(X,O,q,z,b,ae),b.onAfterRender(E,O,X,q,z,ae)}function pr(b,O,X){O.isScene!==!0&&(O=Le);const q=Ee.get(b),z=d.state.lights,ae=d.state.shadowsArray,_e=z.state.version,Te=J.getParameters(b,z.state,ae,O,X),Me=J.getProgramCacheKey(Te);let Be=q.programs;q.environment=b.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(b.isMeshStandardMaterial?St:Rt).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",Q),Be=new Map,q.programs=Be);let He=Be.get(Me);if(He!==void 0){if(q.currentProgram===He&&q.lightsStateVersion===_e)return V1(b,Te),He}else Te.uniforms=J.getUniforms(b),b.onBeforeCompile(Te,E),He=J.acquireProgram(Te,Me),Be.set(Me,He),q.uniforms=Te.uniforms;const Fe=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=ue.uniform),V1(b,Te),q.needsLights=Us(b),q.lightsStateVersion=_e,q.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMap.value=z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotShadowMap.value=z.state.spotShadowMap,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMap.value=z.state.pointShadowMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=He,q.uniformsList=null,He}function G1(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Wr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function V1(b,O){const X=Ee.get(b);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Ds(b,O,X,q,z){O.isScene!==!0&&(O=Le),Je.resetTextureUnits();const ae=O.fog,_e=q.isMeshStandardMaterial?O.environment:null,Te=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Oi,Me=(q.isMeshStandardMaterial?St:Rt).get(q.envMap||_e),Be=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,He=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,ct=!!X.morphAttributes.color;let vt=Xn;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(vt=E.toneMapping);const pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=pt!==void 0?pt.length:0,Ne=Ee.get(q),gt=d.state.lights;if(H===!0&&(ee===!0||b!==T)){const kt=b===T&&q.id===M;ue.setState(q,b,kt)}let nt=!1;q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==gt.state.version||Ne.outputColorSpace!==Te||z.isBatchedMesh&&Ne.batching===!1||!z.isBatchedMesh&&Ne.batching===!0||z.isBatchedMesh&&Ne.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ne.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ne.instancing===!1||!z.isInstancedMesh&&Ne.instancing===!0||z.isSkinnedMesh&&Ne.skinning===!1||!z.isSkinnedMesh&&Ne.skinning===!0||z.isInstancedMesh&&Ne.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ne.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ne.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ne.instancingMorph===!1&&z.morphTexture!==null||Ne.envMap!==Me||q.fog===!0&&Ne.fog!==ae||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ue.numPlanes||Ne.numIntersection!==ue.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==He||Ne.morphTargets!==Fe||Ne.morphNormals!==$e||Ne.morphColors!==ct||Ne.toneMapping!==vt||Ne.morphTargetsCount!==dt)&&(nt=!0):(nt=!0,Ne.__version=q.version);let jt=Ne.currentProgram;nt===!0&&(jt=pr(q,O,z));let fi=!1,Kt=!1,Gi=!1;const _t=jt.getUniforms(),Qt=Ne.uniforms;if(Ue.useProgram(jt.program)&&(fi=!0,Kt=!0,Gi=!0),q.id!==M&&(M=q.id,Kt=!0),fi||T!==b){Ue.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),_t.setValue(U,"projectionMatrix",b.projectionMatrix),_t.setValue(U,"viewMatrix",b.matrixWorldInverse);const Xt=_t.map.cameraPosition;Xt!==void 0&&Xt.setValue(U,he.setFromMatrixPosition(b.matrixWorld)),rt.logarithmicDepthBuffer&&_t.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_t.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,Kt=!0,Gi=!0)}if(z.isSkinnedMesh){_t.setOptional(U,z,"bindMatrix"),_t.setOptional(U,z,"bindMatrixInverse");const kt=z.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),_t.setValue(U,"boneTexture",kt.boneTexture,Je))}z.isBatchedMesh&&(_t.setOptional(U,z,"batchingTexture"),_t.setValue(U,"batchingTexture",z._matricesTexture,Je),_t.setOptional(U,z,"batchingIdTexture"),_t.setValue(U,"batchingIdTexture",z._indirectTexture,Je),_t.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&_t.setValue(U,"batchingColorTexture",z._colorsTexture,Je));const $t=X.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&se.update(z,X,jt),(Kt||Ne.receiveShadow!==z.receiveShadow)&&(Ne.receiveShadow=z.receiveShadow,_t.setValue(U,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Qt.envMap.value=Me,Qt.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Qt.envMapIntensity.value=O.environmentIntensity),Kt&&(_t.setValue(U,"toneMappingExposure",E.toneMappingExposure),Ne.needsLights&&Ls(Qt,Gi),ae&&q.fog===!0&&te.refreshFogUniforms(Qt,ae),te.refreshMaterialUniforms(Qt,q,I,j,d.state.transmissionRenderTarget[b.id]),Wr.upload(U,G1(Ne),Qt,Je)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Wr.upload(U,G1(Ne),Qt,Je),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_t.setValue(U,"center",z.center),_t.setValue(U,"modelViewMatrix",z.modelViewMatrix),_t.setValue(U,"normalMatrix",z.normalMatrix),_t.setValue(U,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const kt=q.uniformsGroups;for(let Xt=0,$r=kt.length;Xt<$r;Xt++){const Zn=kt[Xt];Ye.update(Zn,jt),Ye.bind(Zn,jt)}}return jt}function Ls(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Us(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,O,X){const q=Ee.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ee.get(b.texture).__webglTexture=O,Ee.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const X=Ee.get(b);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const Fs=U.createFramebuffer();this.setRenderTarget=function(b,O=0,X=0){L=b,A=O,R=X;let q=!0,z=null,ae=!1,_e=!1;if(b){const Me=Ee.get(b);if(Me.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(Me.__webglFramebuffer===void 0)Je.setupRenderTarget(b);else if(Me.__hasExternalTextures)Je.rebindTextures(b,Ee.get(b.texture).__webglTexture,Ee.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(Me.__boundDepthTexture!==Fe){if(Fe!==null&&Ee.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(_e=!0);const He=Ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[O])?z=He[O][X]:z=He[O],ae=!0):b.samples>0&&Je.useMultisampledRTT(b)===!1?z=Ee.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[X]:z=He,w.copy(b.viewport),B.copy(b.scissor),k=b.scissorTest}else w.copy(oe).multiplyScalar(I).floor(),B.copy(ce).multiplyScalar(I).floor(),k=be;if(X!==0&&(z=Fs),Ue.bindFramebuffer(U.FRAMEBUFFER,z)&&q&&Ue.drawBuffers(b,z),Ue.viewport(w),Ue.scissor(B),Ue.setScissorTest(k),ae){const Me=Ee.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,X)}else if(_e){const Me=O;for(let Be=0;Be<b.textures.length;Be++){const He=Ee.get(b.textures[Be]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Be,He.__webglTexture,X,Me)}}else if(b!==null&&X!==0){const Me=Ee.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(b,O,X,q,z,ae,_e,Te=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){Ue.bindFramebuffer(U.FRAMEBUFFER,Me);try{const Be=b.textures[Te],He=Be.format,Fe=Be.type;if(!rt.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-q&&X>=0&&X<=b.height-z&&(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te),U.readPixels(O,X,q,z,Ce.convert(He),Ce.convert(Fe),ae))}finally{const Be=L!==null?Ee.get(L).__webglFramebuffer:null;Ue.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,O,X,q,z,ae,_e,Te=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me)if(O>=0&&O<=b.width-q&&X>=0&&X<=b.height-z){Ue.bindFramebuffer(U.FRAMEBUFFER,Me);const Be=b.textures[Te],He=Be.format,Fe=Be.type;if(!rt.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,$e),U.bufferData(U.PIXEL_PACK_BUFFER,ae.byteLength,U.STREAM_READ),b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te),U.readPixels(O,X,q,z,Ce.convert(He),Ce.convert(Fe),0);const ct=L!==null?Ee.get(L).__webglFramebuffer:null;Ue.bindFramebuffer(U.FRAMEBUFFER,ct);const vt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await r4(U,vt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,$e),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ae),U.deleteBuffer($e),U.deleteSync(vt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,X=0){const q=Math.pow(2,-X),z=Math.floor(b.image.width*q),ae=Math.floor(b.image.height*q),_e=O!==null?O.x:0,Te=O!==null?O.y:0;Je.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,_e,Te,z,ae),Ue.unbindTexture()};const Is=U.createFramebuffer(),Ns=U.createFramebuffer();this.copyTextureToTexture=function(b,O,X=null,q=null,z=0,ae=null){ae===null&&(z!==0?(Li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=z,z=0):ae=0);let _e,Te,Me,Be,He,Fe,$e,ct,vt;const pt=b.isCompressedTexture?b.mipmaps[ae]:b.image;if(X!==null)_e=X.max.x-X.min.x,Te=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,He=X.min.y,Fe=X.isBox3?X.min.z:0;else{const $t=Math.pow(2,-z);_e=Math.floor(pt.width*$t),Te=Math.floor(pt.height*$t),b.isDataArrayTexture?Me=pt.depth:b.isData3DTexture?Me=Math.floor(pt.depth*$t):Me=1,Be=0,He=0,Fe=0}q!==null?($e=q.x,ct=q.y,vt=q.z):($e=0,ct=0,vt=0);const dt=Ce.convert(O.format),Ne=Ce.convert(O.type);let gt;O.isData3DTexture?(Je.setTexture3D(O,0),gt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Je.setTexture2DArray(O,0),gt=U.TEXTURE_2D_ARRAY):(Je.setTexture2D(O,0),gt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const nt=U.getParameter(U.UNPACK_ROW_LENGTH),jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),fi=U.getParameter(U.UNPACK_SKIP_PIXELS),Kt=U.getParameter(U.UNPACK_SKIP_ROWS),Gi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,pt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),U.pixelStorei(U.UNPACK_SKIP_ROWS,He),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Fe);const _t=b.isDataArrayTexture||b.isData3DTexture,Qt=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const $t=Ee.get(b),kt=Ee.get(O),Xt=Ee.get($t.__renderTarget),$r=Ee.get(kt.__renderTarget);Ue.bindFramebuffer(U.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let Zn=0;Zn<Me;Zn++)_t&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(b).__webglTexture,z,Fe+Zn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(O).__webglTexture,ae,vt+Zn)),U.blitFramebuffer(Be,He,_e,Te,$e,ct,_e,Te,U.DEPTH_BUFFER_BIT,U.NEAREST);Ue.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||Ee.has(b)){const $t=Ee.get(b),kt=Ee.get(O);Ue.bindFramebuffer(U.READ_FRAMEBUFFER,Is),Ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ns);for(let Xt=0;Xt<Me;Xt++)_t?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$t.__webglTexture,z,Fe+Xt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$t.__webglTexture,z),Qt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,ae,vt+Xt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,kt.__webglTexture,ae),z!==0?U.blitFramebuffer(Be,He,_e,Te,$e,ct,_e,Te,U.COLOR_BUFFER_BIT,U.NEAREST):Qt?U.copyTexSubImage3D(gt,ae,$e,ct,vt+Xt,Be,He,_e,Te):U.copyTexSubImage2D(gt,ae,$e,ct,Be,He,_e,Te);Ue.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Qt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(gt,ae,$e,ct,vt,_e,Te,Me,dt,Ne,pt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(gt,ae,$e,ct,vt,_e,Te,Me,dt,pt.data):U.texSubImage3D(gt,ae,$e,ct,vt,_e,Te,Me,dt,Ne,pt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ae,$e,ct,_e,Te,dt,Ne,pt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ae,$e,ct,pt.width,pt.height,dt,pt.data):U.texSubImage2D(U.TEXTURE_2D,ae,$e,ct,_e,Te,dt,Ne,pt);U.pixelStorei(U.UNPACK_ROW_LENGTH,nt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,fi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Kt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Gi),ae===0&&O.generateMipmaps&&U.generateMipmap(gt),Ue.unbindTexture()},this.copyTextureToTexture3D=function(b,O,X=null,q=null,z=0){return Li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,X,q,z)},this.initRenderTarget=function(b){Ee.get(b).__webglFramebuffer===void 0&&Je.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Je.setTextureCube(b,0):b.isData3DTexture?Je.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Je.setTexture2DArray(b,0):Je.setTexture2D(b,0),Ue.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,Ue.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}var R6=Ke('<g><!><!><path></path><path></path><path class="annotated-area"></path><path fill="none"></path><path fill="none"></path></g>');function nu(i,e){Bt(e,!0);const t=m=>{var y=R6(),_=Ge(y);{let A=fe(()=>n()-r.top-r.bottom),R=fe(()=>e.w-r.left-r.right);yn(_,{gridType:"yGrid",get innerHeight(){return p(A)},get innerWidth(){return p(R)},get scale(){return p(s)},get ticks(){return l},get axisUnits(){return e.y_axis_units},get axisTitle(){return e.y_axis_title}})}var g=me(_);{let A=fe(()=>n()-r.top-r.bottom),R=fe(()=>e.w-r.left-r.right);yn(g,{gridType:"xGrid",get innerHeight(){return p(A)},get innerWidth(){return p(R)},get scale(){return p(a)},get ticks(){return o}})}var d=me(g);D(d,"stroke-width",0),D(d,"opacity",.3);var x=me(d);D(x,"stroke-width",0),D(x,"opacity",.2);var v=me(x);D(v,"fill","none"),D(v,"stroke-width",0);var E=me(v);D(E,"stroke-width",2);var P=me(E);D(P,"stroke-width",2),D(P,"stroke-dasharray","2 2"),Oe(y),Ve((A,R,L,M,T)=>{D(y,"transform",`translate(${r.left}, ${r.top})`),D(d,"d",A),D(d,"fill",xe.cat2),D(x,"d",R),D(x,"fill",xe.cat2),D(v,"d",L),D(E,"d",M),D(E,"stroke",xe.cat2),D(P,"d",T),D(P,"stroke",xe.cat2)},[()=>p(f)(e.data.filter(A=>A.year<2021)),()=>p(f)(e.data.filter(A=>A.year>2019)),()=>p(f)(e.data.filter(A=>A.year>2019)),()=>p(c)(e.data.filter(A=>A.year<2021)),()=>p(c)(e.data.filter(A=>A.year>2019))]),ie(m,y)};let n=Vt(e,"h",15);n(600);const r={top:24,right:24,bottom:24,left:48};let a=fe(()=>xn().domain([1980,2060]).range([0,e.w-r.left-r.right])),o=[1980,2e3,2020,2040,2060],s=fe(()=>xn().domain([0,1250]).range([n()-r.top-r.bottom,0])),l=[0,250,500,750,1e3,1231],c=fe(()=>y1().x(m=>p(a)(m.year)).y(m=>p(s)(m.value)).curve($i)),f=fe(()=>Qo().x(m=>p(a)(m.year)).y0(p(s)(0)).y1(m=>p(s)(m.value)).curve($i));var u=Xe(),h=ke(u);Ut(h,()=>e.container??Lt,()=>({svg:t})),ie(i,u),zt()}var P6=Ke('<path></path><path class="annotated-area"></path>',1),C6=Ke('<text class="middle"> </text>'),D6=Ke("<g><!><!><!><!></g>");function iu(i,e){Bt(e,!0);const t=y=>{var _=D6(),g=Ge(_);{let P=fe(()=>n()-r.top-r.bottom),A=fe(()=>e.w-r.left-r.right);yn(g,{gridType:"yGrid",get innerHeight(){return p(P)},get innerWidth(){return p(A)},get scale(){return p(s)},get ticks(){return l},get axisUnits(){return e.y_axis_units},get axisTitle(){return e.y_axis_title}})}var d=me(g);{let P=fe(()=>n()-r.top-r.bottom),A=fe(()=>e.w-r.left-r.right);yn(d,{gridType:"xGrid",get innerHeight(){return p(P)},get innerWidth(){return p(A)},get scale(){return p(a)},get ticks(){return o}})}var x=me(d);{var v=P=>{var A=Xe(),R=ke(A);yt(R,17,()=>p(c),xt,(L,M,T)=>{var w=P6(),B=ke(w);D(B,"stroke","#ffffff"),D(B,"stroke-width",1.5),D(B,"opacity",.6);var k=me(B);D(k,"stroke","white"),D(k,"stroke-width",1.5),D(k,"opacity",.6),Ve((N,Y)=>{D(B,"d",N),D(B,"fill",p(M).color),D(k,"d",Y),D(k,"fill",p(M).color)},[()=>p(u)(p(f)[T]),()=>p(u)(p(f)[T])]),ie(L,w)}),ie(P,A)};lt(x,P=>{p(f)&&P(v)})}var E=me(x);yt(E,17,()=>p(c),xt,(P,A)=>{var R=C6();let L;var M=Ge(R,!0);Oe(R),Ve(()=>{D(R,"x",p(A).x),D(R,"y",p(A).y),L=Qe(R,"",L,{stroke:p(A).color,fill:"#ffffff"}),bt(M,p(A).label)}),ie(P,R)}),Oe(_),Ve(()=>D(_,"transform",`translate(${r.left}, ${r.top})`)),ie(y,_)};let n=Vt(e,"h",15);n(600);const r={top:24,right:24,bottom:24,left:48};let a=fe(()=>xn().domain([2019,2060]).range([0,e.w-r.left-r.right])),o=[2019,2040,2060],s=fe(()=>xn().domain([0,1014]).range([n()-r.top-r.bottom,0])),l=[0,250,500,750,1014],c=fe(()=>[{key:"landfilled",label:e.landfilled,color:xe.cat1,x:p(a)(2040),y:p(s)(450)},{key:"incinerated",label:e.incinerated,color:xe.cat2,x:p(a)(2040),y:p(s)(240)},{key:"recycled",label:e.recycled,color:xe.cat7,x:p(a)(2040),y:p(s)(140)},{key:"mismanaged",label:e.mismanaged,color:xe.cat5,x:p(a)(2040),y:p(s)(50)}].reverse()),f=fe(()=>Hs().keys(p(c).map(y=>y.key)).value(([,y],_)=>y.get(_).value).offset(Gs)(Vs(e.data,y=>y.year,y=>y.fate))),u=fe(()=>Qo().x(y=>p(a)(y.data[0])).y0(y=>p(s)(y[0])).y1(y=>p(s)(y[1])).curve($i));var h=Xe(),m=ke(h);Ut(m,()=>e.container??Lt,()=>({svg:t})),ie(i,h),zt()}var L6=Ke('<g><polygon fill="url(#total-to-sinking)"></polygon><text class="small middle"> </text><rect></rect><rect></rect><text class="small middle"> </text></g>'),U6=Ke('<g><polygon fill="url(#total-to-rivers)"></polygon><text class="small end"> </text><rect></rect><text class="small middle"> </text><rect></rect></g>'),F6=Ke('<g><polygon fill="url(#total-to-coasts)"></polygon><text class="small middle"> </text><rect></rect></g>'),I6=Ke('<g><polygon fill="url(#coasts-to-oceans)"></polygon><polygon fill="url(#rivers-to-oceans)"></polygon><text class="small middle"> </text><rect></rect></g>'),N6=Ke('<g><rect></rect><text class="small middle"> </text></g>'),O6=Ke('<g><text class="middle"> </text><text class="small middle"> </text><rect></rect><!><!><!><!><!></g>'),B6=Ke('<defs><linearGradient id="total-to-sinking" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%"></stop><stop offset="100%"></stop></linearGradient><linearGradient id="total-to-rivers" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%"></stop><stop offset="100%"></stop></linearGradient><linearGradient id="total-to-coasts" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%"></stop><stop offset="100%"></stop></linearGradient><linearGradient id="rivers-to-oceans" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%"></stop><stop offset="100%"></stop></linearGradient><linearGradient id="coasts-to-oceans" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%"></stop><stop offset="100%"></stop></linearGradient></defs><!>',1);function ru(i,e){Bt(e,!0);const t=()=>un(ks,"$reducedMotion",n),[n,r]=cn(),a=x=>{const v=fe(()=>[50,150,250]);var E=O6(),P=Ge(E);D(P,"x",0),D(P,"y",20);let A;var R=Ge(P,!0);Oe(P);var L=me(P);D(L,"x",0);let M;var T=Ge(L);Oe(L);var w=me(L);D(w,"height",c);var B=me(w);{var k=ce=>{var be=L6(),Ae=Ge(be);D(Ae,"stroke-width",0),D(Ae,"opacity",.3);var H=me(Ae);let ee;var ne=Ge(H);Oe(H);var he=me(H);D(he,"height",c);var ve=me(he),Le=me(ve);let ft;var qe=Ge(Le);Oe(Le),Oe(be),Ve((U,ot)=>{D(Ae,"points",`
            ${-(p(u).current*l)/2},${p(v)[0]+c}
            ${-(p(u).current*l)/2+p(_).sinking_land.current},${p(v)[0]+c}
            ${-(p(u).current*l)/2-f},${p(v)[2]}
            ${-(p(u).current*l)/2-f-p(_).sinking_land.current},${p(v)[2]}
            `),D(H,"x",-(p(u).current*l)/2-f-p(_).sinking_land.current/2),D(H,"y",p(v)[2]-6),ee=Qe(H,"",ee,{stroke:xe.cat2,fill:"#ffffff"}),bt(ne,`${e.sinking_land??""}: ${U??""}
					${e.units??""}`),D(he,"x",-(p(u).current*l)/2-f-p(_).sinking_land.current),D(he,"y",p(v)[2]),D(he,"width",p(_).sinking_land.current),D(he,"fill",xe.cat2),D(ve,"x",-(p(u).current*l)/2-f-p(_).sinking_land.current),D(ve,"y",p(v)[2]+c),D(ve,"width",p(_).sinking_land.current),D(ve,"height",c*p(m).current),D(ve,"fill",xe.cat2Text),D(Le,"x",-(p(u).current*l)/2-f-p(_).sinking_land.current/2),D(Le,"y",p(v)[2]+c*p(m).current/2),ft=Qe(Le,"",ft,{stroke:xe.cat2Text,fill:"#ffffff"}),bt(qe,`${e.stock_land??""}: ${ot??""}
					${e.units??""}`)},[()=>Math.round(p(_).sinking_land.current/l*10)/10,()=>Math.round(p(m).current*p(_).sinking_land.current/l)]),Vi(3,be,()=>Wi),ie(ce,be)};lt(B,ce=>{e.activeScene.index>0&&ce(k)})}var N=me(B);{var Y=ce=>{var be=U6(),Ae=Ge(be);D(Ae,"stroke-width",0),D(Ae,"opacity",.3);var H=me(Ae);let ee;var ne=Ge(H);Oe(H);var he=me(H);D(he,"height",c);var ve=me(he);let Le;var ft=Ge(ve);Oe(ve);var qe=me(ve);D(qe,"height",c),Oe(be),Ve((U,ot)=>{D(Ae,"points",`
            ${-(p(u).current*l)/2+p(_).sinking_land.current},${p(v)[0]+c}
            ${-(p(u).current*l)/2+p(_).sinking_land.current+p(_).floating_rivers.current+p(_).rivers_to_oceans.current},${p(v)[0]+c}
            ${-(p(u).current*l)/2+p(_).sinking_land.current+p(_).floating_rivers.current+p(_).rivers_to_oceans.current},${p(v)[1]}
            ${-(p(u).current*l)/2+p(_).sinking_land.current},${p(v)[1]}
            `),D(H,"x",-(p(u).current*l)/2+p(_).sinking_land.current-4),D(H,"y",p(v)[1]+3),ee=Qe(H,"",ee,{stroke:xe.cat4,fill:"#ffffff"}),bt(ne,`${e.floating_rivers??""}: ${U??""}
					${e.units??""}`),D(he,"x",-(p(u).current*l)/2+p(_).sinking_land.current),D(he,"y",p(v)[1]),D(he,"width",p(_).floating_rivers.current),D(he,"fill",xe.cat4),D(ve,"x",-(p(u).current*l)/2+p(_).sinking_land.current+p(_).floating_rivers.current+p(_).rivers_to_oceans.current/2),D(ve,"y",p(v)[1]+c+12),Le=Qe(ve,"",Le,{stroke:xe.cat4Text,fill:"#ffffff"}),bt(ft,`${e.rivers_to_oceans??""}: ${ot??""}
					${e.units??""}`),D(qe,"x",-(p(u).current*l)/2+p(_).sinking_land.current+p(_).floating_rivers.current),D(qe,"y",p(v)[1]),D(qe,"width",p(_).rivers_to_oceans.current),D(qe,"fill",xe.cat4Text)},[()=>Math.round(p(_).floating_rivers.current/l*10)/10,()=>Math.round(p(_).rivers_to_oceans.current/l*10)/10]),Vi(3,be,()=>Wi),ie(ce,be)};lt(N,ce=>{e.activeScene.index>1&&ce(Y)})}var V=me(N);{var j=ce=>{var be=F6(),Ae=Ge(be);D(Ae,"stroke-width",0),D(Ae,"opacity",.3);var H=me(Ae);let ee;var ne=Ge(H);Oe(H);var he=me(H);D(he,"height",c),Oe(be),Ve(ve=>{D(Ae,"points",`
            ${-(p(u).current*l)/2+p(_).sinking_land.current+p(_).floating_rivers.current+p(_).rivers_to_oceans.current},${p(v)[0]+c}
            ${-(p(u).current*l)/2+p(_).sinking_land.current+p(_).floating_rivers.current+p(_).rivers_to_oceans.current+p(_).coasts_to_oceans.current},${p(v)[0]+c}
            ${-(p(u).current*l)/2+p(u).current*l+f+p(_).coasts_to_oceans.current},${p(v)[1]}
            ${-(p(u).current*l)/2+p(u).current*l+f},${p(v)[1]}
            `),D(H,"x",-(p(u).current*l)/2+p(u).current*l+f+p(_).coasts_to_oceans.current/2),D(H,"y",p(v)[1]-6),ee=Qe(H,"",ee,{stroke:xe.cat3,fill:"#ffffff"}),bt(ne,`${e.coasts_to_oceans??""}: ${ve??""}
					${e.units??""}`),D(he,"x",-(p(u).current*l)/2+p(u).current*l+f),D(he,"y",p(v)[1]),D(he,"width",p(_).coasts_to_oceans.current),D(he,"fill",xe.cat3)},[()=>Math.round(p(_).coasts_to_oceans.current/l*100)/100]),Vi(3,be,()=>Wi),ie(ce,be)};lt(V,ce=>{e.activeScene.index>2&&ce(j)})}var I=me(V);{var Z=ce=>{var be=I6(),Ae=Ge(be);D(Ae,"stroke-width",0),D(Ae,"opacity",.3);var H=me(Ae);D(H,"stroke-width",0),D(H,"opacity",.3);var ee=me(H);let ne;var he=Ge(ee);Oe(ee);var ve=me(ee);D(ve,"height",c),Oe(be),Ve(Le=>{D(Ae,"points",`
            ${-(p(u).current*l)/2+p(u).current*l+f},${p(v)[1]+c}
            ${-(p(u).current*l)/2+p(u).current*l+f+p(_).coasts_to_oceans.current},${p(v)[1]+c}
            ${-(p(u).current*l)/2+p(u).current*l-p(h).current*l/2+p(h).current*l},${p(v)[2]}
            ${-(p(u).current*l)/2+p(u).current*l-p(h).current*l/2+p(h).current*l-p(_).coasts_to_oceans.current},${p(v)[2]}
            
            `),D(H,"points",`
            ${-(p(u).current*l)/2+p(_).sinking_land.current+p(_).floating_rivers.current},${p(v)[1]+c}
            ${-(p(u).current*l)/2+p(_).sinking_land.current+p(_).floating_rivers.current+p(_).rivers_to_oceans.current},${p(v)[1]+c}
            ${-(p(u).current*l)/2+p(u).current*l-p(h).current*l/2+p(_).rivers_to_oceans.current},${p(v)[2]}
            ${-(p(u).current*l)/2+p(u).current*l-p(h).current*l/2},${p(v)[2]}
            
            `),D(ee,"x",-(p(u).current*l)/2+p(u).current*l-p(h).current*l/2+p(h).current*l/2),D(ee,"y",p(v)[2]-6),ne=Qe(ee,"",ne,{stroke:xe.cat1,fill:"#ffffff"}),bt(he,`${e.transport_to_oceans??""}: ${Le??""} ${e.units??""}`),D(ve,"x",-(p(u).current*l)/2+p(u).current*l-p(h).current*l/2),D(ve,"y",p(v)[2]),D(ve,"width",p(h).current*l),D(ve,"fill",xe.cat1)},[()=>Math.round(p(h).current*10)/10]),Vi(3,be,()=>Wi),ie(ce,be)};lt(I,ce=>{e.activeScene.index>3&&ce(Z)})}var $=me(I);{var oe=ce=>{var be=N6(),Ae=Ge(be),H=me(Ae);let ee;var ne=Ge(H);Oe(H),Oe(be),Ve(he=>{D(Ae,"x",-(p(u).current*l)/2+p(u).current*l-p(h).current*l/2),D(Ae,"y",p(v)[2]+c),D(Ae,"width",p(h).current*l),D(Ae,"height",c*p(y).current),D(Ae,"fill",xe.cat1Text),D(H,"x",-(p(u).current*l)/2+p(u).current*l-p(h).current*l/2+p(h).current*l/2),D(H,"y",p(v)[2]+c+c*p(y).current/2),ee=Qe(H,"",ee,{stroke:xe.cat1Text,fill:"#ffffff"}),bt(ne,`${e.stock_oceans??""}: ${he??""}
					${e.units??""}`)},[()=>Math.round(p(h).current*p(y).current)]),Vi(3,be,()=>Wi),ie(ce,be)};lt($,ce=>{e.activeScene.index>4&&ce(oe)})}Oe(E),Ve(ce=>{D(E,"transform",`translate(${e.w/2})`),A=Qe(P,"",A,{stroke:xe.text,fill:"#ffffff"}),bt(R,e.activeScene.index>5?e.label60:e.label19),D(L,"y",p(v)[0]-6),M=Qe(L,"",M,{stroke:xe.cat5,fill:"#ffffff"}),bt(T,`${e.aquatic_leakage??""}: ${ce??""} ${e.units??""}`),D(w,"x",-(p(u).current*l)/2),D(w,"y",p(v)[0]),D(w,"width",p(u).current*l),D(w,"fill",xe.cat5)},[()=>Math.round(p(u).current*10)/10]),ie(x,E)},o=x=>{var v=B6(),E=ke(v),P=Ge(E),A=Ge(P),R=me(A);Oe(P);var L=me(P),M=Ge(L),T=me(M);Oe(L);var w=me(L),B=Ge(w),k=me(B);Oe(w);var N=me(w),Y=Ge(N),V=me(Y);Oe(N);var j=me(N),I=Ge(j),Z=me(I);Oe(j),Oe(E);var $=me(E);a($),Ve(()=>{D(A,"stop-color",xe.cat5),D(R,"stop-color",xe.cat2),D(M,"stop-color",xe.cat5),D(T,"stop-color",xe.cat4),D(B,"stop-color",xe.cat5),D(k,"stop-color",xe.cat3),D(Y,"stop-color",xe.cat4Text),D(V,"stop-color",xe.cat1),D(I,"stop-color",xe.cat3),D(Z,"stop-color",xe.cat1)}),ie(x,v)};let s=fe(()=>t()?0:2e3);const l=20;let c=5,f=20,u=fe(()=>new In(e.data.find(x=>x.category=="sinking_land").value19+e.data.find(x=>x.category=="floating_rivers").value19+e.data.find(x=>x.category=="rivers_to_oceans").value19+e.data.find(x=>x.category=="coasts_to_oceans").value19,{duration:p(s),easing:Nn})),h=fe(()=>new In(e.data.find(x=>x.category=="rivers_to_oceans").value19+e.data.find(x=>x.category=="coasts_to_oceans").value19,{duration:p(s),easing:Nn})),m=fe(()=>new In(e.data.find(x=>x.category=="stock_land").value19/e.data.find(x=>x.category=="sinking_land").value19,{duration:p(s),easing:Nn})),y=fe(()=>new In(e.data.find(x=>x.category=="stock_oceans").value19/(e.data.find(x=>x.category=="rivers_to_oceans").value19+e.data.find(x=>x.category=="coasts_to_oceans").value19),{duration:p(s),easing:Nn})),_=fe(()=>({sinking_land:new In(e.data.find(x=>x.category=="sinking_land").value19*l,{duration:p(s),easing:Nn}),floating_rivers:new In(e.data.find(x=>x.category=="floating_rivers").value19*l,{duration:p(s),easing:Nn}),rivers_to_oceans:new In(e.data.find(x=>x.category=="rivers_to_oceans").value19*l,{duration:p(s),easing:Nn}),coasts_to_oceans:new In(e.data.find(x=>x.category=="coasts_to_oceans").value19*l,{duration:p(s),easing:Nn})}));En(()=>{e.activeScene.index>5&&(p(u).target=e.data.find(x=>x.category=="sinking_land").value60+e.data.find(x=>x.category=="floating_rivers").value60+e.data.find(x=>x.category=="rivers_to_oceans").value60+e.data.find(x=>x.category=="coasts_to_oceans").value60,p(h).target=e.data.find(x=>x.category=="rivers_to_oceans").value60+e.data.find(x=>x.category=="coasts_to_oceans").value60,p(m).target=e.data.find(x=>x.category=="stock_land").value60/e.data.find(x=>x.category=="sinking_land").value60,p(y).target=e.data.find(x=>x.category=="stock_oceans").value60/(e.data.find(x=>x.category=="rivers_to_oceans").value60+e.data.find(x=>x.category=="coasts_to_oceans").value60),p(_).sinking_land.target=e.data.find(x=>x.category=="sinking_land").value60*l,p(_).floating_rivers.target=e.data.find(x=>x.category=="floating_rivers").value60*l,p(_).rivers_to_oceans.target=e.data.find(x=>x.category=="rivers_to_oceans").value60*l,p(_).coasts_to_oceans.target=e.data.find(x=>x.category=="coasts_to_oceans").value60*l),e.activeScene.index<6&&(p(u).target=e.data.find(x=>x.category=="sinking_land").value19+e.data.find(x=>x.category=="floating_rivers").value19+e.data.find(x=>x.category=="rivers_to_oceans").value19+e.data.find(x=>x.category=="coasts_to_oceans").value19,p(h).target=e.data.find(x=>x.category=="rivers_to_oceans").value19+e.data.find(x=>x.category=="coasts_to_oceans").value19,p(m).target=e.data.find(x=>x.category=="stock_land").value19/e.data.find(x=>x.category=="sinking_land").value19,p(y).target=e.data.find(x=>x.category=="stock_oceans").value19/(e.data.find(x=>x.category=="rivers_to_oceans").value19+e.data.find(x=>x.category=="coasts_to_oceans").value19),p(_).sinking_land.target=e.data.find(x=>x.category=="sinking_land").value19*l,p(_).floating_rivers.target=e.data.find(x=>x.category=="floating_rivers").value19*l,p(_).rivers_to_oceans.target=e.data.find(x=>x.category=="rivers_to_oceans").value19*l,p(_).coasts_to_oceans.target=e.data.find(x=>x.category=="coasts_to_oceans").value19*l)});var g=Xe(),d=ke(g);Ut(d,()=>e.container??Lt,()=>({svg:o})),ie(i,g),zt(),r()}var z6=dn('<canvas class="globe-canvas"></canvas>'),k6=dn('<img alt="Rendered globe"/>'),H6=Ke('<path fill="none" stroke="#ccc" stroke-width="0.5"></path>'),G6=Ke('<path class="country"></path>'),V6=Ke("<path></path>"),W6=dn('<div class="globe svelte-ivdvxs"><!> <!> <svg class="svelte-ivdvxs"><!><!><!><!><!></svg></div>');function Ot(i,e){Bt(e,!0);let t=Vt(e,"projection",15),n=Vt(e,"countriesFillOpacity",3,1),r=Vt(e,"showGraticule",3,!1),a=fe(()=>j1(W1,W1.objects.wb_countries).features.filter(Z=>Z.geometry.type!="Point")),o=fe(()=>j1(X1,X1.objects.wb_disputed_areas).features),s=fe(()=>e.h/2);En(()=>{t(Br().scale(p(s)).translate([e.w/2,e.h/2]).rotate([-e.longitude,-e.latitude]))});let l=fe(()=>Zi().projection(t()));const c=$s().step([10,10])();let f,u=Dt(void 0),h=fe(()=>e.w/e.h),m=fe(()=>p(s)*3);function y(Z,$,oe=0){const ce=ao.degToRad(90+oe),be=ao.degToRad(180-Z),Ae=$*Math.sin(ce)*Math.cos(be),H=$*Math.cos(ce),ee=$*Math.sin(ce)*Math.sin(be);return new W(Ae,H,ee)}let _=fe(()=>y(e.longitude,p(s),e.latitude)),g=fe(()=>p(_).clone().normalize()),d=fe(()=>p(_).clone().addScaledVector(p(g),-p(m))),x,v,E,P;Os(()=>{A()});async function A(){let Z;v=new C4,v.background=new tt(xe.bgWeaker),E=new N1(-p(s)*p(h),p(s)*p(h),p(s),-p(s),.1,1e3),E.position.copy(p(d)),E.lookAt(p(_)),E.up.set(0,1,0),x=new w6({antialias:!0,canvas:f,preserveDrawingBuffer:!0}),x.setPixelRatio(window.devicePixelRatio),x.setSize(e.w,e.h),x.outputColorSpace=qt;let $=new V4;$.intensity=2,v.add($);let oe=new Ao;oe.position.set(-5,8,5),oe.intensity=.65,oe.color=new tt(xe.bgWeaker),E.add(oe);let ce=new Ao;ce.position.set(5,-5,5),ce.intensity=.3,ce.color=new tt("#F5E3C7"),E.add(ce),v.add(E);const be=new F1(p(s),64,64),Ae=new k4().load("./assets/images/"+e.textureImage,H=>{const ee=new F4({map:H});Z=new gn(be,ee),v.add(Z),x.render(v,E),Ct(u,x.domElement.toDataURL("image/jpeg",.8),!0),x.dispose()});Ae.colorSpace=qt}Bs(()=>{cancelAnimationFrame(P),x.dispose()});var R=W6(),L=Ge(R);{var M=Z=>{var $=z6();Qe($,"top: 0px;"),zs($,oe=>f=oe,()=>f),ie(Z,$)};lt(L,Z=>{p(u)||Z(M)})}var T=me(L,2);{var w=Z=>{var $=k6();let oe;Ve(()=>{D($,"src",p(u)),oe=Qe($,"",oe,{top:"0px",width:e.w+"px",height:e.h+"px"})}),ie(Z,$)};lt(T,Z=>{p(u)&&Z(w)})}var B=me(T,2),k=Ge(B);{var N=Z=>{var $=H6();Ve(oe=>D($,"d",oe),[()=>p(l)(c)]),ie(Z,$)};lt(k,Z=>{r()&&Z(N)})}var Y=me(k);yt(Y,17,()=>p(a),xt,(Z,$)=>{var oe=G6();let ce;Ve(be=>{D(oe,"d",be),ce=Qe(oe,"",ce,{fill:e.countriesFill,"fill-opacity":n(),stroke:e.countriesStroke,"stroke-width":e.countriesStrokeWidth+"px"})},[()=>p(l)(p($))]),ie(Z,oe)});var V=me(Y);yt(V,17,()=>p(o),xt,(Z,$)=>{var oe=V6();let ce;Ve(be=>{D(oe,"d",be),D(oe,"fill",e.countriesFill),ce=Qe(oe,"",ce,{"fill-opacity":n()})},[()=>p(l)(p($))]),ie(Z,oe)});var j=me(V);Ut(j,()=>e.dataLayer??Lt);var I=me(j);Ut(I,()=>e.labelLayer??Lt),Oe(B),Oe(R),Ve(()=>{D(B,"width",e.w),D(B,"height",e.h)}),ie(i,R),zt()}var X6=Ke("<circle></circle>"),q6=Ke("<g></g>"),Y6=Ke("<circle></circle>"),j6=Ke("<g></g>"),K6=dn('<div class="globes-container svelte-f0txg7"><!> <!></div>');function au(i,e){Bt(e,!0);const t=()=>un(di,"$isMobile",n),[n,r]=cn(),a=x=>{var v=Xe(),E=ke(v);{var P=A=>{var R=q6();Qe(R,"",{},{isolation:"isolate"}),yt(R,21,()=>e.data.filter(L=>m([L.longitude,L.latitude])),xt,(L,M)=>{const T=fe(()=>p(u)([p(M).longitude,p(M).latitude]));var w=X6();D(w,"stroke-width",1),Qe(w,"",{},{"fill-opacity":.1,"stroke-opacity":.5,"mix-blend-mode":"multiply"}),Ve(B=>{D(w,"cx",p(T)[0]),D(w,"cy",p(T)[1]),D(w,"r",B),D(w,"stroke",xe.cat2),D(w,"fill",xe.cat2)},[()=>_(p(M).discharge)]),ie(L,w)}),Oe(R),ie(A,R)};lt(E,A=>{p(u)&&A(P)})}ie(x,v)},o=x=>{var v=Xe(),E=ke(v);{var P=A=>{var R=j6();Qe(R,"",{},{isolation:"isolate"}),yt(R,21,()=>e.data.filter(L=>y([L.longitude,L.latitude])),xt,(L,M)=>{const T=fe(()=>p(h)([p(M).longitude,p(M).latitude]));var w=Y6();D(w,"stroke-width",1.5),Qe(w,"",{},{"fill-opacity":.1,"stroke-opacity":.5,"mix-blend-mode":"multiply"}),Ve(B=>{D(w,"cx",p(T)[0]),D(w,"cy",p(T)[1]),D(w,"r",B),D(w,"stroke",xe.cat2),D(w,"fill",xe.cat2)},[()=>_(p(M).discharge)]),ie(L,w)}),Oe(R),ie(A,R)};lt(E,A=>{p(h)&&A(P)})}ie(x,v)},s=x=>{var v=Xe(),E=ke(v);{var P=A=>{var R=K6();let L;var M=Ge(R);Ot(M,{longitude:110,latitude:20,get w(){return p(f)},get h(){return p(f)},get textureImage(){return e.texture},get dataLayer(){return a},countriesFill:"none",countriesStroke:"#ffffff",countriesStrokeWidth:.5,get projection(){return p(u)},set projection(w){Ct(u,w,!0)}});var T=me(M,2);Ot(T,{longitude:-30,latitude:0,get w(){return p(f)},get h(){return p(f)},get textureImage(){return e.texture},get dataLayer(){return o},countriesFill:"none",countriesStroke:"#ffffff",countriesStrokeWidth:.5,get projection(){return p(h)},set projection(w){Ct(h,w,!0)}}),Oe(R),Ve(()=>L=Qe(R,"",L,{"flex-direction":t()?"column":"row"})),ie(A,R)};lt(E,A=>{e.w>0&&A(P)})}ie(x,v)},l=x=>{{let v=fe(()=>`${e.legend_title} (${e.legend_units})`);js(x,{ticks:[5e3,15e3,3e4],get sizeScale(){return _},get fillColor(){return xe.cat2},fillOpacity:0,get strokeColor(){return xe.cat2},strokeWidth:1,get title(){return p(v)},divisor:1e3})}};let c=Vt(e,"h",15);En(()=>{t()||c(e.w/2),t()&&c(2*e.w)});let f=fe(()=>t()?e.w:c()),u=Dt(void 0),h=Dt(void 0);function m([x,v]){const E=qr(p(u).rotate())([x,v]);return E[0]>-90&&E[0]<90}function y([x,v]){const E=qr(p(h).rotate())([x,v]);return E[0]>-90&&E[0]<90}let _=Ks().domain([0,64e3]).range([0,64]);var g=Xe(),d=ke(g);Ut(d,()=>e.container??Lt,()=>({content:s,top:l})),ie(i,g),zt(),r()}const Z6=[{type:"Feature",properties:{Name:"South Pacific",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-110.37772,-60.03345],[-108.13814,-60.05647],[-105.91594,-60.02331],[-105.33676,-60],[-104.14026,-59.95179],[-102.47756,-59.84433],[-100.92199,-59.70444],[-99.43985,-59.53083],[-99.35089,-59.52039],[-100.30739,-59.08947],[-95.73732,-59.24511],[-96.69293,-59.66204],[-97.47629,-60],[-97.66969,-60.08291],[-99.21267,-60.73696],[-99.20914,-60.72865],[-98.94473,-60.09967],[-99.03633,-60.11029],[-100.72515,-60.30546],[-102.6476,-60.46934],[-104.56743,-60.57909],[-106.62401,-60.64332],[-108.68087,-60.65804],[-110.83244,-60.62595],[-113.00855,-60.54884],[-115.30879,-60.42268],[-117.03035,-60.30042],[-118.69786,-60.16065],[-120,-60.03516],[-120.36393,-60],[-120.5511,-59.9819],[-122.34442,-59.78655],[-124.20055,-59.56216],[-125.98153,-59.32644],[-127.96263,-59.04154],[-129.86199,-58.74666],[-132.74381,-58.25985],[-135.59263,-57.73331],[-138.55985,-57.13825],[-141.47352,-56.50853],[-142.17508,-56.35026],[-142.37611,-56.2758],[-142.45047,-56.22514],[-142.54016,-56.10567],[-142.54226,-55.97374],[-142.44907,-55.8465],[-142.28166,-55.75285],[-142.06708,-55.70234],[-141.83091,-55.70117],[-137.78985,-56.58677],[-134.38286,-57.27099],[-130.83729,-57.91432],[-127.4803,-58.4564],[-124.172,-58.92366],[-121.05583,-59.29924],[-120,-59.40425],[-118.00687,-59.6016],[-115.15145,-59.82127],[-112.68887,-59.95664],[-111.38482,-60],[-110.37772,-60.03345]]]]}},{type:"Feature",properties:{Name:"South Pacific",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-156.22605,-54.17075],[-154.35502,-54.36896],[-154.26589,-54.37837],[-154.66559,-53.64809],[-151.97083,-54.73342],[-150.89295,-55.15959],[-152.1821,-55.28795],[-153.47125,-55.4159],[-155.40502,-55.60706],[-154.53255,-55.06491],[-154.62545,-55.05525],[-156.38924,-54.87154],[-158.23744,-54.70493],[-160.15138,-54.55914],[-162.06904,-54.43946],[-163.92785,-54.34742],[-165.87186,-54.27472],[-167.90976,-54.22217],[-169.97974,-54.19099],[-174.52421,-54.18715],[-179.82014,-54.26177],[-179.99999,-54.24421],[-179.99999,-54.17344],[-179.99999,-54.09836],[-179.99999,-54.01206],[-179.99999,-53.79882],[-179.99999,-53.63718],[-179.99999,-53.60656],[-179.99999,-53.56624],[-179.92321,-53.54795],[-175.34606,-53.47554],[-171.19924,-53.46321],[-168.79469,-53.48767],[-166.57472,-53.53569],[-164.38363,-53.61036],[-162.28267,-53.71015],[-160.26257,-53.83423],[-158.24603,-53.98722],[-156.22605,-54.17075]]]]}},{type:"Feature",properties:{Name:"South Pacific",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-115.44101,-53.0945],[-115.34913,-53.10103],[-115.88034,-52.36113],[-113.01553,-53.31541],[-111.86962,-53.69126],[-113.13023,-53.89876],[-114.39087,-54.10524],[-116.28181,-54.41304],[-116.28181,-54.41303],[-115.52348,-53.81885],[-115.6152,-53.8125],[-119.85308,-53.51793],[-120,-53.50656],[-123.77926,-53.21316],[-127.23305,-52.91025],[-130.34262,-52.59838],[-132.65331,-52.32488],[-132.80556,-52.26814],[-132.95262,-52.1576],[-133.01254,-52.05611],[-133.0221,-51.94523],[-132.95063,-51.80087],[-132.8007,-51.68922],[-132.59556,-51.621],[-132.35825,-51.60593],[-128.85944,-51.99913],[-124.9551,-52.36955],[-120.42975,-52.73865],[-120,-52.76942],[-115.44101,-53.0945]]]]}},{type:"Feature",properties:{Name:"West Wind Drift / Antarctic Circumpolar",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-126.756,-62.50574],[-126.66376,-62.50783],[-127.28103,-61.95012],[-125.50335,-62.33906],[-124.31824,-62.59558],[-123.13312,-62.84991],[-125.6025,-63.24308],[-127.45456,-63.53449],[-127.45456,-63.53449],[-126.77272,-63.063],[-126.86494,-63.06085],[-134.68368,-62.87764],[-143.03779,-62.62293],[-150,-62.36704],[-152.11129,-62.28901],[-161.48091,-61.88886],[-170.67409,-61.44478],[-179.75997,-60.95493],[-179.98975,-60.91845],[-179.99999,-60.91417],[-179.99999,-60.83748],[-179.99999,-60.49153],[-179.99999,-60.47732],[-179.99999,-60.40813],[-179.85921,-60.37222],[-179.61828,-60.36236],[-172.49819,-60.75786],[-165.28609,-61.12573],[-158.1789,-61.45715],[-151.32893,-61.74692],[-150,-61.7974],[-144.6336,-62.0004],[-138.3928,-62.20772],[-132.24442,-62.38116],[-126.756,-62.50574]]]]}},{type:"Feature",properties:{Name:"Falkland",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-44.0697,-43.16109],[-42.90655,-44.41668],[-42.20275,-45.16359],[-41.52368,-45.87509],[-46.00751,-45.22012],[-44.85788,-44.82647],[-44.94071,-44.79913],[-45.47408,-44.62279],[-46.08001,-44.45361],[-46.675,-44.31903],[-47.25836,-44.21908],[-47.77288,-44.15871],[-48.27692,-44.1263],[-48.77098,-44.12177],[-49.25628,-44.14494],[-49.73142,-44.19584],[-50.19677,-44.27464],[-50.6527,-44.38145],[-51.09957,-44.51636],[-51.57367,-44.69482],[-52.00228,-44.88976],[-52.45636,-45.1341],[-52.86563,-45.39056],[-53.29783,-45.70216],[-53.68568,-46.0208],[-54.06183,-46.36957],[-54.42548,-46.74809],[-55.11202,-47.59244],[-55.72642,-48.5283],[-56.26643,-49.54382],[-56.73047,-50.62708],[-56.79983,-50.73446],[-56.95703,-50.84448],[-57.16651,-50.90851],[-57.40462,-50.91766],[-57.63531,-50.86657],[-57.80933,-50.76726],[-57.91081,-50.63458],[-57.92532,-50.48331],[-57.56554,-49.60446],[-57.12308,-48.7023],[-56.65245,-47.89144],[-56.13791,-47.13737],[-55.67631,-46.55409],[-55.18559,-46.01328],[-54.66572,-45.5162],[-54.11706,-45.06418],[-53.54055,-44.65885],[-52.93714,-44.30173],[-52.27566,-43.98019],[-51.62009,-43.72618],[-50.80455,-43.49079],[-49.91394,-43.3259],[-48.99839,-43.24709],[-48.06358,-43.25396],[-47.1022,-43.34624],[-46.12922,-43.52158],[-45.14701,-43.7768],[-44.24428,-44.07954],[-44.15797,-44.1084],[-44.07161,-43.18169],[-44.0697,-43.16109]]]]}},{type:"Feature",properties:{Name:"South Atlantic",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-5.49527,-48.35683],[-6.57761,-48.85347],[-8.30312,-49.63515],[-8.29948,-49.62774],[-7.90765,-48.82165],[-7.99886,-48.82868],[-9.53582,-48.94705],[-11.41278,-49.06391],[-16.37995,-49.30131],[-22.31631,-49.52533],[-30,-49.78611],[-36.65143,-50.01073],[-36.89064,-49.9882],[-37.09089,-49.91105],[-37.23157,-49.79097],[-37.29207,-49.63962],[-37.25702,-49.48448],[-37.13713,-49.35422],[-36.9509,-49.2625],[-36.71682,-49.223],[-30,-48.99254],[-22.50953,-48.73428],[-16.59175,-48.50826],[-11.69135,-48.27243],[-9.77334,-48.15287],[-8.27768,-48.03778],[-8.18417,-48.03058],[-9.05493,-47.39529],[-4.54009,-47.91448],[-5.49527,-48.35683]]]]}},{type:"Feature",properties:{Name:"West Wind Drift / Antarctic Circumpolar",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-65.98858,-60.04117],[-66.66639,-60.94843],[-67.04804,-60.35265],[-67.11074,-60.38581],[-69.67461,-61.71344],[-70.79364,-62.24],[-71.81415,-62.68702],[-72.86331,-63.11251],[-73.95652,-63.52009],[-75.07438,-63.90185],[-76.18034,-64.24852],[-77.79511,-64.70749],[-79.52542,-65.14875],[-81.43456,-65.58843],[-83.49478,-66.02042],[-86.01337,-66.50213],[-86.19075,-66.51513],[-86.36541,-66.50723],[-86.57511,-66.46693],[-86.70079,-66.41637],[-86.80361,-66.32707],[-86.81165,-66.23211],[-86.69844,-66.1243],[-86.52093,-66.0597],[-83.04381,-65.36639],[-81.53074,-65.03293],[-80.1337,-64.70176],[-78.80066,-64.3601],[-77.56545,-64.01623],[-76.41495,-63.66761],[-75.27072,-63.28901],[-73.53872,-62.645],[-71.8544,-61.92743],[-70.09328,-61.0817],[-68.05144,-60],[-67.99292,-59.96846],[-67.92976,-59.93439],[-69.22387,-59.79303],[-65.08487,-58.79156],[-65.53673,-59.42213],[-65.95827,-60],[-65.98858,-60.04117]]]]}},{type:"Feature",properties:{Name:"East Wind Drift / Antarctic Subpolar",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[165.39784,-65.05295],[179.99999,-66.30559],[179.99999,-66.35626],[179.99999,-66.38983],[179.99999,-66.46039],[179.99999,-66.52666],[179.99999,-66.56341],[179.99999,-66.62983],[179.99999,-66.73123],[179.99999,-66.77857],[179.82815,-66.78505],[165.13025,-65.54936],[165.03975,-65.54156],[165.45761,-66.05497],[165.45761,-66.05497],[161.65688,-64.99628],[162.94351,-64.89503],[164.23014,-64.79339],[166.16012,-64.64022],[165.30745,-65.04501],[165.39784,-65.05295]]]]}},{type:"Feature",properties:{Name:"South Pacific",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[178.0953,-53.96993],[173.94872,-55.0987],[173.94872,-55.0987],[174.55367,-54.4205],[174.46128,-54.42335],[166.13528,-54.67962],[165.89971,-54.65291],[165.7055,-54.57834],[165.57331,-54.46636],[165.52474,-54.34592],[165.54996,-54.2227],[165.65982,-54.10181],[165.83846,-54.01398],[166.06742,-53.97157],[174.37709,-53.71042],[174.46922,-53.70752],[173.77285,-53.06947],[173.77284,-53.06945],[175.62532,-53.45772],[178.0953,-53.96993]]]]}},{type:"Feature",properties:{Name:"North Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-162.29459,24.09718],[-162.86662,23.04075],[-162.77564,23.04403],[-159.82362,23.15061],[-151.26155,23.37738],[-150,23.43183],[-146.17568,23.59676],[-145.9363,23.56585],[-145.73539,23.45695],[-145.59367,23.28673],[-145.53186,23.07189],[-145.56557,22.85146],[-145.68433,22.66619],[-145.86976,22.53535],[-146.10348,22.47824],[-150,22.3088],[-151.21552,22.25591],[-159.77973,22.02719],[-162.70593,21.92081],[-162.79971,21.9174],[-162.06801,20.90369],[-166.41221,22.25309],[-165.23575,22.78255],[-164.05927,23.30999],[-162.29458,24.0972],[-162.29459,24.09718]]]]}},{type:"Feature",properties:{Name:"North Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-160.015,15.83683],[-153.59277,15.78892],[-150,15.79836],[-147.61331,15.80463],[-141.35495,15.88999],[-135.31571,16.04179],[-129.06541,16.27073],[-122.8574,16.56872],[-122.61813,16.53558],[-122.41764,16.42102],[-122.27658,16.24258],[-122.2156,16.01784],[-122.25016,15.78773],[-122.36964,15.59471],[-122.55558,15.4588],[-122.78951,15.40001],[-127.51734,15.16538],[-132.18615,14.97355],[-136.90723,14.82082],[-141.55256,14.71152],[-149.06629,14.6201],[-150,14.62136],[-156.85418,14.63061],[-164.81015,14.7343],[-176.22126,14.97371],[-176.31384,14.97565],[-175.68867,13.88929],[-175.68865,13.88926],[-177.49232,14.6399],[-179.89719,15.63673],[-177.45714,16.54643],[-175.62708,17.22592],[-176.30711,16.14877],[-176.21498,16.14681],[-166.47675,15.93945],[-160.015,15.83683]]]]}},{type:"Feature",properties:{Name:"Eq. Countercurrent",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-109.18705,8.37377],[-111.57328,7.30848],[-113.36294,6.50783],[-112.76379,7.62089],[-112.85621,7.61747],[-120,7.35273],[-122.43426,7.26248],[-132.0459,6.98066],[-141.78176,6.7691],[-150,6.65186],[-151.8261,6.6258],[-152.06358,6.67081],[-152.25849,6.79832],[-152.39102,6.98904],[-152.44138,7.22367],[-152.39608,7.4592],[-152.26768,7.65241],[-152.07556,7.78375],[-151.83911,7.83365],[-150,7.85982],[-141.79485,7.97656],[-132.05955,8.18757],[-122.4487,8.46868],[-120,8.55925],[-112.87134,8.82282],[-112.7791,8.82622],[-113.48585,9.93422],[-113.48585,9.93422],[-110.41527,8.8203],[-109.18705,8.37377]]]]}},{type:"Feature",properties:{Name:null,TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-107.59692,17.20891],[-106.2432,16.72198],[-104.97847,16.18802],[-103.79378,15.60419],[-102.74216,14.99625],[-101.8509,14.38353],[-101.09662,13.74484],[-100.67003,13.29187],[-100.33986,12.84871],[-100.10392,12.41794],[-99.94828,11.96453],[-99.87067,11.37232],[-99.88465,10.80725],[-99.9928,10.35112],[-100.19709,9.95789],[-100.47543,9.64974],[-100.79942,9.42111],[-101.19777,9.23738],[-101.72264,9.0846],[-102.59316,8.94403],[-103.80961,8.85125],[-104.47848,8.82619],[-104.6267,8.85424],[-104.78461,8.93158],[-104.91266,9.0491],[-104.99038,9.17205],[-105.03647,9.31287],[-105.04602,9.46551],[-105.01763,9.61168],[-104.93935,9.76734],[-104.82036,9.8935],[-104.69584,9.97006],[-104.49206,10.02379],[-103.16028,10.09614],[-102.23907,10.20578],[-101.59455,10.37235],[-101.37834,10.47774],[-101.2496,10.57803],[-101.14755,10.73311],[-101.10043,10.90371],[-101.08167,11.1561],[-101.10364,11.49971],[-101.19373,11.88029],[-101.44711,12.32851],[-101.6946,12.63511],[-102.00834,12.95495],[-102.78078,13.58641],[-103.78585,14.24081],[-104.94728,14.86588],[-106.25931,15.45891],[-107.65496,15.98919],[-109.09201,16.44192],[-110.38732,16.76849],[-110.47917,16.79162],[-109.97019,15.64581],[-113.9655,17.79046],[-112.83098,18.08322],[-111.59975,18.40038],[-109.54491,18.92841],[-109.55418,18.91685],[-110.32583,17.95222],[-110.23671,17.93056],[-108.97899,17.62462],[-107.59692,17.20891]]]]}},{type:"Feature",properties:{Name:"South Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-139.72927,1.66346],[-140.38864,.49784],[-140.29639,.4986],[-125.44256,.62212],[-120,.70262],[-101.49578,.9763],[-101.2581,.93213],[-101.06258,.80468],[-100.92912,.61322],[-100.87761,.37702],[-100.92179,.13934],[-101.01264,0],[-101.04926,-.05617],[-101.24074,-.18962],[-101.47694,-.24112],[-120,-.51517],[-125.39554,-.595],[-140.24178,-.7188],[-140.33434,-.71957],[-139.68974,-1.80044],[-141.51523,-1.07912],[-143.94921,-.11713],[-143.67165,0],[-141.53785,.90043],[-139.72927,1.66346]]]]}},{type:"Feature",properties:{Name:"East Australia",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-177.52514,-28.71939],[-177.48977,-28.79344],[-176.62254,-27.95067],[-176.61607,-27.94436],[-176.80218,-30],[-176.97768,-31.90031],[-177.78511,-31.07739],[-178.65195,-30.18594],[-178.83175,-30],[-179.91688,-28.87051],[-178.65306,-29.11459],[-178.69178,-29.03836],[-179.02445,-28.38125],[-179.42601,-27.76828],[-179.80898,-27.31701],[-179.99999,-27.15192],[-179.99999,-27.04918],[-179.99999,-26.99761],[-179.99999,-26.68832],[-179.99999,-26.55738],[-179.99999,-26.54531],[-179.99999,-26.36857],[-179.99999,-26.25263],[-179.99999,-26.06557],[-179.99999,-26.03322],[-179.99999,-25.92643],[-179.88975,-25.91022],[-179.62186,-25.98426],[-179.22566,-26.2882],[-178.82545,-26.67423],[-178.44863,-27.12004],[-178.10083,-27.62189],[-177.78577,-28.17226],[-177.52514,-28.71939]]]]}},{type:"Feature",properties:{Name:"South Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-150.32199,0],[-150.47153,-.10014],[-150.70865,-.14724],[-176.24522,-.0243],[-176.3376,-.02386],[-175.69765,-1.13898],[-175.69764,-1.13899],[-177.51085,-.38717],[-178.44453,0],[-178.71967,.11409],[-179.92845,.61533],[-177.50043,1.59239],[-175.67941,2.3249],[-175.67941,2.3249],[-176.34458,1.19376],[-176.25215,1.19331],[-150.7048,1.07031],[-150.46798,1.02173],[-150.27488,.89066],[-150.14503,.69675],[-150.09793,.45963],[-150.14653,.22282],[-150.27761,.02972],[-150.32199,0]]]]}},{type:"Feature",properties:{Name:"Eq. Countercurrent",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-162.38479,6.3362],[-165.40299,5.07988],[-165.40299,5.07988],[-164.78075,6.16688],[-164.87324,6.16598],[-171.2971,6.10292],[-179.4107,6.08272],[-179.59174,6.10995],[-179.79795,6.22097],[-179.94601,6.39948],[-179.99999,6.57333],[-179.99999,6.78887],[-179.99209,6.86755],[-179.88043,7.07224],[-179.70083,7.21915],[-179.47288,7.28891],[-171.1031,7.31329],[-164.84081,7.37562],[-164.74852,7.37654],[-165.43173,8.51952],[-161.1775,6.83791],[-162.38479,6.3362]]]]}},{type:"Feature",properties:{Name:"North Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-172.20762,21.70012],[-172.40465,21.63868],[-175.33898,21.68651],[-175.41558,21.68776],[-174.76855,20.61418],[-176.6036,21.34256],[-177.78357,21.80903],[-178.98363,22.28188],[-174.71958,23.82075],[-174.74216,23.78631],[-175.37696,22.81421],[-175.26876,22.81183],[-172.37383,22.74807],[-172.18046,22.67783],[-172.0174,22.54386],[-171.91993,22.37706],[-171.88838,22.18255],[-171.93069,21.98953],[-172.03731,21.82694],[-172.20762,21.70012]]]]}},{type:"Feature",properties:{Name:null,TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-81.66574,2.99195],[-81.93732,2.65353],[-82.26403,2.33363],[-82.67625,2.00758],[-83.12681,1.71402],[-83.6584,1.42506],[-82.73279,.47018],[-84.32346,.70129],[-86.1499,.96664],[-87.26535,1.12869],[-87.04028,1.29325],[-86.27322,1.85402],[-86.26874,1.8573],[-86.05676,2.01223],[-85.98761,2.06278],[-84.38935,3.23038],[-83.56852,3.82954],[-83.56823,3.82975],[-83.56849,3.82886],[-83.8491,2.86402],[-83.9065,2.66655],[-83.50773,2.92053],[-83.34902,3.02159],[-83.31511,3.05068],[-83.00146,3.31966],[-82.89739,3.40889],[-82.86036,3.45207],[-82.69398,3.64599],[-82.5865,3.81582],[-82.56259,3.85358],[-82.47498,4.07063],[-82.44352,4.28553],[-82.50945,4.6489],[-82.61604,4.95903],[-82.77685,5.2553],[-82.98431,5.51889],[-83.35307,5.84204],[-83.75999,6.08542],[-83.8236,6.12345],[-84.24024,6.29923],[-84.3658,6.3522],[-84.67077,6.44181],[-85.03617,6.54915],[-85.78843,6.69915],[-85.81571,6.70262],[-86.47124,6.7858],[-86.65188,6.80871],[-87.60457,6.87375],[-88.39663,6.88955],[-88.64059,6.89442],[-88.82163,6.92161],[-88.94647,6.98491],[-89.00485,7.01451],[-89.14541,7.16086],[-89.23021,7.34759],[-89.24857,7.52952],[-89.20151,7.73335],[-89.11033,7.88223],[-89.00329,7.974],[-88.95622,8.01435],[-88.79268,8.08263],[-88.64053,8.1016],[-87.62223,8.08215],[-86.68656,8.02438],[-85.87859,7.93445],[-85.13838,7.80952],[-84.4633,7.64907],[-83.87583,7.46105],[-83.34278,7.23641],[-82.86495,6.97385],[-82.44373,6.67224],[-82.08053,6.33045],[-81.69764,5.82448],[-81.43148,5.27552],[-81.25603,4.6017],[-81.2246,4.32661],[-81.23706,4.07194],[-81.31257,3.70638],[-81.45389,3.34863],[-81.66574,2.99195]]]]}},{type:"Feature",properties:{Name:"Brazil",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-39.9759,-37.22808],[-39.94959,-37.30051],[-39.29985,-36.42761],[-38.75327,-39.99929],[-39.62778,-39.46048],[-40.62892,-38.8385],[-42.32792,-37.77042],[-42.29473,-37.77091],[-41.02068,-37.78969],[-41.05024,-37.71779],[-41.2803,-37.15575],[-41.50408,-36.47519],[-41.68867,-35.74842],[-41.81856,-35.05518],[-41.91953,-34.24181],[-41.96874,-33.47137],[-41.97681,-32.71451],[-41.94244,-31.87385],[-41.86121,-30.9988],[-41.74468,-30.17409],[-41.71205,-30],[-41.58559,-29.32219],[-41.38212,-28.44376],[-41.13246,-27.53951],[-40.83478,-26.61018],[-40.48725,-25.65659],[-40.13035,-24.77835],[-39.58708,-23.57906],[-38.96388,-22.34902],[-38.25762,-21.09006],[-37.53454,-19.91229],[-36.73658,-18.71349],[-35.86132,-17.49535],[-34.90631,-16.25965],[-33.91811,-15.06546],[-32.7474,-13.74312],[-31.48157,-12.40794],[-30.17923,-11.12099],[-30,-10.9549],[-28.78491,-9.82658],[-26.9444,-8.231],[-25.03348,-6.69084],[-24.81744,-6.58303],[-24.70142,-6.56355],[-24.47056,-6.59135],[-24.26417,-6.70541],[-24.17875,-6.79373],[-24.07023,-7.0082],[-24.05062,-7.12333],[-24.07861,-7.35235],[-24.19343,-7.55699],[-25.879,-8.91969],[-27.17903,-10.01989],[-28.53292,-11.23034],[-29.80183,-12.43321],[-30,-12.63333],[-31.04243,-13.68334],[-32.19477,-14.92126],[-33.30787,-16.20034],[-34.28761,-17.40746],[-35.02923,-18.38195],[-35.71837,-19.3436],[-36.35643,-20.29153],[-37.00718,-21.32766],[-37.542,-22.24386],[-38.0815,-23.24276],[-38.56524,-24.22058],[-38.99513,-25.17636],[-39.40811,-26.20121],[-39.78997,-27.28628],[-40.10343,-28.33566],[-40.35179,-29.34813],[-40.4764,-30],[-40.53837,-30.32254],[-40.67463,-31.33399],[-40.7465,-32.29834],[-40.75875,-33.17968],[-40.69667,-34.26125],[-40.54115,-35.3319],[-40.28545,-36.37078],[-39.9759,-37.22808]]]]}},{type:"Feature",properties:{Name:"Eq. Countercurrent",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-9.56847,3.03888],[-9.47913,3.02013],[-9.85862,4.25226],[-8.25631,3.12075],[-6.11989,1.61024],[-7.41186,1.40195],[-10.64177,.88114],[-10.64176,.88115],[-9.74733,1.83308],[-9.83886,1.85232],[-16.94405,3.34513],[-19.22105,3.87051],[-21.27697,4.38985],[-23.19472,4.92969],[-24.94853,5.49024],[-26.45702,6.04569],[-27.80199,6.62556],[-28.54065,6.99287],[-29.22623,7.37738],[-29.79385,7.74066],[-30,7.89292],[-30.31103,8.12255],[-30.77423,8.52524],[-31.17991,8.9509],[-31.50808,9.38009],[-31.75604,9.80626],[-31.94127,10.25537],[-32.05695,10.72446],[-32.0956,11.14018],[-32.06699,11.63377],[-31.97931,12.05851],[-31.80461,12.55472],[-31.59397,12.9796],[-31.27862,13.4735],[-30.82622,14.03951],[-30.27431,14.6099],[-30,14.85202],[-29.61964,15.1873],[-28.85893,15.77428],[-28.64097,15.87493],[-28.40793,15.88694],[-28.18719,15.81402],[-28.00619,15.65974],[-27.91895,15.50469],[-27.88406,15.3376],[-27.91621,15.11536],[-27.99721,14.96359],[-28.0774,14.87574],[-28.98784,14.15837],[-29.55097,13.641],[-30,13.1496],[-30.05523,13.08909],[-30.42901,12.57185],[-30.65932,12.14575],[-30.80321,11.75071],[-30.87059,11.38404],[-30.8706,11.04083],[-30.7833,10.62401],[-30.59603,10.20983],[-30.30378,9.78933],[-30,9.46837],[-29.9034,9.36625],[-29.39835,8.94536],[-28.79453,8.53145],[-28.09969,8.12746],[-27.32245,7.73638],[-26.01978,7.17461],[-24.52708,6.62634],[-22.82205,6.08382],[-20.87101,5.53728],[-18.8474,5.02918],[-16.56935,4.50642],[-9.56847,3.03888]]]]}},{type:"Feature",properties:{Name:"South Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-32.88495,.47945],[-30.6954,0],[-30,-.15227],[-29.46138,-.27022],[-27.15218,-.7038],[-24.67226,-1.11705],[-22.14848,-1.49148],[-19.3297,-1.86514],[-13.33003,-2.54881],[-3.68608,-3.50404],[-3.45494,-3.57486],[-3.2752,-3.72343],[-3.16441,-3.92838],[-3.14012,-4.16831],[-3.21104,-4.39878],[-3.35992,-4.57797],[-3.56533,-4.68841],[-3.80585,-4.71262],[-13.99071,-3.70159],[-17.27504,-3.33836],[-20.26811,-2.97254],[-24.87376,-2.31774],[-27.00574,-1.96544],[-29.10469,-1.58065],[-30,-1.39854],[-31.0464,-1.18567],[-32.83396,-.78378],[-34.58699,-.34887],[-35.85955,0],[-36.21547,.09757],[-36.3027,.12149],[-36.27554,0],[-36.02176,-1.13489],[-37.38554,0],[-39.54227,1.79457],[-38.23799,1.90127],[-36.93368,2.00796],[-34.97722,2.16798],[-34.97723,2.16797],[-35.94684,1.28585],[-35.85475,1.2616],[-32.88495,.47945]]]]}},{type:"Feature",properties:{Name:"South Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-56.42224,11.12355],[-54.22724,9.77986],[-51.51419,8.17281],[-48.47442,6.41709],[-45.39718,4.67955],[-45.24066,4.53857],[-45.13545,4.33087],[-45.11604,4.09891],[-45.18996,3.86927],[-45.3474,3.6862],[-45.55573,3.58121],[-45.78831,3.56183],[-46.01849,3.6356],[-49.09279,5.37367],[-52.15598,7.14697],[-54.89263,8.77292],[-57.11043,10.13567],[-57.18984,10.18436],[-57.28184,8.90978],[-57.28248,8.90096],[-58.37006,10.51701],[-59.09216,11.58541],[-59.81425,12.64974],[-55.33397,11.71922],[-56.49979,11.17092],[-56.42224,11.12355]]]]}},{type:"Feature",properties:{Name:"North Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-46.08899,14.56846],[-42.59269,14.45575],[-39.01801,14.45686],[-35.3081,14.57052],[-35.07703,14.51321],[-34.89049,14.37841],[-34.76899,14.18404],[-34.733,13.94946],[-34.79222,13.72509],[-34.93142,13.54381],[-35.13199,13.42566],[-35.31148,13.39053],[-38.99828,13.27491],[-42.68766,13.27501],[-46.16885,13.38935],[-49.35455,13.61078],[-49.44423,13.61702],[-48.93562,12.46096],[-48.93561,12.46094],[-50.64958,13.39344],[-52.93485,14.63113],[-51.67242,14.96448],[-50.41004,15.29731],[-48.51637,15.79558],[-49.30478,14.78985],[-49.20971,14.78331],[-46.08899,14.56846]]]]}},{type:"Feature",properties:{Name:"North Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-69.42,23.64559],[-68.65426,23.23735],[-67.83721,22.84996],[-66.96806,22.48348],[-65.40163,21.91915],[-63.6848,21.41292],[-61.91124,20.98572],[-60,20.61365],[-59.89084,20.59237],[-57.18122,20.18564],[-54.21486,19.86275],[-50.99417,19.62265],[-47.51368,19.46269],[-43.76796,19.38012],[-39.51464,19.37366],[-35.21332,19.44025],[-30,19.58744],[-29.73198,19.59501],[-29.51087,19.51681],[-29.3401,19.36795],[-29.24002,19.166],[-29.23038,18.93423],[-29.31337,18.72494],[-29.47123,18.56314],[-29.68516,18.46824],[-29.80728,18.45194],[-30,18.44601],[-34.9105,18.29478],[-39.50476,18.22107],[-43.78295,18.22775],[-47.55682,18.31143],[-51.07097,18.47394],[-54.33199,18.71882],[-57.34649,19.04946],[-60,19.45067],[-60.11534,19.46809],[-61.8217,19.79628],[-63.42841,20.16593],[-64.93708,20.57819],[-66.34933,21.03416],[-67.58718,21.50224],[-68.81721,22.04574],[-69.95557,22.63574],[-70.92244,23.22361],[-71.00387,23.273],[-71.29497,22.11652],[-71.30332,22.0832],[-72.18197,23.85362],[-72.70581,24.89785],[-73.20681,25.88835],[-68.9306,24.40277],[-70.13518,24.07462],[-70.06094,24.03016],[-69.42,23.64559]]]]}},{type:"Feature",properties:{Name:"Caribbean",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-72.29438,15.96006],[-70.14364,15.94479],[-67.03912,15.97732],[-66.78952,15.88897],[-66.62176,15.73401],[-66.52574,15.52622],[-66.516,15.31872],[-66.57842,15.12691],[-66.68037,14.98939],[-66.87117,14.85952],[-67.04494,14.81287],[-69.48202,14.77438],[-71.66184,14.77657],[-73.84786,14.83653],[-75.66465,14.96613],[-77.16125,15.16839],[-78.36708,15.43642],[-78.45791,15.4566],[-78.37626,14.21652],[-78.37436,14.18754],[-79.81442,15.77264],[-80.64353,16.67976],[-81.39546,17.49873],[-76.82795,17.17217],[-77.8725,16.51431],[-77.77623,16.49457],[-76.84526,16.30353],[-75.7036,16.14979],[-74.14267,16.02676],[-72.29438,15.96006]]]]}},{type:"Feature",properties:{Name:null,TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[50.09418,-.83658],[50.11427,-.97003],[50.09456,-1.13344],[50.03662,-1.27718],[49.93686,-1.4094],[49.80865,-1.50757],[49.66035,-1.56839],[49.50032,-1.58854],[49.36141,-1.56828],[49.33694,-1.56472],[49.23164,-1.52393],[48.465,-1.22694],[47.71398,-1.00858],[47.18496,-.91241],[46.72328,-.88462],[46.71116,-.88603],[46.27707,-.93649],[46.26281,-.93815],[45.9232,-1.08216],[45.80378,-1.184],[45.72069,-1.30128],[45.646,-1.5635],[45.63099,-1.6162],[45.6493,-1.86609],[45.66011,-2.0135],[45.811,-2.46095],[45.85052,-2.52977],[45.89122,-2.60062],[46.05643,-2.8882],[46.22954,-3.09646],[46.3979,-3.29897],[46.51179,-3.41152],[46.4109,-2.22901],[46.78781,-2.63996],[49.50342,-5.59561],[49.50517,-5.59751],[49.46399,-5.59533],[45.30621,-5.37453],[44.93135,-5.35462],[46.0303,-4.60004],[45.83703,-4.42608],[45.50028,-4.12288],[45.31424,-3.89646],[45.0598,-3.58669],[44.71669,-2.99447],[44.50046,-2.4004],[44.41145,-1.80924],[44.45635,-1.25028],[44.62948,-.75949],[44.76408,-.53806],[44.93099,-.3351],[45.3069,-.03045],[45.37236,0],[45.77399,.18685],[46.31119,.30663],[46.93133,.32933],[47.63281,.25084],[48.40123,.07011],[48.6035,0],[49.38744,-.27173],[49.77545,-.43415],[49.92448,-.53796],[50.02592,-.66393],[50.09028,-.81074],[50.09418,-.83658]]]]}},{type:"Feature",properties:{Name:"Agulhas",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[50.78111,-11.2817],[51.38561,-11.70588],[51.97847,-12.17443],[52.6174,-12.73388],[53.27589,-13.36533],[54.04955,-14.1725],[54.42025,-14.61027],[54.47949,-14.80157],[54.47544,-14.97049],[54.42164,-15.1321],[54.31892,-15.27516],[54.17315,-15.38529],[54.00656,-15.44656],[53.83188,-15.45881],[53.66077,-15.42285],[53.4583,-15.30122],[52.28887,-14.07699],[51.21535,-13.10104],[50.27449,-12.38594],[49.34301,-11.83021],[48.91188,-11.63152],[48.46347,-11.46928],[48.04109,-11.36199],[47.60871,-11.30263],[47.21262,-11.29793],[46.81814,-11.34426],[46.44062,-11.44075],[46.04875,-11.59964],[45.45327,-11.96147],[44.88034,-12.45717],[44.3318,-13.07557],[43.77801,-13.85042],[43.24918,-14.73733],[42.71492,-15.77968],[42.16086,-17.00507],[41.59268,-18.39113],[41.55913,-18.47264],[42.8494,-18.26111],[39.75088,-21.43322],[39.70824,-20.21594],[39.66561,-18.98907],[39.60101,-17.11321],[39.60297,-17.11549],[40.42237,-18.06282],[40.4561,-17.98084],[41.0799,-16.45821],[41.6759,-15.14976],[42.25276,-14.04289],[42.86003,-13.04942],[43.48736,-12.20138],[44.13461,-11.50317],[44.82406,-10.93398],[45.51016,-10.52778],[46.01552,-10.32034],[46.50588,-10.18593],[47.01755,-10.11134],[47.51142,-10.09955],[48.03879,-10.14737],[48.57839,-10.25757],[49.13036,-10.43085],[49.643,-10.64364],[50.21896,-10.93904],[50.78111,-11.2817]]]]}},{type:"Feature",properties:{Name:"Eq. Countercurrent",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[84.87272,-7.73066],[84.96453,-7.73589],[84.36692,-6.54192],[84.36691,-6.54189],[88.48495,-8.52939],[87.24384,-8.93954],[84.14101,-9.96287],[84.14101,-9.96287],[84.84033,-8.93564],[84.74765,-8.93037],[76.97825,-8.48842],[69.94472,-8.04768],[60,-7.33701],[53.00865,-6.8367],[52.77588,-6.77192],[52.59254,-6.62848],[52.47675,-6.42715],[52.44658,-6.18874],[52.51182,-5.95726],[52.65625,-5.77488],[52.85889,-5.65966],[53.09875,-5.62963],[60,-6.12464],[70.04802,-6.84454],[77.08797,-7.28675],[84.87272,-7.73066]]]]}},{type:"Feature",properties:{Name:"South Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[141.52232,-9.04134],[142.39611,-9.35754],[144.07952,-10.07862],[145.69896,-10.87983],[149.75894,-13.00286],[150,-13.11618],[150.90334,-13.54036],[152.15173,-14.05865],[153.43975,-14.50512],[154.77988,-14.86371],[156.18531,-15.11862],[157.47926,-15.24444],[158.03666,-15.25987],[158.69235,-15.23859],[159.84134,-15.09974],[160.99487,-14.83145],[162.156,-14.43332],[162.82408,-14.14732],[163.6646,-13.72977],[164.51107,-13.24515],[165.36398,-12.69339],[166.05113,-12.2037],[166.91629,-11.53131],[167.78861,-10.79201],[168.8452,-9.81669],[169.04811,-9.68715],[169.27769,-9.64577],[169.50625,-9.69227],[169.70611,-9.82632],[169.83756,-10.02617],[169.87954,-10.25216],[169.83237,-10.47699],[169.69638,-10.67346],[168.23845,-11.99534],[167.33079,-12.73684],[166.60591,-13.28273],[165.15752,-14.24735],[163.75923,-15.01575],[162.45495,-15.58383],[161.66978,-15.85566],[161.01398,-16.04239],[160.35683,-16.19273],[159.69831,-16.30649],[158.94623,-16.61189],[158.29274,-16.9449],[157.73248,-17.30059],[157.26009,-17.67405],[156.8702,-18.0604],[156.46382,-18.59593],[156.30681,-18.86884],[156.12616,-19.28109],[156.10563,-19.34707],[156.0403,-19.55684],[155.95991,-19.9701],[155.93347,-20.38087],[155.94733,-20.65866],[155.97081,-20.83303],[155.98424,-20.9327],[156.02498,-20.8516],[156.45178,-19.99933],[156.55644,-20.44277],[157.44221,-24.14224],[153.60366,-21.84201],[154.39008,-21.78372],[154.93421,-21.74338],[154.9299,-21.72566],[154.89446,-21.57984],[154.77264,-21.07754],[154.71589,-20.3808],[154.73439,-20.16419],[154.77831,-19.64898],[154.97397,-18.91029],[155.3115,-18.18055],[155.53617,-17.82406],[155.79956,-17.47587],[156.33886,-16.90875],[156.99259,-16.3792],[155.837,-16.24827],[154.59232,-16.02107],[153.40073,-15.71946],[152.13201,-15.30993],[150.91386,-14.83614],[150,-14.42511],[149.50772,-14.20338],[148.13319,-13.51633],[144.53413,-11.63222],[143.40658,-11.09013],[142.49239,-10.69026],[141.24769,-10.21782],[140.12609,-9.87255],[138.96521,-9.60275],[137.75579,-9.41975],[136.85709,-9.34844],[135.95698,-9.33098],[135.00933,-9.3665],[134.09606,-9.4433],[133.20775,-9.55882],[132.12838,-9.75404],[131.28641,-9.94797],[130.25643,-10.23365],[128.44966,-10.85486],[126.67963,-11.59078],[124.72269,-12.50901],[120.94479,-14.38736],[120,-14.83717],[119.29782,-15.17088],[117.35488,-16.02201],[115.52936,-16.73057],[113.3434,-17.44946],[111.26438,-17.99852],[109.18373,-18.41943],[107.054,-18.72119],[106.96175,-18.73425],[107.68573,-19.73637],[107.69294,-19.74631],[105.79027,-19.16085],[104.56455,-18.78257],[103.33878,-18.40343],[107.44238,-16.46236],[106.87546,-17.57399],[106.96635,-17.5612],[108.78479,-17.30511],[110.58516,-16.95522],[112.28703,-16.53361],[114.07517,-15.99235],[116.09765,-15.25921],[118.16407,-14.38668],[120,-13.52515],[120.04689,-13.5031],[124.87507,-11.10584],[126.22611,-10.48064],[127.59599,-9.90033],[129.0487,-9.3604],[130.54668,-8.89931],[131.87565,-8.57829],[133.25366,-8.33592],[134.2031,-8.22279],[135.17961,-8.15171],[136.1147,-8.1267],[137.16464,-8.16032],[138.03418,-8.24033],[139.01565,-8.38827],[139.83068,-8.55767],[140.75344,-8.79983],[141.52232,-9.04134]]]]}},{type:"Feature",properties:{Name:null,TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[133.37673,10.19237],[133.40686,10.16984],[133.39037,10.28748],[133.35886,10.51205],[133.23642,11.38311],[133.49356,11.13515],[136.50242,8.21928],[134.6111,8.2215],[131.92211,8.22465],[132.07229,8.33894],[132.59864,8.73925],[132.96794,9.01987],[132.95341,9.02958],[132.95064,9.03143],[132.41448,9.38948],[131.94231,9.80318],[131.56656,10.24981],[131.30108,10.71172],[131.14812,11.18048],[131.10862,11.66264],[131.18947,12.12218],[131.38747,12.55742],[131.6941,12.94785],[132.0965,13.28705],[132.58841,13.57579],[133.19288,13.82672],[133.99365,14.05097],[134.91439,14.21059],[135.82299,14.29713],[135.98756,14.2743],[136.13564,14.21126],[136.16977,14.17809],[136.34047,14.01215],[136.40126,13.88044],[136.42748,13.73309],[136.41534,13.5852],[136.36759,13.44898],[136.28865,13.32942],[136.18443,13.23517],[136.1711,13.22311],[135.92433,13.12306],[135.03425,13.03247],[134.29032,12.902],[133.75454,12.76067],[133.75051,12.75961],[133.45936,12.6514],[133.31435,12.59749],[133.28302,12.58584],[132.92807,12.39555],[132.86188,12.36005],[132.54977,12.10082],[132.37172,11.82564],[132.32541,11.53503],[132.41271,11.20015],[132.43836,11.15882],[132.63734,10.83807],[132.6441,10.83109],[132.68089,10.79309],[132.96308,10.50145],[133.37673,10.19237]]]]}},{type:"Feature",properties:{Name:null,TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[136.39671,5.96232],[134.18168,3.00557],[133.93458,2.67508],[133.92198,3.49557],[133.91569,3.90533],[133.67162,3.63803],[133.62817,3.59042],[133.5152,3.41831],[133.42149,3.27551],[133.30627,2.97387],[133.3049,2.94942],[133.29131,2.70744],[133.39129,2.44607],[133.61349,2.2092],[133.62316,2.19889],[133.98339,1.97578],[134.235,1.87488],[134.42057,1.80046],[134.60438,1.7515],[134.91632,1.66842],[135.46103,1.57346],[136.19485,1.5027],[136.50615,1.49347],[137.03758,1.47771],[137.25248,1.41426],[137.26603,1.40309],[137.45426,1.24796],[137.5685,1.00963],[137.57171,.74947],[137.46312,.50794],[137.35859,.41748],[137.26545,.33688],[137.0066,.2642],[136.04027,.29297],[135.16618,.38563],[134.49671,.5155],[133.89041,.69605],[133.37753,.91803],[132.93931,1.18926],[132.61852,1.47119],[132.35885,1.79968],[132.18434,2.14978],[132.0847,2.54127],[132.07251,2.93172],[132.14677,3.35252],[132.30109,3.75642],[132.53721,4.15991],[132.87425,4.57802],[133.20951,4.89736],[133.31449,4.99732],[132.58613,5.39653],[132.14896,5.63601],[136.67518,6.33308],[136.39671,5.96232]]]]}},{type:"Feature",properties:{Name:"Eq. Countercurrent",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[175.86524,7.6056],[177.07352,7.10714],[178.28177,6.60815],[174.03083,4.9113],[174.03084,4.91132],[174.68461,6.01579],[174.59231,6.01648],[150,6.20172],[148.43033,6.21354],[139.68469,6.24723],[139.44772,6.2948],[139.25421,6.42447],[139.12375,6.61675],[139.07592,6.85209],[139.12377,7.08731],[139.25425,7.2793],[139.44778,7.40869],[139.68476,7.45612],[148.44188,7.42245],[150,7.41075],[174.61149,7.22586],[174.70397,7.22517],[174.05287,8.35218],[174.05286,8.35219],[175.86524,7.6056]]]]}},{type:"Feature",properties:{Name:"South Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[179.99999,.45448],[179.99999,.1119],[179.99999,0],[179.99999,-.02851],[179.76956,-.07371],[167.84721,0],[150,.11033],[148.04619,.12241],[147.9538,.12298],[148.02424,0],[148.60145,-1.00771],[148.60146,-1.00772],[146.78884,-.25441],[146.17672,0],[145.58044,.24782],[144.37205,.75004],[145.58643,1.2376],[148.62248,2.45608],[148.62247,2.45606],[147.96516,1.34044],[148.05755,1.33987],[150,1.32787],[179.77635,1.1438],[179.99999,1.09736],[179.99999,.98361],[179.99999,.95889],[179.99999,.61772],[179.99999,.4918],[179.99999,.45448]]]]}},{type:"Feature",properties:{Name:"East Australia",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[159.3338,-40.37291],[159.96148,-40.376],[160.53455,-40.33587],[161.12219,-40.25481],[161.72204,-40.13226],[162.33177,-39.96757],[162.94901,-39.76001],[163.57141,-39.50875],[164.11841,-39.25236],[164.74402,-38.91688],[165.28968,-38.58575],[165.90916,-38.16346],[166.44575,-37.75496],[167.27455,-37.03795],[168.08012,-36.22687],[168.78693,-35.4055],[169.60474,-34.33094],[170.58239,-32.83965],[172.21835,-30],[172.74413,-29.06937],[173.36446,-28.08526],[173.88447,-27.32894],[174.30708,-26.81661],[174.71868,-26.42758],[175.10594,-26.15893],[175.21068,-26.08616],[175.78235,-25.79979],[175.4244,-25.40049],[174.94114,-24.8593],[176.55847,-25.20886],[177.70236,-25.45549],[177.7744,-25.47101],[178.1243,-25.54634],[179.3963,-25.81979],[175.9346,-27.67927],[175.47143,-27.92573],[175.8838,-26.9891],[175.59673,-27.18426],[175.27545,-27.47466],[175.1793,-27.59453],[174.76975,-28.10366],[174.08682,-29.1333],[173.56741,-30],[173.44094,-30.20991],[172.01174,-32.72409],[171.35442,-33.80599],[170.69234,-34.78572],[169.83159,-35.91427],[168.93372,-36.94168],[167.95403,-37.88951],[166.97827,-38.6853],[165.8906,-39.42468],[164.77896,-40.03984],[164.17291,-40.32064],[163.56397,-40.56614],[162.95366,-40.77643],[162.34345,-40.95153],[161.73486,-41.09139],[161.12938,-41.19596],[160.52851,-41.26509],[159.93374,-41.29859],[159.36548,-41.29676],[158.84603,-41.26424],[158.23569,-41.18579],[157.73996,-41.08739],[157.1632,-40.92935],[156.69971,-40.76406],[156.18305,-40.51802],[155.76093,-40.19434],[155.44726,-39.80329],[155.33181,-39.58721],[155.21859,-39.28162],[155.12385,-38.70221],[155.14893,-38.06204],[155.27646,-37.39737],[155.53534,-36.58777],[155.91107,-35.71178],[156.37078,-34.82404],[156.96622,-33.82139],[157.6295,-32.81725],[158.38913,-31.75978],[159.2436,-30.65171],[159.77942,-30],[160.19138,-29.49602],[161.23092,-28.29626],[162.36068,-27.05625],[163.57911,-25.78004],[164.88468,-24.47199],[166.27583,-23.13668],[167.04129,-22.44422],[168.15908,-21.49937],[169.23644,-20.63715],[170.35662,-19.7865],[171.91527,-18.67371],[173.59846,-17.55634],[175.30203,-16.50697],[177.07375,-15.49597],[178.562,-14.70604],[179.6732,-14.16312],[179.79118,-14.14379],[179.99999,-14.16918],[179.99999,-14.2623],[179.99999,-14.298],[179.99999,-14.56402],[179.99999,-14.7541],[179.99999,-14.89868],[179.99999,-15.17084],[179.99999,-15.2459],[179.99999,-15.30214],[178.23206,-16.21341],[176.58628,-17.12278],[174.94715,-18.09793],[173.32275,-19.1378],[171.7692,-20.20676],[170.28866,-21.30007],[168.88329,-22.41302],[167.47487,-23.61186],[165.9487,-25.05612],[164.52617,-26.46798],[163.20958,-27.8405],[161.95514,-29.21925],[161.28695,-30],[160.8203,-30.54166],[159.77116,-31.84854],[158.88807,-33.03704],[158.07961,-34.23391],[157.42209,-35.33854],[156.91836,-36.34421],[156.55833,-37.28096],[156.36933,-38.08742],[156.33721,-38.4679],[156.35099,-38.78921],[156.40707,-39.07607],[156.50104,-39.31809],[156.60063,-39.48036],[156.78657,-39.67978],[157.02551,-39.83652],[157.26446,-39.94195],[157.71117,-40.0998],[158.25647,-40.23961],[158.74361,-40.32154],[159.3338,-40.37291]]]]}},{type:"Feature",properties:{Name:"North Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[179.99999,15.08578],[179.99999,14.9686],[179.85338,14.94282],[174.51348,15.02007],[169.81631,15.03823],[165.51987,14.9981],[161.41323,14.89731],[157.37514,14.7298],[153.48173,14.49778],[150,14.22494],[149.62017,14.19516],[145.86844,13.82899],[145.77634,13.81999],[146.57686,12.74991],[142.18113,14.00162],[143.33518,14.59952],[144.48924,15.19581],[146.22035,16.08708],[145.71193,14.99916],[145.8037,15.00805],[149.56792,15.37229],[150,15.40588],[153.44192,15.67328],[157.34742,15.90406],[161.39679,16.07068],[165.51272,16.17094],[169.81557,16.21084],[174.52551,16.19271],[179.87681,16.11573],[179.99999,16.08946],[179.99999,15.97196],[179.99999,15.73771],[179.99999,15.72017],[179.99999,15.33982],[179.99999,15.2459],[179.99999,15.08578]]]]}},{type:"Feature",properties:{Name:"Alaska",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-172.91617,61.0533],[-172.21308,60.67564],[-171.47657,60.20184],[-171.21152,60],[-170.48333,59.43909],[-169.65887,58.70204],[-167.29132,56.58934],[-166.44756,55.87291],[-165.70743,55.30521],[-165.01667,54.8476],[-164.32686,54.47482],[-163.6766,54.21079],[-163.03299,54.03409],[-162.61181,53.96403],[-162.23835,53.93051],[-161.8319,53.92193],[-161.39717,53.94291],[-160.93398,53.99602],[-160.49135,54.07306],[-160.02301,54.17937],[-159.5277,54.31637],[-158.94419,54.50619],[-158.32495,54.73677],[-157.67047,55.00857],[-156.97942,55.32221],[-155.56182,56.03382],[-153.82115,56.98957],[-153.66152,57.03282],[-153.43049,57.04823],[-153.20405,57.01505],[-153.0539,56.95796],[-152.94144,56.87911],[-152.86872,56.75709],[-152.88495,56.62959],[-152.95593,56.53951],[-153.8316,56.02806],[-154.94376,55.42116],[-155.44287,54.68963],[-155.80811,53.96717],[-156.02402,53.27853],[-156.09924,52.63558],[-156.09696,52.58689],[-156.0835,52.29801],[-156.03625,52.0154],[-155.89318,51.58533],[-155.67729,51.21252],[-155.38565,50.89304],[-155.21794,50.76032],[-154.97362,50.61012],[-154.96282,50.60502],[-154.91768,50.58371],[-154.776,50.51677],[-155.13405,51.18613],[-155.15285,51.22101],[-151.3429,49.60124],[-152.87422,49.41271],[-153.33971,49.35526],[-155.84305,49.04514],[-154.95958,49.69233],[-155.01691,49.71065],[-155.3057,49.80286],[-155.67699,49.96656],[-156.01145,50.16085],[-156.30823,50.38252],[-156.56646,50.62835],[-156.78527,50.89514],[-156.96612,51.18103],[-157.12965,51.53592],[-157.22925,51.85673],[-157.29151,52.19133],[-157.31653,52.5383],[-157.29995,52.93714],[-157.23691,53.3447],[-157.14538,53.70221],[-157.00653,54.0967],[-156.82576,54.49736],[-157.48415,54.21485],[-158.11495,53.96881],[-158.71066,53.76185],[-159.28949,53.58693],[-159.85264,53.4443],[-160.40128,53.33409],[-160.93661,53.25638],[-161.45981,53.21116],[-162.00433,53.19859],[-162.44084,53.21589],[-162.94904,53.26883],[-163.43944,53.35479],[-163.91126,53.47148],[-164.3637,53.61658],[-164.79761,53.78751],[-165.2837,54.01586],[-165.88197,54.35093],[-166.45765,54.72729],[-167.07988,55.18757],[-167.6941,55.6866],[-169.02461,56.86307],[-171.55367,59.14137],[-172.46589,59.84726],[-172.69579,60],[-173.00955,60.20732],[-173.48789,60.48437],[-173.96994,60.72614],[-174.43179,60.92257],[-174.50401,60.95318],[-174.18406,60.45923],[-177.94567,61.72225],[-176.94151,61.80312],[-175.79021,61.89558],[-173.43033,62.08424],[-173.4876,62.05518],[-174.3466,61.61596],[-174.26004,61.58605],[-173.65201,61.37512],[-172.91617,61.0533]]]]}},{type:"Feature",properties:{Name:"North Pacific",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-145.74239,45.49502],[-147.99712,44.55565],[-149.68819,43.84099],[-149.68818,43.84101],[-149.22486,44.66848],[-149.3158,44.65988],[-150,44.59511],[-152.25861,44.38079],[-155.62104,44.10528],[-159.17884,43.85295],[-163.01784,43.61789],[-166.98642,43.40976],[-171.17244,43.2245],[-175.41,43.07024],[-179.78359,42.9449],[-179.99999,42.97135],[-179.99999,43.06704],[-179.99999,43.27869],[-179.99999,43.28897],[-179.99999,43.48863],[-179.99999,43.71064],[-179.99999,43.77049],[-179.99999,43.79924],[-179.82469,43.82926],[-175.58398,43.94849],[-171.34945,44.09956],[-167.16597,44.28123],[-163.20043,44.48541],[-159.36598,44.71597],[-155.70354,44.9717],[-152.35817,45.24227],[-150,45.46328],[-149.43825,45.5158],[-149.346,45.52442],[-150,46.09868],[-150.18785,46.26253],[-150.18786,46.26254],[-150,46.23032],[-148.28265,45.9349],[-145.74239,45.49502]]]]}},{type:"Feature",properties:{Name:"Alaska",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-140.64866,55.31755],[-140.34163,55.02785],[-140.08147,54.72796],[-139.8698,54.41862],[-139.70824,54.1006],[-139.59839,53.77471],[-139.54397,53.46415],[-139.53613,53.1684],[-139.57016,52.8716],[-139.64637,52.57279],[-139.75759,52.28867],[-139.91629,51.98855],[-140.10588,51.70486],[-140.33375,51.42265],[-140.59996,51.1426],[-140.94036,50.8346],[-141.32785,50.53074],[-141.76263,50.2317],[-142.24495,49.93813],[-142.80277,49.63654],[-143.4093,49.34506],[-143.60464,49.29313],[-143.83799,49.29024],[-144.10487,49.36675],[-144.27884,49.50484],[-144.32834,49.59666],[-144.34166,49.69132],[-144.26444,49.87192],[-144.13206,49.97651],[-143.40747,50.32821],[-142.79346,50.67333],[-142.30214,50.99604],[-141.88295,51.32009],[-141.50892,51.66976],[-141.20388,52.03044],[-140.97958,52.38768],[-140.82533,52.76589],[-140.7608,53.08932],[-140.76034,53.42877],[-140.82321,53.74365],[-140.95492,54.07027],[-141.15341,54.39078],[-141.41824,54.70401],[-141.749,55.00886],[-142.06662,55.24693],[-142.12389,55.28971],[-142.28532,54.58481],[-144.58471,56.81623],[-143.47486,56.64833],[-142.2651,56.46445],[-140.16924,56.14377],[-140.20672,56.13525],[-141.39687,55.86349],[-141.3346,55.8216],[-141.00095,55.59633],[-140.64866,55.31755]]]]}},{type:"Feature",properties:{Name:null,TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-50.18302,59.96358],[-49.67882,59.68898],[-49.23989,59.40751],[-48.78107,59.07838],[-46.59809,57.33679],[-46.14827,57.01723],[-45.74866,56.78286],[-45.32103,56.61072],[-45.1296,56.56771],[-44.95234,56.55144],[-44.78858,56.55697],[-44.60303,56.58487],[-44.08879,56.72149],[-43.94238,56.72988],[-43.7698,56.71453],[-43.5872,56.6632],[-43.44206,56.57775],[-43.35887,56.46986],[-43.3474,56.35656],[-43.44781,56.20525],[-43.54646,56.1424],[-43.67892,56.09007],[-44.17803,55.95139],[-44.71108,55.87985],[-45.12811,55.88011],[-45.52974,55.92855],[-45.92275,56.02326],[-46.31568,56.16761],[-46.87109,56.45555],[-47.4763,56.86802],[-49.70433,58.66087],[-50.37715,59.14346],[-51.04863,59.53183],[-51.33552,59.65477],[-51.54435,59.71442],[-51.64708,59.59251],[-51.72495,59.41008],[-51.78062,59.15328],[-51.80051,58.90916],[-51.80449,58.86008],[-50.7466,59.23061],[-52.17092,56.92996],[-52.74051,57.55276],[-53.31007,58.16507],[-54.20238,59.10356],[-54.19227,59.10102],[-53.02541,58.80698],[-53.02217,58.85422],[-52.99887,59.19245],[-52.92596,59.51804],[-52.81176,59.77137],[-52.63826,59.98609],[-52.61894,60],[-52.42466,60.13956],[-52.13439,60.257],[-51.78886,60.32018],[-51.45214,60.32521],[-51.03495,60.26874],[-50.61958,60.14849],[-50.26881,60],[-50.18302,59.96358]]]]}},{type:"Feature",properties:{Name:"Gulf Stream",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-54.66831,40.34723],[-57.82556,37.77109],[-57.82556,37.77109],[-57.68688,38.81635],[-57.7713,38.78567],[-60,37.97115],[-60.39304,37.82656],[-66.49249,35.44746],[-69.14635,34.42984],[-72.16764,33.35452],[-73.60778,32.88354],[-75.10559,32.42498],[-75.28551,32.39632],[-75.51704,32.42778],[-75.71612,32.52952],[-75.8578,32.69119],[-75.91017,32.84054],[-75.8956,33.03839],[-75.79471,33.21386],[-75.61949,33.34626],[-72.55373,34.31575],[-69.64794,35.33995],[-67.01998,36.33649],[-60.93811,38.68167],[-60,39.02242],[-58.30517,39.6339],[-58.22211,39.66373],[-59.24574,40.22664],[-57.28396,40.27835],[-54.66831,40.34723]]]]}},{type:"Feature",properties:{Name:"North Atlantic",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-24.68182,60.99378],[-24.43576,60.79004],[-24.05092,60.3729],[-23.89436,60.14477],[-23.81706,60],[-23.7424,59.85958],[-23.57875,59.36022],[-23.53167,58.81813],[-23.61458,58.27095],[-23.82821,57.71489],[-22.21996,58.25207],[-20.59178,58.74946],[-18.94235,59.20722],[-17.35361,59.60476],[-17.27039,59.62546],[-18.26174,60],[-18.29844,60.01378],[-18.30556,60.01646],[-16.29749,60.02887],[-15.01161,60.03681],[-13.72575,60.04475],[-13.81483,60],[-16.95571,58.38293],[-16.79203,59.05438],[-16.87486,59.03348],[-18.30272,58.67135],[-19.79671,58.25403],[-21.33618,57.78276],[-22.85958,57.274],[-24.66789,56.61374],[-24.83589,56.51768],[-25.12428,56.39759],[-25.8946,56.13003],[-27.48644,55.45904],[-29.06498,54.74428],[-30,54.29025],[-31.06484,53.76702],[-33.13398,52.67055],[-35.27361,51.44496],[-37.48572,50.08016],[-39.77314,48.5661],[-42.13966,46.89308],[-44.67468,44.98673],[-47.6398,42.61896],[-47.83356,42.51249],[-47.94438,42.48332],[-48.17659,42.47391],[-48.39986,42.5307],[-48.58263,42.65126],[-48.68364,42.80809],[-48.69639,42.97822],[-48.61935,43.14134],[-48.54669,43.21399],[-45.37951,45.71176],[-42.56752,47.78823],[-40.01361,49.54831],[-37.62472,51.08051],[-34.50262,52.91173],[-32.97248,53.7377],[-31.43149,54.52211],[-30,55.20817],[-29.96995,55.22245],[-28.49637,55.88608],[-27.00957,56.51311],[-25.60264,57.06779],[-25.30782,57.40339],[-25.04426,57.80283],[-24.86514,58.20574],[-24.76823,58.60703],[-24.75014,58.98118],[-24.80986,59.38256],[-24.94885,59.76485],[-25.08905,60],[-25.16242,60.12241],[-25.45988,60.46273],[-25.81513,60.74878],[-25.8807,60.8013],[-25.72647,60.33349],[-29.06694,61.84798],[-27.82376,61.86106],[-26.93853,61.87036],[-24.48779,61.89612],[-24.55512,61.87051],[-25.52768,61.49818],[-25.45721,61.4597],[-24.95581,61.18451],[-24.68182,60.99378]]]]}},{type:"Feature",properties:{Name:"North Atlantic/Azores",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-19.81444,51.56768],[-23.8789,50.23604],[-23.34592,50.96428],[-23.4367,50.94951],[-24.42989,50.78756],[-25.56227,50.5623],[-25.09285,50.36498],[-24.65711,50.12075],[-24.25547,49.83264],[-23.86922,49.4885],[-23.50669,49.09793],[-23.13675,48.62121],[-22.78629,48.08733],[-22.4834,47.55223],[-22.45098,47.49464],[-21.56663,48.12711],[-21.56204,48.13037],[-21.75892,46.76519],[-21.88275,45.88837],[-22.00658,44.99744],[-24.88142,47.46347],[-23.62278,47.2589],[-23.65687,47.31869],[-23.9848,47.89032],[-24.35661,48.43799],[-24.72064,48.88006],[-25.11168,49.26069],[-25.38081,49.47259],[-25.65265,49.64898],[-25.97281,49.81203],[-26.26528,49.92198],[-26.58099,50.00375],[-26.91176,50.05254],[-27.26602,50.06909],[-27.64738,50.05206],[-28.70572,49.75794],[-30,49.35916],[-30.00773,49.35676],[-31.26309,48.9362],[-32.58461,48.45925],[-35.21249,47.41052],[-38.00008,46.15777],[-38.22783,46.10857],[-38.4597,46.12276],[-38.66845,46.19676],[-38.8261,46.32596],[-38.8971,46.483],[-38.87665,46.64242],[-38.7698,46.78555],[-38.63602,46.87108],[-36.95045,47.63552],[-35.28452,48.34067],[-33.64292,48.98585],[-32.09178,49.54905],[-30,50.22885],[-29.73548,50.31413],[-28.56156,50.65206],[-27.47052,50.9384],[-26.40493,51.19053],[-25.36662,51.40799],[-24.35741,51.59025],[-23.52101,51.71623],[-23.42983,51.72995],[-24.18125,52.38061],[-24.19462,52.3921],[-22.15166,52.00947],[-20.92942,51.77897],[-19.81444,51.56768]]]]}},{type:"Feature",properties:{Name:"Oyashio",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[161.8637,50.79936],[161.71853,50.36718],[161.6778,49.93775],[161.74226,49.53418],[161.7807,49.44385],[161.8986,49.16581],[162.16801,48.79321],[162.50219,48.47822],[162.51441,48.46998],[162.92237,48.19454],[163.33998,47.98705],[163.3856,47.96434],[163.21204,48.54508],[163.14627,48.76341],[166.59683,46.73871],[162.02423,46.55607],[163.02735,47.15154],[162.75236,47.27235],[162.37819,47.43628],[162.26764,47.50241],[162.0057,47.65876],[161.82626,47.7656],[161.34041,48.1559],[161.13186,48.38755],[160.96322,48.57411],[160.69311,49.01015],[160.51988,49.48391],[160.4595,49.956],[160.5108,50.45503],[157.13964,48.0947],[154.69343,46.37141],[152.4009,44.79068],[150.24528,43.36045],[150.1771,43.31466],[151.39745,43.00085],[151.40387,42.9992],[150,42.66047],[149.52654,42.54581],[148.28987,42.24533],[147.05316,41.94341],[149.1569,44.89763],[149.38862,43.98626],[149.45621,44.03142],[150,44.39349],[151.90915,45.64701],[154.59597,47.49265],[157.04752,49.20482],[163.62716,53.60901],[163.82472,53.69161],[164.05246,53.72181],[164.28272,53.69926],[164.48782,53.62342],[164.60058,53.53779],[164.67376,53.40518],[164.65802,53.26652],[164.5874,53.16849],[162.6014,51.86891],[162.10751,51.23239],[161.8637,50.79936]]]]}},{type:"Feature",properties:{Name:"North Pacific",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[178.24722,42.91268],[177.05377,42.537],[175.2306,41.95871],[175.23674,41.96688],[175.86506,42.79815],[175.76851,42.79755],[173.92185,42.78609],[173.74411,42.83937],[173.69637,42.86972],[173.59015,42.93718],[173.48811,43.06756],[173.4516,43.20947],[173.47905,43.35212],[173.57269,43.48492],[173.69961,43.57251],[173.72028,43.58677],[173.89444,43.64527],[174.04611,43.66169],[175.75459,43.68383],[175.84233,43.68497],[175.17199,44.48255],[179.44067,43.28608],[178.24722,42.91268]]]]}},{type:"Feature",properties:{Name:"Oyashio",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[173.82564,57.76527],[172.84789,57.10998],[172.78909,57.0702],[174.10173,56.9816],[172.41142,56.43379],[170.15772,55.69092],[170.83489,57.09017],[171.34275,58.10614],[171.34275,58.10614],[171.83407,57.47815],[171.89122,57.51607],[173.20009,58.3739],[174.48506,59.13929],[175.71096,59.79464],[176.14361,60],[176.86851,60.34124],[178.16746,60.86414],[178.7812,61.07553],[179.40756,61.26624],[179.57751,61.299],[179.78288,61.30487],[179.9788,61.27804],[179.99999,61.27121],[179.99999,61.20065],[179.99999,61],[179.99999,60.82884],[179.99999,60.7591],[179.1916,60.49241],[178.46472,60.22054],[177.94433,60],[177.62376,59.86341],[176.7415,59.44368],[175.81743,58.95824],[174.83558,58.39432],[173.82564,57.76527]]]]}},{type:"Feature",properties:{Name:"Transpolar Drift",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[19.75196,83.90069],[20.77952,83.861],[21.84415,83.81391],[22.94953,83.75912],[24.0993,83.69631],[24.55411,83.66994],[24.70093,83.65786],[24.83022,83.63622],[24.87622,83.61088],[24.85122,83.5912],[24.80434,83.57846],[24.6505,83.55757],[24.38761,83.54369],[24.15311,83.54354],[23.98053,83.55041],[22.33814,83.64311],[21.11834,83.70374],[19.88467,83.75701],[18.71358,83.79915],[17.52983,83.83245],[16.39999,83.85455],[15.31542,83.86606],[14.27915,83.86754],[13.29954,83.86006],[12.33242,83.84405],[11.369,83.81967],[10.40046,83.78704],[9.37139,83.74399],[8.34072,83.69296],[7.21334,83.62945],[6.05429,83.55708],[5.97544,83.55213],[7.11153,83.48362],[2.59447,83.39709],[3.36343,83.51754],[4.13243,83.63579],[5.2889,83.80961],[5.28924,83.80831],[5.3254,83.66683],[5.40783,83.67192],[6.68315,83.75007],[7.8664,83.81515],[9.02934,83.8709],[10.07427,83.91299],[11.12146,83.94695],[12.17438,83.97239],[13.23886,83.989],[14.24271,83.99621],[15.59241,83.99319],[16.92655,83.97653],[18.30926,83.94589],[19.75196,83.90069]]]]}},{type:"Feature",properties:{Name:"Norwegian",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[33.44992,82.66102],[34.91073,82.473],[34.90244,82.47314],[33.61703,82.49446],[33.64555,82.48311],[34.19147,82.26263],[34.74826,81.99418],[35.23892,81.71143],[35.7002,81.39188],[36.10641,81.04816],[36.44058,80.69704],[36.72641,80.31134],[36.93711,79.92429],[37.1213,79.35348],[37.163,78.79403],[37.13032,78.50571],[37.06633,78.2397],[36.96869,77.97515],[36.83622,77.71349],[36.65195,77.43501],[36.44286,77.18422],[36.19489,76.9411],[35.90602,76.70732],[35.54457,76.46659],[35.16401,76.25783],[35.0189,76.21181],[34.92375,76.1953],[34.70457,76.17673],[34.46863,76.17934],[34.24709,76.20452],[34.08993,76.24651],[34.01217,76.29852],[34.00596,76.32632],[34.06468,76.38165],[34.35465,76.53689],[34.62,76.70334],[35.03553,77.02735],[35.4036,77.41692],[35.67429,77.8289],[35.85745,78.27655],[35.94295,78.75292],[35.92567,79.22593],[35.81077,79.69169],[35.62186,80.11119],[35.35908,80.51389],[35.02757,80.89633],[34.63249,81.25567],[34.16047,81.60194],[33.6518,81.9076],[33.09524,82.18451],[32.52509,82.41962],[32.49595,82.43145],[31.7196,82.29418],[31.66378,82.88457],[32.55416,82.77399],[33.44992,82.66102]]]]}},{type:"Feature",properties:{Name:"Peru",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-90,-8.82038],[-89.81823,-8.90343],[-88.66973,-9.53847],[-87.71508,-10.15445],[-86.63927,-10.95247],[-85.60779,-11.83128],[-84.62425,-12.78588],[-83.9531,-13.51129],[-83.30958,-14.27081],[-82.66875,-15.09816],[-82.11993,-15.87111],[-81.54258,-16.75943],[-81.05337,-17.58373],[-80.54499,-18.52513],[-80.12033,-19.39357],[-79.52437,-20.78036],[-79.04463,-22.10242],[-78.63924,-23.45239],[-78.31154,-24.82527],[-78.06489,-26.2161],[-77.92157,-27.44976],[-77.82844,-28.94381],[-77.81842,-30],[-77.81451,-30.40875],[-77.87905,-31.88866],[-78.02423,-33.35934],[-78.25199,-34.8121],[-78.54221,-36.15055],[-78.90826,-37.45987],[-79.35173,-38.73431],[-79.87419,-39.96858],[-80.47723,-41.15784],[-81.08449,-42.1633],[-81.21134,-42.37135],[-81.98691,-43.45368],[-82.84871,-44.47834],[-83.7984,-45.4417],[-84.76554,-46.28256],[-85.81203,-47.06459],[-86.93923,-47.78542],[-88.14848,-48.4428],[-89.40922,-49.02118],[-90,-49.24655],[-90.85072,-49.56928],[-92.24153,-50.00018],[-93.70921,-50.36494],[-94.49999,-50.5255],[-94.62685,-50.5512],[-95.57235,-50.71244],[-96.54578,-50.84815],[-97.37836,-50.94136],[-98.23042,-51.01615],[-98.87435,-51.05188],[-99.09999,-51.00801],[-99.27979,-50.91512],[-99.39236,-50.78404],[-99.41649,-50.62938],[-99.34673,-50.48603],[-99.19925,-50.37148],[-99.10186,-50.32935],[-98.87073,-50.28405],[-97.72878,-50.19304],[-96.47138,-50.04695],[-95.41221,-49.88328],[-94.49999,-49.70801],[-94.39076,-49.68698],[-93.40645,-49.45883],[-92.32625,-49.16],[-91.41956,-48.86596],[-90.42654,-48.49358],[-90,-48.31232],[-89.71156,-48.18939],[-88.90936,-47.80787],[-88.24866,-47.45842],[-87.50892,-47.02506],[-86.90126,-46.63199],[-86.22285,-46.14869],[-85.57701,-45.63931],[-84.96339,-45.10442],[-84.38168,-44.54465],[-83.75553,-43.87525],[-83.17012,-43.17549],[-82.62544,-42.44625],[-82.43631,-42.1633],[-82.12104,-41.6888],[-81.6565,-40.90456],[-81.23137,-40.09504],[-80.8452,-39.26187],[-80.49754,-38.40676],[-80.15191,-37.42084],[-79.88463,-36.52536],[-79.62828,-35.49917],[-79.43936,-34.57274],[-79.27003,-33.51749],[-79.14587,-32.45183],[-79.06623,-31.37944],[-79.03047,-30.30415],[-79.03283,-30],[-79.03924,-29.17089],[-79.09025,-28.11066],[-79.18201,-27.06035],[-79.30349,-26.15089],[-79.46685,-25.23147],[-79.6676,-24.32044],[-79.93315,-23.31992],[-80.24191,-22.33389],[-80.59233,-21.36453],[-80.98287,-20.41405],[-81.41197,-19.48463],[-81.92667,-18.48922],[-82.4317,-17.61117],[-82.97049,-16.76092],[-83.54147,-15.94061],[-84.1431,-15.15236],[-84.74348,-14.43272],[-85.36079,-13.75427],[-86.13165,-12.98479],[-86.93315,-12.26652],[-87.62285,-11.70893],[-88.47465,-11.09119],[-89.20307,-10.62086],[-90,-10.17297],[-90.24859,-10.03313],[-91.32087,-9.5313],[-92.41629,-9.11901],[-93.28514,-8.86471],[-93.37089,-8.83961],[-92.8582,-9.97255],[-94.49999,-9.10031],[-96.89044,-7.82657],[-95.72795,-7.49328],[-94.51947,-7.14654],[-94.49999,-7.14095],[-92.49053,-6.5638],[-92.51224,-6.59323],[-93.27439,-7.62521],[-93.18044,-7.65145],[-92.21347,-7.92139],[-91.00069,-8.36288],[-90,-8.82038]]]]}},{type:"Feature",properties:{Name:"East Wind Drift / Antarctic Subpolar",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-167.70719,-67.23623],[-161.78045,-67.55775],[-158.2276,-67.72745],[-154.86826,-67.87121],[-151.51537,-67.99802],[-150,-68.04771],[-148.16009,-68.10789],[-144.79358,-68.20084],[-141.58587,-68.27325],[-138.17208,-68.33308],[-134.90368,-68.37397],[-130.29459,-68.405],[-125.46334,-68.40531],[-120.57533,-68.3738],[-120,-68.3666],[-115.79879,-68.31396],[-110.611,-68.2187],[-105.23877,-68.08935],[-99.94537,-67.93384],[-94.49999,-67.74651],[-94.15365,-67.73454],[-93.91316,-67.74388],[-93.70792,-67.78593],[-93.55931,-67.85387],[-93.48872,-67.94087],[-93.51339,-68.03101],[-93.62451,-68.10767],[-93.80448,-68.16301],[-94.0357,-68.18925],[-94.49999,-68.20498],[-99.84247,-68.38519],[-105.15148,-68.53811],[-108.94462,-68.63075],[-112.90587,-68.71162],[-116.7693,-68.77391],[-120,-68.81165],[-120.54364,-68.81799],[-124.23761,-68.84421],[-127.85997,-68.85284],[-131.42306,-68.84413],[-134.93185,-68.81822],[-139.66122,-68.75524],[-144.32755,-68.66077],[-148.95316,-68.53503],[-150,-68.49934],[-153.7375,-68.37147],[-158.52701,-68.17431],[-163.52608,-67.93423],[-168.76761,-67.64703],[-174.01373,-67.32578],[-174.10481,-67.32016],[-173.65231,-67.77253],[-176.44289,-67.11762],[-177.55912,-66.85057],[-175.00871,-66.61829],[-173.09591,-66.44264],[-173.09592,-66.44264],[-173.94018,-66.85026],[-173.84871,-66.85597],[-167.70719,-67.23623]]]]}},{type:"Feature",properties:{Name:"South Equatorial/South Pacific Gyre",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-107.63091,-8.24994],[-108.35323,-8.31815],[-109.0645,-8.4253],[-109.76453,-8.57049],[-110.68014,-8.8217],[-111.35328,-9.05214],[-112.01461,-9.31757],[-112.66395,-9.61706],[-113.51078,-10.06771],[-114.33766,-10.57639],[-114.94734,-10.99738],[-115.54333,-11.44845],[-116.31595,-12.09467],[-117.06254,-12.7895],[-117.7821,-13.53011],[-118.47369,-14.3136],[-119.29734,-15.34882],[-119.92242,-16.21807],[-120,-16.33608],[-120.51669,-17.12018],[-121.07865,-18.05223],[-121.73439,-19.25449],[-122.2206,-20.24212],[-122.67178,-21.24923],[-123.08711,-22.2726],[-123.55456,-23.56987],[-123.96305,-24.8815],[-124.24629,-25.93715],[-124.48991,-26.99519],[-124.69307,-28.05272],[-124.85494,-29.10693],[-124.95689,-30],[-124.97469,-30.15509],[-125.05148,-31.19459],[-125.08447,-32.22292],[-125.07719,-33.11013],[-125.02387,-34.14982],[-124.92111,-35.17011],[-124.8028,-35.9709],[-124.60915,-36.95085],[-124.41713,-37.71676],[-124.13012,-38.65005],[-123.86243,-39.37634],[-123.4796,-40.25743],[-123.13427,-40.93995],[-122.65315,-41.764],[-122.38649,-42.1633],[-122.2282,-42.39914],[-121.52314,-43.31023],[-120.87273,-44.03008],[-120.04343,-44.82031],[-120,-44.85633],[-119.29175,-45.44043],[-118.31542,-46.13733],[-117.43862,-46.67784],[-116.50325,-47.18099],[-115.50823,-47.64606],[-114.66855,-47.99022],[-113.78946,-48.30918],[-112.87043,-48.60254],[-111.91091,-48.86991],[-110.91033,-49.11086],[-109.86817,-49.32495],[-108.78387,-49.51172],[-107.74715,-49.65795],[-107.65689,-49.67066],[-108.15577,-48.90043],[-104.16818,-50.35975],[-105.41768,-50.57253],[-106.66721,-50.78436],[-108.59288,-51.10895],[-108.58448,-51.10205],[-107.79599,-50.44974],[-107.88752,-50.43764],[-108.69178,-50.3312],[-109.84901,-50.14681],[-110.6892,-49.98908],[-111.77268,-49.75329],[-112.55786,-49.55761],[-113.56837,-49.27196],[-114.53755,-48.95845],[-115.46562,-48.61753],[-116.13487,-48.34409],[-116.99164,-47.95619],[-117.80803,-47.54201],[-118.58427,-47.10195],[-119.14026,-46.75517],[-119.84686,-46.2708],[-120,-46.15435],[-120.51403,-45.76168],[-121.142,-45.22824],[-122.15535,-44.22955],[-123.06798,-43.13906],[-123.73612,-42.1633],[-123.86108,-41.9791],[-124.2617,-41.28637],[-124.62474,-40.57275],[-125.17119,-39.27591],[-125.43357,-38.50884],[-125.66033,-37.72392],[-125.97304,-36.31029],[-126.20244,-34.63849],[-126.26719,-33.78278],[-126.30235,-32.69702],[-126.25166,-30.87875],[-126.17892,-30],[-126.16793,-29.86654],[-126.04543,-28.84699],[-125.88478,-27.82223],[-125.68665,-26.79448],[-125.45167,-25.76601],[-125.18048,-24.73917],[-124.87373,-23.71638],[-124.53206,-22.7001],[-124.15612,-21.69284],[-123.74655,-20.69714],[-122.92644,-18.94241],[-122.42573,-17.99296],[-121.89362,-17.06481],[-120.85834,-15.45647],[-120.24107,-14.60237],[-120,-14.29609],[-119.59437,-13.77981],[-118.91877,-12.99147],[-118.35782,-12.38719],[-117.6315,-11.66703],[-117.03064,-11.12066],[-116.25528,-10.47703],[-115.61587,-9.99515],[-114.95976,-9.544],[-114.25687,-9.10871],[-113.43228,-8.66001],[-112.58602,-8.25989],[-120,-8.37366],[-124.00474,-8.43511],[-141.09858,-8.83792],[-142.62943,-9.15731],[-144.41062,-9.62498],[-145.67683,-10.01905],[-147.18603,-10.5548],[-148.68034,-11.15589],[-150,-11.74884],[-150.15585,-11.81878],[-151.36826,-12.41582],[-152.79915,-13.18268],[-154.20015,-14.00105],[-155.56735,-14.86721],[-156.89688,-15.77728],[-158.18496,-16.72708],[-159.42749,-17.71295],[-160.62069,-18.7308],[-161.76076,-19.77656],[-162.84392,-20.84614],[-163.86638,-21.93549],[-164.66933,-22.85549],[-165.71403,-24.15751],[-166.66064,-25.47028],[-167.50313,-26.78778],[-168.30002,-28.22901],[-168.88018,-29.47484],[-169.07963,-30],[-169.35062,-30.70908],[-169.70686,-31.92748],[-169.9444,-33.12601],[-170.05877,-34.3009],[-170.0678,-34.92178],[-170.03818,-35.54979],[-169.88925,-36.62709],[-169.57968,-37.84542],[-169.20238,-38.86982],[-168.70888,-39.85402],[-168.09645,-40.79769],[-167.36238,-41.70061],[-166.90305,-42.1633],[-166.50395,-42.56259],[-165.66712,-43.26877],[-164.57053,-44.05445],[-163.52554,-44.69511],[-162.38178,-45.30551],[-160.95628,-45.96204],[-159.39741,-46.57723],[-157.95373,-47.07123],[-156.40963,-47.53415],[-155.04537,-47.89593],[-153.31426,-48.30101],[-151.63643,-48.6442],[-150,-48.93712],[-149.87068,-48.96019],[-148.01616,-49.24867],[-146.07199,-49.50933],[-144.31854,-49.71123],[-144.22605,-49.72186],[-144.71163,-48.94233],[-140.75624,-50.43611],[-145.1972,-51.14487],[-145.19647,-51.1443],[-144.38893,-50.49601],[-144.47817,-50.48557],[-147.18143,-50.1683],[-149.80965,-49.78751],[-150,-49.75417],[-152.2757,-49.35387],[-154.58167,-48.8675],[-156.59134,-48.36601],[-158.7218,-47.73661],[-160.44235,-47.13653],[-161.36604,-46.7729],[-162.24688,-46.39415],[-163.29244,-45.89734],[-164.09398,-45.47557],[-164.85159,-45.03764],[-165.7372,-44.46762],[-166.39683,-43.99364],[-167.16069,-43.37886],[-167.85753,-42.73951],[-168.40509,-42.1633],[-168.4878,-42.0758],[-168.9444,-41.52747],[-169.45598,-40.82059],[-169.90225,-40.09013],[-170.28365,-39.33644],[-170.54237,-38.717],[-170.80814,-37.92243],[-171.05909,-36.9354],[-171.20122,-36.11111],[-171.27473,-35.27266],[-171.28376,-34.51414],[-171.24234,-33.76082],[-171.11207,-32.74438],[-170.95974,-31.97414],[-170.68623,-30.93825],[-170.37046,-30],[-170.33503,-29.89416],[-169.96637,-28.97563],[-169.54258,-28.05411],[-168.99333,-26.99935],[-168.45806,-26.07681],[-167.78627,-25.02484],[-167.14807,-24.10837],[-166.36357,-23.06783],[-165.6309,-22.16529],[-164.74315,-21.14523],[-163.92429,-20.26464],[-162.94278,-19.27432],[-161.91514,-18.30369],[-160.86871,-17.37732],[-159.78319,-16.47493],[-158.66101,-15.5991],[-157.50458,-14.75238],[-156.31632,-13.93731],[-155.09865,-13.15641],[-153.85398,-12.41218],[-152.58475,-11.70707],[-151.29336,-11.04351],[-150,-10.43228],[-149.98224,-10.42388],[-148.6538,-9.85055],[-147.31047,-9.32582],[-146.2267,-8.94258],[-150,-8.98506],[-154.45365,-9.03518],[-156.54081,-9.10496],[-158.04209,-9.20044],[-159.71342,-9.35141],[-161.36528,-9.54704],[-162.9968,-9.78579],[-164.60712,-10.06613],[-166.37045,-10.42448],[-167.93319,-10.78744],[-169.64151,-11.23365],[-171.31917,-11.72292],[-172.96498,-12.25299],[-174.57775,-12.82161],[-176.07156,-13.39406],[-176.15631,-13.4265],[-175.10786,-14.16177],[-179.68577,-14.30085],[-178.78476,-13.38725],[-177.88377,-12.47021],[-176.51793,-11.07387],[-176.51901,-11.0838],[-176.65721,-12.34386],[-176.56996,-12.31068],[-174.55379,-11.54267],[-172.39173,-10.80577],[-170.17364,-10.13826],[-167.90216,-9.54519],[-165.57993,-9.03153],[-163.39356,-8.63211],[-161.16825,-8.30833],[-158.90608,-8.06395],[-156.80181,-7.91284],[-154.86481,-7.83844],[-150,-7.77702],[-144.76844,-7.71096],[-126.43464,-7.28034],[-120,-7.15953],[-117.79195,-7.11806],[-109.40971,-7.02742],[-101.02852,-7.01135],[-100.79168,-7.05948],[-100.59853,-7.18947],[-100.46859,-7.38177],[-100.42141,-7.61685],[-100.46989,-7.85154],[-100.60089,-8.04284],[-100.79476,-8.17148],[-101.03185,-8.2182],[-106.8977,-8.22153],[-107.63091,-8.24994]]]]}},{type:"Feature",properties:{Name:"East Wind Drift / Antarctic Subpolar",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[34.10644,-63.20405],[33.95948,-63.28567],[33.75526,-63.33641],[33.515,-63.34845],[31.97579,-63.30141],[30.20062,-63.28018],[30,-63.28135],[28.60142,-63.28952],[26.98484,-63.32493],[25.35735,-63.38542],[23.71994,-63.46987],[22.07364,-63.57713],[20.18258,-63.7261],[18.69892,-63.86188],[18.52066,-63.87815],[16.61442,-64.07503],[14.70228,-64.29471],[12.78575,-64.53528],[10.86636,-64.7948],[8.70551,-65.10702],[6.78508,-65.40044],[4.62693,-65.746],[1.27966,-66.31016],[0,-66.53845],[0,-66.53845],[-2.28539,-66.94101],[-5.81855,-67.58824],[-9.77184,-68.3289],[-13.20435,-68.97847],[-16.79685,-69.65758],[-30,-72.03282],[-31.19763,-72.23452],[-34.21963,-72.71598],[-36.62955,-73.0762],[-39.15928,-73.42644],[-41.3426,-73.70057],[-43.40906,-73.93018],[-45.1385,-74.09437],[-46.2027,-74.17996],[-47.22598,-74.24882],[-48.20804,-74.30021],[-49.14861,-74.33335],[-50.22212,-74.34787],[-50.9525,-74.34012],[-51.65147,-74.31623],[-52.31716,-74.27514],[-52.94775,-74.21573],[-53.53951,-74.13699],[-54.08783,-74.03802],[-54.58852,-73.9186],[-55.03743,-73.77843],[-55.43235,-73.61725],[-55.7726,-73.43586],[-56.12202,-73.17917],[-56.38833,-72.88718],[-56.57279,-72.55744],[-56.67668,-72.18725],[-56.69964,-71.74313],[-56.62883,-71.23962],[-56.48922,-70.74834],[-56.24025,-70.12359],[-55.95865,-69.54786],[-55.94357,-69.51658],[-57.15496,-69.6595],[-55.34063,-68.69186],[-54.6149,-68.29264],[-53.75936,-69.89745],[-53.75937,-69.89745],[-54.74642,-69.59403],[-54.76209,-69.6264],[-55.03684,-70.1864],[-55.27921,-70.79322],[-55.41428,-71.26734],[-55.48224,-71.74903],[-55.45469,-72.2054],[-55.36434,-72.51258],[-55.21699,-72.7839],[-54.93708,-73.09354],[-54.76336,-73.22729],[-54.56786,-73.34776],[-54.35315,-73.45583],[-53.99622,-73.59636],[-53.73422,-73.67674],[-53.45233,-73.74731],[-53.15,-73.80875],[-52.65697,-73.88521],[-52.23835,-73.93245],[-51.71815,-73.97338],[-50.85418,-74.00916],[-49.75353,-74.01288],[-48.49244,-73.97575],[-47.67641,-73.93396],[-46.52216,-73.85628],[-45.60875,-73.782],[-44.33004,-73.66219],[-43.15667,-73.5384],[-41.75654,-73.37581],[-40.2965,-73.19132],[-38.58427,-72.959],[-35.78398,-72.54753],[-32.61154,-72.04319],[-30,-71.60209],[-29.04846,-71.43878],[-16.92033,-69.19458],[-12.78378,-68.39807],[-9.08631,-67.68728],[-4.78698,-66.8732],[-.97358,-66.17262],[0,-66.00283],[0,-66.00283],[2.59988,-65.54383],[6.19509,-64.94756],[8.137,-64.64421],[10.17398,-64.34235],[12.02671,-64.08396],[13.73222,-63.86188],[13.87909,-63.84267],[15.72992,-63.62024],[17.39333,-63.43765],[19.23787,-63.25594],[20.89366,-63.11285],[22.54449,-62.99043],[24.18946,-62.8899],[26.00927,-62.80533],[27.45832,-62.75925],[28.90066,-62.73319],[30,-62.73102],[30.66523,-62.72971],[32.26211,-62.7551],[33.62197,-62.79921],[33.85382,-62.8305],[34.03511,-62.89753],[34.14807,-62.99043],[34.17491,-63.09933],[34.10644,-63.20405]]]]}},{type:"Feature",properties:{Name:"Benguela",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[3.36263,-11.88232],[4.9335,-13.06529],[4.92411,-13.06529],[3.63218,-13.06502],[3.67557,-13.14575],[4.352,-14.40094],[4.98977,-15.65907],[5.58828,-16.9164],[6.1468,-18.17142],[6.66461,-19.42263],[7.14096,-20.66858],[7.57513,-21.90784],[7.96639,-23.13904],[8.31399,-24.36083],[8.61722,-25.57194],[8.87534,-26.77113],[9.07571,-27.88351],[9.24434,-29.05631],[9.34318,-30],[9.36571,-30.21393],[9.43909,-31.35535],[9.46335,-32.34007],[9.44522,-33.43843],[9.37938,-34.50022],[9.26526,-35.54341],[9.12279,-36.45453],[8.91577,-37.46075],[8.65866,-38.44651],[8.35083,-39.41129],[8.03411,-40.25088],[7.58047,-41.27607],[7.1229,-42.1633],[7.11668,-42.17529],[6.53887,-43.14796],[5.96193,-43.99927],[5.18259,-45.00843],[4.4024,-45.8957],[4.23321,-46.01577],[4.12981,-46.05476],[3.90232,-46.08832],[3.66985,-46.05938],[3.5602,-46.0202],[3.3875,-45.90259],[3.33133,-45.83059],[3.28296,-45.67186],[3.32469,-45.50917],[4.13111,-44.57227],[4.68369,-43.86503],[5.25557,-43.04904],[5.77536,-42.21161],[5.80188,-42.1633],[6.24368,-41.35291],[6.66114,-40.47313],[7.02838,-39.57248],[7.37827,-38.54763],[7.76686,-37.07098],[8.03943,-35.54679],[8.2054,-33.86292],[8.24472,-32.21029],[8.2093,-31.12206],[8.12694,-30.01677],[8.12501,-30],[7.99829,-28.89532],[7.824,-27.75866],[7.60471,-26.60781],[7.30504,-25.29747],[6.9923,-24.12009],[6.61294,-22.85749],[5.82753,-20.60463],[4.89776,-18.32767],[3.82791,-16.03576],[2.62146,-13.74164],[2.57976,-13.66191],[1.93703,-14.75347],[1.30665,-10.32631],[2.33466,-11.10537],[3.36263,-11.88232]]]]}},{type:"Feature",properties:{Name:"South Indian",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[79.91621,-42.27526],[81.12515,-42.64483],[82.33411,-43.01222],[78.08549,-44.2508],[78.76968,-43.41058],[78.67716,-43.41041],[75.23404,-43.40411],[71.55674,-43.44913],[70.875,-43.46717],[67.96379,-43.54413],[64.38938,-43.68719],[60.65307,-43.88292],[60,-43.9242],[56.55498,-44.14145],[51.97762,-44.46866],[47.25,-44.83388],[46.20911,-44.91398],[45.96829,-44.89892],[45.7615,-44.82221],[45.61039,-44.69592],[45.53657,-44.53204],[45.55784,-44.36012],[45.66605,-44.21209],[45.84391,-44.10367],[46.07413,-44.05064],[47.25,-43.95872],[51.72178,-43.60783],[56.32034,-43.27339],[60,-43.0369],[60.44067,-43.00852],[64.19908,-42.80743],[67.9076,-42.65607],[70.875,-42.57646],[71.5236,-42.55904],[75.10735,-42.5137],[78.6318,-42.51923],[78.72406,-42.51937],[78.44745,-42.1633],[78.10282,-41.71685],[78.1028,-41.71682],[79.55136,-42.1633],[79.91621,-42.27526]]]]}},{type:"Feature",properties:{Name:"East Wind Drift / Antarctic Subpolar",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[117.20988,-60.80602],[120,-60.96373],[120.29693,-60.98047],[123.05867,-61.15504],[125.88489,-61.35023],[129.20353,-61.59869],[132.19344,-61.83834],[135.71905,-62.13762],[142.92042,-62.79398],[150,-63.48395],[150.67959,-63.54932],[150.9004,-63.59313],[151.06076,-63.66845],[151.14583,-63.76469],[151.14079,-63.87134],[151.04237,-63.96841],[150.8728,-64.0387],[150.65547,-64.07592],[150.41377,-64.07371],[150,-64.03467],[142.67274,-63.33409],[135.49521,-62.6919],[131.98385,-62.39926],[129.00736,-62.16502],[125.70506,-61.92228],[122.8939,-61.73166],[120.14787,-61.56125],[120,-61.55307],[117.07943,-61.39103],[114.44712,-61.26332],[111.48854,-61.14126],[108.93475,-61.05502],[106.04582,-60.97947],[103.17758,-60.92788],[100.31861,-60.8996],[97.11855,-60.89471],[94.49999,-60.91394],[93.58322,-60.92067],[90.00317,-60.97801],[90,-60.97809],[86.35742,-61.06518],[82.62499,-61.18052],[78.39416,-61.33791],[74.00513,-61.52501],[70.875,-61.67189],[69.42998,-61.73947],[60,-62.22058],[59.84396,-62.22848],[47.25,-62.90225],[44.52633,-63.04597],[44.43475,-63.05079],[45.21984,-63.5267],[43.33118,-63.28723],[40.81305,-62.96484],[41.96166,-62.67841],[43.11028,-62.38918],[44.83325,-61.95003],[44.31787,-62.49621],[44.40986,-62.49126],[47.25,-62.33802],[57.35354,-61.78651],[60,-61.64656],[65.63245,-61.34658],[70.875,-61.08741],[72.67024,-60.99817],[79.08323,-60.71857],[84.80477,-60.51528],[90,-60.38316],[90.31756,-60.37507],[94.49999,-60.31769],[95.33705,-60.30619],[100.33395,-60.3019],[103.21338,-60.3309],[106.10203,-60.38385],[109.01123,-60.46139],[111.58253,-60.54988],[114.56076,-60.67508],[117.20988,-60.80602]]]]}},{type:"Feature",properties:{Name:"South Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[98.34604,-18.8915],[98.2872,-19.11319],[98.14785,-19.29],[97.94847,-19.40446],[97.70953,-19.43912],[94.49999,-19.30795],[90,-19.12386],[88.72378,-19.07162],[85.45179,-18.98716],[82.68384,-18.95663],[80.04399,-18.97163],[77.62528,-19.03363],[76.1263,-19.1487],[74.31969,-19.37176],[72.18723,-19.72557],[69.95044,-20.17914],[67.63762,-20.7202],[65.03948,-21.40168],[62.41289,-22.15928],[60,-22.91492],[59.6193,-23.03377],[57.04508,-23.89862],[54.25812,-24.89849],[53.73845,-25.28526],[53.13231,-25.84868],[52.62167,-26.45948],[52.2026,-27.1099],[51.85295,-27.83768],[51.65075,-28.41186],[51.46638,-29.19049],[51.37603,-29.97274],[51.37592,-30],[51.3731,-30.69568],[51.43823,-31.35138],[51.56504,-31.98362],[51.80403,-32.72945],[51.83259,-32.79957],[51.86191,-32.87153],[52.28974,-31.95009],[53.56945,-35.60436],[52.66449,-35.1899],[51.59249,-34.6962],[49.57622,-33.7596],[49.63861,-33.75203],[50.89354,-33.59966],[50.85783,-33.52005],[50.64601,-33.04645],[50.50733,-32.66106],[50.3402,-32.06105],[50.25682,-31.64817],[50.17521,-31.01263],[50.15056,-30.57995],[50.16722,-30],[50.17584,-29.69893],[50.26266,-29.03006],[50.35424,-28.58315],[50.62178,-27.694],[51.00693,-26.8218],[51.25969,-26.37467],[51.54795,-25.93837],[50.40684,-26.39853],[48.31264,-27.29285],[46.5927,-28.08687],[45.12464,-28.83017],[43.94429,-29.50748],[43.20487,-30],[41.98346,-30.80822],[39.61226,-32.42204],[39.10555,-33.03533],[38.52726,-33.84164],[38.16284,-34.43601],[37.85462,-35.02],[37.59976,-35.59232],[37.33801,-36.33509],[37.19652,-36.87536],[37.07556,-37.5711],[37.02574,-38.23626],[37.04375,-38.90644],[37.10228,-39.39147],[37.19552,-39.85094],[37.31977,-40.28328],[37.49934,-40.74353],[37.52728,-40.81484],[37.88759,-39.99753],[38.8811,-42.1633],[39.3842,-43.23269],[38.25134,-42.82013],[37.44429,-42.52453],[36.46322,-42.1633],[35.28444,-41.72653],[35.35101,-41.71674],[36.59029,-41.53416],[36.55441,-41.46221],[36.3426,-41.0359],[36.19923,-40.67937],[35.97267,-39.9104],[35.86235,-39.28701],[35.82048,-38.85031],[35.82164,-37.9177],[35.95414,-36.9137],[36.14915,-36.12567],[36.48921,-35.1736],[36.95959,-34.19199],[35.47045,-35.12952],[34.06797,-35.95143],[32.64571,-36.70939],[31.42246,-37.29526],[30.15528,-37.83662],[30,-37.89493],[28.83541,-38.3308],[27.45411,-38.77515],[26.00259,-39.16706],[25.2354,-39.70155],[24.6026,-40.24376],[24.33325,-40.51667],[23.98429,-40.92711],[23.69739,-41.33759],[23.53564,-41.61629],[23.30172,-42.1633],[23.23878,-42.30967],[23.0817,-42.99389],[23.04737,-43.39785],[23.05183,-43.75612],[23.13409,-44.34712],[23.14347,-44.41415],[23.93102,-43.7317],[23.76855,-46.94778],[22.98364,-46.35804],[22.12347,-45.70437],[20.6792,-44.58942],[20.71757,-44.59422],[21.98633,-44.75259],[21.97404,-44.68462],[21.85139,-44.00178],[21.83004,-43.37644],[21.89487,-42.74547],[22.03912,-42.1633],[22.05499,-42.09891],[22.32078,-41.44243],[22.70108,-40.78403],[23.20026,-40.13485],[23.65884,-39.65362],[22.98025,-39.76823],[22.26358,-39.85819],[21.5705,-39.91717],[20.90119,-39.94618],[20.31535,-39.94776],[19.55874,-39.91347],[18.8385,-39.83821],[18.15553,-39.72392],[17.72135,-39.62699],[17.10247,-39.45183],[16.52323,-39.2426],[15.98453,-39.00108],[15.64834,-38.82301],[15.17917,-38.53164],[14.7529,-38.21273],[14.43867,-37.92969],[14.37042,-37.86807],[13.59393,-38.65146],[13.55107,-38.69445],[13.56173,-36.87092],[13.56733,-35.89683],[13.57224,-35.03136],[16.76443,-37.67627],[15.64561,-37.54876],[15.71657,-37.60149],[16.06909,-37.86294],[16.54563,-38.14603],[17.36214,-38.5053],[18.30369,-38.77643],[18.82243,-38.87551],[19.3737,-38.94841],[19.95793,-38.99371],[20.57556,-39.00996],[21.46912,-38.98022],[22.09869,-38.92588],[23.49073,-38.72155],[25.37882,-38.33166],[27.13844,-37.85542],[28.79066,-37.29709],[30,-36.80618],[30.35655,-36.66084],[32.00448,-35.87595],[33.6015,-35.00746],[34.71334,-34.34646],[35.98127,-33.54568],[41.03547,-30.11594],[41.20965,-30],[43.22151,-28.65101],[44.66113,-27.82399],[46.58567,-26.86388],[47.93017,-26.24863],[49.46934,-25.58302],[51.50164,-24.75299],[53.67336,-23.91551],[53.83844,-23.80568],[54.01121,-23.7368],[54.1938,-23.72063],[57.37769,-22.58635],[60,-21.72248],[60.44961,-21.57383],[63.09213,-20.76806],[65.73741,-20.02648],[69.05331,-19.20173],[70.82295,-18.81789],[72.3228,-18.52886],[73.77866,-18.28556],[75.18337,-18.09189],[76.52975,-17.95173],[77.81062,-17.8689],[80.75957,-17.80741],[83.84823,-17.80871],[87.34743,-17.87524],[90,-17.96461],[91.16688,-18.00391],[94.49999,-18.14754],[97.76631,-18.28817],[98.00079,-18.34403],[98.188,-18.47625],[98.30931,-18.66526],[98.34604,-18.8915]]]]}},{type:"Feature",properties:{Name:"West Wind Drift / Antarctic Circumpolar",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[174.62267,-60.01847],[174.71426,-60.0242],[174.69379,-60],[174.19771,-59.40814],[174.1977,-59.40813],[176.27562,-60],[178.18597,-60.53496],[176.92188,-60.70109],[175.6578,-60.86637],[173.76163,-61.11269],[173.76164,-61.11268],[174.53372,-60.6206],[174.44193,-60.61497],[168.45134,-60.24551],[164.77316,-60],[163.45826,-59.91179],[150,-58.88215],[136.09536,-57.78518],[127.50794,-57.12593],[120,-56.57153],[119.42682,-56.52886],[111.03412,-55.94125],[103.10276,-55.42425],[95.38383,-54.96468],[94.49999,-54.91802],[90,-54.67961],[87.94315,-54.57017],[87.71112,-54.53084],[87.52939,-54.44578],[87.50481,-54.42011],[87.41583,-54.32705],[87.3883,-54.18674],[87.4561,-54.05073],[87.60254,-53.94391],[87.80645,-53.87702],[88.04663,-53.86078],[90,-53.96514],[94.08603,-54.18258],[94.49999,-54.20698],[100.08431,-54.53476],[106.71021,-54.95666],[113.22155,-55.40019],[120,-55.89028],[121.23078,-55.97861],[129.87534,-56.63524],[140.92362,-57.50808],[150,-58.23665],[163.26581,-59.27518],[168.27489,-59.61899],[174.32754,-60],[174.62267,-60.01847]]]]}},{type:"Feature",properties:{Name:"South Indian/Western Australia",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[110.09614,-26.86282],[110.20371,-27.76324],[110.21674,-28.74134],[110.14835,-29.98432],[110.14696,-30],[109.88378,-32.91769],[109.85073,-33.83944],[109.86584,-34.35562],[109.96718,-35.10617],[110.12343,-35.58668],[110.3415,-35.94529],[110.51651,-36.11808],[110.72769,-36.25328],[111.27937,-36.40282],[112.16583,-36.52471],[113.30501,-36.60112],[114.65123,-36.63593],[117.65896,-36.61381],[120,-36.55743],[125.10408,-36.43435],[127.11899,-36.42765],[128.51569,-36.46525],[128.86104,-36.5093],[129.52952,-36.6635],[130.16419,-36.89795],[130.75998,-37.20312],[131.31609,-37.5702],[131.70665,-37.88132],[132.07415,-38.22005],[132.52775,-38.70982],[133.03456,-39.37461],[133.55182,-40.23506],[133.96325,-41.14653],[134.26083,-42.09142],[134.27387,-42.1633],[134.43655,-43.05284],[134.48413,-43.85509],[134.42524,-44.72051],[134.24333,-45.56531],[133.92975,-46.37778],[133.5616,-47.02218],[133.09097,-47.63046],[132.48103,-48.22425],[131.7845,-48.73909],[130.97307,-49.19654],[130.04575,-49.59132],[129.27362,-49.84309],[133.93796,-50.23623],[139.07812,-50.70364],[150,-51.76165],[153.73142,-52.11755],[153.82274,-52.12622],[153.34919,-51.37686],[156.15327,-52.41673],[157.27491,-52.82597],[152.82005,-53.46452],[152.82007,-53.46451],[153.63607,-52.85881],[153.5448,-52.85027],[150,-52.51701],[139.72392,-51.53652],[135.13856,-51.12061],[130.72773,-50.74499],[126.45564,-50.41035],[122.03671,-50.09877],[120,-49.97245],[117.70526,-49.82972],[113.46029,-49.60145],[108.08874,-49.36163],[102.69441,-49.17283],[97.29331,-49.03177],[94.49999,-48.98232],[91.35577,-48.92659],[90,-48.91336],[85.20506,-48.86653],[78.83767,-48.85031],[72.22628,-48.87676],[70.875,-48.89021],[65.1777,-48.9469],[64.93983,-48.91849],[64.74382,-48.83516],[64.60961,-48.70931],[64.55718,-48.55334],[64.60042,-48.39565],[64.72713,-48.26534],[64.91809,-48.17593],[65.1541,-48.14096],[70.875,-48.08479],[72.89469,-48.06494],[80.39236,-48.04261],[87.39142,-48.07512],[90,-48.10889],[93.90924,-48.15946],[94.49999,-48.17158],[98.2675,-48.2488],[102.60641,-48.36675],[106.56537,-48.50164],[110.69009,-48.67181],[114.63253,-48.86425],[118.41355,-49.07717],[120,-49.17871],[122.35175,-49.32886],[126.15158,-49.60022],[127.36548,-49.43908],[128.40375,-49.22308],[129.32381,-48.94533],[130.13237,-48.61048],[130.70345,-48.30459],[131.2109,-47.96745],[131.65816,-47.60146],[132.21971,-47.00016],[132.5242,-46.56717],[132.87963,-45.87603],[133.05109,-45.39146],[133.21356,-44.63597],[133.26655,-43.85504],[133.23185,-43.20114],[133.12957,-42.54557],[133.02523,-42.1633],[132.89473,-41.68194],[132.64977,-41.05224],[132.23908,-40.25208],[131.87385,-39.6927],[131.32031,-39.01748],[130.86305,-38.5744],[130.54151,-38.31363],[130.20871,-38.08335],[129.8086,-37.85561],[129.34074,-37.65153],[129.10296,-37.57272],[128.61974,-37.4627],[128.37435,-37.43193],[127.10655,-37.40109],[125.12249,-37.40754],[120,-37.52848],[117.34805,-37.59101],[114.27087,-37.60145],[112.60328,-37.53668],[111.47181,-37.42727],[110.97925,-37.34719],[110.5361,-37.24547],[110.06188,-37.06911],[109.65009,-36.80379],[109.47947,-36.65388],[109.19453,-36.31207],[108.9796,-35.92564],[108.77027,-35.28849],[108.66367,-34.59083],[108.63779,-33.52127],[108.7062,-32.35539],[108.91723,-30],[108.97067,-29.39437],[109.00377,-28.39254],[108.98486,-27.82925],[108.98229,-27.75244],[108.64321,-28.47447],[107.44775,-24.51867],[108.99402,-25.34209],[109.21415,-25.45887],[111.3974,-26.61084],[111.28199,-26.62389],[110.08382,-26.75925],[110.09614,-26.86282]]]]}},{type:"Feature",properties:{Name:"Western Australia",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[98.8972,-24.99065],[99.69354,-25.50172],[100.46332,-26.10447],[101.07842,-26.69482],[101.61798,-27.33171],[102.09127,-28.03569],[102.46595,-28.76495],[102.70078,-29.37635],[102.87241,-29.99765],[102.87282,-30],[102.9821,-30.62576],[103.03112,-31.25768],[103.02081,-31.89475],[102.95293,-32.53247],[102.82901,-33.1667],[102.63325,-33.84753],[102.35303,-34.57073],[102.00316,-35.28067],[101.58601,-35.9745],[101.10397,-36.64951],[100.55941,-37.30305],[99.95467,-37.93261],[99.29104,-38.53586],[98.57086,-39.11053],[97.79608,-39.65421],[96.96867,-40.16455],[96.09061,-40.63928],[95.16386,-41.07614],[94.49999,-41.34559],[94.11911,-41.49968],[93.02316,-41.87452],[92.00158,-42.1633],[91.97405,-42.17107],[91.67819,-42.16916],[91.6594,-42.1633],[91.51705,-42.11887],[91.38107,-42.03618],[91.28079,-41.92474],[91.23938,-41.83733],[91.24194,-41.61653],[91.30978,-41.49595],[91.42117,-41.39403],[91.57109,-41.31876],[92.62231,-41.01084],[93.64248,-40.65319],[94.48766,-40.30622],[94.49999,-40.30041],[95.35549,-39.89636],[96.23436,-39.41816],[97.05814,-38.90238],[97.8244,-38.35199],[98.53072,-37.77002],[99.00918,-37.325],[99.49207,-36.82375],[99.93239,-36.30786],[100.32911,-35.77918],[100.68124,-35.23962],[100.98779,-34.69113],[101.24778,-34.13574],[101.46023,-33.5755],[101.67788,-32.77773],[101.79125,-32.02753],[101.81365,-31.28482],[101.74556,-30.55717],[101.62034,-30],[101.58543,-29.84409],[101.33051,-29.14917],[100.97808,-28.47607],[100.52539,-27.82851],[100.06844,-27.31173],[99.54094,-26.82219],[98.9363,-26.35757],[98.25209,-25.92098],[97.48591,-25.51551],[96.8025,-25.21459],[96.71623,-25.17655],[97.01307,-26.28786],[94.49999,-24.45956],[93.44571,-23.68445],[94.49999,-23.58968],[94.65227,-23.57598],[95.9234,-23.46161],[98.00414,-23.27417],[97.9909,-23.2856],[97.0435,-24.10123],[97.12644,-24.13731],[98.01391,-24.5227],[98.8972,-24.99065]]]]}},{type:"Feature",properties:{Name:"California",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-131.73153,25.93425],[-132.64764,25.36395],[-133.64864,24.83446],[-134.64948,24.383],[-134.73244,24.3455],[-133.75032,23.60438],[-133.73904,23.59584],[-135.79755,23.6592],[-137.05709,23.69795],[-138.31661,23.73669],[-134.94087,26.53884],[-135.16455,25.38038],[-135.08105,25.41738],[-134.43263,25.70436],[-133.74614,26.04495],[-133.10516,26.40186],[-132.79724,26.59639],[-132.43861,26.82253],[-131.89472,27.21313],[-131.39669,27.61909],[-130.94461,28.04008],[-130.53431,28.48086],[-130.01038,29.16239],[-129.61975,29.81124],[-129.53402,30],[-129.31113,30.48908],[-129.08496,31.19688],[-128.93192,32.01112],[-128.88028,32.78455],[-128.91339,33.57694],[-129.0339,34.40881],[-129.20217,35.12489],[-129.4157,35.81118],[-129.68446,36.5141],[-130.00915,37.23291],[-130.39048,37.96688],[-130.82914,38.71523],[-131.32563,39.47712],[-131.8801,40.25149],[-132.49317,41.03755],[-133.16523,41.83445],[-134.62925,43.39884],[-136.31667,44.99427],[-138.23013,46.61443],[-138.34761,46.75936],[-138.37408,46.91798],[-138.31166,47.07136],[-138.20783,47.1717],[-138.06121,47.24852],[-137.83618,47.29718],[-137.60434,47.2848],[-137.34703,47.18566],[-135.91396,46.00694],[-134.50649,44.74799],[-133.29109,43.56055],[-132.14513,42.32793],[-131.31437,41.34214],[-130.52855,40.3114],[-129.83871,39.29525],[-129.24415,38.29458],[-128.74426,37.31024],[-128.33902,36.34329],[-128.02843,35.39471],[-127.82198,34.51651],[-127.71533,33.80673],[-127.66754,33.15888],[-127.66947,32.51118],[-127.73119,31.81761],[-127.83627,31.22393],[-128.01424,30.56172],[-128.22308,30],[-128.25341,29.91816],[-128.55322,29.29456],[-129.01239,28.54516],[-129.56434,27.8316],[-130.16237,27.19794],[-130.84489,26.59639],[-130.90241,26.54554],[-131.73153,25.93425]]]]}},{type:"Feature",properties:{Name:"California",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-120,25.86002],[-120.15576,25.65222],[-120.44966,25.33462],[-120.80252,25.01975],[-121.12267,24.77883],[-121.1944,24.72479],[-120.10783,24.07893],[-120.08331,24.06432],[-122.23447,23.90976],[-123.44338,23.82281],[-124.64937,23.73602],[-121.89622,26.59639],[-121.64101,26.85808],[-121.65855,26.59639],[-121.71411,25.76334],[-121.63959,25.8266],[-121.38569,26.0419],[-121.06074,26.39463],[-120.93097,26.59639],[-120.83097,26.75161],[-120.67794,27.13025],[-120.60612,27.51687],[-120.62265,28.06242],[-120.76505,28.64405],[-121.03524,29.27507],[-121.43433,29.95091],[-121.47017,30],[-121.94013,30.64153],[-122.55599,31.35982],[-123.32615,32.15138],[-124.25847,33.01239],[-124.35501,33.14131],[-124.39682,33.25942],[-124.40088,33.40546],[-124.36602,33.52411],[-124.29657,33.63401],[-124.19299,33.72936],[-124.06623,33.79917],[-123.9268,33.83972],[-123.75229,33.85004],[-123.55354,33.8095],[-123.37767,33.71262],[-122.19252,32.61516],[-121.19809,31.54899],[-120.41034,30.52227],[-120.09904,30],[-120,29.83326],[-119.91224,29.68528],[-119.58344,28.90538],[-119.47698,28.52714],[-119.40935,28.15616],[-119.38067,27.79201],[-119.39173,27.43133],[-119.44711,27.06632],[-119.5558,26.68451],[-119.59371,26.59639],[-119.71289,26.31895],[-119.91609,25.97181],[-120,25.86002]]]]}},{type:"Feature",properties:{Name:null,TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-93.33953,6.67027],[-92.58465,6.2629],[-91.96154,5.79813],[-91.67532,5.52084],[-91.44056,5.24571],[-91.06365,4.64428],[-90.91806,4.3054],[-90.81583,3.97837],[-90.77912,3.71577],[-90.8044,3.41293],[-90.88652,3.12113],[-91.03112,2.80323],[-91.24825,2.45595],[-91.51288,2.12064],[-91.83482,1.78266],[-92.16964,1.48409],[-91.12838,.64497],[-93.29029,.69178],[-94.49999,.71797],[-95.70747,.74411],[-94.78238,1.61284],[-94.76683,1.62744],[-94.49999,1.87795],[-94.36719,2.00262],[-94.2282,2.13308],[-93.0488,3.23963],[-92.69858,3.56801],[-92.51601,3.73914],[-92.42713,3.82244],[-92.36892,3.87699],[-92.38656,3.76788],[-92.41648,3.58281],[-92.48675,3.14796],[-92.54231,2.80398],[-92.47014,2.88586],[-92.30564,3.07248],[-92.23798,3.17377],[-92.14713,3.30976],[-92.11568,3.35683],[-92.01658,3.6241],[-91.99621,3.67901],[-92.08815,3.95266],[-92.09527,3.97384],[-92.23275,4.25043],[-92.40542,4.50539],[-92.63643,4.76639],[-92.90053,5.00107],[-93.22835,5.23452],[-93.91811,5.60225],[-94.49999,5.82098],[-94.71307,5.90106],[-95.08491,5.99941],[-95.65447,6.15003],[-95.94182,6.2016],[-96.73245,6.34348],[-97.75868,6.45949],[-97.90215,6.47571],[-98.72415,6.52483],[-99.17199,6.5516],[-100.3627,6.57303],[-100.81192,6.56337],[-102.25245,6.53243],[-102.40315,6.55249],[-102.59018,6.63763],[-102.75375,6.80186],[-102.83764,6.99009],[-102.85215,7.20343],[-102.79414,7.40193],[-102.65384,7.58607],[-102.48041,7.69464],[-102.27283,7.74003],[-100.5968,7.78061],[-99.06106,7.75599],[-97.64747,7.66632],[-96.38086,7.51367],[-95.23863,7.29641],[-94.49999,7.09167],[-94.22442,7.01526],[-93.33953,6.67027]]]]}},{type:"Feature",properties:{Name:"Canary",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-21.33504,24.01657],[-21.86262,23.12921],[-21.90707,23.05417],[-20.62922,23.02254],[-20.62029,23.02232],[-22.25241,21.92304],[-23.28699,21.22177],[-24.32158,20.51715],[-23.56832,24.68688],[-22.9495,23.6323],[-22.90617,23.70778],[-21.93193,25.3934],[-21.33125,26.59639],[-21.06237,27.13085],[-20.68612,27.98508],[-20.33888,28.85571],[-19.95586,30],[-19.78817,30.4969],[-19.47658,31.69413],[-19.24315,32.90797],[-19.10081,34.0855],[-19.04689,35.22225],[-19.07845,36.33871],[-19.18729,37.37378],[-19.3636,38.34541],[-19.67613,39.51111],[-19.69261,39.65164],[-19.63324,39.82609],[-19.44846,39.99799],[-19.22968,40.07674],[-19.10758,40.08989],[-18.93036,40.07497],[-18.6755,39.96909],[-18.53471,39.82359],[-18.33215,39.1895],[-18.14885,38.43928],[-17.99791,37.62008],[-17.90264,36.86924],[-17.84359,36.05115],[-17.84136,34.74179],[-17.95122,33.38722],[-18.17485,31.99671],[-18.51193,30.57724],[-18.68389,30],[-18.77898,29.67937],[-19.09898,28.74597],[-19.45397,27.82903],[-19.86083,26.8835],[-19.99713,26.59639],[-20.31941,25.91459],[-20.80453,24.97242],[-21.33504,24.01657]]]]}},{type:"Feature",properties:{Name:"Guinea",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[5.65447,-3.21384],[5.5057,-3.43128],[5.41994,-3.55661],[5.41924,-3.55728],[5.08476,-3.87714],[4.661,-4.15578],[4.16611,-4.37733],[4.09565,-4.3981],[3.6025,-4.54345],[3.69933,-4.68381],[3.72571,-4.72204],[4.3468,-5.62157],[3.87903,-5.47158],[.05369,-4.24369],[0,-4.22644],[0,-4.22644],[-.01274,-4.22235],[0,-4.21599],[0,-4.21598],[4.08313,-2.17549],[3.80957,-2.74135],[3.5375,-3.30389],[3.90953,-3.16744],[3.93168,-3.15931],[4.25556,-2.97937],[4.4549,-2.8077],[4.45939,-2.80182],[4.60315,-2.61345],[4.61251,-2.59096],[4.68651,-2.41323],[4.71752,-2.198],[4.69834,-1.96794],[4.62486,-1.71687],[4.49992,-1.46052],[4.32842,-1.20729],[4.18129,-1.04474],[4.03293,-.88083],[3.67084,-.57659],[3.6519,-.56419],[3.25414,-.30378],[2.77042,-.05734],[2.61607,0],[2.06787,.20364],[1.31463,.3858],[.58859,.48329],[.58225,.48415],[0,.50382],[0,.50382],[-.34342,.51542],[-.4923,.54333],[-.66266,.62965],[-.80551,.77491],[-.88907,.94734],[-.91445,1.14494],[-.90731,1.18912],[-.89019,1.29501],[-.83152,1.43054],[-.72231,1.56716],[-.60448,1.65364],[-.36227,1.72908],[0,1.72889],[0,1.72889],[.12705,1.72883],[1.0027,1.66412],[1.81877,1.52587],[2.59691,1.31316],[2.76905,1.24574],[3.32673,1.02731],[3.83749,.76501],[4.3175,.45855],[4.72611,.1355],[4.86366,0],[5.09498,-.22786],[5.40348,-.61532],[5.63635,-1.00197],[5.809,-1.41227],[5.91064,-1.8364],[5.932,-2.31537],[5.86004,-2.73737],[5.77852,-2.93952],[5.68712,-3.16612],[5.65447,-3.21384]]]]}},{type:"Feature",properties:{Name:"Gulf Stream",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[-78.27463,26.59639],[-77.91493,25.57358],[-78.92989,26.20914],[-78.92618,26.13303],[-78.90499,25.69675],[-78.95252,25.25452],[-79.08048,24.8476],[-79.28371,24.4934],[-79.5765,24.16668],[-79.95232,23.87794],[-80.41343,23.6232],[-80.99848,23.38581],[-81.47564,23.28456],[-81.97705,23.29287],[-82.49374,23.42205],[-82.97711,23.65446],[-83.47605,24.0061],[-84.01703,24.50566],[-84.55612,25.09986],[-85.72853,26.49481],[-85.83353,26.59639],[-86.2901,27.037],[-86.54076,27.2016],[-86.73104,27.26083],[-86.90281,27.18599],[-87.12896,26.95542],[-87.28322,26.65543],[-87.29496,26.59639],[-87.35753,26.28124],[-87.35167,25.84255],[-87.26237,25.32614],[-87.01353,24.52686],[-86.62428,23.61928],[-86.12598,22.65678],[-85.38354,21.38251],[-85.35237,21.19152],[-85.39058,21.00472],[-85.49338,20.83891],[-85.65599,20.71091],[-85.85566,20.64267],[-86.0895,20.64702],[-86.30373,20.73279],[-86.47159,20.89318],[-87.03317,21.83274],[-87.51083,22.70966],[-87.89149,23.49867],[-88.1888,24.22683],[-88.36367,24.75753],[-88.48823,25.25898],[-88.55962,25.71663],[-88.58177,26.14517],[-88.55273,26.53177],[-88.53828,26.59639],[-88.46739,26.9128],[-88.33056,27.25125],[-88.14999,27.54493],[-87.93723,27.79355],[-87.68078,28.016],[-87.41559,28.17746],[-87.15912,28.27706],[-86.88756,28.32999],[-86.60772,28.33304],[-86.29587,28.27776],[-86.01402,28.1749],[-85.55385,27.89963],[-85.06642,27.47552],[-84.6078,26.9816],[-84.28048,26.59639],[-83.38295,25.53349],[-82.73099,24.88792],[-82.38482,24.62964],[-82.0557,24.46067],[-81.76994,24.39144],[-81.50042,24.4088],[-81.02868,24.58457],[-80.63379,24.79784],[-80.37544,25.01155],[-80.21161,25.25628],[-80.14791,25.46424],[-80.12317,25.69323],[-80.1581,26.25526],[-80.16363,26.34402],[-81.3337,25.84388],[-81.36795,25.8292],[-80.93378,26.59639],[-80.33715,27.64228],[-79.77387,28.62062],[-79.29444,29.44623],[-78.27463,26.59639]]]]}},{type:"Feature",properties:{Name:"North Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[62.90284,8.9406],[64.67844,8.32158],[66.65209,7.52174],[68.31541,6.78222],[70.29886,5.84645],[77.37403,2.33575],[80.38515,.87995],[82.31298,0],[83.33047,-.46444],[86.02935,-1.60162],[87.64268,-2.22938],[89.10982,-2.7623],[90,-3.06181],[90.59048,-3.26044],[92.08384,-3.71959],[93.58908,-4.13556],[94.49999,-4.35877],[94.93639,-4.46568],[96.12201,-4.72153],[97.77402,-5.03397],[97.97393,-5.15924],[98.10947,-5.34743],[98.16449,-5.57607],[98.15676,-5.69854],[98.12461,-5.817],[97.99884,-6.01585],[97.80986,-6.15063],[97.58018,-6.20531],[96.93012,-6.10793],[95.61885,-5.85602],[94.49999,-5.59921],[93.66927,-5.40847],[91.74172,-4.88477],[90,-4.34172],[89.71153,-4.25175],[87.58558,-3.50626],[85.98271,-2.89308],[84.27987,-2.19801],[80.71764,-.61947],[79.42313,0],[77.28293,1.02413],[69.63416,4.8201],[67.77265,5.69821],[66.04563,6.46547],[64.24326,7.1946],[62.53198,7.79312],[61.02241,8.21762],[60,8.42158],[59.69946,8.48152],[58.42023,8.60349],[57.30179,8.58567],[56.30739,8.4573],[55.84633,8.35633],[55.26981,8.18735],[54.36826,7.80841],[53.607,7.34194],[53.23599,7.04402],[52.9133,6.72924],[52.6391,6.40166],[52.4132,6.06511],[52.13354,5.46606],[52.03952,5.1246],[51.99311,4.78857],[51.99441,4.4587],[52.01856,4.29538],[52.0423,4.13478],[52.20484,3.666],[52.37723,3.36594],[52.4888,4.53544],[53.07177,3.6118],[54.92899,.66416],[50.47264,1.72228],[51.40767,2.14365],[51.69102,2.27132],[51.67316,2.29413],[51.37899,2.66975],[51.29775,2.81588],[51.12895,3.11946],[51.06169,3.24041],[50.89886,3.69065],[50.78357,4.30989],[50.7792,4.87373],[50.8751,5.4925],[51.02453,5.97754],[51.29807,6.56519],[51.58324,7.01581],[51.92464,7.44506],[52.31976,7.84922],[52.64984,8.13365],[53.13434,8.48599],[53.66807,8.80456],[54.2492,9.08576],[54.71525,9.27007],[55.37567,9.47764],[55.89942,9.6028],[56.44681,9.7002],[57.11447,9.77681],[57.81241,9.81135],[58.46744,9.80449],[59.2417,9.75051],[59.882,9.67029],[60,9.64685],[61.31167,9.38611],[62.90284,8.9406]]]]}},{type:"Feature",properties:{Name:"South Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[65.65513,-12.82025],[65.08951,-13.94058],[65.18145,-13.93479],[70.45421,-13.6022],[74.82674,-13.43489],[79.02888,-13.40793],[83.40682,-13.5204],[86.74606,-13.6882],[90,-13.90869],[90.34123,-13.9318],[94.3261,-14.26113],[94.49999,-14.27766],[98.65318,-14.6721],[98.88395,-14.74175],[99.06298,-14.8865],[99.17282,-15.08543],[99.19598,-15.31766],[99.12396,-15.54011],[98.97423,-15.71253],[98.7683,-15.81823],[98.52767,-15.84052],[94.80265,-15.48578],[94.49999,-15.46008],[91.31191,-15.1891],[90,-15.09357],[88.12463,-14.95694],[85.12584,-14.78095],[82.36318,-14.66338],[79.66345,-14.59725],[77.0369,-14.58494],[74.46047,-14.62537],[70.31571,-14.79158],[65.25019,-15.11167],[65.15776,-15.11751],[65.89596,-16.166],[65.89596,-16.16601],[61.54582,-14.78482],[62.71991,-14.22522],[63.89396,-13.66424],[65.65513,-12.82025]]]]}},{type:"Feature",properties:{Name:"North Equatorial",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[133.24082,23.79852],[133.07091,23.45975],[132.97939,23.18568],[132.92752,22.88373],[132.92319,22.49794],[132.95309,22.16988],[133.03106,21.87774],[133.17388,21.60757],[133.41716,21.33221],[133.90923,20.98225],[134.43561,20.72186],[135.16204,20.47369],[135.84408,20.31967],[136.59133,20.21256],[137.56719,20.14295],[138.50372,20.13146],[139.50608,20.16403],[140.5589,20.23652],[142.93827,20.49933],[145.46706,20.8688],[150,21.5984],[151.39657,21.82245],[154.37352,22.22702],[156.67117,22.44935],[159.4571,22.60603],[163.75778,22.77407],[168.18078,22.86603],[172.74748,22.88105],[177.4264,22.82171],[179.91203,22.75568],[179.99999,22.71908],[179.99999,22.62295],[179.99999,22.60158],[179.99999,22.24425],[179.99999,22.16525],[179.99999,22.13115],[179.99999,21.81552],[179.99999,21.68386],[179.9967,21.68191],[179.7586,21.64308],[173.33933,21.75102],[167.68089,21.73291],[164.79523,21.67536],[161.98119,21.58569],[159.04331,21.45512],[156.62066,21.31206],[154.67814,21.12215],[152.5265,20.84077],[150,20.43738],[145.51542,19.71875],[143.10834,19.36564],[141.08765,19.13233],[139.30504,19.00633],[138.2616,18.98284],[137.33585,19.00462],[136.45167,19.07337],[135.61193,19.19482],[134.82009,19.37506],[134.22322,19.56632],[133.66213,19.80346],[133.13997,20.09014],[132.64913,20.44552],[132.26973,20.83337],[132.09399,21.07811],[131.95617,21.32962],[131.78249,21.83242],[131.71337,22.3144],[131.72312,23.06822],[131.8322,23.57463],[132.10016,24.22851],[133.11879,24.74759],[133.24082,23.79852]]]]}},{type:"Feature",properties:{Name:"Labrador",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-49.45881,49.51135],[-49.1351,49.51057],[-48.79994,49.56782],[-48.72677,49.58835],[-48.6181,49.61882],[-49.77682,49.91401],[-49.08736,50.04203],[-45.37641,50.72519],[-47.62832,48.1319],[-47.81588,48.9953],[-48.35895,48.82206],[-48.72773,48.74864],[-48.88452,48.73683],[-49.28851,48.70638],[-49.35752,48.71121],[-49.79776,48.74198],[-50.28482,48.84462],[-50.475,48.91039],[-50.68835,48.98407],[-51.14736,49.20631],[-51.2812,49.29183],[-51.57571,49.47948],[-51.9006,49.73121],[-52.28924,50.08438],[-52.95162,50.82076],[-53.65851,51.79308],[-54.33834,52.90108],[-54.8642,53.86402],[-55.44157,55.01186],[-56.03855,56.27857],[-56.65765,57.6514],[-57.67033,59.94858],[-57.69277,60],[-60,64.87632],[-60.28744,65.42939],[-61.40587,67.34177],[-61.99797,68.3709],[-62.70373,69.39802],[-63.73036,70.66702],[-63.84766,70.79265],[-64.85527,71.83983],[-65.85316,72.71125],[-66.30455,73.0451],[-66.68089,73.28123],[-66.74747,73.34796],[-66.72073,73.41427],[-66.60899,73.47266],[-66.42062,73.51571],[-66.18822,73.5346],[-65.95636,73.52702],[-65.75146,73.4953],[-65.5999,73.44171],[-65.32844,73.27916],[-64.9551,73.02142],[-64.24358,72.4513],[-63.41693,71.68499],[-62.57348,70.79265],[-62.56185,70.78005],[-61.6379,69.6553],[-60.80556,68.4619],[-60.22038,67.44859],[-60,67.08103],[-58.77769,64.93762],[-56.44131,60],[-56.22067,59.49043],[-55.07426,56.91556],[-54.37801,55.42424],[-53.7009,54.07532],[-53.05737,52.9173],[-52.46569,51.9793],[-52.13157,51.50914],[-51.73444,51.00949],[-51.48535,50.73844],[-51.33603,50.57521],[-51.00392,50.26617],[-50.74023,50.05595],[-50.35328,49.80578],[-49.98488,49.63443],[-49.78972,49.57979],[-49.62956,49.5349],[-49.45881,49.51135]]]]}},{type:"Feature",properties:{Name:"East Greenland",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-37.27731,62.05803],[-38.22932,60.84939],[-38.26243,60.80651],[-36.94648,60.9328],[-36.94647,60.9328],[-38.23994,60.20734],[-38.60435,60],[-39.10223,59.7146],[-39.96452,59.21451],[-40.05209,60],[-40.22243,61.47607],[-40.22242,61.47606],[-39.39964,61.0185],[-39.36787,61.05984],[-38.56914,62.08168],[-37.7617,62.9577],[-36.99544,63.64412],[-36.60229,63.94474],[-36.17707,64.23395],[-35.63873,64.55178],[-35.07625,64.83482],[-34.48574,65.0875],[-33.8633,65.31404],[-33.05323,65.56478],[-32.35944,65.75216],[-31.66555,65.91497],[-30,66.27413],[-29.46238,66.38899],[-28.7363,66.56547],[-28.09613,66.74005],[-27.32221,66.97968],[-26.57168,67.24459],[-25.84828,67.53162],[-25.09206,67.86519],[-24.09797,68.35362],[-23.11841,68.88616],[-22.16162,69.45003],[-21.1571,70.08207],[-20.14414,70.75396],[-20.08905,70.79265],[-19.12643,71.45674],[-18.15306,72.14846],[-16.94107,73.01784],[-16.77508,73.06684],[-16.56128,73.09347],[-16.32513,73.09465],[-16.09734,73.06809],[-15.92934,73.01968],[-15.83786,72.95713],[-15.83379,72.88778],[-15.86794,72.85288],[-16.9876,72.03465],[-18.09399,71.24227],[-18.74744,70.79265],[-19.21674,70.46335],[-20.38021,69.69288],[-21.54673,68.96826],[-22.65814,68.33166],[-23.61513,67.83145],[-24.58373,67.37425],[-25.56422,66.96562],[-26.50538,66.62392],[-27.4078,66.34021],[-28.35641,66.0832],[-29.25962,65.86995],[-30,65.70905],[-31.3705,65.40855],[-32.27406,65.1731],[-32.98444,64.9535],[-33.49742,64.77162],[-33.98471,64.5716],[-34.49714,64.32554],[-34.99145,64.04647],[-35.47444,63.72817],[-35.93007,63.38135],[-36.37573,62.99382],[-36.82353,62.5546],[-37.27731,62.05803]]]]}},{type:"Feature",properties:{Name:"Transpolar Drift",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[-9.31333,69.47743],[-9.28336,69.44702],[-8.76873,69.83294],[-7.75864,68.23521],[-8.63565,68.44392],[-9.68399,68.69091],[-11.60816,69.13723],[-11.55928,69.1387],[-10.28635,69.17687],[-10.32069,69.20982],[-10.65669,69.52963],[-11.03821,69.97603],[-11.36749,70.45519],[-11.5526,70.79265],[-11.64679,70.9622],[-11.88317,71.50536],[-12.07983,72.10067],[-12.2144,72.66612],[-12.30871,73.28311],[-12.35172,73.90307],[-12.34573,74.49319],[-12.29016,75.11469],[-12.18506,75.72546],[-12.03141,76.32186],[-11.83019,76.90079],[-11.58237,77.45968],[-11.30745,77.9655],[-10.97198,78.4799],[-10.59282,78.9693],[-10.17092,79.43276],[-9.73569,79.84468],[-9.26429,80.23273],[-8.75755,80.59675],[-8.21629,80.93671],[-7.64131,81.25268],[-7.00722,81.55651],[-6.36472,81.82421],[-5.69012,82.06863],[-4.98323,82.29008],[-4.18082,82.50438],[-3.34009,82.6923],[-3.17376,82.71458],[-2.96048,82.72659],[-2.72722,82.72758],[-2.50098,82.71679],[-2.32554,82.69567],[-2.23077,82.66851],[-2.22289,82.63868],[-2.3081,82.60964],[-3.046,82.44415],[-3.70218,82.27176],[-4.33751,82.07956],[-5.00512,81.84721],[-5.64432,81.59111],[-6.25359,81.31111],[-6.83202,81.00708],[-7.37839,80.67889],[-8.17547,80.10978],[-8.92061,79.44557],[-9.56517,78.71597],[-10.10494,77.92395],[-10.43857,77.29187],[-10.70931,76.63041],[-10.91547,75.94342],[-11.04813,75.28345],[-11.12465,74.56175],[-11.13282,73.86205],[-11.0761,73.1636],[-10.95329,72.47269],[-10.77714,71.83985],[-10.55097,71.25178],[-10.3157,70.79265],[-10.24531,70.65319],[-9.91909,70.15779],[-9.59273,69.75895],[-9.31333,69.47743]]]]}},{type:"Feature",properties:{Name:"Norwegian",TEMP:"warm"},geometry:{type:"MultiPolygon",coordinates:[[[[28.73933,75.17397],[25.02711,74.47165],[25.38657,74.79298],[25.30011,74.78281],[24.54017,74.6931],[23.695,74.57621],[22.85148,74.44256],[22.00999,74.29234],[20.61315,74.00565],[19.10434,73.64316],[17.58686,73.22326],[15.9845,72.71933],[14.49914,72.19623],[12.93439,71.5865],[11.34313,70.90469],[11.10004,70.79265],[9.6351,70.10395],[8.14216,69.34687],[6.49206,68.45069],[0,64.44713],[0,64.44713],[-.20378,64.31082],[-1.78038,63.27964],[-3.15916,62.39154],[-4.50555,61.55591],[-5.55803,60.94752],[-5.7688,60.89571],[-6.00059,60.88654],[-6.22581,60.92113],[-6.32732,60.95513],[-6.41283,60.99825],[-6.51943,61.10027],[-6.53828,61.2121],[-6.46715,61.32037],[-5.36086,61.97298],[-4.45036,62.52995],[-3.36288,63.2166],[-2.16846,63.98572],[0,65.38761],[0,65.38761],[.05462,65.422],[5.53418,68.72798],[8.36707,70.2085],[9.61473,70.79265],[10.71522,71.2941],[11.83946,71.76696],[12.9279,72.19571],[14.53375,72.7763],[16.16629,73.30369],[17.68767,73.73861],[19.22241,74.1232],[20.7135,74.44537],[21.46785,74.58921],[22.22825,74.7213],[22.99484,74.84143],[23.69723,74.94009],[24.40494,75.02852],[25.03168,75.0971],[25.11808,75.10653],[24.22773,75.34345],[24.21051,75.34799],[26.32142,75.26713],[27.5793,75.21874],[28.73933,75.17397]]]]}},{type:"Feature",properties:{Name:"West Wind Drift / Antarctic Circumpolar",TEMP:"cold"},geometry:{type:"MultiPolygon",coordinates:[[[[76.88449,-54.95742],[72.64746,-55.94404],[73.28189,-55.32494],[64.74445,-55.34326],[55.5324,-55.32016],[46.33799,-55.26307],[25.04306,-55.08812],[13.72906,-55.04978],[7.63871,-55.07248],[1.91799,-55.13358],[-3.46803,-55.23451],[-8.54737,-55.37483],[-14.14044,-55.58657],[-19.46767,-55.84935],[-24.81614,-56.17707],[-29.93546,-56.55283],[-33.196,-56.82414],[-36.20789,-57.09673],[-39.52288,-57.42079],[-42.59212,-57.74277],[-45.97777,-58.12161],[-49.1192,-58.49442],[-52.30041,-58.8918],[-55.52477,-59.31381],[-55.98642,-59.28147],[-56.26807,-59.09133],[-56.20474,-58.85337],[-55.83351,-58.70739],[-52.59291,-58.27563],[-48.24259,-57.72746],[-43.9638,-57.22598],[-39.74807,-56.77069],[-35.58694,-56.36077],[-32.29167,-56.06476],[-29.02159,-55.79636],[-25.77237,-55.55477],[-22.53968,-55.33908],[-19.31919,-55.1483],[-15.83906,-54.96849],[-12.36265,-54.81521],[-8.61667,-54.67804],[-3.51719,-54.53462],[1.88741,-54.43151],[7.62437,-54.36917],[13.7277,-54.34613],[25.05702,-54.38523],[46.35421,-54.56324],[55.54222,-54.62131],[64.74503,-54.64479],[73.31216,-54.62603],[72.64149,-53.95479],[76.88449,-54.95742]]]]}}],Xr={features:Z6};var J6=Ke("<path></path>"),Q6=Ke("<path></path>"),$6=Ke("<path></path>"),ec=Ke('<text class="middle small"> </text>'),tc=Ke('<text class="middle small"> </text>'),nc=Ke('<text class="middle small"> </text>'),ic=dn('<div class="globes-container svelte-ciurxm"><!> <!> <!></div>');function ou(i,e){Bt(e,!0);const t=()=>un(di,"$isMobile",n),[n,r]=cn(),a=L=>{var M=Xe(),T=ke(M);{var w=B=>{const k=fe(()=>Zi().projection(p(_)));var N=Xe(),Y=ke(N);yt(Y,17,()=>Xr.features,xt,(V,j)=>{var I=J6();D(I,"fill-opacity",1),D(I,"stroke-width",1),D(I,"opacity",.6),Ve(Z=>{D(I,"d",Z),D(I,"fill",p(j).properties.TEMP=="cold"?"#0077be":"#D62828"),D(I,"stroke",p(j).properties.TEMP=="cold"?"#0077be":"#D62828")},[()=>p(k)(p(j))]),ie(V,I)}),ie(B,N)};lt(T,B=>{p(_)&&B(w)})}ie(L,M)},o=L=>{var M=Xe(),T=ke(M);{var w=B=>{const k=fe(()=>Zi().projection(p(g)));var N=Xe(),Y=ke(N);yt(Y,17,()=>Xr.features,xt,(V,j)=>{var I=Q6();D(I,"fill-opacity",1),D(I,"stroke-width",1),D(I,"opacity",.6),Ve(Z=>{D(I,"d",Z),D(I,"fill",p(j).properties.TEMP=="cold"?"#0077be":"#D62828"),D(I,"stroke",p(j).properties.TEMP=="cold"?"#0077be":"#D62828")},[()=>p(k)(p(j))]),ie(V,I)}),ie(B,N)};lt(T,B=>{p(g)&&B(w)})}ie(L,M)},s=L=>{var M=Xe(),T=ke(M);{var w=B=>{const k=fe(()=>Zi().projection(p(d)));var N=Xe(),Y=ke(N);yt(Y,17,()=>Xr.features,xt,(V,j)=>{var I=$6();D(I,"fill-opacity",1),D(I,"stroke-width",1),D(I,"opacity",.6),Ve(Z=>{D(I,"d",Z),D(I,"fill",p(j).properties.TEMP=="cold"?"#0077be":"#D62828"),D(I,"stroke",p(j).properties.TEMP=="cold"?"#0077be":"#D62828")},[()=>p(k)(p(j))]),ie(V,I)}),ie(B,N)};lt(T,B=>{p(d)&&B(w)})}ie(L,M)},l=L=>{var M=Xe(),T=ke(M);{var w=B=>{const k=fe(()=>x.filter(V=>V.display=="left"));var N=Xe(),Y=ke(N);yt(Y,17,()=>p(k),xt,(V,j)=>{var I=ec();let Z;var $=Ge(I,!0);Oe(I),Ve((oe,ce)=>{D(I,"x",oe),D(I,"y",ce),Z=Qe(I,"",Z,{stroke:xe.cat2,fill:"#ffffff"}),bt($,p(j).label)},[()=>p(_)(p(j).coords)[0],()=>p(_)(p(j).coords)[1]]),ie(V,I)}),ie(B,N)};lt(T,B=>{p(_)&&B(w)})}ie(L,M)},c=L=>{var M=Xe(),T=ke(M);{var w=B=>{const k=fe(()=>x.filter(V=>V.display=="middle"));var N=Xe(),Y=ke(N);yt(Y,17,()=>p(k),xt,(V,j)=>{var I=tc();let Z;var $=Ge(I,!0);Oe(I),Ve((oe,ce)=>{D(I,"x",oe),D(I,"y",ce),Z=Qe(I,"",Z,{stroke:xe.cat2,fill:"#ffffff"}),bt($,p(j).label)},[()=>p(g)(p(j).coords)[0],()=>p(g)(p(j).coords)[1]]),ie(V,I)}),ie(B,N)};lt(T,B=>{p(g)&&B(w)})}ie(L,M)},f=L=>{var M=Xe(),T=ke(M);{var w=B=>{const k=fe(()=>x.filter(V=>V.display=="right"));var N=Xe(),Y=ke(N);yt(Y,17,()=>p(k),xt,(V,j)=>{var I=nc();let Z;var $=Ge(I,!0);Oe(I),Ve((oe,ce)=>{D(I,"x",oe),D(I,"y",ce),Z=Qe(I,"",Z,{stroke:xe.cat2,fill:"#ffffff"}),bt($,p(j).label)},[()=>p(d)(p(j).coords)[0],()=>p(d)(p(j).coords)[1]]),ie(V,I)}),ie(B,N)};lt(T,B=>{p(d)&&B(w)})}ie(L,M)},u=L=>{var M=Xe(),T=ke(M);{var w=B=>{var k=ic();let N;var Y=Ge(k);Ot(Y,{longitude:-110,latitude:10,get w(){return p(y)},get h(){return p(y)},get textureImage(){return e.texture},countriesFill:"none",countriesStroke:"#ffffff",countriesStrokeWidth:.5,get labelLayer(){return l},get dataLayer(){return a},get projection(){return p(_)},set projection(I){Ct(_,I,!0)}});var V=me(Y,2);Ot(V,{longitude:-15,latitude:10,get w(){return p(y)},get h(){return p(y)},get textureImage(){return e.texture},countriesFill:"none",countriesStroke:"#ffffff",countriesStrokeWidth:.5,get labelLayer(){return c},get dataLayer(){return o},get projection(){return p(g)},set projection(I){Ct(g,I,!0)}});var j=me(V,2);Ot(j,{longitude:80,latitude:10,get w(){return p(y)},get h(){return p(y)},get textureImage(){return e.texture},countriesFill:"none",countriesStroke:"#ffffff",countriesStrokeWidth:.5,get labelLayer(){return f},get dataLayer(){return s},get projection(){return p(d)},set projection(I){Ct(d,I,!0)}}),Oe(k),Ve(()=>N=Qe(k,"",N,{"flex-direction":t()?"column":"row"})),ie(B,k)};lt(T,B=>{e.w>0&&B(w)})}ie(L,M)},h=L=>{or(L,{get title(){return e.legend_title},get color(){return E},get tickLabels(){return P}})};let m=Vt(e,"h",15);En(()=>{t()||m(e.w/3),t()&&m(3*e.w)});let y=fe(()=>t()?e.w:m()),_=Dt(ea(Br())),g=Dt(ea(Br())),d=Dt(ea(Br())),x=[{label:e.north_pacific_gyre,coords:[-150,34],display:"left"},{label:e.south_pacific_gyre,coords:[-100,-24],display:"left"},{label:e.north_atlantic_gyre,coords:[-40,34],display:"middle"},{label:e.south_atlantic_gyre,coords:[-18,-24],display:"middle"},{label:e.mediterranean,coords:[20,40],display:"middle"},{label:e.indian_ocean_gyre,coords:[74,-34],display:"right"},{label:e.yellow_sea,coords:[120,40],display:"right"}];const v=M1(v1,["#ffffb2","#feb751","#f45629","#bd0026"]);let E=sr([.1,100],v).clamp(!0),P=[{value:.1,label:.1},{value:33.3,label:1},{value:66.7,label:10},{value:100,label:100}];var A=Xe(),R=ke(A);Ut(R,()=>e.container??Lt,()=>({content:u,bottom:h})),ie(i,A),zt(),r()}var rc=Ke('<line></line><circle></circle><text class="end small"> </text><text class="middle small"> </text>',1),ac=Ke("<g><!><!></g>");function su(i,e){Bt(e,!0);const t=()=>un(x1,"$activeTheme",n),[n,r]=cn(),a=y=>{var _=ac(),g=Ge(_);{let x=fe(()=>o()-s.top-s.bottom),v=fe(()=>e.w-s.left-s.right);yn(g,{gridType:"xGrid",get innerHeight(){return p(x)},get innerWidth(){return p(v)},get scale(){return p(c)},get ticks(){return f},get axisTitle(){return e.x_axis_title},flipAxis:!0})}var d=me(g);yt(d,17,()=>e.data,xt,(x,v)=>{var E=rc(),P=ke(E);D(P,"stroke-width",2);var A=me(P);D(A,"r",6),D(A,"stroke","#ffffff"),D(A,"stroke-width",1);var R=me(A);let L;var M=Ge(R,!0);Oe(R);var T=me(R);let w;var B=Ge(T,!0);Oe(T),Ve((k,N,Y,V,j,I,Z,$,oe,ce)=>{D(P,"x1",k),D(P,"x2",N),D(P,"y1",Y),D(P,"y2",V),D(P,"stroke",xe[t()]),D(A,"cx",j),D(A,"cy",I),D(A,"fill",xe[t()]),D(R,"x",Z),D(R,"y",$),L=Qe(R,"",L,{stroke:xe[t()],fill:"#ffffff"}),bt(M,l[p(v).category]),D(T,"x",oe),D(T,"y",ce),w=Qe(T,"",w,{stroke:xe[t()],fill:"#ffffff"}),bt(B,p(v).particle_concentration)},[()=>p(c)(p(v).particle_concentration-p(v).standard_error),()=>p(c)(p(v).particle_concentration+p(v).standard_error),()=>p(u)(p(v).category),()=>p(u)(p(v).category),()=>p(c)(p(v).particle_concentration),()=>p(u)(p(v).category),()=>p(c)(p(v).particle_concentration-p(v).standard_error)-8,()=>p(u)(p(v).category)+4,()=>p(c)(p(v).particle_concentration),()=>p(u)(p(v).category)-12]),ie(x,E)}),Oe(_),Ve(()=>D(_,"transform",`translate(${s.left},${s.top})`)),ie(y,_)};let o=Vt(e,"h",15),s={top:36,right:12,bottom:24,left:200},l={shrimp_vessel:e.shrimp_vessel,shrimp_retail:e.shrimp_retail,herring_vessel:e.herring_vessel,juvenile_lamprey_vessel:e.juvenile_lamprey_vessel,adult_lamprey_vessel:e.adult_lamprey_vessel,rockfish_retail:e.rockfish_retail,lingcod_retail:e.lingcod_retail,salmon_vessel:e.salmon_vessel,lingcod_vessel:e.lingcod_vessel};o(600);let c=fe(()=>xn().domain([0,14]).range([0,e.w-s.right-s.left])),f=[0,2.5,5,7.5,10,12.5],u=fe(()=>$o().domain(e.data.map(y=>y.category)).range([0,o()-s.top-s.bottom]).padding(.5));var h=Xe(),m=ke(h);Ut(m,()=>e.container??Lt,()=>({svg:a})),ie(i,h),zt(),r()}var oc=Ke("<circle></circle>"),sc=Ke("<circle></circle>"),lc=Ke('<g><!><!><path fill="none"></path><!><path fill="none"></path><!><text class="middle"> </text><text class="middle"> </text></g>');function lu(i,e){Bt(e,!0);const t=()=>un(x1,"$activeTheme",n),[n,r]=cn(),a=y=>{var _=lc(),g=Ge(_);{let B=fe(()=>e.h-o.top-o.bottom),k=fe(()=>e.w-o.left-o.right);yn(g,{gridType:"yGrid",get innerHeight(){return p(B)},get innerWidth(){return p(k)},get scale(){return p(c)},get ticks(){return f},get axisUnits(){return e.y_axis_units},get axisTitle(){return e.y_axis_title}})}var d=me(g);{let B=fe(()=>e.h-o.top-o.bottom),k=fe(()=>e.w-o.left-o.right);yn(d,{gridType:"xGrid",get innerHeight(){return p(B)},get innerWidth(){return p(k)},get scale(){return p(s)},get ticks(){return l}})}var x=me(d);D(x,"stroke-width",2);var v=me(x);yt(v,17,()=>e.data,xt,(B,k)=>{var N=oc();D(N,"r",5),D(N,"stroke","#ffffff"),D(N,"stroke-width",1),Ve((Y,V)=>{D(N,"cx",Y),D(N,"cy",V),D(N,"fill",xe[t()])},[()=>p(s)(p(k).period),()=>p(c)(p(k).nitrogen)]),ie(B,N)});var E=me(v);D(E,"stroke-width",2);var P=me(E);yt(P,17,()=>e.data,xt,(B,k)=>{var N=sc();D(N,"r",5),D(N,"stroke","#ffffff"),D(N,"stroke-width",1),Ve((Y,V)=>{D(N,"cx",Y),D(N,"cy",V),D(N,"fill",xe.cat5)},[()=>p(s)(p(k).period),()=>p(c)(p(k).phosphorus)]),ie(B,N)});var A=me(P);let R;var L=Ge(A,!0);Oe(A);var M=me(A);let T;var w=Ge(M,!0);Oe(M),Oe(_),Ve((B,k,N,Y,V,j)=>{D(_,"transform",`translate(${o.left}, ${o.top})`),D(x,"d",B),D(x,"stroke",xe[t()]),D(E,"d",k),D(E,"stroke",xe.cat5),D(A,"x",N),D(A,"y",Y),R=Qe(A,"",R,{fill:xe[t()]}),bt(L,e.nitrogen),D(M,"x",V),D(M,"y",j),T=Qe(M,"",T,{fill:xe.cat5}),bt(w,e.phosphorus)},[()=>p(u)("nitrogen")(e.data),()=>p(u)("phosphorus")(e.data),()=>p(s)(1997),()=>p(c)(175),()=>p(s)(1985),()=>p(c)(21)]),ie(y,_)},o={top:24,right:24,bottom:24,left:48};let s=fe(()=>xn().domain([1860,2050]).range([0,e.w-o.left-o.right])),l=[1860,1900,1950,1980,1990,2010,2050],c=fe(()=>xn().domain([0,300]).range([e.h-o.top-o.bottom,0])),f=[0,50,100,150,200,250,300],u=fe(()=>function(y){return y1().x(_=>p(s)(_.period)).y(_=>p(c)(_[y])).curve($i)});var h=Xe(),m=ke(h);Ut(m,()=>e.container??Lt,()=>({svg:a})),ie(i,h),zt(),r()}var cc=dn('<div class="globes-container svelte-1oew24o"><!> <!></div>');function cu(i,e){Bt(e,!0);const t=()=>un(di,"$isMobile",n),[n,r]=cn(),a=_=>{var g=Xe(),d=ke(g);{var x=v=>{var E=cc();let P;var A=Ge(E);Ot(A,{longitude:0,latitude:25,get w(){return p(l)},get h(){return p(l)},get textureImage(){return e.texture},countriesFill:"none",countriesStroke:"#eeeeee",countriesStrokeWidth:0,get projection(){return p(c)},set projection(L){Ct(c,L,!0)}});var R=me(A,2);Ot(R,{longitude:110,latitude:20,get w(){return p(l)},get h(){return p(l)},get textureImage(){return e.texture},countriesFill:"none",countriesStroke:"#eeeeee",countriesStrokeWidth:0,get projection(){return p(f)},set projection(L){Ct(f,L,!0)}}),Oe(E),Ve(()=>P=Qe(E,"",P,{"flex-direction":t()?"column":"row"})),ie(v,E)};lt(d,v=>{e.w>0&&v(x)})}ie(_,g)},o=_=>{or(_,{get title(){return e.legend_title},get unitLabel(){return e.legend_unit_label},get units(){return e.legend_units},get color(){return h},tickLabels:[{value:0,label:0},{value:25,label:25},{value:50,label:50},{value:75,label:75}]})};let s=Vt(e,"h",15);En(()=>{t()||s(e.w/2),t()&&s(2*e.w)});let l=fe(()=>t()?e.w:s()),c=Dt(void 0),f=Dt(void 0);const u=M1(v1,["#faebdd","#f58860","#cb1b4f","#611f53","#03051a"]);let h=sr([0,75],u).clamp(!0);var m=Xe(),y=ke(m);Ut(y,()=>e.container??Lt,()=>({content:a,bottom:o})),ie(i,m),zt(),r()}var uc=dn('<div class="globes-container svelte-86ei7d"><!> <!></div>');function uu(i,e){Bt(e,!0);const t=()=>un(di,"$isMobile",n),[n,r]=cn(),a=_=>{var g=Xe(),d=ke(g);{var x=v=>{var E=uc();let P;var A=Ge(E);Ot(A,{longitude:0,latitude:25,get w(){return p(l)},get h(){return p(l)},get textureImage(){return e.texture},countriesFill:"none",countriesStroke:"#eeeeee",countriesStrokeWidth:0,get projection(){return p(c)},set projection(L){Ct(c,L,!0)}});var R=me(A,2);Ot(R,{longitude:110,latitude:20,get w(){return p(l)},get h(){return p(l)},get textureImage(){return e.texture},countriesFill:"none",countriesStroke:"#eeeeee",countriesStrokeWidth:0,get projection(){return p(f)},set projection(L){Ct(f,L,!0)}}),Oe(E),Ve(()=>P=Qe(E,"",P,{"flex-direction":t()?"column":"row"})),ie(v,E)};lt(d,v=>{e.w>0&&v(x)})}ie(_,g)},o=_=>{or(_,{get title(){return e.legend_title},get unitLabel(){return e.legend_unit_label},get units(){return e.legend_units},get color(){return h},tickLabels:[{value:0,label:0},{value:25,label:25},{value:50,label:50},{value:75,label:75}]})};let s=Vt(e,"h",15);En(()=>{t()||s(e.w/2),t()&&s(2*e.w)});let l=fe(()=>t()?e.w:s()),c=Dt(void 0),f=Dt(void 0);const u=M1(v1,["#faebdd","#f58860","#cb1b4f","#611f53","#03051a"]);let h=sr([0,75],u).clamp(!0);var m=Xe(),y=ke(m);Ut(y,()=>e.container??Lt,()=>({content:a,bottom:o})),ie(i,m),zt(),r()}var dc=dn('<div class="globes-container svelte-1btgkgl"><!> <!></div>');function du(i,e){Bt(e,!0);const t=()=>un(di,"$isMobile",n),[n,r]=cn(),a=y=>{var _=Xe(),g=ke(_);{var d=x=>{var v=dc();let E;var P=Ge(v);Ot(P,{longitude:-30,latitude:20,get w(){return p(l)},get h(){return p(l)},get textureImage(){return e.texture},get countriesFill(){return xe.grey100},countriesFillOpacity:.7,countriesStroke:"#eeeeee",countriesStrokeWidth:1,showGraticule:!0,get projection(){return p(c)},set projection(R){Ct(c,R,!0)}});var A=me(P,2);Ot(A,{longitude:0,latitude:-89,get w(){return p(l)},get h(){return p(l)},get textureImage(){return e.texture},get countriesFill(){return xe.grey100},countriesFillOpacity:.7,countriesStroke:"#eeeeee",countriesStrokeWidth:1,showGraticule:!0,get projection(){return p(f)},set projection(R){Ct(f,R,!0)}}),Oe(v),Ve(()=>E=Qe(v,"",E,{"flex-direction":t()?"column":"row"})),ie(x,v)};lt(g,x=>{e.w>0&&x(d)})}ie(y,_)},o=y=>{or(y,{get title(){return e.legend_title},get unitLabel(){return e.legend_unit_label},get units(){return e.legend_units},get color(){return u}})};let s=Vt(e,"h",15);En(()=>{t()||s(e.w/2),t()&&s(2*e.w)});let l=fe(()=>t()?e.w:s()),c=Dt(void 0),f=Dt(void 0),u=sr([-3,3],Zs).clamp(!0);var h=Xe(),m=ke(h);Ut(m,()=>e.container??Lt,()=>({content:a,bottom:o})),ie(i,h),zt(),r()}var fc=Ke("<circle></circle>"),hc=Ke("<path></path><!>",1),pc=Ke("<g><!><!><!></g>");function fu(i,e){Bt(e,!0);const t=h=>{var m=pc(),y=Ge(m);{let d=fe(()=>r()-a.top-a.bottom),x=fe(()=>e.w-a.left-a.right);yn(y,{gridType:"yGrid",get innerHeight(){return p(d)},get innerWidth(){return p(x)},get scale(){return p(s)},ticks:[0,2,4,6,8],axisTitle:"",axisUnits:"%",animated:!1})}var _=me(y);{let d=fe(()=>r()-a.top-a.bottom),x=fe(()=>e.w-a.left-a.right),v=fe(()=>p(o).ticks());yn(_,{gridType:"xGrid",get innerHeight(){return p(d)},get innerWidth(){return p(x)},get scale(){return p(o)},get ticks(){return p(v)}})}var g=me(_);yt(g,17,()=>c,xt,(d,x)=>{const v=fe(()=>e.data.filter(R=>R.region==p(x).label));var E=hc(),P=ke(E);D(P,"fill","none"),D(P,"stroke-width",2);var A=me(P);yt(A,17,()=>p(v),xt,(R,L)=>{var M=fc();D(M,"r",4),D(M,"stroke","white"),D(M,"stroke-width",1),Ve((T,w)=>{D(M,"cx",T),D(M,"cy",w),D(M,"fill",p(x).color)},[()=>p(o)(p(L).year),()=>p(s)(p(L).value)]),ie(R,M)}),Ve(R=>{D(P,"d",R),D(P,"stroke",p(x).color)},[()=>p(l)(p(v))]),ie(d,E)}),Oe(m),Ve(()=>D(m,"transform",`translate(${a.left},${a.top})`)),ie(h,m)},n=h=>{Qs(h,{get items(){return c}})};let r=Vt(e,"h",15);r(600);let a={top:24,right:42,bottom:24,left:24},o=fe(()=>xn().domain([2005,2022]).range([0,e.w-a.left-a.right])),s=fe(()=>xn().domain([0,8]).range([r()-a.top-a.bottom,0])),l=fe(()=>y1().x(h=>p(o)(h.year)).y(h=>p(s)(h.value)).curve($i)),c=["World","Asia","Europe","Africa","Oceania","Northern America","South America"].map((h,m)=>({label:h,color:xe["cat"+(m+1)]}));var f=Xe(),u=ke(f);Ut(u,()=>e.container??Lt,()=>({svg:t,bottom:n})),ie(i,f),zt()}var mc=dn('<div class="globes-container svelte-1oc462e"><!> <!></div>');function hu(i,e){Bt(e,!0);const t=()=>un(di,"$isMobile",n),[n,r]=cn(),a=y=>{var _=Xe(),g=ke(_);{var d=x=>{var v=mc();let E;var P=Ge(v);Ot(P,{longitude:-70,latitude:10,get w(){return p(l)},get h(){return p(l)},get textureImage(){return e.texture},get countriesFill(){return xe.grey100},countriesFillOpacity:.3,countriesStroke:"#eeeeee",countriesStrokeWidth:1,get projection(){return p(c)},set projection(R){Ct(c,R,!0)}});var A=me(P,2);Ot(A,{longitude:40,latitude:20,get w(){return p(l)},get h(){return p(l)},get textureImage(){return e.texture},get countriesFill(){return xe.grey100},countriesFillOpacity:.3,countriesStroke:"#eeeeee",countriesStrokeWidth:1,get projection(){return p(f)},set projection(R){Ct(f,R,!0)}}),Oe(v),Ve(()=>E=Qe(v,"",E,{"flex-direction":t()?"column":"row"})),ie(x,v)};lt(g,x=>{e.w>0&&x(d)})}ie(y,_)},o=y=>{or(y,{get title(){return e.legend_title},get unitLabel(){return e.legend_unit_label},get units(){return e.legend_units},get color(){return u}})};let s=Vt(e,"h",15);En(()=>{t()||s(e.w/2),t()&&s(2*e.w)});let l=fe(()=>t()?e.w:s()),c=Dt(void 0),f=Dt(void 0),u=sr([0,50],Js).clamp(!0);var h=Xe(),m=ke(h);Ut(m,()=>e.container??Lt,()=>({content:a,bottom:o})),ie(i,h),zt(),r()}var gc=Ke("<circle></circle>"),_c=Ke("<g></g>"),vc=Ke("<circle></circle>"),yc=Ke("<g></g>"),xc=dn('<div class="globes-container svelte-15fg4gu"><!> <!></div>');function pu(i,e){Bt(e,!0);const t=()=>un(di,"$isMobile",n),[n,r]=cn(),a=g=>{var d=Xe(),x=ke(d);{var v=E=>{var P=_c();Qe(P,"",{},{isolation:"isolate"}),yt(P,21,()=>e.data.filter(A=>h([A.longitude,A.latitude])),xt,(A,R)=>{const L=fe(()=>p(f)([p(R).longitude,p(R).latitude]));var M=gc();D(M,"r",4),D(M,"stroke-width",1.5),Qe(M,"",{},{"fill-opacity":.2,"stroke-opacity":.5,"mix-blend-mode":"multiply"}),Ve(()=>{D(M,"cx",p(L)[0]),D(M,"cy",p(L)[1]),D(M,"stroke",xe.cat2),D(M,"fill",xe.cat2)}),ie(A,M)}),Oe(P),ie(E,P)};lt(x,E=>{p(f)&&E(v)})}ie(g,d)},o=g=>{var d=Xe(),x=ke(d);{var v=E=>{var P=yc();Qe(P,"",{},{isolation:"isolate"}),yt(P,21,()=>e.data.filter(A=>m([A.longitude,A.latitude])),xt,(A,R)=>{const L=fe(()=>p(u)([p(R).longitude,p(R).latitude]));var M=vc();D(M,"r",4),D(M,"stroke-width",1.5),Qe(M,"",{},{"fill-opacity":.2,"stroke-opacity":.5,"mix-blend-mode":"multiply"}),Ve(()=>{D(M,"cx",p(L)[0]),D(M,"cy",p(L)[1]),D(M,"stroke",xe.cat2),D(M,"fill",xe.cat2)}),ie(A,M)}),Oe(P),ie(E,P)};lt(x,E=>{p(u)&&E(v)})}ie(g,d)},s=g=>{var d=Xe(),x=ke(d);{var v=E=>{var P=xc();let A;var R=Ge(P);Ot(R,{longitude:-50,latitude:40,get w(){return p(c)},get h(){return p(c)},get textureImage(){return e.texture},get dataLayer(){return a},countriesFill:"none",countriesStroke:"#ffffff",countriesStrokeWidth:.5,get projection(){return p(f)},set projection(M){Ct(f,M,!0)}});var L=me(R,2);Ot(L,{longitude:150,latitude:-10,get w(){return p(c)},get h(){return p(c)},get textureImage(){return e.texture},get dataLayer(){return o},countriesFill:"none",countriesStroke:"#ffffff",countriesStrokeWidth:.5,get projection(){return p(u)},set projection(M){Ct(u,M,!0)}}),Oe(P),Ve(()=>A=Qe(P,"",A,{"flex-direction":t()?"column":"row"})),ie(E,P)};lt(x,E=>{e.w>0&&E(v)})}ie(g,d)};let l=Vt(e,"h",15);En(()=>{t()||l(e.w/2),t()&&l(2*e.w)});let c=fe(()=>t()?e.w:l()),f=Dt(void 0),u=Dt(void 0);function h([g,d]){const x=qr(p(f).rotate())([g,d]);return x[0]>-90&&x[0]<90}function m([g,d]){const x=qr(p(u).rotate())([g,d]);return x[0]>-90&&x[0]<90}var y=Xe(),_=ke(y);Ut(_,()=>e.container??Lt,()=>({content:s})),ie(i,y),zt(),r()}const Mc=[{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-141.752137,39.422311],[-141.552707,39.422311],[-141.552707,39.223108],[-141.652422,39.223108],[-141.652422,39.322709],[-141.752137,39.322709],[-141.752137,39.422311]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-140.754986,39.123506],[-140.655271,39.123506],[-140.655271,39.023904],[-140.754986,39.023904],[-140.754986,39.123506]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-140.555556,39.123506],[-140.356125,39.123506],[-140.356125,39.023904],[-140.45584,39.023904],[-140.45584,38.924303],[-140.555556,38.924303],[-140.555556,39.123506]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-139.85755,39.123506],[-139.757835,39.123506],[-139.757835,39.023904],[-139.85755,39.023904],[-139.85755,39.123506]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-142.649573,39.023904],[-142.450142,39.023904],[-142.450142,38.924303],[-142.649573,38.924303],[-142.649573,39.023904]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-141.652422,39.023904],[-141.552707,39.023904],[-141.552707,38.924303],[-141.652422,38.924303],[-141.652422,39.023904]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-140.954416,39.223108],[-140.854701,39.223108],[-140.854701,39.023904],[-140.754986,39.023904],[-140.754986,38.924303],[-140.854701,38.924303],[-140.954416,38.924303],[-140.954416,38.824701],[-141.054131,38.824701],[-141.054131,38.924303],[-141.153846,38.924303],[-141.153846,39.023904],[-141.054131,39.023904],[-140.954416,39.023904],[-140.954416,39.223108]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-145.541311,38.824701],[-145.441595,38.824701],[-145.441595,38.7251],[-145.541311,38.7251],[-145.541311,38.824701]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-141.951567,39.123506],[-141.851852,39.123506],[-141.851852,38.924303],[-141.652422,38.924303],[-141.652422,38.824701],[-141.452991,38.824701],[-141.452991,38.924303],[-141.253561,38.924303],[-141.253561,38.824701],[-141.054131,38.824701],[-141.054131,38.7251],[-140.954416,38.7251],[-140.954416,38.625498],[-141.054131,38.625498],[-141.153846,38.625498],[-141.153846,38.7251],[-141.253561,38.7251],[-141.253561,38.525896],[-141.353276,38.525896],[-141.353276,38.625498],[-141.452991,38.625498],[-141.452991,38.525896],[-141.752137,38.525896],[-141.752137,38.625498],[-141.851852,38.625498],[-141.851852,38.7251],[-141.951567,38.7251],[-141.951567,38.625498],[-142.051282,38.625498],[-142.051282,38.7251],[-142.150997,38.7251],[-142.150997,38.625498],[-142.250712,38.625498],[-142.250712,38.7251],[-142.350427,38.7251],[-142.350427,38.824701],[-142.250712,38.824701],[-142.150997,38.824701],[-142.150997,38.924303],[-142.051282,38.924303],[-142.051282,38.824701],[-141.951567,38.824701],[-141.951567,39.123506]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-143.646724,38.7251],[-143.547009,38.7251],[-143.547009,38.625498],[-143.646724,38.625498],[-143.646724,38.7251]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-143.347578,38.7251],[-143.247863,38.7251],[-143.247863,38.625498],[-143.347578,38.625498],[-143.347578,38.7251]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-143.148148,38.7251],[-143.048433,38.7251],[-143.048433,38.625498],[-143.148148,38.625498],[-143.148148,38.7251]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-136.367521,38.7251],[-136.267806,38.7251],[-136.267806,38.625498],[-136.367521,38.625498],[-136.367521,38.7251]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-145.541311,38.625498],[-145.441595,38.625498],[-145.441595,38.525896],[-145.541311,38.525896],[-145.541311,38.625498]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-140.854701,38.625498],[-140.754986,38.625498],[-140.754986,38.426295],[-140.854701,38.426295],[-140.854701,38.625498]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-140.45584,38.625498],[-140.356125,38.625498],[-140.356125,38.525896],[-140.45584,38.525896],[-140.45584,38.625498]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-139.458689,38.625498],[-139.358974,38.625498],[-139.358974,38.525896],[-139.458689,38.525896],[-139.458689,38.625498]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-145.641026,38.525896],[-145.541311,38.525896],[-145.541311,38.426295],[-145.641026,38.426295],[-145.641026,38.525896]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-145.34188,38.525896],[-145.042735,38.525896],[-145.042735,38.426295],[-145.14245,38.426295],[-145.14245,38.326693],[-145.242165,38.326693],[-145.242165,38.426295],[-145.34188,38.426295],[-145.34188,38.525896]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-141.452991,38.525896],[-141.353276,38.525896],[-141.353276,38.426295],[-141.452991,38.426295],[-141.452991,38.525896]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-141.153846,38.525896],[-141.054131,38.525896],[-141.054131,38.426295],[-141.153846,38.426295],[-141.153846,38.525896]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-139.259259,38.525896],[-138.960114,38.525896],[-138.960114,38.426295],[-139.259259,38.426295],[-139.259259,38.525896]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-138.860399,38.525896],[-138.561254,38.525896],[-138.561254,38.326693],[-138.760684,38.326693],[-138.760684,38.426295],[-138.860399,38.426295],[-138.860399,38.525896]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-146.239316,38.426295],[-146.139601,38.426295],[-146.139601,38.326693],[-146.239316,38.326693],[-146.239316,38.426295]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-141.851852,38.426295],[-141.552707,38.426295],[-141.552707,38.326693],[-141.851852,38.326693],[-141.851852,38.426295]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-141.054131,38.426295],[-140.954416,38.426295],[-140.954416,38.326693],[-140.754986,38.326693],[-140.754986,38.227092],[-141.054131,38.227092],[-141.054131,38.426295]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-139.558405,38.426295],[-139.358974,38.426295],[-139.358974,38.326693],[-139.458689,38.326693],[-139.458689,38.227092],[-139.558405,38.227092],[-139.558405,38.426295]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-138.960114,38.426295],[-138.860399,38.426295],[-138.860399,38.326693],[-138.960114,38.326693],[-138.960114,38.426295]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-142.549858,38.326693],[-142.450142,38.326693],[-142.450142,38.12749],[-142.549858,38.12749],[-142.549858,38.326693]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-141.552707,38.326693],[-141.452991,38.326693],[-141.452991,38.227092],[-141.552707,38.227092],[-141.552707,38.326693]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-140.356125,38.326693],[-140.25641,38.326693],[-140.25641,38.227092],[-140.356125,38.227092],[-140.356125,38.326693]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-146.139601,38.326693],[-146.039886,38.326693],[-146.039886,38.12749],[-146.139601,38.12749],[-146.239316,38.12749],[-146.239316,38.227092],[-146.139601,38.227092],[-146.139601,38.326693]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-145.541311,38.227092],[-145.441595,38.227092],[-145.441595,38.12749],[-145.541311,38.12749],[-145.541311,38.227092]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-145.042735,38.227092],[-144.94302,38.227092],[-144.94302,38.12749],[-145.042735,38.12749],[-145.042735,38.227092]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-140.754986,38.227092],[-140.655271,38.227092],[-140.655271,38.12749],[-140.754986,38.12749],[-140.754986,38.227092]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-140.45584,38.227092],[-140.356125,38.227092],[-140.356125,38.12749],[-140.45584,38.12749],[-140.45584,38.227092]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-144.843305,38.326693],[-144.74359,38.326693],[-144.74359,38.12749],[-144.643875,38.12749],[-144.643875,38.027888],[-144.843305,38.027888],[-144.843305,38.326693]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-142.051282,38.426295],[-141.951567,38.426295],[-141.951567,38.326693],[-141.851852,38.326693],[-141.851852,38.227092],[-141.752137,38.227092],[-141.752137,38.12749],[-141.353276,38.12749],[-141.353276,38.326693],[-141.153846,38.326693],[-141.153846,37.928287],[-141.253561,37.928287],[-141.353276,37.928287],[-141.353276,37.828685],[-141.452991,37.828685],[-141.452991,38.027888],[-142.150997,38.027888],[-142.150997,38.12749],[-142.250712,38.12749],[-142.250712,38.326693],[-142.150997,38.326693],[-142.051282,38.326693],[-142.051282,38.426295]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-140.156695,38.12749],[-140.05698,38.12749],[-140.05698,38.027888],[-140.156695,38.027888],[-140.156695,38.12749]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-151.125356,38.027888],[-151.025641,38.027888],[-151.025641,37.928287],[-151.125356,37.928287],[-151.125356,38.027888]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-136.866097,38.027888],[-136.666667,38.027888],[-136.666667,37.928287],[-136.866097,37.928287],[-136.866097,38.027888]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-136.566952,38.027888],[-136.467236,38.027888],[-136.467236,37.928287],[-136.566952,37.928287],[-136.566952,38.027888]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-137.065527,37.928287],[-136.866097,37.928287],[-136.866097,37.828685],[-136.965812,37.828685],[-136.965812,37.729084],[-137.065527,37.729084],[-137.065527,37.928287]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-136.666667,37.828685],[-136.566952,37.828685],[-136.566952,37.729084],[-136.666667,37.729084],[-136.666667,37.828685]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-150.527066,37.629482],[-150.42735,37.629482],[-150.42735,37.52988],[-150.527066,37.52988],[-150.527066,37.629482]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-144.045584,37.430279],[-143.945869,37.430279],[-143.945869,37.330677],[-144.045584,37.330677],[-144.045584,37.430279]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-148.333333,37.231076],[-148.233618,37.231076],[-148.233618,37.031873],[-148.333333,37.031873],[-148.333333,37.231076]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-138.561254,37.131474],[-138.461538,37.131474],[-138.461538,37.031873],[-138.561254,37.031873],[-138.561254,37.131474]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-148.233618,37.031873],[-147.934473,37.031873],[-147.934473,36.932271],[-148.233618,36.932271],[-148.233618,37.031873]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-147.735043,37.031873],[-147.635328,37.031873],[-147.635328,36.932271],[-147.735043,36.932271],[-147.735043,37.031873]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-134.871795,37.031873],[-134.77208,37.031873],[-134.77208,36.932271],[-134.871795,36.932271],[-134.871795,37.031873]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-151.823362,36.932271],[-151.723647,36.932271],[-151.723647,36.832669],[-151.623932,36.832669],[-151.623932,36.733068],[-151.823362,36.733068],[-151.823362,36.932271]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-148.333333,36.932271],[-148.233618,36.932271],[-148.233618,36.832669],[-148.333333,36.832669],[-148.333333,36.932271]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-148.433048,36.832669],[-148.333333,36.832669],[-148.333333,36.733068],[-148.433048,36.733068],[-148.433048,36.832669]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-148.532764,36.733068],[-148.433048,36.733068],[-148.433048,36.633466],[-148.532764,36.633466],[-148.532764,36.733068]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-148.632479,36.633466],[-148.532764,36.633466],[-148.532764,36.533865],[-148.632479,36.533865],[-148.632479,36.633466]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-136.168091,36.633466],[-136.068376,36.633466],[-136.068376,36.533865],[-136.168091,36.533865],[-136.168091,36.633466]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-155.11396,36.932271],[-154.91453,36.932271],[-154.91453,36.633466],[-154.51567,36.633466],[-154.51567,36.533865],[-154.615385,36.533865],[-154.615385,36.434263],[-154.7151,36.434263],[-154.7151,36.533865],[-154.814815,36.533865],[-154.814815,36.434263],[-154.91453,36.434263],[-154.91453,36.334661],[-155.11396,36.334661],[-155.11396,36.533865],[-155.213675,36.533865],[-155.213675,36.633466],[-155.11396,36.633466],[-155.014245,36.633466],[-155.014245,36.832669],[-155.11396,36.832669],[-155.11396,36.932271]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-136.566952,36.533865],[-136.467236,36.533865],[-136.467236,36.434263],[-136.566952,36.434263],[-136.566952,36.533865]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-136.367521,36.533865],[-136.267806,36.533865],[-136.267806,36.434263],[-136.367521,36.434263],[-136.367521,36.533865]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.814815,36.434263],[-154.7151,36.434263],[-154.7151,36.334661],[-154.814815,36.334661],[-154.814815,36.434263]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.51567,36.434263],[-154.216524,36.434263],[-154.216524,36.334661],[-154.51567,36.334661],[-154.51567,36.434263]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-135.470085,36.434263],[-135.37037,36.434263],[-135.37037,36.334661],[-135.470085,36.334661],[-135.470085,36.434263]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-134.57265,36.434263],[-134.472934,36.434263],[-134.472934,36.334661],[-134.57265,36.334661],[-134.57265,36.434263]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-132.578348,36.434263],[-132.478632,36.434263],[-132.478632,36.334661],[-132.578348,36.334661],[-132.578348,36.434263]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-155.213675,36.334661],[-155.11396,36.334661],[-155.11396,36.23506],[-155.213675,36.23506],[-155.213675,36.334661]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.216524,36.334661],[-154.017094,36.334661],[-154.017094,36.135458],[-154.116809,36.135458],[-154.116809,36.23506],[-154.216524,36.23506],[-154.216524,36.334661]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-136.666667,36.334661],[-136.566952,36.334661],[-136.566952,36.23506],[-136.666667,36.23506],[-136.666667,36.334661]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-135.569801,36.334661],[-135.470085,36.334661],[-135.470085,36.23506],[-135.569801,36.23506],[-135.569801,36.334661]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-132.478632,36.334661],[-132.378917,36.334661],[-132.378917,36.23506],[-132.478632,36.23506],[-132.478632,36.334661]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-131.082621,36.334661],[-130.982906,36.334661],[-130.982906,36.23506],[-131.082621,36.23506],[-131.082621,36.334661]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-153.917379,36.23506],[-153.717949,36.23506],[-153.717949,36.135458],[-153.917379,36.135458],[-153.917379,36.23506]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.51567,36.135458],[-154.415954,36.135458],[-154.415954,36.035857],[-154.51567,36.035857],[-154.51567,36.135458]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.509972,36.035857],[-156.310541,36.035857],[-156.310541,35.836653],[-156.410256,35.836653],[-156.410256,35.936255],[-156.509972,35.936255],[-156.509972,36.035857]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.609687,35.836653],[-156.509972,35.836653],[-156.509972,35.737052],[-156.609687,35.737052],[-156.609687,35.836653]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-132.678063,35.836653],[-132.578348,35.836653],[-132.578348,35.737052],[-132.678063,35.737052],[-132.678063,35.836653]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.415954,36.035857],[-154.316239,36.035857],[-154.316239,35.537849],[-154.415954,35.537849],[-154.415954,36.035857]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-133.376068,35.936255],[-133.076923,35.936255],[-133.076923,35.836653],[-133.176638,35.836653],[-133.176638,35.737052],[-133.276353,35.737052],[-133.276353,35.63745],[-133.376068,35.63745],[-133.376068,35.936255]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.91453,35.936255],[-154.7151,35.936255],[-154.7151,35.836653],[-154.814815,35.836653],[-154.814815,35.63745],[-155.014245,35.63745],[-155.014245,35.836653],[-154.91453,35.836653],[-154.91453,35.936255]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.216524,35.836653],[-154.017094,35.836653],[-154.017094,35.63745],[-154.116809,35.63745],[-154.116809,35.737052],[-154.216524,35.737052],[-154.216524,35.836653]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-147.136752,35.836653],[-147.037037,35.836653],[-147.037037,35.63745],[-147.136752,35.63745],[-147.136752,35.836653]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-132.977208,35.438247],[-132.877493,35.438247],[-132.877493,35.338645],[-132.977208,35.338645],[-132.977208,35.438247]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-157.806268,35.338645],[-157.706553,35.338645],[-157.706553,35.239044],[-157.806268,35.239044],[-157.806268,35.338645]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.011396,35.139442],[-155.911681,35.139442],[-155.911681,35.039841],[-156.011396,35.039841],[-156.011396,35.139442]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-153.019943,35.139442],[-152.820513,35.139442],[-152.820513,35.039841],[-153.019943,35.039841],[-153.019943,35.139442]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-152.820513,35.039841],[-152.621083,35.039841],[-152.621083,34.940239],[-152.820513,34.940239],[-152.820513,35.039841]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-132.877493,35.039841],[-132.777778,35.039841],[-132.777778,34.940239],[-132.877493,34.940239],[-132.877493,35.039841]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.410256,35.139442],[-156.210826,35.139442],[-156.210826,34.940239],[-156.310541,34.940239],[-156.310541,34.840637],[-156.410256,34.840637],[-156.410256,35.139442]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.111111,34.940239],[-156.011396,34.940239],[-156.011396,34.840637],[-156.111111,34.840637],[-156.111111,34.940239]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-152.621083,34.940239],[-152.521368,34.940239],[-152.521368,34.840637],[-152.621083,34.840637],[-152.621083,34.940239]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-152.421652,34.940239],[-152.321937,34.940239],[-152.321937,34.840637],[-152.421652,34.840637],[-152.421652,34.940239]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.011396,34.840637],[-155.911681,34.840637],[-155.911681,34.741036],[-156.011396,34.741036],[-156.011396,34.840637]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-152.521368,34.840637],[-152.421652,34.840637],[-152.421652,34.741036],[-152.521368,34.741036],[-152.521368,34.840637]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.509972,34.741036],[-156.410256,34.741036],[-156.410256,34.541833],[-156.509972,34.541833],[-156.509972,34.741036]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-158.504274,34.641434],[-158.205128,34.641434],[-158.205128,34.541833],[-158.304843,34.541833],[-158.304843,34.442231],[-158.504274,34.442231],[-158.504274,34.641434]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-158.005698,34.641434],[-157.806268,34.641434],[-157.806268,34.541833],[-158.005698,34.541833],[-158.005698,34.641434]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.111111,34.641434],[-156.011396,34.641434],[-156.011396,34.541833],[-156.111111,34.541833],[-156.111111,34.641434]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-158.105413,34.442231],[-157.905983,34.442231],[-157.905983,34.342629],[-158.105413,34.342629],[-158.105413,34.442231]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.111111,34.442231],[-156.011396,34.442231],[-156.011396,34.342629],[-156.111111,34.342629],[-156.111111,34.442231]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.011396,34.342629],[-155.911681,34.342629],[-155.911681,34.243028],[-156.011396,34.243028],[-156.011396,34.342629]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-158.603989,34.442231],[-158.504274,34.442231],[-158.504274,34.143426],[-158.603989,34.143426],[-158.703704,34.143426],[-158.703704,34.243028],[-158.603989,34.243028],[-158.603989,34.442231]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.908832,34.243028],[-156.809117,34.243028],[-156.809117,34.143426],[-156.908832,34.143426],[-156.908832,34.243028]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-158.903134,34.143426],[-158.703704,34.143426],[-158.703704,33.944223],[-158.603989,33.944223],[-158.603989,33.844622],[-158.803419,33.844622],[-158.803419,33.944223],[-158.903134,33.944223],[-158.903134,34.143426]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-158.504274,34.143426],[-158.304843,34.143426],[-158.304843,34.043825],[-158.504274,34.043825],[-158.504274,34.143426]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.011396,34.143426],[-155.911681,34.143426],[-155.911681,33.944223],[-156.011396,33.944223],[-156.011396,34.143426]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.7151,34.143426],[-154.615385,34.143426],[-154.615385,34.043825],[-154.7151,34.043825],[-154.7151,34.143426]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.310541,34.143426],[-156.111111,34.143426],[-156.111111,34.043825],[-156.210826,34.043825],[-156.210826,33.944223],[-156.310541,33.944223],[-156.310541,33.74502],[-156.410256,33.74502],[-156.410256,34.043825],[-156.310541,34.043825],[-156.310541,34.143426]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-155.712251,34.043825],[-155.612536,34.043825],[-155.612536,33.944223],[-155.712251,33.944223],[-155.712251,34.043825]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-159.102564,33.944223],[-159.002849,33.944223],[-159.002849,33.844622],[-159.102564,33.844622],[-159.102564,33.944223]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-157.507123,33.944223],[-157.407407,33.944223],[-157.407407,33.844622],[-157.507123,33.844622],[-157.507123,33.944223]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-157.108262,33.944223],[-157.008547,33.944223],[-157.008547,33.844622],[-157.108262,33.844622],[-157.108262,33.944223]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-157.606838,33.844622],[-157.507123,33.844622],[-157.507123,33.74502],[-157.606838,33.74502],[-157.606838,33.844622]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-159.102564,33.74502],[-159.002849,33.74502],[-159.002849,33.645418],[-159.102564,33.645418],[-159.102564,33.74502]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-158.903134,33.74502],[-158.803419,33.74502],[-158.803419,33.645418],[-158.903134,33.645418],[-158.903134,33.74502]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-158.205128,33.74502],[-158.005698,33.74502],[-158.005698,33.645418],[-158.105413,33.645418],[-158.105413,33.545817],[-158.205128,33.545817],[-158.205128,33.74502]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-157.905983,33.74502],[-157.806268,33.74502],[-157.806268,33.645418],[-157.905983,33.645418],[-157.905983,33.74502]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.609687,33.74502],[-156.410256,33.74502],[-156.410256,33.645418],[-156.609687,33.645418],[-156.609687,33.74502]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.111111,33.74502],[-156.011396,33.74502],[-156.011396,33.645418],[-156.111111,33.645418],[-156.111111,33.74502]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-150.527066,33.74502],[-150.42735,33.74502],[-150.42735,33.645418],[-150.527066,33.645418],[-150.527066,33.74502]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-158.803419,33.645418],[-158.703704,33.645418],[-158.703704,33.545817],[-158.803419,33.545817],[-158.803419,33.645418]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-150.42735,33.645418],[-150.327635,33.645418],[-150.327635,33.545817],[-150.42735,33.545817],[-150.42735,33.645418]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-159.401709,33.446215],[-159.301994,33.446215],[-159.301994,33.346614],[-159.401709,33.346614],[-159.401709,33.446215]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-150.327635,33.545817],[-149.928775,33.545817],[-149.928775,33.346614],[-150.02849,33.346614],[-150.02849,33.247012],[-150.128205,33.247012],[-150.128205,33.446215],[-150.327635,33.446215],[-150.327635,33.545817]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-152.122507,33.346614],[-152.022792,33.346614],[-152.022792,33.247012],[-152.122507,33.247012],[-152.122507,33.346614]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-158.404558,33.247012],[-158.304843,33.247012],[-158.304843,33.14741],[-158.404558,33.14741],[-158.404558,33.247012]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-152.521368,33.247012],[-152.321937,33.247012],[-152.321937,33.14741],[-152.521368,33.14741],[-152.521368,33.247012]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-148.532764,33.247012],[-148.433048,33.247012],[-148.433048,33.14741],[-148.532764,33.14741],[-148.532764,33.247012]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-152.321937,33.14741],[-152.222222,33.14741],[-152.222222,33.047809],[-152.321937,33.047809],[-152.321937,33.14741]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-130.2849,33.14741],[-130.185185,33.14741],[-130.185185,33.047809],[-130.2849,33.047809],[-130.2849,33.14741]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-152.521368,33.047809],[-152.421652,33.047809],[-152.421652,32.948207],[-152.521368,32.948207],[-152.521368,33.047809]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-151.823362,33.047809],[-151.723647,33.047809],[-151.723647,32.848606],[-151.823362,32.848606],[-151.823362,33.047809]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-130.48433,33.047809],[-130.384615,33.047809],[-130.384615,32.948207],[-130.48433,32.948207],[-130.48433,33.047809]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-130.883191,32.948207],[-130.48433,32.948207],[-130.48433,32.848606],[-130.584046,32.848606],[-130.683761,32.848606],[-130.683761,32.649402],[-130.783476,32.649402],[-130.783476,32.749004],[-130.883191,32.749004],[-130.883191,32.948207]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-155.712251,33.844622],[-155.612536,33.844622],[-155.612536,33.74502],[-155.512821,33.74502],[-155.512821,33.645418],[-155.612536,33.645418],[-155.612536,33.545817],[-155.413105,33.545817],[-155.413105,33.446215],[-155.31339,33.446215],[-155.31339,33.346614],[-155.213675,33.346614],[-155.213675,33.247012],[-155.11396,33.247012],[-155.11396,33.14741],[-155.213675,33.14741],[-155.31339,33.14741],[-155.31339,33.247012],[-155.413105,33.247012],[-155.413105,33.346614],[-155.512821,33.346614],[-155.512821,33.247012],[-155.413105,33.247012],[-155.413105,33.047809],[-155.31339,33.047809],[-155.31339,32.948207],[-155.11396,32.948207],[-155.11396,32.749004],[-155.213675,32.749004],[-155.31339,32.749004],[-155.31339,32.649402],[-155.612536,32.649402],[-155.612536,32.749004],[-155.512821,32.749004],[-155.413105,32.749004],[-155.413105,32.848606],[-155.512821,32.848606],[-155.512821,32.948207],[-155.712251,32.948207],[-155.712251,33.047809],[-155.911681,33.047809],[-155.911681,33.247012],[-156.310541,33.247012],[-156.310541,33.446215],[-156.210826,33.446215],[-156.210826,33.346614],[-156.111111,33.346614],[-156.111111,33.446215],[-156.011396,33.446215],[-155.911681,33.446215],[-155.911681,33.545817],[-156.011396,33.545817],[-156.011396,33.645418],[-155.811966,33.645418],[-155.712251,33.645418],[-155.712251,33.844622]],[[-155.911681,33.446215],[-155.911681,33.346614],[-155.811966,33.346614],[-155.811966,33.14741],[-155.712251,33.14741],[-155.712251,33.346614],[-155.811966,33.346614],[-155.811966,33.446215],[-155.911681,33.446215]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.615385,32.749004],[-154.415954,32.749004],[-154.415954,32.649402],[-154.615385,32.649402],[-154.615385,32.749004]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.216524,32.749004],[-154.116809,32.749004],[-154.116809,32.649402],[-154.216524,32.649402],[-154.216524,32.749004]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-151.723647,32.749004],[-151.623932,32.749004],[-151.623932,32.649402],[-151.524217,32.649402],[-151.524217,32.549801],[-151.723647,32.549801],[-151.723647,32.749004]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.316239,32.649402],[-154.216524,32.649402],[-154.216524,32.549801],[-154.316239,32.549801],[-154.316239,32.649402]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-151.225071,32.450199],[-151.025641,32.450199],[-151.025641,32.350598],[-151.225071,32.350598],[-151.225071,32.450199]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-150.327635,32.450199],[-150.22792,32.450199],[-150.22792,32.350598],[-150.327635,32.350598],[-150.327635,32.450199]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-155.911681,32.350598],[-155.811966,32.350598],[-155.811966,32.250996],[-155.911681,32.250996],[-155.911681,32.350598]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.011396,32.250996],[-155.911681,32.250996],[-155.911681,32.151394],[-156.011396,32.151394],[-156.011396,32.250996]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-130.08547,32.250996],[-129.985755,32.250996],[-129.985755,32.151394],[-130.08547,32.151394],[-130.08547,32.250996]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-155.911681,32.151394],[-155.811966,32.151394],[-155.811966,31.952191],[-155.911681,31.952191],[-155.911681,32.151394]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-151.324786,32.151394],[-151.225071,32.151394],[-151.225071,32.051793],[-151.324786,32.051793],[-151.324786,32.151394]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.410256,32.051793],[-156.310541,32.051793],[-156.310541,31.952191],[-156.410256,31.952191],[-156.410256,32.051793]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-155.014245,32.051793],[-154.91453,32.051793],[-154.91453,31.952191],[-155.014245,31.952191],[-155.014245,32.051793]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.615385,31.952191],[-154.51567,31.952191],[-154.51567,31.85259],[-154.615385,31.85259],[-154.615385,31.952191]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-150.626781,31.952191],[-150.527066,31.952191],[-150.527066,31.752988],[-150.626781,31.752988],[-150.626781,31.952191]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-131.980057,31.952191],[-131.780627,31.952191],[-131.780627,31.85259],[-131.980057,31.85259],[-131.980057,31.952191]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.609687,31.85259],[-156.509972,31.85259],[-156.509972,31.752988],[-156.609687,31.752988],[-156.609687,31.85259]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-155.11396,31.85259],[-155.014245,31.85259],[-155.014245,31.752988],[-155.11396,31.752988],[-155.11396,31.85259]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-154.814815,31.85259],[-154.7151,31.85259],[-154.7151,31.752988],[-154.814815,31.752988],[-154.814815,31.85259]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-152.022792,31.85259],[-151.923077,31.85259],[-151.923077,31.752988],[-152.022792,31.752988],[-152.022792,31.85259]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-150.327635,31.85259],[-150.22792,31.85259],[-150.22792,31.752988],[-150.327635,31.752988],[-150.327635,31.85259]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-150.42735,31.752988],[-150.327635,31.752988],[-150.327635,31.553785],[-150.42735,31.553785],[-150.42735,31.752988]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.310541,31.653386],[-156.111111,31.653386],[-156.111111,31.553785],[-156.210826,31.553785],[-156.210826,31.454183],[-156.111111,31.454183],[-156.111111,31.354582],[-156.410256,31.354582],[-156.410256,31.454183],[-156.609687,31.454183],[-156.609687,31.553785],[-156.410256,31.553785],[-156.310541,31.553785],[-156.310541,31.653386]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-152.022792,31.454183],[-151.923077,31.454183],[-151.923077,31.354582],[-152.022792,31.354582],[-152.022792,31.454183]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-130.384615,31.454183],[-130.2849,31.454183],[-130.2849,31.354582],[-130.384615,31.354582],[-130.384615,31.454183]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-156.011396,31.354582],[-155.911681,31.354582],[-155.911681,31.25498],[-156.011396,31.25498],[-156.011396,31.354582]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-132.977208,31.354582],[-132.877493,31.354582],[-132.877493,31.25498],[-132.977208,31.25498],[-132.977208,31.354582]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-132.279202,31.354582],[-132.179487,31.354582],[-132.179487,31.25498],[-132.279202,31.25498],[-132.279202,31.354582]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-132.777778,31.155378],[-132.678063,31.155378],[-132.678063,31.055777],[-132.777778,31.055777],[-132.777778,31.155378]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-146.239316,30.856574],[-146.139601,30.856574],[-146.139601,30.756972],[-146.239316,30.756972],[-146.239316,30.856574]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-149.529915,30.756972],[-149.430199,30.756972],[-149.430199,30.657371],[-149.529915,30.657371],[-149.529915,30.756972]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-133.575499,30.358566],[-133.475783,30.358566],[-133.475783,30.258964],[-133.575499,30.258964],[-133.575499,30.358566]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-133.376068,30.358566],[-133.276353,30.358566],[-133.276353,30.258964],[-133.376068,30.258964],[-133.376068,30.358566]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-145.042735,30.258964],[-144.94302,30.258964],[-144.94302,30.159363],[-145.042735,30.159363],[-145.042735,30.258964]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-134.074074,30.258964],[-133.974359,30.258964],[-133.974359,30.159363],[-134.074074,30.159363],[-134.074074,30.258964]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-134.074074,30.557769],[-133.974359,30.557769],[-133.974359,30.458167],[-133.874644,30.458167],[-133.874644,30.358566],[-133.675214,30.358566],[-133.675214,30.059761],[-133.774929,30.059761],[-133.874644,30.059761],[-133.874644,30.159363],[-133.774929,30.159363],[-133.774929,30.258964],[-133.974359,30.258964],[-133.974359,30.358566],[-134.074074,30.358566],[-134.074074,30.557769]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-133.276353,30.159363],[-133.076923,30.159363],[-133.076923,30.059761],[-133.276353,30.059761],[-133.276353,30.159363]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-142.150997,29.960159],[-141.951567,29.960159],[-141.951567,29.860558],[-142.150997,29.860558],[-142.150997,29.960159]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-133.675214,29.860558],[-133.575499,29.860558],[-133.575499,29.760956],[-133.475783,29.760956],[-133.475783,29.661355],[-133.675214,29.661355],[-133.675214,29.860558]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-140.954416,29.661355],[-140.854701,29.661355],[-140.854701,29.561753],[-140.954416,29.561753],[-140.954416,29.661355]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-136.467236,29.661355],[-136.367521,29.661355],[-136.367521,29.561753],[-136.467236,29.561753],[-136.467236,29.661355]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-141.054131,29.561753],[-140.954416,29.561753],[-140.954416,29.462151],[-141.054131,29.462151],[-141.054131,29.561753]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-136.866097,29.561753],[-136.566952,29.561753],[-136.566952,29.462151],[-136.666667,29.462151],[-136.766382,29.462151],[-136.766382,29.36255],[-136.965812,29.36255],[-136.965812,29.462151],[-136.866097,29.462151],[-136.866097,29.561753]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-136.367521,29.462151],[-136.267806,29.462151],[-136.267806,29.36255],[-136.367521,29.36255],[-136.367521,29.462151]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-146.737892,30.059761],[-146.538462,30.059761],[-146.538462,29.960159],[-146.438746,29.960159],[-146.438746,30.059761],[-146.339031,30.059761],[-146.339031,29.860558],[-146.039886,29.860558],[-146.039886,29.760956],[-146.139601,29.760956],[-146.139601,29.661355],[-145.840456,29.661355],[-145.840456,29.561753],[-145.740741,29.561753],[-145.740741,29.661355],[-145.541311,29.661355],[-145.541311,29.36255],[-145.641026,29.36255],[-145.641026,29.262948],[-145.740741,29.262948],[-145.740741,29.163347],[-145.641026,29.163347],[-145.641026,29.063745],[-145.740741,29.063745],[-145.740741,28.964143],[-146.039886,28.964143],[-146.039886,29.063745],[-146.339031,29.063745],[-146.339031,29.163347],[-146.638177,29.163347],[-146.638177,29.36255],[-146.538462,29.36255],[-146.538462,29.561753],[-146.638177,29.561753],[-146.638177,29.860558],[-146.737892,29.860558],[-146.737892,30.059761]],[[-146.239316,29.462151],[-146.239316,29.36255],[-146.139601,29.36255],[-146.039886,29.36255],[-146.039886,29.561753],[-146.139601,29.561753],[-146.139601,29.661355],[-146.239316,29.661355],[-146.239316,29.760956],[-146.339031,29.760956],[-146.339031,29.561753],[-146.139601,29.561753],[-146.139601,29.462151],[-146.239316,29.462151]],[[-146.039886,29.36255],[-146.039886,29.163347],[-145.940171,29.163347],[-145.940171,29.36255],[-146.039886,29.36255]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-136.267806,29.36255],[-136.068376,29.36255],[-136.068376,29.262948],[-136.267806,29.262948],[-136.267806,29.36255]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-147.635328,28.665339],[-147.535613,28.665339],[-147.535613,28.565737],[-147.635328,28.565737],[-147.635328,28.665339]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-138.162393,29.262948],[-137.962963,29.262948],[-137.962963,29.163347],[-138.062678,29.163347],[-138.062678,29.063745],[-137.962963,29.063745],[-137.962963,29.163347],[-137.863248,29.163347],[-137.863248,28.964143],[-137.962963,28.964143],[-137.962963,28.864542],[-138.062678,28.864542],[-138.062678,28.964143],[-138.361823,28.964143],[-138.361823,28.864542],[-138.262108,28.864542],[-138.262108,28.665339],[-138.162393,28.665339],[-138.162393,28.565737],[-138.262108,28.565737],[-138.262108,28.466135],[-138.062678,28.466135],[-138.062678,28.366534],[-137.962963,28.366534],[-137.962963,28.266932],[-138.162393,28.266932],[-138.162393,28.366534],[-138.461538,28.366534],[-138.461538,28.466135],[-138.561254,28.466135],[-138.561254,28.665339],[-138.461538,28.665339],[-138.361823,28.665339],[-138.361823,28.76494],[-138.461538,28.76494],[-138.461538,29.063745],[-138.262108,29.063745],[-138.162393,29.063745],[-138.162393,29.262948]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-138.262108,38.7251],[-138.162393,38.7251],[-138.162393,38.525896],[-137.962963,38.525896],[-137.962963,38.326693],[-137.863248,38.326693],[-137.863248,38.227092],[-137.763533,38.227092],[-137.763533,38.12749],[-137.663818,38.12749],[-137.663818,38.227092],[-137.564103,38.227092],[-137.564103,38.12749],[-137.464387,38.12749],[-137.464387,38.027888],[-137.364672,38.027888],[-137.364672,37.928287],[-137.264957,37.928287],[-137.264957,37.729084],[-137.065527,37.729084],[-137.065527,37.629482],[-137.165242,37.629482],[-137.165242,37.52988],[-136.965812,37.52988],[-136.965812,37.629482],[-136.866097,37.629482],[-136.866097,37.52988],[-136.766382,37.52988],[-136.766382,37.430279],[-136.566952,37.430279],[-136.566952,37.330677],[-136.467236,37.330677],[-136.467236,37.231076],[-136.566952,37.231076],[-136.566952,36.932271],[-136.467236,36.932271],[-136.467236,36.733068],[-136.367521,36.733068],[-136.367521,36.633466],[-136.467236,36.633466],[-136.566952,36.633466],[-136.566952,36.533865],[-136.666667,36.533865],[-136.666667,36.733068],[-136.766382,36.733068],[-136.766382,36.832669],[-136.666667,36.832669],[-136.666667,36.932271],[-136.766382,36.932271],[-136.766382,36.832669],[-136.866097,36.832669],[-136.866097,36.135458],[-136.766382,36.135458],[-136.766382,36.035857],[-136.866097,36.035857],[-136.866097,35.936255],[-136.766382,35.936255],[-136.766382,35.737052],[-136.666667,35.737052],[-136.666667,36.035857],[-136.267806,36.035857],[-136.168091,36.035857],[-136.168091,36.23506],[-136.068376,36.23506],[-136.068376,36.135458],[-135.968661,36.135458],[-135.968661,36.035857],[-135.868946,36.035857],[-135.868946,36.135458],[-135.769231,36.135458],[-135.769231,36.035857],[-135.669516,36.035857],[-135.669516,36.135458],[-135.569801,36.135458],[-135.470085,36.135458],[-135.470085,36.23506],[-135.37037,36.23506],[-135.270655,36.23506],[-135.270655,36.533865],[-134.77208,36.533865],[-134.77208,36.334661],[-134.57265,36.334661],[-134.57265,36.23506],[-134.672365,36.23506],[-134.871795,36.23506],[-134.871795,36.135458],[-134.97151,36.135458],[-134.97151,36.035857],[-134.57265,36.035857],[-134.57265,35.936255],[-134.273504,35.936255],[-134.273504,36.035857],[-134.173789,36.035857],[-134.173789,35.936255],[-134.074074,35.936255],[-134.074074,35.836653],[-134.173789,35.836653],[-134.373219,35.836653],[-134.373219,35.63745],[-134.273504,35.63745],[-134.273504,35.438247],[-134.173789,35.438247],[-134.173789,35.63745],[-133.874644,35.63745],[-133.774929,35.63745],[-133.774929,35.737052],[-133.475783,35.737052],[-133.475783,35.537849],[-133.376068,35.537849],[-133.376068,35.338645],[-133.475783,35.338645],[-133.475783,35.438247],[-133.575499,35.438247],[-133.575499,35.239044],[-133.475783,35.239044],[-133.475783,35.139442],[-133.575499,35.139442],[-133.575499,35.039841],[-133.475783,35.039841],[-133.475783,34.940239],[-133.276353,34.940239],[-133.276353,35.039841],[-133.475783,35.039841],[-133.475783,35.139442],[-133.376068,35.139442],[-133.376068,35.338645],[-133.176638,35.338645],[-133.176638,35.239044],[-132.977208,35.239044],[-132.977208,35.139442],[-133.076923,35.139442],[-133.076923,35.039841],[-133.176638,35.039841],[-133.176638,34.840637],[-132.877493,34.840637],[-132.877493,34.741036],[-132.478632,34.741036],[-132.478632,34.940239],[-132.378917,34.940239],[-132.378917,35.039841],[-132.279202,35.039841],[-132.279202,34.940239],[-132.179487,34.940239],[-132.179487,34.840637],[-132.079772,34.840637],[-132.079772,35.039841],[-131.980057,35.039841],[-131.980057,34.641434],[-131.880342,34.641434],[-131.880342,34.541833],[-131.980057,34.541833],[-131.980057,34.442231],[-131.880342,34.442231],[-131.880342,34.342629],[-131.780627,34.342629],[-131.780627,34.143426],[-131.680912,34.143426],[-131.680912,34.043825],[-131.581197,34.043825],[-131.581197,33.944223],[-131.481481,33.944223],[-131.481481,33.645418],[-131.282051,33.645418],[-131.282051,33.545817],[-131.182336,33.545817],[-131.182336,33.346614],[-131.082621,33.346614],[-131.082621,33.247012],[-131.182336,33.247012],[-131.182336,33.14741],[-130.982906,33.14741],[-130.982906,32.749004],[-130.883191,32.749004],[-130.883191,32.649402],[-130.783476,32.649402],[-130.783476,32.549801],[-130.584046,32.549801],[-130.584046,32.649402],[-130.48433,32.649402],[-130.48433,32.549801],[-130.384615,32.549801],[-130.384615,32.450199],[-130.185185,32.450199],[-130.185185,32.350598],[-130.08547,32.350598],[-130.08547,32.250996],[-130.185185,32.250996],[-130.185185,31.952191],[-130.2849,31.952191],[-130.2849,32.151394],[-130.584046,32.151394],[-130.584046,32.051793],[-130.48433,32.051793],[-130.48433,31.952191],[-130.584046,31.952191],[-130.584046,31.85259],[-130.48433,31.85259],[-130.48433,31.752988],[-130.584046,31.752988],[-130.584046,31.653386],[-130.683761,31.653386],[-130.683761,31.553785],[-130.783476,31.553785],[-130.783476,31.454183],[-130.584046,31.454183],[-130.584046,31.25498],[-130.683761,31.25498],[-130.982906,31.25498],[-130.982906,31.155378],[-131.082621,31.155378],[-131.481481,31.155378],[-131.481481,31.055777],[-131.581197,31.055777],[-131.880342,31.055777],[-131.880342,30.956175],[-132.378917,30.956175],[-132.378917,31.055777],[-132.478632,31.055777],[-132.478632,31.155378],[-132.179487,31.155378],[-132.079772,31.155378],[-132.079772,31.454183],[-131.980057,31.454183],[-131.980057,31.354582],[-131.780627,31.354582],[-131.680912,31.354582],[-131.680912,31.454183],[-131.780627,31.454183],[-131.780627,31.553785],[-131.680912,31.553785],[-131.680912,31.653386],[-131.780627,31.653386],[-131.780627,31.752988],[-131.680912,31.752988],[-131.680912,31.85259],[-131.282051,31.85259],[-131.282051,31.752988],[-131.182336,31.752988],[-131.182336,32.051793],[-131.282051,32.051793],[-131.282051,32.151394],[-131.381766,32.151394],[-131.381766,32.250996],[-131.680912,32.250996],[-131.680912,32.350598],[-131.780627,32.350598],[-131.780627,32.250996],[-131.880342,32.250996],[-131.880342,32.350598],[-131.980057,32.350598],[-131.980057,32.250996],[-131.880342,32.250996],[-131.880342,32.151394],[-131.980057,32.151394],[-131.980057,32.051793],[-132.079772,32.051793],[-132.079772,32.151394],[-132.478632,32.151394],[-132.478632,32.250996],[-132.578348,32.250996],[-132.578348,32.350598],[-132.678063,32.350598],[-132.678063,32.250996],[-132.578348,32.250996],[-132.578348,32.151394],[-132.478632,32.151394],[-132.478632,32.051793],[-132.079772,32.051793],[-132.079772,31.952191],[-132.179487,31.952191],[-132.179487,31.85259],[-132.279202,31.85259],[-132.678063,31.85259],[-132.678063,31.752988],[-132.578348,31.752988],[-132.578348,31.653386],[-132.678063,31.653386],[-132.777778,31.653386],[-132.777778,31.454183],[-132.877493,31.454183],[-133.176638,31.454183],[-133.176638,31.155378],[-133.276353,31.155378],[-133.276353,31.454183],[-133.376068,31.454183],[-133.376068,31.354582],[-133.475783,31.354582],[-133.575499,31.354582],[-133.575499,31.25498],[-134.074074,31.25498],[-134.074074,31.354582],[-134.273504,31.354582],[-134.273504,31.25498],[-134.373219,31.25498],[-134.472934,31.25498],[-134.472934,31.155378],[-134.57265,31.155378],[-134.77208,31.155378],[-134.77208,30.956175],[-134.871795,30.956175],[-134.871795,30.856574],[-134.672365,30.856574],[-134.672365,30.956175],[-134.57265,30.956175],[-134.472934,30.956175],[-134.472934,31.055777],[-134.373219,31.055777],[-134.373219,30.956175],[-134.273504,30.956175],[-134.273504,31.055777],[-134.173789,31.055777],[-134.173789,30.956175],[-133.774929,30.956175],[-133.774929,30.856574],[-133.475783,30.856574],[-133.475783,30.756972],[-133.276353,30.756972],[-133.276353,30.657371],[-133.376068,30.657371],[-133.774929,30.657371],[-133.774929,30.557769],[-133.874644,30.557769],[-133.874644,30.657371],[-133.974359,30.657371],[-133.974359,30.756972],[-134.173789,30.756972],[-134.173789,30.856574],[-134.273504,30.856574],[-134.273504,30.756972],[-134.373219,30.756972],[-134.373219,30.657371],[-134.57265,30.657371],[-134.57265,30.756972],[-134.672365,30.756972],[-134.672365,30.657371],[-134.57265,30.657371],[-134.57265,30.557769],[-134.672365,30.557769],[-134.672365,30.458167],[-134.77208,30.458167],[-134.77208,30.657371],[-134.871795,30.657371],[-134.871795,30.557769],[-134.97151,30.557769],[-134.97151,30.458167],[-135.071225,30.458167],[-135.071225,30.258964],[-134.97151,30.258964],[-134.97151,30.159363],[-134.871795,30.159363],[-134.871795,30.059761],[-134.77208,30.059761],[-134.77208,29.960159],[-134.672365,29.960159],[-134.672365,29.760956],[-134.77208,29.760956],[-134.77208,29.661355],[-134.672365,29.661355],[-134.672365,29.561753],[-134.77208,29.561753],[-134.77208,29.462151],[-134.871795,29.462151],[-134.871795,29.262948],[-134.97151,29.262948],[-134.97151,29.063745],[-135.071225,29.063745],[-135.071225,28.964143],[-135.17094,28.964143],[-135.17094,29.063745],[-135.270655,29.063745],[-135.270655,28.864542],[-135.37037,28.864542],[-135.769231,28.864542],[-135.769231,28.964143],[-135.669516,28.964143],[-135.669516,29.262948],[-135.769231,29.262948],[-135.769231,29.36255],[-135.868946,29.36255],[-135.868946,29.262948],[-135.769231,29.262948],[-135.769231,28.964143],[-135.868946,28.964143],[-135.868946,29.063745],[-135.968661,29.063745],[-135.968661,29.163347],[-136.068376,29.163347],[-136.068376,29.262948],[-135.968661,29.262948],[-135.968661,29.561753],[-136.068376,29.561753],[-136.068376,29.462151],[-136.267806,29.462151],[-136.267806,29.661355],[-136.367521,29.661355],[-136.367521,29.860558],[-136.467236,29.860558],[-136.467236,29.960159],[-136.566952,29.960159],[-136.566952,29.760956],[-136.666667,29.760956],[-136.766382,29.760956],[-136.766382,29.661355],[-136.866097,29.661355],[-136.866097,29.760956],[-136.965812,29.760956],[-136.965812,29.661355],[-137.065527,29.661355],[-137.065527,29.760956],[-137.165242,29.760956],[-137.165242,29.661355],[-137.264957,29.661355],[-137.264957,29.561753],[-137.364672,29.561753],[-137.364672,29.36255],[-137.264957,29.36255],[-137.264957,29.561753],[-137.165242,29.561753],[-137.165242,29.36255],[-136.965812,29.36255],[-136.965812,29.163347],[-136.866097,29.163347],[-136.866097,29.262948],[-136.766382,29.262948],[-136.766382,29.36255],[-136.666667,29.36255],[-136.666667,29.262948],[-136.566952,29.262948],[-136.566952,29.36255],[-136.467236,29.36255],[-136.467236,29.262948],[-136.367521,29.262948],[-136.367521,29.063745],[-136.267806,29.063745],[-136.267806,28.964143],[-136.367521,28.964143],[-136.367521,28.864542],[-136.267806,28.864542],[-136.267806,28.964143],[-136.168091,28.964143],[-136.168091,28.366534],[-136.267806,28.366534],[-136.267806,28.565737],[-136.367521,28.565737],[-136.367521,28.466135],[-136.467236,28.466135],[-136.467236,28.366534],[-136.566952,28.366534],[-136.566952,28.167331],[-136.666667,28.167331],[-136.666667,28.266932],[-136.766382,28.266932],[-136.766382,28.565737],[-136.866097,28.565737],[-136.866097,28.76494],[-136.965812,28.76494],[-136.965812,28.964143],[-137.065527,28.964143],[-137.065527,29.163347],[-137.165242,29.163347],[-137.165242,29.262948],[-137.264957,29.262948],[-137.264957,29.163347],[-137.165242,29.163347],[-137.165242,28.964143],[-137.065527,28.964143],[-137.065527,28.665339],[-136.965812,28.665339],[-136.965812,28.565737],[-136.866097,28.565737],[-136.866097,28.366534],[-136.965812,28.366534],[-136.965812,28.266932],[-137.165242,28.266932],[-137.165242,28.366534],[-137.464387,28.366534],[-137.464387,28.466135],[-137.364672,28.466135],[-137.364672,28.665339],[-137.464387,28.665339],[-137.464387,28.76494],[-137.364672,28.76494],[-137.364672,28.864542],[-137.464387,28.864542],[-137.464387,28.964143],[-137.564103,28.964143],[-137.564103,29.063745],[-137.663818,29.063745],[-137.663818,29.760956],[-137.863248,29.760956],[-137.863248,29.661355],[-138.062678,29.661355],[-138.062678,29.860558],[-138.262108,29.860558],[-138.262108,29.760956],[-138.361823,29.760956],[-138.561254,29.760956],[-138.561254,29.561753],[-138.660969,29.561753],[-138.660969,29.661355],[-138.760684,29.661355],[-138.760684,29.561753],[-138.660969,29.561753],[-138.660969,29.462151],[-138.860399,29.462151],[-138.860399,29.661355],[-138.960114,29.661355],[-138.960114,29.760956],[-139.259259,29.760956],[-139.259259,29.661355],[-139.358974,29.661355],[-139.358974,29.860558],[-139.458689,29.860558],[-139.458689,29.760956],[-139.558405,29.760956],[-139.558405,29.860558],[-139.957265,29.860558],[-139.957265,29.960159],[-140.156695,29.960159],[-140.156695,30.059761],[-140.555556,30.059761],[-140.555556,29.960159],[-140.655271,29.960159],[-140.655271,29.860558],[-140.45584,29.860558],[-140.45584,29.661355],[-140.356125,29.661355],[-140.356125,29.561753],[-140.45584,29.561753],[-140.45584,29.36255],[-140.555556,29.36255],[-140.555556,29.462151],[-140.655271,29.462151],[-140.655271,29.561753],[-140.754986,29.561753],[-140.754986,29.661355],[-140.854701,29.661355],[-140.854701,29.860558],[-140.954416,29.860558],[-140.954416,29.661355],[-141.054131,29.661355],[-141.054131,29.760956],[-141.253561,29.760956],[-141.253561,29.860558],[-141.452991,29.860558],[-141.452991,29.960159],[-141.652422,29.960159],[-141.652422,29.860558],[-141.752137,29.860558],[-141.752137,30.059761],[-141.851852,30.059761],[-141.851852,30.159363],[-141.951567,30.159363],[-141.951567,30.258964],[-142.051282,30.258964],[-142.051282,30.159363],[-142.450142,30.159363],[-142.450142,30.458167],[-142.549858,30.458167],[-142.549858,30.557769],[-142.849003,30.557769],[-142.849003,30.657371],[-143.048433,30.657371],[-143.048433,30.756972],[-143.547009,30.756972],[-143.547009,30.657371],[-143.247863,30.657371],[-143.247863,30.557769],[-143.048433,30.557769],[-143.048433,30.458167],[-142.849003,30.458167],[-142.849003,30.258964],[-142.749288,30.258964],[-142.749288,30.059761],[-142.849003,30.059761],[-143.048433,30.059761],[-143.048433,30.159363],[-143.148148,30.159363],[-143.148148,30.059761],[-143.846154,30.059761],[-143.846154,30.159363],[-143.945869,30.159363],[-143.945869,30.059761],[-144.74359,30.059761],[-144.74359,30.159363],[-144.843305,30.159363],[-144.843305,30.358566],[-144.94302,30.358566],[-144.94302,30.458167],[-145.042735,30.458167],[-145.042735,30.657371],[-145.14245,30.657371],[-145.14245,31.055777],[-145.042735,31.055777],[-145.042735,31.155378],[-144.94302,31.155378],[-144.94302,31.553785],[-144.843305,31.553785],[-144.843305,31.454183],[-144.74359,31.454183],[-144.74359,31.354582],[-144.643875,31.354582],[-144.643875,31.25498],[-144.444444,31.25498],[-144.444444,31.354582],[-144.643875,31.354582],[-144.643875,31.454183],[-144.54416,31.454183],[-144.54416,31.553785],[-144.444444,31.553785],[-144.444444,31.752988],[-144.54416,31.752988],[-144.54416,31.85259],[-144.843305,31.85259],[-144.843305,31.752988],[-145.242165,31.752988],[-145.242165,31.85259],[-145.14245,31.85259],[-145.042735,31.85259],[-145.042735,31.952191],[-145.34188,31.952191],[-145.34188,31.85259],[-145.441595,31.85259],[-145.641026,31.85259],[-145.641026,31.752988],[-145.242165,31.752988],[-145.242165,31.653386],[-145.34188,31.653386],[-145.441595,31.653386],[-145.441595,31.454183],[-145.541311,31.454183],[-145.541311,31.553785],[-145.641026,31.553785],[-145.641026,31.454183],[-145.541311,31.454183],[-145.541311,31.25498],[-145.641026,31.25498],[-145.641026,31.155378],[-145.740741,31.155378],[-145.840456,31.155378],[-145.840456,31.055777],[-145.940171,31.055777],[-146.039886,31.055777],[-146.039886,30.956175],[-146.139601,30.956175],[-146.239316,30.956175],[-146.239316,30.856574],[-146.339031,30.856574],[-146.438746,30.856574],[-146.438746,30.756972],[-146.339031,30.756972],[-146.339031,30.458167],[-146.438746,30.458167],[-146.638177,30.458167],[-146.638177,30.358566],[-146.737892,30.358566],[-146.737892,30.159363],[-146.837607,30.159363],[-146.837607,29.960159],[-146.937322,29.960159],[-146.937322,29.860558],[-146.837607,29.860558],[-146.837607,29.760956],[-146.937322,29.760956],[-146.937322,29.462151],[-147.037037,29.462151],[-147.037037,29.561753],[-147.236467,29.561753],[-147.236467,29.661355],[-147.336182,29.661355],[-147.336182,29.760956],[-147.435897,29.760956],[-147.435897,29.860558],[-147.535613,29.860558],[-147.535613,30.059761],[-147.635328,30.059761],[-147.635328,29.960159],[-147.735043,29.960159],[-147.735043,30.159363],[-147.834758,30.159363],[-147.834758,30.358566],[-147.934473,30.358566],[-147.934473,30.458167],[-148.034188,30.458167],[-148.034188,30.557769],[-148.133903,30.557769],[-148.133903,30.756972],[-148.034188,30.756972],[-148.034188,30.856574],[-148.133903,30.856574],[-148.133903,30.956175],[-148.233618,30.956175],[-148.233618,30.856574],[-148.333333,30.856574],[-148.333333,30.956175],[-148.433048,30.956175],[-148.433048,31.055777],[-148.532764,31.055777],[-148.532764,30.956175],[-148.732194,30.956175],[-148.732194,31.055777],[-148.831909,31.055777],[-148.831909,30.956175],[-148.931624,30.956175],[-148.931624,31.055777],[-149.131054,31.055777],[-149.131054,31.155378],[-149.230769,31.155378],[-149.230769,31.25498],[-149.430199,31.25498],[-149.430199,31.354582],[-149.529915,31.354582],[-149.529915,31.454183],[-149.62963,31.454183],[-149.62963,31.553785],[-149.729345,31.553785],[-149.729345,31.653386],[-149.62963,31.653386],[-149.62963,31.752988],[-149.729345,31.752988],[-149.729345,31.952191],[-149.62963,31.952191],[-149.62963,32.051793],[-149.529915,32.051793],[-149.529915,32.151394],[-149.62963,32.151394],[-149.62963,32.051793],[-149.729345,32.051793],[-149.729345,31.952191],[-149.82906,31.952191],[-149.82906,31.653386],[-149.928775,31.653386],[-149.928775,31.752988],[-150.02849,31.752988],[-150.02849,31.85259],[-149.928775,31.85259],[-149.928775,32.151394],[-150.02849,32.151394],[-150.02849,32.250996],[-150.22792,32.250996],[-150.22792,32.350598],[-150.128205,32.350598],[-150.128205,32.450199],[-150.22792,32.450199],[-150.22792,32.549801],[-150.626781,32.549801],[-150.626781,32.250996],[-150.527066,32.250996],[-150.527066,32.350598],[-150.42735,32.350598],[-150.42735,32.250996],[-150.327635,32.250996],[-150.327635,32.151394],[-150.128205,32.151394],[-150.128205,31.952191],[-150.22792,31.952191],[-150.22792,32.051793],[-150.327635,32.051793],[-150.327635,31.952191],[-150.42735,31.952191],[-150.42735,32.051793],[-150.626781,32.051793],[-150.626781,32.151394],[-150.826211,32.151394],[-150.826211,32.051793],[-150.925926,32.051793],[-150.925926,31.952191],[-151.025641,31.952191],[-151.025641,32.250996],[-150.925926,32.250996],[-150.925926,32.350598],[-150.826211,32.350598],[-150.826211,32.450199],[-150.925926,32.450199],[-150.925926,32.549801],[-151.025641,32.549801],[-151.025641,32.649402],[-151.125356,32.649402],[-151.125356,32.749004],[-151.225071,32.749004],[-151.225071,32.848606],[-151.324786,32.848606],[-151.324786,32.948207],[-151.424501,32.948207],[-151.424501,33.047809],[-151.623932,33.047809],[-151.623932,33.14741],[-151.823362,33.14741],[-151.823362,33.446215],[-151.723647,33.446215],[-151.723647,33.545817],[-151.923077,33.545817],[-151.923077,33.74502],[-152.022792,33.74502],[-152.022792,33.545817],[-152.122507,33.545817],[-152.122507,33.74502],[-152.222222,33.74502],[-152.222222,33.645418],[-152.321937,33.645418],[-152.421652,33.645418],[-152.421652,33.545817],[-152.521368,33.545817],[-152.521368,33.346614],[-152.621083,33.346614],[-152.621083,33.047809],[-152.720798,33.047809],[-152.720798,32.948207],[-152.820513,32.948207],[-152.820513,32.749004],[-152.720798,32.749004],[-152.720798,32.848606],[-152.621083,32.848606],[-152.621083,32.948207],[-152.521368,32.948207],[-152.521368,32.848606],[-152.421652,32.848606],[-152.421652,32.749004],[-152.521368,32.749004],[-152.621083,32.749004],[-152.621083,32.649402],[-152.720798,32.649402],[-152.820513,32.649402],[-152.820513,32.549801],[-152.920228,32.549801],[-153.219373,32.549801],[-153.219373,32.450199],[-154.116809,32.450199],[-154.116809,32.649402],[-154.017094,32.649402],[-154.017094,32.749004],[-154.116809,32.749004],[-154.116809,32.848606],[-154.216524,32.848606],[-154.216524,32.749004],[-154.316239,32.749004],[-154.316239,32.848606],[-155.014245,32.848606],[-155.014245,32.948207],[-155.11396,32.948207],[-155.11396,33.14741],[-155.014245,33.14741],[-154.91453,33.14741],[-154.91453,33.247012],[-154.814815,33.247012],[-154.814815,33.14741],[-154.7151,33.14741],[-154.7151,33.247012],[-154.615385,33.247012],[-154.615385,33.346614],[-154.51567,33.346614],[-154.51567,33.247012],[-154.415954,33.247012],[-154.415954,33.446215],[-154.7151,33.446215],[-154.7151,33.346614],[-154.91453,33.346614],[-154.91453,33.446215],[-155.11396,33.446215],[-155.11396,33.545817],[-155.413105,33.545817],[-155.413105,33.645418],[-155.31339,33.645418],[-155.31339,33.844622],[-155.11396,33.844622],[-155.014245,33.844622],[-155.014245,33.944223],[-155.11396,33.944223],[-155.11396,34.043825],[-155.413105,34.043825],[-155.413105,34.143426],[-155.512821,34.143426],[-155.512821,34.243028],[-155.612536,34.243028],[-155.612536,34.342629],[-155.811966,34.342629],[-155.811966,34.442231],[-155.911681,34.442231],[-155.911681,34.741036],[-155.811966,34.741036],[-155.811966,34.840637],[-155.712251,34.840637],[-155.712251,34.940239],[-155.911681,34.940239],[-155.911681,35.039841],[-155.811966,35.039841],[-155.811966,35.139442],[-155.911681,35.139442],[-155.911681,35.239044],[-156.111111,35.239044],[-156.111111,35.63745],[-156.210826,35.63745],[-156.210826,35.438247],[-156.310541,35.438247],[-156.310541,35.239044],[-156.410256,35.239044],[-156.410256,35.537849],[-156.310541,35.537849],[-156.310541,35.63745],[-156.509972,35.63745],[-156.509972,35.737052],[-156.310541,35.737052],[-156.210826,35.737052],[-156.210826,35.936255],[-156.111111,35.936255],[-156.111111,36.035857],[-156.310541,36.035857],[-156.310541,36.135458],[-156.111111,36.135458],[-156.011396,36.135458],[-156.011396,36.23506],[-155.911681,36.23506],[-155.811966,36.23506],[-155.811966,36.334661],[-155.712251,36.334661],[-155.612536,36.334661],[-155.612536,36.533865],[-155.512821,36.533865],[-155.512821,36.633466],[-155.712251,36.633466],[-155.712251,36.733068],[-155.612536,36.733068],[-155.512821,36.733068],[-155.512821,36.832669],[-155.413105,36.832669],[-155.413105,36.434263],[-155.512821,36.434263],[-155.512821,36.334661],[-155.413105,36.334661],[-155.413105,36.434263],[-155.31339,36.434263],[-155.31339,36.533865],[-155.213675,36.533865],[-155.213675,36.334661],[-155.31339,36.334661],[-155.31339,36.23506],[-155.213675,36.23506],[-155.213675,36.135458],[-155.11396,36.135458],[-155.11396,36.23506],[-154.7151,36.23506],[-154.7151,36.135458],[-154.615385,36.135458],[-154.615385,36.035857],[-154.7151,36.035857],[-155.014245,36.035857],[-155.014245,35.936255],[-155.11396,35.936255],[-155.11396,35.836653],[-155.213675,35.836653],[-155.213675,35.936255],[-155.413105,35.936255],[-155.413105,35.737052],[-155.512821,35.737052],[-155.512821,35.537849],[-155.413105,35.537849],[-155.413105,35.338645],[-155.31339,35.338645],[-155.31339,35.139442],[-155.014245,35.139442],[-155.014245,35.039841],[-154.91453,35.039841],[-154.91453,35.139442],[-155.014245,35.139442],[-155.014245,35.239044],[-154.814815,35.239044],[-154.814815,35.139442],[-154.51567,35.139442],[-154.51567,35.039841],[-154.415954,35.039841],[-154.415954,35.239044],[-154.216524,35.239044],[-154.216524,35.139442],[-154.116809,35.139442],[-154.116809,35.239044],[-154.017094,35.239044],[-153.917379,35.239044],[-153.917379,35.438247],[-153.817664,35.438247],[-153.817664,35.537849],[-153.518519,35.537849],[-153.418803,35.537849],[-153.418803,35.63745],[-152.720798,35.63745],[-152.720798,35.537849],[-152.321937,35.537849],[-152.321937,35.438247],[-152.122507,35.438247],[-152.122507,35.338645],[-152.222222,35.338645],[-152.421652,35.338645],[-152.421652,35.438247],[-152.720798,35.438247],[-152.720798,35.338645],[-152.421652,35.338645],[-152.421652,35.239044],[-152.321937,35.239044],[-152.321937,35.139442],[-152.222222,35.139442],[-152.222222,35.039841],[-152.321937,35.039841],[-152.421652,35.039841],[-152.421652,34.940239],[-152.521368,34.940239],[-152.521368,35.139442],[-152.621083,35.139442],[-152.621083,35.239044],[-152.920228,35.239044],[-152.920228,35.338645],[-153.019943,35.338645],[-153.019943,35.537849],[-153.119658,35.537849],[-153.119658,35.438247],[-153.219373,35.438247],[-153.219373,35.537849],[-153.319088,35.537849],[-153.319088,35.438247],[-153.219373,35.438247],[-153.219373,35.338645],[-153.019943,35.338645],[-153.019943,35.239044],[-153.119658,35.239044],[-153.418803,35.239044],[-153.418803,35.438247],[-153.518519,35.438247],[-153.518519,35.338645],[-153.618234,35.338645],[-153.618234,35.239044],[-153.518519,35.239044],[-153.518519,35.139442],[-153.618234,35.139442],[-153.618234,34.940239],[-153.717949,34.940239],[-153.717949,34.840637],[-153.618234,34.840637],[-153.618234,34.641434],[-153.518519,34.641434],[-153.518519,35.039841],[-153.418803,35.039841],[-153.418803,35.139442],[-153.219373,35.139442],[-153.219373,35.039841],[-153.319088,35.039841],[-153.319088,34.940239],[-153.219373,34.940239],[-153.219373,34.840637],[-153.319088,34.840637],[-153.319088,34.741036],[-153.219373,34.741036],[-153.119658,34.741036],[-153.119658,35.039841],[-153.019943,35.039841],[-153.019943,34.840637],[-152.920228,34.840637],[-152.920228,34.940239],[-152.820513,34.940239],[-152.820513,34.840637],[-152.621083,34.840637],[-152.621083,34.641434],[-152.720798,34.641434],[-152.720798,34.541833],[-152.820513,34.541833],[-152.820513,34.641434],[-153.019943,34.641434],[-153.019943,34.541833],[-152.820513,34.541833],[-152.820513,34.442231],[-152.720798,34.442231],[-152.720798,34.342629],[-152.621083,34.342629],[-152.621083,34.442231],[-152.521368,34.442231],[-152.421652,34.442231],[-152.421652,34.641434],[-152.321937,34.641434],[-152.321937,34.741036],[-152.222222,34.741036],[-152.122507,34.741036],[-152.122507,35.338645],[-151.923077,35.338645],[-151.823362,35.338645],[-151.823362,35.63745],[-151.723647,35.63745],[-151.623932,35.63745],[-151.623932,35.737052],[-151.524217,35.737052],[-151.524217,35.63745],[-151.324786,35.63745],[-151.324786,35.537849],[-151.225071,35.537849],[-151.225071,35.438247],[-151.125356,35.438247],[-151.125356,35.537849],[-151.025641,35.537849],[-151.025641,35.836653],[-151.125356,35.836653],[-151.125356,36.035857],[-151.324786,36.035857],[-151.324786,36.135458],[-151.225071,36.135458],[-151.225071,36.334661],[-151.324786,36.334661],[-151.324786,36.633466],[-151.424501,36.633466],[-151.424501,37.131474],[-151.623932,37.131474],[-151.623932,37.231076],[-151.524217,37.231076],[-151.524217,37.330677],[-151.623932,37.330677],[-151.623932,37.52988],[-151.524217,37.52988],[-151.524217,37.729084],[-151.424501,37.729084],[-151.324786,37.729084],[-151.324786,37.828685],[-151.125356,37.828685],[-151.125356,37.729084],[-150.527066,37.729084],[-150.527066,37.629482],[-150.626781,37.629482],[-150.626781,37.52988],[-150.527066,37.52988],[-150.527066,37.430279],[-150.42735,37.430279],[-150.42735,37.52988],[-150.327635,37.52988],[-150.22792,37.52988],[-150.22792,37.629482],[-150.128205,37.629482],[-150.128205,37.52988],[-149.928775,37.52988],[-149.928775,37.629482],[-149.82906,37.629482],[-149.82906,37.52988],[-149.62963,37.52988],[-149.62963,37.430279],[-149.430199,37.430279],[-149.430199,37.330677],[-149.330484,37.330677],[-149.330484,37.231076],[-149.131054,37.231076],[-149.131054,37.031873],[-148.931624,37.031873],[-148.931624,36.932271],[-149.031339,36.932271],[-149.031339,36.832669],[-148.931624,36.832669],[-148.931624,36.733068],[-148.831909,36.733068],[-148.831909,36.832669],[-148.931624,36.832669],[-148.931624,36.932271],[-148.831909,36.932271],[-148.732194,36.932271],[-148.732194,37.031873],[-148.831909,37.031873],[-148.831909,37.131474],[-148.732194,37.131474],[-148.632479,37.131474],[-148.632479,37.231076],[-148.532764,37.231076],[-148.532764,37.131474],[-148.433048,37.131474],[-148.433048,37.031873],[-148.532764,37.031873],[-148.532764,36.733068],[-148.632479,36.733068],[-148.632479,36.633466],[-148.732194,36.633466],[-148.732194,36.533865],[-148.632479,36.533865],[-148.632479,36.434263],[-148.732194,36.434263],[-148.732194,36.334661],[-148.632479,36.334661],[-148.632479,36.434263],[-148.532764,36.434263],[-148.433048,36.434263],[-148.433048,36.633466],[-148.333333,36.633466],[-148.333333,36.533865],[-148.233618,36.533865],[-148.233618,36.633466],[-148.133903,36.633466],[-148.133903,36.533865],[-148.034188,36.533865],[-147.934473,36.533865],[-147.934473,36.633466],[-148.034188,36.633466],[-148.034188,36.832669],[-147.834758,36.832669],[-147.834758,36.533865],[-147.635328,36.533865],[-147.635328,36.633466],[-147.535613,36.633466],[-147.535613,36.533865],[-147.435897,36.533865],[-147.435897,36.633466],[-147.336182,36.633466],[-147.336182,36.533865],[-147.136752,36.533865],[-147.136752,36.434263],[-146.937322,36.434263],[-146.937322,36.334661],[-147.037037,36.334661],[-147.136752,36.334661],[-147.136752,36.23506],[-147.037037,36.23506],[-147.037037,36.135458],[-146.937322,36.135458],[-146.937322,35.836653],[-147.037037,35.836653],[-147.037037,35.936255],[-147.136752,35.936255],[-147.136752,36.035857],[-147.336182,36.035857],[-147.336182,36.135458],[-147.435897,36.135458],[-147.435897,35.936255],[-147.136752,35.936255],[-147.136752,35.836653],[-147.236467,35.836653],[-147.236467,35.737052],[-147.435897,35.737052],[-147.435897,35.836653],[-147.635328,35.836653],[-147.635328,35.936255],[-147.735043,35.936255],[-147.735043,35.836653],[-147.635328,35.836653],[-147.635328,35.737052],[-147.435897,35.737052],[-147.435897,35.63745],[-147.136752,35.63745],[-147.136752,35.537849],[-147.236467,35.537849],[-147.336182,35.537849],[-147.336182,35.438247],[-147.136752,35.438247],[-147.136752,35.537849],[-147.037037,35.537849],[-147.037037,35.239044],[-146.837607,35.239044],[-146.837607,35.039841],[-146.737892,35.039841],[-146.737892,35.139442],[-146.638177,35.139442],[-146.638177,35.239044],[-146.737892,35.239044],[-146.737892,35.338645],[-146.339031,35.338645],[-146.239316,35.338645],[-146.239316,35.438247],[-146.438746,35.438247],[-146.438746,35.63745],[-146.339031,35.63745],[-146.339031,36.035857],[-146.538462,36.035857],[-146.538462,36.135458],[-146.438746,36.135458],[-146.438746,36.334661],[-146.538462,36.334661],[-146.538462,36.733068],[-146.638177,36.733068],[-146.638177,36.832669],[-146.538462,36.832669],[-146.538462,36.932271],[-146.638177,36.932271],[-146.638177,37.131474],[-146.737892,37.131474],[-146.737892,37.330677],[-146.638177,37.330677],[-146.638177,37.231076],[-146.538462,37.231076],[-146.538462,37.131474],[-146.438746,37.131474],[-146.438746,37.031873],[-146.339031,37.031873],[-146.339031,37.131474],[-146.239316,37.131474],[-146.239316,37.231076],[-146.139601,37.231076],[-146.139601,37.430279],[-146.039886,37.430279],[-146.039886,37.52988],[-145.940171,37.52988],[-145.940171,37.629482],[-145.840456,37.629482],[-145.840456,37.52988],[-145.740741,37.52988],[-145.740741,37.629482],[-145.641026,37.629482],[-145.641026,37.729084],[-145.541311,37.729084],[-145.541311,37.52988],[-145.441595,37.52988],[-145.441595,37.430279],[-145.34188,37.430279],[-145.34188,37.629482],[-145.242165,37.629482],[-145.242165,37.928287],[-145.541311,37.928287],[-145.541311,38.027888],[-145.441595,38.027888],[-145.441595,38.12749],[-145.34188,38.12749],[-145.34188,38.227092],[-145.14245,38.227092],[-145.14245,38.027888],[-145.042735,38.027888],[-145.042735,37.828685],[-144.344729,37.828685],[-144.344729,37.928287],[-144.444444,37.928287],[-144.444444,38.027888],[-144.145299,38.027888],[-144.145299,37.729084],[-144.045584,37.729084],[-144.045584,37.430279],[-144.145299,37.430279],[-144.145299,37.629482],[-144.245014,37.629482],[-144.245014,37.430279],[-144.344729,37.430279],[-144.344729,37.231076],[-144.245014,37.231076],[-144.245014,37.131474],[-144.045584,37.131474],[-144.045584,37.231076],[-143.945869,37.231076],[-143.945869,37.131474],[-143.547009,37.131474],[-143.547009,37.031873],[-143.447293,37.031873],[-143.447293,36.932271],[-143.247863,36.932271],[-143.247863,36.832669],[-143.048433,36.832669],[-143.048433,36.533865],[-142.849003,36.533865],[-142.849003,36.733068],[-142.749288,36.733068],[-142.649573,36.733068],[-142.649573,36.832669],[-142.450142,36.832669],[-142.350427,36.832669],[-142.350427,36.932271],[-142.250712,36.932271],[-142.250712,37.231076],[-142.150997,37.231076],[-142.150997,37.52988],[-142.250712,37.52988],[-142.250712,37.629482],[-141.951567,37.629482],[-141.851852,37.629482],[-141.851852,37.729084],[-141.353276,37.729084],[-141.253561,37.729084],[-141.253561,37.828685],[-141.153846,37.828685],[-141.153846,37.928287],[-141.054131,37.928287],[-141.054131,38.027888],[-140.954416,38.027888],[-140.954416,38.12749],[-140.754986,38.12749],[-140.754986,38.027888],[-140.655271,38.027888],[-140.655271,38.12749],[-140.555556,38.12749],[-140.555556,38.027888],[-140.45584,38.027888],[-140.45584,37.928287],[-140.356125,37.928287],[-140.356125,37.828685],[-140.156695,37.828685],[-140.156695,37.729084],[-140.05698,37.729084],[-140.05698,37.52988],[-139.757835,37.52988],[-139.757835,37.629482],[-139.558405,37.629482],[-139.458689,37.629482],[-139.458689,37.729084],[-139.558405,37.729084],[-139.558405,37.828685],[-139.65812,37.828685],[-139.65812,37.729084],[-139.757835,37.729084],[-139.757835,38.027888],[-139.65812,38.027888],[-139.558405,38.027888],[-139.558405,38.12749],[-139.458689,38.12749],[-139.458689,38.027888],[-139.358974,38.027888],[-139.358974,38.12749],[-139.159544,38.12749],[-139.159544,38.027888],[-138.860399,38.027888],[-138.860399,37.928287],[-138.561254,37.928287],[-138.561254,37.828685],[-138.361823,37.828685],[-138.361823,37.629482],[-138.262108,37.629482],[-138.262108,37.330677],[-138.361823,37.330677],[-138.361823,37.231076],[-138.262108,37.231076],[-138.262108,37.131474],[-138.062678,37.131474],[-137.962963,37.131474],[-137.962963,37.231076],[-138.162393,37.231076],[-138.162393,37.828685],[-138.262108,37.828685],[-138.262108,38.027888],[-138.361823,38.027888],[-138.361823,38.12749],[-138.461538,38.12749],[-138.461538,38.227092],[-138.561254,38.227092],[-138.561254,38.326693],[-138.461538,38.326693],[-138.361823,38.326693],[-138.361823,38.426295],[-138.262108,38.426295],[-138.262108,38.7251]],[[-146.538462,34.342629],[-146.339031,34.342629],[-146.239316,34.342629],[-146.239316,34.641434],[-146.339031,34.641434],[-146.339031,34.442231],[-146.438746,34.442231],[-146.438746,34.541833],[-146.538462,34.541833],[-146.538462,34.442231],[-146.638177,34.442231],[-146.638177,34.143426],[-146.538462,34.143426],[-146.538462,34.342629]],[[-153.817664,32.848606],[-153.717949,32.848606],[-153.618234,32.848606],[-153.618234,32.948207],[-153.518519,32.948207],[-153.518519,33.047809],[-153.618234,33.047809],[-153.618234,32.948207],[-153.717949,32.948207],[-154.017094,32.948207],[-154.017094,32.848606],[-153.917379,32.848606],[-153.917379,32.749004],[-153.817664,32.749004],[-153.817664,32.848606]],[[-149.430199,31.553785],[-149.430199,31.354582],[-149.330484,31.354582],[-149.330484,31.553785],[-149.430199,31.553785]],[[-149.031339,32.848606],[-149.031339,32.749004],[-148.931624,32.749004],[-148.931624,32.848606],[-149.031339,32.848606]],[[-138.361823,38.326693],[-138.361823,38.227092],[-138.262108,38.227092],[-138.262108,38.326693],[-138.361823,38.326693]],[[-151.823362,34.442231],[-151.823362,34.342629],[-151.923077,34.342629],[-151.923077,34.243028],[-151.823362,34.243028],[-151.823362,34.342629],[-151.723647,34.342629],[-151.723647,34.442231],[-151.823362,34.442231]],[[-150.726496,34.442231],[-150.726496,34.342629],[-150.527066,34.342629],[-150.527066,34.243028],[-150.626781,34.243028],[-150.626781,34.043825],[-150.527066,34.043825],[-150.527066,33.944223],[-150.22792,33.944223],[-150.22792,34.043825],[-150.327635,34.043825],[-150.327635,34.143426],[-150.42735,34.143426],[-150.42735,34.043825],[-150.527066,34.043825],[-150.527066,34.243028],[-150.42735,34.243028],[-150.42735,34.342629],[-150.327635,34.342629],[-150.327635,34.243028],[-150.22792,34.243028],[-150.128205,34.243028],[-150.128205,34.442231],[-150.02849,34.442231],[-150.02849,34.541833],[-150.327635,34.541833],[-150.327635,34.442231],[-150.42735,34.442231],[-150.726496,34.442231]],[[-153.019943,32.948207],[-152.920228,32.948207],[-152.820513,32.948207],[-152.820513,33.047809],[-153.019943,33.047809],[-153.019943,32.948207],[-153.119658,32.948207],[-153.119658,32.749004],[-153.019943,32.749004],[-153.019943,32.948207]],[[-136.766382,30.657371],[-136.666667,30.657371],[-136.566952,30.657371],[-136.566952,30.756972],[-136.866097,30.756972],[-136.866097,30.856574],[-137.065527,30.856574],[-137.065527,30.756972],[-136.866097,30.756972],[-136.866097,30.557769],[-136.766382,30.557769],[-136.766382,30.458167],[-136.666667,30.458167],[-136.666667,30.358566],[-136.566952,30.358566],[-136.566952,30.458167],[-136.666667,30.458167],[-136.666667,30.557769],[-136.766382,30.557769],[-136.766382,30.657371]],[[-154.7151,34.243028],[-154.7151,34.143426],[-154.814815,34.143426],[-154.814815,34.043825],[-154.7151,34.043825],[-154.7151,33.944223],[-154.615385,33.944223],[-154.615385,34.043825],[-154.51567,34.043825],[-154.51567,34.143426],[-154.415954,34.143426],[-154.415954,34.342629],[-154.51567,34.342629],[-154.51567,34.143426],[-154.615385,34.143426],[-154.615385,34.243028],[-154.7151,34.243028]],[[-148.632479,34.641434],[-148.532764,34.641434],[-148.433048,34.641434],[-148.433048,34.840637],[-148.532764,34.840637],[-148.532764,34.741036],[-148.632479,34.741036],[-148.732194,34.741036],[-148.732194,34.541833],[-148.632479,34.541833],[-148.632479,34.641434]],[[-149.729345,34.442231],[-149.62963,34.442231],[-149.62963,34.541833],[-149.729345,34.541833],[-149.729345,34.442231],[-149.82906,34.442231],[-149.82906,34.342629],[-149.729345,34.342629],[-149.729345,34.442231]],[[-146.837607,34.342629],[-146.837607,34.143426],[-146.737892,34.143426],[-146.737892,34.342629],[-146.837607,34.342629]],[[-136.866097,28.964143],[-136.866097,28.864542],[-136.766382,28.864542],[-136.766382,28.76494],[-136.566952,28.76494],[-136.566952,28.864542],[-136.467236,28.864542],[-136.467236,28.964143],[-136.666667,28.964143],[-136.666667,28.864542],[-136.766382,28.864542],[-136.766382,28.964143],[-136.866097,28.964143]],[[-151.723647,34.741036],[-151.723647,34.541833],[-151.524217,34.541833],[-151.524217,34.741036],[-151.723647,34.741036]],[[-142.649573,34.741036],[-142.649573,34.641434],[-142.549858,34.641434],[-142.549858,34.741036],[-142.649573,34.741036]],[[-148.133903,32.848606],[-148.133903,32.749004],[-147.934473,32.749004],[-147.934473,32.848606],[-147.834758,32.848606],[-147.834758,32.948207],[-147.735043,32.948207],[-147.735043,33.047809],[-147.934473,33.047809],[-147.934473,32.948207],[-148.034188,32.948207],[-148.034188,32.848606],[-148.133903,32.848606]],[[-148.732194,31.553785],[-148.732194,31.454183],[-148.632479,31.454183],[-148.632479,31.553785],[-148.732194,31.553785]],[[-152.022792,34.741036],[-151.923077,34.741036],[-151.923077,34.840637],[-152.022792,34.840637],[-152.022792,34.741036],[-152.122507,34.741036],[-152.122507,34.641434],[-152.022792,34.641434],[-152.022792,34.741036]],[[-150.826211,32.749004],[-150.826211,32.649402],[-150.726496,32.649402],[-150.726496,32.749004],[-150.626781,32.749004],[-150.527066,32.749004],[-150.527066,32.848606],[-150.626781,32.848606],[-150.626781,33.14741],[-150.726496,33.14741],[-150.726496,32.749004],[-150.826211,32.749004]],[[-150.826211,33.74502],[-150.826211,33.645418],[-150.925926,33.645418],[-150.925926,33.545817],[-150.826211,33.545817],[-150.826211,33.645418],[-150.726496,33.645418],[-150.726496,33.446215],[-150.826211,33.446215],[-150.826211,33.346614],[-150.626781,33.346614],[-150.626781,33.247012],[-150.527066,33.247012],[-150.527066,33.14741],[-150.42735,33.14741],[-150.42735,33.247012],[-150.327635,33.247012],[-150.327635,33.346614],[-150.22792,33.346614],[-150.22792,33.047809],[-150.02849,33.047809],[-150.02849,33.247012],[-149.928775,33.247012],[-149.928775,33.14741],[-149.82906,33.14741],[-149.729345,33.14741],[-149.729345,33.346614],[-149.82906,33.346614],[-149.82906,33.446215],[-149.729345,33.446215],[-149.729345,33.545817],[-149.928775,33.545817],[-149.928775,33.645418],[-150.22792,33.645418],[-150.22792,33.844622],[-150.726496,33.844622],[-150.726496,33.74502],[-150.826211,33.74502]],[[-151.424501,33.446215],[-151.424501,33.14741],[-151.324786,33.14741],[-151.324786,33.047809],[-151.125356,33.047809],[-151.125356,33.346614],[-151.225071,33.346614],[-151.225071,33.446215],[-151.424501,33.446215]],[[-153.418803,33.047809],[-153.418803,32.948207],[-153.518519,32.948207],[-153.518519,32.848606],[-153.418803,32.848606],[-153.418803,32.948207],[-153.319088,32.948207],[-153.319088,33.047809],[-153.418803,33.047809]],[[-146.339031,34.840637],[-146.339031,34.741036],[-146.239316,34.741036],[-146.139601,34.741036],[-146.139601,35.039841],[-146.239316,35.039841],[-146.239316,34.840637],[-146.339031,34.840637]],[[-155.413105,34.840637],[-155.413105,34.741036],[-155.31339,34.741036],[-155.31339,34.840637],[-155.413105,34.840637]],[[-135.569801,29.163347],[-135.569801,29.063745],[-135.470085,29.063745],[-135.470085,29.163347],[-135.569801,29.163347]],[[-141.153846,30.358566],[-141.153846,30.258964],[-141.054131,30.258964],[-141.054131,30.358566],[-141.153846,30.358566]],[[-140.754986,30.358566],[-140.754986,30.258964],[-140.854701,30.258964],[-140.854701,30.159363],[-140.754986,30.159363],[-140.754986,30.059761],[-140.655271,30.059761],[-140.655271,30.258964],[-140.555556,30.258964],[-140.555556,30.358566],[-140.754986,30.358566]],[[-144.444444,31.85259],[-144.444444,31.752988],[-144.344729,31.752988],[-144.344729,31.85259],[-144.444444,31.85259]],[[-149.62963,32.948207],[-149.62963,32.848606],[-149.529915,32.848606],[-149.529915,32.948207],[-149.62963,32.948207]],[[-153.319088,33.74502],[-153.319088,33.645418],[-153.219373,33.645418],[-153.219373,33.74502],[-153.319088,33.74502]],[[-131.581197,31.553785],[-131.581197,31.454183],[-131.381766,31.454183],[-131.282051,31.454183],[-131.282051,31.653386],[-131.381766,31.653386],[-131.381766,31.553785],[-131.481481,31.553785],[-131.581197,31.553785]],[[-155.811966,34.741036],[-155.811966,34.641434],[-155.712251,34.641434],[-155.712251,34.741036],[-155.811966,34.741036]],[[-135.669516,29.760956],[-135.669516,29.661355],[-135.569801,29.661355],[-135.569801,29.760956],[-135.669516,29.760956]],[[-148.333333,33.14741],[-148.333333,33.047809],[-148.233618,33.047809],[-148.233618,33.14741],[-148.333333,33.14741]],[[-148.831909,31.752988],[-148.831909,31.653386],[-148.632479,31.653386],[-148.632479,31.752988],[-148.831909,31.752988]],[[-154.7151,33.047809],[-154.7151,32.948207],[-154.615385,32.948207],[-154.615385,33.047809],[-154.7151,33.047809]],[[-138.561254,37.729084],[-138.561254,37.629482],[-138.660969,37.629482],[-138.760684,37.629482],[-138.760684,37.430279],[-138.561254,37.430279],[-138.561254,37.330677],[-138.660969,37.330677],[-138.660969,36.932271],[-138.461538,36.932271],[-138.461538,37.031873],[-138.361823,37.031873],[-138.361823,37.231076],[-138.461538,37.231076],[-138.461538,37.729084],[-138.561254,37.729084]],[[-151.823362,34.840637],[-151.823362,34.741036],[-151.923077,34.741036],[-151.923077,34.641434],[-151.823362,34.641434],[-151.823362,34.741036],[-151.723647,34.741036],[-151.723647,34.840637],[-151.823362,34.840637]],[[-151.125356,37.629482],[-151.125356,37.52988],[-151.225071,37.52988],[-151.225071,37.430279],[-151.324786,37.430279],[-151.324786,37.330677],[-151.424501,37.330677],[-151.424501,37.231076],[-151.324786,37.231076],[-151.324786,37.330677],[-151.125356,37.330677],[-151.025641,37.330677],[-151.025641,37.430279],[-151.125356,37.430279],[-151.125356,37.52988],[-151.025641,37.52988],[-151.025641,37.629482],[-151.125356,37.629482]],[[-151.225071,34.840637],[-151.225071,34.741036],[-151.125356,34.741036],[-151.125356,34.840637],[-151.225071,34.840637]],[[-150.925926,37.629482],[-150.925926,37.52988],[-150.826211,37.52988],[-150.826211,37.629482],[-150.925926,37.629482]],[[-148.333333,34.840637],[-148.333333,34.741036],[-148.233618,34.741036],[-148.233618,34.840637],[-148.333333,34.840637]],[[-148.632479,33.545817],[-148.632479,33.446215],[-148.532764,33.446215],[-148.532764,33.346614],[-148.632479,33.346614],[-148.831909,33.346614],[-148.831909,33.247012],[-148.732194,33.247012],[-148.732194,33.14741],[-148.532764,33.14741],[-148.532764,33.047809],[-148.433048,33.047809],[-148.433048,33.14741],[-148.333333,33.14741],[-148.333333,33.247012],[-148.233618,33.247012],[-148.233618,33.346614],[-148.333333,33.346614],[-148.333333,33.545817],[-148.632479,33.545817]],[[-137.364672,30.358566],[-137.364672,30.159363],[-137.264957,30.159363],[-137.264957,30.059761],[-137.065527,30.059761],[-137.065527,30.159363],[-137.264957,30.159363],[-137.264957,30.358566],[-137.364672,30.358566]],[[-136.766382,35.338645],[-136.766382,35.239044],[-136.666667,35.239044],[-136.666667,35.139442],[-136.566952,35.139442],[-136.566952,35.039841],[-136.467236,35.039841],[-136.467236,35.139442],[-136.566952,35.139442],[-136.566952,35.239044],[-136.666667,35.239044],[-136.666667,35.338645],[-136.766382,35.338645]],[[-136.965812,30.358566],[-136.965812,30.059761],[-136.766382,30.059761],[-136.766382,30.258964],[-136.866097,30.258964],[-136.866097,30.358566],[-136.965812,30.358566]],[[-130.48433,32.350598],[-130.48433,32.250996],[-130.384615,32.250996],[-130.384615,32.350598],[-130.48433,32.350598]],[[-137.962963,30.657371],[-137.962963,30.557769],[-137.863248,30.557769],[-137.863248,30.657371],[-137.962963,30.657371]],[[-148.133903,33.247012],[-148.133903,33.14741],[-147.934473,33.14741],[-147.934473,33.247012],[-148.133903,33.247012]],[[-139.757835,30.756972],[-139.757835,30.657371],[-139.65812,30.657371],[-139.65812,30.756972],[-139.757835,30.756972]],[[-133.475783,34.840637],[-133.475783,34.741036],[-133.376068,34.741036],[-133.376068,34.840637],[-133.475783,34.840637]],[[-145.242165,37.629482],[-145.242165,37.52988],[-145.14245,37.52988],[-145.14245,37.629482],[-145.242165,37.629482]],[[-133.974359,35.438247],[-133.974359,35.338645],[-133.874644,35.338645],[-133.874644,35.438247],[-133.974359,35.438247]],[[-149.62963,33.247012],[-149.62963,33.14741],[-149.729345,33.14741],[-149.729345,33.047809],[-149.430199,33.047809],[-149.330484,33.047809],[-149.330484,33.14741],[-149.529915,33.14741],[-149.529915,33.247012],[-149.62963,33.247012]],[[-151.125356,33.74502],[-151.125356,33.545817],[-151.025641,33.545817],[-151.025641,33.74502],[-151.125356,33.74502]],[[-153.219373,34.641434],[-153.219373,34.442231],[-153.119658,34.442231],[-153.119658,34.641434],[-153.219373,34.641434]],[[-151.623932,33.74502],[-151.623932,33.645418],[-151.524217,33.645418],[-151.524217,33.74502],[-151.623932,33.74502]],[[-153.418803,34.641434],[-153.418803,34.541833],[-153.319088,34.541833],[-153.319088,34.641434],[-153.418803,34.641434]],[[-153.817664,35.438247],[-153.817664,35.338645],[-153.717949,35.338645],[-153.717949,35.438247],[-153.817664,35.438247]],[[-154.7151,35.039841],[-154.7151,34.940239],[-154.615385,34.940239],[-154.615385,35.039841],[-154.7151,35.039841]],[[-156.011396,35.438247],[-156.011396,35.338645],[-155.911681,35.338645],[-155.911681,35.438247],[-156.011396,35.438247]],[[-142.749288,30.956175],[-142.749288,30.856574],[-142.849003,30.856574],[-142.849003,30.756972],[-142.649573,30.756972],[-142.549858,30.756972],[-142.549858,30.956175],[-142.749288,30.956175]],[[-154.116809,34.243028],[-154.116809,34.143426],[-153.917379,34.143426],[-153.917379,34.243028],[-154.116809,34.243028]],[[-136.965812,35.537849],[-136.965812,35.438247],[-136.766382,35.438247],[-136.766382,35.537849],[-136.965812,35.537849]],[[-148.632479,32.350598],[-148.632479,32.250996],[-148.532764,32.250996],[-148.532764,32.350598],[-148.632479,32.350598]],[[-144.843305,30.756972],[-144.843305,30.657371],[-144.643875,30.657371],[-144.643875,30.756972],[-144.843305,30.756972]],[[-153.817664,35.239044],[-153.817664,35.039841],[-153.717949,35.039841],[-153.717949,35.239044],[-153.817664,35.239044]],[[-138.262108,30.358566],[-138.262108,30.258964],[-138.162393,30.258964],[-138.162393,30.358566],[-138.262108,30.358566]],[[-137.165242,30.458167],[-137.165242,30.258964],[-137.065527,30.258964],[-137.065527,30.458167],[-137.165242,30.458167]],[[-155.413105,34.641434],[-155.413105,34.541833],[-155.31339,34.541833],[-155.31339,34.442231],[-155.213675,34.442231],[-155.213675,34.342629],[-155.11396,34.342629],[-155.11396,34.541833],[-155.213675,34.541833],[-155.213675,34.641434],[-155.413105,34.641434]],[[-152.920228,35.537849],[-152.920228,35.438247],[-152.820513,35.438247],[-152.820513,35.537849],[-152.920228,35.537849]],[[-150.527066,32.749004],[-150.527066,32.649402],[-150.42735,32.649402],[-150.42735,32.749004],[-150.527066,32.749004]],[[-149.230769,33.944223],[-149.230769,33.844622],[-149.131054,33.844622],[-149.131054,33.944223],[-149.230769,33.944223]],[[-134.173789,35.239044],[-134.173789,35.139442],[-134.074074,35.139442],[-134.074074,35.239044],[-134.173789,35.239044]],[[-149.330484,32.549801],[-149.330484,32.450199],[-149.230769,32.450199],[-149.230769,32.549801],[-149.330484,32.549801]],[[-147.136752,32.848606],[-147.037037,32.848606],[-146.937322,32.848606],[-146.937322,32.948207],[-147.136752,32.948207],[-147.136752,33.047809],[-147.236467,33.047809],[-147.236467,32.948207],[-147.136752,32.948207],[-147.136752,32.848606],[-147.236467,32.848606],[-147.236467,32.749004],[-147.136752,32.749004],[-147.136752,32.848606]],[[-150.42735,37.330677],[-150.42735,37.231076],[-150.327635,37.231076],[-150.327635,37.330677],[-150.42735,37.330677]],[[-150.925926,33.944223],[-150.925926,33.844622],[-150.826211,33.844622],[-150.826211,33.944223],[-150.726496,33.944223],[-150.726496,34.143426],[-150.826211,34.143426],[-150.826211,33.944223],[-150.925926,33.944223]],[[-149.82906,37.330677],[-149.82906,37.231076],[-149.928775,37.231076],[-149.928775,37.131474],[-150.02849,37.131474],[-150.02849,37.031873],[-150.128205,37.031873],[-150.128205,36.932271],[-150.02849,36.932271],[-149.928775,36.932271],[-149.928775,37.131474],[-149.82906,37.131474],[-149.729345,37.131474],[-149.729345,37.330677],[-149.82906,37.330677]],[[-153.518519,33.74502],[-153.518519,33.645418],[-153.418803,33.645418],[-153.418803,33.74502],[-153.319088,33.74502],[-153.319088,33.844622],[-153.418803,33.844622],[-153.418803,33.944223],[-153.518519,33.944223],[-153.518519,34.043825],[-153.618234,34.043825],[-153.618234,33.944223],[-153.518519,33.944223],[-153.518519,33.844622],[-153.418803,33.844622],[-153.418803,33.74502],[-153.518519,33.74502]],[[-155.811966,35.537849],[-155.811966,35.338645],[-155.712251,35.338645],[-155.712251,35.537849],[-155.811966,35.537849]],[[-151.723647,33.346614],[-151.723647,33.247012],[-151.623932,33.247012],[-151.623932,33.346614],[-151.723647,33.346614]],[[-152.820513,33.346614],[-152.820513,33.247012],[-152.920228,33.247012],[-152.920228,33.14741],[-152.820513,33.14741],[-152.720798,33.14741],[-152.720798,33.346614],[-152.820513,33.346614]],[[-154.316239,34.541833],[-154.316239,34.442231],[-154.216524,34.442231],[-154.216524,34.541833],[-154.316239,34.541833]],[[-136.068376,30.458167],[-136.068376,30.358566],[-135.868946,30.358566],[-135.868946,30.458167],[-136.068376,30.458167]],[[-150.22792,37.231076],[-150.22792,37.131474],[-150.128205,37.131474],[-150.128205,37.231076],[-150.22792,37.231076]],[[-151.225071,34.043825],[-151.225071,33.844622],[-151.025641,33.844622],[-151.025641,34.043825],[-151.225071,34.043825]],[[-149.529915,32.350598],[-149.529915,32.250996],[-149.330484,32.250996],[-149.330484,32.350598],[-149.529915,32.350598]],[[-148.133903,34.840637],[-148.133903,34.641434],[-148.034188,34.641434],[-148.034188,34.541833],[-147.934473,34.541833],[-147.934473,34.342629],[-147.834758,34.342629],[-147.834758,34.541833],[-147.934473,34.541833],[-147.934473,34.641434],[-148.034188,34.641434],[-148.034188,34.840637],[-148.133903,34.840637]],[[-137.663818,30.258964],[-137.663818,29.860558],[-137.564103,29.860558],[-137.564103,30.258964],[-137.663818,30.258964]],[[-132.977208,33.645418],[-132.977208,33.545817],[-132.877493,33.545817],[-132.877493,33.645418],[-132.977208,33.645418]],[[-132.478632,32.549801],[-132.478632,32.350598],[-132.378917,32.350598],[-132.378917,32.450199],[-132.179487,32.450199],[-132.179487,32.350598],[-132.079772,32.350598],[-131.980057,32.350598],[-131.980057,32.549801],[-132.478632,32.549801]],[[-150.527066,32.948207],[-150.527066,32.848606],[-150.42735,32.848606],[-150.42735,32.948207],[-150.527066,32.948207]],[[-151.324786,33.645418],[-151.324786,33.545817],[-151.225071,33.545817],[-151.225071,33.645418],[-151.324786,33.645418]],[[-151.324786,34.243028],[-151.324786,34.143426],[-151.225071,34.143426],[-151.225071,34.243028],[-151.324786,34.243028]],[[-150.527066,37.131474],[-150.527066,37.031873],[-150.626781,37.031873],[-150.626781,36.932271],[-150.527066,36.932271],[-150.527066,37.031873],[-150.42735,37.031873],[-150.42735,37.131474],[-150.527066,37.131474]],[[-137.065527,35.737052],[-137.065527,35.63745],[-136.965812,35.63745],[-136.965812,35.737052],[-137.065527,35.737052]],[[-144.045584,32.350598],[-144.045584,32.250996],[-143.945869,32.250996],[-143.945869,32.350598],[-144.045584,32.350598]],[[-153.418803,33.545817],[-153.418803,33.446215],[-153.518519,33.446215],[-153.518519,33.346614],[-153.418803,33.346614],[-153.418803,33.446215],[-153.319088,33.446215],[-153.319088,33.545817],[-153.418803,33.545817]],[[-147.336182,34.840637],[-147.336182,34.741036],[-147.236467,34.741036],[-147.236467,34.641434],[-147.136752,34.641434],[-147.136752,34.741036],[-147.236467,34.741036],[-147.236467,34.840637],[-147.336182,34.840637]],[[-141.851852,30.258964],[-141.851852,30.159363],[-141.752137,30.159363],[-141.752137,30.258964],[-141.851852,30.258964]],[[-150.02849,32.549801],[-150.02849,32.450199],[-149.928775,32.450199],[-149.928775,32.350598],[-149.82906,32.350598],[-149.82906,32.549801],[-150.02849,32.549801]],[[-135.071225,29.860558],[-135.071225,29.760956],[-134.97151,29.760956],[-134.97151,29.661355],[-134.871795,29.661355],[-134.871795,29.760956],[-134.97151,29.760956],[-134.97151,29.860558],[-135.071225,29.860558]],[[-137.962963,37.131474],[-137.962963,36.932271],[-137.863248,36.932271],[-137.863248,37.131474],[-137.962963,37.131474]],[[-153.418803,34.442231],[-153.418803,34.342629],[-153.319088,34.342629],[-153.319088,34.243028],[-153.219373,34.243028],[-153.219373,34.342629],[-153.319088,34.342629],[-153.319088,34.442231],[-153.418803,34.442231]],[[-151.324786,37.031873],[-151.324786,36.633466],[-151.225071,36.633466],[-151.225071,36.434263],[-151.025641,36.434263],[-151.025641,36.633466],[-151.125356,36.633466],[-151.125356,36.733068],[-151.225071,36.733068],[-151.225071,37.031873],[-151.324786,37.031873]],[[-148.831909,32.450199],[-148.831909,32.350598],[-148.732194,32.350598],[-148.732194,32.450199],[-148.831909,32.450199]],[[-151.025641,37.031873],[-151.025641,36.633466],[-150.925926,36.633466],[-150.925926,36.533865],[-150.826211,36.533865],[-150.826211,36.832669],[-150.925926,36.832669],[-150.925926,37.031873],[-151.025641,37.031873]],[[-149.729345,32.549801],[-149.729345,32.450199],[-149.62963,32.450199],[-149.62963,32.549801],[-149.729345,32.549801]],[[-147.336182,32.549801],[-147.336182,32.450199],[-147.136752,32.450199],[-147.037037,32.450199],[-147.037037,32.549801],[-147.136752,32.549801],[-147.136752,32.649402],[-147.236467,32.649402],[-147.236467,32.549801],[-147.336182,32.549801]],[[-131.282051,31.454183],[-131.282051,31.354582],[-131.182336,31.354582],[-131.182336,31.454183],[-131.282051,31.454183]],[[-137.065527,35.936255],[-137.065527,35.836653],[-136.965812,35.836653],[-136.965812,35.936255],[-137.065527,35.936255]],[[-149.529915,37.031873],[-149.529915,36.932271],[-149.430199,36.932271],[-149.430199,37.031873],[-149.529915,37.031873]],[[-149.928775,34.641434],[-149.928775,34.541833],[-149.82906,34.541833],[-149.82906,34.641434],[-149.928775,34.641434]],[[-148.931624,35.836653],[-148.931624,35.737052],[-148.831909,35.737052],[-148.831909,35.836653],[-148.931624,35.836653]],[[-148.333333,33.844622],[-148.333333,33.645418],[-148.233618,33.645418],[-148.233618,33.844622],[-148.333333,33.844622]],[[-146.039886,32.649402],[-146.039886,32.549801],[-145.940171,32.549801],[-145.940171,32.649402],[-146.039886,32.649402]],[[-149.430199,34.143426],[-149.430199,34.043825],[-149.230769,34.043825],[-149.230769,34.143426],[-149.430199,34.143426]],[[-154.017094,34.043825],[-154.017094,33.944223],[-153.917379,33.944223],[-153.917379,33.74502],[-153.817664,33.74502],[-153.817664,33.645418],[-153.717949,33.645418],[-153.717949,33.74502],[-153.817664,33.74502],[-153.817664,33.944223],[-153.917379,33.944223],[-153.917379,34.043825],[-154.017094,34.043825]],[[-149.529915,34.641434],[-149.529915,34.541833],[-149.430199,34.541833],[-149.430199,34.442231],[-149.330484,34.442231],[-149.330484,34.541833],[-149.430199,34.541833],[-149.430199,34.641434],[-149.529915,34.641434]],[[-138.361823,36.932271],[-138.361823,36.832669],[-138.262108,36.832669],[-138.262108,36.932271],[-138.361823,36.932271]],[[-149.928775,34.143426],[-149.928775,34.043825],[-149.82906,34.043825],[-149.82906,33.944223],[-149.729345,33.944223],[-149.729345,34.043825],[-149.62963,34.043825],[-149.62963,34.143426],[-149.928775,34.143426]],[[-136.367521,34.741036],[-136.367521,34.641434],[-136.267806,34.641434],[-136.267806,34.741036],[-136.367521,34.741036]],[[-131.481481,31.354582],[-131.481481,31.25498],[-131.381766,31.25498],[-131.381766,31.354582],[-131.481481,31.354582]],[[-149.031339,32.151394],[-149.031339,31.952191],[-148.831909,31.952191],[-148.831909,32.051793],[-148.931624,32.051793],[-148.931624,32.151394],[-149.031339,32.151394]],[[-149.230769,32.350598],[-149.230769,32.250996],[-149.131054,32.250996],[-149.131054,32.350598],[-149.230769,32.350598]],[[-150.327635,36.832669],[-150.327635,36.633466],[-150.22792,36.633466],[-150.22792,36.533865],[-150.327635,36.533865],[-150.327635,36.434263],[-150.02849,36.434263],[-150.02849,36.334661],[-149.928775,36.334661],[-149.928775,36.533865],[-149.82906,36.533865],[-149.729345,36.533865],[-149.729345,36.733068],[-150.128205,36.733068],[-150.128205,36.832669],[-150.327635,36.832669]],[[-146.737892,33.346614],[-146.737892,33.247012],[-146.638177,33.247012],[-146.638177,33.346614],[-146.737892,33.346614]],[[-149.729345,36.832669],[-149.729345,36.733068],[-149.62963,36.733068],[-149.62963,36.832669],[-149.729345,36.832669]],[[-131.182336,31.653386],[-131.182336,31.553785],[-131.082621,31.553785],[-131.082621,31.653386],[-131.182336,31.653386]],[[-148.333333,32.749004],[-148.333333,32.649402],[-148.233618,32.649402],[-148.233618,32.749004],[-148.333333,32.749004]],[[-149.529915,32.749004],[-149.529915,32.549801],[-149.430199,32.549801],[-149.430199,32.749004],[-149.529915,32.749004]],[[-154.216524,33.545817],[-154.216524,33.446215],[-154.017094,33.446215],[-154.017094,33.545817],[-154.216524,33.545817]],[[-150.128205,32.948207],[-150.128205,32.848606],[-150.02849,32.848606],[-150.02849,32.749004],[-149.928775,32.749004],[-149.928775,32.848606],[-150.02849,32.848606],[-150.02849,32.948207],[-150.128205,32.948207]],[[-135.17094,36.23506],[-135.17094,36.135458],[-135.071225,36.135458],[-135.071225,36.23506],[-135.17094,36.23506]],[[-136.566952,34.840637],[-136.566952,34.741036],[-136.467236,34.741036],[-136.467236,34.840637],[-136.566952,34.840637]],[[-151.125356,34.243028],[-151.125356,34.143426],[-150.925926,34.143426],[-150.925926,34.243028],[-151.125356,34.243028]],[[-131.980057,31.25498],[-131.980057,31.155378],[-131.880342,31.155378],[-131.880342,31.25498],[-131.980057,31.25498]],[[-147.136752,34.143426],[-147.136752,34.043825],[-147.037037,34.043825],[-147.037037,34.143426],[-147.136752,34.143426]],[[-131.481481,33.545817],[-131.481481,33.446215],[-131.381766,33.446215],[-131.381766,33.346614],[-131.481481,33.346614],[-131.481481,33.247012],[-131.381766,33.247012],[-131.381766,33.14741],[-131.282051,33.14741],[-131.282051,33.446215],[-131.381766,33.446215],[-131.381766,33.545817],[-131.481481,33.545817]],[[-151.125356,36.334661],[-151.125356,36.23506],[-151.025641,36.23506],[-151.025641,36.334661],[-151.125356,36.334661]],[[-134.57265,35.836653],[-134.57265,35.737052],[-134.472934,35.737052],[-134.472934,35.836653],[-134.57265,35.836653]],[[-153.219373,34.143426],[-153.219373,34.043825],[-153.119658,34.043825],[-153.119658,33.844622],[-153.019943,33.844622],[-153.019943,34.043825],[-153.119658,34.043825],[-153.119658,34.143426],[-153.219373,34.143426]],[[-151.025641,36.135458],[-151.025641,36.035857],[-150.925926,36.035857],[-150.925926,36.135458],[-151.025641,36.135458]],[[-137.863248,30.059761],[-137.863248,29.960159],[-137.763533,29.960159],[-137.763533,30.059761],[-137.863248,30.059761]],[[-141.353276,30.059761],[-141.353276,29.960159],[-141.253561,29.960159],[-141.253561,30.059761],[-141.353276,30.059761]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-137.962963,28.266932],[-137.863248,28.266932],[-137.863248,28.167331],[-137.962963,28.167331],[-137.962963,28.266932]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-137.264957,28.266932],[-137.165242,28.266932],[-137.165242,28.167331],[-137.264957,28.167331],[-137.264957,28.266932]]]]}},{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[[[[-158.005698,21.494024],[-157.905983,21.494024],[-157.905983,21.394422],[-158.005698,21.394422],[-158.005698,21.494024]]]]}}],Sc={features:Mc};var Ec=Ke("<path></path>"),Tc=Ke("<path></path>"),bc=Ke("<!><!>",1),Ac=dn('<div class="globe-container"><!></div>');function mu(i,e){Bt(e,!0);const t=c=>{var f=Xe(),u=ke(f);{var h=m=>{var y=bc(),_=ke(y);yt(_,17,()=>Sc.features,xt,(d,x)=>{var v=Ec();D(v,"fill-opacity",.3),D(v,"stroke-width",1),Ve(E=>{D(v,"d",E),D(v,"fill",xe.cat2),D(v,"stroke",xe.cat2)},[()=>p(o)(p(x))]),ie(d,v)});var g=me(_);yt(g,17,()=>Xr.features,xt,(d,x)=>{var v=Tc();D(v,"fill-opacity",1),D(v,"stroke-width",1),D(v,"opacity",.6),Ve(E=>{D(v,"d",E),D(v,"fill",p(x).properties.TEMP=="cold"?"#0077be":"#D62828"),D(v,"stroke",p(x).properties.TEMP=="cold"?"#0077be":"#D62828")},[()=>p(o)(p(x))]),ie(d,v)}),ie(m,y)};lt(u,m=>{p(a)&&m(h)})}ie(c,f)},n=c=>{var f=Xe(),u=ke(f);{var h=m=>{var y=Ac(),_=Ge(y);Ot(_,{longitude:-144,latitude:20,get w(){return e.w},get h(){return e.w},get textureImage(){return e.texture},get dataLayer(){return t},countriesFill:"none",countriesStroke:"#ffffff",countriesStrokeWidth:.5,get projection(){return p(a)},set projection(g){Ct(a,g,!0)}}),Oe(y),ie(m,y)};lt(u,m=>{e.w>0&&m(h)})}ie(c,f)};let r=Vt(e,"h",15);En(()=>{r(e.w*2/3)});let a=Dt(void 0),o=fe(()=>Zi().projection(p(a)));var s=Xe(),l=ke(s);Ut(l,()=>e.container??Lt,()=>({content:n})),ie(i,s),zt()}var wc=Ke('<rect></rect><rect></rect><text class="small end"> </text><text class="small"> </text>',1),Rc=Ke("<g><!><!></g>");function gu(i,e){Bt(e,!0);const t=()=>un(x1,"$activeTheme",n),[n,r]=cn(),a=m=>{var y=Xe(),_=ke(y);{var g=x=>{var v=Rc(),E=Ge(v);yt(E,17,()=>e.data,xt,(A,R)=>{var L=wc(),M=ke(L),T=me(M),w=me(T);let B;var k=Ge(w,!0);Oe(w);var N=me(w);let Y;var V=Ge(N,!0);Oe(N),Ve((j,I,Z,$,oe,ce,be,Ae,H,ee,ne,he)=>{D(M,"x",j),D(M,"y",I),D(M,"width",Z),D(M,"height",$),D(M,"fill",xe.grey100),D(T,"x",oe),D(T,"y",ce),D(T,"width",be),D(T,"height",Ae),D(T,"fill",xe[t()]),D(w,"x",H),D(w,"y",ee),B=Qe(w,"",B,{stroke:xe[t()],fill:"#ffffff"}),bt(k,s[p(R).treatment]),D(N,"x",ne),D(N,"y",he),Y=Qe(N,"",Y,{stroke:xe[t()],fill:"#ffffff"}),bt(V,p(R).mortality)},[()=>p(l)(0),()=>p(f)(p(R).treatment),()=>p(l)(100),()=>p(f).bandwidth(),()=>p(l)(0),()=>p(f)(p(R).treatment),()=>p(l)(p(R).mortality),()=>p(f).bandwidth(),()=>p(l)(0)-4,()=>p(f)(p(R).treatment)+p(f).bandwidth()/2+5,()=>p(l)(p(R).mortality)+4,()=>p(f)(p(R).treatment)+p(f).bandwidth()/2+5]),ie(A,L)});var P=me(E);{let A=fe(()=>e.h-o.top-o.bottom),R=fe(()=>e.w-o.left-o.right);yn(P,{gridType:"xGrid",get innerHeight(){return p(A)},get innerWidth(){return p(R)},get scale(){return p(l)},get ticks(){return c},get axisTitle(){return e.x_axis_title},get axisUnits(){return e.x_axis_units},flipAxis:!0})}Oe(v),Ve(()=>D(v,"transform",`translate(${o.left},${o.top})`)),ie(x,v)},d=fe(()=>p(l)(50)>0);lt(_,x=>{p(d)&&x(g)})}ie(m,y)};let o={top:36,right:12,bottom:12,left:250},s={no_particles:e.no_particles,microplastics_only:e.microplastics_only,virus_only:e.virus_only,spartina:e.spartina,polystyrene:e.polystyrene,nylon:e.nylon},l=fe(()=>xn().domain([0,100]).range([0,e.w-o.right-o.left])),c=[0,25,50,75,100],f=fe(()=>$o().domain(e.data.map(m=>m.treatment)).range([0,e.h-o.top-o.bottom]).padding(.5));var u=Xe(),h=ke(u);Ut(h,()=>e.container??Lt,()=>({svg:a})),ie(i,u),zt(),r()}export{pu as algal_blooms,du as chlorophyll_a_trend,fu as chlorophyll_deviation,gu as fish_mortality,Ot as globe,uu as nitrogen_increase,lu as nitrogen_phosphorus,mu as north_pacific_garbage_patch,cu as phosphorus_increase,hu as phytoplankton_blooms,ou as plastic_concentration,au as plastic_discharge,ru as plastic_leakage,nu as plastic_production,su as plastic_seafood,iu as plastic_waste};
