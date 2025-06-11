import {
	MenuItem as RcMenuItem,
	type MenuItemProps as RcMenuItemProps,
} from "rc-menu"
import { MenuContext } from "rc-menu/es/context/MenuContext"
import { forwardRef, useContext } from "react"
import { cx } from "src/shared/lib"

export interface MenuItemProps extends RcMenuItemProps {
	className?: string
}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
	({ className, children, extra, ...props }, ref) => {
		const { selectedKeys } = useContext(MenuContext)
		const { eventKey } = props
		return (
			<RcMenuItem
				ref={ref}
				className={cx(
					"pl-6 overflow-hidden text-base text-ellipsis relative flex items-center h-lg leading-lg list-inside list-disc mx-1 my-1 w-[calc(100%-0.5em)] whitespace-nowrap cursor-pointer rounded-lg transition-colors duration-mid hover:bg-black/[0.06] active:bg-primary-bg",
					{
						"bg-primary-bg hover:bg-primary-bg text-primary":
							eventKey && selectedKeys.includes(eventKey),
					},
					className
				)}
				{...props}
			>
				<span
					className={cx("flex-auto flex min-w-0 overflow-hidden text-ellipsis")}
				>
					{children}
				</span>
				{extra && <span>{extra}</span>}
			</RcMenuItem>
		)
	}
)
MenuItem.displayName = "MenuItem"

export { MenuItem }
