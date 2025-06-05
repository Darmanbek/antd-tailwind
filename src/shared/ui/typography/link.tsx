import {
	type AnchorHTMLAttributes,
	type DetailedHTMLProps,
	forwardRef,
} from "react"
import { cx } from "src/shared/lib"

export interface LinkProps
	extends DetailedHTMLProps<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> {
	className?: string
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
	({ className, ...props }, ref) => {
		return (
			<a
				className={cx(
					"text-link bg-transparent outline-none cursor-pointer transition-colors duration-slow hover:text-link-hover active:text-link-active",
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Link.displayName = "Link"

export { Link }
