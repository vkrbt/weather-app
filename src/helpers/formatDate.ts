export function formatDate(date: number) {
    let diff = Date.now() - date;

    if (diff < 1000) {
        return 'right now';
    }

    let sec = Math.floor(diff / 1000);

    if (sec < 60) {
        return sec + ' sec. ago';
    }

    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + ' min. ago';
    }

    let dateObject = new Date(date);
    let dateData = [
        '0' + dateObject.getDate(),
        '0' + (dateObject.getMonth() + 1),
        '' + dateObject.getFullYear(),
        '0' + dateObject.getHours(),
        '0' + dateObject.getMinutes()
    ].map(component => component.slice(-2));

    return dateData.slice(0, 3).join('.') + ' ' + dateData.slice(3).join(':');
}
