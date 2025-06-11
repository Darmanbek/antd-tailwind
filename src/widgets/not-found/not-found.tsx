import { type NotFoundRouteProps, useRouter } from "@tanstack/react-router"
import { type FC } from "react"
import { Button, Flex, Result } from "src/shared/ui"

const NotFound: FC<NotFoundRouteProps> = ({ data }) => {
	const router = useRouter()

	return (
		<>
			<Flex className={"justify-center items-center"}>
				<Result
					status={"404"}
					title={"404"}
					subTitle={"Page not found!"}
					extra={[
						<Button
							key={"back"}
							type={"primary"}
							onClick={() => router.history.back()}
						>
							Back
						</Button>,
						<Button onClick={() => router.navigate({ to: "/", replace: true })}>
							Home
						</Button>,
					]}
					children={JSON.stringify(data)}
				/>
			</Flex>
		</>
	)
}

export { NotFound }
