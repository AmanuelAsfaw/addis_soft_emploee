import styled from "styled-components"

interface IinputProps {
    type_value : string,
    label : string,
    handleOnChange : Function
}

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
`

const LabledInputField = (props: IinputProps) => {
    const { label, type_value, handleOnChange } = props
    
    return <Wrapper>
        <Label>{label}</Label>
        <InputField type={type_value} required onChange={(e)=> handleOnChange(e.target.value)}></InputField>
    </Wrapper>
}

export default LabledInputField