import { apps } from "../../constans";
import { useInstallApp } from "../../hooks/useInstallApp";

export const useContentsSection = () => {
	const { add, remove, selectedAppList } = useInstallApp();

	const handleClickApp = (appName: string) => {
		if (selectedAppList.includes(appName)) {
			remove(appName);
		} else {
			add(appName);
		}
	};

	return {
		selectedAppList,
		handleClickApp,
		apps,
	};
};
