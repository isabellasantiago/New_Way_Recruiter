import styled from 'styled-components';

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font: 400 1rem 'Poppins' ;

    display: flex;
    flex-flow: column nowrap;

    /* margin-bottom: 10px; */
    /* margin-top: 3px; */

    max-width: 330px;

    ${(props) => props.disable && `
                cursor: not-allowed;
                display: none;
                pointer-events:none;
    `}
`;

export default Label;

