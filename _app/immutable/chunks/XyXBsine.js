import{b as P,a as C}from"./G3-xk23Q.js";import{p as B,W as _,X as S,u as M,i as O,B as z,D as H,y as T,j as U,J as I,L as W,K as j}from"./CK5Do7NV.js";import{p as a,b as A}from"./ChrR8W6R.js";import{m as c,P as E}from"./B32ePaiH.js";import{r as R}from"./NdD4o3kG.js";import{$ as X}from"./D_Xab2SL.js";import"./BgzrcfFZ.js";import{C as Z}from"./BDIDormC.js";import{g as D}from"./BMStoJgG.js";const G=`
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
</svg>`;var Y=W('<main class="svelte-1x9c7lv"><div class="map svelte-1x9c7lv"></div></main>');function te(h,t){B(t,!0);const p=()=>C(X,"$_",u),[u,g]=P();let w=a(t,"lng",15,0),v=a(t,"lat",15,20),b=a(t,"zoom",15,2),e=a(t,"map",15),r=a(t,"initialState",23,()=>({lng:20,lat:10,zoom:2})),i=a(t,"tooltipColumn",3,"pop_all"),s=a(t,"focus",3,"wld"),l,f=I(!1);t.fullWidth&&(r().zoom=1.5);const y=n=>D(".1~s")(n).replace("G","B"),x=n=>{const o=p()(`country.${n.feature.properties.ISO_A3.toLowerCase()}`),m=i().includes("sha")?`${n.feature.properties[i()].toFixed(0)}%`:y(n.feature.properties[i()]);return`<strong>${o}</strong>: ${m}`};_(async()=>{e(new c.Map({style:"mapbox://styles/mlambrechts/cmo2mp9dd013901qvdepa10fu",container:l,accessToken:E,center:[r().lng,r().lat],zoom:r().zoom,bounds:[[-180,-90],[180,90]],projection:t.projection,renderWorldCopies:!1,cooperativeGestures:!0,config:{basemap:{showRoadsAndTransit:!1,showPedestrianRoads:!1,showPlaceLabels:!1,showPointOfInterestLabels:!1,fuelingStationModePointOfInterestLabels:"none",showRoadLabels:!1,showTransitLabels:!1,showAdminBoundaries:!1,show3dObjects:!1,showLandmarkIconLabels:!1,colorTrunks:"rgba(255,255,255,0)",colorMotorways:"rgba(255,255,255,0)",colorRoads:"rgba(255,255,255,0)",theme:"monochrome"}}}));const n=new c.Popup({closeButton:!1,closeOnClick:!1,offset:[0,-20]});e().addControl(new c.NavigationControl({showCompass:!1})),e().dragPan.enable(),e().doubleClickZoom.enable(),e().scrollZoom.disable(),e().addImage("tighthatch",await R(G,64,1,Z.grey200)),e().on("style.load",async()=>{t.sources.forEach(([o,m])=>{e().addSource(o,m)}),t.styles.forEach(o=>e().addLayer({...o,slot:"bottom",layout:{visibility:o.id.includes("vuln")?"visible":"none"}})),e().addInteraction("choropleth-mousemove",{type:"mousemove",target:{layerId:"exposure"},handler:o=>{if(o.feature.properties.disputed){n.remove();return}n.setLngLat(o.lngLat).setHTML(x(o)).addTo(e())}}),e().on("mouseleave","exposure",()=>{n.remove()}),j(f,!0)}),e().on("move",()=>{k()})}),S(()=>{e().remove()}),M(()=>{O(f)&&(e().setProjection(t.projection),e().getStyle().layers.forEach(n=>{t.layers.includes(n.id)?e().setLayoutProperty(n.id,"visibility","visible"):e().setLayoutProperty(n.id,"visibility","none")}),t.exposurePaint!==void 0&&e().setPaintProperty("exposure","fill-color",t.exposurePaint["fill-color"]),s()&&(e().setConfigProperty("basemap","showPlaceLabels",s()!=="wld"),s().startsWith("bbox")?e().fitBounds(t.activeZoombox):s()==="wld"?e().fitBounds([[-180,-90],[180,90]]):e().fitBounds([[-180,-90],[180,90]])))});function k(){b(e().getZoom()),w(e().getCenter().lng),v(e().getCenter().lat)}var d=Y(),L=z(d);A(L,n=>l=n,()=>l),H(d),T(h,d),U(),g()}export{te as S};
