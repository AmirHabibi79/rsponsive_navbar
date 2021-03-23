const nav_links=document.querySelector(".nav-links")
const nav_small=document.querySelector(".nav-small");
const nav_wrapper=document.querySelector(".nav-wrapper");
const button=document.querySelector(".menu button");
let isopened=false
if(window.innerWidth<=540){
    nav_small.append(nav_links)
}
window.addEventListener("resize",(e)=>{
    if(e.target.innerWidth<=540){
        nav_small.append(nav_links)
        }else{
            nav_wrapper.append(nav_links)
        }
})

button.addEventListener("click",()=>{
    togglemenu()
})
const togglemenu=()=>{
    isopened=!isopened;
    if(isopened){
        nav_small.style.opacity="1"
        nav_small.style.visibility="visible"
    }
    else{
        nav_small.style.opacity="0"
        nav_small.style.visibility="hidden"
    }
}
document.addEventListener("pointerdown",(e)=>{
    if(e.target.closest(".nav-small-wrapper")){
        return
    }else{
        if(nav_small.style.opacity==="1")
        togglemenu()
    }
})