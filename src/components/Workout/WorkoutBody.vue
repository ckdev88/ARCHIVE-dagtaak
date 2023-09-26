<script>
import WorkoutBodyItems from './WorkoutBodyItem.vue'
export default {
	components: { WorkoutBodyItems },
	data() {
		return {
			itemList: [
				{
					datum: 20220808,
					oefeningen: [
						{ oefening: 'onderrug', sets: 2, reps: 50 },
						{ oefening: 'schouders simpel', sets: 4, reps: 50 },
						{ oefening: 'grips', reps: 100, sets: 4 },
						{ oefening: 'biceps', reps: 50, sets: 4, gewicht: '2,4' },
					],
				},
				{
					datum: 20220809,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{
							oefening: 'schouders zwaarder',
							reps: 50,
							sets: 4,
							gewicht: '2,4',
						},
						{ oefening: 'opdrukken', reps: 25, score: 6, sets: 4 },
					],
				},
				{
					datum: 20220810,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'kuiten', reps: 50, sets: 4, gewicht: 1 },
						{ oefening: 'squat', reps: 15, sets: 4 },
					],
				},
				{
					datum: 20220811,
					oefeningen: [
						{ oefening: 'grips', reps: 100, sets: 4 },
						{ oefening: 'biceps', reps: 50, sets: 4, gewicht: '2,4' },
					],
				},
				{
					datum: 20220812,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders mobiliteit', reps: 50, sets: 2, gewicht: 2 },
						{ oefening: 'nekpres', reps: 50, sets: 2, gewicht: 4 },
						{ oefening: 'triceps overhand', reps: 25, sets: 4, gewicht: '2,4' },
						{ oefening: 'opdrukken', reps: 25, score: 6, sets: 4 },
					],
				},
				{
					datum: 20220813,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'grips', reps: 100, sets: 4 },
						{ oefening: 'bicep curls', reps: 50, sets: 4, gewicht: '2,4' },
					],
				},
				{
					datum: 20220814,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'abdominalis', reps: 30, sets: 4 },
						{ oefening: 'WHM', minuten: 30, mutatie: 'nieuw' },
						{ oefening: 'strekken', minuten: 20, mutatie: 'nieuw' },
					],
				},
				{
					datum: 20220815,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'squat', reps: 15, sets: 5, mutatie: '+15' },
						{
							oefening: 'kuiten',
							reps: 50,
							sets: 5,
							gewicht: 1,
							mutatie: '+50',
						},
					],
				},
				{
					datum: 20220816,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'nekpres', reps: 50, sets: 3, gewicht: 4 },
						{ oefening: 'schouders mobiliteit', reps: 50, sets: 2, gewicht: 2 },
						{
							oefening: 'triceps overhand',
							reps: 25,
							sets: 5,
							mutatie: '+25',
							gewicht: '2,4',
						},
						{
							oefening: 'opdrukken',
							reps: 25,
							sets: 5,
							score: 6,
							mutatie: '+25',
						},
					],
				},
				{
					datum: 20220817,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'grips', reps: 100, sets: 4 },
						{
							oefening: 'bicep curls',
							reps: 25,
							sets: 4,
							mutatie: '-25 per set, +5kg per rep',
							gewicht: 5,
						},
						{
							oefening: 'hammer curls',
							reps: 10,
							sets: 4,
							mutatie: 'nieuw',
							gewicht: 5,
						},
						{
							oefening: 'optrekken',
							reps: 4,
							sets: 4,
							gewicht: 15,
							mutatie: 'nieuw',
						},
					],
				},
				{
					datum: 20220818,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'abdominalis', reps: 30, sets: 4 },
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20220819,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'squat', reps: 15, sets: 5 },
						{
							oefening: 'kuiten',
							reps: 65,
							sets: 4,
							gewicht: 1,
							mutatie: '+10 per set',
						},
					],
				},
				{
					datum: 20220819 - 2,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'nekpres', reps: 55, sets: 2, gewicht: 5 },
						{ oefening: 'schouders mobiliteit', reps: 55, sets: 2, gewicht: 2 },
						{
							oefening: 'triceps overhand',
							reps: 30,
							sets: 4,
							mutatie: '-1 set, +5 reps per set, +1kg',
							gewicht: 5,
						},
						{
							oefening: 'opdrukken',
							reps: 30,
							sets: 4,
							score: 6,
							mutatie: '-1 set, +5 reps per set',
						},
					],
				},
				{
					datum: 20220820,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'abdominalis', reps: 30, sets: 4 },
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20220821,
				},
				{
					datum: 20220822,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'grips', reps: 100, sets: 4 },
						{
							oefening: 'bicep curls',
							reps: 25,
							sets: 5,
							gewicht: 5,
							mutatie: '+1 set',
						},
						{
							oefening: 'hammer curls',
							reps: 10,
							sets: 5,
							gewicht: 5,
							mutatie: '+1 set',
						},
						{
							oefening: 'optrekken',
							reps: 4,
							sets: 4,
							gewicht: 20,
							mutatie: '5kg per rep, indicatie',
						},
					],
				},
				{
					datum: 20220823,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'squat', reps: 15, sets: 5 },
						{
							oefening: 'kuiten',
							reps: 75,
							sets: 4,
							gewicht: 1,
							mutatie: '+10 per set',
						},
					],
				},
				{
					datum: 20220823 - 2,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{
							oefening: 'abdominalis',
							reps: 35,
							sets: 4,
							mutatie: '+5 per set',
						},
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20220823 - 3,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'nekpres', reps: 55, sets: 2, gewicht: 5 },
						{ oefening: 'schouders mobiliteit', reps: 55, sets: 2, gewicht: 2 },
						{ oefening: 'triceps overhand', reps: 30, sets: 4, gewicht: 5 },
						{ oefening: 'opdrukken', reps: 30, score: 6, sets: 4 },
					],
				},
				{
					datum: 20220824,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'WHM', minuten: 25 },
					],
				},
				{
					datum: 20220825,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'WHM', minuten: 25 },
					],
				},
				{
					datum: 20220826,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'abdominalis', reps: 35, sets: 4 },
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20220827,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'grips', reps: 100, sets: 4 },
						{ oefening: 'bicep curls', reps: 25, sets: 5, gewicht: 5 },
						{ oefening: 'hammer curls', reps: 10, sets: 5, gewicht: 5 },
						{
							oefening: 'optrekken',
							reps: 4,
							sets: 4,
							gewicht: 25,
							mutatie: '+5kg per rep, indicatie',
						},
					],
				},
				{
					datum: 20220828,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'WHM', minuten: 25 },
					],
				},
				{
					datum: 20220828 - 2,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'squat', reps: 15, sets: 5 },
						{
							oefening: 'kuiten',
							reps: 80,
							sets: 5,
							gewicht: 1,
							mutatie: '+1 set, +5 per set',
						},
						{
							oefening: 'been strekken',
							reps: 15,
							sets: 5,
							mutatie: 'nieuwe oefening',
						},
					],
				},
				{
					datum: 20220829,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{
							oefening: 'schouders simpel',
							reps: 50,
							sets: 4,
							mutatie: 'nieuwe oefening',
						},
						{ oefening: 'abdominalis', reps: 35, sets: 4 },
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20220829 - 2,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'nekpres', reps: 55, sets: 2, gewicht: 5 },
						{ oefening: 'schouders mobiliteit', reps: 55, sets: 2, gewicht: 2 },
						{ oefening: 'triceps overhand', reps: 30, sets: 4, gewicht: 5 },
						{ oefening: 'opdrukken', reps: 30, score: 6, sets: 4 },
					],
				},
				{
					datum: 20220930,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'WHM', minuten: 25 },
					],
				},
				{
					datum: 20220831,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{
							oefening: 'schouders simpel',
							reps: 50,
							sets: 4,
							mutatie: 'nieuwe oefening op de dag',
						},
						{ oefening: 'grips', reps: 100, sets: 4 },
						{ oefening: 'bicep curls', reps: 25, sets: 5, gewicht: 5 },
						{
							oefening: 'hammer curls',
							reps: 13,
							sets: 5,
							gewicht: 5,
							mutatie: '+3 reps per set',
						},
						{ oefening: 'optrekken', reps: 4, sets: 4, gewicht: 25 },
					],
				},
				{
					datum: 20220901,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'WHM', minuten: 25 },
					],
				},
				{
					datum: 20220902,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'squat', reps: 15, sets: 5 },
						{
							oefening: 'kuiten',
							reps: 85,
							sets: 5,
							gewicht: 1,
							mutatie: '+5 per set',
						},
						{
							oefening: 'been strekken',
							reps: 20,
							sets: 5,
							mutatie: '+5 per set',
						},
					],
				},
				{
					datum: 20220902 - 2,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'strekken', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'abdominalis', reps: 35, sets: 4 },
					],
				},
				{
					datum: 20220903,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'nekpres', reps: 55, sets: 2, gewicht: 5 },
						{ oefening: 'schouders mobiliteit', reps: 55, sets: 2, gewicht: 2 },
						{ oefening: 'triceps overhand', reps: 30, sets: 4, gewicht: 5 },
						{ oefening: 'opdrukken', reps: 30, score: 6, sets: 4 },
					],
				},
				{
					datum: 20220904,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'grips', reps: 100, sets: 4 },
						{ oefening: 'bicep curls', reps: 25, sets: 5, gewicht: 5 },
						{ oefening: 'hammer curls', reps: 13, sets: 5, gewicht: 5 },
						{
							oefening: 'optrekken',
							reps: 4,
							sets: 4,
							gewicht: 30,
							mutatie: '+5kg per rep, indicatie',
						},
					],
				},
				{
					datum: 20220905,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{
							oefening: 'abdominalis',
							reps: 40,
							sets: 4,
							mutatie: '+5 per set',
						},
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20220906,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{
							oefening: 'squat',
							reps: 17,
							sets: 5,
							gewicht: 5,
							mutatie: '+2 per set, +5kg',
						},
						{
							oefening: 'kuiten',
							reps: 90,
							sets: 5,
							gewicht: 1,
							mutatie: '+5 per set, +4kg',
						},
						{
							oefening: 'been strekken',
							reps: 20,
							sets: 5,
							mutatie: '+5 per set',
						},
					],
				},
				{
					datum: 20220907,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'abdominalis', reps: 40, sets: 4 },
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20220908,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'nekpres', reps: 55, sets: 2, gewicht: 5 },
						{ oefening: 'schouders mobiliteit', reps: 55, sets: 2, gewicht: 2 },
						{
							oefening: 'triceps overhand',
							reps: 32,
							sets: 4,
							gewicht: 5,
							mutatie: '+2 reps per set',
						},
						{
							oefening: 'opdrukken',
							reps: 31,
							sets: 4,
							score: 6,
							mutatie: '+1 rep per set',
						},
					],
				},
				{
					datum: 20220909,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{
							oefening: 'schouders simpel',
							reps: 50,
							sets: 2,
							mutatie: '-2 sets van 50',
						},
						{ oefening: 'chinese square dance', minuten: 15, mutatie: 'nieuw' },
						{ oefening: 'grips', reps: 100, sets: 4 },
						{
							oefening: 'bicep curls',
							reps: 27,
							sets: 5,
							gewicht: 5,
							mutatie: '+2 reps per set',
						},
						{
							oefening: 'hammer curls',
							reps: 14,
							sets: 5,
							gewicht: 5,
							mutatie: '+1 rep per set',
						},
						{ oefening: 'optrekken', reps: 4, sets: 4, gewicht: 30 },
						{
							oefening: 'dumbbell recht omhoog',
							gewicht: 5,
							reps: 30,
							sets: 3,
							mutatie: 'nieuw',
						},
					],
				},
				{
					datum: 20220910,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'abdominalis', reps: 35, sets: 4 },
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20220911,
				},
				{
					datum: 20220912,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'abdominalis', reps: 40, sets: 4 },
					],
				},
				{
					datum: 20220913,
				},
				{
					datum: 20220914,
				},
				{
					datum: 20220915,
				},
				{
					datum: 20220916,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
					],
				},
				{
					datum: 20220917,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
					],
				},
				{
					datum: 20220918,
					oefeningen: [
						{ oefening: 'WHM', minuten: 30 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
						{ oefening: 'nekpres', reps: 55, sets: 2, gewicht: 5 },
						{ oefening: 'schouders mobiliteit', reps: 55, sets: 2, gewicht: 2 },
						{
							oefening: 'triceps overhand',
							reps: 33,
							sets: 3,
							gewicht: 5,
							mutatie: 'tijdelijk -1 set door herstel ziekte',
						},
						{
							oefening: 'opdrukken',
							score: 6,
							reps: 32,
							sets: 2,
							mutatie: 'tijdelijk -2 sets door herstel ziekte',
						},
					],
				},
				{
					datum: 20220919,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
						{ oefening: 'grips', reps: 100, sets: 4 },
						{
							oefening: 'bicep curls',
							reps: 29,
							sets: 5,
							gewicht: 5,
							mutatie: '+2 reps per set',
						},
						{
							oefening: 'hammer curls',
							reps: 15,
							sets: 5,
							gewicht: 5,
							mutatie: '+1 rep per set',
						},
						{
							oefening: 'optrekken',
							reps: 4,
							sets: 4,
							gewicht: 35,
							mutatie: '5kg per rep, indicatie',
						},
						{
							oefening: 'dumbbell recht omhoog',
							gewicht: 5,
							reps: 30,
							sets: 4,
							mutatie: '+1 set',
						},
					],
				},
				{
					datum: 20220920,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'abdominalis', reps: 40, sets: 4, score: 5 },
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20220921,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'squat', reps: 18, sets: 5, gewicht: 5 },
						{
							oefening: 'kuiten',
							reps: 100,
							sets: 5,
							gewicht: 1,
							mutatie: '+5 reps per set',
						},
						{ oefening: 'been strekken', reps: 20, sets: 5 },
					],
				},
				{
					datum: 20220922,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
						{ oefening: 'nekpres', reps: 55, sets: 2, gewicht: 5 },
						{ oefening: 'schouders mobiliteit', reps: 55, sets: 2, gewicht: 2 },
						{ oefening: 'triceps overhand', reps: 33, sets: 4, gewicht: 5 },
						{ oefening: 'opdrukken', reps: 32, score: 6, sets: 4 },
					],
				},
				{
					datum: 20220923,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{
							oefening: 'abdominalis',
							reps: 45,
							sets: 4,
							score: 5,
							mutatie: '+5 reps per set',
						},
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20220924,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
						{ oefening: 'grips', reps: 100, sets: 4 },
						{ oefening: 'bicep curls', reps: 29, sets: 5, gewicht: 5 },
						{ oefening: 'hammer curls', reps: 15, sets: 5, gewicht: 5 },
						{ oefening: 'optrekken', reps: 4, sets: 4, gewicht: 35 },
						{
							oefening: 'dumbbell recht omhoog',
							gewicht: 5,
							reps: 30,
							sets: 4,
						},
					],
				},
				{
					datum: 20220925,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'abdominalis', reps: 45, sets: 4, score: 5 },
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20220926,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'squat', reps: 18, sets: 5, gewicht: 5 },
						{ oefening: 'kuiten', reps: 100, sets: 5, gewicht: 1 },
						{ oefening: 'been strekken', reps: 20, sets: 5 },
					],
				},
				{
					datum: 20220927,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'abdominalis', reps: 45, sets: 4, score: 5 },
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20220928,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
						{ oefening: 'nekpres', reps: 55, sets: 2, gewicht: 5 },
						{ oefening: 'schouders mobiliteit', reps: 55, sets: 2, gewicht: 2 },
						{ oefening: 'triceps overhand', reps: 33, sets: 4, gewicht: 5 },
						{ oefening: 'opdrukken', reps: 32, score: 6, sets: 4 },
					],
				},
				{
					datum: 20220929,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
						{ oefening: 'grips', reps: 100, sets: 4 },
						{ oefening: 'bicep curls', reps: 29, sets: 5, gewicht: 5 },
						{ oefening: 'hammer curls', reps: 15, sets: 5, gbenenewicht: 5 },
						{ oefening: 'optrekken', reps: 4, sets: 4, gewicht: 35 },
						{
							oefening: 'dumbbell recht omhoog',
							gewicht: 5,
							reps: 30,
							sets: 4,
						},
					],
				},
				{
					datum: 20220930,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 4 },
						{ oefening: 'abdominalis', reps: 45, sets: 4, score: 10 },
						{ oefening: 'strekken', minuten: 25 },
					],
				},
				{
					datum: 20221014,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
						{ oefening: 'bicep curls', reps: 50, sets: 3, gewicht: 5 },
						{ oefening: 'hammer curls', reps: 35, sets: 3, gewicht: 5 },
						{ oefening: 'trapezius', reps: 15, sets: 3, gewicht: 15 },
						{ oefening: 'optrekken', reps: 4, sets: 3, gewicht: 70 },
					],
				},
				{
					datum: 20221015,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{
							oefening: 'dumbbell recht omhoog',
							gewicht: 5,
							reps: 30,
							sets: 4,
						},
						{ oefening: 'abdominalis', reps: 25, sets: 4, score: 10 },
						{ oefening: 'opdrukken', reps: 25, sets: 4, score: 10 },
					],
				},
				{
					datum: 20221016,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
					],
				},
				{
					datum: 20221017,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
						{ oefening: 'been strekken', reps: 15, sets: 3, gewicht: 40 },
						{ oefening: 'bankdruk', reps: 5, sets: 4, gewicht: 80 },
					],
				},
				{
					datum: 20221018,
					oefeningen: [
						{ oefening: 'WHM', minuten: 25 },
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
						{ oefening: 'bicep curls', reps: 50, sets: 3, gewicht: 5 },
						{ oefening: 'hammer curls', reps: 35, sets: 3, gewicht: 5 },
						{ oefening: 'trapezius', reps: 15, sets: 3, gewicht: 15 },
						{ oefening: 'optrekken', reps: 4, sets: 3, gewicht: 70 },
					],
				},
				{
					datum: 20221103,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'nek simpel', reps: 25, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
						{ oefening: 'bicep curls', reps: 50, sets: 4, gewicht: 5 },
						{ oefening: 'hammer curls', reps: 35, sets: 4, gewicht: 5 },
					],
				},
				{
					datum: 20221104,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'nek simpel', reps: 25, sets: 2 },
						{ oefening: 'kuiten', reps: 100, sets: 5, gewicht: 1 },
						{ oefening: 'abdominalis', reps: 25, sets: 5, score: 10 },
					],
				},
				{
					datum: 20221105,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'nek simpel', reps: 25, sets: 2 },
						{ oefening: 'chinese square dance', minuten: 15 },
						{ oefening: 'opdrukken', reps: 25, sets: 4, score: 10 },
					],
				},
				{
					datum: 20221106,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'nek simpel', reps: 25, sets: 2 },
						{
							oefening: 'nekpres',
							reps: 50,
							sets: 1,
							gewicht: 5,
							comment: 'linker tricep volgeschoten, op slot, stoppen',
						},
						{
							oefening: 'squat',
							reps: 18,
							sets: 3,
							gewicht: 5,
							comment: 'van 5 naar 3 sets door lange inactiviteit',
						},
						{
							oefening: 'kuiten',
							reps: 110,
							sets: 3,
							gewicht: 1,
							comment: 'van 5 naar 3 sets door lange inactiviteit',
						},
					],
				},
				{
					datum: 20221201,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'nek simpel', reps: 50, sets: 2 },
						{ oefening: 'nekpres', reps: 50, sets: 3, gewicht: 5 },
						// { oefening: 'schouders mobiliteit', reps: 55, sets: 2, gewicht: 5 },
						{
							oefening: 'squat',
							reps: 18,
							sets: 5,
							gewicht: 5,
							comment: 'van 5 naar 3 sets door lange inactiviteit',
						},
						{
							oefening: 'kuiten',
							reps: 125,
							sets: 5,
							gewicht: 1,
							comment: 'van 5 naar 3 sets door lange inactiviteit',
						},
					],
				},
				{
					datum: 20221202,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'nek simpel', reps: 50, sets: 2 },
						{ oefening: 'hangen', reps: 1, sets: 2, gewicht: 80 },
						// { oefening: 'optrekken', reps: 4, sets: 1, gewicht: 70 }
					],
				},
				{
					datum: 20221226,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'nek simpel', reps: 50, sets: 2 },
						{ oefening: 'hangen', reps: 1, sets: 2, gewicht: 80 },
					],
				},
				{
					datum: 20221226,
					oefeningen: [
						{ oefening: 'onderrug', reps: 50, sets: 2 },
						{ oefening: 'schouders simpel', reps: 50, sets: 2 },
						{ oefening: 'nek simpel', reps: 50, sets: 2 },
						{ oefening: 'hangen', reps: 1, sets: 2, gewicht: 80 },
					],
				},
				{
					datum: 20230925,
					oefeningen: [
						{
							oefening: '', // TODO: on current day, select/option field, day passed = readonly
							reps: 0,
							sets: 0,
						}, //" TODO: dynamically inserted excersize from selection of predetermined options"
						{
							oefening: '', // TODO: on current day, always have an extra empty line to easily submit
							reps: 0,
							sets: 0,
						},
					],
				},
				{
					datum: 20230926,
					oefeningen: [
						{
							oefening: '', // TODO: on current day, select/option field, day passed = readonly
							reps: 0,
							sets: 0,
						}, //' TODO: dynamically inserted excersize from selection of predetermined options'
						{
							oefening: '', // TODO: on current day, always have an extra empty line to easily submit
							reps: 0,
							sets: 0,
						},
					],
				},
			],
			showWorkoutArchive: true,
		}
	},
	methods: {
		toggleArchive() {
			this.showWorkoutArchive = !this.showWorkoutArchive
		},
		getWorkoutGridClass(showWorkoutArchive) {
			if (showWorkoutArchive) return 'showArchive'
			return 'hideArchive'
		},
	},
}
</script>
<!-- TODO: so this whole dataset will be stored in a local database... sqlite? -->

<template>
	<button @click="toggleArchive" v-if="showWorkoutArchive">
		Hide workout archive
	</button>
	<button @click="toggleArchive" v-else>Show workout archive</button>

	<div id="workout-grid" :class="getWorkoutGridClass(showWorkoutArchive)">
		<div id="curdatenu"></div>
		<WorkoutBodyItems v-for="datum of itemList" :item="datum" :key="datum" />
	</div>
	<div style="display: none"></div>
</template>
