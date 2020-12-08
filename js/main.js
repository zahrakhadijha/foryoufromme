const heading = document.querySelector('.primary-title')
const text = heading.textContent
const splitText = text.split('')

heading.textContent = '' // avoid repeating

for (let i = 0; i < splitText.length; i++) {
	heading.innerHTML += '<span>' + splitText[i] + '</span>'
}

let char = 0
let timer = setInterval(onTick, 50)

function onTick() {
	const span = heading.querySelectorAll('span')[char]
	span.classList.add('fade')
	char++
	if (char === splitText.length) {
		complete()
		return
	}
}

function complete() {
    clearInterval(timer)
    timer = null
}