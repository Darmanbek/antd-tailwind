import { cva } from "class-variance-authority"

export const buttonVariants = cva(
	"outline-none relative inline-flex gap-xs items-center justify-center text-base text-foreground bg-background-container border-transparent border border-solid cursor-pointer transition-all duration-mid ease-in-out select-none touch-none text-foreground",
	{
		variants: {
			type: {
				default:
					"border-border bg-background-container hover:border-primary hover:text-primary active:text-primary-active active:border-primary-active",
				primary:
					"text-white bg-primary hover:bg-primary-hover active:bg-primary-active",
				filled:
					"text-primary bg-primary-bg hover:bg-primary-bg-hover active:bg-primary-border",
				dashed:
					"border-border border-dashed hover:border-primary  hover:text-primary  active:text-primary-active  active:border-primary-active ",
				text: "bg-transparent border-transparent hover:bg-fill-tertiary active:bg-background-foreground-active",
				link: "bg-transparent border-transparent text-link hover:text-link-hover active:text-link-active",
			},
			size: {
				small: "h-sm rounded-sm px-sm",
				middle: "h-base rounded px-base",
				large: "h-lg rounded-lg px-base text-lg",
			},
			danger: {
				true: "",
				false: "",
			},
			icon: {
				true: "px-0",
				false: "",
			},
			disabled: {
				true: "disabled:pointer-events-none disabled:[&_*]:pointer-events-none",
				false: "",
			},
			ghost: {
				true: "bg-transparent",
				false: "",
			},
			block: {
				true: "w-full",
				false: "",
			},
			loading: {
				true: "opacity-65 cursor-default",
				false: "",
			},
			shape: {
				round: "rounded-full",
				circle: "rounded-[50%]",
			},
		},
		compoundVariants: [
			// Danger Variants -> Start
			{
				type: ["default", "dashed"],
				danger: true,
				className:
					"text-error border-error hover:border-error-hover hover:text-error-hover active:text-error-active active:border-error-active",
			},
			{
				type: "primary",
				danger: true,
				className: "bg-error hover:bg-error-hover active:bg-error-active",
			},
			{
				type: "filled",
				danger: true,
				className:
					"text-error bg-error-bg hover:bg-error-bg-hover active:bg-error-bg-active",
			},
			{
				type: "text",
				danger: true,
				className:
					"text-error hover:bg-error-bg hover:text-error-hover active:bg-error-bg-active",
			},
			{
				type: "link",
				danger: true,
				className: "text-error hover:text-error-hover active:text-error-active",
			},
			// Danger Variants -> End
			// Icon Size -> Start
			{
				size: "small",
				icon: true,
				className: "w-sm",
			},
			{
				size: "middle",
				icon: true,
				className: "w-base",
			},
			{
				size: "large",
				icon: true,
				className: "w-lg",
			},
			// Icon Size -> End
			// Disabled Variants -> Start
			{
				type: ["default", "primary", "dashed", "filled"],
				disabled: true,
				className:
					"cursor-not-allowed border-border text-foreground-disabled bg-background-container-disabled shadow-none",
			},
			{
				type: "filled",
				disabled: true,
				className: "border-transparent",
			},
			{
				type: "dashed",
				disabled: true,
				className: "border-dashed",
			},
			{
				type: ["text", "link"],
				disabled: true,
				className: "text-foreground-disabled",
			},
			// Disabled Variants -> End
			// Ghost Variants -> Start
			{
				type: ["primary", "default", "dashed"],
				ghost: true,
				className:
					"text-white border-white hover:text-primary-hover hover:border-primary-hover hover:bg-transparent active:bg-transparent active:border-primary-active active:text-primary-active",
			},
			{
				type: "filled",
				ghost: true,
				className:
					"text-white border-transparent bg-white/10 hover hover:bg-white/20 active:bg-white/30",
			},
			{
				type: "primary",
				ghost: true,
				className: "text-primary border-primary",
			},
			{
				danger: true,
				ghost: true,
				className:
					"text-error border-error hover:text-error-hover hover:border-error-hover active:border-error-active active:text-error-active",
			},
			// Ghost Variants -> End
		],
		defaultVariants: {
			type: "default",
			size: "middle",
		},
	}
)
