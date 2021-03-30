const numberToHex = (number) => {
    let hex = "";
    while(number) {
        hex = hex + toString(number%16);
        number = Math.floor(number/16);
        console.log(hex, number);
    }
}

const hash = (number) => {
    number = number * number;
    number = number / 5;
    number = number * 6;
    console.log();
}

// numberToHex(100);
const x = 5;
const num = Math.toString(x);
console.log(num);