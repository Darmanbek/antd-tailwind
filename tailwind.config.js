/** @type {import("tailwindcss").Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				ant: "var(--ant-font-family)",
				"ant-code": "var(--ant-font-family-code)"
			},
			colors: {
				background: "var(--ant-color-bg-base)",
				layout: "var(--ant-color-bg-layout)",
				foreground: {
					DEFAULT: "var(--ant-color-text)",
					secondary: "var(--ant-color-text-secondary)",
					tertiary: "var(--ant-color-text-tertiary)",
					quaternary: "var(--ant-color-text-quaternary)"
				},

				primary: {
					DEFAULT: "var(--ant-color-primary)",
					bg: "var(--ant-color-primary-bg)"
				},

				container: "var(--ant-color-bg-container)"
			},
			margin: {
				xs: "var(--ant-margin-xs)"
			},
			gap: {
				xs: "var(--ant-margin-xs)"
			},
			borderWidth: {
				DEFAULT: "var(--ant-line-width)"
			},
			borderStyle: {
				antd: "var(--ant-line-type)"
			},
			boxShadow: {
				DEFAULT: "var(--ant-box-shadow)",
				secondary: "var(--ant-box-shadow-secondary)",
				tertiary: "var(--ant-box-shadow-tertiary)"
			},
			transitionDuration: {
				fast: "var(--ant-motion-duration-fast)",
				mid: "var(--ant-motion-duration-mid)",
				slow: "var(--ant-motion-duration-slow)"
			},
			transitionTimingFunction: {
				"in-out": "var(--ant-motion-ease-in-out)"
			}
		}
	},
	plugins: []
}
