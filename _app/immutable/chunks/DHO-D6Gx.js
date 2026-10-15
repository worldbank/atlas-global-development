function o(l,i){let f=0,t=0;if(i===void 0)for(let e of l)e!=null&&(e=+e)>=e&&(++f,t+=e);else{let e=-1;for(let n of l)(n=i(n,++e,l))!=null&&(n=+n)>=n&&(++f,t+=n)}if(f)return t/f}export{o as m};
