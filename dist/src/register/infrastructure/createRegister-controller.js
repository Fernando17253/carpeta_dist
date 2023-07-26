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
exports.CreateRegisterController = void 0;
class CreateRegisterController {
    constructor(postRegister) {
        this.postRegister = postRegister;
    }
    createRegister(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const id = req.body.id;
            const distancia = req.body.distancia;
            const resultado = yield this.postRegister.createRegister(
            //id,
            distancia);
            console.log("controller", resultado.distancia);
            res
                .status(200)
                .send(`La solicitud ${resultado.distancia} fue éxitoso`);
        });
    }
}
exports.CreateRegisterController = CreateRegisterController;
