import { AppList } from "./component";
import { useContentsSection } from "./useContentsSection";

export const ContentsSection = () => {
	const { handleClickApp, selectedAppList, apps } = useContentsSection();
	return (
		<AppList
			appList={apps}
			onClickItem={handleClickApp}
			selectedAppList={selectedAppList}
		/>
	);
};
