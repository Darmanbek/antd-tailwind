import { type FC } from "react"

const Logo: FC = () => {
	return (
		<>
			<div className={"flex gap-3 items-center"}>
				<img width={32} height={32} src={"/antd.svg"} alt={"Logo"} />
				<h1 className={"font-semibold text-lg"}>Ant Design</h1>
			</div>
		</>
	)
}

export { Logo }
