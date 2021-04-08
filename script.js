const days = document.getElementById("days");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const seconds = document.getElementById("seconds");
const date = "15 Mar 2022";
const goal = new Date(date);

function counter() {
  const today = new Date();
  time = goal - today;
  time = Math.floor(time / 1000);
  let second = Math.floor(time % 60);
  let minute = Math.floor((time / 60) % 60);
  let hour = Math.floor((time / 3600) % 24);
  let day = Math.floor(time / 3600 / 24);
  if (second < 10) seconds.innerHTML = `0${second}`;
  else seconds.innerHTML = second;
  if (minute < 10) minutes.innerHTML = `0${minute}`;
  else minutes.innerHTML = minute;
  if (hour < 10) hours.innerHTML = `0${hour}`;
  else hours.innerHTML = hour;
  if (day < 10) days.innerHTML = `0${day}`;
  else days.innerHTML = day;
}

counter();

setInterval(counter, 1000);
