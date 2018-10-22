// 上个星期
function pickWeekPre() {
    const d = this.weekDays[0].date;
    d.setDate(d.getDate() - 6);
    this.initWeeks(d);
}

// 下个星期
function pickWeekNext() {
    const d = this.weekDays[6].date;
    d.setDate(d.getDate() + 7);
    this.initWeeks(d);
}

function initWeeks(date) {
    let now;
    if (date) {
        now = new Date(date);
    } else {
        now = new Date();
    }
    this.currentDay = now.getDate(); // 今日日期 几号
    this.currentYear = now.getFullYear(); // 当前年份
    this.currentMonth = now.getMonth() + 1; // 当前月份
    this.currentWeek = now.getDay(); // 1...6,0  // 星期几
    if (this.currentWeek === 0) {
        this.currentWeek = 7;
    }
    const str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
    ); // 今日日期 年-月-日
    this.weekDays.length = 0;
    // 今天是周日，放在第一行第7个位置，前面6个 这里默认显示一周，如果需要显示一个月，则第二个循环为 i<= 35- this.currentWeek
    /* eslint-disabled */
    for (let i = this.currentWeek; i >= 0; i -= 1) {
        const d = new Date(str);
        d.setDate(d.getDate() - i);

        let dayobject = {
            date: '',
            isToday: false,
            color: '',
            isDayAfter: false,
            isDayBefore: true
        };
        if (
            d.getFullYear() === new Date().getFullYear() &&
            d.getMonth() === new Date().getMonth() &&
            d.getDate() === new Date().getDate()
        ) {
            dayobject.date = d;
            dayobject.isToday = true;
        } else {
            dayobject.date = d;
        }
        this.weekDays.push(dayobject);
    }
    for (let i = 1; i < 7 - this.currentWeek; i += 1) {
        const d = new Date(str);
        d.setDate(d.getDate() + i);

        let dayobject = {
            date: '',
            isToday: false,
            color: '',
            isDayAfter: true,
            isDayBefore: false
        };
        if (
            d.getFullYear() === new Date().getFullYear() &&
            d.getMonth() === new Date().getMonth() &&
            d.getDate() === new Date().getDate()
        ) {
            dayobject.date = d;
            dayobject.isToday = true;
        } else {
            dayobject.date = d;
        }
        this.weekDays.push(dayobject);
    }
}
