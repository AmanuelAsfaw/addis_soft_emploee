import styled from "styled-components"
import CreateEmployee from "../components/create"
import EmployeeTable from "../components/table"

const IndexPage = () => {
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

    return <Wrapper>
        <Title>Employee List</Title>
        <CreateLink href="/create">Create</CreateLink>
        <EmployeeTable data_list={dataList}/>
    </Wrapper>
}

export default IndexPage