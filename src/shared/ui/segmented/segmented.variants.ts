import { cva } from "class-variance-authority"

export const segmentedVariants = cva(
	"inline-block p-[0.125rem] bg-background-layout rounded transition-all duration-mid ease-in-out",
	{
		variants: {
			size: {
				small: "",
				middle: "",
				large: "",
			},
			block: {
				true: "",
				false: "",
			},
			vertical: {
				true: "",
				false: "",
			},
			shape: {
				default: "",
				round: "",
			},
		},
	}
)
