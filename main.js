const submitBtn = document.getElementById('submitButton');

// INPUTS

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailAddress = document.getElementById('emailAddress');
const generalEnquiry = document.getElementById('generalEnquiry');
const supportRequest = document.getElementById('supportRequest');
const messageInput = document.getElementById('messageInput');
const checkbox = document.getElementById('checkbox');


// REQUIRED TEXTS

const firstNameRequiredText = document.getElementById('firstNameRequiredText');
const lastNameRequiredText = document.getElementById('lastNameRequiredText');
const emailAddressRequiredText = document.getElementById('emailAddressRequiredText');
const queryTypeRequiredText = document.getElementById('queryTypeRequiredText');
const messageRequiredText = document.getElementById('messageRequiredText');
const checkboxRequiredText = document.getElementById('checkboxRequiredText');

submitBtn.addEventListener('click', e => {
    const errorMessages = [];

    if (firstName.value.length === 0) {
        errorMessages.push('The firstName field is empty');
        firstNameRequiredText.textContent = 'This field is required';
        firstName.style.border = '1px solid hsl(0, 66%, 54%)'; 
    } else {
        firstNameRequiredText.textContent = '';
        firstName.style.border = '1px solid hsl(186, 15%, 59%)'; 
    };

    
    if (lastName.value.length === 0) {
        errorMessages.push('The lastName field is empty');
        lastNameRequiredText.textContent = 'This field is required';
        lastName.style.border = '1px solid hsl(0, 66%, 54%)';
    } else {
        lastNameRequiredText.textContent = '';
        lastName.style.border = '1px solid hsl(186, 15%, 59%)';
    };

    if (emailAddress.value.length === 0) {
        errorMessages.push('The emailAddress field is empty');
        emailAddressRequiredText.textContent = 'Please enter a valid email address';
        emailAddress.style.border = '1px solid hsl(0, 66%, 54%)';
    } else {
        emailAddressRequiredText.textContent = '';
        emailAddress.style.border = '1px solid hsl(186, 15%, 59%)';
    };

    if (messageInput.value.length === 0) {
        errorMessages.push('The messageInput field is empty');
        messageRequiredText.textContent = 'This field is required';
        messageInput.style.border = '1px solid hsl(0, 66%, 54%)';
    } else {
        messageRequiredText.textContent = '';
        messageInput.style.border = '1px solid hsl(186, 15%, 59%)';
    };

    if (errorMessages.length > 0) {
        e.preventDefault();
    };

    console.log(errorMessages);
});