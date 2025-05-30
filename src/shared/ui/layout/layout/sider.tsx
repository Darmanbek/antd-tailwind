import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

export interface SiderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	className?: string
}

const Sider = forwardRef<HTMLElement, SiderProps>(
	({ className, ...props }, ref) => {
		return (
			<aside
				ref={ref}
				className={cx(
					"relative bg-layout-sider text-layout-sider-foreground min-w-0 w-64 h-full",
					className
				)}
				{...props}
			/>
		)
	}
)
Sider.displayName = "Sider"

export { Sider }
