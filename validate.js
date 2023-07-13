$(document).ready(function () {
    $("#registration-form").submit(function (e) {
        e.preventDefault(); 

        $(".error").text("");
        $("input").removeClass("error-border");

        // Retrieve form values
        var fname = $("#fname").val();
        var email = $("#email").val();
        var phno = $("#phno").val();
        var psw = $("#psw").val();
        var cpsw = $("#cpsw").val();

        // Validate form fields
        var isValid = true;

        //for name
        if (fname === "") {
            $("#fname-error").text("Please enter your name.");
            $("#fname").addClass("error-border");
            isValid = false;
        } else if (fname.length <= 3) {
            $("#fname-error").text("Name should have more than 3 letters.");
            $("#fname").addClass("error-border");
            isValid = false;
        } else {
            $("#fname").removeClass("error-border");
        }

        //email
        if (email === "") {
            $("#email-error").text("Please enter your email.");
            $("#email").addClass("error-border");
            isValid = false;
        } else if (!isValidEmail(email)) {
            $("#email-error").text("Please enter a valid email.");
            $("#email").addClass("error-border");
            isValid = false;
        } else {
            $("#email").removeClass("error-border");
        }

        //phone no
        if (phno === "") {
            $("#phno-error").text("Please enter your phone number.");
            $("#phno").addClass("error-border");
            isValid = false;
        } else if (!/^[0-9]{10}$/.test(phno)) {
            $("#phno-error").text("Phone number should be exactly 10 digits long.");
            $("#phno").addClass("error-border");
            isValid = false;
        } else {
            $("#phno").removeClass("error-border");
        }

        //password
        if (psw === "") {
            $("#psw-error").text("Please enter a password.");
            $("#psw").addClass("error-border");
            isValid = false;
        } else {
            $("#psw").removeClass("error-border");
        }

        //conf password
        if (cpsw === "") {
            $("#cpsw-error").text("Please confirm your password.");
            $("#cpsw").addClass("error-border");
            isValid = false;
        } else if (psw !== cpsw) {
            $("#cpsw-error").text("Passwords do not match.");
            $("#cpsw").addClass("error-border");
            isValid = false;
        } else {
            $("#cpsw").removeClass("error-border");
        }

        if (isValid) {
            console.log("Form submitted successfully.");
        }
    });

    // Email validation 
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Input field focus and blur events
    $("input").focus(function () {
        $(this).removeClass("error-border");
        $(this).siblings(".error").text("");
    });

    $("input").blur(function () {
        var $input = $(this);
        var fieldName = $input.attr("name");
        var fieldValue = $input.val().trim();

        if (fieldValue === "" && !$input.hasClass("error-border")) {
            $input.addClass("error-border");
        } else {
            if (fieldName === "fname") {
                $("#fname-error").text("");
            } else if (fieldName === "email") {
                $("#email-error").text("");
            } else if (fieldName === "phno") {
                $("#phno-error").text("");
            } else if (fieldName === "psw") {
                $("#psw-error").text("");
            } else if (fieldName === "cpsw") {
                $("#cpsw-error").text("");
            }
        }
    }); 
});
