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
        <button type ="submit">Enviar</button>
    </form>
    <ul id="user-list"></ul>
    `
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = template
}

const getUsers = async () => {
    const response = await fetch('/users')
    const users = await response.json()
    //console.log(users) AQUI OBTIENES NOMBRE, OPCIÓN Y ID YA REGISTRADO EN MONGO
    const template = user => `
    <li>
        ${user.name} ${user.option} <button data-id="${user._id}">Eliminar</button>
    </li>
    `

    const userList = document.getElementById('user-list')
    userList.innerHTML = users.map( user => template(user)).join('')

    users.forEach(user => {
        const userNode = document.querySelector(`[data-id="${user._id}"]`)
        userNode.onclick = async e => {
            await fetch(`/users/${user._id}`, {
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
    const data = Object.fromEntries(formData.entries())
    //console.log(data) OBJETO JSON CON NOMBRE Y OPCION
    await fetch('/users', {
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
}