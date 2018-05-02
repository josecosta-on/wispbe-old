"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDir = __dirname;
exports.cmds = [];
exports.cmds.push({
    name: 'exit',
    alias: 'e',
    description: 'exit app',
    action: () => {
        console.log('exit app');
        process.exit();
    }
});
function getCmds() {
    return [
        {
            type: 'list',
            name: 'start',
            message: 'Select',
            choices: [
                ...exports.cmds
            ]
        }
    ];
}
exports.getCmds = getCmds;
exports.start = (answers) => {
    try {
        exports.cmds.find(c => c.name == answers.start).action();
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=app.imports.js.map