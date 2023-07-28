<script>
export default {
	props: {
		item: Object,
	},
}
</script>

<template>
	<div class="workout-dag" :id="'workout-' + item.datum">
		<h3>
			{{ item.dag }} <span class="datum">{{ item.datum }}</span
			><span v-if="item.beschrijving">: {{ item.beschrijving }}</span
			><a :name="'workout-' + item.datum"></a>
		</h3>
		<div v-for="(i, key) in item.oefeningen">
			<label
				:for="'workout-' + item.datum + '-' + key"
				style="display: block; cursor: pointer"
				><dt>{{ i.oefening }}</dt>
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
