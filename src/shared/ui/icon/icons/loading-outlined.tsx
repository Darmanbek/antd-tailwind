import { forwardRef } from "react"
import { Icon } from "src/shared/ui/icon/icon.tsx"
import { LoadingOutlinedAsn } from "../asn"
import type { IconComponentProps } from "../icon.types.ts"

const LoadingOutlined = forwardRef<HTMLSpanElement, IconComponentProps>(
	(props, ref) => {
		return (
			<Icon
				ref={ref}
				icon={LoadingOutlinedAsn}
				{...props}
			/>
		)
	}
)

export { LoadingOutlined }
