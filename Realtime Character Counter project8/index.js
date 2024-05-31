const textareaEl = document.getElementById("textarea");

const totalconterEl = document.getElementById('total-counter');

const remainingcounterEl = document.getElementById('remaining-counter');

textareaEl.addEventListener('keyup', ()=>{
    updateCounter();
})
updateCounter();
function updateCounter(){
    totalconterEl.innerText = textareaEl.value.length;
    remainingcounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}