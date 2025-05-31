import type { ReactNode } from "react"

export type MenuItemType = {
	key?: string
	type?: "group" | "divider"
	label?: ReactNode
	icon?: ReactNode
}
