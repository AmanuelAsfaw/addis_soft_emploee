import axios from "axios";
import { IEmployee } from "../actions/employee/type";

const IP_address = 'https://obscure-mesa-34381.herokuapp.com/employees/'

export const getEmployees = () =>
    axios.get<IEmployee[]>(IP_address);

export const addEmployee = (employee:IEmployee) => 
  axios.post<IEmployee>(IP_address, {
    name : employee.name,
    salary : employee.salary,
    gender : employee.gender,
    birth_date : employee.birth_date
  })

export const getEmployeeById = (id : string) =>
    axios.get<any>(`${IP_address}${id}`)

export const updateEmployee = (employee : IEmployee) =>
    axios.put<any>(`${IP_address}${employee._id}`,{
      _id : employee._id,
      name : employee.name,
      salary : employee.salary,
      gender : employee.gender,
      birth_date : employee.birth_date
    })

export const removeEmployeeById = (id : string) =>
    axios.delete<any>(`${IP_address}${id}`)
