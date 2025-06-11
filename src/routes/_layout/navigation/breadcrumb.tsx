import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/navigation/breadcrumb")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/navigation/breadcrumb"!</div>
}
