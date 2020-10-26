// Add your functions here


function map(arr,func){
    return arr.map(el => func(el))
}

function reduce(arr, func,start){
    if (start === 100){
        return arr.reduce((el, x) => func(el,x),start)
    }
    else {
        return arr.reduce((el, x) => func(el,x))
    }
}