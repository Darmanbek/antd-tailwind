import {
	type DetailedHTMLProps,
	forwardRef,
	type HTMLAttributes,
	type ReactNode,
} from "react"
import { cx } from "src/shared/lib"
import Result404 from "./result-404.tsx"
import type { ResultStatus } from "./result.types.ts"

export interface ResultProps
	extends Omit<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		"title"
	> {
	className?: string
	title?: ReactNode
	subTitle?: ReactNode
	extra?: ReactNode
	icon?: ReactNode
	status?: ResultStatus
	classNames?: {
		image?: string
		icon?: string
		title?: string
		subTitle?: string
		extra?: string
	}
}

const Result = forwardRef<HTMLDivElement, ResultProps>(
	(
		{
			children,
			className,
			classNames,
			status,
			extra,
			icon,
			title,
			subTitle,
			...props
		},
		ref
	) => {
		return (
			<div
				ref={ref}
				className={cx("py-lg px-xl font-ant text-base", className)}
				{...props}
			>
				<div
					className={cx("mb-lg mx-auto flex justify-center", classNames?.image)}
				>
					{icon || <Result404 className={cx("", classNames?.icon)} />}
				</div>
				{title && (
					<div
						className={cx(
							"text-foreground text-2xl my-xs text-center",
							classNames?.title
						)}
					>
						{title}
					</div>
				)}
				{subTitle && (
					<div className={"text-foreground-tertiary text-base text-center"}>
						{subTitle}
					</div>
				)}
				{extra && (
					<div className={cx("mt-lg text-center space-x-2", classNames?.extra)}>
						{extra}
					</div>
				)}
				{children && (
					<div className={"mt-lg py-lg px-xl bg-fill-after"}>{children}</div>
				)}
			</div>
		)
	}
)
Result.displayName = "Result"

export { Result }
