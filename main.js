const nextE1 = document.getElementById("next");
const prevE1 = document.getElementById("prev");
const progressE1 = document.querySelector(".progress-bar-front")

const stepsE1 = document.querySelectorAll(".step");

let currenChecked = 1;
nextE1.addEventListener('click' , ()=>{
    currenChecked++;
    if(currenChecked > stepsE1.length){
        currenChecked = stepsE1.length;
    }
   updateStepProgress()
});
prevE1.addEventListener('click' , ()=>{
    currenChecked--;
    if(currenChecked < 1){
        currenChecked = 1;
    }
   updateStepProgress()
});


function updateStepProgress(){
    stepsE1.forEach((stepE1, idx)=>{
        if(idx < currenChecked){
            stepE1.classList.add("checked");
            stepE1.innerHTML = `<i class="fas fa-check"></i><small>
            ${idx == 0 ? "Start" : idx == stepsE1.length-1?
            "Final" : "Step " + idx}</small>`;
        }else{
            stepE1.classList.remove("checked");
            stepE1.innerHTML = `<i class="fas fa-times"></i>`;
        }

    });
    const checkedNum = document.querySelectorAll(".checked");
    progressE1.style.width = ((checkedNum.length-1) / (stepsE1.length-1) ) * 100 + "%";

    if(currenChecked == 1){
        prevE1.disabled = true;
    }else if(currenChecked == stepsE1.length){
        nextE1.disabled = true;
    }else{
        prevE1.disabled = false;
        nextE1.disabled = false;
    }
}