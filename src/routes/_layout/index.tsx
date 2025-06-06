import { createFileRoute, Link as TLink } from "@tanstack/react-router"
import {
	Card,
	Divider,
	Flex,
	Image,
	Input,
	Link,
	Paragraph,
	Tag,
	Text,
	Title,
} from "src/shared/ui"

export const Route = createFileRoute("/_layout/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Title
				level={"h2"}
				className={"mb-4"}
			>
				Components Overview
			</Title>
			<Paragraph className={"my-4 leading-[2]"}>
				<Text code={true}>antd</Text> provides plenty of UI components to enrich
				your web applications, and we will improve components experience
				consistently. We also recommend some great{" "}
				<Link
					href={"https://ant.design"}
					target={"_blank"}
				>
					Third-Party Libraries
				</Link>{" "}
				additionally.
			</Paragraph>
			<Divider />
			<Input
				size={"large"}
				variant={"borderless"}
				className={"text-xl p-0 rounded-none"}
				placeholder={"Search in components"}
			/>
			<Divider />
			<Flex className={"items-center gap-2 mb-6 mt-8"}>
				<Title
					level={"h3"}
					className={"font-medium"}
				>
					General
				</Title>
				<Tag>4</Tag>
			</Flex>
			<div className={"grid grid-cols-4 gap-6"}>
				<TLink to={"/general/button"}>
					<Card
						title={"Buttons"}
						hoverable={true}
						size={"small"}
					>
						<Flex className={"justify-center items-center"}>
							<Image
								preview={false}
								src={
									"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7va7RKs3YzIAAAAAAAAAAAAADrJ8AQ/original"
								}
								alt={"Buttons"}
							/>
						</Flex>
					</Card>
				</TLink>
			</div>
		</>
	)
}
