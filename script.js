function validateForm() {
    let validations = []
    let emptyValidations = [
        checkEmpty("firstname"),
        checkEmpty("lastname"),
        checkEmpty("email"),
        checkEmpty("password"),
        checkEmpty("repassword"),
    ]
    validations = [
        ...validations,
        !emptyValidations.includes(false),
        IsPasswordValid('password', 'repassword')
    ]
    // returns false if any of the validations has returned false
    return !validations.includes(false)
}


function checkEmpty(id) {
    var input = document.getElementById(id)
    if (input.value == "") {
        invalidInput(input)
        return false;
    }
    validInput(input)
}


const IsPasswordValid = (passwordId, repasswordId) => {
    var password = document.getElementById(passwordId)
    var repassword = document.getElementById(repasswordId)

    if (password.value != repassword.value) {
        // after .5 seconds

        createError("Passwords must match")
        invalidInput(password)
        invalidInput(repassword)
        return false
    }
    if (!IsPasswordLengthValid(password.value)) {
        invalidInput(password)
        invalidInput(repassword)
        return false
    }
    return true
}


function IsPasswordLengthValid(password) {
    if (password.length < 6) {
        createError("Passwords must contains atleast 6 characters")
        return false
    }
    return true
}


function validInput(input) {
    // styling input fields to green
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
}


function invalidInput(input) {
    // styling input fields to red
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
}


function createError(errorText) {
    var tag = document.createElement("p");
    tag.classList.add("text-danger");

    var text = document.createTextNode(errorText);
    tag.appendChild(text);
    var element = document.getElementById("errors");
    element.appendChild(tag);

    // Display error for 3 seconds
    setTimeout(function () {
        tag.remove();
    }, 3000);
}
