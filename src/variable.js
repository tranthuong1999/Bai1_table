
// {
//     var a = 2;
//     console.log('Block a:', a);
// }
// console.log('111:', a);

// let a = 1;
// function test() {
//     a = 2;
// }
// console.log('111:', a);
// test();
// console.log('222:', a);

// let a = 0;
// let b = 2;
// let c = true;
// if (c) { -> chu y
//     console.log('have c')
// } else {
//     console.log('not have c')
// }
// if (a && b > 0) {
//     console.log('So duong');
// } else {
//     console.log('So khong duong');
// }

// if (a || b > 0) {
//     console.log('So duong');
// } else {
//     console.log('So khong duong');
// }

// for (let i = 1; i < 10; i++) {
//     break -> thoát khỏi vòng lặp 
//     if (i == 4) {
//         break;
//     }
//     if (i == 4) {
//         continue;
//     }
//     console.log('Value:', i);

// }
// //bien toan cuc -> global variable 
// const b = 10;

// function test() {
//     //bien cuc bo -> bien dia phong, -> local variable
//     const a = 20;
//     console.log('BBBB:', b);
// }

// test();
// console.log('CCCC:', a);

// let a = 1;
// console.log('11111:', a);
// setTimeout(() => {
//     a = 4
//     console.log('2222:', a);
// }, 2 * 1000);
// console.log('33333:', a)


// let a = 1;

// setInterval(() => {
//     a = a + 1;
//     console.log('aaa:', a);
// }, 1000);