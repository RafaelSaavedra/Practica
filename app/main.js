
const loadInitialTemplate = () => {
    const template = `
    <h1 class="caja"> The Rock-paper-scissors-spock-lizard API</h1>
    <form id= "user-form">
        <div>
            <label class="etiqueta">Players´ Name :  </label>
            <Input class="boton" name = "name" />
        </div>
        <br/>
        <div>
            <label class="etiqueta">Player´s Option : </label>
            <Input class="boton" name = "option" />
        </div>
       <br/>

        <button class="boton" type ="submit">Enviar</button>

    </form>
    <ul id="user-list"></ul>
    <ul id="result"></ul>
    <ul id="prueba"></ul>
    `
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = template
}



const getUsers = async () => {
    const response = await fetch('/play')
    const play = await response.json()
    console.log("de getusers: nombre, opción e id",play)// De getUsers AQUI OBTIENES NOMBRE, OPCIÓN Y ID YA REGISTRADO EN MONGO
    const template = user => `
    <li>
        ${user.name} Escogió :  ${user.option} <button class="boton" data-id="${user._id}">Eliminar</button>
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


    let nombre = ""
    let opcion = ""
    let computadora = ""
    let resultaado = ""

    let pley = {name: nombre, player: opcion, computer: computadora, result: resultaado}

const getUsuarios = () => {
    console.log("de get usuarios**: nombre, opción y id", pley)// De getUsuarios  
    //pley.computer = 'Resultados : TARO , TARO'
    console.log(pley.computer)

    console.log("¿getUsuarios está leyendo aqui?", computadora)
    console.log("¿getUsuarios esta leyendo aqui?" , nombre)
    const template = `
    <li>
        Nombre usuario : ${pley.name}<br/> 
        Usuario escogió :  ${pley.player}<br/>
        Computadora escogió : ${pley.computer}<br/>
        Resultado del juego : ${pley.result}<br/>
        <button class="boton" data-id="${pley._id}">Eliminar</button>
    </li>
    `
    const userList = document.getElementById('prueba')
    userList.innerHTML = template
}

const getResults = async () => {
    const response = await fetch('/play')
    const play = await response.json()
    console.log("de getResults: nombre, opción e id", play)// De getResults AQUI OBTIENES NOMBRE, OPCIÓN Y ID YA REGISTRADO EN MONGO
    //let user = play
    play.computer = "Results : Tora Tora"
    console.log("¿está leyendo aqui?", computadora)
    console.log("¿esta leyendo aqui?" , nombre)
    const template = user => `
    <li>
       Player name :  ${user.name} <br/>
       Player option : ${user.option} <br/> 
       Computer option : ${play.computer} <br/> 
       Result : ${user.result} <br/> 
       <button class="boton" data-id="${user._id}">Eliminar</button><br/><br/>
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
    console.log("captando de user-form : "+formData.get('name'))// AQUI OBTIENES NOMBRE
    console.log("captando de user-form : "+formData.get('option')) //AQUI ONTIENES OPCION

let player = formData.get('option')
pley.player= formData.get('option')
pley.name= formData.get('name')

//console.log("El jugador escogió :",player)
//console.log ("getUsuarios recibió ?",pley.player = player)
//alert (pley.JSON)

function resultado (){

let rand = Math.floor(Math.random()*11)
if(rand < 3) computer = 'rock'
    else if( rand <5) computer = 'paper'
    else if( rand <7) computer = 'scissors'
    else if( rand <9) computer = 'spock'
    else if( rand <11) computer = 'lizzard'

    pley.computer = computer
   // console.log("La computadora escogió : " ,computer)
    //console.log("getUsuarios recibió ? : ", pley.computer)
   // alert (pley.innerText)

if(player =='rock' && (computer == 'paper' || computer == 'spock')
||player == 'paper' && (computer == 'scissors' || computer == 'lizzard')
||player == 'scissors' && (computer == 'rock' || computer == 'spock')
||player == 'spock' && (computer == 'paper' || computer == 'lizzard')
||player == 'lizzard' && (computer == 'scissors'|| computer == 'rock'))

{
    alert ('player :' + player +', Computer :' + computer +", Result : Computer wins.")
   console.log( "en el juego :",pley.player = player)
    console.log("en el juego :",pley.computer = computer)
    pley.result = "Computer wins"
    alert(pley.result = "Computer wins")
    alert("computer wins")
    getUsuarios()
    alert(pley)
    console.log(pley)
}

else if(player == computer)



{
    alert ('player :' + player +', Computer :' + computer +", Result : Draw, try again.")

    pley.result = "Draw, try again"
    alert(pley.result = "Draw, try again")
    alert("try again")
    getUsuarios()
    alert(pley)
    console.log(pley)
}
/*
else if(player !== ('rock' || 'paper' ||'scissors' || 'spock' || 'lizzard'))
{

alert( 'no MAMEIS : no existe esa opción')

}
*/

else

{
    alert ('player :' + player +', Computer :' + computer +", Result : Player wins.")

    pley.result = "Player wins"
    alert(pley.result="player wins")
    getUsuarios()
    alert(pley)
    console.log(pley)
}


}

console.log("Aquì llama a resultado: ",resultado())


   

    const data = Object.fromEntries(formData.entries())
    console.log("Justo antes de post JSON con nombre y opción",data) //Justo antes de Post : OBJETO JSON CON NOMBRE Y OPCION
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
getUsuarios()

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

/*
const getResults = async () => {
    const response = await fetch('/play')
    const play = await response.json()
    console.log(play)// AQUI OBTIENES NOMBRE, OPCIÓN Y ID YA REGISTRADO EN MONGO
    //let user = play
    play.computer = "tora tora"
    console.log("¿está leyendo aqui?", computer)
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
*/
