import { cva, type VariantProps } from "class-variance-authority"
import { type ComponentPropsWithRef, forwardRef } from "react"
import { cx } from "src/shared/lib"

const flexVariants = cva("flex", {
	variants: {
		justify: {
			"flex-start": "justify-start",
			center: "justify-center",
			"flex-end": "justify-end",
			"space-between": "justify-between",
			"space-around": "justify-around",
			"space-evenly": "justify-evenly",
		},
		align: {
			start: "items-start",
			center: "items-center",
			end: "items-end",
		},
		gap: {
			small: "gap-xs",
			middle: "gap-base",
			large: "gap-lg",
		},
		vertical: {
			true: "flex-col",
			false: "",
		},
		wrap: {
			true: "flex-wrap",
			false: "",
		},
	},
})

export interface FlexProps extends ComponentPropsWithRef<"div">, VariantProps<typeof flexVariants> {
	className?: string
}

const Flex = forwardRef<HTMLDivElement, FlexProps>(
	({ className, vertical, wrap, gap, justify, align, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cx(
					flexVariants({
						justify,
						align,
						gap,
						vertical,
						wrap,
						className,
					})
				)}
				{...props}
			/>
		)
	}
)
Flex.displayName = "Flex"

export { Flex }
