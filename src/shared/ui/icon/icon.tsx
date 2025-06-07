import { createElement, forwardRef, useMemo } from "react"
import { cx } from "src/shared/lib"
import type { IconProps } from "./icon.types.ts"

const Icon = forwardRef<HTMLSpanElement, IconProps>(
	(
		{
			className,
			icon,
			spin,
			classNames,
			tabIndex,
			onClick,
			twoToneColor,
			...props
		},
		ref
	) => {
		const iconTabIndex = useMemo(() => {
			if (tabIndex === undefined && onClick) {
				return -1
			}
			return tabIndex
		}, [onClick, tabIndex])

		const target = useMemo(() => {
			if (typeof icon.icon === "function")
				return {
					...icon,
					icon: icon.icon(
						Array.isArray(twoToneColor)
							? twoToneColor?.[0]
							: twoToneColor || "#333",
						Array.isArray(twoToneColor) ? twoToneColor?.[1] : "#E6E6E6"
					),
				}
			return {
				...icon,
				icon: icon.icon,
			}
		}, [icon, twoToneColor])

		return (
			<span
				ref={ref}
				role={"img"}
				tabIndex={iconTabIndex}
				aria-label={`${target.name}-${target.theme}`}
				className={cx(
					"inline-flex items-center text-inherit text-center",
					{
						"animate-spin": spin,
					},
					className
				)}
				{...props}
			>
				{createElement(target.icon.tag, {
					...target.icon.attrs,
					width: "1em",
					height: "1em",
					className: cx("size-full", classNames?.icon),
					"data-icon": `${target.name}-${target.theme}`,
					fill: "currentColor",
					"aria-hidden": "true",
					children: target.icon.children?.map((el) =>
						createElement(el.tag, {
							...el.attrs,
						})
					),
				})}
			</span>
		)
	}
)
Icon.displayName = "Icon"

export { Icon }
