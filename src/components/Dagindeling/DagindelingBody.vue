<script>
import DagindelingBodyItems from './DagindelingBodyItem.vue'
export default {
	components: { DagindelingBodyItems },
	data() {
		return {
			itemList: [
				{
					id: 1,
					type: 'Task',
					wat: 'Workout',
					specs: [
						{ spec: 'BANG / Squaredance / Yeoh / Split / Shadow box' },
						{ spec: 'Go walking' },
						{ spec: 'Learn a foreign language' },
						{ spec: 'Practice type speed / coordination' },
					],
				},
				{
					id: 2,
					type: 'Break',
					wat: 'Break ideas',
					specs: [
						{ spec: 'Push up' },
						{ spec: 'Squat' },
						{ spec: 'Bicep curl' },
						{ spec: 'Hammer curl' },
						{ spec: 'Calf raise' },
						{ spec: 'Shoulder' },
						{ spec: 'Pull up' },
						{ spec: 'WHM' },
					],
				},
			],
		}
	},
}
</script>
<template>
	<DagindelingBodyItems v-for="id of itemList" :item="id" :key="id" />
</template>
