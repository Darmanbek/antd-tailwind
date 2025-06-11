import { type ComponentPropsWithRef, forwardRef } from "react"
import { cx } from "src/shared/lib"

export interface GridProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cx("grid", className)}
				{...props}
			/>
		)
	}
)
Grid.displayName = "Grid"

export { Grid }
