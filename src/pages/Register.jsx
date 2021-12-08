import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container =styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('../../images/back2.png');
    background-repeat: no-repeat;
    /* background-size: 100% 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Form =styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Wrapper =styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({width:'75%'})}
`;
const Title =styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Input =styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Button =styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-top: 1em;
`;

export const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create An Acount</Title>
                <Form>
                    <Input placeholder='name'/>
                    <Input placeholder='last name'/>
                    <Input placeholder='email'/>
                    <Input placeholder='username'/>
                    <Input placeholder='password'/>
                    <Input placeholder='confirm password'/>
                <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}


export default Register
