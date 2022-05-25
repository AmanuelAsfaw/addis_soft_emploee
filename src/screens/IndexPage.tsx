import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import { fetchEmployeeRequest } from "../actions/employee/actions"
import EmployeeTable from "../components/table"
import { getEmployeesSelector, getErrorSelector, getPendingSelector } from "../selectors/employee"

const Title = styled.h1`
        padding : 10px;
    `
const Wrapper = styled.div`
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`
const CreateLink = styled.a`
    text-decoration: none;
    border-radius: 15px;
    font-size: larger;
    background-color: hsl(216deg 100% 46%);
    color: hsl(240deg 7% 97%);
    padding : 10px;
`
const dataList = [
    {
        id : 1,
        name : 'Aman',
        birth_date : new Date(),
        gender : 'Male',
        salary : 800.0
    },
    {
        id : 2,
        name : 'Aman 2',
        birth_date : new Date(),
        gender : 'Female',
        salary : 8003.0
    }
]

const IndexPage = () => {
    
    const dispatch = useDispatch()
    const pending = useSelector(getPendingSelector)
    const employees = useSelector(getEmployeesSelector)
    const error = useSelector(getErrorSelector)

    useEffect(() => {
        dispatch(fetchEmployeeRequest())
    },[dispatch])

    return <Wrapper>
        <Title>Employee List</Title>
        <CreateLink href="/create">Create</CreateLink>
        <EmployeeTable data_list={employees} pending={pending} error={error}/>
    </Wrapper>
}

export default IndexPage