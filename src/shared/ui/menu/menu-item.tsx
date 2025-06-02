import {
	MenuItem as RcMenuItem,
	type MenuItemProps as RcMenuItemProps,
} from "rc-menu"
import { forwardRef } from "react"
import { cx } from "src/shared/lib"

export interface MenuItemProps extends RcMenuItemProps {
	className?: string
}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
	({ className, children, ...props }, ref) => {
		return (
			<RcMenuItem
				ref={ref}
				className={cx(
					"pl-6 overflow-hidden text-base text-ellipsis relative flex items-center h-10 leading-10 list-inside list-disc mx-1 my-1 w-[calc(100%-0.5rem)] whitespace-nowrap cursor-pointer rounded-lg transition-colors duration-mid hover:bg-black/[0.06] active:bg-primary-bg",
					"[&.group-item-selected]:bg-primary-bg [&.group-item-selected]:text-primary",
					className
				)}
				{...props}
			>
				<span className={"flex-auto min-w-0 overflow-hidden text-ellipsis"}>
					{children}
				</span>
			</RcMenuItem>
		)
	}
)
MenuItem.displayName = "MenuItem"

export { MenuItem }
