import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { Button, Card, Space, type SpaceProps } from "src/shared/ui"

export const Route = createFileRoute("/_layout/layout/space")({
	component: RouteComponent,
})

const sizeOptions: SpaceProps["size"][] = ["small", "middle", "large"]
const directionOptions: SpaceProps["direction"][] = ["horizontal", "vertical"]

function RouteComponent() {
	const [size, setSize] = useState(sizeOptions[0])
	const [direction, setDirection] = useState(directionOptions[0])

	return (
		<>
			<Card>
				<Space>
					<div className={"bg-blue-600 py-4 w-32 text-center text-white"}>Content</div>
					<div className={"bg-blue-600 py-4 w-32 text-center text-white"}>Content</div>
					<div className={"bg-blue-600 py-4 w-32 text-center text-white"}>Content</div>
					<div className={"bg-blue-600 py-4 w-32 text-center text-white"}>Content</div>
				</Space>
				<br />
				<Space direction={"vertical"}>
					<div className={"bg-blue-600 py-4 w-32 text-center text-white"}>Content</div>
					<div className={"bg-blue-600 py-4 w-32 text-center text-white"}>Content</div>
					<div className={"bg-blue-600 py-4 w-32 text-center text-white"}>Content</div>
					<div className={"bg-blue-600 py-4 w-32 text-center text-white"}>Content</div>
				</Space>
			</Card>
			<Card>
				<Space>
					<p>Direction :</p>
					{directionOptions.map((el, index) => (
						<Button
							type={el === direction ? "primary" : "default"}
							key={index}
							onClick={() => setDirection(el)}
						>
							{el}
						</Button>
					))}
				</Space>
				<br />
				<Space>
					<p>Size :</p>
					{sizeOptions.map((el, index) => (
						<Button
							type={el === size ? "primary" : "default"}
							key={index}
							onClick={() => setSize(el)}
						>
							{el}
						</Button>
					))}
				</Space>
				<br />
				<Space
					size={size}
					direction={direction}
				>
					<div className={"bg-blue-600 py-4 w-32 text-center text-white"}>Content</div>
					<div className={"bg-blue-600 py-4 w-32 text-center text-white"}>Content</div>
					<div className={"bg-blue-600 py-4 w-32 text-center text-white"}>Content</div>
					<div className={"bg-blue-600 py-4 w-32 text-center text-white"}>Content</div>
				</Space>
			</Card>
		</>
	)
}
