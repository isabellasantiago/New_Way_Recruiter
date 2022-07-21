import { Body, Section } from "../../style"
import { HeaderComponent } from '../../../../components/HeaderComponent/HeaderComponent';
import { Steps } from "../steps";

export const Result = () => {
    return (
        <Body>
            <HeaderComponent candidate={false}/>
            <Steps/>
            <Section>

            </Section>
        </Body>

    )
}