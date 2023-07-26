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
exports.InMemoryRegisterRepository = void 0;
//import { createPool } from "../../mysql";
const Register_1 = require("../domain/Register");
class InMemoryRegisterRepository {
    getAll(distancia) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("Entered InMemoryRegisterRepository getAll");
            // const connection = await createPool();
            // const result: any[] = await connection.query("SELECT * FROM jorge");
            // if (result.length === 0) {
            //   return [];
            // }
            // const Registro: any[] = result[0];
            // console.log(`prueba ${JSON.stringify(Registro)}`);
            // return Registro.map((Register) => {
            //   return new Register(
            //     Register.id,
            //     Register.distancia,
            //   );
            // });
            console.log("nivel de agua", distancia);
            return new Register_1.Register(distancia);
        });
    }
}
exports.InMemoryRegisterRepository = InMemoryRegisterRepository;
