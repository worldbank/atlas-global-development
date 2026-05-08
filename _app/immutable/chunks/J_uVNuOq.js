import{b as C,a as P}from"./Zu8s0PQX.js";import{p as M,V as H,W as I,u as S,i as j,A as B,C as _,x as z,j as T,I as W,K as O,J as A}from"./B8Jj62_B.js";import{p as a,b as U}from"./BYCM2xXR.js";import{m as c}from"./Cz_XuP85.js";import{r as J}from"./rh6mSSNJ.js";import{$ as Z}from"./B9z43cZy.js";import"./Wn7LVP4o.js";import{C as R}from"./DuXBng4X.js";import{h as E}from"./BATc38kB.js";const F=`
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
</svg>`;var G=O('<main class="svelte-1x9c7lv"><div class="map svelte-1x9c7lv"></div></main>');function ee(h,t){M(t,!0);const p=()=>P(Z,"$_",u),[u,g]=C();let w=a(t,"lng",15,0),v=a(t,"lat",15,20),b=a(t,"zoom",15,2),e=a(t,"map",15),r=a(t,"initialState",23,()=>({lng:20,lat:10,zoom:2})),i=a(t,"tooltipColumn",3,"pop_all"),s=a(t,"focus",3,"wld"),l,f=W(!1);t.fullWidth&&(r().zoom=1.5);const y=n=>E(".1~s")(n).replace("G","B"),x=n=>{const o=p()(`country.${n.feature.properties.ISO_A3.toLowerCase()}`),m=i().includes("sha")?`${n.feature.properties[i()].toFixed(0)}%`:y(n.feature.properties[i()]);return`<strong>${o}</strong>: ${m}`};H(async()=>{e(new c.Map({style:"mapbox://styles/mlambrechts/cmo2mp9dd013901qvdepa10fu",container:l,accessToken:"pk.eyJ1IjoibWxhbWJyZWNodHMiLCJhIjoiY21sZjR2cGEyMDB0NTNocGQ3YXJ2eXI2diJ9.FVnjHFFjMzZAhDTJAI6HgA",center:[r().lng,r().lat],zoom:r().zoom,bounds:[[-180,-90],[180,90]],projection:t.projection,renderWorldCopies:!1,cooperativeGestures:!0,config:{basemap:{showRoadsAndTransit:!1,showPedestrianRoads:!1,showPlaceLabels:!1,showPointOfInterestLabels:!1,fuelingStationModePointOfInterestLabels:"none",showRoadLabels:!1,showTransitLabels:!1,showAdminBoundaries:!1,show3dObjects:!1,showLandmarkIconLabels:!1,colorTrunks:"rgba(255,255,255,0)",colorMotorways:"rgba(255,255,255,0)",colorRoads:"rgba(255,255,255,0)",theme:"monochrome"}}}));const n=new c.Popup({closeButton:!1,closeOnClick:!1,offset:[0,-20]});e().addControl(new c.NavigationControl({showCompass:!1})),e().dragPan.enable(),e().doubleClickZoom.enable(),e().scrollZoom.disable(),e().addImage("tighthatch",await J(F,64,1,R.grey200)),e().on("style.load",async()=>{t.sources.forEach(([o,m])=>{e().addSource(o,m)}),t.styles.forEach(o=>e().addLayer({...o,slot:"bottom",layout:{visibility:o.id.includes("vuln")?"visible":"none"}})),e().addInteraction("choropleth-mousemove",{type:"mousemove",target:{layerId:"exposure"},handler:o=>{if(o.feature.properties.disputed){n.remove();return}n.setLngLat(o.lngLat).setHTML(x(o)).addTo(e())}}),e().on("mouseleave","exposure",()=>{n.remove()}),A(f,!0)}),e().on("move",()=>{k()})}),I(()=>{e().remove()}),S(()=>{j(f)&&(e().setProjection(t.projection),e().getStyle().layers.forEach(n=>{t.layers.includes(n.id)?e().setLayoutProperty(n.id,"visibility","visible"):e().setLayoutProperty(n.id,"visibility","none")}),t.exposurePaint!==void 0&&e().setPaintProperty("exposure","fill-color",t.exposurePaint["fill-color"]),s()&&(e().setConfigProperty("basemap","showPlaceLabels",s()!=="wld"),s().startsWith("bbox")?e().fitBounds(t.activeZoombox):s()==="wld"?e().fitBounds([[-180,-90],[180,90]]):e().fitBounds([[-180,-90],[180,90]])))});function k(){b(e().getZoom()),w(e().getCenter().lng),v(e().getCenter().lat)}var d=G(),L=B(d);U(L,n=>l=n,()=>l),_(d),z(h,d),T(),g()}export{ee as S};
