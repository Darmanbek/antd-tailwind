import { createFileRoute } from "@tanstack/react-router"
import { Button, Card, Space } from "src/shared/ui"
import { UserOutlined } from "src/shared/ui/icon"

export const Route = createFileRoute("/_layout/general/button")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<Card>
				<Space>
					<Button type={"primary"}>Primary Button</Button>
					<Button type={"filled"}>Filled Button</Button>
					<Button>Default Button</Button>
					<Button type={"dashed"}>Dashed Button</Button>
					<Button type={"text"}>Text Button</Button>
					<Button type={"link"}>Link Button</Button>
				</Space>
			</Card>
			<Card>
				<Space>
					<Button
						danger={true}
						type={"primary"}
					>
						Primary Danger Button
					</Button>
					<Button
						danger={true}
						type={"filled"}
					>
						Filled Danger Button
					</Button>
					<Button
						danger={true}
						type={"default"}
					>
						Default Danger Button
					</Button>
					<Button
						danger={true}
						type={"dashed"}
					>
						Dashed Danger Button
					</Button>
					<Button
						danger={true}
						type={"text"}
					>
						Text Danger Button
					</Button>
					<Button
						danger={true}
						type={"link"}
					>
						Link Danger Button
					</Button>
				</Space>
			</Card>
			<Card>
				<Space>
					<Button
						disabled={true}
						type={"primary"}
					>
						Primary Button(Disabled)
					</Button>
					<Button
						disabled={true}
						type={"filled"}
					>
						Filled Button(Disabled)
					</Button>
					<Button
						disabled={true}
						type={"default"}
					>
						Default Button(Disabled)
					</Button>
					<Button
						disabled={true}
						type={"dashed"}
					>
						Dashed Button(Disabled)
					</Button>
					<Button
						disabled={true}
						type={"text"}
					>
						Text Button(Disabled)
					</Button>
					<Button
						disabled={true}
						type={"link"}
					>
						Link Button(Disabled)
					</Button>
				</Space>
			</Card>
			<Card>
				<Space>
					<Button size={"small"}>Small Button</Button>
					<Button size={"middle"}>Middle Button</Button>
					<Button size={"large"}>Large Button</Button>
				</Space>
			</Card>
			<Card>
				<Space>
					<Button
						type={"primary"}
						shape={"round"}
						size={"small"}
					>
						Small Button
					</Button>
					<Button
						type={"primary"}
						shape={"round"}
						size={"middle"}
					>
						Middle Button
					</Button>
					<Button
						type={"primary"}
						shape={"round"}
						size={"large"}
					>
						Large Button
					</Button>
					<Button
						type={"primary"}
						shape={"round"}
						size={"small"}
						icon={<UserOutlined />}
					/>
					<Button
						type={"primary"}
						shape={"round"}
						size={"middle"}
						icon={<UserOutlined />}
					/>
					<Button
						type={"primary"}
						shape={"round"}
						size={"large"}
						icon={<UserOutlined />}
					/>
				</Space>
			</Card>
			<Card>
				<Space>
					<Button
						size={"large"}
						icon={<UserOutlined />}
					>
						Icon Button
					</Button>
					<Button
						size={"large"}
						icon={<UserOutlined />}
					/>
					<Button
						size={"large"}
						type={"primary"}
						shape={"circle"}
						loading={true}
						icon={<UserOutlined />}
					/>
					<Button
						size={"large"}
						loading={true}
						icon={<UserOutlined />}
					>
						Icon start
					</Button>
					<Button
						type={"primary"}
						loading={true}
						size={"large"}
						iconPosition={"end"}
						icon={<UserOutlined />}
					>
						Icon end
					</Button>
				</Space>
			</Card>
			<Card className={"bg-gray-400"}>
				<Space>
					<Button
						type={"primary"}
						ghost={true}
					>
						Primary Ghost
					</Button>
					<Button
						ghost={true}
						type={"filled"}
					>
						Filled
					</Button>
					<Button
						type={"default"}
						ghost={true}
					>
						Default Ghost
					</Button>
					<Button
						type={"dashed"}
						ghost={true}
					>
						Dashed Ghost
					</Button>
					<Button
						type={"default"}
						danger={true}
						ghost={true}
					>
						Danger Ghost
					</Button>
				</Space>
			</Card>
			<Card>
				<Space className={"space-y-2 space-x-0"}>
					<Button
						block={true}
						type={"primary"}
					>
						Primary
					</Button>
					<Button
						block={true}
						type={"filled"}
					>
						Filled
					</Button>
					<Button
						block={true}
						type={"default"}
					>
						Default
					</Button>
					<Button
						block={true}
						type={"dashed"}
					>
						Dashed
					</Button>
					<Button
						block={true}
						type={"default"}
						disabled={true}
					>
						Disabled
					</Button>
					<Button
						block={true}
						type={"text"}
					>
						Text
					</Button>
					<Button
						block={true}
						type={"link"}
					>
						Link
					</Button>
				</Space>
			</Card>
		</>
	)
}
