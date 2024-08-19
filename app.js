let gameseq=[];
let userseq=[];

let lvl=0;
let start=true;
let colors=["yellow","green","blue","grey"];
let highest_score=0;
let h2=document.querySelector("h2");
h2.innerText=`highest score is ${highest_score}`;
//step 1
document.addEventListener("keypress",function(){
    if(start===true){
        start=false;
        lvlUp();
    }
});
//step 2
function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)

}
function lvlUp(){
    userseq=[];
    let h3=document.querySelector("h3");
    lvl++;
    h3.innerText=`Level ${lvl}`;
    let idx=Math.floor(Math.random()*4);
    let color=colors[idx];
    let random_btn=document.querySelector(`.${color}`);
    userFlash(random_btn);
    gameseq.push(color);
}
//step 3
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)

}
function check(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(lvlUp,1000);
        }
    }else{
        let h3=document.querySelector("h3");
        h3.innerHTML=`GAME OVER! your score is ${lvl} <br> Press any key to start new game`;
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },300);
        if(lvl>highest_score){
            highest_score=lvl;
            let h2=document.querySelector("h2");
            h2.innerText=`highest score is ${highest_score}`;
        }
        reset();   
    }
}
function btn_clicked(){
    let btn=this;
    gameFlash(btn);
    let color=btn.getAttribute("id");
    userseq.push(color);
    check(userseq.length-1);
}
let btns=document.querySelectorAll(".btn");
for(btn_Click of btns){
    btn_Click.addEventListener("click",btn_clicked);
}
function reset(){
    lvl=0;
    start=true;
    userseq=[];
    gameseq=[];
}
//step 4

