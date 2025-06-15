import type { SegmentedRawOption } from "rc-segmented"
import type { SegmentedLabeledOptionWithIcon, SegmentedLabeledOptionWithoutIcon } from "./segmented.types.ts"

export function isSegmentedLabeledOptionWithIcon(
	option: SegmentedRawOption | SegmentedLabeledOptionWithIcon | SegmentedLabeledOptionWithoutIcon
): option is SegmentedLabeledOptionWithIcon {
	return typeof option === "object" && !!(option as SegmentedLabeledOptionWithIcon)?.icon
}
