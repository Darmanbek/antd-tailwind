import { createFileRoute } from "@tanstack/react-router"
import { Card, Space, Tag } from "src/shared/ui"

export const Route = createFileRoute("/_layout/data-display/tag")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Tag>Tag</Tag>
			</Card>
			<Card>
				<Space>
					<Tag>Tag</Tag>
					<Tag color={"red"}>Tag</Tag>
					<Tag color={"green"}>Tag</Tag>
				</Space>
			</Card>
		</>
	)
}
