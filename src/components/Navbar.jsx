import React from 'react';
import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai'

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
padding:10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Left = styled.div`
    flex:1;display:flex;align-items:center
`
const Language = styled.span`
    font-size:14px;cursor: pointer;
`
const SearchContainer = styled.div`
    border:.5px solid lightgray;display:flex;align-items:center;padding:5px;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex:1
`
const Right = styled.div`
    flex:1
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>   
                        <Input/>
                        <AiOutlineSearch/>
                    </SearchContainer>
                </Left>
                <Center>center</Center>
                <Right>right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar