const main = document.getElementById('main')
const send = document.getElementById('knapp')
const box = document.getElementById('chat-box')
const chat = document.getElementById('chat')

let users = []

send.addEventListener('click',function(e){
    e.preventDefault()
    const text = document.getElementById('text')
    let showText = document.createElement('li')
    showText.innerHTML = text.value + "    " + users
    chat.appendChild(showText)
    console.log(users);
    
    
})



main.addEventListener('submit',function(e){
    e.preventDefault()

let psw = document.getElementById('psw')    
let uname = document.getElementById('uname')
box.hidden = false
main.hidden = true

users.push(uname.value)
console.log(uname.value);
console.log(psw.value);
})