import { cva, type VariantProps } from "class-variance-authority"
import { type ComponentPropsWithRef, forwardRef } from "react"
import { cx } from "src/shared/lib"

const spaceVariants = cva("flex", {
	variants: {
		direction: {
			horizontal: "flex-row items-center justify-start",
			vertical: "flex-col items-start justify-center",
		},
		size: {
			large: "space-x-lg",
			middle: "space-x-base",
			small: "space-x-xs",
		},
		wrap: {
			true: "flex-wrap",
			false: "",
		},
	},
	compoundVariants: [
		{
			size: ["small", "middle", "large"],
			direction: "vertical",
			className: "space-x-0",
		},
		{
			size: "large",
			direction: "vertical",
			className: "space-y-lg",
		},
		{
			size: "middle",
			direction: "vertical",
			className: "space-y-base",
		},
		{
			size: "small",
			direction: "vertical",
			className: "space-y-xs",
		},
	],
	defaultVariants: {
		direction: "horizontal",
		size: "middle",
	},
})

export interface SpaceProps extends ComponentPropsWithRef<"div">, VariantProps<typeof spaceVariants> {
	className?: string
}

const Space = forwardRef<HTMLDivElement, SpaceProps>(({ className, direction, size, wrap, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cx(
				spaceVariants({
					direction,
					size,
					wrap,
					className,
				})
			)}
			{...props}
		/>
	)
})
Space.displayName = "Space"

export { Space }
