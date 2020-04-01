const CLOCK = document.querySelector(".js-clock");

function showClock() {
    const DATE = new Date();

    const HOUR = DATE.getHours();
    const MIN = DATE.getMinutes();
    const SEC = DATE.getSeconds();

    CLOCK.innerText =
     `${ HOUR < 10? `0${HOUR}` : HOUR} : ${ MIN < 10? `0${MIN}` : MIN} : ${ SEC < 10? `0${SEC}` : SEC}`;
}

function init() {
    setInterval(showClock, 1000);
}

init();