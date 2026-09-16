function validateEmail(email) {

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    return pattern.test(email);

}

function validateMobile(mobile) {

    let pattern = /^[0-9]{10}$/;

    return pattern.test(mobile);

}

function validatePassword(password) {

    return password.length >= 6;

}