import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/navigation/steps")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/navigation/steps"!</div>
}
