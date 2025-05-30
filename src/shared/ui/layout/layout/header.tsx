import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

export interface HeaderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	className?: string
}

const Header = forwardRef<HTMLElement, HeaderProps>(
	({ className, ...props }, ref) => {
		return (
			<header
				ref={ref}
				className={cx(
					"h-layout-header p-layout-header text-layout-header-foreground leading-header bg-layout-header flex",
					className
				)}
				{...props}
			/>
		)
	}
)
Header.displayName = "Header"

export { Header }
