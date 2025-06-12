import { cva, type VariantProps } from "class-variance-authority"
import { type ComponentPropsWithRef, forwardRef } from "react"
import { cx } from "src/shared/lib"

const gridVariants = cva("grid grid-cols-24", {
	variants: {
		gutter: {
			small: "gap-xs",
			middle: "gap-base",
			large: "gap-lg",
		},
	},
})

export interface GridProps extends ComponentPropsWithRef<"div">, VariantProps<typeof gridVariants> {
	className?: string
}

/**
 * This is Grid component on ```display: grid```.
 * Use ```grid-cols-3```, ```grid-cols-4```, ```grid-cols-*```.
 * @params ```className```, ```gutter```
 * @example
 * ```tsx
 * 	<Grid className={"grid-cols-4"} gutter={"small"}>
 * 	  {content}
 * 	</Grid>
 *
 * 	<Grid className={"grid-cols-4"}>
 * 	  <div className={"col-span-2"}>{content}</div> // col weight * 2
 * 	  <div className={"row-span-2"}>{content}</div> // row weight * 2
 * 	  <div>{content}</div>
 * 	</Grid>
 *
 * 	<Grid className={"grid-cols-4"}>
 * 	  <div className={"col-start-2"}>{content}</div> // col position = 2
 * 	  <div className={"col-start-4"}>{content}</div> // row position = 4
 * 	  <div>{content}</div>
 * 	</Grid>
 * ```
 * */
const Grid = forwardRef<HTMLDivElement, GridProps>(({ className, gutter, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cx(
				gridVariants({
					gutter,
					className,
				})
			)}
			{...props}
		/>
	)
})
Grid.displayName = "Grid"

export { Grid }
