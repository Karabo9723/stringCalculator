function add(str){

    let sum = 0;
    let del = /,|\n|\/|\W|[a-zA-Z]|/;
    let negatives = /-\d+?/g
    let greaterThan1000 = /[1-9]\d{3,}/;
    let invalidStr
    
    if (str.match(negatives)){
        throw ('negatives not allowed' + str.match(negatives));
    }

    if (str.test(greaterThan1000) == true){
        let thousand = str.match(greaterThan1000);
        str = str.replace(thousand,0);
    }

    for (let i = 0; i < str.length; i++){
        if (str[i] == ''){
            str[i] = 0;
        }

        sum += parseInt(str[i])
    }
    
    return sum
}




console.log(add("" ) + " shall return 0" );
// console.log(add("1") + " shall return 1");
console.log(add("1,1") + " shall return 2");
// console.log(add("1,2,3,4") + " shall return 10");
// console.log(add("1") + " shall return 1"); 
// console.log(add("1\n2,3" )+ " shall return 6");
// console.log(add("//;\n1;2")+ " shall return 3");