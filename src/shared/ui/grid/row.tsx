import { type ComponentPropsWithRef, forwardRef } from "react"
import { cx } from "src/shared/lib"

export interface RowProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const Row = forwardRef<HTMLDivElement, RowProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cx("flex", className)}
				{...props}
			/>
		)
	}
)
Row.displayName = "Row"

export { Row }
