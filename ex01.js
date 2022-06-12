function load() {
    var message = window.document.getElementById("msg")
    var myPhoto = window.document.getElementById("image")
    var dateNow = new Date()
    var hourNow = dateNow.getHours()
    var minuteNow = dateNow.getMinutes()
    var secondNow = dateNow.getSeconds()
    
    hourNow = ("0" + hourNow).slice(-2)
    minuteNow = ("0" + minuteNow).slice(-2)
    secondNow = ("0" + secondNow).slice(-2)

    setTimeout(load, 1000)

    message.innerHTML = `Current time<br/> ${hourNow}:${minuteNow}:${secondNow}`
    if(hourNow >= 0 && hourNow < 12) {
        myPhoto.src = 'day.png'
        document.body.style.background = '#e2cd9f'
    } else if(hourNow >= 12 && hourNow < 18) {
        myPhoto.src = 'noon.png'
        document.body.style.background = '#b9846f'
    } else {
        myPhoto.src = 'night.png'
        document.body.style.background = '#515154'
    }
}
