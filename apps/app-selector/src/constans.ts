import Arc from "./assets/arc.webp";
import Bruno from "./assets/bruno.png";
import Chrome from "./assets/chrome.png";
import Cursor from "./assets/cursor.png";
import Docker from "./assets/docker.png";
import Edge from "./assets/edge.png";
import FFmpeg from "./assets/ffmepg-logo.webp";
import Figma from "./assets/figma.png";
import Firefox from "./assets/firefox.png";
import Flux from "./assets/flux.png";
import GithubDesktop from "./assets/github-desktop.png";
import JetbrainsTools from "./assets/jetbrains-tools.png";
import Karabiner from "./assets/karabiner.png";
import Obsidian from "./assets/obsidian.png";
import Postman from "./assets/postman.png";
import Raycast from "./assets/raycast.png";
import ScreenStudio from "./assets/screen-studio.png";
import SequelAce from "./assets/sequel-ace.png";
import Slack from "./assets/slack.png";
import Starship from "./assets/starship.png";
import TablePlus from "./assets/table_plus.png";
import Wezterm from "./assets/wezterm.webp";

export type App = {
	name: string;
	icon: string;
	brewAppName: string;
	formula?: boolean;
};

export const apps = [
	{
		name: "Arc",
		icon: Arc,
		brewAppName: "arc",
	},
	{
		name: "Bruno",
		icon: Bruno,
		brewAppName: "bruno",
	},
	{
		name: "Chrome",
		icon: Chrome,
		brewAppName: "google-chrome",
	},
	{
		name: "Cursor",
		icon: Cursor,
		brewAppName: "cursor",
	},
	{
		name: "Docker",
		icon: Docker,
		brewAppName: "docker",
	},
	{
		name: "Edge",
		icon: Edge,
		brewAppName: "microsoft-edge",
	},
	{
		name: "FFmpeg",
		icon: FFmpeg,
		brewAppName: "ffmpeg",
		formula: true,
	},
	{
		name: "Figma",
		icon: Figma,
		brewAppName: "figma",
	},
	{
		name: "Firefox",
		icon: Firefox,
		brewAppName: "firefox",
	},
	{
		name: "Flux",
		icon: Flux,
		brewAppName: "flux",
	},
	{
		name: "GitHub Desktop",
		icon: GithubDesktop,
		brewAppName: "github",
	},
	{
		name: "JetBrains Tools",
		icon: JetbrainsTools,
		brewAppName: "jetbrains-toolbox",
	},
	{
		name: "Karabiner",
		icon: Karabiner,
		brewAppName: "karabiner-elements",
	},
	{
		name: "Obsidian",
		icon: Obsidian,
		brewAppName: "obsidian",
	},
	{
		name: "Postman",
		icon: Postman,
		brewAppName: "postman",
	},
	{
		name: "Raycast",
		icon: Raycast,
		brewAppName: "raycast",
	},
	{
		name: "Screen Studio",
		icon: ScreenStudio,
		brewAppName: "screen-studio",
	},
	{
		name: "Sequel Ace",
		icon: SequelAce,
		brewAppName: "sequel-ace",
	},
	{
		name: "Slack",
		icon: Slack,
		brewAppName: "slack",
	},
	{
		name: "Starship",
		icon: Starship,
		brewAppName: "starship",
		formula: true,
	},
	{
		name: "Table Plus",
		icon: TablePlus,
		brewAppName: "tableplus",
	},
	{
		name: "Wezterm",
		icon: Wezterm,
		brewAppName: "wezterm",
	},
] satisfies App[];
