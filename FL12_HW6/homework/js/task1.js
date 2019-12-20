let a = Number(prompt('a?'));
let b = Number(prompt('b?'));
let c = Number(prompt('c?'));
let b2 = b*b;

let d = b2 - 4*a*c;
let res = Math.sqrt(d);
if ( isNaN(a) === false && isNaN(b) === false && isNaN(c) === false ) {
    if ( a === 0 ) {
        console.log('invalid input data');
    } else if ( d > 0 ) {
        let x1 = (-b + res)/(2*a);
        let x2 = (-b - res)/(2*a);
        console.log(`x1 = ${Math.round(x1)}`);
        console.log(`x2 = ${Math.round(x2)}`);
    } else if ( d === 0 ) {
        let x = -b/(2*a);
        console.log(`x = ${x}`);
    } else {
        console.log('no solution');
    }
} else {
    console.log('invalid input data');
}
