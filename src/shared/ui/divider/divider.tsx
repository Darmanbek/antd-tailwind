import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface DividerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
	return (
		<div
			ref={ref}
			className={"border-b"}
			{...props}
		/>
	)
})
Divider.displayName = "Divider"

export { Divider }
