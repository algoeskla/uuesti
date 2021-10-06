// console.log () prindib välja tekstikujul konsooli
console.log("Hello world!");

// if else näide
var tingimus = "asdasd" 


if (tingimus === true) {//condition1
console-log("mina olen true"); // action1
} else if (tingimus === false) { // condition2 
console.log("Mina olen false"); // action2
} else {
    console.log("Mina oled vaikimisi väärtus"); //default action 
    }
    
    // if else näite lõpp 

    // arvutamise harjutus
    // // loome muutujad

    var num1 = 3;
    var num2 = 4; 
    var num3 = 5;

    var sum = num1 + num2 + num3;
    console.log("arvude summa:" + sum);

    var multiplied = num1 * num2 * num3;
    console.log("Arvude korrutis:" + multiplied);

    var maxNum = Math.max(num1, num2, num3);
        console.log("suurim arv" + maxNum);

    var minNum = Math.min(num1, num2, num3);
    console.log("väikseim arv"+ minNum);


    

    var num = 10; // seda arvu muudame, et näha teisi väljundeid

    if (num % 2 === 0) {
        var ruut = Math.pow(num, 2); // Võtame arvu 2 astmesse
        console.log('Arv on paaris ja tema ruut on:' + ruut); // prindime välja
    } else {
        var ruutjuur = Math.sqrt(num); // Võtame arvust ruutjuure
        console.log('Arv on paaritu ja tema ruutjuur on:' + ruutjuur); // prindime välja
    }
