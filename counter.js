// counterdown timer app

const months = [
    'jan',
    'feb',
    'march',
    'april',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec'];

const weekdays = ['Sun',
    'Mon',
    'Tue',
    'Wed',
    'thurs',
    'fri',
    'sat'];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
// create a nodelist, target all h4 with same class name
const items = document.querySelectorAll('.deadline-format h4');
//add specific date-add them as values

// ensure current date is in the future for counter to run.
let tempYear = new Date().getFullYear();
let tempMonth = new Date().getMonth();
let tempDate = new Date().getDate();


// console.log(items);
// let futureDate = new Date(2022, 13, 13, 5, 30, 0);
// console.log(futureDate);
// use date constructor to create dates
const futureDate = new Date(tempYear, tempMonth, tempDate + 10, 6, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// let month = futureDate.getDate();
// month = months[month];

let month = months[futureDate.getMonth()];
let date = futureDate.getDate();
let day = weekdays[futureDate.getDay()];

// console.log(typeof minutes );

// updates html content with date
giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year}, ${hours}:${minutes}pm`;

//future ime in ms;urr time must be < future date then - difference
const futureTime = futureDate.getTime();
// console.log(futureTime + ' future Time');

//func shows time remaining
getRemainingTime = () => {
    const today = new Date().getTime();
    const timeRemaining = futureTime - today;
    // console.log(t + ' t - time left');


    //1s = 1000ms
    //1m = 60s
    //1hr = 60min
    //1d = 24hr
    //values in ms, calculate time,
    const oneDay = 24 * 60 * 60 * 1000;//these values neverchange
    // console.log(oneDay + ' one day');
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate values, divide remainder
    let days = Math.floor(timeRemaining / oneDay); // time in
    // console.log(days + ' one day ms');
    // get remaining time left
    let hours = Math.floor((timeRemaining % oneDay) / oneHour);
    // console.log(hours + ' hours');
    let minutes = Math.floor((timeRemaining % oneHour) / oneMinute);
    let seconds = Math.floor((timeRemaining % oneMinute) / 1000);
    // /set values array;
    const values = [days, hours, minutes, seconds];

    // add 0 to counter if < 10;
    format = (item) => {
        if (item < 10) {
            return item = `0${item}`;
        }
        return item;
    };
    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });
    // when time expires 
    if (timeRemaining < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h3 class="expired">sorry, this giveaway has expired</h3>`;
    }
};

// countdown every second
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

// current progress 5:51]

