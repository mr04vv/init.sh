import { Button, HStack, Text } from "@kuma-ui/core";
import { useTopSection } from "./useTopSection";

export const TopSection = () => {
	const {
		handleClickSelectAll,
		handleClickUnselectAll,
		selectedAppCount,
		handleClickCopy,
		isShowCopied,
	} = useTopSection();

	return (
		<HStack gap={8} alignItems={"center"}>
			<Button height={"100%"} p={8} onClick={handleClickSelectAll}>
				すべて選択
			</Button>
			<Button height={"100%"} p={8} onClick={handleClickUnselectAll}>
				すべて選択解除
			</Button>
			<Text>選択中：{selectedAppCount}</Text>
			<Button height={"100%"} p={8} onClick={handleClickCopy}>
				コマンドをコピー
			</Button>
			{isShowCopied && <Text>コマンドをコピーしました</Text>}
		</HStack>
	);
};
