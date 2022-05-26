import { useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { getEmployeeByIdRequest } from "../actions/employee/actions"
import { IEmployee } from "../actions/employee/type"
import FormEmployee from "../components/create/Form"
import { getEmployeeByIdSelector } from "../selectors/employee"

const Title = styled.h1`
    padding : 10px;
`
const Wrapper = styled.div`
    text-align: center;
`
const CreateLink = styled.a`
    text-decoration: none;
    border-radius: 15px;
    font-size: larger;
    background-color: #929eaa;
    color: hsl(240deg 7% 97%);
    padding : 10px;
`
const FormWrapper = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
`
const UpdatePage = () => {

    let { id } = useParams()
    const dispatch = useDispatch()
    const employeeData = useSelector(getEmployeeByIdSelector)
    useEffect(() => {
        if(id && id !== ''){
            console.log('try to get '+ id);
            
            dispatch(getEmployeeByIdRequest(id))
        }
    }, [id])

    return <Wrapper>
        <Title>Update Employee</Title>
        <CreateLink href="/">Back</CreateLink>
        <FormEmployee isUpdate={true} employee={employeeData}/>
    </Wrapper>
}

export default UpdatePage