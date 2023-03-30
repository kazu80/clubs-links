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
  <h1 class="mb-1 font-xl font-bold">LINK</h1>
  <ClubsLinksList :links="links" />
</template>

<style lang="scss" scoped>

</style>
