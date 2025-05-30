import { cva } from "class-variance-authority"

export const buttonVariants = cva(
	"outline-none relative inline-flex gap-xs items-center justify-center bg-none bg-transparent border border-transparent border-solid cursor-pointer transition-all duration-mid ease-in-out select-none touch-none text-foreground disabled:pointer-events-none",
	{
		variants: {
			type: {
				default: "",
				primary: "",
				outlined: "",
				text: "",
				dashed: "",
				link: "",
			},
			size: {
				small: "",
				middle: "",
				large: "",
			},
		},
		defaultVariants: {
			type: "default",
			size: "middle",
		},
	}
)
