const christmasCountdownContainer = document.getElementById(
  'christmas-countdown-container'
);
const newYearCountdownContainer = document.getElementById(
  'new-year-countdown-container'
);

const christmasDay = new Date(2023, 11, 25);
const newYear = new Date(2023, 11, 31);

const renderCountdown = (container, timeRemaining) => {
  container.innerHTML = `
        <div>
            <p>${timeRemaining.days}</p>
            <p class="text-s">days</p>
        </div>
        <div>
            <p>${timeRemaining.hours}</p>
            <p class="text-s">hours</p>
        </div>
        <div>
            <p>${timeRemaining.minutes}</p>
            <p class="text-s">minutes</p>
        </div>
        <div>
            <p>${timeRemaining.seconds}</p>
            <p class="text-s">seconds</p>
        </div>
    `;
};

const getRemainingTime = (countdownEnd) => {
  const date = new Date();
  let difference = new Date(countdownEnd.getTime() - date.getTime());

  let days = difference.getUTCDate() - 1;
  let hours = difference.getHours();
  let minutes = difference.getMinutes();
  let seconds = difference.getSeconds();

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};

const renderCountdowns = () => {
  const christmasRemainingTime = getRemainingTime(christmasDay);
  const newYearRemainingTime = getRemainingTime(newYear);
  renderCountdown(christmasCountdownContainer, christmasRemainingTime);
  renderCountdown(newYearCountdownContainer, newYearRemainingTime);
};

setInterval(() => {
  renderCountdowns();
}, 100);
