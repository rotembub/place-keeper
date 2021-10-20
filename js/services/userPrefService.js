'use strict'

function saveUserPref(userPref) {
    saveToStorage('userPref', userPref);
}

function getUserPref() {
    return loadFromStorage('userPref');
}