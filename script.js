var monthShown = false;
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const currentDate = new Date().getDate();
var selectedDateEl = null;
var selectedDate = `${currentDate}-${currentMonth + 1}-${currentYear}`;
const getcalendar = (
  month = currentMonth,
  year = currentYear,
  change = false
) => {
  const calendar = document.getElementById("calendar");
  if (calendar.classList[1] === "hide" || change) {
    if (monthShown === false || change) {
      const noOfDays = new Date(year, month + 1, 0).getDate();
      const day = new Date(year, month, 1).getDay();
      createcalendar(noOfDays, day, month, year, calendar);
      monthShown = true;
    }
    if (!change) calendar.classList.toggle("hide");
  } else {
    calendar.classList.toggle("hide");
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

const createcalendar = (noOfDays, day, month, year, calendarId) => {
  let weekDays = 1;
  let weekDay = 1;
  const calendar = calendarId;
  calendar.children[1].innerHTML = "";
  document.getElementById("month").innerHTML = `${months[month]} ${year}`;
  let days = calendar.children[1];
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
      let dateValue = `${weekDay}-${month + 1}-${year}`;
      if (dateValue === `${currentDate}-${currentMonth + 1}-${currentYear}`) {
        date.classList.add("selectedDate");
        selectedDateEl = date;
        selectedDate = dateValue;
      }
      date.addEventListener("click", () => {
        setDate(dateValue, date);
      });
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
  getcalendar(FBMonth, FBYear, true);
};
const setDate = (dateValue = "", date) => {
  if (dateValue === "") {
    document.getElementById("date").innerHTML = selectedDate;
  } else {
    document.getElementById("date").innerHTML = dateValue;
  }
  dateValue !== "" && selectedDateEl.classList.remove("selectedDate");
  dateValue !== "" && date.classList.add("selectedDate");
  selectedDateEl = date;
  selectedDate = dateValue;
};
setDate();
