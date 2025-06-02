import { cva, VariantProps } from "class-variance-authority"
import {
	type DetailedHTMLProps,
	forwardRef,
	type HTMLAttributes,
	type ReactNode,
} from "react"
import { cx } from "src/shared/lib"

const cardVariants = cva(
	"text-foreground text-base leading-base list-none font-ant relative bg-container rounded",
	{
		variants: {
			variants: {
				borderless: "",
				bordered: "",
			},
		},
		defaultVariants: {
			variants: "bordered",
		},
	}
)

export interface CardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
		VariantProps<typeof cardVariants> {
	className?: string
	title?: string
	extra?: ReactNode
}

const Card = forwardRef<HTMLElement, CardProps>(
	({ className, variants, ...props }, ref) => {
		return (
			<article
				ref={ref}
				className={cx(
					cardVariants({
						variants,
						className,
					}),
					"border border-border-secondary border-solid"
				)}
				{...props}
			/>
		)
	}
)
Card.displayName = "Card"

export { Card }
