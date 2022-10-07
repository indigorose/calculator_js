// start the js script here.
const form = document.getElementById('calc_form');
const output = document.getElementById('output');
const operand_btns = document.querySelectorAll('button[data-type=operand');
const operator_btns = document.querySelectorAll('button[data-type=operator');
// by using querySelectorAll, it allows us to select all the buttons rather than going one by one. It puts them in a NodeList (an arrray with node items)

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
// The above code (form.addEventListener) will help us to stop the from reloading for each input.
let is_operator = false;
operand_btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (output.value == '0') {
      output.value = e.target.value;
    } else if (output.value.includes('.')) {
      output.value = output.value + ' ' + e.target.value.relapce('.', '');
    } else if (is_operator) {
      is_operator = falseoutput.value = e.target.value;
    } else {
      output.value = output.value + '' + e.target.value;
    }
  });
});

let equation = [];
operator_btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.currentTarget.classList.add('active');
    switch (e.target.value) {
      case '%':
        output.value = parseFloat(output.value) / 100;
        break;
      case 'invert':
        output.value = parseFloat(output.value) * -1;
        break;
      case '=':
        equation.push(output.value);
        output.value = eval(equation.join(''));
        equation = [];
        break;
      default:
        let last_item = equation[equation.length - 1];
        if (['/', '*', '+', '-'].includes(last_item) && is_operator) {
          equation.pop();
          equation.push(e.target.value);
        }
        is_operator = true;
        break;
    }
  });
});
