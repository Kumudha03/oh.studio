window.addEventListener("load",()=>{

    function handleIntersection(entries,observer){
        entries.forEach(entry=>{
            if(entry.isIntersecting){
            entry.target.classList.add("visible")};
        });
    };

    const options={root:null,threshold:0.2};

    const observer =new IntersectionObserver(handleIntersection,options);

    const sections=document.querySelectorAll(".section");
    sections.forEach(section=>
        observer.observe(section));

});