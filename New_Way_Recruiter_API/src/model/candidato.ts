import {v4 as uuidV4} from 'uuid';

class CandidatoModelo {

    id?: string;
    nome: string;
    sobrenome: string;
    telefone: string;
    cpf: string;
    email: string;
    senha: string;
    
    
    constructor () {
        if (!this.id) {
            this.id = uuidV4();
        } 
    }

};


export { CandidatoModelo };