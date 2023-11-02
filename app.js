const c = require('ansi-colors')
const prompt = require('prompt-sync')

let counterUser = 0

function game(userNum,computerNum) {
    if (userNum===computerNum) {
        return 'Correct!'
    }

    else if (userNum> computerNum) {
        return 'Too high'
    }

    else if (userNum<computerNum) {
        return 'too low'
    }
}


function start() {
    let play = true
    while (play) {

        const userNum = Number(prompt('Guess a number between 1 and 10'))
        const computerNum = Math.floor(Math.random()*10) + 1

        console.log(`You picked ${userNum}`)

        console.log(game(userNum,computerNum))

        
        if (num1 === 0) { //exit game
            play = false
            }
            else if (num1 ===1 || num1 ===2|| num1===3){ //continue game
                play =true
    
            }} 
    }


    start()
