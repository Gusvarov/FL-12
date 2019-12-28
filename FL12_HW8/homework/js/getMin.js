function getMin(...args) {
    let min = args[0];  
        for (let i = 1; i < args.length; i++) {  
            if (args[i] < min) {  
                min = args[i];
            }
        }
    return min;
}

getMin(9,3,7,1,6,-4);