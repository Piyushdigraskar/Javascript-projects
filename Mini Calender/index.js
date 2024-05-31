const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumberEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');

const date = new Date();

const month = date.getMonth();
const datenum = date.getDate();
const year = date.getFullYear();
const day = date.getDay();

monthNameEl.innerText = date.toLocaleString("en", {
    month: "long"
});
dayNumberEl.innerText = datenum;
dayNameEl.innerText = date.toLocaleString("en", {
    weekday: "long"
});
yearEl.innerText = year;