import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/navigation/tabs")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/navigation/tabs"!</div>
}
