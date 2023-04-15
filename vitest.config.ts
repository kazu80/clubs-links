/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'
import Vue from '@vitejs/plugin-vue'
export default getViteConfig({
	plugins: [Vue()],
	test: {
		globals: true,
		environment: 'happy-dom',
	},
} as any)
