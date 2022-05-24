import styled from "styled-components"

interface ObjData {
    value: string,
    label: string
}

interface IDropdownProps {
    data_list : ObjData[],
    label : string
}

const LabledDropdownField = (props: IDropdownProps) => {
    const { data_list, label } = props

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
    const InputField = styled.select`
        margin-left: 1rem;
        padding : 8px;
    `

    return <Wrapper>
        <Label>{label}</Label>
        <InputField>
            { data_list &&  data_list.map((data) => (
                <option value={data.value}>{data.label}</option>
            ))
            }
        </InputField>
    </Wrapper>
}

export default LabledDropdownField