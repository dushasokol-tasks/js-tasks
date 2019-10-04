'use strict';

let money, time;

money = prompt("Ваш бюджет на месяц", "0");
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "sisi"),
        b = prompt("Во сколько обойдется?", "500");
    if (typeof (a))!= null && typeof (b))!= null && a != '' && b != '' && a.length < 50)
    {
        appData.expenses[a] = b;
    }


}

appData.moneyPerDay = appData.budget / 30;
console.log("dialy budget: ", appData.moneyPerDay);

if(appData.moneyPerDay<100){
    console.log("min level");
}
else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
    console.log("mid level");
}
else if(appData.moneyPerDay>2000){
    console.log("max level");
}
else {
    console.log("error");
}