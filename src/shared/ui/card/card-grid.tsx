import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface CardGridProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const CardGrid = forwardRef<HTMLDivElement, CardGridProps>((props, ref) => {
	return (
		<div
			ref={ref}
			{...props}
		/>
	)
})
CardGrid.displayName = "CardGrid"

export { CardGrid }
