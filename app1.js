// imports
const c = require('ansi-colors')
const prompt = require('prompt-sync')()


function game() {
 
    let turns = 0 // initialiser
    const maxTries = 3 // can be changed
    const computerNum= Math.floor(Math.random()*10) + 1 //computers number
    console.log("Welcome to the number guessing game")
    console.log('') // allows readable gaps in console
    console.log("You have 3 attempts to guess the computers number")

    while (turns < maxTries){ // starts the game 

        const userNum = Number(prompt('Guess a number between 1 and 10: '))
        console.log('') 
        console.log(`You picked ${userNum}`)
        console.log('')
        turns ++ // adds 1 to turns

        if (userNum === computerNum) { // ends game if num is correct
            console.log('congrats! You have correctly guesses the number.')
            break
        }

        else if (turns < maxTries) { // allows another attempt
            console.log(`Incorrect, try again. You have ${maxTries-turns} attempts left`)
             
        }
        else if (turns === maxTries-1) { // allows one more attempt
            console.log('Incorrect, you have 1 attempt left')
        }
        else { // if user failed to guess
            
           console.log(`Computers number was ${computerNum}`)
           break
        }
        }
        


     
    }


game()
