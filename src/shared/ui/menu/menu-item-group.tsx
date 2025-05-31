import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

export interface MenuItemGroupProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
	key: string
	label: string
}

const MenuItemGroup = forwardRef<HTMLDivElement, MenuItemGroupProps>(
	({ className, label, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cx(
					"pl-4 overflow-hidden text-base text-ellipsis relative flex items-center h-10 leading-10 list-inside list-disc mx-1 my-1 w-[calc(100%-0.5rem)] whitespace-nowrap  transition-colors duration-mid text-foreground-tertiary",
					className
				)}
				{...props}
			>
				<span>{label}</span>
			</div>
		)
	}
)
MenuItemGroup.displayName = "MenuItemGroup"

export { MenuItemGroup }
