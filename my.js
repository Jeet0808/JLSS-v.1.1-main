let modebtn = document.querySelector("#mode");
let d1 = document.querySelector("#d1");

let body = document.querySelector("body");

let currentmode = "dark";

modebtn.addEventListener("click", () =>{
    if (currentmode === "light") {
        currentmode = "dark";
        body.classList.add("dark");
        
        body.classList.remove("light");
        d1.classList.add("dark");
        
        d1.classList.remove("light");
       
       
        
        
    } else {
        currentmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        d1.classList.add("light");
        d1.classList.remove("dark");
        
    
    }
    console.log(currentmode);
});