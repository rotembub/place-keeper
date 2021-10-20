'use strict'

const gForecasts = ['This will be a very productive year for you!', 'Seems like you will finally achieve that goal of yours', 'Things looking bright ahead'];

function getRandomForecast() {
    return gForecasts[getRandomIntInclusive(0, 2)];
}