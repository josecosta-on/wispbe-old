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
const glob = require("glob");
const paths_1 = require("./paths");
function lazyloading() {
    return new Promise((resolve, reject) => {
        glob(paths_1.absolutePath('pages/**/*.js'), function (er, items) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(items);
                yield Promise.all(items.map(c => Promise.resolve().then(() => require(c))));
                resolve();
            });
        });
    });
}
exports.lazyloading = lazyloading;
//# sourceMappingURL=lazyloading.js.map