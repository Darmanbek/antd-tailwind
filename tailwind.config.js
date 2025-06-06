/** @type {import("tailwindcss").Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				ant: "var(--ant-font-family)",
				"ant-code": "var(--ant-font-family-code)",
			},
			fontSize: {
				base: [
					"var(--ant-font-size)",
					{
						lineHeight: "var(--ant-line-height)",
					},
				],
				sm: [
					"var(--ant-font-size-sm)",
					{
						lineHeight: "var(--ant-line-height-sm)",
					},
				],
				lg: [
					"var(--ant-font-size-lg)",
					{
						lineHeight: "var(--ant-line-height-lg)",
					},
				],
				// lg: [
				// 	"var(--ant-font-size-heading-5)",
				// 	{
				// 		lineHeight: "var(--ant-line-height-heading-5)",
				// 	},
				// ],
				xl: [
					"var(--ant-font-size-heading-4)",
					{
						lineHeight: "var(--ant-line-height-heading-4)",
					},
				],
				"2xl": [
					"var(--ant-font-size-heading-3)",
					{
						lineHeight: "var(--ant-line-height-heading-3)",
					},
				],
				"3xl": [
					"var(--ant-font-size-heading-2)",
					{
						lineHeight: "var(--ant-line-height-heading-2)",
					},
				],
				"4xl": [
					"var(--ant-font-size-heading-1)",
					{
						lineHeight: "var(--ant-line-height-heading-1)",
					},
				],
			},
			colors: {
				background: {
					DEFAULT: "var(--ant-color-bg-base)",
				},

				foreground: {
					DEFAULT: "var(--ant-color-text)",
					secondary: "var(--ant-color-text-secondary)",
					tertiary: "var(--ant-color-text-tertiary)",
					quaternary: "var(--ant-color-text-quaternary)",
				},

				primary: {
					DEFAULT: "var(--ant-color-primary)",
					hover: "var(--ant-color-primary-hover)",
					active: "var(--ant-color-primary-active)",
					foreground: {
						DEFAULT: "var(--ant-color-primary-text)",
						hover: "var(--ant-color-primary-text-hover)",
						active: "var(--ant-color-primary-text-active)",
					},
					bg: {
						DEFAULT: "var(--ant-color-primary-bg)",
						hover: "var(--ant-color-primary-bg-hover)",
					},
					border: {
						DEFAULT: "var(--ant-color-primary-border)",
						hover: "var(--ant-color-primary-border-hover)",
					},
				},

				layout: {
					DEFAULT: "var(--ant-color-bg-layout)",
				},
				container: {
					DEFAULT: "var(--ant-color-bg-container)",
				},
				border: {
					DEFAULT: "var(--ant-color-border)",
					hover: "var(--ant-color-border-hover)",
					secondary: "var(--ant-color-border-secondary)",
				},
				fill: {
					content: {
						DEFAULT: "var(--ant-color-fill-content)",
						hover: "var(--ant-color-fill-content-hover)",
					},
					after: "var(--ant-color-fill-alter)",
				},
				link: {
					DEFAULT: "var(--ant-color-link)",
					hover: "var(--ant-color-link-hover)",
					active: "var(--ant-color-link-active)",
				},
				split: "var(--ant-color-split)",
				placeholder: "var(--ant-color-text-placeholder)",
			},
			margin: {
				xxs: "var(--ant-margin-xxs)",
				xs: "var(--ant-margin-xs)",
				sm: "var(--ant-margin-sm)",
				base: "var(--ant-margin)",
				md: "var(--ant-margin-md)",
				lg: "var(--ant-margin-lg)",
				xl: "var(--ant-margin-xl)",
				xxl: "var(--ant-margin-xxl)",
			},
			padding: {
				xxs: "var(--ant-padding-xxs)",
				xs: "var(--ant-padding-xs)",
				sm: "var(--ant-padding-sm)",
				base: "var(--ant-padding)",
				md: "var(--ant-padding-md)",
				lg: "var(--ant-padding-lg)",
				xl: "var(--ant-padding-xl)",
			},
			gap: {
				xs: "var(--ant-margin-xs)",
			},
			borderWidth: {
				DEFAULT: "var(--ant-line-width)",
			},
			borderStyle: {
				antd: "var(--ant-line-type)",
			},
			borderRadius: {
				xs: "var(--ant-border-radius-xs)",
				sm: "var(--ant-border-radius-sm)",
				DEFAULT: "var(--ant-border-radius)",
				lg: "var(--ant-border-radius-lg)",
			},
			height: {
				xs: "var(--ant-control-height-xs)",
				sm: "var(--ant-control-height-sm)",
				base: "var(--ant-control-height)",
				lg: "var(--ant-control-height-lg)",
			},
			lineHeight: {
				sm: "var(--ant-line-height-sm)",
				base: "var(--ant-line-height)",
				lg: "var(--ant-line-height-lg)",
			},
			boxShadow: {
				DEFAULT: "var(--ant-box-shadow)",
				secondary: "var(--ant-box-shadow-secondary)",
				tertiary: "var(--ant-box-shadow-tertiary)",
				card: "var(--ant-box-shadow-card)",
			},
			transitionDuration: {
				fast: "var(--ant-motion-duration-fast)",
				mid: "var(--ant-motion-duration-mid)",
				slow: "var(--ant-motion-duration-slow)",
			},
			transitionTimingFunction: {
				"in-out": "var(--ant-motion-ease-in-out)",
			},
		},
	},
	plugins: [],
}
