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
	<li v-for="link in links" :key="link.id" class="mb-2 px-2">
	  <a :href="link.url" target="_blank" rel="noopener noreferrer">
			<div class="flex">
			  <div>
					<p class="text-base">{{ link.title }}</p>
					<p class="text-xs text-gray-400">{{ link.url }}</p>
		  	</div>
			</div>
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
