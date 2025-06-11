import { Divider as RcMenuDivider } from "rc-menu"
import type { DividerProps as RcMenuDividerProps } from "rc-menu/es/Divider"
import { forwardRef } from "react"
import { cx } from "src/shared/lib"

export interface MenuDividerProps extends RcMenuDividerProps {
	className?: string
	dashed?: boolean
}

const MenuDivider = forwardRef<HTMLDivElement, MenuDividerProps>(
	({ className, dashed, ...props }) => {
		return (
			<RcMenuDivider
				className={cx(
					"overflow-hidden border-t p-0",
					{
						"border-dashed": dashed,
					},
					className
				)}
				{...props}
			/>
		)
	}
)
MenuDivider.displayName = "MenuDivider"

export { MenuDivider }
