import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface TextProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	className?: string
	type?: "secondary" | "success" | "warning" | "danger"
	disabled?: boolean
	mark?: boolean
	code?: boolean
	keyboard?: boolean
	underline?: boolean
	delete?: boolean
	strong?: boolean
	italic?: boolean
	copyable?: boolean
	editable?: boolean
}

const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
	return (
		<span
			ref={ref}
			{...props}
		/>
	)
})
Text.displayName = "Text"

export { Text }
