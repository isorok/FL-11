function formatTime(value) {
    let minutes = 0,
        hours = 0,
        days = 0;
    days = (value - value % 1440) / 1440;
    hours = ((value - days * 1440) - ((value - days * 1440) % 60)) / 60;
    minutes = value - days * 1440 - hours * 60;
    return days + ' day(s) ' + hours + ' hours(s) ' + minutes + ' minute(s).'
}
formatTime(360);