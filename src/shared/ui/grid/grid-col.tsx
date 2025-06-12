import { cva, type VariantProps } from "class-variance-authority"
import { type ComponentPropsWithRef, forwardRef } from "react"
import { cx } from "src/shared/lib"

const gridColVariants = cva("", {
	variants: {
		span: {
			[1]: "col-span-1",
			[2]: "col-span-2",
			[3]: "col-span-3",
			[4]: "col-span-4",
			[5]: "col-span-5",
			[6]: "col-span-6",
			[7]: "col-span-7",
			[8]: "col-span-8",
			[9]: "col-span-9",
			[10]: "col-span-10",
			[11]: "col-span-11",
			[12]: "col-span-12",
			[13]: "col-span-13",
			[14]: "col-span-14",
			[15]: "col-span-15",
			[16]: "col-span-16",
			[17]: "col-span-17",
			[18]: "col-span-18",
			[19]: "col-span-19",
			[20]: "col-span-20",
			[21]: "col-span-21",
			[22]: "col-span-22",
			[23]: "col-span-23",
			[24]: "col-span-24",
		},
		offset: {
			[1]: "col-start-2",
			[2]: "col-start-3",
			[3]: "col-start-4",
			[4]: "col-start-5",
			[5]: "col-start-6",
			[6]: "col-start-7",
			[7]: "col-start-8",
			[8]: "col-start-9",
			[9]: "col-start-10",
			[10]: "col-start-11",
			[11]: "col-start-12",
			[12]: "col-start-13",
			[13]: "col-start-14",
			[14]: "col-start-15",
			[15]: "col-start-16",
			[16]: "col-start-17",
			[17]: "col-start-18",
			[18]: "col-start-19",
			[19]: "col-start-20",
			[20]: "col-start-21",
			[21]: "col-start-22",
			[22]: "col-start-23",
			[23]: "col-start-24",
			[24]: "col-start-25",
		},
	},
	defaultVariants: {
		span: 1,
	},
})

export interface GridColProps extends ComponentPropsWithRef<"div">, VariantProps<typeof gridColVariants> {
	className?: string
}

const GridCol = forwardRef<HTMLDivElement, GridColProps>(({ className, span, offset, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cx(
				gridColVariants({
					span,
					offset,
					className,
				})
			)}
			{...props}
		/>
	)
})
GridCol.displayName = "GridCol"

export { GridCol }
