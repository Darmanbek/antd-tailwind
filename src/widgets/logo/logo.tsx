import { type FC } from "react"
import { Image, Title } from "src/shared/ui"

const Logo: FC = () => {
	return (
		<>
			<div className={"flex gap-3 items-center"}>
				<Image
					width={32}
					preview={false}
					height={32}
					src={"/antd.svg"}
					alt={"Logo"}
				/>
				<Title level={"h4"}>Ant Design</Title>
			</div>
		</>
	)
}

export { Logo }
