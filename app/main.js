
const loadInitialTemplate = () => {
    const template = `
    <h1> The Rock-paper-scissors-spock-lizard API</h1>
    <form id= "user-form">
        <div>
            <label>Player´s Name :  </label>
            <Input name = "name" />
        </div>
        <br/>
        <div>
            <label>Player´s Option : </label>
            <Input name = "option" />
        </div>
       <br/>

        <button type ="submit">Enviar</button>

    </form>
    <ul id="user-list"></ul>
    <ul id="result"></ul>
    `
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = template
}



const getUsers = async () => {
    const response = await fetch('/play')
    const play = await response.json()
    console.log(play)// AQUI OBTIENES NOMBRE, OPCIÓN Y ID YA REGISTRADO EN MONGO
    const template = user => `
    <li>
        ${user.name} Escogió :  ${user.option} <button data-id="${user._id}">Eliminar</button>
    </li>
    `

    const userList = document.getElementById('user-list')
    userList.innerHTML = play.map( user => template(user)).join('')

    play.forEach(user => {
        const userNode = document.querySelector(`[data-id="${user._id}"]`)
        userNode.onclick = async e => {
            await fetch(`/play/${user._id}`, {
                method: 'DELETE',
            })
            userNode.parentNode.remove()
            //alert('Eliminado con éxito')
        }
    })
}

const getResults = async () => {
    const response = await fetch('/play')
    const play = await response.json()
    console.log(play)// AQUI OBTIENES NOMBRE, OPCIÓN Y ID YA REGISTRADO EN MONGO
    //let user = play
    play.computer = "tora tora"
    //console.log("¿está leyendo aqui?", computer)
    //console.log("¿esta leyendo aqui?" , player)
    const template = user => `
    <li>
       Player name :  ${user.name} <br/> Player option : ${user.option} <br/> Computer option : ${play.computer} <br/> Result : ${user.result} <br/> <button data-id="${user._id}">Eliminar</button><br/><br/>
    </li>
    `

    const userList = document.getElementById('result')
    userList.innerHTML = play.map( user => template(user)).join('')

    play.forEach(user => {
        const userNode = document.querySelector(`[data-id="${user._id}"]`)
        userNode.onclick = async e => {
            await fetch(`/play/${user._id}`, {
                method: 'DELETE',
            })
            userNode.parentNode.remove()
            //alert('Eliminado con éxito')
        }
    })
}
const addFormListener = () => {
    const userForm = document.getElementById('user-form')
    userForm.onsubmit = async (e) => {
    e.preventDefault() 
    const formData = new FormData(userForm) //formmData va a captar todos los datos del formulario que tiene la id:"user-form"
    //console.log(formData.get('name')) AQUI OBTIENES NOMBRE
    //console.log(formData.get('option')) AQUI ONTIENES OPCION

let player = formData.get('option')
console.log("El jugador escogió :",player)
//let computer = formData.get('result')

let rand = Math.floor(Math.random()*11)
if(rand < 3) computer = 'rock'
    else if( rand <5) computer = 'paper'
    else if( rand <7) computer = 'scissors'
    else if( rand <9) computer = 'spock'
    else if( rand <11) computer = 'lizzard'

    console.log("La computadora escogió : " ,computer)

if(player =='rock' && (computer == 'paper' || computer == 'spock')
||player == 'paper' && (computer == 'scissors' || computer == 'lizzard')
||player == 'scissors' && (computer == 'rock' || computer == 'spock')
||player == 'spock' && (computer == 'paper' || computer == 'lizzard')
||player == 'lizzard' && (computer == 'scissors'|| computer == 'rock'))

{
    alert ('player :' + player +', Computer :' + computer +", Result : Computer wins.")

}

else if(player == computer)

{alert ('player :' + player +', Computer :' + computer +", Result : Draw, try again.")}

else if(player !== ('rock' || 'paper' ||'scissors' || 'spock' || 'lizzard'))
{

alert( 'no MAMEIS : no existe esa opción')

}

else

{alert ('player :' + player +', Computer :' + computer +", Result : Player wins.")}
    
   


    const data = Object.fromEntries(formData.entries())
    console.log(data) //OBJETO JSON CON NOMBRE Y OPCION
    await fetch('/play', {
       method : 'POST',
       body: JSON.stringify(data),
       headers :{
        'Content-Type' : 'application/json'
       } 
    })
    userForm.reset()
    getUsers()
    }
}

window.onload = () => {
loadInitialTemplate ()
addFormListener()
getUsers()
getResults()
}
/*
<div>
<label>Computer</label>
<Input name = "computer" />
</div>
<div>
<label>Result</label>
<Input name = "result" />
</div>
*/