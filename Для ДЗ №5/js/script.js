let menus = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');
let title = document.querySelector('#title');
let adv = document.querySelector('.adv');
let temp = [];
document.querySelector('.prompt').innerHTML = prompt("Введите " + "необязательную".toLocaleUpperCase() + " статью расходов в этом месяце", "sisi");


//menus[1]=menus[2];
//menus[2]=temp;
console.log(menus);
//menu.innerHTML = '';
for (let index = 0, t=''; index < menus.length; index++) {
    temp[index] = menus[index].outerHTML;
    console.log(menus[index].outerHTML);
}

temp[4]=menus[3].outerHTML.replace("Четвертый пункт","Пятый пункт");


menu.innerHTML = temp[0] + temp[2]+ temp[1]+temp[3] +temp[4];

let ind = title.innerHTML.indexOf('технику ');
temp[0] = title.innerHTML.substr(0,ind);
temp[1] = title.innerHTML.substr(ind,title.innerHTML.length);

title.innerHTML = temp[0] + 'подлинную ' + temp[1];

adv.remove();

console.log(temp[0],temp[1]);