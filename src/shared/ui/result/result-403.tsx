import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface Result403Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Result403 = forwardRef<HTMLDivElement, Result403Props>((props, ref) => {
	return (
		<div
			ref={ref}
			{...props}
		/>
	)
})
Result403.displayName = "Result403"

export { Result403 }
