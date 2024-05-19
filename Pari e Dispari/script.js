const numberUser = Number.parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(numberUser);
const pcNumber = Math.floor (Math. random() * 5) + 1;
console.log(pcNumber);
let sommaNumeri = (numberUser + pcNumber);
console.log(sommaNumeri);
if (sommaNumeri % 2 == 0){
    console.log('è uscito un numero pari!')
}
else if (sommaNumeri % 2 == 1){
    console.log('è uscito un numero dispari!')
}