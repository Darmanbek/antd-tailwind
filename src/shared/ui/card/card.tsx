import { type VariantProps } from "class-variance-authority"
import { type ComponentPropsWithRef, forwardRef, type ReactNode } from "react"
import { cx } from "src/shared/lib"
import { Title } from "../typography"
import { cardHeaderVariants, cardVariants } from "./card.variants.ts"

export interface CardProps extends Omit<ComponentPropsWithRef<"article">, "title">, VariantProps<typeof cardVariants> {
	className?: string
	title?: ReactNode
	extra?: ReactNode
	classNames?: {
		header?: string
		title?: string
		extra?: string
		body?: string
	}
}

const Card = forwardRef<HTMLElement, CardProps>(
	({ className, title, variant, size, classNames, children, extra, hoverable, ...props }, ref) => {
		const titleClassName = cx(size === "small" ? "text-base" : "text-lg", classNames?.title)

		return (
			<article
				ref={ref}
				className={cx(
					cardVariants({
						variant,
						hoverable,
						className,
					})
				)}
				{...props}
			>
				{(extra || title) && (
					<div
						className={cx(
							cardHeaderVariants({
								size,
								className: classNames?.header,
							})
						)}
					>
						{typeof title === "string" ? (
							<Title
								level={"h5"}
								className={titleClassName}
							>
								{title}
							</Title>
						) : (
							<div className={titleClassName}>{title}</div>
						)}
						{extra && <div className={"ml-auto font-normal"}>{extra}</div>}
					</div>
				)}
				<div className={cx(size === "small" ? "p-sm" : "p-lg", classNames?.body)}>{children}</div>
			</article>
		)
	}
)
Card.displayName = "Card"

export { Card }
