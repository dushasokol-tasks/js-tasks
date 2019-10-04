'use strict';

let money, time;

money = prompt("Ваш бюджет на месяц", "0");
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");

let appData = {
    budget: money,
    timeData: time,
    expenses: '',
    optionalExpenses: '',
    income: '',
    savings: false
};
//appData.budget = money;

console.log(appData);

let expProp = prompt("Введите обязательную статью расходов в этом месяце", "sisi"),
    expVal = prompt("Во сколько обойдется?", "500");

let expenses = {
    [expProp]: expVal,
};

alert(expenses[expProp]/30);

//alert(expenses.[expProp]);