<script>
export default {
	props: {
		item: Object,
	}
}
</script>
<template>
	<li :id="'link-' + item.id">
		<a :href="item.uri">{{ item.name }}</a>
	</li>
</template>
