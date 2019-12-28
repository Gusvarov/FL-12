function makeNumber(str) {
    let a = str.split('');
    let b = a.filter(function(item) {
        return Number(item);
    })
    return b.join('');
}

makeNumber('df66shs123fdj');