import { createFileRoute } from "@tanstack/react-router"
import { Divider, Input, Link, Paragraph, Text, Title } from "src/shared/ui"

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
				className={"text-xl p-0"}
				placeholder={"Search in components"}
			/>
			<Divider />
		</>
	)
}
