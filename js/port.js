let links=document.querySelectorAll(".scroll");
links.forEach((item)=>{
    item.addEventListener("click",()=>{
        let el=document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block:"center"});
    })
}
)