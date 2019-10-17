let startButton = document.getElementById('start'),
    resultTable = document.getElementsByClassName('result-table'),
    chooseExpenses = document.getElementsByClassName('data'),
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item');

    countButton = document.getElementsByClassName('count-budget-btn'),
    expensesButton = document.getElementsByClassName('expenses-item-btn'),
    optionalExpensesButton = document.getElementsByClassName('optionalexpenses-btn');

console.log(optionalExpenses);

/*
    for (let i = 0; i < resultTable[0].childNodes.length; i++) {
        let a = resultTable[0].childNodes[i].className;
        if (typeof (a) == 'string') {
            let b = resultTable[0].childNodes[i].matches('[class$="-value"]');
            if(b)console.log(a,resultTable[0].childNodes[i], b);
        }
    }

for (let i = 0; i < chooseExpenses[0].childNodes.length; i++) {
    let a = chooseExpenses[0].childNodes[i].className;
    if (typeof (a) == 'string') {
        let b = chooseExpenses[0].childNodes[i].matches('input[class="expenses-item"]');
        if(b)console.log(a,chooseExpenses[0].childNodes[i], b);
    }
}
*/
// getClasses(resultTable, '-value', 'DIV');
// getClasses(chooseExpenses, 'expenses-item', 'INPUT');

// console.log(countButton, expensesButton, optionalExpensesButton);

// function getClasses(parentVar, templateVar, nodeType) {
//     console.log(parentVar[0].className, templateVar);
//     for (let i = 0; i < parentVar[0].childNodes.length; i++) {
//         let a = parentVar[0].childNodes[i].className;
//         if (typeof (a) == 'string') {
//             if (a.indexOf(templateVar) != -1) {
//                 let b = document.getElementsByClassName(a);
//                 console.log("match",b[0].className,b[0].matches('.optionalexpenses-item"]'));
//                 if (b[0].nodeName == nodeType) console.log(b, b[0].nodeName);
//             }
//         }
//     }
// }
