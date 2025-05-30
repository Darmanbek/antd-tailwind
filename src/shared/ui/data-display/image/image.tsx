import type { ImagePreviewType, ImageProps as RcImageProps } from "rc-image"
import RcImage from "rc-image"
import { forwardRef, useMemo } from "react"

interface PreviewType extends Omit<ImagePreviewType, "destroyOnClose"> {
	destroyOnHidden?: boolean
}

type CustomRcImageProps = Replace<
	RcImageProps,
	"preview",
	boolean | PreviewType
>

export interface ImageProps extends CustomRcImageProps {
	className?: string
}

const Image = forwardRef<HTMLDivElement, ImageProps>(
	({ preview, ...props }) => {
		const mergedPreview = useMemo(() => {
			if (preview === false) return preview
			const _preview = typeof preview === "object" ? preview : {}
			const { destroyOnHidden, ...restPreviewProps } = _preview
			return {
				maskClassName:
					"absolute inset-0 flex items-center justify-center text-white bg-black/50 cursor-pointer opacity-0 transition-opacity duration-slow group-hover:opacity-100",
				mask: (
					<div
						className={
							"py-0 px-xxs size-full leading-none text-ellipsis overflow-hidden whitespace-nowrap text-center"
						}
					>
						{/*<EyeOutlined className={"mr-xxs [&_svg]:align-middle"} />*/}
						{/*<EyeOutlined />*/}
						Preview
					</div>
				),
				// icons,
				...restPreviewProps,
				destroyOnClose: destroyOnHidden,
			}
		}, [preview])

		return (
			<RcImage
				alt={""}
				className={"group w-full h-auto align-middle object-cover"}
				rootClassName={"group relative inline-block"}
				preview={mergedPreview}
				{...props}
			/>
		)
	}
)
Image.displayName = "Image"

export { Image }
