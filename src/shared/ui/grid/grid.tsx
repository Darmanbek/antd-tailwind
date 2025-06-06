import { type ComponentPropsWithRef, forwardRef } from "react"

export interface GridProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
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
Grid.displayName = "Grid"

export { Grid }
