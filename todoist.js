function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

const today = new Date();
const month = today.toLocaleString('en', { month: 'long' });
const year = today.toLocaleString('en', { year: 'numeric' });
const day = today.toLocaleString('en', { day: 'numeric' });

const week = getWeekNumber(today);

const elementDate = document.getElementById("currentDate");
elementDate.textContent = "Date: " + month + " " + day + ", " + year;

const elementWeek = document.getElementById("currentWeek");
elementWeek.textContent = "Week: " + week;

const elementMonth = document.getElementById("currentMonth");
elementMonth.textContent = "Month: " + month;

///////////////////////////////////////////////

const monthItemsContent = document.getElementById("monthItems");
const weekItemsContent = document.getElementById("weekItems");
const dateItemsContent = document.getElementById("dateItems");

const monthItemTemplate = document.getElementById("monthItemTemplate");
const weekItemTemplate = document.getElementById("weekItemTemplate");
const dateItemTemplate = document.getElementById("dateItemTemplate");

const addMonthButton = document.getElementById("addMonth");
const addWeekButton = document.getElementById("addWeek");
const addDateButton = document.getElementById("addDate");

addMonthButton.addEventListener('click', function () {
    const clonedMonthTemplate = monthItemTemplate.content.cloneNode(true);
    monthItemsContent.appendChild(clonedMonthTemplate);
});

addWeekButton.addEventListener('click', function () {
    const clonedWeekTemplate = weekItemTemplate.content.cloneNode(true);
    weekItemsContent.appendChild(clonedWeekTemplate);
});

addDateButton.addEventListener('click', function () {
    const clonedDateTemplate = dateItemTemplate.content.cloneNode(true);
    dateItemsContent.appendChild(clonedDateTemplate);
});

///////////////////////////////

localStorage.setItem('monthItemTemplate', JSON.stringify(monthItemTemplate.innerHTML));
const retrivedMonth = JSON.parse(localStorage.getItem('monthItemTemplate'));

localStorage.setItem('weekItemTemplate', JSON.stringify(weekItemTemplate.innerHTML));
const retrivedWeek = JSON.parse(localStorage.getItem('weekItemTemplate'));
if (retrivedWeek !== null) {
    weekItemTemplate.innerHTML = retrivedWeek;
}
console.log('this is a item: ', weekItemTemplate);
console.log('this is a item: ', retrivedWeek);

localStorage.setItem('dateItemTemplate', JSON.stringify(dateItemTemplate.innerHTML));
const retrivedDate = JSON.parse(localStorage.getItem('dateItemTemplate'));
if (retrivedDate !== null) {
    dateItemTemplate.innerHTML = retrivedDate;
}



