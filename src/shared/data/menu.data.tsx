import { Link } from "@tanstack/react-router"
import type { MenuItemType } from "src/shared/ui/menu"

export const menuData: MenuItemType[] = [
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
	},
	{
		key: "/general/float-button",
		label: "FloatButton",
	},
	{
		key: "/general/icon",
		label: "Icon",
	},
	{
		key: "/general/typography",
		label: <Link to={"/general/typography"}>Typography</Link>,
	},
	{
		key: "/layout",
		type: "group",
		label: "Layout",
	},
	{
		key: "/layout/divider",
		label: <Link to={"/layout/divider"}>Divider</Link>,
	},
	{
		key: "/layout/flex",
		label: <Link to={"/layout/flex"}>Flex</Link>,
	},
	{
		key: "/layout/grid",
		label: <Link to={"/layout/grid"}>Grid</Link>,
	},
	{
		key: "/layout/layout",
		label: <Link to={"/layout/layout"}>Layout</Link>,
	},
	{
		key: "/layout/space",
		label: <Link to={"/layout/space"}>Space</Link>,
	},
	{
		key: "/navigation",
		type: "group",
		label: "Navigation",
	},
	{
		key: "/navigation/anchor",
		label: "Anchor",
	},
	{
		key: "/navigation/breadcrumb",
		label: "Breadcrumb",
	},
	{
		key: "/navigation/dropdown",
		label: "Dropdown",
	},
	{
		key: "/navigation/menu",
		label: "Menu",
	},
	{
		key: "/navigation/pagination",
		label: "Pagination",
	},
	{
		key: "/navigation/steps",
		label: "Steps",
	},
	{
		key: "/navigation/tabs",
		label: "Tabs",
	},
	{
		key: "/data-entry",
		type: "group",
		label: "Data Entry",
	},
	{
		key: "/data-entry/auto-complete",
		label: "AutoComplete",
	},
	{
		key: "/data-display",
		type: "group",
		label: "Data Display",
	},
	{
		key: "/data-display/avatar",
		label: "Avatar",
	},
	{
		key: "/feedback",
		type: "group",
		label: "Feedback",
	},
	{
		key: "/feedback/alert",
		label: "Alert",
	},
	{
		key: "/other",
		type: "group",
		label: "Other",
	},
	{
		key: "/other/affix",
		label: "Affix",
	},
]
