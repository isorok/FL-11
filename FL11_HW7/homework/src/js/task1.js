let email = prompt('Enter your email, please');
let password;
let newPassword;
let minLength = 6;
let minPassLength = 5;
let changepassword;
let newPasswordCheck;
if (!email) {
    alert('Canceled');
} else if (email.length < minLength) {
    alert('I dont know any user having name length less than 6 symbols');
} else if (email === 'user@gmail.com') {
    password = prompt('Enter your password, please');
    if (!password) {
        alert('Canceled');
    } else if (password === 'UserPass') {
        changepassword = confirm('Do you want to change your password?');
        if (changepassword === true) {
            password = prompt('Enter your password, please');
            if (!password) {
                alert('Canceled');
            } else if (password === 'UserPass') {
                newPassword = prompt('Enter new password');
                if (newPassword.length < minPassLength) {
                    alert('It’s too short password.Sorry.');
                } else {
                    newPasswordCheck = prompt('Enter new password again');
                    if (newPassword === newPasswordCheck) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else if (email === 'admin@gmail.com') {
    password = prompt('Enter your password, please');
    if (!password) {
        alert('Canceled');
    } else if (password === 'AdminPass') {
        changepassword = confirm('Do you want to change your password?');
        if (changepassword === true) {
            password = prompt('Enter your password, please');
            if (!password) {
                alert('Canceled');
            } else if (password === 'AdminPass') {
                newPassword = prompt('Enter new password');
                if (newPassword.length < minPassLength) {
                    alert('It’s too short password.Sorry.');
                } else {
                    newPasswordCheck = prompt('Enter new password again');
                    if (newPassword === newPasswordCheck) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I dont know you');
}