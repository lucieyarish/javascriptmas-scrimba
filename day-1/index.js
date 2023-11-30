const countdownContainer = document.getElementById('countdown-container');

const renderCountdown = () => {
  const timeRemaining = calculateRemainingTime();

  countdownContainer.innerHTML = `
        <div class="flex">
            <p>${timeRemaining.days}</p>
            <p class="text-s">days</p>
        <div>
        <div class="flex">
            <p>${timeRemaining.hours}</p>
            <p class="text-s">hours</p>
        <div>
        <div class="flex">
            <p>${timeRemaining.minutes}</p>
            <p class="text-s">minutes</p>
        <div>
        <div class="flex">
            <p>${timeRemaining.seconds}</p>
            <p class="text-s">seconds</p>
        <div>
    `;
};

const calculateRemainingTime = () => {
  const date = new Date();
  const countdownEndDate = new Date(2023, 12, 25);
  let difference = new Date(countdownEndDate.getTime() - date.getTime());

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

renderCountdown();

window.setTimeout(function () {
  window.location.reload();
}, 5000);
