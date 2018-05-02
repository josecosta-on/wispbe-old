"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_imports_1 = require("../app/app.imports");
const terminal_1 = require("../app/terminal");
function Injectable() {
    return function classDecorator(constructor) {
        let c = class extends constructor {
            constructor(...args) {
                super(...args);
            }
        };
        new c('home');
        return c;
    };
}
exports.Injectable = Injectable;
let NavController = class NavController {
    goHome() {
        terminal_1.terminal.inquirer.prompt(app_imports_1.getCmds()).then((answers) => app_imports_1.start(answers));
    }
};
NavController = __decorate([
    Injectable()
], NavController);
exports.NavController = NavController;
//# sourceMappingURL=nav.provider.js.map