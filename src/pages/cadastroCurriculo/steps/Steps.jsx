import React, { useState } from 'react';

export function Step(pageStep){
    const [step, setStep] = useState()

    const fetchSteps(page){
        const virtualPage = (page - 1 * pageStep) <= 0 ? 0 : (page - 1 * pageStep)
        fetch(`http://localhost:3000/cv/${virtualPage}`)
    }
}