
// let myCalc = calculator


// //in cash register.js

// var calc = calculator();

// function refreshDisplaytoCalcTotal() {
//     var display = getElementById('display')
//     display.innerHTML = calc.getTotal
// }

// 

// let btn1 = getElementById('btn1').onclick = function() {
//     display (num)
//     //clear display
//     //add 1 to display
// }

//Display

// var displayMe = document.createElement('div');
// displayMe.id = 'display';
// displayMe.innerHTML = '$0.00';
// displayMe.style.border = '2px solid black';
// document.body.appendChild(displayMe);

//789 Buttons

// var button7 = document.createElement('div');
// button7.id = 'b7';
// button7.innerHTML = 7;
// button7.style.border = '2px solid black';
// document.body.appendChild(button7);

// var button8 = document.createElement('div');
// button8.id = 'b8';
// button8.innerHTML = 8;
// button8.style.border = '2px solid black';
// document.body.appendChild(button8);

// var button9 = document.createElement('div');
// button9.id = 'b9';
// button9.innerHTML = 9;
// button9.style.border = '2px solid black';
// document.body.appendChild(button9);

//456 Buttons

// var button4 = document.createElement('div');
// button4.id = 'b4';
// button4.innerHTML = 4;
// button4.style.border = '2px solid black';
// document.body.appendChild(button4);

// var button5 = document.createElement('div');
// button5.id = 'b5';
// button5.innerHTML = 5;
// button5.style.border = '2px solid black';
// document.body.appendChild(button5);

// var button6 = document.createElement('div');
// button6.id = 'b6';
// button6.innerHTML = 6;
// button6.style.border = '2px solid black';
// document.body.appendChild(button6);


//123 Buttons

// var button1 = document.createElement('div');
// button1.id = 'b1';
// button1.innerHTML = '1';
// button1.style.border = '2px solid black';
// document.body.appendChild(button1);

// var button2 = document.createElement('div');
// button2.id = 'b2';
// button2.innerHTML = 2;
// button2.style.border = '2px solid black';
// document.body.appendChild(button2);

// var button3 = document.createElement('div');
// button3.id = 'b3';
// button3.innerHTML = 3;
// button3.style.border = '2px solid black';
// document.body.appendChild(button3);


//0 00 . Buttons

// var button0 = document.createElement('div');
// button0.id = 'b0';
// button0.innerHTML = 0;
// button0.style.border = '2px solid black';
// document.body.appendChild(button0)

// var button00 = document.createElement('div');
// button00.id = 'b00';
// button00.innerHTML = '00';
// button00.style.border = '2px solid black';
// document.body.appendChild(button00);

// var buttonDot = document.createElement('div');
// buttonDot.id = 'bdot';
// buttonDot.innerHTML = '.';
// buttonDot.style.border = '2px solid black';
// document.body.appendChild(buttonDot);

//÷x-+= Buttons

// var divideMe = document.createElement('div');
// divideMe.id = 'divide';
// divideMe.innerHTML = '÷';
// divideMe.style.border = '2px solid black';
// document.body.appendChild(divideMe);

// var multiplyMe = document.createElement('div');
// multiplyMe.id = 'multiply';
// multiplyMe.innerHTML = 'x';
// multiplyMe.style.border = '2px solid black';
// document.body.appendChild(multiplyMe);

// var subtractMe = document.createElement('div');
// subtractMe.id = 'subtract';
// subtractMe.innerHTML = '-';
// subtractMe.style.border = '2px solid black';
// document.body.appendChild(subtractMe);

// var addMe = document.createElement('div');
// addMe.id = 'add';
// addMe.innerHTML = '+';
// addMe.style.border = '2px solid black';
// document.body.appendChild(addMe);

// var equalMe = document.createElement('div');
// equalMe.id = 'divide';
// equalMe.innerHTML = '=';
// equalMe.style.border = '2px solid black';
// document.body.appendChild(equalMe);

// //Clear, Balance, Deposit, Withdraw Buttons

// var clearMe = document.createElement('div');
// clearMe.id = 'clear';
// clearMe.innerHTML = 'clear';
// clearMe.style.border = '2px solid black';
// document.body.appendChild(clearMe);

// var balanceMe = document.createElement('div');
// balanceMe.id = 'balance';
// balanceMe.innerHTML = 'get balance';
// balanceMe.style.border = '2px solid black';
// document.body.appendChild(balanceMe);

// var depositMe = document.createElement('div');
// depositMe.id = 'deposit';
// depositMe.innerHTML = 'deposit cash';
// depositMe.style.border = '2px solid black';
// document.body.appendChild(depositMe);

// var withdrawMe = document.createElement('div');
// withdrawMe.id = 'withdraw';
// withdrawMe.innerHTML = 'withdraw cash';
// withdrawMe.style.border = '2px solid black';
// document.body.appendChild(withdrawMe);


// for loop for clicking numButtons

let num = 0


for (var i = 0; i < arr.length; i++) {
    numButton[i].addEventListener('click', function(){
        document.getElementById('display').innerHTML = num
    })
}

// //1click
// document.getElementById('b1').addEventListener('click', function(){
//     document.getElementById('display').innerHTML = '1'
// });

// //2click
// document.getElementById('b2').addEventListener('click', function(){
//     document.getElementById('display').innerHTML = '2'
// });

// //3click
// document.getElementById('b3').addEventListener('click', function(){
//     document.getElementById('display').innerHTML = '3'
// });

// //4click
// document.getElementById('b4').addEventListener('click', function(){
//     document.getElementById('display').innerHTML = '4'
// });

// //5click
// document.getElementById('b5').addEventListener('click', function(){
//     document.getElementById('display').innerHTML = '5'
// });

// //6click
// document.getElementById('b6').addEventListener('click', function(){
//     document.getElementById('display').innerHTML = '6'
// });

// //7click
// document.getElementById('b7').addEventListener('click', function(){
//     document.getElementById('display').innerHTML = '7'
// });

// //8click
// document.getElementById('b8').addEventListener('click', function(){
//     document.getElementById('display').innerHTML = '8'
// });

// //9click
// document.getElementById('b9').addEventListener('click', function(){
//     document.getElementById('display').innerHTML = '9'
// });

// //0click
// document.getElementById('b0').addEventListener('click', function(){
//     document.getElementById('display').innerHTML = '0'
// });

// //00click
// document.getElementById('b00').addEventListener('click', function(){
//     document.getElementById('display').innerHTML = '00'
// });


// [÷] click



// [x] click



// [-] click



// [+] click



// [=] click


// function display(num) {
//     var display = getElementById('display')
//     // display.innerHTML = num
//     // }
