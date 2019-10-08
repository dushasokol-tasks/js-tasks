'use strict';

let money, time;

function start() {
    money = prompt("Ваш бюджет на месяц", "50000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц", "0");
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

//for (let i = 0; i < 2; i++) 
function chooseExpenses() {
    let i = 0;
    while (i < 2) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "sisi"),
            b = prompt("Во сколько обойдется?", "500");
        if ((typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        }
        else {
            i = i - 1;
        }
        i++;
    }
}
chooseExpenses();

function chooseOptExpenses() {
    let i = 0;
    while (i < 3) {
        let a = prompt("Введите "+"необязательную".toLocaleUpperCase() + " статью расходов в этом месяце", "sisi"),
            b = prompt("Во сколько обойдется?", "500");
        if ((typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50) {
            appData.optionalExpenses[a] = b;
        }
        else {
            i = i - 1;
        }
        i++;
    }
}
chooseOptExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
}
detectDayBudget();
console.log("dialy budget: ", appData.moneyPerDay);

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("min level");
    }
    else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("mid level");
    }
    else if (appData.moneyPerDay > 2000) {
        console.log("max level");
    }
    else {
        console.log("error");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Сумма накоплений", "1000"),
            percent = +prompt("Процент", "12");
        appData.monthIncome = save / 12 / 100 * percent;
        console.log("monthly income: ", appData.monthIncome);
    }
}

checkSavings();