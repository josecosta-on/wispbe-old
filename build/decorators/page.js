"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_imports_1 = require("../app/app.imports");
const terminal_1 = require("../app/terminal");
function Page(configPage) {
    let defaultPage = {
        navBack: false
    };
    configPage = Object.assign({}, defaultPage, configPage);
    return function classDecorator(constructor) {
        let c = class extends constructor {
            title(title) {
                console.log(terminal_1.terminal.chalk.green('=========*** ' +
                    title.charAt(0).toUpperCase() + title.slice(1)
                    + ' Page ***=========='));
            }
            nav() {
            }
            constructor(...args) {
                super(...args);
                console.log(args);
                app_imports_1.cmds.push({
                    name: configPage.name,
                    alias: configPage.alias,
                    description: configPage.description,
                    action: () => {
                        terminal_1.terminal.cls();
                        this.title(configPage.name);
                        if (this.cmdViewDidLoad != undefined)
                            this.cmdViewDidLoad();
                    }
                });
            }
        };
        new c('home');
        return c;
    };
}
exports.Page = Page;
//# sourceMappingURL=page.js.map