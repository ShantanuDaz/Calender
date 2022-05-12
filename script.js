var monthShown = false;
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

const getCalender = (
  month = currentMonth,
  year = currentYear,
  change = false
) => {
  const calender = document.getElementById("calender");
  if (calender.classList[1] === "hide" || change) {
    if (monthShown === false || change) {
      const noOfDays = new Date(year, month + 1, 0).getDate();
      const day = new Date(year, month, 1).getDay();
      createCalender(noOfDays, day, month, year, calender);
      monthShown = true;
    }
    if (!change) calender.classList.toggle("hide");
  } else {
    calender.classList.toggle("hide");
  }
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const createCalender = (noOfDays, day, month, year, calenderId) => {
  let weekDays = 1;
  let weekDay = 1;
  const calender = calenderId;
  document.getElementById("month").innerHTML = `${months[month]} ${year}`;
  let days = calender.children[1];
  while (weekDay <= noOfDays || day > 0) {
    if (weekDays === 1) {
      let row = document.createElement("tr");
      days.appendChild(row);
    }
    if (day > 0) {
      let date = document.createElement("td");
      date.innerHTML = " ";
      days.lastChild.appendChild(date);
      day--;
    } else {
      let date = document.createElement("td");
      date.innerHTML = weekDay;
      days.lastChild.appendChild(date);
      weekDay++;
    }
    if (weekDays === 7) {
      weekDays = 1;
    } else {
      weekDays++;
    }
  }
};

let FBMonth = new Date().getMonth();
let FBYear = new Date().getFullYear();

const goAheadOrBackward = (direction) => {
  if (direction === "forward") {
    if (FBMonth === 11) {
      FBMonth = 0;
      FBYear++;
    } else FBMonth++;
  } else {
    if (FBMonth === 0) {
      FBMonth = 11;
      FBYear--;
    } else FBMonth--;
  }
  const calender = document.getElementById("calender");
  calender.children[1].innerHTML = "";
  getCalender(FBMonth, FBYear, true);
};
