import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

export interface TypographyProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Typography = forwardRef<HTMLDivElement, TypographyProps>(
	({ className, ...props }, ref) => {
		return (
			<article
				ref={ref}
				className={cx(
					"typography text-foreground leading-base break-words",
					className
				)}
				{...props}
			/>
		)
	}
)
Typography.displayName = "Typography"

export { Typography }
