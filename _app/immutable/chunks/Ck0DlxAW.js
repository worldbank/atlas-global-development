import{b as C,a as M}from"./BxFujn2y.js";import{p as B,M as S,N as _,u as H,g as O,o as z,q as I,k as T,a as W,z as U,B as j,A as Z}from"./CHsAj8WC.js";import{p as a,b as A}from"./DjdU5L_X.js";import{m as c}from"./CdYvQgrU.js";import{r as E}from"./BIjzDTut.js";import{$ as J}from"./DA8VXiwq.js";import"./BFNP2uuI.js";import{C as N}from"./DFDZ93vq.js";import{h as R}from"./CZcc389V.js";const Y=`
<svg version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:ev="http://www.w3.org/2001/xml-events" width="64" height="64" viewBox="0 0 64 64">
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
                data-hatch-color="true"
            />
        </pattern>

        <pattern id="tightHatch" patternUnits="userSpaceOnUse" width="4" height="4">
            <path
                class="visible"
                d="M-1,1 l2,-2
M0,4 l4,-4
M3,5 l2,-2"
                stroke="#8a969f;"
                data-hatch-color="true"
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
</svg>`;var D=j('<main class="svelte-1x9c7lv"><div class="map svelte-1x9c7lv"></div></main>');function te(h,t){B(t,!0);const p=()=>M(J,"$_",u),[u,g]=C();let w=a(t,"lng",15,0),v=a(t,"lat",15,20),b=a(t,"zoom",15,2),e=a(t,"map",15),r=a(t,"initialState",23,()=>({lng:20,lat:10,zoom:2})),i=a(t,"tooltipColumn",3,"pop_all"),s=a(t,"focus",3,"wld");const y="pk.eyJ1IjoibWxhbWJyZWNodHMiLCJhIjoiY21wZHA3aHhlMGRrNDJycjJyY3dmNDFwZyJ9.okWhPCvOgVKZcT0wMnEKSQ";let l,f=U(!1);t.fullWidth&&(r().zoom=1.5);const x=n=>R(".1~s")(n).replace("G","B"),k=n=>{const o=p()(`country.${n.feature.properties.ISO_A3.toLowerCase()}`),m=i().includes("sha")?`${n.feature.properties[i()].toFixed(0)}%`:x(n.feature.properties[i()]);return`<strong>${o}</strong>: ${m}`};S(async()=>{e(new c.Map({style:"mapbox://styles/mlambrechts/cmo2mp9dd013901qvdepa10fu",container:l,accessToken:y,center:[r().lng,r().lat],zoom:r().zoom,bounds:[[-180,-90],[180,90]],projection:t.projection,renderWorldCopies:!1,cooperativeGestures:!0,config:{basemap:{showRoadsAndTransit:!1,showPedestrianRoads:!1,showPlaceLabels:!1,showPointOfInterestLabels:!1,fuelingStationModePointOfInterestLabels:"none",showRoadLabels:!1,showTransitLabels:!1,showAdminBoundaries:!1,show3dObjects:!1,showLandmarkIconLabels:!1,colorTrunks:"rgba(255,255,255,0)",colorMotorways:"rgba(255,255,255,0)",colorRoads:"rgba(255,255,255,0)",theme:"monochrome"}}}));const n=new c.Popup({closeButton:!1,closeOnClick:!1,offset:[0,-20]});e().addControl(new c.NavigationControl({showCompass:!1})),e().dragPan.enable(),e().doubleClickZoom.enable(),e().scrollZoom.disable(),e().addImage("tighthatch",await E(Y,64,1,N.grey200)),e().on("style.load",async()=>{t.sources.forEach(([o,m])=>{e().addSource(o,m)}),t.styles.forEach(o=>e().addLayer({...o,slot:"bottom",layout:{visibility:o.id.includes("vuln")?"visible":"none"}})),e().addInteraction("choropleth-mousemove",{type:"mousemove",target:{layerId:"exposure"},handler:o=>{if(o.feature.properties.disputed){n.remove();return}n.setLngLat(o.lngLat).setHTML(k(o)).addTo(e())}}),e().on("mouseleave","exposure",()=>{n.remove()}),Z(f,!0)}),e().on("move",()=>{L()})}),_(()=>{e().remove()}),H(()=>{O(f)&&(e().setProjection(t.projection),e().getStyle().layers.forEach(n=>{t.layers.includes(n.id)?e().setLayoutProperty(n.id,"visibility","visible"):e().setLayoutProperty(n.id,"visibility","none")}),t.exposurePaint!==void 0&&e().setPaintProperty("exposure","fill-color",t.exposurePaint["fill-color"]),s()&&(e().setConfigProperty("basemap","showPlaceLabels",s()!=="wld"),s().startsWith("bbox")?e().fitBounds(t.activeZoombox):s()==="wld"?e().fitBounds([[-180,-90],[180,90]]):e().fitBounds([[-180,-90],[180,90]])))});function L(){b(e().getZoom()),w(e().getCenter().lng),v(e().getCenter().lat)}var d=D(),P=z(d);A(P,n=>l=n,()=>l),I(d),T(h,d),W(),g()}export{te as S};
