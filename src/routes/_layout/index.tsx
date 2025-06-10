import { createFileRoute, Link as TLink } from "@tanstack/react-router"
import { componentsData } from "src/shared/data"
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
			{componentsData.map((item, index) => (
				<div key={index}>
					<Flex className={"items-center gap-2 mb-6 mt-8"}>
						<Title
							level={"h3"}
							className={"font-medium"}
						>
							{item.title}
						</Title>
						<Tag>4</Tag>
					</Flex>
					<div className={"grid grid-cols-4 gap-6"}>
						{item.components.map((comp, index) => (
							<TLink
								key={index}
								to={comp.href}
							>
								<Card
									title={comp.title}
									hoverable={true}
									size={"small"}
								>
									<Flex className={"justify-center items-center h-40"}>
										<Image
											preview={false}
											src={comp.icon}
											alt={"Buttons"}
										/>
									</Flex>
								</Card>
							</TLink>
						))}
					</div>
				</div>
			))}
		</>
	)
}
