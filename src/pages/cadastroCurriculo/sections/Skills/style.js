import styled from 'styled-components'


export const LabelInput = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin-bottom: 50px;

    > span{
            font: 10px "Poppins", sans-serif;
            color: #c4c4c4;
                
            #error{
                color: #ef5350;
            }
        }
`;

export const TitleInput = styled.h1`
    font: 18px "Poppins", Sans-serif;
`;

export const SkillTags = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    min-height:48px;
    width: 80%;

    box-sizing: border-box;
    border: 3px solid #e2e2e2;
    border-radius: 8px;
    padding: 3px 8px;
    margin-top: 10px;

    font: 12px "Poppins", Sans-serif;

    &:focus-within{
        border: 1px solid #4EA3D9;
    }

    ul{
        list-style-type: none;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 8px;
        padding: 8px;
        width: auto;


        #item{
            width: auto;
            height: 28px;
            
            display:flex;
            align-items: center;
            justify-content: center;
            padding: 0 8px;
            gap: 2px;

            background: #4EA3D9;
            border-radius: 25px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
            
            font: 14px "Poppins", Sans-serif;

            text-transform: uppercase;

            button{
                background: none;
                border: none;
                display: flex;
                align-items: center;
            }
        }
    }
    input{
        font: 12px "Poppins", Sans-serif;
        border: none;
        background: transparent;
        width: auto;
        height: 30px;

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
`;