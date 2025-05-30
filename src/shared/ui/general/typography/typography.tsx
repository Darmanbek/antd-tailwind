import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface TypographyProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Typography = forwardRef<HTMLDivElement, TypographyProps>((props, ref) => {
	return (
		<div
			ref={ref}
			{...props}
		/>
	)
})
Typography.displayName = "Typography"

export { Typography }
