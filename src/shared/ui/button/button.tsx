import { type VariantProps } from "class-variance-authority"
import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cx } from "src/shared/lib"
import { buttonVariants } from "./button.variants.ts"

export interface ButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">,
		VariantProps<typeof buttonVariants> {
	block?: boolean
	htmlType?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ block, className, type, htmlType, size = "middle", ...props }, ref) => {
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
