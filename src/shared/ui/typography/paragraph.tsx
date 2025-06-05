import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

export interface ParagraphProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	className?: string
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
	({ className, ...props }, ref) => {
		return (
			<p
				className={cx(
					"text-foreground break-words leading-base text-base font-ant",
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Paragraph.displayName = "Paragraph"

export { Paragraph }
