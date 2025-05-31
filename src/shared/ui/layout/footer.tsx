import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

export interface FooterProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(
	({ className, ...props }, ref) => {
		return (
			<footer
				ref={ref}
				className={cx(
					"p-layout-footer text-layout-footer-foreground bg-layout-footer text-base",
					className
				)}
				{...props}
			/>
		)
	}
)
Footer.displayName = "Footer"

export { Footer }
