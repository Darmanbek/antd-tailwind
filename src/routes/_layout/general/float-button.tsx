import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/general/float-button")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/general/float-button"!</div>
}
