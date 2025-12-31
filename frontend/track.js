
const hitBtn = document.getElementById("hit");
const missBtn = document.getElementById("miss");
const backBtn = document.getElementById("back");
const score = document.getElementById("results");
const scoreChildren = score.children;
let total = 0;
let column = 0;
let row = 0;
scoreChildren[row].children[column].classList.add("bg-blue-700")

let currentSelected = null;
let prevValue = null;

hitBtn.addEventListener("click", hit);
missBtn.addEventListener("click", miss);
backBtn.addEventListener("click", back);
// TODO: Move this to an edit file
score.addEventListener("dblclick", edit)
document.addEventListener("click", unfocus)

function hit(score){
    recordScore(true)
}

function miss(){
    recordScore(false)
}

function recordScore(score){
    scoreChildren[row].children[column].innerHTML = score ? 1 : 0 // TODO: Remove ternary operator
    scoreChildren[row].children[column].classList.remove("bg-blue-700")

    total++;
    if(total >= 8){
        hitBtn.removeEventListener("click", hit)
        missBtn.removeEventListener("click", miss)
        return
    }
    column = total % 2;
    row = Math.floor((total) / 2)
    scoreChildren[row].children[column].classList.add("bg-blue-700")
}

function back(){
    if(total <= 0){
        return
    }
    
    if(total >= 8){
        hitBtn.addEventListener("click", hit);
        missBtn.addEventListener("click", miss);
    }

    scoreChildren[row].children[column].classList.remove("bg-blue-700")

    total--;
    column = total % 2;
    row = Math.floor((total) / 2)
    scoreChildren[row].children[column].classList.add("bg-blue-700")
}

// TODO: Move this to an edit file
function edit(event){
    if(event.target && event.target.nodeName == "TD"){
        currentSelected = event.target
        prevValue = event.target.innerHTML
        event.target.innerHTML = '<input id="focus" class="w-20">'
        const inputField = document.getElementById("focus")
        inputField.focus();
    }
}

function unfocus(){
    if(!currentSelected){
        return
    }
    const inputField = document.getElementById("focus")
    if(inputField == null || inputField.value == ""){
        currentSelected.innerHTML = prevValue
        return
    }
    currentSelected.innerHTML = inputField.value;
    currentSelected = null;

}