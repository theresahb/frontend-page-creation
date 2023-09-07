const dayEl = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const timeEl = document.querySelector('[data-testid="currentUTCTime"]');

//day of the week
const currentDay = () => {
    const day = new Date().getUTCDay();
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayEl.textContent = daysOfTheWeek[day];
}

//time
const currentTime = () => {
    const time = new Date();
    const UTCTime = time.toUTCString();
    timeEl.textContent = UTCTime;
}

currentDay()
currentTime()
