import RcSlider, { type SliderProps as RcSliderProps, type SliderRef } from "rc-slider"
import { forwardRef } from "react"
import { cx } from "src/shared/lib"

export interface SliderProps extends RcSliderProps {
	className?: string
}

const Slider = forwardRef<SliderRef, SliderProps>(({ className, ...props }, ref) => {
	return (
		<RcSlider
			ref={ref}
			prefixCls={"slider"}
			className={cx("w-full mx-1 my-2 relative h-1 leading-base cursor-pointer touch-none", className)}
			classNames={{
				rail: "w-full h-1 inset-0 absolute bg-fill-tertiary group-hover:bg-fill-secondary rounded-xs transition-colors duration-mid",
				track: "h-1 inset-0 bg-primary-border rounded-xs absolute transition-colors duration-mid",
				handle: cx(
					"outline-none absolute -top-1 size-3 rounded-full bg-background-elevated ring-2 ring-primary-border transition-shadow duration-mid hover:ring-primary focus:ring-primary after:outline-none after:absolute after:size-3 after:rounded-full"
				),
			}}
			{...props}
		/>
	)
})
Slider.displayName = "Slider"

export { Slider, type SliderRef }
