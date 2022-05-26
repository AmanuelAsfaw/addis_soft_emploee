import styled from "styled-components"
const Wrapper = styled.div`
    margin: 10px;
    padding: 10px;
    border: 1px solid #aba8a8;
    min-width: 275px;
    border-radius: 11px;
    text-align: -webkit-auto;
`
const Label = styled.label`
    font-size: larger;
`

const InputField = styled.input`
    margin-left: 1rem;
    padding : 8px;
    width: 49%;
`
interface IDateFieldProps {
    label : string;
    handleOnChange : Function;
    value : string | Number | null;
}

const LabledDateInputField = (props: IDateFieldProps) => {
    const { label, handleOnChange, value } = props

    return <Wrapper>
        <Label>{label}</Label>
        <InputField type='date' required onChange={(event) => handleOnChange(event.target.value)} 
            defaultValue={value? value.toString(): ''}></InputField>
    </Wrapper>
}

export default LabledDateInputField