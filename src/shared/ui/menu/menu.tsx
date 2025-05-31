import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

export interface MenuProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {
	className?: string
}

const Menu = forwardRef<HTMLUListElement, MenuProps>(
	({ className, ...props }, ref) => {
		return (
			<ul
				ref={ref}
				className={cx("border-r px-1", className)}
				{...props}
			/>
		)
	}
)
Menu.displayName = "Menu"

export { Menu }
