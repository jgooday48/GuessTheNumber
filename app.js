// imports
const c = require('ansi-colors')
const prompt = require('prompt-sync')()


function game() {
 
    console.log("Welcome to the number guessing game")
    let play=true //flag we are keep playing

    //main loop:
    while(play) {
        ans=prompt('Would you like to play a guess game y or n?: ')
        if (ans==='y'){
            const computerNum= Math.floor(Math.random()*10) + 1
            mainGame(computerNum)
        }
        else {
            play=false
        }
    }

     
    }
//recursion
function mainGame(computerNum){
    const userNum = Number(prompt('Guess a number between 1 and 10: '))
    console.log('')
    console.log(`You picked ${userNum}`)
    // console.log(`computer number is ${computerNum}`)

    if (userNum === computerNum) { // ends game 
        console.log(c.red('Congrats! You have correctly guesses the number.'))
        return
    
    }
    else if (userNum===0){
        console.log(c.blue(`Good buy!Computer's number was ${computerNum}`))
        return

    }
    else {
        console.log(c.green("Try again! You can do it!"))        
        mainGame(computerNum)
    }

}
game()
