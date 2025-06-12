import { createFileRoute } from "@tanstack/react-router"
import { type PropsWithChildren, useState } from "react"
import { cx } from "src/shared/lib"
import { Card, Flex, Grid, GridCol, type GridColProps, Slider } from "src/shared/ui"

export const Route = createFileRoute("/_layout/layout/grid")({
	component: RouteComponent,
})

const Box = ({ className, children }: PropsWithChildren<{ className?: string }>) => (
	<div className={cx("py-2 h-full bg-blue-600 text-white text-center", className)}>{children}</div>
)

const spanOptions = Array.from({ length: 24 }).map((_, index) => index + 1) as GridColProps["span"][]

function RouteComponent() {
	const [span, setSpan] = useState<GridColProps["span"]>(1)

	return (
		<>
			<Card>
				<Grid gutter={"middle"}>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
				</Grid>
				<br />
				<Grid gutter={"middle"}>
					<GridCol span={12}>
						<Box>col-12</Box>
					</GridCol>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
					<GridCol span={18}>
						<Box>col-18</Box>
					</GridCol>
					<GridCol
						span={6}
						className={"row-span-2"}
					>
						<Box className={"flex flex-col justify-around"}>
							<div>col-6</div>
							<div>col-6</div>
						</Box>
					</GridCol>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
					<GridCol span={6}>
						<Box>col-6</Box>
					</GridCol>
				</Grid>
			</Card>
			<Card>
				<Grid gutter={"middle"}>
					<GridCol
						span={6}
						offset={6}
					>
						<Box>col-6</Box>
					</GridCol>
					<GridCol
						span={6}
						offset={18}
					>
						<Box>col-6</Box>
					</GridCol>
				</Grid>
			</Card>
			<Card>
				<p></p>
				<Flex
					wrap={true}
					gap={"middle"}
				>
					<Slider
						min={1}
						max={24}
						value={Number(span)}
						onChange={(value) => setSpan(Number(value) as any)}
					/>
					{/*{spanOptions.map((el, index) => (*/}
					{/*	<Button*/}
					{/*		key={index}*/}
					{/*		type={el === span ? "primary" : "default"}*/}
					{/*		onClick={() => setSpan(el)}*/}
					{/*	>*/}
					{/*		{el}*/}
					{/*	</Button>*/}
					{/*))}*/}
				</Flex>
				<br />
				<Grid gutter={"middle"}>
					{spanOptions.map((_, index) => (
						<GridCol
							key={index}
							span={span}
						>
							<Box>col-{span}</Box>
						</GridCol>
					))}
				</Grid>
			</Card>
		</>
	)
}
