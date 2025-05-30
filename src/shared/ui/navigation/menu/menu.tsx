import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface MenuProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
	return (
		<div
			ref={ref}
			{...props}
		/>
	)
})
Menu.displayName = "Menu"

export { Menu }
