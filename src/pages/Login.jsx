import React from 'react'
import styled from 'styled-components'

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
    flex-direction: column;
`;
const Wrapper =styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title =styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Input =styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
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
const Link =styled.a`
    margin: px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

export const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='username'/>
                    <Input placeholder='password'/>
                    <Button>LOGIN</Button>
                    <Link>DONT REMEMBER YOUR PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
