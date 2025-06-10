import { type VariantProps } from "class-variance-authority"
import { type ComponentPropsWithRef, forwardRef } from "react"
import { cx } from "src/shared/lib"
import { textVariants } from "./text.variants.ts"

export interface TextProps
	extends ComponentPropsWithRef<"span">,
		VariantProps<typeof textVariants> {
	className?: string
}

const Text = forwardRef<HTMLSpanElement, TextProps>(
	(
		{
			className,
			type,
			mark,
			code,
			strong,
			italic,
			delete: deleted,
			keyboard,
			disabled,
			underline,
			copyable,
			editable,
			children,
			...props
		},
		ref
	) => {
		const Comp = cx({
			code,
			mark,
			strong,
			i: italic,
			del: deleted,
			kbd: keyboard,
			u: underline,
		}) as "code" | "mark" | "i" | "del" | "kbd" | "u"

		const content = Comp ? <Comp>{children}</Comp> : children

		return (
			<span
				ref={ref}
				className={cx(
					"typography",
					textVariants({
						type,
						disabled,
						mark,
						code,
						keyboard,
						underline,
						delete: deleted,
						strong,
						italic,
						copyable,
						editable,
					}),
					"",
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
