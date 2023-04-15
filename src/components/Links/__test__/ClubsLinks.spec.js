import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ClubsLinks from '../ClubsLinks.vue';

describe('ClubsLinks Test', () => {
	it('v1.0.X', () => {
		const linksOptions = {
			key: 'links',
			value: [
				{ id: 1, title: 'Twitter', url: 'https://example.com' },
				{ id: 2, title: 'Instagram', url: 'https://example.com/about' },
				{ id: 3, title: 'Youtube', url: 'https://example.com/about' },
				{ id: 4, title: 'TickTok', url: 'https://example.com/about' },
			],
		}

		const wrapper = mount(ClubsLinks, {props: {options: [linksOptions]}});

		// タイトルがある
		expect(wrapper.text()).toContain('Links');

		// 4つのリンクがある
		expect(wrapper.findAll('a').length).toBe(4);

		// 1つめのリンクのタイトルがlinkOptionsの1つめのタイトルと一致する
		expect(wrapper.findAll('a').at(0).text()).toBe(linksOptions.value[0].title);

		// 1つめのリンクのURLがlinkOptionsの1つめのURLと一致する
		expect(wrapper.findAll('a').at(0).attributes('href')).toBe(linksOptions.value[0].url);
	});
});
