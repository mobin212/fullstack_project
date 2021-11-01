import React from 'react'
import styled from 'styled-components'
import {BsFillCartFill} from 'react-icons/bs'
import {AiOutlineSearch,AiFillHeart} from 'react-icons/ai'

const Container = styled.div`
    flex: 1;
    margin: 5px;
`;
const Circle = styled.div``;
const Image = styled.img`

`;
const Info = styled.div``;
const Icon = styled.div``;

const Product = ({item}) => {
    console.log(item)
    return (
        <Container>
            <Circle />
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <BsFillCartFill/>
                </Icon>
                <Icon>
                    <AiOutlineSearch/>
                </Icon>
                <Icon>
                    <AiFillHeart/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
