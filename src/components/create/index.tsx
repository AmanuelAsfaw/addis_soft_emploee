import React from 'react';
import styled from 'styled-components';
import LabledDateInputField from './LabledDateInputField';
import LabledDropdownField from './LabledDropdownField';
import LabledInputField from './LabledInputField';

const CreateEmployee = () => {
    const Title = styled.h1`
        padding : 10px;
        text-align: center
    `

    const Wrapper = styled.div`
        padding : auto;;     
        align-items: center;
        justify-content: center;
        display: flex;   
        flex-direction: column;
        margin-top: 10px;
    `

    const dataList = [
        {
            label: 'Male',
            value: 'Male'
        },
        {
            label: 'Female',
            value: 'Female'
        }
    ]

    return <Wrapper>
        <LabledInputField label='Name' type_value='text'></LabledInputField>
        <LabledDateInputField label='Birth Date'></LabledDateInputField>
        <LabledDropdownField label='Gender' data_list={dataList}></LabledDropdownField>
        <LabledInputField label='Salary' type_value='number'></LabledInputField>
    </Wrapper>;
}

export default CreateEmployee;