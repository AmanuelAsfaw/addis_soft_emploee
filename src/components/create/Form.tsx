import { FormEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addEmployeeRequest, updateEmployeeRequest } from '../../actions/employee/actions';
import { IEmployee } from '../../actions/employee/type';
import { getAddEmployeeSuccesSelector, getPendingSelector } from '../../selectors/employee';
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
interface IFormProps {
    isUpdate : boolean;
    employee : IEmployee | null;
}

const FormEmployee = (props : IFormProps) => {
    const { isUpdate, employee } = props
    
    const [name, setName] = useState<string | null>(employee? employee.name: null)
    function change_format (date_str: string) {
        return new Date(date_str).toISOString().slice(0, 10);
    }
    const [birth_date, setBirthDate] = useState<string| Date | null>(employee? change_format(employee.birth_date): (null))
    const [gender, setGender] = useState<string | null>(employee? employee.gender: null)
    const [salary, setSalary] = useState<Number | null>(employee? employee.salary: null)
    
    const success = useSelector(getAddEmployeeSuccesSelector)
    const pending = useSelector(getPendingSelector)

    const dispatch = useDispatch()
    let history = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [afterCreate, setAfterCreate] = useState<boolean>(false)

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
            if (isUpdate){
                let id = employee? employee._id : '' 
                dispatch(updateEmployeeRequest({
                    _id : id,
                    name : name,
                    birth_date : birth_date.toString(),
                    gender : gender,
                    salary : salary
                }))
                setAfterCreate(true)
            }else{
                dispatch(addEmployeeRequest({
                    name,
                    birth_date : new Date(birth_date).toString(),
                    gender,
                    salary,
                    _id : '',
                }))
                setAfterCreate(true)
            }
        }
    }

    useEffect(() => {
        if(success && !pending && afterCreate){
            history('/')
        }
    }, [success, pending, afterCreate, history])

    useEffect(() => {
        if(employee){
            setName(employee.name)
            setBirthDate(employee.birth_date)
            setGender(employee.gender)
            setSalary(employee.salary)
        }
    }, [employee])

    return <Wrapper>
        <p>{errorMessage}</p>
        <form onSubmit={(e) => handleSubmit(e)}>
            <LabledInputField label='Name' type_value='text' handleOnChange={setName} value={employee? name: null}></LabledInputField>
            <LabledDateInputField label='Birth Date' handleOnChange={setBirthDate} value={employee? new Date(employee.birth_date).toISOString().slice(0, 10): null}></LabledDateInputField>
            <LabledDropdownField label='Gender' data_list={dataList} handleOnChange={setGender} value={employee? gender: null}></LabledDropdownField>
            <LabledInputField label='Salary' type_value='number' handleOnChange={setSalary} value={employee? salary: null}></LabledInputField>
            <SubmitBtn type='submit'>{ isUpdate ? 'Update' : 'Submit' }</SubmitBtn>
        </form>
    </Wrapper>;
}

export default FormEmployee;