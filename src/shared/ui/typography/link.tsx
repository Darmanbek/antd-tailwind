import {
	Link as TanstackLink,
	type LinkProps as TanstackLinkProps,
} from "@tanstack/react-router"
import { forwardRef } from "react"

export interface LinkProps extends TanstackLinkProps {
	className?: string
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
	return (
		<TanstackLink
			ref={ref}
			{...props}
		/>
	)
})
Link.displayName = "Link"

export { Link }
