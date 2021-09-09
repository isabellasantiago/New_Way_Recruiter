import React from 'react';
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded';
import { MenuItem, Select, FormControl, InputLabel, TextField, FormLabel } from '@material-ui/core';

import { HeaderCandidato } from '../../components/HeaderCandidato/HeaderCandidato';


export function Curriculo(){
    return(
        <>
        <HeaderCandidato/>
        <main>
            <h1>Cadastre seus dados</h1>
            <p>Lembre-se de sempre manter seu currículo atualizado!</p>
            <button id="cancelar">Cancelar</button>
            <section id="dados-pessoais">
                <FormLabel>Dados pessoais</FormLabel>
                <FormControl action="#" method="post" id="dados-pessoais">
                    <InputLabel>Imagem <PhotoCameraRoundedIcon/></InputLabel>
                    <TextField type="url" placeholder="adicione o link da sua imagem de perfil" variant="outlined"/>
                    <InputLabel>Linkedin</InputLabel>
                    <TextField type="url" placeholder="linkedin.com/in/perfil" variant="outlined"/>
                    <TextField
                    type="text"
                    required
                    variant="outlined"
                    label="Naturalidade"
                    />
                    <InputLabel>Sexo *</InputLabel>
                    <Select value={"Sexo"} name="sexo" id="sexo" variant="outlined">
                        <MenuItem value={"FM"} name="fem">Feminino</MenuItem>
                        <MenuItem value={"MC"} name="masc">Masculino</MenuItem>
                        <MenuItem value={"TMC"} name="tmasc">Trans. Masculino</MenuItem>
                        <MenuItem value={"TFM"} name="tfem">Trans. Feminino</MenuItem>
                        <MenuItem value={"others"} name="outros">Outros</MenuItem>
                    </Select>
                    <TextField
                    id="date"
                    label="Data de nascimento"
                    required
                    autoComplete
                    variant="outlined"
                    />
                    <TextField
                    id="estado"
                    label="Estado"
                    required
                    autoComplete
                    variant="outlined"
                    />
                </FormControl>
            </section>
        </main>
        </>
    )
}