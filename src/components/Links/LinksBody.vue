<script>
import LinksBodyItems from './LinksBodyItem.vue'
// TODO: ideally implement feedreader here: an improved (merged) version of https://github.com/ckdev88/js-feedreader and https://github.com/ckdev88/db-feedreader
export default {
	components: { LinksBodyItems },
	data() {
		return {
			itemList: [
				{
					id: 0,
					name: 'first link',
					uri: 'https://ckdev88.github.io'
				},
				{
					id: 1,
					name: 'second link',
					uri: 'https://ckdev88.github.io/en'
				}
			]
		}
	}
}
</script>
<template>
	<h3>Links body item</h3>
	<ul>
		<LinksBodyItems v-for="id of itemList" :item="id" :key="id" />
	</ul>
</template>
