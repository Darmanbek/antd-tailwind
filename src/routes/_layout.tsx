import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router"
import { menuData } from "src/shared/data"
import { Content, Footer, Header, Layout, Menu, Sider } from "src/shared/ui"
import { Logo } from "src/widgets/logo"

export const Route = createFileRoute("/_layout")({
	component: RouteComponent,
})

function RouteComponent() {
	const { pathname } = useLocation()

	return (
		<>
			<Layout className={"min-h-screen bg-background-container"}>
				<Header
					className={"light pl-10 shadow-tertiary sticky inset-x-0 top-0 z-10"}
				>
					<Logo />
				</Header>
				<Layout
					hasSider={true}
					className={"mt-10 bg-background-container"}
				>
					<Sider
						className={
							"light w-[21rem] sticky max-h-[calc(100vh-6.5rem)] bottom-0 left-0 top-16 overflow-y-auto overflow-x-hidden"
						}
					>
						<Menu
							items={menuData}
							className={"pb-12"}
							selectedKeys={[pathname]}
						/>
					</Sider>
					<Layout className={"bg-background-container"}>
						<Content className={"px-12 pb-12 flex flex-col gap-4"}>
							<Outlet />
						</Content>
						<Footer className={"text-center bg-background-container"}>
							Ant Design Tailwind CSS 3 - ©{new Date().getFullYear()} Created
							by Darmanbek
						</Footer>
					</Layout>
				</Layout>
			</Layout>
		</>
	)
}
