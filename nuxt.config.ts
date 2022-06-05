import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	builder: 'webpack',
	ssr: false,
	target: 'static',
	css: [
		'~/styles/index.scss'
	],
	hooks: {
		"webpack:config": (configs) => {
			configs.forEach((config) => {
				config.module.rules = [
					...config.module.rules,
					{
					  test: /\.(vs|fs|glsl)$/,
					  exclude: /node_modules/,
					  use: [
						'raw-loader',
						{
						  loader: 'glslify-loader',
						  options: {
							transform: [
							  ['glslify-hex'],
							  ['glslify-import']
							],
							basedir: './glsl-chunks'
						  }
						}
					  ]
					}
				  ]
			})
		}
	},
})
