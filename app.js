let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userscorepara = document.querySelector("#userscore")
const compscorepara = document.querySelector("#compscore")

const gencompchoice = () =>{
      let options = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random() * 3)
    return options[random]
}
const drawgame = () =>{
    console.log("game was draw")
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "orange"
}
const showwinner = (userwin, userchoice, compchoice)=> {
       if(userwin){
        console.log("you win!")
        userScore++
        userscorepara.innerText = userScore
        msg.innerText = `You win! your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green"
       }
       else{
        compScore++
        compscorepara.innerText = compScore
        console.log("you lose!")
        msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red"
       }
}
const playgame = (userchoice) =>{
    console.log("user choice = ", userchoice)
    //generate computer choice
    const  compchoice = gencompchoice();
    console.log("comp choice = ", compchoice)

    if(userchoice === compchoice){
          drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false: true;
        }
        else if(userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false: true;
        }
        showwinner(userwin, userchoice, compchoice)
    }
}

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id")
     
     playgame(userchoice)
    })
})