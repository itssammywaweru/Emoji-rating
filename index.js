const starEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-sharp")
const colorArr = ["red", "orange", "lightgray", "lightgreen", "green"]

let index = 0

starEl.forEach((starEl,index) =>{starEl.addEventListener("click", ()=>{
    updateRating(index)
})})


let updateRating = index => {
    starEl.forEach((starEl, i)=>{
        if (i < index + 1){
            starEl.classList.add("active")
        }
        else{
            starEl.classList.remove("active")
        }
    })
    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform =`translate(-${index * 50}px)`
        emojiEl.style.color = colorArr[index]
    })
}


