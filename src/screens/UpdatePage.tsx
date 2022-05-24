import styled from "styled-components"
import CreateEmployee from "../components/create"

const UpdatePage = () => {
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

    return <Wrapper>
        <Title>Update Employee</Title>
        <CreateLink href="/">Back</CreateLink>
        <CreateEmployee/>
    </Wrapper>
}

export default UpdatePage