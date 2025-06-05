import { type DetailedHTMLProps, forwardRef, type HTMLAttributes } from "react"
import { cx } from "src/shared/lib"

export interface TextProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	className?: string
	type?: "secondary" | "success" | "warning" | "danger"
	disabled?: boolean
	mark?: boolean
	code?: boolean
	keyboard?: boolean
	underline?: boolean
	delete?: boolean
	strong?: boolean
	italic?: boolean
	copyable?: boolean
	editable?: boolean
}

const Text = forwardRef<HTMLSpanElement, TextProps>(
	({ className, type, mark, code, children, ...props }, ref) => {
		const content = code ? <code>{children}</code> : children

		return (
			<span
				ref={ref}
				className={cx(
					"text-base leading-base break-words text-foreground",
					"[&_code]:mx-[0.2rem] [&_code]:px-[0.4rem] [&_code]:pt-[0.2rem] [&_code]:pb-[0.1rem] [&_code]:text-[85%] [&_code]:font-ant-code [&_code]:bg-gray-400/10 [&_code]:border [&_code]:border-gray-500/20 [&_code]:rounded-xs",
					className
				)}
				{...props}
			>
				{content}
			</span>
		)
	}
)
Text.displayName = "Text"

export { Text }
