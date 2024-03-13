let buttons = document.querySelectorAll(".buttons a");

for(let i =0; i<buttons.length;i++){
    buttons[i].addEventListener("click", (e)=>{
        e.target.classList.toggle("active")
    })
}