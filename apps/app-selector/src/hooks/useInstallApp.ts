import { useAtom } from "jotai";
import { selectedAppListAtom } from "../atom";
import { apps } from "../constans";

export const useInstallApp = () => {
	const [selectedAppList, setSelectedAppList] = useAtom(selectedAppListAtom);

	const addAll = () => {
		for (const app of apps) {
			setSelectedAppList((prev) => [...prev, app.name]);
		}
	};

	const removeAll = () => {
		setSelectedAppList([]);
	};

	const add = (appName: string) => {
		setSelectedAppList((prev) => [...prev, appName]);
	};

	const remove = (appName: string) => {
		setSelectedAppList((prev) => {
			const selectedAppList = prev;
			return selectedAppList.filter((app) => app !== appName);
		});
	};

	const generateInstallCommandList = (): string => {
		const commandList: string[] = [];
		for (const app of apps) {
			if (!selectedAppList.includes(app.name)) continue;
			commandList.push(
				`"brew install ${app.formula ? "" : "--cask"} ${
					app.brewAppName
				}"`,
			);
		}

		return `export const installAppComands: string[] = [${commandList.toString()}]`;
	};

	const copyInstallCommand = async () => {
		const command = generateInstallCommandList();
		await window.navigator.clipboard.writeText(command);
	};

	return {
		copyInstallCommand,
		add,
		remove,
		addAll,
		removeAll,
		selectedAppList,
		count: selectedAppList.length,
	};
};
