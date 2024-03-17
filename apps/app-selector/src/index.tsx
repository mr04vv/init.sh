import { VStack } from "@kuma-ui/core";
import { ContentsSection } from "./view";
import { TopSection } from "./view/TopSection";

export const App = () => {
	return (
		<VStack m={24} gap={12}>
			<TopSection />
			<ContentsSection />
		</VStack>
	);
};
