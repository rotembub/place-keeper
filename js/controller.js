'use strict'


function checkUserPref() {
    var userPref = getUserPref();
    if (!userPref) return;
    else {
        renderUserPref(userPref);
        renderForecast();
    }
}

function onSetUserPref(ev) {
    ev.preventDefault();
    const backGroundColor = document.querySelector('[name=background-color]').value;
    const textColor = document.querySelector('[name=text-color]').value;
    const birthDate = document.querySelector('[name=birth-date]').value;
    const email = document.querySelector('[name=email]').value;
    const age = document.querySelector('[name=age').value;
    var userPref = {
        backGroundColor,
        textColor,
        birthDate,
        email,
        age
    }
    saveUserPref(userPref);
    renderUserPref(userPref);
}

function renderUserPref(userPref) {
    document.querySelector('body').style.backgroundColor = userPref.backGroundColor;
    document.querySelector('body').style.color = userPref.textColor;
}



function renderForecast() {
    var elHeader = document.querySelector('.forecast');
    if (elHeader) elHeader.innerText = getRandomForecast();
}


function checkAge() {
    var elAge = document.getElementById('age');
    var date = document.querySelector('[name=birth-date]').value;
    var age = document.querySelector('[name=age').value;

    var dateAge = (new Date().getFullYear()) - date.split('/').pop();
    console.log(dateAge);
    console.log(age);
    if (parseInt(age) !== dateAge) elAge.setCustomValidity("Age and Birth dont match");
    else elAge.setCustomValidity("");
}