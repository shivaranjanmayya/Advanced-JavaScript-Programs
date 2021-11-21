function validate() {

	const form = document.getElementById("form");
	const username = document.getElementById("username");
	const password = document.getElementById("password");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		checkInputs();
	});

	function checkInputs() {

		const usernameValue = username.value.trim();
		const passwordValue = password.value.trim();
	


		if (usernameValue === "") {
			setErrorFor(username, "Username cannot be blank");
		}
		else if (!isusername(usernameValue)) {

			setErrorFor(username, "Not a valid username");
		}
		else {
			setSuccessFor(username);
		}

	

		if (passwordValue === "") {
			setErrorFor(password, "Password cannot be blank");
		}
		else if (!ispassword(passwordValue)) {
			alert("The password must contain at least 1 lowercase alphabetical character, uppercase alphabetical character, numeric value , special character and eight characters or longer.");
		}

		else {
			setSuccessFor(password);
		}

		function setErrorFor(input, message) {
			const formControl = input.parentElement;
			const small = formControl.querySelector("small");
			formControl.className = "form-control error";
			small.innerText = message;
		}

		function setSuccessFor(input) {
			const formControl = input.parentElement;
			formControl.className = "form-control success";
		}


		
		function isusername(username) {
			return /^[a-zA-Z0-9!@#\$%\^\&*]+$/.test(username);
		}
		function ispassword(password) {
			return /^[\w\[\]`!@#$%\^&*()={}:;<>+'-]*$/.test(password);
		}

	}
}