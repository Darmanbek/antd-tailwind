import RcSegmented, { type SegmentedProps as RCSegmentedProps } from "rc-segmented"
import { type FC, forwardRef, type RefAttributes, useMemo } from "react"
import { cx } from "src/shared/lib"
import type { SegmentedProps } from "./segmented.types.ts"
import { isSegmentedLabeledOptionWithIcon } from "./segmented.utils.ts"
import { segmentedVariants } from "./segmented.variants.ts"

export type { SegmentedValue } from "rc-segmented"

const InternalSegmented = forwardRef<HTMLDivElement, SegmentedProps>(
	({ className, size, shape, vertical, options = [], block, ...props }, ref) => {
		console.log({
			size,
			shape,
			vertical,
			block,
		})
		const extendedOptions = useMemo<RCSegmentedProps["options"]>(
			() =>
				options.map((option) => {
					if (isSegmentedLabeledOptionWithIcon(option)) {
						const { icon, label, ...restOption } = option
						return {
							...restOption,
							label: (
								<>
									<span>{icon}</span>
									{label && <span>{label}</span>}
								</>
							),
						}
					}
					return option
				}),
			[options]
		)

		return (
			<RcSegmented
				ref={ref}
				prefixCls={"segmented"}
				className={cx(
					segmentedVariants({
						size,
						block,
						vertical,
						shape,
						className,
					})
				)}
				options={extendedOptions}
				{...props}
			/>
		)
	}
)

const Segmented = InternalSegmented as (<ValueType>(
	props: SegmentedProps<ValueType> & RefAttributes<HTMLDivElement>
) => ReturnType<typeof InternalSegmented>) &
	Pick<FC, "displayName">

Segmented.displayName = "Segmented"

export { Segmented }
