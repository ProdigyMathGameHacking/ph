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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_Toggler = exports.UI_Hack = exports.UI = void 0;
const convert_1 = require("./convert");
const readline = __importStar(require("readline"));
function UI() {
    const rl1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log("Valid options: [\"Hack\", \"Toggler\"]\n");
    rl1.question("Are you creating a [Hack], or a [Toggler]: ", function (hackOrToggler) {
        rl1.close();
        if (hackOrToggler == "Hack" || hackOrToggler == "[Hack]") {
            UI_Hack();
        }
        else if (hackOrToggler == "Toggler" || hackOrToggler == "[Toggler]") {
            UI_Toggler();
        }
        else {
            return console.error("Please enter either 'Hack' or 'Toggler'");
        }
    });
}
exports.UI = UI;
function UI_Hack() {
    var category = "";
    var name = "";
    var description = "";
    var return_ = "";
    var setClick = "";
    const usingYml = false;
    const validOptions = ["battle", "beta", "inventory", "location", "minigames", "misc", "patched", "pets", "player", "utility"];
    console.log("Valid options: [\"battle\", \"beta\", \"inventory\", \"location\", \"minigames\", \"misc\", \"patched\", \"pets\", \"player\", \"utility\"]\n");
    const rl2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl2.question("Which category is your hack: ", function (cat) {
        rl2.close();
        if (validOptions.includes(cat)) {
            category = cat;
            const rl3 = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl3.question("What is your hack's name: ", function (nam) {
                rl3.close();
                if (nam.length > 0) {
                    name = nam;
                    const rl4 = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });
                    rl4.question("What is your hack's description: ", function (desc) {
                        rl4.close();
                        description = desc;
                        const rl5 = readline.createInterface({
                            input: process.stdin,
                            output: process.stdout
                        });
                        rl5.question("What should the hack say when it's completed: ", function (ret) {
                            rl5.close();
                            return_ = ret;
                            const rl6 = readline.createInterface({
                                input: process.stdin,
                                output: process.stdout
                            });
                            rl6.question("[CODE] What is the code of your hack: ", function (set) {
                                rl6.close();
                                setClick = set;
                                return console.log((0, convert_1.ToHack)(category, name, description, return_, setClick, usingYml));
                            });
                        });
                    });
                }
                else {
                    return console.error("Please enter a valid name.");
                }
            });
        }
        else {
            return console.error("Please enter a valid category.");
        }
    });
}
exports.UI_Hack = UI_Hack;
function UI_Toggler() {
}
exports.UI_Toggler = UI_Toggler;
//# sourceMappingURL=ui.js.map