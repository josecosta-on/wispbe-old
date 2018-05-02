"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDir = __dirname;
function absolutePath(path) {
    path = "/../" + path;
    var isWin = process.platform === "win32";
    if (isWin)
        return exports.appDir + path.replace('/', '\\');
    else
        return exports.appDir + path;
}
exports.absolutePath = absolutePath;
//# sourceMappingURL=paths.js.map