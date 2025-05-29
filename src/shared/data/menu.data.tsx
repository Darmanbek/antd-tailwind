export type MenuItem = {
	key: string
	type?: "group"
	label: string
}

export const menuData: MenuItem[] = [
	{
		key: "/",
		label: "Components Overview",
	},
	{
		key: "/general",
		type: "group",
		label: "General",
	},
	{
		key: "/general/button",
		label: "Button",
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
		label: "Typography",
	},
	{
		key: "/layout",
		type: "group",
		label: "Layout",
	},
	{
		key: "/layout/divider",
		label: "Divider",
	},
	{
		key: "/layout/flex",
		label: "Flex",
	},
	{
		key: "/layout/grid",
		label: "Grid",
	},
	{
		key: "/layout/layout",
		label: "Layout",
	},
	{
		key: "/layout/space",
		label: "Space",
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
