import { type ComponentPropsWithRef, forwardRef } from "react"
import { cx } from "src/shared/lib"

export interface SpaceProps extends ComponentPropsWithRef<"div"> {
	className?: string
}

const Space = forwardRef<HTMLDivElement, SpaceProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cx("space-x-2", className)}
				{...props}
			/>
		)
	}
)
Space.displayName = "Space"

export { Space }
