let a = parseInt(prompt('a?'));
let b = parseInt(prompt('b?'));
let c = parseInt(prompt('c?'));

if ( !Number(a) && a !== 0 || !Number(b) && b !== 0 || !Number(c) && c !== 0 ) {
    alert('input values should be ONLY numbers');
} else {
    if (a <= 0 || b <= 0 || c <= 0) {
        alert('A triangle must have 3 sides with a positive definite length');
    } 
    if ( a + b > c && a + c > b && c + b > a ) {
        if (a === b && b === c && c === a) {
            console.log('Equilateral triangle');
        } else if (a === b || b === c || c === a) {
            console.log('Isosceles triangle');
        } else if (a !== b || b !== c || c !== a) {
            console.log('Scalene triangle');
        } 
    } else {
        console.log('Triangle doesn’t exist');
    }
}


