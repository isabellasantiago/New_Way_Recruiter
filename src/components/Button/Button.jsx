import styled from 'styled-components';


const Button = styled.button`
    box-sizing: border-box;
    border: 0;
    border-radius: 80px;
    background: rgba(1, 46, 64, 0.85);
    color: #fff;
    height: 30px;
    width: 130px;
                
    margin: 0 auto;
    cursor: pointer;

    padding: 5px 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    a{
        text-decoration: none;
        color: #fff;
        font: 400 0.9rem 'Poppins';
    }
`;

export default Button;