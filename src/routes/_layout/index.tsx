import { createFileRoute } from "@tanstack/react-router"
import { UserOutlined } from "src/shared/ui/icon"

export const Route = createFileRoute("/_layout/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<h1 className={"font-semibold text-3xl"}>Components Overview</h1>
			<UserOutlined className={"size-10"} />
		</>
	)
}
