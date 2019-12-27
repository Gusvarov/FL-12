const emailLogin = prompt('Your email, please');
const userLogin = 'user@gmail.com';
const adminLogin = 'admin@gmail.com';
const minEmail = 5;
const minPass = 6;

if ( !emailLogin ) {
    alert('Canceled');
} else if ( emailLogin.length < minEmail ) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if ( emailLogin === userLogin || emailLogin === adminLogin ) {
    const userPassword = prompt('Password?');
    if ( !userPassword ) {
        alert('Canceled');
    } else if ( userPassword === 'UserPass' && emailLogin === userLogin || 
    userPassword === 'AdminPass' && emailLogin === adminLogin ) {
        const needChangePass = confirm('Do you want to change your password?');
        if ( !needChangePass ) {
            alert('You have failed the change.');
        } else {
            const oldUserPassword = prompt('Write your old password, please');
            if ( oldUserPassword === 'UserPass' && emailLogin === userLogin || 
            oldUserPassword === 'AdminPass' && emailLogin === adminLogin ) {
                const newUserPassword = prompt('Enter your new Password');
                if ( !newUserPassword ) {
                    alert('Canceled');
                } else if ( newUserPassword.length < minPass ) {
                    alert('It’s too short password. Sorry.')
                } else {
                    const newPasswordCheck = prompt('Enter your new password again');
                    if ( newPasswordCheck === newUserPassword ) {
                        alert('You have successfully changed your password');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('You wrote the wrong password.')
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('i dont know ya');
}
