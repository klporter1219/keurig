function createAccount() {
    const inputs = $('#sign-up :input');
    const values = {};
    inputs.each(function() {
        values[this.name] = $(this).val();
    });

    if (!values.password || values.password !== values.confirmPassword) {
        alert('Please confirm your password');

        return;
    }

    firebase
    .auth()
    .createUserWithEmailAndPassword(values.email, values.password)
    .then((userCredential) => {
        inputs.each(function() {
            $(this).val('');
        });

        window.location = "/#/home";
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error.message);
    });

    return false;
}

function login() {
    const inputs = $('#login :input');
    const values = {};
    inputs.each(function() {
        values[this.name] = $(this).val();
    });

    firebase
    .auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then((userCredential) => {

    inputs.each(function() {
        $(this).val('');
    });

    window.location = "/#/home";
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error.message);
    });

    return false;
}