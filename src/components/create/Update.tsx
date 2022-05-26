import { FormEvent, useEffect, useState } from "react"
import styled from 'styled-components';

import LabledDateInputField from './LabledDateInputField';
import LabledDropdownField from './LabledDropdownField';
import LabledInputField from './LabledInputField';

const SubmitBtn = styled.button`
    padding : 10px;
    text-align: center;
    background-color: hsl(206deg 100% 50% / 82%);
    color: white;
    border-color: hsl(206deg 100% 50% / 82%);
    min-width: 300px;
    border-radius: 8px;
    font-size: x-large;
    margin-top: 10px;
`

const Wrapper = styled.div`
    padding : auto;;     
    align-items: center;
    justify-content: center;
    display: flex;   
    flex-direction: column;
    margin-top: 10px;
`

const UpdateEmployee = ({id}:{id: string}) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


    }
    useEffect(() => {
        if(id !== '' || id !== null){
            
        }
    }, [id])

    return <Wrapper>
        <p>{errorMessage}</p>
        <form onSubmit={(e) => handleSubmit(e)}>
            {/* <LabledInputField label='Name' type_value='text' handleOnChange={setName}></LabledInputField>
            <LabledDateInputField label='Birth Date' handleOnChange={setBirthDate}></LabledDateInputField>
            <LabledDropdownField label='Gender' data_list={dataList} handleOnChange={setGender}></LabledDropdownField>
            <LabledInputField label='Salary' type_value='number' handleOnChange={setSalary}></LabledInputField> */}
            <SubmitBtn type='submit'>Submit</SubmitBtn>
        </form>
        </Wrapper>
}

export default UpdateEmployee