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
