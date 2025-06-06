import { type ComponentPropsWithRef, forwardRef } from "react"

export interface ColProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const Col = forwardRef<HTMLDivElement, ColProps>(
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
Col.displayName = "Col"

export { Col }
