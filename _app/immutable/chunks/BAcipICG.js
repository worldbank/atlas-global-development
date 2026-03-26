import{b as I,a as P}from"./G0QQ3uc4.js";import{p as S,W as M,K as H,X as T,u as _,g as B,B as W,D as j,y as A,f as O,J as U,L as z}from"./D2knJlSm.js";import{p as l,b as D}from"./DSvgFljI.js";import{m as x}from"./CHDgoeO5.js";import{$ as E}from"./Cm8aKneP.js";import"./DQO0BvfI.js";import{c as F}from"./hGiqKoSM.js";import{m as J}from"./D0s6rMo9.js";function X(c,t={}){if(c.bbox!=null&&t.recompute!==!0)return c.bbox;const a=[1/0,1/0,-1/0,-1/0];return F(c,r=>{a[0]>r[0]&&(a[0]=r[0]),a[1]>r[1]&&(a[1]=r[1]),a[2]<r[0]&&(a[2]=r[0]),a[3]<r[1]&&(a[3]=r[1])}),a}const R=`
<svg version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:ev="http://www.w3.org/2001/xml-events" width="64" height="64">
    <defs>
        <pattern
            id="diagonalHatch"
            width="100px"
            height="5px"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            patternTransform="rotate(-45)"
        >
            <line
                x1="0"
                x2="100"
                y1="50"
                y2="50"
                stroke-width="10"
                stroke="#8a969f"
            />
        </pattern>

        <pattern id="tightHatch" patternUnits="userSpaceOnUse" width="4" height="4">
            <path
                class="visible"
                d="M-1,1 l2,-2
M0,4 l4,-4
M3,5 l2,-2"
                style="stroke: #8a969f;"
            />
        </pattern>

        <pattern
            id="circlePattern"
            x="2"
            y="2"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
        >
            <circle
                cx="2"
                cy="2"
                r="2"
                style="stroke: none;"
                fill="#8a969f"
            />
        </pattern>

        <marker
            id="arrowhead_pos"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
        >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000000" />
        </marker>

        <marker
            id="arrowhead_neg"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
        >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000000" />
        </marker>

        <marker
            id="arrowhead-large"
            markerWidth="5"
            markerHeight="5"
            refX="2.5"
            refY="2.5"
            orient="auto"
        >
            <polygon points="0 0, 5 2.5, 0 5" stroke-width="0" />
        </marker>
    </defs>
    <rect x="0" y="0" width="64" height="64" fill="url(#tightHatch)" />
</svg>`;async function Z(c,t=50,a=1){const r=document.createElement("div");r.innerHTML=c;const h=r.querySelector("svg");return h.setAttribute("width",String(t*a)),h.setAttribute("height",String(t*a)),new Promise((w,b)=>{const f=new Image,e=document.createElement("canvas");e.width=e.height=t*a,f.onerror=b,f.onload=()=>{const p=e.getContext("2d");for(let d=0;d<a;d++)for(let u=0;u<a;u++)p.drawImage(f,d*t,u*t,t,t);w(p.getImageData(0,0,64,64))};const m=new XMLSerializer().serializeToString(h),i=`data:image/svg+xml;base64,${window.btoa(m)}`;f.src=i})}var G=z('<main class="svelte-1x9c7lv"><div class="map svelte-1x9c7lv"></div></main>');function te(c,t){S(t,!0);const a=()=>P(E,"$_",r),[r,h]=I();let w=l(t,"lng",15,0),b=l(t,"lat",15,20),f=l(t,"zoom",15,2),e=l(t,"map",15),m=l(t,"initialState",23,()=>({lng:20,lat:10,zoom:2})),g=l(t,"tooltipColumn",3,"pop_all"),i=l(t,"focus",3,"wld"),p=l(t,"bboxes",19,()=>new window.Map),d,u=U(!1);t.fullWidth&&(m().zoom=1.5);const y=n=>J(".1~s")(n).replace("G","B"),k=n=>{const o=a()(`country.${n.feature.properties.code.toLowerCase()}`),s=g().includes("sha")?`${n.feature.properties[g()].toFixed(0)}%`:y(n.feature.properties[g()]);return`<strong>${o}</strong>: ${s}`};M(async()=>{e(new x.Map({style:"mapbox://styles/mapbox/standard",container:d,accessToken:"pk.eyJ1IjoibWxhbWJyZWNodHMiLCJhIjoiY21sZjR2cGEyMDB0NTNocGQ3YXJ2eXI2diJ9.FVnjHFFjMzZAhDTJAI6HgA",center:[m().lng,m().lat],zoom:m().zoom,bounds:[[-180,-90],[180,90]],projection:t.projection,renderWorldCopies:!1,config:{basemap:{showRoadsAndTransit:!1,showPedestrianRoads:!1,showPlaceLabels:!1,showPointOfInterestLabels:!1,fuelingStationModePointOfInterestLabels:"none",showRoadLabels:!1,showTransitLabels:!1,showAdminBoundaries:!1,show3dObjects:!1,showLandmarkIconLabels:!1,colorTrunks:"rgba(255,255,255,0)",colorMotorways:"rgba(255,255,255,0)",colorRoads:"rgba(255,255,255,0)",colorLand:"rgba(255,255,255,0)",theme:"monochrome"}}}));const n=new x.Popup({closeButton:!1,closeOnClick:!1,offset:[0,-20]});e().addControl(new x.NavigationControl({showCompass:!1})),e().dragPan.enable(),e().doubleClickZoom.enable(),e().scrollZoom.disable(),e().addImage("tighthatch",await Z(R,64,1)),e().on("style.load",async()=>{t.sources.forEach(([o,s])=>{e().addSource(o,s)}),t.styles.forEach(o=>e().addLayer({...o,slot:"bottom",layout:{visibility:o.id.includes("vuln")?"visible":"none"}})),e().addInteraction("choropleth-mousemove",{type:"mousemove",target:{layerId:"exposure"},handler:o=>{if(o.feature.properties.disputed){n.remove();return}n.setLngLat(o.lngLat).setHTML(k(o)).addTo(e())}}),e().on("mouseleave","exposure",()=>{n.remove()}),H(u,!0)}),e().on("move",()=>{L()})}),T(()=>{e().remove()}),_(()=>{if(B(u)&&(e().setProjection(t.projection),e().getStyle().layers.forEach(n=>{t.layers.includes(n.id)?e().setLayoutProperty(n.id,"visibility","visible"):e().setLayoutProperty(n.id,"visibility","none")}),t.exposureFilter!==void 0&&e().setFilter("exposure",t.exposureFilter),t.exposurePaint!==void 0&&e().setPaintProperty("exposure","fill-color",t.exposurePaint["fill-color"]),i()))if(e().setConfigProperty("basemap","showPlaceLabels",i()!=="wld"),i().startsWith("bbox")&&p().has(i()))e().fitBounds(p().get(i()));else if(i()==="wld")e().fitBounds([[-180,-90],[180,90]],{zoom:1.5});else{const[,n]=t.sources.find(([o])=>o==="exposed_countries");if(n){const o=n.data.features.find(s=>s.properties.ISO_A3===i().toUpperCase());if(o){const s=X(o);e().fitBounds([[s[0],s[1]],[s[2],s[3]]],{padding:100})}}}});function L(){f(e().getZoom()),w(e().getCenter().lng),b(e().getCenter().lat)}var v=G(),C=W(v);D(C,n=>d=n,()=>d),j(v),A(c,v),O(),h()}export{te as S};
