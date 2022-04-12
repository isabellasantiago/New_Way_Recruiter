import Autosuggest from "react-autosuggest";
import TagsInput from "react-tagsinput";
import { Container } from  "./style";

export const InputSkills = ({
  skillsList,
  suggestions,
  setSkills,
  skills,
  title,
}) => {
  const handleChange = (tags) => {
    setSkills(tags);
  };

  const autoComplete = ({ addTag, ...props }) => {
    //calculando as sugestoes "zerando" elas, deixando-as iguais
    const inputValue = props.value.trim().toLowerCase();

    const inputLength = inputValue.length;
    suggestions = skillsList.filter(
      (skill) => skill.name.toLowerCase().slice(0, inputLength) === inputValue
    );

    //calcula o valor do input pra cada sugestao dada
    const getSuggestionValue = (suggestion) => suggestion.name;

    //estilo do span vem aqui
    const renderSuggestion = (suggestion) => <span>{suggestion.name}</span>;

    const onChange = (e, { newValue, method }) => {
      if (method === "enter") {
        e.preventDefault();
      } else {
        props.onChange(e);
      }
    };

    const inputProps = {
      ...props,
      placeholder: "Aperte enter para adicionar uma skill",
      onChange
    };
    return (
      <Autosuggest
        ref={props.ref}
        suggestions={suggestions}
        shouldRenderSuggestions={(value) => value && value.trim().length > 0}
        getSuggestionValue={getSuggestionValue}
        onSuggestionsFetchRequested={() => {}}
        onSuggestionsClearRequested={() => {}}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={(e, { suggestion }) => {
          addTag(suggestion.name);
        }}
      />
    );
  };

  return (
    <Container>
      <h2>{title}</h2>
      <TagsInput
        renderInput={autoComplete}
        value={skills}
        onChange={handleChange}
      />
    </Container>
  );
};
