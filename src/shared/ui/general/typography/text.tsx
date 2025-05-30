import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface TextProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
	strong?: boolean
}

const Text = forwardRef<HTMLDivElement, TextProps>((props, ref) => {
	return (
		<div
			ref={ref}
			{...props}
		/>
	)
})
Text.displayName = "Text"

export { Text }
