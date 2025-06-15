import { createFileRoute } from "@tanstack/react-router"
import { Card, Segmented } from "src/shared/ui"

export const Route = createFileRoute("/_layout/data-display/segmented")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Card title={"Segmented"}>
				<Segmented
					options={["hello", "hello 2"]}
					onChange={(value) => {
						console.log(value)
					}}
				/>
			</Card>
		</>
	)
}
