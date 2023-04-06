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
				id: 'clubs-plugin-links',
				options: [
					{
						key: 'links',
						value: [
							{ id: 1, title: 'Twitter', url: 'https://example.com' },
							{ id: 2, title: 'Instagram', url: 'https://example.com/about' },
							{ id: 3, title: 'Youtube', url: 'https://example.com/about' },
							{ id: 4, title: 'TickTok', url: 'https://example.com/about' },
						],
					},
				],
			},
		],
	})
