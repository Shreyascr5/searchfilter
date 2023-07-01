const userInput=document.getElementById("textAreaIp");
const outputDisp=document.getElementById("OpRes");
const searchBtn=document.getElementById("search");



function getFilter(){
    var ipValue=userInput.value;
    outputDisp.innerHTML= ipValue;
    
}


searchBtn.addEventListener("click",getFilter);