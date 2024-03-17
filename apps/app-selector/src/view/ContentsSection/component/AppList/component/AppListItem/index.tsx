import { VStack } from "@kuma-ui/core";

type Props = {
	isSelected: boolean;
	appName: string;
	appImage: string;
	onClickItem: (appName: string) => void;
};

export const AppListItem = ({
	appImage,
	appName,
	isSelected,
	onClickItem,
}: Props) => {
	return (
		<VStack
			p={16}
			alignItems={"center"}
			boxSizing={"border-box"}
			borderRadius={12}
			border={"0.5px solid grey"}
			transition={"all 0.3s"}
			style={{
				background: isSelected ? "#b5e5f8" : "white",
			}}
			_hover={{
				cursor: "pointer",
				opacity: 0.9,
			}}
			onClick={() => onClickItem(appName)}
		>
			<div
				style={{
					width: 140,
					minHeight: 140,
					display: "flex",
					alignItems: "center",
					marginBottom: 12,
				}}
			>
				<img
					draggable={false}
					width={"100%"}
					src={appImage}
					alt={`${appImage} icon`}
				/>
			</div>
			<strong>{appName}</strong>
		</VStack>
	);
};
