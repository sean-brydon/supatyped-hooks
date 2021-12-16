import chalk from "chalk";

export const Error = chalk.bold.red;
export const Success = chalk.bold.green;
export const Warning = chalk.hex("#FFA500");

type DebugType = "error" | "warning" | "info" | "default";

const DebugLog = (message: string, debugType?: DebugType) => {};
