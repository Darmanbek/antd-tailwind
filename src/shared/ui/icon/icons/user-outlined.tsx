import { forwardRef } from "react"
import { Icon } from "src/shared/ui/icon/icon.tsx"
import { UserOutlinedAsn } from "../asn"
import type { IconComponentProps } from "../icon.types.ts"

const UserOutlined = forwardRef<HTMLSpanElement, IconComponentProps>(
	(props, ref) => {
		return (
			<Icon
				ref={ref}
				icon={UserOutlinedAsn}
				{...props}
			/>
		)
	}
)

export { UserOutlined }
