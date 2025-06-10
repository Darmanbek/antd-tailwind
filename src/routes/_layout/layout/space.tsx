import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/layout/space")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/layout/space"!</div>
}
