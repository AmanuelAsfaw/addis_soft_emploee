import styled from "styled-components"

interface Employee {
    id : string | Number,
    name : string,
    birth_date : Date,
    gender : string,
    salary : Number
}

const EmployeeTable = ({ data_list }: { data_list : Employee[]} ) => {

    const Table = styled.table`
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 1.5em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    `

    const TableHeaderRow = styled.tr`
        background-color: #009879;
        color: #ffffff;
        text-align: left;
    `
    const HeaderRowCell = styled.th`
        padding: 12px 15px;
    `
    const BodyRow = styled.tr`
        border-bottom: 1px solid #dddddd;
        padding: 12px 15px;
    `
    const BodyRowCell = styled.td`
        padding: 12px 15px;
    `
    const Paragraph = styled.p`
        text-align: center;
    `
    const EditBtn = styled.a`
        color: white;
        background-color: hsl(216deg 100% 46%);
        border-color: hsl(216deg 100% 46%);
        font-size: small;
        padding: 3px;
        text-decoration: none;
    `
    const DeleteBtn = styled.button`
        margin-left: 5px;
        background-color: red;
        border-color: red;
        color: white;
    `

    return <Table>
        <thead>
            <TableHeaderRow>
                <HeaderRowCell>Name</HeaderRowCell>
                <HeaderRowCell>Birth Date</HeaderRowCell>
                <HeaderRowCell>Gender</HeaderRowCell>
                <HeaderRowCell>Salary</HeaderRowCell>
                <HeaderRowCell>Action</HeaderRowCell>
            </TableHeaderRow>
        </thead>
        <tbody>
            { data_list && data_list.map((data)=> (
                <BodyRow>
                    <BodyRowCell>{data.name}</BodyRowCell>
                    <BodyRowCell>{data.birth_date.toDateString()}</BodyRowCell>
                    <BodyRowCell>{data.gender}</BodyRowCell>
                    <BodyRowCell>{data.salary.toString()}</BodyRowCell>
                    <BodyRowCell>
                        <EditBtn href="/update">Edit</EditBtn>    
                        <DeleteBtn>Delete</DeleteBtn>    
                    </BodyRowCell>
                </BodyRow>
            ))}
            {!data_list.length && (
                <Paragraph>Employee Not Found</Paragraph>
            )}
        </tbody>
        
    </Table>
}

export default EmployeeTable
