import styled from "styled-components"

interface ObjData {
    value: string,
    label: string
}

interface IDropdownProps {
    data_list : ObjData[],
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
const InputField = styled.select`
    margin-left: 1rem;
    padding : 8px;
    width: 65%;
`

const LabledDropdownField = (props: IDropdownProps) => {
    const { data_list, label, handleOnChange } = props

    return <Wrapper>
        <Label>{label}</Label>
        <InputField required onChange={(e) => handleOnChange(e.target.value)}>
            <option key='optiondefault'  disabled selected value=''>Select {label}</option>
            { data_list &&  data_list.map((data) => (
                <option key={'option'+data.value} value={data.value}>{data.label}</option>
            ))
            }
        </InputField>
    </Wrapper>
}

export default LabledDropdownField