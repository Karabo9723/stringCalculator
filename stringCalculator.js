function add(str){
    if (str == ""){
        return 0
    }
    console.log(str, 'before split')
    str = str.split(/,|\n/g)
    console.log(str, 'after split')
    let sum = 0
    for (var i = 0; i < str.length; i++){
        sum = sum + parseInt(str[i])
    }
    return sum
}

console.log(add("" ) + " shall return 0" );
console.log(add("1") + " shall return 1");
console.log(add("1,1") + " shall return 2");
console.log(add("1,2,3,4") + " shall return 10");
console.log(add("1") + " shall return 1"); 
console.log(add("1\n2,3" )+ " shall return 6");
console.log(add("//;\n1;2")+ " shall return 3");