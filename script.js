

setTimeout(() => {
    document.getElementById("entrer").style.display ="none";
}, 1800)

console.log(window.innerWidth)

let membre = document.querySelectorAll(".membre")

membre[0].addEventListener("mouseover", () => {
    changerMembre(0)
})

membre[1].addEventListener("mouseover", () => {
    changerMembre(1)
})

membre[2].addEventListener("mouseover", () => {
    changerMembre(2)
})

function changerMembre (indexMembre){
    for(const index in membre){
        if(index < membre.length){
            membre[index].classList.remove("grow")
            membre[indexMembre].classList.add("grow")
        }
    }
}