import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { Button, Card, Flex, type FlexProps } from "src/shared/ui"

export const Route = createFileRoute("/_layout/layout/flex")({
	component: RouteComponent,
})

const justifyOptions = [
	"flex-start",
	"center",
	"flex-end",
	"space-between",
	"space-around",
	"space-evenly",
] as const

const alignOptions = ["start", "center", "end"] as const

const gapOptions = ["none", "small", "middle", "large"] as const

function RouteComponent() {
	const [justify, setJustify] = useState<FlexProps["justify"]>(
		justifyOptions[0]
	)
	const [alignItems, setAlignItems] = useState<FlexProps["align"]>(
		alignOptions[0]
	)
	const [gap, setGap] = useState<FlexProps["gap"]>()

	return (
		<>
			<Card>
				<Flex
					vertical={true}
					className={"gap-2"}
				>
					<Flex className={"gap-0"}>
						<div className={"bg-blue-600 w-1/4 h-10"}></div>
						<div className={"bg-blue-400 w-1/4 h-10"}></div>
						<div className={"bg-blue-600 w-1/4 h-10"}></div>
						<div className={"bg-blue-400 w-1/4 h-10"}></div>
					</Flex>
					<Flex
						vertical={true}
						className={"gap-0"}
					>
						<div className={"bg-blue-600 w-1/4 h-10"}></div>
						<div className={"bg-blue-400 w-1/4 h-10"}></div>
						<div className={"bg-blue-600 w-1/4 h-10"}></div>
						<div className={"bg-blue-400 w-1/4 h-10"}></div>
					</Flex>
				</Flex>
			</Card>
			<Card>
				<p>Select justify :</p>
				<Flex
					gap={"middle"}
					className={"mb-4"}
				>
					{justifyOptions.map((el, index) => (
						<Button
							key={index}
							onClick={() => setJustify(el)}
							type={justify === el ? "primary" : "default"}
						>
							{el}
						</Button>
					))}
				</Flex>
				<p>Select align :</p>
				<Flex
					gap={"middle"}
					className={"mb-4"}
				>
					{alignOptions.map((el, index) => (
						<Button
							key={index}
							onClick={() => setAlignItems(el)}
							type={alignItems === el ? "primary" : "default"}
						>
							{el}
						</Button>
					))}
				</Flex>
				<p>Select gap :</p>
				<Flex
					gap={"middle"}
					className={"mb-4"}
				>
					{gapOptions.map((el, index) => (
						<Button
							key={index}
							onClick={() => setGap(el === "none" ? undefined : el)}
							type={
								gap === el || (el === "none" && !gap) ? "primary" : "default"
							}
						>
							{el}
						</Button>
					))}
				</Flex>
				<Flex
					align={alignItems}
					justify={justify}
					gap={gap}
					className={"border rounded border-primary h-28 overflow-hidden"}
				>
					<Button type={"primary"}>Primary</Button>
					<Button type={"primary"}>Primary</Button>
					<Button type={"primary"}>Primary</Button>
					<Button type={"primary"}>Primary</Button>
				</Flex>
			</Card>
			<Card title={"Flex Wrap"}>
				<Flex
					wrap={true}
					gap={"small"}
				>
					{Array.from({ length: 30 }).map((_, index) => (
						<Button
							key={index}
							type={"primary"}
						>
							Button
						</Button>
					))}
				</Flex>
			</Card>
		</>
	)
}
