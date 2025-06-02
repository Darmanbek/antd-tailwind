import {
	MenuItemGroup as RcMenuItemGroup,
	type MenuItemGroupProps as RcMenuItemGroupProps,
} from "rc-menu"
import { forwardRef } from "react"
import { cx } from "src/shared/lib"

export interface MenuItemGroupProps extends RcMenuItemGroupProps {
	className?: string
}

const MenuItemGroup = forwardRef<HTMLLIElement, MenuItemGroupProps>(
	({ className, ...props }, ref) => {
		return (
			<RcMenuItemGroup
				ref={ref}
				className={cx(
					"overflow-hidden text-base text-ellipsis relative flex items-center h-10 leading-10 list-inside list-disc mx-1 my-1 w-[calc(100%-0.5rem)] whitespace-nowrap  transition-colors duration-mid text-foreground-tertiary",
					"[&_.group-item-group-title]:w-full [&_.group-item-group-title]:py-xs [&_.group-item-group-title]:px-base [&_.group-item-group-title]:pl-base",
					className
				)}
				{...props}
			/>
		)
	}
)
MenuItemGroup.displayName = "MenuItemGroup"

export { MenuItemGroup }
