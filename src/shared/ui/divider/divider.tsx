import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import type { ComponentPropsWithRef } from "react"
import { forwardRef } from "react"
import { cx } from "src/shared/lib"

const dividerVariants = cva(
	"flex items-center my-lg border-t border-solid border-split",
	{
		variants: {
			variant: {
				dashed: "border-dashed",
				dotted: "border-dotted",
			},
			orientation: {
				center: "before:w-1/2 after:w-1/2",
				left: "before:w-[5%] after:w-[95%]",
				right: "before:w-[95%] after:w-[5%]",
			},
		},
		compoundVariants: [
			{
				orientation: ["left", "center", "right"],
				className:
					"border-0 after:border-t after:border-inherit after:relative after:transform after:translate-y-1/2 before:border-t before:border-inherit before:relative before:transform before:translate-y-1/2",
			},
		],
	}
)

export interface DividerProps
	extends ComponentPropsWithRef<"div">,
		VariantProps<typeof dividerVariants> {
	className?: string
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
	({ className, children, variant, orientation, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cx(
					dividerVariants({
						variant,
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
