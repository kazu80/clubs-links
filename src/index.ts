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
import ClubsLinks from './components/Links/ClubsLinks.astro'
import Icon from './assets/icon-links.png'
import ImageLinksPreview01 from './assets/links-preview01.png'
import ImageLinksPreview02 from './assets/links-preview02.png'
import ImageLinksPreview03 from './assets/links-preview01.png'

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
	return [{ paths: ['links'], component: Admin, props: { options } }]
}

export const meta: ClubsPluginMeta = {
	id: 'clubs-plugin-links',
	displayName: 'Links',
	category: ClubsPluginCategory.Uncategorized,
	icon: Icon,
	description:
		'The app called "Links" is designed to make accessing websites easier. With this app, you can generate links by registering a URL and title. This makes it easy to access websites and other resources online.',
	previewImages: [
		ImageLinksPreview01,
		ImageLinksPreview02,
		ImageLinksPreview03,
	],
}

export default {
	getPagePaths,
	getAdminPaths,
	getSlots,
	meta,
} as ClubsFunctionPlugin
