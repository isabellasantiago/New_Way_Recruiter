import { LanguageTypeEnum } from "../../enums";
import { FormationEnum, FormationStatusEnum } from "../../enums/academic.enum";
import { CompanyTypeEnum } from "../../enums/companyType.enum";
import { ContractTypeEnum } from "../../enums/contractType.enum";
import { LevelTypeEnum } from "../../enums/levelType.enum"

export const levelDescription = (text) => {
    const textSplitted = text?.split("");
    if(textSplitted[0] === "4") return LevelTypeEnum.sr;
    if(textSplitted[0] === "3") return LevelTypeEnum.pl;
    if(textSplitted[0] === "2") return LevelTypeEnum.jr;
    if(textSplitted[0] === "1") return LevelTypeEnum.estagio;

    return;
}

export const contractDescription = (text) => {
    const textSplitted = text?.split("");

    if(textSplitted[0] === "1") return ContractTypeEnum.pj;
    if(textSplitted[0] === "2") return ContractTypeEnum.clt;
    if(textSplitted[0] === "3") return ContractTypeEnum.pjOrClt;
    if(textSplitted[0] === "4") return ContractTypeEnum.others;

    return;
}

export const formationDescription = (text) => {
    const textSplitted = text?.split('');

    if(textSplitted[0] === "0") return FormationEnum.regular;
    if(textSplitted[0] === "1") return FormationEnum.tecnologo;
    if(textSplitted[0] === "2") return FormationEnum.superior;
    if(textSplitted[0] === "3") return FormationEnum.posGraduacao;
    if(textSplitted[0] === "4") return FormationEnum.mestrado;
    if(textSplitted[0] === "5") return FormationEnum.doutorado;

    return;
}

export const formationStatusDescription = (text) => {
    const textSplitted = text?.split('');

    if(textSplitted[0] === "0") return FormationStatusEnum.cursando;
    if(textSplitted[0] === "2") return FormationStatusEnum.concluido;
    if(textSplitted[0] === "3") return FormationStatusEnum.trancado;

    return;
}

export const languageLevelDescription = ( text ) => {
    const textSplitted = text?.split('');

    if(textSplitted[0] === "1") return LanguageTypeEnum.basico;
    if(textSplitted[0] === "2") return LanguageTypeEnum.intermediario;
    if(textSplitted[0] === "3") return LanguageTypeEnum.avancado;
    if(textSplitted[0] === "4") return LanguageTypeEnum.fluente;

    return;
}

export const companyTypeDescription = (number) => {
    if(number === 0) return CompanyTypeEnum.startup;
    if(number === 1) return CompanyTypeEnum.multinacional;
    if(number === 2) return CompanyTypeEnum.tradicional;

    return;
}

export const textConvert = (text) => {
    if(!text) return null;

    const textSplitted = text?.split("");
    return Number(textSplitted[0]);
}

export const cleanText = (text) => {
    text = text.toLowerCase()
    text = text.replace(/\s+/g, "")
    text = text.replace(/[|&;!$%@"<>()+,]+/g, "")

    return text;
}