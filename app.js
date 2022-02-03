let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function formValidation() {
    if (username.value == "") {
        document.getElementById("userError").innerHTML =
            "* Invalid Username *";
        flag = 0;
    } else {
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }

    if (password.value == "") {
        document.getElementById("passError").innerHTML =
            "* Invalid Password *";
        flag = 0;
    } else if (password.value.length <= 5) {
        document.getElementById("passError").innerHTML =
            "Password must be 8 characters long.";
        flag = 0;
    } else {
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }

    if (flag) {
        return true;
        alert("Form submitted successfully");
    } else {
        return false;
    }
}
