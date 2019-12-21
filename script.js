window.onload = function () {

    task2.onclick = function () {
        let valueUSD = +prompt('Введіть к-сть долярів, яку хочете перевести');
        let valueV = prompt('Введіть яку грошву хочете отримати');

        if (valueV == 'EUR') {
            alert(valueUSD * 0.9);
        } else if (valueV == 'UAN') {
            alert(valueUSD * 23.32);
        } else if (valueV == 'AZN') {
            alert(valueUSD * 1.4);
        } else {
            alert('шото пішло не так');
        }
    };

    task3.onclick = function () {
        let value = +prompt('На скіко грош ви накупили?');

        if (value < 200) {
            alert('Ше трошки і буде скидончик');
        } else if (value >= 200 && value < 300) {
            alert('Отримайте знижечку в 3% 😎');
        } else if (value >= 300 && value < 500) {
            alert('Тримайте скидончик в 5% 😃');
        } else {
            alert('а ось і скидочка в 7% під\'їхала 😱');
        }
    };

    task4.onclick = function () {
        let P = +prompt('Введіть периметр квадрата');
        let lenght = +prompt('Введіть довжину кола');

        let side = P/4;
        let R = P/(4*Math.sqrt(2));

        let coef = 1.12;

        if (lenght*coef <= P) {
            alert('ноуп, не можна так');
        } else {
            alert('довго вгадував?) жартую, таке можна!');
        }
    };

    task5.onclick = function () {
        let firstQuestion = prompt('Напишіть мову програмування, яку ви зараз вивчаєте');
        let secondQuestion = +prompt('Скільки заробляє юний Junior FrontEnd Developer (підказка: зв\'язано з професією тракториста');
        let thirdQestion = prompt('Ім\'я викладача, який нас вчить');
        let sum = 0;

        if (firstQuestion == 'JS') {
            sum += 2;
        } else {
            sum = sum;
        }

        if (secondQuestion == 300) {
            sum += 2;
        } else {
            sum = sum;
        }

        if (thirdQestion == 'Юліан') {
            sum += 2;
        } else {
            sum = sum;
        }

        alert(sum);
    };

    task6.onclick = function () {
        let day = +prompt('Введіть день');
        let month = +prompt('Введіть місяць');
        let year = +prompt('Введіть рік');

        // if (year%400 === 0 && year%100 !== 0 && year/4)

        if (day === 28 && month === 2 && year%4 === 0) {
            day = 29;
        } else if (day === 29 && month === 2 && year%4 === 0) {
            day = 1;
            month = 3;
        } else if (day === 30 && (month === 4 || month === 6 || month === 9 || month === 11)){
            day = 1;
            month += 1;
        } else if (day === 31 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10)){
            day = 1;
            month += 1;
        } else if (day === 31 && (month === 12)){
            day = 1;
            month = 1;
            year +=1;
        } else {
            day += 1;
        }
        alert(`${day} ${month} ${year}`);
    };
};

