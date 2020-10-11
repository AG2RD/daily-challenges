"use strict";

window.addEventListener('load', function () {
  pomodoro();
});

function pomodoro() {
  const workDurationInMin = 15;
  const pauseDurationInMin = 5;
  let intervalId;
  let cpt = workDurationInMin * 60;
  initCountdownView();

  document.getElementById('play').addEventListener("click", () => start(cpt));

  function initCountdownView() {
    document.getElementById('min').innerHTML = workDurationInMin + "";
    document.getElementById('sec').innerHTML = "00";
  }

  function start(currentCpt) {
    console.log('pomodoro start');
    intervalId = setInterval(() => {
      cpt = --currentCpt;
      document.getElementById('min').innerHTML = (currentCpt > 0 ? Math.floor(cpt / 60) : 15) + "";
      const totSec = currentCpt % 60;
      document.getElementById('sec').innerHTML = totSec < 10 ? "0" + totSec : totSec + "";
    }, 1000);
    return true;
  }

  function pause() {
    window.clearInterval(intervalId);
  }

  function reset() {
    initCountdownView();
  }

};