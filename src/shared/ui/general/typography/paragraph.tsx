import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface ParagraphProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Paragraph = forwardRef<HTMLDivElement, ParagraphProps>((props, ref) => {
	return (
		<div
			ref={ref}
			{...props}
		/>
	)
})
Paragraph.displayName = "Paragraph"

export { Paragraph }
