import DeleteIcon from '@material-ui/icons/Delete';
import {Area, AreaHeader, AreaItem, AreaData} from './style'

export function ListaProfessionalExpierence(props){
    const {experience, deleteExp} = props
    
    return(
        <Area>
        <AreaHeader>
        <h1>Experiências profissionais</h1>
        </AreaHeader>
        {experience.map((exp, index) => {
                    
            return(
                <AreaItem key={index}>
                    <AreaData>
                    <h4>Empresa:</h4><span>{exp.nomeEmpresa}</span>
                    <h4>Cargo:</h4><span>{exp.cargo}</span>
                    <h4>Nivel:</h4><span>{exp.nivelOperacional}</span>
                    <h4>Data inicio</h4><span>{exp.dataInicioEmprego}</span>
                    <h4>Data final:</h4><span>{exp.dataFinalEmprego}</span>
                    <h4>Descrição:</h4><div id="descricao">{exp.descricaoFuncoes}</div>
                    </AreaData>
                    <AreaData><button onClick={() => deleteExp(index)}><DeleteIcon/></button></AreaData>
                </AreaItem>
            )
        })}
        </Area>
    )
}