import { useState, useEffect } from 'react';
import { LabelInput, TitleInput, SkillTags } from './style.js';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export function InputSkills(props) {
    const { label, placeholder, setSkills } = props;
    const [tags, setTags] = useState([]);


    const deleteTags = (indexToRemove) => {
        setTags(tags.filter((index) => index !== indexToRemove));
    }

const addTags = (event) => {
    if (event.target.value !== "") {
        setTags([...tags, event.target.value])
        setSkills([...tags, event.target.value])
        event.target.value = "";
    }
}

// const saveSkills = (skills) => {
//     localStorage.setItem("tags", JSON.stringify(skills))
// }
// const loadedSkills = () => {
//     const loadedSkills = JSON.parse(localStorage.getItem("tags"))
//     return loadedSkills
// }

// useEffect(() => {
//     if(tags){
//         saveSkills(tags)
//     }
// }, [tags])

// useEffect(() => {
//     const loadSkills = loadedSkills();
//     setTags(loadSkills);
//     console.log(loadSkills);
// },[])

return (
    <LabelInput>
        <TitleInput>{label}</TitleInput>
        <SkillTags className="skill">
            {tags && (<ul type="none">
                {tags?.map((tag, index) => {
                    return (
                        <li key={tag.id} id="item">
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
            </ul>)}
            <input type="text" placeholder={placeholder} onKeyUp={e => (e.key === "Enter" ? addTags(e) : null)} />

        </SkillTags>

        <span>Para adicionar uma habilidade pressione Enter</span>

    </LabelInput>
)
}