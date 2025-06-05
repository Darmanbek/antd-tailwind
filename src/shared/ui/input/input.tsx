import {
	type DetailedHTMLProps,
	forwardRef,
	type InputHTMLAttributes,
} from "react"

export interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return (
		<input
			ref={ref}
			{...props}
		/>
	)
})
Input.displayName = "Input"

export { Input }
