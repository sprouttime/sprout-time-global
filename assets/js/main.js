const progress = document.querySelector('.progress')
const percentage = document.querySelector('.progress span')

let per = 0;
function progressLoad(){
    if(per>=80){
        progress.style.width = `80%`;
        percentage.innerHTML = "80%"

    }else{
        progress.style.width = `${per}%`;
        percentage.innerHTML = `${per}%`;

    }
    per++

}

setInterval(progressLoad,90);







    //  var btn = document.getElementById("btn");


function display(){
    var nav = document.getElementById("ul");
    nav.style.display = "none";
    if (nav.classList.toggle(nav.style.display = "none")){
        nav.style.display = "block";
        
    }else{
        nav.style.display == "none";
    }
}










