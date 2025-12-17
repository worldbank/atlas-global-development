function s(e,x){e=e.slice();var c=0,r=e.length-1,t=e[c],f=e[r],l;return f<t&&(l=c,c=r,r=l,l=t,t=f,f=l),e[c]=x.floor(t),e[r]=x.ceil(f),e}export{s as n};
