const main = document.getElementById('main')
const send = document.getElementById('knapp')
const box = document.getElementById('chat-box')

send.addEventListener('click',function(e){
    e.preventDefault()
    const text = document.getElementById('text')
    console.log(text.value);
    
})

main.addEventListener('submit',function(e){
    e.preventDefault()

let psw = document.getElementById('psw')    
let uname = document.getElementById('uname')
box.hidden = false
main.hidden = true

console.log(uname.value);
console.log(psw.value);
})