import { encode } from '@devprotocol/clubs-core'

export default () =>
	encode({
		name: 'Debug',
		twitterHandle: '@debug',
		description: '',
		url: '',
		propertyAddress: '',
		chainId: 137,
		rpcUrl: 'https://polygon-rpc.com/',
		adminRolePoints: 50,
		plugins: [
			{
				id: 'example-theme',
				options: [],
			},
			{
				id: 'unique-and-descriptive-name-here',
				options: [
					{ key: 'slug', value: 'stokens' },
					{ key: 'rpc', value: 'https://polygon-rpc.com/' },
					{ key: 'maxpage', value: 30 },
				],
			},
			{
				id: 'clubs-links',
				options: [
					{ key: 'links', value: [
						{ id: 1, title: 'Home', url: 'https://example.com' },
						{ id: 2, title: 'About', url: 'https://example.com/about' },
					]},
				],
			}
		],
	})
