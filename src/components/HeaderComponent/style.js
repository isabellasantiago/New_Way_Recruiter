import styled from 'styled-components'

export const HeaderStyle = styled.div`
    width: 100%;
    header{
    width: 100%;
    background: #012E40;
    color: #fff;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        #logo{
            text-decoration: none;
            color: #fff;
            h1{
             font-size: 1.25rem;
             font-weight: 600;
             line-height: 42px;
             margin-right: 10px;
                > span{
                    font-style: italic;
                }
            }
        }

        p{
            font-style: italic;
        }
    }

    nav{
        display: flex;
        gap: 50px;
        a {
            color: #fff;
            text-decoration: none;

            &:hover{
                color: #4EA3D9;
            }
        }
    }

    button{
        background: none;
        border:none;
        color: #fff;
        cursor: pointer;
    }
}
`;