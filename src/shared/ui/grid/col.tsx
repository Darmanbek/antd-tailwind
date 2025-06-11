import { type ComponentPropsWithRef, forwardRef } from "react"
import { cx } from "src/shared/lib"

export interface ColProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const Col = forwardRef<HTMLDivElement, ColProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cx("w-full", className)}
				{...props}
			/>
		)
	}
)
Col.displayName = "Col"

export { Col }
