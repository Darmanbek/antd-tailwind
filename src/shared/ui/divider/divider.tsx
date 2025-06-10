import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import type { ComponentPropsWithRef } from "react"
import { forwardRef } from "react"
import { cx } from "src/shared/lib"

const dividerVariants = cva("flex my-lg border-t border-solid border-split", {
	variants: {
		dashed: {
			true: "border-dashed",
			false: "",
		},
		orientation: {
			center: "after:w-1/2 before:w-1/2",
			left: "after:w-[5%] before:w-[95%]",
			right: "after:w-[95%] before:w-[5%]",
		},
	},
	compoundVariants: [
		{
			orientation: ["left", "center", "right"],
			className:
				"border-none after:border-t after:border-split after:relative after:transform after:translate-y-1/2 before:border-t before:border-split before:relative before:transform before:translate-y-1/2",
		},
	],
})

export interface DividerProps
	extends ComponentPropsWithRef<"div">,
		VariantProps<typeof dividerVariants> {
	className?: string
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
	({ className, children, dashed, orientation, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cx(
					dividerVariants({
						dashed,
						orientation: orientation
							? orientation
							: children
								? "center"
								: undefined,
						className,
					})
				)}
				role={"separator"}
				{...props}
			>
				{children && (
					<span
						className={
							"px-base z-10 text-lg font-medium whitespace-nowrap text-center"
						}
					>
						{children}
					</span>
				)}
			</div>
		)
	}
)
Divider.displayName = "Divider"

export { Divider }
