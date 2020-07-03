
//method one
function ask(question, add, subtract, divide, multiply, err) {
    const ops = prompt(question);

    if (ops && ops == '+' || ops == '-' || ops == '/' || ops == '*') {
        num1 = +prompt("Enter number 1");
        num2 = +prompt("Enter number 2");
        return;
    }
    console.log(ops);
    switch (ops) {
        case '+':
            add(num1, num2);

            break;

        case '-':
            subtract(num1, num2);
            break;

        case '/':
            divide(num1, num2);
            break;

        case '*':
            multiply(num1, num2);
            break;

        default:
            err();
    }

}
ask("Enter an operator + - * /?", (a, b) => { alert(a + b); }, (a, b) => { alert(a - b); }, (a, b) => { alert(a / b); }, (a, b) => { alert(a * b); }, () => { alert('try again later'); });


//method two

function ask(question, add, subtract, multiply, divide, err) {
    let ops = prompt(question);

     
     console.log(ops);
     
   switch (ops) {
       case '+' :{
        let num1 = +prompt('Enter the number1')
        let num2 = +prompt('Enter the number2')
        add(num1 , num2);
       }
        break;       
        
       case '-' :{
         let num1 = +prompt('Enter the number1')
         let num2 = +prompt('Enter the number2')
         subtract(num1 , num2);
       }
        break;       
        case '*' :{
        let num1 = +prompt('Enter the number1')
        let num2 = +prompt('Enter the number2')
         multiply(num1 , num2);
        }
        break; 

        case '/' :
        {
        let num1 = +prompt('Enter the number1')
        let num2 = +prompt('Enter the number2')
        divide(num1 , num2);
        }
        break; 
            
        default :
            err()
    }
}

 ask("Enter an operator + - * /?", (a , b) => {alert( a + b );},  (a, b) => {alert(a - b );}, (a, b) => {alert( a * b );}, (a, b) => {alert( a / b );}, () => { alert('try again later') });
 

 