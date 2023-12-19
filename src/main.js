import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

document.addEventListener('DOMContentLoaded', (e) => {
	const current = new Date()
	const localeCode = 'nl-NL'

	document.getElementById('toggleNav').onclick = function() {
		const aside = document.getElementById('aside')
		if (aside.classList.contains('hidden')) {
			aside.classList.remove('hidden')
	} else {
			aside.classList.add('hidden')
		}
	}

	function currentDate(ret = 0) {
		const dateObj = current// TODO: remove/replace vars that arent read

		const dateString = current.toLocaleString()
		const monthNameShort = current.toLocaleString(localeCode, {
			month: 'short',
		})
		const dayNameLong = current.toLocaleString(localeCode, { weekday: 'long' })

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

		var date = new Date() // TODO: remove/replace vars that arent read
		const dateOutput = yearNum + monthNum + dayNum

		if (document.getElementById('workout-' + dateOutput) !== null) {
			var ele = document.getElementById('workout-' + dateOutput)
			ele.classList.add('vandaag')
		}

		if (ret === 1) {
			return dateOutput
		}
	}
	currentDateNum(1)


	function currentTime() {
		let current = new Date().toLocaleTimeString(localeCode, { // TODO: make times global and defined once total
			hour: '2-digit',
			minute: '2-digit',

			second: '2-digit',
			timeZone: 'America/Argentina/Buenos_Aires',
		})

		document.getElementById('klok').innerText = current
		let time = setTimeout(function() {
			currentTime(current)
		}, 1000)

		/*-- */
		let klein = current.replace(':', '')
		let wat = klein.substring(0, 4)
	}
	currentDate()
	currentTime(current)

})
