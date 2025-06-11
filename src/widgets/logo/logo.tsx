import { type FC } from "react"
import { Flex, Image, Title } from "src/shared/ui"

const Logo: FC = () => {
	return (
		<>
			<Flex className={"gap-3 items-center"}>
				<Image
					width={32}
					preview={false}
					height={32}
					src={"/antd.svg"}
					alt={"Logo"}
				/>
				<Title level={"h4"}>Ant Tailwind</Title>
			</Flex>
		</>
	)
}

export { Logo }
