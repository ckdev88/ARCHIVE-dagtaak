<script>
import NavigationBodyItems from './NavigationBodyItem.vue'
export default {
	components: { NavigationBodyItems },
	data() {
		return {
			itemList: [
				{
					id: 1,
					link: '#dagindeling',
					tekst: 'dagindeling',
				},
				{
					id: 2,
					link: '#workout',
					tekst: 'workout',
				},
				{
					id: 9,
					link: '#unsorted-notes',
					tekst: 'unsorted-notes',
				},
				{
					id: 10,
					link: '#links',
					tekst: 'links',
				},
				{
					id: 11,
					link: '#eigen-algo',
					tekst: 'eigen-algo',
				},
				{
					id: 13,
					link: '#referenties',
					tekst: 'referenties',
				},
				{
					id: 14,
					link: '#coding',
					tekst: 'coding',
				},
			],
		}
	},
}
</script>
<template>
	<ul class="nostyle">
		<NavigationBodyItems v-for="id of itemList" :item="id" :key="id" />
	</ul>
</template>
