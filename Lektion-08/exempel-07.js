/**
 * Project: Show Date and Time
 * Date: 2020-12-16
 * Created by Mahmud Al Hakim
 * Copyright: MIT
 */

let btnDate = document.getElementById('btnDate');
console.log(btnDate);

btnDate.addEventListener('click' , displayDate);
btnDate.addEventListener('click' , displayTime);

/**
 * Display date
 */
function displayDate(){
    console.log("Inne i funktionen displayDate");

    let date = document.getElementById('date');
    console.log(date);

    date.innerHTML = new Date().toLocaleDateString();

}

/**
 * Display time
 */
function displayTime(){

    let time = document.getElementById('time');
    time.innerHTML = new Date().toLocaleTimeString();

}
