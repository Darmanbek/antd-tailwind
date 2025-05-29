import { RouterProvider } from "@tanstack/react-router"
import { type FC } from "react"
import { router } from "src/app/router"

const App: FC = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export { App }
