let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice= choice.getAttribute("id")
    playGame(userChoice);
    let userWin=true;
})
})

const playGame=(userChoice)=>{
console.log(`User choice=${userChoice}`)
const compChoice= getCompChoice();
console.log(`Computer choice=${compChoice}`)
if(userChoice===compChoice){
    return showDraw();
}else{
    let userWin=true;
    if(userChoice==='rock'){
        //paper & scissors
        userWin=compChoice==='paper'?false:true;
    }
    else if(userChoice==='paper'){
        //rock scissor
        userWin=compChoice==='rock'?true:false;
    }
    else{
        //rock paper
        userWin=compChoice==='rock'?false:true;
    }
    showWinner(userWin, userChoice, compChoice)
}

}

const getCompChoice=()=>{
    let option=["rock", "paper","scissors"];
    let ranIdx=Math.floor(Math.random()*3);
    return option[ranIdx]
}

const showDraw=()=>{
    console.log("game was draw");
    msg.innerText=" Game Draw ";

}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("you win");
        userScore++
        userScorePara.innerText=userScore
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background="green";
    }else{
        console.log("you lose")
        compScore++
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose ${compChoice} beats your ${userChoice}`;
        msg.style.background="red";
    }
}