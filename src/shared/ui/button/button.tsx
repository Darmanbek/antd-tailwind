import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cx } from "src/shared/lib/utils"

const buttonVariants = cva(
	"outline-none relative inline-flex gap-xs items-center justify-center bg-none bg-transparent border border-transparent border-solid cursor-pointer transition-all duration-mid ease-in-out select-none touch-none text-foreground disabled:pointer-events-none",
	{
		variants: {
			type: {
				default: "",
				primary: "",
				outlined: "",
				text: "",
				dashed: "",
				link: ""
			},
			size: {
				small: "",
				middle: "",
				large: ""
			}
		}
	}
)

export interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	block?: boolean
	htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ asChild, block, className, type = "default", htmlType, size = "middle", ...props }, ref) => {
		return <button ref={ref} type={htmlType} className={cx(type, size, className, "")} {...props} />
	}
)
Button.displayName = "Button"

export { Button }
