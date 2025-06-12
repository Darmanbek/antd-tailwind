import { Link } from "@tanstack/react-router"
import { Tag, type TagProps } from "src/shared/ui"
import type { ItemType } from "src/shared/ui/menu"

const toLinkItem = (label: string, key: string) => <Link to={key}>{label}</Link>

const toTagItem = (label: string, color: TagProps["color"] = "green") => <Tag color={color}>{label}</Tag>

export const menuData: ItemType[] = [
	{
		key: "/",
		label: <Link to={"/"}>Components Overview</Link>,
	},
	{
		key: "/general",
		type: "group",
		label: "General",
	},
	{
		key: "/general/button",
		label: <Link to={"/general/button"}>Button</Link>,
		extra: (
			<Tag
				bordered={false}
				color={"green"}
			>
				99%
			</Tag>
		),
	},
	{
		key: "/general/float-button",
		label: toLinkItem("FloatButton", "/general/float-button"),
		extra: (
			<Tag
				bordered={false}
				color={"red"}
			>
				0%
			</Tag>
		),
	},
	{
		key: "/general/icon",
		label: toLinkItem("Icon", "/general/icon"),
		extra: (
			<Tag
				bordered={false}
				color={"green"}
			>
				2%
			</Tag>
		),
	},
	{
		key: "/general/typography",
		label: <Link to={"/general/typography"}>Typography</Link>,
		extra: (
			<Tag
				bordered={false}
				color={"green"}
			>
				80%
			</Tag>
		),
	},
	{
		key: "/layout",
		type: "group",
		label: "Layout",
	},
	{
		key: "/layout/divider",
		label: <Link to={"/layout/divider"}>Divider</Link>,
		extra: (
			<Tag
				bordered={false}
				color={"green"}
			>
				99%
			</Tag>
		),
	},
	{
		key: "/layout/flex",
		label: <Link to={"/layout/flex"}>Flex</Link>,
		extra: (
			<Tag
				bordered={false}
				color={"green"}
			>
				99%
			</Tag>
		),
	},
	{
		key: "/layout/grid",
		label: <Link to={"/layout/grid"}>Grid</Link>,
		extra: (
			<Tag
				bordered={false}
				color={"green"}
			>
				50%
			</Tag>
		),
	},
	{
		key: "/layout/layout",
		label: <Link to={"/layout/layout"}>Layout</Link>,
		extra: (
			<Tag
				bordered={false}
				color={"green"}
			>
				1%
			</Tag>
		),
	},
	{
		key: "/layout/space",
		label: <Link to={"/layout/space"}>Space</Link>,
		extra: toTagItem("80%"),
	},
	{
		key: "/navigation",
		type: "group",
		label: "Navigation",
	},
	{
		key: "/navigation/anchor",
		label: toLinkItem("Anchor", "/navigation/anchor"),
	},
	{
		key: "/navigation/breadcrumb",
		label: toLinkItem("Breadcrumb", "/navigation/breadcrumb"),
	},
	{
		key: "/navigation/dropdown",
		label: toLinkItem("Dropdown", "/navigation/dropdown"),
	},
	{
		key: "/navigation/menu",
		label: toLinkItem("Menu", "/navigation/menu"),
	},
	{
		key: "/navigation/pagination",
		label: toLinkItem("Pagination", "/navigation/pagination"),
	},
	{
		key: "/navigation/steps",
		label: toLinkItem("Steps", "/navigation/steps"),
	},
	{
		key: "/navigation/tabs",
		label: toLinkItem("Tabs", "/navigation/tabs"),
	},
	{
		key: "/data-entry",
		type: "group",
		label: "Data Entry",
	},
	{
		key: "/data-entry/auto-complete",
		label: toLinkItem("AutoComplete", "/data-entry/auto-complete"),
	},
	{
		key: "/data-entry/checkbox",
		label: toLinkItem("Checkbox", "/data-entry/checkbox"),
	},
	{
		key: "/data-entry/color-picker",
		label: toLinkItem("ColorPicker", "/data-entry/color-picker"),
	},
	{
		key: "/data-entry/date-picker",
		label: toLinkItem("DatePicker", "/data-entry/date-picker"),
	},
	{
		key: "/data-entry/form",
		label: toLinkItem("Form", "/data-entry/form"),
	},
	{
		key: "/data-entry/input",
		label: toLinkItem("Input", "/data-entry/input"),
	},
	{
		key: "/data-entry/input-number",
		label: toLinkItem("InputNumber", "/data-entry/input-number"),
	},
	{
		key: "/data-entry/mentions",
		label: toLinkItem("Mentions", "/data-entry/mentions"),
	},
	{
		key: "/data-entry/radio",
		label: toLinkItem("Radio", "/data-entry/radio"),
	},
	{
		key: "/data-entry/rate",
		label: toLinkItem("Rate", "/data-entry/rate"),
	},
	{
		key: "/data-entry/select",
		label: toLinkItem("Select", "/data-entry/select"),
	},
	{
		key: "/data-entry/slider",
		label: toLinkItem("Slider", "/data-entry/slider"),
		extra: toTagItem("40%"),
	},
	{
		key: "/data-entry/switch",
		label: toLinkItem("Switch", "/data-entry/switch"),
	},
	{
		key: "/data-entry/time-picker",
		label: toLinkItem("TimePicker", "/data-entry/time-picker"),
	},
	{
		key: "/data-entry/transfer",
		label: toLinkItem("Transfer", "/data-entry/transfer"),
	},
	{
		key: "/data-entry/tree-select",
		label: toLinkItem("TreeSelect", "/data-entry/tree-select"),
	},
	{
		key: "/data-entry/upload",
		label: toLinkItem("Upload", "/data-entry/upload"),
	},
	{
		key: "/data-display",
		type: "group",
		label: "Data Display",
	},
	{
		key: "/data-display/avatar",
		label: toLinkItem("Avatar", "/data-display/avatar"),
	},
	{
		key: "/data-display/badge",
		label: toLinkItem("Badge", "/data-display/badge"),
	},
	{
		key: "/data-display/calendar",
		label: toLinkItem("Calendar", "/data-display/calendar"),
	},
	{
		key: "/data-display/card",
		label: toLinkItem("Card", "/data-display/card"),
	},
	{
		key: "/data-display/carousel",
		label: toLinkItem("Carousel", "/data-display/carousel"),
	},
	{
		key: "/data-display/collapse",
		label: toLinkItem("Collapse", "/data-display/collapse"),
	},
	{
		key: "/data-display/descriptions",
		label: toLinkItem("Descriptions", "/data-display/descriptions"),
	},
	{
		key: "/data-display/empty",
		label: toLinkItem("Empty", "/data-display/empty"),
	},
	{
		key: "/data-display/image",
		label: toLinkItem("Image", "/data-display/image"),
	},
	{
		key: "/data-display/list",
		label: toLinkItem("List", "/data-display/list"),
	},
	{
		key: "/data-display/popover",
		label: toLinkItem("Popover", "/data-display/popover"),
	},
	{
		key: "/data-display/qr-code",
		label: toLinkItem("QRCode", "/data-display/qr-code"),
	},
	{
		key: "/data-display/segmented",
		label: toLinkItem("Segmented", "/data-display/segmented"),
	},
	{
		key: "/data-display/statistic",
		label: toLinkItem("Statistic", "/data-display/statistic"),
	},
	{
		key: "/data-display/table",
		label: toLinkItem("Table", "/data-display/table"),
	},
	{
		key: "/data-display/tag",
		label: toLinkItem("Tag", "/data-display/tag"),
	},
	{
		key: "/data-display/timeline",
		label: toLinkItem("Timeline", "/data-display/timeline"),
	},
	{
		key: "/data-display/tooltip",
		label: toLinkItem("Tooltip", "/data-display/tooltip"),
	},
	{
		key: "/data-display/tour",
		label: toLinkItem("Tour", "/data-display/tour"),
	},
	{
		key: "/data-display/tree",
		label: toLinkItem("Tree", "/data-display/tree"),
	},
	{
		key: "/feedback",
		type: "group",
		label: "Feedback",
	},
	{
		key: "/feedback/alert",
		label: toLinkItem("Alert", "/feedback/alert"),
	},
	{
		key: "/feedback/drawer",
		label: toLinkItem("Drawer", "/feedback/drawer"),
	},
	{
		key: "/feedback/message",
		label: toLinkItem("Message", "/feedback/message"),
	},
	{
		key: "/feedback/modal",
		label: toLinkItem("Modal", "/feedback/modal"),
	},
	{
		key: "/feedback/notification",
		label: toLinkItem("Notification", "/feedback/notification"),
	},
	{
		key: "/feedback/popconfirm",
		label: toLinkItem("Popconfirm", "/feedback/popconfirm"),
	},
	{
		key: "/feedback/progress",
		label: toLinkItem("Progress", "/feedback/progress"),
	},
	{
		key: "/feedback/result",
		label: toLinkItem("Result", "/feedback/result"),
	},
	{
		key: "/feedback/skeleton",
		label: toLinkItem("Skeleton", "/feedback/skeleton"),
	},
	{
		key: "/feedback/spin",
		label: toLinkItem("Spin", "/feedback/spin"),
	},
	{
		key: "/feedback/watermark",
		label: toLinkItem("Watermark", "/feedback/watermark"),
	},
	{
		key: "/other",
		type: "group",
		label: "Other",
	},
	{
		key: "/other/affix",
		label: toLinkItem("Affix", "/other/affix"),
	},
	{
		key: "/other/app",
		label: toLinkItem("App", "/other/app"),
	},
	{
		key: "/other/config-provider",
		label: toLinkItem("ConfigProvider", "/other/config-provider"),
	},
	{
		key: "/other/_util",
		label: toLinkItem("Util", "/other/_util"),
	},
]
