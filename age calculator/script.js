let dob = document.getElementById('dob');
let result = document.getElementById('res');
let button = document.getElementById('cal'); 
button.addEventListener('click', function () {
 if (dob.value === "") {
        result.textContent = "Please select your date of birth";
        return;
    }
    let dateOfBirth = new Date(dob.value);
    let today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    let month = today.getMonth() - dateOfBirth.getMonth();
    if (
        month < 0 ||
        (month === 0 && today.getDate() < dateOfBirth.getDate())
    ) {
        age--;
    }
    if (age < 0) {
        result.textContent = "Please enter a valid date";
        return;
    }
    result.textContent = "Your age is " + age + " years";
});