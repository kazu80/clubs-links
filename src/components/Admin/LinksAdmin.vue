<script lang="ts" setup>
import { ClubsPropsAdminPages, setOptions } from '@devprotocol/clubs-core';
import { PropType, ref } from 'vue'
import Add from './LinksAdmin/Add.vue'
import View from './LinksAdmin/View.vue'
import Setting from './LinksAdmin/Setting.vue';

const props = defineProps({
	options: {
		type: Array as PropType<any>,
		required: true,
	},
	clubs: {
		type: Object as PropType<ClubsPropsAdminPages['clubs']>,
		required: true,
	},
})

const tab = ref(1)
const currentPluginIndex = ref(props.clubs?.currentPluginIndex || 0)

// props.linksの値受け取る
const links = ref<{
	id: number
	title: string
	url: string
}[]>(props.options.find(({ key }) => key === 'links')?.value || [])

const currentTab = (tabNumber: number) => {
	tab.value = tabNumber
}

const addLink = (addLink) => {
	if (currentPluginIndex.value === 0) {
		return
	}

	// linksに新しいリンクを追加する
	links.value = links.value.concat(addLink)

	setOptions(
		[
			{ key: 'links', value: links.value },
		],
		currentPluginIndex.value
	)

	tab.value = 1
}

// 引数idのlinksを削除する
const deleteLink = (id: number) => {
	if (currentPluginIndex.value === 0) {
		return
	}

	links.value = links.value.filter((link) => link.id !== id)

	setOptions(
[
			{ key: 'links', value: links.value },
		],
		currentPluginIndex.value
	)
}

</script>
<template>
  <ul
		class="mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
		>
		<li>
			<button
				@click="currentTab(1)"
				class="tab-btn"
				:class="{
					'active': tab === 1,
				}"
			>Links</button>
		</li>
		<li>
	  	<button
				@click="currentTab(2)"
				class="tab-btn"
				:class="{
					'active': tab === 2,
				}"
			>Add links</button>
		</li>
		<li v-if="false">
	  	<button
				@click="currentTab(3)"
				class="tab-btn"
				:class="{
					'active': tab === 3,
				}"
			>Setting</button>
		</li>
  </ul>
  <div class="p-2">
		<div v-if="tab === 1">
	  	<View
				v-model:links="links"
				@deleteLinks="deleteLink"
			/>
		</div>
		<div v-if="tab === 2">
			<Add
				v-model:links="links"
				@addLink="addLink"
			/>
		</div>
		<div v-if="tab === 3">
			<Setting />
		</div>
  </div>
</template>

<style lang="scss" scoped>
.tab-btn {
	margin: 8px 0;
	padding: 16px 28px;
	border-bottom: 2px solid transparent;
	color: #aaaaaa;
	font-size: 20px;
  transition: 0.2s ease-in-out;

	&.active {
		color: #ffffff;
		border-bottom: 2px solid #ffffff;
	}

	&:hover {
		color: #aaaaaa;
		background-color: #ffffff;
		border-color: #aaaaaa;
		opacity: 0.7;
	}
}
</style>
