import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface Result500Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Result500 = forwardRef<HTMLDivElement, Result500Props>((props, ref) => {
	return (
		<div
			ref={ref}
			{...props}
		/>
	)
})
Result500.displayName = "Result500"

export { Result500 }
