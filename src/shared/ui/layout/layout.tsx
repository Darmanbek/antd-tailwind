import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

export interface LayoutProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
	hasSider?: boolean
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(
	({ className, hasSider, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cx(
					"bg-layout-background text-foreground flex flex-col w-full",
					{
						"flex-row": hasSider,
					},
					className
				)}
				{...props}
			/>
		)
	}
)
Layout.displayName = "Layout"

export { Layout }
