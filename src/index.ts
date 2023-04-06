import {
	ClubsFunctionGetAdminPaths,
	ClubsFunctionGetPagePaths,
	ClubsFunctionPlugin,
	ClubsPluginCategory,
	ClubsPluginMeta,
	ClubsFunctionGetSlots,
	ClubsPluginOption,
	ClubsConfiguration,
} from '@devprotocol/clubs-core'
import { default as Admin } from './pages/Admin.astro'
import Page from './pages/Page.astro'
import ClubsLinks from './components/Links/ClubsLinks.vue'

export const getPagePaths: ClubsFunctionGetPagePaths = async (options) => {
	return [
		{
			paths: [''],
			component: Page,
			props: { options },
		},
	]
}

export const getSlots: ClubsFunctionGetSlots = async (
	options: readonly ClubsPluginOption[],
	config: ClubsConfiguration,
	utils
) => [
	{
		slot: 'page:content:home:after-content',
		component: ClubsLinks,
		props: { options },
	},
]

export const getAdminPaths: ClubsFunctionGetAdminPaths = async (options) => {
	return [{ paths: [''], component: Admin, props: { options } }]
}

export const meta: ClubsPluginMeta = {
	id: 'clubs-plugin-links',
	displayName: 'Links',
	category: ClubsPluginCategory.Uncategorized,
	icon: './assets/icon-links.png',
	description:
		'The app called "Links" is designed to make accessing websites easier. With this app, you can generate links by registering a URL and title. This makes it easy to access websites and other resources online.',
	previewImages: [
		'./assets/links-preview01.png',
		'./assets/links-preview02.png',
		'./assets/links-preview03.png',
	],
}

export default {
	getPagePaths,
	getAdminPaths,
	getSlots,
	meta,
} as ClubsFunctionPlugin
