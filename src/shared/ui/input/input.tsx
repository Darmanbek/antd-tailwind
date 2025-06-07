import { cva, type VariantProps } from "class-variance-authority"
import {
	type DetailedHTMLProps,
	forwardRef,
	type InputHTMLAttributes,
} from "react"
import { cx } from "src/shared/lib"

const inputVariants = cva(
	"outline-none placeholder:text-foreground-placeholder placeholder:select-none placeholder:opacity-100 placeholder-shown:text-ellipsis m-0 text-foreground font-ant relative inline-block w-full min-w-0 transition-all duration-mid list-none",
	{
		variants: {
			variant: {
				outlined:
					"bg-container border border-solid border-border hover:border-primary focus:border-primary focus:ring-1 focus:shadow-primary",
				filled: "",
				borderless: "bg-transparent border-none",
				underlined: "",
			},
			size: {
				large: "py-xs px-sm text-lg leading-lg rounded-lg",
				middle: "py-xxs px-sm text-base leading-base rounded",
				small: "py-0 px-xxs text-sm leading-base rounded-sm",
			},
		},
		defaultVariants: {
			variant: "outlined",
			size: "middle",
		},
	}
)

export interface InputProps
	extends Omit<
			DetailedHTMLProps<
				InputHTMLAttributes<HTMLInputElement>,
				HTMLInputElement
			>,
			"size"
		>,
		VariantProps<typeof inputVariants> {
	className?: string
	inputSize?: number
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, inputSize, variant, size, ...props }, ref) => {
		return (
			<input
				ref={ref}
				className={cx(
					inputVariants({
						variant,
						size,
						className,
					})
				)}
				size={inputSize}
				{...props}
			/>
		)
	}
)
Input.displayName = "Input"

export { Input }
