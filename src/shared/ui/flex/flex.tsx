import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

export interface FlexProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Flex = forwardRef<HTMLDivElement, FlexProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cx("flex p-0 m-0 gap-1", className)}
				{...props}
			/>
		)
	}
)
Flex.displayName = "Flex"

export { Flex }
