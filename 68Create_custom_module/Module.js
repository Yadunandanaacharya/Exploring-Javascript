console.log('This is Module.js')

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
        console.log('Sum is ',sum);
        });
    return sum/arr.length
}

function name(a){
    console.log("My name is",a)
}
name('HAi')

// To avail average to other .js files do below, don't give same file name 
// below like Module.exports is wrong
// ///////////////////////////////////////////////////////////////////////////////////

// module.exports = average

///////////////////////////////////////////////////////////////////////////////////
// Important : You should only use "module" keyword, if you use other
// you will get error

// if multiple function sare there then, use : not = symbol
///////////////////////////////////////////////////////////////////
module.exports = {
    avg : average,
    nameis : name,
    repo : "GitHub"
}