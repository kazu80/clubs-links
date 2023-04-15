<script lang="ts" setup>
import {PropType, ref} from 'vue';
import ClubsLinksList from './ClubsLinksList.vue';

const props = defineProps({
	options: {
		type: Array as PropType<any>,
		required: true,
	},
})

const links = ref<{
	id: number
	title: string
	url: string
}[]>(props.options.find(({ key }) => key === 'links')?.value || [])

</script>

<template>
	<section class="py-10">
  	<h1 class="mb-10 text-4xl text-gray-700 font-bold text-center">Link</h1>
  	<ClubsLinksList :links="links" />
	</section>
</template>

<style lang="scss" scoped>

</style>
