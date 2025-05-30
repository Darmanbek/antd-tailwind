import { type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cx } from "src/shared/lib/utils.ts"
import { buttonVariants } from "./button.style.ts"

export interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
		VariantProps<typeof buttonVariants> {
	block?: boolean
	htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ block, className, type = "default", htmlType, size = "middle", ...props },
		ref
	) => {
		return (
			<button
				ref={ref}
				type={htmlType}
				className={cx(
					buttonVariants({
						type,
						size,
						className: cx(
							{
								"w-full": block,
							},
							className
						),
					})
				)}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export { Button }
