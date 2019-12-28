function countNumbers(str) {
    let a = str.split('');
    let b = a.filter(function(item) {
        let result = 0;
        if ( !isNaN(Number(item)) ) {
            result = item;
        }  
        return result;
    })
    let obj = {};
    b.forEach(num => {
        if ( Object.keys(obj).includes(num) ) {
            return obj[num]++;
        }
        obj[num] = 1;
      });
    return obj;
}

countNumbers('erer384jj4444666888jdf123');