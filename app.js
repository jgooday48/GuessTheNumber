const c = require('ansi-colors')
const prompt = require('prompt-sync')()

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

    else if (userNum===0) {
        return 'exiting the game'
    }
}


function start() {
    let play = true
    while (play) {

        const userNu = Number(prompt('Guess a number between 1 and 10: '))
        const computerNu= Math.floor(Math.random()*10) + 1

        console.log(`You picked ${userNu}`)

        console.log(game(userNu,computerNu))

        
        if (userNu === 0) { //exit game
            play = false
            }
            else if (userNu!==0){ //continue game
                play =true
    
            }} 
    }


    start()
