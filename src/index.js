import { formatDate } from './utils';

import './asset/cal.css';

const options = {
  currentDay: 1, //
  currentMonth: 1, // 月
  currentYear: 1970, // 年
  currentWeek: 1, // 第几周
  days: [],
  weekDays: [],
  date: ''
};

function Mouth(date) {
  let now;

  if (date) {
    now = new Date(date);
  } else {
    now = new Date();
  }
  this.days = [];
  this.currentYear = now.getFullYear();
  this.currentMonth = now.getMonth() + 1;
  this.currentDay = now.getDate();

  // 获取上一个月的开始日期
  let startDay;
  startDay = new Date(formatDate(now.getFullYear(), now.getMonth(), 1));
  startDay.setDate(0);
  let endDay;
  endDay = new Date(formatDate(now.getFullYear(), now.getMonth() + 1, 1));

  // 获取日期在一个月中的第几天
  // this.currentDay = endDay.getDate();
  // 获取年
  this.currentYear = endDay.getFullYear();
  // 获取月份
  this.currentMonth = endDay.getMonth() + 1;
  // 获取星期数
  this.currentWeek = endDay.getDay();

  let str = formatDate(this.currentYear, this.currentMonth, 1);

  for (let i = this.currentWeek; i >= 0; i--) {
    let d = new Date(str);

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
    this.days.push(dayobject);
  }

  for (let i = 1; i < 42 - this.currentWeek; i++) {
    let d = new Date(str);
    d.setDate(d.getDate() + i);
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

    this.days.push(dayobject);
  }

  let article = document.getElementById('calId');

  if (article || article === null) {
    return '404';
  }

  article.innerHTML = '';
  article.innerHTML = `${headerFun(
    this.currentYear,
    this.currentMonth
  )}${wek()}${tempt(this.days)}`;
  document.body.appendChild(article);
  document.getElementById('pickNextMonth').addEventListener(
    'click',
    () => {
      // console.log(1111)
      this.pickNextMonth();
    },
    false
  );

  document.getElementById('pickPreMonth').addEventListener(
    'click',
    () => {
      this.pickPreMonth();
    },
    false
  );
}

Mouth.prototype.pickPreMonth = function pickPreMonth() {
  const d = new Date(formatDate(this.currentYear, this.currentMonth, 1));
  d.setDate(0);
  this.days = [];
  new Mouth(formatDate(d.getFullYear(), d.getMonth() + 1, 1));
};

Mouth.prototype.pickNextMonth = function pickNextMonth() {
  const d = new Date(formatDate(this.currentYear, this.currentMonth, 1));
  d.setDate(42);
  this.days = [];
  new Mouth(formatDate(d.getFullYear(), d.getMonth() + 1, 1));
};

function tempt(params) {
  let str = '<ul class="days">';

  params.forEach(element => {
    str += `<li><div> <span> ${element.date.getDate()} </span><div></li>`;
  });
  str += '</ul>';

  return str;
}

function headerFun(currentYear, currentMonth) {
  let str = `
    <div class="month">
        <ul>
            <li id="pickPreMonth" class="arrow">❮</li>
            <li class="year-month">
                <span class="choose-year"> ${currentYear}年</span>
                <span class="choose-month">${currentMonth}月</span>
            </li>
            <li id="pickNextMonth" class="arrow">❯</li>
        </ul>
    </div>
    `;
  return str;
}

function wek() {
  return `
    <!-- 星期 -->
    <ul class="weekdays">
      <li>日</li>
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
    </ul>
    `;
}

new Mouth();

module.exports = new Mouth();

// let article = document.createElement('article');
// article.innerHTML = `${headerFun(t.currentYear, t.currentMonth)}${wek()}${tempt(t.days)}`;

// console.log(t.days);

// document.body.appendChild(article);

// document.getElementById('pickNextMonth').addEventListener('click',()=>{
//     console.log(1111)
//     t.pickNextMonth();
// }, false);
//
// document.getElementById('pickPreMonth').addEventListener('click',()=>{
//     t.pickPreMonth();
// }, false);
