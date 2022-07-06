

let fstimp = document.getElementById("fstinp");
let lstimp = document.getElementById("lstinp");
let randbtn = document.getElementById("randbtn");
let allbtn = document.getElementById("allbtn");
let nameout = document.getElementById("nameout");

let namearray;
randbtn.addEventListener("click",onename);
allbtn.addEventListener("click",allname);
fetch("names.txt")
.then((rawData) => rawData.text())
.then((data) => namearray = data.split("\r\n\r\n"));
function onename(){
    nameout.innerHTML = fstimp.value +' "'+namearray[Math.floor(Math.random()*namearray.length)]+'" '+lstimp.value;
}
function allname(){
    nameout.innerHTML = "";
    for(i = 0;i<namearray.length;i++){
        nameout.innerHTML += fstimp.value +' "'+namearray[i]+'" '+lstimp.value+"<br>";
    }
}