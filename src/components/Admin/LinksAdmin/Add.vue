<script lang="ts" setup>
import {ref, toRefs} from 'vue';

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
const emits = defineEmits(['addLink'])

const links = ref(props.links || [])

const title = ref('')
const link = ref('')

const submitForm = () => {
	// linksの中の一番大きいidに1を足したものを新しいidとする
	const id = links.value.length === 0 ? 1 : Math.max(...links.value.map((link) => link.id)) + 1

	emits('addLink', { id, title: title.value, url: link.value })

	title.value = ''
	link.value = ''
}
</script>

<template>
  <h1 class="page-title">Add links</h1>
  <form @submit.prevent="submitForm">
	<div class="mb-4">
	  <label>
		Title:
		<input type="text" v-model="title">
	  </label>
	</div>
	<div class="mb-8">
	  <label>
		Link URL:
		<input type="url" v-model="link">
	  </label>
	</div>
	<div class="">
	  <button class="btn" type="submit">Submit</button>
	</div>
  </form>
</template>

<style lang="scss" scoped>
.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

label {
	font-size: 18px;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  color: black;
}

.btn {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
