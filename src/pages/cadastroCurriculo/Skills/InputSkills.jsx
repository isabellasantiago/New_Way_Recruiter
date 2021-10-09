import {useState} from 'react';
import {LabelInput, InputSkill, TitleInput, SkillTags} from './style.js';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export function InputSkills(props){
    const {label, placeholder} = props;
    const [tags, setTags] = useState(["NodeJS", "ReactJs"]);
    const [isDuplicated, setIsDuplicated] = useState(false)


    const deleteTags = (indexToRemove) => {
        setTags(tags.filter((index) => index !== indexToRemove));
    }

    const addTags = (e) => {
        e.preventDefault();
        
        if(e.target.value !== ""){
            const skillDuplicate = tags.find(tag => tag.toLowerCase() === e.target.value.toLowerCase())
            if(skillDuplicate){
                setIsDuplicated(true);
            }
            setTags([...tags, e.target.value])
            e.target.value = "";

        }
    }

    return(
        <LabelInput>
            <TitleInput>{label}</TitleInput>
            <SkillTags className="skill">
                    <ul type="none">
                     {tags.map((tag, index) =>{
                            return (
                                <li key={index} id="item">
                                    {tag}
                                    <button onClick={() => deleteTags(index)}>
                                        <HighlightOffIcon />
                                    </button>
                                </li>
                                
                            )
                        })}
                    </ul>
                    <InputSkill type="text" placeholder={placeholder} onKeyUp={e => e.key === "Enter" ? addTags(e) : null}/>
                    {isDuplicated && (<span id="error">Esta habilidade já foi adicionada!</span>)}
            </SkillTags>
            <span>Para adicionar uma tag pressione Enter</span>

        </LabelInput>
        )
}