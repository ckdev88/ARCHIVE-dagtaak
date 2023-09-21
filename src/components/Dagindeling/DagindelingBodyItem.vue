<script>
export default {
	props: {
		item: Object,
	},
}
</script>

<template>
	<div :id="'dagindeling-' + item.id" class="dagindeling-item">
		<h4>
			<span class="time">Todo: </span>
			<span class="wat" v-if="item.wat === 'Workout'"><a id="workout-vandaag" href="" alt="">Workout</a></span>
			<span v-else>{{ item.wat }}</span>
		</h4>
		<div class="specs">
			<div class="spec" v-for="(item) in item.specs">
				<li>{{ item.spec }}</li>
			</div>
		</div>
	</div>
</template>
