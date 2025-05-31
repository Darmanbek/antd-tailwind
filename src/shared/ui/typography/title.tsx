import { cva, type VariantProps } from "class-variance-authority"
import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

const titleVariants = cva("font-semibold", {
	variants: {
		level: {
			h1: "text-4xl",
			h2: "text-3xl",
			h3: "text-2xl",
			h4: "text-xl",
			h5: "text-lg",
		},
	},
	defaultVariants: {
		level: "h1",
	},
})

export interface TitleProps
	extends DetailedHTMLProps<
			HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>,
		VariantProps<typeof titleVariants> {
	className?: string
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
	({ className, level, ...props }, ref) => {
		const Element = level || "h1"

		return (
			<Element
				ref={ref}
				className={cx(
					titleVariants({
						level,
						className,
					})
				)}
				{...props}
			/>
		)
	}
)
Title.displayName = "Title"

export { Title }
