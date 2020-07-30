console.log("This is best platform to grow");

/*function to repeat same task*/
let name1= 'Yadu';
let name2= 'Yadav';
let name3= 'Yogi';

// console.log(name1 + ' Hai, how are you?')
// console.log(name2 + ' Hai, how are you?')
// console.log(name3 + ' Hai, how are you?')
/*If sometimes some function's output doesn't display in 
web page, then refresh that web page*/

/*Using function*/
function greet(name,greetText = "Default value, this is printed when you don't pass grreText while calling function"){
    let name1 = "This is local scope name1, only used inside function greet"
    console.log(greetText + " " + name);
    console.log(name + ' Hai, how are you?(This is using function)');
}

let greetText = "Good Morning";

greet(name1,greetText); /*Callin;g function*/
greet(name2,greetText);
greet(name3,greetText);

/*you can also do like this*/
let greeting = "You can use this name also"
greet(name1,greeting); /*Callin;g function*/
greet(name2,greeting);
greet(name3,greeting);

/*using default value*/
let name4 = 'Jaguar';
greet(name4);

/*Returning value using function*/
function sum(a,b,c){
    return a + b + c
}

let returnValue = sum(3,4,5)
console.log('This returns sum of 3 numbers',returnValue)