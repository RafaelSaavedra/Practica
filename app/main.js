
const loadInitialTemplate = () => {
    const template = `
    <h1> The Rock-paper-scissors-spock-lizard API</h1>
    <form id= "user-form">
        <div>
            <label>Name</label>
            <Input name = "name" />
        </div>
        <div>
            <label>Option</label>
            <Input name = "option" />
        </div>
        <div>
            <label>Result</label>
            <Input name = "result" />
        </div>

        <button type ="submit">Enviar</button>

    </form>
    <ul id="user-list"></ul>
    <ul id="user-result"></ul>
    `
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = template
}

const getUsers = async () => {
    const response = await fetch('/play')
    const play = await response.json()
    console.log(play) //AQUI OBTIENES NOMBRE, OPCIÓN Y ID YA REGISTRADO EN MONGO
    const template = user => `
    <li>
        ${user.name} ${user.option} ${user.result}<button data-id="${user._id}">Eliminar</button>
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

const getUsers1 = async () => {
    const response = await fetch('/play')
    const play = await response.json()
    console.log(play) //AQUI OBTIENES NOMBRE, OPCIÓN Y ID YA REGISTRADO EN MONGO
    const template = user => `
    <li>
        ${user.name} ${user.option} ${user.result}<button data-id="${user._id}">Eliminar</button>
    </li>
    `

    const userList = document.getElementById('user-result')
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
    const formData = new FormData(userForm) 
    //console.log(formData.get('name')) AQUI OBTIENES NOMBRE
    //console.log(formData.get('option')) AQUI ONTIENES OPCION

let player = formData.get('option')
//let computer = formData.get('result')

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

{
    alert ('player :' + player +', Computer :' + computer +", Result : Computer wins.")
    
    getUsers1()
}

else if(player == computer)

{alert ('player :' + player +', Computer :' + computer +", Result : Draw, try again.")
    getUsers1()
}

else if(player !== ('rock' || 'paper' ||'scissors' || 'spock' || 'lizzard'))
{

alert( 'no MAMEIS : no existe esa opción')
getUsers1()

}

else

{alert ('player :' + player +', Computer :' + computer +", Result : Player wins.")
getUsers1()
}
    
   


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
getUsers1()
}