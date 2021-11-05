import React from 'react';
import styled from 'styled-components';
import {BiSend} from 'react-icons/bi';

const Container = styled.div`
    height: 60vh;
    background-color: #f5e1e1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 5em;
    font-weight: 400;
    margin-bottom: 20px;

`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;


`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely update from your favo</Description>
            <InputContainer>
                <Input placeholder='Your email'/>
                <Button>
                    <BiSend/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
