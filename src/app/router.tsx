import { createRouter } from "@tanstack/react-router"

// Import the generated route tree
import { routeTree } from "src/routeTree.gen"
import { NotFound } from "src/widgets/not-found"

// Create a new router instance
export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
	defaultNotFoundComponent: NotFound,
})

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}
