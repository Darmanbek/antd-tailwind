import { createFileRoute } from "@tanstack/react-router"
import { Card, Slider } from "src/shared/ui"

export const Route = createFileRoute("/_layout/data-entry/slider")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Slider />
			</Card>
		</>
	)
}
