import myJson from "./data.json" assert { type: "json" };

console.log(myJson);

const dailyBtn = document.querySelector(".timeDashBoard__dailyBtn");
const weeklyBtn = document.querySelector(".timeDashBoard__weeklyBtn");
const monthlyBtn = document.querySelector(".timeDashBoard__monthlyBtn");

const workCurrentHour = document.querySelector(".timeDashBoard__hours.work");
const playCurrentHour = document.querySelector(".timeDashBoard__hours.play");
const studyCurrentHour = document.querySelector(".timeDashBoard__hours.study");
const exerciseCurrentHour = document.querySelector(
  ".timeDashBoard__hours.exercise"
);
const socialCurrentHour = document.querySelector(
  ".timeDashBoard__hours.social"
);
const selfCareCurrentHour = document.querySelector(
  ".timeDashBoard__hours.selfCare"
);

const workpreviousHour = document.querySelector(
  ".timeDashBoard__previousHours.work"
);
const playpreviousHour = document.querySelector(
  ".timeDashBoard__previousHours.play"
);
const studypreviousHour = document.querySelector(
  ".timeDashBoard__previousHours.study"
);
const exercisepreviousHour = document.querySelector(
  ".timeDashBoard__previousHours.exercise"
);
const socialpreviousHour = document.querySelector(
  ".timeDashBoard__previousHours.social"
);
const selfCarepreviousHourr = document.querySelector(
  ".timeDashBoard__previousHours.selfCare"
);

dailyBtn.addEventListener("click", () => {
  workCurrentHour.textContent = `${myJson[0].timeframes.daily.current}hrs`;
  workpreviousHour.textContent = `${myJson[0].timeframes.daily.previous}hrs`;
  playCurrentHour.textContent = `${myJson[1].timeframes.daily.current}hrs`;
  playpreviousHour.textContent = `${myJson[1].timeframes.daily.previous}hrs`;
  studyCurrentHour.textContent = `${myJson[2].timeframes.daily.current}hrs`;
  studypreviousHour.textContent = `${myJson[2].timeframes.daily.previous}hrs`;
  exerciseCurrentHour.textContent = `${myJson[3].timeframes.daily.current}hrs`;
  exercisepreviousHour.textContent = `${myJson[3].timeframes.daily.previous}hrs`;
  socialCurrentHour.textContent = `${myJson[4].timeframes.daily.current}hrs`;
  socialpreviousHour.textContent = `${myJson[4].timeframes.daily.previous}hrs`;
  selfCareCurrentHour.textContent = `${myJson[5].timeframes.daily.current}hrs`;
  selfCarepreviousHourr.textContent = `${myJson[5].timeframes.daily.previous}hrs`;
});

weeklyBtn.addEventListener("click", () => {
  workCurrentHour.textContent = `${myJson[0].timeframes.weekly.current}hrs`;
  workpreviousHour.textContent = `${myJson[0].timeframes.weekly.previous}hrs`;
  playCurrentHour.textContent = `${myJson[1].timeframes.weekly.current}hrs`;
  playpreviousHour.textContent = `${myJson[1].timeframes.weekly.previous}hrs`;
  studyCurrentHour.textContent = `${myJson[2].timeframes.weekly.current}hrs`;
  studypreviousHour.textContent = `${myJson[2].timeframes.weekly.previous}hrs`;
  exerciseCurrentHour.textContent = `${myJson[3].timeframes.weekly.current}hrs`;
  exercisepreviousHour.textContent = `${myJson[3].timeframes.weekly.previous}hrs`;
  socialCurrentHour.textContent = `${myJson[4].timeframes.weekly.current}hrs`;
  socialpreviousHour.textContent = `${myJson[4].timeframes.weekly.previous}hrs`;
  selfCareCurrentHour.textContent = `${myJson[5].timeframes.weekly.current}hrs`;
  selfCarepreviousHourr.textContent = `${myJson[5].timeframes.weekly.previous}hrs`;
});

monthlyBtn.addEventListener("click", () => {
  workCurrentHour.textContent = `${myJson[0].timeframes.monthly.current}hrs`;
  workpreviousHour.textContent = `${myJson[0].timeframes.monthly.previous}hrs`;
  playCurrentHour.textContent = `${myJson[1].timeframes.monthly.current}hrs`;
  playpreviousHour.textContent = `${myJson[1].timeframes.monthly.previous}hrs`;
  studyCurrentHour.textContent = `${myJson[2].timeframes.monthly.current}hrs`;
  studypreviousHour.textContent = `${myJson[2].timeframes.monthly.previous}hrs`;
  exerciseCurrentHour.textContent = `${myJson[3].timeframes.monthly.current}hrs`;
  exercisepreviousHour.textContent = `${myJson[3].timeframes.monthly.previous}hrs`;
  socialCurrentHour.textContent = `${myJson[4].timeframes.monthly.current}hrs`;
  socialpreviousHour.textContent = `${myJson[4].timeframes.monthly.previous}hrs`;
  selfCareCurrentHour.textContent = `${myJson[5].timeframes.monthly.current}hrs`;
  selfCarepreviousHourr.textContent = `${myJson[5].timeframes.monthly.previous}hrs`;
});
