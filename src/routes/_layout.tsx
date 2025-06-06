import { createFileRoute, Outlet } from "@tanstack/react-router"
import { menuData } from "src/shared/data"
import {
	Content,
	Footer,
	Header,
	Layout,
	Menu,
	MenuDivider,
	MenuItem,
	MenuItemGroup,
	Sider,
} from "src/shared/ui"
import { Logo } from "src/widgets/logo"

export const Route = createFileRoute("/_layout")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Layout className={"min-h-screen bg-container"}>
				<Header
					className={"light pl-10 shadow-tertiary sticky inset-x-0 top-0 z-10"}
				>
					<Logo />
				</Header>
				<Layout
					hasSider={true}
					className={"mt-10 bg-container"}
				>
					<Sider
						className={
							"light w-[21rem] sticky max-h-[calc(100vh-6.5rem)] bottom-0 left-0 top-16 overflow-y-auto overflow-x-hidden"
						}
					>
						<Menu>
							{menuData.map((item) =>
								item.type === "group" ? (
									<MenuItemGroup
										key={item.key}
										className={"my-4"}
										classNames={{
											group:
												"[&_.group-item-group-title]:pl-8 [&_.group-item-group-title]:after:block [&_.group-item-group-title]:after:w-[calc(100%-1.25rem)] [&_.group-item-group-title]:after:border-b [&_.group-item-group-title]:after:border-split [&_.group-item-group-title]:after:top-3",
										}}
										title={item.label}
									/>
								) : item.type === "divider" ? (
									<MenuDivider />
								) : (
									<MenuItem
										key={item.key}
										className={"pl-8"}
									>
										{item.label}
									</MenuItem>
								)
							)}
						</Menu>
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
