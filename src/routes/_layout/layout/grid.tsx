import { createFileRoute } from "@tanstack/react-router"
import { Card, Flex, Grid } from "src/shared/ui"

export const Route = createFileRoute("/_layout/layout/grid")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Flex
					vertical={true}
					gap={"middle"}
				>
					<Grid className={"gap-4 grid-cols-4"}>
						<div className={"py-2 bg-blue-600 text-white text-center"}>col-6</div>
						<div className={"py-2 bg-blue-600 text-white text-center"}>col-6</div>
						<div className={"py-2 bg-blue-600 text-white text-center"}>col-6</div>
						<div className={"py-2 bg-blue-600 text-white text-center"}>col-6</div>
					</Grid>
					<Grid className={"gap-4 grid-cols-4"}>
						<div className={"py-2 bg-blue-600 text-white text-center col-span-2"}>col-12</div>
						<div className={"py-2 bg-blue-600 text-white text-center"}>col-6</div>
						<div className={"py-2 bg-blue-600 text-white text-center"}>col-6</div>
						<div className={"py-2 bg-blue-600 text-white text-center"}>col-6</div>
						<div className={"py-2 bg-blue-600 text-white text-center"}>col-6</div>
						<div className={"py-2 bg-blue-600 text-white text-center"}>col-6</div>
						<div className={"py-2 bg-blue-600 text-white text-center"}>col-6</div>
					</Grid>
				</Flex>
			</Card>
		</>
	)
}
