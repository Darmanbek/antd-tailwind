import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

export interface ContentProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Content = forwardRef<HTMLDivElement, ContentProps>(
	({ className, ...props }, ref) => {
		return (
			<main
				ref={ref}
				className={cx("flex-auto min-h-0", className)}
				{...props}
			/>
		)
	}
)
Content.displayName = "Content"

export { Content }
