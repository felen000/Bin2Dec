let input = document.querySelector(`#bin`)
let convertButton = document.querySelector(`.btn`)
let result = document.querySelector(`.result`)

convertButton.addEventListener(`click`, (e) => {
	let binaryNumber = Number(input.value);
	let decimalNumber = convertToDec(binaryNumber)

	renderResult(decimalNumber);
})

function convertToDec(bin) {
	return parseInt(bin, 2);
}

function renderResult(decimal) {
	if (isNaN(decimal)) {
		result.innerHTML = `Entered number isn't binary!`
		return
	}
  
	result.classList.remove(`text-muted`)
	result.innerHTML = decimal
}
