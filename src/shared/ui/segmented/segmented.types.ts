import type { VariantProps } from "class-variance-authority"
import type {
	SegmentedLabeledOption as RcSegmentedLabeledOption,
	SegmentedProps as RCSegmentedProps,
	SegmentedRawOption,
	SegmentedValue as RcSegmentedValue,
} from "rc-segmented"
import type { ReactNode } from "react"
import type { segmentedVariants } from "./segmented.variants.ts"

export interface SegmentedLabeledOptionWithoutIcon<ValueType = RcSegmentedValue>
	extends RcSegmentedLabeledOption<ValueType> {
	label: RcSegmentedLabeledOption["label"]
}

export interface SegmentedLabeledOptionWithIcon<ValueType = RcSegmentedValue>
	extends Omit<RcSegmentedLabeledOption<ValueType>, "label"> {
	label?: RcSegmentedLabeledOption["label"]
	icon: ReactNode
}

export type SegmentedLabeledOption<ValueType = RcSegmentedValue> =
	| SegmentedLabeledOptionWithIcon<ValueType>
	| SegmentedLabeledOptionWithoutIcon<ValueType>

export type SegmentedOptions<T = SegmentedRawOption> = (T | SegmentedLabeledOption<T>)[]

export interface SegmentedProps<ValueType = RcSegmentedValue>
	extends Omit<RCSegmentedProps<ValueType>, "size" | "options" | "shape">,
		Omit<VariantProps<typeof segmentedVariants>, "vertical"> {
	className?: string
	options: SegmentedOptions<ValueType>
}
