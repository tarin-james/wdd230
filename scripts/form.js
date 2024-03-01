const kp1 = document.querySelector("#pword");
const kp2 = document.querySelector("#pword2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "The Passowords entered do not match, please try again.";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
        kp1.style.backgroundColor = "#fff0f3";
		kp2.value = "";
        kp1.value = "";
		kp1.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
        kp1.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

const rangeOutput = document.querySelector(".rangeValue");
rangeOutput.innerHTML = '5'
const rangeInput = document.querySelector("#range");

rangeInput.addEventListener('change', displayRatingValue);
rangeInput.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeOutput.innerHTML = rangeInput.value;
}
