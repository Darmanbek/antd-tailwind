import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"

export interface MenuDividerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const MenuDivider = forwardRef<HTMLDivElement, MenuDividerProps>(
	(props, ref) => {
		return (
			<div
				ref={ref}
				{...props}
			/>
		)
	}
)
MenuDivider.displayName = "MenuDivider"

export { MenuDivider }
