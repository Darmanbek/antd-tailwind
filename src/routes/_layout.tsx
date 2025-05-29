import { createFileRoute, Outlet } from "@tanstack/react-router"
import { menuData } from "src/shared/data"
import { cx } from "src/shared/lib/utils.ts"
import { Logo } from "src/widgets/logo"

export const Route = createFileRoute("/_layout")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<div className={"min-h-screen flex flex-col w-full"}>
				<header
					className={
						"min-h-16 px-10 leading-[4rem] bg-container flex shadow-tertiary sticky inset-x-0 top-0 z-10"
					}
				>
					<Logo />
				</header>
				<div className={"flex mt-10"}>
					<aside
						className={
							"w-72 sticky max-h-[calc(100vh-6.5rem)] bottom-0 left-0 top-16 overflow-y-auto overflow-x-hidden"
						}
					>
						<ul className={"border-r px-1"}>
							{menuData.map((item) => (
								<li
									key={item.key}
									className={cx(
										"pl-6 overflow-hidden text-sm text-ellipsis relative flex items-center h-10 leading-10 list-inside list-disc mx-1 my-1 w-[calc(100%-0.5rem)] whitespace-nowrap cursor-pointer rounded-lg  transition-colors duration-mid",
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
					</aside>
					<div className={"flex-1 px-12"}>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	)
}
