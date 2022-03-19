import {useState, useEffect} from 'react';
import {LabelInput, TitleInput, SkillTags} from './style.js';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export function InputSkills(props){
    const {label, placeholder} = props;
    const [tags, setTags] = useState([]);
    

    const deleteTags = (index) => {
        const newTags = [...tags]
        newTags.splice(index, 1)
        setTags(newTags);
    }

    const addTags = (e) => {
        e.preventDefault();

        if(e.target.value !== ""){
            setTags([...tags, e.target.value])
            e.target.value = "";

        }
    }

    return(
        <LabelInput>
            <TitleInput>{label}</TitleInput>
            <SkillTags className="skill">
                {tags && ( <ul type="none">
                     {tags?.map((tag, index) =>{
                            return (
                                <li key={index} id="item">
                                    <span>{tag}</span>
                                    <button onClick={() => deleteTags(index)}>
                                        <HighlightOffIcon
                                        fontSize="small"
                                        cursor="pointer"
                                        />
                                    </button>
                                </li>
                            )
                        })}
                    </ul> )}
                    <input type="text" placeholder={placeholder}  onKeyUp={e => e.key === "Enter" && ( addTags(e))} />
                    
            </SkillTags>
            
            <span>Para adicionar uma habilidade pressione Enter</span>

        </LabelInput>
        )
}