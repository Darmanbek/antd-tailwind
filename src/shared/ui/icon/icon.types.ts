import type { DetailedHTMLProps, HTMLAttributes } from "react"

export type ThemeType = "filled" | "outlined" | "twotone"

export interface IconProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	className?: string
	classNames?: {
		icon: string
	}
	spin?: boolean
	// rotate?: number
	twoToneColor?: TwoToneColor
	icon: IconDefinition
}

export type IconComponentProps = Omit<IconProps, "icon">

export interface AbstractNode {
	tag: string
	attrs: {
		[key: string]: string
	}
	children?: AbstractNode[]
}

export interface IconDefinition {
	name: string
	theme: ThemeType
	icon:
		| ((primaryColor: string, secondaryColor: string) => AbstractNode)
		| AbstractNode
}

export type TwoToneColor = string | [string, string]
