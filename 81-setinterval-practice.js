const hour = document.querySelector("#clock li:nth-child(1)");
const min = document.querySelector("#clock li:nth-child(3)");
const sec = document.querySelector("#clock li:nth-child(2)");

const tick = () => {
  const date = new Date();
  hour.innerText = date.getHours();
  min.innerText = date.getMinutes();

  sec.classList.toggle("hidden");

  hour = hour.toString().length == 1 ? "0" + hour : hour;
  min = min.toString().length == 1 ? "0" + min : min;

  hour.innerText = hour;
  min.innerText = min;
};

setInterval(tick, 1000);
