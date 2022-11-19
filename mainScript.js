const btn = document.getElementById('startbutton')

btn.addEventListener('click', () => {
    console.log("test")
    if (btn.classList == 'On') {
        btn.classList.replace('On', 'Off')
        btn.innerHTML = 'OFF'
    } else {
        console.log("test1")
        btn.classList.replace('Off', 'On')
        btn.innerHTML = 'ON'
    }
})
