import styled from 'styled-components';


const Form = styled.form`
font-family: 'Poppins', Arial, Sans-serif;
width: 100%;
height: 100%;
display: flex;
justify-content: center;

.image{
    grid-area: image;
}
.likedin{
    grid-area: linkedin;
}
.naturalness{
    grid-area: naturalness;
}
.gender{
    grid-area: gender;
}
.birthDate{
    grid-area: birthDate;
}
.state{
    grid-area: state;
}
.city{
    grid-area: city;
}
.phone{
    grid-area: phone;
}
.contactViaWhatsapp{
    grid-area: contactViaWhatsapp;
    display: flex;
    gap: 10px;
    align-items: center;
    flex-direction: row;
}
button{
    grid-area: button;
}

margin: 0 auto;
display: grid;
gap: 50px;
grid-template-columns: repeat(3, auto);
grid-template-rows: repeat(5, auto);
grid-template-areas: 
"image  linkedin"
"naturalness gender birthDate"
"uf city phone"
"etnia pcd typePcd"
"contactViaWhatsapp . button";

Select{
    height: 35px;
    padding: 5px;
}

input{

}

`;



export default Form;