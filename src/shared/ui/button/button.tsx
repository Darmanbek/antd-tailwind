import { type VariantProps } from "class-variance-authority"
import { type ComponentPropsWithRef, forwardRef, type ReactNode } from "react"
import { cx } from "src/shared/lib"
import { LoadingOutlined } from "../icon"
import { buttonVariants } from "./button.variants.ts"

export interface ButtonProps
	extends Omit<ComponentPropsWithRef<"button">, "type">,
		Omit<VariantProps<typeof buttonVariants>, "icon" | "disabled" | "loading"> {
	icon?: ReactNode
	iconPosition?: "start" | "end"
	loading?:
		| {
				icon?: ReactNode
		  }
		| boolean
	htmlType?: ComponentPropsWithRef<"button">["type"]
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			block,
			className,
			type,
			shape,
			htmlType,
			size,
			icon,
			iconPosition,
			loading,
			danger,
			disabled,
			children,
			ghost,
			...props
		},
		ref
	) => {
		const iconElement = loading ? (
			typeof loading === "object" ? (
				loading?.icon
			) : (
				<LoadingOutlined spin={true} />
			)
		) : icon ? (
			<span
				className={cx("inline-flex items-center", {
					"size-3": size === "small",
				})}
			>
				{icon}
			</span>
		) : null

		return (
			<button
				ref={ref}
				type={htmlType}
				disabled={disabled}
				className={cx(
					buttonVariants({
						type,
						size,
						shape,
						danger,
						ghost,
						disabled,
						block,
						loading: !!loading,
						icon: !children,
						className,
					})
				)}
				{...props}
			>
				{iconPosition !== "end" && iconElement}
				{children && <span>{children}</span>}
				{iconPosition === "end" && iconElement}
			</button>
		)
	}
)
Button.displayName = "Button"

export { Button }
