
function greatestOfTwo(var1, var2){
    if(var1 > var2){
        console.log(`${var1} is greater`);
    } else {
        console.log(`${var2} is greater`);
    }
}

const greatestOf2 = (num1,num2) => {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};
console.log(greatestOf2(10,20));

