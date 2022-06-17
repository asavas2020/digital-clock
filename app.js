const time = document.querySelector(".time");

const digitalClock = () =>{
    let dateTime = new Date();
    let clock = dateTime.toLocaleTimeString();
    time.innerText = clock;
}

setInterval(digitalClock,1000)