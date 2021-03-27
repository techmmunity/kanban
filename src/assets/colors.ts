export enum Colors {
	primary = "#ffffff",
	secondary = "#000000",
	background = "#202124",
	scroll = "#bdbdbe50",
	"background-column" = "#161618",
	"background-create-column" = "#161618",
	"background-create-column-hover" = "#1a1b1d",
	"background-task" = "#fafafa",
	"background-create-task" = "#2020201b",
	"background-create-task-hover" = "#202020",
	white = "#ffffff",
	black = "#000000",
}

export const isDarkColor = (color: string) => {
	const rgb = parseInt(color.substring(1), 16);

	const r = (rgb >> 16) & 0xff;
	const g = (rgb >> 8) & 0xff;
	const b = (rgb >> 0) & 0xff;

	const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

	return luma < 40;
};
