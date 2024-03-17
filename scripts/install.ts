import { $ } from "bun";
import { installAppComands } from "./installCommand";

/**
 * Return true when the command has already installed.
 * @param command
 * @returns boolean
 */
const isAlreadyInstalled = async (command: string) => {
	const text = await $`command -v ${command}`.text();
	return text.length > 0;
};

const installSelectedApp = () => {
	installAppComands.map(async (command) => {
		await $`echo ${command}`;
	});
};

const printInstallingApp = async (app: string) => {
	console.log(`Installing ${app}...`);
};

const installBrew = async () => {
	await printInstallingApp("brew");
	await $`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`;
};

const installNodeAndNi = async () => {
	// TODO: セットアップ直後のPCでnodeのinstall判定がうまく動くか確認する
	const isAlreadyInstalledNode = await isAlreadyInstalled("node");
	if (!isAlreadyInstalledNode) {
		await printInstallingApp("node");
		await $`volta install node`;
	}
	const isAlreadyInstalledNi = await isAlreadyInstalled("ni");
	if (!isAlreadyInstalledNi) {
		await printInstallingApp("ni");
		await $`npm i -g @antfu/ni`;
	}
};

export const initInstall = async () => {
	await installNodeAndNi();
	await installBrew();
	await installSelectedApp();
};
