import { createFileRoute } from "@tanstack/react-router"
import { Card, Flex, Input } from "src/shared/ui"

export const Route = createFileRoute("/_layout/data-entry/input")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Flex gap={"small"}>
					<Input
						variant={"outlined"}
						placeholder={"outlined"}
					/>
					<Input
						variant={"filled"}
						placeholder={"filled"}
					/>
					<Input
						variant={"borderless"}
						placeholder={"borderless"}
					/>
					<Input
						variant={"underlined"}
						placeholder={"underlined"}
					/>
				</Flex>
			</Card>
		</>
	)
}
