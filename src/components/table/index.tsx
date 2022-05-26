import { useDispatch } from "react-redux"
import styled from "styled-components"
import { deleteEmployeeRequest } from "../../actions/employee/actions"
import { IEmployee } from "../../actions/employee/type"

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

interface IProps {
    data_list: IEmployee[] | [];
    pending : boolean;
    error : any;
}

const EmployeeTable = ( props: IProps) => {
    const { data_list, pending, error } = props
    const dispatched = useDispatch()
    
    const stringToDate = (str_data: string): Date => {
        return new Date(str_data)
    }

    const handleRemove = (id: string, name : string) => {
        if (id || id !== ''){
            var isConfirm = window.confirm(`Are you sure to remove ${name}?`)
            if(isConfirm){
                dispatched(deleteEmployeeRequest(id))
            }
        }
    }

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
            {pending? (
                <Paragraph>Loading...</Paragraph>
            ) : error? (
                <Paragraph>Error... {error}</Paragraph>
            ):(
                data_list.map((data)=> (
                    <BodyRow key={'tablerow'+data._id}>
                        <BodyRowCell>{data.name}</BodyRowCell>
                        <BodyRowCell>{ stringToDate(data.birth_date).toDateString()}</BodyRowCell>
                        <BodyRowCell>{data.gender}</BodyRowCell>
                        <BodyRowCell>{data.salary.toString()}</BodyRowCell>
                        <BodyRowCell>
                            <EditBtn href={"/update/"+data._id}>Edit</EditBtn>    
                            <DeleteBtn onClick={() => handleRemove(data._id.toString(), data.name)}>Delete</DeleteBtn>    
                        </BodyRowCell>
                    </BodyRow>
                ))
            )}
            {(!data_list.length && !error && !pending) && (
                <tr><Paragraph>Employee Not Found</Paragraph></tr>
                
            )}
        </tbody>
        
    </Table>
}

export default EmployeeTable
