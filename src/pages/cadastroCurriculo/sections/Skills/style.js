import styled from 'styled-components'



export const Container = styled.div`
    width:100%;

    font-family: "Poppins", sans-serif;

    h2{
        text-align: center;
        font-weight: 600;
        font-size: 18px;
    }

    .react-tagsinput {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-direction: row;
        min-height: 48px;
        width: 100%;
    
        box-sizing: border-box;
        border: 3px solid #e2e2e2;
        border-radius: 8px;
        padding: 3px 8px;
        margin-top: 10px;
    
        font: 12px "Poppins", Sans-serif;
    }
    
    .react-tagsinput:focus-within {
        border: 1px solid #4ea3d9;
        font: 12px "Poppins", Sans-serif;
    }
    
    li {
        list-style: none;
    }
    
    input {
        font: 12px "Poppins", Sans-serif;
        border: none;
        background: transparent;
        width: auto;
        height: 30px;


        &:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
    
    
    span {
        list-style-type: none;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 8px;
        padding: 8px;
        width: auto;
    
        &.react-tagsinput-tag {
        width: auto;
        height: 28px;
    
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 8px;
        gap: 2px;
    
        background: #52aee9;
        border-radius: 25px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    
        font: 14px "Poppins", Sans-serif;
    
        text-transform: uppercase;

        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    }
    
    button {
        background: none;
        border: none;
        display: flex;
        align-items: center;
    }
`;