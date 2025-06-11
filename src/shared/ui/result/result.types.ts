export const ResultStatus = {
	SUCCESS: "success",
	ERROR: "error",
	INFO: "info",
	WARNING: "warning",
	404: "404",
} as const

export type ResultStatus = (typeof ResultStatus)[keyof typeof ResultStatus]
