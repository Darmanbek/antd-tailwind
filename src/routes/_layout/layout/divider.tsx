import { createFileRoute } from "@tanstack/react-router"
import { Card, Divider } from "src/shared/ui"

export const Route = createFileRoute("/_layout/layout/divider")({
	component: RouteComponent,
})

const content =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne tmerninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."

function RouteComponent() {
	return (
		<>
			<Card>
				<p>{content}</p>
				<Divider />
				<p>{content}</p>
				<Divider dashed={true} />
				<p>{content}</p>
				<Divider dotted={true} />
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
