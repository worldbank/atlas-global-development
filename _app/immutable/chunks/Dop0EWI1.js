import{a as u,b as y}from"./BxFujn2y.js";import{p as x,M as b,N as k,u as d,g as P,k as v,a as M,z as L,B as O,A as S}from"./CHsAj8WC.js";import{p as a,b as H}from"./DjdU5L_X.js";import{m as B}from"./CdYvQgrU.js";import{r as U,C as _}from"./DFDZ93vq.js";import{r as j}from"./BIjzDTut.js";const z=`
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
</svg>`;var C=O('<div class="map svelte-15b8xy4"></div>');function T(p,t){x(t,!0);const c=()=>u(U,"$reducedMotion",f),[f,h]=y();a(t,"lng",11,0),a(t,"lat",11,20),a(t,"zoom",11,2);let e=a(t,"map",15),i=a(t,"initialState",19,()=>({lng:0,lat:20,zoom:2})),m=a(t,"boundsPadding",3,void 0);const w="pk.eyJ1IjoibWxhbWJyZWNodHMiLCJhIjoiY21wZHA3aHhlMGRrNDJycjJyY3dmNDFwZyJ9.okWhPCvOgVKZcT0wMnEKSQ";let o,r=L(!1);b(async()=>{e(new B.Map({container:o,accessToken:w,center:[i().lng,i().lat],zoom:i().zoom,projection:t.projection,config:{basemap:{showPedestrianRoads:!1,showPlaceLabels:!1,showPointOfInterestLabels:!1,fuelingStationModePointOfInterestLabels:"none",showRoadLabels:!1,showTransitLabels:!1,showAdminBoundaries:!1,show3dObjects:!1,showLandmarkIconLabels:!1,theme:"monochrome"}}})),e().addImage("diagonalhatch",await j(z,32,1,_.grey500)),e().on("style.load",()=>{e().setProjection(t.projection),t.sources.forEach(n=>{e().addSource(n.id,n.spec)}),t.styles.forEach(n=>{n.type=="fill"&&(n.paint["fill-opacity-transition"]={duration:1e3}),n.type=="line"&&(n.paint["line-opacity-transition"]={duration:1e3}),n.type=="symbol"&&(n.paint["text-opacity-transition"]={duration:1e3}),e().addLayer({...n,slot:"middle"})}),S(r,!0)})}),k(()=>{e().remove()}),d(()=>{P(r)&&t.styles.forEach(n=>{var l;if(t.layers.includes(n.id)){if(n.type=="fill"){const g=((l=n.paint)==null?void 0:l["fill-opacity"])??1;e().setPaintProperty(n.id,"fill-opacity",g)}n.type=="line"&&e().setPaintProperty(n.id,"line-opacity",n.paint["line-opacity"]),n.type=="symbol"&&e().setPaintProperty(n.id,"text-opacity",1)}else n.type=="fill"&&e().setPaintProperty(n.id,"fill-opacity",0),n.type=="line"&&e().setPaintProperty(n.id,"line-opacity",0),n.type=="symbol"&&e().setPaintProperty(n.id,"text-opacity",0)})}),d(()=>{e().fitBounds(t.bounds,{animate:!c(),padding:m()})});var s=C();H(s,n=>o=n,()=>o),v(p,s),M(),h()}export{T as S};
