import styled from "styled-components";

export const Profile = styled.img`
    width: ${({ size }) => size || '140px'};
    height: ${({ size }) => size || '140px'};
    left: ${({ left }) => left || 'calc(100%/2 - 90px)'};
    border-radius: 50%;
    border: ${({ border }) => border || '8px solid #f8f8f8'};
    background-color: ${({ bgColor }) => bgColor || '#fff'};
    z-index: 1;
    object-fit: cover;
`;