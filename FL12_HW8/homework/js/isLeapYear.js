function isLeapYear(input) {
    let fullYear = new Date(input).getFullYear();
    let date = new Date(fullYear, 1, 29).getDate();
    if ( date === 29 ) {
        return `${fullYear} is a leap year`;
    } else if ( isNaN(date) ) {
        return 'Invalid Data';
    }
    return `${fullYear} is not a leap year`;
  }

isLeapYear(1213131313);

