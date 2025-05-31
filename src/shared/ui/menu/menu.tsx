import RcMenu, { type MenuProps as RcMenuProps, type MenuRef } from "rc-menu"
import { forwardRef } from "react"
import { cx } from "src/shared/lib"

export interface MenuProps extends RcMenuProps {
	className?: string
}

const Menu = forwardRef<MenuRef, MenuProps>(({ className, ...props }, ref) => {
	return (
		<RcMenu
			ref={ref}
			prefixCls={"group"}
			className={cx("border-r px-1", className)}
			{...props}
		/>
	)
})
Menu.displayName = "Menu"

export { Menu }
