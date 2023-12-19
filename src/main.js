import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

document.addEventListener('DOMContentLoaded', () => {
	const current = new Date()
	const localeCode = 'nl-NL'

	document.getElementById('toggleNav').addEventListener('click', () => {
		const aside = document.getElementById('aside')
		if (aside.classList.contains('hidden')) {
			aside.classList.remove('hidden')
		} else {
			aside.classList.add('hidden')
		}
	})

	function currentDate() {
		const a = document.querySelector('#workout-vandaag')
		a.href = '#workout-' + currentDateNum(1, 0, 0)

		var date = new Date()
		var optionsDate = { weekday: 'long', month: 'long', day: 'numeric' }
		const dateOutput = date.toLocaleDateString([localeCode], optionsDate)

		document.getElementById('datum').innerHTML = dateOutput
	}

	function currentDateNum(ret = 1) {
		const yearNum = current.toLocaleString(localeCode, { year: 'numeric' })
		const monthNum = current
			.toLocaleString(localeCode, { month: 'numeric' })
			.padStart(2, '0')
		const dayNum = current
			.toLocaleString(localeCode, { day: 'numeric' })
			.padStart(2, '0')

		const dateOutput = yearNum + monthNum + dayNum

		if (document.getElementById('workout-' + dateOutput) !== null) {
			var ele = document.getElementById('workout-' + dateOutput)
			ele.classList.add('vandaag')
		}

		if (ret === 1) {
			return dateOutput
		}
	}
	currentDateNum(1, 1)

	function currentTime() {
		let current = new Date().toLocaleTimeString(localeCode, {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			timeZone: 'America/Argentina/Buenos_Aires',
		})

		document.getElementById('klok').innerText = current
		setTimeout(() => {
			currentTime()
		}, 1000)
	}
	currentDate()
	currentTime()
})
