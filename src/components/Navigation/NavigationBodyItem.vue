<script>
export default {
	props: {
		item: Object,
	}
}
</script>
<template>
	<li :id="'link-'+item.id">
		<a :href="item.link">{{item.tekst}}</a>
	</li>
</template>
