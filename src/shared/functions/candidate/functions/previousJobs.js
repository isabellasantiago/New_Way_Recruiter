import { cleanText } from "../../convert/texts";

const compareDate = (date, date2) => {
    return date2.toDate - date.toDate
}

export const orderByLastDate = (dateArray) => {
    const result = dateArray?.sort(compareDate);
    return result
}

export const sameCompany = (jobs) => {
    const result = jobs?.map((job) => {
        const cleaned = cleanText(job?.previousCompanyName)
        return {...job, previousCompanyName: cleaned}
    })
    const reduced = result?.reduce((prevjob, currjob) => {
        const arr = [];
        if(prevjob.previousCompanyName === currjob.previousCompanyName) arr.push([prevjob, currjob]);

        return arr;
    })

    return reduced
}