import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
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

const CreateEmployee = () => {
    const [name, setName] = useState<string | null>(null)
    const [birth_date, setBirthDate] = useState<string| Date | null>(null)
    const [gender, setGender] = useState<string | null>(null)
    const [salary, setSalary] = useState<Number | null>(null)

    const dispatch = useDispatch()

    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const dataList = [
        {
            label: 'Male',
            value: 'Male'
        },
        {
            label: 'Female',
            value: 'Female'
        }
    ]

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if ( name === null || birth_date === null || gender === null || salary === null) {
            setErrorMessage('All information are required.')
        }
        else{
            // dispatch()
            console.log(name, birth_date, gender, salary)
        }
    }

    return <Wrapper>
        <p>{errorMessage}</p>
        <form onSubmit={(e) => handleSubmit(e)}>
            <LabledInputField label='Name' type_value='text' handleOnChange={setName}></LabledInputField>
            <LabledDateInputField label='Birth Date' handleOnChange={setBirthDate}></LabledDateInputField>
            <LabledDropdownField label='Gender' data_list={dataList} handleOnChange={setGender}></LabledDropdownField>
            <LabledInputField label='Salary' type_value='number' handleOnChange={setSalary}></LabledInputField>
            <SubmitBtn type='submit'>Submit</SubmitBtn>
        </form>
    </Wrapper>;
}

export default CreateEmployee;