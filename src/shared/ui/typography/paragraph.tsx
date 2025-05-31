import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface ParagraphProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	className?: string
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
	(props, ref) => {
		return (
			<p
				ref={ref}
				{...props}
			/>
		)
	}
)
Paragraph.displayName = "Paragraph"

export { Paragraph }
