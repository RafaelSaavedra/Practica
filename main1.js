console.log('Chancho feliz PRACTICA-MAIN.JS')
const jugadas = [];
const render = () => {
const game =document.getElementById('Game')
const jugadasTemplate = jugadas.map (jug => '<li>' + jug + '</li>')
game.innerHTML = jugadasTemplate.join('');
const jugan = document.querySelectorAll('#Game li')
jugan.forEach((elemento, i) => {
    elemento.addEventListener('click', () => {
        console.log(jugadas, i)
        elemento.parentNode.removeChild(elemento)
        jugadas.splice(i,1)
        render()
    console.log(jugadas, i)
    })
})

}
//'La API de Piedra-papel-tijeras-fantasma-lagartija'
window.onload = () => {

//console.log("The Rock-paper-scissors-spock-lizard API")
//const parrafo = document.getElementById('valores')
//parrafo.innerHTML = '<li>Piedra</li><li>Papel</li><li>Tijeras</li><li>Spock</li><li>Lagartija</li>'
//console.log (parrafo)

const form = document.getElementById('juego')
form.onsubmit = (e) => {
    e.preventDefault()
const juego = document.getElementById('jugada')
const juegoTexto = juego.value;
juego.value ='';
jugadas.push(juegoTexto)

render()


}
}
