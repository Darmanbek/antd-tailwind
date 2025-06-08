import { cva } from "class-variance-authority"

export const cardVariants = cva(
	"text-foreground text-base leading-base list-none font-ant relative bg-background-container rounded",
	{
		variants: {
			variant: {
				borderless: "shadow-tertiary",
				bordered: "border border-border-secondary border-solid",
			},
			size: {
				middle: "",
				small: "",
			},
			hoverable: {
				true: "hover:shadow-card hover:border-transparent transition-shadow duration-mid cursor-pointer",
				false: "",
			},
		},
		defaultVariants: {
			variant: "bordered",
			size: "middle",
		},
	}
)

export const cardHeaderVariants = cva(
	"flex justify-center flex-col mb-[-1px] py-0 font-semibold border-b border-border-secondary rounded-t-lg",
	{
		variants: {
			size: {
				middle: "min-h-14 px-6 ",
				small: "min-h-8 px-3",
			},
		},
		defaultVariants: {
			size: "middle",
		},
	}
)
