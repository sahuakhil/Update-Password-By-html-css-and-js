let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");

let updateBtnEl = document.getElementById("updateBtn");

let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

let validateNewPassword = function(event) {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "*Required";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
};

let validateConfirmPassword = function() {
    let newPassword = newPasswordEl.value;
    let confirmPassword = confirmPasswordEl.value;

    if (newPassword !== confirmPassword) {
        confirmPasswordErrMsgEl.textContent = "Password msut be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
}
newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);
updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConfirmPassword();
});