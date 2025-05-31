import {
	SubMenu as RcSubMenu,
	type SubMenuProps as RcSubMenuProps,
} from "rc-menu"
import { forwardRef } from "react"

export interface MenuSubMenuProps extends RcSubMenuProps {
	className?: string
}

const MenuSubMenu = forwardRef<HTMLLIElement, MenuSubMenuProps>(
	(props, ref) => {
		return (
			<>
				<RcSubMenu
					ref={ref}
					{...props}
				/>
			</>
		)
	}
)
MenuSubMenu.displayName = "MenuSubMenu"

export { MenuSubMenu }
