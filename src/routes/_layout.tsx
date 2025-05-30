import { createFileRoute, Outlet } from "@tanstack/react-router"
import { menuData } from "src/shared/data"
import { cx } from "src/shared/lib"
import { Content, Footer, Header, Layout, Sider } from "src/shared/ui/layout"
import { Logo } from "src/widgets/logo"

export const Route = createFileRoute("/_layout")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Layout className={"min-h-screen bg-container"}>
				<Header className={"light shadow-tertiary sticky inset-x-0 top-0 z-10"}>
					<Logo />
				</Header>
				<Layout
					hasSider={true}
					className={"mt-10 bg-container"}
				>
					<Sider
						className={
							"light w-72 sticky max-h-[calc(100vh-6.5rem)] bottom-0 left-0 top-16 overflow-y-auto overflow-x-hidden"
						}
					>
						<ul className={"border-r px-1"}>
							{menuData.map((item) => (
								<li
									key={item.key}
									className={cx(
										"pl-6 overflow-hidden text-base text-ellipsis relative flex items-center h-10 leading-10 list-inside list-disc mx-1 my-1 w-[calc(100%-0.5rem)] whitespace-nowrap cursor-pointer rounded-lg  transition-colors duration-mid",
										{
											"hover:bg-black/[0.06]": !item.type,
											"text-foreground-tertiary my-4 border-b rounded-none cursor-default":
												item.type === "group",
										}
									)}
								>
									<span>{item.label}</span>
								</li>
							))}
						</ul>
					</Sider>
					<Layout className={"bg-container"}>
						<Content className={"px-12 pb-12"}>
							<Outlet />
						</Content>
						<Footer className={"text-center bg-container"}>
							Ant Design Tailwind CSS 3 - ©{new Date().getFullYear()} Created
							by Darmanbek
						</Footer>
					</Layout>
				</Layout>
			</Layout>
		</>
	)
}
