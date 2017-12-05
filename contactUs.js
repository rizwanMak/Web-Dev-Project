
function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

function formFieldHasInput(fieldElement)
{
	
	return fieldElement.value && trim(fieldElement.value);
}

function validate(e)
{
	//	Hides all error elements on the page
	hideErrors();

	//	Determine if the form has errors
	if (formHasErrors()){

		// 	Prevents the form from submitting
		e.preventDefault();
		// 	Returning false prevents the form from submitting
		return false;
	}

	return true;
}

function formHasErrors()
{
	var errorFlag = false;



	//checking if shippingInfo has any errors
	var membershipInfo = ["fullname","phoneNumber","email"];
	for (var i = 0; i < membershipInfo.length; i++) {

		var field = document.getElementById(membershipInfo[i]);

		if(!formFieldHasInput(field)) {

			var error = document.getElementById(membershipInfo[i]+"_error");

			error.style.display = "block";

			if (!errorFlag) {
				field.select(); 
				field.focus();
			}

			errorFlag = true;

		}
	}

		//validating if the phone number is valid or not 
	// regex for phone number 
	var regex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);

	var phoneNumber = document.getElementById("phoneNumber");

	if(!regex.test(phoneNumber.value)){

		document.getElementById("phoneNumberFormat_error")
				.style.display = "block";

		if(!errorFlag){
			phoneNumber.focus();
			phoneNumber.select();
		}

		errorFlag = true;
	}

	//validating if the email address is valid or not 
	// regex for email 
	var regex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

	var emailAddress = document.getElementById("email");

	if(!regex.test(emailAddress.value)){

		document.getElementById("emailformat_error")
				.style.display = "block";

		if(!errorFlag){
			emailAddress.focus();
			emailAddress.select();
		}

		errorFlag = true;
	}

	return errorFlag;

}

function resetForm(e)
{
	// Confirm that the user wants to reset the form.
	if ( confirm('Are you sure you want to RESET this form?') )
	{
		// Ensure all error fields are hidden
		hideErrors();
		
		// Set focus to the first text field on the page
		document.getElementById("fullname").focus();
		
		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();
	
	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;	
}

//hide the erros 
function hideErrors()
{
	var errorFields = document.getElementsByClassName("error");

	for (var i = 0; i < errorFields.length; i++) {
		errorFields[i].style.display = "none";
	}
}


function load()
{
	hideErrors();

	// Add event listener for the form submit
	document.getElementById("membershipForm").addEventListener("submit", validate);

	// Add event listener for the form reset
	document.getElementById("membershipForm").addEventListener("reset", resetForm);

	
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);