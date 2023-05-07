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
    // while (per < 80) {
    //     progress.style.width = `80%`;
    //     percentage.innerHTML = "80%";
    //     per++
    // }
    

}
function load(){   
var loader = document.getElementById("pre-loader");
var content = document.getElementById("content-cont");
setInterval(()=>{
    loader.style.display = "none";
    content.style.position = "absolute";
    content.style.transition = "4s"
    content.style.opacity = "1";


},4000)
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










