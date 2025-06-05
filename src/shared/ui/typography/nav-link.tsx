import {
	Link as TanstackLink,
	type LinkProps as TanstackLinkProps,
} from "@tanstack/react-router"
import { forwardRef } from "react"

export interface NavLinkProps extends TanstackLinkProps {
	className?: string
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
	return (
		<TanstackLink
			ref={ref}
			{...props}
		/>
	)
})
NavLink.displayName = "NavLink"

export { NavLink }
