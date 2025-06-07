import { cva, type VariantProps } from "class-variance-authority"
import { type ComponentPropsWithRef, forwardRef, type ReactNode } from "react"
import { cx } from "src/shared/lib"
import { Title } from "../typography"

const cardVariants = cva(
	"text-foreground text-base leading-base list-none font-ant relative bg-background-container rounded",
	{
		variants: {
			variants: {
				borderless: "",
				bordered: "border border-border-secondary border-solid",
			},
			size: {
				middle: "",
				small: "",
			},
		},
		defaultVariants: {
			variants: "bordered",
			size: "middle",
		},
	}
)

export interface CardProps
	extends ComponentPropsWithRef<"article">,
		VariantProps<typeof cardVariants> {
	className?: string
	title?: string
	extra?: ReactNode
	hoverable?: boolean
	classNames?: {
		header?: string
		title?: string
		extra?: string
		body?: string
	}
}

const Card = forwardRef<HTMLElement, CardProps>(
	(
		{
			className,
			title,
			variants,
			size,
			classNames,
			children,
			extra,
			hoverable,
			...props
		},
		ref
	) => {
		return (
			<article
				ref={ref}
				className={cx(
					cardVariants({
						variants,
						className: cx(
							{
								"hover:shadow-card hover:border-transparent transition-shadow duration-mid cursor-pointer":
									hoverable,
							},
							className
						),
					})
				)}
				{...props}
			>
				{(extra || title) && (
					<div
						className={cx(
							"flex justify-center flex-col min-h-14 mb-[-1px] py-0 px-6 font-semibold border-b border-border-secondary rounded-t-lg",
							{
								"min-h-8 px-3": size === "small",
							}
						)}
					>
						<Title
							level={"h5"}
							className={cx(
								"text-lg",
								{
									"text-base": size === "small",
								},
								classNames?.title
							)}
						>
							{title}
						</Title>
						{extra && <div className={"ml-auto font-normal"}>{extra}</div>}
					</div>
				)}
				<div
					className={cx(
						"p-lg",
						{
							"p-sm": size === "small",
						},
						classNames?.body
					)}
				>
					{children}
				</div>
			</article>
		)
	}
)
Card.displayName = "Card"

export { Card }
