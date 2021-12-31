function process() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "nurulfikri" && password == "ti01") {
        alert("Login Succesfuly");
    } else {
        alert("Login Failed!");
    return false;
    }
}