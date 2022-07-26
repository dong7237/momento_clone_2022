const clock = document.querySelector('.clock')

function clockf() {
    const time = new Date()
    const hour = String(time.getHours()).padStart('2', 0)
    const minute = String(time.getMinutes()).padStart('2', 0)
    const second = String(time.getSeconds()).padStart('2', 0)
    clock.innerText = `${hour}:${minute}:${second}`
}
setInterval(clockf) 