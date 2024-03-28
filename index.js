const increasebtn = document.getElementById("increasebtn")
const decreasebtn = document.getElementById("decreasebtn")
const resetbtn = document.getElementById("resetbtn")
const counter = document.getElementById("counterlbl")
const addtobtn = document.getElementById("add2btn")
let count = 0;
increasebtn.onclick = function(){
    count++;
    counter.textContent = count;
    
}
decreasebtn.onclick = function(){
    count--;
    counter.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    counter.textContent = count;
}
addtobtn.onclick = function(){
     count = count + 2;
    counter.textContent = count;
}