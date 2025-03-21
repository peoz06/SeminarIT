$(document).ready(function () {
    function validateForm() {
        let isValid = true;

        $(".input-box input").each(function () {
            if ($(this).val().trim() === "") {
                isValid = false;
            }
        });

        $("#submitBtn").prop("disabled", !isValid);
    }

    $(".input-box input").on("keyup change", function () {
        validateForm();
    });

    $("#registrationForm").submit(function (event) {
        event.preventDefault();
        let isValid = true;

        const fullName = $("#fullName");
        fullName.val().length < 3 ? showError(fullName, "Nama minimal 3 karakter.") : clearError(fullName);

        const email = $("#email");
        /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email.val()) ? clearError(email) : showError(email, "Email tidak valid.");

        const password = $("#password");
        password.val().length < 8 ? showError(password, "Password minimal 8 karakter.") : clearError(password);

        const confirmPassword = $("#confirmPassword");
        confirmPassword.val() !== password.val() ? showError(confirmPassword, "Password tidak cocok.") : clearError(confirmPassword);

        const birthdate = $("#birthdate");
        new Date(birthdate.val()).getFullYear() > 2006 ? showError(birthdate, "Anda harus lahir sebelum tahun 2006.") : clearError(birthdate);

        const phoneNumber = $("#phoneNumber");
        /^(?:\+62|08)[0-9]{8,13}$/.test(phoneNumber.val()) ? clearError(phoneNumber) : showError(phoneNumber, "Nomor HP harus dalam format Indonesia.");

        if (isValid) {
            alert("Pendaftaran berhasil!");
            $("#registrationForm")[0].reset();
            validateForm();
        }
    });

    function showError(input, message) {
        input.next(".error-message").text(message);
    }

    function clearError(input) {
        input.next(".error-message").text("");
    }

    validateForm();
});
