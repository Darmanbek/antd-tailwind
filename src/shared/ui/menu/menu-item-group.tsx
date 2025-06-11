import {
	MenuItemGroup as RcMenuItemGroup,
	type MenuItemGroupProps as RcMenuItemGroupProps,
} from "rc-menu"
import { forwardRef } from "react"
import { cx } from "src/shared/lib"

export interface MenuItemGroupProps extends RcMenuItemGroupProps {
	className?: string
	classNames?: {
		group?: string // [&_.group-item-group-title]
	}
}

const MenuItemGroup = forwardRef<HTMLLIElement, MenuItemGroupProps>(
	({ className, title, classNames, ...props }, ref) => {
		return (
			<RcMenuItemGroup
				ref={ref}
				className={cx(
					"text-base text-ellipsis relative flex items-center list-inside list-disc mx-1 my-1 w-[calc(100%-0.5rem)] whitespace-nowrap transition-colors duration-mid text-foreground-tertiary",
					className
				)}
				title={
					<span
						className={cx(
							"w-full py-xs px-base pl-base leading-base",
							classNames?.group
						)}
					>
						{title}
					</span>
				}
				{...props}
			/>
		)
	}
)
MenuItemGroup.displayName = "MenuItemGroup"

export { MenuItemGroup }
