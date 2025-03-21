$(document).ready(function () {
    $("#registrationForm").submit(function (event) {
        event.preventDefault();
        let isValid = true;

        const fullName = $("#fullName");
        if (fullName.val().length < 3) {
            showError(fullName, "Nama minimal 3 karakter.");
            isValid = false;
        } else {
            clearError(fullName);
        }

        const email = $("#email");
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email.val())) {
            showError(email, "Email tidak valid.");
            isValid = false;
        } else {
            clearError(email);
        }

        const password = $("#password");
        if (password.val().length < 8) {
            showError(password, "Password minimal 8 karakter.");
            isValid = false;
        } else {
            clearError(password);
        }

        const confirmPassword = $("#confirmPassword");
        if (confirmPassword.val() !== password.val()) {
            showError(confirmPassword, "Password tidak cocok.");
            isValid = false;
        } else {
            clearError(confirmPassword);
        }

        const birthdate = $("#birthdate");
        const birthYear = new Date(birthdate.val()).getFullYear();
        if (birthYear > 2006) {
            showError(birthdate, "Anda harus lahir sebelum tahun 2006.");
            isValid = false;
        } else {
            clearError(birthdate);
        }

        const phoneNumber = $("#phoneNumber");
        const phonePattern = /^(?:\+62|08)[0-9]{8,13}$/;
        if (!phonePattern.test(phoneNumber.val())) {
            showError(phoneNumber, "Nomor HP harus dalam format Indonesia.");
            isValid = false;
        } else {
            clearError(phoneNumber);
        }

        if (isValid) {
            alert("Pendaftaran berhasil!");
            $("#registrationForm")[0].reset();
        }
    });

    function showError(input, message) {
        input.next(".error-message").text(message);
    }

    function clearError(input) {
        input.next(".error-message").text("");
    }
});
