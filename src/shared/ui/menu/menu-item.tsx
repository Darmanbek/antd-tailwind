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
					"pl-6 overflow-hidden text-base text-ellipsis relative flex items-center h-lg leading-lg list-inside list-disc mx-1 my-1 w-[calc(100%-0.5em)] whitespace-nowrap cursor-pointer rounded-lg transition-colors duration-mid hover:bg-black/[0.06] active:bg-primary-bg",
					"[&.menu-item-selected]:bg-primary-bg [&.menu-item-selected]:text-primary",
					className
				)}
				{...props}
			>
				<span
					className={cx(
						"flex-auto flex min-w-0 overflow-hidden text-ellipsis",
						"[&_a]:flex-auto [&_a]:before:absolute [&_a]:before:inset-0"
					)}
				>
					{children}
				</span>
			</RcMenuItem>
		)
	}
)
MenuItem.displayName = "MenuItem"

export { MenuItem }
