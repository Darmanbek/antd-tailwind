import RcMenu, { type MenuProps as RcMenuProps, type MenuRef } from "rc-menu"
import { forwardRef } from "react"
import { cx } from "src/shared/lib"
import { MenuDivider } from "src/shared/ui/menu/menu-divider.tsx"
import { MenuItemGroup } from "src/shared/ui/menu/menu-item-group.tsx"
import { MenuItem } from "src/shared/ui/menu/menu-item.tsx"
import type { ItemType } from "./menu.types.ts"

export interface MenuProps extends Omit<RcMenuProps, "items"> {
	className?: string
	items?: ItemType[]
	classNames?: {
		item?: string
		subItem?: string
		group?: string
		divider?: string
	}
}

const Menu = forwardRef<MenuRef, MenuProps>(
	({ className, classNames, items, ...props }, ref) => {
		return (
			<RcMenu
				ref={ref}
				prefixCls={"menu"}
				className={cx("border-r px-1", className)}
				{...props}
			>
				{items?.map((item) =>
					item?.type === "group" ? (
						<MenuItemGroup
							key={item.key}
							className={classNames?.group}
							title={item.label}
						/>
					) : item?.type === "divider" ? (
						<MenuDivider
							key={item?.key}
							dashed={item?.dashed}
							className={classNames?.divider}
						/>
					) : (
						<MenuItem
							key={item?.key}
							className={classNames?.item}
						>
							{item?.label}
						</MenuItem>
					)
				)}
			</RcMenu>
		)
	}
)
Menu.displayName = "Menu"

export { Menu }
