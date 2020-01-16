function calcAngal(hour, minute) {
    const MINUTES_PER_HOUR = 60;
    const DEGREE_PER_MINUTES = 360 / MINUTES_PER_HOUR;
    const DEGREE_PER_HOUR = 360 / 12;

    let minutesAngal = minute * DEGREE_PER_MINUTES;
    let hourAngal = hour * DEGREE_PER_HOUR + (minute / MINUTES_PER_HOUR) * DEGREE_PER_HOUR;
    let diff = Math.abs(minutesAngal - hourAngal);


    if (diff > 180) {
        return 360 - diff;
    }
    return diff;


}


console.log(calcAngal(3, 40));
