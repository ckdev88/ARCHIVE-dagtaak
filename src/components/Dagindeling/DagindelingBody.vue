<script>
import DagindelingBodyItems from './DagindelingBodyItem.vue'
export default {
	components: { DagindelingBodyItems },
	data() {
		return {
			itemList: [
				{
					id: 0,
					tijdvan: '0500',
					wat: 'Wekker',
				},
				{
					id: 1,
					tijdvan: '0505',
					wat: 'Wim Hof Methode',
				},
				{
					id: 2,
					tijdvan: '0525',
					wat: 'Basismobiliteit (Onderrug, schouders, kaak & postuur)',
					specs: [
						{ spec: 'Bekken kantelen 50*2' },
						{ spec: 'Schouders simpel variatie 50*2' },
						{ spec: 'Adem 3 mo/mo, 3 mo/ne, 3 ne/ne' },
						{ spec: 'Nek leun 15s. ↖ ↗ *2' },
						{ spec: 'Buiklig, kin ↑ ← → ↓ * 75, 3 sets' },
						{ spec: 'Ruglig, kin ↑ ← → ↓ * 75, 3 sets' },
					],
				},
				{
					id: 3,
					tijdvan: '0555',
					wat: 'Hydrateren',
					specs: [
						{ spec: 'Water 500ml' },
						{ spec: 'Supplementie' },
						{ spec: 'Banaan 1*' },
						{ spec: 'Koffie' },
					],
				},
				{
					id: 4,
					tijdvan: '0600',
					wat: 'Split',
				},

				{
					id: 5,
					tijdvan: '0620',
					wat: 'Routine miniworkout',
					specs: [
						{ spec: 'Koffie!' },
						{ spec: 'Opdrukken * 100, di/do/za' },
						{ spec: 'Situps * 100, di/do/za' },
						{ spec: 'Squats * 100, ma/wo/vr' },
						{ spec: 'Bicep curls * 100, di/do/za' },
						{ spec: 'Hammer curls * 100, ma/wo/vr' },
						{ spec: 'Calf raises * 200, altijd' },
					],
				},
				{
					id: 6,
					tijdvan: '0650',
					wat: 'Mixed full body workout',
					specs: [{ spec: 'Yordan Yeoh of Bas Rutten BANG' }],
				},
				{
					id: 7,
					tijdvan: '0730',
					wat: 'Ontbijt: Havermout',
					specs: [
						{ spec: 'Melk 200ml' },
						{ spec: 'Water 100ml' },
						{ spec: 'Havermout fijn 100gr' },
						{ spec: 'Banaan 1*' },
						{ spec: 'Rozijnen 30gr' },
					],
				},
				{
					id: 8,
					tijdvan: '0800',
					wat: 'Lopen',
					specs: [{ spec: 'Optrekken ma/wo/vr' }],
				},
				{
					id: 9,
					tijdvan: '0845',
					wat: 'Douchen',
					specs: [
						{ spec: 'Koud' },
						{ spec: 'Nagels' },
						{ spec: 'Tanden' },
						{ spec: 'Voeten' },
					],
				},
				{
					id: 10,
					tijdvan: '0915',
					wat: 'Portugees leren',
				},
				{
					id: 11,
					tijdvan: '1030',
					wat: 'Lunch voorbereiden',
					specs: [{ spec: 'Water: 500ml' }],
				},
				{
					id: 12,
					tijdvan: '1100',
					wat: 'Werk: aandelen',
				},
				{
					id: 13,
					tijdvan: '1300',
					wat: 'Lunch',
					specs: [
						{ spec: 'Water: 500ml' },
						{ spec: 'Lijnzaadolie: 1 eetlepel' },
					],
				},
				{
					id: 14,
					tijdvan: '1345',
					wat: 'Portugees leren',
				},
				{
					id: 15,
					tijdvan: '1500',
					wat: 'Split of boodschappen',
					specs: [
						{ spec: 'Split: ma/wo/vr' },
						{ spec: 'Boodschappen: di/do/za' },
						{ spec: 'Water: 500ml' },
					],
				},
				{
					id: 16,
					tijdvan: '1530',
					wat: 'Eten',
				},
				{
					id: 17,
					tijdvan: '1700',
					wat: 'Werk: aandelen',
				},
				{
					id: 18,
					tijdvan: '1830',
					wat: 'Shake',
					specs: [
						{ spec: 'Melk 100ml' },
						{ spec: 'Water 400ml' },
						{ spec: 'Banaan 2* (86kcal)' },
						{ spec: 'Aardbeien 8*' },
						{ spec: 'Haver 100gr (.. kcal)' },
					],
				},
				{
					id: 19,
					tijdvan: '2000',
					wat: 'Chillen & telefoon uit',
				},
			],
		}
	},
}
</script>
<template>
	<DagindelingBodyItems v-for="id of itemList" :item="id" :key="id" />
</template>
