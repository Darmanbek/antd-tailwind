import { cva } from "class-variance-authority"

export const textVariants = cva(
	"text-base leading-base break-words text-foreground",
	{
		variants: {
			type: {
				secondary: "text-foreground-description",
				success: "text-success-foreground",
				warning: "text-warning-foreground",
				danger: "text-error-foreground",
			},
			disabled: {
				true: "text-foreground-disabled cursor-not-allowed select-none",
				false: "",
			},
			mark: {
				true: "",
				false: "",
			},
			code: {
				true: "",
				false: "",
			},
			keyboard: {
				true: "",
				false: "",
			},
			underline: {
				true: "",
				false: "",
			},
			delete: {
				true: "",
				false: "",
			},
			strong: {
				true: "",
				false: "",
			},
			italic: {
				true: "",
				false: "",
			},
			copyable: {
				true: "",
				false: "",
			},
			editable: {
				true: "",
				false: "",
			},
		},
	}
)
