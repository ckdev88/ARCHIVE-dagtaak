<script>
export default {
	props: {
		item: Object,
	},
}
</script>

<template>
	<div :id="'dagindeling-' + item.tijdvan" class="dagindeling-item">
		<h4>
			<span class="time">{{ item.tijdvan }}: </span>
			<span class="wat" v-if="item.wat === 'Workout'"
				><a id="workout-vandaag" href="" alt="">Workout</a></span
			>
			<span class="wat" v-else-if="item.wat === 'Premarket & nieuws'"
				>Premarket & <a href="#ochtendnieuws">nieuws</a></span
			>
			<span v-else>{{ item.wat }}</span>
		</h4>
		<div class="specs">
			<div class="spec" v-for="(item, key) in item.specs">
				<li>{{ item.spec }}</li>
			</div>
		</div>
	</div>
</template>
