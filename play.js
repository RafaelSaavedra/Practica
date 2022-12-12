//const mongoose = require('mongoose')
//const { stringify } = require('querystring')

let player = 'rock'
//player = opcion
function resultado(player){
let rand = Math.floor(Math.random()*11)
if(rand < 3) computer = 'rock'
    else if( rand <5) computer = 'paper'
    else if( rand <7) computer = 'scissors'
    else if( rand <9) computer = 'spock'
    else if( rand <11) computer = 'lizzard'


if(player =='rock' && (computer == 'paper' || computer == 'spock')
||player == 'paper' && (computer == 'scissors' || computer == 'lizzard')
||player == 'scissors' && (computer == 'rock' || computer == 'spock')
||player == 'spock' && (computer == 'paper' || computer == 'lizzard')
||player == 'lizzard' && (computer == 'scissors'|| computer == 'rock'))

{console.log ('player :' + player +', Computer :' + computer +", Result : Computer wins.")}

else if(player == computer)

{console.log ('player :' + player +', Computer :' + computer +", Result : Draw, try again.")}

else

{console.log ('player :' + player +', Computer :' + computer +", Result : Player wins.")}
    
}
resultado(player)

/*
-----_SEGUNDA PRUEBA_----

     if(player == computer){
      console.log('Draw, try again')
     }
    else if(((player =='rock' && computer =='paper') || (player =='rock' && computer =='spock'))
        ||((player == 'paper' && computer == 'scissors') || (player == 'paper' && computer == 'lizzard'))
        ||((player == 'scissors' && computer == 'rock' )||(player == 'scissors' && computer == 'spock'))
        ||((player == 'spock' && computer == 'paper' )||(player == 'spock' && computer == 'lizzard'))
        ||((player == 'lizzard' && computer == 'scissors')||(player=='lizzard' && computer == 'rock'))){
         console.log ('player :' + player +', Computer :' + computer +", Result :Computer wins")
        }

    else{
        console.log ('Player wins')
        }
        
       


-------_PRIMERA PRUEBA_--------


    if( ((player =='rock' && computer =='paper') || (player =='rock' && computer =='spock'))
        ||((player == 'paper' && computer == 'scissors') || (player == 'paper' && computer == 'lizzard'))
        ||((player == 'scissors' && computer == 'rock' )||(player == 'scissors' && computer == 'spock'))
        ||((player == 'spock' && computer == 'paper' )||(player == 'spock' && computer == 'lizzard'))
        ||((player == 'lizzard' && computer == 'scissors')||(player=='lizzard' && computer == 'rock'))){
         console.log ('player :' + player +', Computer :' + computer +", Result :Computer wins")

        }if(
        ((computer == 'rock' &&  player == 'paper' )|| (computer == 'rock' && player == 'spock'))
        ||((computer == 'paper' && player == 'scissors' )||(computer == 'paper' && player == 'lizzard'))
        ||((computer == 'scissors' && player == 'rock') || (computer == 'scissors' && player == 'spock'))
        ||((computer == 'spock' && player == 'paper') || (computer == 'spock' &&player == 'lizzard'))
        ||((computer == 'lizzard' && player == 'scissors') || (computer == 'lizzard' && player =='rock'))){
        console.log('player :' + player +', Computer:' + computer +', Result: Player wins')
   }
   if(player == computer){
        console.log('Draw, try again')
   }



if (Player == 'rock'){
switch(Computer){
    case 'rock':
        console.log('Draw, try again');
        break;
    case 'paper':
        console.log('Player:"rock", Computer:"paper", Result: "Computer wins"');
        break;
    case 'scissors':
        console.log('Player: "rock", Computer: "scissors", Result: "Player wins"');
        break;
    case 'spock':
        console.log('Player:"rock", Computer:"spock", Result: "Computer wins"');
        break;
    case 'lizzard':
        console.log('Player: "rock", Computer: "lizzard", Result: "Player wins"');
        break;
}
}

if(Player == 'paper'){
    switch(Computer){
        case 'rock':
            console.log('Player:"paper", Computer:"rock", Result: "Player wins"');
            break;
        case 'paper':
            console.log('Draw, try again');
            break;
        case 'scissors':
            console.log('Player: "paper", Computer: "scissors", Result: "Computer wins"');
            break;
        case 'spock':
            console.log('Player:"paper", Computer:"spock", Result: "Player wins"');
            break;
        case 'lizzard':
            console.log('Player: "paper", Computer: "lizzard", Result: "Computer wins"');
            break;
    }

    }

    if(Player =='scissors'){
        switch(Computer){
            case 'rock':
                console.log('Player:"scissors", Computer:"rock", Result: "Computer wins"');
                break;
            case 'paper':
                console.log('Player:"scissors", Computer:"paper", Result: "Player wins"');
                break;
            case 'scissors':
                break;
                console.log('Draw, try again');
                break;
            case 'spock':
                console.log('Player:"scissors", Computer:"spock", Result: "Computer wins"');
                break;
            case 'lizzard':
                console.log('Player: "scissors", Computer: "lizzard", Result: "Player wins"');
                break;
        }
        }


*/ 