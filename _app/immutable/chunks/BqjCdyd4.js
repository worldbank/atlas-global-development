import{a as g,b as u}from"./CUH_l5gA.js";import{p as y,V as x,W as P,u as d,i as b,x as v,j as k,I as L,K as M,J as O}from"./CuenSGLA.js";import{p as a,b as S}from"./SZNU-Mkc.js";import{m as U,P as _}from"./_E-zT_hp.js";import{r as B,C as z}from"./CS4Dfe-B.js";import{r as H}from"./Dj8zMxj8.js";const j=`
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
    <rect x="0" y="0" width="64" height="64" fill="url(#diagonalHatch)" />
</svg>`;var I=M('<div class="map svelte-15b8xy4"></div>');function R(p,t){y(t,!0);const f=()=>g(B,"$reducedMotion",c),[c,h]=u();a(t,"lng",11,0),a(t,"lat",11,20),a(t,"zoom",11,2);let e=a(t,"map",15),i=a(t,"initialState",19,()=>({lng:0,lat:20,zoom:2})),m=a(t,"boundsPadding",3,void 0),o,r=L(!1);x(async()=>{e(new U.Map({container:o,accessToken:_,center:[i().lng,i().lat],zoom:i().zoom,projection:t.projection,config:{basemap:{showPedestrianRoads:!1,showPlaceLabels:!1,showPointOfInterestLabels:!1,fuelingStationModePointOfInterestLabels:"none",showRoadLabels:!1,showTransitLabels:!1,showAdminBoundaries:!1,show3dObjects:!1,showLandmarkIconLabels:!1,theme:"monochrome"}}})),e().addImage("diagonalhatch",await H(j,32,1,z.grey500)),e().on("style.load",()=>{e().setProjection(t.projection),t.sources.forEach(n=>{e().addSource(n.id,n.spec)}),t.styles.forEach(n=>{n.type=="fill"&&(n.paint["fill-opacity-transition"]={duration:1e3}),n.type=="line"&&(n.paint["line-opacity-transition"]={duration:1e3}),n.type=="symbol"&&(n.paint["text-opacity-transition"]={duration:1e3}),e().addLayer({...n,slot:"middle"})}),O(r,!0)})}),P(()=>{e().remove()}),d(()=>{b(r)&&t.styles.forEach(n=>{var l;if(t.layers.includes(n.id)){if(n.type=="fill"){const w=((l=n.paint)==null?void 0:l["fill-opacity"])??1;e().setPaintProperty(n.id,"fill-opacity",w)}n.type=="line"&&e().setPaintProperty(n.id,"line-opacity",n.paint["line-opacity"]),n.type=="symbol"&&e().setPaintProperty(n.id,"text-opacity",1)}else n.type=="fill"&&e().setPaintProperty(n.id,"fill-opacity",0),n.type=="line"&&e().setPaintProperty(n.id,"line-opacity",0),n.type=="symbol"&&e().setPaintProperty(n.id,"text-opacity",0)})}),d(()=>{e().fitBounds(t.bounds,{animate:!f(),padding:m()})});var s=I();S(s,n=>o=n,()=>o),v(p,s),k(),h()}export{R as S};
