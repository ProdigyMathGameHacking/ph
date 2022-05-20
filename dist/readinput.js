"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doYml = void 0;
const yaml_1 = __importDefault(require("yaml"));
const fs = __importStar(require("fs"));
const convert_1 = require("./convert");
function doYml(FilePath) {
    const file = fs.readFileSync(FilePath, "utf8");
    const yml = yaml_1.default.parse(file);
    switch (yml.type) {
        case "Hack":
            return ymlHack(yml);
        case "Toggler":
            return ymlToggler(yml);
        default:
            return console.error("Unknown type: " + yml.type);
    }
}
exports.doYml = doYml;
function ymlHack(yml) {
    const category = yml.category;
    const name = yml.name;
    const description = yml.description;
    const return_ = yml.return;
    const setClick = yml.setClick;
    const usingYml = true;
    return (0, convert_1.ToHack)(category, name, description, return_, setClick, usingYml);
}
function ymlToggler(yml) {
    const category = yml.category;
    const name = yml.name;
    const description = yml.description;
    const returnEnabled = yml.returnEnabled;
    const returnDisabled = yml.returnDisabled;
    const setEnabled = yml.setEnabled;
    const setDisabled = yml.setDisabled;
    const usingYml = true;
    return (0, convert_1.ToToggler)(category, name, description, returnEnabled, returnDisabled, setEnabled, setDisabled, usingYml);
}
//# sourceMappingURL=readinput.js.map