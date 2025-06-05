import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

export interface DividerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cx("my-lg border-t border-split", className)}
				{...props}
			/>
		)
	}
)
Divider.displayName = "Divider"

export { Divider }
