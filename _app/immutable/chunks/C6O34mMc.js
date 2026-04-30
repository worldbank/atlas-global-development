import{a as g,b as u}from"./D_yBJJUV.js";import{p as y,U as x,V as b,u as l,i as v,v as k,j as P,G as M,J as L,I as j}from"./BFuJvw5k.js";import{p as i,b as H}from"./Dn3HJ5Te.js";import{m as S}from"./ua5M8EHC.js";import{r as I,C as U}from"./BU6nXmGV.js";import{r as z}from"./Cl8tFkiq.js";const O=`
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
</svg>`;var B=L('<div class="map svelte-15b8xy4"></div>');function T(p,t){y(t,!0);const c=()=>g(I,"$reducedMotion",f),[f,h]=u();i(t,"lng",11,0),i(t,"lat",11,20),i(t,"zoom",11,2);let e=i(t,"map",15),a=i(t,"initialState",19,()=>({lng:0,lat:20,zoom:2})),m=i(t,"boundsPadding",3,void 0),o,r=M(!1);x(async()=>{e(new S.Map({container:o,accessToken:"pk.eyJ1IjoibWxhbWJyZWNodHMiLCJhIjoiY21sZjR2cGEyMDB0NTNocGQ3YXJ2eXI2diJ9.FVnjHFFjMzZAhDTJAI6HgA",center:[a().lng,a().lat],zoom:a().zoom,projection:t.projection,config:{basemap:{showPedestrianRoads:!1,showPlaceLabels:!1,showPointOfInterestLabels:!1,fuelingStationModePointOfInterestLabels:"none",showRoadLabels:!1,showTransitLabels:!1,showAdminBoundaries:!1,show3dObjects:!1,showLandmarkIconLabels:!1,theme:"monochrome"}}})),e().addImage("diagonalhatch",await z(O,32,1,U.grey500)),e().on("style.load",()=>{e().setProjection(t.projection),t.sources.forEach(n=>{e().addSource(n.id,n.spec)}),t.styles.forEach(n=>{n.type=="fill"&&(n.paint["fill-opacity-transition"]={duration:1e3}),n.type=="line"&&(n.paint["line-opacity-transition"]={duration:1e3}),n.type=="symbol"&&(n.paint["text-opacity-transition"]={duration:1e3}),e().addLayer({...n,slot:"middle"})}),j(r,!0)})}),b(()=>{e().remove()}),l(()=>{v(r)&&t.styles.forEach(n=>{var d;if(t.layers.includes(n.id)){if(n.type=="fill"){const w=((d=n.paint)==null?void 0:d["fill-opacity"])??1;e().setPaintProperty(n.id,"fill-opacity",w)}n.type=="line"&&e().setPaintProperty(n.id,"line-opacity",n.paint["line-opacity"]),n.type=="symbol"&&e().setPaintProperty(n.id,"text-opacity",1)}else n.type=="fill"&&e().setPaintProperty(n.id,"fill-opacity",0),n.type=="line"&&e().setPaintProperty(n.id,"line-opacity",0),n.type=="symbol"&&e().setPaintProperty(n.id,"text-opacity",0)})}),l(()=>{e().fitBounds(t.bounds,{animate:!c(),padding:m()})});var s=B();H(s,n=>o=n,()=>o),k(p,s),P(),h()}export{T as S};
