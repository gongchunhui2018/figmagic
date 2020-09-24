"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgWriteTokens = exports.MsgWriteBaseFile = exports.MsgSyncGraphics = exports.MsgSyncElements = exports.MsgSetDataFromLocal = exports.MsgSetDataFromApi = exports.MsgProcessElementsCreatingElement = exports.MsgJobComplete = exports.MsgGetTokenMatchNoMatch = exports.MsgGeneratedFileWarning = exports.MsgDownloadFileWritingFile = exports.MsgConfigDebugRc = exports.MsgConfigDebugFinal = exports.MsgConfigDebugEnv = exports.MsgConfigDebugCli = void 0;
const colors_1 = require("../system/colors");
exports.MsgConfigDebugCli = `USER: Command-Line configuration (Medium priority)\n`;
exports.MsgConfigDebugEnv = `USER: Environment configuration (Low priority)\n`;
exports.MsgConfigDebugFinal = `SYSTEM: Final user configuration that will be used...\n`;
exports.MsgConfigDebugRc = `USER: .figmagicrc configuration (Highest priority)\n`;
exports.MsgDownloadFileWritingFile = (path) => `${colors_1.colors.FgYellow}\nWriting Figma graphics to disk: ${path}`;
exports.MsgGeneratedFileWarning = `THIS FILE IS AUTO-GENERATED BY FIGMAGIC. DO NOT MAKE EDITS IN THIS FILE! CHANGES WILL GET OVER-WRITTEN BY ANY FURTHER PROCESSING.`;
exports.MsgGetTokenMatchNoMatch = `${colors_1.colors.FgYellow}No matching token! Hard-coding to expected value:${colors_1.colors.Reset}`;
exports.MsgJobComplete = `${colors_1.colors.FgGreen}\nFigmagic completed operations successfully!${colors_1.colors.Reset}\n`;
exports.MsgProcessElementsCreatingElement = (elementName, fixedName) => `Processing Figma element "${elementName}" as ---> ${fixedName}`;
exports.MsgSetDataFromApi = `${colors_1.colors.FgYellow}\nAttempting to fetch data from Figma API...${colors_1.colors.Reset}`;
exports.MsgSetDataFromLocal = `${colors_1.colors.FgYellow}\nAttempting to recompile data from local Figma JSON file...${colors_1.colors.Reset}`;
exports.MsgSyncElements = `${colors_1.colors.FgYellow}\nAttempting to parse elements...${colors_1.colors.Reset}\n`;
exports.MsgSyncGraphics = `${colors_1.colors.FgYellow}\nGetting images from Figma API...${colors_1.colors.Reset}`;
exports.MsgWriteBaseFile = `${colors_1.colors.FgYellow}\nWriting Figma base file...${colors_1.colors.Reset}`;
exports.MsgWriteTokens = `${colors_1.colors.FgYellow}\nWriting design tokens...${colors_1.colors.Reset}`;
//# sourceMappingURL=messages.js.map