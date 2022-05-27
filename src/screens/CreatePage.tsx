import styled from "styled-components"
import FormEmployee from "../components/create/Form"
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

const CreatePage = () => {
    

    return <Wrapper>
        <Title>Create Employee</Title>
        <CreateLink href="/">Back</CreateLink>
        <FormEmployee isUpdate={false} employee={null}/>
    </Wrapper>
}

export default CreatePage