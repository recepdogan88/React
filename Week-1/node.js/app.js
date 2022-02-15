/*
1-Calculator.js dosyasinda fonksiyonlar olusturludu.
2-Moduller expoert edildi.
3-Require yailarak app.js dosyasinda import edildi.
4-x ve y degiskenlerine deger verilerek console.log da yazdirildi.
*/

let calculator = require('./calculator');
//x ve y degiskenlerine deger verilerek fonksiyonlar calistirildi.
let x = 50, y = 20;

console.log("Addition of 50 and 20 is "
				+ calculator.add(x, y));

console.log("Subtraction of 50 and 20 is "
				+ calculator.sub(x, y));

console.log("Multiplication of 50 and 20 is "
				+ calculator.mult(x, y));

console.log("Division of 50 and 20 is "
				+ calculator.div(x, y));
