"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lazyloading_1 = require("../app/lazyloading");
const terminal_1 = require("../app/terminal");
const app_imports_1 = require("./../app/app.imports");
function App(config) {
    config = Object.assign({}, config);
    return function classDecorator(constructor) {
        let c = class extends constructor {
            constructor(...args) {
                super(...args);
                terminal_1.terminal.commander
                    .version('1.0.0')
                    .description('Wispbe System');
                this.load();
            }
            load() {
                return __awaiter(this, void 0, void 0, function* () {
                    terminal_1.terminal.cls();
                    yield lazyloading_1.lazyloading();
                    app_imports_1.cmds.forEach((c) => {
                        terminal_1.terminal.commander
                            .command(c.name)
                            .alias(c.alias)
                            .description(c.description)
                            .action(c.action);
                    });
                    if (!process.argv.slice(2).length /* || !/[arudl]/.test(process.argv.slice(2))*/) {
                        console.log(terminal_1.terminal.chalk.green('===> Wispbe System'));
                        terminal_1.terminal.inquirer.prompt(app_imports_1.getCmds()).then((answers) => app_imports_1.start(answers));
                        //commander.outputHelp()
                        //process.exit()
                    }
                    terminal_1.terminal.commander.parse(process.argv);
                });
            }
        };
        new c();
        return c;
    };
}
exports.App = App;
//# sourceMappingURL=app.js.map