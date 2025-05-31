import {
	type DetailedHTMLProps,
	forwardRef,
	type LiHTMLAttributes,
	type ReactNode,
} from "react"
import { cx } from "src/shared/lib"

export interface MenuItemProps
	extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	className?: string
	key: string
	icon?: ReactNode
	label: ReactNode
}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
	({ className, label, ...props }, ref) => {
		return (
			<li
				ref={ref}
				className={cx(
					"pl-6 overflow-hidden text-base text-ellipsis relative flex items-center h-10 leading-10 list-inside list-disc mx-1 my-1 w-[calc(100%-0.5rem)] whitespace-nowrap cursor-pointer rounded-lg transition-colors duration-mid hover:bg-black/[0.06]",
					className
				)}
				{...props}
			>
				<span>{label}</span>
			</li>
		)
	}
)
MenuItem.displayName = "MenuItem"

export { MenuItem }
