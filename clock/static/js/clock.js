const CLOCK = document.querySelector(".js-clock");

function getTime() {
    
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();

  // milliseconds raw data
  const xmasMilli = xmasDay.getTime();
  const nowMilli = now.getTime();
  const timeMilliInterval = xmasMilli - nowMilli;
  
  const MILLI_TO_SEC = 1000;
  const SECONDS_IN_MINUTES = 60;
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;

  const diffDays = Math.floor(timeMilliInterval / (MILLI_TO_SEC * SECONDS_IN_MINUTES * MINUTES_IN_HOUR * HOURS_IN_DAY)); 
  const diffHours = Math.floor(timeMilliInterval / (MILLI_TO_SEC * SECONDS_IN_MINUTES * MINUTES_IN_HOUR) % HOURS_IN_DAY);
  const diffMinutes = Math.floor(timeMilliInterval / (MILLI_TO_SEC * SECONDS_IN_MINUTES) % MINUTES_IN_HOUR);
  const diffSeconds = Math.floor(timeMilliInterval / (MILLI_TO_SEC) % SECONDS_IN_MINUTES);

  console.log(diffDays, diffHours, diffMinutes, diffSeconds);

  let FORMAT =
    `${diffDays < 10 ? `0${diffDays}` : `${diffDays}`}d ` +
    `${diffHours < 10 ? `0${diffHours}` : `${diffHours}`}h ` +
    `${diffMinutes < 10 ? `0${diffMinutes}` : `${diffMinutes}`}m ` +
    `${diffSeconds < 10 ? `0${diffSeconds}` : `${diffSeconds}`}s`;

  TIME_VIEW.innerText = FORMAT;

}

function init() {
  setInterval(getTime, 1000)
}
init();


function init() {
    setInterval(showClock, 1000);
}

init();
