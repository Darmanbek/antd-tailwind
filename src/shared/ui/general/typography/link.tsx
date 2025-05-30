import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface LinkProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Link = forwardRef<HTMLDivElement, LinkProps>((props, ref) => {
	return (
		<div
			ref={ref}
			{...props}
		/>
	)
})
Link.displayName = "Link"

export { Link }
