const textareae1 = document.getElementById("textarea")
const totalcountere1 = document.getElementById("total-counter")
const remainingcountere1 = document.getElementById("Remaining")


textareae1.addEventListener("keyup", ()=>{

   updateCounter()

})

function updateCounter(){

   totalcountere1.innerText = textareae1.value.length
  remainingcountere1.innerText = textareae1.getAttribute("maxLength") - textareae1.value.length;
}