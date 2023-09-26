<script>
export default {
	props: {
		item: Object,
	},
	methods: {
		getCurrentDateInt() {
			let currentDate = new Date()
			return Number(
				currentDate.getFullYear() +
					(currentDate.getMonth() + 1).toString().padStart(2, '0') +
					currentDate.getDate().toString().padStart(2, '0')
			)
		},
		getWorkoutClassList(nudate, datum) {
			if (Number(nudate) > Number(datum)) return 'workout-dag archief'
			else if (Number(nudate) === Number(datum)) return 'workout-dag vandaag'
			return 'workout-dag'
		},
	},
}
</script>

<template>
	<div
		:class="getWorkoutClassList(getCurrentDateInt(), item.datum)"
		:id="'workout-' + item.datum"
	>
		<h3>
			<span class="datum">{{ item.datum }}</span
			><a :name="'workout-' + item.datum"></a>
		</h3>
		<div v-for="(i, key) in item.oefeningen">
			<label
				:for="'workout-' + item.datum + '-' + key"
				style="display: block; cursor: pointer"
			>
				<dt>{{ i.oefening }}</dt>
				<dd>
					<input
						type="number"
						:id="'workout-' + item.datum + '-' + key"
						:name="'workout-' + item.datum + '-' + key"
						onclick="this.select()"
					/>&nbsp;
					<span v-if="i.minuten">{{ i.minuten }} minuten</span>
					<span v-if="i.sets">{{ i.sets }} sets</span>
					<span v-if="i.reps">* {{ i.reps }} reps</span>
					<span v-if="i.gewicht"> * {{ i.gewicht }}kg</span>
					<span v-else-if="i.score"> * {{ i.score }}</span>
					<span class="score"
						>, score:
						<span v-if="i.minuten" class="score">{{ i.minuten * 50 }}</span>
						<span v-else>
							<span v-if="i.gewicht">{{ i.sets * i.reps * i.gewicht }} </span>
							<span v-else-if="i.score">{{ i.sets * i.reps * i.score }}</span>
							<span v-else>{{ i.sets * i.reps }}</span> </span
						>, totaal: {{ i.gewicht }}
					</span>
					&nbsp;<sup class="badge" v-if="i.mutatie"
						><b>{{ i.mutatie }}</b></sup
					>
				</dd>
			</label>
		</div>
	</div>
</template>
