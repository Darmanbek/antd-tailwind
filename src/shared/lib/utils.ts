import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const paddingList = ["p", "px", "py", "pt", "pr", "pb", "pl"] as const
type PaddingKey = (typeof paddingList)[number]
const marginList = ["m", "mx", "my", "mt", "mr", "mb", "ml"] as const
type MarginKey = (typeof paddingList)[number]
const sizeList = ["xs", "sm", "base", "md", "lg", "xl"] as const

const padding: Record<PaddingKey, [Record<PaddingKey, string[]>]> =
	Object.assign(
		{},
		...paddingList.map((el) => ({
			[el]: [
				{
					[el]: sizeList,
				},
			],
		}))
	)

const margin: Record<MarginKey, [Record<MarginKey, string[]>]> = Object.assign(
	{},
	...marginList.map((el) => ({
		[el]: [
			{
				[el]: sizeList,
			},
		],
	}))
)

const twMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			...padding,
			...margin,
			shadow: [
				{
					shadow: ["secondary", "tertiary", "card"],
				},
			],
			w: [
				{
					w: ["xs", "sm", "base", "lg"],
				},
			],
			h: [
				{
					h: ["xs", "sm", "base", "lg"],
				},
			],
			gap: [
				{
					gap: ["xs", "sm", "base", "lg"],
				},
			],
		},
	},
})

export function cx(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
