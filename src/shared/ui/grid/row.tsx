import { type ComponentPropsWithRef, forwardRef } from "react"

export interface RowProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const Row = forwardRef<HTMLDivElement, RowProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={className}
				{...props}
			/>
		)
	}
)
Row.displayName = "Row"

export { Row }
