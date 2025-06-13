import { createFileRoute } from "@tanstack/react-router"
import { Card, Divider, Flex, Tag } from "src/shared/ui"

export const Route = createFileRoute("/_layout/layout/divider")({
	component: RouteComponent,
})

const content =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne tmerninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."

function RouteComponent() {
	return (
		<>
			<Card
				title={
					<Flex gap={"small"}>
						Divider
						<div>
							<Tag>dashed</Tag>
							<Tag>dotted</Tag>
						</div>
					</Flex>
				}
			>
				<p>{content}</p>
				<Divider />
				<p>{content}</p>
				<Divider variant={"dashed"} />
				<p>{content}</p>
				<Divider
					className={"border-primary"}
					variant={"dotted"}
				/>
				<p>{content}</p>
				<Divider>Text</Divider>
				<p>{content}</p>
				<Divider orientation={"left"}>Left Text</Divider>
				<p>{content}</p>
				<Divider orientation={"right"}>Right Text</Divider>
				<p>{content}</p>
			</Card>
		</>
	)
}
