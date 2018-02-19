function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPass = $('#confirm-password');
    let companyCheckbox = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let submitBtn = $('#submit');
    let validationDiv = $('#valid');
    let isValidAll = true;

    companyCheckbox.on('change', function () {
        if (companyCheckbox.is(":checked")) {
            companyInfo.css("display", "block");
        } else {
            companyInfo.css("display", "none");
        }
    });
    submitBtn.on('click', function (event) {
        event.preventDefault();
        validateForm();

        validationDiv.css('display', isValidAll ? "block" : "none");
        isValidAll = true;
    });

    function validateForm() {
        validateInput(username, /^[A-Za-z\d]{3,20}$/g);
        validateInput(email, /^.*?@.*?\..*$/g);
        if (confirmPass.val() === password.val()) {
            validateInput(password, /^\w{5,15}$/g);
            validateInput(confirmPass, /^\w{5,15}$/g)
        } else {
            confirmPass.css('border', 'solid red');
            password.css('border', 'solid red');
            isValidAll = false;
        }
        if (companyCheckbox.is(":checked")) {
            validateCompanyInfo();
        }
    }

    function validateInput(input, pattern) {
        if (pattern.test(input.val())) {
            input.css('border', 'none')
        } else {
            input.css('border', 'solid red');
            isValidAll = false;

        }
    }

    function validateCompanyInfo() {
        let numValue = +companyNumber.val();
        if (numValue >= 1000 && numValue <= 9999) {
            companyNumber.css('border', 'none')
        } else {
            companyNumber.css('border', 'solid red');
            isValidAll = false;
        }
    }
}
