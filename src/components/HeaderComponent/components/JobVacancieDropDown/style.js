import styled from 'styled-components';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export const Container = styled(ClickAwayListener)``;

export const ContentRoot = styled.div`
    position: relative;
`;

export const DropDown = styled.div`
    position: absolute;
    top: 45px;
    right: 0px;
    left: -20px;
    z-index: 1;
    border: 1px solid #012E40;
    background: #012E40;

    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
`;

export const Btn = styled.div`
    border: none;
    background: none;
    color: #fff;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    margin-bottom: 5px;

    &:hover{
        color: #4EA3D9;
    }
    cursor: pointer;
`;

export const Option = styled.button`
    width: 100%;
    height: 30px;
    padding: 5px;
    font-family: 'Poppins', sans-serif;
    border: none;
    border-radius: 4px;
    white-space: nowrap;

    &:hover{
        background-color: white;
        color: #000;
    }
    cursor: pointer;
`;