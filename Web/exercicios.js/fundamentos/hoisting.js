// var a
console.log('a =', a)
var a = 2
console.log('a =', a)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('....')

function teste(){  // dentro de uma funcao
    // var a
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}
teste()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('....')

// console.log('b =', b)  com o let o HOISTING (issamento não ocorre)
let b = 2
console.log('b =', b)