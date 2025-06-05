export const ResultStatus = {
	SUCCESS: "success",
	ERROR: "error",
	INFO: "info",
	WARNING: "warning",
} as const

export type ResultStatus = (typeof ResultStatus)[keyof typeof ResultStatus]
