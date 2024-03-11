let userscore = 0;
let compscore = 0;
let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        let userchoice = choice.getAttribute("id");
        gameplay(userchoice);
    });
});

let Computer = () =>{
    let options = ["rock","paper","scissor"];
    let ran = Math.floor(Math.random()*3);
    return options[ran];
}

const gameplay = (userchoice)=>
{
    console.log("User choice is", userchoice);
    let compchoice = Computer();
    console.log("Computer choice is", compchoice);

    if(userchoice==compchoice){
        console.log("It was a draw!");
        msg.innerText = "It was a draw.";
        msg.style.backgroundColor = "#0d0c3c";
    }else{
        if(userchoice=="rock"){
           if(compchoice=="scissor"){
                console.log("User won.");
                userscore++;
                msg.innerText = "You Won!! Rock beats Scissor";
                msg.style.backgroundColor = "rgb(49, 224, 49)";
           }
           else{
               console.log("User lost.");
               compscore++;
               msg.innerText = "You Lost. Paper beats Rock";
               msg.style.backgroundColor = "rgb(196, 17, 17)";
           }
        }
        else if(userchoice=="paper"){
            if(compchoice=="rock"){
                console.log("User won.");
                userscore++;
                msg.innerText = "You Won!! Paper beats Rock";
                msg.style.backgroundColor = "rgb(49, 224, 49)";
            }
            else{
                console.log("User lost.");
                compscore++;
                msg.innerText = "You Lost. Scissor beats paper";
                msg.style.backgroundColor = "rgb(196, 17, 17)";
            }
        }
        else{
            if(compchoice=="paper"){
                console.log("User won.");
                userscore++;
                msg.innerText = "You Won!! Scissor beats paper";
                msg.style.backgroundColor = "rgb(49, 224, 49)";
            }
            else{
                console.log("User lost.");
                compscore++;
                msg.innerText = "You Lost. Rock beats Scissor";
                msg.style.backgroundColor = "rgb(196, 17, 17)";
            }
        }
    }

    user.innerText = userscore;
    comp.innerText = compscore;
    if(userscore==10 || compscore==10){
            msg.innerText = "Restarting the game... CLICK TO PLAY";
            msg.style.backgroundColor = "#0d0c3c";

        userscore = 0;
        compscore = 0;
        
    }
}
