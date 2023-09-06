const objs = {
  hour: document.querySelector(".clock .hour"),
  minute: document.querySelector(".clock .minute"),
  second: document.querySelector(".clock .second"),
};

const setDate = () => {
  const now = new Date();

  const getHours = now.getHours();
  const getMinutes = now.getMinutes();
  const getSeconds = now.getSeconds();

  const secondDegree = (getSeconds / 60) * 360;
  const minuteDegree = (getMinutes / 60) * 360;
  const hourDegree = (getHours / 12) * 360;

  objs.second.style.transform = `rotate(${secondDegree}deg)`;
  objs.minute.style.transform = `rotate(${minuteDegree}deg)`;
  objs.hour.style.transform = `rotate(${hourDegree}deg)`;
};

setInterval(setDate, 1000);
