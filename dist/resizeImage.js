"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const resize_image = (path, filename, height, width, outPath, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, sharp_1.default)(path)
        .resize(height, width)
        .toBuffer()
        .then(data => {
        fs_1.default.appendFile(outPath, data, function (err) {
            if (err)
                throw err;
            console.log('Saved!');
            res.sendFile(outPath, { root: '.' });
        });
    })
        .catch((err) => console.log(err));
});
exports.default = resize_image;
