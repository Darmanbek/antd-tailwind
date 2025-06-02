import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface CardMetaProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const CardMeta = forwardRef<HTMLDivElement, CardMetaProps>((props, ref) => {
	return (
		<div
			ref={ref}
			{...props}
		/>
	)
})
CardMeta.displayName = "CardMeta"

export { CardMeta }
