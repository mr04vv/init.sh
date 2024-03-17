import { useState } from "react";
import { useInstallApp } from "../../hooks/useInstallApp";

export const useTopSection = () => {
	const { addAll, removeAll, count, copyInstallCommand } = useInstallApp();
	const [isShowCopied, setIsShowCopied] = useState<boolean>(false);
	const handleClickSelectAll = () => {
		addAll();
	};

	const handleClickUnselectAll = () => {
		removeAll();
	};

	const handleClickCopy = () => {
		copyInstallCommand();
		setIsShowCopied(true);
		setTimeout(() => {
			setIsShowCopied(false);
		}, 2000);
	};

	return {
		handleClickSelectAll,
		handleClickUnselectAll,
		selectedAppCount: count,
		handleClickCopy,
		isShowCopied,
	};
};
