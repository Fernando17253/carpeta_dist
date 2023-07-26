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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRegister = void 0;
class PostRegister {
    constructor(addRegister) {
        this.addRegister = addRegister;
    }
    createRegister(
    //id: string,
    distancia) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Register = yield this.addRegister.addRegister(
                //id,
                distancia);
                if (!Register) {
                    throw new Error(`Register ${distancia} no se agregado`);
                }
                return Register;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.PostRegister = PostRegister;
