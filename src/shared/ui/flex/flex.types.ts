export const justifyOptions = [
	"flex-start",
	"center",
	"flex-end",
	"space-between",
	"space-around",
	"space-evenly",
] as const

export const alignOptions = ["flex-start", "center", "flex-end"]

export type JustifyOptions = (typeof justifyOptions)[number]
export type AlignOptions = (typeof alignOptions)[number]
