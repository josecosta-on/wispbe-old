"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
const inquirer = require("inquirer");
const chalk_1 = require("chalk");
exports.terminal = {
    cls: () => {
        process.stdout.write('\x1B[2J\x1B[0f');
    },
    commander,
    inquirer,
    chalk: chalk_1.default
};
//# sourceMappingURL=terminal.js.map