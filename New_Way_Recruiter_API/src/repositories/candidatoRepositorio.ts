import { CandidatoModelo } from "../model/candidato";
import { IcandidatoDTO } from "./IcandidatoRepositório";


class CandidatoRepositorio {

    create({senha, email, cpf, telefone, sobrenome, nome }: IcandidatoDTO ): void {
        const candidato= new CandidatoModelo();
    
        Object.assign( candidato, {
            nome,
            sobrenome,
            telefone,
            cpf,
            email,
            senha,
        });
        }

}

export { CandidatoRepositorio }