import { createFileRoute } from "@tanstack/react-router"
import { Card, Divider, Link, Paragraph, Space, Text, Title, Typography } from "src/shared/ui"

export const Route = createFileRoute("/_layout/general/typography")({
	component: RouteComponent,
})

const blockContent = `AntV is Ant Group's new generation of data visualization solution, dedicated to providing a set of simple, convenient, professional, reliable, and unlimited data visualization best practices. Thanks to the rich business scenarios and user demand challenges, AntV has experienced years of accumulation and continuous polishing, and has supported 20,000+ business systems inside and outside the entire Alibaba Group, and has passed the rigorous test of tens of millions of UV products per day.
We are working in various visualization fields such as basic charts, graph analysis, graph editing, geospatial visualization, and intelligent visualization. We welcome fellow travelers to move forward together.`

function RouteComponent() {
	return (
		<>
			<Card title={"Typography"}>
				<Typography className={"overflow-hidden"}>
					<Title>Introduction</Title>

					<Paragraph>
						In the process of internal desktop applications development, many different design specs and implementations
						would be involved, which might cause designers and developers difficulties and duplication and reduce the
						efficiency of development.
					</Paragraph>

					<Paragraph>
						After massive project practice and summaries, Ant Design, a design language for background applications, is
						refined by Ant UED Team, which aims to{" "}
						<Text strong={true}>
							uniform the user interface specs for internal background projects, lower the unnecessary cost of design
							differences and implementation and liberate the resources of design and front-end development.
						</Text>
					</Paragraph>

					<Title level={"h2"}>Guidelines and Resources</Title>

					<Paragraph>
						We supply a series of design principles, practical patterns and high quality design resources (
						<Text code={true}>Sketch</Text>and
						<Text code={true}>Axure</Text>), to help people create their product prototypes beautifully and efficiently.
					</Paragraph>

					<Paragraph>
						<ul>
							<li>
								<Link href={"/docs/spec/proximity"}>Principles</Link>
							</li>
							<li>
								<Link href={"/docs/spec/overview"}>Patterns</Link>
							</li>
							<li>
								<Link href={"/docs/resources"}>Resource Download</Link>
							</li>
						</ul>
					</Paragraph>

					<Paragraph>
						Press <Text keyboard={true}>Esc</Text> to exit...
					</Paragraph>

					<Divider />

					<Title>Introduce</Title>

					<Paragraph>
						Ant's enterprise-level products are a large and complex system. These products are not only large in scale
						and complex in function, but also frequently change and are concurrent, often requiring design and
						development to respond quickly. At the same time, there are many similar pages and components in these
						products, and some stable and highly reusable content can be obtained through abstraction.
					</Paragraph>

					<Paragraph>
						With the trend of commercialization, more and more enterprise-level products have further requirements for
						better user experience. With such an ultimate goal, we (Ant Group Experience Technology Department) have
						gradually polished a design system that serves enterprise-level products after a lot of project practice and
						summary. Ant Design. based on
						<Text mark={true}>『Certainty』and『Natural』</Text>
						The design values of modular solutions reduce redundant production costs and allow designers to focus on{" "}
						<Text strong={true}>Better user experience</Text>。
					</Paragraph>

					<Title level={"h2"}>Design resources</Title>

					<Paragraph>
						We provide comprehensive design principles, best practices and design resource documents (
						<Text code={true}>Sketch</Text> and
						<Text code={true}>Axure</Text>
						）, to help businesses quickly design high-quality product prototypes.
					</Paragraph>

					<Paragraph>
						<ul>
							<li>
								<Link href={"/docs/spec/proximity-cn"}>design principles</Link>
							</li>
							<li>
								<Link href={"/docs/spec/overview-cn"}>design pattern</Link>
							</li>
							<li>
								<Link href={"/docs/resources-cn"}>design resources</Link>
							</li>
						</ul>
					</Paragraph>

					<Paragraph>
						<blockquote>{blockContent}</blockquote>
						<pre>{blockContent}</pre>
					</Paragraph>

					<Paragraph>
						according to<Text keyboard={true}>Esc</Text>key to exit reading...
					</Paragraph>
				</Typography>
			</Card>
			<Card title={"Title level 1, 2, 3, 4, 5"}>
				<Space
					direction={"vertical"}
					className={"items-center"}
				>
					<Title level={"h1"}>h1. Ant Design</Title>
					<Title level={"h2"}>h2. Ant Design</Title>
					<Title level={"h3"}>h3. Ant Design</Title>
					<Title level={"h4"}>h4. Ant Design</Title>
					<Title level={"h5"}>h5. Ant Design</Title>
				</Space>
			</Card>
			<Card title={"Text"}>
				<Space
					direction={"vertical"}
					className={"items-center"}
				>
					<Text>Ant Design (default)</Text>
					<Text type={"secondary"}>Ant Design (secondary)</Text>
					<Text type={"success"}>Ant Design (success)</Text>
					<Text type={"warning"}>Ant Design (warning)</Text>
					<Text type={"danger"}>Ant Design (danger)</Text>
					<Text disabled={true}>Ant Design (disabled)</Text>
					<Text mark={true}>Ant Design (mark)</Text>
					<Text code={true}>Ant Design (code)</Text>
					<Text keyboard={true}>Ant Design (keyboard)</Text>
					<Text underline={true}>Ant Design (underline)</Text>
					<Text delete={true}>Ant Design (delete)</Text>
					<Text strong={true}>Ant Design (strong)</Text>
					<Text italic={true}>Ant Design (italic)</Text>
					<Link
						href={"https://ant.design"}
						target={"_blank"}
						rel={"noopener noreferrer"}
					>
						Ant Design (Link)
					</Link>
				</Space>
			</Card>
		</>
	)
}
