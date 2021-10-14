const num = prompt('Введите число');
const pow = prompt('Введите степень');

function calcPow(a, b = '1') {
    if (typeof a !== "number" && isNaN(a)) return 'some error'; 
    if (typeof b !== "number" && isNaN(b)) return 'some error';
       
    return a**b;
}

let result = calcPow(num, pow);
alert (result);