import styled from 'styled-components';

export const Cd = styled.div`

background-color:#f7f4f4;
 

  .cd-header{
        width: 100%;
        height: 70px;
        padding: 0px 42px;

        background: #02385A;
        font-family: "Poppins", sans-serif;
        color: #fff;


        a#logo{
          width: 100%;
          text-align: right;
          text-decoration: none;
          color: #fff;

            h1{
              font-size: 1.25rem;
              font-weight: 600;
              line-height: 42px;
            
                  span{
                font-style: italic;
               
                  }
            }
          }
        }

        div.form-description{
              margin-top:25px;
              top: 160px;
              width: 633px;
              height: 779px;
              display: block;
              align-items: center;
              justify-content: center;
            
              background: #FFFFFF;
              border-radius: 8px;
              
              h2{
                float: top;
                font-family: Poppins;
                font-style: normal;
                font-weight: normal;
                font-size: 26px;
                line-height: 36px;
                text-align: center;

                color: #000000;
              }

              p.form-paragrafo{
                float: top;
                text-align: center;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 14px;
                /* identical to box height */


                color: #959595;
              }

            }

    form{

            margin-top: 60px;
            display: flex;
            flex-flow: column nowrap;
            

            .form-start{
              display: flex;
              width: 569px;
              
              .control-group{
                width: 100%;
                padding:10px;
              }
            }
            .form-end{
              display: flex;
              flex-direction: column;
              margin-left: 10px;
            }


            label{
              font-family: "Poppins" , sans-serif;
              align-self: flex-start;
              font-size: 15px;
              margin-bottom: 5px;
              }

              input{
                  font-family: "Poppins" , sans-serif;
                  width:260px;
                  height: 30px;
                  margin-bottom: 15px;
                  padding: 2px 5px;

                  border-radius: 8px;
                  border: 1px solid #c6c6c6;
                
                  p {
                    
                    font-family: "Poppins" , sans-serif;
                    color: #bf1650;
                  }
                  
                  p::before {
                    display: inline;
                    content: "⚠ ";
                  }
              }

          button.candidato-submit{
            font-family: "Poppins" , sans-serif;
            color: #E5E5E5;
            font-size: 16px;
            font-weight: bold;
            line-height: 24px;
            
            margin-top:40px;
            margin-left: 10px;
            width: 170px;
            height: 37px;
            left: 473px;
            top: 795px;
            
            background: #4EA3D9;
            border-radius: 8px ;
            border:#4EA3D9;
            cursor: pointer;
          }
          
          .candidato-submit:hover{
            filter: brightness(0.9);
        }
    }

    img.cdprofile{
      float: right;
      width: 368px;
      height: 215px;
      right: 0px;
      top: 728px;
    }
`;