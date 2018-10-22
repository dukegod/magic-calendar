const formatDate = (year, month, day) => {
    let y = year;
    let m = month;
    if (m < 10) m = '0' + m;
    let d = day;
    if (d < 10) d = '0' + d;
    return y + '-' + m + '-' + d;
};

export { formatDate };
