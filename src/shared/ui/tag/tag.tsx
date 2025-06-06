import { cva, type VariantProps } from "class-variance-authority"
import { type ComponentPropsWithRef, forwardRef } from "react"
import { cx } from "src/shared/lib"

const tagVariants = cva(
	"relative text-sm list-none font-ant inline-block h-auto mr-xs px-2 border border-solid opacity-100 transition-all duration-mid text-start text-foreground bg-gray-400/10 rounded-sm",
	{
		variants: {
			color: {
				red: "",
			},
		},
	}
)

export interface TagProps
	extends Omit<ComponentPropsWithRef<"span">, "color">,
		VariantProps<typeof tagVariants> {
	className?: string
}

const Tag = forwardRef<HTMLSpanElement, TagProps>(
	({ color, className, ...props }, ref) => {
		return (
			<span
				ref={ref}
				className={cx(
					tagVariants({
						color,
						className,
					}),
					""
				)}
				{...props}
			/>
		)
	}
)
Tag.displayName = "Tag"

export { Tag }
