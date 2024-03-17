import { Grid } from "@kuma-ui/core";
import type { App } from "../../../../constans";
import { AppListItem } from "./component";

type Props = {
	onClickItem: (appName: string) => void;
	appList: App[];
	selectedAppList: string[];
};

export const AppList = ({ appList, selectedAppList, onClickItem }: Props) => {
	return (
		<Grid
			gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
			gap={24}
		>
			{appList.map((app) => {
				const isSelected = selectedAppList.includes(app.name);
				return (
					<AppListItem
						key={app.name}
						appImage={app.icon}
						appName={app.name}
						onClickItem={onClickItem}
						isSelected={isSelected}
					/>
				);
			})}
		</Grid>
	);
};
