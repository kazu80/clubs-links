<script lang="ts" setup>
import {toRefs} from 'vue';

const props = defineProps({
	links: {
		type: Array<{
			id: number
			title: string
			url: string
		}>,
		required: true,
	},
})

// props.linksの値受け取る
const {links} = toRefs(props)
</script>

<template>
	<ul class="wrapper">
		<li v-for="link in links" :key="link.id" class="mb-5 px-5 last:mb-0">
			<a :href="link.url" class="inline-flex items-center justify-center px-5 py-3 w-full text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
	  		<span class="relative">{{ link.title }}</span>
			</a>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
.wrapper {
  .item {
		padding: 0 0.5rem;
  }
}
</style>
