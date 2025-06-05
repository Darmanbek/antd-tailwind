import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/general/button")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/general/button"!</div>
}
