import type { Config } from 'tailwindcss'

/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
