import { cva } from "class-variance-authority"

export const buttonVariants = cva(
	"outline-none relative inline-flex gap-xs items-center justify-center bg-none bg-transparent border border-transparent border-solid cursor-pointer transition-all duration-mid ease-in-out select-none touch-none text-foreground disabled:pointer-events-none",
	{
		variants: {
			type: {
				default:
					"text-foreground shadow-xs border-border bg-background hover:border-primary hover:text-primary",
				primary: "",
				outlined: "",
				text: "",
				dashed: "",
				link: "",
			},
			size: {
				small: "",
				middle: "h-base rounded px-base",
				large: "",
			},
		},
		defaultVariants: {
			type: "default",
			size: "middle",
		},
	}
)
