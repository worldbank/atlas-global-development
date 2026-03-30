import{b as P,a as S}from"./G0QQ3uc4.js";import{p as C,W as M,X as I,u as H,g as T,B as j,D as B,y as _,f as W,J as A,L as O,K as D}from"./D2knJlSm.js";import{p as r,b as U}from"./DSvgFljI.js";import{m as y}from"./CHDgoeO5.js";import{$ as z}from"./BKCAstku.js";import"./DQO0BvfI.js";import{m as E}from"./DLkQ1E5Z.js";const J=`
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
</svg>`;async function X(g,t=50,o=1){const h=document.createElement("div");h.innerHTML=g;const m=h.querySelector("svg");return m.setAttribute("width",String(t*o)),m.setAttribute("height",String(t*o)),new Promise((p,w)=>{const s=new Image,e=document.createElement("canvas");e.width=e.height=t*o,s.onerror=w,s.onload=()=>{const d=e.getContext("2d");for(let c=0;c<o;c++)for(let f=0;f<o;f++)d.drawImage(s,c*t,f*t,t,t);p(d.getImageData(0,0,64,64))};const i=new XMLSerializer().serializeToString(m),l=`data:image/svg+xml;base64,${window.btoa(i)}`;s.src=l})}var Z=O('<main class="svelte-1x9c7lv"><div class="map svelte-1x9c7lv"></div></main>');function K(g,t){C(t,!0);const o=()=>S(z,"$_",h),[h,m]=P();let p=r(t,"lng",15,0),w=r(t,"lat",15,20),s=r(t,"zoom",15,2),e=r(t,"map",15),i=r(t,"initialState",23,()=>({lng:20,lat:10,zoom:2})),u=r(t,"tooltipColumn",3,"pop_all"),l=r(t,"focus",3,"wld"),d,c=A(!1);t.fullWidth&&(i().zoom=1.5);const f=n=>E(".1~s")(n).replace("G","B"),x=n=>{const a=o()(`country.${n.feature.properties.ISO_A3.toLowerCase()}`),v=u().includes("sha")?`${n.feature.properties[u()].toFixed(0)}%`:f(n.feature.properties[u()]);return`<strong>${a}</strong>: ${v}`};M(async()=>{e(new y.Map({style:"mapbox://styles/mapbox/standard",container:d,accessToken:"pk.eyJ1IjoibWxhbWJyZWNodHMiLCJhIjoiY21sZjR2cGEyMDB0NTNocGQ3YXJ2eXI2diJ9.FVnjHFFjMzZAhDTJAI6HgA",center:[i().lng,i().lat],zoom:i().zoom,bounds:[[-180,-90],[180,90]],projection:t.projection,renderWorldCopies:!1,config:{basemap:{showRoadsAndTransit:!1,showPedestrianRoads:!1,showPlaceLabels:!1,showPointOfInterestLabels:!1,fuelingStationModePointOfInterestLabels:"none",showRoadLabels:!1,showTransitLabels:!1,showAdminBoundaries:!1,show3dObjects:!1,showLandmarkIconLabels:!1,colorTrunks:"rgba(255,255,255,0)",colorMotorways:"rgba(255,255,255,0)",colorRoads:"rgba(255,255,255,0)",colorLand:"rgba(255,255,255,0)",theme:"monochrome"}}}));const n=new y.Popup({closeButton:!1,closeOnClick:!1,offset:[0,-20]});e().addControl(new y.NavigationControl({showCompass:!1})),e().dragPan.enable(),e().doubleClickZoom.enable(),e().scrollZoom.disable(),e().addImage("tighthatch",await X(J,64,1)),e().on("style.load",async()=>{t.sources.forEach(([a,v])=>{e().addSource(a,v)}),t.styles.forEach(a=>e().addLayer({...a,slot:"bottom",layout:{visibility:a.id.includes("vuln")?"visible":"none"}})),e().addInteraction("choropleth-mousemove",{type:"mousemove",target:{layerId:"exposure"},handler:a=>{if(a.feature.properties.disputed){n.remove();return}n.setLngLat(a.lngLat).setHTML(x(a)).addTo(e())}}),e().on("mouseleave","exposure",()=>{n.remove()}),D(c,!0)}),e().on("move",()=>{k()})}),I(()=>{e().remove()}),H(()=>{T(c)&&(e().setProjection(t.projection),e().getStyle().layers.forEach(n=>{t.layers.includes(n.id)?e().setLayoutProperty(n.id,"visibility","visible"):e().setLayoutProperty(n.id,"visibility","none")}),t.exposurePaint!==void 0&&e().setPaintProperty("exposure","fill-color",t.exposurePaint["fill-color"]),l()&&(e().setConfigProperty("basemap","showPlaceLabels",l()!=="wld"),l().startsWith("bbox")?e().fitBounds(t.activeZoombox):l()==="wld"?e().fitBounds([[-180,-90],[180,90]]):e().fitBounds([[-180,-90],[180,90]])))});function k(){s(e().getZoom()),p(e().getCenter().lng),w(e().getCenter().lat)}var b=Z(),L=j(b);U(L,n=>d=n,()=>d),B(b),_(g,b),W(),m()}export{K as S};
