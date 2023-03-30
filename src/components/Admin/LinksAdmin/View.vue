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

const emits = defineEmits()

// props.linksの値受け取る
const {links} = toRefs(props)

// 引数idのlinksを削除する
const deleteLink = (id: number) => {
	emits('deleteLinks', id)
}
</script>

<template>
  <h1 class="page-title">Links</h1>
  <ul class="wrapper">
	<li v-for="link in links" :key="link.title" class="item">
	  <div class="item-link">
		<p class="title">{{ link.title }}</p>
		<p class="url">
		  <a :href="link.url" target="_blank">{{ link.url }}</a>
		</p>
	  </div>
	  <div class="item-control">
		<button class="btn" @click="() => {
					  deleteLink(link.id)
		}">Delete
		</button>
	  </div>
	</li>
  </ul>
</template>

<style lang="scss" scoped>
.page-title {
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
}

.wrapper {
	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		font-size: 16px;
		border-bottom: 1px solid #aaaaaa;

		.item-link {
			width: 80%;

			.title {
				font-size: 16px;
				font-weight: bold;
				line-height: 1.6;
			}

			.url {
				font-size: 12px;
				color: #aaaaaa;
			}
		}

		.item-control {
			width: 20%;

			.btn {
				width: 100%;
				padding: 5px 0;
				font-size: 16px;
				color: #ffffff;
				background-color: #990000;
				border: none;
				cursor: pointer;
			}
		}
	}
}
</style>
