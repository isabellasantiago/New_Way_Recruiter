/* eslint-disable no-unreachable */
import { CompanyTypeEnum } from "../../enums/companyType.enum";
import { ContractTypeEnum } from "../../enums/contractType.enum";
import { LevelTypeEnum } from "../../enums/levelType.enum"

export const levelDescription = (text) => {
    const textSplitted = text?.split("");
    if(textSplitted[0] === "4") return LevelTypeEnum.sr;
    if(textSplitted[0] === "3") return LevelTypeEnum.pl;
    if(textSplitted[0] === "2") return LevelTypeEnum.jr;
    if(textSplitted[0] === "1") return LevelTypeEnum.estagio;
}

export const contractDescription = (text) => {
    const textSplitted = text?.split("");

    if(textSplitted[0] === "1") return ContractTypeEnum.pj;
    if(textSplitted[0] === "2") return ContractTypeEnum.clt;
    if(textSplitted[0] === "3") return ContractTypeEnum.pjOrClt;
    if(textSplitted[0] === "4") return ContractTypeEnum.others;
}

export const companyTypeDescription = (number) => {
    if(number === 0) return CompanyTypeEnum.startup;
    if(number === 1) return CompanyTypeEnum.multinacional;
    if(number === 2) return CompanyTypeEnum.tradicional;
}


export const level = (text) => {
    const textSplitted = text?.split("");
    return textSplitted?.lenght > 0 ? Number(textSplitted[0]) : 0;
}

export const contract = (text) => {
    const textSplitted = text?.split("");
    return textSplitted?.lenght > 0 ? Number(textSplitted[0]) : 0;
}