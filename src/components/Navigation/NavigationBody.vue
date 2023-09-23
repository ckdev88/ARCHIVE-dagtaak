<script>
import NavigationBodyItems from './NavigationBodyItem.vue'
// TODO: seperate data below from view model
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
					id: 10,
					link: '#links',
					tekst: 'links',
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
