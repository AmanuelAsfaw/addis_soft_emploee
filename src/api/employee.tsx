import axios from "axios";
import { IEmployee } from "../actions/employee/type";

export const getEmployees = () =>
    axios.get<IEmployee[]>("http://localhost:3000/employees");

export const addEmployee = (employee:IEmployee) => 
  axios.post<IEmployee>('http://localhost:3000/employees', {
    name : employee.name,
    salary : employee.salary,
    gender : employee.gender,
    birth_date : employee.birth_date
  })

export const getEmployeeById = (id : string) =>
    axios.get<any>(`http://localhost:3000/employees/${id}`)

export const updateEmployee = (employee : IEmployee) =>
    axios.put<any>(`http://localhost:3000/employees/${employee._id}`,{
      _id : employee._id,
      name : employee.name,
      salary : employee.salary,
      gender : employee.gender,
      birth_date : employee.birth_date
    })
