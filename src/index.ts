import {
	ClubsFunctionGetAdminPaths,
	ClubsFunctionGetPagePaths,
	ClubsFunctionPlugin,
	ClubsPluginCategory,
	ClubsPluginMeta,
	ClubsFunctionGetSlots,
	ClubsPluginOption, ClubsConfiguration,
} from '@devprotocol/clubs-core'
import { default as Admin } from './pages/Admin.astro'
import MyPage from './pages/MyPage.astro';
import ClubsLinks from './components/Links/ClubsLinks.vue'

export const getPagePaths: ClubsFunctionGetPagePaths = async (options) => {
	return [
		{
			paths: [''],
			component: MyPage,
			props: { options }
		}
	]
}

export const getSlots: ClubsFunctionGetSlots = async (options: readonly ClubsPluginOption[], config: ClubsConfiguration, utils) => [
	{
		slot: 'page:content:home:before-content',
		component: ClubsLinks,
		props: { options },
	},
]

export const getAdminPaths: ClubsFunctionGetAdminPaths = async (options) => {
	return [{ paths: [''], component: Admin, props: { options } }]
}

export const meta: ClubsPluginMeta = {
	id: 'clubs-links',
	displayName: 'Clubs Links',
	category: ClubsPluginCategory.Uncategorized,
}

export default {
	getPagePaths,
	getAdminPaths,
	getSlots,
	meta,
} as ClubsFunctionPlugin
