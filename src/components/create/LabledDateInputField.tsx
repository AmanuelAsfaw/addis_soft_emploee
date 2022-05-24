import styled from "styled-components"

const LabledDateInputField = ({label}: { label : string}) => {
    const Wrapper = styled.div`
        margin: 10px;
        padding: 10px;
        border: 1px solid #aba8a8;
        min-width: 275px;
        border-radius: 11px;
    `
    const Label = styled.label`
        font-size: larger;
    `

    const InputField = styled.input`
        margin-left: 1rem;
        padding : 8px;
    `

    return <Wrapper>
        <Label>{label}</Label>
        <InputField type='date'></InputField>
    </Wrapper>
}

export default LabledDateInputField