import RcImage from "rc-image"
import type { GroupConsumerProps } from "rc-image/lib/PreviewGroup"
import { forwardRef } from "react"

export interface ImagePreviewGroupProps extends GroupConsumerProps {
	className?: string
}

const ImagePreviewGroup = forwardRef<HTMLDivElement, ImagePreviewGroupProps>(
	(props) => {
		return <RcImage.PreviewGroup {...props} />
	}
)
ImagePreviewGroup.displayName = "ImagePreviewGroup"

export { ImagePreviewGroup }
